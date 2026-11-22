import { ContentPage } from "@/components/ContentPage";
import { JsonLd } from "@/components/seo/JsonLd";
import { buildMetadata, absoluteUrl } from "@/lib/seo";

export const metadata = buildMetadata({
  title: "Case Studies",
  description:
    "Real results: ~60% faster load times and ~$6k/month lower server costs on a ~1M-user retail platform, 10+ client products delivered as Technical Lead, and more.",
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
      <ContentPage name="case-studies" />
    </>
  );
}
