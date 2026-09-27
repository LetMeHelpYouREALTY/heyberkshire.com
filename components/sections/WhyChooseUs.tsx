import { Shield, TrendingUp, Users, Award, Clock, Home } from "lucide-react";
import Link from "next/link";
import CtaActions from "@/components/sections/CtaActions";
import HeadingPhoto from "@/components/sections/HeadingPhoto";
import { ctaPhone, nap } from "@/lib/contact";
import { photos } from "@/lib/media";

const features = [
  {
    icon: Shield,
    title: "Berkshire Hathaway Backing",
    description:
      "The only real estate brand backed by Berkshire Hathaway Inc. Integrity you can verify.",
  },
  {
    icon: TrendingUp,
    title: "Las Vegas Market Data",
    description: "Neighborhood-level pricing, days on market, and comps — not generic metro averages.",
  },
  {
    icon: Users,
    title: "Direct Access to Dr. Jan",
    description: "Call or text (702) 222-1964. No call center, no assistant queue.",
  },
  {
    icon: Award,
    title: "$127M+ Closed",
    description: "500+ transactions since 2008 across Las Vegas, Henderson, and Summerlin.",
  },
  {
    icon: Clock,
    title: "Same-Day Response",
    description: "Showings, offer strategy, and listing prep on your timeline.",
  },
  {
    icon: Home,
    title: "Buy, Sell, Relocate",
    description: "One agent for first homes, luxury, 55+, new construction, and investment.",
  },
];

export default function WhyChooseUs() {
  return (
    <section
      className="py-16 md:py-24 bg-white"
      aria-labelledby="why-choose-heading"
      data-why-choose-us="/"
    >
      <div className="container mx-auto px-4">
        <div className="text-center mb-12 max-w-4xl mx-auto">
          <h2
            id="why-choose-heading"
            className="text-3xl md:text-4xl lg:text-5xl font-bold text-slate-900 mb-4 scroll-mt-32"
          >
            Start at 9406 W Lake Mead Blvd — then we drive Summerlin or Henderson
          </h2>
          <HeadingPhoto path="/" level="h2" photo={photos.agent} priority />
          <p className="text-xl text-slate-600 max-w-3xl mx-auto">
            Appointments start at Berkshire Hathaway HomeServices Nevada Properties,
            Suite 100. We sequence the tour from this desk — not a call center.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-6xl mx-auto">
          {features.map((feature) => {
            const Icon = feature.icon;
            return (
              <div
                key={feature.title}
                className="flex flex-col items-center text-center p-6 rounded-lg hover:bg-slate-50 transition-colors"
              >
                <div className="bg-blue-100 rounded-full p-4 mb-4">
                  <Icon className="h-8 w-8 text-blue-600" aria-hidden="true" />
                </div>
                <h3 className="text-xl font-bold text-slate-900 mb-2">{feature.title}</h3>
                <p className="text-slate-600">{feature.description}</p>
              </div>
            );
          })}
        </div>
        <p className="text-sm text-slate-600 mt-10 mb-6 text-center">
          {nap.brokerage} · {nap.fullAddress} · Call or text {ctaPhone.display}.
        </p>
        <CtaActions variant="onLight" />
        <div className="text-center mt-10">
          <Link href="/about" className="inline-flex text-blue-600 hover:text-blue-800 font-semibold">
            Meet Dr. Jan Duffy →
          </Link>
        </div>
      </div>
    </section>
  );
}
