import { siteConfig } from "@/config/site";

// Real last-changed date per page. Update a page's date when its content changes,
// so search engines can trust these values.
const routes = [
  { path: "", lastModified: "2026-11-23", priority: 1 },
  { path: "/services", lastModified: "2026-11-23", priority: 0.9 },
  { path: "/services/fractional-cto", lastModified: "2026-11-23", priority: 0.9 },
  { path: "/services/ai-integration", lastModified: "2026-11-23", priority: 0.9 },
  { path: "/services/saas-architecture", lastModified: "2026-11-23", priority: 0.8 },
  { path: "/services/legacy-modernization", lastModified: "2026-11-23", priority: 0.8 },
  { path: "/services/technical-founder-partner", lastModified: "2026-11-23", priority: 0.8 },
  { path: "/case-studies", lastModified: "2026-11-23", priority: 0.9 },
  { path: "/case-studies/gen-ai", lastModified: "2026-11-23", priority: 0.8 },
  { path: "/case-studies/platform-modernization", lastModified: "2026-11-23", priority: 0.8 },
  { path: "/case-studies/saas-scaling", lastModified: "2026-11-23", priority: 0.8 },
  { path: "/about", lastModified: "2026-11-23", priority: 0.8 },
  { path: "/contact", lastModified: "2026-11-23", priority: 0.7 },
  { path: "/research", lastModified: "2026-11-23", priority: 0.6 },
  { path: "/mentorship", lastModified: "2026-11-23", priority: 0.6 },
];

export default function sitemap() {
  return routes.map((r) => ({
    url: `${siteConfig.siteUrl}${r.path || "/"}`,
    lastModified: r.lastModified,
    changeFrequency: "monthly",
    priority: r.priority,
  }));
}
