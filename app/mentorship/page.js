import { LegacyMain } from "@/components/LegacyMain";
import { JsonLd } from "@/components/seo/JsonLd";
import { getPageMain } from "@/lib/legacy-content";
import { buildMetadata, webPageSchema, breadcrumbSchema } from "@/lib/seo";

const description =
  "Mentorship and visiting faculty work by Muhammad Ahsan Ali: guiding computer science students in software engineering, AI and system architecture, plus workshops, tech talks and curriculum advisory.";

export const metadata = buildMetadata({
  title: "Mentorship & Visiting Faculty: Software Engineering and AI",
  description,
  path: "/mentorship",
  keywords: ["software engineering mentorship", "visiting faculty computer science", "tech talks AI", "curriculum advisory"],
});

export default function MentorshipPage() {
  return (
    <>
      <JsonLd data={webPageSchema({ name: "Mentorship", path: "/mentorship", description })} />
      <JsonLd data={breadcrumbSchema([{ name: "Home", path: "/" }, { name: "Mentorship", path: "/mentorship" }])} />
      <div className="min-h-screen pt-20">
        <LegacyMain html={getPageMain("mentorship.html")} />
      </div>
    </>
  );
}
