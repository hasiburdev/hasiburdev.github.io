# Blog System

## Purpose

Astro content collection for blog posts, listing page, individual post pages with Shiki syntax highlighting, at `/blogs/` URL structure.

## Requirements

### Requirement: Blog content collection
The system SHALL define an Astro content collection for blog posts in `src/content/blog/` with schema fields for title, date, description, and optional tags.

#### Scenario: Blog post schema
- **WHEN** a Markdown file is placed in `src/content/blog/`
- **THEN** it must include frontmatter with `title`, `date`, and `description` fields

#### Scenario: Invalid frontmatter rejected
- **WHEN** a blog post has missing required frontmatter fields
- **THEN** the build fails with a clear error message

### Requirement: Blog listing page
The system SHALL provide a blog listing page at `/blogs/` that displays all published blog posts.

#### Scenario: Posts listed in reverse chronological order
- **WHEN** the blog listing page loads
- **THEN** posts are sorted by date, most recent first

#### Scenario: Each post shows metadata
- **WHEN** a post appears in the listing
- **THEN** it displays the title, date, and description

### Requirement: Individual blog post pages
The system SHALL render individual blog posts at `/blogs/[slug]` with full content and syntax highlighting.

#### Scenario: Blog post renders with content
- **WHEN** a user navigates to `/blogs/[slug]`
- **THEN** the full Markdown content is rendered as HTML

#### Scenario: Syntax highlighting works
- **WHEN** a blog post contains fenced code blocks (e.g., ```js)
- **THEN** the code is rendered with Shiki syntax highlighting using the github-dark theme

#### Scenario: Back link to blog listing
- **WHEN** a blog post page renders
- **THEN** a "Back to blog" link is visible at the top

### Requirement: Dummy blog posts
The system SHALL include at least 3 dummy blog posts with realistic titles and content for testing.

#### Scenario: Dummy posts exist
- **WHEN** the blog listing page loads
- **THEN** at least 3 blog posts are displayed with placeholder content
