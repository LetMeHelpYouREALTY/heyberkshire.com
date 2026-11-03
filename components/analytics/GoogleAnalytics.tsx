import Script from "next/script";
import LeadEventTracker from "./LeadEventTracker";

/** GA4 tag for the host's measurement IDs, plus the sitewide lead event listeners. */
export default function GoogleAnalytics({
  measurementIds,
  siteName,
}: {
  measurementIds: string[];
  siteName: string;
}) {
  const configs = measurementIds
    .map(
      (id) =>
        `gtag('config', '${id}', { site_name: ${JSON.stringify(siteName)} });`,
    )
    .join("\n");
  return (
    <>
      <Script
        src={`https://www.googletagmanager.com/gtag/js?id=${measurementIds[0]}`}
        strategy="afterInteractive"
      />
      <Script id="ga4-init" strategy="afterInteractive">{`
        window.dataLayer = window.dataLayer || [];
        function gtag(){dataLayer.push(arguments);}
        window.gtag = gtag;
        gtag('js', new Date());
        ${configs}
      `}</Script>
      <LeadEventTracker />
    </>
  );
}
