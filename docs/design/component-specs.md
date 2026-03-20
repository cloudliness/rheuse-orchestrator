# Rheuse — Component Specs

> **Status**: Active — Last updated 2026-03-19
> References: [Brand Guidelines](../brand-guidelines.md) · [Design Tokens](design-tokens.md)

---

# Atoms

## Button

- **Purpose**: Primary interactive element for actions and navigation throughout the site.
- **Font**: DM Sans 14px / `text-sm`, weight 700 / `font-bold`, tracking `tracking-wide` (0.02em), `font-body`

### Variants

| Variant | Background | Text | Border | Hover | Active |
|---------|-----------|------|--------|-------|--------|
| primary | `bg-primary` (Forest) | `text-primary-foreground` (White) | none | `hover:bg-primary/90` | `active:bg-primary/80` |
| secondary | `bg-secondary` (Linen) | `text-secondary-foreground` (Charcoal) | none | `hover:bg-secondary/80` | `active:bg-secondary/70` |
| outline | `bg-transparent` | `text-foreground` (Charcoal) | `border border-foreground/20` | `hover:bg-secondary` | `active:bg-secondary/80` |
| ghost | `bg-transparent` | `text-foreground` (Charcoal) | none | `hover:bg-secondary` | `active:bg-secondary/80` |
| accent | `bg-accent` (Terracotta) | `text-accent-foreground` (White) | none | `hover:bg-accent/90` | `active:bg-accent/80` |
| destructive | `bg-destructive` (Ember) | `text-destructive-foreground` (White) | none | `hover:bg-destructive/90` | `active:bg-destructive/80` |

### Sizes

| Size | Height | Padding | Text | Icon Size | Tailwind |
|------|--------|---------|------|-----------|----------|
| sm | 32px | `px-3 py-1.5` | `text-xs` | 14px | `h-8` |
| default | 40px | `px-4 py-2` | `text-sm` | 16px | `h-10` |
| lg | 48px | `px-6 py-3` | `text-base` | 18px | `h-12` |
| icon | 40px | `p-2` | — | 20px | `h-10 w-10` |

### States

| State | Behavior |
|-------|----------|
| Default | Base variant styles |
| Hover | Background opacity shift per variant table; cursor pointer |
| Active / Pressed | Deeper opacity shift; `transform: scale(0.98)` optional |
| Focus | `focus-visible:ring-2 focus-visible:ring-primary focus-visible:ring-offset-2 focus-visible:ring-offset-background outline-none` |
| Disabled | `opacity-50 pointer-events-none cursor-not-allowed` |
| Loading | Spinner icon replaces content or displays inline; button stays disabled width |

### Responsive Behavior
- Full-width on mobile for primary CTAs: `w-full sm:w-auto`
- Touch target minimum 44×44px — sm size (32px) only for inline/icon use, not primary CTAs on mobile

### Accessibility
- Use `<button>` for actions, `<a>` styled as button for navigation
- `aria-disabled="true"` when disabled (prefer over `disabled` attribute for screen reader announcements)
- `aria-busy="true"` and `aria-label="Loading"` during loading state
- Visible focus ring via `focus-visible`
- Minimum contrast: White on Forest = 7.9:1 ✅, White on Terracotta = 5.0:1 ✅, White on Ember = 4.8:1 ✅

### Tailwind Class Template
```
// Primary default
className="inline-flex items-center justify-center gap-2 rounded-lg h-10 px-4 py-2
  bg-primary text-primary-foreground text-sm font-bold tracking-wide font-body
  hover:bg-primary/90 active:bg-primary/80
  focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-primary focus-visible:ring-offset-2 focus-visible:ring-offset-background
  disabled:opacity-50 disabled:pointer-events-none
  transition-colors duration-150 ease-in-out"
```

---

## Input

- **Purpose**: Text input fields for forms (search, email, checkout, newsletter).
- **Font**: DM Sans 16px / `text-base` on mobile (prevents iOS zoom), `text-sm` on desktop, weight 400, `font-body`

### Variants

| Variant | Border | Background | Text |
|---------|--------|-----------|------|
| default | `border border-foreground/20` | `bg-background` (Ivory) | `text-foreground` (Charcoal) |
| error | `border-2 border-destructive` | `bg-background` | `text-foreground` |
| disabled | `border border-muted` | `bg-muted` (Driftwood) | `text-muted-foreground` |

