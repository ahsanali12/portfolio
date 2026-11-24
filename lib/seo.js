import { siteConfig } from "@/config/site";

export function absoluteUrl(path = "/") {
  return `${siteConfig.siteUrl}${path}`;
}

const PERSON_ID = `${siteConfig.siteUrl}/#person`;
const ORG_ID = `${siteConfig.siteUrl}/#business`;
const SITE_ID = `${siteConfig.siteUrl}/#website`;
const OG_IMAGE = { url: "/og-image.png", width: 1200, height: 630, alt: siteConfig.title };

export function buildMetadata({ title, description, path, keywords = [], absoluteTitle = false, type = "website" }) {
  const fullTitle = absoluteTitle ? title : `${title} | ${siteConfig.name}`;
  const canonical = absoluteUrl(path);

  return {
    title: { absolute: fullTitle },
    description,
    keywords: [...keywords, ...siteConfig.keywords],
    alternates: { canonical },
    openGraph: {
      title: fullTitle,
      description,
      url: canonical,
      siteName: siteConfig.name,
      locale: siteConfig.locale,
      type,
      images: [OG_IMAGE],
    },
    twitter: {
      card: "summary_large_image",
      title: fullTitle,
      description,
      creator: "@devahsanali",
      site: "@devahsanali",
      images: [OG_IMAGE.url],
    },
  };
}

const sameAs = () => [siteConfig.social.linkedin, siteConfig.social.github, siteConfig.social.x];

export function personSchema() {
  return {
    "@context": "https://schema.org",
    "@type": "Person",
    "@id": PERSON_ID,
    name: siteConfig.name,
    jobTitle: siteConfig.jobTitle,
    description: siteConfig.description,
    knowsLanguage: ["English"],
    mainEntityOfPage: siteConfig.siteUrl,
    url: siteConfig.siteUrl,
    image: absoluteUrl("/images/muhammad-ahsan-ali.webp"),
    address: { "@type": "PostalAddress", addressLocality: "Karachi", addressCountry: "PK" },
    hasCredential: [
      { "@type": "EducationalOccupationalCredential", credentialCategory: "degree", name: "MS Computer Science (Natural Language Processing)" },
      { "@type": "EducationalOccupationalCredential", credentialCategory: "degree", name: "BS Computer Science" },
    ],
    knowsAbout: [
      "Fractional CTO", "Technology strategy", "Engineering leadership", "Software architecture",
      "SaaS architecture", "Multi-tenant systems", "Generative AI", "Large Language Models (LLM)",
      "Retrieval-Augmented Generation (RAG)", "Natural Language Processing (NLP)", "AI workflow automation",
      "n8n", "Python", "PHP", "Laravel", "Node.js", "React", "MySQL", "Redis", "AWS", "CI/CD",
      "Legacy system modernization", "Performance optimization", "E-commerce platforms",
    ],
    sameAs: sameAs(),
  };
}

export function organizationSchema() {
  return {
    "@context": "https://schema.org",
    "@type": "ProfessionalService",
    "@id": ORG_ID,
    name: `${siteConfig.name} | Fractional CTO & AI Consulting`,
    url: siteConfig.siteUrl,
    image: absoluteUrl("/og-image.png"),
    description: siteConfig.description,
    founder: { "@id": PERSON_ID },
    address: { "@type": "PostalAddress", addressLocality: "Karachi", addressCountry: "PK" },
    areaServed: ["United States", "Australia", "United Arab Emirates", "United Kingdom", "Worldwide"],
    serviceType: ["Fractional CTO", "SaaS Architecture", "AI & Automation", "Technical Founder Partner", "Academic Mentorship"],
    sameAs: sameAs(),
  };
}

export function websiteSchema() {
  return {
    "@context": "https://schema.org",
    "@type": "WebSite",
    "@id": SITE_ID,
    name: siteConfig.name,
    url: siteConfig.siteUrl,
    inLanguage: "en",
    publisher: { "@id": PERSON_ID },
  };
}

export function webPageSchema({ name, path, description, type = "WebPage" }) {
  return {
    "@context": "https://schema.org",
    "@type": type,
    name,
    url: absoluteUrl(path),
    description,
    isPartOf: { "@id": SITE_ID },
    about: { "@id": PERSON_ID },
    inLanguage: "en",
    // Google's Profile page rich result requires mainEntity (the Person) on ProfilePage.
    ...(type === "ProfilePage" ? { mainEntity: (({ "@context": _c, mainEntityOfPage: _m, ...person }) => person)(personSchema()) } : {}),
  };
}

export function breadcrumbSchema(items) {
  return {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    itemListElement: items.map((item, i) => ({
      "@type": "ListItem",
      position: i + 1,
      name: item.name,
      item: absoluteUrl(item.path),
    })),
  };
}

export function articleSchema({ headline, description, path, keywords = [], datePublished, dateModified }) {
  return {
    "@context": "https://schema.org",
    "@type": "Article",
    headline,
    description,
    keywords: keywords.join(", "),
    image: absoluteUrl("/og-image.png"),
    author: { "@id": PERSON_ID, "@type": "Person", name: siteConfig.name, url: siteConfig.siteUrl },
    publisher: { "@id": PERSON_ID },
    mainEntityOfPage: absoluteUrl(path),
    inLanguage: "en",
    ...(datePublished && { datePublished }),
    ...(dateModified && { dateModified }),
  };
}

export { PERSON_ID, ORG_ID };
