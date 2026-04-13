# E-Commerce Frontend

A modern e-commerce web application built with React, TypeScript, and Vite.

## Tech Stack

- **Framework:** React 19
- **Language:** TypeScript 5.8
- **Build Tool:** Vite 6
- **Styling:** Tailwind CSS 4
- **Routing:** React Router v7
- **Animation:** GSAP with @gsap/react
- **Notifications:** react-hot-toast

## Project Structure

```
src/
├── assets/          # Images, icons, and static assets
├── components/      # Reusable UI components (empty - pending implementation)
├── context/         # React context providers (empty - pending implementation)
├── pages/           # Page components
│   └── Home.tsx     # Home page
├── routes/          # Routing configuration
│   ├── index.ts     # Router setup
│   └── routeConfig.tsx  # Route definitions
├── App.tsx          # Root component
├── main.tsx         # Application entry point
└── index.css        # Global styles
```

## Getting Started

### Prerequisites

- Node.js (v18 or higher recommended)
- npm or pnpm

### Installation

```bash
npm install
```

### Development

```bash
npm run dev
```

The application will start at `http://localhost:5173`

### Build for Production

```bash
npm run build
```

### Preview Production Build

```bash
npm run preview
```

### Linting

```bash
npm run lint
```

## Current Implementation Status

- [x] Project setup with Vite + React + TypeScript
- [x] Tailwind CSS integration
- [x] React Router v7 configuration with Data API
- [x] Basic Home page component
- [x] TypeScript strict mode enabled with `verbatimModuleSyntax` and `erasableSyntaxOnly`
- [ ] Components (pending)
- [ ] Context providers (pending)
- [ ] API integration (pending)
- [ ] Authentication (pending)
- [ ] Shopping cart (pending)
- [ ] Checkout flow (pending)

## Scripts

| Command | Description |
|---------|-------------|
| `npm run dev` | Start development server |
| `npm run build` | Build for production |
| `npm run preview` | Preview production build locally |
| `npm run lint` | Run ESLint |

## Dependencies

See [package.json](./package.json) for full list of dependencies.
