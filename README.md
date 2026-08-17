# Mini Dhawan: Portfolio

Prototype portfolio for **Mini Dhawan**, Senior Graphic Designer (Canberra AU), built from the
"Chaos to Clarity" Figma design. Pages share the same header and footer:

- `/` : selected work as an accordion of four categories. Each row opens a horizontal rail of
  project tiles; when a category has more than three projects, left/right arrow buttons (and
  a "1 / 5" counter) appear so viewers can scroll through them. Followed by the client logo wall.
- `/work/<slug>/` : one page per project (breadcrumb, title, summary, client/role/year/
  deliverables, hero image or video, body copy, gallery, previous/next within the category).
- `/resume/` : experience timeline, qualifications, tools and the stats row.
  "View Online" in the header opens it; "Download" serves `public/Mini-Dhawan-Resume.pdf`.

Built on the same Astro framework conventions as `Astro-Portfolio` and `PIAS-Portfolio`:
Astro 5 static output, one JSON per work item in a content collection, all copy in
`src/data/site.ts`, design tokens in `src/styles/global.css`.

## Run it

```sh
npm install
npm run dev          # http://localhost:4321 (launch.json uses --port 4323)
npm run build        # static output in dist/
```

## Where things live

| What | Where |
| --- | --- |
| Name, role, contact, hero copy, categories, clients, resume data | `src/data/site.ts` |
| Work items (one JSON each; filename = URL slug) | `src/content/work/*.json` (schema in `src/content.config.ts`) |
| Work images | `public/images/work/<slug>/` (`cover.png` tile, `hero.png`, `01.png`… gallery) |
| Client logos | `public/images/clients/` |
| Resume PDF | `public/Mini-Dhawan-Resume.pdf` |
| Colours, fonts, spacing tokens | `src/styles/global.css` |
| Header / hero / footer | `src/components/` |

## Placeholders to replace

Everything below is a stand-in until the real assets arrive:

1. **Work images**: every project folder in `public/images/work/<slug>/` holds blank grey PNGs:
   `cover.png` (1200×900, the tile on the landing page), `hero.png` (1600×900, top of the
   project page) and `01.png`, `02.png`, `03.png` (1200×900 gallery). Overwrite them with the
   real images (same filenames, any size; JPGs are fine if you update the paths in the JSON).
   The three Brand Identity items (Face2Face, AMSA wall, SLA Mingle car wrap) match the Figma;
   the other 13 projects are invented so every category has enough tiles to demonstrate the
   rail. Edit or delete freely.
2. **Project copy**: `summary`, `body`, `role`, `year`, `deliverables` and gallery captions in
   every JSON are lorem ipsum / guesses.
3. **Client logos**: `public/images/clients/*.png` are blank 480×240 PNGs for the twelve marks
   in the design (DK, DISR, ADHA, SLA, AMSA, ACT Health, Mingle, USG Boral, Yum!, National
   Hearing Care, Shiv Khera, CII). Overwrite with the real logos, keeping the filenames (or edit
   `clients` in `site.ts`).
4. **Resume PDF**: `public/Mini-Dhawan-Resume.pdf` is a one-line placeholder.

## Adding a work item

Create `src/content/work/<slug>.json` (the filename becomes the URL `/work/<slug>/`) and a
matching image folder `public/images/work/<slug>/`:

```json
{
  "order": 6,
  "title": "Project name",
  "category": "brand",
  "client": "Client name",
  "caption": "Short overlay caption on the tile",
  "image": "/images/work/<slug>/cover.png",
  "hero": "/images/work/<slug>/hero.png",
  "year": "2025",
  "role": "Senior graphic designer",
  "deliverables": ["Logo suite", "Style guide"],
  "summary": "One-paragraph intro shown under the title.",
  "body": ["Paragraph one.", "Paragraph two."],
  "gallery": [
    { "src": "/images/work/<slug>/01.png", "caption": "Optional caption" }
  ],
  "video": "https://player.vimeo.com/video/123456789",
  "wide": false
}
```

- `category` is one of `brand`, `digital`, `print`, `motion` (see `CATEGORIES` in `site.ts`).
- Only `order`, `title`, `category` and `image` are required; everything else is optional.
- `video` (Vimeo/YouTube player URL) replaces the hero image on the project page and adds a
  play badge to the tile.
- `wide: true` makes the tile span two columns in the rail.
- Categories can be deep-linked: `/#print` opens Print and Publishing on load.
- The rail shows arrows whenever a category has more than three projects (`PER_VIEW` in
  `src/pages/index.astro`); on narrow screens they also appear when the tiles overflow.

## Deploy

`wrangler.jsonc` is set up for Cloudflare static assets (`npm run build && npx wrangler deploy`),
or `npm run deploy:pages` for Cloudflare Pages. Update `site` in `astro.config.mjs` to the final URL.
