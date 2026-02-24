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
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
