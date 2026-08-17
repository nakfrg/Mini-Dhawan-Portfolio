import { defineCollection, z } from 'astro:content';
import { glob } from 'astro/loaders';

/* One JSON file per project. The filename is the URL slug (/work/<filename>/).
   To add a project: drop a new .json into src/content/work and put its images
   in public/images/work/<slug>/ (cover.png for the tile, hero.png + gallery
   images for the project page). `category` must match a key in CATEGORIES
   (src/data/site.ts). */
const work = defineCollection({
  loader: glob({ pattern: '*.json', base: './src/content/work' }),
  schema: z.object({
    order: z.number(),
    title: z.string(),
    category: z.enum(['brand', 'digital', 'print', 'motion']),
    client: z.string().optional(),
    caption: z.string().optional(),      // short overlay caption on the tile
    image: z.string(),                    // tile image, e.g. /images/work/<slug>/cover.png
    wide: z.boolean().default(false),     // tile spans two columns

    /* ---- project page ---- */
    hero: z.string().optional(),          // large image at the top of the page (falls back to `image`)
    year: z.string().optional(),
    role: z.string().optional(),
    deliverables: z.array(z.string()).default([]),
    summary: z.string().optional(),       // intro paragraph (larger type)
    body: z.array(z.string()).default([]),// body paragraphs
    gallery: z.array(z.object({ src: z.string(), caption: z.string().optional() })).default([]),
    video: z.string().url().optional(),   // optional Vimeo/YouTube player url, embedded on the page
  }),
});

export const collections = { work };
