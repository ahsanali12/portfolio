import { LegacyMain } from "@/components/LegacyMain";
import { JsonLd } from "@/components/seo/JsonLd";
import { getPageMain } from "@/lib/legacy-content";
import { buildMetadata, absoluteUrl, breadcrumbSchema, PERSON_ID } from "@/lib/seo";
import { servicesFaq, faqSchema } from "@/lib/faq";

const description =
  "Fractional CTO, technical founder partner, SaaS architecture and AI integration (LLM, RAG, n8n) for startups and growing companies. Free 30-min call.";

const services = [
  { name: "Fractional CTO", description: "Executive-level technical strategy, product roadmap, team building, process design, board reporting and technical due diligence without a full-time hire." },
  { name: "Technical Founder Partner", description: "MVP planning and scoping, technical team hiring and product validation for non-technical founders." },
  { name: "SaaS Architecture", description: "Multi-tenant, API-first, scalable SaaS platform architecture and legacy system modernization." },
  { name: "AI & Automation", description: "Generative AI, LLM and RAG integration, NLP, AI chatbots and workflow automation with n8n and Python." },
  { name: "Academic Mentorship", description: "Structured mentorship, workshops and curriculum advisory for computer science students and universities." },
];

export const metadata = buildMetadata({
  title: "Services: Fractional CTO, SaaS Architecture & AI Integration",
  description,
  path: "/services",
  keywords: ["fractional CTO services", "AI integration services", "RAG chatbot development", "SaaS architecture consulting"],
});

export default function ServicesPage() {
  return (
    <>
      <JsonLd
        data={{
          "@context": "https://schema.org",
          "@type": "ItemList",
          name: "Services by Muhammad Ahsan Ali",
          url: absoluteUrl("/services"),
          itemListElement: services.map((s, i) => ({
            "@type": "ListItem",
            position: i + 1,
            item: {
              "@type": "Service",
              name: s.name,
              description: s.description,
              provider: { "@id": PERSON_ID },
              areaServed: "Worldwide",
              url: absoluteUrl("/services"),
            },
          })),
        }}
      />
      <JsonLd data={breadcrumbSchema([{ name: "Home", path: "/" }, { name: "Services", path: "/services" }])} />
      <JsonLd data={faqSchema(servicesFaq)} />
      <div className="min-h-screen pt-20">
        <LegacyMain html={getPageMain("services.html")} />
      </div>
    </>
  );
}
