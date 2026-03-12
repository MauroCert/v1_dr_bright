'use client';

import Link from 'next/link';
import { useState, useRef, useEffect } from 'react';
import { Phone, MessageCircle, Menu, X, Clock, MapPin, ChevronDown } from 'lucide-react';

type NavChild = {
  name: string;
  href: string;
  external?: boolean;
};

type NavItem = {
  name: string;
  href?: string;
  external?: boolean;
  children?: NavChild[];
};

const navigation: NavItem[] = [
  { name: 'Home', href: '/' },
  {
    name: 'About',
    children: [
      { name: 'Dr. Bright', href: '/about/dr-bright' },
      { name: 'Meet the Team', href: '/about/meet-the-team' },
    ],
  },
  {
    name: 'Services',
    href: '/services',
    children: [
      { name: 'General Dentistry', href: '/services/general-dentistry' },
      { name: 'Cosmetic Dentistry', href: '/services/cosmetic-dentistry' },
      { name: 'Invisalign®', href: '/services/invisalign' },
      { name: 'Dental Implants', href: '/services/restorative-dentistry' },
      { name: 'Emergency Dentistry', href: '/services/emergency-dentistry' },
      { name: 'Sedation Dentistry', href: '/services/sedation-dentistry' },
      { name: 'Extractions', href: '/services/extractions' },
    ],
  },
  {
    name: 'Info for Patients',
    children: [
      { name: 'Membership Plan', href: '/patient-info/membership-plan' },
      { name: 'Insurances', href: '/patient-info/insurances' },
    ],
  },
  { name: 'Forms', href: 'https://cherrycreeksouthdental.com/forms', external: true },
  { name: 'Blogs', href: '/blog' },
  { name: 'Contact', href: '/contact' },
];

function DesktopDropdown({ item }: { item: NavItem }) {
  const [open, setOpen] = useState(false);
  const timeout = useRef<ReturnType<typeof setTimeout> | null>(null);

  const handleEnter = () => {
    if (timeout.current) clearTimeout(timeout.current);
    setOpen(true);
  };

  const handleLeave = () => {
    timeout.current = setTimeout(() => setOpen(false), 150);
  };

  useEffect(() => {
    return () => {
      if (timeout.current) clearTimeout(timeout.current);
    };
  }, []);

  return (
    <div
      className="relative"
      onMouseEnter={handleEnter}
      onMouseLeave={handleLeave}
    >
      <div className="relative flex items-center">
        {item.href ? (
          <Link
            href={item.href}
            className="px-4 py-2 text-sm font-medium uppercase tracking-wider transition-colors hover:text-[var(--gold)]"
            style={{ color: 'white', textShadow: '0 1px 3px rgba(0,0,0,0.5)' }}
          >
            {item.name}
          </Link>
        ) : (
          <button
            className="px-4 py-2 text-sm font-medium uppercase tracking-wider transition-colors hover:text-[var(--gold)]"
            style={{ color: 'white', textShadow: '0 1px 3px rgba(0,0,0,0.5)' }}
            onClick={() => setOpen(!open)}
          >
            {item.name}
          </button>
        )}
        <button
          className="py-2 pr-1 transition-colors hover:text-[var(--gold)]"
          style={{ color: 'white', textShadow: '0 1px 3px rgba(0,0,0,0.5)' }}
          onClick={() => setOpen(!open)}
          aria-label={`Toggle ${item.name} submenu`}
        >
          <ChevronDown className={`h-3.5 w-3.5 transition-transform ${open ? 'rotate-180' : ''}`} />
        </button>
      </div>

      <div
        className={`absolute left-0 top-full pt-2 transition-all duration-200 ${
          open ? 'opacity-100 visible translate-y-0' : 'opacity-0 invisible -translate-y-1'
        }`}
      >
        <div className="min-w-[220px] bg-white shadow-xl border border-gray-100 py-2">
          {item.children!.map((child) =>
            child.external ? (
              <a
                key={child.name}
                href={child.href}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center justify-between px-5 py-2.5 text-sm text-gray-700 hover:bg-[var(--gold)]/10 hover:text-[var(--gold)] transition-colors font-medium"
                onClick={() => setOpen(false)}
              >
                {child.name}
                <svg className="h-3.5 w-3.5 ml-2 opacity-50" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}><path strokeLinecap="round" strokeLinejoin="round" d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14" /></svg>
              </a>
            ) : (
              <Link
                key={child.name}
                href={child.href}
                className="block px-5 py-2.5 text-sm text-gray-700 hover:bg-[var(--gold)]/10 hover:text-[var(--gold)] transition-colors font-medium"
                onClick={() => setOpen(false)}
              >
                {child.name}
              </Link>
            )
          )}
        </div>
      </div>
    </div>
  );
}

function MobileAccordion({ item, onNavigate }: { item: NavItem; onNavigate: () => void }) {
  const [open, setOpen] = useState(false);

  return (
    <div>
      <div className="flex items-center justify-between">
        {item.href ? (
          <Link
            href={item.href}
            className="flex-1 px-4 py-3 text-[var(--stone)] font-medium hover:bg-[var(--mint)] hover:text-[var(--navy)] transition-colors"
            onClick={onNavigate}
          >
            {item.name}
          </Link>
        ) : (
          <button
            className="flex-1 text-left px-4 py-3 text-[var(--stone)] font-medium hover:bg-[var(--mint)] hover:text-[var(--navy)] transition-colors"
            onClick={() => setOpen(!open)}
          >
            {item.name}
          </button>
        )}
        <button
          className="px-4 py-3 text-[var(--stone)] hover:text-[var(--navy)] transition-colors"
          onClick={() => setOpen(!open)}
          aria-label={`Toggle ${item.name} submenu`}
        >
          <ChevronDown className={`h-4 w-4 transition-transform ${open ? 'rotate-180' : ''}`} />
        </button>
      </div>
      <div className={`overflow-hidden transition-all duration-200 ${open ? 'max-h-96' : 'max-h-0'}`}>
        {item.children!.map((child) =>
          child.external ? (
            <a
              key={child.name}
              href={child.href}
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-1.5 pl-8 pr-4 py-2.5 text-sm text-gray-500 hover:text-[var(--gold)] transition-colors"
              onClick={onNavigate}
            >
              {child.name}
              <svg className="h-3 w-3 opacity-50" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}><path strokeLinecap="round" strokeLinejoin="round" d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14" /></svg>
            </a>
          ) : (
            <Link
              key={child.name}
              href={child.href}
              className="block pl-8 pr-4 py-2.5 text-sm text-gray-500 hover:text-[var(--gold)] transition-colors"
              onClick={onNavigate}
            >
              {child.name}
            </Link>
          )
        )}
      </div>
    </div>
  );
}

