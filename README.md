# Open Credit Scoring

Institutional research site for **Open Credit Scoring (OCS)** — an AI research initiative
establishing the mathematical foundations for trustworthy credit decisions, published as
open standards.

A single-page site covering Research, Standards, Governance, About, and Contact, built on
the Open Credit Scoring Design System.

## Running locally

This is a static site — no build step or install required. Because the browser loads
modules and transpiles JSX at runtime, open it through a local web server rather than the
`file://` protocol:

```bash
# Python 3
python3 -m http.server 8000
# then visit http://localhost:8000
```

Any static file server works (e.g. `npx serve`). The site also deploys as-is to static
hosts such as GitHub Pages, Netlify, or Vercel.

## Project structure

```
index.html        Entry point — page shell, header nav, scroll-spy
site.css          Layout styles (kit-local, not part of the design system)
Page.jsx          Main page composition (all sections)
Chrome.jsx        Header + footer
icons.jsx         Lucide icon wrapper + diagrammatic figures
assets/           Brand marks (SVG) and team/advisor photos
_ds/              Open Credit Scoring Design System bundle (tokens, components, styles)
```

## Tech notes

- **React 18** and **Babel Standalone** are loaded from CDN; the `.jsx` files are
  transpiled **in the browser** at load time. This keeps iteration build-free but is the
  slower path — for a production deployment, precompile the JSX to plain JavaScript and
  drop the in-browser Babel script.
- Icons use [Lucide](https://lucide.dev) (CDN).
- Fonts (Spectral, IBM Plex Sans, IBM Plex Mono) load via the design system's stylesheet.

## Design system

Visuals follow the bound **Open Credit Scoring Design System** under `_ds/`. Components are
consumed from the bundle's global (`window.OpenCreditScoringDesignSystem_c2a623`); styling
uses the design tokens (`var(--*)`) rather than ad-hoc values.
