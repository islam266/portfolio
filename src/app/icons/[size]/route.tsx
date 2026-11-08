import { ImageResponse } from "next/og";

import { GOLD, INK, serifFont } from "@/lib/og-font";

const SIZES = ["192", "512"] as const;

export const dynamicParams = false;

export function generateStaticParams() {
  return SIZES.map((size) => ({ size }));
}

export async function GET(
  _request: Request,
  { params }: { params: Promise<{ size: string }> },
) {
  const { size } = await params;
  const px = Number(size);

  if (!SIZES.includes(size as (typeof SIZES)[number])) {
    return new Response("Not found", { status: 404 });
  }

  const { family, data } = await serifFont();

  return new ImageResponse(
    (
      <div
        style={{
          width: "100%",
          height: "100%",
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          background: INK,
          color: GOLD,
          fontFamily: family,
          // Keep the glyph inside the maskable safe zone (centre 80%).
          fontSize: Math.round(px * 0.46),
          lineHeight: 1,
        }}
      >
        I
      </div>
    ),
    {
      width: px,
      height: px,
      fonts: [
        { name: family, data, style: "normal", weight: 400 },
      ],
    },
  );
}
