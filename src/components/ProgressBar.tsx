"use client";

import { useEffect, useState } from "react";

/** Fixed 2px accent bar at the very top; width tracks scroll percentage. */
export default function ProgressBar() {
  const [percent, setPercent] = useState(0);

  useEffect(() => {
    const update = () => {
      const doc = document.documentElement;
      const scrollable = doc.scrollHeight - window.innerHeight;
      setPercent(scrollable > 0 ? (window.scrollY / scrollable) * 100 : 0);
    };

    update();
    window.addEventListener("scroll", update, { passive: true });
    window.addEventListener("resize", update, { passive: true });

    return () => {
      window.removeEventListener("scroll", update);
      window.removeEventListener("resize", update);
    };
  }, []);

  return (
    <div
      aria-hidden="true"
      style={{
        position: "fixed",
        top: 0,
        insetInlineStart: 0,
        height: 2,
        width: `${percent}%`,
        background: "var(--accent)",
        zIndex: 60,
        pointerEvents: "none",
      }}
    />
  );
}
