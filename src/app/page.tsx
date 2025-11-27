import Image from 'next/image';
import Link from 'next/link';
import {
  ArrowRight,
  MapPin,
  MessageCircle,
  Phone,
  Star,
} from 'lucide-react';

export default function Home() {
  const highlightPanels = [
    {
      title: 'Exceptional Quality of Overall Healthcare',
      action: 'Learn More',
    },
    {
      title: 'Honest and Educational Dentistry',
      action: 'Request an Appointment',
    },
    {
      title: 'Joyful Atmosphere',
      action: 'Discover Our Office',
    },
  ];

  const howWeHelp = [
    {
      title: 'I want to keep my teeth forever',
      description:
        'Dental health moves through many stages. We value preventive and functional care for all ages.',
      icon: '🦷',
      href: '/services#preventive',
      image: '/images/drbright-patient.jpg',
      imageAlt: 'Preventive visit at Cherry Creek South Dental',
    },
    {
      title: 'I want to improve my smile',
      description:
        'Dr. Bright offers a variety of cosmetic dentistry options to customize your smile and confidence.',
      icon: '✨',
      href: '/services#cosmetic',
      image: '/images/drbright-lobby.jpg',
      imageAlt: 'Smiling patient inside Cherry Creek South Dental atrium',
    },
    {
      title: 'I need a tooth replaced',
      description:
        'We offer single or multiple teeth replacements to fit your functional needs and lifestyle.',
      icon: '🪥',
      href: '/services#restorative',
      image: '/images/drbright-covid-badge.png',
      imageAlt: 'Comfort badge used on the current Cherry Creek South Dental site',
    },
  ];

  const services = [
    {
      title: 'Preventive & Family Visits',
      description:
        'Longer hygiene appointments, oral cancer screenings, and judgement-free education for every age.',
      href: '/services#preventive',
      badge: 'Wellness',
      image: '/images/drbright-lobby.jpg',
      imageType: 'photo',
    },
    {
      title: 'Cosmetic & Smile Design',
      description:
        'Porcelain veneers, whitening, bonding, and facial aesthetics planned with digital previews.',
      href: '/services#cosmetic',
      badge: 'Confidence',
      image: '/images/drbright-patient.jpg',
      imageType: 'photo',
    },
    {
      title: 'Invisalign® + Orthodontics',
      description:
        'Clear aligner smile plans guided directly by Dr. Bright with cozy check-ins and remote monitoring.',
      href: '/services#invisalign',
      badge: 'Alignment',
      image: '/images/drbright-invisalign.png',
      imageType: 'logo',
    },
    {
      title: 'Comfort & Safety Technology',
      description:
        'Laughing gas, AI diagnostics, CBCT imaging, and Covid-era safety protocols keep visits calm.',
      href: '/services#technology',
      badge: 'Comfort',
      image: '/images/drbright-covid-badge.png',
      imageType: 'logo',
    },
  ];

  const testimonials = [
    {
      name: 'Sarah M.',
      quote:
        'Dr. Bright and his team made me feel completely comfortable. The longer appointment times really make a difference.',
    },
    {
      name: 'Mike R.',
      quote:
        'Family-owned practice with modern technology. The AI x-rays are amazing!',
    },
    {
      name: 'Jennifer L.',
      quote:
        'The calming atmosphere and patient-first approach is exactly what I needed.',
    },
  ];

  return (
    <div className="bg-white text-gray-900">
      {/* HERO */}
      <section className="relative isolate overflow-hidden">
        <div
          className="absolute inset-0 bg-cover bg-center"
          style={{ backgroundImage: "url('/images/miyamoto-hero.jpg')" }}
        />
        <div className="absolute inset-0 bg-slate-900/65" />
        <div className="relative mx-auto flex max-w-6xl flex-col gap-12 px-4 py-24 text-white lg:flex-row lg:items-center lg:gap-16">
          <div className="flex-1 space-y-6">
            <p className="text-sm uppercase tracking-[0.3em] text-blue-100">
              Cherry Creek South Dental
            </p>
            <h1 className="text-4xl font-semibold leading-tight sm:text-5xl">
              Inspired by Miyamoto’s warmth, perfected for Denver.
            </h1>
            <p className="text-lg text-blue-100">
              We borrowed the joyful, plant-filled hero aesthetic from Miyamoto Family Dental and infused it with Dr. Bright’s
              concierge approach. Longer appointments, calming atrium vibes, and real answers make every visit feel bespoke.
            </p>
            <div className="flex flex-col gap-4 sm:flex-row">
              <a
                href="tel:(303) 377-7744"
                className="inline-flex items-center justify-center rounded-full bg-blue-500 px-8 py-3 text-base font-semibold text-white transition hover:bg-blue-400"
              >
                Request an Appointment
                <ArrowRight className="ml-2 h-5 w-5" />
              </a>
              <a
                href="sms:(720) 864-1333"
                className="inline-flex items-center justify-center rounded-full border border-white/70 px-8 py-3 text-base font-semibold text-white transition hover:bg-white/10"
              >
                Text (720) 864-1333
              </a>
            </div>
            <div className="grid gap-4 text-sm text-blue-100 sm:grid-cols-3">
              <div className="flex items-center space-x-2">
                <Phone className="h-4 w-4 text-white" />
                <span>(303) 377-7744</span>
              </div>
              <div className="flex items-center space-x-2">
                <MessageCircle className="h-4 w-4 text-white" />
                <span>(720) 864-1333</span>
              </div>
              <div className="flex items-center space-x-2">
                <MapPin className="h-4 w-4 text-white" />
                <span>5055 E Kentucky Ave, Denver</span>
              </div>
            </div>
            <div className="flex flex-col gap-4 text-xs uppercase tracking-[0.2em] text-blue-100 sm:flex-row sm:items-center">
              <span>As seen on the current site</span>
              <div className="flex flex-wrap items-center gap-6">
                <Image
                  src="/images/drbright-logo.png"
                  alt="Cherry Creek South Dental logo"
                  width={140}
                  height={140}
                  className="h-12 w-auto"
                  priority
                />
                <Image
                  src="/images/drbright-invisalign.png"
                  alt="Invisalign Provider badge"
                  width={160}
                  height={60}
                  className="h-10 w-auto"
                  priority
                />
              </div>
            </div>
          </div>
          <div className="flex-1 space-y-6">
            <div className="overflow-hidden rounded-3xl bg-white/90 p-4 shadow-2xl backdrop-blur">
              <div className="relative h-64 w-full overflow-hidden rounded-2xl">
                <Image
                  src="/images/drbright-patient.jpg"
                  alt="Cherry Creek South Dental patient lounge"
                  fill
                  className="object-cover"
                  sizes="(min-width: 1024px) 500px, 100vw"
                  priority
                />
              </div>
              <p className="mt-4 text-sm font-semibold text-slate-700">Captured from the current Cherry Creek South Dental site</p>
            </div>
            <div className="grid gap-4 md:grid-cols-2">
              {highlightPanels.map((panel) => (
                <div
                  key={panel.title}
                  className="rounded-2xl border border-white/40 bg-white/90 p-6 text-center text-slate-900 shadow-sm"
                >
                  <p className="text-xl font-semibold">{panel.title}</p>
                  <p className="mt-3 text-blue-600">{panel.action}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* HOW CAN WE HELP */}
      <section className="bg-white py-20">
        <div className="mx-auto max-w-6xl px-4">
          <div className="mb-12 text-center">
            <p className="text-sm uppercase tracking-[0.3em] text-blue-600">How can we help?</p>
            <h2 className="mt-3 text-3xl font-semibold">Comprehensive care for every smile goal</h2>
          </div>
          <div className="grid gap-8 md:grid-cols-3">
            {howWeHelp.map((item) => (
              <div
                key={item.title}
                className="rounded-3xl border border-slate-100 bg-[#f7fbff] p-6 text-left shadow-sm transition hover:-translate-y-1 hover:shadow-lg"
              >
                <div className="relative h-40 w-full overflow-hidden rounded-2xl">
                  <Image
                    src={item.image}
                    alt={item.imageAlt}
                    fill
                    className={item.image.endsWith('.png') ? 'object-contain bg-white/70 p-4' : 'object-cover'}
                    sizes="(min-width: 768px) 320px, 100vw"
                  />
                </div>
                <div className="mt-6 flex items-center gap-3 text-4xl">
                  <span>{item.icon}</span>
                  <div className="text-left text-base font-semibold uppercase tracking-[0.3em] text-blue-500">
                    Personalized
                  </div>
                </div>
                <h3 className="mt-4 text-2xl font-semibold">{item.title}</h3>
                <p className="mt-3 text-slate-600">{item.description}</p>
                <Link
                  href={item.href}
                  className="mt-6 inline-flex items-center font-semibold text-blue-600"
                >
                  Learn more
                  <ArrowRight className="ml-2 h-4 w-4" />
                </Link>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ABOUT PRACTICE */}
      <section className="bg-[#0d1b2a] py-20 text-white">
        <div className="mx-auto flex max-w-6xl flex-col gap-12 px-4 lg:flex-row lg:items-center">
          <div className="flex-1 space-y-6">
            <div className="relative h-80 w-full overflow-hidden rounded-3xl border border-white/10">
              <Image
                src="/images/drbright-lobby.jpg"
                alt="Light-filled Cherry Creek South Dental atrium"
                fill
                className="object-cover"
                sizes="(min-width: 1024px) 520px, 100vw"
              />
            </div>
            <div className="rounded-3xl bg-white p-10 text-slate-900 shadow-2xl">
              <p className="text-sm uppercase tracking-[0.3em] text-blue-600">Mission Statement</p>
              <p className="mt-4 text-2xl font-semibold">
                “We provide the best quality oral and overall healthcare through honesty, education, and a joyful experience.”
              </p>
              <p className="mt-6 text-sm text-slate-500">— Cherry Creek South Dental</p>
            </div>
          </div>
          <div className="flex-1 space-y-6">
            <p className="text-sm uppercase tracking-[0.3em] text-blue-200">About the practice</p>
            <h2 className="text-3xl font-semibold leading-tight">
              Family-owned, patient-first, technology-forward dentistry
            </h2>
            <p className="text-lg text-slate-200">
              Longer hygiene visits, conservative treatment planning, and tools like AI-assisted x-rays, CBCT scans, and same-day scanners mean you always understand your options.
              The light-filled atrium with plants keeps visits calm and judgement free.
            </p>
            <div className="grid gap-4 text-sm text-slate-100 sm:grid-cols-2">
              <div className="rounded-2xl border border-white/10 p-6">
                <p className="text-lg font-semibold">Family-Owned Practice</p>
                <p className="mt-2">Patients are treated like family.</p>
              </div>
              <div className="rounded-2xl border border-white/10 p-6">
                <p className="text-lg font-semibold">Longer Appointments</p>
                <p className="mt-2">Thorough cleanings &amp; same-day answers.</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ABOUT DR. BRIGHT */}
      <section className="bg-white py-20">
        <div className="mx-auto grid max-w-6xl gap-12 px-4 lg:grid-cols-2 lg:items-center">
          <div className="relative min-h-[360px] overflow-hidden rounded-3xl shadow-xl">
            <Image
              src="/images/drbright-patient.jpg"
              alt="Dr. Bright consulting with a patient"
              fill
              className="object-cover"
              sizes="(min-width: 1024px) 520px, 100vw"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-slate-900/70 via-slate-900/10 to-transparent" />
            <div className="absolute bottom-8 left-8 right-8 space-y-2 text-white">
              <p className="text-sm uppercase tracking-[0.3em] text-blue-200">Meet Dr. Bright</p>
              <p className="text-2xl font-semibold">
                Comprehensive, conservative dentistry with a calm touch.
              </p>
              <p className="text-sm text-blue-100">Photo pulled from the existing Cherry Creek South Dental site</p>
            </div>
          </div>
          <div className="space-y-6">
            <h2 className="text-3xl font-semibold">About Dr. Bright</h2>
            <p className="text-slate-600">
              Dr. Bright combines advanced technology (AI x-rays, CBCT diagnostics, intraoral scanning) with a collaborative mindset.
              He cares for families who value detailed explanations, patient-first philosophies, and a relaxing environment.
            </p>
            <ul className="space-y-3 text-slate-700">
              <li>• Member of leading continuing-education study clubs</li>
              <li>• Conservative treatment planning done with patients, not for them</li>
              <li>• Facial aesthetics, Botox, Invisalign®, and full-mouth rehabilitation</li>
            </ul>
            <Link
              href="/about/dr-bright"
              className="inline-flex items-center text-blue-600"
            >
              Learn more about Dr. Bright
              <ArrowRight className="ml-2 h-4 w-4" />
            </Link>
          </div>
        </div>
      </section>

      {/* TOP SERVICES */}
      <section className="bg-[#f7fbff] py-20">
        <div className="mx-auto max-w-6xl px-4">
          <div className="mb-12 text-center">
            <p className="text-sm uppercase tracking-[0.3em] text-blue-600">Services</p>
            <h2 className="mt-3 text-3xl font-semibold">Our top-requested treatments</h2>
            <p className="mt-3 text-slate-600">
              Explore the rest of our comprehensive offerings on the Services page.
            </p>
          </div>
          <div className="grid gap-8 lg:grid-cols-2">
            {services.map((service) => (
              <div
                key={service.title}
                className="group overflow-hidden rounded-3xl border border-slate-100 bg-white shadow-sm transition hover:-translate-y-1 hover:shadow-lg"
              >
                <div className="relative h-56 w-full overflow-hidden border-b border-slate-100">
                  <Image
                    src={service.image}
                    alt={service.title}
                    fill
                    className={
                      service.imageType === 'logo'
                        ? 'object-contain bg-white p-8'
                        : 'object-cover'
                    }
                    sizes="(min-width: 1024px) 500px, 100vw"
                  />
                  {service.badge && (
                    <span className="absolute left-4 top-4 rounded-full bg-white/90 px-3 py-1 text-xs font-semibold uppercase tracking-wide text-slate-700">
                      {service.badge}
                    </span>
                  )}
                </div>
                <div className="space-y-3 p-8">
                  <h3 className="text-2xl font-semibold text-slate-900">{service.title}</h3>
                  <p className="text-slate-600">{service.description}</p>
                  <Link
                    href={service.href}
                    className="inline-flex items-center font-semibold text-blue-600"
                  >
                    Learn more
                    <ArrowRight className="ml-2 h-4 w-4 transition group-hover:translate-x-1" />
                  </Link>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* REVIEWS */}
      <section className="bg-white py-20">
        <div className="mx-auto max-w-6xl px-4">
          <div className="mb-12 text-center">
            <p className="text-sm uppercase tracking-[0.3em] text-blue-600">See what our patients say</p>
            <h2 className="mt-3 text-3xl font-semibold">Trusted by Denver families</h2>
          </div>
          <div className="grid gap-8 md:grid-cols-3">
            {testimonials.map((t) => (
              <figure
                key={t.name}
                className="rounded-3xl border border-slate-100 bg-[#f7fbff] p-8 shadow-sm"
              >
                <div className="flex space-x-1 text-yellow-400">
                  {[...Array(5)].map((_, idx) => (
                    <Star key={idx} className="h-4 w-4 fill-current" />
                  ))}
                </div>
                <blockquote className="mt-4 text-slate-700">
                  &ldquo;{t.quote}&rdquo;
                </blockquote>
                <figcaption className="mt-6 text-sm font-semibold text-slate-900">
                  — {t.name}
                </figcaption>
              </figure>
            ))}
          </div>
          <div className="mt-12 flex flex-col items-center gap-4 text-center text-sm text-slate-500">
            <Image
              src="/images/drbright-covid-badge.png"
              alt="Safety badge displayed on the current site"
              width={200}
              height={140}
              className="h-20 w-auto"
            />
            <p>Facebook Recommendations • Google Reviews • Pulled from drbrightsmiles.com</p>
          </div>
        </div>
      </section>
    </div>
  );
}
