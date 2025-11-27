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
    <header className="border-b border-[#d9cfc0]/80 bg-white/80 backdrop-blur">
      {/* Top bar */}
      <div className="bg-[var(--navy)] text-[#f4fbf2]">
        <div className="mx-auto flex max-w-6xl flex-col items-center gap-3 px-4 py-3 text-sm sm:flex-row sm:justify-between">
          <div className="flex flex-wrap items-center justify-center gap-4">
            <a
              href="tel:(303) 377-7744"
              className="flex items-center gap-2 font-semibold text-[#f4fbf2] hover:text-[var(--gold)]"
            >
              <Phone className="h-4 w-4" />
              (303) 377-7744
            </a>
            <a
              href="sms:(720) 864-1333"
              className="flex items-center gap-2 font-semibold text-[#f4fbf2] hover:text-[var(--gold)]"
            >
              <MessageCircle className="h-4 w-4" />
              (720) 864-1333
            </a>
            <span className="flex items-center gap-2 text-[#c5e2c7]">
              <Clock className="h-4 w-4" />
              Mon–Thu 7a-5p • Fri Closed
            </span>
          </div>
          <p className="text-[#c5e2c7]">5055 E Kentucky Ave, Denver</p>
        </div>
      </div>

      <div className="mx-auto flex max-w-6xl items-center gap-4 px-4 py-4">
        <Link href="/" className="flex-shrink-0">
          <Image src="/logo.avif" alt="Cherry Creek South Dental" width={260} height={72} priority className="h-16 w-auto" />
        </Link>
        <nav className="hidden flex-1 items-center justify-center gap-6 text-sm font-medium text-[var(--stone)] md:flex">
          {navigation.map((item) => (
            <Link key={item.name} href={item.href} className="transition hover:text-[var(--gold)]">
              {item.name}
            </Link>
          ))}
          <a
            href="tel:(303) 377-7744"
            className="rounded-full border border-[var(--gold)] px-5 py-2 text-[var(--gold)] transition hover:bg-[var(--gold)] hover:text-white"
          >
            Call Now
          </a>
        </nav>
        <button
          onClick={() => setIsMenuOpen(!isMenuOpen)}
          className="ml-auto rounded-full border border-[var(--navy)] p-2 text-[var(--navy)] md:hidden"
        >
          {isMenuOpen ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
        </button>
      </div>

      {isMenuOpen && (
        <div className="border-t border-[#e8dfd1] bg-white/95 px-4 pb-6 pt-4 md:hidden">
          <nav className="flex flex-col gap-3 text-sm font-medium text-[var(--navy)]">
            {navigation.map((item) => (
              <Link
                key={item.name}
                href={item.href}
                className="rounded-lg border border-transparent px-3 py-2 hover:border-[var(--gold)]"
                onClick={() => setIsMenuOpen(false)}
              >
                {item.name}
              </Link>
            ))}
            <a
              href="tel:(303) 377-7744"
              className="rounded-full bg-[var(--gold)] px-4 py-2 text-center font-semibold text-white"
            >
              Call Now
            </a>
          </nav>
        </div>
      )}
    </header>
  );
}
