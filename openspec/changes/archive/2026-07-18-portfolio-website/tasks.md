## 1. Project Setup

- [x] 1.1 Install dependencies: `@astrojs/tailwind`, `tailwindcss` v4, `style-dictionary`
- [x] 1.2 Configure `astro.config.mjs` with Tailwind CSS integration
- [x] 1.3 Create `src/styles/global.css` with base resets, typography, and generated token CSS import

## 2. Design Token System

- [x] 2.1 Create `src/tokens/primitives.json` with raw color, font, spacing, border, motion, shadow, and layout values
- [x] 2.2 Create `src/tokens/semantic/dark.json` mapping primitives to purpose-based names for dark mode
- [x] 2.3 Create `src/tokens/semantic/light.json` mapping primitives to purpose-based names for light mode
- [x] 2.4 Create `src/tokens/config.js` for Style Dictionary build configuration (dark + light theme outputs)
- [x] 2.5 Run Style Dictionary build and verify `src/tokens/generated/tokens.css` is produced
- [x] 2.6 Add `tokens:build` script to `package.json` and integrate with Astro dev/build workflow
- [x] 2.7 Map token CSS variables to Tailwind v4 via `@theme` directive in `global.css`

## 3. Theme System

- [x] 3.1 Create inline `<script>` for theme initialization in `<head>` (reads localStorage, detects OS preference, sets `data-theme` on `<html>` before paint)
- [x] 3.2 Create `src/components/ui/ThemeToggle.astro` with toggle button, client-side JS for switching, and localStorage persistence
- [x] 3.3 Test dark/light mode toggle across all pages and verify no FOUT

## 4. Layout & Navigation

- [x] 4.1 Create `src/layouts/BaseLayout.astro` with HTML shell, `<head>` meta tags, Google Fonts link (JetBrains Mono), global CSS import, and theme script
- [x] 4.2 Create `src/components/layout/Header.astro` with navigation links (About, Blogs, Contact) and ThemeToggle
- [x] 4.3 Create `src/components/layout/Footer.astro` with copyright and social links (GitHub, LinkedIn, Facebook placeholders)
- [x] 4.4 Add responsive styles for mobile header navigation

## 5. UI Components

- [x] 5.1 Create `src/components/ui/Button.astro` with token-based accent color styling and variant support
- [x] 5.2 Create `src/components/ui/SectionTitle.astro` with terminal-style `> title_` rendering using accent token
- [x] 5.3 Create `src/components/ui/SkillBadge.astro` for tech skill pills using token-based colors and spacing
- [x] 5.4 Create `src/components/ui/ExternalLink.astro` with `target="_blank"` and `rel="noopener noreferrer"`

## 6. Homepage

- [x] 6.1 Create `src/pages/index.astro` with BaseLayout, hero section containing placeholder avatar, name, title, tagline
- [x] 6.2 Add social links (GitHub, LinkedIn, Facebook) to hero section using ExternalLink component
- [x] 6.3 Style hero section with minimal centered layout using token-based spacing

## 7. About Page

- [x] 7.1 Create `src/pages/about.astro` with BaseLayout and bio section (photo, name, title, bio paragraph)
- [x] 7.2 Add tech stack / skills section with SkillBadge components organized by category (Languages, Frameworks, Tools)
- [x] 7.3 Create `src/components/features/ExperienceTimeline.astro` for work history display
- [x] 7.4 Add dummy experience entries in reverse chronological order

## 8. Blog System

- [x] 8.1 Define Astro content collection schema in `src/content.config.ts` with title, date, description, and optional tags fields
- [x] 8.2 Create 3+ dummy blog posts in `src/content/blog/` with realistic content and fenced code blocks
- [x] 8.3 Create `src/pages/blogs/index.astro` listing page showing posts in reverse chronological order with title, date, description
- [x] 8.4 Create `src/pages/blogs/[...slug].astro` for individual blog post rendering with Markdown content
- [x] 8.5 Configure Shiki syntax highlighting with github-dark theme for code blocks
- [x] 8.6 Add "Back to blog" navigation link on individual post pages

## 9. Contact Page

- [x] 9.1 Create `src/pages/contact.astro` with BaseLayout and styled mailto link
- [x] 9.2 Add brief descriptive text around the email link (no form)

## 10. Error Pages

- [x] 10.1 Create `src/pages/404.astro` with styled "page not found" message and link back to homepage

## 11. Polish & Verification

- [x] 11.1 Verify all pages render correctly in both dark and light modes
- [x] 11.2 Test responsive layout on mobile, tablet, and desktop viewports
- [x] 11.3 Run `astro build` and verify static output works correctly
- [x] 11.4 Verify blog post pages render Markdown with syntax highlighting
- [x] 11.5 Audit all components to confirm no hardcoded color/spacing values remain
