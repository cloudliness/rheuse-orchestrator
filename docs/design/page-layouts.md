# Rheuse — Page Layouts

> **Status**: Active — Last updated 2026-03-19
> References: [Brand Guidelines](../brand-guidelines.md) · [Design Tokens](design-tokens.md) · [Component Specs](component-specs.md)

---

## Homepage

### Section Order

1. AnnouncementBar
2. Header (sticky)
3. HeroSection
4. Category Grid
5. Featured Products
6. Value Props
7. Newsletter
8. Footer

### Section Details

#### 1. AnnouncementBar
- Position: Fixed to top, above sticky header
- Full width, `bg-primary`, centered text
- Example: "Free shipping on orders over $50 — Shop now"
- Dismissible; when dismissed, header becomes the top element

#### 2. Header
- Sticky at `top-0` (or below AnnouncementBar when present)
- `z-20`, standard header organism

#### 3. HeroSection
- Variant: `image` or `split`
- On `image`: Full-width lifestyle photo (product in real-life context), dark overlay, white text left-aligned
- Headline: "Beautiful things, used again and again." (`font-heading text-4xl sm:text-5xl lg:text-6xl`)
- Subheadline: "Premium reusables designed for real life — not the recycling bin."
- CTA: "Shop the collection" — Button `primary lg`
- Spacing below: `mb-16 sm:mb-20 lg:mb-24`

#### 4. Category Grid
- Section padding: `py-12 sm:py-16 lg:py-20`
- Section heading: "Shop by category" — `font-heading text-3xl sm:text-4xl text-center mb-8 sm:mb-12`
- Container: max-w-[1200px] centered
- Grid: 7 CategoryCards (one per category from products-mvp.csv)

| Breakpoint | Layout |
|------------|--------|
| Mobile (< 640px) | 2 columns, last item spans full width or centered |
| sm (640–1023px) | 3 columns; row 1: 3, row 2: 3, row 3: 1 centered |
| lg (1024px+) | 4 columns; row 1: 4, row 2: 3 centered |

- Gap: `gap-4 sm:gap-6`
- Categories (from CSV): Utensils & Cutlery (4), Drink Bottles & Tumblers (5), Food Wraps & Bags (4), Straws & Cleaning Brushes (4), Coffee Cups & Travel Mugs (4), Shopping & Produce Bags (4), Zero-Waste Personal Care (5)

#### 5. Featured Products
- Section padding: `py-12 sm:py-16 lg:py-20`
- Background: `bg-secondary` (Linen) — full bleed
- Section heading: "Customer favorites" — `font-heading text-3xl sm:text-4xl text-center mb-8 sm:mb-12`
- Container: max-w-[1200px] centered
- ProductGrid: show 4–8 featured products
- Grid: `grid-cols-2 md:grid-cols-3 xl:grid-cols-4 gap-4 md:gap-6`
- Below grid: centered link — "View all products →" — `text-sm font-medium text-primary underline underline-offset-4 hover:text-primary/80`

#### 6. Value Props
- Section padding: `py-12 sm:py-16 lg:py-20`
- Background: `bg-background` (Ivory)
- Container: max-w-[1200px] centered
- Layout: 3-column grid on desktop, single column on mobile

| Breakpoint | Layout |
|------------|--------|
| Mobile | Stacked, `space-y-8`, centered text |
| sm | `grid-cols-3 gap-8` |

- Each prop:
  - Icon: 40px, `text-primary` (Forest), centered above text
  - Heading: `font-heading text-xl text-center`
  - Description: `font-body text-sm text-muted-foreground text-center max-w-xs mx-auto`

- Example props:
  1. "Built to last" / "Premium materials designed for years of daily use."
  2. "Honestly made" / "Every material choice is specific, verifiable, and intentional."
  3. "Free shipping over $50" / "Flat-rate $5 shipping, free on orders over $50."

