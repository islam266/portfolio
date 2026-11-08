import { readFile } from "node:fs/promises";
import { join } from "node:path";

/**
 * Space Mono Bold, vendored in /assets (SIL OFL), so the generated images —
 * the icons and the Open Graph card — render at build time with no network
 * call. It is a static TTF on purpose: the image renderer cannot read the
 * variable-weight files Google Fonts ships for Space Grotesk, and mono sits
 * naturally next to the site's JetBrains Mono labels.
 */
export async function displayFont() {
  const data = await readFile(
    join(process.cwd(), "assets", "SpaceMono-Bold.ttf"),
  );
  return { family: "Space Mono", data };
}

export const INK = "#080b12";
export const PANEL = "#0f151f";
export const ACCENT = "#4ea8ff";
export const PAPER = "#e4eaf4";
export const MUTED = "#8491a8";
export const LINE = "#1b2432";
