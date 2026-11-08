import { ImageResponse } from "next/og";

import { D, LOCALES, isLocale } from "@/content/content";
import { GOLD, INK, LINE, PAPER, serifFont } from "@/lib/og-font";

export const alt = "Islam Hamdi Ahmed — SAP PP Business Analyst";
export const size = { width: 1200, height: 630 };
export const contentType = "image/png";

export function generateStaticParams() {
  return LOCALES.map((locale) => ({ locale }));
}

export default async function OpengraphImage({
  params,
}: {
  params: Promise<{ locale: string }>;
}) {
  const { locale: raw } = await params;
  const locale = isLocale(raw) ? raw : "en";
  const d = D[locale];
  const rtl = locale === "ar";
  const { family, data } = await serifFont(locale);

  return new ImageResponse(
    (
      <div
        style={{
          width: "100%",
          height: "100%",
          display: "flex",
          flexDirection: "column",
          justifyContent: "space-between",
          alignItems: rtl ? "flex-end" : "flex-start",
          textAlign: rtl ? "right" : "left",
          background: INK,
          padding: 72,
          fontFamily: family,
        }}
      >
        <div style={{ display: "flex", fontSize: 26, color: GOLD }}>
          islam.hamdi
        </div>

        <div
          style={{
            display: "flex",
            flexDirection: "column",
            alignItems: rtl ? "flex-end" : "flex-start",
          }}
        >
          <div
            style={{
              display: "flex",
              fontSize: 92,
              color: GOLD,
              lineHeight: 1.15,
            }}
          >
            {d.name}
          </div>
          <div
            style={{
              display: "flex",
              marginTop: 26,
              maxWidth: 940,
              fontSize: 30,
              lineHeight: 1.45,
              color: PAPER,
            }}
          >
            {d.role}
          </div>
        </div>

        <div
          style={{
            display: "flex",
            width: "100%",
            justifyContent: rtl ? "flex-end" : "flex-start",
            borderTop: `1px solid ${LINE}`,
            paddingTop: 24,
            fontSize: 22,
            color: PAPER,
            opacity: 0.65,
          }}
        >
          {d.loc}
        </div>
      </div>
    ),
    {
      ...size,
      fonts: [{ name: family, data, style: "normal", weight: 400 }],
    },
  );
}