#### 7. Newsletter
- Section padding: `py-12 sm:py-16 lg:py-20`
- Background: `bg-primary` (Forest) — full bleed
- Text: White
- Container: max-w-[1200px], content centered `max-w-md mx-auto text-center`
- Heading: "Stay in the loop" — `font-heading text-3xl text-primary-foreground`
- Body: "New arrivals, restocks, and the occasional behind-the-scenes look at how things are made." — `font-body text-sm text-primary-foreground/80 mt-3`
- Form: `mt-6`, flex row on sm+, stacked on mobile
  - Input: `flex-1`, email type, placeholder "Your email", white bg, Forest text
  - Button: "Subscribe" — Button `secondary` variant (Linen bg, Charcoal text), `sm:ml-3 mt-3 sm:mt-0`
- Privacy: `text-xs text-primary-foreground/60 mt-3` — "No spam. Unsubscribe anytime."

#### 8. Footer
- Standard footer organism
- Immediately follows newsletter section

### Vertical Rhythm Summary

```
AnnouncementBar          ~40px
Header                   64px  (sticky)
─────────────────────────────────
HeroSection              480–640px
                         mb-16 → mb-24
Category Grid            py-12 → py-20
Featured Products        py-12 → py-20  (bg-secondary)
Value Props              py-12 → py-20
Newsletter               py-12 → py-20  (bg-primary)
Footer                   py-12 → py-20  (bg-foreground)
```

---

## Category Page

### Section Order

1. Header (sticky)
2. Breadcrumbs
3. Category Title + Description
4. Sort / Filter Bar
5. ProductGrid
6. Pagination
7. Footer

### Section Details

#### 1. Header
- Standard sticky header

#### 2. Breadcrumbs
- Position: Below header, within main container
- Padding: `pt-4 pb-2`
- Style: `text-sm font-body text-muted-foreground`
- Separator: `/` or `›` with `mx-1.5 text-muted-foreground/50`
- Example: Home › Drink Bottles & Tumblers
- Last item (current page): `text-foreground font-medium`, not a link

#### 3. Category Title + Description
- Padding: `pt-2 pb-6 sm:pb-8`
- Title: `font-heading text-3xl sm:text-4xl text-foreground`
- Description: `font-body text-base text-muted-foreground mt-2 max-w-2xl`
- Example description (from copy-bank): "Everything you need for your daily drink — nothing you'll throw away."
- Product count: `text-sm text-muted-foreground mt-1` — "5 products"

#### 4. Sort / Filter Bar
- Position: Between title and grid
- Padding: `py-4`
- Border: `border-b border-foreground/10 mb-6 sm:mb-8`
- Layout: `flex items-center justify-between`

| Element | Position | Style |
|---------|----------|-------|
| Filter toggle (mobile) | Left | Button `outline sm`, "Filters" with icon, `lg:hidden` |
| Active filter pills | Left | `flex gap-2 flex-wrap`, Badge `outline` with dismiss |
| Sort dropdown | Right | `<select>` or custom dropdown, `text-sm font-body` |

- Sort options: "Featured", "Price: Low to High", "Price: High to Low", "Newest"

**Mobile filter behavior:**
- Filter button opens a bottom sheet / drawer (`z-drawer`) with filter options
- Filter categories: Material, Price range
- Apply button at bottom of sheet

**Desktop filter behavior:**
- Filters inline or in a collapsible sidebar (left side, `w-60`, `hidden lg:block`)
- If sidebar: main grid adjusts to `lg:grid-cols-3` instead of `lg:grid-cols-4`

#### 5. ProductGrid
- Standard ProductGrid organism
- Container: max-w-[1200px]

| Layout Option | Breakpoints |
|---------------|-------------|
| No sidebar | `grid-cols-2 md:grid-cols-3 xl:grid-cols-4 gap-4 md:gap-6` |
| With sidebar (lg+) | Sidebar `w-60 mr-8` + grid `grid-cols-2 lg:grid-cols-3 gap-4 lg:gap-6 flex-1` |

#### 6. Pagination
- Position: Below grid
- Padding: `pt-8 pb-4`
- Layout: `flex items-center justify-center gap-2`
- Elements:
  - Previous / Next: Button `outline sm` with arrow icon
  - Page numbers: Button `ghost sm`, active page `bg-primary text-primary-foreground`
  - Truncation: `...` as static text for large page ranges
