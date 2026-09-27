import type { Metadata } from "next";
import { GeistSans } from "geist/font/sans";
import "./globals.css";
import { headers } from "next/headers";
import { getDomainConfig } from "@/lib/domain-config";
import { Analytics } from "@vercel/analytics/react";
import Script from "next/script";
import Navbar from "@/components/layouts/Navbar";
import Footer from "@/components/layouts/Footer";
import SkipLink from "@/components/shared/SkipLink";
import SchemaScript from "@/components/SchemaScript";
import AIChatWidget from "@/components/chat/AIChatWidget";
import MobileStickyCTA from "@/components/layouts/MobileStickyCTA";
import InnerPageChrome from "@/components/layouts/InnerPageChrome";
import { absoluteUrl } from "@/lib/seo";
import { photos } from "@/lib/media";
import {
  generateOrganizationSchema,
  generateWebSiteSchema,
  combineSchemas,
} from "@/lib/schema";
import { generateLocalBusinessSchema } from "@/lib/gbp-schema";
import { realscout, SITE_URL, nap } from "@/lib/contact";

export async function generateMetadata(): Promise<Metadata> {
  const domain = headers().get("x-domain") || "";
  const pathname = headers().get("x-pathname") || "/";
  const config = getDomainConfig(domain);
  const title = `${config.neighborhood} Real Estate | Dr. Jan Duffy, REALTOR® | BHHS Nevada`;
  const canonical = absoluteUrl(pathname);
  return {
    metadataBase: new URL(SITE_URL),
    title,
    description: config.description,
    keywords: config.keywords,
    authors: [{ name: nap.shortName }],
    creator: nap.shortName,
    robots: { index: true, follow: true },
    alternates: { canonical },
    openGraph: {
      type: "website",
      url: canonical,
      locale: "en_US",
      siteName: nap.brokerage,
      images: [{ url: absoluteUrl(photos.homeHero.src), alt: photos.homeHero.alt }],
    },
    twitter: {
      card: "summary_large_image",
      images: [absoluteUrl(photos.homeHero.src)],
    },
  };
}

const siteSchemas = combineSchemas(
  generateLocalBusinessSchema(),
  generateOrganizationSchema(),
  generateWebSiteSchema()
);

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en" className={GeistSans.className}>
      <head>
        <link rel="preconnect" href="https://em.realscout.com" />
        <link rel="dns-prefetch" href="https://em.realscout.com" />
        <link rel="dns-prefetch" href="https://www.realscout.com" />
        <link rel="dns-prefetch" href="https://assets.calendly.com" />
        <link rel="stylesheet" href="https://assets.calendly.com/assets/external/widget.css" />
      </head>
      <body className="bg-white text-slate-900 antialiased pb-16 md:pb-0">
        <SkipLink />
        <SchemaScript schema={siteSchemas} id="site-schema" />
        <Navbar />
        <InnerPageChrome>{children}</InnerPageChrome>
        <Footer />
        <MobileStickyCTA />
        <AIChatWidget />
        <Analytics />
        <Script
          src={realscout.scriptSrc}
          type="module"
          strategy="afterInteractive"
        />
        <Script
          src="https://assets.calendly.com/assets/external/widget.js"
          strategy="afterInteractive"
        />
        <Script id="widget-tracker" strategy="afterInteractive">{`
          (function(w,i,d,g,e,t){w["WidgetTrackerObject"]=g;(w[g]=w[g]||function()
          {(w[g].q=w[g].q||[]).push(arguments);}),(w[g].ds=1*new Date());(e="script"),
          (t=d.createElement(e)),(e=d.getElementsByTagName(e)[0]);t.async=1;t.src=i;
          e.parentNode.insertBefore(t,e);})
          (window,"https://widgetbe.com/agent",document,"widgetTracker");
          window.widgetTracker("create","WT-XQHVYQWW");
          window.widgetTracker("send","pageview");
        `}</Script>
      </body>
    </html>
  );
}
