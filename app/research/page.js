import { LegacyMain } from "@/components/LegacyMain";
import { JsonLd } from "@/components/seo/JsonLd";
import { getPageMain } from "@/lib/legacy-content";
import { buildMetadata, absoluteUrl } from "@/lib/seo";

export const metadata = buildMetadata({
  title: "Research",
  description:
    "Research-led CTO insights on AI, NLP, scalable architecture, and strategic technical execution.",
  path: "/research",
});

export default function ResearchPage() {
  return (
    <>
      <JsonLd
        data={{
          "@context": "https://schema.org",
          "@type": "Article",
          headline: "Fractional Insights",
          author: { "@type": "Person", name: "Muhammad Ahsan Ali" },
          mainEntityOfPage: absoluteUrl("/research"),
        }}
      />
      <div className="min-h-screen pt-20">
        <LegacyMain html={getPageMain("reeserach.html")} />
      </div>
    </>
  );
}

