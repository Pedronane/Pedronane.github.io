import { cpSync, rmSync, mkdirSync, copyFileSync, existsSync } from 'node:fs';
import { join } from 'node:path';
import { homedir } from 'node:os';

const SRC = process.env.CHITARRA ?? join(homedir(), 'Projects/chitarra');
const OUT = new URL('../public/chitarra/', import.meta.url).pathname;
const DIRS = ['lessons', 'reference', 'assets'];

if (!existsSync(join(SRC, 'percorso.html'))) {
  console.error(`percorso.html non trovato in ${SRC}`);
  process.exit(1);
}

rmSync(OUT, { recursive: true, force: true });
mkdirSync(OUT, { recursive: true });
for (const dir of DIRS) cpSync(join(SRC, dir), join(OUT, dir), { recursive: true });
copyFileSync(join(SRC, 'percorso.html'), join(OUT, 'percorso.html'));
copyFileSync(join(SRC, 'percorso.html'), join(OUT, 'index.html'));
console.log(`chitarra: ${DIRS.join(', ')} e percorso -> public/chitarra/`);
