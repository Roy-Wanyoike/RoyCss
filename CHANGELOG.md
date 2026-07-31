# Changelog

All notable changes to RoyCSS will be documented in this file.

The format is based on [Keep a Changelog](https://keepachangelog.com/en/1.1.0/),
and this project adheres to [Semantic Versioning](https://semver.org/spec/v2.0.0.html).

## [Unreleased]

> Add new entries by dropping a markdown file in
> `scripts/release/changelog-entries/` (see `_EXAMPLE.md` for the
> template). `bun run scripts/release/generate-changelog.ts` assembles
> this section from those entries. When cutting a release, rename
> `[Unreleased]` to `[x.y.z] — YYYY-MM-DD` and add a fresh empty
> `[Unreleased]` above it.

### Added

- _(nothing yet)_

### Changed

- _(nothing yet)_

### Deprecated

- _(nothing yet)_

### Removed

- _(nothing yet)_

### Fixed

- _(nothing yet)_

### Security

- _(nothing yet)_

## [1.0.0] — 2026-07-28

### Added

- **1569+ CSS effects** across 20+ categories:
  - Animations (181), Visual Effects (131+), Backgrounds (93+), Text Effects (62+),
    Hover Effects (48+), Microinteractions (37+), Cards (32+), Loaders (30+),
    Buttons (30+), Particles (22+), Scroll Effects (21+), 3D & Transforms (20+),
    Glass & Modern UI (19+), Borders (15+), Filters (15+), Miscellaneous (15+),
    Page Transitions (12+), Cursor Effects (12+), Navigation (10+), Forms & Inputs (10+)
- **OKLCH color space** with `color-mix()` throughout — zero hex/rgba remaining
- **CSS logical properties** for RTL/I18n support (`inline-size`, `margin-block`, etc.)
- **Modern CSS features**: `@property`, container queries, `:has()`, `:where()`,
  CSS nesting, `light-dark()`, scroll-driven animations, View Transitions API
- **Dynamic CSS loading** via `IntersectionObserver` (10KB initial, 98.7% reduction)
- **Virtual scrolling** for the effects grid (1569 cards → 24 rendered)
- **Offscreen animation pausing** (`animation-play-state: paused`)
- **Color customization** with full OKLCH mapping (14 presets including white & black)
- **Framework adapters** for React, Vue, Angular, Svelte, Next.js, and vanilla HTML
- **CLI tool** with 8 commands: `init`, `add`, `search`, `list`, `categories`, `info`, `doctor`, `version`
- **MCP Server** for AI assistants (Claude, Cursor, Windsurf, Codex) — 7 tools, 12 recipes
- **RoyCSS Recipes** — 12 curated UI pattern recipes across 8 categories
- **VS Code snippets** — 689 snippets for all effects
- **Favorites system** with localStorage persistence and `.css` export
- **Contact form** with Prisma + SQLite backend
- **Platform ecosystem vision** — 16+ products, 10+ differentiators, 5 sponsor tiers
- **Sponsorship system** — Founder, Community, Gold, Platinum, Technology Partner tiers
- **Sponsor modal** with GitHub Sponsors + Stripe (coming soon) payment options
- **Featured companies** with unique tier-colored glows + badges
- **Mobile-responsive** design with hamburger menu and 44px touch targets
- **Dark/light mode** with system preference detection
- **WCAG 2.1 AA** accessibility compliance
- **`prefers-reduced-motion`** and `prefers-contrast` support
- **Source maps** for minified CSS
- **ESM + CommonJS** dual module exports
- **TypeScript declarations** for effects metadata

### Package Exports

| Path | Description |
|---|---|
| `roycss` | Effects metadata (ESM/CJS) |
| `roycss/css` | Full CSS (828KB) |
| `roycss/min` | Minified CSS (692KB) |
| `roycss/effects` | Effects metadata (alt entry) |
| `roycss/effects.json` | Raw JSON metadata |

### Install Options

```bash
npm install roycss
pnpm add roycss
yarn add roycss
bun add roycss
deno add npm:roycss
```

### CDN

```html
<link rel="stylesheet" href="https://unpkg.com/roycss/dist/roycss.min.css" />
```

---

[Unreleased]: https://github.com/Roy-Wanyoike/roycss/compare/v1.0.0...HEAD
[1.0.0]: https://github.com/Roy-Wanyoike/roycss/releases/tag/v1.0.0
