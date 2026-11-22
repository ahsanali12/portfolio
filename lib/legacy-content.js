import fs from "node:fs";
import path from "node:path";
import { testimonials } from "./testimonials";

const rootDir = process.cwd();

const routeMap = {
  "home.html": "/",
  "about.html": "/about",
  "services.html": "/services",
  "case-studies.html": "/case-studies",
  "reeserach.html": "/research",
  "mentorship.html": "/mentorship",
  "contact.html": "/contact",
  "platform-modernization.html": "/case-studies/platform-modernization",
  "saas-scaling.html": "/case-studies/saas-scaling",
  "gen-ai.html": "/case-studies/gen-ai",
};

function readLegacyFile(fileName) {
  return fs.readFileSync(path.join(rootDir, fileName), "utf8");
}

/**
 * Handles nested <main> tags by counting opening/closing pairs.
 */
function extractMain(html) {
  const start = html.indexOf("<main");
  if (start === -1) return "";
  let depth = 0;
  let i = start;
  while (i < html.length) {
    const nextOpen = html.indexOf("<main", i);
    const nextClose = html.indexOf("</main>", i);
    if (nextClose === -1) break;
    if (nextOpen !== -1 && nextOpen < nextClose) {
      depth++;
      i = nextOpen + 5;
    } else {
      depth--;
      const endPos = nextClose + 7;
      if (depth === 0) return html.slice(start, endPos);
      i = endPos;
    }
  }
  return "";
}

/**
 * gen-ai.html places its hero section OUTSIDE <main> (uses <header> + <section> before <main>).
 * Extract from the first <header> through </main> to capture the full page content.
 */
function extractGenAiContent(html) {
  const heroStart = html.indexOf("<header");
  const mainEnd = html.indexOf("</main>");
  if (heroStart === -1 || mainEnd === -1) return extractMain(html);
  return html.slice(heroStart, mainEnd + 7);
}

/**
 * Remove duplicate atmospheric elements already handled by the global layout/VisualEffects.
 */
function stripAtmosphericElements(content) {
  content = content.replace(/<div[^>]+\barchitecture-grid\b[^>]*>\s*<\/div>/g, "");
  content = content.replace(/<div[^>]+id="stream-container"[^>]*>\s*<\/div>/g, "");
  content = content.replace(/<div[^>]+id="orb-(?:1|2)"[^>]*>\s*<\/div>/g, "");
  content = content.replace(/<div[^>]+id="cursor-glow"[^>]*>\s*<\/div>/g, "");
  content = content.replace(/<div[^>]+class="mouse-glow"[^>]*>\s*<\/div>/g, "");
  content = content.replace(/<div[^>]+\batmospheric-orb\b[^>]*>\s*<\/div>/g, "");
  return content;
}

/**
 * Remove classes that break layout when the legacy <main> is rendered inside Next.js context:
 * - overflow-hidden: clips background animations
 * - max-w-container-max + mx-auto: creates a "bordered child container" effect
 * Extra classes can be removed per-page (e.g., pt-20 for contact).
 */
function fixMainTag(content, extraRemove = []) {
  const mainTagMatch = content.match(/<main[\s\S]*?>/);
  if (!mainTagMatch) return content;
  const mainTag = mainTagMatch[0];
  const remove = new Set(["overflow-hidden", "max-w-container-max", "mx-auto", ...extraRemove]);
  const fixedMainTag = mainTag.replace(/class="([^"]*)"/, (_, classes) => {
    const kept = classes
      .split(/\s+/)
      .filter((c) => c && !remove.has(c))
      .join(" ");
    return `class="${kept}"`;
  });
  return content.replace(mainTag, fixedMainTag);
}

function normalizeLinks(content) {
  return content.replace(/href="([a-z0-9-]+\.html)"/g, (_, file) => {
    const route = routeMap[file] || "/";
    return `href="${route}"`;
  });
}

function convertActionButton(content, label, href) {
  const escaped = label.replace(/[.*+?^${}()|[\]\\]/g, "\\$&");
  const regex = new RegExp(
    `<button([^>]*)>\\s*${escaped}\\s*<\\/button>`,
    "g",
  );
  return content.replace(regex, `<a href="${href}"$1>${label}</a>`);
}

