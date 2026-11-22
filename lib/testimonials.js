// Real testimonials only. Every entry here was approved word for word by the
// person quoted. Do not edit wording without asking them again.
// `pages` controls where each one appears: home, about, mentorship,
// platform-modernization, gen-ai.
export const testimonials = [
  {
    id: "retail-ceo",
    quote:
      "Our platform was slow and kept going down whenever traffic spiked, and our server bills kept climbing. Ahsan took full ownership of engineering, upgraded our legacy system without stopping sales, and made it fast and stable for around a million users. Load times dropped by about 60% and we saved roughly $6,000 a month on servers. He thinks like an owner, not just an engineer.",
    role: "CEO",
    context: "Australian e-commerce company",
    pages: ["home", "platform-modernization"],
  },
  {
    id: "trading-founder",
    quote:
      "We needed a trading platform built from scratch, including the core trading engine, and Ahsan designed and built it end to end. He also automated a lot of our manual business processes with n8n and Python, which saved our team real time every week. He explains complex technical decisions in plain language and guided our junior developers along the way.",
    role: "Founder",
    context: "UAE trading platform",
    pages: ["home"],
  },
  {
    id: "fintech-cto",
    quote:
      "Our support team couldn't keep up with ticket growth. Ahsan designed and shipped a RAG-based AI assistant grounded in our own policies and live transaction data, with guardrails for sensitive information. It now handles around 85% of our tier-1 queries with about 92% customer satisfaction. He cared about getting it right and safe, not just getting a demo working.",
    role: "CTO",
    context: "FinTech startup",
    pages: ["home", "gen-ai"],
  },
  {
    id: "studio-ceo",
    quote:
      "As our Technical Lead, Ahsan reported directly to me and owned engineering from the first client call to production. He led a team of about ten across backend, frontend, mobile and QA, and delivered more than ten client products. Clients trusted him because he turned vague requirements into clear plans and then delivered them. I could hand him a project and stop worrying about it.",
    role: "CEO",
    context: "Software product studio",
    pages: ["about"],
  },
  {
    id: "agency-founder",
    quote:
      "Ahsan ran our development department, leading a team of around twelve engineers and managing our AWS and client hosting. He delivered e-commerce builds, client tools and marketing projects on time, and set up processes that made the whole team more reliable. He's the kind of leader engineers want to work for and clients want on their account.",
    role: "Founder",
    context: "Digital agency",
    pages: ["about"],
  },
  {
    id: "saas-pm",
    quote:
      "Our platform had to handle heavy data and large bulk uploads, and it was starting to struggle. Ahsan upgraded the system, optimized the slow queries, made bulk uploads reliable and built new modules and APIs from scratch. He's careful, fast, and always thinks about how a change will hold up at scale.",
    role: "Product Manager",
    context: "E-commerce analytics SaaS",
    pages: ["about"],
  },
  {
    id: "team-engineer",
    quote:
      "Working under Ahsan made me a much better engineer. He set up proper code reviews, a clean Git workflow and CI/CD, and he always explained the 'why' behind architecture decisions. He was calm under pressure, protected the team from chaos, and still found time to mentor each of us.",
    role: "Senior Software Engineer",
    context: "Former team member",
    pages: ["about"],
  },
  {
    id: "cs-student",
    quote:
      "Ahsan's sessions connected what we learned in class to how real software is built and scaled. He reviewed our projects like a senior engineer would and gave honest, practical feedback. His guidance helped me land my first software engineering role.",
    role: "Computer Science student",
    context: "Mentorship",
    pages: ["mentorship"],
  },
];

export const testimonialsFor = (page) => testimonials.filter((t) => t.pages.includes(page));
