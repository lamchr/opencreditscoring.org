# Open Credit Scoring

Website for Open Credit Scoring, a transparent credit scoring initiative focused on explainable models, auditable decisions, and responsible lending infrastructure.

Live site: https://lamchr.github.io/opencreditscoring.org/

## Overview

This is a static Next.js site built with the App Router and Tailwind CSS. It is configured for GitHub Pages using Next's static export mode.

The homepage includes:

- A landing page for Open Credit Scoring
- A model workspace preview
- Governance and auditability messaging
- Platform capability sections
- A pilot/contact call to action

## Tech Stack

- Next.js 15
- React 19
- Tailwind CSS 4
- TypeScript
- GitHub Pages
- GitHub Actions

## Local Development

Install dependencies:

```bash
pnpm install
```

Start the development server:

```bash
pnpm dev
```

Open http://localhost:3000.

## Build

Create a production static export:

```bash
pnpm build
```

The exported site is written to `out/`.

For GitHub Pages project-site paths, the workflow sets:

```bash
GITHUB_PAGES=true
```

That enables the repository base path in `next.config.js`.

## Deployment

Deployment is handled by GitHub Actions:

```text
.github/workflows/deploy-pages.yml
```

On each push to `main`, the workflow:

1. Installs dependencies with pnpm.
2. Builds the static Next.js export.
3. Uploads the `out/` directory as a GitHub Pages artifact.
4. Deploys the artifact to GitHub Pages.

GitHub Pages should be configured with:

- Source: GitHub Actions
- Branch: `main`

## Project Structure

```text
app/(default)/page.tsx       Homepage content
app/layout.tsx               Root layout and metadata
app/css/style.css            Tailwind imports and theme tokens
components/ui/header.tsx     Site navigation
components/ui/footer.tsx     Footer
components/ui/logo.tsx       Brand mark
public/.nojekyll             Required for GitHub Pages asset paths
next.config.js               Static export and Pages base path config
```

## Notes

GitHub Pages only serves static files, so this project does not include API routes or server-rendered pages.

The project started from the Cruip Simple Light template and has been customized for Open Credit Scoring.
