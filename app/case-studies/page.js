import { LegacyMain } from "@/components/LegacyMain";
import { JsonLd } from "@/components/seo/JsonLd";
import { getPageMain } from "@/lib/legacy-content";
import { buildMetadata, absoluteUrl } from "@/lib/seo";

export const metadata = buildMetadata({
  title: "Case Studies",
  description:
    "Strategic technical case studies across platform modernization, SaaS scaling, and AI-powered transformation.",
  path: "/case-studies",
});

export default function CaseStudiesPage() {
  return (
    <>
      <JsonLd
        data={{
          "@context": "https://schema.org",
          "@type": "BreadcrumbList",
          itemListElement: [
            { "@type": "ListItem", position: 1, name: "Home", item: absoluteUrl("/") },
            { "@type": "ListItem", position: 2, name: "Case Studies", item: absoluteUrl("/case-studies") },
          ],
        }}
      />
      <div className="min-h-screen pt-20">
        <LegacyMain html={getPageMain("case-studies.html")} />
      </div>
    </>
  );
}

