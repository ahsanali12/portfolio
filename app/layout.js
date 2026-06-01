import "./globals.css";
import { Header } from "@/components/layout/Header";
import { Footer } from "@/components/layout/Footer";
import { VisualEffects } from "@/components/layout/VisualEffects";
import { JsonLd } from "@/components/seo/JsonLd";
import { organizationSchema, personSchema, websiteSchema } from "@/lib/seo";
import { siteConfig } from "@/config/site";

export const metadata = {
  title: siteConfig.title,
  description: siteConfig.description,
  metadataBase: new URL(siteConfig.siteUrl),
  icons: {
    icon: "/favicon.png",
    shortcut: "/favicon.png",
    apple: "/favicon.png",
  },
  openGraph: {
    images: [
      {
        url: "/favicon.png",
        width: 200,
        height: 200,
      },
    ],
  },
};

export default function RootLayout({ children }) {
  return (
    <html lang="en" className="dark">
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
      </body>
    </html>
  );
}

