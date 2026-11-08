import {
  Amiri,
  DM_Serif_Display,
  IBM_Plex_Sans_Arabic,
  Inter,
  JetBrains_Mono,
} from "next/font/google";

/* Latin faces carry the first paint on both locales, so they are preloaded. */

export const dmSerif = DM_Serif_Display({
  weight: "400",
  subsets: ["latin"],
  display: "swap",
  variable: "--font-dm-serif",
});

export const inter = Inter({
  subsets: ["latin"],
  display: "swap",
  variable: "--font-inter",
});

export const jetbrains = JetBrains_Mono({
  subsets: ["latin"],
  display: "swap",
  variable: "--font-jetbrains",
});

/* Arabic faces are fallbacks inside the stacks. They are self-hosted and
   swapped in as soon as Arabic glyphs are rendered, but not preloaded, so the
   English page never downloads them. */

export const plexArabic = IBM_Plex_Sans_Arabic({
  weight: ["400", "500", "600"],
  subsets: ["arabic"],
  display: "swap",
  preload: false,
  variable: "--font-plex-arabic",
});

export const amiri = Amiri({
  weight: ["400", "700"],
  subsets: ["arabic"],
  display: "swap",
  preload: false,
  variable: "--font-amiri",
});

export const fontVariables = [
  dmSerif.variable,
  inter.variable,
  jetbrains.variable,
  plexArabic.variable,
  amiri.variable,
].join(" ");
