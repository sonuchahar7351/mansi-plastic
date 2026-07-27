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

## Multilingual / language selector

The header includes a Language dropdown (in place of the old "Contact Us"
button) with English, Hindi, and Spanish. See the "Language selector"
section below for full details.

## Structure

```
app/
  layout.tsx              Root layout, fonts, metadata, wraps app in LanguageProvider
  page.tsx                 Assembles all sections
  globals.css               Tailwind base + small utility classes
components/                 One component per section, all reusable
  LanguageDropdown.tsx        Accessible language switcher (used in Header)
context/LanguageContext.tsx   LanguageProvider + useLanguage()/useTranslation() hook
locales/
  en.json                      English (default/fallback)
  hi.json                       Hindi
  es.json                        Spanish
lib/data.ts                 Non-text metadata only (images, hrefs, ids, icons)
types/index.ts                Shared TypeScript interfaces
```

## Language selector

**How it works**

- `context/LanguageContext.tsx` exports a `LanguageProvider` (wraps the app
  in `app/layout.tsx`) and a `useLanguage()` hook (aliased as
  `useTranslation()`).
- All translatable text lives in `locales/en.json`, `locales/hi.json`, and
  `locales/es.json` — nothing is hardcoded in components. `lib/data.ts` only
  holds non-text metadata (images, hrefs, ids, icon keys) that's the same
  across languages; components zip the two together by index/id.
- `t("some.nested.key")` looks up a value by dot path and returns strings,
  arrays, or objects (e.g. `t("hero.slides")` returns the whole array).
  `t("hero.goToSlide", { n: 2 })` supports `{placeholder}` interpolation.
  Missing keys fall back to English, then to the raw key, so the UI never
  breaks if a translation is incomplete.
- The selected language is saved to `localStorage` under
  `mansi-plastic-language`. On load, the app checks localStorage first and
  falls back to English (`en`) if nothing is stored or the value is
  unsupported.
- Switching languages calls `setLanguage()`, which updates React context
  state — every component re-renders with the new text instantly, no page
  refresh needed.

**Language Dropdown component** (`components/LanguageDropdown.tsx`)

- Shows the current language (native name, e.g. "हिन्दी") with a globe icon.
- Full keyboard support: `Enter`/`Space`/`ArrowDown` opens it from the
  button; `ArrowUp`/`ArrowDown` moves between options; `Home`/`End` jump to
  first/last; `Enter`/`Space` selects; `Escape` closes and returns focus to
  the button; `Tab` closes it naturally.
- ARIA: button has `aria-haspopup="listbox"` and `aria-expanded`; the list
  has `role="listbox"`; each option has `role="option"` and
  `aria-selected`.
- Closes automatically on selection, and on outside click.
- Selected language is highlighted (bold, tinted background, check icon).
- Opens/closes with a 200ms scale + fade transition (Tailwind).
- Takes a `variant` prop (`"onDark"` | `"onLight"`) so it reads correctly
  both over the transparent hero header and the solid white scrolled
  header — `Header.tsx` already wires this up automatically.

**Adding a new language** — e.g. French:

1. Create `locales/fr.json` with the exact same key structure as `en.json`
   (copy `en.json` as a starting point and translate the values).
2. In `context/LanguageContext.tsx`:
   - `import fr from "@/locales/fr.json";`
   - Add `fr` to the `dictionaries` object.
   - Add `{ code: "fr", label: "French", nativeLabel: "Français" }` to the
     `languages` array.

That's it — the dropdown, persistence, and every component pick it up
automatically since they all read from `languages` and `t()`.

**SEO note:** this implementation is a client-side, localStorage-based
switcher (no page reload, matching the requirement that text updates
instantly). It does not add locale-prefixed routes (`/en`, `/hi`) — the
server-rendered `<title>`/`<meta>` always use English for crawlers. If
you later want language-specific indexable URLs, the translation files
here are already structured so they could be dropped into Next.js's
built-in `i18n` routing or a `[locale]` segment without changing any
component code.

## Notes

- Colors, spacing, and type scale follow the requested corporate palette
  (`tailwind.config.ts`).
- Animations are limited to fade-in, fade-up, Ken Burns zoom, count-up, and
  subtle hover — no heavy motion.
- Respects `prefers-reduced-motion` and includes visible keyboard focus
  states.
- Enquiry form has no backend wired up. Connect it to an API route or your
  email/form service when ready.
