# The Chaos Clarifier

A calm, elegant one-page website for **The Chaos Clarifier** — virtual operational, administrative, and social media support for overwhelmed small business owners.

## Two versions in this repo

| File / Folder | Purpose |
|---|---|
| `index.html` | Self-contained static site deployed to **GitHub Pages** |
| `src/` | Full TanStack Start (React 19 + Vite 7) app for the Lovable preview / production deploy |

## GitHub Pages

The static `index.html` is published automatically by `.github/workflows/static.yml` on every push to `main`.

Site source: this repo root → served at `https://<your-username>.github.io/<repo-name>/`.

> **Setup check:** In GitHub → Settings → Pages, set **Source = "GitHub Actions"**.

## Tech Stack (app version)

- TanStack Start (React 19, Vite 7)
- Tailwind CSS v4 via `src/styles.css`
- shadcn/ui + lucide-react
- Fonts: Cormorant Garamond, Dancing Script, Inter
- Deploy target: Cloudflare Workers

## Design System

Semantic tokens defined in `src/styles.css` using `oklch()`:
Cream, Sage, Blush palette — calming, editorial, never corporate.

## Local Development

```bash
bun install
bun dev          # dev server
bun run build    # production build
bun run preview  # preview build
```

## Editing Content

- Homepage sections → `src/routes/index.tsx`
- Root layout / SEO → `src/routes/__root.tsx`
- Design tokens → `src/styles.css`
- Images → `src/assets/`
- Static GitHub Pages version → `index.html`

## SEO

Single `<h1>`, Open Graph + Twitter meta, `public/robots.txt`, mobile-first responsive.
