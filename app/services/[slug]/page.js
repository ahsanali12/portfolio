import { notFound } from "next/navigation";
import { LegacyMain } from "@/components/LegacyMain";
import { JsonLd } from "@/components/seo/JsonLd";
import { servicePages, serviceSlugs } from "@/lib/service-pages";
import { getServicePageHtml } from "@/lib/service-page-html";
import { buildMetadata, absoluteUrl, breadcrumbSchema, PERSON_ID } from "@/lib/seo";
import { faqSchema } from "@/lib/faq";

export const dynamicParams = false;

export function generateStaticParams() {
  return serviceSlugs.map((slug) => ({ slug }));
}

export async function generateMetadata({ params }) {
  const { slug } = await params;
  const p = servicePages[slug];
  if (!p) return {};
  return buildMetadata({
    title: p.title,
    description: p.description,
    path: `/services/${slug}`,
    keywords: p.keywords,
  });
}

export default async function ServiceDetailPage({ params }) {
  const { slug } = await params;
  const p = servicePages[slug];
  if (!p) notFound();
  const path = `/services/${slug}`;

  return (
    <>
      <JsonLd
        data={{
          "@context": "https://schema.org",
          "@type": "Service",
          name: p.title,
          serviceType: p.navTitle,
          description: p.description,
          url: absoluteUrl(path),
          provider: { "@id": PERSON_ID },
          areaServed: ["United States", "Australia", "United Arab Emirates", "United Kingdom", "Worldwide"],
          hasOfferCatalog: {
            "@type": "OfferCatalog",
            name: `${p.navTitle} deliverables`,
            itemListElement: p.deliverables.map((d) => ({ "@type": "Offer", itemOffered: { "@type": "Service", name: d } })),
          },
        }}
      />
      <JsonLd data={faqSchema(p.faq)} />
      <JsonLd
        data={breadcrumbSchema([
          { name: "Home", path: "/" },
          { name: "Services", path: "/services" },
          { name: p.navTitle, path },
        ])}
      />
      <div className="min-h-screen pt-20">
        <LegacyMain html={getServicePageHtml(slug)} />
      </div>
    </>
  );
}
