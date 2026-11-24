import { LegacyMain } from "@/components/LegacyMain";
import { JsonLd } from "@/components/seo/JsonLd";
import { blogPosts } from "@/lib/blog-posts";
import { getBlogIndexHtml } from "@/lib/blog-html";
import { buildMetadata, webPageSchema, breadcrumbSchema, absoluteUrl, PERSON_ID } from "@/lib/seo";

const description =
  "Articles by Muhammad Ahsan Ali on fractional CTO decisions, legacy PHP modernization, SaaS architecture and production AI (RAG, LLM), from real projects.";

export const metadata = buildMetadata({
  title: "Blog: Fractional CTO, SaaS & AI Engineering",
  description,
  path: "/blog",
  keywords: ["fractional CTO blog", "AI engineering articles", "RAG chatbot guide", "legacy PHP modernization"],
});

export default function BlogIndexPage() {
  return (
    <>
      <JsonLd data={webPageSchema({ name: "Blog", path: "/blog", description, type: "CollectionPage" })} />
      <JsonLd
        data={{
          "@context": "https://schema.org",
          "@type": "Blog",
          name: "Muhammad Ahsan Ali Blog",
          url: absoluteUrl("/blog"),
          author: { "@id": PERSON_ID },
          blogPost: Object.entries(blogPosts).map(([slug, p]) => ({
            "@type": "BlogPosting",
            headline: p.title,
            url: absoluteUrl(`/blog/${slug}`),
            datePublished: p.datePublished,
            author: { "@id": PERSON_ID },
          })),
        }}
      />
      <JsonLd data={breadcrumbSchema([{ name: "Home", path: "/" }, { name: "Blog", path: "/blog" }])} />
      <div className="min-h-screen pt-20">
        <LegacyMain html={getBlogIndexHtml()} />
      </div>
    </>
  );
}
