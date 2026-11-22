import { servicePages } from "./service-pages";
import { testimonials } from "./testimonials";
import { caseStudies } from "./case-study-data";
import { escapeHtml as e, testimonialsSection, faqSection, ctaSection } from "./legacy-content";

const CALENDLY_URL = "https://calendly.com/devahsanali/30min";
const PRIMARY_BTN =
  "bg-primary text-on-primary px-8 py-4 rounded-xl font-label-md text-label-md font-bold transition-all inline-flex items-center justify-center gap-2 hover:scale-105";
const SECONDARY_BTN =
  "bg-transparent border border-outline/30 text-on-surface px-8 py-4 rounded-xl font-label-md text-label-md font-bold transition-all inline-flex items-center justify-center hover:bg-white/10";
const SECTION = "relative z-10 px-margin-mobile md:px-margin-desktop max-w-container-max mx-auto";

// Verified headline numbers for each case study (same figures as the case study pages).
const proofStats = {
  "platform-modernization": [
    ["~60%", "Faster load times"],
    ["~$6k", "Saved on servers / month"],
    ["~1M", "Users served"],
  ],
  "gen-ai": [
    ["85%", "Tier-1 queries handled"],
    ["92%", "Customer satisfaction"],
    ["14,000+", "Tickets handled weekly"],
  ],
  "saas-scaling": [
    ["1000s", "Active users"],
    ["Multi-vendor", "Each vendor serves its own clients"],
    ["Live", "AI workflow system"],
  ],
};

const eyebrow = (text, color = "primary") =>
  `<h2 class="font-label-md text-${color} uppercase tracking-[0.3em] mb-4">${e(text)}</h2>`;

