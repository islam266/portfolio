/**
 * Interface labels only — accessible names for icon-only controls and
 * landmark labels. All portfolio copy lives in src/content/content.ts.
 */
import type { Locale } from "@/content/content";

export const UI: Record<
  Locale,
  {
    sections: string;
    theme: string;
    otherLanguage: string;
    prev: string;
    next: string;
    steps: string;
    linkedin: string;
  }
> = {
  en: {
    sections: "Sections",
    theme: "Theme",
    otherLanguage: "العربية",
    prev: "Previous",
    next: "Next",
    steps: "Steps",
    linkedin: "LinkedIn",
  },
  ar: {
    sections: "الأقسام",
    theme: "المظهر",
    otherLanguage: "English",
    prev: "السابق",
    next: "التالي",
    steps: "الخطوات",
    linkedin: "LinkedIn",
  },
};
