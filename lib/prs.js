// Production-Readiness Score (PRS): questions, scoring bands and FAQ.
// Each answer: yes = 2, partly = 1, no = 0. Score = points / max * 100.

export const prsCategories = [
  { id: "security", label: "Security & data", icon: "shield" },
  { id: "reliability", label: "Reliability", icon: "database" },
  { id: "performance", label: "Performance & scale", icon: "speed" },
  { id: "delivery", label: "Release process", icon: "deployed_code" },
  { id: "ownership", label: "Cost & ownership", icon: "account_balance_wallet" },
];

export const prsQuestions = [
  {
    id: "secrets",
    category: "security",
    q: "API keys and database passwords are kept out of the code and the browser, in server-side environment variables.",
    fix: "Move every secret to server-side environment variables and rotate any key that was ever committed to Git or exposed in the browser.",
  },
  {
    id: "authz",
    category: "security",
    q: "Every API endpoint checks that the user may access that specific record, not just that they are logged in.",
    fix: "Add per-record authorization checks. Apps built quickly, especially with AI tools, often let one user read or change another user's data through unprotected endpoints or open database rules.",
  },
  {
    id: "pii",
    category: "security",
    q: "Personal and payment data is validated, protected and never written to logs in plain text.",
    fix: "Validate all input on the server, keep payment data with your payment provider, and remove personal data from logs and error reports.",
  },
  {
    id: "backups",
    category: "reliability",
    q: "The database is backed up automatically, and you have tested restoring a backup.",
    fix: "Turn on automatic daily backups and do one restore test. A backup you have never restored is a hope, not a plan.",
  },
  {
    id: "monitoring",
    category: "reliability",
    q: "Errors are captured by a monitoring tool, so you hear about problems before users complain.",
    fix: "Add error tracking and uptime alerts so failures reach you within minutes, with enough context to fix them.",
  },
  {
    id: "queues",
    category: "reliability",
    q: "Heavy work (emails, imports, reports, AI calls) runs in a background queue, not inside the page request.",
    fix: "Move slow and external work into a queue with retries. It keeps pages fast and stops traffic spikes from taking the app down.",
  },
  {
    id: "speed",
    category: "performance",
    q: "Your key pages load in about 2 seconds or less with realistic amounts of data.",
    fix: "Measure your key pages with production-sized data and fix the slowest first. Most slowness comes from a handful of queries or oversized pages.",
  },
  {
    id: "queries",
    category: "performance",
    q: "Database tables are indexed for how the app queries them, and you know your slowest queries.",
    fix: "Turn on slow-query logging, add the missing indexes and remove repeated queries (N+1). This is usually the cheapest speed win available.",
  },
  {
    id: "load",
    category: "performance",
    q: "You know what happens at 10x your current traffic, or the hosting scales automatically.",
    fix: "Run a simple load test against staging and find the first thing that breaks: database, memory, a slow endpoint or an API rate limit.",
  },
  {
    id: "git",
    category: "delivery",
    q: "All code is in Git, and changes are reviewed by someone before they go live.",
    fix: "Put everything in Git and require a second pair of eyes on changes. Review catches the expensive mistakes early.",
  },
  {
    id: "cicd",
    category: "delivery",
    q: "Releases go out through an automated pipeline with tests, not manual uploads.",
    fix: "Set up CI/CD with at least smoke tests for login, payments and your core flow, so every release is repeatable.",
  },
  {
    id: "rollback",
    category: "delivery",
    q: "You can roll back a bad release in a few minutes.",
    fix: "Make rollback a one-step action and practise it once. It turns a broken release from an outage into a minor event.",
  },
  {
    id: "costs",
    category: "ownership",
    q: "You know your monthly hosting and AI/API costs, and what drives them.",
    fix: "Set budget alerts and break costs down by service. Unexpected bills usually come from one oversized server, a runaway job or unbounded AI calls.",
  },
  {
    id: "owner",
    category: "ownership",
    q: "Your company owns the code, hosting accounts, domain and data, not a freelancer or a tool.",
    fix: "Move code, hosting, domains and data into accounts your company controls, with at least two people holding admin access.",
  },
  {
    id: "knowledge",
    category: "ownership",
    q: "Someone on your team understands the codebase well enough to change it safely.",
    fix: "Get the architecture documented and reviewed by an experienced engineer, so the product does not depend on one person or one AI session.",
  },
];

export const prsAnswers = [
  { value: 2, label: "Yes" },
  { value: 1, label: "Partly" },
  { value: 0, label: "No / not sure" },
];

export const prsBands = [
  { min: 80, label: "Production-ready", tone: "secondary", text: "Strong foundations. Keep the gaps below on your roadmap and review again as traffic grows." },
  { min: 60, label: "Mostly ready, with real risks", tone: "primary", text: "The basics are there, but a few gaps could cause an outage, a data problem or a surprise bill as you grow." },
  { min: 40, label: "At risk", tone: "tertiary", text: "Real users will likely hit problems. Fix the items below before a launch, a marketing push or an investor review." },
  { min: 0, label: "Not ready for real users", tone: "error", text: "The app works as a demo, but not yet as a product. Prioritize security and data protection first, then reliability." },
];

export const prsFaq = [
  {
    q: "What is a production-readiness score?",
    a: "A production-readiness score measures how prepared an application is for real users, real data and real money. This check scores 15 practical areas across security, reliability, performance, release process and ownership, then turns your answers into a 0-100 score with the most important fixes listed first.",
  },
  {
    q: "Is my AI-built app (Lovable, Bolt, Cursor) ready for production?",
    a: "Often not yet. AI tools are excellent at building working demos fast, but they commonly leave gaps in authorization, secret handling, backups, error monitoring and performance with real data. Answer the questions above honestly; any 'No' in security and data protection should be fixed before launch.",
  },
  {
    q: "How is the score calculated?",
    a: "Each of the 15 questions scores 2 points for Yes, 1 for Partly and 0 for No or not sure. The total is converted to a score out of 100, and each category is shown separately so you can see where the risk sits. Your answers stay in your browser and are not stored.",
  },
  {
    q: "What should I fix first?",
    a: "Security and data protection first, because those mistakes are the hardest to undo. Then backups and monitoring, so you can recover and react. Performance and release process come next, followed by cost control and ownership. The results list your gaps in that order.",
  },
  {
    q: "Can you review my application for me?",
    a: "Yes. I review applications the way I would before taking responsibility for them in production: code, architecture, data, infrastructure and release process. You get a prioritized fix plan, and I can implement the critical fixes. It starts with a free 30-minute call.",
  },
];
