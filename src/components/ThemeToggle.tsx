"use client";

import { useTheme } from "next-themes";

export default function ThemeToggle({ label }: { label: string }) {
  const { resolvedTheme, setTheme } = useTheme();

  // The button renders one fixed glyph, so server and client markup match and
  // no mounted guard is needed. The theme is only read when it is clicked,
  // by which point next-themes has resolved it.
  return (
    <button
      type="button"
      className="btn btn-ghost btn-sq"
      title={label}
      aria-label={label}
      onClick={() => setTheme(resolvedTheme === "light" ? "dark" : "light")}
    >
      <span aria-hidden="true" className="text-base leading-none">
        ◐
      </span>
    </button>
  );
}
