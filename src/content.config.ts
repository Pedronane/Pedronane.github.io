import { defineCollection } from 'astro:content';
import { glob } from 'astro/loaders';
import { z } from 'astro/zod';

const writeups = defineCollection({
  loader: glob({ base: './src/content/writeups', pattern: '**/*.md' }),
  schema: z.object({
    title: z.string(),
    description: z.string(),
    pubDate: z.coerce.date(),
    platform: z.string(),
    tags: z.array(z.string()).default([]),
    draft: z.boolean().default(false),
  }),
});

const uni = defineCollection({
  loader: glob({ base: './src/content/uni', pattern: '**/*.md' }),
  schema: z.object({
    title: z.string(),
    materia: z.string(),
    materiaNome: z.string(),
    materiaBreve: z.string(),
    cfu: z.number(),
    hub: z.boolean(),
    tipo: z.string(),
    stato: z.string().nullable(),
    data: z.coerce.date().nullable(),
    lezioni: z.array(z.string()),
    ordine: z.number(),
  }),
});

export const collections = { writeups, uni };
