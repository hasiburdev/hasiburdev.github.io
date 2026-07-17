## ADDED Requirements

### Requirement: Mailto link
The Contact page SHALL display a styled email link that opens the user's default email client.

#### Scenario: Email link renders
- **WHEN** the Contact page loads
- **THEN** a clickable mailto link is displayed with the email address (placeholder)

#### Scenario: Email link opens client
- **WHEN** user clicks the email link
- **THEN** the browser opens the default email client with the `to` field pre-filled

### Requirement: Minimal contact page
The Contact page SHALL be minimal with just the email link and no form or backend.

#### Scenario: No form present
- **WHEN** the Contact page renders
- **THEN** there is no input form — only the email link and brief text
