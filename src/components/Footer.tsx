import Link from 'next/link';
import { Phone, MessageCircle, MapPin, Clock, Facebook, Instagram } from 'lucide-react';

export default function Footer() {
  const currentYear = new Date().getFullYear();

  const hours = [
    { day: 'Monday', hours: '8:00 AM - 5:00 PM' },
    { day: 'Tuesday', hours: '8:00 AM - 4:00 PM' },
    { day: 'Wednesday', hours: '8:00 AM - 4:00 PM' },
    { day: 'Thursday', hours: '7:00 AM - 1:00 PM' },
    { day: 'Friday', hours: 'Closed' },
    { day: 'Saturday', hours: 'Closed' },
    { day: 'Sunday', hours: 'Closed' },
  ];

  return (
    <footer className="bg-[var(--navy)] text-[#f4fbf2]">
      <div className="mx-auto max-w-6xl px-4 py-12">
        {/* Main Footer Content */}
        <div className="mb-12 grid grid-cols-1 gap-12 lg:grid-cols-3">
          {/* Contact Information & Hours */}
          <div>
            <h3 className="mb-6 text-2xl font-semibold tracking-wide text-[var(--gold)]">Cherry Creek South Dental</h3>
            <div className="mb-8 space-y-4 text-sm">
              <div className="flex items-start">
                <MapPin className="mr-4 mt-1 h-6 w-6 text-[var(--gold)]" />
                <div>
                  <div className="font-semibold mb-1">Address</div>
                  <div className="text-[#e3ddd2]">
                    5055 E Kentucky Ave<br />
                    Denver, CO 80246
                  </div>
                </div>
              </div>
              <div className="flex items-center">
                <Phone className="mr-4 h-6 w-6 text-[var(--gold)]" />
                <div>
                  <div className="font-semibold">Phone</div>
                  <a href="tel:(303) 377-7744" className="text-[#e3ddd2] transition hover:text-white">
                    (303) 377-7744
                  </a>
                </div>
              </div>
              <div className="flex items-center">
                <MessageCircle className="mr-4 h-6 w-6 text-[var(--gold)]" />
                <div>
                  <div className="font-semibold">Text</div>
                  <a href="sms:(720) 864-1333" className="text-[#e3ddd2] transition hover:text-white">
                    (720) 864-1333
                  </a>
                </div>
              </div>
            </div>

            {/* Office Hours */}
            <div>
              <h4 className="mb-4 flex items-center text-lg font-semibold">
                <Clock className="mr-2 h-5 w-5 text-[var(--gold)]" />
                Office Hours
              </h4>
              <div className="space-y-2 text-sm">
                {hours.map((schedule) => (
                  <div key={schedule.day} className="flex justify-between text-[#e3ddd2]">
                    <span>{schedule.day}</span>
                    <span>{schedule.hours}</span>
                  </div>
                ))}
              </div>
            </div>
          </div>

          {/* Map */}
          <div>
            <h4 className="mb-6 text-lg font-semibold text-[var(--gold)]">Our Location</h4>
            <div className="mb-4 overflow-hidden rounded-3xl shadow-lg">
              <iframe
                title="Cherry Creek South Dental Map"
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3069.7435533288226!2d-104.93054638782138!3d39.7004695714452!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x876c7d089e7f05fb%3A0x53c315a85d1e3f98!2sCherry%20Creek%20South%20Dental!5e0!3m2!1sen!2sar!4v1764256977558!5m2!1sen!2sar"
                width="100%"
                height="260"
                allowFullScreen
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
                style={{ border: 0 }}
                className="h-64 w-full"
              />
            </div>
            <a
              href="https://maps.app.goo.gl/Ye2gTCTUwE17Wm8G8"
              target="_blank"
              rel="noopener noreferrer"
              className="text-sm font-semibold text-[var(--gold)] hover:text-white"
            >
              Get Directions →
            </a>
          </div>

          {/* Contact Form */}
          <div>
            <h4 className="mb-6 text-lg font-semibold text-[var(--gold)]">Contact Us</h4>
            <form className="space-y-4 text-sm">
              <div>
                <input
                  type="text"
                  placeholder="Your Name"
                  className="w-full rounded-lg border border-[#0b5a30] bg-[var(--navy)] px-3 py-2 text-[#f4fbf2] placeholder-[#a8c5af] focus:border-[var(--gold)] focus:outline-none"
                />
              </div>
              <div>
                <input
                  type="email"
                  placeholder="Your Email"
                  className="w-full rounded-lg border border-[#0b5a30] bg-[var(--navy)] px-3 py-2 text-[#f4fbf2] placeholder-[#a8c5af] focus:border-[var(--gold)] focus:outline-none"
                />
              </div>
              <div>
                <input
                  type="tel"
                  placeholder="Your Phone"
                  className="w-full rounded-lg border border-[#0b5a30] bg-[var(--navy)] px-3 py-2 text-[#f4fbf2] placeholder-[#a8c5af] focus:border-[var(--gold)] focus:outline-none"
                />
              </div>
              <div>
                <textarea
                  rows={3}
                  placeholder="Your Message"
                  className="w-full resize-none rounded-lg border border-[#0b5a30] bg-[var(--navy)] px-3 py-2 text-[#f4fbf2] placeholder-[#a8c5af] focus:border-[var(--gold)] focus:outline-none"
                ></textarea>
              </div>
              <button
                type="submit"
                className="w-full rounded-full bg-[var(--gold)] py-2 font-semibold text-[var(--navy)] transition hover:bg-white"
              >
                Send Message
              </button>
            </form>
          </div>
        </div>

        {/* Social Icons & Links */}
        <div className="border-t border-[#25354a] pt-8">
          <div className="flex flex-col items-center justify-between gap-4 md:flex-row">
            <div className="flex space-x-6">
              <a href="#" className="text-[#d8d0c2] transition hover:text-white">
                <Facebook className="h-6 w-6" />
              </a>
              <a href="#" className="text-[#d8d0c2] transition hover:text-white">
                <Instagram className="h-6 w-6" />
              </a>
            </div>
            <div className="flex space-x-6 text-sm text-[#d8d0c2]">
              <Link href="/privacy-policy" className="text-[#d8d0c2] transition hover:text-white">
                Privacy Policy
              </Link>
              <span>•</span>
              <Link href="/terms" className="text-[#d8d0c2] transition hover:text-white">
                Terms of Service
              </Link>
            </div>
          </div>
          <div className="mt-6 text-center text-xs tracking-wide text-[#a8c5af] space-y-1">
            <p>© {currentYear} Cherry Creek South Dental, PLLC. All rights reserved.</p>
            <p>
              Powered by{' '}
              <a
                href="https://dentalmarketingfromdayone.com/"
                target="_blank"
                rel="noopener noreferrer"
                className="text-[var(--gold)] hover:text-white"
              >
                Dental Marketing from Day One
              </a>
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
}
