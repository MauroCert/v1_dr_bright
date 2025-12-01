import Image from 'next/image';
import Link from 'next/link';
import {
  ArrowRight,
  CheckCircle2,
  Leaf,
  Sparkles,
  Star,
  Heart,
  Shield,
} from 'lucide-react';

export default function Home() {
  const howWeHelp = [
    {
      title: 'I want to keep my teeth forever',
      description:
        'Dental health moves through many stages. We value preventive and functional care for all ages.',
      icon: '🦷',
      href: '/services#preventive',
    },
    {
      title: 'I want to improve my smile',
      description:
        'Dr. Bright offers a variety of cosmetic dentistry options to customize your smile and confidence.',
      icon: '✨',
      href: '/services#cosmetic',
    },
    {
      title: 'I need a tooth replaced',
      description:
        'We offer single or multiple teeth replacements to fit your functional needs and lifestyle.',
      icon: '🪥',
      href: '/services#restorative',
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

  const values = [
    {
      icon: Heart,
      title: 'Family-Owned',
      description: 'Patients are treated like family with personalized attention.',
    },
    {
      icon: Shield,
      title: 'Conservative Care',
      description: 'We plan treatment together, not for you.',
    },
    {
      icon: Sparkles,
      title: 'Modern Tech',
      description: 'AI x-rays, CBCT, and digital scanning for clarity.',
    },
  ];

  return (
    <div className="bg-[var(--background)] text-[var(--foreground)] overflow-hidden">
      {/* HERO - Minimal & Clean */}
      <section className="relative min-h-[85vh] flex items-center justify-center overflow-hidden">
        {/* Background Image */}
        <div
          className="absolute inset-0 bg-cover bg-center"
          style={{ backgroundImage: "url('/hero.avif')" }}
        />
        <div className="absolute inset-0 bg-gradient-to-b from-[var(--navy)]/90 via-[var(--navy)]/85 to-[var(--denim)]/90" />
        
        {/* Decorative geometric elements */}
        <div className="geo-circle absolute -top-20 -right-20 w-96 h-96 bg-[var(--gold)]/10 blur-3xl" />
        <div className="geo-circle absolute -bottom-32 -left-32 w-[500px] h-[500px] bg-[var(--denim)]/20 blur-3xl" />
        <div className="geo-blob absolute top-1/4 right-10 w-32 h-32 bg-[var(--gold)]/5 blur-2xl" />
        
        {/* Content */}
        <div className="relative z-10 mx-auto max-w-4xl px-4 text-center">
          <Image
            src="/images/drbright-logo.png"
            alt="Cherry Creek South Dental"
            width={180}
            height={180}
            className="mx-auto h-28 w-auto mb-8 drop-shadow-2xl"
            priority
          />
          <h1 className="text-4xl sm:text-5xl lg:text-6xl font-semibold text-white leading-tight tracking-tight">
            Cherry Creek South Dental
          </h1>
          <p className="mt-6 text-xl sm:text-2xl text-[#c5e2c7] font-light max-w-2xl mx-auto">
            Inspired by warmth, perfected for Denver
          </p>
          <div className="mt-10 flex flex-col sm:flex-row gap-4 justify-center">
            <a
              href="tel:(303) 377-7744"
              className="inline-flex items-center justify-center rounded-full bg-[var(--gold)] px-8 py-4 text-base font-semibold text-[var(--navy)] transition hover:bg-white hover:scale-105"
            >
              Request an Appointment
              <ArrowRight className="ml-2 h-5 w-5" />
            </a>
            <a
              href="sms:(720) 864-1333"
              className="inline-flex items-center justify-center rounded-full border-2 border-white/40 px-8 py-4 text-base font-semibold text-white transition hover:bg-white/10 hover:border-white/60"
            >
              Text Us
            </a>
          </div>
        </div>

        {/* Bottom wave decoration */}
        <div className="absolute bottom-0 left-0 right-0">
          <svg viewBox="0 0 1440 120" fill="none" xmlns="http://www.w3.org/2000/svg" className="w-full">
            <path d="M0 120L60 110C120 100 240 80 360 70C480 60 600 60 720 65C840 70 960 80 1080 85C1200 90 1320 90 1380 90L1440 90V120H1380C1320 120 1200 120 1080 120C960 120 840 120 720 120C600 120 480 120 360 120C240 120 120 120 60 120H0Z" fill="var(--mint)"/>
          </svg>
        </div>
      </section>

      {/* HOW CAN WE HELP - Clean cards without boxes */}
      <section className="relative py-24 gradient-mint">
        {/* Decorative elements */}
        <div className="geo-circle absolute top-10 left-10 w-20 h-20 border-2 border-[var(--gold)]/20 rounded-full" />
        <div className="geo-circle absolute bottom-20 right-20 w-32 h-32 bg-[var(--gold)]/10 rounded-full blur-xl" />
        
        <div className="mx-auto max-w-6xl px-4">
          <div className="text-center mb-16">
            <span className="inline-block px-4 py-1.5 rounded-full bg-[var(--gold)]/10 text-[var(--gold)] text-sm font-semibold tracking-wide mb-4">
              How can we help?
            </span>
            <h2 className="text-3xl sm:text-4xl font-semibold text-[var(--navy)]">
              Comprehensive care for every smile goal
            </h2>
          </div>
          
          <div className="grid gap-8 md:grid-cols-3">
            {howWeHelp.map((item, index) => (
              <div
                key={item.title}
                className="group relative"
              >
                {/* Floating accent */}
                <div className="absolute -top-4 -left-4 w-16 h-16 rounded-2xl bg-[var(--gold)]/10 rotate-12 group-hover:rotate-6 transition-transform duration-300" />
                
                <div className="relative bg-white/60 backdrop-blur-sm rounded-[2rem] p-8 hover:-translate-y-2 transition-all duration-300">
                  <span className="text-5xl mb-6 block">{item.icon}</span>
                  <h3 className="text-xl font-semibold text-[var(--navy)] mb-3">
                    {item.title}
                  </h3>
                  <p className="text-[var(--stone)] leading-relaxed mb-6">
                    {item.description}
                  </p>
                  <Link
                    href={item.href}
                    className="inline-flex items-center font-semibold text-[var(--gold)] group-hover:text-[var(--denim)] transition-colors"
                  >
                    Learn more
                    <ArrowRight className="ml-2 h-4 w-4 group-hover:translate-x-1 transition-transform" />
                  </Link>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ABOUT PRACTICE - Organic layout */}
      <section className="relative py-24 gradient-navy text-white overflow-hidden">
        {/* Decorative shapes */}
        <div className="geo-blob absolute -top-20 -right-20 w-80 h-80 bg-[var(--gold)]/10 blur-3xl" />
        <div className="geo-circle absolute bottom-0 left-1/4 w-64 h-64 border border-white/5 rounded-full" />
        
        <div className="mx-auto max-w-6xl px-4">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            {/* Image with organic shape */}
            <div className="relative">
              <div className="absolute inset-0 bg-[var(--gold)]/20 rounded-[3rem] rotate-3 scale-105" />
              <div className="relative overflow-hidden rounded-[3rem]">
                <Image
                  src="/images/drbright-lobby.jpg"
                  alt="Light-filled Cherry Creek South Dental atrium"
                  width={600}
                  height={400}
                  className="w-full h-[400px] object-cover"
                />
              </div>
              
              {/* Floating mission card */}
              <div className="absolute -bottom-8 -right-8 lg:-right-12 bg-white rounded-3xl p-6 shadow-2xl max-w-xs">
                <p className="text-xs uppercase tracking-widest text-[var(--gold)] font-semibold mb-2">
                  Our Mission
                </p>
                <p className="text-[var(--navy)] font-medium text-sm leading-relaxed">
                  "Best quality oral and overall healthcare through honesty, education, and a joyful experience."
                </p>
              </div>
            </div>
            
            {/* Content */}
            <div className="space-y-6 lg:pl-8">
              <span className="inline-block px-4 py-1.5 rounded-full bg-white/10 text-[var(--gold)] text-sm font-semibold tracking-wide">
                About the practice
              </span>
              <h2 className="text-3xl sm:text-4xl font-semibold leading-tight">
                Family-owned, patient-first, technology-forward
              </h2>
              <p className="text-lg text-[#c5e2c7] leading-relaxed">
                Longer hygiene visits, conservative treatment planning, and tools like AI-assisted x-rays, CBCT scans, and same-day scanners mean you always understand your options.
              </p>
              
              {/* Values - clean inline */}
              <div className="grid grid-cols-3 gap-4 pt-6">
                {values.map((value) => (
                  <div key={value.title} className="text-center">
                    <div className="w-12 h-12 mx-auto rounded-2xl bg-white/10 flex items-center justify-center mb-3">
                      <value.icon className="h-6 w-6 text-[var(--gold)]" />
                    </div>
                    <p className="text-sm font-semibold text-white">{value.title}</p>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ABOUT DR. BRIGHT - Asymmetric layout */}
      <section className="relative py-24 bg-white overflow-hidden">
        {/* Decorative */}
        <div className="geo-circle absolute top-20 right-0 w-96 h-96 bg-[var(--mint)] rounded-full -translate-x-1/2 opacity-60" />
        
        <div className="mx-auto max-w-6xl px-4">
          <div className="grid lg:grid-cols-5 gap-12 items-center">
            {/* Content - takes 3 cols */}
            <div className="lg:col-span-3 space-y-6 order-2 lg:order-1">
              <span className="inline-block px-4 py-1.5 rounded-full bg-[var(--gold)]/10 text-[var(--gold)] text-sm font-semibold tracking-wide">
                Meet Dr. Bright
              </span>
              <h2 className="text-3xl sm:text-4xl font-semibold text-[var(--navy)]">
                Comprehensive, conservative dentistry with a calm touch
              </h2>
              <p className="text-lg text-[var(--stone)] leading-relaxed">
                Dr. Bright combines advanced technology with a collaborative mindset.
                He cares for families who value detailed explanations, patient-first philosophies, and a relaxing environment.
              </p>
              <ul className="space-y-4 text-[var(--stone)]">
                <li className="flex items-start gap-3">
                  <CheckCircle2 className="h-5 w-5 text-[var(--gold)] mt-0.5 flex-shrink-0" />
                  <span>Member of leading continuing-education study clubs</span>
                </li>
                <li className="flex items-start gap-3">
                  <CheckCircle2 className="h-5 w-5 text-[var(--gold)] mt-0.5 flex-shrink-0" />
                  <span>Conservative treatment planning done with patients, not for them</span>
                </li>
                <li className="flex items-start gap-3">
                  <CheckCircle2 className="h-5 w-5 text-[var(--gold)] mt-0.5 flex-shrink-0" />
                  <span>Facial aesthetics, Botox, Invisalign®, and full-mouth rehabilitation</span>
                </li>
              </ul>
              <Link
                href="/about/dr-bright"
                className="inline-flex items-center rounded-full bg-[var(--navy)] px-6 py-3 text-white font-semibold hover:bg-[var(--denim)] transition-colors"
              >
                Learn more about Dr. Bright
                <ArrowRight className="ml-2 h-4 w-4" />
              </Link>
            </div>
            
            {/* Image - takes 2 cols */}
            <div className="lg:col-span-2 order-1 lg:order-2 relative">
              <div className="absolute inset-4 bg-[var(--gold)]/20 rounded-[2.5rem] -rotate-6" />
              <div className="relative overflow-hidden rounded-[2.5rem] shadow-xl">
                <Image
                  src="/images/drbright-patient.jpg"
                  alt="Dr. Bright consulting with a patient"
                  width={500}
                  height={600}
                  className="w-full h-[500px] object-cover"
                />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* TOP SERVICES - Masonry-style */}
      <section className="relative py-24 bg-[var(--mint)] overflow-hidden">
        {/* Decorative */}
        <div className="geo-blob absolute -top-32 left-0 w-64 h-64 bg-[var(--gold)]/10 blur-3xl" />
        <div className="geo-circle absolute bottom-10 right-10 w-40 h-40 border-2 border-[var(--navy)]/10 rounded-full" />
        
        <div className="mx-auto max-w-6xl px-4">
          <div className="text-center mb-16">
            <span className="inline-block px-4 py-1.5 rounded-full bg-[var(--gold)]/10 text-[var(--gold)] text-sm font-semibold tracking-wide mb-4">
              Services
            </span>
            <h2 className="text-3xl sm:text-4xl font-semibold text-[var(--navy)]">
              Our top-requested treatments
            </h2>
            <p className="mt-4 text-[var(--stone)] max-w-2xl mx-auto">
              Explore the rest of our comprehensive offerings on the Services page.
            </p>
          </div>
          
          <div className="grid md:grid-cols-2 gap-8">
            {services.map((service, index) => (
              <div
                key={service.title}
                className={`group relative ${index % 2 === 1 ? 'md:translate-y-8' : ''}`}
              >
                <div className="bg-white rounded-[2rem] overflow-hidden shadow-sm hover:shadow-xl transition-all duration-300 hover:-translate-y-1">
                  <div className="relative h-56 overflow-hidden">
                    <Image
                      src={service.image}
                      alt={service.title}
                      fill
                      className={
                        service.imageType === 'logo'
                          ? 'object-contain bg-gradient-to-br from-[var(--mint)] to-white p-10'
                          : 'object-cover group-hover:scale-105 transition-transform duration-500'
                      }
                      sizes="(min-width: 768px) 500px, 100vw"
                    />
                    <span className="absolute left-4 top-4 rounded-full bg-[var(--navy)] px-4 py-1.5 text-xs font-semibold uppercase tracking-wide text-white">
                      {service.badge}
                    </span>
                  </div>
                  <div className="p-8">
                    <h3 className="text-xl font-semibold text-[var(--navy)] mb-3">
                      {service.title}
                    </h3>
                    <p className="text-[var(--stone)] leading-relaxed mb-4">
                      {service.description}
                    </p>
                    <Link
                      href={service.href}
                      className="inline-flex items-center font-semibold text-[var(--gold)] hover:text-[var(--denim)] transition-colors"
                    >
                      Learn more
                      <ArrowRight className="ml-2 h-4 w-4 group-hover:translate-x-1 transition-transform" />
                    </Link>
                  </div>
                </div>
              </div>
            ))}
          </div>
          
          <div className="text-center mt-12">
            <Link
              href="/services"
              className="inline-flex items-center rounded-full border-2 border-[var(--navy)] px-8 py-3 text-[var(--navy)] font-semibold hover:bg-[var(--navy)] hover:text-white transition-colors"
            >
              View all services
              <ArrowRight className="ml-2 h-4 w-4" />
            </Link>
          </div>
        </div>
      </section>

      {/* REVIEWS - Flowing testimonials */}
      <section className="relative py-24 bg-white overflow-hidden">
        {/* Decorative elements */}
        <div className="geo-circle absolute -top-20 left-1/4 w-64 h-64 bg-[var(--gold)]/5 rounded-full blur-2xl" />
        <div className="geo-circle absolute bottom-0 right-0 w-96 h-96 bg-[var(--mint)]/50 rounded-full -translate-y-1/2" />
        
        <div className="mx-auto max-w-6xl px-4">
          <div className="text-center mb-16">
            <span className="inline-block px-4 py-1.5 rounded-full bg-[var(--gold)]/10 text-[var(--gold)] text-sm font-semibold tracking-wide mb-4">
              Patient Stories
            </span>
            <h2 className="text-3xl sm:text-4xl font-semibold text-[var(--navy)]">
              Trusted by Denver families
            </h2>
          </div>
          
          <div className="grid md:grid-cols-3 gap-8">
            {testimonials.map((t, index) => (
              <figure
                key={t.name}
                className={`relative ${index === 1 ? 'md:-translate-y-4' : ''}`}
              >
                {/* Accent shape */}
                <div className="absolute -top-3 -left-3 w-12 h-12 bg-[var(--gold)]/20 rounded-2xl rotate-12" />
                
                <div className="relative bg-gradient-to-br from-[var(--mint)] to-[var(--background)] rounded-[2rem] p-8">
                  <div className="flex space-x-1 text-[var(--gold)] mb-4">
                    {[...Array(5)].map((_, idx) => (
                      <Star key={idx} className="h-5 w-5 fill-current" />
                    ))}
                  </div>
                  <blockquote className="text-[var(--stone)] leading-relaxed mb-6">
                    &ldquo;{t.quote}&rdquo;
                  </blockquote>
                  <figcaption className="font-semibold text-[var(--navy)]">
                    — {t.name}
                  </figcaption>
                </div>
              </figure>
            ))}
          </div>
          
          <div className="mt-16 flex flex-col items-center gap-6 text-center">
            <div className="flex items-center gap-8">
              <Image
                src="/images/drbright-covid-badge.png"
                alt="Safety badge"
                width={100}
                height={70}
                className="h-16 w-auto opacity-70"
              />
              <Image
                src="/images/drbright-invisalign.png"
                alt="Invisalign Provider"
                width={120}
                height={45}
                className="h-10 w-auto opacity-70"
              />
            </div>
            <p className="text-sm text-[var(--stone)]">
              Facebook Recommendations • Google Reviews
            </p>
          </div>
        </div>
      </section>

      {/* CTA - Gradient finale */}
      <section className="relative py-24 gradient-navy overflow-hidden">
        {/* Decorative */}
        <div className="geo-blob absolute top-0 right-0 w-[500px] h-[500px] bg-[var(--gold)]/10 blur-3xl" />
        <div className="geo-circle absolute -bottom-20 -left-20 w-80 h-80 border border-white/10 rounded-full" />
        
        <div className="relative mx-auto max-w-4xl px-4 text-center text-white">
          <Leaf className="h-12 w-12 mx-auto text-[var(--gold)] mb-6" />
          <h2 className="text-3xl sm:text-4xl font-semibold mb-6">
            Ready for a calmer dental experience?
          </h2>
          <p className="text-lg text-[#c5e2c7] max-w-2xl mx-auto mb-10">
            Join our family of patients who experience dentistry the way it should be — 
            collaborative, comfortable, and comprehensive.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a
              href="tel:(303) 377-7744"
              className="inline-flex items-center justify-center rounded-full bg-[var(--gold)] px-8 py-4 text-base font-semibold text-[var(--navy)] transition hover:bg-white hover:scale-105"
            >
              Call (303) 377-7744
            </a>
            <a
              href="sms:(720) 864-1333"
              className="inline-flex items-center justify-center rounded-full border-2 border-white/40 px-8 py-4 text-base font-semibold text-white transition hover:bg-white/10 hover:border-white/60"
            >
              Text (720) 864-1333
            </a>
          </div>
        </div>
      </section>
    </div>
  );
}
