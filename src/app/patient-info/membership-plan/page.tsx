import Image from 'next/image';
import Link from 'next/link';
import { ArrowRight, CheckCircle2, Star, Shield, Heart, Sparkles, Phone, MapPin } from 'lucide-react';

const membershipPerks = [
  'All dental exams',
  'All radiographs (X-rays)',
  'Two regular hygiene cleanings per year',
  'All fluoride applications',
  '$500 off Invisalign',
  '15% off all other dental treatments',
];

const whyJoin = [
  'Save money compared to standard dental insurance premiums.',
  'No waiting periods, pre-approvals, or claim hassles.',
  'Preventive care included — because the best dental care starts with prevention.',
  'Exclusive savings on cosmetic, restorative, and specialty treatments.',
];

const planDetails = [
  'Membership is $600 annually, payable in full, or you may choose the monthly equivalent.',
  'The plan is valid for 12 months from the date of purchase.',
  'Unused benefits do not carry over and have no cash value at expiration.',
  'This plan is only valid at Cherry Creek South Dental.',
];

const faqs = [
  {
    question: 'Do I have to be insured to enroll?',
    answer: 'No — this plan is designed for patients without dental insurance or those seeking a more affordable alternative.',
  },
  {
    question: 'Can I use my membership benefits right away?',
    answer: 'Yes! Once you enroll, your benefits are active immediately and valid for 12 months.',
  },
  {
    question: 'Can I use the discounts on any treatment?',
    answer: 'Yes — you receive $500 off Invisalign and 15% off all other treatments offered at our practice.',
  },
  {
    question: 'Do unused services carry over to the next year?',
    answer: 'No — benefits expire at the end of your 12-month plan term and do not have a cash value.',
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
            Cherry Creek South Dental <span className="text-[var(--gold)]">Membership Plan</span>
          </h1>
          <p className="text-xl text-white/90 mb-10 max-w-2xl mx-auto">
            Affordable Dental Care That Makes Sense
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

      {/* INTRO */}
      <section className="py-24 bg-white">
        <div className="mx-auto max-w-4xl px-6 text-center">
          <p className="text-lg text-gray-600 leading-relaxed mb-6">
            At Cherry Creek South Dental, we believe everyone should have access to quality dental care without the stress of high monthly premiums or insurance hurdles. That&apos;s why we offer our Membership Plan, a simple, affordable alternative for patients who want excellent care with predictable pricing.
          </p>
          <div className="bg-[var(--navy)] text-white p-8 mt-8">
            <p className="text-lg leading-relaxed">
              Most dental insurance premiums cost over <span className="font-bold text-white/60 line-through">$50 per month</span>. Our membership plan is just <span className="text-[var(--gold)] font-bold text-2xl">$50 per month</span>, giving you access to essential dental services and exclusive savings, hassle-free, with better benefits and no waiting on hold.
            </p>
          </div>
        </div>
      </section>

      {/* WHAT'S INCLUDED */}
      <section className="py-24 bg-[#f5f5f5]">
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
              <h2 className="text-3xl sm:text-4xl font-bold text-[var(--navy)]">What&apos;s Included in Your Membership</h2>
              <p className="text-gray-600">
                When you enroll in the Cherry Creek South Dental Membership Plan, you receive the following benefits:
              </p>
              <ul className="space-y-4">
                {membershipPerks.map((perk) => (
                  <li key={perk} className="flex items-start gap-3">
                    <CheckCircle2 className="h-6 w-6 text-[var(--gold)] flex-shrink-0 mt-0.5" />
                    <span className="text-gray-700 font-medium">{perk}</span>
                  </li>
                ))}
              </ul>
              <p className="text-gray-500 italic border-l-4 border-[var(--gold)] pl-4 text-sm">
                These benefits are designed to make preventive care easy and affordable while giving you meaningful discounts on the additional care you might need.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* PLAN DETAILS & WHY JOIN */}
      <section className="py-24 bg-white">
        <div className="mx-auto max-w-6xl px-6">
          <div className="grid lg:grid-cols-2 gap-12">
            {/* Plan Details */}
            <div className="bg-[#f8f6f3] p-8 border-l-4 border-[var(--gold)]">
              <h3 className="text-2xl font-bold text-[var(--navy)] mb-6">Plan Details & Terms</h3>
              <ul className="space-y-4">
                {planDetails.map((detail) => (
                  <li key={detail} className="flex items-start gap-3">
                    <Star className="h-5 w-5 text-[var(--gold)] flex-shrink-0 mt-0.5" />
                    <span className="text-gray-600 text-sm">{detail}</span>
                  </li>
                ))}
              </ul>
            </div>

            {/* Why Join */}
            <div className="bg-[var(--navy)] text-white p-8">
              <h3 className="text-2xl font-bold text-white mb-6">Why Join the Membership Plan?</h3>
              <ul className="space-y-4">
                {whyJoin.map((reason) => (
                  <li key={reason} className="flex items-start gap-3">
                    <CheckCircle2 className="h-5 w-5 text-[var(--gold)] flex-shrink-0 mt-0.5" />
                    <span className="text-white/90 text-sm">{reason}</span>
                  </li>
                ))}
              </ul>
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

      {/* READY TO GET STARTED */}
      <section className="py-16 bg-[var(--navy)]">
        <div className="mx-auto max-w-4xl px-6 text-center">
          <h2 className="text-3xl font-bold text-white mb-4">Ready to Get Started?</h2>
          <p className="text-white/80 mb-8 max-w-2xl mx-auto">
            Joining is simple — inquire at the front desk, call our office, or enroll online. With easy, affordable care and meaningful savings, the Cherry Creek South Dental Membership Plan is a smart way to keep your smile healthy and bright.
          </p>
          <a
            href="tel:3033777744"
            className="inline-flex items-center justify-center bg-[var(--gold)] text-white px-8 py-4 font-semibold transition hover:bg-[var(--gold)]/90"
          >
            Sign Up for the Membership Plan Today!
            <ArrowRight className="ml-2 h-5 w-5" />
          </a>
        </div>
      </section>

      {/* BOOK YOUR APPOINTMENT */}
      <section className="py-24 bg-[#f5f5f5]">
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
              <div className="bg-white p-6 shadow-sm border-l-4 border-[var(--gold)]">
                <h3 className="text-xl font-semibold text-[var(--navy)] mb-3">Call Us</h3>
                <div className="flex items-center gap-3">
                  <div className="w-10 h-10 rounded-full bg-[var(--gold)] flex items-center justify-center"><Phone className="h-5 w-5 text-white" /></div>
                  <a href="tel:(303) 377-7744" className="text-gray-600 hover:text-[var(--gold)] transition">(303) 377-7744</a>
                </div>
              </div>
              <div className="bg-white p-6 shadow-sm border-l-4 border-[var(--gold)]">
                <h3 className="text-xl font-semibold text-[var(--navy)] mb-3">Our Address</h3>
                <div className="flex items-center gap-3">
                  <div className="w-10 h-10 rounded-full bg-[var(--gold)] flex items-center justify-center"><MapPin className="h-5 w-5 text-white" /></div>
                  <a href="https://maps.google.com/?q=5055+E+Kentucky+Ave,+Denver,+CO+80246" target="_blank" rel="noopener noreferrer" className="text-gray-600 hover:text-[var(--gold)] transition">5055 E Kentucky Ave, Denver, CO 80246</a>
                </div>
              </div>
              <div className="bg-white p-6 shadow-sm border-l-4 border-[var(--gold)]">
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
