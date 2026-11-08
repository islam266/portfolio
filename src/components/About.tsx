import type { Dict } from "@/content/content";
import Section from "./Section";

export default function About({ d }: { d: Dict }) {
  return (
    <Section id="about" index={1} kicker={d.k_about} heading={d.h_about}>
      <div className="grid grid-cols-[1.2fr_1fr] items-start gap-12 max-[820px]:grid-cols-1 max-[820px]:gap-8">
        <div className="space-y-5 text-start">
          {d.about.map((paragraph) => (
            <p
              key={paragraph}
              className="max-w-[66ch] leading-relaxed text-muted"
            >
              {paragraph}
            </p>
          ))}
        </div>

        <div className="panel p-6 max-sm:p-5">
          <h3 className="kicker kicker-dot">{d.cert_h}</h3>
          <ul className="mt-5 space-y-4">
            {d.certs.map(([title, meta]) => (
              <li
                key={title}
                className="border-s-2 ps-4"
                style={{ borderInlineStartColor: "var(--line)" }}
              >
                <p className="text-[15px] leading-snug">{title}</p>
                <p className="mono mt-1.5 text-[11px] leading-snug text-muted">
                  {meta}
                </p>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </Section>
  );
}