- Alternative: "Load more" button centered below grid — Button `outline default`, `w-full sm:w-auto`

**Accessibility:**
- `<nav aria-label="Pagination">`
- Current page: `aria-current="page"`
- Previous/Next disabled at bounds: `aria-disabled="true"`

#### 7. Footer
- Standard footer organism

### Responsive Reflow

```
Mobile (< 640px):
┌──────────────────────┐
│ Header               │
├──────────────────────┤
│ Breadcrumbs          │
│ Category Title       │
│ Description          │
│ [Filter btn] [Sort ▾]│
├──────────────────────┤
│ ┌──────┐ ┌──────┐   │
│ │ Card │ │ Card │   │
│ └──────┘ └──────┘   │
│ ┌──────┐ ┌──────┐   │
│ │ Card │ │ Card │   │
│ └──────┘ └──────┘   │
├──────────────────────┤
│   [Load more]        │
├──────────────────────┤
│ Footer               │
└──────────────────────┘

Desktop (1024px+):
┌──────────────────────────────────────┐
│ Header                               │
├──────────────────────────────────────┤
│ Breadcrumbs                          │
│ Category Title          [Sort ▾]     │
│ Description                          │
├──────────┬───────────────────────────┤
│ Filters  │ ┌────┐ ┌────┐ ┌────┐    │
│ Material │ │Card│ │Card│ │Card│    │
│ □ Bamboo │ └────┘ └────┘ └────┘    │
│ □ Steel  │ ┌────┐ ┌────┐           │
│ □ Glass  │ │Card│ │Card│           │
│          │ └────┘ └────┘           │
│ Price    │                          │
│ $0–$50   │      ‹ 1 2 3 ›          │
├──────────┴───────────────────────────┤
│ Footer                               │
└──────────────────────────────────────┘
```

---

## Product Detail Page

### Section Order

1. Header (sticky)
2. Breadcrumbs
3. Product Main (Image Gallery + Product Info)
4. Product Details Tabs
5. Related Products
6. Footer

### Section Details

#### 1. Header
- Standard sticky header

#### 2. Breadcrumbs
- Same as category page
- Example: Home › Coffee Cups & Travel Mugs › Insulated Travel Mug 350ml
- Padding: `pt-4 pb-4 sm:pb-6`

#### 3. Product Main — Image Gallery + Product Info

**Layout:**

| Breakpoint | Layout |
|------------|--------|
| Mobile (< 1024px) | Stacked: images above, info below |
| lg (1024px+) | Side-by-side: `grid grid-cols-2 gap-8 lg:gap-12 items-start` |

**Image Gallery (left on desktop, top on mobile):**
- Primary image: `aspect-square rounded-xl overflow-hidden bg-muted`
- Thumbnail strip: below primary image, `flex gap-2 mt-3`
  - Each thumbnail: `w-16 h-16 rounded-lg overflow-hidden border-2 border-transparent` 
  - Active thumbnail: `border-primary`
  - Hover: `border-foreground/20`
- Mobile: horizontal scroll for thumbnails, or swipeable primary image with dot indicators
- Image count: typically 3–5 per product (hero, detail, in-use, material close-up)
- Zoom: on desktop, click to open lightbox (`z-modal`); or hover-zoom within frame

**Product Info (right on desktop, below images on mobile):**

Content order:
1. **Category badge**: Badge `category` variant — e.g., "Coffee Cups & Travel Mugs"
2. **Product name**: `font-heading text-2xl sm:text-3xl text-foreground`
3. **Price**: ProductPrice component, `mt-2`
4. **Short description**: `font-body text-base text-muted-foreground mt-3`, 1–2 sentences from CSV `short_description`
5. **Eco claims**: Row of Badge `eco` variants, `flex flex-wrap gap-1.5 mt-3` — parsed from CSV `eco_claim`
6. **Quantity selector**: `mt-6`, inline number input with −/+ buttons, min 1, max per stock
7. **Add to bag**: Button `primary lg w-full mt-4`
8. **Secondary actions**: `flex gap-3 mt-3`
   - "Add to wishlist" — Button `outline default`
