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
    <section className="wrap pt-16 pb-16 max-sm:pt-9 max-sm:pb-10">
      <div
        className={
          PHOTO
            ? "flex items-center gap-16 max-[900px]:flex-col max-[900px]:items-start max-[900px]:gap-9"
            : ""
        }
      >
        {PHOTO ? (
          <div className="relative order-2 shrink-0 max-[900px]:order-1">
            <span
              aria-hidden="true"
              className="photo-blob"
              style={{
                insetBlockStart: 22,
                insetBlockEnd: -22,
                insetInlineStart: 28,
                insetInlineEnd: -20,
              }}
            />
            <div className="photo-frame relative w-[300px] max-[900px]:w-[210px]">
              <Image
                src={PHOTO.src}
                alt={d.name}
                width={PHOTO.width}
                height={PHOTO.height}
                priority
                sizes="300px"
                className="block h-auto w-full"
              />
            </div>
          </div>
        ) : null}

        <div className="order-1 min-w-0 max-[900px]:order-2">
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

          <h1 className="mt-8 max-w-[14ch]">
            <MarkedName name={d.name} />
          </h1>

          <p className="mt-7 max-w-[52ch] text-[17px] leading-[1.7] text-muted max-sm:text-[15px]">
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
