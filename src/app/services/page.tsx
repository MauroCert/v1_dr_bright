import Link from 'next/link';
import { Tooth, Sparkles, Wrench, AlertTriangle, Wind, Crown, Scissors, Zap } from 'lucide-react';

export default function Services() {
  const services = [
    {
      title: 'General Dentistry',
      description: 'Comprehensive dental care including cleanings, exams, and preventive treatments.',
      icon: Tooth,
      href: '/services/general-dentistry',
      features: ['Regular Cleanings', 'Dental Exams', 'X-Rays', 'Preventive Care']
    },
    {
      title: 'Cosmetic Dentistry',
      description: 'Transform your smile with our advanced cosmetic dental treatments and procedures.',
      icon: Sparkles,
      href: '/services/cosmetic-dentistry',
      features: ['Teeth Whitening', 'Veneers', 'Bonding', 'Smile Makeovers']
    },
    {
      title: 'Restorative Dentistry',
      description: 'Restore your oral health and function with our comprehensive restorative services.',
      icon: Wrench,
      href: '/services/restorative-dentistry',
      features: ['Fillings', 'Crowns', 'Bridges', 'Implants']
    },
    {
      title: 'Emergency Dentistry',
      description: 'Same-day care for dental emergencies when you need immediate attention.',
      icon: AlertTriangle,
      href: '/services/emergency-dentistry',
      features: ['Tooth Pain', 'Broken Teeth', 'Lost Fillings', 'Infections']
    },
    {
      title: 'Sedation Dentistry',
      description: 'Relaxing dental care options for patients who experience dental anxiety.',
      icon: Wind,
      href: '/services/sedation-dentistry',
      features: ['Nitrous Oxide', 'Oral Sedation', 'IV Sedation', 'Anxiety-Free Care']
    },
    {
      title: 'Dental Crowns',
      description: 'Custom crowns to restore damaged teeth and protect your oral health.',
      icon: Crown,
      href: '/services/dental-crowns',
      features: ['Porcelain Crowns', 'Metal Crowns', 'Same-Day Crowns', 'Crown Repair']
    },
    {
      title: 'Extractions',
      description: 'Safe and comfortable tooth extraction services when necessary.',
      icon: Scissors,
      href: '/services/extractions',
      features: ['Simple Extractions', 'Surgical Extractions', 'Wisdom Teeth', 'Aftercare']
    },
    {
      title: 'Invisalign',
      description: 'Straighten your teeth discreetly with clear aligners instead of traditional braces.',
      icon: Zap,
      href: '/services/invisalign',
      features: ['Clear Aligners', 'Comfortable', 'Removable', 'Faster Results']
    },
  ];

  const specialties = [
    'Facial Aesthetics',
    'Botox Treatments',
    'CBCT X-Ray Technology',
    'TMJ Evaluation',
    'Bone Density Scans',
    'Advanced Technology Integration'
  ];

  return (
    <div className="bg-white">
      {/* Hero Section */}
      <section className="bg-gradient-to-br from-blue-50 to-white py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
              Our Dental Services
            </h1>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Comprehensive dental care from routine cleanings to advanced cosmetic procedures.
              All services delivered with our signature patient-first approach in a comfortable, modern environment.
            </p>
          </div>
        </div>
      </section>

      {/* Services Grid */}
      <section className="py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
            {services.map((service, index) => {
              const IconComponent = service.icon;
              return (
                <div key={index} className="bg-white border border-gray-200 rounded-lg p-6 hover:shadow-lg transition-shadow">
                  <IconComponent className="h-12 w-12 text-blue-600 mb-4" />
                  <h3 className="text-xl font-semibold text-gray-900 mb-3">{service.title}</h3>
                  <p className="text-gray-600 mb-4">{service.description}</p>
                  <ul className="text-sm text-gray-600 mb-6 space-y-1">
                    {service.features.map((feature, featureIndex) => (
                      <li key={featureIndex} className="flex items-center">
                        <span className="text-blue-600 mr-2">•</span>
                        {feature}
                      </li>
                    ))}
                  </ul>
                  <Link
                    href={service.href}
                    className="text-blue-600 hover:text-blue-700 font-medium"
                  >
                    Learn More →
                  </Link>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* Specialties Section */}
      <section className="py-16 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">Advanced Specialties</h2>
            <p className="text-gray-600 max-w-2xl mx-auto">
              Cutting-edge treatments and technologies that set us apart
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {specialties.map((specialty, index) => (
              <div key={index} className="bg-white p-6 rounded-lg shadow-sm">
                <h3 className="text-lg font-semibold text-gray-900 mb-2">{specialty}</h3>
                <p className="text-gray-600 text-sm">
                  Advanced {specialty.toLowerCase()} services for comprehensive patient care.
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Why Choose Us */}
      <section className="py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-3xl font-bold text-gray-900 mb-6">Why Choose Our Services?</h2>
              <div className="space-y-6">
                <div className="flex items-start">
                  <div className="text-blue-600 mr-4 mt-1">
                    <div className="w-6 h-6 bg-blue-100 rounded-full flex items-center justify-center">
                      <span className="text-sm font-bold">1</span>
                    </div>
                  </div>
                  <div>
                    <h3 className="text-lg font-semibold text-gray-900 mb-2">Extended Appointment Times</h3>
                    <p className="text-gray-600">
                      Unlike many practices, we schedule longer appointments to provide thorough,
                      unhurried care for every procedure.
                    </p>
                  </div>
                </div>
                <div className="flex items-start">
                  <div className="text-blue-600 mr-4 mt-1">
                    <div className="w-6 h-6 bg-blue-100 rounded-full flex items-center justify-center">
                      <span className="text-sm font-bold">2</span>
                    </div>
                  </div>
                  <div>
                    <h3 className="text-lg font-semibold text-gray-900 mb-2">Advanced Technology</h3>
                    <p className="text-gray-600">
                      We integrate AI-powered x-rays, CBCT technology, and other advanced tools
                      for better diagnostics and treatment outcomes.
                    </p>
                  </div>
                </div>
                <div className="flex items-start">
                  <div className="text-blue-600 mr-4 mt-1">
                    <div className="w-6 h-6 bg-blue-100 rounded-full flex items-center justify-center">
                      <span className="text-sm font-bold">3</span>
                    </div>
                  </div>
                  <div>
                    <h3 className="text-lg font-semibold text-gray-900 mb-2">Patient Collaboration</h3>
                    <p className="text-gray-600">
                      We involve you in every decision about your treatment plan, ensuring you
                      feel comfortable and confident in your care.
                    </p>
                  </div>
                </div>
                <div className="flex items-start">
                  <div className="text-blue-600 mr-4 mt-1">
                    <div className="w-6 h-6 bg-blue-100 rounded-full flex items-center justify-center">
                      <span className="text-sm font-bold">4</span>
                    </div>
                  </div>
                  <div>
                    <h3 className="text-lg font-semibold text-gray-900 mb-2">Comfortable Environment</h3>
                    <p className="text-gray-600">
                      Our calming office design with natural light and plants helps reduce
                      dental anxiety and creates a positive experience.
                    </p>
                  </div>
                </div>
              </div>
            </div>
            <div className="bg-gray-100 h-96 rounded-lg flex items-center justify-center">
              <div className="text-center text-gray-500">
                <div className="text-6xl mb-4">🦷</div>
                <p>Advanced Dental Technology</p>
                <p className="text-sm">AI X-Rays & Modern Equipment</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Call to Action */}
      <section className="py-16 bg-blue-600 text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl font-bold mb-4">Ready to Start Your Dental Journey?</h2>
          <p className="text-xl mb-8 text-blue-100">
            Contact us today to discuss your dental needs and schedule your personalized treatment plan.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a
              href="tel:(303) 377-7744"
              className="bg-white text-blue-600 px-8 py-3 rounded-md font-medium hover:bg-gray-100 transition-colors"
            >
              Call (303) 377-7744
            </a>
            <a
              href="sms:(720) 864-1333"
              className="bg-green-600 text-white px-8 py-3 rounded-md font-medium hover:bg-green-700 transition-colors"
            >
              Text (720) 864-1333
            </a>
          </div>
        </div>
      </section>
    </div>
  );
}
