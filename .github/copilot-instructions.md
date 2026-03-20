# EcoReusable — Project Guidelines

## Mission

Build a modern, conversion-optimized e-commerce website selling **reusable, eco-friendly alternatives** to single-use items. Business thesis: people want convenience + ethics — high-quality, beautiful, durable reusables that feel like upgrades, not sacrifices.

## Technology Stack

- **Framework**: Next.js 14+ App Router (TypeScript, strict mode)
- **Styling**: Tailwind CSS + shadcn/ui + custom components
- **E-commerce**: Stripe (Products + Prices + Checkout) + PostgreSQL
- **Database**: PostgreSQL (Neon / Supabase / Vercel Postgres)
- **Images & CDN**: Cloudinary or Vercel Blob + Next Image
- **Analytics**: Vercel Analytics + Plausible (privacy-friendly)
- **Email**: Resend or Postmark
- **Testing**: Playwright (E2E), Vitest (unit)
- **Hosting**: Vercel
- **CI/CD**: GitHub Actions

## Naming Conventions

- **Files & folders**: kebab-case (`product-card.tsx`, `checkout-flow/`)
- **React components**: PascalCase (`ProductCard`, `CheckoutFlow`)
- **Variables & functions**: camelCase
- **Constants**: UPPER_SNAKE_CASE
- **Database tables**: snake_case
- **CSS classes**: Tailwind utility-first; custom classes use kebab-case

## Architecture

- `/app` — Next.js App Router pages and layouts
- `/components` — Reusable React components (PascalCase filenames)
- `/lib` — Utilities, helpers, type definitions, API clients
- `/app/api` — API routes (REST endpoints)
- `/public` — Static assets
- `/docs` — Project documentation (see below)
- `/copy-bank` — Marketing and product copy (managed by Copywriting Agent)
- `/legal` — Legal documents (privacy, terms, shipping)

## Key Documentation

- [Brand Guidelines](docs/brand-guidelines.md) — Colors, typography, logo, voice
- [Tone of Voice](docs/tone-of-voice.md) — Writing personality and examples
- [Decision Log](docs/decision-log.md) — Architectural and business decisions
- [Tech Debt](docs/tech-debt.md) — Known shortcuts and planned improvements
- [Feature Roadmap](docs/feature-roadmap.md) — Phase 0–6 delivery plan
- [SEO Checklist](docs/seo-checklist.md) — Search optimization tracking

## Phase Roadmap

| Phase | Name | Status |
|-------|------|--------|
| 0 | Planning & Design | Active |
| 1 | Brand & Product Definition | Not started |
| 2 | Static Catalog & Design System | Not started |
| 3 | Cart & Checkout Flow | Not started |
| 4 | Payments + Orders + Emails | Not started |
| 5 | Legal, SEO, Performance, A11y | Not started |
| 6 | Launch + Post-launch Iteration | Not started |

## Agent Communication Rules

1. Every delegated task must have **clear success criteria** before work begins
2. Sub-agents return **diff-like summaries** when updating code or documents
3. The orchestrator can reject work with numbered reasoning
4. Sub-agents must ask clarifying questions before starting large pieces of work
5. All agents must read and reference **brand-guidelines.md** and **tone-of-voice.md** when producing user-facing content
6. Follow the naming conventions above — no exceptions without orchestrator approval

## Code Quality

- TypeScript strict mode — no `any` types without justification
- Server Components by default; Client Components only when interactivity is needed
- Validate all user input at API boundaries
- Never store raw payment card data — use Stripe tokens
- Never commit secrets — use environment variables
- Run `npm run lint` and `npm run build` to verify changes
