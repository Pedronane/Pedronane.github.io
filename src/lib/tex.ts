import katex from 'katex';

const escape = (s: string) => s.replace(/&/g, '&amp;').replace(/</g, '&lt;').replace(/>/g, '&gt;');

export function inlineTex(s: string): string {
  return s
    .split(/(\$[^$]+\$)/g)
    .map((part) =>
      part.length > 2 && part.startsWith('$') && part.endsWith('$')
        ? katex.renderToString(part.slice(1, -1), { throwOnError: false })
        : escape(part.replace(/\*\*|__|`/g, '')),
    )
    .join('');
}

export function plainTex(s: string): string {
  return s.replace(/\$([^$]+)\$/g, '$1').replace(/\\[a-zA-Z]+/g, '').replace(/[{}\\]/g, '');
}
