import Image from 'next/image';
import Link from 'next/link';
import { ArrowRight, FileText, HelpCircle, CreditCard, Shield, CheckCircle2, Phone, MapPin } from 'lucide-react';

const faqs = [
  {
    question: 'How long are your appointments?',
    answer: 'We schedule longer appointments than most dental practices to ensure thorough, unhurried care. Most appointments are 60–90 minutes, allowing us to provide detailed treatment and answer all your questions.',
  },
  {
    question: 'Do you accept my insurance?',
    answer: 'We accept most major dental insurance plans. Our team will verify your coverage and help you understand your benefits before treatment. We also offer financing options for procedures not covered by insurance.',
  },
  {
    question: 'What should I expect during my first visit?',
    answer: 'Your first visit includes a comprehensive exam, necessary X-rays, and a discussion of your oral health goals. We\'ll create a personalized treatment plan together, ensuring you feel comfortable and informed throughout the process.',
  },
  {
    question: 'Do you offer sedation dentistry?',
    answer: 'Yes, we offer nitrous oxide (laughing gas) and oral sedation for patients who experience dental anxiety or need more extensive procedures. Dr. Bright will discuss the best option for you.',
  },
  {
    question: 'How often should I have dental cleanings?',
    answer: 'Most patients benefit from professional cleanings every 6 months. However, your individual needs may vary based on your oral health. We\'ll recommend the best schedule for you during your exam.',
  },
  {
    question: 'What advanced technology do you use?',
    answer: 'We use AI-powered X-rays for better diagnostics, CBCT technology for 3D imaging, digital scanning for crowns and restorations, and iTero scanning for Invisalign. These tools help us provide more accurate and efficient care.',
  },
  {
    question: 'Do you treat children?',
    answer: 'Yes, we welcome patients of all ages. We create a gentle, welcoming environment for children and use techniques designed to make their dental visits positive experiences.',
  },
  {
    question: 'What payment options do you accept?',
    answer: 'We accept cash, credit cards, and offer financing through CareCredit and other payment plans. We also help you maximize your insurance benefits.',
  },
];

const forms = [
  {
    title: 'New Patient Forms',
    description: 'Complete these forms before your first visit to save time',
    items: ['Patient Registration Form', 'Medical History Questionnaire', 'Insurance Information', 'HIPAA Privacy Notice'],
  },
  {
    title: 'Consent Forms',
    description: 'Forms for specific treatments and procedures',
    items: ['Treatment Consent Form', 'Sedation Consent Form', 'X-Ray Consent Form', 'Crown & Bridge Consent'],
  },
  {
    title: 'Financial Forms',
    description: 'Payment and insurance related documents',
    items: ['Financial Agreement', 'Insurance Assignment', 'Payment Plan Application', 'Credit Card Authorization'],
  },
];

