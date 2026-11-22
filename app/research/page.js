import { LegacyMain } from "@/components/LegacyMain";
import { JsonLd } from "@/components/seo/JsonLd";
import { getPageMain } from "@/lib/legacy-content";
import { buildMetadata, webPageSchema, breadcrumbSchema } from "@/lib/seo";

const description =
  "Research and insights from Muhammad Ahsan Ali (MS CS, NLP) on natural language processing, LLMs, AI automation, SaaS architecture and CTO leadership.";

export const metadata = buildMetadata({
  title: "Research: NLP, AI & Software Architecture Insights",
  description,
  path: "/research",
  keywords: ["NLP research", "LLM process automation", "fractional CTO insights", "AI research"],
});

export default function ResearchPage() {
  return (
    <>
      <JsonLd data={webPageSchema({ name: "Research & Thought Leadership", path: "/research", description, type: "CollectionPage" })} />
      <JsonLd data={breadcrumbSchema([{ name: "Home", path: "/" }, { name: "Research", path: "/research" }])} />
      <div className="min-h-screen pt-20">
        <LegacyMain html={getPageMain("reeserach.html")} />
      </div>
    </>
  );
}
