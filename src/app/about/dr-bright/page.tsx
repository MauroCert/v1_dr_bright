import Link from 'next/link';
import { GraduationCap, Award, Heart, Users, Microscope } from 'lucide-react';

export default function DrBright() {
  const credentials = [
    {
      icon: GraduationCap,
      title: 'Education',
      details: 'DDS Degree from [University Name]'
    },
    {
      icon: Award,
      title: 'Certifications',
      details: 'Advanced training in cosmetic and restorative dentistry'
    },
    {
      icon: Microscope,
      title: 'Technology',
      details: 'Certified in advanced dental technology and AI diagnostics'
    },
  ];

  const philosophy = [
    {
      icon: Heart,
      title: 'Patient-First Approach',
      description: 'Every treatment plan is designed with your comfort and long-term oral health as the top priority.'
    },
    {
      icon: Users,
      title: 'Family-Centered Care',
      description: 'We believe dental care should be a positive experience that brings families together.'
    },
    {
      icon: Award,
      title: 'Excellence in Dentistry',
      description: 'Committed to staying at the forefront of dental technology and techniques.'
    },
  ];

  return (
    <div className="bg-white">
      {/* Hero Section */}
      <section className="bg-gradient-to-br from-blue-50 to-white py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
                Meet Dr. Bright
              </h1>
              <p className="text-xl text-gray-600 mb-6">
                A dedicated dentist committed to providing exceptional care with a focus on patient comfort,
                advanced technology, and building lasting relationships with families in the Denver area.
              </p>
              <div className="flex flex-col sm:flex-row gap-4">
                <a
                  href="tel:(303) 377-7744"
                  className="bg-blue-600 text-white px-6 py-3 rounded-md font-medium hover:bg-blue-700 transition-colors text-center"
                >
                  Schedule with Dr. Bright
                </a>
                <Link
                  href="/about"
                  className="bg-gray-100 text-gray-900 px-6 py-3 rounded-md font-medium hover:bg-gray-200 transition-colors text-center"
                >
                  About Our Practice
                </Link>
              </div>
            </div>
            <div className="bg-gray-200 h-96 rounded-lg flex items-center justify-center">
              <div className="text-center text-gray-500">
                <div className="text-6xl mb-4">👨‍⚕️</div>
                <p>Dr. Bright Photo Placeholder</p>
                <p className="text-sm">Will be replaced with actual photo</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* About Dr. Bright */}
      <section className="py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-start">
            <div>
              <h2 className="text-3xl font-bold text-gray-900 mb-6">About Dr. Bright</h2>
              <p className="text-gray-600 mb-4">
                Dr. Bright is a passionate dentist who believes that dental care should be more than just
                routine procedures—it should be a positive, comfortable experience that contributes to your
                overall health and confidence.
              </p>
              <p className="text-gray-600 mb-4">
                With years of experience in both general and cosmetic dentistry, Dr. Bright has built his
                practice around the principle that patients deserve longer appointment times, personalized
                treatment plans, and access to the latest dental technology. He takes pride in being able to
                offer comprehensive dental services in a family-owned setting where patients are treated like
                family members.
              </p>
              <p className="text-gray-600 mb-6">
                Dr. Bright&apos;s commitment to excellence extends beyond the dental chair. He believes in
                educating patients about their oral health and involving them in decisions about their treatment.
                This collaborative approach ensures that every patient feels heard, respected, and confident
                in their dental care choices.
              </p>
            </div>
            <div className="bg-blue-50 p-8 rounded-lg">
              <h3 className="text-2xl font-bold text-gray-900 mb-6">Why Choose Dr. Bright?</h3>
              <ul className="space-y-4">
                <li className="flex items-start">
                  <div className="text-blue-600 mr-3 mt-1">•</div>
                  <div>
                    <span className="font-semibold text-gray-900">Family-Owned Practice:</span>
                    <span className="text-gray-600 ml-1">Personal care in a corporate world</span>
                  </div>
                </li>
                <li className="flex items-start">
                  <div className="text-blue-600 mr-3 mt-1">•</div>
                  <div>
                    <span className="font-semibold text-gray-900">Extended Appointment Times:</span>
                    <span className="text-gray-600 ml-1">No rushing, thorough care</span>
                  </div>
                </li>
                <li className="flex items-start">
                  <div className="text-blue-600 mr-3 mt-1">•</div>
                  <div>
                    <span className="font-semibold text-gray-900">Advanced Technology:</span>
                    <span className="text-gray-600 ml-1">AI-powered diagnostics and modern equipment</span>
                  </div>
                </li>
                <li className="flex items-start">
                  <div className="text-blue-600 mr-3 mt-1">•</div>
                  <div>
                    <span className="font-semibold text-gray-900">Patient Involvement:</span>
                    <span className="text-gray-600 ml-1">Collaborative treatment planning</span>
                  </div>
                </li>
                <li className="flex items-start">
                  <div className="text-blue-600 mr-3 mt-1">•</div>
                  <div>
                    <span className="font-semibold text-gray-900">Calming Environment:</span>
                    <span className="text-gray-600 ml-1">Designed to reduce dental anxiety</span>
                  </div>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* Credentials */}
      <section className="py-16 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">Credentials & Expertise</h2>
            <p className="text-gray-600 max-w-2xl mx-auto">
              Dr. Bright maintains the highest standards in dental education and technology
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {credentials.map((credential, index) => {
              const IconComponent = credential.icon;
              return (
                <div key={index} className="bg-white p-6 rounded-lg shadow-sm text-center">
                  <IconComponent className="h-12 w-12 text-blue-600 mx-auto mb-4" />
                  <h3 className="text-xl font-semibold text-gray-900 mb-2">{credential.title}</h3>
                  <p className="text-gray-600">{credential.details}</p>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* Philosophy */}
      <section className="py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">Dr. Bright&apos;s Philosophy</h2>
            <p className="text-gray-600 max-w-2xl mx-auto">
              Core principles that guide every patient interaction and treatment decision
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {philosophy.map((item, index) => {
              const IconComponent = item.icon;
              return (
                <div key={index} className="text-center">
                  <IconComponent className="h-16 w-16 text-blue-600 mx-auto mb-6" />
                  <h3 className="text-xl font-semibold text-gray-900 mb-4">{item.title}</h3>
                  <p className="text-gray-600">{item.description}</p>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* Call to Action */}
      <section className="py-16 bg-blue-600 text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl font-bold mb-4">Experience Dr. Bright&apos;s Care</h2>
          <p className="text-xl mb-8 text-blue-100">
            Ready to experience dental care that puts you first? Schedule your appointment with Dr. Bright today.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a
              href="tel:(303) 377-7744"
              className="bg-white text-blue-600 px-8 py-3 rounded-md font-medium hover:bg-gray-100 transition-colors"
            >
              Call (303) 377-7744
            </a>
            <Link
              href="/contact"
              className="bg-blue-700 text-white px-8 py-3 rounded-md font-medium hover:bg-blue-800 transition-colors"
            >
              Contact Us
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
}
