import type { Dict } from "@/content/content";

/** Decorative full-bleed marquee. Hidden from assistive tech. */
export default function Ticker({ d }: { d: Dict }) {
  const words = [...d.ticker, ...d.ticker];

  return (
    <div className="ticker" aria-hidden="true">
      <div className="ticker-track">
        {words.map((word, i) => (
          <span key={`${word}-${i}`} className="ticker-item">
            <span className="mono upper text-[11px] whitespace-nowrap text-muted">
              {word}
            </span>
            <span
              className="mono text-[12px] leading-none"
              style={{ color: "var(--accent)" }}
            >
              /
            </span>
          </span>
        ))}
      </div>
    </div>
  );
}
