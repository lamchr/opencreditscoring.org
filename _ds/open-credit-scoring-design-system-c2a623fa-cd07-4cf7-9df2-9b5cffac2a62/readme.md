# Open Credit Scoring — Design System

> The brand and interface system for **Open Credit Scoring (OCS)** — an AI research initiative establishing the mathematical foundations for trustworthy credit decisions, and publishing them as open standards.

This repository is both a **design guide** (how the brand looks, sounds, and behaves) and a **component library** (real CSS tokens + React primitives + full screen recreations) that design agents and engineers can build against.

---

## 1 · About Open Credit Scoring

OCS is positioned as an **independent, nonprofit research institution**, not a product company. Its work sits at the intersection of machine learning, causality, systems thinking, and public-interest finance. Three things define the institutional voice:

1. **Fundamental research.** OCS publishes peer-reviewable work on the mathematics of credit risk — transparency, fairness causality, and systems thinking to improve the design of credit scoring models.
2. **Open standards.** Findings are codified into open, voluntary consensus standards that any lender, regulator, or researcher can adopt and implement.
3. **Trust as the product.** The output is not a score — it is mathematical trust layer for highly regulated credit decisions.

The visual and verbal identity therefore borrows from three worlds: the **academic paper** (serif authority, restraint, citations), the **standards body** (numbered specs, plain language, institutional neutrality — think W3C / IETF / NIST), and the **measurement instrument** (axes, ticks, distributions, the scoring curve itself).

### Sources

This design system was created **from a written brief, with no attached codebase, Figma file, or existing brand assets.** The brand direction, logo, palette, typography, components, and screens below are therefore an **original proposal** rather than a recreation of an existing identity.

- **Brief:** "Open Credit Scoring: An AI research initiative to establish the mathematical foundations for trustworthy credit decisions." Establish an institutional website performing fundamental AI research and developing open standards.
- No external links, repositories, or files were provided. If OCS has existing brand assets, fonts, or a product surface, share them and this system will be reconciled against them.

---

## 2 · Content Fundamentals

How OCS writes. The verbal identity is **scholarly, plainspoken, and precise** — the register of a serious research group that refuses to oversell.

**Voice & person.** OCS speaks as an institution: **"we"** for the organization and its work ("we publish", "we propose"). The reader is addressed as **"you"** sparingly and only in genuinely instructional contexts (documentation, "how to adopt a standard"). Marketing copy avoids second-person hype. There is no "unlock", "supercharge", "revolutionize", or "game-changing" — ever.

**Tone.** Confident through *understatement*. Claims are bounded and falsifiable. Prefer "reduces calibration error by 18% on the LendingClub benchmark" over "dramatically improves accuracy". Where something is uncertain, say so — hedging is a feature, not a weakness, in a research voice.

**Casing.** Sentence case for almost everything — headlines, buttons, nav, section titles. **Title Case** is reserved for proper nouns and the names of standards ("the Open Calibration Standard"). **lowercase mono** is used for eyebrows/kickers and metadata (`research · calibration`). Standard identifiers are uppercase mono: `OCS-2`.

**Numbers & notation.** Numerals, units, and math are first-class. Use real figures, dates in `ISO` or "14 Mar 2026" form, version tags (`v1.2`), and inline math set in the mono or serif-italic voice. Don't decorate with arbitrary stats.

**Emoji.** **Never.** No emoji anywhere in the brand. Iconography is line-based and restrained (see §5).

**Vibe in one line.** *An open letter from a laboratory* — measured, generous with evidence, allergic to spin.

#### Examples

- Eyebrow: `research note · 14 mar 2026`
- Headline: "A score is only as trustworthy as its calibration."
- Lead: "We study when a probabilistic credit model can be believed — and publish the tests, datasets, and standards that let anyone check our work."
- Standard title: "OCS-2 · Reproducible Scoring Pipelines"
- Button: "Read the standard", "Browse research", "Adopt OCS-2"
- Disclaimer voice: "Results are reported on public benchmarks; production performance will vary with population and feature set."

---

## 3 · Visual Foundations

The aesthetic is **"scholarly instrument"**: a clean white page, cool ink, and the restraint of a printed research journal — structure carried by hairline rules and a measured grid rather than by boxes, color, and shadow.

