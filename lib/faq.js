// Visible FAQ content + FAQPage structured data. Answers use only verified facts.
// Keep answers short (40-70 words): answer engines quote them directly.

export const homeFaq = [
  {
    q: "What does a fractional CTO do?",
    a: "A fractional CTO gives you senior technical leadership part-time: technology strategy, architecture decisions, hiring and team process, delivery ownership and reporting to founders or the board. You get CTO-level judgment without the cost of a full-time executive, which suits startups and growing companies that need direction more than another developer.",
  },
  {
    q: "When does a startup need a fractional CTO?",
    a: "Usually when the product is growing faster than the team's experience: the app slows down or crashes under real users, releases keep breaking things, cloud costs climb, an investor wants technical due diligence, or a non-technical founder needs someone to own technology decisions and hiring.",
  },
  {
    q: "What is the difference between a fractional CTO and a full-time CTO?",
    a: "A full-time CTO is a permanent executive hire. A fractional CTO works part-time across a defined scope, starts in days instead of months, and costs a fraction of a full-time salary and equity. Many companies use a fractional CTO until they are ready to hire full-time, and the fractional CTO often helps hire that person.",
  },
  {
    q: "Can you add AI features like a RAG chatbot to an existing product?",
    a: "Yes. I design and ship LLM and RAG systems inside existing products, grounded in your own documents and data, with guardrails for sensitive information. One RAG-based support assistant I built for a FinTech startup handles around 85% of tier-1 queries with about 92% customer satisfaction.",
  },
  {
    q: "Can you modernize a legacy PHP or Laravel application without downtime?",
    a: "Yes. I upgrade frameworks, PHP and MySQL in stages while the business keeps running, fix slow queries, move heavy work into background jobs and set up CI/CD. On a legacy e-commerce platform serving around a million users, this cut load times by about 60% and server costs by about $6,000 a month.",
  },
  {
    q: "Do you work with US companies remotely?",
    a: "Yes. I work remotely with teams in the US, Australia and the UAE, with working hours that overlap US business hours. Every engagement starts with a free 30-minute call to understand your product and decide whether working together makes sense.",
  },
];

export const servicesFaq = [
  {
    q: "How does a fractional CTO engagement work?",
    a: "We start with a free 30-minute call, then agree a scope: the outcomes you need, how many days per week, and how we report progress. Engagements are usually a monthly retainer. I join your team's tools and meetings, own the technical roadmap and decisions, and report to the founders.",
  },
  {
    q: "How much does a fractional CTO cost?",
    a: "It depends on scope and time commitment, typically a fixed monthly retainer based on days per week. It costs far less than a full-time CTO's salary and equity. Book a free 30-minute call and you will get a clear, fixed quote for your situation.",
  },
  {
    q: "What does an AI integration project include?",
    a: "Use-case selection, data preparation, retrieval (RAG) or workflow design, the LLM integration itself, guardrails for privacy and safety, testing against real questions, and monitoring after launch. Where it saves time, I also automate business processes with n8n and Python.",
  },
  {
    q: "Which technologies do you work with?",
    a: "PHP, Laravel, CodeIgniter, Node.js, Python, React, MySQL, Redis, AWS, DigitalOcean, Docker, CI/CD, REST APIs and n8n, plus LLMs, RAG and NLP for AI work.",
  },
  {
    q: "Can you help a non-technical founder build an MVP?",
    a: "Yes. As a technical founder partner I help scope the MVP, choose the stack, hire and lead the first developers, and validate the product with real users, so the first version is built to grow instead of being rewritten later.",
  },
  {
    q: "Do you sign NDAs?",
    a: "Yes. Client names and details stay private. That is why the case studies on this site describe each client by industry and region instead of naming them.",
  },
];

export function faqSchema(items) {
  return {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: items.map((i) => ({
      "@type": "Question",
      name: i.q,
      acceptedAnswer: { "@type": "Answer", text: i.a },
    })),
  };
}
