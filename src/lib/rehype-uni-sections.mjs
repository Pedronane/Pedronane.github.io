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
    file.data.astro ??= {};
    file.data.astro.frontmatter ??= {};
    file.data.astro.frontmatter.toc = toc;
  };
}