export default function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <header className="sticky top-0 z-50">
      {/* Top bar */}
      <div className="bg-[var(--navy)] text-white">
        <div className="mx-auto max-w-6xl px-6 py-2">
          <div className="flex flex-col items-center gap-2 text-xs md:flex-row md:justify-between md:text-sm">
            <a
              href="https://maps.google.com/?q=5055+E+Kentucky+Ave,+Denver,+CO+80246"
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-2 text-white/80 hover:text-[var(--gold)] transition-colors"
            >
              <MapPin className="h-3.5 w-3.5 flex-shrink-0" />
              <span>5055 E Kentucky Ave, Denver, CO 80246</span>
            </a>
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
            <div className="hidden items-center gap-2 text-white/60 lg:flex">
              <Clock className="h-3.5 w-3.5" />
              <span>Mon 8–5 • Tue 8–4 • Wed 8–4 • Thu 7–1</span>
            </div>
          </div>
        </div>
      </div>

      {/* Main navigation */}
      <div className="bg-transparent absolute left-0 right-0">
        <div className="flex items-center justify-between px-8 lg:px-12 py-4">
          <Link
            href="/"
            className="flex-shrink-0 text-xl font-bold uppercase tracking-wider text-white transition-colors hover:text-[var(--gold)]"
            style={{ fontFamily: 'Lato, sans-serif', textShadow: '0 1px 3px rgba(0,0,0,0.5)' }}
          >
            Cherry Creek South Dental
          </Link>

          {/* Desktop nav */}
          <nav className="hidden items-center gap-2 lg:flex" style={{ fontFamily: 'Lato, sans-serif' }}>
            {navigation.map((item) =>
              item.children ? (
                <DesktopDropdown key={item.name} item={item} />
              ) : item.external ? (
                <a
                  key={item.name}
                  href={item.href!}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="relative px-4 py-2 text-sm font-medium uppercase tracking-wider transition-colors hover:text-[var(--gold)] after:absolute after:bottom-0 after:left-1/2 after:h-0.5 after:w-0 after:bg-[var(--gold)] after:-translate-x-1/2 after:transition-all hover:after:w-3/4"
                  style={{ color: 'white', textShadow: '0 1px 3px rgba(0,0,0,0.5)' }}
                >
                  {item.name}
                </a>
              ) : (
                <Link
                  key={item.name}
                  href={item.href!}
                  className="relative px-4 py-2 text-sm font-medium uppercase tracking-wider transition-colors hover:text-[var(--gold)] after:absolute after:bottom-0 after:left-1/2 after:h-0.5 after:w-0 after:bg-[var(--gold)] after:-translate-x-1/2 after:transition-all hover:after:w-3/4"
                  style={{ color: 'white', textShadow: '0 1px 3px rgba(0,0,0,0.5)' }}
                >
                  {item.name}
                </Link>
              )
            )}
            <a
              href="tel:3033777744"
              className="ml-6 bg-[var(--gold)] px-6 py-2.5 text-sm font-semibold uppercase tracking-wider text-white shadow-sm transition-all hover:bg-[var(--navy)] hover:shadow-md"
              style={{ fontFamily: 'Lato, sans-serif' }}
            >
              Schedule Appointment
            </a>
          </nav>

          {/* Mobile menu button */}
          <button
            onClick={() => setIsMenuOpen(!isMenuOpen)}
            className="p-2 text-white hover:text-[var(--gold)] transition-colors lg:hidden"
            aria-label="Toggle menu"
          >
            {isMenuOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
          </button>
        </div>
      </div>

      {/* Mobile menu */}
      <div
        className={`overflow-hidden transition-all duration-300 ease-in-out lg:hidden ${
          isMenuOpen ? 'max-h-[600px] opacity-100' : 'max-h-0 opacity-0'
        }`}
      >
        <nav className="border-t border-gray-100 bg-white px-6 pb-6 pt-4">
          <div className="flex flex-col gap-1">
            {navigation.map((item) =>
              item.children ? (
                <MobileAccordion
                  key={item.name}
                  item={item}
                  onNavigate={() => setIsMenuOpen(false)}
                />
              ) : item.external ? (
                <a
                  key={item.name}
                  href={item.href!}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="px-4 py-3 text-[var(--stone)] font-medium hover:bg-[var(--mint)] hover:text-[var(--navy)] transition-colors"
                  onClick={() => setIsMenuOpen(false)}
                >
                  {item.name}
                </a>
              ) : (
                <Link
                  key={item.name}
                  href={item.href!}
                  className="px-4 py-3 text-[var(--stone)] font-medium hover:bg-[var(--mint)] hover:text-[var(--navy)] transition-colors"
                  onClick={() => setIsMenuOpen(false)}
                >
                  {item.name}
                </Link>
              )
            )}
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