const escapeHtml = (t) =>
  String(t).replace(/&/g, "&amp;").replace(/</g, "&lt;").replace(/>/g, "&gt;").replace(/"/g, "&quot;");

function testimonialsSection(list) {
  if (!list.length) return "";
  const star = '<span class="material-symbols-outlined fill-1">star</span>';
  const cards = list
    .map(
      (t, i) => `<div class="glass-card p-8 md:p-10 rounded-2xl flex flex-col justify-between hover:bg-surface-container transition-all group${i === 1 ? " border-primary/20" : ""}"><div><div class="flex gap-1 text-secondary mb-6">${star.repeat(5)}</div><p class="font-body-lg italic text-on-surface leading-relaxed mb-8">"${escapeHtml(t.quote)}"</p></div><div class="border-t border-outline-variant/30 pt-6"><div class="text-sm font-bold text-on-surface">${escapeHtml(t.name ? `${t.name}, ${t.role}` : t.role)}</div><div class="text-xs text-on-surface-variant uppercase tracking-widest">${escapeHtml(t.context)}</div></div></div>`,
    )
    .join("");
  const cols = list.length === 1 ? "md:grid-cols-1 max-w-2xl mx-auto" : list.length === 2 ? "md:grid-cols-2" : "md:grid-cols-3";
  return `<section class="relative z-10 py-section-gap px-margin-mobile md:px-margin-desktop max-w-container-max mx-auto"><div class="text-center mb-16 reveal-up"><h2 class="font-label-md text-tertiary uppercase tracking-[0.3em] mb-4">Client Feedback</h2><h3 class="font-headline-lg text-headline-md md:text-headline-lg text-on-surface">What People I've Worked With Say</h3></div><div class="grid grid-cols-1 ${cols} gap-gutter reveal-up">${cards}</div></section>`;
}

const CALENDLY_URL = "https://calendly.com/devahsanali/30min";

// Turn a <button> or internal <a> CTA into a direct Calendly link (opens in a new tab).
function toCalendly(content, label) {
  const escaped = label.replace(/[.*+?^${}()|[\]\\]/g, "\\$&");
  const btn = new RegExp(`<button([^>]*)>\\s*${escaped}\\s*(<span[^>]*>[^<]*<\\/span>)?\\s*<\\/button>`, "g");
  content = content.replace(btn, (_, attrs, icon) => `<a href="${CALENDLY_URL}" target="_blank" rel="noreferrer"${attrs}>${label}${icon ? " " + icon : ""}</a>`);
  const link = new RegExp(`<a\\s+href="[^"]*"([^>]*)>\\s*${escaped}\\s*(<span[^>]*>[^<]*<\\/span>)?\\s*<\\/a>`, "g");
  return content.replace(link, (full, attrs, icon) =>
    full.includes(CALENDLY_URL) ? full : `<a href="${CALENDLY_URL}" target="_blank" rel="noreferrer"${attrs.replace(/\s(target|rel)="[^"]*"/g, "")}>${label}${icon ? " " + icon : ""}</a>`);
}

function ctaSection(title, text) {
  return `<section class="relative z-10 py-section-gap px-margin-mobile md:px-margin-desktop max-w-container-max mx-auto mb-20"><div class="reveal-up glass-card rounded-[2rem] p-12 md:p-20 text-center relative overflow-hidden"><div class="absolute top-0 left-1/2 -translate-x-1/2 w-full h-1 bg-gradient-to-r from-transparent via-primary/50 to-transparent"></div><h2 class="font-headline-lg text-headline-md md:text-headline-lg mb-6">${title}</h2><p class="font-body-lg text-body-lg text-on-surface-variant max-w-2xl mx-auto mb-10">${text}</p><div class="flex flex-col md:flex-row gap-4 justify-center"><a href="${CALENDLY_URL}" target="_blank" rel="noreferrer" class="bg-primary text-on-primary px-8 py-4 rounded-xl font-label-md text-label-md font-bold transition-all inline-flex items-center justify-center gap-2 hover:scale-105">Book a Free 30-Min Call</a><a href="/case-studies" class="bg-transparent border border-outline/30 text-on-surface px-8 py-4 rounded-xl font-label-md text-label-md font-bold transition-all inline-flex items-center justify-center hover:bg-white/10">View Case Studies</a></div></div></section>`;
}

function appendBeforeMainClose(content, html) {
  const idx = content.lastIndexOf("</main>");
  return idx === -1 ? content + html : content.slice(0, idx) + html + content.slice(idx);
}

function standardizeActionLink(content, label, className) {
  const escaped = label.replace(/[.*+?^${}()|[\]\\]/g, "\\$&");
  const regex = new RegExp(`<a[^>]*>\\s*${escaped}\\s*<\\/a>`, "g");
  return content.replace(regex, (fullTag) => {
    // Keep intentionally plain-text CTAs (e.g., contact card inline links) untouched.
    if (/class="[^"]*\btext-current\b[^"]*\bno-underline\b[^"]*"/.test(fullTag)) {
      return fullTag;
    }
    const href = fullTag.match(/\shref="[^"]*"/)?.[0] || "";
    const target = fullTag.match(/\starget="[^"]*"/)?.[0] || "";
    const rel = fullTag.match(/\srel="[^"]*"/)?.[0] || "";
    return `<a${href}${target}${rel} class="${className}">${label}</a>`;
  });
}

