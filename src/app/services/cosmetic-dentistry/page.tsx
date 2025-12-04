import Image from 'next/image';
import Link from 'next/link';
import { ArrowRight, CheckCircle2, Sparkles, Star, Heart, Shield, Clock, Smile } from 'lucide-react';

const cosmeticServices = [
  {
    title: 'Teeth Whitening',
    description: 'Brighten your smile safely and effectively with professional-grade whitening solutions. Our whitening treatments are designed to remove deep stains caused by coffee, tea, wine, aging, and everyday life—without causing sensitivity or damaging enamel.',
    listTitle: 'Perfect for:',
    points: ['Special events', 'Photo-ready smiles', 'Reversing long-term discoloration', 'A fast, dramatic confidence boost'],
    image: '/images/drbright-patient.jpg',
  },
  {
    title: 'Porcelain Veneers',
    description: 'Veneers are thin, custom-made porcelain shells that instantly refine your smile. They can change tooth shape, size, color, and alignment with stunning, natural results.',
    listTitle: 'Veneers can correct:',
    points: ['Chips', 'Gaps', 'Discoloration', 'Uneven or worn teeth', 'Minor misalignment', 'Irregular shapes'],
    note: 'Dr. Bright takes a meticulous approach to veneer design to ensure your results look beautifully natural—not artificial.',
    image: '/images/drbright-lobby.jpg',
  },
  {
    title: 'Invisalign® Clear Aligners',
    description: 'Straighten your teeth discreetly with Invisalign. Using digital scanning technology, we create a custom treatment plan that gradually moves your teeth into better alignment—without metal brackets or wires.',
    listTitle: 'Great for improving:',
    points: ['Crowding', 'Spacing', 'Bite alignment', 'Overlapping teeth', 'Aesthetic harmony'],
    image: '/images/drbright-invisalign.png',
    imageType: 'logo',
  },
  {
    title: 'Cosmetic Bonding',
    description: 'Cosmetic bonding uses tooth-colored composite material to repair chips, cracks, and small gaps. It\'s a fast, conservative, and cost-effective way to enhance your smile in a single appointment.',
    listTitle: 'Bonding is ideal for:',
    points: ['Minor aesthetic flaws', 'Fast fixes', 'Patients seeking a more affordable cosmetic option'],
    image: '/images/drbright-patient.jpg',
  },
  {
    title: 'Smile Makeovers',
    description: 'For patients looking for a dramatic transformation, we combine custom treatments—such as whitening, veneers, and Invisalign—to design a complete smile makeover.',
    listTitle: 'Each smile makeover includes:',
    points: ['A comprehensive evaluation', 'Digital planning and imaging', 'Personalized treatment sequencing', 'Aesthetic design based on facial features, symmetry, and your goals'],
    image: '/images/drbright-lobby.jpg',
  },
];

const transformationProcess = [
  {
    title: 'Smile Consultation',
    description: 'We discuss your goals, concerns, and vision for your ideal smile in a relaxed, no-pressure environment.',
  },
  {
    title: 'Digital Smile Design',
    description: 'Using advanced imaging, we create a preview of your potential results before any treatment begins.',
  },
  {
    title: 'Customized Treatment Plan',
    description: 'Dr. Bright develops a personalized plan that fits your timeline, budget, and aesthetic goals.',
  },
  {
    title: 'Artful Execution',
    description: 'Each procedure is performed with meticulous attention to detail for natural, beautiful results.',
  },
];

