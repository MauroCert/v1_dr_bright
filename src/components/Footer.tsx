import Link from 'next/link';
import Image from 'next/image';
import { Phone, MessageCircle, MapPin, Clock, Facebook, Instagram, ArrowRight } from 'lucide-react';

export default function Footer() {
  const currentYear = new Date().getFullYear();

  const hours = [
    { day: 'Monday', hours: '8:00 AM - 5:00 PM' },
    { day: 'Tuesday', hours: '8:00 AM - 4:00 PM' },
    { day: 'Wednesday', hours: '8:00 AM - 4:00 PM' },
    { day: 'Thursday', hours: '7:00 AM - 1:00 PM' },
    { day: 'Fri - Sun', hours: 'Closed' },
  ];

  const quickLinks = [
    { name: 'About Us', href: '/about' },
    { name: 'Services', href: '/services' },
    { name: 'Patient Info', href: '/patient-info' },
    { name: 'Membership', href: '/membership' },
    { name: 'Contact', href: '/contact' },
  ];

  return (
    <footer className="relative bg-gradient-to-b from-[var(--navy)] to-[#031810] text-white overflow-hidden">
      {/* Decorative elements */}
      <div className="absolute top-0 right-0 w-96 h-96 bg-[var(--gold)]/5 rounded-full blur-3xl -translate-y-1/2 translate-x-1/2" />
      <div className="absolute bottom-0 left-0 w-64 h-64 bg-[var(--denim)]/20 rounded-full blur-3xl translate-y-1/2 -translate-x-1/2" />
      
      <div className="relative mx-auto max-w-6xl px-4 pt-16 pb-12">
        {/* Main Footer Content */}
        <div className="grid grid-cols-1 gap-12 lg:grid-cols-5">
          {/* Brand & Contact */}
          <div className="lg:col-span-1">
            <Image
              src="/logo.avif"
              alt="Cherry Creek South Dental"
              width={180}
              height={50}
              className="h-12 w-auto brightness-0 invert mb-6"
            />
            <p className="text-white/70 text-sm leading-relaxed mb-6">
              Family-owned dentistry with longer appointments, modern technology, and a calming atmosphere.
            </p>
            <div className="flex gap-3">
              <a 
                href="#" 
                className="w-10 h-10 rounded-full bg-white/10 flex items-center justify-center hover:bg-[var(--gold)] transition-colors"
                aria-label="Facebook"
              >
                <Facebook className="h-4 w-4" />
              </a>
              <a 
                href="#" 
                className="w-10 h-10 rounded-full bg-white/10 flex items-center justify-center hover:bg-[var(--gold)] transition-colors"
                aria-label="Instagram"
              >
                <Instagram className="h-4 w-4" />
              </a>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="text-[var(--gold)] font-semibold mb-6">Quick Links</h4>
            <nav className="space-y-3">
              {quickLinks.map((link) => (
                <Link 
                  key={link.name}
                  href={link.href} 
                  className="block text-white/70 hover:text-[var(--gold)] transition-colors text-sm"
                >
                  {link.name}
                </Link>
              ))}
            </nav>
          </div>

          {/* Contact Info */}
                <div>
            <h4 className="text-[var(--gold)] font-semibold mb-6">Contact</h4>
            <div className="space-y-4 text-sm">
              <a 
                href="tel:(303) 377-7744" 
                className="flex items-center gap-3 text-white/70 hover:text-[var(--gold)] transition-colors"
              >
                <div className="w-8 h-8 rounded-lg bg-white/10 flex items-center justify-center flex-shrink-0">
                  <Phone className="h-4 w-4 text-[var(--gold)]" />
                  </div>
                <span>(303) 377-7744</span>
              </a>
              <a 
                href="sms:(720) 864-1333" 
                className="flex items-center gap-3 text-white/70 hover:text-[var(--gold)] transition-colors"
              >
                <div className="w-8 h-8 rounded-lg bg-white/10 flex items-center justify-center flex-shrink-0">
                  <MessageCircle className="h-4 w-4 text-[var(--gold)]" />
                </div>
                <span>(720) 864-1333</span>
              </a>
              <div className="flex items-start gap-3 text-white/70">
                <div className="w-8 h-8 rounded-lg bg-white/10 flex items-center justify-center flex-shrink-0">
                  <MapPin className="h-4 w-4 text-[var(--gold)]" />
                </div>
                <span>5055 E Kentucky Ave<br />Denver, CO 80246</span>
                </div>
              </div>
            </div>

          {/* Hours */}
            <div>
            <h4 className="text-[var(--gold)] font-semibold mb-6 flex items-center gap-2">
              <Clock className="h-4 w-4" />
                Office Hours
              </h4>
              <div className="space-y-2 text-sm">
                {hours.map((schedule) => (
                <div key={schedule.day} className="flex justify-between text-white/70">
                    <span>{schedule.day}</span>
                  <span className={schedule.hours === 'Closed' ? 'text-white/50' : ''}>
                    {schedule.hours}
                  </span>
                  </div>
                ))}
            </div>
            <a
              href="https://maps.app.goo.gl/Ye2gTCTUwE17Wm8G8"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 mt-6 text-sm font-semibold text-[var(--gold)] hover:text-white transition-colors"
            >
              Get Directions
              <ArrowRight className="h-4 w-4" />
            </a>
          </div>

          {/* Location Map */}
          <div>
            <h4 className="text-[var(--gold)] font-semibold mb-6">Our Location</h4>
            <div className="rounded-xl overflow-hidden shadow-lg">
              <iframe
                src="https://www.google.com/maps/embed?pb=!1m14!1m8!1m3!1d3069.7435520586664!2d-104.9279661!3d39.7004696!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x876c7d089e7f05fb%3A0x53c315a85d1e3f98!2sCherry%20Creek%20South%20Dental!5e0!3m2!1sen!2sar!4v1764883450582!5m2!1sen!2sar"
                width="100%"
                height="200"
                style={{ border: 0 }}
                allowFullScreen
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
                title="Cherry Creek South Dental Location"
                className="w-full"
              />
            </div>
            <p className="text-white/70 text-xs mt-3 leading-relaxed">
              Conveniently located in Denver&apos;s Cherry Creek area, serving families and professionals with exceptional dental care.
            </p>
          </div>
        </div>

        {/* Bottom bar */}
        <div className="mt-12 pt-8 border-t border-white/10">
          <div className="flex flex-col md:flex-row items-center justify-between gap-4">
            <p className="text-xs text-white/50">
              © {currentYear} Cherry Creek South Dental, PLLC. All rights reserved.
            </p>
            <div className="flex items-center gap-6 text-xs text-white/50">
              <Link href="/privacy-policy" className="hover:text-white transition-colors">
                Privacy Policy
              </Link>
              <Link href="/terms" className="hover:text-white transition-colors">
                Terms of Service
              </Link>
            </div>
          </div>
          <p className="text-center mt-4 text-xs text-white/40">
              Powered by{' '}
              <a
                href="https://dentalmarketingfromdayone.com/"
                target="_blank"
                rel="noopener noreferrer"
              className="text-[var(--gold)]/70 hover:text-[var(--gold)] transition-colors"
              >
                Dental Marketing from Day One
              </a>
            </p>
        </div>
      </div>
    </footer>
  );
}
