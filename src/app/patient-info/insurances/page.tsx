import Image from 'next/image';
import Link from 'next/link';
import { ArrowRight, CheckCircle2, Shield, CreditCard, Heart, Phone, MapPin } from 'lucide-react';

const insurancePlans = [
  'Delta Dental',
  'Cigna',
  'Aetna',
  'MetLife',
  'United Healthcare',
  'Guardian',
  'Humana',
  'BlueCross BlueShield',
  'Principal',
  'Ameritas',
  'Sun Life',
  'And many more…',
];

const paymentOptions = [
  {
    title: 'CareCredit Financing',
    description: 'Interest-free payment plans for 6, 12, or 18 months on qualifying treatments. Apply online or in-office—approval takes just minutes.',
  },
  {
    title: 'Major Credit Cards',
    description: 'We accept Visa, Mastercard, American Express, and Discover for your convenience.',
  },
  {
    title: 'Cash & Debit',
    description: 'Cash and debit card payments are always welcome at our office.',
  },
  {
    title: 'In-House Payment Plans',
    description: 'For larger treatments, we offer customized monthly payment plans to help spread the cost over time. No third-party financing required.',
  },
];

const faqs = [
  {
    question: 'Do you accept my insurance?',
    answer: 'We accept most major PPO dental insurance plans. The best way to verify is to call our office at (303) 377-7744 and our team will check your specific plan and benefits before your visit.',
  },
  {
    question: 'Are you in-network or out-of-network?',
    answer: 'We are in-network with several major insurance providers and out-of-network with others. Even if we are out-of-network with your plan, you may still have coverage. Our team will help you understand your out-of-network benefits and maximize your reimbursement.',
  },
  {
    question: 'Will you file insurance claims for me?',
    answer: 'Yes! Our team handles all insurance claim submissions on your behalf. We also follow up on claims to ensure you receive the maximum benefit you\'re entitled to.',
  },
  {
    question: 'What if I don\'t have dental insurance?',
    answer: 'No problem! We offer a comprehensive Membership Plan that provides preventive care coverage and significant discounts on all treatments. We also offer CareCredit financing and in-house payment plans.',
  },
  {
    question: 'Do you offer payment plans for expensive treatments?',
    answer: 'Absolutely. We believe cost should never be a barrier to great dental care. Between CareCredit financing, our in-house payment plans, and our membership discounts, we can find a solution that works for your budget.',
  },
  {
    question: 'How do I maximize my insurance benefits?',
    answer: 'Most dental plans reset annually, so unused benefits don\'t roll over. We recommend scheduling your preventive visits and any recommended treatments before your benefits expire. Our team will help you strategize to get the most from your plan.',
  },
];

