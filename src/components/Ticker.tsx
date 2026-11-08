import type { Dict } from "@/content/content";

/** Decorative full-bleed marquee. Hidden from assistive tech. */
export default function Ticker({ d }: { d: Dict }) {
  const words = [...d.ticker, ...d.ticker];

  return (
    <div className="ticker" aria-hidden="true">
      <div className="ticker-track">
        {words.map((word, i) => (
          <span key={`${word}-${i}`} className="ticker-item">
            <span className="label text-[12px] whitespace-nowrap" style={{ color: "var(--on-accent)" }}>
              {word}
            </span>
            <span
              className="text-[10px] leading-none"
              style={{ color: "var(--on-accent)", opacity: 0.55 }}
            >
              ●
            </span>
          </span>
        ))}
      </div>
    </div>
  );
}
