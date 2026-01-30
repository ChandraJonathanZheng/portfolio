# CLAUDE.md - AI Assistant Guidelines

This file provides context and guidelines for AI assistants working with this repository.

## Project Overview

**Repository:** Portfolio Website
**Purpose:** A portfolio showcasing websites and projects the owner has been involved with across Front-end, Back-end, and Full Stack development.
**Current Stage:** Early planning/initialization phase

## Repository Structure

```
/portfolio
├── README.md           # Project description
├── logo_email.jpg      # Email branding logo asset (354×314px)
├── CLAUDE.md           # AI assistant guidelines (this file)
└── .git/               # Version control
```

## Current State

This repository is in its initial phase with minimal content:

- **Established:** Git version control, basic README, brand asset
- **Not yet configured:** Tech stack, build system, dependencies, tests

## Development Guidelines

### For AI Assistants

When working on this repository:

1. **Understand the Scope**
   - This is a portfolio project meant to showcase web development work
   - Changes should align with professional portfolio presentation standards
   - Code should be clean, well-documented, and production-ready

2. **Code Quality Standards**
   - Write semantic, accessible HTML
   - Use modern CSS practices (CSS Grid, Flexbox, CSS custom properties)
   - Follow ES6+ JavaScript conventions
   - Ensure responsive design for all screen sizes
   - Optimize for performance (lazy loading, minification, etc.)

3. **File Naming Conventions**
   - Use lowercase with hyphens for files: `my-component.js`
   - Use descriptive names that reflect content/purpose
   - Assets should be organized in appropriate subdirectories

4. **Commit Message Format**
   - Use descriptive commit messages
   - Format: `<type>: <description>`
   - Types: `add`, `update`, `fix`, `remove`, `refactor`, `docs`
   - Example: `add: homepage hero section`

5. **Assets and Media**
   - Optimize images before adding (compress, appropriate format)
   - Use WebP format when possible for web images
   - Keep original high-quality versions backed up separately

### Recommended Tech Stack (Future Implementation)

When building out this portfolio, consider:

| Category | Recommendation | Rationale |
|----------|---------------|-----------|
| Framework | Next.js, Astro, or vanilla HTML/CSS/JS | SEO-friendly, fast, portfolio-appropriate |
| Styling | Tailwind CSS or CSS Modules | Utility-first or scoped styles |
| Hosting | Vercel, Netlify, or GitHub Pages | Free tier, easy deployment |
| Build Tool | Vite (if needed) | Fast, modern bundler |

### Project Structure (When Implemented)

Suggested structure for a full implementation:

```
/portfolio
├── src/
│   ├── components/     # Reusable UI components
│   ├── pages/          # Page templates
│   ├── styles/         # Global styles and variables
│   ├── assets/         # Images, fonts, icons
│   └── data/           # Project data, content
├── public/             # Static files
├── tests/              # Test files
├── package.json        # Dependencies and scripts
├── README.md           # Documentation
└── CLAUDE.md           # AI guidelines
```

## Key Information

### Brand Assets

- **logo_email.jpg:** Email logo for branding (354×314px, 17KB JPEG)
  - Use for email signatures and correspondence
  - Consider creating SVG version for web use

### Git Workflow

- **Main branch:** For production-ready code
- **Feature branches:** Use `feature/<name>` pattern for new work
- Always pull latest changes before starting new work
- Review changes before committing

## Common Tasks

### Starting Development

When the project is ready for development:

1. Initialize package manager: `npm init -y` or `pnpm init`
2. Install framework/dependencies as chosen
3. Set up development scripts in `package.json`
4. Create `.gitignore` for node_modules, build output, etc.
5. Set up linting/formatting (ESLint, Prettier)

### Adding a Portfolio Project Entry

When adding a new project to showcase:

1. Gather project details (title, description, tech stack, links)
2. Prepare optimized screenshots/images
3. Add entry to projects data file
4. Ensure consistent formatting with existing entries

## Notes for AI Assistants

- This is a personal portfolio - maintain professional presentation
- Respect the owner's creative direction and preferences
- Ask clarifying questions for design/UX decisions
- Prioritize accessibility and performance
- Keep dependencies minimal and well-maintained
- Document any complex implementations
- Test across multiple browsers and devices

## Contact

Repository Owner: ChandraJonathanZheng
