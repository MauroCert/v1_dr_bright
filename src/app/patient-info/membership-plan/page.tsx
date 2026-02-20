import Image from 'next/image';
import Link from 'next/link';
import { ArrowRight, CheckCircle2, Star, Shield, Heart, Sparkles, Phone, MapPin } from 'lucide-react';

const membershipPerks = [
  'Two professional cleanings per year',
  'Comprehensive exams with digital X-rays',
  'Oral cancer screenings',
  'Free whitening touch-ups when you keep visits on track',
  '15% discount on restorative treatments (crowns, fillings, bridges)',
  '10% discount on cosmetic treatments (veneers, bonding)',
  'Savings on periodontal therapy and nightguards',
  'Savings on Invisalign maintenance trays',
  'Annual credit toward facial aesthetics or cosmetic upgrades',
  'Priority scheduling for appointments',
  'No waiting periods—benefits start immediately',
  'No deductibles, no maximums, no pre-authorizations',
];

const whyMembership = [
  {
    icon: Shield,
    title: 'No Insurance? No Problem.',
    description: 'Our membership plan provides comprehensive coverage for patients without dental insurance at a fraction of the cost.',
  },
  {
    icon: Heart,
    title: 'Simple & Transparent',
    description: 'One flat annual or monthly fee. No surprise bills, no hidden costs, no confusing claims to file.',
  },
  {
    icon: Star,
    title: 'Immediate Benefits',
    description: 'Unlike insurance, there are no waiting periods. Your benefits start the day you enroll.',
  },
  {
    icon: Sparkles,
    title: 'Exclusive Discounts',
    description: 'Members enjoy significant savings on all additional treatments beyond preventive care.',
  },
];

const faqs = [
  {
    question: 'How much does the membership cost?',
    answer: 'Our membership plan is affordably priced with options for annual or monthly payment. Contact our office for current pricing—we\'re happy to walk you through the details.',
  },
  {
    question: 'Can I use the membership with insurance?',
    answer: 'The membership plan is designed primarily for patients without dental insurance. If you have insurance, we\'re happy to help you maximize those benefits instead. However, some patients with limited insurance choose to supplement with our plan.',
  },
  {
    question: 'Are there family plans available?',
    answer: 'Yes! We offer family membership packages at a discounted rate. Ask our front desk team about multi-member pricing.',
  },
  {
    question: 'What\'s not included in the membership?',
    answer: 'The membership covers preventive care (cleanings, exams, X-rays, screenings) and provides discounts on all other treatments. Restorative, cosmetic, and specialty treatments are available at the discounted member rate.',
  },
  {
    question: 'Can I cancel at any time?',
    answer: 'Annual memberships are non-refundable but can be cancelled at renewal. Monthly memberships require a 12-month commitment. We\'re confident you\'ll love the value.',
  },
];

export default function MembershipPlan() {
  return (
    <div className="bg-white">
      {/* HERO */}
      <section className="relative min-h-[60vh] flex items-center justify-center">
        <div className="absolute inset-0">
          <Image
            src="/IMG_5467 copy_edited.avif"
            alt="Membership Plan - Cherry Creek South Dental"
            fill
            className="object-cover"
            priority
          />
          <div className="absolute inset-0 bg-black/50" />
        </div>
        <div className="relative z-10 text-center px-6 max-w-4xl mx-auto">
          <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold leading-tight text-white mb-6">
            Membership <span className="text-[var(--gold)]">Plan</span>
          </h1>
          <p className="text-xl text-white/90 mb-10 max-w-2xl mx-auto">
            Quality dental care without the complexity of insurance. Simple pricing, immediate benefits, and exclusive savings.
          </p>
          <a
            href="tel:3033777744"
            className="inline-flex items-center justify-center bg-[var(--gold)] text-white px-8 py-4 text-base font-semibold transition hover:bg-[var(--gold)]/90"
          >
            Enroll Today
            <ArrowRight className="ml-2 h-5 w-5" />
          </a>
        </div>
      </section>

      {/* WHY MEMBERSHIP */}
      <section className="py-24 bg-[#f8f6f3]">
        <div className="mx-auto max-w-6xl px-6">
          <h2 className="text-3xl sm:text-4xl font-light tracking-wide text-[var(--navy)] text-center mb-16 uppercase">
            Why Choose Our Membership?
          </h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {whyMembership.map((item) => {
              const IconComponent = item.icon;
              return (
                <div key={item.title} className="group border border-[var(--gold)]/40 bg-[#faf9f7] p-8 text-center hover:border-[var(--gold)] hover:shadow-lg transition-all">
                  <div className="w-16 h-16 mx-auto mb-6 rounded-full bg-[var(--navy)] flex items-center justify-center">
                    <IconComponent className="w-8 h-8 text-white" strokeWidth={1.5} />
                  </div>
                  <h3 className="text-lg font-bold text-[var(--navy)] mb-4 leading-snug uppercase tracking-wide">{item.title}</h3>
                  <p className="text-gray-600 leading-relaxed text-sm">{item.description}</p>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* WHAT'S INCLUDED */}
      <section className="py-24 bg-white">
        <div className="mx-auto max-w-6xl px-6">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            <div className="relative h-[500px] overflow-hidden shadow-lg">
              <Image
                src="/54307432591_576cf64694_o.jpg"
                alt="Membership benefits"
                fill
                className="object-cover"
              />
            </div>
            <div className="space-y-6">
              <h2 className="text-3xl sm:text-4xl font-bold text-[var(--navy)]">What&apos;s Included</h2>
              <p className="text-gray-600">Your membership covers everything you need for a healthy smile—and more:</p>
              <ul className="space-y-3">
                {membershipPerks.map((perk) => (
                  <li key={perk} className="flex items-start gap-3">
                    <CheckCircle2 className="h-5 w-5 text-[var(--gold)] flex-shrink-0 mt-0.5" />
                    <span className="text-gray-600 text-sm">{perk}</span>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* CTA BANNER */}
      <section className="py-16 bg-[var(--navy)]">
        <div className="mx-auto max-w-4xl px-6 text-center">
          <h2 className="text-3xl font-bold text-white mb-4">Ready to Join?</h2>
          <p className="text-white/80 mb-8 max-w-2xl mx-auto">
            Enrolling is easy—call us or stop by the office. Your benefits start immediately and you&apos;ll start saving from day one.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a href="tel:3033777744" className="inline-flex items-center justify-center bg-[var(--gold)] text-white px-8 py-4 font-semibold transition hover:bg-[var(--gold)]/90">
              Call (303) 377-7744
            </a>
            <Link href="/contact" className="inline-flex items-center justify-center bg-white/10 text-white border border-white/30 px-8 py-4 font-semibold transition hover:bg-white/20">
              Contact Us
            </Link>
          </div>
        </div>
      </section>

      {/* Geometric Divider */}
      <div className="relative h-24 -mt-1">
        <svg className="absolute w-full h-full" preserveAspectRatio="none" viewBox="0 0 1440 96" fill="none" xmlns="http://www.w3.org/2000/svg">
          <polygon points="0,96 1440,0 1440,96" fill="#f5f5f5" />
          <polygon points="0,0 0,96 1440,0" fill="var(--navy)" />
        </svg>
      </div>

      {/* FAQ */}
      <section className="py-24 bg-[#f5f5f5] -mt-1">
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
              <h2 className="text-3xl sm:text-4xl font-light text-[var(--gold)] mb-4 uppercase tracking-wide">Book Your<br />Appointment</h2>
              <p className="text-gray-600 mb-8">Questions about membership or ready to enroll? Reach out and our team will walk you through everything.</p>
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
