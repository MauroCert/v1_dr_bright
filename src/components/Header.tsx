'use client';

import Image from 'next/image';
import Link from 'next/link';
import { useState } from 'react';
import { Phone, MessageCircle, Menu, X, Clock } from 'lucide-react';

export default function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const navigation = [
    { name: 'Home', href: '/' },
    { name: 'About', href: '/about' },
    { name: 'Services', href: '/services' },
    { name: 'Patient Info', href: '/patient-info' },
    { name: 'Membership', href: '/membership' },
    { name: 'Blog', href: '/blog' },
    { name: 'Contact', href: '/contact' },
  ];

  return (
    <header className="sticky top-0 z-50 bg-white/90 backdrop-blur-md">
      {/* Top bar with gradient */}
      <div className="bg-gradient-to-r from-[var(--navy)] via-[var(--denim)] to-[var(--navy)] text-white">
        <div className="mx-auto flex max-w-6xl flex-col items-center gap-2 px-4 py-2.5 text-sm sm:flex-row sm:justify-between">
          <div className="flex flex-wrap items-center justify-center gap-6">
            <a
              href="tel:(303) 377-7744"
              className="flex items-center gap-2 font-medium text-white/90 hover:text-[var(--gold)] transition-colors"
            >
              <Phone className="h-3.5 w-3.5" />
              (303) 377-7744
            </a>
            <a
              href="sms:(720) 864-1333"
              className="flex items-center gap-2 font-medium text-white/90 hover:text-[var(--gold)] transition-colors"
            >
              <MessageCircle className="h-3.5 w-3.5" />
              (720) 864-1333
            </a>
            <span className="flex items-center gap-2 text-white/70">
              <Clock className="h-3.5 w-3.5" />
              Mon–Thu 7a-5p
            </span>
          </div>
          <p className="text-white/70 text-xs sm:text-sm">5055 E Kentucky Ave, Denver</p>
        </div>
      </div>

      {/* Main navigation */}
      <div className="mx-auto flex max-w-6xl items-center gap-4 px-4 py-4">
        <Link href="/" className="flex-shrink-0">
          <Image 
            src="/logo.avif" 
            alt="Cherry Creek South Dental" 
            width={220} 
            height={60} 
            priority 
            className="h-14 w-auto" 
          />
        </Link>
        
        <nav className="hidden flex-1 items-center justify-end gap-1 text-sm font-medium text-[var(--stone)] lg:flex">
          {navigation.map((item) => (
            <Link 
              key={item.name} 
              href={item.href} 
              className="px-4 py-2 rounded-full transition-colors hover:text-[var(--navy)] hover:bg-[var(--mint)]"
            >
              {item.name}
            </Link>
          ))}
          <a
            href="tel:(303) 377-7744"
            className="ml-2 rounded-full bg-[var(--gold)] px-5 py-2.5 text-white font-semibold transition hover:bg-[var(--navy)]"
          >
            Book Now
          </a>
        </nav>
        
        <button
          onClick={() => setIsMenuOpen(!isMenuOpen)}
          className="ml-auto rounded-full p-2.5 text-[var(--navy)] hover:bg-[var(--mint)] transition-colors lg:hidden"
          aria-label="Toggle menu"
        >
          {isMenuOpen ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
        </button>
      </div>

      {/* Mobile menu with animation */}
      {isMenuOpen && (
        <div className="border-t border-[var(--mint)] bg-white/98 backdrop-blur-sm px-4 pb-6 pt-4 lg:hidden">
          <nav className="flex flex-col gap-1">
            {navigation.map((item) => (
              <Link
                key={item.name}
                href={item.href}
                className="rounded-xl px-4 py-3 text-[var(--stone)] hover:bg-[var(--mint)] hover:text-[var(--navy)] transition-colors"
                onClick={() => setIsMenuOpen(false)}
              >
                {item.name}
              </Link>
            ))}
            <a
              href="tel:(303) 377-7744"
              className="mt-2 rounded-full bg-[var(--gold)] px-4 py-3 text-center font-semibold text-white hover:bg-[var(--navy)] transition-colors"
            >
              Book Now
            </a>
          </nav>
        </div>
      )}
    </header>
  );
}
