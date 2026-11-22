import { LegacyMain } from "@/components/LegacyMain";
import { JsonLd } from "@/components/seo/JsonLd";
import { getPageMain } from "@/lib/legacy-content";
import { buildMetadata, webPageSchema, breadcrumbSchema } from "@/lib/seo";

const description =
  "About Muhammad Ahsan Ali: Fractional CTO, software architect and AI engineering leader with 12+ years, MS Computer Science (NLP). Led teams of 10-12 and scaled platforms serving ~1M users.";

export const metadata = buildMetadata({
  title: "About: Fractional CTO, Software Architect & NLP Researcher",
  description,
  path: "/about",
  keywords: ["about Muhammad Ahsan Ali", "engineering leader Karachi", "MS Computer Science NLP"],
});

export default function AboutPage() {
  const html = getPageMain("about.html");

  return (
    <>
      <JsonLd data={webPageSchema({ name: "About Muhammad Ahsan Ali", path: "/about", description, type: "AboutPage" })} />
      <JsonLd data={breadcrumbSchema([{ name: "Home", path: "/" }, { name: "About", path: "/about" }])} />
      <div className="min-h-screen pt-20">
        <LegacyMain html={html} />
      </div>
    </>
  );
}
