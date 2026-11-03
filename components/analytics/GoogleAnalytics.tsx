import Script from "next/script";
import LeadEventTracker from "./LeadEventTracker";

/** GA4 tag for one measurement ID, plus the sitewide lead event listeners. */
export default function GoogleAnalytics({
  measurementId,
}: {
  measurementId: string;
}) {
  return (
    <>
      <Script
        src={`https://www.googletagmanager.com/gtag/js?id=${measurementId}`}
        strategy="afterInteractive"
      />
      <Script id="ga4-init" strategy="afterInteractive">{`
        window.dataLayer = window.dataLayer || [];
        function gtag(){dataLayer.push(arguments);}
        window.gtag = gtag;
        gtag('js', new Date());
        gtag('config', '${measurementId}');
      `}</Script>
      <LeadEventTracker />
    </>
  );
}
