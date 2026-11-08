import { readFile } from "node:fs/promises";
import { join } from "node:path";

/**
 * Poppins Bold, vendored in /assets (SIL OFL), so the generated images — the
 * icons and the Open Graph card — render in the site's display face at build
 * time with no network call. A static TTF on purpose: the image renderer
 * cannot read the variable-weight files Google Fonts serves.
 */
export async function displayFont() {
  const data = await readFile(join(process.cwd(), "assets", "Poppins-Bold.ttf"));
  return { family: "Poppins", data };
}

export const PAPER = "#f2f8fb";
export const CARD = "#ffffff";
export const INK = "#0f1b24";
export const MUTED = "#5c6b78";
export const LINE = "#dbe8ef";
export const ACCENT = "#17c3d6";
export const ON_ACCENT = "#04212a";
