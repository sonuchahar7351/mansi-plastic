# Mansi Plastic — Corporate Website (Frontend Only)

A clean, corporate frontend built with Next.js (App Router), TypeScript, and
Tailwind CSS. No backend or API integration is included — the enquiry form
has client-side validation only.

## Sections (matches the layout PDF, in order)

1. Sticky header (transparent over the hero, solid white on scroll) + Hero
   slider with Ken Burns zoom and auto-advancing slides
2. About Us (two-column)
3. Product Launched info (tabbed: Products Launched / Tailor Made Products /
   Quality Management)
4. Product Launched cards
5. Stats counters (Years / Team / Clients / Targets) with count-up on scroll
6. Our Products grid
7. Testimonials slider
8. Company video (modal player)
9. Enquiry form
10. Footer

## Getting started

```bash
npm install
npm run dev
```

Open http://localhost:3000.

## Images

All image URLs in `lib/data.ts` currently point to neutral picsum.photos
placeholders so the project always renders without broken links. Before
shipping, swap each `image` field for a real royalty-free industrial /
plastic-manufacturing photo, for example from:

- https://unsplash.com/s/photos/plastic-production
- https://unsplash.com/s/photos/plastic-factory
- https://unsplash.com/s/photos/packaging-factory
- https://unsplash.com/s/photos/manufacturing-plant

Also update `companyVideo.videoUrl` in `lib/data.ts` with your real video
embed URL.

## Structure

```
app/
  layout.tsx        Root layout, fonts, metadata
  page.tsx           Assembles all sections
  globals.css         Tailwind base + small utility classes
components/           One component per section, all reusable
lib/data.ts            All site copy, links, product/testimonial data
types/index.ts          Shared TypeScript interfaces
```

## Notes

- Colors, spacing, and type scale follow the requested corporate palette
  (`tailwind.config.ts`).
- Animations are limited to fade-in, fade-up, Ken Burns zoom, count-up, and
  subtle hover — no heavy motion.
- Respects `prefers-reduced-motion` and includes visible keyboard focus
  states.
- Enquiry form has no backend wired up. Connect it to an API route or your
  email/form service when ready.
