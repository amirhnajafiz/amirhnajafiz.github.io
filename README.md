# AMIRHNAJAFIZ.GITHUB.IO

My personal website — a single-page portfolio built with **React + Vite + TypeScript**
and **Framer Motion** animations, in a warm blue / purple / orange theme.

## Editing content

All personal data lives as JSON under [`src/content/`](src/content/) — no need to touch
component code to update the site:

| File | What it controls |
| --- | --- |
| `profile.json` | Name, tagline, photo, hero details, email |
| `about.json` | About-me paragraphs |
| `education.json` | Education cards |
| `papers.json` | Publications list |
| `projects.json` | Projects list |
| `blog.json` | Blog post links |
| `social.json` | Footer social links |
| `site.json` | Title, logo, nav items, copyright, hero background |

The shapes are typed in [`src/types/content.ts`](src/types/content.ts), so the build
catches mistakes. Images live in [`public/images/`](public/images/).

## Theme

The whole color palette is defined once as CSS custom properties in
[`src/styles/tokens.css`](src/styles/tokens.css). Change a token and it propagates
everywhere.

## Development

```bash
npm install      # install dependencies
npm run dev      # local dev server with hot reload
npm run build    # type-check + production build into dist/
npm run preview  # preview the production build
```

## Deployment

Pushing to `master` triggers the GitHub Actions workflow
([`.github/workflows/static.yml`](.github/workflows/static.yml)), which builds the site
and deploys `dist/` to GitHub Pages.
