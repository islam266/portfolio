const ARABIC = /[؀-ۿݐ-ݿﭐ-﷿ﹰ-﻿]/;

/**
 * Latin-only fragments (".NET 8", "10–15%", "S/4HANA") get reordered by the
 * bidi algorithm when they sit in an RTL paragraph, because the leading or
 * trailing punctuation is neutral. Isolating them as LTR keeps them intact.
 * Strings that contain Arabic are left alone so they read right-to-left.
 */
export function ltrClass(text: string): string | undefined {
  return ARABIC.test(text) ? undefined : "ltr";
}