**Color.** A **white-paper / cool-ink** base. The page is white (`--paper-0` `#FFFFFF`) with cool-neutral panels (`--paper-1` `#F5F6F7`); text is a cool near-black (`--ink-900` `#15181E`). The single institutional accent is a **deep navy** (`--blue-700` `#173E69`, with `--blue-500` `#1F5FD0` for interactive/links). A complementary **institutional cardinal** (`--red-600` `#A52A39`) is the secondary accent, used *sparingly* — for a second plotted data series (the calibration baseline), category tags, and the rare `accent` button. Navy + cardinal is the brand's deliberate pairing: two colors of equal tonal weight, in the register of a seal or flag. Charts draw from a 4-series set (navy, cardinal, bright blue, slate). Status colors are desaturated to sit inside the palette. Avoid: purple/violet gradients, neon, and finance-cliché kelly green.

**Typography.** Three families, clear division of labor:

- **Spectral** (serif) — all display and headings. The "research paper" voice. Set light/regular weights at large sizes with tight tracking.
- **IBM Plex Sans** — body copy, UI, controls. Neutral and technical.
- **IBM Plex Mono** — eyebrows, metadata, data tables, code, standard IDs. This mono is the brand's *signature*; it appears on nearly every screen as a small uppercase tracked label.

**Backgrounds.** Flat paper. No photographic hero washes, no full-bleed stock imagery, no gradient meshes. Where a surface needs interest, use a faint **measured grid / axis-tick texture** or a thin **dot-grid**, never a gradient. Dark sections invert to `--ink-900` paper with `--paper-0` text.

**Borders & rules.** Borders do the structural work. Hairlines are `1px rgba(21,24,30,0.14)` (`--line`); section dividers may use a `2px` solid ink rule (`--ocs-rule-strong`) as an editorial device. Tables and spec lists are defined by horizontal rules, not filled zebra rows (a faint `--paper-1` tint is allowed for alternating rows when density is high).

**Cards.** Quiet: `--surface-card` (`#FFFFFF`) on the page, a single hairline border, `--r-md` (6px) radius, and *no* shadow by default. Elevation (`--shadow-2`) is used only for genuinely floating UI (menus, dialogs, toasts). There is **no** "rounded card with a colored left-border accent" pattern.

**Corner radius.** Small and precise: controls and cards `4–6px`, insets `2px`, pills only for tags/toggles. Nothing is heavily rounded; the brand reads as exact, not friendly-soft.

**Shadows.** A restrained 3-step scale. Most surfaces sit flat (`--shadow-0`). `--shadow-1/2` for raised controls and cards-on-hover; `--shadow-3` reserved for modals. Shadows are soft, low-opacity, neutral-cool — never colored.

**Spacing & layout.** A strict **4px grid**. Generous whitespace and a constrained reading measure (`--measure` 68ch) — copy is never full-bleed. Content max width `1200px`. Layouts favor a clear **left-aligned editorial column** with a metadata rail, not centered everything.

**Motion.** Restrained and precise. Fades and small (4–12px) translates on `--ease-out`, `120–360ms`. **No** bounce, no spring, no parallax, no infinite decorative loops. Charts may draw in once. Respect `prefers-reduced-motion`.

**Hover / press.** Hover = a small, legible shift: link color to `--blue-500` with underline; buttons darken one step; cards gain `--shadow-1` and a slightly stronger border. Press = a further one-step darken plus a `1px` nudge (no scale-down bounce). Focus is always a visible `2px --blue-500` ring at `2px` offset.

**Transparency & blur.** Used minimally. A sticky header may sit on `paper-0/85%` with a small `backdrop-filter: blur(8px)`. Overlays use an `ink-900/45%` scrim. Blur is never used decoratively.

**Imagery vibe.** When real imagery is used it should be **diagrammatic** — plots, distributions, calibration curves, model diagrams — or sober, cool-neutral photography (lab, paper, archival). No warm lifestyle stock, no AI gradient art.

---

## 4 · (Iconography — see §5 below)

## 5 · Iconography

OCS uses a **single, line-based icon system** with a consistent stroke, matching the instrument/standards register.

