import Image from 'next/image';
import Link from 'next/link';
import { ArrowRight, CheckCircle2, Sparkles, Star, Heart, Shield, Clock, Phone, MapPin, Smile, Eye, Zap } from 'lucide-react';

type InvisalignBenefit = {
  title: string;
  description: string;
  listTitle: string;
  points: string[];
  image: string;
  note?: string;
};

const invisalignBenefits: InvisalignBenefit[] = [
  {
    title: 'Virtually Invisible',
    description: 'Invisalign clear aligners are made from smooth, BPA-free plastic that fits snugly over your teeth. Most people won\'t even notice you\'re wearing them—so you can straighten your smile with confidence at work, school, or social events.',
    listTitle: 'Ideal for:',
    points: ['Working professionals', 'Teens & young adults', 'Special occasions', 'Everyday confidence'],
    image: '/images/f0e477_39aba48e92444e238d089a57789598f7~mv2.avif',
  },
  {
    title: 'Removable Convenience',
    description: 'Unlike traditional braces, Invisalign aligners are completely removable. Eat what you love, brush and floss normally, and enjoy the freedom of taking them out for photos or special moments.',
    listTitle: 'Freedom to enjoy:',
    points: ['All your favorite foods', 'Easy oral hygiene', 'Sports without worry', 'Photo-ready smile anytime'],
    image: '/Main service page/Copy of Invisalign® Clear Aligners.jpg',
  },
  {
    title: 'Digital Precision Planning',
    description: 'Using advanced iTero digital scanning technology, Dr. Bright creates a precise 3D model of your teeth and maps out every stage of your treatment. You\'ll see your projected results before treatment even begins.',
    listTitle: 'Technology advantages:',
    points: ['No messy impressions', '3D treatment simulation', 'Predictable outcomes', 'Fewer office visits'],
    note: 'Dr. Bright uses ClinCheck software to design your treatment plan with clinical precision and artistic vision.',
    image: '/Main service page/european-mid-pleased-dentist-woman-face-mask-working-dental-clinic.jpg',
  },
  {
    title: 'Comfortable & Gentle',
    description: 'Each set of custom aligners applies gentle, controlled force to gradually shift your teeth. There are no metal brackets or wires to irritate your cheeks and gums—just smooth, comfortable plastic.',
    listTitle: 'Comfort benefits:',
    points: ['No metal irritation', 'Gradual tooth movement', 'Smooth edges', 'Easy aligner changes'],
    image: '/Main service page/orthodontist-with-latex-glove-handling-dental-equipment.jpg',
  },
  {
    title: 'Comprehensive Results',
    description: 'Invisalign treats a wide range of orthodontic concerns—from mild crowding to complex bite issues. Dr. Bright evaluates each case individually and creates a plan tailored to your specific needs and goals.',
    listTitle: 'Invisalign can treat:',
    points: ['Crowded teeth', 'Gaps & spacing', 'Overbite & underbite', 'Crossbite & open bite'],
    image: '/Individual service page/Hero.jpg',
  },
];

const treatmentProcess = [
  {
    title: 'Free Consultation',
    description: 'We start with a thorough evaluation of your teeth, bite, and smile goals. Dr. Bright discusses your options and determines if Invisalign is right for you.',
  },
  {
    title: 'Digital Scanning & Treatment Design',
    description: 'Using our iTero scanner, we capture a 3D digital impression of your teeth—no goopy molds. You\'ll see a preview of your new smile before starting.',
  },
  {
    title: 'Custom Aligner Fabrication',
    description: 'Your aligners are precision-manufactured based on Dr. Bright\'s custom treatment plan. Each set is designed to move specific teeth at specific stages.',
  },
  {
    title: 'Wear & Progress',
    description: 'Wear each set of aligners for 1–2 weeks, 20–22 hours per day. Switch to your next set as directed. Check in with Dr. Bright every 6–8 weeks.',
  },
  {
    title: 'Reveal Your New Smile',
    description: 'Once treatment is complete, we provide custom retainers to maintain your results. Enjoy the smile you\'ve always wanted—for a lifetime.',
  },
];

