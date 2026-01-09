# Portfolio

A modern, responsive portfolio website built with SvelteKit and TailwindCSS. This was built as a small school project and I'm planning to improve upon it further on.

This project is a Lexicon assignment.

## Features

- Modern, responsive design with TailwindCSS 4
- Fast page loads with SvelteKit's server-side rendering
- Mobile-first responsive layout
- Dynamic project pages with individual routes
- Project showcase with card components
- About and Contact pages
- TypeScript for type safety

## Tech Stack

- **Framework:** SvelteKit 2
- **Language:** TypeScript
- **Styling:** TailwindCSS 4
- **Build Tool:** Vite
- **Code Quality:** ESLint + Prettier
- **Deployment:** Adapter Netlify

## Live Site

[View the live portfolio](https://arh-lexicon-portfolio.netlify.app/)

## Getting Started (for local testing)

### Prerequisites

- Node.js (v18 or higher recommended)
- npm or pnpm

### Install dependencies

```bash
npm install
```

### Run development server

```bash
npm run dev
```

The site will be available at `http://localhost:5173`

### Build for production

```bash
npm run build
```

### Preview production build

```bash
npm preview
```

### Linting and formatting

```bash
# Check for linting issues
npm run lint

# Format code
npm run format
```

## Project Structure

- `src/lib/components/` - Reusable UI components (project cards)
- `src/lib/types.ts` - TypeScript interfaces for project data
- `src/routes/` - SvelteKit routes (Home, About, Contact, Projects with dynamic [project] pages)
- `src/app.css` - Global styles
- `src/app.html` - HTML template
- `static/project-images/` - Project screenshots and thumbnails
- Config files: `svelte.config.js`, `vite.config.ts`, `tsconfig.json`, `eslint.config.js`

## License

© 2026 Arden Haldorson
