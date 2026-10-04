import { readFileSync, writeFileSync, readdirSync, mkdirSync, rmSync, existsSync, copyFileSync } from 'node:fs';
import { join, extname, basename } from 'node:path';
import { homedir } from 'node:os';
import { parse as parseYaml, stringify as stringifyYaml } from 'yaml';
import GithubSlugger from 'github-slugger';

const VAULT = process.env.VAULT ?? join(homedir(), 'Documents/notes');
const NOTES = join(VAULT, '00 - Notes');
const MEDIA = join(VAULT, '20 - Source Materials');
const OUT = new URL('../src/content/uni/', import.meta.url).pathname;
const PUBLIC_FIG = new URL('../public/uni/fig/', import.meta.url).pathname;

const MATERIE = [
  { tag: 'analisi-1', slug: 'analisi-1', hub: 'Analisi Matematica 1', prefix: 'Analisi 1', short: 'Analisi 1', cfu: 12 },
  { tag: 'algebra-lineare', slug: 'gal', hub: 'Geometria e Algebra Lineare', prefix: 'GAL', short: 'GAL', cfu: 6 },
  { tag: 'programmazione-1', slug: 'prog-1', hub: 'Programmazione 1', prefix: 'Prog 1', short: 'Prog 1', cfu: 12 },
  { tag: 'fisica', slug: 'fisica', hub: 'Fisica', prefix: 'Fisica', short: 'Fisica', cfu: 12 },
];

const FIG_COLORS = {
  '#d8cfbf': 'var(--fig-ink)',
  '#877c6f': 'var(--fig-axis)',
  '#d0402e': 'var(--fig-accent)',
  '#8b1a10': 'var(--fig-accent-deep)',
  '#7fa3b5': 'var(--fig-steel)',
  '#574f47': 'var(--fig-faint)',
  '#0d0b09': 'var(--fig-paper)',
};

function readNote(file) {
  const raw = readFileSync(join(NOTES, file), 'utf8');
  const m = raw.match(/^---\n([\s\S]*?)\n---\n?/);
  return { fm: m ? parseYaml(m[1]) ?? {} : {}, body: m ? raw.slice(m[0].length) : raw };
}

function slugify(s) {
  return s
    .normalize('NFD')
    .replace(/[\u0300-\u036f]/g, '')
    .toLowerCase()
    .replace(/[^a-z0-9]+/g, '-')
    .replace(/^-|-$/g, '');
}

