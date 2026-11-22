import { ContentPage } from "@/components/ContentPage";
import { buildMetadata } from "@/lib/seo";

export const metadata = buildMetadata({
  title: "About & Hire Me",
  description:
    "Muhammad Ahsan Ali: software architect and engineering leader with 12+ years of experience, teams of 10-12 led with CTO-level scope. Open to senior remote roles.",
  path: "/about",
});

export default function AboutPage() {
  return <ContentPage name="about" />;
}
