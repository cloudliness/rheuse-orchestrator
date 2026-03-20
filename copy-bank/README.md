# Copy Bank — EcoReusable

This folder contains all marketing and product copy for the EcoReusable e-commerce site. All content is managed by the **Copywriting Agent** and must follow the [Tone of Voice](../docs/tone-of-voice.md) guidelines.

## Folder Structure

```
copy-bank/
├── README.md              ← You are here
├── products/              ← One .md file per product (named by SKU or slug)
│   ├── bamboo-utensil-set.md
│   ├── stainless-steel-bottle.md
│   └── ...
├── pages/                 ← Site page copy
│   ├── homepage.md
│   ├── about.md
│   ├── faq.md
│   └── category-[name].md
├── emails/                ← Email templates
│   ├── order-confirmation.md
│   ├── shipping-notification.md
│   └── welcome.md
└── marketing/             ← Ad copy, social, campaigns
    ├── social-snippets.md
    └── seasonal/
```

## Rules

1. **Always read brand docs first** — `docs/brand-guidelines.md` and `docs/tone-of-voice.md`
2. **Use product data as source of truth** — `docs/products-mvp.csv` for specs and claims
3. **Include SEO fields** — every product and page file must have `SEO Title` and `SEO Meta Description`
4. **No unverified eco-claims** — only use sustainability language that's backed by product data
5. **Naming convention** — files use kebab-case, matching the product slug or page route

## Product Copy Template

```markdown
# [Product Title]

## Tagline
_One-line emotional hook_

## Short Description
_1–2 sentences for product cards and listings_

## Long Description
_3–4 paragraphs for the product detail page_

## Key Benefits
- Benefit 1
- Benefit 2
- Benefit 3
- Benefit 4

## SEO Title
_Max 60 characters_

## SEO Meta Description
_Max 155 characters_
```
