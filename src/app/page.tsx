import Link from 'next/link';
import { Phone, MessageCircle, Star, MapPin, Clock } from 'lucide-react';

export default function Home() {
  const services = [
    {
      title: 'General Dentistry',
      description: 'Comprehensive dental care for the whole family',
      icon: '🦷'
    },
    {
      title: 'Cosmetic Dentistry',
      description: 'Transform your smile with our cosmetic treatments',
      icon: '✨'
    },
    {
      title: 'Invisalign',
      description: 'Straight teeth without traditional braces',
      icon: '😊'
    },
    {
      title: 'Emergency Dentistry',
      description: 'Same-day care for dental emergencies',
      icon: '🚑'
    },
  ];

  const testimonials = [
    {
      name: 'Sarah M.',
      rating: 5,
      text: 'Dr. Bright and his team made me feel completely comfortable. The longer appointment times really make a difference.',
      date: '2 weeks ago'
    },
    {
      name: 'Mike R.',
      rating: 5,
      text: 'Family-owned practice with modern technology. The AI x-rays are amazing!',
      date: '1 month ago'
    },
    {
      name: 'Jennifer L.',
      rating: 5,
      text: 'The calming atmosphere and patient-first approach is exactly what I needed.',
      date: '3 weeks ago'
    },
  ];

  return (
    <div className="bg-white">
      {/* Hero Section */}
      <section className="bg-gradient-to-br from-blue-50 to-white py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <h1 className="text-4xl md:text-6xl font-bold text-gray-900 mb-6">
              It&apos;s Time to Start<br />
              <span className="text-blue-600">Smiling at the Dentist</span>
            </h1>
            <p className="text-xl text-gray-600 mb-8 max-w-3xl mx-auto">
              At Cherry Creek South Dental we specialize in all forms of general and cosmetic dentistry.
              Our primary goal is to deliver top quality dentistry in an approachable and anxiety-free manner.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <a
                href="tel:(303) 377-7744"
                className="bg-blue-600 text-white px-8 py-3 rounded-md text-lg font-medium hover:bg-blue-700 transition-colors"
              >
                Call Now: (303) 377-7744
              </a>
              <a
                href="sms:(720) 864-1333"
                className="bg-green-600 text-white px-8 py-3 rounded-md text-lg font-medium hover:bg-green-700 transition-colors"
              >
                Text Us: (720) 864-1333
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* About Section */}
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-3xl font-bold text-gray-900 mb-6">About Our Practice</h2>
              <p className="text-gray-600 mb-6">
                Dr. Bright values the family-owned aspect of his practice, which sets it apart from corporate dental offices.
                We emphasize spending more time with patients, offering longer cleaning appointments than others in the area,
                and ensuring a relaxed, non-rushed environment.
              </p>
              <p className="text-gray-600 mb-6">
                Patients appreciate the longer appointments, detailed care, and the fact that we integrate new technology
                like AI for x-rays. We also highlight our calming atmosphere with the large atrium filled with plants.
              </p>
              <div className="grid grid-cols-2 gap-4">
                <div className="bg-blue-50 p-4 rounded-lg">
                  <div className="text-2xl mb-2">👨‍👩‍👧‍👦</div>
                  <h3 className="font-semibold text-gray-900">Family-Owned</h3>
                  <p className="text-sm text-gray-600">Personal care you can trust</p>
                </div>
                <div className="bg-blue-50 p-4 rounded-lg">
                  <div className="text-2xl mb-2">⏰</div>
                  <h3 className="font-semibold text-gray-900">Longer Appointments</h3>
                  <p className="text-sm text-gray-600">No rushing, just care</p>
                </div>
                <div className="bg-blue-50 p-4 rounded-lg">
                  <div className="text-2xl mb-2">🤖</div>
                  <h3 className="font-semibold text-gray-900">AI Technology</h3>
                  <p className="text-sm text-gray-600">Advanced x-ray capabilities</p>
                </div>
                <div className="bg-blue-50 p-4 rounded-lg">
                  <div className="text-2xl mb-2">🌿</div>
                  <h3 className="font-semibold text-gray-900">Calming Environment</h3>
                  <p className="text-sm text-gray-600">Relaxing atmosphere</p>
                </div>
              </div>
            </div>
            <div className="bg-gray-100 h-96 rounded-lg flex items-center justify-center">
              <div className="text-center text-gray-500">
                <div className="text-6xl mb-4">🏥</div>
                <p>Office Photo Placeholder</p>
                <p className="text-sm">Will be replaced with actual image</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Services Section */}
      <section className="py-16 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">Our Services</h2>
            <p className="text-gray-600 max-w-2xl mx-auto">
              Comprehensive dental care including general dentistry, cosmetic treatments, and emergency services
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {services.map((service, index) => (
              <div key={index} className="bg-white p-6 rounded-lg shadow-sm hover:shadow-md transition-shadow">
                <div className="text-4xl mb-4">{service.icon}</div>
                <h3 className="text-xl font-semibold text-gray-900 mb-2">{service.title}</h3>
                <p className="text-gray-600 mb-4">{service.description}</p>
                <Link
                  href="/services"
                  className="text-blue-600 hover:text-blue-700 font-medium"
                >
                  Learn More →
                </Link>
              </div>
            ))}
          </div>
          <div className="text-center mt-8">
            <Link
              href="/services"
              className="bg-blue-600 text-white px-6 py-3 rounded-md font-medium hover:bg-blue-700 transition-colors"
            >
              View All Services
            </Link>
          </div>
        </div>
      </section>

      {/* Testimonials Section */}
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">What Our Patients Say</h2>
            <p className="text-gray-600">Real reviews from real patients</p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {testimonials.map((testimonial, index) => (
              <div key={index} className="bg-gray-50 p-6 rounded-lg">
                <div className="flex mb-4">
                  {[...Array(testimonial.rating)].map((_, i) => (
                    <Star key={i} className="h-5 w-5 text-yellow-400 fill-current" />
                  ))}
                </div>
                <p className="text-gray-700 mb-4 italic">&ldquo;{testimonial.text}&rdquo;</p>
                <div className="flex justify-between items-center">
                  <span className="font-semibold text-gray-900">{testimonial.name}</span>
                  <span className="text-sm text-gray-500">{testimonial.date}</span>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section className="py-16 bg-blue-600 text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-3xl font-bold mb-6">Ready to Start Smiling?</h2>
              <p className="text-xl mb-8 text-blue-100">
                Contact us today to schedule your appointment. We&apos;re here to help you achieve the healthy,
                beautiful smile you deserve.
              </p>
              <div className="space-y-4">
                <div className="flex items-center">
                  <Phone className="h-6 w-6 mr-4" />
                  <div>
                    <div className="font-semibold">Call Us</div>
                    <a href="tel:(303) 377-7744" className="text-blue-100 hover:text-white">
                      (303) 377-7744
                    </a>
                  </div>
                </div>
                <div className="flex items-center">
                  <MessageCircle className="h-6 w-6 mr-4" />
                  <div>
                    <div className="font-semibold">Text Us</div>
                    <a href="sms:(720) 864-1333" className="text-blue-100 hover:text-white">
                      (720) 864-1333
                    </a>
                  </div>
                </div>
                <div className="flex items-center">
                  <MapPin className="h-6 w-6 mr-4" />
                  <div>
                    <div className="font-semibold">Visit Us</div>
                    <div className="text-blue-100">5055 E Kentucky Ave, Denver, CO 80246</div>
                  </div>
                </div>
                <div className="flex items-center">
                  <Clock className="h-6 w-6 mr-4" />
                  <div>
                    <div className="font-semibold">Hours</div>
                    <div className="text-blue-100">Mon-Thu: Varies, Fri-Sun: Closed</div>
                  </div>
                </div>
              </div>
            </div>
            <div className="bg-white p-8 rounded-lg">
              <h3 className="text-2xl font-bold text-gray-900 mb-6">Schedule an Appointment</h3>
              <form className="space-y-4">
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-1">First Name</label>
                    <input
                      type="text"
                      className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500 text-gray-900"
                      placeholder="Your first name"
                    />
                  </div>
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-1">Last Name</label>
                    <input
                      type="text"
                      className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500 text-gray-900"
                      placeholder="Your last name"
                    />
                  </div>
                </div>
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-1">Phone</label>
                  <input
                    type="tel"
                    className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500 text-gray-900"
                    placeholder="(303) 123-4567"
                  />
                </div>
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-1">Email</label>
                  <input
                    type="email"
                    className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500 text-gray-900"
                    placeholder="your.email@example.com"
                  />
                </div>
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-1">Message</label>
                  <textarea
                    rows={4}
                    className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500 text-gray-900"
                    placeholder="Tell us about your dental needs..."
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
          </div>
        </div>
      </section>
    </div>
  );
}
