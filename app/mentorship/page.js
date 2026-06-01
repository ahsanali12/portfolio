import { LegacyMain } from "@/components/LegacyMain";
import { getPageMain } from "@/lib/legacy-content";
import { buildMetadata } from "@/lib/seo";

export const metadata = buildMetadata({
  title: "Mentorship",
  description:
    "Mentorship for future engineering leaders through practical guidance, curriculum alignment, and career strategy.",
  path: "/mentorship",
});

export default function MentorshipPage() {
  return (
    <div className="min-h-screen pt-20">
      <LegacyMain html={getPageMain("mentorship.html")} />
    </div>
  );
}

