import type { ReactNode } from "react";

type Props = {
  id: string;
  /** 1-based position, shown as a monospace index next to the kicker. */
  index: number;
  kicker: string;
  heading: string;
  children: ReactNode;
};

/** Numbered kicker + h2 wrapper used by every content section. */
export default function Section({
  id,
  index,
  kicker,
  heading,
  children,
}: Props) {
  const headingId = `${id}-heading`;

  return (
    <section id={id} aria-labelledby={headingId} className="section">
      <div className="wrap">
        <p className="kicker">
          <span className="num" aria-hidden="true">
            {String(index).padStart(2, "0")}
          </span>
          <span className="tick" aria-hidden="true" />
          <span>{kicker}</span>
        </p>
        <h2 id={headingId} className="mt-5">
          {heading}
        </h2>
        <div className="mt-12 max-sm:mt-8">{children}</div>
      </div>
    </section>
  );
}
