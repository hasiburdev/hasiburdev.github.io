# Theme System

## Purpose

Manages dark/light mode toggling with CSS custom properties, localStorage persistence, OS preference detection, and semantic token sets per theme.

## Requirements

### Requirement: Dark/light mode toggle
The system SHALL provide a toggle button that switches between dark and light themes. The toggle SHALL be visible in the header on all pages.

#### Scenario: Toggle switches theme
- **WHEN** user clicks the theme toggle button
- **THEN** the page theme switches from dark to light or light to dark

#### Scenario: Toggle icon reflects current theme
- **WHEN** the current theme is dark
- **THEN** the toggle displays a sun/moon icon indicating the opposite theme is available

### Requirement: Theme persistence
The system SHALL save the user's theme preference to localStorage and restore it on subsequent visits.

#### Scenario: Returning visitor sees saved theme
- **WHEN** a user has previously selected light mode and returns to the site
- **THEN** the site loads in light mode without flash

#### Scenario: First visit uses system preference
- **WHEN** a user visits the site for the first time with no localStorage value
- **THEN** the theme matches their OS `prefers-color-scheme` setting

### Requirement: No flash of wrong theme
The system SHALL apply the correct theme before the first paint to prevent a flash of incorrect theme (FOUT).

#### Scenario: Theme script runs before paint
- **WHEN** the HTML document begins rendering
- **THEN** the `data-theme` attribute is set on `<html>` before any visible content renders

### Requirement: Semantic token sets for themes
The system SHALL define two semantic token sets — one for dark mode and one for light mode — that remap the same primitive tokens to purpose-based names. The active set SHALL be controlled by the `data-theme` attribute.

#### Scenario: Dark mode semantic tokens
- **WHEN** `data-theme="dark"` is set on `<html>`
- **THEN** semantic tokens resolve to dark values: `--color-bg-primary` → `#0A0A0A`, `--color-fg-primary` → `#FAFAFA`, `--color-accent` → `#00FFAA`

#### Scenario: Light mode semantic tokens
- **WHEN** `data-theme="light"` is set on `<html>`
- **THEN** semantic tokens resolve to light values: `--color-bg-primary` → `#FAFAFA`, `--color-fg-primary` → `#0A0A0A`, `--color-accent` → `#00AA77`

#### Scenario: All components use semantic tokens
- **WHEN** any component renders in either theme
- **THEN** it references only semantic token names (e.g., `--color-bg-primary`), never raw hex values

### Requirement: ThemeToggle component
The system SHALL provide a `ThemeToggle` component in `src/components/ui/` that encapsulates the toggle button and its client-side logic.

#### Scenario: Component renders accessible button
- **WHEN** the ThemeToggle component is rendered
- **THEN** it outputs a `<button>` element with appropriate `aria-label` for screen readers
