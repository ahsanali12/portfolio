import { LegacyMain } from "@/components/LegacyMain";
import { JsonLd } from "@/components/seo/JsonLd";
import { getPageMain } from "@/lib/legacy-content";
import { buildMetadata, absoluteUrl } from "@/lib/seo";

export const metadata = buildMetadata({
  title: "Home",
  description:
    "Fractional CTO and strategic technology leadership for startups and enterprises scaling products, teams, and architecture.",
  path: "/",
});

export default function HomePage() {
  const html = getPageMain("home.html");
  return (
    <>
      <JsonLd
        data={{
          "@context": "https://schema.org",
          "@type": "WebPage",
          name: "Home",
          url: absoluteUrl("/"),
          description: metadata.description,
        }}
      />
      <div className="min-h-screen">
        <LegacyMain html={html} />
      </div>
    </>
  );
}

