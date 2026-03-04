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
                src="/PenOzi_2026_Derick_BrightSmiles_030 (1).JPG"
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
