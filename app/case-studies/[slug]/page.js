import { notFound } from "next/navigation";
import { ContentPage } from "@/components/ContentPage";
import { JsonLd } from "@/components/seo/JsonLd";
import { caseStudies } from "@/lib/case-study-data";
import { buildMetadata, absoluteUrl } from "@/lib/seo";

export function generateStaticParams() {
  return Object.keys(caseStudies).map((slug) => ({ slug }));
}

export const dynamicParams = false;

export async function generateMetadata({ params }) {
  const { slug } = await params;
  const study = caseStudies[slug];
  if (!study) return {};
  return buildMetadata({ title: study.title, description: study.description, path: study.path });
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
          description: study.description,
          author: { "@type": "Person", name: "Muhammad Ahsan Ali", url: absoluteUrl("/") },
          mainEntityOfPage: absoluteUrl(study.path),
        }}
      />
      <ContentPage name={study.file} />
    </>
  );
}
