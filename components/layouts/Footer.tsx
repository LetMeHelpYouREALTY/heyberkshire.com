import Link from "next/link";
import {
  Phone,
  Mail,
  MapPin,
  Clock,
  Facebook,
  Instagram,
  Linkedin,
  Youtube,
  Navigation,
  Star,
} from "lucide-react";
import {
  ctaPhone,
  officePhone,
  nap,
  businessHours,
  maps,
  googleReviewsUrl,
  socialProfiles,
  SITE_URL,
} from "@/lib/contact";
import MlsDisclaimer from "@/components/shared/MlsDisclaimer";

export default function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-slate-900 text-white">
      <div className="container mx-auto px-4 py-12 md:py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 lg:gap-12">
          <div>
            <h2 className="font-bold text-xl mb-4">Berkshire Hathaway HomeServices</h2>
            <p className="text-slate-300 mb-4 text-sm">
              Nevada Properties — Dr. Jan Duffy, REALTOR®. Buying, selling, and relocating in Las
              Vegas, Henderson, and Summerlin.
            </p>
            <address className="not-italic text-slate-300 text-sm mb-4">
              {nap.street}
              <br />
              {nap.city}, {nap.state} {nap.zip}
            </address>
            <div className="flex space-x-3">
              <a
                href={socialProfiles.facebook}
                target="_blank"
                rel="noopener noreferrer"
                className="text-slate-400 hover:text-white transition-colors p-2 min-h-[44px] min-w-[44px] inline-flex items-center justify-center"
                aria-label="Facebook"
              >
                <Facebook className="h-5 w-5" aria-hidden="true" />
              </a>
              <a
                href={socialProfiles.instagram}
                target="_blank"
                rel="noopener noreferrer"
                className="text-slate-400 hover:text-white transition-colors p-2 min-h-[44px] min-w-[44px] inline-flex items-center justify-center"
                aria-label="Instagram"
              >
                <Instagram className="h-5 w-5" aria-hidden="true" />
              </a>
              <a
                href={socialProfiles.linkedin}
                target="_blank"
                rel="noopener noreferrer"
                className="text-slate-400 hover:text-white transition-colors p-2 min-h-[44px] min-w-[44px] inline-flex items-center justify-center"
                aria-label="LinkedIn"
              >
                <Linkedin className="h-5 w-5" aria-hidden="true" />
              </a>
              <a
                href={socialProfiles.youtube}
                target="_blank"
                rel="noopener noreferrer"
                className="text-slate-400 hover:text-white transition-colors p-2 min-h-[44px] min-w-[44px] inline-flex items-center justify-center"
                aria-label="YouTube"
              >
                <Youtube className="h-5 w-5" aria-hidden="true" />
              </a>
            </div>
          </div>

          <div>
            <h2 className="font-bold text-lg mb-4">Explore</h2>
            <ul className="space-y-2">
              {[
                { href: "/listings", label: "Las Vegas Homes for Sale" },
                { href: "/neighborhoods", label: "Las Vegas Neighborhoods" },
                { href: "/luxury-homes", label: "Luxury Homes" },
                { href: "/55-plus-communities", label: "55+ Communities" },
                { href: "/new-construction", label: "New Construction" },
                { href: "/market-report", label: "Las Vegas Market Report" },
                { href: "/why-berkshire-hathaway", label: "Why BHHS" },
                { href: "/about", label: "About Dr. Jan Duffy" },
              ].map((link) => (
                <li key={link.href}>
                  <Link
                    href={link.href}
                    className="text-slate-300 hover:text-white transition-colors text-sm"
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h2 className="font-bold text-lg mb-4">Real Estate Services</h2>
            <ul className="space-y-2">
              {[
                { href: "/buyers", label: "Home Buying" },
                { href: "/buyers/california-relocator", label: "California Relocators" },
                { href: "/buyers/first-time-buyers", label: "First-Time Buyers" },
                { href: "/sellers", label: "Home Selling" },
                { href: "/home-valuation", label: "Free Home Valuation" },
                { href: "/investment-properties", label: "Investment Properties" },
                { href: "/relocation", label: "Relocation" },
                { href: "/faq", label: "Real Estate FAQ" },
              ].map((link) => (
                <li key={link.href}>
                  <Link
                    href={link.href}
                    className="text-slate-300 hover:text-white transition-colors text-sm"
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h2 className="font-bold text-lg mb-4">Contact Dr. Jan Duffy</h2>
            <ul className="space-y-3">
              <li className="flex items-start">
                <MapPin className="h-5 w-5 mr-3 text-blue-400 flex-shrink-0 mt-0.5" aria-hidden="true" />
                <a
                  href={maps.placeUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-slate-300 hover:text-white transition-colors text-sm"
                >
                  {nap.street}
                  <br />
                  {nap.city}, {nap.state} {nap.zip}
                </a>
              </li>
              <li className="flex items-center">
                <Phone className="h-5 w-5 mr-3 text-blue-400 flex-shrink-0" aria-hidden="true" />
                <a
                  href={ctaPhone.href}
                  className="text-slate-300 hover:text-white transition-colors text-sm font-semibold"
                >
                  Call or text {ctaPhone.display}
                </a>
              </li>
              <li className="flex items-center text-slate-400 text-xs pl-8">
                Office (GBP): {officePhone.display}
              </li>
              <li className="flex items-center">
                <Mail className="h-5 w-5 mr-3 text-blue-400 flex-shrink-0" aria-hidden="true" />
                <a
                  href={nap.emailHref}
                  className="text-slate-300 hover:text-white transition-colors text-sm"
                >
                  {nap.email}
                </a>
              </li>
              <li className="flex items-start">
                <Clock className="h-5 w-5 mr-3 text-blue-400 flex-shrink-0 mt-0.5" aria-hidden="true" />
                <ul className="text-slate-300 text-sm space-y-0.5">
                  {businessHours.map((row) => (
                    <li key={row.day} className="flex justify-between gap-4 tabular-nums">
                      <span>{row.day}</span>
                      <span className="text-slate-400">{row.label}</span>
                    </li>
                  ))}
                </ul>
              </li>
            </ul>
            <div className="flex flex-col gap-2 mt-4">
              <a
                href={ctaPhone.href}
                className="inline-flex items-center justify-center bg-blue-600 hover:bg-blue-500 text-white px-4 py-2 rounded-md text-sm font-semibold"
              >
                Call {ctaPhone.display}
              </a>
              <a
                href={maps.directionsUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center justify-center border border-slate-600 hover:border-white text-slate-200 px-4 py-2 rounded-md text-sm font-semibold"
              >
                <Navigation className="h-4 w-4 mr-2" aria-hidden="true" />
                Directions
              </a>
              <a
                href={googleReviewsUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center justify-center border border-slate-600 hover:border-white text-slate-200 px-4 py-2 rounded-md text-sm font-semibold"
              >
                <Star className="h-4 w-4 mr-2" aria-hidden="true" />
                View Google Reviews
              </a>
            </div>
          </div>
        </div>

        <div className="mt-10 rounded-lg overflow-hidden border border-slate-800">
          <iframe
            title={`Map to ${nap.brokerage} at ${nap.fullAddress}`}
            src={maps.embedSrc}
            className="w-full h-56"
            loading="lazy"
            referrerPolicy="no-referrer-when-downgrade"
          />
        </div>

        <div className="border-t border-slate-800 mt-8 pt-8">
          <div className="flex flex-col md:flex-row justify-between items-center gap-4">
            <p className="text-slate-400 text-sm text-center md:text-left">
              © {currentYear} {nap.brokerage}. All rights reserved.
            </p>
            <div className="flex flex-wrap justify-center gap-4 text-sm">
              <Link href="/faq" className="text-slate-400 hover:text-white transition-colors">
                FAQ
              </Link>
              <Link href="/contact" className="text-slate-400 hover:text-white transition-colors">
                Contact
              </Link>
              <Link
                href="/security-policy"
                className="text-slate-400 hover:text-white transition-colors"
              >
                Security Policy
              </Link>
              <Link href="/sitemap.xml" className="text-slate-400 hover:text-white transition-colors">
                Sitemap
              </Link>
            </div>
          </div>
          <p className="text-slate-500 text-xs mt-4 text-center">
            {nap.shortName}, REALTOR® | License {nap.license} | {nap.brokerage}
          </p>
          <p className="text-slate-500 text-xs mt-2 text-center">
            {nap.fullAddress} · Office {officePhone.display} · Call or text {ctaPhone.display}
          </p>
          <MlsDisclaimer className="mt-4 text-center max-w-4xl mx-auto text-slate-600" />
          <p className="text-slate-600 text-xs mt-3 text-center">
            {SITE_URL.replace("https://", "")} · Equal Housing Opportunity
          </p>
        </div>
      </div>
    </footer>
  );
}
