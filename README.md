# GSO-Website

The website for the **Graduate Student Organization — Brooklyn College**.

A single-page React application covering the GSO's public presence: governance
and leadership, committees, meetings, events, advocacy, elections, governing
documents, transparency reporting, media, and contact.

## Stack

| Concern       | Choice                                 |
| ------------- | -------------------------------------- |
| Build tool    | Vite 5                                 |
| Framework     | React 18 + TypeScript                  |
| Routing       | react-router-dom v6                    |
| Styling       | Tailwind CSS v4 (`@theme` design tokens) |
| Animation     | framer-motion                          |
| Icons         | lucide-react                           |

## Getting started

```bash
npm install
npm run dev      # http://localhost:8080
```

Other scripts:

```bash
npm run build    # type-check and produce dist/
npm run preview  # serve the production build locally
```

## Project structure

```
public/                  favicon, robots.txt
src/
  assets/                hero and campus photography
  components/
    layout/              Header, Footer, Layout (shared chrome)
    Counter.tsx          count-up statistic, triggered on scroll
    PageHero.tsx         the masthead every interior page opens with
    Reveal.tsx           scroll-into-view fade/rise wrapper
  lib/utils.ts           `cn()` class merging helper
  pages/                 one component per route
  App.tsx                route table
  index.css              design tokens, base styles, custom utilities
  main.tsx               entry point
```

## Design tokens

The palette is defined once in `src/index.css` and consumed through Tailwind
utilities (`bg-maroon`, `text-gold`, `border-border`, …):

- **Maroon** `oklch(36% .11 20)` — primary brand color, with a darker variant
  for hover states.
- **Gold** `oklch(78% .13 82)` — accent, plus a soft tint for display type on
  dark backgrounds.
- Semantic tokens (`background`, `foreground`, `card`, `muted`, `border`, …)
  have both light and dark definitions; dark mode is applied by toggling the
  `.dark` class on `<html>`, wired to the header's theme button.

Type is **Inter** for UI and **Instrument Serif** for display headings, loaded
from Google Fonts in `index.html`.

## Routes

`/` · `/about` · `/leadership` · `/structure` · `/committees` · `/meetings` ·
`/events` · `/advocacy` · `/elections` ·
`/governing-documents` · `/transparency` · `/media` · `/get-involved` ·
`/contact` — anything else renders the 404 page.

## Deployment

The build output in `dist/` is a static bundle. Because routing is client-side,
the host must rewrite unknown paths to `index.html` (Netlify `_redirects`,
Vercel rewrites, or `try_files $uri /index.html` on nginx).

## Contact

- President — GSOPresident@brooklyn.cuny.edu
- Office — officeassistant.bcgso@gmail.com · 718-951-5503
- Instagram — [@bc_gso](https://instagram.com/bc_gso)
