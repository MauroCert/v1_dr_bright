import Image from 'next/image';
import Link from 'next/link';
import { ArrowRight, CheckCircle2, Shield, Phone, MapPin, MessageCircle } from 'lucide-react';

const insurers = [
  'Delta Dental',
  'Aetna',
  'Cigna',
  'Humana',
  'MetLife',
];

const howItWorks = [
  'Verify your benefits before your visit.',
  'Explain your coverage so you know what to expect.',
  'File claims on your behalf as a courtesy.',
  'Answer questions about out-of-pocket costs and treatment estimates.',
];

export default function Insurances() {
  return (
    <div className="bg-white">
      {/* HERO */}
      <section className="relative min-h-[60vh] flex items-center justify-center">
        <div className="absolute inset-0">
          <Image
            src="/IMG_5467 copy_edited.avif"
            alt="Insurance - Cherry Creek South Dental"
            fill
            className="object-cover"
            priority
          />
          <div className="absolute inset-0 bg-black/50" />
        </div>
        <div className="relative z-10 text-center px-6 max-w-4xl mx-auto">
          <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold leading-tight text-white mb-6">
            <span className="text-[var(--gold)]">Insurances</span>
          </h1>
          <p className="text-xl text-white/90 mb-10 max-w-2xl mx-auto">
            We&apos;ll Help You Make the Most of Your Dental Benefits
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

      {/* INTRO */}
      <section className="py-24 bg-white">
        <div className="mx-auto max-w-4xl px-6">
          <p className="text-lg text-gray-600 leading-relaxed text-center mb-12">
            At Cherry Creek South Dental, quality dental care shouldn&apos;t be complicated — and your insurance shouldn&apos;t be either. We&apos;re proud to partner with several major dental insurers so that excellent care is both accessible and affordable for patients of all ages.
          </p>
        </div>
      </section>

      {/* IN-NETWORK INSURERS */}
      <section className="py-24 bg-[#f5f5f5]">
        <div className="mx-auto max-w-6xl px-6">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            <div className="space-y-6">
              <h2 className="text-3xl sm:text-4xl font-bold text-[var(--navy)]">We&apos;re In-Network With Top Insurers</h2>
              <p className="text-gray-600 leading-relaxed">
                We accept and are in-network with several leading insurance providers, which helps you maximize your dental benefits and reduce your out-of-pocket costs. Our goal is to make your visit simple, straightforward, and stress-free.
              </p>
              <p className="text-gray-600 leading-relaxed">
                Although every plan is different, being in-network often means lower costs for you. If you don&apos;t see your insurance listed below, there&apos;s a good chance we still participate in your plan — just give us a call to verify your coverage. We&apos;re always happy to help!
              </p>
            </div>
            <div>
              <div className="bg-white p-8 shadow-sm border-l-4 border-[var(--gold)]">
                <h3 className="text-xl font-bold text-[var(--navy)] mb-6">Some of the insurers we work with include:</h3>
                <ul className="space-y-4">
                  {insurers.map((insurer) => (
                    <li key={insurer} className="flex items-center gap-3">
                      <Shield className="h-5 w-5 text-[var(--gold)] flex-shrink-0" />
                      <span className="text-gray-700 font-medium text-lg">{insurer}</span>
                    </li>
                  ))}
                </ul>
                <p className="text-gray-500 italic mt-6 text-sm">
                  If your plan isn&apos;t listed, don&apos;t worry — call us to check!
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* HOW IT WORKS */}
      <section className="py-24 bg-white">
        <div className="mx-auto max-w-6xl px-6">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            <div className="relative h-[400px] overflow-hidden shadow-lg">
              <Image
                src="/54307432591_576cf64694_o.jpg"
                alt="Our team helping with insurance"
                fill
                className="object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent" />
              <div className="absolute bottom-8 left-8 right-8 text-white">
                <p className="text-2xl font-bold">Focus on your care, not the paperwork</p>
              </div>
            </div>
            <div className="space-y-6">
              <h2 className="text-3xl sm:text-4xl font-bold text-[var(--navy)]">How It Works</h2>
              <p className="text-gray-600 leading-relaxed">
                Insurance can be confusing — coverage, deductibles, co-pays, and annual maximums all vary by plan. That&apos;s why our knowledgeable team is here to help you every step of the way:
              </p>
              <div className="space-y-4">
                {howItWorks.map((step, index) => (
                  <div key={step} className="flex gap-4">
                    <span className="flex h-8 w-8 items-center justify-center rounded-full bg-[var(--gold)] text-sm font-bold text-white flex-shrink-0">
                      {index + 1}
                    </span>
                    <p className="text-gray-600 pt-1">{step}</p>
                  </div>
                ))}
              </div>
              <p className="text-gray-600 leading-relaxed font-medium">
                We walk you through your insurance benefits so you can focus on your care, not the paperwork.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* NO INSURANCE CTA */}
      <section className="py-16 bg-[var(--navy)]">
        <div className="mx-auto max-w-4xl px-6 text-center">
          <h2 className="text-3xl font-bold text-white mb-4">Don&apos;t Have Dental Insurance?</h2>
          <p className="text-white/80 text-lg mb-4">No insurance? No problem!</p>
          <p className="text-white/80 mb-8 max-w-2xl mx-auto">
            Our Cherry Creek South Dental Membership Plan provides an affordable alternative that includes preventive care and exclusive discounts on additional services — with no waiting periods, no annual maximums, and no insurance company hassles.
          </p>
          <Link
            href="/patient-info/membership-plan"
            className="inline-flex items-center justify-center bg-[var(--gold)] text-white px-8 py-4 font-semibold transition hover:bg-[var(--gold)]/90"
          >
            View Membership Plan
            <ArrowRight className="ml-2 h-5 w-5" />
          </Link>
        </div>
      </section>

      {/* STILL HAVE QUESTIONS */}
      <section className="py-24 bg-[#f8f6f3]">
        <div className="mx-auto max-w-4xl px-6 text-center">
          <h2 className="text-3xl sm:text-4xl font-bold text-[var(--navy)] mb-6">Still Have Questions?</h2>
          <p className="text-lg text-gray-600 leading-relaxed mb-10">
            Our team is here to help you understand your options and confidently use your benefits. Call or text us anytime — we&apos;ll walk you through coverage, uninsured options, and your best path to a healthier smile.
          </p>
          <div className="flex flex-col sm:flex-row gap-6 justify-center">
            <a
              href="tel:3033777744"
              className="inline-flex items-center justify-center gap-3 bg-[var(--gold)] text-white px-8 py-4 font-semibold transition hover:bg-[var(--gold)]/90"
            >
              <Phone className="h-5 w-5" />
              (303) 377-7744
            </a>
            <a
              href="sms:7208641333"
              className="inline-flex items-center justify-center gap-3 border-2 border-[var(--navy)] text-[var(--navy)] px-8 py-4 font-semibold transition hover:bg-[var(--navy)] hover:text-white"
            >
              <MessageCircle className="h-5 w-5" />
              (720) 864-1333
            </a>
          </div>
        </div>
      </section>

      {/* BOOK YOUR APPOINTMENT */}
      <section className="py-24 bg-[#f5f5f5]">
        <div className="mx-auto max-w-6xl px-6">
          <div className="grid lg:grid-cols-2 gap-12">
            <div>
              <h2 className="text-3xl sm:text-4xl font-light text-[var(--gold)] mb-4 uppercase tracking-wide">Book Your<br />Appointment</h2>
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
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