### Dimensions
- Height: 40px / `h-10`
- Padding: `px-3 py-2`
- Border radius: `rounded-lg` (8px)
- Label: displayed above, `text-sm font-medium text-foreground mb-1.5`

### States

| State | Behavior |
|-------|----------|
| Default | Light border, Ivory background |
| Focus | `focus:border-primary focus:ring-2 focus:ring-primary/20 focus:outline-none` |
| Error | Red border, error message below in `text-sm text-destructive mt-1` |
| Disabled | Muted background + text, `cursor-not-allowed` |
| Placeholder | `placeholder:text-muted-foreground` |

### Responsive Behavior
- Full width in forms: `w-full`
- `text-base` on mobile to prevent iOS auto-zoom, `sm:text-sm` on larger screens

### Accessibility
- Every input requires a visible `<label>` linked via `htmlFor`/`id`
- Error state: `aria-invalid="true"` + `aria-describedby` pointing to error message element
- Disabled: `aria-disabled="true"`
- Required: `aria-required="true"` + visual indicator (asterisk or "Required" text)
- Group related inputs with `<fieldset>` and `<legend>`

### Tailwind Class Template
```
// Default input
className="w-full h-10 px-3 py-2 rounded-lg border border-foreground/20
  bg-background text-foreground text-base sm:text-sm font-body
  placeholder:text-muted-foreground
  focus:border-primary focus:ring-2 focus:ring-primary/20 focus:outline-none
  disabled:bg-muted disabled:text-muted-foreground disabled:cursor-not-allowed
  transition-colors duration-200 ease-in-out"

// Error input
className="... border-2 border-destructive focus:border-destructive focus:ring-destructive/20"
```

---

## Badge

- **Purpose**: Small labels for product attributes — category tags, pricing indicators, new arrivals, eco claims.
- **Font**: DM Sans 12px / `text-xs`, weight 500 / `font-medium`, `font-body`

### Variants

| Variant | Background | Text | Border | Usage |
|---------|-----------|------|--------|-------|
| category | `bg-secondary` (Linen) | `text-secondary-foreground` (Charcoal) | none | Category labels on product cards |
| price | `bg-accent` (Terracotta) | `text-accent-foreground` (White) | none | Sale / discount indicators |
| new | `bg-primary` (Forest) | `text-primary-foreground` (White) | none | New arrival flag |
| eco | `bg-primary/10` | `text-primary` (Forest) | `border border-primary/20` | Eco-claim tags (e.g., "BPA-free", "Compostable") |
| outline | `bg-transparent` | `text-foreground` (Charcoal) | `border border-foreground/20` | Neutral informational tags |

### Dimensions
- Padding: `px-2 py-0.5` (default) / `px-2.5 py-1` (with icon)
- Border radius: `rounded-full`
- Height: auto (line-height dependent), approximately 22–26px
- Icon (optional): 12px, `mr-1`

### States
- **Default**: Static display — badges are informational, not interactive
- **Dismissible** (optional): Add `pr-1` and an `×` icon button, `hover:bg-foreground/10` on the dismiss target

### Responsive Behavior
- No size changes across breakpoints
- Wrap naturally in flex containers: parent uses `flex flex-wrap gap-1.5`

### Accessibility
- Non-interactive badges do not need ARIA roles
- If conveying status, use `role="status"` or `aria-label` with context (e.g., `aria-label="New arrival"`)
- Dismissible badges: dismiss button needs `aria-label="Remove [badge text]"`
- Color is never the sole indicator — text label always present

### Tailwind Class Template
```
// Category badge
className="inline-flex items-center rounded-full px-2 py-0.5
  bg-secondary text-secondary-foreground text-xs font-medium font-body"

// Eco badge
className="inline-flex items-center rounded-full px-2 py-0.5
  bg-primary/10 text-primary border border-primary/20 text-xs font-medium font-body"
```

---

## ProductPrice

- **Purpose**: Displays product pricing with optional compare-at (strikethrough) price for sales.
- **Font**: DM Sans, `font-body`

### Variants

| Variant | Layout |
|---------|--------|
| default | Current price only |
| compare-at | Compare-at price (struck through) + current price + optional savings badge |

### Dimensions & Typography

