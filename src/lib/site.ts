import type { Locale } from "@/content/content";

/**
 * Base URL for canonicals, hreflang, sitemap, robots and the OG card.
 *
 * Resolution order:
 *  1. NEXT_PUBLIC_SITE_URL — set this once you have a custom domain.
 *  2. VERCEL_PROJECT_PRODUCTION_URL — injected by Vercel at build time, so a
 *     deployment is correct with no configuration at all.
 *  3. localhost, for `next dev` and `next start`.
 *
 * Server-only: this module is imported by layouts, pages and the metadata
 * routes, never by a "use client" component, so the non-public Vercel
 * variable resolves correctly.
 */
function resolveSiteUrl(): string {
  const explicit = process.env.NEXT_PUBLIC_SITE_URL;
  if (explicit) return explicit.replace(/\/$/, "");

  const vercel = process.env.VERCEL_PROJECT_PRODUCTION_URL;
  if (vercel) return `https://${vercel.replace(/\/$/, "")}`;

  return "http://localhost:3000";
}

export const SITE_URL = resolveSiteUrl();

export const META: Record<Locale, { title: string; ogLocale: string }> = {
  en: {
    title: "Islam Hamdi Ahmed | SAP PP Business Analyst",
    ogLocale: "en_US",
  },
  ar: {
    title: "إسلام حمدي أحمد | محلل أعمال SAP PP",
    ogLocale: "ar_SA",
  },
};
