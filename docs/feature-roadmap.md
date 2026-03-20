# EcoReusable — Feature Roadmap

## Phase Overview

| Phase | Name | Status | Key Deliverables |
|-------|------|--------|-----------------|
| 0 | Planning & Design | **Complete** | Open questions resolved, agent system operational |
| 1 | Brand & Product Definition | **Complete** | Brand name: Rheuse, guidelines, tone of voice, 30-SKU product catalog |
| 2 | Static Catalog & Design System | **Complete** | Design tokens, component library, product pages, category pages |
| 3 | Cart & Checkout Flow | **Complete** | Cart functionality, checkout form, address validation |
| 4 | Payments + Orders + Emails | Not started | Stripe integration, order lifecycle, confirmation emails |
| 5 | Legal, SEO, Performance, A11y | Not started | Legal pages, meta tags, Lighthouse ≥ 90, WCAG 2.2 AA |
| 6 | Launch + Post-launch Iteration | Not started | Production deployment, monitoring, iteration based on data |

---

## Phase 0 — Planning & Design

- [x] Resolve open questions (brand name: Rheuse, 30 SKUs, guest checkout, US only, self-verified claims, bundles post-launch)
- [x] Record all decisions in `docs/decision-log.md`
- [x] Agent system operational and tested

## Phase 1 — Brand & Product Definition

- [x] Brand name finalized — Rheuse ("Made to be kept.")
- [x] Color palette defined with Tailwind mappings (Forest/Linen/Terracotta/Ivory/Charcoal/Driftwood/Ember)
- [x] Typography stack selected (DM Serif Display / DM Sans / JetBrains Mono)
- [x] Tone of voice document completed with Rheuse-specific examples
- [x] MVP product catalog (products-mvp.csv) — 30 SKUs across 7 categories
- [x] Product tiers defined (Good $8–15 / Better $15–30 / Best $30–60)
- [x] Pricing strategy documented with margin targets and 6 post-launch bundle concepts

## Phase 2 — Static Catalog & Design System

- [x] Design tokens documented (spacing, colors, breakpoints, shadows)
- [x] Component specs for atoms, molecules, organisms
- [x] Next.js project initialized with TypeScript + Tailwind + shadcn/ui
- [x] Homepage implemented
- [x] Category listing pages implemented
- [x] Product detail page implemented
- [x] Header and footer components
- [ ] Responsive design verified (mobile, tablet, desktop)

## Phase 3 — Cart & Checkout Flow

- [x] Cart state management (add, remove, update quantity)
- [x] Cart drawer or page UI
- [x] Checkout form (shipping address, contact info)
- [x] Form validation
- [x] Order summary component

## Phase 4 — Payments + Orders + Emails

- [ ] Stripe Products and Prices created
- [ ] Stripe Checkout Session API route
- [ ] Webhook handler for payment events
- [ ] Order confirmation page
- [ ] Order confirmation email
- [ ] Database schema for orders and order items
- [ ] Admin order view (basic)

## Phase 5 — Legal, SEO, Performance, A11y

- [ ] Privacy policy published
- [ ] Terms of service published
- [ ] Shipping & returns policy published
- [ ] Cookie consent mechanism
- [ ] Meta tags on all pages (title, description, OG)
- [ ] Schema.org markup (Product, Organization, Breadcrumb)
- [ ] Sitemap and robots.txt
- [ ] Lighthouse Performance ≥ 90
- [ ] Lighthouse Accessibility ≥ 90
- [ ] WCAG 2.2 AA audit passed
- [ ] Eco-claims verified against FTC Green Guides

## Phase 6 — Launch + Post-launch

- [ ] Production deployment on Vercel
- [ ] Custom domain with SSL
- [ ] CI/CD pipeline (GitHub Actions)
- [ ] Error monitoring configured
- [ ] Analytics installed (Vercel Analytics + Plausible)
- [ ] Launch day checklist completed
- [ ] Post-launch: gather user feedback and iterate

---

_This document is maintained by the **Master Orchestrator**. Update phase statuses as work progresses._
