# Rheuse — Brand Guidelines

> **Status**: Active — Last updated 2026-03-19

## Brand Name

- **Name**: Rheuse
- **Tagline**: Made to be kept.
- **Domain**: rheuse.com (suggested)

## Mission Statement

Rheuse makes premium reusable products that turn everyday routines into something you feel good about — for the craft, the quality, and the planet. We believe the most sustainable choice should also be the most beautiful one.

## Color Palette

| Role | Name | Hex | Tailwind Class | Paired Foreground |
|------|------|-----|----------------|-------------------|
| Primary | Forest | `#2D5A44` | `bg-primary` / `text-primary` | `#FFFFFF` — `text-primary-foreground` |
| Secondary | Linen | `#F0EBE4` | `bg-secondary` / `text-secondary` | `#1C1917` — `text-secondary-foreground` |
| Accent | Terracotta | `#AE5630` | `bg-accent` / `text-accent` | `#FFFFFF` — `text-accent-foreground` |
| Background | Ivory | `#FAFAF7` | `bg-background` | — |
| Foreground | Charcoal | `#1C1917` | `text-foreground` | — |
| Muted | Driftwood | `#E8E4DF` | `bg-muted` | `#6B6560` — `text-muted-foreground` |
| Destructive | Ember | `#DC2626` | `bg-destructive` | `#FFFFFF` — `text-destructive-foreground` |

### Tailwind CSS Configuration

```js
// tailwind.config.ts — colors section (CSS custom properties recommended for shadcn/ui)
colors: {
  primary:    { DEFAULT: '#2D5A44', foreground: '#FFFFFF' },
  secondary:  { DEFAULT: '#F0EBE4', foreground: '#1C1917' },
  accent:     { DEFAULT: '#AE5630', foreground: '#FFFFFF' },
  background: '#FAFAF7',
  foreground: '#1C1917',
  muted:      { DEFAULT: '#E8E4DF', foreground: '#6B6560' },
  destructive:{ DEFAULT: '#DC2626', foreground: '#FFFFFF' },
}
```

### Contrast Ratios (WCAG 2.2 AA Verified)

All text/background combinations meet or exceed WCAG 2.2 AA minimums:
- Normal text: 4.5:1 minimum · Large text (18px+ bold or 24px+): 3:1 minimum

| Combination | Ratio | Passes |
|-------------|-------|--------|
| Foreground `#1C1917` on Background `#FAFAF7` | **16.6:1** | ✅ AA + AAA |
| `#FFFFFF` on Primary `#2D5A44` | **7.9:1** | ✅ AA + AAA |
| `#FFFFFF` on Accent `#AE5630` | **5.0:1** | ✅ AA |
| Foreground `#1C1917` on Secondary `#F0EBE4` | **14.6:1** | ✅ AA + AAA |
| Muted-foreground `#6B6560` on Muted `#E8E4DF` | **4.6:1** | ✅ AA |
| Muted-foreground `#6B6560` on Background `#FAFAF7` | **5.5:1** | ✅ AA |
| Primary `#2D5A44` on Background `#FAFAF7` (as text) | **7.6:1** | ✅ AA + AAA |
| Accent `#AE5630` on Background `#FAFAF7` (as text) | **4.8:1** | ✅ AA |
| `#FFFFFF` on Destructive `#DC2626` | **4.8:1** | ✅ AA |

### Usage Notes

- **Primary (Forest)** — Primary buttons, navigation, key interactive elements. Always use white text on Primary backgrounds.
- **Secondary (Linen)** — Subtle section backgrounds, hover states, card surfaces. Always use Charcoal text.
- **Accent (Terracotta)** — Call-to-action buttons, sale badges, highlighted links, promotional elements. Use white text on Accent backgrounds.
- **Muted (Driftwood)** — Disabled states, secondary info, dividers, subtle UI. Pair with `text-muted-foreground` for readable secondary text.
- **Destructive (Ember)** — Error states, destructive action buttons, validation messages only. Never use for emphasis or promotions.

## Typography

| Role | Font | Weights | Sizes | Tailwind |
|------|------|---------|-------|----------|
| Heading | DM Serif Display | 400 (Regular) | 24px–48px (`text-2xl`–`text-5xl`) | `font-heading` |
| Body | DM Sans | 400, 500, 700 | 14px–18px (`text-sm`–`text-lg`) | `font-body` |
| Mono | JetBrains Mono | 400 | 13px–14px (`text-xs`–`text-sm`) | `font-mono` |

