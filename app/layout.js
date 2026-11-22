import "./globals.css";
import { Analytics } from "@vercel/analytics/next";
import { GoogleAnalytics } from "@/components/seo/GoogleAnalytics";
import { Header } from "@/components/layout/Header";
import { Footer } from "@/components/layout/Footer";
import { VisualEffects } from "@/components/layout/VisualEffects";
import { JsonLd } from "@/components/seo/JsonLd";
import { organizationSchema, personSchema, websiteSchema } from "@/lib/seo";
import { siteConfig } from "@/config/site";

export const metadata = {
  title: { default: siteConfig.title, template: `%s | ${siteConfig.name}` },
  description: siteConfig.description,
  keywords: siteConfig.keywords,
  applicationName: siteConfig.name,
  authors: [{ name: siteConfig.name, url: siteConfig.siteUrl }],
  creator: siteConfig.name,
  publisher: siteConfig.name,
  category: "technology",
  metadataBase: new URL(siteConfig.siteUrl),
  alternates: { canonical: "/" },
  robots: {
    index: true,
    follow: true,
    googleBot: { index: true, follow: true, "max-image-preview": "large", "max-snippet": -1, "max-video-preview": -1 },
  },
  icons: {
    icon: "/favicon.png",
    shortcut: "/favicon.png",
    apple: "/favicon.png",
  },
  openGraph: {
    type: "website",
    locale: siteConfig.locale,
    siteName: siteConfig.name,
    title: siteConfig.title,
    description: siteConfig.description,
    images: [{ url: "/og-image.png", width: 1200, height: 630, alt: siteConfig.title }],
  },
  twitter: {
    card: "summary_large_image",
    creator: "@devahsanali",
    images: ["/og-image.png"],
  },
};

export default function RootLayout({ children }) {
  return (
    <html lang="en" className="dark overflow-x-hidden">
      <head>
        <link
          href="https://fonts.googleapis.com/css2?family=Inter:wght@400;500;600&family=Geist:wght@400;500;600;700;800&display=swap"
          rel="stylesheet"
        />
        <link
          href="https://fonts.googleapis.com/css2?family=Material+Symbols+Outlined:wght,FILL@100..700,0..1&display=swap"
          rel="stylesheet"
        />
      </head>
      <body className="font-body-md text-on-surface antialiased bg-surface-dim overflow-x-hidden">
        <JsonLd data={organizationSchema()} />
        <JsonLd data={personSchema()} />
        <JsonLd data={websiteSchema()} />
        <div id="stream-container" className="fixed inset-0 pointer-events-none overflow-hidden z-0" />
        <div
          className="floating-orb w-[600px] h-[600px] bg-primary top-[-10%] right-[-10%]"
          id="orb-1"
        />
        <div
          className="floating-orb w-[500px] h-[500px] bg-secondary bottom-[-10%] left-[-10%]"
          id="orb-2"
        />
        <VisualEffects />
        <Header />
        <main className="relative">{children}</main>
        <Footer />
        <Analytics />
        <GoogleAnalytics />
      </body>
    </html>
  );
}

