# Handoff: Open Credit Scoring website

This document is for a developer (or coding agent, e.g. Codex / Claude Code) continuing
work on this project. It assumes no prior context from the design session.

## What this is

A **complete, working single-page static website** for Open Credit Scoring (OCS) — an
institutional AI-research site with Research, Standards, Governance, About, and Contact
sections. It is **not a throwaway mock**: it runs as-is in a browser and can be deployed to
any static host. The task here is to **extend** it (wire up the forms, optionally move to
a build pipeline, deploy) — not to recreate it from scratch.

Fidelity: **high**. Final colors, typography, spacing, and layout are all in place via the
bound Open Credit Scoring Design System.

## How it runs today

- `index.html` loads **React 18** and **Babel Standalone** from CDN and transpiles the
  `.jsx` files **in the browser** at load time. No build step, no `npm install`.
- Serve over HTTP (not `file://`):
  ```bash
  python3 -m http.server 8000   # → http://localhost:8000
  ```
- The page mounts `<App>` (in `index.html`), which composes `SiteHeader` (Chrome.jsx),
  `Page` (Page.jsx), and `SiteFooter` (Chrome.jsx). Header nav uses smooth-scroll +
  an IntersectionObserver scroll-spy.

## Architecture / files

```
index.html      App shell, header nav logic, scroll-spy, mount
Page.jsx        All page sections (Research, Standards, Governance, About, Contact, Newsletter)
Chrome.jsx      SiteHeader + SiteFooter
icons.jsx       LucideIcon wrapper + diagrammatic figures (calibration plot, etc.)
site.css        Layout styles (kit-local; NOT part of the design system)
assets/         Brand marks (SVG) + team/advisor photos (JPG)
_ds/<bundle>/   Open Credit Scoring Design System — tokens, components, styles
README.md       End-user run/deploy notes
.gitignore
```

Components come from the design-system bundle's global,
`window.OpenCreditScoringDesignSystem_c2a623` (Button, Tag, Card, Eyebrow, TextField,
Select, Callout, CausalBayesNet, Tabs, Stat). Styling uses design tokens (`var(--*)`).

## What is NOT wired yet (the main work)

**The forms are front-end only.** They update local React state and show a confirmation —
no data is sent anywhere.

- **Contact form** (Page.jsx, `#contact`): `onSubmit` calls `setSent(true)` and renders a
  `Callout`. Fields: Name, Work email, "I'm reaching out about" (Select), Message.
- **Newsletter form** (Page.jsx, `.news-cta`): `onSubmit` calls `setSubscribed(true)` and
  renders a confirmation line. Field: Work email.

To make them functional, pick one:
1. **Hosted form service** (Formspree / Basin / Getform): point each form's submit at the
   service endpoint (fetch POST or native form action). No backend to run. Easiest.
2. **Custom backend**: add an API route / serverless function to receive submissions,
   validate, store, and/or forward. Wire the forms to it with `fetch`. Add spam protection
   (honeypot / captcha) and basic validation.

## Recommended next steps

1. **Wire the forms** (above) — the primary functional gap.
2. **Move off in-browser Babel for production.** The runtime Babel transform is convenient
   for iteration but slow and not production-grade. Migrate to a real build (e.g. **Vite** +
   React): convert the three `.jsx` files into proper modules/imports, replace the
   design-system global with a local import of the bundle, and drop the CDN
   React/Babel `<script>`s. The component code itself should port with minimal changes.
3. **Deploy** to a static host (GitHub Pages / Netlify / Vercel). If you keep the current
   no-build setup, deploy the folder as-is; if you add Vite, deploy the `dist/` output.

## Design tokens

All tokens live in the design system under
`_ds/open-credit-scoring-design-system-c2a623fa-cd07-4cf7-9df2-9b5cffac2a62/tokens/`
(`colors.css`, `typography.css`, `spacing.css`, plus `base.css` / `components.css`). Use
those `var(--*)` custom properties rather than hardcoding values. Key brand values:

- Navy (primary): `--blue-700` `#173E69`; interactive/link `--blue-500` `#1F5FD0`
- Cardinal (secondary, sparing): `--red-600` `#A52A39`
- Paper / ink neutrals: `--paper-0` `#FFFFFF`, `--paper-1` `#F5F6F7`, ink `--ink-900` `#15181E`
- Fonts: Spectral (serif display), IBM Plex Sans (body/UI), IBM Plex Mono (labels/metadata)
- 4px spacing grid; small radii (4–6px); restrained shadows

`site.css` adds a couple of kit-local patterns on top: full-bleed section tints
(`.section-band--tint`, currently on Research / Governance / Contact) and the inverted navy
newsletter band (`.news-cta`) with a cardinal "Subscribe" button.

## Assets

- `assets/ocs-mark-color.svg`, `assets/ocs-mark.svg` — OCS brand marks (navy / white).
- `assets/chris-lam.jpg`, `michael-akinwumi.jpg`, `emmanuel-ogundimu.jpg`,
  `jason-dietrich.jpg` — team/advisor photos used in the About section.
- Icons: [Lucide](https://lucide.dev) via CDN.