export default function PatientInfo() {
  return (
    <div className="bg-white">
      {/* HERO */}
      <section className="relative min-h-[60vh] flex items-center justify-center">
        <div className="absolute inset-0">
          <Image
            src="/IMG_5467 copy_edited.avif"
            alt="Patient Information - Cherry Creek South Dental"
            fill
            className="object-cover"
            priority
          />
          <div className="absolute inset-0 bg-black/50" />
        </div>
        <div className="relative z-10 text-center px-6 max-w-4xl mx-auto">
          <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold leading-tight text-white mb-6">
            Patient <span className="text-[var(--gold)]">Information</span>
          </h1>
          <p className="text-xl text-white/90 mb-10 max-w-2xl mx-auto">
            Everything you need to know about visiting Cherry Creek South Dental. We&apos;re here to make your experience seamless.
          </p>
          <a
            href="tel:3033777744"
            className="inline-flex items-center justify-center bg-[var(--gold)] text-white px-8 py-4 text-base font-semibold transition hover:bg-[var(--gold)]/90"
          >
            Schedule Your Visit
            <ArrowRight className="ml-2 h-5 w-5" />
          </a>
        </div>
      </section>

      {/* QUICK LINKS */}
      <section className="py-24 bg-[#f8f6f3]">
        <div className="mx-auto max-w-6xl px-6">
          <div className="grid md:grid-cols-3 gap-8">
            <Link href="#faqs" className="group border border-[var(--gold)]/40 bg-[#faf9f7] p-8 text-center hover:border-[var(--gold)] hover:shadow-lg transition-all">
              <div className="w-16 h-16 mx-auto mb-6 rounded-full bg-[var(--navy)] flex items-center justify-center">
                <HelpCircle className="w-8 h-8 text-white" strokeWidth={1.5} />
              </div>
              <h3 className="text-lg font-bold text-[var(--navy)] mb-4 leading-snug uppercase tracking-wide">Frequently Asked Questions</h3>
              <p className="text-gray-600 leading-relaxed text-sm">Find answers to common questions about our practice.</p>
            </Link>
            <Link href="#forms" className="group border border-[var(--gold)]/40 bg-[#faf9f7] p-8 text-center hover:border-[var(--gold)] hover:shadow-lg transition-all">
              <div className="w-16 h-16 mx-auto mb-6 rounded-full bg-[var(--navy)] flex items-center justify-center">
                <FileText className="w-8 h-8 text-white" strokeWidth={1.5} />
              </div>
              <h3 className="text-lg font-bold text-[var(--navy)] mb-4 leading-snug uppercase tracking-wide">Patient Forms</h3>
              <p className="text-gray-600 leading-relaxed text-sm">Download and complete forms before your visit.</p>
            </Link>
            <Link href="#insurance" className="group border border-[var(--gold)]/40 bg-[#faf9f7] p-8 text-center hover:border-[var(--gold)] hover:shadow-lg transition-all">
              <div className="w-16 h-16 mx-auto mb-6 rounded-full bg-[var(--navy)] flex items-center justify-center">
                <CreditCard className="w-8 h-8 text-white" strokeWidth={1.5} />
              </div>
              <h3 className="text-lg font-bold text-[var(--navy)] mb-4 leading-snug uppercase tracking-wide">Insurance & Payment</h3>
              <p className="text-gray-600 leading-relaxed text-sm">Learn about coverage and payment options.</p>
            </Link>
          </div>
        </div>
      </section>

      {/* FAQ SECTION */}
      <section id="faqs" className="py-24 bg-[#f5f5f5]">
        <div className="mx-auto max-w-3xl px-6">
          <div className="text-center mb-12">
            <h2 className="text-3xl sm:text-4xl font-bold text-[var(--navy)] mb-4">Frequently Asked Questions</h2>
            <p className="text-lg text-gray-600">Get answers to the most common questions about our practice</p>
          </div>
          <div className="space-y-4">
            {faqs.map((faq) => (
              <details key={faq.question} className="group bg-white rounded-lg shadow-sm">
                <summary className="flex cursor-pointer items-center justify-between p-6 font-semibold text-[var(--navy)]">
                  {faq.question}
                  <span className="ml-4 flex h-8 w-8 items-center justify-center rounded-full bg-[var(--gold)]/10 text-[var(--gold)] text-xl transition group-open:rotate-45">+</span>
                </summary>
                <div className="px-6 pb-6 text-gray-600 leading-relaxed">{faq.answer}</div>
              </details>
            ))}
          </div>
        </div>
      </section>

      {/* PATIENT FORMS */}
      <section id="forms" className="py-24 bg-white">
        <div className="mx-auto max-w-6xl px-6">
          <div className="text-center mb-16">
            <h2 className="text-3xl sm:text-4xl font-bold text-[var(--navy)] mb-4">Patient Forms</h2>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto">
              Save time by downloading and completing our patient forms before your appointment.
            </p>
          </div>
          <div className="grid md:grid-cols-3 gap-8">
            {forms.map((category) => (
              <div key={category.title} className="bg-white shadow-sm border border-gray-100 p-8">
                <div className="w-12 h-12 rounded-full bg-[var(--gold)]/10 flex items-center justify-center mb-6">
                  <FileText className="h-6 w-6 text-[var(--gold)]" />
                </div>
                <h3 className="text-xl font-bold text-[var(--navy)] mb-3">{category.title}</h3>
                <p className="text-gray-600 text-sm mb-6">{category.description}</p>
                <ul className="space-y-2 mb-6">
                  {category.items.map((item) => (
                    <li key={item} className="flex items-center gap-2 text-sm text-gray-600">
                      <CheckCircle2 className="h-4 w-4 text-[var(--gold)] flex-shrink-0" />
                      {item}
                    </li>
                  ))}
                </ul>
                <button className="w-full bg-[var(--gold)] text-white py-3 font-semibold transition hover:bg-[var(--gold)]/90">
                  Download Forms
                </button>
              </div>
            ))}
          </div>
          <p className="text-center text-gray-500 mt-8 text-sm">
            Prefer to complete forms in person? No problem! We&apos;ll have them ready for you at your appointment.
          </p>
        </div>
      </section>

      {/* Geometric Divider */}
      <div className="relative h-24 -mt-1">
        <svg className="absolute w-full h-full" preserveAspectRatio="none" viewBox="0 0 1440 96" fill="none" xmlns="http://www.w3.org/2000/svg">
          <polygon points="0,96 1440,0 1440,96" fill="#f5f5f5" />
          <polygon points="0,0 0,96 1440,0" fill="white" />
        </svg>
      </div>

      {/* INSURANCE & PAYMENT */}
      <section id="insurance" className="py-24 bg-[#f5f5f5] -mt-1">
        <div className="mx-auto max-w-6xl px-6">
          <div className="text-center mb-16">
            <h2 className="text-3xl sm:text-4xl font-bold text-[var(--navy)] mb-4">Insurance & Payment Options</h2>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto">We work with you to maximize your benefits and offer flexible payment options</p>
          </div>
          <div className="grid lg:grid-cols-2 gap-12">
            <div className="bg-white p-8 shadow-sm border-l-4 border-[var(--gold)]">
              <h3 className="text-2xl font-bold text-[var(--navy)] mb-6">Insurance Accepted</h3>
              <div className="space-y-4">
                <div className="flex items-start gap-4">
                  <div className="w-10 h-10 rounded-full bg-[var(--gold)]/10 flex items-center justify-center flex-shrink-0 mt-0.5">
                    <Shield className="h-5 w-5 text-[var(--gold)]" />
                  </div>
                  <div>
                    <h4 className="font-semibold text-[var(--navy)]">Major Insurance Plans</h4>
                    <p className="text-gray-600 text-sm">We accept most PPO and HMO plans including Delta Dental, Cigna, Aetna, and more.</p>
                  </div>
                </div>
                <div className="flex items-start gap-4">
                  <div className="w-10 h-10 rounded-full bg-[var(--gold)]/10 flex items-center justify-center flex-shrink-0 mt-0.5">
                    <Shield className="h-5 w-5 text-[var(--gold)]" />
                  </div>
                  <div>
                    <h4 className="font-semibold text-[var(--navy)]">Out-of-Network Benefits</h4>
                    <p className="text-gray-600 text-sm">If you&apos;re out-of-network, we&apos;ll help you understand your out-of-pocket costs.</p>
                  </div>
                </div>
                <div className="flex items-start gap-4">
                  <div className="w-10 h-10 rounded-full bg-[var(--gold)]/10 flex items-center justify-center flex-shrink-0 mt-0.5">
                    <Shield className="h-5 w-5 text-[var(--gold)]" />
                  </div>
                  <div>
                    <h4 className="font-semibold text-[var(--navy)]">Insurance Coordination</h4>
                    <p className="text-gray-600 text-sm">Our team handles insurance claims and helps you maximize your benefits.</p>
                  </div>
                </div>
              </div>
            </div>
            <div className="bg-white p-8 shadow-sm border-l-4 border-[var(--gold)]">
              <h3 className="text-2xl font-bold text-[var(--navy)] mb-6">Payment Options</h3>
              <div className="space-y-4">
                <div className="flex items-start gap-4">
                  <div className="w-10 h-10 rounded-full bg-[var(--gold)]/10 flex items-center justify-center flex-shrink-0 mt-0.5">
                    <CreditCard className="h-5 w-5 text-[var(--gold)]" />
                  </div>
                  <div>
                    <h4 className="font-semibold text-[var(--navy)]">Flexible Financing</h4>
                    <p className="text-gray-600 text-sm">Interest-free payment plans available through CareCredit and other financing partners.</p>
                  </div>
                </div>
                <div className="flex items-start gap-4">
                  <div className="w-10 h-10 rounded-full bg-[var(--gold)]/10 flex items-center justify-center flex-shrink-0 mt-0.5">
                    <CreditCard className="h-5 w-5 text-[var(--gold)]" />
                  </div>
                  <div>
                    <h4 className="font-semibold text-[var(--navy)]">Cash & Credit Cards</h4>
                    <p className="text-gray-600 text-sm">We accept all major credit cards, debit cards, and cash payments.</p>
                  </div>
                </div>
                <div className="flex items-start gap-4">
                  <div className="w-10 h-10 rounded-full bg-[var(--gold)]/10 flex items-center justify-center flex-shrink-0 mt-0.5">
                    <CreditCard className="h-5 w-5 text-[var(--gold)]" />
                  </div>
                  <div>
                    <h4 className="font-semibold text-[var(--navy)]">Monthly Payment Plans</h4>
                    <p className="text-gray-600 text-sm">Spread treatment costs over time with our in-house payment plans.</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* BOOK YOUR APPOINTMENT */}
      <section className="py-24 bg-white">
        <div className="mx-auto max-w-6xl px-6">
          <div className="grid lg:grid-cols-2 gap-12">
            <div>
              <h2 className="text-3xl sm:text-4xl font-light text-[var(--gold)] mb-4 uppercase tracking-wide">Have More<br />Questions?</h2>
              <p className="text-gray-600 mb-8">Our friendly team is here to help. Contact us with any questions about our services, insurance, or to schedule your appointment.</p>
              <form className="space-y-4">
                <div className="grid grid-cols-2 gap-4">
                  <input type="text" placeholder="First Name" className="w-full px-4 py-3 bg-white border border-gray-200 focus:border-[var(--gold)] focus:outline-none transition" />
                  <input type="text" placeholder="Last Name" className="w-full px-4 py-3 bg-white border border-gray-200 focus:border-[var(--gold)] focus:outline-none transition" />
                </div>
                <div className="grid grid-cols-2 gap-4">
                  <input type="email" placeholder="Email Address" className="w-full px-4 py-3 bg-white border border-gray-200 focus:border-[var(--gold)] focus:outline-none transition" />
                  <input type="tel" placeholder="Mobile Number" className="w-full px-4 py-3 bg-white border border-gray-200 focus:border-[var(--gold)] focus:outline-none transition" />
                </div>
                <textarea placeholder="Your Question" rows={4} className="w-full px-4 py-3 bg-white border border-gray-200 focus:border-[var(--gold)] focus:outline-none transition resize-none" />
                <button type="submit" className="w-full bg-[var(--gold)] text-white py-4 font-semibold transition hover:bg-[var(--gold)]/90">Submit Form</button>
              </form>
            </div>
            <div className="space-y-6 lg:pt-20">
              <div className="bg-[#f5f5f5] p-6 shadow-sm border-l-4 border-[var(--gold)]">
                <h3 className="text-xl font-semibold text-[var(--navy)] mb-3">Call Us</h3>
                <div className="flex items-center gap-3">
                  <div className="w-10 h-10 rounded-full bg-[var(--gold)] flex items-center justify-center"><Phone className="h-5 w-5 text-white" /></div>
                  <a href="tel:(303) 377-7744" className="text-gray-600 hover:text-[var(--gold)] transition">(303) 377-7744</a>
                </div>
              </div>
              <div className="bg-[#f5f5f5] p-6 shadow-sm border-l-4 border-[var(--gold)]">
                <h3 className="text-xl font-semibold text-[var(--navy)] mb-3">Our Address</h3>
                <div className="flex items-center gap-3">
                  <div className="w-10 h-10 rounded-full bg-[var(--gold)] flex items-center justify-center"><MapPin className="h-5 w-5 text-white" /></div>
                  <a href="https://maps.google.com/?q=5055+E+Kentucky+Ave,+Denver,+CO+80246" target="_blank" rel="noopener noreferrer" className="text-gray-600 hover:text-[var(--gold)] transition">5055 E Kentucky Ave, Denver, CO 80246</a>
                </div>
              </div>
              <div className="bg-[#f5f5f5] p-6 shadow-sm border-l-4 border-[var(--gold)]">
                <h3 className="text-xl font-semibold text-[var(--navy)] mb-3">Get Connected</h3>
                <div className="flex items-center gap-3">
                  <a href="https://g.page/r/CQVBXHNMdHxCEAE" target="_blank" rel="noopener noreferrer" className="w-10 h-10 rounded-full bg-[var(--gold)] flex items-center justify-center hover:bg-[var(--navy)] transition"><svg className="h-5 w-5 text-white" viewBox="0 0 24 24" fill="currentColor"><path d="M12.48 10.92v3.28h7.84c-.24 1.84-.853 3.187-1.787 4.133-1.147 1.147-2.933 2.4-6.053 2.4-4.827 0-8.6-3.893-8.6-8.72s3.773-8.72 8.6-8.72c2.6 0 4.507 1.027 5.907 2.347l2.307-2.307C18.747 1.44 16.133 0 12.48 0 5.867 0 .307 5.387.307 12s5.56 12 12.173 12c3.573 0 6.267-1.173 8.373-3.36 2.16-2.16 2.84-5.213 2.84-7.667 0-.76-.053-1.467-.173-2.053H12.48z"/></svg></a>
                  <a href="https://www.facebook.com/drbrightdds" target="_blank" rel="noopener noreferrer" className="w-10 h-10 rounded-full bg-[var(--gold)] flex items-center justify-center hover:bg-[var(--navy)] transition"><svg className="h-5 w-5 text-white" viewBox="0 0 24 24" fill="currentColor"><path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z"/></svg></a>
                  <a href="https://www.instagram.com/drbrightdds" target="_blank" rel="noopener noreferrer" className="w-10 h-10 rounded-full bg-[var(--gold)] flex items-center justify-center hover:bg-[var(--navy)] transition"><svg className="h-5 w-5 text-white" viewBox="0 0 24 24" fill="currentColor"><path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z"/></svg></a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
