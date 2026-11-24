import { notFound } from "next/navigation";
import { LegacyMain } from "@/components/LegacyMain";
import { JsonLd } from "@/components/seo/JsonLd";
import { blogPosts, blogSlugs } from "@/lib/blog-posts";
import { getBlogPostHtml } from "@/lib/blog-html";
import { buildMetadata, articleSchema, breadcrumbSchema } from "@/lib/seo";
import { faqSchema } from "@/lib/faq";

export const dynamicParams = false;

export function generateStaticParams() {
  return blogSlugs.map((slug) => ({ slug }));
}

export async function generateMetadata({ params }) {
  const { slug } = await params;
  const p = blogPosts[slug];
  if (!p) return {};
  return buildMetadata({ title: p.seoTitle, description: p.description, path: `/blog/${slug}`, keywords: p.keywords, type: "article" });
}

export default async function BlogPostPage({ params }) {
  const { slug } = await params;
  const p = blogPosts[slug];
  if (!p) notFound();
  const path = `/blog/${slug}`;

  return (
    <>
      <JsonLd
        data={{
          ...articleSchema({
            headline: p.title,
            description: p.description,
            path,
            keywords: p.keywords,
            datePublished: p.datePublished,
            dateModified: p.dateModified,
          }),
          "@type": "BlogPosting",
        }}
      />
      <JsonLd data={faqSchema(p.faq)} />
      <JsonLd
        data={breadcrumbSchema([
          { name: "Home", path: "/" },
          { name: "Blog", path: "/blog" },
          { name: p.title, path },
        ])}
      />
      <div className="min-h-screen pt-20">
        <LegacyMain html={getBlogPostHtml(slug)} />
      </div>
    </>
  );
}
