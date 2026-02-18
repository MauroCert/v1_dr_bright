import Image from 'next/image';
import Link from 'next/link';
import { ArrowRight, CheckCircle2, AlertTriangle, Clock, Shield, Heart, Phone, MapPin, Zap } from 'lucide-react';

const emergencyTypes = [
  {
    title: 'Severe Toothache',
    description: 'Persistent or throbbing tooth pain can indicate infection, decay, or nerve damage. We provide rapid diagnostics and targeted pain relief so you can get back to your day.',
    listTitle: 'Common causes:',
    points: ['Deep cavities', 'Cracked teeth', 'Abscess or infection', 'Exposed nerve'],
    image: '/Main service page/european-mid-pleased-dentist-woman-face-mask-working-dental-clinic.jpg',
  },
  {
    title: 'Broken or Chipped Teeth',
    description: 'Whether from a sports injury, accident, or biting down on something hard, a broken tooth needs prompt attention. We restore both function and appearance quickly.',
    listTitle: 'Treatment options:',
    points: ['Dental bonding', 'Porcelain crowns', 'Veneers', 'Temporary restorations'],
    image: '/Individual service page/Hero.jpg',
  },
  {
    title: 'Knocked-Out Tooth',
    description: 'Time is critical with an avulsed tooth. If you can get to us within 30–60 minutes, there is a good chance we can re-implant the tooth. Handle it by the crown, keep it moist, and call immediately.',
    listTitle: 'What to do:',
    points: ['Handle tooth by crown only', 'Rinse gently—don\'t scrub', 'Place in milk or saliva', 'Get to us ASAP'],
    note: 'The sooner you arrive, the better the outcome. Call us immediately if a tooth is knocked out.',
    image: '/Main service page/orthodontist-with-latex-glove-handling-dental-equipment.jpg',
  },
  {
    title: 'Lost Filling or Crown',
    description: 'A lost restoration exposes the underlying tooth to bacteria and sensitivity. We offer same-day temporary and permanent solutions to protect your tooth.',
    listTitle: 'We can help with:',
    points: ['Temporary cement', 'New crown fabrication', 'Filling replacement', 'Bite adjustment'],
    image: '/Main service page/young-woman-is-dental-chair-drilling-her-tooth-by-specialist-modern-clinic.jpg',
  },
  {
    title: 'Dental Infections & Swelling',
    description: 'Facial swelling, fever, or a pimple on your gums may signal an abscess. Infections require prompt treatment to prevent serious complications.',
    listTitle: 'Emergency treatment includes:',
    points: ['Incision & drainage', 'Antibiotic therapy', 'Root canal treatment', 'Pain management'],
    image: '/Individual service page/What your general dentistry visit feels like.jpg',
  },
];

const whatToExpect = [
  {
    title: 'Immediate Triage',
    description: 'Call us and we will prioritize your case. For after-hours emergencies, follow our voicemail instructions for urgent guidance.',
  },
  {
    title: 'Rapid Diagnostics',
    description: 'Digital X-rays and intraoral cameras help Dr. Bright quickly identify the problem and determine the best course of action.',
  },
  {
    title: 'Pain Relief First',
    description: 'We address your pain and discomfort before discussing long-term solutions. Comfort is always our top priority.',
  },
  {
    title: 'Treatment & Follow-Up',
    description: 'From temporary stabilization to definitive treatment, we create a clear plan and schedule any needed follow-up visits.',
  },
];

const faqs = [
  {
    question: 'What counts as a dental emergency?',
    answer: 'Severe pain, knocked-out teeth, broken teeth, uncontrolled bleeding, facial swelling, and infections all require emergency care. When in doubt, call us—we would rather see you and confirm everything is okay.',
  },
  {
    question: 'Do you offer same-day emergency appointments?',
    answer: 'Yes. We reserve time in our schedule for emergency cases. Call us as soon as possible and we will do our best to see you the same day.',
  },
  {
    question: 'What should I do if I knock out a tooth?',
    answer: 'Handle the tooth by the crown (not the root), rinse it gently with water, and try to place it back in the socket. If that is not possible, keep it in milk or between your cheek and gum. Get to our office within 30–60 minutes for the best chance of saving the tooth.',
  },
  {
    question: 'How much does emergency dental care cost?',
    answer: 'Costs vary depending on the treatment needed. We accept most insurance plans and offer flexible payment options. We will always discuss costs before proceeding with treatment.',
  },
  {
    question: 'Can I go to the ER for a dental emergency?',
    answer: 'Emergency rooms can manage pain and prescribe antibiotics, but they typically cannot perform dental procedures. For definitive treatment, you will need to see a dentist. Call us first—we can often provide faster, more targeted care.',
  },
];