9. **Trust signals**: `mt-6 pt-6 border-t border-foreground/10`
   - Line items with small icons: "Free shipping over $50", "30-day returns", "1-year warranty"
   - Style: `flex items-center gap-2 text-sm text-muted-foreground font-body`, each `py-1`

**Sticky "Add to bag" on mobile:**
- When the main "Add to bag" button scrolls out of view, show a sticky bottom bar
- `fixed bottom-0 left-0 right-0 z-sticky bg-background border-t border-foreground/10 px-4 py-3`
- Contains: price (left) + "Add to bag" button (right, flex-1)
- `lg:hidden`

#### 4. Product Details Tabs
- Position: Below product main section
- Padding: `pt-12 sm:pt-16 pb-12 sm:pb-16`
- Container: max-w-[1200px]
- Border top: `border-t border-foreground/10`

**Tab options:**
1. "Details" — Full product description, material details, care instructions
2. "Specs" — Table of specifications (dimensions, weight, capacity, materials)
3. "Shipping" — Standard shipping info, returns policy summary

**Tab bar:**
- `flex border-b border-foreground/10`
- Each tab: `px-4 py-3 text-sm font-medium font-body text-muted-foreground`
- Active tab: `text-foreground border-b-2 border-primary`
- Hover: `text-foreground/80`

**Tab content:**
- `pt-6`
- Details: `prose prose-sm max-w-none font-body` — standard rich text
- Specs: 2-column table, `text-sm`, alternating row bg `even:bg-muted/50`
- Shipping: structured text with delivery estimates

**Mobile behavior:**
- Tabs become an accordion: each section has a toggle header with chevron
- `border-b border-foreground/10`, heading `flex justify-between items-center py-4`
- Open section: `pb-4` with content visible

**Accessibility:**
- `role="tablist"`, each tab `role="tab"` with `aria-selected`, panel `role="tabpanel"`
- Keyboard: arrow keys navigate tabs, Tab key moves to panel content
- Accordion (mobile): `aria-expanded` on each toggle, `aria-controls` pointing to content

#### 5. Related Products
- Section padding: `py-12 sm:py-16`
- Background: `bg-secondary` (Linen) — full bleed
- Section heading: "You might also like" — `font-heading text-2xl sm:text-3xl text-center mb-8`
- Container: max-w-[1200px]
- Layout: `grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4 md:gap-6`
- Show 4 products from the same category (or related categories)
- Overflow on mobile: can be a horizontal scroll instead of grid — `flex gap-4 overflow-x-auto snap-x snap-mandatory pb-4`, each card `snap-start min-w-[200px] sm:min-w-[240px]`

#### 6. Footer
- Standard footer organism

### Responsive Reflow

```
Mobile (< 1024px):
┌──────────────────────┐
│ Header               │
├──────────────────────┤
│ Breadcrumbs          │
├──────────────────────┤
│ ┌──────────────────┐ │
│ │   Product Image  │ │
│ │   (swipeable)    │ │
│ └──────────────────┘ │
│ • • ○ ○  (dots)      │
├──────────────────────┤
│ [Category Badge]     │
│ Product Name         │
│ $26.99               │
│ Short description... │
│ [BPA-free] [Steel]   │
│ [- 1 +]              │
│ [  Add to bag    ]   │
│ [Add to wishlist]    │
│ ─────────────────    │
│ ✓ Free shipping >$50 │
│ ✓ 30-day returns     │
├──────────────────────┤
│ ▸ Details            │
│ ▸ Specs              │
│ ▸ Shipping           │
├──────────────────────┤
│ You might also like  │
│ ┌────┐┌────┐→scroll  │
│ │Card││Card│         │
│ └────┘└────┘         │
├──────────────────────┤
│ Footer               │
└──────────────────────┘

┌──────────────────────┐
│ $26.99  [Add to bag] │  ← sticky bottom bar
└──────────────────────┘

Desktop (1024px+):
┌──────────────────────────────────────┐
│ Header                               │
├──────────────────────────────────────┤
│ Breadcrumbs                          │
├──────────────────────────────────────┤
│ ┌─────────────────┐ ┌──────────────┐│
│ │                 │ │ [Badge]      ││
│ │  Product Image  │ │ Product Name ││
│ │  (main)         │ │ $26.99       ││
│ │                 │ │ Description  ││
│ │                 │ │ [eco badges] ││
│ ├────┬────┬────┤  │ │ [- 1 +]      ││
│ │ th │ th │ th │  │ │ [Add to bag] ││
│ └────┴────┴────┘  │ │ [Wishlist]   ││
│                     │ │ ──────────── ││
│                     │ │ ✓ Free ship  ││
│                     │ │ ✓ 30-day ret ││
│                     │ └──────────────┘│
├──────────────────────────────────────┤
│ [Details] [Specs] [Shipping]         │
│ ───────────────────────────          │
│ Tab content area...                  │
├──────────────────────────────────────┤
│ You might also like                  │
│ ┌────┐ ┌────┐ ┌────┐ ┌────┐        │
│ │Card│ │Card│ │Card│ │Card│        │
│ └────┘ └────┘ └────┘ └────┘        │
├──────────────────────────────────────┤
│ Footer                               │
└──────────────────────────────────────┘
```

