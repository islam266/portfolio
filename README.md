# Islam Hamdi Ahmed — portfolio

Single-page, bilingual (English + Arabic RTL) portfolio for an SAP PP Business
Analyst & Key User. Next.js App Router, TypeScript, Tailwind CSS v4, no
animation libraries, no backend, no contact form.

- `/` redirects to `/en`
- `/en` and `/ar` are fully static, prerendered at build time
- Dark theme by default, light theme via the `◐` toggle (next-themes)

Visual direction: cool slate with a single electric-blue accent, Space Grotesk
for display, Inter for body, JetBrains Mono for labels and tokens, and IBM Plex
Sans Arabic for Arabic. Every colour is a token in
[`globals.css`](src/app/globals.css) — `:root` is dark, `[data-theme="light"]`
overrides it — so a palette change means editing one block.

## Run locally

```bash
npm install
npm run dev
```

Then open http://localhost:3000 — it redirects to `/en`.

Production build and serve:

```bash
npm run build
npm run start
```

## Environment variable

One variable, used for canonical URLs, hreflang alternates, `sitemap.xml`,
`robots.txt` and the Open Graph card. It is optional: on Vercel the build falls
back to `VERCEL_PROJECT_PRODUCTION_URL`, which Vercel injects automatically,
and locally it falls back to `http://localhost:3000`. Set it explicitly once
you have a custom domain.

```bash
NEXT_PUBLIC_SITE_URL=https://YOUR-DOMAIN
```

See [`.env.example`](.env.example). Copy it to `.env.local` for local use.

## Editing the content

**All portfolio copy lives in [`src/content/content.ts`](src/content/content.ts)
— nothing else.** It exports one `D` object with an `en` and an `ar` entry that
share the same `Dict` type, so TypeScript will tell you if a field is missing
from one language. Change the text there and both the page and the metadata
follow.

Two small exceptions, both interface chrome rather than portfolio content:

- [`src/lib/ui.ts`](src/lib/ui.ts) — accessible names for icon-only controls
  (theme toggle, carousel arrows, tab list) and the "LinkedIn" button label.
- [`src/lib/site.ts`](src/lib/site.ts) — the per-locale `<title>`.

The e-mail address and LinkedIn URL are exported from `content.ts`
(`EMAIL`, `LINKEDIN`).

The Open Graph card is English on both locales. The image renderer behind
`ImageResponse` lays glyphs out without the bidi algorithm, so Arabic comes
out with its words in reverse order; an English card is the honest option.

### Adding a project screenshot later

`src/components/Projects.tsx` has a commented `TODO: image hook` inside the
card, above the status row. Drop the image into `public/`, render it there with
`next/image`, and nothing else has to change.

## Project layout

```
src/
  app/
    (redirect)/        /  → redirects to /en  (own root layout, never rendered)
    [locale]/          the real root layout (<html lang dir>), page, OG image
    icon.tsx           favicon          (generated, ImageResponse)
    apple-icon.tsx     touch icon       (generated)
    icons/[size]/      192 / 512 PNGs for the web manifest
    manifest.ts  sitemap.ts  robots.ts
    globals.css        design tokens + component classes
    fonts.ts           next/font/google definitions
  components/          one file per section, "use client" only where needed
  content/content.ts   all copy, both languages
  lib/                 site URL, UI labels, bidi helper, image fonts
assets/                Space Mono Bold (SIL OFL), used by the generated
                       icons and the Open Graph card
tests/qa.spec.ts       Playwright QA suite
```

### Why `/` lives in a route group

Next.js requires every page to sit under a root layout. Because
`src/app/[locale]/layout.tsx` is the root layout that renders `<html lang dir>`,
a `src/app/page.tsx` would have no root layout of its own and the build fails.
`src/app/(redirect)/page.tsx` keeps the `redirect('/en')` in the App Router with
its own minimal root layout, which is never rendered because the redirect
happens first.

## QA

```bash
npm run qa
```

Playwright starts (or reuses) `next start` on port 3100 and checks, for both
locales, both themes and viewport widths 390 / 768 / 1280: no horizontal
overflow, no content rendered at `opacity: 0`, no console errors, no failed
requests, plus a keyboard pass (tab order, visible focus rings, Enter/Space on
buttons, arrow keys on the flow tabs, mirrored in RTL). Full-page screenshots
are written to `qa/`, which is git-ignored.

Two 404s for `/_vercel/insights/script.js` and `/_vercel/speed-insights/script.js`
are expected when running locally — those scripts only exist on a Vercel
deployment — and the suite ignores them by URL.

## Deploy to Vercel

1. Push this repository to GitHub.
2. In Vercel, **Add New → Project** and import the repository. The framework is
   auto-detected as Next.js; build command and output directory need no change.
3. Under **Settings → Environment Variables**, add
   `NEXT_PUBLIC_SITE_URL = https://your-domain` for Production (and Preview if
   you want correct canonicals there too). Redeploy after adding it.
4. Under **Analytics** and **Speed Insights** in the Vercel dashboard, enable
   both for the project. `<Analytics />` and `<SpeedInsights />` are already in
   the root layout; they only start reporting once enabled.
5. If you add a custom domain, update `NEXT_PUBLIC_SITE_URL` to match and
   redeploy so `sitemap.xml`, `robots.txt` and the canonical tags point at it.
