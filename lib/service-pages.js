// Content for the dedicated service pages (/services/[slug]).
// Truthful claims only: every number here is already verified elsewhere on the site.

export const servicePages = {
  "fractional-cto": {
    navTitle: "Fractional CTO",
    title: "Fractional CTO Services for Startups and Scale-ups",
    description:
      "Fractional CTO for startups and growing companies: technology strategy, architecture, hiring and delivery ownership, without a full-time executive hire.",
    keywords: ["fractional CTO", "fractional CTO services", "part-time CTO", "interim CTO", "CTO as a service", "technical leadership for startups"],
    eyebrow: "Fractional CTO",
    icon: "psychology",
    h1: ["Fractional CTO", "for teams that need senior technical leadership now."],
    intro:
      "You get CTO-level judgment on strategy, architecture, hiring and delivery, part-time and without a full-time executive hire. I have led cross-functional teams of 10-12 twice with CTO-level responsibility and scaled a platform serving around a million users, so I know what breaks when a product grows and how to stop it breaking.",
    problems: [
      { icon: "speed", title: "The product is slowing down", text: "Pages get slower, the app falls over during traffic spikes and nobody is sure why or what to fix first." },
      { icon: "groups", title: "The team needs direction", text: "Developers are busy but priorities shift every week, code quality varies and releases keep breaking things." },
      { icon: "payments", title: "Cloud and tooling costs keep climbing", text: "Server bills grow faster than revenue, and no one owns the trade-offs between cost, speed and reliability." },
      { icon: "verified_user", title: "Investors are asking hard questions", text: "Due diligence, a technical roadmap or a board update needs someone who can speak for the technology with confidence." },
    ],
    deliverables: [
      "A technology strategy and 90-day roadmap tied to business goals",
      "Architecture decisions and reviews for every major change",
      "Hiring plans, interview process and onboarding for engineers",
      "Engineering process: Git workflow, code review, CI/CD and release discipline",
      "Delivery ownership with a weekly progress report to founders",
      "Technical due diligence support and board-ready technical updates",
    ],
    steps: [
      { title: "Free 30-minute call", text: "We talk through your product, team and goals. I tell you honestly what I would do first, even if that means you do not need me." },
      { title: "Scope and fixed retainer", text: "We agree outcomes, days per week and how progress is reported. You get a clear, fixed monthly quote." },
      { title: "First 30 days", text: "I review the codebase, architecture, costs and team process, then deliver a prioritized plan and start on the highest-impact fixes." },
      { title: "Ongoing leadership", text: "I own the roadmap and technical decisions, lead the team, and report weekly until you are ready to hire a full-time CTO, whom I can help you hire." },
    ],
    proof: "platform-modernization",
    testimonialId: "studio-ceo",
    stack: ["Architecture reviews", "Roadmapping", "Hiring", "Code review", "CI/CD", "AWS", "DigitalOcean", "PHP / Laravel", "Node.js", "Python", "React"],
    faq: [
      { q: "What does a fractional CTO do day to day?", a: "Sets technical direction, reviews and makes architecture decisions, leads and unblocks the engineering team, owns delivery and reports progress to founders. The exact mix depends on what the company needs most in that phase." },
      { q: "How many days per week does a fractional CTO work?", a: "It depends on the stage and the problem. Some companies need a few focused days a month for strategy and reviews; others need more hands-on involvement during a rescue or a major build. We agree the commitment up front." },
      { q: "When should a company switch to a full-time CTO?", a: "When the engineering team and roadmap are big enough to need a dedicated executive every day. A fractional CTO often prepares that transition: documenting the architecture, building the team and helping recruit the full-time hire." },
      { q: "Do you work with non-technical founders?", a: "Yes. I explain technical decisions in plain business terms, so founders can make informed trade-offs between speed, cost and risk without needing a technical background." },
    ],
    ctaTitle: "Need a technical leader who has done this before?",
    ctaText: "Book a free 30-minute call. We will look at your product and team, and I will tell you what I would fix first.",
  },

  "ai-integration": {
    navTitle: "AI & RAG Development",
    title: "AI Integration & RAG Chatbot Development",
    description:
      "AI integration for existing products: RAG chatbots, LLM features and workflow automation with guardrails, measured results and controlled running costs.",
    keywords: ["AI integration services", "RAG development", "RAG chatbot", "LLM integration", "generative AI consultant", "AI workflow automation", "n8n automation"],
    eyebrow: "AI & Automation",
    icon: "auto_awesome",
    h1: ["AI that works in production,", "not just in a demo."],
    intro:
      "I design and ship LLM and RAG systems inside existing products, grounded in your own documents and data, with guardrails for sensitive information. One RAG-based support assistant I built for a FinTech startup handles around 85% of tier-1 queries with about 92% customer satisfaction. My MS in Computer Science focused on Natural Language Processing, so I understand the models as well as the engineering around them.",
    problems: [
      { icon: "support_agent", title: "Support can't keep up", text: "Tickets grow faster than the team, and most of them are questions your documentation already answers." },
      { icon: "smart_toy", title: "AI demos that never ship", text: "A prototype looked impressive, but it hallucinates, leaks data or costs too much to run for real users." },
      { icon: "settings_suggest", title: "Too much manual work", text: "People copy data between tools and repeat the same steps every day instead of doing work that needs a human." },
      { icon: "shield", title: "Worried about data and safety", text: "You need AI that respects privacy, masks sensitive information and gives answers you can trust." },
    ],
    deliverables: [
      "Use-case selection focused on measurable business value",
      "Retrieval-augmented generation (RAG) over your documents and data",
      "LLM features integrated into your existing product and APIs",
      "Guardrails: PII masking, safety filters and grounded answers",
      "Workflow automation with n8n and Python where it saves time",
      "Evaluation against real questions, plus monitoring and cost control after launch",
    ],
    steps: [
      { title: "Free 30-minute call", text: "We pick the use case with the clearest payoff and check that your data can support it." },
      { title: "Discovery and design", text: "I map your data sources, define how success is measured, and design the retrieval, model and guardrail approach." },
      { title: "Build and test", text: "I build the system inside your product and test it against real questions until answers are accurate and safe." },
      { title: "Launch and monitor", text: "We launch to users, track quality and running costs, and improve the system based on real usage." },
    ],
    proof: "gen-ai",
    testimonialId: "fintech-cto",
    stack: ["LLMs", "RAG", "GPT-4o", "LangChain", "Vector databases", "NLP", "Python", "n8n", "Node.js", "REST APIs", "PII guardrails"],
    faq: [
      { q: "What is a RAG chatbot?", a: "A RAG (retrieval-augmented generation) chatbot answers questions by first searching your own documents and data, then using an LLM to write an answer grounded in what it found. That makes answers more accurate and current than a model on its own." },
      { q: "Can AI be added to an existing product?", a: "Yes. Most of my AI work is integrating LLM and RAG features into products that already exist, connecting to your current data, APIs and user flows instead of rebuilding from scratch." },
      { q: "How do you stop an AI assistant from making things up?", a: "By grounding every answer in retrieved sources, restricting it to your approved content, adding guardrails and testing it against real questions before launch, then monitoring answers once users are on it." },
      { q: "How long does an AI integration project take?", a: "It depends on the use case and the state of your data. We start with a short discovery so the timeline and scope are clear before the build begins." },
      { q: "Do you also automate business processes?", a: "Yes. I automate repetitive workflows with n8n and Python, and I have built AI workflow systems on a multi-vendor SaaS platform with thousands of users." },
    ],
    ctaTitle: "Have an AI idea that needs to work for real users?",
    ctaText: "Book a free 30-minute call about your use case. I will tell you honestly whether AI is the right tool and what it would take.",
  },

  "saas-architecture": {
    navTitle: "SaaS Architecture",
    title: "SaaS Architecture & Platform Scaling",
    description:
      "SaaS architecture and scaling: multi-tenant and multi-vendor platforms, performance, background jobs and cloud cost control for products that are growing.",
    keywords: ["SaaS architecture", "multi-tenant architecture", "SaaS scaling", "software architect", "platform scaling", "SaaS consultant"],
    eyebrow: "SaaS Architecture",
    icon: "hub",
    h1: ["SaaS architecture", "that keeps up with your growth."],
    intro:
      "I design and scale SaaS platforms so they stay fast, stable and affordable as customers and data grow. I currently lead development of a US multi-vendor platform with thousands of users, where every vendor serves its own clients on shared infrastructure, and I have scaled a platform serving around a million users.",
    problems: [
      { icon: "trending_down", title: "Performance drops as you grow", text: "Every new customer makes the app a little slower, and peak times cause timeouts." },
      { icon: "layers", title: "Tenants are not cleanly separated", text: "Data, permissions and performance for one customer can affect others." },
      { icon: "account_balance_wallet", title: "Costs grow with every user", text: "Infrastructure spend rises in step with growth instead of getting more efficient." },
      { icon: "account_tree", title: "Every change is risky", text: "The codebase is hard to change safely, so new features ship slowly." },
    ],
    deliverables: [
      "Architecture review with a prioritized list of risks and fixes",
      "Multi-tenant or multi-vendor design with clean data separation",
      "Query, caching and background-job optimization",
      "API-first design so web, mobile and partners use the same platform",
      "CI/CD and release process so changes ship safely and often",
      "Cloud cost review on AWS or DigitalOcean",
    ],
    steps: [
      { title: "Free 30-minute call", text: "We discuss where the platform hurts today and where you need it to be in a year." },
      { title: "Architecture review", text: "I review the code, data model, infrastructure and costs, and rank the risks by business impact." },
      { title: "Fix in stages", text: "We fix the highest-impact issues first, without a big-bang rewrite, keeping the product running throughout." },
      { title: "Scale with confidence", text: "I set up the process and monitoring that let your team keep scaling safely after the engagement." },
    ],
    proof: "saas-scaling",
    testimonialId: "saas-pm",
    stack: ["Multi-tenant design", "REST APIs", "PHP / Laravel", "Node.js", "Python", "MySQL", "Redis", "Background jobs", "Docker", "AWS", "DigitalOcean", "CI/CD"],
    faq: [
      { q: "What is multi-tenant SaaS architecture?", a: "It is a design where many customers (tenants) share one application and infrastructure while their data, permissions and performance stay separated. Done well, it keeps costs low and makes every improvement available to all customers at once." },
      { q: "Do we need to rewrite our platform to scale it?", a: "Usually not. Most platforms can be scaled in stages by fixing slow queries, moving heavy work into background jobs, adding caching and improving the release process, while the product keeps running." },
      { q: "Can you review our architecture before we commit to a big change?", a: "Yes. An architecture review gives you a ranked list of risks and recommended fixes, so you can make the decision with clear trade-offs in front of you." },
      { q: "Which stacks do you work with?", a: "PHP and Laravel, Node.js and Python on the backend, React on the frontend, MySQL and Redis for data, and AWS or DigitalOcean with Docker and CI/CD for infrastructure." },
    ],
    ctaTitle: "Is your platform ready for the next 10x?",
    ctaText: "Book a free 30-minute call and get an honest view of where your architecture will break first.",
  },

  "legacy-modernization": {
    navTitle: "Legacy Modernization",
    title: "Legacy PHP & Laravel Modernization",
    description:
      "Modernize legacy PHP and Laravel apps without stopping the business: staged upgrades, faster pages, lower server costs and an easy-to-change codebase.",
    keywords: ["legacy PHP modernization", "Laravel upgrade", "PHP upgrade", "legacy system modernization", "website performance optimization", "server cost reduction"],
    eyebrow: "Legacy Modernization",
    icon: "build",
    h1: ["Modernize your legacy app", "without stopping the business."],
    intro:
      "I upgrade old PHP and Laravel systems in stages while the business keeps running. On a legacy e-commerce, CRM and marketing platform serving around a million users, this cut load times by about 60% and server costs by about $6,000 a month, and stopped the crashes during traffic spikes.",
    problems: [
      { icon: "speed", title: "Slow pages and queries", text: "Customers wait, drop off and complain, especially on mobile and during busy periods." },
      { icon: "warning", title: "Crashes under load", text: "Heavy processes take the server down exactly when traffic and sales are highest." },
      { icon: "payments", title: "Rising server bills", text: "You keep paying for bigger servers instead of fixing what makes the app slow." },
      { icon: "lock", title: "Outdated and risky", text: "Old PHP, framework and database versions bring security risks, and every change feels dangerous." },
    ],
    deliverables: [
      "Staged upgrade of the framework, PHP and MySQL versions",
      "Slow-query fixes and database cleanup",
      "Heavy work moved into background jobs",
      "Security hardening against common attacks",
      "Git workflow, code review and CI/CD pipeline",
      "A cleaner codebase your team can change with confidence",
    ],
    steps: [
      { title: "Free 30-minute call", text: "We talk through what is slow, what breaks and what it costs the business." },
      { title: "Audit", text: "I profile the app, database and servers to find what actually causes the slowness, crashes and cost." },
      { title: "Staged upgrades", text: "We upgrade and fix in small, safe steps, so sales and operations never stop." },
      { title: "Handover", text: "You get documentation, a release process and a team that can keep the system healthy." },
    ],
    proof: "platform-modernization",
    testimonialId: "retail-ceo",
    stack: ["PHP", "Laravel", "CodeIgniter", "MySQL", "Redis", "Background jobs", "CI/CD", "Docker", "AWS", "DigitalOcean"],
    faq: [
      { q: "Can a legacy PHP app be upgraded without downtime?", a: "Yes. Upgrading in stages, with testing and a proper release process, lets the business keep running. That is how I modernized a platform serving around a million users without stopping sales." },
      { q: "Is it better to rewrite or modernize a legacy system?", a: "In most cases modernizing in stages is faster, cheaper and less risky than a full rewrite, because the business keeps earning while the system improves. A rewrite only makes sense when the existing code cannot support where the business is going." },
      { q: "How can modernization reduce server costs?", a: "Slow queries and heavy processes force you onto bigger servers. Fixing them and moving heavy work into background jobs lets the same traffic run on less infrastructure. On one platform this saved about $6,000 a month." },
      { q: "Do you work with CodeIgniter and older frameworks?", a: "Yes. I work with Laravel, CodeIgniter and custom PHP codebases, including older PHP and MySQL versions that need upgrading." },
    ],
    ctaTitle: "Is your legacy app holding the business back?",
    ctaText: "Book a free 30-minute call. I will tell you what is slowing it down and what I would fix first.",
  },

  "technical-founder-partner": {
    navTitle: "Technical Founder Partner",
    title: "Technical Founder Partner for MVPs",
    description:
      "Technical partner for non-technical founders: MVP scoping, stack choice, hiring the first developers and building a product that is ready to grow.",
    keywords: ["technical co-founder alternative", "MVP development partner", "technical partner for startups", "non-technical founder", "MVP scoping", "startup CTO"],
    eyebrow: "Founder Partner",
    icon: "rocket_launch",
    h1: ["A technical partner", "for non-technical founders."],
    intro:
      "I help non-technical founders go from idea to a first product that is built to grow, without giving away a co-founder's equity on day one. As a Technical Lead reporting to a CEO, I turned client requirements into clear plans and delivered more than ten products, so I know how to scope, build and launch without wasting your runway.",
    problems: [
      { icon: "lightbulb", title: "A strong idea, no technical lead", text: "You know the market and the customer, but not which technology to choose or how to judge developers." },
      { icon: "payments", title: "Quotes that don't make sense", text: "Agencies and freelancers quote wildly different prices and timelines for the same idea." },
      { icon: "warning", title: "Afraid of building the wrong thing", text: "You want to validate with real users before spending your whole budget." },
      { icon: "groups", title: "Need a team you can trust", text: "You have to hire developers but can't tell a good engineer from a confident one." },
    ],
    deliverables: [
      "MVP scope focused on the features users need first",
      "Stack and architecture choice that won't need a rewrite later",
      "Hiring and leading your first developers",
      "Delivery plan with milestones you can track",
      "Product validation with real users before scaling",
      "Plain-language reporting for founders and investors",
    ],
    steps: [
      { title: "Free 30-minute call", text: "You walk me through the idea, the customer and your budget; I give you an honest first view." },
      { title: "Scope the MVP", text: "We cut the idea down to the smallest product that proves it works, with a clear plan and milestones." },
      { title: "Build the team and product", text: "I choose the stack, hire or lead the developers, and own delivery until launch." },
      { title: "Launch and learn", text: "We put it in front of real users, measure what matters and plan the next stage." },
    ],
    proof: "platform-modernization",
    testimonialId: "trading-founder",
    stack: ["MVP scoping", "Product validation", "Hiring", "Laravel", "Node.js", "Python", "React", "MySQL", "AWS", "CI/CD"],
    faq: [
      { q: "Do I need a technical co-founder to build an MVP?", a: "Not necessarily. A technical founder partner can scope, build and lead the first version with you, so you can validate the business before deciding whether to bring on a technical co-founder." },
      { q: "How do you keep an MVP from needing a rewrite?", a: "By choosing a mainstream, well-supported stack and a simple, clean architecture from the start, and by building only what the first users need, so the codebase stays easy to extend." },
      { q: "Can you help hire developers?", a: "Yes. I define the roles, run technical interviews and lead the developers once they join, so you get a team that can deliver." },
      { q: "Have you built products from zero?", a: "Yes. Among other products, I designed and built a trading platform and its trading engine from scratch for a UAE client, and delivered more than ten client products as a Technical Lead. Across my career I've delivered 100+ client projects." },
    ],
    ctaTitle: "Have an idea and need someone technical in your corner?",
    ctaText: "Book a free 30-minute call. We will talk through your idea and what the smallest useful first version looks like.",
  },
};

export const serviceSlugs = Object.keys(servicePages);
