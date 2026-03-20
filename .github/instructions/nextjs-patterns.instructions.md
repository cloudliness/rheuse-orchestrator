---
description: "Use when writing Next.js App Router code, React components, TypeScript utilities, or client-side functionality for EcoReusable."
applyTo: ["app/**", "components/**", "lib/**"]
---

# Next.js Patterns — EcoReusable

## Server vs Client Components

- **Default to Server Components** — they run on the server, have zero client JS bundle cost, and can directly access databases/APIs
- **Use Client Components only when needed** — add `'use client'` only for: event handlers, useState/useEffect, browser APIs, third-party client-only libraries
- **Keep Client Components small** — extract the interactive part into a thin Client Component, keep data fetching in the Server Component parent

```tsx
// ✅ Server Component fetches data, Client Component handles interaction
// app/products/[slug]/page.tsx (Server Component)
export default async function ProductPage({ params }: { params: { slug: string } }) {
  const product = await getProduct(params.slug);
  return <ProductDetail product={product} />;  // Server
}

// components/AddToCartButton.tsx (Client Component)
'use client';
export function AddToCartButton({ productId }: { productId: string }) {
  // Event handler needs client
}
```

## Data Fetching

- Use `async` Server Components for data fetching — no `useEffect` for initial data
- Use Next.js `fetch` with appropriate caching: `{ cache: 'force-cache' }` for static, `{ next: { revalidate: 3600 } }` for ISR
- Use Route Handlers (`/app/api/`) for mutations and client-side API calls

## Images

- Always use `next/image` — never raw `<img>` tags
- Provide `width` and `height` or use `fill` with a sized container
- Use `priority` for above-the-fold hero images
- Prefer WebP/AVIF formats via Cloudinary or Vercel Image Optimization

## Error Handling

- Add `error.tsx` in route segments for error boundaries
- Add `loading.tsx` for Suspense fallbacks
- Add `not-found.tsx` for 404 handling with `notFound()` from `next/navigation`

## TypeScript

- Strict mode — no `any` without a justifying comment
- Export shared types from `/lib/types.ts`
- Use `interface` for component props, `type` for unions and utility types