---

## Cart Page

### Section Order

1. Header (sticky)
2. Cart Title
3. Cart Content (Items + Order Summary)
4. Continue Shopping CTA
5. Footer

### Section Details

#### 1. Header
- Standard sticky header

#### 2. Cart Title
- Padding: `pt-6 sm:pt-8 pb-6 sm:pb-8`
- Title: "Your bag" — `font-heading text-3xl sm:text-4xl text-foreground`
- Item count: `text-sm text-muted-foreground font-body mt-1` — "(3 items)"

#### 3. Cart Content — Items + Order Summary

**Layout:**

| Breakpoint | Layout |
|------------|--------|
| Mobile (< 1024px) | Stacked: items list above, order summary below |
| lg (1024px+) | Side-by-side: `grid grid-cols-[1fr_380px] gap-8 lg:gap-12 items-start` |

**Cart Item (repeated):**
- Container: `flex gap-4 py-6 border-b border-foreground/10`
- Image: `w-20 h-20 sm:w-24 sm:h-24 rounded-lg object-cover bg-muted flex-shrink-0`
- Info area: `flex-1 min-w-0`
  - Product name: `text-sm font-medium text-foreground font-body line-clamp-2` — links to PDP
  - Variant info (if any): `text-xs text-muted-foreground mt-0.5` — e.g., "350ml / Forest"
  - Eco claim snippet: `text-xs text-muted-foreground mt-0.5` — single line
  - Bottom row: `flex items-center justify-between mt-3`
    - Quantity selector: inline `−`/`+` with number, compact (`h-8`)
    - Line price: `text-sm font-bold text-foreground`
  - Remove button: `text-xs text-muted-foreground underline hover:text-destructive mt-1` — "Remove"

**Order Summary:**
- Container: `bg-secondary rounded-xl p-6` on desktop; on mobile, full-width section below items
- Sticky on desktop: `lg:sticky lg:top-24` (below header height + gap)
- Heading: "Order summary" — `font-heading text-xl text-foreground mb-4`
- Line items:
  - Subtotal: `flex justify-between text-sm font-body`, label left, value right
  - Shipping: `flex justify-between text-sm font-body` — "Calculated at checkout" or "Free"
  - Divider: `border-t border-foreground/10 my-4`
  - Total: `flex justify-between text-base font-bold font-body`
- Checkout button: Button `accent lg w-full mt-6` — "Proceed to checkout"
- Trust line: `text-xs text-muted-foreground text-center mt-3` — "Secure checkout powered by Stripe"

**Empty Cart State:**
- Centered layout: `text-center py-16`
- Illustration placeholder: empty bag icon, 80px, `text-muted-foreground/50`
- Heading: "Your bag is empty" — `font-heading text-2xl text-foreground mt-4`
- Body: "Looks like you haven't added anything yet." — `font-body text-sm text-muted-foreground mt-2`
- CTA: "Start shopping" — Button `primary default mt-6`

