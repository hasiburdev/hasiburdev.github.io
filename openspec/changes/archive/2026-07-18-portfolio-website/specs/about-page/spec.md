## ADDED Requirements

### Requirement: Bio section
The About page SHALL display a bio section with the site owner's photo, name, title, and a short bio paragraph.

#### Scenario: Bio displays all elements
- **WHEN** the About page loads
- **THEN** it shows the placeholder avatar, name, title, and a bio paragraph (dummy data)

### Requirement: Tech stack / skills section
The About page SHALL display a skills section showing technologies organized by category.

#### Scenario: Skills render in categories
- **WHEN** the About page loads
- **THEN** skills are displayed in categories (e.g., Languages, Frameworks, Tools) with SkillBadge components

### Requirement: Experience timeline
The About page SHALL display an experience timeline showing work history in reverse chronological order.

#### Scenario: Timeline entries render
- **WHEN** the About page loads
- **THEN** experience entries are displayed with date range, role, company, and description (dummy data)

#### Scenario: Timeline is chronological
- **WHEN** multiple experience entries exist
- **THEN** they are ordered from most recent to oldest
