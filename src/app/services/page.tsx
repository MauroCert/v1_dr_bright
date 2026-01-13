import Image from 'next/image';
import Link from 'next/link';
import { ArrowRight, Clock, UserCheck, Sparkles } from 'lucide-react';

const signatureStacks = [
  {
    title: 'Dental Exams & Cleanings',
    description:
      'A focus on preventive dentistry helps you maintain the highest standard of oral health while limiting dental expenditures.',
    href: '/services/general-dentistry',
    badge: 'Preventive',
    image: '/Main%20service%20page/Copy%20of%20Dental%20Exams%20&%20Cleanings.jpg',
    checklist: ['Longer hygiene visits', 'Oral cancer screenings', 'Home care coaching'],
  },
  {
    title: 'Emergency Dentistry',
    description:
      'Same-day relief for tooth pain, broken teeth, or infections with Dr. Bright\'s calm bedside manner.',
    href: '/services/emergency-dentistry',
    badge: 'Same-Day',
    image: '/Main%20service%20page/european-mid-pleased-dentist-woman-face-mask-working-dental-clinic.jpg',
    checklist: ['Rapid diagnostics', 'Temporary restorations', 'Medication coordination'],
  },
  {
    title: 'Cosmetic Dentistry',
    description:
      'Volumes of research confirm the influential role smiles play in confidence, relationships, and first impressions.',
    href: '/services/cosmetic-dentistry',
    badge: 'Cosmetic',
    image: '/Main%20service%20page/Copy%20of%20Cosmetic%20Dentistry.jpg',
    checklist: ['Porcelain veneers', 'Whitening plans', 'Facial aesthetics'],
  },
  {
    title: 'Invisalign®',
    description:
      'Discreet aligner plans with digital scans, remote check-ins, and Dr. Bright\'s direct oversight.',
    href: '/services/invisalign',
    badge: 'Aligners',
    image: '/Main%20service%20page/Copy%20of%20Invisalign%C2%AE%20Clear%20Aligners.jpg',
    checklist: ['Digital impressions', 'Tray coaching', 'Retention planning'],
  },
  {
    title: 'Dental Implants',
    description:
      'From single implants to All-on-4 style solutions, restorative planning is tailored to your smile goals.',
    href: '/services/restorative-dentistry',
    badge: 'Implants',
    image: '/Main%20service%20page/young-woman-is-dental-chair-drilling-her-tooth-by-specialist-modern-clinic.jpg',
    checklist: ['Guided surgery partners', 'Immediate temporaries', 'Maintenance visits'],
  },
  {
    title: 'Sedation Dentistry',
    description:
      'Laughing gas and other comfort options keep anxious patients relaxed during any procedure.',
    href: '/services/sedation-dentistry',
    badge: 'Comfort',
    image: '/Main%20service%20page/Copy%20of%20Sedation%20Dentistry.jpg',
    checklist: ['Nitrous oxide', 'Comfort amenities', 'Longer appointment buffers'],
  },
  {
    title: 'Extractions',
    description:
      'Simple or surgical extractions performed with extended appointment times and gentle technique.',
    href: '/services/extractions',
    badge: 'Surgical',
    image: '/Main%20service%20page/orthodontist-with-latex-glove-handling-dental-equipment.jpg',
    checklist: ['Wisdom teeth coordination', 'Bone preservation', 'Aftercare check-ins'],
  },
];

