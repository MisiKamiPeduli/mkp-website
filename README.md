# MKP Website

Official website for Misi Kami Peduli (MKP) — a public, informational site
(not a dashboard or app). Built with Next.js (App Router), TypeScript, and
Tailwind CSS.

## Getting Started

```bash
npm install
npm run dev
```

Open [http://localhost:3000](http://localhost:3000) to view the site.

## Scripts

- `npm run dev` — start the local dev server
- `npm run build` — production build
- `npm run start` — run the production build locally
- `npm run lint` — run ESLint
- `npm run typecheck` — run the TypeScript compiler with no output

## Routes

| Path | Page |
| --- | --- |
| `/` | Landing Page (includes current MKP program overview, e.g. MKP 2027: Way Kambas, Lampung) |
| `/about` | About Us |
| `/about/past-sponsors` | Past Sponsors |
| `/about/our-team` | Our Team |
| `/programs` | Current Programs |
| `/programs/past` | Past Programs |

## Project structure

```
src/
  app/                  # routes (App Router)
    about/_components/  # sections used only by that route (colocated, not routable)
  components/layout/    # Navbar, Footer, and shared layout pieces
  components/ui/        # reusable primitives (Button, Polaroid, SectionTag)
  lib/site-config.ts    # site metadata + navigation structure (single source of truth)
```

Navigation (including dropdown items) is defined once in
[`src/lib/site-config.ts`](src/lib/site-config.ts) and consumed by both the
`Navbar` and `Footer` components — add or rename a route there and both
update automatically.

This is currently a project foundation: routing, shared layout, navigation,
and footer are in place, but pages use placeholder content pending the
Figma designs.

## Typography

- Headings (`h1`–`h6`): Libre Baskerville.
- Body text, navigation, and controls: Inter.
- Handwritten accents (e.g. the "MKP" in "About MKP"): Dancing Script, via `font-script`.

Fonts are loaded through `next/font/google` in `src/app/layout.tsx` and
self-hosted by Next.js. Global defaults are defined in `src/app/globals.css`.
Use Tailwind's `font-heading` for heading-style text outside heading elements
and `font-sans` for normal text.
