"use client";

import { useState } from "react";

import type { Experience } from "@/content/content";
import { ltrClass } from "@/lib/bidi";

type Props = {
  exp: Experience[];
  /** "of" / "من" — used for the accessible name of the position controls. */
  of: string;
  rtl: boolean;
  labels: { prev: string; next: string };
};

const pad = (n: number) => String(n).padStart(2, "0");

export default function ExperienceCarousel({ exp, of, rtl, labels }: Props) {
  const [index, setIndex] = useState(0);
  const total = exp.length;
  const item = exp[index];

  const go = (next: number) => setIndex(((next % total) + total) % total);

  return (
    <div>
      <div
        aria-live="polite"
        className="grid grid-cols-[260px_1fr] items-start gap-12 max-[820px]:grid-cols-1 max-[820px]:gap-6"
      >
        <div>
          <p className="mono text-[13px]" style={{ color: "var(--accent)" }}>
            {item.y}
          </p>
          <h3 className="display upper mt-3 text-[22px] leading-tight">
            {item.t}
          </h3>
          <p className="mt-2.5 text-[13px] leading-snug text-muted">{item.o}</p>
          <ul className="mt-5 flex flex-wrap gap-2">
            {item.c.map((chip) => (
              <li key={chip} className={`chip ${ltrClass(chip) ?? ""}`}>
                {chip}
              </li>
            ))}
          </ul>
        </div>

        <ul className="space-y-4">
          {item.b.map((bullet) => (
            <li key={bullet} className="flex gap-3">
              <span
                aria-hidden="true"
                className="mt-[9px] h-px w-3 shrink-0"
                style={{ background: "var(--accent)" }}
              />
              <span className="max-w-[72ch] leading-relaxed text-muted">
                {bullet}
              </span>
            </li>
          ))}
        </ul>
      </div>

      <div className="rule mt-10 flex flex-wrap items-center gap-4 pt-5">
        <div className="flex items-center gap-1">
          {exp.map((role, i) => (
            <button
              key={role.t}
              type="button"
              onClick={() => go(i)}
              aria-label={`${pad(i + 1)} ${of} ${pad(total)}`}
              aria-current={i === index ? "true" : undefined}
              className="grid min-h-[40px] min-w-[22px] place-items-center"
            >
              <span
                className="dot"
                style={{
                  background:
                    i === index
                      ? "var(--accent)"
                      : "color-mix(in srgb, var(--muted) 55%, transparent)",
                }}
              />
            </button>
          ))}
        </div>

        <p
          dir="ltr"
          className="mono text-xs text-muted"
          aria-hidden="true"
        >
          {pad(index + 1)} / {pad(total)}
        </p>

        <div className="ms-auto flex gap-2">
          <button
            type="button"
            className="btn btn-ghost btn-sq"
            onClick={() => go(index - 1)}
            aria-label={labels.prev}
            title={labels.prev}
          >
            <span aria-hidden="true">{rtl ? "→" : "←"}</span>
          </button>
          <button
            type="button"
            className="btn btn-ghost btn-sq"
            onClick={() => go(index + 1)}
            aria-label={labels.next}
            title={labels.next}
          >
            <span aria-hidden="true">{rtl ? "←" : "→"}</span>
          </button>
        </div>
      </div>
    </div>
  );
}
