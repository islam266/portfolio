import { ImageResponse } from "next/og";

import { D, LOCALES } from "@/content/content";
import { ACCENT, INK, LINE, MUTED, PAPER, displayFont } from "@/lib/og-font";

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

  return new ImageResponse(
    (
      <div
        style={{
          width: "100%",
          height: "100%",
          display: "flex",
          flexDirection: "column",
          justifyContent: "space-between",
          background: INK,
          padding: 72,
        }}
      >
        <div
          style={{
            display: "flex",
            alignItems: "center",
            gap: 14,
            fontFamily: family,
            fontSize: 22,
            color: ACCENT,
          }}
        >
          <div
            style={{ display: "flex", width: 10, height: 10, background: ACCENT }}
          />
          islam.hamdi
        </div>

        <div style={{ display: "flex" }}>
          <div
            style={{ display: "flex", width: 3, background: ACCENT, marginRight: 34 }}
          />
          <div style={{ display: "flex", flexDirection: "column" }}>
            <div
              style={{
                display: "flex",
                fontFamily: family,
                fontSize: 70,
                letterSpacing: -2,
                color: PAPER,
                lineHeight: 1.15,
              }}
            >
              {d.name}
            </div>
            <div
              style={{
                display: "flex",
                marginTop: 24,
                maxWidth: 880,
                fontSize: 29,
                lineHeight: 1.45,
                color: MUTED,
              }}
            >
              {d.role}
            </div>
          </div>
        </div>

        <div
          style={{
            display: "flex",
            width: "100%",
            borderTop: `1px solid ${LINE}`,
            paddingTop: 24,
            fontFamily: family,
            fontSize: 19,
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