export default function Insurances() {
  return (
    <div className="bg-white">
      {/* HERO */}
      <section className="relative min-h-[60vh] flex items-center justify-center">
        <div className="absolute inset-0">
          <Image
            src="/IMG_5467 copy_edited.avif"
            alt="Insurance & Payment - Cherry Creek South Dental"
            fill
            className="object-cover"
            priority
          />
          <div className="absolute inset-0 bg-black/50" />
        </div>
        <div className="relative z-10 text-center px-6 max-w-4xl mx-auto">
          <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold leading-tight text-white mb-6">
            Insurance & <span className="text-[var(--gold)]">Payment</span>
          </h1>
          <p className="text-xl text-white/90 mb-10 max-w-2xl mx-auto">
            We accept most major dental insurance plans and offer flexible payment options so cost is never a barrier to great care.
          </p>
          <a
            href="tel:3033777744"
            className="inline-flex items-center justify-center bg-[var(--gold)] text-white px-8 py-4 text-base font-semibold transition hover:bg-[var(--gold)]/90"
          >
            Verify Your Coverage
            <ArrowRight className="ml-2 h-5 w-5" />
          </a>
        </div>
      </section>

      {/* INSURANCE PLANS */}
      <section className="py-24 bg-white">
        <div className="mx-auto max-w-6xl px-6">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            <div className="space-y-6">
              <h2 className="text-3xl sm:text-4xl font-bold text-[var(--navy)]">Insurance Plans We Accept</h2>
              <p className="text-gray-600 leading-relaxed">
                We work with most major dental insurance providers to help you get the most out of your benefits. Our team handles all claims and paperwork so you can focus on your smile.
              </p>
              <div className="grid grid-cols-2 gap-3">
                {insurancePlans.map((plan) => (
                  <div key={plan} className="flex items-center gap-2">
                    <CheckCircle2 className="h-4 w-4 text-[var(--gold)] flex-shrink-0" />
                    <span className="text-gray-600 text-sm">{plan}</span>
                  </div>
                ))}
              </div>
              <p className="text-gray-500 italic border-l-4 border-[var(--gold)] pl-4 text-sm">
                Don&apos;t see your plan listed? Call us at (303) 377-7744—we likely accept it or can help you understand your out-of-network benefits.
              </p>
            </div>
            <div className="space-y-6">
              <div className="bg-[#f8f6f3] p-8 border-l-4 border-[var(--gold)]">
                <h3 className="text-xl font-bold text-[var(--navy)] mb-4">How We Help With Insurance</h3>
                <ul className="space-y-3">
                  {[
                    'Verify your coverage before your first visit',
                    'Submit all claims electronically on your behalf',
                    'Follow up on pending claims to maximize reimbursement',
                    'Explain your benefits clearly so there are no surprises',
                    'Help you understand co-pays and out-of-pocket costs upfront',
                  ].map((item) => (
                    <li key={item} className="flex items-start gap-3">
                      <Shield className="h-5 w-5 text-[var(--gold)] flex-shrink-0 mt-0.5" />
                      <span className="text-gray-600 text-sm">{item}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Geometric Divider */}
      <div className="relative h-24 -mt-1">
        <svg className="absolute w-full h-full" preserveAspectRatio="none" viewBox="0 0 1440 96" fill="none" xmlns="http://www.w3.org/2000/svg">
          <polygon points="0,96 1440,0 1440,96" fill="#f5f5f5" />
          <polygon points="0,0 0,96 1440,0" fill="white" />
        </svg>
      </div>

      {/* PAYMENT OPTIONS */}
      <section className="py-24 bg-[#f5f5f5] -mt-1">
        <div className="mx-auto max-w-6xl px-6">
          <div className="text-center mb-16">
            <h2 className="text-3xl sm:text-4xl font-bold text-[var(--navy)] mb-4">Payment Options</h2>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto">Flexible ways to pay for the care you need</p>
          </div>
          <div className="grid md:grid-cols-2 gap-8">
            {paymentOptions.map((option) => (
              <div key={option.title} className="bg-white shadow-sm p-8 border-l-4 border-[var(--gold)]">
                <div className="flex items-start gap-4">
                  <div className="w-10 h-10 rounded-full bg-[var(--gold)]/10 flex items-center justify-center flex-shrink-0 mt-0.5">
                    <CreditCard className="h-5 w-5 text-[var(--gold)]" />
                  </div>
                  <div>
                    <h3 className="font-bold text-[var(--navy)] text-lg mb-2">{option.title}</h3>
                    <p className="text-gray-600 text-sm leading-relaxed">{option.description}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* MEMBERSHIP CTA */}
      <section className="py-16 bg-[var(--navy)]">
        <div className="mx-auto max-w-4xl px-6 text-center">
          <h2 className="text-3xl font-bold text-white mb-4">No Insurance? Consider Our Membership Plan</h2>
          <p className="text-white/80 mb-8 max-w-2xl mx-auto">
            Our in-house membership plan covers preventive care and provides exclusive discounts on all treatments—with no deductibles, no maximums, and no waiting periods.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link
              href="/patient-info/membership-plan"
              className="inline-flex items-center justify-center bg-[var(--gold)] text-white px-8 py-4 font-semibold transition hover:bg-[var(--gold)]/90"
            >
              View Membership Plan
              <ArrowRight className="ml-2 h-5 w-5" />
            </Link>
            <a
              href="tel:3033777744"
              className="inline-flex items-center justify-center bg-white/10 text-white border border-white/30 px-8 py-4 font-semibold transition hover:bg-white/20"
            >
              Call (303) 377-7744
            </a>
          </div>
        </div>
      </section>

      {/* Two-Tone Divider */}
      <div className="relative h-24">
        <svg className="absolute w-full h-full" preserveAspectRatio="none" viewBox="0 0 1440 96" fill="none" xmlns="http://www.w3.org/2000/svg">
          <polygon points="0,96 0,20 1440,96" fill="var(--navy)" />
          <polygon points="950,96 1440,40 1440,96" fill="var(--gold)" />
        </svg>
      </div>

      {/* FAQ */}
      <section className="py-24 bg-[#f5f5f5]">
        <div className="mx-auto max-w-3xl px-6">
          <div className="text-center mb-12">
            <h2 className="text-3xl sm:text-4xl font-bold text-[var(--navy)] mb-4">Frequently Asked Questions</h2>
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

      {/* BOOK YOUR APPOINTMENT */}
      <section className="py-24 bg-white">
        <div className="mx-auto max-w-6xl px-6">
          <div className="grid lg:grid-cols-2 gap-12">
            <div>
              <h2 className="text-3xl sm:text-4xl font-light text-[var(--gold)] mb-4 uppercase tracking-wide">Have<br />Questions?</h2>
              <p className="text-gray-600 mb-8">Our team is happy to verify your insurance, explain your benefits, or discuss payment options. Reach out anytime.</p>
              <form className="space-y-4">
                <div className="grid grid-cols-2 gap-4">
                  <input type="text" placeholder="First Name" className="w-full px-4 py-3 bg-white border border-gray-200 focus:border-[var(--gold)] focus:outline-none transition" />
                  <input type="text" placeholder="Last Name" className="w-full px-4 py-3 bg-white border border-gray-200 focus:border-[var(--gold)] focus:outline-none transition" />
                </div>
                <div className="grid grid-cols-2 gap-4">
                  <input type="email" placeholder="Email Address" className="w-full px-4 py-3 bg-white border border-gray-200 focus:border-[var(--gold)] focus:outline-none transition" />
                  <input type="tel" placeholder="Mobile Number" className="w-full px-4 py-3 bg-white border border-gray-200 focus:border-[var(--gold)] focus:outline-none transition" />
                </div>
                <textarea placeholder="Your Message" rows={4} className="w-full px-4 py-3 bg-white border border-gray-200 focus:border-[var(--gold)] focus:outline-none transition resize-none" />
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
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
