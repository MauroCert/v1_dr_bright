import Link from 'next/link';
import { ChevronDown, FileText, HelpCircle, CreditCard, Calendar, Shield } from 'lucide-react';

export default function PatientInfo() {
  const faqs = [
    {
      question: 'How long are your appointments?',
      answer: 'We schedule longer appointments than most dental practices to ensure thorough, unhurried care. Most appointments are 60-90 minutes, allowing us to provide detailed treatment and answer all your questions.'
    },
    {
      question: 'Do you accept my insurance?',
      answer: 'We accept most major dental insurance plans. Our team will verify your coverage and help you understand your benefits before treatment. We also offer financing options for procedures not covered by insurance.'
    },
    {
      question: 'What should I expect during my first visit?',
      answer: 'Your first visit includes a comprehensive exam, necessary x-rays, and a discussion of your oral health goals. We&apos;ll create a personalized treatment plan together, ensuring you feel comfortable and informed throughout the process.'
    },
    {
      question: 'Do you offer sedation dentistry?',
      answer: 'Yes, we offer various sedation options including nitrous oxide (laughing gas), oral sedation, and IV sedation for patients who experience dental anxiety or need more extensive procedures.'
    },
    {
      question: 'How often should I have dental cleanings?',
      answer: 'Most patients benefit from professional cleanings every 6 months. However, your individual needs may vary based on your oral health. We&apos;ll recommend the best schedule for you during your exam.'
    },
    {
      question: 'What advanced technology do you use?',
      answer: 'We use AI-powered x-rays for better diagnostics, CBCT technology for 3D imaging, and digital scanning for crowns and other restorations. These tools help us provide more accurate and efficient care.'
    },
    {
      question: 'Do you treat children?',
      answer: 'Yes, we welcome patients of all ages. We create a gentle, welcoming environment for children and use techniques designed to make their dental visits positive experiences.'
    },
    {
      question: 'What payment options do you accept?',
      answer: 'We accept cash, credit cards, and offer financing through CareCredit and other payment plans. We also help you maximize your insurance benefits.'
    },
  ];

  const forms = [
    {
      title: 'New Patient Forms',
      description: 'Complete these forms before your first visit to save time',
      items: [
        'Patient Registration Form',
        'Medical History Questionnaire',
        'Insurance Information',
        'HIPAA Privacy Notice'
      ]
    },
    {
      title: 'Consent Forms',
      description: 'Forms for specific treatments and procedures',
      items: [
        'Treatment Consent Form',
        'Sedation Consent Form',
        'X-Ray Consent Form',
        'Crown & Bridge Consent'
      ]
    },
    {
      title: 'Financial Forms',
      description: 'Payment and insurance related documents',
      items: [
        'Financial Agreement',
        'Insurance Assignment',
        'Payment Plan Application',
        'Credit Card Authorization'
      ]
    }
  ];

  return (
    <div className="bg-white">
      {/* Hero Section */}
      <section className="bg-gradient-to-br from-blue-50 to-white py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
              Patient Information
            </h1>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Everything you need to know about visiting Cherry Creek South Dental.
              From appointment preparation to insurance questions, we&apos;re here to help.
            </p>
          </div>
        </div>
      </section>

      {/* Quick Links */}
      <section className="py-12 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <Link
              href="#faqs"
              className="bg-white p-6 rounded-lg shadow-sm hover:shadow-md transition-shadow text-center"
            >
              <HelpCircle className="h-12 w-12 text-blue-600 mx-auto mb-4" />
              <h3 className="text-lg font-semibold text-gray-900 mb-2">Frequently Asked Questions</h3>
              <p className="text-gray-600">Find answers to common questions</p>
            </Link>
            <Link
              href="#forms"
              className="bg-white p-6 rounded-lg shadow-sm hover:shadow-md transition-shadow text-center"
            >
              <FileText className="h-12 w-12 text-blue-600 mx-auto mb-4" />
              <h3 className="text-lg font-semibold text-gray-900 mb-2">Patient Forms</h3>
              <p className="text-gray-600">Download and complete forms online</p>
            </Link>
            <Link
              href="#insurance"
              className="bg-white p-6 rounded-lg shadow-sm hover:shadow-md transition-shadow text-center"
            >
              <CreditCard className="h-12 w-12 text-blue-600 mx-auto mb-4" />
              <h3 className="text-lg font-semibold text-gray-900 mb-2">Insurance & Payment</h3>
              <p className="text-gray-600">Learn about coverage and payment options</p>
            </Link>
          </div>
        </div>
      </section>

      {/* FAQs Section */}
      <section id="faqs" className="py-16">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">Frequently Asked Questions</h2>
            <p className="text-gray-600">
              Get answers to the most common questions about our practice and services
            </p>
          </div>
          <div className="space-y-4">
            {faqs.map((faq, index) => (
              <div key={index} className="bg-white border border-gray-200 rounded-lg">
                <details className="group">
                  <summary className="flex justify-between items-center p-6 cursor-pointer hover:bg-gray-50">
                    <h3 className="text-lg font-semibold text-gray-900 pr-4">{faq.question}</h3>
                    <ChevronDown className="h-5 w-5 text-gray-500 group-open:rotate-180 transition-transform flex-shrink-0" />
                  </summary>
                  <div className="px-6 pb-6">
                    <p className="text-gray-600 leading-relaxed">{faq.answer}</p>
                  </div>
                </details>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Patient Forms Section */}
      <section id="forms" className="py-16 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">Patient Forms</h2>
            <p className="text-gray-600 max-w-2xl mx-auto">
              Save time by downloading and completing our patient forms before your appointment.
              You can also complete them during your visit.
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {forms.map((category, index) => (
              <div key={index} className="bg-white p-6 rounded-lg shadow-sm">
                <FileText className="h-8 w-8 text-blue-600 mb-4" />
                <h3 className="text-xl font-semibold text-gray-900 mb-3">{category.title}</h3>
                <p className="text-gray-600 mb-6">{category.description}</p>
                <ul className="space-y-2 mb-6">
                  {category.items.map((item, itemIndex) => (
                    <li key={itemIndex} className="flex items-center text-sm text-gray-600">
                      <span className="text-blue-600 mr-2">•</span>
                      {item}
                    </li>
                  ))}
                </ul>
                <button className="w-full bg-blue-600 text-white py-2 px-4 rounded-md hover:bg-blue-700 transition-colors font-medium">
                  Download Forms
                </button>
              </div>
            ))}
          </div>
          <div className="text-center mt-8">
            <p className="text-gray-600">
              Prefer to complete forms in person? No problem! We&apos;ll have them ready for you at your appointment.
            </p>
          </div>
        </div>
      </section>

      {/* Insurance & Payment Section */}
      <section id="insurance" className="py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">Insurance & Payment Options</h2>
            <p className="text-gray-600 max-w-2xl mx-auto">
              We work with you to maximize your benefits and offer flexible payment options
            </p>
          </div>
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
            {/* Insurance Information */}
            <div>
              <h3 className="text-2xl font-semibold text-gray-900 mb-6">Insurance Accepted</h3>
              <div className="space-y-4">
                <div className="flex items-start">
                  <Shield className="h-6 w-6 text-blue-600 mr-3 mt-1 flex-shrink-0" />
                  <div>
                    <h4 className="font-semibold text-gray-900 mb-1">Major Insurance Plans</h4>
                    <p className="text-gray-600">We accept most PPO and HMO plans including Delta Dental, Cigna, Aetna, and more.</p>
                  </div>
                </div>
                <div className="flex items-start">
                  <Shield className="h-6 w-6 text-blue-600 mr-3 mt-1 flex-shrink-0" />
                  <div>
                    <h4 className="font-semibold text-gray-900 mb-1">Out-of-Network Benefits</h4>
                    <p className="text-gray-600">If you&apos;re out-of-network, we&apos;ll help you understand your out-of-pocket costs.</p>
                  </div>
                </div>
                <div className="flex items-start">
                  <Shield className="h-6 w-6 text-blue-600 mr-3 mt-1 flex-shrink-0" />
                  <div>
                    <h4 className="font-semibold text-gray-900 mb-1">Insurance Coordination</h4>
                    <p className="text-gray-600">Our team handles insurance claims and helps you maximize your benefits.</p>
                  </div>
                </div>
              </div>
            </div>

            {/* Payment Options */}
            <div>
              <h3 className="text-2xl font-semibold text-gray-900 mb-6">Payment Options</h3>
              <div className="space-y-4">
                <div className="flex items-start">
                  <CreditCard className="h-6 w-6 text-blue-600 mr-3 mt-1 flex-shrink-0" />
                  <div>
                    <h4 className="font-semibold text-gray-900 mb-1">Flexible Financing</h4>
                    <p className="text-gray-600">Interest-free payment plans available through CareCredit and other financing partners.</p>
                  </div>
                </div>
                <div className="flex items-start">
                  <CreditCard className="h-6 w-6 text-blue-600 mr-3 mt-1 flex-shrink-0" />
                  <div>
                    <h4 className="font-semibold text-gray-900 mb-1">Cash & Credit Cards</h4>
                    <p className="text-gray-600">We accept all major credit cards, debit cards, and cash payments.</p>
                  </div>
                </div>
                <div className="flex items-start">
                  <Calendar className="h-6 w-6 text-blue-600 mr-3 mt-1 flex-shrink-0" />
                  <div>
                    <h4 className="font-semibold text-gray-900 mb-1">Monthly Payment Plans</h4>
                    <p className="text-gray-600">Spread treatment costs over time with our in-house payment plans.</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Call to Action */}
      <section className="py-16 bg-blue-600 text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl font-bold mb-4">Have More Questions?</h2>
          <p className="text-xl mb-8 text-blue-100">
            Our friendly team is here to help. Contact us with any questions about our services,
            insurance, or to schedule your appointment.
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
