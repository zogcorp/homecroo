"use client";

import Link from "next/link";
import Image from "next/image";
import { useState } from "react";
import { Menu, X } from "lucide-react";

const Header = () => {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  return (
    <header className="bg-primary text-white py-4">
      <div className="container-custom">
        <div className="flex items-center justify-between">
          {/* Logo */}
          <Link href="/" className="flex items-center space-x-2">
            <Image
              src="https://ext.same-assets.com/2489225554/2676562456.png"
              alt="Homecroo"
              width={150}
              height={40}
              className="object-contain"
              priority
            />
          </Link>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex items-center space-x-1">
            <Link href="/" className="nav-link text-white hover:text-white/80">Home</Link>
            <Link href="/about-homecroo" className="nav-link text-white hover:text-white/80">About Us</Link>
            <Link href="/terms-and-conditions" className="nav-link text-white hover:text-white/80">Our Policy</Link>
          </nav>

          {/* Desktop Action Buttons */}
          <div className="hidden md:flex items-center space-x-3">
            <Link href="/admin-login" className="flex items-center space-x-1 bg-white/20 rounded-full px-4 py-2 text-sm text-white hover:bg-white/30 transition-colors">
              <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" viewBox="0 0 16 16" className="mr-1">
                <path d="M8 8a3 3 0 1 0 0-6 3 3 0 0 0 0 6zm2-3a2 2 0 1 1-4 0 2 2 0 0 1 4 0zm4 8c0 1-1 1-1 1H3s-1 0-1-1 1-4 6-4 6 3 6 4zm-1-.004c-.001-.246-.154-.986-.832-1.664C11.516 10.68 10.289 10 8 10c-2.29 0-3.516.68-4.168 1.332-.678.678-.83 1.418-.832 1.664h10z"/>
              </svg>
              Admin Login
            </Link>
            <Link href="/contact-us" className="flex items-center space-x-1 bg-white/20 rounded-full px-4 py-2 text-sm text-white hover:bg-white/30 transition-colors">
              Contact Support
            </Link>
            <Link href="/marketplace" className="bg-white text-primary rounded-full px-4 py-2 text-sm font-medium hover:bg-white/90 transition-colors">
              Marketplace
            </Link>
            <Link href="/contractor-registration" className="bg-white text-primary rounded-full px-4 py-2 text-sm font-medium hover:bg-white/90 transition-colors">
              Registration
            </Link>
          </div>

          {/* Mobile Menu Button */}
          <button
            className="md:hidden text-white p-2"
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
          >
            {mobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>

        {/* Mobile Menu */}
        {mobileMenuOpen && (
          <div className="md:hidden mt-4 py-4 bg-primary/95 rounded-md">
            <nav className="flex flex-col space-y-2 px-4">
              <Link href="/" className="py-2" onClick={() => setMobileMenuOpen(false)}>Home</Link>
              <Link href="/about-homecroo" className="py-2" onClick={() => setMobileMenuOpen(false)}>About Us</Link>
              <Link href="/terms-and-conditions" className="py-2" onClick={() => setMobileMenuOpen(false)}>Our Policy</Link>
              <div className="h-px bg-white/20 my-2" />
              <Link href="/admin-login" className="py-2 flex items-center" onClick={() => setMobileMenuOpen(false)}>
                <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" viewBox="0 0 16 16" className="mr-2">
                  <path d="M8 8a3 3 0 1 0 0-6 3 3 0 0 0 0 6zm2-3a2 2 0 1 1-4 0 2 2 0 0 1 4 0zm4 8c0 1-1 1-1 1H3s-1 0-1-1 1-4 6-4 6 3 6 4zm-1-.004c-.001-.246-.154-.986-.832-1.664C11.516 10.68 10.289 10 8 10c-2.29 0-3.516.68-4.168 1.332-.678.678-.83 1.418-.832 1.664h10z"/>
                </svg>
                Admin Login
              </Link>
              <Link href="/contact-us" className="py-2" onClick={() => setMobileMenuOpen(false)}>Contact Support</Link>
              <Link href="/marketplace" className="py-2" onClick={() => setMobileMenuOpen(false)}>Marketplace</Link>
              <Link href="/contractor-registration" className="py-2" onClick={() => setMobileMenuOpen(false)}>Registration</Link>
            </nav>
          </div>
        )}
      </div>

      {/* Sub Menu (Book Your Clean, Registration, etc.) - Desktop Only */}
      <div className="hidden md:block bg-primary/90 mt-4">
        <div className="container-custom py-2">
          <div className="flex justify-center space-x-4">
            <Link href="/book-here" className="text-white hover:text-white/80 text-sm font-medium">
              Book Your Clean Here
            </Link>
            <Link href="/contractor-registration" className="text-white hover:text-white/80 text-sm font-medium">
              Registration
            </Link>
            <Link href="/contact-us" className="text-white hover:text-white/80 text-sm font-medium">
              Contact Support
            </Link>
            <Link href="/marketplace" className="text-white hover:text-white/80 text-sm font-medium">
              Visit Marketplace Now
            </Link>
          </div>
        </div>
      </div>
    </header>
  );
};

export default Header;
