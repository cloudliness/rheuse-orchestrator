# EcoReusable — Decision Log

All significant project decisions are recorded here for transparency and future reference.

## Format

| Date | Decision | Rationale | Alternatives Considered | Owner |
|------|----------|-----------|------------------------|-------|
| _YYYY-MM-DD_ | _What was decided_ | _Why this choice_ | _Other options evaluated_ | _Who decided_ |

## Decisions

| Date | Decision | Rationale | Alternatives Considered | Owner |
|------|----------|-----------|------------------------|-------|
| 2025-03 | Use Next.js 14+ App Router with TypeScript | Modern React framework with SSR/SSG, strong ecosystem, Vercel-optimized hosting | Remix, Astro, plain React SPA | Orchestrator |
| 2025-03 | Use Tailwind CSS + shadcn/ui for styling | Utility-first CSS for rapid prototyping, shadcn provides accessible base components | Styled Components, CSS Modules, Material UI | Orchestrator |
| 2025-03 | Use Stripe for payments | Industry standard, excellent docs, handles PCI compliance, supports Checkout Sessions | PayPal, Square, custom payment flow | Orchestrator |
| 2025-03 | Use PostgreSQL for database | Robust relational DB, strong hosting options (Neon/Supabase/Vercel), good ORM support | MongoDB, MySQL, SQLite | Orchestrator |
| 2025-03 | Hub-and-spoke agent architecture | Orchestrator maintains coherence, prevents conflicting changes, clear accountability | Peer-to-peer agent communication | Orchestrator |
| 2026-03-19 | Brand name: **Rheuse** | Memorable portmanteau of "reuse", aligns with eco-mission, short and brandable | EcoReusable, other concepts TBD | User |
| 2026-03-19 | MVP product count: **30 SKUs** | Solid coverage across all 7 categories without overwhelming launch scope | 15 (too sparse), 50 (too much upfront work) | User |
| 2026-03-19 | **Guest checkout only** for MVP | Faster to build, lower friction for first-time buyers; user accounts planned post-launch | User accounts from day 1 | User |
| 2026-03-19 | Shipping: **US only** at launch | Simplifies logistics, tax, and compliance for MVP | US + Canada, Worldwide | User |
| 2026-03-19 | Sustainability claims: **self-verified** (material-based) | Faster to launch; claims based on specific material composition (e.g., "BPA-free stainless steel") | Require supplier certifications, third-party audits | User |
| 2026-03-19 | Subscriptions & bundles: **post-launch** | Launch with simple catalog first, add recurring/bundle features after validating demand | Include from day 1 | User |

---

_This document is maintained by the **Master Orchestrator**. Record every significant decision — even the ones that seem obvious now._
