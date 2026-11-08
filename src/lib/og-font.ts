import { readFile } from "node:fs/promises";
import { join } from "node:path";

import type { Locale } from "@/content/content";

const FILES: Record<Locale, { family: string; file: string }> = {
  en: { family: "DM Serif Display", file: "DMSerifDisplay-Regular.ttf" },
  ar: { family: "IBM Plex Sans Arabic", file: "IBMPlexSansArabic-Regular.ttf" },
};

/**
 * Display faces vendored in /assets (both SIL OFL) so generated images — the
 * icons and the Open Graph card — render at build time without a network call.
 * Latin uses the site's serif (DM Serif Display); Arabic uses IBM Plex Sans
 * Arabic because Amiri's GSUB tables are not supported by the image renderer.
 */
export async function serifFont(locale: Locale = "en") {
  const { family, file } = FILES[locale];
  const data = await readFile(join(process.cwd(), "assets", file));
  return { family, data };
}

export const INK = "#0b1120";
export const GOLD = "#e4b976";
export const PAPER = "#dce6f0";
export const LINE = "#1f2a44";
