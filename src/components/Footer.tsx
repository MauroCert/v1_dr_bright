import Link from 'next/link';
import { Phone, MessageCircle, MapPin } from 'lucide-react';

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

  const services = [
    'Cosmetic Dentistry',
    'Restorative Dentistry',
    'Dental Exams & Cleanings',
    'Emergency Dentistry',
    'Sedation Dentistry',
    'Dental Crowns',
    'Extractions',
  ];

  const patientInfo = [
    'Patient Forms',
    'FAQs',
    'Insurance',
    'Membership Plan',
  ];

  return (
    <footer className="bg-gray-900 text-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {/* Contact Information */}
          <div>
            <h3 className="text-lg font-semibold mb-4">Cherry Creek South Dental</h3>
            <div className="space-y-3">
              <div className="flex items-center">
                <MapPin className="h-5 w-5 mr-3 text-blue-400" />
                <span className="text-gray-300">5055 E Kentucky Ave, Denver, CO 80246</span>
              </div>
              <div className="flex items-center">
                <Phone className="h-5 w-5 mr-3 text-blue-400" />
                <a href="tel:(303) 377-7744" className="text-gray-300 hover:text-white transition-colors">
                  (303) 377-7744
                </a>
              </div>
              <div className="flex items-center">
                <MessageCircle className="h-5 w-5 mr-3 text-blue-400" />
                <a href="sms:(720) 864-1333" className="text-gray-300 hover:text-white transition-colors">
                  (720) 864-1333
                </a>
              </div>
            </div>
          </div>

          {/* Hours */}
          <div>
            <h3 className="text-lg font-semibold mb-4">Hours</h3>
            <div className="space-y-2">
              {hours.map((schedule) => (
                <div key={schedule.day} className="flex justify-between">
                  <span className="text-gray-300">{schedule.day}</span>
                  <span className="text-gray-300">{schedule.hours}</span>
                </div>
              ))}
            </div>
          </div>

          {/* Services */}
          <div>
            <h3 className="text-lg font-semibold mb-4">Services</h3>
            <ul className="space-y-2">
              {services.map((service) => (
                <li key={service}>
                  <Link
                    href={`/services/${service.toLowerCase().replace(/\s+&\s+/g, '-').replace(/\s+/g, '-')}`}
                    className="text-gray-300 hover:text-white transition-colors"
                  >
                    {service}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Patient Information */}
          <div>
            <h3 className="text-lg font-semibold mb-4">Patient Information</h3>
            <ul className="space-y-2">
              {patientInfo.map((item) => (
                <li key={item}>
                  <Link
                    href={`/patient-info/${item.toLowerCase().replace(/\s+/g, '-')}`}
                    className="text-gray-300 hover:text-white transition-colors"
                  >
                    {item}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
        </div>

        {/* Bottom section */}
        <div className="border-t border-gray-800 mt-8 pt-8">
          <div className="flex flex-col md:flex-row justify-between items-center">
            <div className="text-gray-400 text-sm mb-4 md:mb-0">
              © {currentYear} Cherry Creek South Dental, PLLC. All rights reserved.
            </div>
            <div className="flex space-x-6">
              <Link href="/privacy-policy" className="text-gray-400 hover:text-white text-sm transition-colors">
                Privacy Policy
              </Link>
              <span className="text-gray-600">•</span>
              <Link href="/terms" className="text-gray-400 hover:text-white text-sm transition-colors">
                Terms of Service
              </Link>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}
