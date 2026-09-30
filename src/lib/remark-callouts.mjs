import { visit } from 'unist-util-visit';

const MARKER = /^\[!([a-z-]+)\]([-+]?)[ \t]*/i;

const LABELS = {
  note: 'Nota',
  info: 'Info',
  tip: 'Suggerimento',
  warning: 'Attenzione',
  example: 'Esempio',
  question: 'Domanda',
  abstract: 'Sintesi',
  quote: 'Citazione',
};

function splitTitle(children) {
  const title = [];
  const rest = [];
  let inTitle = true;
  for (const child of children) {
    if (!inTitle) {
      rest.push(child);
    } else if (child.type === 'text' && child.value.includes('\n')) {
      const i = child.value.indexOf('\n');
      const head = child.value.slice(0, i);
      const tail = child.value.slice(i + 1);
      if (head) title.push({ ...child, value: head });
      if (tail) rest.push({ ...child, value: tail });
      inTitle = false;
    } else if (child.type === 'break') {
      inTitle = false;
    } else {
      title.push(child);
    }
  }
  return { title, rest };
}

export default function remarkCallouts() {
  return (tree) => {
    visit(tree, 'blockquote', (node) => {
      const first = node.children[0];
      if (first?.type !== 'paragraph') return;
      const head = first.children[0];
      if (head?.type !== 'text') return;
      const m = head.value.match(MARKER);
      if (!m) return;
      const type = m[1].toLowerCase();
      const fold = m[2];
      head.value = head.value.slice(m[0].length);
      const { title, rest } = splitTitle(first.children);
      const hasTitle = title.some((n) => n.type !== 'text' || n.value.trim());
      const titleNode = {
        type: 'paragraph',
        children: hasTitle ? title : [{ type: 'text', value: LABELS[type] ?? type }],
        data: { hName: fold ? 'summary' : 'p', hProperties: { className: ['callout-title'] } },
      };
      const body = [...(rest.length ? [{ type: 'paragraph', children: rest }] : []), ...node.children.slice(1)];
      node.children = [
        titleNode,
        ...(body.length ? [{ type: 'blockquote', children: body, data: { hName: 'div', hProperties: { className: ['callout-body'] } } }] : []),
      ];
      node.data = {
        hName: fold ? 'details' : 'aside',
        hProperties: { className: ['callout', `callout-${type}`], open: fold === '+' ? true : undefined },
      };
    });
  };
}