const faqs = [
  {
    question: 'How long does Invisalign treatment take?',
    answer: 'Treatment time varies depending on complexity, but most cases take 6–18 months. Simple cases may finish in as few as 3–6 months. Dr. Bright will give you a personalized timeline during your consultation.',
  },
  {
    question: 'Does Invisalign hurt?',
    answer: 'You may feel mild pressure or tightness when switching to a new set of aligners—this means they\'re working! Any discomfort is typically mild and subsides within a day or two.',
  },
  {
    question: 'How much does Invisalign cost?',
    answer: 'Cost depends on the complexity of your case. Many dental insurance plans cover Invisalign similar to traditional braces. We also offer flexible payment plans and financing options to make treatment affordable.',
  },
  {
    question: 'Can I eat and drink with Invisalign?',
    answer: 'You should remove your aligners before eating or drinking anything other than water. This means no food restrictions—enjoy all your favorites! Just brush before putting your aligners back in.',
  },
  {
    question: 'Am I a candidate for Invisalign?',
    answer: 'Invisalign works for most teens and adults with mild to complex orthodontic issues. The best way to find out is to schedule a free consultation with Dr. Bright for a personalized evaluation.',
  },
  {
    question: 'How often do I need to visit the office?',
    answer: 'Most patients visit every 6–8 weeks for progress check-ins. These appointments are quick—usually 15–20 minutes—so they fit easily into busy schedules.',
  },
];

