import { ImageResponse } from "next/og";

import { D, LOCALES } from "@/content/content";
import {
  ACCENT,
  INK,
  LINE,
  MUTED,
  ON_ACCENT,
  PAPER,
  displayFont,
} from "@/lib/og-font";

export const alt = "Islam Hamdi Ahmed — SAP PP Business Analyst";
export const size = { width: 1200, height: 630 };
export const contentType = "image/png";

export function generateStaticParams() {
  return LOCALES.map((locale) => ({ locale }));
}

/**
 * One card for both locales, in English. The image renderer lays glyphs out
 * without the bidi algorithm, so Arabic comes out with its words in reverse
 * order — an English card is the honest option until that changes.
 */
export default async function OpengraphImage() {
  const { family, data } = await displayFont();
  const d = D.en;
  const words = d.name.split(" ");
  const last = words.pop() as string;

  return new ImageResponse(
    (
      <div
        style={{
          width: "100%",
          height: "100%",
          display: "flex",
          flexDirection: "column",
          justifyContent: "space-between",
          background: PAPER,
          padding: 70,
          fontFamily: family,
          position: "relative",
        }}
      >
        <div
          style={{
            position: "absolute",
            top: -180,
            right: -140,
            width: 560,
            height: 560,
            borderRadius: 999,
            background: ACCENT,
            opacity: 0.18,
            display: "flex",
          }}
        />

        <div style={{ display: "flex", alignItems: "center", gap: 14 }}>
          <div
            style={{
              display: "flex",
              width: 14,
              height: 14,
              borderRadius: 999,
              background: ACCENT,
            }}
          />
          <div style={{ display: "flex", fontSize: 24, color: INK }}>
            islam.hamdi
          </div>
        </div>

        <div style={{ display: "flex", flexDirection: "column" }}>
          <div
            style={{
              display: "flex",
              flexWrap: "wrap",
              alignItems: "center",
              gap: 16,
              fontSize: 82,
              color: INK,
              lineHeight: 1.1,
            }}
          >
            <div style={{ display: "flex" }}>{words.join(" ")}</div>
            <div
              style={{
                display: "flex",
                background: ACCENT,
                color: ON_ACCENT,
                borderRadius: 16,
                padding: "2px 20px 12px",
              }}
            >
              {last}
            </div>
          </div>
          <div
            style={{
              display: "flex",
              marginTop: 28,
              maxWidth: 900,
              fontSize: 28,
              lineHeight: 1.45,
              color: MUTED,
            }}
          >
            {d.role}
          </div>
        </div>

        <div
          style={{
            display: "flex",
            width: "100%",
            borderTop: `2px solid ${LINE}`,
            paddingTop: 24,
            fontSize: 20,
            color: MUTED,
          }}
        >
          {d.loc}
        </div>
      </div>
    ),
    {
      ...size,
      fonts: [{ name: family, data, style: "normal", weight: 700 }],
    },
  );
}
