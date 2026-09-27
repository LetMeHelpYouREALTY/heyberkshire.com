"use client";

import { useState, useEffect, useRef } from "react";
import Link from "next/link";
import { Menu, X, Phone, ChevronDown } from "lucide-react";
import { Button } from "@/components/ui/button";
import { ctaPhone, nap } from "@/lib/contact";
import LocalTrustBar from "@/components/layouts/LocalTrustBar";

export default function Navbar() {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const [isServicesOpen, setIsServicesOpen] = useState(false);
  const servicesRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 10);
    };
    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  useEffect(() => {
    const handlePointerDown = (event: MouseEvent) => {
      if (servicesRef.current && !servicesRef.current.contains(event.target as Node)) {
        setIsServicesOpen(false);
      }
    };
    const handleKeyDown = (event: KeyboardEvent) => {
      if (event.key === "Escape") {
        setIsServicesOpen(false);
        setIsMobileMenuOpen(false);
      }
    };
    document.addEventListener("mousedown", handlePointerDown);
    document.addEventListener("keydown", handleKeyDown);
    return () => {
      document.removeEventListener("mousedown", handlePointerDown);
      document.removeEventListener("keydown", handleKeyDown);
    };
  }, []);

  useEffect(() => {
    document.body.style.overflow = isMobileMenuOpen ? "hidden" : "";
    return () => {
      document.body.style.overflow = "";
    };
  }, [isMobileMenuOpen]);

  const mainNavLinks = [
    { href: "/", label: "Home", external: false },
    { href: "/listings", label: "Homes for Sale", external: false },
    { href: "/neighborhoods", label: "Neighborhoods", external: false },
    { href: "/about", label: "About", external: false },
    { href: "/contact", label: "Contact", external: false },
  ];

  const serviceLinks = [
    { href: "/buyers", label: "Home Buying" },
    { href: "/sellers", label: "Home Selling" },
    { href: "/luxury-homes", label: "Luxury Homes" },
    { href: "/55-plus-communities", label: "55+ Communities" },
    { href: "/new-construction", label: "New Construction" },
    { href: "/investment-properties", label: "Investment Properties" },
    { href: "/relocation", label: "Relocation" },
    { href: "/home-valuation", label: "Home Valuation" },
    { href: "/market-report", label: "Market Report" },
  ];

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 bg-white/95 backdrop-blur-sm shadow-md transition-[padding] duration-300 ${
        isScrolled ? "py-2" : "py-3"
      }`}
    >
      <div className="container mx-auto px-4">
        <div className="flex justify-between items-center gap-4">
          <Link
            href="/"
            className="flex flex-col min-w-0 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-blue-600 focus-visible:ring-offset-2 rounded-md"
            aria-label={`${nap.brokerage} home`}
          >
            <span className="text-lg md:text-xl lg:text-2xl font-bold text-slate-900 hover:text-blue-600 transition-colors leading-tight truncate">
              Berkshire Hathaway
              <span className="text-blue-600"> HomeServices</span>
            </span>
            <span className="text-xs text-slate-500 hidden sm:block">
              Nevada Properties · Dr. Jan Duffy
            </span>
          </Link>

          <nav className="hidden lg:flex items-center space-x-5" aria-label="Primary">
            {mainNavLinks.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                className="text-slate-700 hover:text-blue-600 font-medium transition-colors text-sm focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-blue-600 focus-visible:ring-offset-2 rounded-md px-1 py-1"
              >
                {link.label}
              </Link>
            ))}

            <div className="relative" ref={servicesRef}>
              <button
                type="button"
                className="flex items-center text-slate-700 hover:text-blue-600 font-medium transition-colors text-sm focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-blue-600 focus-visible:ring-offset-2 rounded-md px-2 py-1"
                onClick={() => setIsServicesOpen(!isServicesOpen)}
                onMouseEnter={() => setIsServicesOpen(true)}
                onKeyDown={(e) => {
                  if (e.key === "Enter" || e.key === " ") {
                    e.preventDefault();
                    setIsServicesOpen(!isServicesOpen);
                  }
                }}
                aria-expanded={isServicesOpen}
                aria-haspopup="true"
                aria-controls="services-menu"
              >
                Services
                <ChevronDown className="h-4 w-4 ml-1" aria-hidden="true" />
              </button>

              {isServicesOpen && (
                <div
                  id="services-menu"
                  className="absolute top-full left-0 mt-2 w-56 bg-white rounded-lg shadow-lg py-2 z-50 border border-slate-100"
                  onMouseLeave={() => setIsServicesOpen(false)}
                  role="menu"
                  aria-orientation="vertical"
                >
                  {serviceLinks.map((link) => (
                    <Link
                      key={link.href}
                      href={link.href}
                      className="block px-4 py-2 text-sm text-slate-700 hover:bg-blue-50 hover:text-blue-600 focus-visible:outline-none focus-visible:bg-blue-50 focus-visible:text-blue-600"
                      onClick={() => setIsServicesOpen(false)}
                      role="menuitem"
                    >
                      {link.label}
                    </Link>
                  ))}
                </div>
              )}
            </div>

            <Button asChild className="bg-blue-600 hover:bg-blue-700">
              <a href={ctaPhone.href} className="flex items-center gap-2">
                <Phone className="h-4 w-4" aria-hidden="true" />
                <span className="hidden xl:inline">{ctaPhone.display}</span>
                <span className="xl:hidden">Call</span>
              </a>
            </Button>
          </nav>

          <div className="lg:hidden flex items-center gap-3">
            <Button asChild size="sm" className="bg-blue-600 hover:bg-blue-700">
              <a href={ctaPhone.href} aria-label={`Call Dr. Jan Duffy at ${ctaPhone.display}`}>
                <Phone className="h-4 w-4" aria-hidden="true" />
              </a>
            </Button>
            <button
              type="button"
              className="text-slate-700 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-blue-600 focus-visible:ring-offset-2 rounded-md p-2 min-h-[44px] min-w-[44px]"
              onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
              aria-label={isMobileMenuOpen ? "Close menu" : "Open menu"}
              aria-expanded={isMobileMenuOpen}
              aria-controls="mobile-nav"
            >
              {isMobileMenuOpen ? (
                <X size={24} aria-hidden="true" />
              ) : (
                <Menu size={24} aria-hidden="true" />
              )}
            </button>
          </div>
        </div>

        {isMobileMenuOpen && (
          <nav
            id="mobile-nav"
            className="lg:hidden mt-4 pb-4 border-t border-slate-200 max-h-[calc(100dvh-5rem)] overflow-y-auto overscroll-contain"
            aria-label="Mobile"
          >
            <div className="flex flex-col space-y-1 pt-4">
              {mainNavLinks.map((link) => (
                <Link
                  key={link.href}
                  href={link.href}
                  className="text-slate-700 hover:text-blue-600 hover:bg-blue-50 font-medium transition-colors py-3 px-3 rounded min-h-[44px]"
                  onClick={() => setIsMobileMenuOpen(false)}
                >
                  {link.label}
                </Link>
              ))}

              <div className="border-t border-slate-200 pt-2 mt-2">
                <span className="text-xs font-semibold text-slate-500 px-3 uppercase">
                  Services
                </span>
                {serviceLinks.map((link) => (
                  <Link
                    key={link.href}
                    href={link.href}
                    className="text-slate-700 hover:text-blue-600 hover:bg-blue-50 font-medium transition-colors py-3 px-3 rounded block min-h-[44px]"
                    onClick={() => setIsMobileMenuOpen(false)}
                  >
                    {link.label}
                  </Link>
                ))}
              </div>

              <div className="pt-4">
                <Button asChild className="bg-blue-600 hover:bg-blue-700 w-full">
                  <a href={ctaPhone.href} className="flex items-center justify-center gap-2">
                    <Phone className="h-4 w-4" aria-hidden="true" />
                    Call Dr. Jan: {ctaPhone.display}
                  </a>
                </Button>
              </div>
            </div>
          </nav>
        )}
      </div>
      <LocalTrustBar />
    </header>
  );
}
