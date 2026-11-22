import { ContentPage } from "@/components/ContentPage";
import { JsonLd } from "@/components/seo/JsonLd";
import { buildMetadata, absoluteUrl } from "@/lib/seo";

export const metadata = buildMetadata({
  title: "Work With Me",
  description:
    "Production-readiness reviews, rescue and modernization of AI-built and legacy apps, AI integration and fractional CTO leadership, with fixed scope and clear prices.",
  path: "/services",
});

const services = [
  "Production-Readiness Review",
  "Rescue & Modernization",
  "AI Integration",
  "Fractional CTO",
];

export default function ServicesPage() {
  return (
    <>
      {services.map((name) => (
        <JsonLd
          key={name}
          data={{
            "@context": "https://schema.org",
            "@type": "Service",
            name,
            provider: { "@type": "Person", name: "Muhammad Ahsan Ali" },
            areaServed: ["US", "GB", "CA", "AU", "AE"],
            url: absoluteUrl("/services"),
          }}
        />
      ))}
      <ContentPage name="services" />
    </>
  );
}