export default function CosmeticDentistry() {
  return (
    <div className="bg-[var(--background)] text-[var(--navy)]">
      {/* HERO */}
      <section className="relative isolate overflow-hidden">
        <div
          className="absolute inset-0 bg-cover bg-center"
          style={{ backgroundImage: "url('/images/drbright-patient.jpg')" }}
        />
        <div className="absolute inset-0 bg-[var(--navy)]/80" />
        <div className="relative mx-auto flex max-w-5xl flex-col gap-8 px-4 py-24 text-[#f4fbf2]">
          <h1 className="text-4xl font-semibold leading-tight text-white sm:text-5xl">
            Transform Your Smile With Natural, Beautiful Results
          </h1>
          <p className="text-lg text-[#eadfcf]">
            At Cherry Creek South Dental, we believe cosmetic dentistry should enhance your smile in a way that looks natural, healthy, and uniquely you. Whether you&apos;re looking to brighten your teeth, refine your smile, or completely transform it, Dr. Bright combines advanced technology with a conservative, artistic approach to create results you&apos;ll love.
          </p>
          <div className="flex flex-col gap-4 sm:flex-row">
            <a
              href="tel:(303) 377-7744"
              className="inline-flex items-center justify-center rounded-full bg-[var(--gold)] px-8 py-3 font-semibold text-[var(--navy)] transition hover:bg-white"
            >
              Schedule Your Appointment
              <ArrowRight className="ml-2 h-5 w-5" />
            </a>
          </div>
        </div>
      </section>

      {/* WHY CHOOSE COSMETIC DENTISTRY */}
      <section className="relative py-20 bg-[var(--navy)] text-white overflow-hidden">
        <div className="mx-auto max-w-6xl px-4">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            {/* Image */}
            <div className="relative min-h-[400px] overflow-hidden rounded-3xl shadow-xl order-2 lg:order-1">
              <Image
                src="/images/drbright-patient.jpg"
                alt="Cosmetic dentistry consultation with Dr. Bright"
                fill
                className="object-cover"
                sizes="(min-width: 1024px) 520px, 100vw"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-[var(--navy)]/60 via-transparent to-transparent" />
            </div>
            
            {/* Content */}
            <div className="space-y-6 lg:pl-8 order-1 lg:order-2">
              <span className="inline-block px-4 py-1.5 rounded-full bg-white/10 text-[var(--gold)] text-sm font-semibold tracking-wide">
                Why Choose Us
              </span>
              <h2 className="text-3xl sm:text-4xl font-semibold leading-tight">
                Why Choose Cosmetic Dentistry With Dr. Bright?
              </h2>
              
              {/* Benefits list with icons */}
              <ul className="space-y-4">
                <li className="flex items-start gap-3">
                  <Star className="h-5 w-5 text-[var(--gold)] mt-0.5 flex-shrink-0" />
                  <span className="text-[#c5e2c7]">Natural, high-quality aesthetic results</span>
                </li>
                <li className="flex items-start gap-3">
                  <Heart className="h-5 w-5 text-[var(--gold)] mt-0.5 flex-shrink-0" />
                  <span className="text-[#c5e2c7]">Customized treatment plans based on your goals, timeline, and budget</span>
                </li>
                <li className="flex items-start gap-3">
                  <Sparkles className="h-5 w-5 text-[var(--gold)] mt-0.5 flex-shrink-0" />
                  <span className="text-[#c5e2c7]">State-of-the-art technology for precision and comfort</span>
                </li>
                <li className="flex items-start gap-3">
                  <Shield className="h-5 w-5 text-[var(--gold)] mt-0.5 flex-shrink-0" />
                  <span className="text-[#c5e2c7]">Conservative approach—no unnecessary work, ever</span>
                </li>
                <li className="flex items-start gap-3">
                  <CheckCircle2 className="h-5 w-5 text-[var(--gold)] mt-0.5 flex-shrink-0" />
                  <span className="text-[#c5e2c7]">Collaborative planning so you&apos;re in control every step of the way</span>
                </li>
                <li className="flex items-start gap-3">
                  <Clock className="h-5 w-5 text-[var(--gold)] mt-0.5 flex-shrink-0" />
                  <span className="text-[#c5e2c7]">Relaxed, welcoming environment with longer appointments and personal attention</span>
                </li>
              </ul>

              <p className="text-lg text-[#eadfcf] italic border-l-4 border-[var(--gold)] pl-4">
                Your smile is one of the first things people notice. We&apos;re here to make sure it&apos;s a smile that reflects confidence, health, and happiness.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* COSMETIC SERVICES */}
      <section className="bg-[var(--background)] py-20">
        <div className="mx-auto max-w-6xl px-4">
          <div className="mb-16 text-center">
            <p className="text-xs uppercase tracking-[0.3em] text-[var(--gold)]">Our Cosmetic Services</p>
            <h2 className="mt-3 text-3xl sm:text-4xl font-semibold text-[var(--navy)]">Our Cosmetic Dentistry Services</h2>
          </div>
          
          <div className="space-y-20">
            {cosmeticServices.map((service, index) => (
              <div 
                key={service.title} 
                className={`grid lg:grid-cols-2 gap-12 items-center ${index % 2 === 1 ? 'lg:flex-row-reverse' : ''}`}
              >
                {/* Image */}
                <div className={`relative min-h-[350px] overflow-hidden rounded-3xl shadow-xl ${index % 2 === 1 ? 'lg:order-2' : 'lg:order-1'}`}>
                  <Image
                    src={service.image}
                    alt={service.title}
                    fill
                    className={service.imageType === 'logo' ? 'object-contain bg-white p-12' : 'object-cover'}
                    sizes="(min-width: 1024px) 520px, 100vw"
                  />
                  {service.imageType !== 'logo' && (
                    <div className="absolute inset-0 bg-gradient-to-t from-[var(--navy)]/40 via-transparent to-transparent" />
                  )}
                </div>
                
                {/* Content */}
                <div className={`space-y-5 ${index % 2 === 1 ? 'lg:order-1' : 'lg:order-2'}`}>
                  <div className="flex items-center gap-3">
                    <Sparkles className="h-7 w-7 text-[var(--gold)]" />
                    <h3 className="text-2xl sm:text-3xl font-semibold text-[var(--navy)]">{service.title}</h3>
                  </div>
                  <p className="text-lg text-[var(--stone)] leading-relaxed">{service.description}</p>
                  
                  <div className="pt-2">
                    <p className="font-semibold text-[var(--navy)] mb-3">{service.listTitle}</p>
                    <ul className="grid grid-cols-2 gap-2 text-sm text-[var(--stone)]">
                      {service.points.map((point) => (
                        <li key={point} className="flex items-center gap-2">
                          <CheckCircle2 className="h-4 w-4 text-[var(--gold)] flex-shrink-0" />
                          {point}
                        </li>
                      ))}
                    </ul>
                  </div>
                  
                  {service.note && (
                    <p className="text-[var(--stone)] italic border-l-4 border-[var(--gold)] pl-4 mt-4">
                      {service.note}
                    </p>
                  )}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* TRANSFORMATION PROCESS */}
      <section className="py-20">
        <div className="mx-auto grid max-w-6xl gap-12 px-4 lg:grid-cols-2 lg:items-center">
          <div className="relative min-h-[360px] overflow-hidden rounded-3xl shadow-xl">
            <Image
              src="/images/drbright-lobby.jpg"
              alt="Modern cosmetic dentistry at Cherry Creek South Dental"
              fill
              className="object-cover"
              sizes="(min-width: 1024px) 520px, 100vw"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-[var(--navy)]/85 via-transparent to-transparent" />
            <div className="absolute bottom-8 left-8 right-8 space-y-2 text-white">
              <p className="text-sm uppercase tracking-[0.3em] text-[#f1dcb8]">Your Smile Journey</p>
              <p className="text-2xl font-semibold">Where artistry meets precision</p>
            </div>
          </div>
          <div className="space-y-6">
            <p className="text-xs uppercase tracking-[0.3em] text-[var(--gold)]">The Process</p>
            <h2 className="text-3xl font-semibold text-[var(--navy)]">Your path to a stunning smile</h2>
            <div className="space-y-4">
              {transformationProcess.map((step, index) => (
                <div key={step.title} className="rounded-2xl border border-[#eadfce] bg-white p-5 shadow-sm">
                  <div className="flex items-center gap-3">
                    <span className="flex h-8 w-8 items-center justify-center rounded-full bg-[var(--gold)] text-sm font-bold text-[var(--navy)]">
                      {index + 1}
                    </span>
                    <p className="font-semibold text-[var(--navy)]">{step.title}</p>
                  </div>
                  <p className="mt-2 pl-11 text-[var(--stone)]">{step.description}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* FAQ SECTION */}
      <section className="bg-[var(--mint)] py-20">
        <div className="mx-auto max-w-4xl px-4">
          <div className="text-center mb-12">
            <p className="text-xs uppercase tracking-[0.3em] text-[var(--gold)]">Common Questions</p>
            <h2 className="mt-3 text-3xl sm:text-4xl font-semibold text-[var(--navy)]">Frequently Asked Questions</h2>
          </div>
          
          <div className="space-y-4">
            {/* FAQ 1 */}
            <details className="group rounded-2xl border border-[#eadfce] bg-white shadow-sm">
              <summary className="flex cursor-pointer items-center justify-between p-6 font-semibold text-[var(--navy)] text-lg">
                Does cosmetic dentistry hurt?
                <span className="ml-4 flex h-8 w-8 items-center justify-center rounded-full bg-[var(--gold)]/10 text-[var(--gold)] transition group-open:rotate-45">
                  +
                </span>
              </summary>
              <div className="px-6 pb-6 text-[var(--stone)] leading-relaxed">
                Most cosmetic treatments are painless. Options like whitening, bonding, and Invisalign are minimally invasive. Veneer treatment is gentle and designed for long-term comfort.
              </div>
            </details>
            
            {/* FAQ 2 */}
            <details className="group rounded-2xl border border-[#eadfce] bg-white shadow-sm">
              <summary className="flex cursor-pointer items-center justify-between p-6 font-semibold text-[var(--navy)] text-lg">
                How long do cosmetic results last?
                <span className="ml-4 flex h-8 w-8 items-center justify-center rounded-full bg-[var(--gold)]/10 text-[var(--gold)] transition group-open:rotate-45">
                  +
                </span>
              </summary>
              <div className="px-6 pb-6 text-[var(--stone)] leading-relaxed">
                <p className="mb-3">With proper care:</p>
                <ul className="space-y-2">
                  <li className="flex items-center gap-2">
                    <CheckCircle2 className="h-4 w-4 text-[var(--gold)]" />
                    <span><strong>Whitening:</strong> 1–3 years</span>
                  </li>
                  <li className="flex items-center gap-2">
                    <CheckCircle2 className="h-4 w-4 text-[var(--gold)]" />
                    <span><strong>Bonding:</strong> 3–7 years</span>
                  </li>
                  <li className="flex items-center gap-2">
                    <CheckCircle2 className="h-4 w-4 text-[var(--gold)]" />
                    <span><strong>Veneers:</strong> 10–15+ years</span>
                  </li>
                  <li className="flex items-center gap-2">
                    <CheckCircle2 className="h-4 w-4 text-[var(--gold)]" />
                    <span><strong>Invisalign results:</strong> lifelong with retainers</span>
                  </li>
                </ul>
              </div>
            </details>
            
            {/* FAQ 3 */}
            <details className="group rounded-2xl border border-[#eadfce] bg-white shadow-sm">
              <summary className="flex cursor-pointer items-center justify-between p-6 font-semibold text-[var(--navy)] text-lg">
                Is cosmetic dentistry covered by insurance?
                <span className="ml-4 flex h-8 w-8 items-center justify-center rounded-full bg-[var(--gold)]/10 text-[var(--gold)] transition group-open:rotate-45">
                  +
                </span>
              </summary>
              <div className="px-6 pb-6 text-[var(--stone)] leading-relaxed">
                Most cosmetic treatments are considered elective. However, some procedures—like crowns or certain aligner treatments—may qualify for partial coverage depending on your provider.
              </div>
            </details>
            
            {/* FAQ 4 */}
            <details className="group rounded-2xl border border-[#eadfce] bg-white shadow-sm">
              <summary className="flex cursor-pointer items-center justify-between p-6 font-semibold text-[var(--navy)] text-lg">
                Am I a candidate for cosmetic dentistry?
                <span className="ml-4 flex h-8 w-8 items-center justify-center rounded-full bg-[var(--gold)]/10 text-[var(--gold)] transition group-open:rotate-45">
                  +
                </span>
              </summary>
              <div className="px-6 pb-6 text-[var(--stone)] leading-relaxed">
                If you are in good oral health and want to enhance your smile, you are likely a great candidate. We&apos;ll assess at your consultation.
              </div>
            </details>
          </div>
        </div>
      </section>

      {/* OTHER TREATMENTS TO CONSIDER */}
      <section className="bg-[var(--background)] py-20">
        <div className="mx-auto max-w-6xl px-4">
          <div className="text-center mb-12">
            <p className="text-xs uppercase tracking-[0.3em] text-[var(--gold)]">Explore More Options</p>
            <h2 className="mt-3 text-3xl sm:text-4xl font-semibold text-[var(--navy)]">Other Treatments to Consider</h2>
            <p className="mt-4 text-lg text-[var(--stone)] max-w-2xl mx-auto">
              Patients interested in cosmetic dentistry also commonly explore:
            </p>
          </div>
          
          <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
            {/* Dental Implants */}
            <Link href="/services/restorative-dentistry" className="group rounded-2xl border border-[#eadfce] bg-white p-6 shadow-sm hover:-translate-y-1 hover:shadow-lg transition-all">
              <div className="flex items-center gap-3 mb-3">
                <div className="flex h-10 w-10 items-center justify-center rounded-full bg-[var(--gold)]/10">
                  <Sparkles className="h-5 w-5 text-[var(--gold)]" />
                </div>
                <h3 className="text-lg font-semibold text-[var(--navy)] group-hover:text-[var(--gold)] transition-colors">Dental Implants</h3>
              </div>
              <p className="text-sm text-[var(--stone)] leading-relaxed">
                A long-lasting, natural-looking solution for missing teeth. Dental implants replace the tooth root and support a custom crown to restore function, stability, and confidence in your smile.
              </p>
            </Link>
            
            {/* Dental Crowns & Restorations */}
            <Link href="/services/restorative-dentistry" className="group rounded-2xl border border-[#eadfce] bg-white p-6 shadow-sm hover:-translate-y-1 hover:shadow-lg transition-all">
              <div className="flex items-center gap-3 mb-3">
                <div className="flex h-10 w-10 items-center justify-center rounded-full bg-[var(--gold)]/10">
                  <Shield className="h-5 w-5 text-[var(--gold)]" />
                </div>
                <h3 className="text-lg font-semibold text-[var(--navy)] group-hover:text-[var(--gold)] transition-colors">Dental Crowns & Restorations</h3>
              </div>
              <p className="text-sm text-[var(--stone)] leading-relaxed">
                Crowns protect and strengthen damaged or weakened teeth. They restore full function while blending seamlessly with your natural smile using durable, tooth-colored materials.
              </p>
            </Link>
            
            {/* Invisalign */}
            <Link href="/services/invisalign" className="group rounded-2xl border border-[#eadfce] bg-white p-6 shadow-sm hover:-translate-y-1 hover:shadow-lg transition-all">
              <div className="flex items-center gap-3 mb-3">
                <div className="flex h-10 w-10 items-center justify-center rounded-full bg-[var(--gold)]/10">
                  <Smile className="h-5 w-5 text-[var(--gold)]" />
                </div>
                <h3 className="text-lg font-semibold text-[var(--navy)] group-hover:text-[var(--gold)] transition-colors">Invisalign® Clear Aligners</h3>
              </div>
              <p className="text-sm text-[var(--stone)] leading-relaxed">
                A discreet orthodontic treatment that straightens teeth using clear, removable trays. Ideal for correcting crowding, spacing, and bite issues without metal brackets.
              </p>
            </Link>
            
            {/* Botox */}
            <Link href="/services" className="group rounded-2xl border border-[#eadfce] bg-white p-6 shadow-sm hover:-translate-y-1 hover:shadow-lg transition-all">
              <div className="flex items-center gap-3 mb-3">
                <div className="flex h-10 w-10 items-center justify-center rounded-full bg-[var(--gold)]/10">
                  <Star className="h-5 w-5 text-[var(--gold)]" />
                </div>
                <h3 className="text-lg font-semibold text-[var(--navy)] group-hover:text-[var(--gold)] transition-colors">Botox for Aesthetics & TMJ Relief</h3>
              </div>
              <p className="text-sm text-[var(--stone)] leading-relaxed">
                Botox can smooth fine lines around the mouth and reduce jaw tension caused by clenching or TMJ disorders. A minimally invasive option that enhances both comfort and facial aesthetics.
              </p>
            </Link>
            
            {/* Professional Cleanings */}
            <Link href="/services/general-dentistry" className="group rounded-2xl border border-[#eadfce] bg-white p-6 shadow-sm hover:-translate-y-1 hover:shadow-lg transition-all">
              <div className="flex items-center gap-3 mb-3">
                <div className="flex h-10 w-10 items-center justify-center rounded-full bg-[var(--gold)]/10">
                  <Heart className="h-5 w-5 text-[var(--gold)]" />
                </div>
                <h3 className="text-lg font-semibold text-[var(--navy)] group-hover:text-[var(--gold)] transition-colors">Professional Dental Cleanings</h3>
              </div>
              <p className="text-sm text-[var(--stone)] leading-relaxed">
                Regular cleanings are essential for a healthy foundation before cosmetic work. Our longer appointments ensure thorough plaque removal, gum health evaluation, and preventive care.
              </p>
            </Link>
            
            {/* Teeth Whitening */}
            <Link href="/services/cosmetic-dentistry" className="group rounded-2xl border border-[#eadfce] bg-white p-6 shadow-sm hover:-translate-y-1 hover:shadow-lg transition-all">
              <div className="flex items-center gap-3 mb-3">
                <div className="flex h-10 w-10 items-center justify-center rounded-full bg-[var(--gold)]/10">
                  <Sparkles className="h-5 w-5 text-[var(--gold)]" />
                </div>
                <h3 className="text-lg font-semibold text-[var(--navy)] group-hover:text-[var(--gold)] transition-colors">Teeth Whitening</h3>
              </div>
              <p className="text-sm text-[var(--stone)] leading-relaxed">
                Professional whitening brightens your smile safely and effectively, lifting deep stains and discoloration for a noticeably whiter, more radiant smile.
              </p>
            </Link>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="relative py-24 gradient-navy overflow-hidden">
        <div className="relative mx-auto max-w-4xl px-4 text-center text-white">
          <Sparkles className="h-12 w-12 mx-auto text-[var(--gold)] mb-6" />
          <h2 className="text-3xl sm:text-4xl font-semibold mb-6">
            Ready to Transform Your Smile?
          </h2>
          <p className="text-lg text-[#c5e2c7] max-w-2xl mx-auto mb-10">
            Whether you&apos;re looking for subtle refinements or a complete transformation, Cherry Creek South Dental is here to help you achieve a smile you love.
          </p>
          <a
            href="tel:(303) 377-7744"
            className="inline-flex items-center justify-center rounded-full bg-[var(--gold)] px-8 py-4 text-base font-semibold text-[var(--navy)] transition hover:bg-white hover:scale-105"
          >
            Schedule Your Appointment
            <ArrowRight className="ml-2 h-5 w-5" />
          </a>
        </div>
      </section>
    </div>
  );
}

