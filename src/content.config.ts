import { defineCollection, z } from 'astro:content';
import { glob } from 'astro/loaders';

// Every case study is one .mdx file in src/content/work/.
// Add a file → a homepage card and a page appear automatically.
const work = defineCollection({
  loader: glob({ pattern: '**/*.mdx', base: './src/content/work' }),
  schema: z.object({
    title: z.string(), // H1 on the case study page
    cardTitle: z.string(), // title on the homepage card
    meta: z.string(), // small line above the card title
    summary: z.string().optional(), // intro paragraph under the hero image
    cover: z.string().optional(), // e.g. /media/covers/speechify.jpg
    coverLabel: z.string().default('Cover image'),
    order: z.number(), // homepage position, 1 = first
    draft: z.boolean().default(false), // true = visible in dev only, hidden on the live site
    role: z.string().optional(),
    team: z.string().optional(),
    timeline: z.string().optional(),
    impact: z.string().optional(),
  }),
});

export const collections = { work };
