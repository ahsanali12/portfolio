import { siteConfig } from "@/config/site";
import { caseStudies } from "@/lib/case-study-data";

const routes = ["", "/services", "/case-studies", "/about", "/contact", ...Object.values(caseStudies).map((s) => s.path)];

export default function sitemap() {
  return routes.map((route) => ({
    url: `${siteConfig.siteUrl}${route || "/"}`,
    lastModified: new Date(),
    changeFrequency: "monthly",
    priority: route === "" ? 1 : 0.8,
  }));
}
