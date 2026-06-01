import { LegacyMain } from "@/components/LegacyMain";
import { getPageMain } from "@/lib/legacy-content";
import { buildMetadata } from "@/lib/seo";

export const metadata = buildMetadata({
  title: "Contact",
  description:
    "Book a strategy call to discuss architecture review, technical due diligence, or fractional CTO support.",
  path: "/contact",
});

export default function ContactPage() {
  return (
    <div className="min-h-screen pt-20">
      <LegacyMain html={getPageMain("contact.html")} />
    </div>
  );
}

