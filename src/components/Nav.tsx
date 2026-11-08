import Link from "next/link";

import type { Dict, Locale } from "@/content/content";
import { UI } from "@/lib/ui";
import ThemeToggle from "./ThemeToggle";

export default function Nav({ locale, d }: { locale: Locale; d: Dict }) {
  const other: Locale = locale === "en" ? "ar" : "en";
  const ui = UI[locale];

  return (
    <header
      className="sticky top-0 z-50"
      style={{
        background: "var(--nav)",
        backdropFilter: "blur(10px)",
        WebkitBackdropFilter: "blur(10px)",
        borderBottom: "1px solid var(--line)",
      }}
    >
      <div className="wrap">
        <div className="flex flex-wrap items-center gap-x-5 gap-y-1 py-2.5">
          <Link
            href={`/${locale}`}
            className="mono me-auto shrink-0 text-sm text-fg"
          >
            islam.hamdi
          </Link>

          <nav
            aria-label={ui.sections}
            className="noscroll order-3 w-full overflow-x-auto sm:order-none sm:w-auto sm:overflow-visible"
          >
            <ul className="flex items-center gap-x-5 whitespace-nowrap pb-1.5 sm:pb-0">
              {d.nav.map(([id, label]) => (
                <li key={id}>
                  <a
                    href={`#${id}`}
                    className="inline-flex min-h-[32px] items-center text-[13px] text-muted transition-colors hover:text-gold"
                  >
                    {label}
                  </a>
                </li>
              ))}
            </ul>
          </nav>

          <div className="flex shrink-0 items-center gap-2">
            <ThemeToggle label={ui.theme} />
            <Link
              href={`/${other}`}
              hrefLang={other}
              lang={other}
              aria-label={ui.otherLanguage}
              title={ui.otherLanguage}
              className="btn btn-ghost btn-sq mono text-xs"
            >
              {other.toUpperCase()}
            </Link>
            <a href="#contact" className="btn btn-primary">
              {d.cta}
            </a>
          </div>
        </div>
      </div>
    </header>
  );
}
