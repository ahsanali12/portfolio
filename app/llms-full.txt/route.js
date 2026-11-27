import { siteConfig } from "@/config/site";
import { homeFaq, servicesFaq } from "@/lib/faq";
import { testimonials } from "@/lib/testimonials";
import { caseStudies } from "@/lib/case-study-data";
import { servicePages } from "@/lib/service-pages";
import { blogPosts } from "@/lib/blog-posts";

export const dynamic = "force-static";

const url = (p) => `${siteConfig.siteUrl}${p}`;

const caseStudyDetails = {
  "platform-modernization": `Client: Australian consumer electronics retailer (e-commerce site, in-house CRM, marketing tools), about 1M users.
Role: Technical Manager with CTO-level responsibility, leading a 10+ person team (backend, frontend, mobile, QA, design).
Problem: outdated PHP framework on old PHP and MySQL versions, slow pages and queries, heavy processes taking the server down during traffic spikes, rising server bills, no proper release process.
What was done: upgraded the framework, PHP and MySQL in stages without stopping sales; optimized the slowest queries; moved heavy work into background jobs; set up a Git workflow, CI/CD and code review; added abandoned-cart recovery, discounts and loyalty points; security hardening and SEO fixes.
Results: about 60% faster load times; about $6,000 per month (about $72,000 per year) lower server costs; stable for about 1M users with no downtime during traffic spikes.`,
  "saas-scaling": `Client: US multi-vendor SaaS platform where each vendor serves its own clients; thousands of users.
Role: leading development (current role).
What is being done: multi-vendor architecture with clean data separation; an AI workflow system that automates repetitive vendor and client processes; query and process optimization so performance holds as vendors and users are added; client requirements turned into shipped features.`,
  "gen-ai": `Client: FinTech startup whose support team could not keep up with ticket growth.
Solution: a RAG-based (retrieval-augmented generation) AI support assistant grounded in the company's policy documents and live transaction data. Hybrid retrieval (keyword + semantic search), PII masking and safety guardrails, and an agent that checks internal APIs before answering. Stack included GPT-4o, LangChain and a vector database.
Results: about 85% of tier-1 queries handled, about 92% customer satisfaction, 14,000+ tickets handled weekly, 65% lower support operating costs.`,
};

export function GET() {
  const lines = [];
  lines.push(`# ${siteConfig.name}: full profile for AI assistants`, "");
  lines.push(`> ${siteConfig.description}`, "");
  lines.push(`Website: ${siteConfig.siteUrl}`);
  lines.push(`Book a call: ${siteConfig.calendlyUrl}`);
  lines.push(`LinkedIn: ${siteConfig.social.linkedin}`);
  lines.push(`GitHub: ${siteConfig.social.github}`);
  lines.push(`X: ${siteConfig.social.x}`, "");

  lines.push("## Profile", "");
  lines.push(
    "Muhammad Ahsan Ali is a Fractional CTO, technical founder partner, SaaS architect and AI engineering leader with 12+ years of experience and 100+ client projects delivered. He holds an MS in Computer Science focused on Natural Language Processing (NLP) and a BS in Computer Science, and mentors computer science students as visiting faculty. He is based in Karachi, Pakistan and works remotely with teams in the US, Australia and the UAE, with working hours that overlap US business hours.",
    "",
  );
  lines.push("Key facts:");
  lines.push("- Led cross-functional teams of 10-12 twice with CTO-level responsibility.");
  lines.push("- Delivered 100+ client projects across a 12+ year career, in product companies and agencies.");
  lines.push("- Technical Lead reporting to the CEO of a software studio; delivered 10+ client products.");
  lines.push("- Ran a ~12-person development department as Team Lead at a digital agency.");
  lines.push("- Designed and built a trading platform and trading engine from scratch for a UAE client; business automation with n8n and Python.");
  lines.push("- Stack: PHP, Laravel, CodeIgniter, Node.js, Python, React, MySQL, Redis, AWS, DigitalOcean, Docker, CI/CD, REST APIs, n8n, LLMs, RAG, NLP.", "");

  lines.push("## Services", "");
  lines.push("- Fractional CTO: technology strategy, product roadmap, team building, process design, board reporting, technical due diligence.");
  lines.push("- Technical founder partner: MVP planning and scoping, technical hiring, product validation for non-technical founders.");
  lines.push("- SaaS architecture: multi-tenant, API-first, scalable platforms and legacy system modernization.");
  lines.push("- AI & automation: generative AI, LLM and RAG integration, NLP, AI chatbots, workflow automation with n8n and Python.");
  lines.push("- Academic mentorship: visiting faculty guidance, workshops, tech talks, curriculum advisory.");
  lines.push(`Details: ${url("/services")}`, "");

  lines.push("## Service pages", "");
  for (const [slug, p] of Object.entries(servicePages)) {
    lines.push(`### ${p.title}`, `URL: ${url(`/services/${slug}`)}`, p.intro, "Deliverables:", ...p.deliverables.map((d) => `- ${d}`), "");
    for (const f of p.faq) lines.push(`Q: ${f.q}`, `A: ${f.a}`, "");
  }

  lines.push("## Case studies", "");
  for (const [slug, study] of Object.entries(caseStudies)) {
    lines.push(`### ${study.title}`, `URL: ${url(study.path)}`, caseStudyDetails[slug] || study.description, "");
  }

  lines.push("## Articles", "");
  for (const [slug, p] of Object.entries(blogPosts)) {
    lines.push(`### ${p.title}`, `URL: ${url(`/blog/${slug}`)}`, `Short answer: ${p.answer}`, "");
  }

  lines.push("## Testimonials (approved by the people quoted; shown by role only)", "");
  for (const t of testimonials) lines.push(`- "${t.quote}" (${t.role}, ${t.context})`);
  lines.push("");

  lines.push("## Frequently asked questions", "");
  for (const f of [...homeFaq, ...servicesFaq]) lines.push(`Q: ${f.q}`, `A: ${f.a}`, "");

  return new Response(lines.join("\n"), {
    headers: { "Content-Type": "text/plain; charset=utf-8", "Cache-Control": "public, max-age=3600" },
  });
}
