import Image from 'next/image';
import Link from 'next/link';
import { ArrowRight } from 'lucide-react';

const signatureStacks = [
  {
    title: 'Dental Exams & Cleanings',
    description:
      'A focus on preventive dentistry helps you maintain the highest standard of oral health while limiting dental expenditures.',
    href: '/services/general-dentistry',
    badge: 'Preventive',
    image: '/images/drbright-patient.jpg',
    checklist: ['Longer hygiene visits', 'Oral cancer screenings', 'Home care coaching'],
  },
  {
    title: 'Emergency Dentistry',
    description:
      'Same-day relief for tooth pain, broken teeth, or infections with Dr. Bright’s calm bedside manner.',
    href: '/services/emergency-dentistry',
    badge: 'Same-Day',
    image: '/images/drbright-lobby.jpg',
    checklist: ['Rapid diagnostics', 'Temporary restorations', 'Medication coordination'],
  },
  {
    title: 'Cosmetic Dentistry',
    description:
      'Volumes of research confirm the influential role smiles play in confidence, relationships, and first impressions.',
    href: '/services/cosmetic-dentistry',
    badge: 'Cosmetic',
    image: '/images/drbright-patient.jpg',
    checklist: ['Porcelain veneers', 'Whitening plans', 'Facial aesthetics'],
  },
  {
    title: 'Invisalign®',
    description:
      'Discreet aligner plans with digital scans, remote check-ins, and Dr. Bright’s direct oversight.',
    href: '/services/invisalign',
    badge: 'Aligners',
    image: '/images/drbright-invisalign.png',
    imageType: 'logo',
    checklist: ['Digital impressions', 'Tray coaching', 'Retention planning'],
  },
  {
    title: 'Dental Implants',
    description:
      'From single implants to All-on-4 style solutions, restorative planning is tailored to your smile goals.',
    href: '/services/restorative-dentistry',
    badge: 'Implants',
    image: '/images/drbright-patient.jpg',
    checklist: ['Guided surgery partners', 'Immediate temporaries', 'Maintenance visits'],
  },
  {
    title: 'Sedation Dentistry',
    description:
      'Laughing gas and other comfort options keep anxious patients relaxed during any procedure.',
    href: '/services/sedation-dentistry',
    badge: 'Comfort',
    image: '/images/drbright-covid-badge.png',
    imageType: 'logo',
    checklist: ['Nitrous oxide', 'Comfort amenities', 'Longer appointment buffers'],
  },
  {
    title: 'Extractions',
    description:
      'Simple or surgical extractions performed with extended appointment times and gentle technique.',
    href: '/services/extractions',
    badge: 'Surgical',
    image: '/images/drbright-lobby.jpg',
    checklist: ['Wisdom teeth coordination', 'Bone preservation', 'Aftercare check-ins'],
  },
];

export default function Services() {
  return (
    <div className="bg-[var(--background)] text-[var(--navy)]">
      {/* HERO */}
      <section className="relative isolate overflow-hidden">
        <div
          className="absolute inset-0 bg-cover bg-center"
          style={{ backgroundImage: "url('/images/drbright-lobby.jpg')" }}
        />
        <div className="absolute inset-0 bg-[var(--navy)]/85" />
        <div className="relative mx-auto flex max-w-6xl flex-col gap-10 px-4 py-24 text-[#f4fbf2]">
          <div className="space-y-6 text-center lg:text-left">
            <h1 className="text-4xl font-semibold leading-tight text-white sm:text-5xl">
              Comprehensive dental services with concierge-level warmth.
            </h1>
            <p className="text-lg text-[#eadfcf]">
              Our Cherry Creek South Dental approach blends preventive focus, honest education, a joyful atmosphere, and concierge-level time.
            </p>
            <div className="flex flex-col items-center gap-4 sm:flex-row sm:justify-center lg:justify-start">
              <a
                href="tel:(303) 377-7744"
                className="inline-flex items-center rounded-full bg-[var(--gold)] px-8 py-3 font-semibold text-[var(--navy)] transition hover:bg-white"
              >
                Schedule Your Appointment
                <ArrowRight className="ml-2 h-5 w-5" />
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* SIGNATURE STACKS */}
      <section className="bg-[var(--background)] py-20">
        <div className="mx-auto max-w-6xl px-4">
          <div className="mb-12 text-center">
            <p className="text-xs uppercase tracking-[0.3em] text-[var(--gold)]">Signature services</p>
            <h2 className="mt-3 text-3xl font-semibold text-[var(--navy)]">Guided by Cherry Creek South Dental service pillars.</h2>
          </div>
          <div className="grid gap-8 md:grid-cols-3">
            {signatureStacks.map((service) => (
              <div
                key={service.title}
                className="group overflow-hidden rounded-3xl border border-[#eadfce] bg-white shadow-sm transition hover:-translate-y-1 hover:shadow-lg"
              >
                <div className="relative h-56 w-full overflow-hidden">
                  <Image
                    src={service.image}
                    alt={service.title}
                    fill
                    className={
                      service.imageType === 'logo'
                        ? 'object-contain bg-white p-10'
                        : 'object-cover'
                    }
                    sizes="(min-width: 1024px) 360px, 100vw"
                    priority={service.title === 'Dental Exams & Cleanings'}
                  />
                  <span className="absolute left-4 top-4 rounded-full bg-white/90 px-3 py-1 text-xs font-semibold uppercase tracking-wide text-[var(--navy)]">
                    {service.badge}
                  </span>
                </div>
                <div className="space-y-4 p-8">
                  <h3 className="text-2xl font-semibold text-[var(--navy)]">{service.title}</h3>
                  <p className="text-[var(--stone)]">{service.description}</p>
                  <ul className="space-y-2 text-sm text-[var(--stone)]">
                    {service.checklist.map((item) => (
                      <li key={item} className="flex items-center gap-2">
                        <span className="text-[var(--gold)]">•</span>
                        {item}
                      </li>
                    ))}
                  </ul>
                  <Link href={service.href} className="inline-flex items-center font-semibold text-[var(--gold)]">
                    Learn more
                    <ArrowRight className="ml-2 h-4 w-4 transition group-hover:translate-x-1" />
                  </Link>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CONTACT CTA */}
      <section className="bg-[var(--navy)] py-20 text-white">
        <div className="mx-auto max-w-5xl px-4 text-center">
          <h2 className="text-3xl font-semibold">Ready for concierge-level hospitality in Denver?</h2>
          <p className="mt-4 text-[#c5e2c7]">
            Call or text to reserve a longer appointment block tailored to your smile goals.
          </p>
          <div className="mt-8 flex flex-col gap-4 sm:flex-row sm:justify-center">
            <a
              href="tel:(303) 377-7744"
              className="inline-flex items-center justify-center rounded-full bg-[var(--gold)] px-8 py-3 font-semibold text-[var(--navy)] transition hover:bg-white"
            >
              Call (303) 377-7744
            </a>
            <a
              href="sms:(720) 864-1333"
              className="inline-flex items-center justify-center rounded-full border border-white px-8 py-3 font-semibold text-white transition hover:bg-white/10"
            >
              Text (720) 864-1333
            </a>
          </div>
        </div>
      </section>
    </div>
  );
}
