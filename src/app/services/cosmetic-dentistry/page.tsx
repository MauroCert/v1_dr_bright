import Image from 'next/image';
import Link from 'next/link';
import { ArrowRight, CheckCircle2, Sparkles, Star, Heart, Shield, Clock, Phone, MapPin } from 'lucide-react';

type CosmeticService = {
  title: string;
  description: string;
  listTitle: string;
  points: string[];
  image: string;
  note?: string;
};

const cosmeticServices: CosmeticService[] = [
  {
    title: 'Teeth Whitening',
    description: 'Brighten your smile safely and effectively with professional-grade whitening solutions. Our whitening treatments are designed to remove deep stains caused by coffee, tea, wine, aging, and everyday life—without causing sensitivity or damaging enamel.',
    listTitle: 'Perfect for:',
    points: ['Special events', 'Photo-ready smiles', 'Reversing long-term discoloration', 'A fast, dramatic confidence boost'],
    image: '/Main service page/european-mid-pleased-dentist-woman-face-mask-working-dental-clinic.jpg',
  },
  {
    title: 'Porcelain Veneers',
    description: 'Veneers are thin, custom-made porcelain shells that instantly refine your smile. They can change tooth shape, size, color, and alignment with stunning, natural results.',
    listTitle: 'Veneers can correct:',
    points: ['Chips & gaps', 'Discoloration', 'Uneven or worn teeth', 'Minor misalignment'],
    note: 'Dr. Bright takes a meticulous approach to veneer design to ensure your results look beautifully natural—not artificial.',
    image: '/Individual service page/Hero.jpg',
  },
  {
    title: 'Invisalign® Clear Aligners',
    description: 'Straighten your teeth discreetly with Invisalign. Using digital scanning technology, we create a custom treatment plan that gradually moves your teeth into better alignment—without metal brackets or wires.',
    listTitle: 'Great for improving:',
    points: ['Crowding', 'Spacing', 'Bite alignment', 'Aesthetic harmony'],
    image: '/Main service page/Copy of Invisalign® Clear Aligners.jpg',
  },
  {
    title: 'Cosmetic Bonding',
    description: 'Cosmetic bonding uses tooth-colored composite material to repair chips, cracks, and small gaps. It\'s a fast, conservative, and cost-effective way to enhance your smile in a single appointment.',
    listTitle: 'Bonding is ideal for:',
    points: ['Minor aesthetic flaws', 'Fast fixes', 'Affordable cosmetic options'],
    image: '/Main service page/young-woman-is-dental-chair-drilling-her-tooth-by-specialist-modern-clinic.jpg',
  },
  {
    title: 'Smile Makeovers',
    description: 'For patients looking for a dramatic transformation, we combine custom treatments—such as whitening, veneers, and Invisalign—to design a complete smile makeover.',
    listTitle: 'Each smile makeover includes:',
    points: ['Comprehensive evaluation', 'Digital planning & imaging', 'Personalized treatment sequencing', 'Aesthetic design based on your goals'],
    image: '/Individual service page/What your general dentistry visit feels like.jpg',
  },
];

const consultationProcess = [
  {
    title: 'Personalized Discussion',
    description: 'We start by understanding your goals, concerns, and ideal outcomes. Dr. Bright takes time to learn what you love and what you want to change about your smile.',
  },
  {
    title: 'Comprehensive Evaluation',
    description: 'We use advanced technology, including AI-enhanced X-rays and digital scans, to evaluate teeth, gums, and bite structure.',
  },
  {
    title: 'Customized Recommendations',
    description: 'Dr. Bright presents conservative, personalized options—and explains the benefits, timelines, and costs so you can make informed decisions.',
  },
  {
    title: 'Your Treatment Plan',
    description: 'Together, we create a treatment plan that fits your lifestyle, budget, and smile goals.',
  },
];

const faqs = [
  {
    question: 'Does cosmetic dentistry hurt?',
    answer: 'Most cosmetic treatments are painless. Options like whitening, bonding, and Invisalign are minimally invasive. Veneer treatment is gentle and designed for long-term comfort.',
  },
  {
    question: 'How long do cosmetic results last?',
    answer: 'With proper care: Whitening lasts 1–3 years, Bonding lasts 3–7 years, Veneers last 10–15+ years, and Invisalign results are lifelong with retainers.',
  },
  {
    question: 'Is cosmetic dentistry covered by insurance?',
    answer: 'Most cosmetic treatments are considered elective. However, some procedures—like crowns or certain aligner treatments—may qualify for partial coverage depending on your provider.',
  },
  {
    question: 'Am I a candidate for cosmetic dentistry?',
    answer: 'If you are in good oral health and want to enhance your smile, you are likely a great candidate. We\'ll assess at your consultation.',
  },
];

