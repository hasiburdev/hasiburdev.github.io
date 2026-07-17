## ADDED Requirements

### Requirement: Token-based component styling
All UI components SHALL be styled exclusively using design tokens (semantic CSS custom properties). No component SHALL use hardcoded color, spacing, or typography values.

#### Scenario: No hardcoded values
- **WHEN** any UI component is inspected
- **THEN** all visual properties (color, spacing, border-radius, font-size, shadow) reference CSS custom properties from the token system

#### Scenario: Uniform appearance across components
- **WHEN** multiple components render on the same page
- **THEN** they share consistent spacing, colors, and border-radius via shared token references

### Requirement: Button component
The system SHALL provide a `Button` component in `src/components/ui/Button.astro` with consistent styling for interactive elements.

#### Scenario: Button renders with accent color
- **WHEN** the Button component renders
- **THEN** it uses `--color-accent` token for its primary styling

#### Scenario: Button supports variants
- **WHEN** the Button receives a `variant` prop
- **THEN** it renders with the appropriate style (e.g., solid, outline) using token references

### Requirement: SectionTitle component
The system SHALL provide a `SectionTitle` component in `src/components/ui/SectionTitle.astro` for page section headings styled with the terminal aesthetic.

#### Scenario: Section title renders with terminal style
- **WHEN** the SectionTitle renders with text "about"
- **THEN** it displays as `> about_` using `--color-accent` token

### Requirement: SkillBadge component
The system SHALL provide a `SkillBadge` component in `src/components/ui/SkillBadge.astro` for displaying individual tech skills.

#### Scenario: Skill badge renders
- **WHEN** a SkillBadge receives a skill name
- **THEN** it renders as a styled pill/badge using token-based colors, spacing, and border-radius

### Requirement: ExternalLink component
The system SHALL provide an `ExternalLink` component in `src/components/ui/ExternalLink.astro` for styled external links with consistent formatting.

#### Scenario: External link renders
- **WHEN** the ExternalLink component renders with an href and label
- **THEN** it renders an `<a>` tag with `target="_blank"`, `rel="noopener noreferrer"`, and token-based styling
