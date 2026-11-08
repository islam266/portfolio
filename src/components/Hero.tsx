import type { Dict } from "@/content/content";
import { ltrClass } from "@/lib/bidi";

export default function Hero({ d }: { d: Dict }) {
  return (
    <section className="wrap pt-16 pb-14 max-sm:pt-10 max-sm:pb-10">
      <ul className="flex flex-wrap gap-2">
        {d.badges.map(([text, highlighted]) => (
          <li
            key={text}
            className={highlighted ? "badge badge-gold" : "badge"}
          >
            {text}
          </li>
        ))}
      </ul>

      <h1 className="mt-7 max-w-[20ch]">{d.name}</h1>

      <p className="mt-6 max-w-[62ch] text-lg leading-relaxed text-muted max-sm:text-base">
        {d.role}
      </p>

      <div className="mt-8 flex flex-wrap gap-3">
        <a href="#projects" className="btn btn-primary">
          {d.c1}
        </a>
        <a href="#contact" className="btn btn-ghost">
          {d.c2}
        </a>
      </div>

      <ul className="rule mt-14 grid grid-cols-4 gap-x-6 gap-y-7 pt-8 max-[820px]:grid-cols-2 max-sm:mt-10">
        {d.stats.map(([value, label]) => (
          <li key={label}>
            <span
              className="serif block text-[clamp(30px,5vw,44px)] leading-none"
              style={{ color: "var(--gold)" }}
            >
              <span className={ltrClass(value)}>{value}</span>
            </span>
            <span className="mt-2.5 block text-[13px] leading-snug text-muted">
              {label}
            </span>
          </li>
        ))}
      </ul>
    </section>
  );
}
