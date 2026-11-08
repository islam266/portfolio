import {
  IBM_Plex_Sans_Arabic,
  Inter,
  JetBrains_Mono,
  Space_Grotesk,
} from "next/font/google";

/* Latin faces carry the first paint on both locales, so they are preloaded. */

export const spaceGrotesk = Space_Grotesk({
  weight: ["500", "600", "700"],
  subsets: ["latin"],
  display: "swap",
  variable: "--font-display",
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

/* The Arabic face is a fallback inside both stacks. It is self-hosted and
   swapped in as soon as Arabic glyphs render, but not preloaded, so the
   English page never downloads it. */

export const plexArabic = IBM_Plex_Sans_Arabic({
  weight: ["400", "500", "600", "700"],
  subsets: ["arabic"],
  display: "swap",
  preload: false,
  variable: "--font-plex-arabic",
});

export const fontVariables = [
  spaceGrotesk.variable,
  inter.variable,
  jetbrains.variable,
  plexArabic.variable,
].join(" ");