| Element | Size | Weight | Color |
|---------|------|--------|-------|
| Current price | `text-lg` (18px) | `font-bold` (700) | `text-foreground` (Charcoal) |
| Current price (on sale) | `text-lg` | `font-bold` | `text-accent` (Terracotta) |
| Compare-at price | `text-sm` (14px) | `font-normal` (400) | `text-muted-foreground` with `line-through` |
| Savings badge | Badge `price` variant | `font-medium` (500) | `bg-accent text-accent-foreground` |

### Layout
- Flex row: `flex items-baseline gap-2`
- Compare-at price appears before current price (reading order: "was $X, now $Y")

### Responsive Behavior
- No size changes across breakpoints
- Within product cards, price aligns to bottom of content area

### Accessibility
- Use `<span>` with `aria-label` to provide screen reader context: `aria-label="Price: $22.99, was $29.99"`
- Compare-at price: wrap in `<s>` tag and add `<span className="sr-only">Original price:</span>` before the value
- Current sale price: add `<span className="sr-only">Sale price:</span>` before the value

### Tailwind Class Template
```
// Default price
className="text-lg font-bold text-foreground font-body"

// Compare-at layout
<div className="flex items-baseline gap-2">
  <s className="text-sm font-normal text-muted-foreground">$29.99</s>
  <span className="text-lg font-bold text-accent font-body">$22.99</span>
</div>
```

---

# Molecules

## ProductCard

- **Purpose**: Displays a product in grid layouts. Primary browsing unit across homepage, category, and search results pages.
- **Contains**: Product image, title, price (with optional compare-at), category badge, eco badge(s), "Add to bag" button

### Dimensions

| Property | Value |
|----------|-------|
| Width | Fluid — determined by grid column |
| Border radius | `rounded-xl` (12px) |
| Background | `bg-background` (Ivory) |
| Shadow | `shadow` at rest, `shadow-md` on hover |
| Padding | `p-0` (image bleeds to edges), content area `p-4` |
| Image aspect ratio | 4:5 (`aspect-[4/5]`) |
| Image fit | `object-cover` |
| Image border radius | `rounded-t-xl` (top corners match card) |
| Gap between content elements | `gap-2` (8px) |

### Content Structure (top to bottom)
1. **Image container** — relative positioned; badge(s) overlay top-left with `absolute top-3 left-3`
2. **Badge row** — overlaid on image: "New" badge and/or category badge, `flex gap-1.5`
3. **Title** — `text-sm font-medium text-foreground font-body`, 2 lines max with `line-clamp-2`
4. **Eco claim** — `text-xs text-muted-foreground font-body`, 1 line with `truncate`, optional
5. **Price** — ProductPrice component
6. **Add to bag button** — Button `primary` variant, `sm` size, full width

### States

| State | Behavior |
|-------|----------|
| Default | `shadow`, static |
| Hover | `shadow-md`, image scales subtly: `group-hover:scale-105` with `overflow-hidden` on container, `transition-transform duration-300` |
| Focus within | Focus ring on the card link or button |
| Loading / Skeleton | Pulsing placeholder: `animate-pulse bg-muted rounded-xl` for image, `h-4 bg-muted rounded` for text lines |

### Responsive Behavior

| Breakpoint | Behavior |
|------------|----------|
| Mobile (< 640px) | 2 columns; image aspect ratio stays 4:5; button may become icon-only |
| sm–md (640–1023px) | 2–3 columns |
| lg+ (1024px+) | 3–4 columns |

