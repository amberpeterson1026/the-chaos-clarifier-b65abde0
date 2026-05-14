# The Chaos Clarifier

A modern, elegant one-page website for **The Chaos Clarifier** — a virtual business support brand offering behind-the-scenes operational, administrative, organizational, and social media support for overwhelmed small business owners.

The site is designed to feel like a calm exhale: trustworthy, personable, polished, and quietly conversion-focused.

## Tech Stack

- **Framework:** [TanStack Start](https://tanstack.com/start) (React 19 + Vite 7, file-based routing, SSR-ready)
- **Styling:** Tailwind CSS v4 with semantic design tokens defined in `src/styles.css`
- **UI Primitives:** shadcn/ui components (`src/components/ui/`)
- **Icons:** lucide-react
- **Typography:** Cormorant Garamond (display), Dancing Script (accent), Inter (body)
- **Deployment Target:** Cloudflare Workers (edge)

## Brand & Design System

Design tokens live in `src/styles.css` as `oklch()` values. Always use semantic Tailwind classes (`bg-background`, `text-primary`, etc.) rather than hard-coded colors.

| Token | Role |
|-------|------|
| Cream | Background / calm canvas |
| Sage | Primary brand accent |
| Blush | Warm secondary accent |

## Project Structure

```
src/
  routes/
    __root.tsx       # Root layout, SEO meta, global head
    index.tsx        # One-page site (hero, services, packages, process, contact)
  components/ui/     # shadcn primitives
  assets/            # Logo, hero, founder imagery
  styles.css         # Theme tokens & global styles
public/
  robots.txt
```

## Sections on the Homepage

1. **Sticky Navigation** — blurs on scroll, smooth-scroll anchors
2. **Hero** — calming headline + primary CTA
3. **Services** — 8 support categories (inbox, calendar, ops, client comms, social, docs, onboarding, reporting)
4. **Packages** — Essential ($250/mo), Growth ($500/mo, featured), Premium ($1,000/mo)
5. **Process** — 3-step onboarding flow
6. **About / Founder**
7. **Testimonials**
8. **Contact** — booking-call CTA (Calendly-ready)

## Getting Started

Install and run the dev server:

```bash
bun install
bun dev
```

The app will be available at the URL printed in the terminal.

## Scripts

- `bun dev` — start the Vite dev server
- `bun run build` — production build
- `bun run preview` — preview the production build

## Editing Content

- **Copy / services / packages:** `src/routes/index.tsx`
- **SEO meta (title, description, OG tags):** `src/routes/__root.tsx`
- **Theme colors / fonts:** `src/styles.css`
- **Images:** `src/assets/`

## SEO

- Single H1 per page, semantic HTML
- Open Graph + Twitter meta in `__root.tsx`
- `public/robots.txt` included
- Mobile-first responsive layout

## Future Integrations

- **Calendly** — drop the embed or link into the contact CTA in `src/routes/index.tsx`
- **Lovable Cloud** — enable for contact form persistence, email capture, or auth

---

Built with [Lovable](https://lovable.dev).