export default function Invisalign() {
  return (
    <div className="bg-white">
      {/* HERO */}
      <section className="relative min-h-[60vh] flex items-center justify-center">
        <div className="absolute inset-0">
          <Image
            src="/images/f0e477_39aba48e92444e238d089a57789598f7~mv2.avif"
            alt="Invisalign Clear Aligners at Cherry Creek South Dental"
            fill
            className="object-cover"
            priority
          />
          <div className="absolute inset-0 bg-black/50" />
        </div>
        
        <div className="relative z-10 text-center px-6 max-w-4xl mx-auto">
          <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold leading-tight text-white mb-6">
            Invisalign® <span className="text-[var(--gold)]">Clear Aligners</span>
          </h1>
          <p className="text-xl text-white/90 mb-10 max-w-2xl mx-auto">
            Straighten your teeth discreetly with custom clear aligners designed by Dr. Bright using the latest digital technology.
          </p>
          <a
            href="tel:3033777744"
            className="inline-flex items-center justify-center bg-[var(--gold)] text-white px-8 py-4 text-base font-semibold transition hover:bg-[var(--gold)]/90"
          >
            Schedule Your Free Consultation
            <ArrowRight className="ml-2 h-5 w-5" />
          </a>
        </div>
      </section>

      {/* WHY CHOOSE INVISALIGN */}
      <section className="py-24 bg-white">
        <div className="mx-auto max-w-6xl px-6">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            <div className="relative h-[450px] overflow-hidden shadow-lg">
              <Image
                src="/images/f0e477_39aba48e92444e238d089a57789598f7~mv2.avif"
                alt="Invisalign clear aligners"
                fill
                className="object-cover"
              />
            </div>
            
            <div className="space-y-6">
              <h2 className="text-3xl sm:text-4xl font-bold text-[var(--navy)]">
                Why Choose Invisalign With Dr. Bright?
              </h2>
              
              <ul className="space-y-4">
                <li className="flex items-start gap-4">
                  <div className="w-10 h-10 rounded-full bg-[var(--gold)]/10 flex items-center justify-center flex-shrink-0 mt-0.5">
                    <Eye className="h-5 w-5 text-[var(--gold)]" />
                  </div>
                  <div>
                    <h3 className="font-semibold text-[var(--navy)]">Nearly Invisible</h3>
                    <p className="text-gray-600 text-sm">Clear aligners that let you smile confidently throughout treatment</p>
                  </div>
                </li>
                <li className="flex items-start gap-4">
                  <div className="w-10 h-10 rounded-full bg-[var(--gold)]/10 flex items-center justify-center flex-shrink-0 mt-0.5">
                    <Sparkles className="h-5 w-5 text-[var(--gold)]" />
                  </div>
                  <div>
                    <h3 className="font-semibold text-[var(--navy)]">Digital Treatment Planning</h3>
                    <p className="text-gray-600 text-sm">Advanced 3D scanning and ClinCheck technology for predictable results</p>
                  </div>
                </li>
                <li className="flex items-start gap-4">
                  <div className="w-10 h-10 rounded-full bg-[var(--gold)]/10 flex items-center justify-center flex-shrink-0 mt-0.5">
                    <Heart className="h-5 w-5 text-[var(--gold)]" />
                  </div>
                  <div>
                    <h3 className="font-semibold text-[var(--navy)]">Personalized Oversight</h3>
                    <p className="text-gray-600 text-sm">Dr. Bright personally monitors every stage of your treatment</p>
                  </div>
                </li>
                <li className="flex items-start gap-4">
                  <div className="w-10 h-10 rounded-full bg-[var(--gold)]/10 flex items-center justify-center flex-shrink-0 mt-0.5">
                    <Shield className="h-5 w-5 text-[var(--gold)]" />
                  </div>
                  <div>
                    <h3 className="font-semibold text-[var(--navy)]">Comfortable & Safe</h3>
                    <p className="text-gray-600 text-sm">Smooth BPA-free plastic with no metal brackets or wires</p>
                  </div>
                </li>
                <li className="flex items-start gap-4">
                  <div className="w-10 h-10 rounded-full bg-[var(--gold)]/10 flex items-center justify-center flex-shrink-0 mt-0.5">
                    <Clock className="h-5 w-5 text-[var(--gold)]" />
                  </div>
                  <div>
                    <h3 className="font-semibold text-[var(--navy)]">Fewer Appointments</h3>
                    <p className="text-gray-600 text-sm">Quick check-ins every 6–8 weeks that fit your busy schedule</p>
                  </div>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* Geometric Divider */}
      <div className="relative h-24 -mt-1">
        <svg
          className="absolute w-full h-full"
          preserveAspectRatio="none"
          viewBox="0 0 1440 96"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <polygon points="0,96 1440,0 1440,96" fill="#f5f5f5" />
          <polygon points="0,0 0,96 1440,0" fill="white" />
        </svg>
      </div>

      {/* INVISALIGN BENEFITS */}
      <section className="py-24 bg-[#f5f5f5] -mt-1">
        <div className="mx-auto max-w-6xl px-6">
          <div className="text-center mb-16">
            <h2 className="text-3xl sm:text-4xl font-bold text-[var(--navy)] mb-4">
              The Invisalign Advantage
            </h2>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto">
              A smarter, more comfortable way to achieve the smile you deserve
            </p>
          </div>
          
          <div className="space-y-16">
            {invisalignBenefits.map((benefit, index) => (
              <div 
                key={benefit.title} 
                className="bg-white shadow-sm overflow-hidden"
              >
                <div className={`grid lg:grid-cols-2 ${index % 2 === 1 ? 'lg:flex-row-reverse' : ''}`}>
                  <div className={`relative h-72 lg:h-auto ${index % 2 === 1 ? 'lg:order-2' : 'lg:order-1'}`}>
                    <Image
                      src={benefit.image}
                      alt={benefit.title}
                      fill
                      className="object-cover"
                    />
                  </div>
                  
                  <div className={`p-8 lg:p-10 flex flex-col justify-center ${index % 2 === 1 ? 'lg:order-1' : 'lg:order-2'}`}>
                    <h3 className="text-2xl font-bold text-[var(--navy)] mb-4">{benefit.title}</h3>
                    <p className="text-gray-600 leading-relaxed mb-6">{benefit.description}</p>
                    
                    <div>
                      <p className="font-semibold text-[var(--navy)] mb-3">{benefit.listTitle}</p>
                      <ul className="grid grid-cols-2 gap-2 text-sm text-gray-600">
                        {benefit.points.map((point) => (
                          <li key={point} className="flex items-center gap-2">
                            <CheckCircle2 className="h-4 w-4 text-[var(--gold)] flex-shrink-0" />
                            {point}
                          </li>
                        ))}
                      </ul>
                    </div>
                    
                    {benefit.note && (
                      <p className="text-gray-500 italic border-l-4 border-[var(--gold)] pl-4 mt-6 text-sm">
                        {benefit.note}
                      </p>
                    )}
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* TREATMENT PROCESS */}
      <section className="py-24 bg-white">
        <div className="mx-auto max-w-6xl px-6">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            <div className="relative h-[400px] rounded-lg overflow-hidden shadow-lg">
              <Image
                src="/images/f0e477_39aba48e92444e238d089a57789598f7~mv2.avif"
                alt="Invisalign treatment process"
                fill
                className="object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent" />
              <div className="absolute bottom-8 left-8 right-8 text-white">
                <p className="text-2xl font-bold">Your journey to a straighter smile</p>
              </div>
            </div>
            
            <div className="space-y-6">
              <h2 className="text-3xl sm:text-4xl font-bold text-[var(--navy)]">
                Your Invisalign Treatment Journey
              </h2>
              <p className="text-gray-600">
                From consultation to your new smile—here&apos;s what to expect:
              </p>
              
              <div className="space-y-4">
                {treatmentProcess.map((step, index) => (
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

      {/* Modern Two-Tone Divider */}
      <div className="relative h-24">
        <svg
          className="absolute w-full h-full"
          preserveAspectRatio="none"
          viewBox="0 0 1440 96"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <polygon points="0,96 0,20 1440,96" fill="var(--navy)" />
          <polygon points="950,96 1440,40 1440,96" fill="var(--gold)" />
        </svg>
      </div>

      {/* FAQ SECTION */}
      <section className="py-24 bg-[#f5f5f5]">
        <div className="mx-auto max-w-3xl px-6">
          <div className="text-center mb-12">
            <h2 className="text-3xl sm:text-4xl font-bold text-[var(--navy)] mb-4">
              Frequently Asked Questions
            </h2>
          </div>
          
          <div className="space-y-4">
            {faqs.map((faq) => (
              <details key={faq.question} className="group bg-white rounded-lg shadow-sm">
                <summary className="flex cursor-pointer items-center justify-between p-6 font-semibold text-[var(--navy)]">
                  {faq.question}
                  <span className="ml-4 flex h-8 w-8 items-center justify-center rounded-full bg-[var(--gold)]/10 text-[var(--gold)] text-xl transition group-open:rotate-45">
                    +
                  </span>
                </summary>
                <div className="px-6 pb-6 text-gray-600 leading-relaxed">
                  {faq.answer}
                </div>
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
            <Link href="/services/cosmetic-dentistry" className="group border border-[var(--gold)]/40 bg-[#faf9f7] p-8 text-center hover:border-[var(--gold)] hover:shadow-lg transition-all">
              <div className="w-16 h-16 mx-auto mb-6 rounded-full bg-[var(--navy)] flex items-center justify-center">
                <Smile className="w-8 h-8 text-white" strokeWidth={1.5} />
              </div>
              <h3 className="text-lg font-bold text-[var(--navy)] mb-4 leading-snug uppercase tracking-wide">
                Cosmetic Dentistry
              </h3>
              <p className="text-gray-600 leading-relaxed text-sm">
                Complement your Invisalign results with whitening, veneers, or a full smile makeover.
              </p>
            </Link>
            
            <Link href="/services/general-dentistry" className="group border border-[var(--gold)]/40 bg-[#faf9f7] p-8 text-center hover:border-[var(--gold)] hover:shadow-lg transition-all">
              <div className="w-16 h-16 mx-auto mb-6 rounded-full bg-[var(--navy)] flex items-center justify-center">
                <Heart className="w-8 h-8 text-white" strokeWidth={1.5} />
              </div>
              <h3 className="text-lg font-bold text-[var(--navy)] mb-4 leading-snug uppercase tracking-wide">
                General Dentistry
              </h3>
              <p className="text-gray-600 leading-relaxed text-sm">
                Maintain a healthy foundation with professional cleanings and preventive care.
              </p>
            </Link>
            
            <Link href="/services/restorative-dentistry" className="group border border-[var(--gold)]/40 bg-[#faf9f7] p-8 text-center hover:border-[var(--gold)] hover:shadow-lg transition-all">
              <div className="w-16 h-16 mx-auto mb-6 rounded-full bg-[var(--navy)] flex items-center justify-center">
                <Zap className="w-8 h-8 text-white" strokeWidth={1.5} />
              </div>
              <h3 className="text-lg font-bold text-[var(--navy)] mb-4 leading-snug uppercase tracking-wide">
                Dental Implants
              </h3>
              <p className="text-gray-600 leading-relaxed text-sm">
                Replace missing teeth with long-lasting, natural-looking implant solutions.
              </p>
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
                Ready to start your Invisalign journey? Schedule a free consultation with Dr. Bright to find out if clear aligners are right for you.
              </p>
              
              <form className="space-y-4">
                <div className="grid grid-cols-2 gap-4">
                  <input
                    type="text"
                    placeholder="First Name"
                    className="w-full px-4 py-3 bg-white border border-gray-200 focus:border-[var(--gold)] focus:outline-none transition"
                  />
                  <input
                    type="text"
                    placeholder="Last Name"
                    className="w-full px-4 py-3 bg-white border border-gray-200 focus:border-[var(--gold)] focus:outline-none transition"
                  />
                </div>
                <div className="grid grid-cols-2 gap-4">
                  <input
                    type="email"
                    placeholder="Email Address"
                    className="w-full px-4 py-3 bg-white border border-gray-200 focus:border-[var(--gold)] focus:outline-none transition"
                  />
                  <input
                    type="tel"
                    placeholder="Mobile Number"
                    className="w-full px-4 py-3 bg-white border border-gray-200 focus:border-[var(--gold)] focus:outline-none transition"
                  />
                </div>
                <textarea
                  placeholder="Your Message"
                  rows={4}
                  className="w-full px-4 py-3 bg-white border border-gray-200 focus:border-[var(--gold)] focus:outline-none transition resize-none"
                />
                <button
                  type="submit"
                  className="w-full bg-[var(--gold)] text-white py-4 font-semibold transition hover:bg-[var(--gold)]/90"
                >
                  Submit Form
                </button>
              </form>
            </div>
            
            <div className="space-y-6 lg:pt-20">
              <div className="bg-white p-6 shadow-sm border-l-4 border-[var(--gold)]">
                <h3 className="text-xl font-semibold text-[var(--navy)] mb-3">Call Us</h3>
                <div className="flex items-center gap-3">
                  <div className="w-10 h-10 rounded-full bg-[var(--gold)] flex items-center justify-center">
                    <Phone className="h-5 w-5 text-white" />
                  </div>
                  <a href="tel:(303) 377-7744" className="text-gray-600 hover:text-[var(--gold)] transition">
                    (303) 377-7744
                  </a>
                </div>
              </div>
              
              <div className="bg-white p-6 shadow-sm border-l-4 border-[var(--gold)]">
                <h3 className="text-xl font-semibold text-[var(--navy)] mb-3">Our Address</h3>
                <div className="flex items-center gap-3">
                  <div className="w-10 h-10 rounded-full bg-[var(--gold)] flex items-center justify-center">
                    <MapPin className="h-5 w-5 text-white" />
                  </div>
                  <a 
                    href="https://maps.google.com/?q=5055+E+Kentucky+Ave,+Denver,+CO+80246" 
                    target="_blank" 
                    rel="noopener noreferrer"
                    className="text-gray-600 hover:text-[var(--gold)] transition"
                  >
                    5055 E Kentucky Ave, Denver, CO 80246
                  </a>
                </div>
              </div>
              
              <div className="bg-white p-6 shadow-sm border-l-4 border-[var(--gold)]">
                <h3 className="text-xl font-semibold text-[var(--navy)] mb-3">Get Connected</h3>
                <div className="flex items-center gap-3">
                  <a 
                    href="https://g.page/r/CQVBXHNMdHxCEAE" 
                    target="_blank" 
                    rel="noopener noreferrer"
                    className="w-10 h-10 rounded-full bg-[var(--gold)] flex items-center justify-center hover:bg-[var(--navy)] transition"
                  >
                    <svg className="h-5 w-5 text-white" viewBox="0 0 24 24" fill="currentColor">
                      <path d="M12.48 10.92v3.28h7.84c-.24 1.84-.853 3.187-1.787 4.133-1.147 1.147-2.933 2.4-6.053 2.4-4.827 0-8.6-3.893-8.6-8.72s3.773-8.72 8.6-8.72c2.6 0 4.507 1.027 5.907 2.347l2.307-2.307C18.747 1.44 16.133 0 12.48 0 5.867 0 .307 5.387.307 12s5.56 12 12.173 12c3.573 0 6.267-1.173 8.373-3.36 2.16-2.16 2.84-5.213 2.84-7.667 0-.76-.053-1.467-.173-2.053H12.48z"/>
                    </svg>
                  </a>
                  <a 
                    href="https://www.facebook.com/drbrightdds" 
                    target="_blank" 
                    rel="noopener noreferrer"
                    className="w-10 h-10 rounded-full bg-[var(--gold)] flex items-center justify-center hover:bg-[var(--navy)] transition"
                  >
                    <svg className="h-5 w-5 text-white" viewBox="0 0 24 24" fill="currentColor">
                      <path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z"/>
                    </svg>
                  </a>
                  <a 
                    href="https://www.instagram.com/drbrightdds" 
                    target="_blank" 
                    rel="noopener noreferrer"
                    className="w-10 h-10 rounded-full bg-[var(--gold)] flex items-center justify-center hover:bg-[var(--navy)] transition"
                  >
                    <svg className="h-5 w-5 text-white" viewBox="0 0 24 24" fill="currentColor">
                      <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z"/>
                    </svg>
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