- **System:** **[Lucide](https://lucide.dev)** — open-source, `1.75px`–`2px` stroke, rounded joins, 24px grid. Loaded from CDN (`https://unpkg.com/lucide@latest`). Lucide's neutral, technical line style suits the brand; its openness matches the "open standards" ethos. **This is a substitution** — OCS had no existing icon set — and is flagged for your review. Swap freely if you prefer Phosphor (line) or Feather.
- **Style rules:** line/outline only (never filled or duotone icons), stroke `1.75px` at 20–24px, color inherits `currentColor` (usually `--ink-700` or `--ink-500`). Icons are *supporting*, never decorative — pair with a text label wherever practical.
- **The brand mark** is the solid circular-arrow loop (`assets/ocs-mark-color.svg` brand navy `#173E69` for light, `assets/ocs-mark.svg` white for dark); it is *not* part of the icon set and should not be used as a generic icon.
- **Emoji / unicode as icons:** never. The only non-Lucide glyphs allowed are genuine math/notation characters in running text (×, ≤, →, σ, ∑) set in the serif or mono face.
- **Custom diagrammatic marks** (axes, ticks, distribution curves) are drawn as inline SVG using the token colors and stroke widths — these are illustration, not iconography.

Assets in `assets/`: `ocs-mark-color.svg` (solid circular-arrow loop, brand navy `#173E69` — for light backgrounds), `ocs-mark.svg` (same loop in white — for dark backgrounds).

---

## 6 · Index / Manifest

The Design System tab renders every `@dsCard`-tagged HTML live. This is the root-folder map.

**Foundations & entry**

- `styles.css` — global entry point (consumers link this one file). `@import`s everything below.
- `tokens/fonts.css` — webfont loading (Spectral · IBM Plex Sans · IBM Plex Mono)
- `tokens/colors.css` · `typography.css` · `spacing.css` — design tokens (132 custom properties: paper/ink neutrals, blue + crimson accents, type scale, 4px spacing, radii, shadows, motion).
- `tokens/base.css` — element defaults + primitive utility classes (`.ocs-eyebrow`, `.ocs-display`, `.ocs-lead`, `.ocs-mono`, `.ocs-stdref`, `.ocs-container`, `.ocs-rule`).
- `tokens/components.css` — component classes backing the React primitives.

**Specimen cards** — `guidelines/*.card.html` Type (serif, body, mono, scale) · Colors (paper, ink, blue, accent, data & status) · Spacing (scale, radii, borders/rules/shadows) · Brand (logo, motif).

**Components** — `components/<group>/` (each has `.jsx`, `.d.ts`, `.prompt.md`, and a `*.card.html`). Consume via `const { … } = window.OpenCreditScoringDesignSystem_c2a623`.

- `core/` — **Button**, **Tag** + **StdRef**, **Card**, **Eyebrow**
- `forms/` — **TextField**, **Select**
- `feedback/` — **Callout**
- `data/` — **Stat**, **CausalBayesNet**
- `navigation/` — **Tabs**

**Templates** — `templates/<slug>/` (starting folders consuming projects can copy or follow; shown as the "Templates" group in the picker)

- `website/` — the institutional research site: an interactive click-through of **Home**, **Research** (publications index), **Standard** (a single open-standard reading view), and **About**. Files: `index.html` (entry, tagged `@template`), `site.css`, `Chrome.jsx`, `Home.jsx`, `Research.jsx`, `Standard.jsx`, `About.jsx`, `icons.jsx` (Lucide wrapper + the calibration-plot figure; the hero's causal-DAG figure is the shared **CausalBayesNet** component from the bundle).
- `ocs-deck/` — an institutional presentation deck (`deck-stage.js`) with eight slide types: Title, Section divider, Agenda, Content, Comparison, Data, Quote, and Closing. Plain-HTML slides styled with the OCS tokens/classes (navy + cardinal, Spectral/Plex, measured-grid motif). Arrow-key nav, thumbnail rail, and print-to-PDF built in. `index.html` is the entry (tagged `@template`); `deck-stage.js` is the deck shell component.

**Assets** — `assets/`

- `ocs-mark-color.svg` (solid circular-arrow loop, brand navy `#173E69` — light bg), `ocs-mark.svg` (same loop, white — dark bg).

**Other**

- `readme.md` (this file) · `SKILL.md` (Agent-Skill manifest).

---

### Caveats & substitutions

- **No source material was provided.** Everything here is an original proposal, not a recreation. Reconcile against real OCS assets when available.
- **Fonts** load from the Google Fonts CDN (`tokens/fonts.css`), so the compiler reports zero local `@font-face` rules. To self-host, drop `.woff2` files in a `fonts/` folder and replace the `@import` with local `@font-face` rules.
- **Icons** use **Lucide** from CDN — a substitution, since OCS had no icon set.