export default function CosmeticDentistry() {
  return (
    <div className="bg-white">
      {/* HERO */}
      <section className="relative min-h-[60vh] flex items-center justify-center">
        <div className="absolute inset-0">
          <Image
            src="/IMG_5467 copy_edited.avif"
            alt="Cosmetic Dentistry at Cherry Creek South Dental"
            fill
            className="object-cover"
            priority
          />
          <div className="absolute inset-0 bg-black/50" />
        </div>
        
        <div className="relative z-10 text-center px-6 max-w-4xl mx-auto">
          <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold leading-tight text-white mb-6">
            Transform Your <span className="text-[var(--gold)]">Smile</span>
          </h1>
          <p className="text-xl text-white/90 mb-10 max-w-2xl mx-auto">
            Natural, beautiful results with Dr. Bright&apos;s artistic approach to cosmetic dentistry.
          </p>
          <a
            href="tel:3033777744"
            className="inline-flex items-center justify-center bg-[var(--gold)] text-white px-8 py-4 text-base font-semibold transition hover:bg-[var(--gold)]/90"
          >
            Schedule Your Consultation
            <ArrowRight className="ml-2 h-5 w-5" />
          </a>
        </div>
      </section>

      {/* WHY CHOOSE COSMETIC DENTISTRY */}
      <section className="py-24 bg-white">
        <div className="mx-auto max-w-6xl px-6">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            {/* Image */}
            <div className="relative h-[450px] overflow-hidden shadow-lg">
              <Image
                src="/54307432591_576cf64694_o.jpg"
                alt="Cosmetic dentistry results"
                fill
                className="object-cover"
              />
            </div>
            
            {/* Content */}
            <div className="space-y-6">
              <h2 className="text-3xl sm:text-4xl font-bold text-[var(--navy)]">
                Why Choose Cosmetic Dentistry With Dr. Bright?
              </h2>
              
              <ul className="space-y-4">
                <li className="flex items-start gap-4">
                  <div className="w-10 h-10 rounded-full bg-[var(--gold)]/10 flex items-center justify-center flex-shrink-0 mt-0.5">
                    <Star className="h-5 w-5 text-[var(--gold)]" />
                  </div>
                  <div>
                    <h3 className="font-semibold text-[var(--navy)]">Natural Results</h3>
                    <p className="text-gray-600 text-sm">High-quality aesthetic outcomes that look and feel authentic</p>
                  </div>
                </li>
                <li className="flex items-start gap-4">
                  <div className="w-10 h-10 rounded-full bg-[var(--gold)]/10 flex items-center justify-center flex-shrink-0 mt-0.5">
                    <Heart className="h-5 w-5 text-[var(--gold)]" />
                  </div>
                  <div>
                    <h3 className="font-semibold text-[var(--navy)]">Personalized Plans</h3>
                    <p className="text-gray-600 text-sm">Customized treatment based on your goals, timeline, and budget</p>
                  </div>
                </li>
                <li className="flex items-start gap-4">
                  <div className="w-10 h-10 rounded-full bg-[var(--gold)]/10 flex items-center justify-center flex-shrink-0 mt-0.5">
                    <Sparkles className="h-5 w-5 text-[var(--gold)]" />
                  </div>
                  <div>
                    <h3 className="font-semibold text-[var(--navy)]">Advanced Technology</h3>
                    <p className="text-gray-600 text-sm">State-of-the-art equipment for precision and comfort</p>
                  </div>
                </li>
                <li className="flex items-start gap-4">
                  <div className="w-10 h-10 rounded-full bg-[var(--gold)]/10 flex items-center justify-center flex-shrink-0 mt-0.5">
                    <Shield className="h-5 w-5 text-[var(--gold)]" />
                  </div>
                  <div>
                    <h3 className="font-semibold text-[var(--navy)]">Conservative Approach</h3>
                    <p className="text-gray-600 text-sm">No unnecessary work—we preserve your natural tooth structure</p>
                  </div>
                </li>
                <li className="flex items-start gap-4">
                  <div className="w-10 h-10 rounded-full bg-[var(--gold)]/10 flex items-center justify-center flex-shrink-0 mt-0.5">
                    <Clock className="h-5 w-5 text-[var(--gold)]" />
                  </div>
                  <div>
                    <h3 className="font-semibold text-[var(--navy)]">Unhurried Care</h3>
                    <p className="text-gray-600 text-sm">Longer appointments with personal attention at every step</p>
                  </div>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* Geometric Divider - Why Choose to Cosmetic Services */}
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

      {/* COSMETIC SERVICES */}
      <section className="py-24 bg-[#f5f5f5] -mt-1">
        <div className="mx-auto max-w-6xl px-6">
          <div className="text-center mb-16">
            <h2 className="text-3xl sm:text-4xl font-bold text-[var(--navy)] mb-4">
              Our Cosmetic Services
            </h2>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto">
              From subtle enhancements to complete smile transformations
            </p>
          </div>
          
          <div className="space-y-16">
            {cosmeticServices.map((service, index) => (
              <div 
                key={service.title} 
                className="bg-white shadow-sm overflow-hidden"
              >
                <div className={`grid lg:grid-cols-2 ${index % 2 === 1 ? 'lg:flex-row-reverse' : ''}`}>
                  {/* Image */}
                  <div className={`relative h-72 lg:h-auto ${index % 2 === 1 ? 'lg:order-2' : 'lg:order-1'}`}>
                    <Image
                      src={service.image}
                      alt={service.title}
                      fill
                      className="object-cover"
                    />
                  </div>
                  
                  {/* Content */}
                  <div className={`p-8 lg:p-10 flex flex-col justify-center ${index % 2 === 1 ? 'lg:order-1' : 'lg:order-2'}`}>
                    <h3 className="text-2xl font-bold text-[var(--navy)] mb-4">{service.title}</h3>
                    <p className="text-gray-600 leading-relaxed mb-6">{service.description}</p>
                    
                    <div>
                      <p className="font-semibold text-[var(--navy)] mb-3">{service.listTitle}</p>
                      <ul className="grid grid-cols-2 gap-2 text-sm text-gray-600">
                        {service.points.map((point) => (
                          <li key={point} className="flex items-center gap-2">
                            <CheckCircle2 className="h-4 w-4 text-[var(--gold)] flex-shrink-0" />
                            {point}
                          </li>
                        ))}
                      </ul>
                    </div>
                    
                    {service.note && (
                      <p className="text-gray-500 italic border-l-4 border-[var(--gold)] pl-4 mt-6 text-sm">
                        {service.note}
                      </p>
                    )}
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Geometric Divider - Cosmetic Services to Consultation Process */}
      <div className="relative h-24 -mt-1">
        <svg
          className="absolute w-full h-full"
          preserveAspectRatio="none"
          viewBox="0 0 1440 96"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <polygon points="0,96 1440,0 1440,96" fill="white" />
          <polygon points="0,0 0,96 1440,0" fill="#f5f5f5" />
        </svg>
      </div>

      {/* CONSULTATION PROCESS */}
      <section className="py-24 bg-white -mt-1">
        <div className="mx-auto max-w-6xl px-6">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            {/* Image */}
            <div className="relative h-[400px] rounded-lg overflow-hidden shadow-lg">
              <Image
                src="/Main service page/orthodontist-with-latex-glove-handling-dental-equipment.jpg"
                alt="Cosmetic consultation"
                fill
                className="object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent" />
              <div className="absolute bottom-8 left-8 right-8 text-white">
                <p className="text-2xl font-bold">Where artistry meets precision</p>
              </div>
            </div>
            
            {/* Content */}
            <div className="space-y-6">
              <h2 className="text-3xl sm:text-4xl font-bold text-[var(--navy)]">
                Your Cosmetic Consultation
              </h2>
              <p className="text-gray-600">
                What to expect when you visit us for a cosmetic consultation:
              </p>
              
              <div className="space-y-4">
                {consultationProcess.map((step, index) => (
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

      {/* Geometric Divider - Consultation Process to FAQ */}
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

      {/* FAQ SECTION */}
      <section className="py-24 bg-[#f5f5f5] -mt-1">
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

      {/* Geometric Divider - FAQ to Other Treatments */}
      <div className="relative h-24 -mt-1">
        <svg
          className="absolute w-full h-full"
          preserveAspectRatio="none"
          viewBox="0 0 1440 96"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <polygon points="0,96 1440,0 1440,96" fill="#f8f6f3" />
          <polygon points="0,0 0,96 1440,0" fill="#f5f5f5" />
        </svg>
      </div>

      {/* OTHER TREATMENTS */}
      <section className="py-24 bg-[#f8f6f3] -mt-1">
        <div className="mx-auto max-w-6xl px-6">
          <h2 className="text-3xl sm:text-4xl font-light tracking-wide text-[var(--navy)] text-center mb-16 uppercase">
            Other Treatments to Consider
          </h2>
          
          <div className="grid md:grid-cols-3 gap-8">
            <Link href="/services/restorative-dentistry" className="group border border-[var(--gold)]/40 bg-[#faf9f7] p-8 text-center hover:border-[var(--gold)] hover:shadow-lg transition-all">
              <div className="w-16 h-16 mx-auto mb-6 rounded-full bg-[var(--navy)] flex items-center justify-center">
                <Sparkles className="w-8 h-8 text-white" strokeWidth={1.5} />
              </div>
              <h3 className="text-lg font-bold text-[var(--navy)] mb-4 leading-snug uppercase tracking-wide">
                Dental Implants
              </h3>
              <p className="text-gray-600 leading-relaxed text-sm">
                A long-lasting, natural-looking solution for missing teeth.
              </p>
            </Link>
            
            <Link href="/services/restorative-dentistry" className="group border border-[var(--gold)]/40 bg-[#faf9f7] p-8 text-center hover:border-[var(--gold)] hover:shadow-lg transition-all">
              <div className="w-16 h-16 mx-auto mb-6 rounded-full bg-[var(--navy)] flex items-center justify-center">
                <Shield className="w-8 h-8 text-white" strokeWidth={1.5} />
              </div>
              <h3 className="text-lg font-bold text-[var(--navy)] mb-4 leading-snug uppercase tracking-wide">
                Dental Crowns
              </h3>
              <p className="text-gray-600 leading-relaxed text-sm">
                Protect and strengthen damaged teeth with natural-looking restorations.
              </p>
            </Link>
            
            <Link href="/services/general-dentistry" className="group border border-[var(--gold)]/40 bg-[#faf9f7] p-8 text-center hover:border-[var(--gold)] hover:shadow-lg transition-all">
              <div className="w-16 h-16 mx-auto mb-6 rounded-full bg-[var(--navy)] flex items-center justify-center">
                <Heart className="w-8 h-8 text-white" strokeWidth={1.5} />
              </div>
              <h3 className="text-lg font-bold text-[var(--navy)] mb-4 leading-snug uppercase tracking-wide">
                Professional Cleanings
              </h3>
              <p className="text-gray-600 leading-relaxed text-sm">
                A healthy foundation before cosmetic work with thorough preventive care.
              </p>
            </Link>
          </div>
        </div>
      </section>

      {/* BOOK YOUR APPOINTMENT - Form + Contact Cards */}
      <section className="py-24 bg-[#f5f5f5]">
        <div className="mx-auto max-w-6xl px-6">
          <div className="grid lg:grid-cols-2 gap-12">
            {/* Left - Form */}
            <div>
              <h2 className="text-3xl sm:text-4xl font-light text-[var(--gold)] mb-4 uppercase tracking-wide">
                Book Your<br />Appointment
              </h2>
              <p className="text-gray-600 mb-8">
                Ready to take the next step towards a healthier smile? Contact us with any questions or to schedule an appointment.
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
            
            {/* Right - Contact Cards */}
            <div className="space-y-6 lg:pt-20">
              {/* Call Us Card */}
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
              
              {/* Our Address Card */}
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
              
              {/* Get Connected Card */}
              <div className="bg-white p-6 shadow-sm border-l-4 border-[var(--gold)]">
                <h3 className="text-xl font-semibold text-[var(--navy)] mb-3">Get Connected</h3>
                <div className="flex items-center gap-3">
                  {/* Google */}
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
                  {/* Facebook */}
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
                  {/* Instagram */}
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
