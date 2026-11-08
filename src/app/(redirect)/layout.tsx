import type { Metadata } from "next";

import { META, SITE_URL } from "@/lib/site";

/**
 * Root layout for `/` only. The page below it redirects straight to /en, so
 * this shell never reaches the user — it exists because every App Router page
 * needs a root layout, and /[locale]/layout.tsx owns the real one.
 */
export const metadata: Metadata = {
  metadataBase: new URL(SITE_URL),
  title: META.en.title,
};

export default function RedirectLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}
