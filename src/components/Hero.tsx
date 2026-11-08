import Image from "next/image";

import type { Dict } from "@/content/content";
import { ltrClass } from "@/lib/bidi";
import { PHOTO } from "@/lib/site";

/** Renders the name with an accent block behind its last word. */
function MarkedName({ name }: { name: string }) {
  const parts = name.trim().split(/\s+/);
  if (parts.length < 2) return <>{name}</>;

  const last = parts.pop() as string;
  return (
    <>
      {parts.join(" ")} <span className="mark">{last}</span>
    </>
  );
}

export default function Hero({ d }: { d: Dict }) {
  return (
    <section className="wrap pt-16 pb-16 max-sm:pt-10 max-sm:pb-10">
      <div
        className={
          PHOTO
            ? "grid grid-cols-[1.15fr_0.85fr] items-center gap-14 max-[900px]:grid-cols-1 max-[900px]:gap-10"
            : ""
        }
      >
        <div>
          <ul className="flex flex-wrap gap-2.5">
            {d.badges.map(([text, highlighted]) => (
              <li
                key={text}
                className={highlighted ? "badge badge-accent" : "badge"}
              >
                {text}
              </li>
            ))}
          </ul>

          <h1 className="mt-8 max-w-[15ch]">
            <MarkedName name={d.name} />
          </h1>

          <p className="mt-7 max-w-[54ch] text-[17px] leading-[1.7] text-muted max-sm:text-[15px]">
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
        </div>

        {PHOTO ? (
          <div className="relative">
            <span
              aria-hidden="true"
              className="photo-blob"
              style={{ inset: "26px -22px -26px 34px" }}
            />
            <div className="photo-frame relative aspect-[4/5] w-full">
              <Image
                src={PHOTO.src}
                alt={d.name}
                fill
                priority
                sizes="(max-width: 900px) 92vw, 440px"
                className="object-cover"
              />
            </div>
          </div>
        ) : null}
      </div>

      <ul className="mt-16 grid grid-cols-4 gap-4 max-[820px]:grid-cols-2 max-sm:mt-12">
        {d.stats.map(([value, label]) => (
          <li key={label} className="panel px-6 py-6 max-sm:px-5 max-sm:py-5">
            <span
              className="display block text-[clamp(28px,4.2vw,40px)] leading-none"
              style={{ color: "var(--accent-ink)" }}
            >
              <span className={ltrClass(value)}>{value}</span>
            </span>
            <span className="label mt-3 block text-[11px] leading-snug text-muted">
              {label}
            </span>
          </li>
        ))}
      </ul>
    </section>
  );
}
