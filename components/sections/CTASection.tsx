import Link from "next/link";
import { Button } from "@/components/ui/button";
import { Phone, Mail, Home } from "lucide-react";
import { ctaPhone } from "@/lib/contact";

export default function CTASection() {
  return (
    <section className="py-16 md:py-24 bg-gradient-to-r from-blue-600 to-blue-700 text-white">
      <div className="container mx-auto px-4">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold mb-6">
            Ready to Find Your Next Home?
          </h2>
          <p className="text-xl text-blue-100 mb-8 max-w-2xl mx-auto">
            Get expert guidance from Dr. Jan Duffy. Call or text {ctaPhone.display} — she answers
            her own phone.
          </p>

          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center mb-8">
            <Button asChild size="lg" className="bg-white text-blue-600 hover:bg-blue-50">
              <Link href="/listings" className="flex items-center gap-2">
                <Home className="h-5 w-5" aria-hidden="true" />
                Browse Las Vegas Homes
              </Link>
            </Button>
            <Button
              asChild
              size="lg"
              variant="outline"
              className="border-white text-white hover:bg-white/10"
            >
              <Link href="/contact" className="flex items-center gap-2">
                <Mail className="h-5 w-5" aria-hidden="true" />
                Send a Message
              </Link>
            </Button>
            <Button
              asChild
              size="lg"
              variant="outline"
              className="border-white text-white hover:bg-white/10"
            >
              <a href={ctaPhone.href} className="flex items-center gap-2">
                <Phone className="h-5 w-5" aria-hidden="true" />
                Call {ctaPhone.display}
              </a>
            </Button>
          </div>

          <div className="flex flex-wrap justify-center gap-6 text-blue-100 text-sm">
            <span className="font-semibold text-white">Free Consultation</span>
            <span className="font-semibold text-white">No Obligation</span>
            <span className="font-semibold text-white">Licensed in Nevada</span>
          </div>
        </div>
      </div>
    </section>
  );
}
