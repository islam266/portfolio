import type { Locale } from "@/content/content";

export const SITE_URL = (
  process.env.NEXT_PUBLIC_SITE_URL ?? "http://localhost:3000"
).replace(/\/$/, "");

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
