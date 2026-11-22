import { LegacyMain } from "@/components/LegacyMain";
import { JsonLd } from "@/components/seo/JsonLd";
import { getPageMain } from "@/lib/legacy-content";
import { buildMetadata, webPageSchema, breadcrumbSchema } from "@/lib/seo";

const description =
  "Book a call with Muhammad Ahsan Ali for fractional CTO support, an architecture review, technical due diligence, AI integration or an engineering team assessment.";

export const metadata = buildMetadata({
  title: "Contact: Book a Fractional CTO or AI Consultation",
  description,
  path: "/contact",
  keywords: ["hire fractional CTO", "book AI consultation", "architecture review", "technical due diligence"],
});

export default function ContactPage() {
  return (
    <>
      <JsonLd data={webPageSchema({ name: "Contact Muhammad Ahsan Ali", path: "/contact", description, type: "ContactPage" })} />
      <JsonLd data={breadcrumbSchema([{ name: "Home", path: "/" }, { name: "Contact", path: "/contact" }])} />
      <div className="min-h-screen pt-20">
        <LegacyMain html={getPageMain("contact.html")} />
      </div>
    </>
  );
}