function standardizeAllActionCtas(content) {
  const primaryCta =
    "bg-primary text-on-primary px-8 py-4 rounded-xl font-label-md text-label-md font-bold transition-all inline-flex items-center justify-center gap-2 hover:scale-105";
  const secondaryCta =
    "bg-transparent border border-outline/30 text-on-surface px-8 py-4 rounded-xl font-label-md text-label-md font-bold transition-all inline-flex items-center justify-center hover:bg-white/10";

  [
    "Book CTO Consultation",
    "Book Consultation",
    "Schedule Strategy Call",
    "Book Strategy Call",
    "Schedule Audit",
    "Get Started",
    "Request Advisory",
    "Inquire for Mentorship",
    "Contact",
  ].forEach((label) => {
    content = standardizeActionLink(content, label, primaryCta);
  });

  [
    "Explore Services",
    "Explore Case Studies",
    "View Case Studies",
    "View More Studies",
    "View More Case Studies",
    "View Curriculum Advisory",
    "View Industry Work",
    "View Success Stories",
  ].forEach((label) => {
    content = standardizeActionLink(content, label, secondaryCta);
  });

  return content;
}

function getHome2Section() {
  const html = readLegacyFile("home2.html");
  const from = "<!-- Section 2: Strategic Authority (About Integration) -->";
  const to = "<!-- Section 3: Impact in Numbers -->";
  const start = html.indexOf(from);
  const end = html.indexOf(to);
  return html.slice(start, end);
}

function getHome2ValidationSection() {
  const html = readLegacyFile("home2.html");
  const from = "<section class=\"relative z-10 py-section-gap px-margin-mobile md:px-margin-desktop max-w-container-max mx-auto\">";
  const to = "<!-- Final CTA Section -->";
  const start = html.indexOf(from);
  const end = html.indexOf(to);
  return html.slice(start, end);
}

