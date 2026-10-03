import GithubSlugger from 'github-slugger';

function mathSource(node) {
  if (node.type === 'text') return node.value;
  if (node.type !== 'element') return '';
  const cls = node.properties?.className ?? [];
  const inner = (node.children ?? []).map(mathSource).join('');
  if (cls.includes('math-inline') || cls.includes('language-math')) return `$${inner}$`;
  return inner;
}

export default function rehypeUniSections() {
  return (tree, file) => {
    if (!String(file.path ?? file.history?.[0] ?? '').includes('/content/uni/')) return;
    const slugger = new GithubSlugger();
    const toc = [];
    let h2 = 0;
    let h3 = 0;
    for (const node of tree.children) {
      if (node.type !== 'element' || !/^h[2-4]$/.test(node.tagName)) continue;
      const text = mathSource(node).trim();
      const id = slugger.slug(text);
      node.properties.id = id;
      if (node.tagName === 'h4') continue;
      if (node.tagName === 'h2') {
        h2++;
        h3 = 0;
      } else {
        h3++;
      }
      const num = node.tagName === 'h2' ? `${h2}` : `${h2}.${h3}`;
      toc.push({ depth: node.tagName === 'h2' ? 2 : 3, id, num, text });
      node.properties.dataNum = num;
      node.children.unshift({
        type: 'element',
        tagName: 'a',
        properties: { className: ['sec-num'], href: `#${id}`, ariaLabel: `Copia il link alla sezione ${num}` },
        children: [{ type: 'text', value: num }],
      });
    }
    const mark = (node) => {
      for (const child of node.children ?? []) {
        if (child.type !== 'element') continue;
        if (child.tagName === 'p') {
          const first = child.children?.[0];
          if (first?.type === 'element' && first.tagName === 'strong') {
            first.properties.className = [...(first.properties.className ?? []), 'def'];
          }
        } else if (!['pre', 'code', 'table'].includes(child.tagName)) {
          mark(child);
        }
      }
    };
    mark(tree);
    const firstText = (node) => {
      const first = node.children?.find((c) => c.type !== 'text' || c.value.trim() !== '');
      if (!first) return null;
      if (first.type === 'text') return first;
      if (first.type === 'element' && first.tagName === 'p') return firstText(first);
      return null;
    };
    const options = (node) => {
      for (const child of node.children ?? []) {
        if (child.type !== 'element') continue;
        if (child.tagName === 'ul') {
          const items = child.children.filter((c) => c.type === 'element' && c.tagName === 'li');
          const texts = items.map(firstText);
          const ok =
            items.length >= 2 &&
            texts.every((t, i) => t && t.value.startsWith(`${String.fromCharCode(97 + i)}) `));
          if (ok) {
            child.tagName = 'ol';
            child.properties.type = 'a';
            child.properties.className = [...(child.properties.className ?? []), 'opzioni'];
            texts.forEach((t) => (t.value = t.value.slice(3)));
          }
        }
        options(child);
      }
    };
    options(tree);
    const cls = (node) => node.properties?.className ?? [];
    const textOf = (node) =>
      node.type === 'text' ? node.value : (node.children ?? []).map(textOf).join('');
    const isEl = (node, tag) => node?.type === 'element' && node.tagName === tag;
    const addClass = (node, ...names) => {
      node.properties.className = [...cls(node), ...names];
    };
    const markRefs = (node, letters) => {
      if (!node.children) return;
      if (isEl(node, 'code') || isEl(node, 'pre') || cls(node).includes('math-inline') || cls(node).includes('math-display')) return;
      const out = [];
      for (const child of node.children) {
        if (child.type !== 'text') {
          markRefs(child, letters);
          out.push(child);
          continue;
        }
        const re = /(^|[\s(])([a-f])\)/g;
        let last = 0;
        let m;
        while ((m = re.exec(child.value))) {
          if (!letters.includes(m[2])) continue;
          const at = m.index + m[1].length;
          if (at > last) out.push({ type: 'text', value: child.value.slice(last, at) });
          out.push({
            type: 'element',
            tagName: 'span',
            properties: { className: ['rif'], dataOpz: m[2] },
            children: [{ type: 'text', value: `${m[2]})` }],
          });
          last = at + 2;
        }
        if (last < child.value.length) out.push({ type: 'text', value: child.value.slice(last) });
      }
      node.children = out;
    };
    const quiz = (node) => {
      const kids = node.children ?? [];
      kids.forEach((child, i) => {
        if (child.type !== 'element') return;
        quiz(child);
        if (!(isEl(child, 'ol') && cls(child).includes('opzioni'))) return;
        const sol = kids.slice(i + 1).find((c) => c.type === 'element');
        if (!isEl(sol, 'details') || !cls(sol).includes('callout-example')) return;
        const body = sol.children.find((c) => isEl(c, 'div') && cls(c).includes('callout-body'));
        const p = body?.children.find((c) => c.type === 'element');
        if (!isEl(p, 'p')) return;
        const strong = p.children[0];
        const after = p.children[1];
        const letter = isEl(strong, 'strong') ? textOf(strong).trim() : '';
        const items = child.children.filter((c) => isEl(c, 'li'));
        const letters = items.map((_, k) => String.fromCharCode(97 + k));
        if (!letters.includes(letter)) return;
        addClass(child, 'quiz');
        child.properties.dataGiusta = letter;
        items.forEach((li, k) => {
          li.properties.dataOpz = letters[k];
          li.children = [
            {
              type: 'element',
              tagName: 'button',
              properties: { type: 'button', className: ['opz'], dataLettera: letters[k] },
              children: [{ type: 'element', tagName: 'span', properties: { className: ['opz-testo'] }, children: li.children }],
            },
          ];
        });
        const correct = items[letters.indexOf(letter)].children[0].children[0].children;
        p.children.shift();
        if (after?.type === 'text') after.value = after.value.replace(/^[.,:;]?\s*/, '');
        if (p.children[0]?.type === 'text' && !p.children[0].value) p.children.shift();
        const first = p.children[0];
        if (first?.type === 'text') first.value = first.value.charAt(0).toUpperCase() + first.value.slice(1);
        markRefs(body, letters);
        body.children.unshift({
          type: 'element',
          tagName: 'p',
          properties: { className: ['esito'] },
          children: [
            { type: 'element', tagName: 'span', properties: { className: ['esito-lettera'] }, children: [{ type: 'text', value: `${letter})` }] },
            { type: 'element', tagName: 'span', properties: { className: ['esito-testo'] }, children: structuredClone(correct) },
          ],
        });
        addClass(sol, 'soluzione-quiz');
        sol.properties.dataGiusta = letter;
        const summary = sol.children.find((c) => isEl(c, 'summary'));
        if (summary) summary.children = [{ type: 'text', value: 'Risposta e spiegazione' }];
      });
    };
    quiz(tree);
    const verdict = (node, inSolution) => {
      for (const child of node.children ?? []) {
        if (child.type !== 'element') continue;
        const sol = inSolution || (isEl(child, 'details') && cls(child).includes('callout-example'));
        if (sol && isEl(child, 'strong')) {
          const t = textOf(child).trim().replace(/[.:]$/, '');
          const m = t.match(/^(?:[a-z0-9]+\)\s*)?(Ver[oa]|Fals[oa])$/i);
          if (m) addClass(child, 'vf', /^v/i.test(m[1]) ? 'vf-vero' : 'vf-falso');
        }
        verdict(child, sol);
      }
    };
    verdict(tree, false);
    file.data.astro ??= {};
    file.data.astro.frontmatter ??= {};
    file.data.astro.frontmatter.toc = toc;
  };
}
