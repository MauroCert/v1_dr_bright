import { Phone, MessageCircle, MapPin, Clock, Mail } from 'lucide-react';

export default function Contact() {
  const contactMethods = [
    {
      icon: Phone,
      title: 'Call Us',
      primary: '(303) 377-7744',
      secondary: 'Main office line',
      href: 'tel:(303) 377-7744'
    },
    {
      icon: MessageCircle,
      title: 'Text Us',
      primary: '(720) 864-1333',
      secondary: 'Quick responses',
      href: 'sms:(720) 864-1333'
    },
    {
      icon: MapPin,
      title: 'Visit Us',
      primary: '5055 E Kentucky Ave',
      secondary: 'Denver, CO 80246',
      href: 'https://maps.google.com/?q=5055+E+Kentucky+Ave,+Denver,+CO+80246'
    },
    {
      icon: Mail,
      title: 'Email Us',
      primary: 'frontdesk@ccsdclinic.com',
      secondary: 'General inquiries',
      href: 'mailto:frontdesk@ccsdclinic.com'
    }
  ];

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
    <div className="bg-white">
      {/* Hero Section */}
      <section className="bg-gradient-to-br from-blue-50 to-white py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
              Contact Us
            </h1>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Ready to start your journey to a healthier smile? Get in touch with Cherry Creek South Dental.
              We&apos;re here to answer your questions and schedule your appointment.
            </p>
          </div>
        </div>
      </section>

      {/* Contact Methods */}
      <section className="py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-16">
            {contactMethods.map((method, index) => {
              const IconComponent = method.icon;
              return (
                <div key={index} className="bg-white border border-gray-200 rounded-lg p-6 text-center hover:shadow-lg transition-shadow">
                  <IconComponent className="h-12 w-12 text-blue-600 mx-auto mb-4" />
                  <h3 className="text-lg font-semibold text-gray-900 mb-2">{method.title}</h3>
                  <a
                    href={method.href}
                    className="block text-blue-600 hover:text-blue-700 font-medium mb-1"
                  >
                    {method.primary}
                  </a>
                  <p className="text-gray-600 text-sm">{method.secondary}</p>
                </div>
              );
            })}
          </div>

          {/* Contact Form and Hours */}
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
            {/* Contact Form */}
            <div className="bg-white border border-gray-200 rounded-lg p-8">
              <h2 className="text-2xl font-bold text-gray-900 mb-6">Send Us a Message</h2>
              <form className="space-y-6">
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-2">
                      First Name *
                    </label>
                    <input
                      type="text"
                      required
                      className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                      placeholder="Your first name"
                    />
                  </div>
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-2">
                      Last Name *
                    </label>
                    <input
                      type="text"
                      required
                      className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                      placeholder="Your last name"
                    />
                  </div>
                </div>
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">
                    Phone Number *
                  </label>
                  <input
                    type="tel"
                    required
                    className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                    placeholder="(303) 123-4567"
                  />
                </div>
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">
                    Email Address
                  </label>
                  <input
                    type="email"
                    className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                    placeholder="your.email@example.com"
                  />
                </div>
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">
                    Preferred Contact Method
                  </label>
                  <select className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent">
                    <option>Phone Call</option>
                    <option>Text Message</option>
                    <option>Email</option>
                  </select>
                </div>
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">
                    Service of Interest
                  </label>
                  <select className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent">
                    <option>General Dentistry</option>
                    <option>Cosmetic Dentistry</option>
                    <option>Invisalign</option>
                    <option>Emergency Care</option>
                    <option>Consultation</option>
                    <option>Other</option>
                  </select>
                </div>
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">
                    Message
                  </label>
                  <textarea
                    rows={4}
                    className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                    placeholder="Tell us about your dental needs or questions..."
                  ></textarea>
                </div>
                <button
                  type="submit"
                  className="w-full bg-blue-600 text-white py-3 px-4 rounded-md hover:bg-blue-700 transition-colors font-medium"
                >
                  Send Message
                </button>
              </form>
            </div>

            {/* Hours and Map */}
            <div className="space-y-8">
              {/* Office Hours */}
              <div className="bg-gray-50 rounded-lg p-8">
                <h2 className="text-2xl font-bold text-gray-900 mb-6">Office Hours</h2>
                <div className="space-y-3">
                  {hours.map((schedule) => (
                    <div key={schedule.day} className="flex justify-between items-center py-2 border-b border-gray-200 last:border-b-0">
                      <span className="font-medium text-gray-900">{schedule.day}</span>
                      <span className="text-gray-600">{schedule.hours}</span>
                    </div>
                  ))}
                </div>
                <div className="mt-6 p-4 bg-blue-50 rounded-lg">
                  <div className="flex items-center mb-2">
                    <Clock className="h-5 w-5 text-blue-600 mr-2" />
                    <span className="font-semibold text-gray-900">Emergency Care Available</span>
                  </div>
                  <p className="text-sm text-gray-600">
                    For dental emergencies outside regular hours, please call our emergency line or visit your nearest emergency room.
                  </p>
                </div>
              </div>

              {/* Map Placeholder */}
              <div className="bg-gray-100 rounded-lg h-80 flex items-center justify-center">
                <div className="text-center text-gray-500">
                  <MapPin className="h-16 w-16 mx-auto mb-4 text-gray-400" />
                  <h3 className="text-lg font-semibold mb-2">Our Location</h3>
                  <p className="mb-4">5055 E Kentucky Ave, Denver, CO 80246</p>
                  <a
                    href="https://maps.google.com/?q=5055+E+Kentucky+Ave,+Denver,+CO+80246"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-blue-600 hover:text-blue-700 font-medium"
                  >
                    Get Directions →
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Emergency Contact */}
      <section className="py-16 bg-red-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-2xl font-bold text-gray-900 mb-4">Dental Emergency?</h2>
          <p className="text-gray-600 mb-6 max-w-2xl mx-auto">
            If you&apos;re experiencing a dental emergency such as severe tooth pain, broken teeth,
            or lost fillings, don&apos;t wait. Contact us immediately for emergency care.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a
              href="tel:(303) 377-7744"
              className="bg-red-600 text-white px-8 py-3 rounded-md font-medium hover:bg-red-700 transition-colors"
            >
              Emergency: (303) 377-7744
            </a>
            <a
              href="sms:(720) 864-1333"
              className="bg-red-700 text-white px-8 py-3 rounded-md font-medium hover:bg-red-800 transition-colors"
            >
              Text Emergency Line
            </a>
          </div>
        </div>
      </section>
    </div>
  );
}
