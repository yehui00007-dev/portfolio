# Christine Ye: portfolio

Astro + MDX. No CMS: every case study is one file.

## Run it

```bash
npm install
npm run dev      # http://localhost:4321  (drafts visible, /todo page on)
npm run build    # production build in dist/ (drafts removed)
```

## Where things live

| To change…                         | Edit                                  |
|------------------------------------|---------------------------------------|
| Name, email, LinkedIn, intro line  | `src/site.config.ts`                  |
| Experience list                    | `src/site.config.ts`                  |
| About copy + photos                | `src/pages/about.astro`               |
| A case study                       | `src/content/work/<slug>.mdx`         |
| Colors, type sizes, spacing        | `src/styles/global.css` (top: tokens) |
| Images / videos                    | `public/media/…`                      |
| Resume                             | `public/resume.pdf`                   |

## Add a case study

1. Copy `src/content/work/ai-lab.mdx` → `src/content/work/my-project.mdx`.
2. Edit the frontmatter (title, cardTitle, meta, order).
3. Keep `draft: true` while writing. It shows in dev with a badge and is left out of the live site.
4. Flip to `draft: false` when it's ready.

## Components you can use inside any .mdx case study

No imports needed.

```mdx
<Media label="Workflow map" />                                  placeholder, 16:9
<Media label="Workflow map" ratio="4:3" size="text" />          placeholder, narrower
<Media src="/media/speechify/map.png" label="Workflow map" />   real image (label = alt text)
<Media src="/media/speechify/demo.mp4" label="Demo" />          muted looping video
<Media src="/media/speechify/walkthrough.mp4" controls label="Walkthrough" />

<Prototype label="Slides flow" />                               browser-frame placeholder
<Prototype label="Onboarding" device="phone" />                 phone-frame placeholder
<Prototype src="https://www.figma.com/proto/…" label="…" />      live Figma prototype
<Prototype src="https://my-proto.vercel.app" label="…" />        any live URL
<Prototype src="/media/x/recording.mp4" label="…" />            screen recording

<Grid cols={2}>
  <Media label="Before" ratio="4:3" />
  <Media label="After" ratio="4:3" />
</Grid>

<BeforeAfter before="/media/x/old.png" after="/media/x/new.png" label="Editor" />

<Metrics items={[{ value: '3x', label: 'translation DAU' }]} />
```

Sizes: `size="text"` (1200px column), `"wide"` (default, full container), `"full"` (edge to edge).

**Placeholder → real media:** add `src`. If the file isn't in `public/` yet, you still see the
placeholder, so you can write the path first and export later. Moving media = cut/paste one line.

## Deploy (Vercel, free)

1. Push this folder to a GitHub repo.
2. vercel.com → Add New Project → import the repo. Framework: Astro (auto-detected). Deploy.
3. Add your domain in Project → Settings → Domains, then update `site` in `astro.config.mjs`.
