'use client';

import Link from 'next/link';
import { useState } from 'react';
import { Phone, MessageCircle, Menu, X, Clock, MapPin } from 'lucide-react';

export default function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const navigation = [
    { name: 'Home', href: '/' },
    { name: 'About', href: '/about' },
    { name: 'Services', href: '/services' },
    { name: 'Info for Patients', href: '/patient-info' },
    { name: 'Blogs', href: '/blog' },
    { name: 'Contact', href: '/contact' },
  ];

  return (
    <header className="sticky top-0 z-50 bg-white shadow-sm">
      {/* Top bar - elegant dark green */}
      <div className="bg-[var(--navy)] text-white">
        <div className="mx-auto max-w-6xl px-6 py-2">
          <div className="flex flex-col items-center gap-2 text-xs md:flex-row md:justify-between md:text-sm">
            {/* Address */}
            <a 
              href="https://maps.google.com/?q=5055+E+Kentucky+Ave,+Denver,+CO+80246" 
              target="_blank" 
              rel="noopener noreferrer"
              className="flex items-center gap-2 text-white/80 hover:text-[var(--gold)] transition-colors"
            >
              <MapPin className="h-3.5 w-3.5 flex-shrink-0" />
              <span>5055 E Kentucky Ave, Denver, CO 80246</span>
            </a>
            
            {/* Phone Numbers */}
            <div className="flex items-center gap-3 md:gap-5">
              <a
                href="tel:3033777744"
                className="flex items-center gap-1.5 text-white/80 hover:text-[var(--gold)] transition-colors"
              >
                <Phone className="h-3.5 w-3.5" />
                <span className="font-medium">(303) 377-7744</span>
              </a>
              <span className="text-white/30 hidden md:inline">|</span>
              <a
                href="sms:7208641333"
                className="flex items-center gap-1.5 text-white/80 hover:text-[var(--gold)] transition-colors"
              >
                <MessageCircle className="h-3.5 w-3.5" />
                <span className="font-medium">(720) 864-1333</span>
              </a>
            </div>
            
            {/* Hours */}
            <div className="hidden items-center gap-2 text-white/60 lg:flex">
              <Clock className="h-3.5 w-3.5" />
              <span>Mon 8–5 • Tue 8–4 • Wed 8–4 • Thu 7–1</span>
            </div>
          </div>
        </div>
      </div>

      {/* Main navigation - centered */}
      <div className="relative mx-auto flex max-w-6xl items-center justify-center px-6 py-4">
        <nav className="hidden items-center gap-1 lg:flex">
          {navigation.map((item) => (
            <Link 
              key={item.name} 
              href={item.href} 
              className="relative px-4 py-2 text-sm font-medium text-[var(--stone)] transition-colors hover:text-[var(--navy)] after:absolute after:bottom-0 after:left-1/2 after:h-0.5 after:w-0 after:bg-[var(--gold)] after:-translate-x-1/2 after:transition-all hover:after:w-3/4"
            >
              {item.name}
            </Link>
          ))}
          <a
            href="tel:3033777744"
            className="ml-4 bg-[var(--gold)] px-5 py-2.5 text-sm font-semibold text-white shadow-sm transition-all hover:bg-[var(--navy)] hover:shadow-md"
          >
            Schedule Appointment
          </a>
        </nav>
        
        {/* Mobile menu button */}
        <button
          onClick={() => setIsMenuOpen(!isMenuOpen)}
          className="absolute right-6 p-2 text-[var(--navy)] hover:bg-[var(--mint)] transition-colors lg:hidden"
          aria-label="Toggle menu"
        >
          {isMenuOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
        </button>
      </div>

      {/* Mobile menu */}
      <div 
        className={`overflow-hidden transition-all duration-300 ease-in-out lg:hidden ${
          isMenuOpen ? 'max-h-[400px] opacity-100' : 'max-h-0 opacity-0'
        }`}
      >
        <nav className="border-t border-gray-100 bg-white px-6 pb-6 pt-4">
          <div className="flex flex-col gap-1">
            {navigation.map((item) => (
              <Link
                key={item.name}
                href={item.href}
                className="px-4 py-3 text-[var(--stone)] font-medium hover:bg-[var(--mint)] hover:text-[var(--navy)] transition-colors"
                onClick={() => setIsMenuOpen(false)}
              >
                {item.name}
              </Link>
            ))}
          </div>
          <div className="mt-4 flex flex-col gap-3 border-t border-gray-100 pt-4">
            <a
              href="tel:3033777744"
              className="flex items-center justify-center gap-2 bg-[var(--gold)] px-4 py-3 font-semibold text-white transition-colors hover:bg-[var(--navy)]"
            >
              <Phone className="h-4 w-4" />
              Schedule Appointment
            </a>
            <a
              href="sms:7208641333"
              className="flex items-center justify-center gap-2 border-2 border-[var(--navy)] px-4 py-3 font-semibold text-[var(--navy)] transition-colors hover:bg-[var(--navy)] hover:text-white"
            >
              <MessageCircle className="h-4 w-4" />
              Text Us
            </a>
          </div>
        </nav>
      </div>
    </header>
  );
}