#### 4. Continue Shopping CTA
- Position: Below cart items, above footer
- Padding: `py-8`
- Layout: `text-center`
- Link: "← Continue shopping" — `text-sm font-medium text-primary font-body underline underline-offset-4 hover:text-primary/80`
- Not shown when cart is empty (the empty state has its own CTA)

#### 5. Footer
- Standard footer organism

### Accessibility
- Cart items: `<ul>` with each item as `<li>`
- Quantity selector: `aria-label="Quantity for [product name]"`, −/+ buttons with `aria-label="Decrease quantity"` / `"Increase quantity"`
- Remove button: `aria-label="Remove [product name] from bag"`
- Order summary: `aria-label="Order summary"` on the container
- Empty state: announced correctly, CTA is focusable
- Live region: `aria-live="polite"` on cart count and summary totals for dynamic updates

### Responsive Reflow

```
Mobile (< 1024px):
┌──────────────────────┐
│ Header               │
├──────────────────────┤
│ Your bag (3 items)   │
├──────────────────────┤
│ ┌────┐ Product Name  │
│ │ img│ 350ml / Forest │
│ └────┘ [- 1 +] $26.99│
│        Remove         │
│ ──────────────────── │
│ ┌────┐ Product Name  │
│ │ img│ ...           │
│ └────┘               │
│ ──────────────────── │
├──────────────────────┤
│ ┌──────────────────┐ │
│ │ Order summary    │ │
│ │ Subtotal  $62.97 │ │
│ │ Shipping    Free │ │
│ │ ──────────────── │ │
│ │ Total     $62.97 │ │
│ │ [Checkout      ] │ │
│ │ 🔒 Stripe       │ │
│ └──────────────────┘ │
│                      │
│  ← Continue shopping │
├──────────────────────┤
│ Footer               │
└──────────────────────┘

Desktop (1024px+):
┌──────────────────────────────────────┐
│ Header                               │
├──────────────────────────────────────┤
│ Your bag (3 items)                   │
├──────────────────────────┬───────────┤
│ ┌────┐ Product Name      │ Order    │
│ │ img│ [- 1 +]    $26.99 │ summary  │
│ └────┘ Remove             │          │
│ ─────────────────────────│ Subtotal │
│ ┌────┐ Product Name      │  $62.97  │
│ │ img│ [- 1 +]    $34.99 │ Shipping │
│ └────┘ Remove             │  Free    │
│ ─────────────────────────│ ──────── │
│ ┌────┐ Product Name      │ Total    │
│ │ img│ [- 1 +]    $12.99 │  $62.97  │
│ └────┘ Remove             │          │
│                           │[Checkout]│
│  ← Continue shopping     │ 🔒Stripe │
├──────────────────────────┴───────────┤
│ Footer                               │
└──────────────────────────────────────┘
```

---

## Global Layout Notes

### Skip Link
Every page includes an invisible skip link as the first focusable element:
- `<a href="#main-content" className="sr-only focus:not-sr-only focus:absolute focus:top-4 focus:left-4 focus:z-[70] focus:bg-background focus:px-4 focus:py-2 focus:rounded-lg focus:shadow-lg focus:text-foreground focus:text-sm focus:font-medium">Skip to main content</a>`
- Main content area: `<main id="main-content">`

### Page Background
- Default: `bg-background` (Ivory #FAFAF7)
- Full-bleed sections (Featured Products, Newsletter, Footer) use their own backgrounds and extend edge-to-edge while constraining inner content to max-w-[1200px]

### Scroll Behavior
- `scroll-behavior: smooth` via Tailwind's `scroll-smooth` on `<html>`
- Sticky header always visible on scroll (no hide-on-scroll-down behavior for v1)

### Loading States
- Page-level: thin progress bar at top (color: `bg-primary`, 2px height, `z-toast`)
- Section-level: skeleton loaders matching component dimensions (see component specs)
- No full-page spinners

### Error States
- API errors within sections: inline message in `text-sm text-destructive font-body` with retry link
- Full-page errors (404, 500): centered layout with heading, friendly message per tone-of-voice guidelines, and "Go home" CTA

---

_This document is maintained by the **UX/UI Designer Agent**. The Frontend Engineer agent should follow these layouts when building pages and reference component-specs.md for individual component implementations._
