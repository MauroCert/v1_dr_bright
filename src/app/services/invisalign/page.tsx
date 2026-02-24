import Image from 'next/image';
import Link from 'next/link';
import { ArrowRight, CheckCircle2, Sparkles, Heart, Shield, Phone, MapPin, Smile } from 'lucide-react';

const whyChoose = [
  'Virtually invisible aligners that blend with your natural smile',
  'Comfortable and easy-to-wear—no metal wires or brackets',
  'Custom treatment plans tailored to your specific needs',
  'Faster treatment times compared to traditional braces',
  'Removable aligners for easy eating, brushing, and flossing',
];

const journeySteps = [
  {
    title: 'Initial Consultation',
    description: 'Dr. Bright will conduct a thorough exam and use digital impressions to create a custom Invisalign treatment plan tailored to your needs.',
  },
  {
    title: 'Customized Aligners',
    description: 'You\'ll receive a set of aligners designed to gradually shift your teeth into alignment.',
  },
  {
    title: 'Ongoing Monitoring',
    description: 'Throughout your treatment, we\'ll monitor your progress and provide any necessary adjustments.',
  },
  {
    title: 'Final Results',
    description: 'Once your treatment is complete, you\'ll enjoy a beautifully straight smile, with retainers to maintain your results.',
  },
];

const faqs = [
  {
    question: 'How long will my Invisalign treatment take?',
    answer: 'Treatment times vary, but on average, Invisalign takes 12-18 months to fully align your teeth.',
  },
  {
    question: 'Do I need to wear retainers after treatment?',
    answer: 'Yes, retainers are necessary to keep your teeth in place after Invisalign treatment.',
  },
  {
    question: 'Is Invisalign covered by insurance?',
    answer: 'Some insurance plans cover Invisalign treatment, so it\'s worth checking with your provider.',
  },
];

