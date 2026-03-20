# EcoReusable — SEO Checklist

> **Status**: Template — to be populated by the SEO & Content Agent

## Technical SEO

- [ ] All pages have unique `<title>` tags (≤60 characters)
- [ ] All pages have unique `<meta name="description">` (≤155 characters)
- [ ] Canonical URLs set on all pages (`<link rel="canonical">`)
- [ ] `robots.txt` configured and deployed to `/public/robots.txt`
- [ ] XML sitemap generated and submitted to Search Console
- [ ] No broken internal links (404s)
- [ ] HTTPS enforced on all pages
- [ ] Clean URL structure (no query params for content pages)

## Open Graph & Social

- [ ] `og:title` on all pages
- [ ] `og:description` on all pages
- [ ] `og:image` on all pages (1200×630 recommended)
- [ ] `og:url` on all pages
- [ ] `og:type` set appropriately (`website`, `product`)
- [ ] Twitter Card meta tags (`twitter:card`, `twitter:title`, etc.)

## Schema.org Structured Data

- [ ] `Organization` schema on homepage
- [ ] `Product` schema on product pages (name, image, price, availability)
- [ ] `BreadcrumbList` schema on category and product pages
- [ ] `FAQPage` schema on FAQ page
- [ ] `WebSite` schema with `SearchAction`
- [ ] Validated with Google Rich Results Test

## Content SEO

- [ ] H1 tag on every page (single, unique)
- [ ] Heading hierarchy (H1 → H2 → H3, no skipped levels)
- [ ] Image alt text on all meaningful images
- [ ] Internal linking strategy documented
- [ ] Blog content plan created (`docs/blog-content-plan.md`)
- [ ] Target keywords mapped to pages

## Performance (SEO Impact)

- [ ] Page load time < 3 seconds
- [ ] Mobile-friendly (passes Google Mobile-Friendly Test)
- [ ] No render-blocking resources
- [ ] Images optimized (WebP/AVIF, proper sizing, lazy loading)

## Monitoring

- [ ] Google Search Console connected
- [ ] Google Analytics or Plausible installed
- [ ] 404 error monitoring active
- [ ] Core Web Vitals tracked

---

_This document is maintained by the **SEO & Content Agent**. Check off items as they are implemented and verified._
