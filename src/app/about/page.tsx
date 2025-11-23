import Link from 'next/link';
import { Heart, Award, Clock, Shield } from 'lucide-react';

export default function About() {
  const values = [
    {
      icon: Heart,
      title: 'Patient-Centered Care',
      description: 'We put our patients first, ensuring every treatment plan is tailored to your individual needs and comfort.'
    },
    {
      icon: Clock,
      title: 'Quality Time',
      description: 'Unlike many practices, we schedule longer appointments to provide thorough, unhurried care.'
    },
    {
      icon: Award,
      title: 'Advanced Technology',
      description: 'We integrate cutting-edge technology like AI-powered x-rays for better diagnostics and treatment.'
    },
    {
      icon: Shield,
      title: 'Family-Owned & Trusted',
      description: 'As a family-owned practice, we build lasting relationships based on trust and personalized care.'
    },
  ];

  const team = [
    {
      name: 'Dr. Bright',
      role: 'Lead Dentist',
      image: '/team-placeholder.jpg',
      bio: 'Dr. Bright is dedicated to providing comprehensive dental care with a focus on patient comfort and advanced technology.'
    },
    {
      name: 'Our Dental Team',
      role: 'Experienced Professionals',
      image: '/team-placeholder.jpg',
      bio: 'Our skilled team of dental professionals works together to deliver exceptional care in a welcoming environment.'
    },
  ];

  return (
    <div className="bg-white">
      {/* Hero Section */}
      <section className="bg-gradient-to-br from-blue-50 to-white py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
              About Cherry Creek South Dental
            </h1>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              A family-owned dental practice committed to providing exceptional care in a warm,
              welcoming environment where every patient feels valued and comfortable.
            </p>
          </div>
        </div>
      </section>

      {/* Our Story Section */}
      <section className="py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-3xl font-bold text-gray-900 mb-6">Our Story</h2>
              <p className="text-gray-600 mb-4">
                Cherry Creek South Dental was founded with a simple mission: to provide dental care that feels
                different from the typical corporate dental experience. As a family-owned practice, we believe
                in building lasting relationships with our patients based on trust, transparency, and genuine care.
              </p>
              <p className="text-gray-600 mb-4">
                What sets us apart is our commitment to spending quality time with each patient. We schedule
                longer appointments than most practices, ensuring that every procedure is done thoroughly and
                without rushing. This patient-first approach, combined with our integration of advanced technology
                like AI-powered x-rays, allows us to provide the highest quality care.
              </p>
              <p className="text-gray-600 mb-6">
                Our office features a calming atrium with plants and natural light, creating a relaxing environment
                that helps reduce dental anxiety. Every member of our team is dedicated to making your dental
                experience as comfortable and positive as possible.
              </p>
              <div className="flex flex-col sm:flex-row gap-4">
                <Link
                  href="/about/meet-the-team"
                  className="bg-blue-600 text-white px-6 py-3 rounded-md font-medium hover:bg-blue-700 transition-colors text-center"
                >
                  Meet Our Team
                </Link>
                <Link
                  href="/about/dr-bright"
                  className="bg-gray-100 text-gray-900 px-6 py-3 rounded-md font-medium hover:bg-gray-200 transition-colors text-center"
                >
                  About Dr. Bright
                </Link>
              </div>
            </div>
            <div className="bg-gray-100 h-96 rounded-lg flex items-center justify-center">
              <div className="text-center text-gray-500">
                <div className="text-6xl mb-4">🏥</div>
                <p>Office Photo Placeholder</p>
                <p className="text-sm">Will be replaced with actual office image</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Our Values Section */}
      <section className="py-16 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">Our Values</h2>
            <p className="text-gray-600 max-w-2xl mx-auto">
              These core principles guide everything we do at Cherry Creek South Dental
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {values.map((value, index) => {
              const IconComponent = value.icon;
              return (
                <div key={index} className="bg-white p-6 rounded-lg shadow-sm hover:shadow-md transition-shadow">
                  <IconComponent className="h-12 w-12 text-blue-600 mb-4" />
                  <h3 className="text-xl font-semibold text-gray-900 mb-3">{value.title}</h3>
                  <p className="text-gray-600">{value.description}</p>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* Meet the Team Preview */}
      <section className="py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">Meet Our Team</h2>
            <p className="text-gray-600 max-w-2xl mx-auto">
              Get to know the dedicated professionals who make Cherry Creek South Dental a special place
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {team.map((member, index) => (
              <div key={index} className="bg-white rounded-lg shadow-sm overflow-hidden hover:shadow-md transition-shadow">
                <div className="bg-gray-200 h-64 flex items-center justify-center">
                  <div className="text-center text-gray-500">
                    <div className="text-4xl mb-2">👤</div>
                    <p>Team Photo Placeholder</p>
                  </div>
                </div>
                <div className="p-6">
                  <h3 className="text-xl font-semibold text-gray-900 mb-2">{member.name}</h3>
                  <p className="text-blue-600 font-medium mb-3">{member.role}</p>
                  <p className="text-gray-600 mb-4">{member.bio}</p>
                  {member.name === 'Dr. Bright' ? (
                    <Link
                      href="/about/dr-bright"
                      className="text-blue-600 hover:text-blue-700 font-medium"
                    >
                      Learn More About Dr. Bright →
                    </Link>
                  ) : (
                    <Link
                      href="/about/meet-the-team"
                      className="text-blue-600 hover:text-blue-700 font-medium"
                    >
                      Meet the Full Team →
                    </Link>
                  )}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Call to Action */}
      <section className="py-16 bg-blue-600 text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl font-bold mb-4">Ready to Experience the Difference?</h2>
          <p className="text-xl mb-8 text-blue-100">
            Join our family of satisfied patients and discover why Cherry Creek South Dental
            is the right choice for your dental care.
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
