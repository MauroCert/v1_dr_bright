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
    <footer className="bg-gray-900 text-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        {/* Main Footer Content */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-12 mb-12">
          {/* Contact Information & Hours */}
          <div>
            <h3 className="text-2xl font-bold mb-6">Cherry Creek South Dental</h3>
            <div className="space-y-4 mb-8">
              <div className="flex items-start">
                <MapPin className="h-6 w-6 mr-4 text-blue-400 mt-1" />
                <div>
                  <div className="font-semibold mb-1">Address</div>
                  <div className="text-gray-300">
                    5055 E Kentucky Ave<br />
                    Denver, CO 80246
                  </div>
                </div>
              </div>
              <div className="flex items-center">
                <Phone className="h-6 w-6 mr-4 text-blue-400" />
                <div>
                  <div className="font-semibold">Phone</div>
                  <a href="tel:(303) 377-7744" className="text-gray-300 hover:text-white transition-colors">
                    (303) 377-7744
                  </a>
                </div>
              </div>
              <div className="flex items-center">
                <MessageCircle className="h-6 w-6 mr-4 text-blue-400" />
                <div>
                  <div className="font-semibold">Text</div>
                  <a href="sms:(720) 864-1333" className="text-gray-300 hover:text-white transition-colors">
                    (720) 864-1333
                  </a>
                </div>
              </div>
            </div>

            {/* Office Hours */}
            <div>
              <h4 className="text-lg font-semibold mb-4 flex items-center">
                <Clock className="h-5 w-5 mr-2 text-blue-400" />
                Office Hours
              </h4>
              <div className="space-y-2 text-sm">
                {hours.map((schedule) => (
                  <div key={schedule.day} className="flex justify-between">
                    <span className="text-gray-300">{schedule.day}</span>
                    <span className="text-gray-300">{schedule.hours}</span>
                  </div>
                ))}
              </div>
            </div>
          </div>

          {/* Map */}
          <div>
            <h4 className="text-lg font-semibold mb-6">Our Location</h4>
            <div className="bg-gray-800 rounded-lg h-64 flex items-center justify-center mb-4">
              <div className="text-center text-gray-400">
                <MapPin className="h-12 w-12 mx-auto mb-4" />
                <p className="mb-2">Interactive Map</p>
                <p className="text-sm">5055 E Kentucky Ave, Denver, CO 80246</p>
              </div>
            </div>
            <a
              href="https://maps.google.com/?q=5055+E+Kentucky+Ave,+Denver,+CO+80246"
              target="_blank"
              rel="noopener noreferrer"
              className="text-blue-400 hover:text-blue-300 text-sm font-medium"
            >
              Get Directions →
            </a>
          </div>

          {/* Contact Form */}
          <div>
            <h4 className="text-lg font-semibold mb-6">Contact Us</h4>
            <form className="space-y-4">
              <div>
                <input
                  type="text"
                  placeholder="Your Name"
                  className="w-full px-3 py-2 bg-gray-800 border border-gray-700 rounded-md text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                />
              </div>
              <div>
                <input
                  type="email"
                  placeholder="Your Email"
                  className="w-full px-3 py-2 bg-gray-800 border border-gray-700 rounded-md text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                />
              </div>
              <div>
                <input
                  type="tel"
                  placeholder="Your Phone"
                  className="w-full px-3 py-2 bg-gray-800 border border-gray-700 rounded-md text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                />
              </div>
              <div>
                <textarea
                  rows={3}
                  placeholder="Your Message"
                  className="w-full px-3 py-2 bg-gray-800 border border-gray-700 rounded-md text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent resize-none"
                ></textarea>
              </div>
              <button
                type="submit"
                className="w-full bg-blue-600 text-white py-2 px-4 rounded-md hover:bg-blue-700 transition-colors font-medium"
              >
                Send Message
              </button>
            </form>
          </div>
        </div>

        {/* Social Icons & Links */}
        <div className="border-t border-gray-800 pt-8">
          <div className="flex flex-col md:flex-row justify-between items-center">
            <div className="flex space-x-6 mb-4 md:mb-0">
              <a href="#" className="text-gray-400 hover:text-white transition-colors">
                <Facebook className="h-6 w-6" />
              </a>
              <a href="#" className="text-gray-400 hover:text-white transition-colors">
                <Instagram className="h-6 w-6" />
              </a>
            </div>
            <div className="flex space-x-6 text-sm">
              <Link href="/privacy-policy" className="text-gray-400 hover:text-white transition-colors">
                Privacy Policy
              </Link>
              <span className="text-gray-600">•</span>
              <Link href="/terms" className="text-gray-400 hover:text-white transition-colors">
                Terms of Service
              </Link>
            </div>
          </div>
          <div className="text-center mt-6 text-gray-400 text-sm">
            © {currentYear} Cherry Creek South Dental, PLLC. All rights reserved.
          </div>
        </div>
      </div>
    </footer>
  );
}
