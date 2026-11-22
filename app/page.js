import { LegacyMain } from "@/components/LegacyMain";
import { JsonLd } from "@/components/seo/JsonLd";
import { getPageMain } from "@/lib/legacy-content";
import { buildMetadata, webPageSchema } from "@/lib/seo";
import { siteConfig } from "@/config/site";
import { homeFaq, faqSchema } from "@/lib/faq";

export const metadata = buildMetadata({
  title: siteConfig.title,
  absoluteTitle: true,
  description: siteConfig.description,
  path: "/",
});

export default function HomePage() {
  const html = getPageMain("home.html");
  return (
    <>
      <JsonLd
        data={webPageSchema({
          name: siteConfig.title,
          path: "/",
          description: siteConfig.description,
          type: "ProfilePage",
        })}
      />
      <JsonLd data={faqSchema(homeFaq)} />
      <div className="min-h-screen">
        <LegacyMain html={html} />
      </div>
    </>
  );
}
