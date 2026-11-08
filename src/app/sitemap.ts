import type { MetadataRoute } from "next";

import { LOCALES } from "@/content/content";
import { SITE_URL } from "@/lib/site";

export default function sitemap(): MetadataRoute.Sitemap {
  const languages = {
    en: `${SITE_URL}/en`,
    ar: `${SITE_URL}/ar`,
  };

  return LOCALES.map((locale) => ({
    url: `${SITE_URL}/${locale}`,
    lastModified: new Date(),
    changeFrequency: "monthly" as const,
    priority: locale === "en" ? 1 : 0.9,
    alternates: { languages },
  }));
}
