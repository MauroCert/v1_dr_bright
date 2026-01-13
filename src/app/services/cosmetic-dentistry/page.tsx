import Image from 'next/image';
import Link from 'next/link';
import { ArrowRight, CheckCircle2, Sparkles, Star, Heart, Shield, Clock } from 'lucide-react';

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
            src="/Homepage/Cosmetic%20Dentistry.jpg"
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
            className="inline-flex items-center justify-center bg-[var(--gold)] text-white px-8 py-4 text-base font-semibold rounded-md transition hover:bg-[var(--gold)]/90"
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
            <div className="relative h-[450px] rounded-lg overflow-hidden shadow-lg">
              <Image
                src="/Main service page/Copy of Cosmetic Dentistry.jpg"
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

      {/* COSMETIC SERVICES */}
      <section className="py-24 bg-[#f5f5f5]">
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
                className="bg-white rounded-lg shadow-sm overflow-hidden"
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
                    <div className="flex items-center gap-3 mb-4">
                      <Sparkles className="h-6 w-6 text-[var(--gold)]" />
                      <h3 className="text-2xl font-bold text-[var(--navy)]">{service.title}</h3>
                    </div>
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

      {/* CONSULTATION PROCESS */}
      <section className="py-24 bg-white">
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
      <section className="py-24 bg-white">
        <div className="mx-auto max-w-6xl px-6">
          <div className="text-center mb-12">
            <h2 className="text-3xl sm:text-4xl font-bold text-[var(--navy)] mb-4">
              Other Treatments to Consider
            </h2>
            <p className="text-gray-600">
              Patients interested in cosmetic dentistry also commonly explore:
            </p>
          </div>
          
          <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
            <Link href="/services/restorative-dentistry" className="group bg-white border border-gray-200 rounded-lg p-6 hover:shadow-lg hover:-translate-y-1 transition-all">
              <div className="flex items-center gap-3 mb-3">
                <div className="w-10 h-10 rounded-full bg-[var(--gold)]/10 flex items-center justify-center">
                  <Sparkles className="h-5 w-5 text-[var(--gold)]" />
                </div>
                <h3 className="font-bold text-[var(--navy)] group-hover:text-[var(--gold)] transition-colors">Dental Implants</h3>
              </div>
              <p className="text-sm text-gray-600">
                A long-lasting, natural-looking solution for missing teeth.
              </p>
            </Link>
            
            <Link href="/services/restorative-dentistry" className="group bg-white border border-gray-200 rounded-lg p-6 hover:shadow-lg hover:-translate-y-1 transition-all">
              <div className="flex items-center gap-3 mb-3">
                <div className="w-10 h-10 rounded-full bg-[var(--gold)]/10 flex items-center justify-center">
                  <Shield className="h-5 w-5 text-[var(--gold)]" />
                </div>
                <h3 className="font-bold text-[var(--navy)] group-hover:text-[var(--gold)] transition-colors">Dental Crowns</h3>
              </div>
              <p className="text-sm text-gray-600">
                Protect and strengthen damaged teeth with natural-looking restorations.
              </p>
            </Link>
            
            <Link href="/services/general-dentistry" className="group bg-white border border-gray-200 rounded-lg p-6 hover:shadow-lg hover:-translate-y-1 transition-all">
              <div className="flex items-center gap-3 mb-3">
                <div className="w-10 h-10 rounded-full bg-[var(--gold)]/10 flex items-center justify-center">
                  <Heart className="h-5 w-5 text-[var(--gold)]" />
                </div>
                <h3 className="font-bold text-[var(--navy)] group-hover:text-[var(--gold)] transition-colors">Professional Cleanings</h3>
              </div>
              <p className="text-sm text-gray-600">
                A healthy foundation before cosmetic work with thorough preventive care.
              </p>
            </Link>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-24 bg-[var(--navy)]">
        <div className="mx-auto max-w-4xl px-6 text-center">
          <Sparkles className="h-12 w-12 mx-auto text-[var(--gold)] mb-6" />
          <h2 className="text-3xl sm:text-4xl font-bold text-white mb-6">
            Ready to Transform Your Smile?
          </h2>
          <p className="text-lg text-white/80 max-w-2xl mx-auto mb-10">
            Whether you&apos;re looking for subtle refinements or a complete transformation, Cherry Creek South Dental is here to help you achieve a smile you love.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a
              href="tel:3033777744"
              className="inline-flex items-center justify-center bg-[var(--gold)] text-white px-8 py-4 text-base font-semibold rounded-md transition hover:bg-[var(--gold)]/90"
            >
              Schedule Your Consultation
              <ArrowRight className="ml-2 h-5 w-5" />
            </a>
            <a
              href="tel:3033777744"
              className="inline-flex items-center justify-center bg-transparent border-2 border-white text-white px-8 py-4 text-base font-semibold rounded-md transition hover:bg-white hover:text-[var(--navy)]"
            >
              (303) 377-7744
            </a>
          </div>
        </div>
      </section>
    </div>
  );
}
