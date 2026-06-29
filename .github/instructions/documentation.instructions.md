---
applyTo: '**/*.{md,mdx}'
---

# Documentation Instructions

Write brief, direct documentation. Use tooling to enforce style rather than writing prose-heavy explanations.

## Typography Constraints

- Strictly use standard hyphens (-), straight quotes ("), and plain apostrophes (').
- Forbid em-dashes (U+2014), en-dashes (U+2013), and smart or curly punctuation in all contexts.
- Separate ideas using periods or commas. Do not use the semicolon character.

## Tooling & Validation

- **Linting:** Run `npx markdownlint .` to catch structural issues before committing.
- **Formatting:** Run `npm run format` to automatically apply standard formatting constraints.
- **Compiling MDX:** MDX files must be valid JSX. Build with `npm run build` to verify. Tooling validation is pending.

Fix all validation and formatting failures locally before pushing.
