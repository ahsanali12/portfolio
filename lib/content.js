import fs from "node:fs";
import path from "node:path";
import { siteConfig } from "@/config/site";

/**
 * Reads a page body from /content/<name>.html.
 * Placeholders: {{CALENDLY}}, {{LINKEDIN}}, {{GITHUB}}, {{X}}
 */
export function getContent(name) {
  const raw = fs.readFileSync(path.join(process.cwd(), "content", `${name}.html`), "utf8");
  return raw
    .replace(/{{CALENDLY}}/g, siteConfig.calendlyUrl)
    .replace(/{{LINKEDIN}}/g, siteConfig.social.linkedin)
    .replace(/{{GITHUB}}/g, siteConfig.social.github)
    .replace(/{{X}}/g, siteConfig.social.x);
}
