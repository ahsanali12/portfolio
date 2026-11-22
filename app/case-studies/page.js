import { LegacyMain } from "@/components/LegacyMain";
import { JsonLd } from "@/components/seo/JsonLd";
import { getPageMain } from "@/lib/legacy-content";
import { buildMetadata, absoluteUrl, breadcrumbSchema } from "@/lib/seo";
import { caseStudies } from "@/lib/case-study-data";

const description =
  "Real case studies: legacy e-commerce modernization for ~1M users (~60% faster, ~$6k/month saved), a RAG-based generative AI support engine (85% of tier-1 queries) and AI workflows on a multi-vendor SaaS platform.";

export const metadata = buildMetadata({
  title: "Case Studies: Platform Modernization, SaaS Scaling & Generative AI",
  description,
  path: "/case-studies",
  keywords: ["software case studies", "AI case study", "RAG case study", "platform modernization case study"],
});

export default function CaseStudiesPage() {
  return (
    <>
      <JsonLd
        data={{
          "@context": "https://schema.org",
          "@type": "CollectionPage",
          name: "Case Studies",
          url: absoluteUrl("/case-studies"),
          description,
          mainEntity: {
            "@type": "ItemList",
            itemListElement: Object.values(caseStudies).map((s, i) => ({
              "@type": "ListItem",
              position: i + 1,
              name: s.title,
              url: absoluteUrl(s.path),
            })),
          },
        }}
      />
      <JsonLd data={breadcrumbSchema([{ name: "Home", path: "/" }, { name: "Case Studies", path: "/case-studies" }])} />
      <div className="min-h-screen pt-20">
        <LegacyMain html={getPageMain("case-studies.html")} />
      </div>
    </>
  );
}
