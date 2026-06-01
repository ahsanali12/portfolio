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
    alternates: {
      canonical,
    },
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

export function organizationSchema() {
  return {
    "@context": "https://schema.org",
    "@type": "Organization",
    name: siteConfig.name,
    url: siteConfig.siteUrl,
    sameAs: [siteConfig.social.linkedin, siteConfig.social.github, siteConfig.social.x],
  };
}

export function personSchema() {
  return {
    "@context": "https://schema.org",
    "@type": "Person",
    name: siteConfig.name,
    jobTitle: "Fractional CTO",
    url: siteConfig.siteUrl,
    sameAs: [siteConfig.social.linkedin, siteConfig.social.github, siteConfig.social.x],
  };
}

export function websiteSchema() {
  return {
    "@context": "https://schema.org",
    "@type": "WebSite",
    name: siteConfig.name,
    url: siteConfig.siteUrl,
    potentialAction: {
      "@type": "SearchAction",
      target: `${siteConfig.siteUrl}/search?q={search_term_string}`,
      "query-input": "required name=search_term_string",
    },
  };
}

