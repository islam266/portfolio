import type { Dict } from "@/content/content";
import { ltrClass } from "@/lib/bidi";

export default function Hero({ d }: { d: Dict }) {
  return (
    <section className="wrap pt-20 pb-16 max-sm:pt-12 max-sm:pb-10">
      <ul className="flex flex-wrap gap-2">
        {d.badges.map(([text, highlighted]) => (
          <li key={text} className={highlighted ? "badge badge-accent" : "badge"}>
            {text}
          </li>
        ))}
      </ul>

      <h1 className="mt-8 max-w-[18ch]">{d.name}</h1>

      <p className="mt-7 max-w-[58ch] text-[17px] leading-[1.65] text-muted max-sm:text-[15px]">
        {d.role}
      </p>

      <div className="mt-9 flex flex-wrap gap-3">
        <a href="#projects" className="btn btn-primary">
          {d.c1}
        </a>
        <a href="#contact" className="btn btn-ghost">
          {d.c2}
        </a>
      </div>

      <ul
        className="mt-16 grid grid-cols-4 border-y max-[820px]:grid-cols-2 max-sm:mt-12"
        style={{ borderColor: "var(--line)" }}
      >
        {d.stats.map(([value, label]) => (
          <li
            key={label}
            className="border-s py-7 ps-6 first:border-s-0 first:ps-0 max-[820px]:odd:border-s-0 max-[820px]:odd:ps-0 max-sm:py-5"
            style={{ borderColor: "var(--line)" }}
          >
            <span
              className="display block text-[clamp(28px,4.4vw,40px)] leading-none"
              style={{ color: "var(--accent)" }}
            >
              <span className={ltrClass(value)}>{value}</span>
            </span>
            <span className="mono mt-3 block text-[11px] leading-snug text-muted">
              {label}
            </span>
          </li>
        ))}
      </ul>
    </section>
  );
}
