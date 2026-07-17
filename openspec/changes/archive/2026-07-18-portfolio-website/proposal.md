## Why

Build a personal portfolio website to showcase work, blog posts, and professional background. The site needs to reflect a developer aesthetic — monospace typography, minimal black-and-white design with an accent color, dark/light mode — while being statically deployable to GitHub Pages.

## What Changes

- Set up Astro 7 with Tailwind CSS v4 (CSS-based config) on the existing project scaffold
- Create a design token system using Style Dictionary with 2-layer architecture (primitives → semantic tokens)
- Create a design system: monospace font (JetBrains Mono), B&W color palette with `#00FFAA` accent, CSS custom properties for theme switching
- Build four pages: Homepage (hero + social links), About (bio, skills, experience timeline), Blogs (content collection listing + individual post pages with syntax highlighting), Contact (mailto link)
- Implement dark/light mode toggle with localStorage persistence and OS preference detection
- Set up Astro content collections for blog posts with Markdown + Shiki syntax highlighting
- Create reusable component library under `src/components/{layout,ui,loaders,errors,features}` — all styled via design tokens for uniform appearance
- Add a 404 error page
- Populate all pages with editable dummy data

## Capabilities

### New Capabilities

- `design-token-system`: Style Dictionary setup with 2-layer token architecture (primitives → semantic), JSON source files, build pipeline to CSS custom properties, Tailwind v4 `@theme` integration
- `theme-system`: Dark/light mode toggle with semantic token sets, localStorage persistence, OS preference detection, and accent color adaptation
- `design-system`: Monospace typography (JetBrains Mono), B&W color palette, Tailwind CSS v4 configuration, global styles
- `layout-components`: BaseLayout, Header (top nav + theme toggle), Footer (copyright + social links)
- `ui-components`: Reusable UI primitives — Button, SectionTitle, SkillBadge, ThemeToggle, ExternalLink — all styled via design tokens for uniform appearance
- `homepage`: Hero section with photo, name, title, tagline, and social links
- `about-page`: Bio section, tech stack/skills grid, experience timeline
- `blog-system`: Astro content collection for blog posts, listing page, individual post pages with Shiki syntax highlighting, `/blogs/` URL structure
- `contact-page`: Mailto link with styled email block
- `error-pages`: Custom 404 page

### Modified Capabilities

<!-- None — this is a greenfield build on a fresh Astro scaffold -->

## Impact

- **Dependencies added**: `@astrojs/tailwind`, `tailwindcss` v4, `style-dictionary`
- **Existing code affected**: Replaces the default `src/pages/index.astro` and `src/layouts/Layout.astro` scaffold
- **New directories**: `src/components/{layout,ui,loaders,errors,features}`, `src/content/blog`, `src/styles/`, `src/tokens/`
- **Build pipeline**: Style Dictionary generates `src/tokens/generated/tokens.css` from JSON source
- **Deployment**: Static output to GitHub Pages (no server-side logic)
- **External services**: Google Fonts CDN for JetBrains Mono; no backend services required
