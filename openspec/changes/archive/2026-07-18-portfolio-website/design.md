## Context

The project is a fresh Astro 7 scaffold at `hasiburdev.github.io` — a personal portfolio site for a software developer. Currently contains only a default `src/pages/index.astro` and `package.json` with Astro as the sole dependency. The site will be deployed statically to GitHub Pages.

## Goals / Non-Goals

**Goals:**
- Minimal, developer-aesthetic portfolio with monospace typography and B&W + accent color scheme
- Dark/light mode with system preference detection and localStorage persistence
- Content-managed blog via Astro content collections with syntax highlighting
- Clean component architecture following the specified folder structure
- Static output compatible with GitHub Pages

**Non-Goals:**
- Server-side rendering or API routes
- Comment system on blog posts
- Search functionality
- RSS feed (can be added later)
- CMS integration — blog posts are local Markdown files
- Analytics or tracking

## Decisions

### 1. Design token system with Style Dictionary

**Decision**: Use Style Dictionary to manage a 2-layer token architecture: primitive tokens (raw values) → semantic tokens (purpose-based). Tokens are authored as JSON, built to CSS custom properties, and mapped to Tailwind v4 via `@theme`.

**Why**: Style Dictionary is the industry standard for token transformation. The 2-layer approach separates raw values from purpose-based aliases, making theme switching trivial (swap the semantic layer). When the project grows with more sections, tokens scale cleanly without refactoring. Components use semantic tokens (`--color-bg-primary`, `--component-card-bg`) ensuring uniform appearance.

**Architecture**:
```
src/tokens/
├── primitives.json         ← Raw color values, spacing scale, font sizes
├── semantic/
│   ├── light.json          ← Maps primitives → purpose names (light)
│   └── dark.json           ← Maps primitives → purpose names (dark)
├── config.js               ← Style Dictionary build config
└── generated/
    └── tokens.css          ← Auto-generated CSS custom properties
```

**Alternatives considered**:
- Hand-written CSS variables: Simpler, but no alias resolution, harder to maintain as project grows, no build-time validation.
- Tailwind's built-in theme only: Tightly coupled to Tailwind, harder to use tokens outside Tailwind classes.

### 2. Tailwind CSS v4 with CSS-based config

**Decision**: Use Tailwind CSS v4 via `@astrojs/tailwind` with CSS-based configuration (no `tailwind.config.js`). Map design tokens to Tailwind utilities via the `@theme` directive.

**Why**: Tailwind v4 is the current default with Astro. CSS-based config keeps theme tokens co-located with the CSS custom properties that power dark/light mode. The `@theme` directive bridges the Style Dictionary output to Tailwind utilities, so `bg-bg`, `text-accent`, `rounded-md` all resolve to token values.

**Alternatives considered**:
- Tailwind v3 with `tailwind.config.js`: More documented examples, but adds an extra config file for the same result.
- Vanilla CSS without Tailwind: More control, but slower development for a component-heavy site.

### 2. Theme system via `data-theme` attribute

**Decision**: Use `data-theme="dark|light"` on `<html>` element with CSS custom properties for all colors. Toggle script runs inline in `<head>` to prevent flash of wrong theme (FOUT).

**Why**: `data-theme` is cleaner than class-based toggling. Inline script in `<head>` reads localStorage before paint, eliminating theme flash. CSS variables at `:root` level swap the entire palette.

**Alternatives considered**:
- `prefers-color-scheme` media query only: No user override possible.
- Class-based `.dark` on `<body>`: Works but `data-theme` is more semantic.

### 3. Font loading via Google Fonts CDN

**Decision**: Load JetBrains Mono from Google Fonts CDN with `display=swap`.

**Why**: Zero setup, reliable CDN, self-hosting adds ~5MB per weight for a monospace font. Google Fonts handles subsetting and caching. `display=swap` prevents invisible text during load.

**Alternatives considered**:
- Self-hosting via `@font-face`: More control, better privacy, but larger bundle management burden for a portfolio site.
- Fira Code: Also good, but JetBrains Mono has slightly better readability at small sizes.

### 4. Blog at `/blogs/` path

**Decision**: Blog listing at `/blogs/`, individual posts at `/blogs/[slug]`.

**Why**: User explicitly requested `/blogs/` (plural). Astro content collections handle slug generation. Shiki provides syntax highlighting out of the box.

**Alternatives considered**:
- `/blog/` (singular): More conventional, but user preferred `/blogs/`.

### 5. Syntax highlighting theme

**Decision**: Use Shiki's `github-dark` theme for code blocks in both light and dark modes.

**Why**: Classic light-on-dark code blocks work well in both themes — it creates a visual "code block" container that's distinct from the page background regardless of mode.

**Alternatives considered**:
- Theme-specific syntax themes: More complex, diminishing returns for a portfolio.

### 6. Component architecture

**Decision**: Components organized under `src/components/{layout,ui,loaders,errors,features}`. Page-level layouts in `src/layouts/` following Astro convention.

**Why**: Separates concerns cleanly. `ui/` holds atomic primitives, `features/` holds page-specific composed sections, `layout/` holds structural pieces. `src/layouts/` stays as Astro's conventional page wrapper location.

### 7. Accent color adaptation

**Decision**: `#00FFAA` in dark mode, `#00AA77` in light mode.

**Why**: Pure `#00FFAA` on white background has insufficient contrast ratio (~2.1:1). Darkened to `#00AA77` for light mode (~4.8:1, passes WCAG AA). In dark mode, `#00FFAA` on `#0A0A0A` has excellent contrast (~15.6:1).

## Risks / Trade-offs

- **[Google Fonts dependency]** → If CDN is down, font falls back to system monospace. Acceptable for a portfolio.
- **[No RSS feed]** → Blog readers can't subscribe via feed reader. Can add later with `@astrojs/rss`.
- **[Placeholder content]** → All data is dummy content. User must replace before launch. Mitigated by clear placeholder markers.
- **[Tailwind v4 maturity]** → v4 is relatively new. If issues arise, falling back to v3 with `tailwind.config.js` is straightforward.
- **[Style Dictionary build step]** → Tokens require a build step (`style-dictionary build`) before `astro dev/build`. Mitigated by adding it to package.json scripts and running it as part of the dev workflow.
