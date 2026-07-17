# Error Pages

## Purpose

Custom 404 error page with site-consistent styling.

## Requirements

### Requirement: Custom 404 page
The system SHALL provide a custom 404 error page at `src/pages/404.astro` that displays a styled "not found" message.

#### Scenario: 404 page renders
- **WHEN** a user navigates to a non-existent route
- **THEN** the custom 404 page is displayed with a "page not found" message

#### Scenario: 404 page includes navigation
- **WHEN** the 404 page renders
- **THEN** it includes a link back to the homepage

#### Scenario: 404 page matches site design
- **WHEN** the 404 page renders
- **THEN** it uses the same typography, colors, and layout as the rest of the site