export function getServicePageHtml(slug) {
  const p = servicePages[slug];
  if (!p) return null;
  const study = caseStudies[p.proof];
  const testimonial = testimonials.find((t) => t.id === p.testimonialId);
  const others = Object.entries(servicePages).filter(([s]) => s !== slug);

  const hero = `<section class="${SECTION} pt-16 pb-section-gap">
  <nav aria-label="Breadcrumb" class="mb-8 font-label-md text-label-md text-on-surface-variant flex items-center gap-2 reveal-up">
    <a href="/services" class="hover:text-primary transition-colors">Services</a>
    <span class="material-symbols-outlined text-[16px]">chevron_right</span>
    <span class="text-on-surface">${e(p.navTitle)}</span>
  </nav>
  <div class="max-w-4xl reveal-up">
    <div class="inline-flex items-center gap-2 px-3 py-1 rounded-full border border-secondary/30 bg-secondary/10 text-secondary mb-6">
      <span class="material-symbols-outlined text-[16px]">${p.icon}</span>
      <span class="font-label-md text-label-md uppercase tracking-widest">${e(p.eyebrow)}</span>
    </div>
    <h1 class="font-headline-lg text-headline-lg-mobile md:text-display-lg text-on-surface mb-8 leading-tight tracking-tighter">
      <span class="text-secondary breath-glow">${e(p.h1[0])}</span> ${e(p.h1[1])}
    </h1>
    <p class="font-body-lg text-body-lg text-on-surface-variant max-w-3xl mb-10">${e(p.intro)}</p>
    <div class="flex flex-col sm:flex-row gap-4">
      <a href="${CALENDLY_URL}" target="_blank" rel="noreferrer" class="${PRIMARY_BTN}">Book a Free 30-Min Call</a>
      <a href="${study.path}" class="${SECONDARY_BTN}">See the Case Study</a>
    </div>
  </div>
</section>`;

  const problems = `<section class="${SECTION} pb-section-gap">
  <div class="mb-12 reveal-up">${eyebrow("Sound familiar?", "tertiary")}<h3 class="font-headline-lg text-headline-md md:text-headline-lg text-on-surface">Problems I solve</h3></div>
  <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-gutter reveal-up">
    ${p.problems
      .map(
        (x) => `<div class="glass-card rounded-2xl p-8">
      <div class="w-12 h-12 rounded-lg bg-primary/10 flex items-center justify-center mb-6 border border-primary/20"><span class="material-symbols-outlined text-primary">${x.icon}</span></div>
      <h4 class="font-headline-md text-xl text-on-surface mb-3">${e(x.title)}</h4>
      <p class="font-body-md text-on-surface-variant">${e(x.text)}</p>
    </div>`,
      )
      .join("")}
  </div>
</section>`;

  const offer = `<section class="${SECTION} pb-section-gap">
  <div class="grid grid-cols-1 lg:grid-cols-2 gap-gutter">
    <div class="glass-card rounded-2xl p-8 md:p-12 reveal-up">
      ${eyebrow("What you get")}
      <h3 class="font-headline-md text-2xl md:text-3xl text-on-surface mb-8">Deliverables</h3>
      <ul class="space-y-5">
        ${p.deliverables
          .map(
            (d) => `<li class="flex gap-4"><span class="material-symbols-outlined text-secondary shrink-0">check_circle</span><span class="font-body-lg text-on-surface-variant">${e(d)}</span></li>`,
          )
          .join("")}
      </ul>
    </div>
    <div class="glass-card rounded-2xl p-8 md:p-12 reveal-up">
      ${eyebrow("How it works", "secondary")}
      <h3 class="font-headline-md text-2xl md:text-3xl text-on-surface mb-8">From first call to results</h3>
      <ol class="space-y-8">
        ${p.steps
          .map(
            (s, i) => `<li class="flex gap-5"><span class="w-10 h-10 shrink-0 rounded-full border border-primary/30 bg-primary/10 text-primary font-bold flex items-center justify-center">${i + 1}</span><div><h4 class="font-headline-md text-xl text-on-surface mb-2">${e(s.title)}</h4><p class="font-body-md text-on-surface-variant">${e(s.text)}</p></div></li>`,
          )
          .join("")}
      </ol>
    </div>
  </div>
</section>`;

  const proof = `<section class="${SECTION} pb-section-gap">
  <div class="mb-12 reveal-up">${eyebrow("Proof", "secondary")}<h3 class="font-headline-lg text-headline-md md:text-headline-lg text-on-surface">A real result</h3></div>
  <a href="${study.path}" class="block glass-card rounded-[2rem] p-8 md:p-12 hover:border-primary/40 transition-all reveal-up">
    <h4 class="font-headline-md text-2xl md:text-3xl text-on-surface mb-4">${e(study.title.replace(/^Case Study:\s*/, ""))}</h4>
    <p class="font-body-lg text-on-surface-variant max-w-3xl mb-10">${e(study.description)}</p>
    <div class="grid grid-cols-1 sm:grid-cols-3 gap-gutter mb-10">
      ${(proofStats[p.proof] || [])
        .map(
          ([v, l]) => `<div><div class="font-display-lg text-4xl md:text-5xl text-primary breath-glow mb-2">${e(v)}</div><div class="font-label-md text-xs uppercase tracking-wider text-on-surface-variant">${e(l)}</div></div>`,
        )
        .join("")}
    </div>
    <span class="inline-flex items-center gap-2 text-primary font-bold">Read the Full Case Study <span class="material-symbols-outlined">arrow_forward</span></span>
  </a>
</section>`;

  const feedback = testimonial ? testimonialsSection([testimonial], "Client Feedback", "From Someone I've Worked With") : "";

  const stack = `<section class="${SECTION} pb-section-gap">
  <div class="glass-card rounded-2xl p-8 md:p-12 reveal-up">
    ${eyebrow("Tools & stack", "tertiary")}
    <div class="flex flex-wrap gap-3">
      ${p.stack.map((t) => `<span class="px-4 py-2 rounded-full border border-white/10 bg-white/5 font-label-md text-label-md text-on-surface">${e(t)}</span>`).join("")}
    </div>
  </div>
</section>`;

  const related = `<section class="${SECTION} pb-section-gap">
  <div class="mb-8 reveal-up">${eyebrow("Other services")}</div>
  <div class="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-gutter reveal-up">
    ${others
      .map(
        ([s, o]) => `<a href="/services/${s}" class="glass-card rounded-2xl p-6 flex items-center justify-between gap-4 hover:border-primary/40 transition-all"><span class="flex items-center gap-3"><span class="material-symbols-outlined text-primary">${o.icon}</span><span class="font-headline-md text-lg text-on-surface">${e(o.navTitle)}</span></span><span class="material-symbols-outlined text-on-surface-variant">arrow_forward</span></a>`,
      )
      .join("")}
  </div>
</section>`;

  return `<main class="relative">${hero}${problems}${offer}${proof}${feedback}${stack}${faqSection(p.faq, `${e(p.navTitle)} Questions`)}${related}${ctaSection(e(p.ctaTitle), e(p.ctaText))}</main>`;
}