export default function Services() {
  return (
    <div className="bg-white">
      {/* HERO */}
      <section className="relative min-h-[60vh] flex items-center justify-center">
        <div className="absolute inset-0">
          <Image
            src="/Main%20service%20page/Hero.jpg"
            alt="Cherry Creek South Dental Services"
            fill
            className="object-cover"
            priority
          />
          <div className="absolute inset-0 bg-black/50" />
        </div>
        
        <div className="relative z-10 text-center px-6 max-w-4xl mx-auto">
          <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold leading-tight text-white mb-6">
            Comprehensive Dental Services
          </h1>
          <p className="text-xl text-white/90 mb-10 max-w-2xl mx-auto">
            Our Cherry Creek South Dental approach blends preventive focus, honest education, and concierge-level care.
          </p>
          <a
            href="tel:3033777744"
            className="inline-flex items-center justify-center bg-[var(--gold)] text-white px-8 py-4 text-base font-semibold transition hover:bg-[var(--gold)]/90"
          >
            Schedule Your Appointment
            <ArrowRight className="ml-2 h-5 w-5" />
          </a>
        </div>
      </section>

      {/* SIGNATURE SERVICES */}
      <section className="py-24 bg-white">
        <div className="mx-auto max-w-6xl px-6">
          <div className="text-center mb-16">
            <h2 className="text-3xl sm:text-4xl font-bold text-[var(--navy)] mb-4">
              Our Signature Services
            </h2>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto">
              Guided by Cherry Creek South Dental service pillars — quality, comfort, and personalized attention.
            </p>
          </div>
          
          <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
            {signatureStacks.map((service) => (
              <Link
                key={service.title}
                href={service.href}
                className="group bg-white border border-gray-200 rounded-lg overflow-hidden shadow-sm hover:shadow-lg transition-all hover:-translate-y-1"
              >
                <div className="relative h-52 w-full overflow-hidden">
                  <Image
                    src={service.image}
                    alt={service.title}
                    fill
                    className="object-cover transition-transform duration-300 group-hover:scale-105"
                    sizes="(min-width: 1024px) 360px, 100vw"
                  />
                  <span className="absolute left-4 top-4 rounded-md bg-white/95 px-3 py-1 text-xs font-semibold uppercase tracking-wide text-[var(--navy)]">
                    {service.badge}
                  </span>
                </div>
                <div className="p-6">
                  <h3 className="text-xl font-bold text-[var(--navy)] mb-3 group-hover:text-[var(--gold)] transition-colors">
                    {service.title}
                  </h3>
                  <p className="text-gray-600 text-sm leading-relaxed mb-4">
                    {service.description}
                  </p>
                  <ul className="space-y-2 text-sm text-gray-500 mb-4">
                    {service.checklist.map((item) => (
                      <li key={item} className="flex items-center gap-2">
                        <span className="w-1.5 h-1.5 rounded-full bg-[var(--gold)]" />
                        {item}
                      </li>
                    ))}
                  </ul>
                  <span className="inline-flex items-center font-semibold text-[var(--gold)] text-sm">
                    Learn more
                    <ArrowRight className="ml-2 h-4 w-4 transition group-hover:translate-x-1" />
                  </span>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* WHY CHOOSE US */}
      <section className="py-24 bg-gradient-to-b from-white to-[#f8f6f3]">
        <div className="mx-auto max-w-6xl px-6">
          <div className="text-center mb-16">
            <h2 className="text-3xl sm:text-4xl font-bold text-[var(--navy)] mb-4">
              Why Patients Choose Us
            </h2>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto">
              Experience the difference of personalized, unhurried dental care designed around your comfort and goals.
            </p>
          </div>
          
          <div className="grid md:grid-cols-3 gap-8">
            {/* Card 1 */}
            <div className="group bg-white rounded-xl p-8 shadow-sm hover:shadow-xl transition-all duration-300 border border-gray-100 hover:border-[var(--gold)]/30">
              <div className="w-14 h-14 rounded-lg bg-[var(--navy)] flex items-center justify-center mb-6 group-hover:bg-[var(--gold)] transition-colors duration-300">
                <Clock className="w-7 h-7 text-white" />
              </div>
              <h3 className="text-xl font-bold text-[var(--navy)] mb-3">Longer Appointments</h3>
              <p className="text-gray-600 leading-relaxed">
                We schedule extended time blocks so you never feel rushed. Every question gets answered, every concern addressed.
              </p>
            </div>

            {/* Card 2 */}
            <div className="group bg-white rounded-xl p-8 shadow-sm hover:shadow-xl transition-all duration-300 border border-gray-100 hover:border-[var(--gold)]/30">
              <div className="w-14 h-14 rounded-lg bg-[var(--navy)] flex items-center justify-center mb-6 group-hover:bg-[var(--gold)] transition-colors duration-300">
                <UserCheck className="w-7 h-7 text-white" />
              </div>
              <h3 className="text-xl font-bold text-[var(--navy)] mb-3">Personal Attention</h3>
              <p className="text-gray-600 leading-relaxed">
                Dr. Bright provides one-on-one care throughout your visit. You're not just a number—you're part of our dental family.
              </p>
            </div>

            {/* Card 3 */}
            <div className="group bg-white rounded-xl p-8 shadow-sm hover:shadow-xl transition-all duration-300 border border-gray-100 hover:border-[var(--gold)]/30">
              <div className="w-14 h-14 rounded-lg bg-[var(--navy)] flex items-center justify-center mb-6 group-hover:bg-[var(--gold)] transition-colors duration-300">
                <Sparkles className="w-7 h-7 text-white" />
              </div>
              <h3 className="text-xl font-bold text-[var(--navy)] mb-3">Advanced Technology</h3>
              <p className="text-gray-600 leading-relaxed">
                AI-enhanced diagnostics and digital imaging help us catch issues early and plan treatments with precision.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* CONTACT CTA */}
      <section className="py-24 bg-[var(--navy)]">
        <div className="mx-auto max-w-4xl px-6 text-center">
          <h2 className="text-3xl sm:text-4xl font-bold text-white mb-6">
            Ready for Concierge-Level Dental Care?
          </h2>
          <p className="text-lg text-white/80 mb-10 max-w-2xl mx-auto">
            Call or text to reserve a longer appointment block tailored to your smile goals.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a
              href="tel:3033777744"
              className="inline-flex items-center justify-center bg-[var(--gold)] text-white px-8 py-4 text-base font-semibold transition hover:bg-[var(--gold)]/90"
            >
              Call (303) 377-7744
            </a>
            <a
              href="sms:7208641333"
              className="inline-flex items-center justify-center bg-transparent border-2 border-white text-white px-8 py-4 text-base font-semibold transition hover:bg-white hover:text-[var(--navy)]"
            >
              Text (720) 864-1333
            </a>
          </div>
        </div>
      </section>
    </div>
  );
}
