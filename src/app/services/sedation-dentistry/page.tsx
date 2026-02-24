import Image from 'next/image';
import Link from 'next/link';
import { ArrowRight, CheckCircle2, Sparkles, Heart, Shield, Phone, MapPin, Smile } from 'lucide-react';

const whyChoose = [
  'Safe and effective sedation options tailored to your comfort level',
  'Ideal for patients with dental anxiety or fear',
  'Enables us to complete more procedures in fewer visits',
  'Compassionate care that focuses on your comfort and well-being',
  'State-of-the-art technology for monitoring your safety throughout the procedure',
];

const appointmentSteps = [
  {
    title: 'Consultation and Discussion',
    description: 'Dr. Bright will discuss your concerns, explain your sedation options, and recommend the best choice based on your procedure and comfort level.',
  },
  {
    title: 'Sedation Administration',
    description: 'Depending on your chosen sedation method, we\'ll administer either nitrous oxide (laughing gas), oral sedation, or IV sedation.',
  },
  {
    title: 'Procedure Completion',
    description: 'While under sedation, you\'ll remain comfortable and relaxed as Dr. Bright performs your dental procedure.',
  },
  {
    title: 'Post-Procedure Care',
    description: 'After your treatment, we\'ll monitor you as the sedation wears off. We\'ll also provide aftercare instructions for a smooth recovery.',
  },
];

const faqs = [
  {
    question: 'Is sedation dentistry safe?',
    answer: 'Yes, sedation dentistry is safe when administered by a trained professional. Dr. Bright ensures your safety by using the latest technology and monitoring systems.',
  },
  {
    question: 'What sedation options are available?',
    answer: 'We offer nitrous oxide, oral sedation, and IV sedation depending on your needs and the complexity of your procedure.',
  },
  {
    question: 'Will I be asleep during sedation?',
    answer: 'With oral or IV sedation, you may feel drowsy or relaxed, but you\'ll still be awake and able to respond. Nitrous oxide allows you to remain fully awake but deeply relaxed.',
  },
];

