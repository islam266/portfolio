import {
  Cairo,
  Inter,
  JetBrains_Mono,
  Poppins,
} from "next/font/google";

/* Latin faces carry the first paint on both locales, so they are preloaded. */

export const poppins = Poppins({
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

/* Only the SAP transaction codes are set in mono, so it is not preloaded. */
export const jetbrains = JetBrains_Mono({
  weight: ["500"],
  subsets: ["latin"],
  display: "swap",
  preload: false,
  variable: "--font-jetbrains",
});

/* Cairo is the Arabic counterpart to Poppins: same geometric, open feel.
   Not preloaded, so the English page never downloads it. */
export const cairo = Cairo({
  weight: ["400", "600", "700"],
  subsets: ["arabic"],
  display: "swap",
  preload: false,
  variable: "--font-arabic",
});

export const fontVariables = [
  poppins.variable,
  inter.variable,
  jetbrains.variable,
  cairo.variable,
].join(" ");
