"use client";

import Link from "next/link";
import Image from "next/image";

const Footer = () => {
  return (
    <footer className="bg-primary text-white">
      <div className="container-custom py-12">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {/* Company Info */}
          <div className="space-y-6">
            <Link href="/" className="inline-block">
              <Image
                src="https://ext.same-assets.com/2489225554/2676562456.png"
                alt="Homecroo"
                width={180}
                height={50}
                className="object-contain"
                priority
              />
            </Link>
            <p className="text-sm text-white/80 max-w-md">
              Empowering independent cleaning businesses to grow by providing innovative support and administrative solutions to enable you to manage your business more effectively and in less time.
            </p>
          </div>

          {/* Company Links */}
          <div>
            <h3 className="text-lg font-semibold mb-6">Company</h3>
            <ul className="space-y-3">
              <li>
                <Link href="/terms-and-conditions" className="text-white/80 hover:text-white transition-colors">
                  Terms & Conditions
                </Link>
              </li>
              <li>
                <Link href="/privacy-policy-2" className="text-white/80 hover:text-white transition-colors">
                  Privacy Policy
                </Link>
              </li>
              <li>
                <Link href="/cookies-policy" className="text-white/80 hover:text-white transition-colors">
                  Cookie Policy
                </Link>
              </li>
              <li>
                <Link href="/contact-us" className="text-white/80 hover:text-white transition-colors">
                  Contact Us
                </Link>
              </li>
              <li>
                <Link href="/about-homecroo" className="text-white/80 hover:text-white transition-colors">
                  About Us
                </Link>
              </li>
            </ul>
          </div>

          {/* Contact Info */}
          <div>
            <h3 className="text-lg font-semibold mb-6">Contact Us</h3>
            <div className="space-y-3 text-white/80">
              <p>Mailing Address: 23 Morven Road, Leura, NSW, 2780</p>
              <p>Email: pmuldoon@softwareholdings.com.au</p>
              <p>ABN: 62 002 098 348</p>
              <p className="mt-6">All Rights Reserved:- Software Holdings Pty Ltd, 2025</p>
            </div>
          </div>
        </div>
      </div>

      {/* Scroll to Top Button */}
      <div className="text-right pr-8 pb-4">
        <button
          onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
          className="inline-flex items-center justify-center w-10 h-10 bg-white/10 hover:bg-white/20 rounded-full"
          aria-label="Scroll to top"
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="20"
            height="20"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round"
          >
            <path d="m18 15-6-6-6 6"/>
          </svg>
        </button>
      </div>
    </footer>
  );
};

export default Footer;
