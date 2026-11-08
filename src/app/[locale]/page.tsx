import { notFound } from "next/navigation";

import { D, EMAIL, LINKEDIN, isLocale } from "@/content/content";
import { SITE_URL } from "@/lib/site";
import { UI } from "@/lib/ui";

import About from "@/components/About";
import Contact from "@/components/Contact";
import ExperienceCarousel from "@/components/ExperienceCarousel";
import Footer from "@/components/Footer";
import Hero from "@/components/Hero";
import Nav from "@/components/Nav";
import ProductionFlow from "@/components/ProductionFlow";
import ProgressBar from "@/components/ProgressBar";
import Projects from "@/components/Projects";
import Section from "@/components/Section";
import Skills from "@/components/Skills";
import Ticker from "@/components/Ticker";

export default async function Page({
  params,
}: {
  params: Promise<{ locale: string }>;
}) {
  const { locale } = await params;
  if (!isLocale(locale)) notFound();

  const d = D[locale];
  const ui = UI[locale];
  const rtl = locale === "ar";

  const personSchema = {
    "@context": "https://schema.org",
    "@type": "Person",
    name: d.name,
    jobTitle: "SAP Business Analyst",
    worksFor: {
      "@type": "Organization",
      name: "Al Wataniya Poultry",
    },
    address: {
      "@type": "PostalAddress",
      addressLocality: "Buraydah",
      addressCountry: "Saudi Arabia",
    },
    email: `mailto:${EMAIL}`,
    url: `${SITE_URL}/${locale}`,
    sameAs: [LINKEDIN],
  };

  return (
    <>
      <script
        type="application/ld+json"
        // Static, locally built object — no user input reaches this string.
        dangerouslySetInnerHTML={{ __html: JSON.stringify(personSchema) }}
      />

      <ProgressBar />
      <Nav locale={locale} d={d} />

      <main>
        <Hero d={d} />
        <Ticker d={d} />
        <About d={d} />

        <Section id="experience" kicker={d.k_exp} heading={d.h_exp}>
          <ExperienceCarousel
            exp={d.exp}
            of={d.of}
            rtl={rtl}
            labels={{ prev: ui.prev, next: ui.next }}
          />
        </Section>

        <Projects d={d} />

        <Section id="flow" kicker={d.k_flow} heading={d.h_flow}>
          <ProductionFlow
            flow={d.flow}
            note={d.fnote}
            rtl={rtl}
            labels={{ prev: ui.prev, next: ui.next, steps: ui.steps }}
          />
        </Section>

        <Skills d={d} />
        <Contact d={d} linkedinLabel={ui.linkedin} />
      </main>

      <Footer d={d} />
    </>
  );
}
