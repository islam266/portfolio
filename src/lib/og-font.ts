import { readFile } from "node:fs/promises";
import { join } from "node:path";

/**
 * DM Serif Display, vendored in /assets (SIL OFL), so the generated images —
 * the icons and the Open Graph card — render in the site's display face at
 * build time with no network call.
 */
export async function serifFont() {
  const data = await readFile(
    join(process.cwd(), "assets", "DMSerifDisplay-Regular.ttf"),
  );
  return { family: "DM Serif Display", data };
}

export const INK = "#0b1120";
export const GOLD = "#e4b976";
export const PAPER = "#dce6f0";
export const LINE = "#1f2a44";
