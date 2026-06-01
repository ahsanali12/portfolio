import { LegacyMain } from "@/components/LegacyMain";
import { getPageMain } from "@/lib/legacy-content";
import { buildMetadata } from "@/lib/seo";

export const metadata = buildMetadata({
  title: "About",
  description:
    "Learn about Muhammad Ahsan Ali's engineering leadership, enterprise delivery, and scalable SaaS strategy experience.",
  path: "/about",
});

export default function AboutPage() {
  const html = getPageMain("about.html");

  console.log("ABOUT HTML:", html);
  console.log("LENGTH:", html?.length);

  return (
      <div className="min-h-screen pt-20">
        <LegacyMain html={html || "<h1>NO HTML LOADED</h1>"} />
      </div>
  );
}