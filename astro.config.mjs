import { defineConfig } from 'astro/config';
import { unified } from '@astrojs/markdown-remark';
import sitemap from '@astrojs/sitemap';
import remarkMath from 'remark-math';
import rehypeKatex from 'rehype-katex';
import remarkCallouts from './src/lib/remark-callouts.mjs';
import rehypeUniSections from './src/lib/rehype-uni-sections.mjs';

export default defineConfig({
  site: 'https://marchesipietro.xyz',
  integrations: [sitemap({ filter: (page) => !page.includes('/uni/') && !page.includes('/piani/') })],
  markdown: {
    syntaxHighlight: { type: 'shiki', excludeLangs: ['math'] },
    shikiConfig: {
      themes: { light: 'github-light', dark: 'github-dark' },
      defaultColor: false,
    },
    processor: unified({
      remarkPlugins: [remarkMath, remarkCallouts],
      rehypePlugins: [rehypeUniSections, [rehypeKatex, { strict: false, trust: false }]],
    }),
  },
});
