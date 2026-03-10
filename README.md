# ICCoSD-26 Conference Website

Website for the 2026 IEEE International Conference on Communication and Smart Intelligence (ICCoSD-26), December 17–18, 2026 at BIT Mesra, Ranchi.

## Quick Start

```bash
pnpm install
pnpm dev
```

Open [http://localhost:3000](http://localhost:3000). Production: `pnpm build` then `pnpm start`.

## Editing Content

All editable site content lives in a single file:

- `content/site-config.ts`

Update values in that file and refresh the site. The same source drives all pages, footer content, and search index generation.

## Project Structure

- **`app/`** – Next.js App Router pages and layout
- **`components/`** – Header, footer, hero, CTAs, search modal, etc.
- **`content/`** – Single source content config (`site-config.ts`)
- **`lib/`** – Typed page loaders + search indexing utilities
- **`public/`** – Static assets (images, logos)

## Tech Stack

Next.js (App Router), TypeScript, Tailwind CSS v4, shadcn/ui, Lucide icons. Search is client-side full-text over page content (index built at `pnpm build` into `public/search-index.json`). Run `pnpm run build:search` once if you need search in local dev before building.

## Deployment

**Vercel:** Push to your repo; Vercel will build and deploy.

**Manual:** `pnpm build && pnpm start` and serve the app (e.g. on a Node host).
