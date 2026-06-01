import { LegacyMain } from "@/components/LegacyMain";
import { JsonLd } from "@/components/seo/JsonLd";
import { getPageMain } from "@/lib/legacy-content";
import { buildMetadata, absoluteUrl } from "@/lib/seo";

export const metadata = buildMetadata({
  title: "Services",
  description:
    "Fractional CTO, SaaS architecture, founder partnership, AI automation, and technical mentorship services.",
  path: "/services",
});

export default function ServicesPage() {
  return (
    <>
      <JsonLd
        data={{
          "@context": "https://schema.org",
          "@type": "Service",
          name: "Fractional CTO Services",
          provider: { "@type": "Person", name: "Muhammad Ahsan Ali" },
          areaServed: "Global",
          url: absoluteUrl("/services"),
        }}
      />
      <div className="min-h-screen pt-20">
        <LegacyMain html={getPageMain("services.html")} />
      </div>
    </>
  );
}

