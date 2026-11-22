import { siteConfig } from "@/config/site";

export function absoluteUrl(path = "/") {
  return `${siteConfig.siteUrl}${path}`;
}

export function buildMetadata({ title, description, path }) {
  const fullTitle = `${title} | ${siteConfig.name}`;
  const canonical = absoluteUrl(path);

  return {
    title: fullTitle,
    description,
    alternates: { canonical },
    openGraph: {
      title: fullTitle,
      description,
      url: canonical,
      siteName: siteConfig.name,
      locale: "en_US",
      type: "website",
    },
    twitter: {
      card: "summary_large_image",
      title: fullTitle,
      description,
      creator: "@devahsanali",
    },
  };
}

export function personSchema() {
  return {
    "@context": "https://schema.org",
    "@type": "Person",
    name: siteConfig.name,
    jobTitle: "Software Architect & Engineering Leader",
    description:
      "Software architect and engineering leader with 12+ years of experience rescuing, modernizing and scaling SaaS and e-commerce products and adding practical AI.",
    url: siteConfig.siteUrl,
    address: { "@type": "PostalAddress", addressLocality: "Karachi", addressCountry: "PK" },
    alumniOf: [
      { "@type": "CollegeOrUniversity", name: "SZABIST" },
      { "@type": "CollegeOrUniversity", name: "Ilma University" },
    ],
    knowsAbout: [
      "Software Architecture",
      "Laravel",
      "PHP",
      "Legacy Modernization",
      "SaaS",
      "Performance Optimization",
      "AI Integration",
      "Production Readiness",
      "Fractional CTO",
    ],
    sameAs: [siteConfig.social.linkedin, siteConfig.social.github, siteConfig.social.x],
  };
}

export function websiteSchema() {
  return {
    "@context": "https://schema.org",
    "@type": "WebSite",
    name: siteConfig.name,
    url: siteConfig.siteUrl,
  };
}
