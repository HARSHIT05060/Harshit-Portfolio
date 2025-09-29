
# Harshit's Portfolio

A personal portfolio website built with React and Vite. It showcases projects, skills, and contact information. The site uses Tailwind CSS for utility-first styling, Vite for fast development, and a small component-based structure in `src/Components`.

## Quick demo

- Live/demo: (add URL here if deployed)
- Resume: `public/HARSHIT_KAPADIA_RESUME_.pdf`

## Tech stack

- React 19
- Vite (dev server & build)
- Tailwind CSS
- PostCSS + Autoprefixer
- ESLint
- React Router DOM
- lucide-react (icons)

These are defined in `package.json`.

## Project structure (important files)

- `index.html` - app entry HTML
- `src/main.jsx` - React entry point
- `src/App.jsx` - top-level app component
- `src/index.css` & `src/App.css` - global styles
- `src/Components/` - React components: `Header`, `Hero`, `About`, `FeaturedWork`, `Footer`, etc.
- `public/` - static assets (resume PDF, logo, images)

## Getting started (development)

Prerequisites: Node.js (18+ recommended) and npm or yarn.

1. Install dependencies

```bash
npm install
```

2. Start dev server

```bash
npm run dev
```

The app will start with Vite's dev server and support HMR.

## Build & preview

Build the production bundle:

```bash
npm run build
```

Preview the production build locally:

```bash
npm run preview
```

## Linting

Run ESLint across the project:

```bash
npm run lint
```

## Deployment

You can deploy the output from `npm run build` to any static host (Vercel, Netlify, GitHub Pages, Cloudflare Pages). For Vercel/Netlify, connect your repository and set the build command to `npm run build` and the publish directory to `dist`.

## Customization

- Update content in `src/Components` and styles in `src/index.css` / `tailwind.config.js`.
- Replace images in `src/assets` or `public` to change visuals.

## Contact

Harshit Kapadia — add your preferred contact info here (email, LinkedIn, GitHub, etc.)

## License

This repository is available under the MIT License. Replace or add a LICENSE file if you need a different license.

---

If you'd like, I can also:

- add a short screenshot or GIF to the README
- add deployment instructions for a specific host (Vercel/Netlify)
- create a `LICENSE` file or social/contact links

Tell me which of those you'd like next and I'll add them.