export default function EmergencyDentistry() {
  return (
    <div className="bg-white">
      {/* HERO */}
      <section className="relative min-h-[60vh] flex items-center justify-center">
        <div className="absolute inset-0">
          <Image
            src="/Main service page/european-mid-pleased-dentist-woman-face-mask-working-dental-clinic.jpg"
            alt="Emergency Dentistry at Cherry Creek South Dental"
            fill
            className="object-cover"
            priority
          />
          <div className="absolute inset-0 bg-black/50" />
        </div>
        
        <div className="relative z-10 text-center px-6 max-w-4xl mx-auto">
          <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold leading-tight text-white mb-6">
            Emergency <span className="text-[var(--gold)]">Dental Care</span>
          </h1>
          <p className="text-xl text-white/90 mb-10 max-w-2xl mx-auto">
            Same-day relief for tooth pain, broken teeth, and dental infections with Dr. Bright&apos;s calm, compassionate approach.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a
              href="tel:3033777744"
              className="inline-flex items-center justify-center bg-[var(--gold)] text-white px-8 py-4 text-base font-semibold transition hover:bg-[var(--gold)]/90"
            >
              Call Now: (303) 377-7744
              <Phone className="ml-2 h-5 w-5" />
            </a>
            <a
              href="sms:7208641333"
              className="inline-flex items-center justify-center bg-white text-[var(--navy)] px-8 py-4 text-base font-semibold transition hover:bg-white/90"
            >
              Text: (720) 864-1333
            </a>
          </div>
        </div>
      </section>

      {/* URGENT NOTICE */}
      <section className="bg-[var(--navy)] py-6">
        <div className="mx-auto max-w-6xl px-6">
          <div className="flex items-center justify-center gap-4 text-white text-center">
            <AlertTriangle className="h-6 w-6 text-[var(--gold)] flex-shrink-0" />
            <p className="text-lg">
              <span className="font-bold">Dental emergency?</span> Call us immediately at{' '}
              <a href="tel:3033777744" className="text-[var(--gold)] font-bold hover:underline">(303) 377-7744</a>.
              We reserve same-day appointments for urgent cases.
            </p>
          </div>
        </div>
      </section>

      {/* WHY CHOOSE US FOR EMERGENCIES */}
      <section className="py-24 bg-white">
        <div className="mx-auto max-w-6xl px-6">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            <div className="relative h-[450px] overflow-hidden shadow-lg">
              <Image
                src="/Main service page/orthodontist-with-latex-glove-handling-dental-equipment.jpg"
                alt="Emergency dental care"
                fill
                className="object-cover"
              />
            </div>
            
            <div className="space-y-6">
              <h2 className="text-3xl sm:text-4xl font-bold text-[var(--navy)]">
                Why Choose Us for Emergency Care?
              </h2>
              
              <ul className="space-y-4">
                <li className="flex items-start gap-4">
                  <div className="w-10 h-10 rounded-full bg-[var(--gold)]/10 flex items-center justify-center flex-shrink-0 mt-0.5">
                    <Clock className="h-5 w-5 text-[var(--gold)]" />
                  </div>
                  <div>
                    <h3 className="font-semibold text-[var(--navy)]">Same-Day Appointments</h3>
                    <p className="text-gray-600 text-sm">We reserve time daily for emergencies so you never have to wait</p>
                  </div>
                </li>
                <li className="flex items-start gap-4">
                  <div className="w-10 h-10 rounded-full bg-[var(--gold)]/10 flex items-center justify-center flex-shrink-0 mt-0.5">
                    <Zap className="h-5 w-5 text-[var(--gold)]" />
                  </div>
                  <div>
                    <h3 className="font-semibold text-[var(--navy)]">Rapid Diagnostics</h3>
                    <p className="text-gray-600 text-sm">Digital X-rays and AI-enhanced imaging for fast, accurate diagnosis</p>
                  </div>
                </li>
                <li className="flex items-start gap-4">
                  <div className="w-10 h-10 rounded-full bg-[var(--gold)]/10 flex items-center justify-center flex-shrink-0 mt-0.5">
                    <Heart className="h-5 w-5 text-[var(--gold)]" />
                  </div>
                  <div>
                    <h3 className="font-semibold text-[var(--navy)]">Compassionate Care</h3>
                    <p className="text-gray-600 text-sm">Dr. Bright&apos;s calm bedside manner helps you feel safe during stressful moments</p>
                  </div>
                </li>
                <li className="flex items-start gap-4">
                  <div className="w-10 h-10 rounded-full bg-[var(--gold)]/10 flex items-center justify-center flex-shrink-0 mt-0.5">
                    <Shield className="h-5 w-5 text-[var(--gold)]" />
                  </div>
                  <div>
                    <h3 className="font-semibold text-[var(--navy)]">Comprehensive Solutions</h3>
                    <p className="text-gray-600 text-sm">From temporary stabilization to permanent restorations—all under one roof</p>
                  </div>
                </li>
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

      {/* EMERGENCY TYPES */}
      <section className="py-24 bg-[#f5f5f5] -mt-1">
        <div className="mx-auto max-w-6xl px-6">
          <div className="text-center mb-16">
            <h2 className="text-3xl sm:text-4xl font-bold text-[var(--navy)] mb-4">
              Common Dental Emergencies We Treat
            </h2>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto">
              Fast, effective treatment for every type of dental emergency
            </p>
          </div>
          
          <div className="space-y-16">
            {emergencyTypes.map((emergency, index) => (
              <div key={emergency.title} className="bg-white shadow-sm overflow-hidden">
                <div className={`grid lg:grid-cols-2 ${index % 2 === 1 ? 'lg:flex-row-reverse' : ''}`}>
                  <div className={`relative h-72 lg:h-auto ${index % 2 === 1 ? 'lg:order-2' : 'lg:order-1'}`}>
                    <Image src={emergency.image} alt={emergency.title} fill className="object-cover" />
                  </div>
                  <div className={`p-8 lg:p-10 flex flex-col justify-center ${index % 2 === 1 ? 'lg:order-1' : 'lg:order-2'}`}>
                    <h3 className="text-2xl font-bold text-[var(--navy)] mb-4">{emergency.title}</h3>
                    <p className="text-gray-600 leading-relaxed mb-6">{emergency.description}</p>
                    <div>
                      <p className="font-semibold text-[var(--navy)] mb-3">{emergency.listTitle}</p>
                      <ul className="grid grid-cols-2 gap-2 text-sm text-gray-600">
                        {emergency.points.map((point) => (
                          <li key={point} className="flex items-center gap-2">
                            <CheckCircle2 className="h-4 w-4 text-[var(--gold)] flex-shrink-0" />
                            {point}
                          </li>
                        ))}
                      </ul>
                    </div>
                    {emergency.note && (
                      <p className="text-gray-500 italic border-l-4 border-[var(--gold)] pl-4 mt-6 text-sm">{emergency.note}</p>
                    )}
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* WHAT TO EXPECT */}
      <section className="py-24 bg-white">
        <div className="mx-auto max-w-6xl px-6">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            <div className="relative h-[400px] rounded-lg overflow-hidden shadow-lg">
              <Image
                src="/Main service page/young-woman-is-dental-chair-drilling-her-tooth-by-specialist-modern-clinic.jpg"
                alt="Emergency dental treatment"
                fill
                className="object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent" />
              <div className="absolute bottom-8 left-8 right-8 text-white">
                <p className="text-2xl font-bold">Fast relief when you need it most</p>
              </div>
            </div>
            
            <div className="space-y-6">
              <h2 className="text-3xl sm:text-4xl font-bold text-[var(--navy)]">
                What to Expect During an Emergency Visit
              </h2>
              <p className="text-gray-600">
                We move quickly to address your pain and protect your oral health:
              </p>
              <div className="space-y-4">
                {whatToExpect.map((step, index) => (
                  <div key={step.title} className="flex gap-4">
                    <span className="flex h-8 w-8 items-center justify-center rounded-full bg-[var(--gold)] text-sm font-bold text-white flex-shrink-0">
                      {index + 1}
                    </span>
                    <div>
                      <h3 className="font-semibold text-[var(--navy)]">{step.title}</h3>
                      <p className="text-gray-600 text-sm mt-1">{step.description}</p>
                    </div>
                  </div>
                ))}
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
          <h2 className="text-3xl sm:text-4xl font-light tracking-wide text-[var(--navy)] text-center mb-16 uppercase">
            Other Treatments to Consider
          </h2>
          <div className="grid md:grid-cols-3 gap-8">
            <Link href="/services/general-dentistry" className="group border border-[var(--gold)]/40 bg-[#faf9f7] p-8 text-center hover:border-[var(--gold)] hover:shadow-lg transition-all">
              <div className="w-16 h-16 mx-auto mb-6 rounded-full bg-[var(--navy)] flex items-center justify-center">
                <Heart className="w-8 h-8 text-white" strokeWidth={1.5} />
              </div>
              <h3 className="text-lg font-bold text-[var(--navy)] mb-4 leading-snug uppercase tracking-wide">General Dentistry</h3>
              <p className="text-gray-600 leading-relaxed text-sm">Preventive care to help avoid future emergencies.</p>
            </Link>
            <Link href="/services/restorative-dentistry" className="group border border-[var(--gold)]/40 bg-[#faf9f7] p-8 text-center hover:border-[var(--gold)] hover:shadow-lg transition-all">
              <div className="w-16 h-16 mx-auto mb-6 rounded-full bg-[var(--navy)] flex items-center justify-center">
                <Shield className="w-8 h-8 text-white" strokeWidth={1.5} />
              </div>
              <h3 className="text-lg font-bold text-[var(--navy)] mb-4 leading-snug uppercase tracking-wide">Restorative Dentistry</h3>
              <p className="text-gray-600 leading-relaxed text-sm">Crowns, implants, and bridges to restore damaged teeth.</p>
            </Link>
            <Link href="/services/sedation-dentistry" className="group border border-[var(--gold)]/40 bg-[#faf9f7] p-8 text-center hover:border-[var(--gold)] hover:shadow-lg transition-all">
              <div className="w-16 h-16 mx-auto mb-6 rounded-full bg-[var(--navy)] flex items-center justify-center">
                <Zap className="w-8 h-8 text-white" strokeWidth={1.5} />
              </div>
              <h3 className="text-lg font-bold text-[var(--navy)] mb-4 leading-snug uppercase tracking-wide">Sedation Dentistry</h3>
              <p className="text-gray-600 leading-relaxed text-sm">Comfort options for anxious patients during emergency treatment.</p>
            </Link>
          </div>
        </div>
      </section>

      {/* BOOK YOUR APPOINTMENT */}
      <section className="py-24 bg-[#f5f5f5]">
        <div className="mx-auto max-w-6xl px-6">
          <div className="grid lg:grid-cols-2 gap-12">
            <div>
              <h2 className="text-3xl sm:text-4xl font-light text-[var(--gold)] mb-4 uppercase tracking-wide">
                Book Your<br />Appointment
              </h2>
              <p className="text-gray-600 mb-8">
                Experiencing a dental emergency? Contact us right away. For non-urgent needs, fill out the form below.
              </p>
              <form className="space-y-4">
                <div className="grid grid-cols-2 gap-4">
                  <input type="text" placeholder="First Name" className="w-full px-4 py-3 bg-white border border-gray-200 focus:border-[var(--gold)] focus:outline-none transition" />
                  <input type="text" placeholder="Last Name" className="w-full px-4 py-3 bg-white border border-gray-200 focus:border-[var(--gold)] focus:outline-none transition" />
                </div>
                <div className="grid grid-cols-2 gap-4">
                  <input type="email" placeholder="Email Address" className="w-full px-4 py-3 bg-white border border-gray-200 focus:border-[var(--gold)] focus:outline-none transition" />
                  <input type="tel" placeholder="Mobile Number" className="w-full px-4 py-3 bg-white border border-gray-200 focus:border-[var(--gold)] focus:outline-none transition" />
                </div>
                <textarea placeholder="Describe your emergency or concern" rows={4} className="w-full px-4 py-3 bg-white border border-gray-200 focus:border-[var(--gold)] focus:outline-none transition resize-none" />
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
                  <a href="https://g.page/r/CQVBXHNMdHxCEAE" target="_blank" rel="noopener noreferrer" className="w-10 h-10 rounded-full bg-[var(--gold)] flex items-center justify-center hover:bg-[var(--navy)] transition">
                    <svg className="h-5 w-5 text-white" viewBox="0 0 24 24" fill="currentColor"><path d="M12.48 10.92v3.28h7.84c-.24 1.84-.853 3.187-1.787 4.133-1.147 1.147-2.933 2.4-6.053 2.4-4.827 0-8.6-3.893-8.6-8.72s3.773-8.72 8.6-8.72c2.6 0 4.507 1.027 5.907 2.347l2.307-2.307C18.747 1.44 16.133 0 12.48 0 5.867 0 .307 5.387.307 12s5.56 12 12.173 12c3.573 0 6.267-1.173 8.373-3.36 2.16-2.16 2.84-5.213 2.84-7.667 0-.76-.053-1.467-.173-2.053H12.48z"/></svg>
                  </a>
                  <a href="https://www.facebook.com/drbrightdds" target="_blank" rel="noopener noreferrer" className="w-10 h-10 rounded-full bg-[var(--gold)] flex items-center justify-center hover:bg-[var(--navy)] transition">
                    <svg className="h-5 w-5 text-white" viewBox="0 0 24 24" fill="currentColor"><path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z"/></svg>
                  </a>
                  <a href="https://www.instagram.com/drbrightdds" target="_blank" rel="noopener noreferrer" className="w-10 h-10 rounded-full bg-[var(--gold)] flex items-center justify-center hover:bg-[var(--navy)] transition">
                    <svg className="h-5 w-5 text-white" viewBox="0 0 24 24" fill="currentColor"><path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z"/></svg>
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
