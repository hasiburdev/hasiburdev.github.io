## ADDED Requirements

### Requirement: Style Dictionary setup
The system SHALL use Style Dictionary to manage design tokens with a 2-layer architecture: primitive tokens (raw values) → semantic tokens (purpose-based aliases). Tokens are authored as JSON and built to CSS custom properties.

#### Scenario: Token build pipeline
- **WHEN** the build runs (`style-dictionary build`)
- **THEN** JSON token files in `src/tokens/` are transformed into CSS custom properties in `src/tokens/generated/tokens.css`

#### Scenario: Primitive tokens exist
- **WHEN** the token system is set up
- **THEN** `src/tokens/primitives.json` defines raw color, font, spacing, border, motion, shadow, and layout values

#### Scenario: Semantic tokens exist
- **WHEN** the token system is set up
- **THEN** `src/tokens/semantic/dark.json` and `src/tokens/semantic/light.json` map primitives to purpose-based names

### Requirement: Monospace typography
The system SHALL use JetBrains Mono as the primary typeface loaded from Google Fonts CDN with `display=swap`.

#### Scenario: Font loads from CDN
- **WHEN** the page loads
- **THEN** JetBrains Mono is loaded from Google Fonts and applied to the `body` element

#### Scenario: Fallback font
- **WHEN** Google Fonts CDN is unavailable
- **THEN** the browser falls back to its default monospace font stack

### Requirement: Tailwind CSS v4 integration
The system SHALL use Tailwind CSS v4 via `@astrojs/tailwind` with CSS-based configuration. Design tokens SHALL be mapped to Tailwind utilities via the `@theme` directive.

#### Scenario: Tailwind utility classes work
- **WHEN** a component uses Tailwind utility classes (e.g., `class="text-lg p-4"`)
- **THEN** the styles are applied correctly in the built output

#### Scenario: Token-based Tailwind classes
- **WHEN** a component uses `bg-bg`, `text-fg`, or `text-accent`
- **THEN** the values resolve to the corresponding CSS custom properties from the token system

### Requirement: Global styles
The system SHALL define global styles in `src/styles/global.css` including base resets, typography, and the generated token CSS import.

#### Scenario: Token CSS is imported
- **WHEN** `global.css` is loaded
- **THEN** it imports `src/tokens/generated/tokens.css` making all token CSS variables available

### Requirement: Color palette
The system SHALL use a black-and-white color palette with a single accent color, defined through the design token system.

#### Scenario: All colors derive from tokens
- **WHEN** any component needs a color value
- **THEN** it references a semantic CSS custom property (`--color-bg-primary`, `--color-fg-primary`, `--color-accent`) rather than a hardcoded color value

### Requirement: Uniform component tokens
The system SHALL define component-level semantic tokens that ensure all cards, badges, and interactive elements share consistent spacing, colors, border-radius, and shadows.

#### Scenario: Component tokens exist
- **WHEN** the semantic token files are built
- **THEN** tokens like `--component-card-bg`, `--component-card-padding`, `--component-card-radius` are available

#### Scenario: Components use uniform tokens
- **WHEN** any card or component renders
- **THEN** it references component-level tokens rather than raw values, ensuring visual consistency
