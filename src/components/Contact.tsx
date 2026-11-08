"use client";

import { useEffect, useRef, useState } from "react";

import { EMAIL, LINKEDIN, type Dict } from "@/content/content";
import Section from "./Section";

export default function Contact({
  d,
  linkedinLabel,
}: {
  d: Dict;
  linkedinLabel: string;
}) {
  const [copied, setCopied] = useState(false);
  const timer = useRef<ReturnType<typeof setTimeout> | null>(null);

  useEffect(
    () => () => {
      if (timer.current) clearTimeout(timer.current);
    },
    [],
  );

  const copy = async () => {
    try {
      await navigator.clipboard.writeText(EMAIL);
      setCopied(true);
      if (timer.current) clearTimeout(timer.current);
      timer.current = setTimeout(() => setCopied(false), 1500);
    } catch {
      // Clipboard unavailable (blocked or insecure context): the mailto link
      // and the visible address below stay usable, so fail quietly.
    }
  };

  return (
    <Section id="contact" index={6} kicker={d.k_contact} heading={d.h_contact}>
      <p className="max-w-[60ch] leading-relaxed text-muted">{d.contact_p}</p>

      <a
        href={`mailto:${EMAIL}`}
        className="display ltr mt-8 inline-block py-2 text-[clamp(22px,4.4vw,40px)] leading-tight break-words transition-colors hover:text-accent-ink"
      >
        {EMAIL}
      </a>

      <div className="mt-8 flex flex-wrap gap-3">
        <button type="button" className="btn btn-primary" onClick={copy}>
          <span aria-live="polite">{copied ? d.copied : d.copy}</span>
        </button>
        <a
          href={LINKEDIN}
          target="_blank"
          rel="noopener noreferrer"
          className="btn btn-ghost"
        >
          {linkedinLabel}
          <span aria-hidden="true" className="ext text-xs">
            ↗
          </span>
        </a>
      </div>
    </Section>
  );
}
