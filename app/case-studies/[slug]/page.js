import { notFound } from "next/navigation";
import { LegacyMain } from "@/components/LegacyMain";
import { JsonLd } from "@/components/seo/JsonLd";
import { caseStudies } from "@/lib/case-study-data";
import { getPageMain } from "@/lib/legacy-content";
import { buildMetadata, articleSchema, breadcrumbSchema } from "@/lib/seo";

export const dynamicParams = false;

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
    keywords: study.keywords,
    type: "article",
  });
}

export default async function CaseStudyDetailPage({ params }) {
  const { slug } = await params;
  const study = caseStudies[slug];
  if (!study) notFound();

  return (
    <>
      <JsonLd
        data={articleSchema({
          headline: study.title,
          description: study.description,
          path: study.path,
          keywords: study.keywords,
          datePublished: study.datePublished,
          dateModified: study.dateModified,
        })}
      />
      <JsonLd
        data={breadcrumbSchema([
          { name: "Home", path: "/" },
          { name: "Case Studies", path: "/case-studies" },
          { name: study.title, path: study.path },
        ])}
      />
      <div className="min-h-screen pt-20">
        <LegacyMain html={getPageMain(study.file, { dateModified: study.dateModified })} />
      </div>
    </>
  );
}
