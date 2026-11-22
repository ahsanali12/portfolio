import { ContentPage } from "@/components/ContentPage";
import { JsonLd } from "@/components/seo/JsonLd";
import { buildMetadata, absoluteUrl } from "@/lib/seo";

export const metadata = {
  ...buildMetadata({
    title: "Software Architect & Engineering Leader",
    description:
      "Software architect and engineering leader with 12+ years of experience. I rescue, modernize and scale SaaS and e-commerce products, and add practical AI.",
    path: "/",
  }),
  title: { absolute: "Muhammad Ahsan Ali | Software Architect & Engineering Leader" },
};

const faq = [
  ["Do you work with US companies from Pakistan?", "Yes. Most of my clients have been in the US, plus Australia and the UAE. I overlap with US working hours and give updates in writing and on calls every week."],
  ["Do I need to rewrite my app?", "Usually not. Most products can be fixed and modernized in stages while they keep running."],
  ["Can you work with my existing team?", "Yes. I've led teams of 10-12, and I'm happy to lead, mentor or support yours."],
  ["Who owns the code?", "You do. Always."],
];

export default function HomePage() {
  return (
    <>
      <JsonLd
        data={{
          "@context": "https://schema.org",
          "@type": "FAQPage",
          url: absoluteUrl("/"),
          mainEntity: faq.map(([q, a]) => ({
            "@type": "Question",
            name: q,
            acceptedAnswer: { "@type": "Answer", text: a },
          })),
        }}
      />
      <ContentPage name="home" />
    </>
  );
}
