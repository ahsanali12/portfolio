import { LegacyMain } from "@/components/LegacyMain";
import { JsonLd } from "@/components/seo/JsonLd";
import { getPageMain } from "@/lib/legacy-content";
import { buildMetadata, webPageSchema, breadcrumbSchema } from "@/lib/seo";

const description =
  "Mentorship by Muhammad Ahsan Ali: visiting faculty guidance for computer science students in software engineering and AI, plus workshops and tech talks.";

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
