import type { ReactNode } from "react";

type Props = {
  id: string;
  kicker: string;
  heading: string;
  children: ReactNode;
};

/** Kicker + h2 wrapper used by every content section. */
export default function Section({ id, kicker, heading, children }: Props) {
  const headingId = `${id}-heading`;

  return (
    <section id={id} aria-labelledby={headingId} className="section">
      <div className="wrap">
        <p className="kicker">{kicker}</p>
        <h2 id={headingId} className="mt-4">
          {heading}
        </h2>
        <div className="mt-10 max-sm:mt-7">{children}</div>
      </div>
    </section>
  );
}