All fonts are freely available on [Google Fonts](https://fonts.google.com).

### Tailwind Font Configuration

```js
// tailwind.config.ts — fontFamily section
fontFamily: {
  heading: ['"DM Serif Display"', 'Georgia', 'serif'],
  body:    ['"DM Sans"', 'system-ui', 'sans-serif'],
  mono:    ['"JetBrains Mono"', 'ui-monospace', 'monospace'],
}
```

### Type Scale

| Element | Font | Size | Weight | Letter Spacing | Line Height |
|---------|------|------|--------|----------------|-------------|
| H1 | DM Serif Display | 48px / `text-5xl` | 400 | -0.02em | 1.1 |
| H2 | DM Serif Display | 36px / `text-4xl` | 400 | -0.01em | 1.2 |
| H3 | DM Serif Display | 30px / `text-3xl` | 400 | -0.01em | 1.3 |
| H4 | DM Serif Display | 24px / `text-2xl` | 400 | 0 | 1.3 |
| Body | DM Sans | 16px / `text-base` | 400 | 0 | 1.6 |
| Body small | DM Sans | 14px / `text-sm` | 400 | 0 | 1.5 |
| Label / UI | DM Sans | 14px / `text-sm` | 500 | 0.01em | 1.4 |
| Button | DM Sans | 14px / `text-sm` | 700 | 0.02em | 1 |
| Code | JetBrains Mono | 13px / `text-xs` | 400 | 0 | 1.6 |

### Typography Rules

- **Headings** use DM Serif Display exclusively — never for body text or UI labels.
- **Body text** uses DM Sans at 400 weight; use 500 for emphasis within running text, 700 for buttons and strong labels.
- **Never** combine more than two font weights in a single component.
- Keep line lengths between 50–75 characters for comfortable reading.

## Logo

- **Primary logo**: A clean wordmark spelling "Rheuse" set in DM Serif Display, with the "R" featuring a subtly extended tail that curves back on itself — evoking circularity and reuse without being literal. The wordmark should be set in Forest (`#2D5A44`) on light backgrounds and white on dark backgrounds.
- **Secondary mark**: A standalone "R" monogram using the same stylized letterform. Used where the full wordmark is too wide (social avatars, app icons, packaging stamps).
- **Icon/favicon**: The "R" monogram at 32×32px, set in Forest on Ivory background, or white on Forest. Must remain legible at 16×16px — simplify the tail curve at small sizes.
- **Minimum clear space**: Equal to the cap-height of the "R" on all four sides. No other elements, text, or edges may intrude into this space.
- **Backgrounds**: The wordmark works on Ivory (`#FAFAF7`), white, Linen (`#F0EBE4`), and any neutral lighter than Secondary. On Forest, Charcoal, or photographic backgrounds, use the white wordmark. Never place the wordmark on Accent or Destructive backgrounds.
- **Don'ts**: Never stretch, rotate, add drop shadows, outline, or recolor the logo outside of Forest / white. Never recreate the wordmark in a different font.

## Visual Principles

1. **Warm minimalism** — Clean layouts with generous whitespace, warmed by natural colors and organic textures. Space is a feature, not a gap to fill.
2. **Material honesty** — Show real materials up close: bamboo grain, brushed stainless steel, cotton weave, beeswax texture. Let the product's craftsmanship speak.
3. **Photography-first** — Real product and lifestyle photography over illustrations or abstract graphics. Natural light, real environments, genuine moments.
4. **Intentional restraint** — Every color, typeface, and element earns its place. If it doesn't serve the user or strengthen the message, remove it.

## Imagery Style

### Product Photography
- **Backgrounds**: Warm, tactile surfaces — linen cloth, light wood, marble, matte ceramic. Avoid pure white seamless backdrops.
- **Lighting**: Soft natural light with gentle shadows. Slight directional warmth (golden hour feel). No harsh flash or flat studio lighting.
- **Composition**: Generous negative space around products. Show scale with everyday objects (a hand, a kitchen counter, a packed bag). Slightly elevated angles preferred over straight-on.
- **Detail shots**: Close-ups of material texture, stitching, embossed logos, lids clicking shut. These build trust in quality.

### Lifestyle Photography
- **Scenarios**: Real daily moments — morning coffee at the kitchen table, lunch at a park bench, grocery shopping with a tote, a commuter with a travel cup. Not aspirational fantasy, but elevated reality.
- **People**: Diverse, natural-looking, mid-action (not posing at camera). Clothing is casual-smart — the kind of person who owns nice things and uses them well.
- **Environments**: Bright kitchens, sunlit cafés, outdoor markets, home offices. Warm, lived-in spaces. Avoid stark minimalist sets or overly styled flat-lays.

### Color Grading & Editing
- **Warmth**: Slightly warm white balance. Lean toward golden, not blue.
- **Saturation**: Natural to slightly muted — never hyper-saturated. Greens should feel real, not neon.
- **Contrast**: Medium. Preserve shadow detail; avoid crushed blacks or blown highlights.
- **Banned**: Heavy HDR, extreme vignettes, Instagram-style filters, cool/clinical color grading.

---

_This document is maintained by the **Branding & Story Agent**. All agents producing user-facing content must reference these guidelines._