function headingId(text) {
  const plain = text
    .replace(/\[\[([^\]|]+)\|([^\]]+)\]\]/g, '$2')
    .replace(/\[\[([^\]]+)\]\]/g, '$1')
    .replace(/[*_`]/g, '');
  return new GithubSlugger().slug(plain);
}

const files = readdirSync(NOTES).filter((f) => f.endsWith('.md'));
const notes = new Map();
const materie = [];

for (const materia of MATERIE) {
  const hubFile = `${materia.hub}.md`;
  const members = files.filter((f) => {
    if (!f.startsWith(`${materia.prefix} - `)) return false;
    const { fm } = readNote(f);
    return (fm.tags ?? []).includes(`uni/${materia.tag}`) && fm.tipo !== 'hub';
  });
  if (members.length === 0 || !files.includes(hubFile)) continue;
  materie.push(materia);
  const hub = readNote(hubFile);
  notes.set(materia.hub, { file: hubFile, materia, hub: true, url: `/uni/${materia.slug}/`, ...hub });
  for (const alias of hub.fm.aliases ?? []) notes.set(alias, notes.get(materia.hub));
  for (const f of members) {
    const name = f.slice(0, -3);
    const slug = slugify(name.slice(materia.prefix.length + 3));
    notes.set(name, { file: f, materia, hub: false, slug, url: `/uni/${materia.slug}/${slug}/`, ...readNote(f) });
  }
}

const figures = new Map();

function inlineSvg(name) {
  const path = join(MEDIA, name);
  if (!existsSync(path)) return null;
  const idPrefix = `f${figures.size}-`;
  let svg = readFileSync(path, 'utf8')
    .replace(/<\?xml[^>]*>/, '')
    .replace(/<!DOCTYPE[^>]*>/, '')
    .replace(/<metadata>[\s\S]*?<\/metadata>/, '')
    .replace(/\s+/g, ' ')
    .trim();
  for (const [hex, v] of Object.entries(FIG_COLORS)) svg = svg.replace(new RegExp(hex, 'gi'), v);
  svg = svg
    .replace(/\bid="([^"]+)"/g, `id="${idPrefix}$1"`)
    .replace(/url\(#([^)]+)\)/g, `url(#${idPrefix}$1)`)
    .replace(/href="#([^"]+)"/g, `href="#${idPrefix}$1"`)
    .replace(/<svg /, '<svg role="img" aria-label="' + escapeAttr(name.replace(/\.svg$/, '').replace(/^[^-]+ - /, '')) + '" ');
  const unmapped = [...svg.matchAll(/#[0-9a-f]{6}\b/gi)].map((x) => x[0]);
  if (unmapped.length) console.warn(`  ${name}: colori non mappati ${[...new Set(unmapped)].join(' ')}`);
  figures.set(name, true);
  return svg;
}

function escapeAttr(s) {
  return s.replace(/&/g, '&amp;').replace(/"/g, '&quot;').replace(/</g, '&lt;');
}

function sourceLabel(target, alias) {
  if (alias) return alias;
  return target.replace(/\.pdf$/i, '').replace(/^(Analisi 1|GAL|Prog 1|Fisica) - /, '');
}

function transformInline(line, self) {
  line = line.replace(/!\[\[([^\]]+)\]\]/g, (_, inner) => {
    const [target] = inner.split('|');
    const file = target.split('#')[0].trim();
    const ext = extname(file).toLowerCase();
    if (ext === '.svg') {
      const svg = inlineSvg(file);
      return svg ? `<figure class="fig">${svg}</figure>` : '';
    }
    if (['.png', '.jpg', '.jpeg', '.webp'].includes(ext)) {
      const src = join(MEDIA, file);
      if (!existsSync(src)) return '';
      const out = slugify(basename(file, ext)) + ext;
      mkdirSync(PUBLIC_FIG, { recursive: true });
      copyFileSync(src, join(PUBLIC_FIG, out));
      return `<figure class="fig fig-raster"><img src="/uni/fig/${out}" alt="${escapeAttr(basename(file, ext))}" loading="lazy"></figure>`;
    }
    return '';
  });

  line = line.replace(/\[\[([^\]]+?)\]\]/g, (_, inner) => {
    const parts = inner.split(/\\?\|/);
    const target = parts[0].trim();
    const alias = parts[1]?.trim();
    const [page, anchor] = target.split('#');
    if (/\.pdf$/i.test(page)) return `<span class="src">${sourceLabel(page, alias)}</span>`;
    if (!page) return `[${alias ?? anchor}](#${headingId(anchor)})`;
    const hit = notes.get(page.trim());
    const shown = page.trim().replace(/^(Analisi 1|GAL|Prog 1|Fisica) - /, '');
    const text = alias ?? (anchor ? `${shown} › ${anchor}` : shown);
    if (!hit) return text;
    const href = hit.url + (anchor ? `#${headingId(anchor)}` : '');
    return `[${text}](${href})`;
  });

  return line
    .replace(/==([^=\n]+)==/g, '<mark>$1</mark>')
    .replace(/(^|[\s(>])"(?=\$)/g, '$1“');
}

function transformBody(body, note) {
  const lines = body.split('\n');
  const out = [];
  let fence = null;
  let math = false;
  let droppedTitle = false;
  for (let i = 0; i < lines.length; i++) {
    let line = lines[i];
    const f = line.match(/^\s*(?:>\s*)*(```+|~~~+)/);
    if (fence) {
      out.push(line);
      if (f && f[1].startsWith(fence)) fence = null;
      continue;
    }
    if (f) {
      fence = f[1];
      out.push(line);
      continue;
    }
    const oneLine = line.match(/^(\s*(?:>\s*)*)\$\$(.+)\$\$\s*$/);
    if (oneLine && !math) {
      const p = oneLine[1];
      out.push(`${p}$$`, `${p}${oneLine[2].trim()}`, `${p}$$`);
      continue;
    }
    if (/^\s*(?:>\s*)*\$\$\s*$/.test(line)) math = !math;
    if (math) {
      out.push(line);
      continue;
    }
    if (!droppedTitle && /^# /.test(line)) {
      droppedTitle = true;
      continue;
    }
    if (/~\//.test(line) && /^\s*[-*] /.test(line)) continue;
    if (note.hub) line = line.replace(/^Parte di \[\[Università\]\]\.?\s*/, '');
    out.push(transformInline(line, note));
  }
  return questions(out.join('\n'));
}

function questions(md) {
  return md.replace(/^\*\*Q:\*\*\s*(.+)\n\*\*A:\*\*[ \t]*(.*)$/gm, (_, q, a) =>
    a.trim() ? `> [!question]- ${q}\n> ${a.trim()}\n` : `- ${q}`,
  );
}

const MESI = ['gen', 'feb', 'mar', 'apr', 'mag', 'giu', 'lug', 'ago', 'set', 'ott', 'nov', 'dic'];

function normDate(cell) {
  const c = cell.replace(/[*_]/g, '').trim();
  let m = c.match(/(\d{4})-(\d{2})-(\d{2})/);
  if (m) return `${+m[3]} ${MESI[+m[2] - 1]}`;
  m = c.match(/^(\d{1,2})\/(\d{1,2})$/);
  if (m) return `${+m[1]} ${MESI[+m[2] - 1]}`;
  m = c.match(/^(\d{1,2}) ([a-z]{3})/i);
  if (m) return `${+m[1]} ${m[2].toLowerCase()}`;
  m = c.match(/^([a-z]{3})$/i);
  if (m && MESI.includes(m[1].toLowerCase())) return `${m[1].toLowerCase()}, giorno?`;
  return null;
}

function lessonRuns(hubBody) {
  const runs = new Map();
  const lines = hubBody.split('\n');
  const start = lines.findIndex((l) => /^## (Programma svolto|Lezioni)/.test(l));
  if (start < 0) return runs;
  let header = null;
  let order = 0;
  for (const line of lines.slice(start + 1)) {
    if (/^## /.test(line)) break;
    if (!line.startsWith('|')) continue;
    const cells = line.split(/(?<!\\)\|/).slice(1, -1).map((c) => c.trim());
    if (!header) {
      header = cells.map((c) => c.toLowerCase());
      continue;
    }
    if (cells.every((c) => /^[-: ]+$/.test(c))) continue;
    const di = header.findIndex((h) => /data|entro/.test(h));
    const ni = header.findIndex((h) => /^nota/.test(h));
    if (ni < 0) continue;
    const date = di >= 0 ? normDate(cells[di] ?? '') : null;
    for (const m of (cells[ni] ?? '').matchAll(/\[\[([^\]|\\]+)/g)) {
      const name = m[1].trim();
      if (!runs.has(name)) runs.set(name, { order: order++, dates: [] });
      if (date && !runs.get(name).dates.includes(date)) runs.get(name).dates.push(date);
    }
  }
  return runs;
}

rmSync(OUT, { recursive: true, force: true });
rmSync(PUBLIC_FIG, { recursive: true, force: true });

const runs = new Map();
for (const materia of materie) {
  for (const [name, run] of lessonRuns(notes.get(materia.hub).body)) runs.set(name, run);
}

const seen = new Set();
let count = 0;
for (const [, note] of notes) {
  if (seen.has(note.file)) continue;
  seen.add(note.file);
  const name = note.file.slice(0, -3);
  const title = note.hub ? note.materia.hub : note.fm.argomento ?? name.slice(note.materia.prefix.length + 3);
  const fm = {
    title,
    materia: note.materia.slug,
    materiaNome: note.materia.hub,
    materiaBreve: note.materia.short,
    cfu: note.materia.cfu,
    hub: note.hub,
    tipo: note.fm.tipo ?? 'teoria',
    stato: note.fm.stato ? String(note.fm.stato).replace(/^\S+\s+/, '') : null,
    data: note.fm.data ? String(note.fm.data) : null,
    lezioni: runs.get(name)?.dates ?? [],
    ordine: runs.get(name)?.order ?? 999,
  };
  const dir = join(OUT, note.materia.slug);
  mkdirSync(dir, { recursive: true });
  const md = `---\n${stringifyYaml(fm)}---\n\n${transformBody(note.body, note).trim()}\n`;
  writeFileSync(join(dir, `${note.hub ? 'index' : note.slug}.md`), md);
  count++;
}

console.log(`${count} note in ${materie.length} materie, ${figures.size} figure SVG`);
