# Rheuse — Design Tokens

> **Status**: Active — Last updated 2026-03-19
> References: [Brand Guidelines](../brand-guidelines.md)

## Spacing Scale

Tailwind-aligned, 4px base unit. Use Tailwind classes directly.

| Token | Value | Tailwind | Usage |
|-------|-------|----------|-------|
| space-0 | 0px | `p-0` / `m-0` | Reset |
| space-0.5 | 2px | `p-0.5` | Micro nudge (icon alignment) |
| space-1 | 4px | `p-1` | Tight insets (badge padding) |
| space-1.5 | 6px | `p-1.5` | Small insets |
| space-2 | 8px | `p-2` | Compact component padding |
| space-3 | 12px | `p-3` | Default component padding |
| space-4 | 16px | `p-4` | Card padding, input padding |
| space-5 | 20px | `p-5` | Comfortable spacing |
| space-6 | 24px | `p-6` | Section inner padding (mobile) |
| space-8 | 32px | `p-8` | Section inner padding (tablet) |
| space-10 | 40px | `p-10` | Major content gaps |
| space-12 | 48px | `p-12` | Section inner padding (desktop) |
| space-16 | 64px | `p-16` | Large section gaps |
| space-20 | 80px | `p-20` | Hero vertical padding |
| space-24 | 96px | `p-24` | Major section dividers |

### Spacing Conventions

- **Inline element gaps** (icon + text, badge groups): `gap-1` to `gap-2`
- **Component internal padding**: `p-3` to `p-4`
- **Card padding**: `p-4` mobile, `p-6` desktop
- **Section vertical padding**: `py-12` mobile, `py-16` tablet, `py-20` desktop
- **Section vertical gaps** (between sections): `space-y-16` mobile, `space-y-24` desktop
- **Grid gaps**: `gap-4` mobile, `gap-6` tablet, `gap-8` desktop

---

## Border Radii

| Token | Value | Tailwind | Usage |
|-------|-------|----------|-------|
| radius-sm | 4px | `rounded-sm` | Badges, small tags |
| radius-default | 8px | `rounded-lg` | Buttons, inputs, cards |
| radius-lg | 12px | `rounded-xl` | Product cards, modal dialogs |
| radius-xl | 16px | `rounded-2xl` | Hero sections, feature cards |
| radius-full | 9999px | `rounded-full` | Avatars, pill badges, icon buttons |

### Radius Conventions

- **Buttons**: `rounded-lg` (8px)
- **Inputs**: `rounded-lg` (8px) — match button radius
- **Product cards**: `rounded-xl` (12px)
- **Image containers within cards**: `rounded-lg` (8px) with overflow-hidden
- **Badges / pills**: `rounded-full`
- **Modal / drawer**: `rounded-2xl` (top corners only for bottom sheets)

---

## Box Shadows

All shadows use warm-tinted black (`#1C1917`) to harmonize with the Ivory background.

| Token | CSS Value | Tailwind | Usage |
|-------|-----------|----------|-------|
| shadow-sm | `0 1px 2px 0 rgba(28,25,23,0.05)` | `shadow-sm` | Subtle lift: inputs, badges |
| shadow-default | `0 1px 3px 0 rgba(28,25,23,0.08), 0 1px 2px -1px rgba(28,25,23,0.08)` | `shadow` | Cards at rest, dropdowns |
| shadow-md | `0 4px 6px -1px rgba(28,25,23,0.08), 0 2px 4px -2px rgba(28,25,23,0.06)` | `shadow-md` | Cards on hover, popovers |
| shadow-lg | `0 10px 15px -3px rgba(28,25,23,0.08), 0 4px 6px -4px rgba(28,25,23,0.05)` | `shadow-lg` | Modals, cart drawer, floating elements |
| shadow-none | `none` | `shadow-none` | Reset / flat states |

### Shadow Conventions

- **Cards at rest**: `shadow` → on hover: `shadow-md` with `transition-shadow duration-200`
- **Inputs**: `shadow-sm` at rest, removed on focus (replaced by ring)
- **Sticky header**: `shadow-md` (applied on scroll via JS)
- **Modals / drawers**: `shadow-lg`
- **No shadows on**: badges, buttons (use background/border changes instead)

---

## Z-Index Layers

| Token | Value | Tailwind | Usage |
|-------|-------|----------|-------|
| z-base | 0 | `z-0` | Default stacking context |
| z-dropdown | 10 | `z-10` | Dropdown menus, popovers, autocomplete |
| z-sticky | 20 | `z-20` | Sticky header, sticky sidebar filters |
| z-drawer | 30 | `z-30` | Cart drawer, mobile nav sidebar |
| z-overlay | 40 | `z-40` | Backdrop behind modals/drawers |
| z-modal | 50 | `z-50` | Modal dialogs |
| z-toast | 60 | `z-[60]` | Toast notifications, system alerts |

### Stacking Rules