export function getPageMain(fileName) {
  const rawHtml = readLegacyFile(fileName);

  // gen-ai.html hero is OUTSIDE <main>; use special extractor to capture it
  let content = fileName === "gen-ai.html"
    ? extractGenAiContent(rawHtml)
    : extractMain(rawHtml);

  // Strip duplicate atmospheric elements (already rendered globally by layout)
  content = stripAtmosphericElements(content);

  // Fix <main> tag: remove classes that break layout in Next.js nested context.
  // Also strip pt-20 for contact (page wrapper already handles header clearance).
  const extraMainClassesToRemove = [];
  if (fileName === "contact.html") extraMainClassesToRemove.push("pt-20");
  if (fileName === "about.html") extraMainClassesToRemove.push("bg-surface-dim");
  content = fixMainTag(content, extraMainClassesToRemove);
  
  if (["saas-scaling.html", "gen-ai.html"].includes(fileName)) {
    content = addMainClasses(content, ["max-w-container-max", "mx-auto"]);
  }

  content = normalizeLinks(content);

  /* ─── HOME ─── */
  if (fileName === "home.html") {
    // Fix badge row vertical alignment
    content = content.replace(
      'class="flex flex-wrap gap-3 mb-8 reveal-up"',
      'class="flex flex-wrap gap-3 mb-8 reveal-up items-center"'
    );

    // Update outdated CTA text to match current site wording.
    content = content.replace(/Download Services Guide/g, "Explore Services");

    const oldFrom = "<!-- Section 2: Strategic Authority (About Integration) -->";
    const oldTo = "<!-- Section 3: Impact in Numbers -->";
    const start = content.indexOf(oldFrom);
    const end = content.indexOf(oldTo);
    if (start !== -1 && end !== -1) {
      content = `${content.slice(0, start)}${getHome2Section()}${content.slice(end)}`;
    }
    // Real, approved testimonials only (see lib/testimonials.js). Hidden while empty.
    content = content.replace("<!-- Final CTA Section -->", `${testimonialsSection(testimonials.slice(0, 3))}<!-- Final CTA Section -->`);
    content = toCalendly(content, "Book CTO Consultation");
    content = convertActionButton(content, "Explore Case Studies", "/case-studies");
    content = toCalendly(content, "Schedule Strategy Call");
    content = convertActionButton(content, "Explore Services", "/services");
  }

  /* ─── SERVICES ─── */
  if (fileName === "services.html") {
    content = toCalendly(content, "Book Consultation");
    content = convertActionButton(content, "View Case Studies", "/case-studies");
  }

  /* ─── CASE STUDIES ─── */
  if (fileName === "case-studies.html") {
    // Keep case studies aligned with site-wide content width.
    content = addMainClasses(content, ["max-w-container-max", "mx-auto"]);

    // Add SaaS CTA at the bottom of the Business Outcomes block.
    content = content.replace(
      '\n                </div>\n              </div>\n            </div>\n          </div>\n          <div class="lg:col-span-5 order-1 lg:order-2 space-y-8">',
      '\n                </div>\n              </div>\n              <div class="mt-10 flex justify-end"><a href="/case-studies/saas-scaling" class="group/btn flex items-center gap-2 text-primary font-bold hover:scale-105 transition-transform">View Full Technical Brief<span class="material-symbols-outlined transition-transform group-hover/btn:translate-x-1">arrow_forward</span></a></div>\n            </div>\n          </div>\n          <div class="lg:col-span-5 order-1 lg:order-2 space-y-8">',
    );

    // Remove the SaaS CTA that sits under the image (keep this section CTA-free).
    content = content.replace(
      /\s*<div class="flex justify-start">[\s\S]*?href="\/case-studies\/saas-scaling"[\s\S]*?<\/div>/,
      "",
    );

    // Remove any existing bottom Gen-AI CTA block (we reinsert it higher in the section).
    content = content.replace(
      /\s*<div class="mt-12 flex justify-center reveal-up">[\s\S]*?href="\/case-studies\/gen-ai"[\s\S]*?<\/div>/,
      "",
    );

     // Case Study 1: replace <button> with proper <a> link
     content = content.replace(
       /<button\s+class="group\/btn[^>]*>[\s\S]*?View Full Technical Brief[\s\S]*?<\/button>/,
       '<a href="/case-studies/platform-modernization" class="group/btn flex items-center gap-2 text-primary font-bold hover:scale-105 transition-transform">View Full Technical Brief<span class="material-symbols-outlined transition-transform group-hover/btn:translate-x-1">arrow_forward</span></a>',
     );

     // Case Study 4 (Gen AI): place CTA directly under "Real-time dynamic rerouting enabled."
     content = content.replace(
       /(PII masking and guardrails built in\.<\/span\s*>[\s\S]*?<\/div>)/,
       `$1\n                  <div class="mt-8 flex justify-start">\n                    <a href="/case-studies/gen-ai" class="group/btn flex items-center gap-2 text-primary font-bold hover:scale-105 transition-transform">View Full Technical Brief<span class="material-symbols-outlined transition-transform group-hover/btn:translate-x-1">arrow_forward</span></a>\n                  </div>`,
     );

     content = toCalendly(content, "Schedule Strategy Call");
     content = convertActionButton(content, "Explore Services", "/services");
   }

  /* ─── CASE STUDY DETAIL: PLATFORM MODERNIZATION ─── */
  if (fileName === "platform-modernization.html") {
    content = toCalendly(content, "Book Strategy Call");
    content = toCalendly(content, "Schedule Audit");
    content = convertActionButton(content, "View More Case Studies", "/case-studies");
  }

  /* ─── CASE STUDY DETAIL: SAAS SCALING ─── */
  if (fileName === "saas-scaling.html") {
    content = toCalendly(content, "Book Strategy Call");
    content = convertActionButton(content, "View More Studies", "/case-studies");
  }

  /* ─── CASE STUDY DETAIL: GEN AI ─── */
  if (fileName === "gen-ai.html") {
    content = toCalendly(content, "Book Strategy Call");
    content = appendBeforeMainClose(content, ctaSection("Want AI that actually works in production?", "I design and ship LLM and RAG systems with guardrails, measured results and controlled costs. Start with a free 30-minute call about your use case."));
    content = content.replace(
      '<pre><code>{',
      '<pre class="overflow-x-auto whitespace-pre-wrap break-words"><code class="break-words">{',
    );
  }

  /* ─── ABOUT ─── */
  if (fileName === "about.html") {
    content = appendBeforeMainClose(content, ctaSection("Need a technical leader who has done this before?", "Fractional CTO, SaaS architecture or AI integration: start with a free 30-minute call and I'll tell you honestly what I'd do first."));
  }

  /* ─── RESEARCH ─── */
  if (fileName === "reeserach.html") {
    content = content.replace(/cursor-pointer/g, "");
    content = content.replace(/group-hover:[^\s"]+/g, "");
    // Replace ONLY the newsletter/CTA section via its unique HTML comment
    content = content.replace(
      /<!-- Newsletter \/ CTA -->[\s\S]*?<\/section>/,
      `<section class="relative z-10 py-section-gap px-margin-mobile md:px-margin-desktop max-w-container-max mx-auto mb-20"><div class="reveal-up glass-card rounded-[2rem] p-12 md:p-20 text-center relative overflow-hidden"><div class="absolute top-0 left-1/2 -translate-x-1/2 w-full h-1 bg-gradient-to-r from-transparent via-primary/50 to-transparent"></div><h2 class="font-headline-lg text-headline-lg mb-6">Ready to apply these research insights?</h2><p class="font-body-lg text-body-lg text-on-surface-variant max-w-2xl mx-auto mb-10">Discuss your technical roadmap directly or explore service tracks designed for scalable execution.</p><div class="flex flex-col md:flex-row gap-4 justify-center"><a href="https://calendly.com/devahsanali/30min" target="_blank" rel="noreferrer" class="bg-primary text-on-primary px-8 py-4 rounded-xl font-label-md text-label-md font-bold hover:brightness-110 transition-all">Book a Call</a><a href="/services" class="bg-white/5 backdrop-blur-md border border-white/10 text-on-surface px-8 py-4 rounded-xl font-label-md text-label-md font-bold hover:bg-white/10 transition-all">Explore Services</a></div></div></section>`,
    );
  }

  /* ─── MENTORSHIP ─── */
  if (fileName === "mentorship.html") {
    content = convertActionButton(content, "View Curriculum Advisory", "/case-studies");
    content = convertActionButton(content, "Inquire for Mentorship", "/contact");
    content = convertActionButton(content, "Request Advisory", "/contact");
    content = convertActionButton(content, "View Success Stories", "/case-studies");
    content = content.replace(/View Curriculum Advisory|View Success Stories/g, "View Industry Work");
   }

  /* ─── CONTACT ─── */
  if (fileName === "contact.html") {
    ["Get Started", "Schedule Audit", "Request Report", "Explore Vision", "Scale My Team"].forEach((label) => {
      content = content.replace(
        label,
        `<a href="https://calendly.com/devahsanali/30min" target="_blank" rel="noreferrer" class="text-current no-underline hover:text-current">${label}</a>`,
      );
    });


    // Keep Scale My Team color consistent with primary action styling.
    content = content.replace(
      /(<div\s+class="flex items-center\s+)text-secondary(\s+font-label-md\s+group-hover:gap-2\s+transition-all">\s*<a[^>]*>Scale My Team<\/a>)/,
      "$1text-primary$2",
    );

    // Fix "Send an Inquiry" button with regex to handle newline between href and class
    content = content.replace(
      /href="\/contact"(\s+)class="bg-primary text-on-primary px-8 py-3 rounded-full[^"]*"/,
      'href="https://calendly.com/devahsanali/30min" target="_blank" rel="noreferrer" class="bg-primary text-on-primary px-8 py-4 rounded-xl font-label-md text-label-md font-bold transition-all inline-flex items-center justify-center gap-2 hover:scale-105 hover:shadow-[0_0_20px_rgba(173,198,255,0.4)] min-w-[200px]"',
    );

    // Fix "View Services" button with regex
    content = content.replace(
      /href="\/services"(\s+)class="bg-transparent border border-outline\/30 text-on-surface px-8 py-3 rounded-full[^"]*"/,
      'href="/services" class="bg-transparent border border-outline/30 text-on-surface px-8 py-4 rounded-xl font-label-md text-label-md font-bold hover:bg-white/10 transition-all inline-flex items-center justify-center min-w-[200px]"',
    );
  }

  // Keep CTA sizing, spacing, radius and typography consistent site-wide.
  content = standardizeAllActionCtas(content);
 
   return content;
}

function addMainClasses(content, classesToAdd = []) {
  const mainTagMatch = content.match(/<main[\s\S]*?>/);
  if (!mainTagMatch) return content;
  const mainTag = mainTagMatch[0];
  const fixedMainTag = mainTag.replace(/class="([^"]*)"/, (_, classes) => {
    const set = new Set(classes.split(/\s+/).filter(Boolean));
    classesToAdd.forEach((c) => set.add(c));
    return `class="${Array.from(set).join(" ")}"`;
  });
  return content.replace(mainTag, fixedMainTag);
}
