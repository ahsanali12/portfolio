import Script from "next/script";
import { siteConfig } from "@/config/site";

// Google Analytics 4. Renders nothing until a measurement ID is configured.
export function GoogleAnalytics() {
  const id = siteConfig.gaMeasurementId;
  if (!id) return null;
  return (
    <>
      <Script src={`https://www.googletagmanager.com/gtag/js?id=${id}`} strategy="afterInteractive" />
      <Script id="ga4-init" strategy="afterInteractive">
        {`window.dataLayer = window.dataLayer || [];
function gtag(){dataLayer.push(arguments);}
gtag('js', new Date());
gtag('config', '${id}', { anonymize_ip: true });`}
      </Script>
    </>
  );
}
