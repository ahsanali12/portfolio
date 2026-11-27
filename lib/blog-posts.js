// Blog articles. Body is a small Markdown subset rendered by lib/blog-html.js:
// "## " / "### " headings, paragraphs, "- " and "1. " lists, | tables |, **bold**, [text](url).
// Facts must come from the case studies / truth sheet only. No client or company names.

export const blogPosts = {
  "lovable-app-breaks-with-real-users": {
    title: "My Lovable App Breaks With Real Users: What to Fix First",
    seoTitle: "Lovable, Bolt or Cursor App Breaking? What to Fix First",
    description:
      "Your app built with Lovable, Bolt or Cursor works in the demo but breaks with real users. The fixes that matter most, in the order to do them.",
    keywords: ["Lovable app breaking", "fix Lovable app", "vibe coding app problems", "make AI-built app production ready", "Bolt app slow", "Cursor app security"],
    datePublished: "2026-11-28",
    dateModified: "2026-11-28",
    readMinutes: 6,
    icon: "bolt",
    related: [
      ["/services/ai-app-rescue", "AI-built app rescue"],
      ["/production-readiness-score", "Free production-readiness score"],
    ],
    answer:
      "Fix things in this order: security and data first (exposed keys, missing authorization, open database rules), then backups and error monitoring, then performance with real data, then the release process. Most AI-built apps don't need a rewrite. They need the foundations a demo skips. Run the free Production-Readiness Score to see where your app stands in three minutes.",
    body: `AI tools like Lovable, Bolt, Cursor and Replit are genuinely good at one thing: getting a working first version in front of people fast. The trouble starts when real users, real data and real money arrive. The demo was never built for that.

## Why does my AI-built app break with real users?
Because a demo and a product solve different problems. A demo proves the idea works. A product has to stay secure, fast and correct when hundreds of people use it at once, with messy real data, on a bad network, while you keep shipping changes. AI tools optimize for the first goal. The second one needs deliberate engineering.

## Step 1: fix security and data exposure first
This is first because these mistakes are the hardest to undo. Check for:
- **API keys and secrets in the frontend or in Git.** Anything shipped to the browser is public. Move secrets to server-side environment variables and rotate any key that was ever exposed.
- **Missing authorization.** Being logged in is not the same as being allowed. Every request should check that this user may access this specific record. This is the most common serious gap in AI-built apps.
- **Open database rules.** If your database is reachable from the browser, its access rules decide who can read and change data. Defaults are often far too open.

## Step 2: make sure you can recover
- Turn on **automatic backups** and test a restore once.
- Add **error monitoring** and uptime alerts, so you hear about problems before users tell you.

## Step 3: fix performance with real data
Apps that were instant with ten test records slow down with ten thousand real ones. The usual causes:
- Missing database indexes and repeated queries.
- Loading far more data than the page needs.
- Slow work (emails, AI calls, imports) running inside the request instead of in a background queue.

## Step 4: make releases safe
When every fix breaks something else, the problem is usually the process, not the code. Put the code in Git, add a few tests for the flows that make money (signup, login, payments), deploy through a pipeline and make rollback a one-step action.

## Do I need to rebuild from scratch?
Usually not. A rebuild throws away working features and months of learning. In my experience across 100+ client projects, most "we need a rewrite" situations are really "we need foundations, performance work and a release process." Rebuild only the parts that truly can't support where the product is going.

## What should I do right now?
1. Run the free [Production-Readiness Score](/production-readiness-score). It takes three minutes and lists your gaps in priority order.
2. Fix every security and data item before you spend money on marketing.
3. If you'd rather have an expert look at it, see [AI-built app rescue](/services/ai-app-rescue).`,
    faq: [
      { q: "Is it safe to launch an app built with Lovable or Bolt?", a: "It can be, once the basics are in place: secrets kept on the server, authorization on every request, sensible database rules, backups and error monitoring. Many AI-built apps skip some of these, so check before you put real users and payments on it." },
      { q: "Why does my vibe-coded app get slower as users sign up?", a: "Usually missing database indexes, repeated queries, pages loading too much data, or slow work like emails and AI calls running inside the request. These are fixable without a rewrite." },
      { q: "Can I keep using AI tools after fixing the foundations?", a: "Yes. With clear structure, tests and a safe release process, AI tools and developers can keep building quickly without breaking production." },
    ],
  },

  "build-saas-mvp-non-technical-founder": {
    title: "How to Build a SaaS MVP as a Non-Technical Founder",
    seoTitle: "How to Build a SaaS MVP as a Non-Technical Founder",
    description:
      "A practical path for non-technical founders: scope the smallest useful SaaS MVP, choose a stack that won't need a rewrite, and pick the right people to build it.",
    keywords: ["build SaaS MVP", "SaaS MVP development", "MVP for non-technical founders", "how to build an MVP without a technical co-founder", "SaaS MVP cost"],
    datePublished: "2026-11-28",
    dateModified: "2026-11-28",
    readMinutes: 7,
    icon: "rocket_launch",
    related: [
      ["/services/technical-founder-partner", "Technical partner for your MVP"],
      ["/blog/technical-cofounder-vs-fractional-cto", "Technical co-founder vs fractional CTO"],
    ],
    answer:
      "Start with the problem, not the features: define the one job your first users need done, then cut everything else. Choose a mainstream, well-supported stack, keep the architecture simple, and put a technical person on your side who owns scope, quality and hiring, whether that's a co-founder, a technical partner or a fractional CTO. Validate with real users before you build the second version.",
    body: `Most SaaS MVPs fail for business reasons, not technical ones. But a lot of runway gets burned on technical decisions a non-technical founder had no way to judge. Here's the path I'd follow.

## Step 1: define the one job, not the feature list
Write down who your first user is and the one painful job your product does for them. Every feature that doesn't serve that job waits for version two. A small MVP is faster to build, cheaper to change and easier to learn from.

## Step 2: decide how you'll validate it
Before writing code, decide what proves the idea works: paying customers, a usage target, a waitlist converting. If you can't measure it, you can't learn from the MVP.

## Step 3: choose a boring, proven stack
For most SaaS products, a mainstream web framework, a relational database and a standard cloud host are the right choice. Popular tools are easier to hire for, better documented and less likely to need a rewrite. Novel technology is a cost you pay later.

## Step 4: get someone technical on your side
You need one person who owns technical decisions and can tell good work from confident work. Your options:

| Option | Best when | Watch out for |
| **Technical co-founder** | The business is proven enough to share long-term | Takes months to find; equity is permanent |
| **Technical partner or fractional CTO** | You need to build and validate fast | Agree scope and ownership clearly |
| **Agency** | Scope is fixed and well defined | Incentive to build more, not less |
| **Freelancers alone** | Small, clear tasks | Nobody owns the whole product |

## Step 5: build it to be changed
Simple architecture, code in Git, reviews before release, automated deployment and basic monitoring. None of this slows an MVP down; it's what lets you change direction quickly after users react.

## Step 6: launch small and listen
Put it in front of real users early, measure the one thing that proves value, and plan version two from evidence instead of guesses.

## Can I build an MVP with AI tools instead?
For a prototype, yes. Tools like Lovable and Bolt are a fast way to test an idea. Before real users, payments or investors, have it reviewed. The most common gaps are security, data protection and performance. The free [Production-Readiness Score](/production-readiness-score) is a good first check.

I help non-technical founders through exactly this as a [technical partner](/services/technical-founder-partner): scoping, stack choice, building and hiring.`,
    faq: [
      { q: "Can a non-technical founder build a SaaS MVP?", a: "Yes. You need a clear problem, a small scope and one technical person who owns decisions and quality, whether that's a co-founder, a technical partner or a fractional CTO." },
      { q: "How small should a SaaS MVP be?", a: "As small as possible while still doing the one job your first users need. If a feature doesn't help prove that job, it waits for version two." },
      { q: "What tech stack should my MVP use?", a: "A mainstream, well-supported web framework, a relational database and a standard cloud host. Popular stacks are easier to hire for and less likely to need a rewrite." },
    ],
  },

  "technical-cofounder-vs-fractional-cto": {
    title: "Technical Co-founder vs Fractional CTO: Which Do You Need?",
    seoTitle: "Technical Co-founder vs Fractional CTO: Which Do You Need?",
    description:
      "Should a non-technical founder find a technical co-founder or hire a fractional CTO? How they differ in cost, commitment, equity and speed, and when each is right.",
    keywords: ["technical co-founder vs fractional CTO", "find a technical co-founder", "do I need a technical co-founder", "technical co-founder alternative", "fractional CTO for startups"],
    datePublished: "2026-11-28",
    dateModified: "2026-11-28",
    readMinutes: 5,
    icon: "groups",
    related: [
      ["/services/technical-founder-partner", "Technical co-founder alternative"],
      ["/services/fractional-cto", "Fractional CTO services"],
    ],
    answer:
      "A technical co-founder is a long-term partner who shares ownership and risk. A fractional CTO is senior technical leadership you hire part-time, without giving up equity. If the business is still unproven, a fractional CTO or technical partner gets your product built and validated faster. Bring on a co-founder once you know the business works and need someone fully committed for years.",
    body: `"Find a technical co-founder" is the default advice for non-technical founders. It's not wrong, but it's often premature. Here's how the two options really compare.

## What's the difference?
A **technical co-founder** joins the company as an owner. They share the risk, usually work for equity and below-market pay, and commit for years. A **fractional CTO** is an experienced technical leader who works with you part-time, for a fee, owning strategy, architecture, hiring and delivery for as long as you need.

## How do they compare?
| | Technical co-founder | Fractional CTO |
| **Cost** | Equity (often large) plus salary later | Monthly fee, no equity |
| **Time to start** | Often months of searching | Days |
| **Commitment** | Years, hard to undo | Flexible, ends when you're ready |
| **Experience** | Varies widely | Usually senior, has done it before |
| **Best stage** | Business proven, long road ahead | Idea to MVP, rescue, scale-up |

## When should you find a technical co-founder?
- The business is validated and technology is central to it for the long term.
- You've worked with the person before and trust them.
- You can afford to give meaningful equity to the right person.

## When is a fractional CTO the better choice?
- You need to build and validate an MVP now, not after a months-long search.
- You have an existing product that is slowing down, breaking or costing too much.
- You need someone to hire and lead developers you can't evaluate yourself.
- An investor wants a credible technical roadmap.

## Can you start with one and move to the other?
Yes, and it's often the smartest path. A fractional CTO or technical partner builds the first version, sets up a clean architecture and helps you hire. Once the business is proven, they can help you find and evaluate a long-term technical co-founder or full-time CTO.

If you're weighing this decision, see how I work as a [technical partner for non-technical founders](/services/technical-founder-partner), or read [what a fractional CTO costs](/blog/fractional-cto-cost).`,
    faq: [
      { q: "Do I need a technical co-founder to start a startup?", a: "No. Many startups build and validate their first product with a technical partner or fractional CTO, then bring on a co-founder or full-time CTO once the business is proven." },
      { q: "How much equity does a technical co-founder get?", a: "It varies widely with timing, contribution and risk. Because equity is permanent, many founders validate the business first with a paid technical partner before committing to a co-founder split." },
      { q: "Can a fractional CTO become a co-founder later?", a: "Sometimes, if both sides want it. More often, a fractional CTO helps you find and evaluate the right long-term technical leader." },
    ],
  },

  "fractional-cto-cost": {
    title: "Fractional CTO Cost in 2026: What Startups Actually Pay",
    seoTitle: "Fractional CTO Cost in 2026: What Startups Actually Pay",
    description:
      "What a fractional CTO costs, how pricing works (monthly retainer, project, hourly), what you get for it, and when it beats hiring a full-time CTO.",
    keywords: ["fractional CTO cost", "fractional CTO pricing", "how much does a fractional CTO charge", "fractional CTO vs full-time CTO"],
    datePublished: "2026-11-24",
    dateModified: "2026-11-24",
    readMinutes: 6,
    icon: "payments",
    related: [
      ["/services/fractional-cto", "Fractional CTO services"],
      ["/services/technical-founder-partner", "Technical founder partner"],
    ],
    answer:
      "Most fractional CTOs work on a monthly retainer, priced by how many days per week they give you and how much they own. You pay a fraction of a full-time CTO's total cost, with no equity grant, no recruiting fee and no long notice period. Exact pricing depends on scope: part-time strategic leadership costs less than an engagement where the CTO also owns delivery and hiring. I quote after a free 30-minute call, once I understand the problem.",
    body: `What matters more than the number is what you're actually buying.

## What does a fractional CTO actually do?
A fractional CTO gives you senior technical leadership without a full-time hire. In practice that means:
- **Technology strategy:** what to build, in what order, on what stack, and what *not* to build yet.
- **Architecture decisions** that won't need a rewrite in 12 months.
- **Hiring:** writing the role, interviewing, and judging candidates you can't evaluate yourself.
- **Delivery ownership:** turning business goals into a plan, then making sure the team ships it.
- **Investor and board conversations:** technical due diligence, roadmap credibility, risk.

## How is fractional CTO pricing structured?
There are three common models:

| Model | How it works | Best for |
| Monthly retainer | Fixed fee for an agreed share of time (e.g. 1–2 days/week) | Ongoing leadership, the most common |
| Project-based | Fixed scope and price (e.g. architecture review, MVP plan) | One clear problem with an end date |
| Hourly / advisory | Pay per call or per hour | Occasional second opinions |

A retainer is usually the best value, because the CTO builds context about your product and team, and context is what makes the advice good.

## What drives the price up or down?
- **Time commitment:** a few hours a week versus two to three days.
- **Ownership:** advice only, or accountable for delivery, hiring and the team.
- **Stage and complexity:** an MVP plan is simpler than scaling a platform with real users and real data.
- **Urgency:** rescuing a product that's breaking in production costs more than planning a new one.

## Fractional CTO vs full-time CTO: which is cheaper?
For most early-stage and growing companies, fractional wins on cost, because a full-time CTO means salary, equity, benefits and a long search. A full-time CTO makes sense once technology *is* the business at scale and you need someone in every decision, every day. Until then, a fractional CTO gets you the same judgment for the decisions that matter, at a fraction of the commitment.

## When do you need one?
- You're a non-technical founder about to spend real money on development.
- Your product works in the demo but breaks with real users. That includes AI-built apps (Lovable, Bolt, Cursor).
- Your developers are busy, but you can't tell if they're building the right thing.
- An investor is about to look at your tech.
- Your server bill keeps growing while the product doesn't get faster.

## What results should you expect?
Real outcomes, not slide decks. Twice I've led cross-functional teams of 10–12 with CTO-level responsibility. In one of those roles, for an Australian retailer's e-commerce and CRM platform serving about 1M users, the result was **~60% faster load times and ~$6,000/month lower server costs**, with no downtime during traffic spikes. [Read the case study](/case-studies/platform-modernization).`,
    faq: [
      { q: "Is a fractional CTO worth it for an early-stage startup?", a: "Usually yes, if you're about to spend money on development or hire your first engineers. One bad architecture or hiring decision costs more than months of fractional leadership." },
      { q: "How many hours a week does a fractional CTO work?", a: "It depends on the engagement. Many work one to two days a week, with availability for urgent issues." },
      { q: "Can a fractional CTO also write code?", a: "Some do. I stay hands-on with architecture and critical code, but the main value is decisions, direction and delivery ownership." },
      { q: "How long does a fractional CTO engagement last?", a: "Usually a few months. Long enough to set direction, fix the urgent problems and hire or level up the team that carries it forward." },
      { q: "What's the difference between a fractional CTO and a technical founder partner?", a: "A technical founder partner helps a non-technical founder go from idea to MVP: scoping, stack and first hires. A fractional CTO leads technology for an existing product and team." },
    ],
  },

  "rag-support-assistant-case-study": {
    title: "How I Built a RAG Support Bot That Handles 85% of Tier-1 Queries",
    seoTitle: "How I Built a RAG Support Bot That Handles 85% of Tier-1",
    description:
      "How a RAG AI support assistant for a FinTech startup reached 85% of tier-1 queries and 92% satisfaction: retrieval, guardrails, PII masking and lessons.",
    keywords: ["RAG chatbot for customer support", "RAG customer support case study", "AI support assistant fintech", "production RAG chatbot"],
    datePublished: "2026-11-24",
    dateModified: "2026-11-24",
    readMinutes: 5,
    icon: "smart_toy",
    related: [
      ["/services/ai-integration", "AI integration & RAG development"],
      ["/case-studies/gen-ai", "Generative AI support engine case study"],
    ],
    answer:
      "The bot works because it doesn't guess. It answers from the company's own policy documents and live transaction data (retrieval-augmented generation, or RAG). It masks personal data before anything reaches the model, and it checks internal systems before answering account questions. For a FinTech startup, that took the assistant to about 85% of tier-1 queries handled, about 92% customer satisfaction, 14,000+ tickets a week and 65% lower support operating costs.",
    body: `## What was the problem?
The startup's support team couldn't keep up with ticket growth. Most tickets were repetitive tier-1 questions about policies, transaction status and account basics. In FinTech, a wrong answer isn't just annoying: it's a compliance and trust problem. So "just add a chatbot" wasn't an option.

## Why RAG instead of a plain chatbot?
A plain LLM answers from what it learned in training, which means it can sound confident and be wrong. RAG changes the job: first *retrieve* the relevant facts from your own sources, then *generate* an answer grounded in them. For support, that means answers that match the company's actual policies, and that can be updated by updating a document instead of retraining a model.

## How does the system work?
1. **Retrieval:** hybrid search (keyword + semantic) over the policy documents. Keyword search catches exact terms like fee names and product codes. Semantic search catches questions phrased in the customer's own words.
2. **Live data:** for account and transaction questions, an agent calls internal APIs to check the real status before answering, instead of answering from documents alone.
3. **Safety layer:** PII masking strips personal data before it reaches the model, and guardrails keep answers inside approved topics.
4. **Generation:** GPT-4o writes the answer from the retrieved context, orchestrated with LangChain, with a vector database behind the semantic search.

## What made the difference in production?
- **Hybrid retrieval beat semantic-only search.** Support questions are full of exact terms that pure embeddings can miss.
- **Grounding in live data.** "Where is my transfer?" can't be answered from a PDF.
- **Safety by design, not as an afterthought.** PII masking and guardrails were part of the architecture from day one, which matters even more in a regulated industry.
- **Measuring the right things:** share of tier-1 queries resolved, customer satisfaction and cost per ticket, not just "the bot replied".

## What were the results?
| Metric | Result |
| Tier-1 queries handled by the assistant | ~85% |
| Customer satisfaction | ~92% |
| Tickets handled weekly | 14,000+ |
| Support operating costs | 65% lower |

## Is RAG right for your support team?
RAG is a strong fit when you have repetitive questions, answers that live in documents or systems you control, and a real cost to wrong answers. It's a weaker fit when most tickets need human judgment, or when your knowledge base doesn't exist yet. Fix that first. [See the full case study](/case-studies/gen-ai).`,
    faq: [
      { q: "What is RAG in simple terms?", a: "The AI looks up the relevant facts in your own documents and data first, then writes the answer from them, instead of relying on memory." },
      { q: "Can a RAG chatbot hallucinate?", a: "Less, because it answers from retrieved sources, but not never. That's why guardrails, live data checks and a clear handoff to a human matter." },
      { q: "How do you keep customer data safe with an LLM?", a: "Mask personal data before it reaches the model, limit which systems the agent can call, and keep answers inside approved topics." },
      { q: "Which LLM should I use for a support chatbot?", a: "It depends on cost, latency and data rules. This project used GPT-4o, but the retrieval and safety design matter more than the model choice." },
    ],
  },

  "upgrade-legacy-php-without-downtime": {
    title: "Upgrading Legacy PHP/Laravel Without Downtime: A Playbook",
    seoTitle: "Upgrading Legacy PHP/Laravel Without Downtime: A Playbook",
    description:
      "How to upgrade an old PHP framework, PHP and MySQL in stages without stopping sales. The playbook behind ~60% faster pages and ~$6k/month saved.",
    keywords: ["upgrade legacy PHP application", "Laravel upgrade without downtime", "should I rewrite my legacy PHP app", "PHP modernization"],
    datePublished: "2026-11-24",
    dateModified: "2026-11-24",
    readMinutes: 5,
    icon: "build",
    related: [
      ["/services/legacy-modernization", "Legacy PHP & Laravel modernization"],
      ["/case-studies/platform-modernization", "Legacy platform modernization case study"],
    ],
    answer:
      "Don't rewrite. Upgrade in stages: framework, then PHP, then MySQL, each step tested and released on its own. In between, fix the slowest queries and move heavy work into background jobs. Put a real release process (Git workflow, CI/CD, code review) in place first, so every step is safe. On an Australian retailer's e-commerce + CRM platform serving about 1M users, this approach delivered about 60% faster load times and about $6,000/month (about $72,000/year) lower server costs, without stopping sales.",
    body: `## Should I rewrite my legacy PHP app or upgrade it?
Usually upgrade. A rewrite means months of building what you already have, while the old system still needs fixing and the business still needs features. Rewrites make sense only when the core design truly can't support where the business is going. In my experience, most "we need a rewrite" situations are really "we need upgrades, performance work and a release process."

## What did the starting point look like?
- An outdated PHP framework on old PHP and MySQL versions.
- Slow pages and slow queries.
- Heavy processes taking the server down during traffic spikes.
- Rising server bills.
- No proper release process, so every change felt risky.

## Step 1: make change safe before changing anything
Set up a Git workflow, CI/CD and code review. That sounds slow, but it's what makes every later step fast. Without it, each upgrade is a gamble.

## Step 2: upgrade in stages, not all at once
Framework, PHP and MySQL were each upgraded as a separate, tested step. Small steps mean small risks. If something breaks, you know exactly which change caused it, and you can roll it back.

## Step 3: fix the slowest queries first
A small number of queries usually cause most of the slowness. Find them, optimize them and index properly. This is often the cheapest speed win available.

## Step 4: move heavy work out of the request
Reports, imports, emails and other heavy processes were moved into background jobs. Pages stay fast, and traffic spikes stop taking the server down.

## Step 5: only then, add features that make money
With a stable base, the team shipped revenue features: abandoned-cart recovery, discounts and loyalty points. Security hardening and SEO fixes came along with them.

## What were the results?
| Metric | Result |
| Load times | ~60% faster |
| Server costs | ~$6,000/month lower (~$72,000/year) |
| Scale | Stable for ~1M users |
| Downtime during traffic spikes | None |

[Read the full case study](/case-studies/platform-modernization).`,
    faq: [
      { q: "How long does a legacy PHP upgrade take?", a: "It depends on the size of the codebase and how far behind it is. Staged upgrades let you see improvements early instead of waiting for one big launch." },
      { q: "Can you upgrade a PHP application without downtime?", a: "Yes. Small, tested releases with CI/CD and a rollback plan are what make that possible." },
      { q: "Will upgrading PHP alone make my site faster?", a: "Newer PHP versions help, but the biggest wins usually come from slow queries and moving heavy work into background jobs." },
      { q: "Do I need to switch away from PHP?", a: "Rarely. Modern PHP and Laravel run large, fast products. The problem is usually the version, the queries and the process, not the language." },
    ],
  },
};

export const blogSlugs = Object.keys(blogPosts);

// Articles relevant to each service page (shown as "Related reading").
export function postsForPath(path) {
  return Object.entries(blogPosts).filter(([, p]) => p.related.some(([href]) => href === path));
}
