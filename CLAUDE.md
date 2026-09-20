# CLAUDE.md: guidance for Claude Code in this repo

Personal portfolio for Christine Ye (product designer). Astro 5 + MDX, static output, deployed on Vercel.

## Rules
- Visual source of truth: the original Framer site (Manrope Medium, black on white, #666 secondary,
  24px radius on media, black footer with large email). Don't introduce new colors, fonts, or shadows.
- All tokens live at the top of `src/styles/global.css`. Change tokens, not one-off values.
- Breakpoints: phone < 640, tablet 640–1199, desktop ≥ 1200. Check all three after any layout change.
- Motion stays quiet: headings rise once on load, media fades/settles in on scroll, hover responds to the
  pointer, page transitions crossfade (cover image morphs card → case study). No new scroll effects.
  Everything must respect prefers-reduced-motion.
- Case studies are MDX in `src/content/work/`. Schema in `src/content.config.ts`.
  MDX components are passed in `src/pages/work/[slug].astro`. If you add one, register it there too.
- Media: files in `public/media/`. Components render a placeholder until the file exists (`src/lib/media.ts`).
- Drafts (`draft: true`) render in dev only. `/todo` (dev only) lists missing media.
- Keep copy edits out of scope unless asked. The owner writes the case study text.

## Commands
- `npm run dev` / `npm run build` / `npm run preview`
- Before finishing a task: `npm run build` must pass.