export default function SedationDentistry() {
  return (
    <div className="bg-white">
      {/* HERO */}
      <section className="relative min-h-[60vh] flex items-center justify-center">
        <div className="absolute inset-0">
          <Image src="/Main service page/Copy of Sedation Dentistry.jpg" alt="Sedation Dentistry in Denver" fill className="object-cover" priority />
          <div className="absolute inset-0 bg-black/50" />
        </div>
        <div className="relative z-10 text-center px-6 max-w-4xl mx-auto">
          <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold leading-tight text-white mb-6">
            Sedation Dentistry in <span className="text-[var(--gold)]">Denver, CO</span>
          </h1>
          <p className="text-xl text-white/90 mb-10 max-w-2xl mx-auto">
            Relax and Enjoy Your Dental Visits with Sedation Options
          </p>
          <a href="tel:3033777744" className="inline-flex items-center justify-center bg-[var(--gold)] text-white px-8 py-4 text-base font-semibold transition hover:bg-[var(--gold)]/90">
            Schedule Your Consultation <ArrowRight className="ml-2 h-5 w-5" />
          </a>
        </div>
      </section>

      {/* INTRO */}
      <section className="py-24 bg-white">
        <div className="mx-auto max-w-4xl px-6 text-center">
          <p className="text-lg text-gray-600 leading-relaxed">
            At Dr. Bright Smiles, we understand that many people experience anxiety or fear when it comes to dental visits. That&apos;s why we offer sedation dentistry to ensure you feel completely at ease during your procedures. Whether you&apos;re undergoing a routine cleaning or more complex treatment, sedation options are available to make your visit more comfortable. With our advanced sedation techniques, you can receive the care you need without the stress or discomfort.
          </p>
        </div>
      </section>

      {/* WHY CHOOSE */}
      <section className="py-24 bg-[#f5f5f5]">
        <div className="mx-auto max-w-6xl px-6">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            <div className="relative h-[450px] overflow-hidden shadow-lg">
              <Image src="/Individual service page/What your general dentistry visit feels like.jpg" alt="Comfortable sedation" fill className="object-cover" />
            </div>
            <div className="space-y-6">
              <h2 className="text-3xl sm:text-4xl font-bold text-[var(--navy)]">Why Choose Sedation Dentistry with Dr. Bright?</h2>
              <ul className="space-y-4">
                {whyChoose.map((item) => (
                  <li key={item} className="flex items-start gap-3">
                    <CheckCircle2 className="h-5 w-5 text-[var(--gold)] flex-shrink-0 mt-0.5" />
                    <span className="text-gray-600">{item}</span>
                  </li>
                ))}
              </ul>
              <p className="text-gray-500 italic border-l-4 border-[var(--gold)] pl-4 text-sm">
                Sedation dentistry allows you to get the dental treatment you need while remaining relaxed and calm, making it easier to maintain a healthy smile.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* WHAT TO EXPECT */}
      <section className="py-24 bg-white">
        <div className="mx-auto max-w-6xl px-6">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            <div className="space-y-6">
              <h2 className="text-3xl sm:text-4xl font-bold text-[var(--navy)]">What to Expect During Your Sedation Appointment</h2>
              <div className="space-y-4">
                {appointmentSteps.map((step, index) => (
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
              <Image src="/Main service page/orthodontist-with-latex-glove-handling-dental-equipment.jpg" alt="Sedation appointment" fill className="object-cover" />
              <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent" />
              <div className="absolute bottom-8 left-8 right-8 text-white">
                <p className="text-2xl font-bold">Dentistry without the stress</p>
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
            <Link href="/services/sedation-dentistry" className="group border border-[var(--gold)]/40 bg-[#faf9f7] p-8 text-center hover:border-[var(--gold)] hover:shadow-lg transition-all">
              <div className="w-16 h-16 mx-auto mb-6 rounded-full bg-[var(--navy)] flex items-center justify-center"><Shield className="w-8 h-8 text-white" strokeWidth={1.5} /></div>
              <h3 className="text-lg font-bold text-[var(--navy)] mb-4 leading-snug uppercase tracking-wide">Pain Management</h3>
              <p className="text-gray-600 leading-relaxed text-sm">Local anesthesia is used for pain control during many dental treatments to ensure comfort.</p>
            </Link>
            <Link href="/services/restorative-dentistry" className="group border border-[var(--gold)]/40 bg-[#faf9f7] p-8 text-center hover:border-[var(--gold)] hover:shadow-lg transition-all">
              <div className="w-16 h-16 mx-auto mb-6 rounded-full bg-[var(--navy)] flex items-center justify-center"><Sparkles className="w-8 h-8 text-white" strokeWidth={1.5} /></div>
              <h3 className="text-lg font-bold text-[var(--navy)] mb-4 leading-snug uppercase tracking-wide">Restorative Dentistry</h3>
              <p className="text-gray-600 leading-relaxed text-sm">If your anxiety is due to the need for dental work like crowns or fillings, sedation can help make these procedures more comfortable.</p>
            </Link>
            <Link href="/services/general-dentistry" className="group border border-[var(--gold)]/40 bg-[#faf9f7] p-8 text-center hover:border-[var(--gold)] hover:shadow-lg transition-all">
              <div className="w-16 h-16 mx-auto mb-6 rounded-full bg-[var(--navy)] flex items-center justify-center"><Heart className="w-8 h-8 text-white" strokeWidth={1.5} /></div>
              <h3 className="text-lg font-bold text-[var(--navy)] mb-4 leading-snug uppercase tracking-wide">General Dentistry</h3>
              <p className="text-gray-600 leading-relaxed text-sm">Preventive care in a calm, unhurried environment with comfort options available.</p>
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
              <p className="text-gray-600 mb-8">Ready to experience anxiety-free dentistry? Contact us to discuss sedation options.</p>
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
