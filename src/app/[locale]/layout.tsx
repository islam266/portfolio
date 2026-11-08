import type { Metadata } from "next";
import { notFound } from "next/navigation";
import { ThemeProvider } from "next-themes";
import { Analytics } from "@vercel/analytics/next";
import { SpeedInsights } from "@vercel/speed-insights/next";

import "../globals.css";
import { fontVariables } from "../fonts";
import { D, LOCALES, isLocale } from "@/content/content";
import { META, SITE_URL } from "@/lib/site";

export const dynamicParams = false;

export function generateStaticParams() {
  return LOCALES.map((locale) => ({ locale }));
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ locale: string }>;
}): Promise<Metadata> {
  const { locale } = await params;
  if (!isLocale(locale)) return {};

  const d = D[locale];
  const meta = META[locale];

  return {
    metadataBase: new URL(SITE_URL),
    title: meta.title,
    description: d.role,
    applicationName: "Islam Hamdi Ahmed",
    authors: [{ name: "Islam Hamdi Ahmed" }],
    creator: "Islam Hamdi Ahmed",
    alternates: {
      canonical: `/${locale}`,
      languages: {
        en: "/en",
        ar: "/ar",
      },
    },
    openGraph: {
      type: "website",
      siteName: "Islam Hamdi Ahmed",
      title: meta.title,
      description: d.role,
      url: `/${locale}`,
      locale: meta.ogLocale,
    },
    twitter: {
      card: "summary_large_image",
      title: meta.title,
      description: d.role,
    },
    robots: { index: true, follow: true },
  };
}

export default async function RootLayout({
  children,
  params,
}: {
  children: React.ReactNode;
  params: Promise<{ locale: string }>;
}) {
  const { locale } = await params;
  if (!isLocale(locale)) notFound();

  return (
    <html
      lang={locale}
      dir={locale === "ar" ? "rtl" : "ltr"}
      className={fontVariables}
      suppressHydrationWarning
    >
      <body>
        <ThemeProvider
          attribute="data-theme"
          defaultTheme="light"
          enableSystem={false}
          disableTransitionOnChange
        >
          {children}
        </ThemeProvider>
        <Analytics />
        <SpeedInsights />
      </body>
    </html>
  );
}