- Drawers render a backdrop at `z-overlay` and the panel at `z-drawer` — but drawer content should still appear above modal backdrops if opened simultaneously; manage by keeping modals from opening while drawers are active.
- Toasts always sit on top of everything.
- The sticky header uses `z-sticky` so dropdowns (`z-dropdown`) can still appear below it while popovers appear within it.

---

## Breakpoints

| Token | Min Width | Tailwind Prefix | Target |
|-------|-----------|-----------------|--------|
| sm | 640px | `sm:` | Large phones / small tablets |
| md | 768px | `md:` | Tablets (portrait) |
| lg | 1024px | `lg:` | Tablets (landscape) / small desktops |
| xl | 1280px | `xl:` | Standard desktops |
| 2xl | 1536px | `2xl:` | Wide screens |

### Design Ranges

| Name | Range | Primary Layout Pattern |
|------|-------|----------------------|
| Mobile | 0–639px | Single column, stacked layouts |
| Tablet | 640–1023px | Two columns, side-by-side starts |
| Desktop | 1024–1279px | Full multi-column layouts |
| Wide | 1280px+ | Max-width container, centered content |

---

## Container & Page Layout

| Breakpoint | Container Max Width | Horizontal Page Padding |
|------------|-------------------|------------------------|
| Mobile (< 640px) | 100% | `px-4` (16px per side) |
| sm (640px+) | 640px | `px-6` (24px per side) |
| md (768px+) | 768px | `px-6` (24px per side) |
| lg (1024px+) | 1024px | `px-8` (32px per side) |
| xl (1280px+) | 1200px | `px-8` (32px per side) |
| 2xl (1536px+) | 1200px | `px-8` (32px per side) |

### Container Utility

Use a consistent wrapper across all pages:

```
className="mx-auto w-full max-w-[1200px] px-4 sm:px-6 lg:px-8"
```

Wide variant for hero sections and full-bleed backgrounds:

```
// Outer: full-bleed background
className="w-full bg-secondary"
// Inner: constrained content
className="mx-auto max-w-[1200px] px-4 sm:px-6 lg:px-8"
```

---

## Transitions & Animation

### Durations

| Token | Value | Tailwind | Usage |
|-------|-------|----------|-------|
| duration-fast | 150ms | `duration-150` | Hover states, button press, icon changes |
| duration-default | 200ms | `duration-200` | Card hover lift, dropdown open, focus rings |
| duration-slow | 300ms | `duration-300` | Drawer slide, modal fade, page transitions |
| duration-slower | 500ms | `duration-500` | Hero entrance animations, skeleton shimmer |

### Easing

| Token | Value | Tailwind | Usage |
|-------|-------|----------|-------|
| ease-default | `cubic-bezier(0.4, 0, 0.2, 1)` | `ease-in-out` | General-purpose: most hover/focus transitions |
| ease-out | `cubic-bezier(0, 0, 0.2, 1)` | `ease-out` | Elements entering view: dropdowns opening, toasts appearing |
| ease-in | `cubic-bezier(0.4, 0, 1, 1)` | `ease-in` | Elements exiting view: modals closing, toasts dismissing |

### Transition Shorthands

| Context | Tailwind Classes |
|---------|-----------------|
| Button hover | `transition-colors duration-150 ease-in-out` |
| Card hover shadow | `transition-shadow duration-200 ease-in-out` |
| Focus ring | `transition-shadow duration-200 ease-in-out` |
| Dropdown open | `transition-all duration-200 ease-out` |
| Drawer slide | `transition-transform duration-300 ease-in-out` |
| Modal backdrop | `transition-opacity duration-200 ease-out` |
| Toast enter | `transition-all duration-300 ease-out` |
| Toast exit | `transition-all duration-200 ease-in` |

### Animation Conventions

- **Prefer CSS transitions** over JS-driven animation for hover, focus, and state changes.
- **No animation on page load** by default — only animate hero content after hydration if needed.
- **Reduce motion**: Always wrap non-essential animations in `motion-safe:` variants. Critical state changes (e.g., toggling a drawer) should still transition, but can use shorter durations.
- **No bounce or overshoot easing** — keep motion subtle and elegant per the "warm minimalism" visual principle.

---

## Focus & Ring Styles

Consistent focus indicators across all interactive elements for keyboard accessibility.

| State | Tailwind Classes |
|-------|-----------------|
| Focus visible | `focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-primary focus-visible:ring-offset-2 focus-visible:ring-offset-background` |
| Focus within (group) | `focus-within:ring-2 focus-within:ring-primary focus-within:ring-offset-2` |

- Ring color: Forest (`#2D5A44` / `ring-primary`)
- Ring offset color: Ivory (`#FAFAF7` / `ring-offset-background`)
- Ring width: 2px
- Ring offset: 2px

---

_This document is maintained by the **UX/UI Designer Agent**. The Frontend Engineer agent should reference these tokens when implementing components._
