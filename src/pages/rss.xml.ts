import rss from '@astrojs/rss';
import { getCollection } from 'astro:content';
import type { APIContext } from 'astro';

export async function GET(context: APIContext) {
  const writeups = await getCollection('writeups', ({ data }) => !data.draft);
  return rss({
    title: 'Pietro Marchesi · writeups',
    description: 'CTF writeups — how each challenge fell, and what it taught me.',
    site: context.site!,
    items: writeups
      .sort((a, b) => b.data.pubDate.valueOf() - a.data.pubDate.valueOf())
      .map((w) => ({
        title: w.data.title,
        description: w.data.description,
        pubDate: w.data.pubDate,
        link: `/writeups/${w.id}/`,
      })),
  });
}
