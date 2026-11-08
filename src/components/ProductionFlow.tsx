"use client";

import { useRef, useState, type KeyboardEvent } from "react";

import type { FlowStep } from "@/content/content";

type Props = {
  flow: FlowStep[];
  note: string;
  rtl: boolean;
  labels: { prev: string; next: string; steps: string };
};

const pad = (n: number) => String(n).padStart(2, "0");

export default function ProductionFlow({ flow, note, rtl, labels }: Props) {
  const [index, setIndex] = useState(0);
  const tabs = useRef<(HTMLButtonElement | null)[]>([]);
  const total = flow.length;
  const step = flow[index];

  const select = (next: number, focus = false) => {
    const i = ((next % total) + total) % total;
    setIndex(i);
    if (focus) tabs.current[i]?.focus();
  };

  const onKeyDown = (event: KeyboardEvent<HTMLDivElement>) => {
    const forward = rtl ? "ArrowLeft" : "ArrowRight";
    const back = rtl ? "ArrowRight" : "ArrowLeft";

    if (event.key === forward || event.key === "ArrowDown") {
      event.preventDefault();
      select(index + 1, true);
    } else if (event.key === back || event.key === "ArrowUp") {
      event.preventDefault();
      select(index - 1, true);
    } else if (event.key === "Home") {
      event.preventDefault();
      select(0, true);
    } else if (event.key === "End") {
      event.preventDefault();
      select(total - 1, true);
    }
  };

  return (
    <div>
      <div
        role="tablist"
        aria-label={labels.steps}
        onKeyDown={onKeyDown}
        className="noscroll flex gap-2 overflow-x-auto pb-1"
      >
        {flow.map((item, i) => {
          const active = i === index;
          return (
            <button
              key={item.n}
              ref={(el) => {
                tabs.current[i] = el;
              }}
              type="button"
              role="tab"
              id={`flow-tab-${i}`}
              aria-selected={active}
              aria-controls="flow-panel"
              tabIndex={active ? 0 : -1}
              onClick={() => select(i)}
              className="btn shrink-0"
              style={{
                background: active ? "var(--accent-soft)" : "transparent",
                borderColor: active ? "var(--accent)" : "var(--line)",
                color: active ? "var(--accent)" : "var(--muted)",
              }}
            >
              <span className="mono text-[11px]">{pad(i + 1)}</span>
              <span>{item.n}</span>
            </button>
          );
        })}
      </div>

      <div
        id="flow-panel"
        role="tabpanel"
        aria-labelledby={`flow-tab-${index}`}
        tabIndex={0}
        className="panel mt-6 p-7 max-sm:p-5"
      >
        <h3 className="display text-[26px] leading-tight max-sm:text-[22px]">
          {step.n}
        </h3>
        <p className="mt-3 max-w-[66ch] leading-relaxed text-muted">{step.d}</p>

        <ul className="mt-6 space-y-3">
          {step.t.map(([code, description]) => (
            <li
              key={`${code}-${description}`}
              className="flex flex-wrap items-center gap-x-3 gap-y-2"
            >
              <span className="pill ltr">{code}</span>
              <span className="text-[14px] leading-snug text-muted">
                {description}
              </span>
            </li>
          ))}
        </ul>
      </div>

      <div className="mt-5 flex flex-wrap items-center gap-4">
        <p className="mono text-[11px] leading-snug text-muted">{note}</p>
        <div className="ms-auto flex gap-2">
          <button
            type="button"
            className="btn btn-ghost btn-sq"
            onClick={() => select(index - 1)}
            aria-label={labels.prev}
            title={labels.prev}
          >
            <span aria-hidden="true">{rtl ? "→" : "←"}</span>
          </button>
          <button
            type="button"
            className="btn btn-ghost btn-sq"
            onClick={() => select(index + 1)}
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
