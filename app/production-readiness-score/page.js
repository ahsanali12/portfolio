import { LegacyMain } from "@/components/LegacyMain";
import { JsonLd } from "@/components/seo/JsonLd";
import { PrsTool } from "@/components/PrsTool";
import { faqSchema } from "@/lib/faq";
import { faqSection, ctaSection } from "@/lib/legacy-content";
import { prsFaq } from "@/lib/prs";
import { buildMetadata, webPageSchema, breadcrumbSchema, absoluteUrl, PERSON_ID } from "@/lib/seo";

const path = "/production-readiness-score";
const description =
  "Free production-readiness check for web apps, including apps built with Lovable, Bolt or Cursor. Answer 15 questions and get a 0-100 score with prioritized fixes.";

export const metadata = buildMetadata({
  title: "Production-Readiness Score: Free App Readiness Check",
  description,
  path,
  keywords: [
    "production readiness checklist",
    "is my app ready for production",
    "Lovable app production ready",
    "AI-built app security check",
    "Laravel production checklist",
    "SaaS launch checklist",
  ],
});

export default function ProductionReadinessPage() {
  return (
    <>
      <JsonLd data={webPageSchema({ name: "Production-Readiness Score", path, description })} />
      <JsonLd
        data={{
          "@context": "https://schema.org",
          "@type": "WebApplication",
          name: "Production-Readiness Score",
          url: absoluteUrl(path),
          description,
          applicationCategory: "DeveloperApplication",
          operatingSystem: "Any (web browser)",
          isAccessibleForFree: true,
          offers: { "@type": "Offer", price: "0", priceCurrency: "USD" },
          author: { "@id": PERSON_ID },
          creator: { "@id": PERSON_ID },
        }}
      />
      <JsonLd data={breadcrumbSchema([{ name: "Home", path: "/" }, { name: "Production-Readiness Score", path }])} />
      <JsonLd data={faqSchema(prsFaq)} />

      <div className="min-h-screen pt-20 relative z-10 bg-gradient-mesh">
        <section className="relative z-10 px-margin-mobile md:px-margin-desktop max-w-container-max mx-auto pt-16 pb-12">
          <div className="max-w-4xl">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full border border-secondary/30 bg-secondary/10 text-secondary mb-6">
              <span className="material-symbols-outlined text-[16px]">verified_user</span>
              <span className="font-label-md text-label-md uppercase tracking-widest">Free tool · 3 minutes</span>
            </div>
            <h1 className="font-headline-lg text-headline-lg-mobile md:text-display-lg text-on-surface mb-6 leading-tight tracking-tighter">
              Is your app <span className="text-secondary breath-glow">ready for real users?</span>
            </h1>
            <p className="font-body-lg text-body-lg text-on-surface-variant max-w-3xl mb-4">
              Answer 15 questions about security, reliability, performance, releases and ownership. You get a production-readiness score out of
              100 and the fixes that matter most, in priority order. Built for founders and teams shipping web apps, including apps built with
              Lovable, Bolt or Cursor.
            </p>
            <p className="font-body-md text-on-surface-variant/80">
              Your answers stay in your browser. No sign-up, nothing stored.
            </p>
          </div>
        </section>

        <section className="relative z-10 px-margin-mobile md:px-margin-desktop max-w-container-max mx-auto pb-section-gap">
          <div className="max-w-4xl">
            <PrsTool />
          </div>
        </section>
      </div>

      <LegacyMain
        html={`<main class="relative">${faqSection(prsFaq, "About the Production-Readiness Score")}${ctaSection(
          "Prefer an Expert Review?",
          "I review applications the way I would before taking responsibility for them in production, then give you a prioritized fix plan.",
        )}</main>`}
      />
    </>
  );
}
