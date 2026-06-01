import { notFound } from "next/navigation";
import { LegacyMain } from "@/components/LegacyMain";
import { JsonLd } from "@/components/seo/JsonLd";
import { caseStudies } from "@/lib/case-study-data";
import { getPageMain } from "@/lib/legacy-content";
import { buildMetadata, absoluteUrl } from "@/lib/seo";

export function generateStaticParams() {
  return Object.keys(caseStudies).map((slug) => ({ slug }));
}

export async function generateMetadata({ params }) {
  const { slug } = await params;
  const study = caseStudies[slug];
  if (!study) return {};
  return buildMetadata({
    title: study.title,
    description: study.description,
    path: study.path,
  });
}

export default async function CaseStudyDetailPage({ params }) {
  const { slug } = await params;
  const study = caseStudies[slug];
  if (!study) notFound();

  return (
    <>
      <JsonLd
        data={{
          "@context": "https://schema.org",
          "@type": "Article",
          headline: study.title,
          author: { "@type": "Person", name: "Muhammad Ahsan Ali" },
          mainEntityOfPage: absoluteUrl(study.path),
        }}
      />
      <div className="min-h-screen pt-20">
        <LegacyMain html={getPageMain(study.file)} />
      </div>
    </>
  );
}
