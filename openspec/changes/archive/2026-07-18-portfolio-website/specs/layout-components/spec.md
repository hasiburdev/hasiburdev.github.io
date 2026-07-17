## ADDED Requirements

### Requirement: BaseLayout
The system SHALL provide a `BaseLayout` in `src/layouts/BaseLayout.astro` that wraps all pages with the HTML shell, head metadata, font loading, global styles, and the theme initialization script.

#### Scenario: Page renders inside BaseLayout
- **WHEN** any page uses `BaseLayout`
- **THEN** it includes `<head>` with meta tags, Google Fonts link, global CSS, and the inline theme script

#### Scenario: Theme script runs inline
- **WHEN** the BaseLayout renders
- **THEN** an inline `<script>` in `<head>` reads localStorage and sets `data-theme` on `<html>` before paint

### Requirement: Header component
The system SHALL provide a `Header` component in `src/components/layout/Header.astro` with navigation links and the theme toggle.

#### Scenario: Navigation links
- **WHEN** the Header renders
- **THEN** it displays links to About, Blogs, and Contact pages, plus the site name/logo

#### Scenario: Theme toggle in header
- **WHEN** the Header renders
- **THEN** it includes the ThemeToggle component

### Requirement: Footer component
The system SHALL provide a `Footer` component in `src/components/layout/Footer.astro` with copyright information and social links.

#### Scenario: Footer displays copyright
- **WHEN** the Footer renders
- **THEN** it shows the current year and site owner name

#### Scenario: Footer displays social links
- **WHEN** the Footer renders
- **THEN** it shows links to GitHub, LinkedIn, and Facebook (placeholder URLs)

### Requirement: Responsive layout
The system SHALL provide a responsive layout that works on mobile, tablet, and desktop screens.

#### Scenario: Mobile navigation
- **WHEN** the viewport width is less than 768px
- **THEN** the header navigation adapts to a mobile-friendly layout

#### Scenario: Content max-width
- **WHEN** pages render on wide screens
- **THEN** content is constrained to a readable max-width and centered
