import { siteConfig } from "@/config/site";

const routes = [
  "",
  "/about",
  "/services",
  "/case-studies",
  "/case-studies/platform-modernization",
  "/case-studies/saas-scaling",
  "/case-studies/gen-ai",
  "/research",
  "/mentorship",
  "/contact",
];

export default function sitemap() {
  return routes.map((route) => ({
    url: `${siteConfig.siteUrl}${route || "/"}`,
    lastModified: new Date(),
    changeFrequency: "monthly",
    priority: route === "" ? 1 : 0.8,
  }));
}

