import { blogPosts } from "./blog-posts";
import { escapeHtml as e, faqSection, ctaSection } from "./legacy-content";

const SECTION = "relative z-10 px-margin-mobile md:px-margin-desktop max-w-container-max mx-auto";
const CALENDLY_URL = "https://calendly.com/devahsanali/30min";

export function formatDate(iso) {
  return new Date(`${iso}T00:00:00Z`).toLocaleDateString("en-US", { year: "numeric", month: "long", day: "numeric", timeZone: "UTC" });
}

// Inline formatting on already-escaped text: **bold**, *italic*, [text](url).
function inline(text) {
  return e(text)
    .replace(/\*\*(.+?)\*\*/g, '<strong class="text-on-surface font-semibold">$1</strong>')
    .replace(/\*(.+?)\*/g, "<em>$1</em>")
    .replace(/\[(.+?)\]\((.+?)\)/g, (_, label, href) => {
      const ext = /^https?:/.test(href);
      return `<a href="${href}" class="text-primary underline underline-offset-4 hover:text-secondary transition-colors"${ext ? ' target="_blank" rel="noreferrer"' : ""}>${label}</a>`;
    });
}

// Render the small Markdown subset used in lib/blog-posts.js.
function renderBody(md) {
  const blocks = md.trim().split(/\n\s*\n/);
  return blocks
    .map((block) => {
      const lines = block.split("\n");
      const out = [];
      let i = 0;
      while (i < lines.length) {
        const line = lines[i];
        if (line.startsWith("## ")) {
          out.push(`<h2 class="font-headline-md text-2xl md:text-3xl text-on-surface mt-14 mb-5">${inline(line.slice(3))}</h2>`);
          i++;
        } else if (line.startsWith("### ")) {
          out.push(`<h3 class="font-headline-md text-xl md:text-2xl text-on-surface mt-10 mb-4">${inline(line.slice(4))}</h3>`);
          i++;
        } else if (line.startsWith("- ") || /^\d+\. /.test(line)) {
          const ordered = /^\d+\. /.test(line);
          const items = [];
          while (i < lines.length && (ordered ? /^\d+\. /.test(lines[i]) : lines[i].startsWith("- "))) {
            items.push(lines[i].replace(ordered ? /^\d+\. / : /^- /, ""));
            i++;
          }
          const tag = ordered ? "ol" : "ul";
          out.push(
            `<${tag} class="space-y-3 mb-6 pl-6 ${ordered ? "list-decimal" : "list-disc"} marker:text-primary">${items
              .map((x) => `<li class="font-body-lg text-body-lg text-on-surface-variant pl-1">${inline(x)}</li>`)
              .join("")}</${tag}>`,
          );
        } else if (line.startsWith("|")) {
          const rows = [];
          while (i < lines.length && lines[i].startsWith("|")) {
            rows.push(lines[i].split("|").slice(1, -1).map((c) => c.trim()));
            i++;
          }
          const [head, ...body] = rows;
          out.push(
            `<div class="glass-card rounded-2xl overflow-x-auto mb-8"><table class="w-full text-left min-w-[480px]"><thead><tr class="border-b border-white/10">${head
              .map((c) => `<th class="px-5 py-4 font-label-md text-label-md uppercase tracking-wider text-primary">${inline(c)}</th>`)
              .join("")}</tr></thead><tbody>${body
              .map(
                (r) =>
                  `<tr class="border-b border-white/5 last:border-0">${r
                    .map((c, ci) => `<td class="px-5 py-4 font-body-md ${ci === 0 ? "text-on-surface font-semibold" : "text-on-surface-variant"}">${inline(c)}</td>`)
                    .join("")}</tr>`,
              )
              .join("")}</tbody></table></div>`,
          );
        } else {
          const para = [];
          while (i < lines.length && !/^(## |### |- |\d+\. |\|)/.test(lines[i])) {
            para.push(lines[i]);
            i++;
          }
          out.push(`<p class="font-body-lg text-body-lg text-on-surface-variant mb-6 leading-relaxed">${inline(para.join(" "))}</p>`);
        }
      }
      return out.join("");
    })
    .join("");
}

const meta = (p) =>
  `<span>${formatDate(p.datePublished)}</span><span aria-hidden="true">·</span><span>${p.readMinutes} min read</span>`;

export function getBlogPostHtml(slug) {
  const p = blogPosts[slug];
  if (!p) return null;
  const others = Object.entries(blogPosts).filter(([s]) => s !== slug);

  const article = `<section class="${SECTION} pt-16 pb-section-gap">
  <article class="max-w-3xl mx-auto">
    <nav aria-label="Breadcrumb" class="mb-8 font-label-md text-label-md text-on-surface-variant flex items-center gap-2 reveal-up">
      <a href="/blog" class="hover:text-primary transition-colors">Blog</a>
      <span class="material-symbols-outlined text-[16px]">chevron_right</span>
      <span class="text-on-surface truncate">Article</span>
    </nav>
    <header class="mb-10 reveal-up">
      <h1 class="font-headline-lg text-headline-lg-mobile md:text-headline-lg text-on-surface mb-6 leading-tight tracking-tighter">${e(p.title)}</h1>
      <div class="flex flex-wrap items-center gap-3 font-label-md text-label-md text-on-surface-variant">
        <span class="text-on-surface">By <a href="/about" class="hover:text-primary transition-colors">Muhammad Ahsan Ali</a></span><span aria-hidden="true">·</span>${meta(p)}
      </div>
    </header>
    <div class="glass-card rounded-2xl p-6 md:p-8 mb-12 border-l-2 border-primary reveal-up">
      <div class="font-label-md text-primary uppercase tracking-[0.3em] mb-3">Short answer</div>
      <p class="font-body-lg text-body-lg text-on-surface leading-relaxed">${inline(p.answer)}</p>
    </div>
    <div class="reveal-up">${renderBody(p.body)}</div>
    <div class="mt-14 glass-card rounded-2xl p-6 md:p-8 reveal-up">
      <div class="font-label-md text-tertiary uppercase tracking-[0.3em] mb-4">Related</div>
      <ul class="space-y-3">${p.related
        .map(
          ([href, label]) =>
            `<li><a href="${href}" class="inline-flex items-center gap-2 text-on-surface hover:text-primary transition-colors"><span class="material-symbols-outlined text-primary text-[20px]">arrow_forward</span>${e(label)}</a></li>`,
        )
        .join("")}</ul>
    </div>
    <div class="mt-8 glass-card rounded-2xl p-6 md:p-8 flex flex-col sm:flex-row gap-6 sm:items-center reveal-up">
      <img src="/images/muhammad-ahsan-ali.webp" alt="Muhammad Ahsan Ali" width="80" height="80" loading="lazy" class="w-20 h-20 rounded-full object-cover border border-primary/30 shrink-0"/>
      <div>
        <div class="font-headline-md text-xl text-on-surface mb-2">Muhammad Ahsan Ali</div>
        <p class="font-body-md text-on-surface-variant mb-4">Fractional CTO &amp; AI engineering leader with 12+ years of experience and 100+ client projects scaling SaaS, modernizing legacy systems and shipping production AI. MS Computer Science (NLP).</p>
        <a href="${CALENDLY_URL}" target="_blank" rel="noreferrer" class="text-primary font-bold inline-flex items-center gap-2">Book a Free 30-Min Call <span class="material-symbols-outlined text-[20px]">arrow_forward</span></a>
      </div>
    </div>
  </article>
</section>`;

  const more = `<section class="${SECTION} pb-section-gap">
  <div class="mb-8 reveal-up"><h2 class="font-label-md text-primary uppercase tracking-[0.3em] mb-4">More articles</h2></div>
  <div class="grid grid-cols-1 md:grid-cols-2 gap-gutter reveal-up">${others.map(([s, o]) => card(s, o)).join("")}</div>
</section>`;

  return `<main class="relative">${article}${faqSection(p.faq, "Questions on This Topic")}${more}${ctaSection("Want This Applied to Your Product?", "Book a free 30-minute call. Bring the problem, and you'll leave with a clear next step.")}</main>`;
}

function card(slug, p) {
  return `<a href="/blog/${slug}" class="glass-card rounded-2xl p-8 flex flex-col hover:border-primary/40 transition-all group">
  <div class="w-12 h-12 rounded-lg bg-primary/10 flex items-center justify-center mb-6 border border-primary/20"><span class="material-symbols-outlined text-primary">${p.icon}</span></div>
  <h3 class="font-headline-md text-xl md:text-2xl text-on-surface mb-3 group-hover:text-primary transition-colors">${e(p.title)}</h3>
  <p class="font-body-md text-on-surface-variant mb-6 flex-1">${e(p.description)}</p>
  <div class="flex items-center gap-3 font-label-md text-xs uppercase tracking-wider text-on-surface-variant">${meta(p)}</div>
</a>`;
}

export function getBlogIndexHtml() {
  const posts = Object.entries(blogPosts).sort(([, a], [, b]) => b.datePublished.localeCompare(a.datePublished));
  const hero = `<section class="${SECTION} pt-16 pb-section-gap">
  <div class="max-w-4xl reveal-up">
    <div class="inline-flex items-center gap-2 px-3 py-1 rounded-full border border-secondary/30 bg-secondary/10 text-secondary mb-6">
      <span class="material-symbols-outlined text-[16px]">article</span>
      <span class="font-label-md text-label-md uppercase tracking-widest">Blog</span>
    </div>
    <h1 class="font-headline-lg text-headline-lg-mobile md:text-display-lg text-on-surface mb-8 leading-tight tracking-tighter">
      <span class="text-secondary breath-glow">Field Notes</span> on Scaling Software &amp; Shipping AI.
    </h1>
    <p class="font-body-lg text-body-lg text-on-surface-variant max-w-3xl">Straight answers from real projects: fractional CTO decisions, legacy modernization, SaaS architecture and production AI.</p>
  </div>
</section>`;
  const grid = `<section class="${SECTION} pb-section-gap">
  <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-gutter reveal-up">${posts.map(([s, p]) => card(s, p)).join("")}</div>
</section>`;
  return `<main class="relative">${hero}${grid}${ctaSection("Have a Problem Like These?", "Book a free 30-minute call. Bring the problem, and you'll leave with a clear next step.")}</main>`;
}