export default function Invisalign() {
  return (
    <div className="bg-white">
      {/* HERO */}
      <section className="relative min-h-[60vh] flex items-center justify-center">
        <div className="absolute inset-0">
          <Image src="/images/f0e477_39aba48e92444e238d089a57789598f7~mv2.avif" alt="Invisalign Clear Aligners in Denver" fill className="object-cover" priority />
          <div className="absolute inset-0 bg-black/50" />
        </div>
        <div className="relative z-10 text-center px-6 max-w-4xl mx-auto">
          <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold leading-tight text-white mb-6">
            Invisalign® Clear Aligners in <span className="text-[var(--gold)]">Denver, CO</span>
          </h1>
          <p className="text-xl text-white/90 mb-10 max-w-2xl mx-auto">
            Straighten Your Smile with Discreet, Comfortable Aligners
          </p>
          <a href="tel:3033777744" className="inline-flex items-center justify-center bg-[var(--gold)] text-white px-8 py-4 text-base font-semibold transition hover:bg-[var(--gold)]/90">
            Schedule Your Free Consultation <ArrowRight className="ml-2 h-5 w-5" />
          </a>
        </div>
      </section>

      {/* INTRO */}
      <section className="py-24 bg-white">
        <div className="mx-auto max-w-4xl px-6 text-center">
          <p className="text-lg text-gray-600 leading-relaxed">
            If you&apos;re looking to straighten your teeth but want to avoid the metal brackets and wires of traditional braces, Invisalign offers an excellent solution. With custom-designed, clear aligners, Invisalign gradually shifts your teeth into their ideal position without anyone noticing. Whether you have mild crowding, gaps, or bite issues, Invisalign is a discreet and effective way to achieve the smile you&apos;ve always wanted.
          </p>
        </div>
      </section>

      {/* WHY CHOOSE */}
      <section className="py-24 bg-[#f5f5f5]">
        <div className="mx-auto max-w-6xl px-6">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            <div className="relative h-[450px] overflow-hidden shadow-lg">
              <Image src="/images/f0e477_39aba48e92444e238d089a57789598f7~mv2.avif" alt="Invisalign aligners" fill className="object-cover" />
            </div>
            <div className="space-y-6">
              <h2 className="text-3xl sm:text-4xl font-bold text-[var(--navy)]">Why Choose Invisalign with Dr. Bright?</h2>
              <ul className="space-y-4">
                {whyChoose.map((item) => (
                  <li key={item} className="flex items-start gap-3">
                    <CheckCircle2 className="h-5 w-5 text-[var(--gold)] flex-shrink-0 mt-0.5" />
                    <span className="text-gray-600">{item}</span>
                  </li>
                ))}
              </ul>
              <p className="text-gray-500 italic border-l-4 border-[var(--gold)] pl-4 text-sm">
                Invisalign offers a flexible, discreet alternative to traditional braces, helping you achieve your best smile without disrupting your daily life.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* INVISALIGN JOURNEY */}
      <section className="py-24 bg-white">
        <div className="mx-auto max-w-6xl px-6">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            <div className="space-y-6">
              <h2 className="text-3xl sm:text-4xl font-bold text-[var(--navy)]">What to Expect During Your Invisalign Journey</h2>
              <div className="space-y-4">
                {journeySteps.map((step, index) => (
                  <div key={step.title} className="flex gap-4">
                    <span className="flex h-8 w-8 items-center justify-center rounded-full bg-[var(--gold)] text-sm font-bold text-white flex-shrink-0">{index + 1}</span>
                    <div>
                      <h3 className="font-semibold text-[var(--navy)]">{step.title}</h3>
                      <p className="text-gray-600 text-sm mt-1">{step.description}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
            <div className="relative h-[400px] rounded-lg overflow-hidden shadow-lg">
              <Image src="/Main service page/Copy of Invisalign® Clear Aligners.jpg" alt="Invisalign journey" fill className="object-cover" />
              <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent" />
              <div className="absolute bottom-8 left-8 right-8 text-white">
                <p className="text-2xl font-bold">Your journey to a straighter smile</p>
              </div>
            </div>
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

      {/* OTHER TREATMENTS */}
      <section className="py-24 bg-[#f8f6f3]">
        <div className="mx-auto max-w-6xl px-6">
          <h2 className="text-3xl sm:text-4xl font-light tracking-wide text-[var(--navy)] text-center mb-16 uppercase">Other Treatments to Consider</h2>
          <div className="grid md:grid-cols-3 gap-8">
            <Link href="/services/cosmetic-dentistry" className="group border border-[var(--gold)]/40 bg-[#faf9f7] p-8 text-center hover:border-[var(--gold)] hover:shadow-lg transition-all">
              <div className="w-16 h-16 mx-auto mb-6 rounded-full bg-[var(--navy)] flex items-center justify-center"><Sparkles className="w-8 h-8 text-white" strokeWidth={1.5} /></div>
              <h3 className="text-lg font-bold text-[var(--navy)] mb-4 leading-snug uppercase tracking-wide">Cosmetic Bonding</h3>
              <p className="text-gray-600 leading-relaxed text-sm">Repair chips, cracks, and gaps in your smile with a quick, non-invasive procedure.</p>
            </Link>
            <Link href="/services/cosmetic-dentistry" className="group border border-[var(--gold)]/40 bg-[#faf9f7] p-8 text-center hover:border-[var(--gold)] hover:shadow-lg transition-all">
              <div className="w-16 h-16 mx-auto mb-6 rounded-full bg-[var(--navy)] flex items-center justify-center"><Smile className="w-8 h-8 text-white" strokeWidth={1.5} /></div>
              <h3 className="text-lg font-bold text-[var(--navy)] mb-4 leading-snug uppercase tracking-wide">Porcelain Veneers</h3>
              <p className="text-gray-600 leading-relaxed text-sm">Achieve a flawless smile by covering imperfections such as discoloration or minor misalignment.</p>
            </Link>
            <Link href="/services/cosmetic-dentistry" className="group border border-[var(--gold)]/40 bg-[#faf9f7] p-8 text-center hover:border-[var(--gold)] hover:shadow-lg transition-all">
              <div className="w-16 h-16 mx-auto mb-6 rounded-full bg-[var(--navy)] flex items-center justify-center"><Heart className="w-8 h-8 text-white" strokeWidth={1.5} /></div>
              <h3 className="text-lg font-bold text-[var(--navy)] mb-4 leading-snug uppercase tracking-wide">Traditional Braces</h3>
              <p className="text-gray-600 leading-relaxed text-sm">If your case is more complex, traditional braces may be a more appropriate treatment option.</p>
            </Link>
          </div>
        </div>
      </section>

      {/* BOOK YOUR APPOINTMENT */}
      <section className="py-24 bg-[#f5f5f5]">
        <div className="mx-auto max-w-6xl px-6">
          <div className="grid lg:grid-cols-2 gap-12">
            <div>
              <h2 className="text-3xl sm:text-4xl font-light text-[var(--gold)] mb-4 uppercase tracking-wide">Book Your<br />Appointment</h2>
              <p className="text-gray-600 mb-8">Ready to start your Invisalign journey? Schedule a free consultation with Dr. Bright.</p>
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