### Accessibility
- Entire card is clickable via a stretched link (`<a>`) on the title — `after:absolute after:inset-0`
- "Add to bag" button sits above the stretched link (`relative z-10`) so it remains independently clickable
- Image: `alt` text = product name
- Card: `role` not needed (it's a standard link + button structure)
- Hover image zoom: wrapped in `motion-safe:` or uses `prefers-reduced-motion` check

### Tailwind Class Template
```
// Card wrapper
className="group relative flex flex-col rounded-xl bg-background shadow
  hover:shadow-md transition-shadow duration-200 ease-in-out overflow-hidden"

// Image container
className="relative aspect-[4/5] overflow-hidden"

// Image
className="w-full h-full object-cover transition-transform duration-300 ease-in-out
  motion-safe:group-hover:scale-105"

// Badge overlay
className="absolute top-3 left-3 flex gap-1.5 z-10"

// Content area
className="flex flex-col gap-2 p-4"

// Title link (stretched)
className="text-sm font-medium text-foreground font-body line-clamp-2
  after:absolute after:inset-0"

// Add to bag
className="relative z-10 w-full mt-auto"
```

---

## CategoryCard

- **Purpose**: Navigational card linking to a product category page. Used on the homepage category grid.
- **Contains**: Category image, category name, product count

### Dimensions

| Property | Value |
|----------|-------|
| Width | Fluid — determined by grid column |
| Border radius | `rounded-xl` (12px) |
| Image aspect ratio | 1:1 (`aspect-square`) |
| Image fit | `object-cover` |
| Overlay | Dark gradient from bottom: `bg-gradient-to-t from-black/60 via-black/20 to-transparent` |
| Padding (text area over image) | `p-4` at bottom |

### Content Structure
1. **Image** — full card background, `rounded-xl overflow-hidden`
2. **Gradient overlay** — positioned absolute, covers full card
3. **Text overlay** (bottom-left):
   - Category name: `text-lg font-heading text-white font-medium`
   - Product count: `text-sm text-white/80 font-body`

### States

| State | Behavior |
|-------|----------|
| Default | Image at rest |
| Hover | Image scales: `group-hover:scale-105`, overlay darkens slightly `group-hover:from-black/70` |
| Focus | `focus-visible:ring-2 focus-visible:ring-primary focus-visible:ring-offset-2` on the link |

### Responsive Behavior

| Breakpoint | Grid Columns |
|------------|-------------|
| Mobile (< 640px) | 2 columns |
| sm–md (640–1023px) | 3 columns |
| lg+ (1024px+) | 4 columns, or 3 wider columns if 7 categories don't divide evenly |

- 7 categories: on desktop, use a 4+3 layout (4 top row, 3 bottom row centered) or a scrollable row

### Accessibility
- Entire card is a single `<a>` link
- `aria-label="Shop [Category Name] — [count] products"`
- Image is decorative within the link: `alt=""`
- Text overlay ensures minimum 4.5:1 contrast against the gradient

### Tailwind Class Template
```
// Card link
className="group relative block rounded-xl overflow-hidden aspect-square
  focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-primary focus-visible:ring-offset-2 focus-visible:ring-offset-background"

// Image
className="w-full h-full object-cover transition-transform duration-300 ease-in-out
  motion-safe:group-hover:scale-105"

// Gradient overlay
className="absolute inset-0 bg-gradient-to-t from-black/60 via-black/20 to-transparent
  group-hover:from-black/70 transition-colors duration-300"

// Text container
className="absolute bottom-0 left-0 right-0 p-4"

// Category name
className="text-lg font-heading text-white"

// Product count
className="text-sm font-body text-white/80"
```

---

## AnnouncementBar

- **Purpose**: Dismissible top-of-page banner for promotions, shipping thresholds, or site-wide messages.
- **Contains**: Message text, optional link, dismiss button

### Dimensions

| Property | Value |
|----------|-------|
| Width | Full viewport width (`w-full`) |
| Height | Auto, approximately 40–44px |
| Padding | `px-4 py-2` |
| Background | `bg-primary` (Forest) |
| Text color | `text-primary-foreground` (White) |

### Content Structure
- Centered text: `text-xs sm:text-sm font-body font-medium text-center`
- Optional inline link: `underline hover:no-underline`
- Dismiss button: right-aligned, `absolute right-2` or flex end, icon-only `X` (16px)

### Variants

| Variant | Background | Text |
|---------|-----------|------|
| default | `bg-primary` (Forest) | White |
| accent | `bg-accent` (Terracotta) | White |
| muted | `bg-secondary` (Linen) | Charcoal |

### States

| State | Behavior |
|-------|----------|
| Visible | Fixed to top, above header |
| Dismissed | Slides up: `transition-transform duration-300`, removed from DOM or `hidden`; store dismissal in `sessionStorage` |

### Responsive Behavior
- Text truncates or wraps on very narrow screens
- Dismiss button always visible and accessible
- `text-xs` on mobile, `text-sm` on sm+

### Accessibility
- `role="banner"` or `role="complementary"` with `aria-label="Site announcement"`
- Dismiss button: `aria-label="Dismiss announcement"`
- If the banner contains a link, ensure it's a real `<a>` tag, not a click handler on a span
- Respect `prefers-reduced-motion` for the dismiss animation

### Tailwind Class Template
```
// Bar container
className="relative w-full bg-primary text-primary-foreground px-4 py-2"

// Message
className="text-xs sm:text-sm font-body font-medium text-center pr-8"

// Dismiss button
className="absolute right-2 top-1/2 -translate-y-1/2 p-1 rounded-full
  text-primary-foreground/80 hover:text-primary-foreground hover:bg-primary-foreground/10
  focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-primary-foreground
  transition-colors duration-150"
```

---

## NavLink

- **Purpose**: Navigation links used in the main header nav and mobile menu.
- **Font**: DM Sans 14px / `text-sm`, weight 500 / `font-medium`, `font-body`

### States

| State | Style |
|-------|-------|
| Default | `text-foreground/80` |
| Hover | `text-foreground`, underline offset animation: `hover:underline hover:underline-offset-4 hover:decoration-primary hover:decoration-2` |
| Active (current page) | `text-foreground font-semibold`, `underline underline-offset-4 decoration-primary decoration-2` |
| Focus | Standard `focus-visible` ring |

### Dimensions
- Padding: `px-1 py-2` (allows underline space)
- No background change — text-only interaction

### Responsive Behavior
- **Desktop** (lg+): Horizontal row in header, `flex gap-6`
- **Mobile** (< lg): Stacked vertically in mobile nav drawer, `flex flex-col gap-4`, larger touch targets `py-3`

### Accessibility
- Use `<a>` for page navigation, not `<button>`
- `aria-current="page"` on the active link
- Mobile nav: opened via hamburger button with `aria-expanded`, nav container has `role="navigation"` and `aria-label="Main navigation"`

### Tailwind Class Template
```
// Default link
className="text-sm font-medium font-body text-foreground/80
  hover:text-foreground hover:underline hover:underline-offset-4 hover:decoration-primary hover:decoration-2
  focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-primary focus-visible:ring-offset-2 focus-visible:ring-offset-background
  transition-colors duration-150"

// Active link
className="text-sm font-semibold font-body text-foreground
  underline underline-offset-4 decoration-primary decoration-2"
```

---

# Organisms

## Header

- **Purpose**: Global site header with navigation, search, and cart access. Sticky on scroll.
- **Contains**: Logo, NavLinks, search trigger, cart icon with count badge

### Dimensions

| Property | Value |
|----------|-------|
| Height | 64px / `h-16` |
| Background | `bg-background/95 backdrop-blur-sm` (semi-transparent on scroll) |
| Border bottom | `border-b border-foreground/5` |
| Max width (inner) | 1200px, centered |
| Padding | `px-4 sm:px-6 lg:px-8` |
| Sticky | `sticky top-0 z-20` |
| Shadow on scroll | `shadow-md` added via JS when `scrollY > 0` |

### Content Structure

```
[Logo]                    [Nav Links]                    [Search] [Cart]
```

- **Left**: Logo (wordmark on desktop, monogram on mobile) — links to homepage
- **Center** (desktop only): NavLinks — `flex gap-6 items-center`
- **Right**: Search icon button + Cart icon button with badge
  - Cart badge: `absolute -top-1 -right-1`, Badge `new` variant (Forest bg), shows item count

### Mobile Layout (< lg)

```
[Hamburger]    [Logo centered]    [Search] [Cart]
```

- Hamburger button (left) triggers mobile nav drawer
- Logo centered
- Search + Cart right-aligned
- Mobile nav: full-screen drawer from left, `z-30`, with overlay at `z-overlay`

### States

| State | Behavior |
|-------|----------|
| Default (top of page) | No shadow, transparent or solid bg |
| Scrolled | `shadow-md`, `bg-background/95 backdrop-blur-sm` |
| Mobile nav open | Hamburger becomes X icon, drawer visible |

### Responsive Behavior

| Breakpoint | Layout |
|------------|--------|
| Mobile (< 1024px) | Hamburger + centered logo + icons right |
| Desktop (1024px+) | Logo left + centered nav + icons right |

### Accessibility
- `<header>` element with `role="banner"`
- `<nav>` with `aria-label="Main navigation"`
- Hamburger button: `aria-expanded="true/false"`, `aria-controls="mobile-nav"`
- Cart icon: `aria-label="Shopping cart, [N] items"`
- Search button: `aria-label="Search products"`
- Skip link: invisible link before header — `"Skip to main content"` becomes visible on focus

### Tailwind Class Template
```
// Header outer
className="sticky top-0 z-20 w-full border-b border-foreground/5
  bg-background/95 backdrop-blur-sm transition-shadow duration-200"

// Header inner
className="mx-auto flex h-16 max-w-[1200px] items-center justify-between px-4 sm:px-6 lg:px-8"

// Logo
className="flex-shrink-0"

// Desktop nav
className="hidden lg:flex items-center gap-6"

// Right icons
className="flex items-center gap-2"

// Cart badge
className="absolute -top-1 -right-1 flex h-4 w-4 items-center justify-center rounded-full
  bg-primary text-primary-foreground text-[10px] font-bold font-body"
```

---

## Footer

- **Purpose**: Global site footer with navigation, about info, legal links, newsletter signup, and social links.

### Dimensions

| Property | Value |
|----------|-------|
| Background | `bg-foreground` (Charcoal #1C1917) |
| Text color | `text-background` (Ivory) for headings, `text-background/70` for body links |
| Padding | `py-12 sm:py-16 lg:py-20` |
| Max width (inner) | 1200px, centered |

### Content Structure

4-column grid on desktop, stacking on mobile:

| Column | Content |
|--------|---------|
| **Shop** | Category links: Bottles, Cups, Utensils, Straws, Wraps, Bags, Personal Care |
| **About** | Our Story, Materials, Sustainability, FAQ |
| **Legal** | Privacy Policy, Terms of Service, Shipping & Returns, Contact |
| **Newsletter** | Heading, brief copy, email input + submit button |

Below columns: horizontal divider (`border-t border-background/10`), then bottom bar:
- Left: `© 2026 Rheuse. Made to be kept.`
- Right: Social icons (Instagram, TikTok, Pinterest) — icon buttons, `ghost` variant in white

### Grid Layout

| Breakpoint | Columns |
|------------|---------|
| Mobile (< 640px) | Single column, sections stacked with `space-y-8`; sections collapsible via accordion |
| sm–md (640–1023px) | 2×2 grid |
| lg+ (1024px+) | 4 columns: `grid-cols-4 gap-8` |

### Typography

| Element | Style |
|---------|-------|
| Column heading | `text-sm font-bold font-body text-background uppercase tracking-wider` |
| Link | `text-sm font-body text-background/70 hover:text-background transition-colors duration-150` |
| Newsletter heading | `text-lg font-heading text-background` |
| Newsletter body | `text-sm font-body text-background/70` |
| Copyright | `text-xs font-body text-background/50` |

### Accessibility
- `<footer>` element with `role="contentinfo"`
- Each column section: `<nav>` with `aria-label` (e.g., `"Shop links"`, `"About links"`)
- Newsletter form: `<form>` with `aria-label="Newsletter signup"`; input has visible label or `aria-label`
- Social links: `aria-label="Follow us on [Platform]"` on each icon link
- Accordion on mobile: `aria-expanded`, `aria-controls` on toggle buttons

---

## ProductGrid

- **Purpose**: Responsive grid layout for displaying ProductCard components on category and search pages.

### Grid Configuration

| Breakpoint | Columns | Gap | Tailwind |
|------------|---------|-----|----------|
| Mobile (< 640px) | 2 | `gap-4` (16px) | `grid-cols-2 gap-4` |
| sm (640px+) | 2 | `gap-4` | `sm:grid-cols-2 sm:gap-4` |
| md (768px+) | 3 | `gap-6` | `md:grid-cols-3 md:gap-6` |
| lg (1024px+) | 3 | `gap-6` | `lg:grid-cols-3 lg:gap-6` |
| xl (1280px+) | 4 | `gap-6` | `xl:grid-cols-4 xl:gap-6` |

### Container
- Max width: 1200px, centered
- Padding: `px-4 sm:px-6 lg:px-8`

### States

| State | Behavior |
|-------|----------|
| Default | Grid of ProductCard components |
| Loading | Skeleton grid: same number of columns, pulsing placeholder cards |
| Empty | Centered message: "No products found" with illustration placeholder and CTA to browse all |
| Filtered (partial results) | Grid with result count above: `"Showing X products"` |

### Skeleton Loader
- Same grid structure as loaded state
- Each skeleton card: `rounded-xl bg-muted animate-pulse`, image placeholder aspect-[4/5], 3 text line placeholders of varying width

### Accessibility
- Grid container: `role="list"` optional (not required for a pure grid presentation)
- Result count announced: `aria-live="polite"` on the count text when filtering changes results
- Empty state: meaningful message, not just visual

### Tailwind Class Template
```
// Grid container
className="grid grid-cols-2 gap-4 md:grid-cols-3 md:gap-6 xl:grid-cols-4"

// Skeleton card
className="rounded-xl bg-muted animate-pulse"
```

---

## HeroSection

- **Purpose**: Full-width hero banner on the homepage. Contains headline, subheadline, and primary CTA.

### Dimensions

| Property | Value |
|----------|-------|
| Width | Full viewport (`w-full`) |
| Min height | `min-h-[480px]` mobile, `min-h-[560px]` sm, `min-h-[640px]` lg |
| Padding | `py-16 sm:py-20 lg:py-24` vertical, standard container horizontal |
| Background | Lifestyle photography with overlay, OR `bg-secondary` (Linen) solid |
| Max content width | `max-w-2xl` (672px) — left-aligned on desktop |

### Content Structure

```
[Background image / color]
  └─ [Overlay if image: bg-black/30]
      └─ [Container max-w-[1200px]]
            └─ [Content block max-w-2xl]
                  ├─ Headline (H1)
                  ├─ Subheadline
                  └─ CTA button(s)
```

### Typography

| Element | Style |
|---------|-------|
| Headline (H1) | `font-heading text-4xl sm:text-5xl lg:text-6xl text-foreground` (or `text-white` on image bg), line-height 1.1, tracking `-tracking-wide` |
| Subheadline | `font-body text-lg sm:text-xl text-foreground/80` (or `text-white/90`), `mt-4 sm:mt-6`, max-width `max-w-lg` |
| CTA | Button `primary` variant, `lg` size, `mt-6 sm:mt-8` |

### Variants

| Variant | Background | Text Colors | Notes |
|---------|-----------|-------------|-------|
| image | Lifestyle photo + `bg-black/30` overlay | White / white-80 | Photo shows product in use |
| solid | `bg-secondary` (Linen) | Charcoal / Charcoal-80 | Clean, typography-forward |
| split | Left text on `bg-secondary`, right product image | Charcoal on Linen | 50/50 split on desktop, stacked on mobile |

### States
- **Default**: Static hero content
- **Loading**: Background image loads with `blur-up` placeholder or solid color fallback
- No interactive states beyond the CTA button

### Responsive Behavior

| Breakpoint | Layout |
|------------|--------|
| Mobile | Stacked, center-aligned text; shorter min-height |
| sm | Left-aligned text begins |
| lg | Full layout; content pinned left within max-w-2xl |

For `split` variant:
| Breakpoint | Layout |
|------------|--------|
| Mobile | Stacked: text above, image below |
| lg | Side-by-side: `grid grid-cols-2 gap-8 items-center` |

### Accessibility
- H1 is the page's primary heading — exactly one per page
- Background image is decorative: applied via CSS `background-image` or `<img>` with `alt=""`
- CTA button is a real `<a>` or `<button>`, not a styled div
- Ensure text contrast over image backgrounds: minimum 4.5:1 with the overlay

### Tailwind Class Template
```
// Hero outer (image variant)
className="relative w-full min-h-[480px] sm:min-h-[560px] lg:min-h-[640px]
  flex items-center bg-cover bg-center"
style={{ backgroundImage: "url(...)" }}

// Overlay
className="absolute inset-0 bg-black/30"

// Content container
className="relative mx-auto w-full max-w-[1200px] px-4 sm:px-6 lg:px-8"

// Content block
className="max-w-2xl"

// Headline
className="font-heading text-4xl sm:text-5xl lg:text-6xl text-white leading-tight tracking-tight"

// Subheadline
className="mt-4 sm:mt-6 text-lg sm:text-xl font-body text-white/90 max-w-lg"

// CTA
className="mt-6 sm:mt-8"
```

---

_This document is maintained by the **UX/UI Designer Agent**. The Frontend Engineer agent should implement components following these specs and reference design-tokens.md for spacing, shadows, and transition values._
