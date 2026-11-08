import { ImageResponse } from "next/og";

import { ACCENT, ON_ACCENT, displayFont } from "@/lib/og-font";

export const size = { width: 64, height: 64 };
export const contentType = "image/png";

export default async function Icon() {
  const { family, data } = await displayFont();

  return new ImageResponse(
    (
      <div
        style={{
          width: "100%",
          height: "100%",
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          background: ACCENT,
          color: ON_ACCENT,
          fontFamily: family,
          fontSize: 44,
          lineHeight: 1,
        }}
      >
        I
      </div>
    ),
    {
      ...size,
      fonts: [
        { name: family, data, style: "normal", weight: 700 },
      ],
    },
  );
}
