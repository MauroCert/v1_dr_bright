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
  const whyChooseUs = [
    {
      title: 'Office Environment',
      description:
        'Our office features a calming atrium filled with natural light and plants, helping every visit feel more like a retreat than a clinical appointment.',
      icon: '🌿',
    },
    {
      title: 'State-of-the-Art Technology',
      description:
        'We use state-of-the-art dental technology—including AI-integrated X-rays, CBCT imaging for TMJ and bone scans, and top-of-the-line digital scanners.',
      icon: '🔬',
    },
    {
      title: 'Focus on Care Quality',
      description:
        'Our technology ensures accuracy, comfort, and exceptional quality of care.',
      icon: '✨',
    },
  ];

  const services = [
    {
      title: 'Dental Exams & Cleanings',
      description:
        'Extended appointment times, deeper cleanings, and AI-enhanced diagnostics ensure better preventive care and long-term oral health.',
      href: '/services#preventive',
      badge: 'Preventive',
      image: '/images/drbright-lobby.jpg',
      imageType: 'photo',
    },
    {
      title: 'Cosmetic Dentistry',
      description:
        'From whitening and veneers to full smile makeovers, we create natural, confidence-boosting results tailored to your goals.',
      href: '/services/cosmetic-dentistry',
      badge: 'Cosmetic',
      image: '/images/drbright-patient.jpg',
      imageType: 'photo',
    },
    {
      title: 'Invisalign® Clear Aligners',
      description:
        'Straighten your teeth discreetly and comfortably using advanced digital scanning and personalized aligner planning.',
      href: '/services#invisalign',
      badge: 'Orthodontics',
      image: '/images/drbright-invisalign.png',
      imageType: 'logo',
    },
    {
      title: 'Sedation Dentistry',
      description:
        'We offer gentle, anxiety-free care using professional sedation so you can comfortably receive comprehensive treatment in a single visit.',
      href: '/services#sedation',
      badge: 'Comfort',
      image: '/images/drbright-covid-badge.png',
      imageType: 'logo',
    },
  ];

  const googleReviews = [
    {
      name: 'Sarah M.',
      date: '2 weeks ago',
      avatar: 'S',
      avatarColor: '#4285F4',
      quote: 'Dr. Bright and his team made me feel completely comfortable. The longer appointment times really make a difference. Highly recommend!',
    },
    {
      name: 'Mike R.',
      date: '1 month ago',
      avatar: 'M',
      avatarColor: '#EA4335',
      quote: 'Family-owned practice with modern technology. The AI x-rays are amazing! Best dental experience I\'ve had.',
    },
    {
      name: 'Jennifer L.',
      date: '3 weeks ago',
      avatar: 'J',
      avatarColor: '#34A853',
      quote: 'The calming atmosphere and patient-first approach is exactly what I needed. Dr. Bright is wonderful!',
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
            Denver&apos;s Home for Trusted, Comfortable, Family-Owned Dentistry
            </h1>
          <p className="mt-6 text-xl sm:text-2xl text-[#c5e2c7] font-light max-w-2xl mx-auto">
            Modern Care. Conservative Treatment. A Dental Experience Designed for You.
            </p>
          <div className="mt-10 flex flex-col sm:flex-row gap-4 justify-center">
              <a
                href="tel:(303) 377-7744"
              className="inline-flex items-center justify-center rounded-full bg-[var(--gold)] px-8 py-4 text-base font-semibold text-[var(--navy)] transition hover:bg-white hover:scale-105"
              >
              Schedule Your Appointment
                <ArrowRight className="ml-2 h-5 w-5" />
              </a>
              <a
              href="tel:(303) 377-7744"
              className="inline-flex items-center justify-center rounded-full border-2 border-white/40 px-8 py-4 text-base font-semibold text-white transition hover:bg-white/10 hover:border-white/60"
            >
              Call Us
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

      {/* WHY CHOOSE US - With swoosh decorations */}
      <section className="relative py-24 gradient-mint overflow-hidden">
        {/* Swoosh curves - visible gold */}
        <div className="swoosh-left bg-[var(--gold)]/50" />
        <div className="swoosh-right bg-[var(--gold)]/50" />
        
        <div className="mx-auto max-w-6xl px-4">
          <div className="text-center mb-12">
            <span className="inline-block px-4 py-1.5 rounded-full bg-[var(--gold)]/10 text-[var(--gold)] text-sm font-semibold tracking-wide mb-4">
              Why Choose Us
            </span>
            <h2 className="text-3xl sm:text-4xl font-semibold text-[var(--navy)] mb-4">
              Where Patient-First Care Meets Advanced Dentistry
            </h2>
            <p className="text-lg text-[var(--stone)] max-w-3xl mx-auto leading-relaxed">
              Cherry Creek South Dental is a family-owned dental practice in Denver, proudly offering a relaxed, unrushed, and truly personalized dental experience. Unlike corporate offices, we take the time to get to know you, understand your goals, and deliver dentistry that keeps you comfortable and confident.
            </p>
          </div>
          
          <div className="grid gap-8 md:grid-cols-3">
            {whyChooseUs.map((item) => (
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
                  <p className="text-[var(--stone)] leading-relaxed">
                    {item.description}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ABOUT PRACTICE */}
      <section className="relative py-24 gradient-navy text-white overflow-hidden">
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
              <div className="absolute -bottom-8 -right-8 lg:-right-12 bg-white rounded-3xl p-6 shadow-2xl max-w-sm">
                <p className="text-xs uppercase tracking-widest text-[var(--gold)] font-semibold mb-2">
                  Our Mission
                </p>
                <p className="text-[var(--navy)] font-medium text-sm leading-relaxed">
                  Cherry Creek South Dental offers personalized, family-oriented care with modern technology, focusing on conservative, collaborative treatments for all your dental needs.
                </p>
              </div>
            </div>
            
            {/* Content */}
            <div className="space-y-6 lg:pl-8">
              <span className="inline-block px-4 py-1.5 rounded-full bg-white/10 text-[var(--gold)] text-sm font-semibold tracking-wide">
                About the practice
              </span>
              <h2 className="text-3xl sm:text-4xl font-semibold leading-tight">
                Why Patients Choose Cherry Creek South Dental
              </h2>
              
              {/* Benefits list with icons */}
              <ul className="space-y-4">
                <li className="flex items-start gap-3">
                  <Heart className="h-5 w-5 text-[var(--gold)] mt-0.5 flex-shrink-0" />
                  <span className="text-[#c5e2c7]">Family-owned practice with a warm, welcoming atmosphere</span>
                </li>
                <li className="flex items-start gap-3">
                  <CheckCircle2 className="h-5 w-5 text-[var(--gold)] mt-0.5 flex-shrink-0" />
                  <span className="text-[#c5e2c7]">Longer cleaning appointments for deeper, more detailed preventive care</span>
                </li>
                <li className="flex items-start gap-3">
                  <Shield className="h-5 w-5 text-[var(--gold)] mt-0.5 flex-shrink-0" />
                  <span className="text-[#c5e2c7]">Conservative dentistry—you&apos;ll never be pushed into treatment</span>
                </li>
                <li className="flex items-start gap-3">
                  <Heart className="h-5 w-5 text-[var(--gold)] mt-0.5 flex-shrink-0" />
                  <span className="text-[#c5e2c7]">Collaborative care: we build treatment plans with you</span>
                </li>
                <li className="flex items-start gap-3">
                  <Sparkles className="h-5 w-5 text-[var(--gold)] mt-0.5 flex-shrink-0" />
                  <span className="text-[#c5e2c7]">Modern technology for precise, comfortable diagnostics</span>
                </li>
                <li className="flex items-start gap-3">
                  <Star className="h-5 w-5 text-[var(--gold)] mt-0.5 flex-shrink-0" />
                  <span className="text-[#c5e2c7]">Trusted for general dentistry, cosmetic dentistry, facial aesthetics, and family care</span>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* ABOUT DR. BRIGHT */}
      <section className="relative py-24 bg-white overflow-hidden">
        
        <div className="mx-auto max-w-6xl px-4">
          <div className="grid lg:grid-cols-5 gap-12 items-center">
            {/* Content - takes 3 cols */}
            <div className="lg:col-span-3 space-y-6 order-2 lg:order-1">
              <span className="inline-block px-4 py-1.5 rounded-full bg-[var(--gold)]/10 text-[var(--gold)] text-sm font-semibold tracking-wide">
                Meet Dr. Bright
              </span>
              <h2 className="text-3xl sm:text-4xl font-semibold text-[var(--navy)]">
                Meet Dr. Bright — Your Trusted Denver Dentist
              </h2>
              <p className="text-lg text-[var(--stone)] leading-relaxed">
                Dr. Bright is known for his gentle approach, meticulous attention to detail, and commitment to helping patients feel relaxed and informed. With extensive experience in both general and cosmetic dentistry, he blends advanced clinical skill with a friendly, patient-centered philosophy that sets the tone for the entire practice.
              </p>
              <p className="text-lg text-[var(--stone)] leading-relaxed">
                He believes that exceptional dentistry starts with trust. That&apos;s why he takes time to explain every option, answer every question, and help each patient participate in their oral health decisions. His goal is to provide the kind of dentistry he&apos;d want for his own family—thorough, conservative, and focused on long-term wellness.
              </p>
              
              <div>
                <p className="font-semibold text-[var(--navy)] mb-3">Special interests include:</p>
                <ul className="space-y-3 text-[var(--stone)]">
                  <li className="flex items-start gap-3">
                    <CheckCircle2 className="h-5 w-5 text-[var(--gold)] mt-0.5 flex-shrink-0" />
                    <span>Preventive & general dentistry</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <CheckCircle2 className="h-5 w-5 text-[var(--gold)] mt-0.5 flex-shrink-0" />
                    <span>Cosmetic smile transformations</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <CheckCircle2 className="h-5 w-5 text-[var(--gold)] mt-0.5 flex-shrink-0" />
                    <span>Invisalign® clear aligners</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <CheckCircle2 className="h-5 w-5 text-[var(--gold)] mt-0.5 flex-shrink-0" />
                    <span>Dental implants & restorations</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <CheckCircle2 className="h-5 w-5 text-[var(--gold)] mt-0.5 flex-shrink-0" />
                    <span>Facial aesthetic treatments (including Botox)</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <CheckCircle2 className="h-5 w-5 text-[var(--gold)] mt-0.5 flex-shrink-0" />
                    <span>TMJ evaluation with CBCT imaging</span>
                  </li>
                </ul>
              </div>
              
              <a
                href="tel:(303) 377-7744"
                className="inline-flex items-center justify-center rounded-full bg-[var(--gold)] px-8 py-4 text-base font-semibold text-[var(--navy)] transition hover:bg-[var(--navy)] hover:text-white hover:scale-105"
              >
                Schedule Your Appointment
                <ArrowRight className="ml-2 h-5 w-5" />
              </a>
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

      {/* TOP SERVICES */}
      <section className="relative py-24 bg-[var(--mint)] overflow-hidden">
        
        <div className="mx-auto max-w-6xl px-4">
          <div className="text-center mb-16">
            <span className="inline-block px-4 py-1.5 rounded-full bg-[var(--gold)]/10 text-[var(--gold)] text-sm font-semibold tracking-wide mb-4">
              Services
            </span>
            <h2 className="text-3xl sm:text-4xl font-semibold text-[var(--navy)]">
              Comprehensive Dental Services to Support Every Smile
            </h2>
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

      {/* REVIEWS - Google Reviews Style */}
      <section className="relative py-24 bg-white overflow-hidden">
        {/* Swoosh curves */}
        <div className="swoosh-left bg-[var(--gold)]/50" />
        <div className="swoosh-right bg-[var(--gold)]/50" />
        
        <div className="mx-auto max-w-5xl px-4">
          {/* Section Header */}
          <div className="text-center mb-12">
            <span className="inline-block px-4 py-1.5 rounded-full bg-[var(--gold)]/10 text-[var(--gold)] text-sm font-semibold tracking-wide mb-4">
              Patient Reviews
            </span>
            <h2 className="text-3xl sm:text-4xl font-semibold text-[var(--navy)]">
              What Patients Love About Cherry Creek South Dental
            </h2>
          </div>
          
          {/* Google Reviews Header */}
          <div className="bg-[var(--mint)] rounded-[2rem] p-6 mb-8">
            <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
              {/* Google Logo & Rating */}
              <div className="flex items-center gap-4">
                <svg className="h-8 w-8" viewBox="0 0 24 24">
                  <path fill="#4285F4" d="M22.56 12.25c0-.78-.07-1.53-.2-2.25H12v4.26h5.92c-.26 1.37-1.04 2.53-2.21 3.31v2.77h3.57c2.08-1.92 3.28-4.74 3.28-8.09z"/>
                  <path fill="#34A853" d="M12 23c2.97 0 5.46-.98 7.28-2.66l-3.57-2.77c-.98.66-2.23 1.06-3.71 1.06-2.86 0-5.29-1.93-6.16-4.53H2.18v2.84C3.99 20.53 7.7 23 12 23z"/>
                  <path fill="#FBBC05" d="M5.84 14.09c-.22-.66-.35-1.36-.35-2.09s.13-1.43.35-2.09V7.07H2.18C1.43 8.55 1 10.22 1 12s.43 3.45 1.18 4.93l2.85-2.22.81-.62z"/>
                  <path fill="#EA4335" d="M12 5.38c1.62 0 3.06.56 4.21 1.64l3.15-3.15C17.45 2.09 14.97 1 12 1 7.7 1 3.99 3.47 2.18 7.07l3.66 2.84c.87-2.6 3.3-4.53 6.16-4.53z"/>
                </svg>
                <div className="flex items-center gap-3">
                  <span className="text-2xl font-bold text-[var(--navy)]">5.0</span>
                  <div className="flex">
                    {[...Array(5)].map((_, idx) => (
                      <Star key={idx} className="h-5 w-5 fill-[var(--gold)] text-[var(--gold)]" />
                    ))}
                  </div>
                  <span className="text-[var(--stone)]">• 47 Google Reviews</span>
                </div>
              </div>
            </div>
          </div>
          
          {/* Review Cards */}
          <div className="grid md:grid-cols-3 gap-6">
            {googleReviews.map((review) => (
              <div
                key={review.name}
                className="bg-gradient-to-br from-[var(--mint)] to-[var(--background)] rounded-[2rem] p-6 hover:-translate-y-1 transition-all duration-300"
              >
                {/* Reviewer Info */}
                <div className="flex items-center gap-3 mb-4">
                  <div 
                    className="w-10 h-10 rounded-full flex items-center justify-center text-white font-semibold text-sm bg-[var(--navy)]"
                  >
                    {review.avatar}
                  </div>
                  <div>
                    <p className="font-semibold text-[var(--navy)]">{review.name}</p>
                    <p className="text-xs text-[var(--stone)]">{review.date}</p>
                  </div>
                </div>
                
                {/* Stars */}
                <div className="flex mb-3">
                  {[...Array(5)].map((_, idx) => (
                    <Star key={idx} className="h-4 w-4 fill-[var(--gold)] text-[var(--gold)]" />
                  ))}
                </div>
                
                {/* Review Text */}
                <p className="text-[var(--stone)] text-sm leading-relaxed">
                  {review.quote}
                </p>
                
                {/* Google Icon */}
                <div className="mt-4 pt-4 border-t border-[var(--gold)]/20 flex items-center gap-2">
                  <svg className="h-4 w-4" viewBox="0 0 24 24">
                    <path fill="#4285F4" d="M22.56 12.25c0-.78-.07-1.53-.2-2.25H12v4.26h5.92c-.26 1.37-1.04 2.53-2.21 3.31v2.77h3.57c2.08-1.92 3.28-4.74 3.28-8.09z"/>
                    <path fill="#34A853" d="M12 23c2.97 0 5.46-.98 7.28-2.66l-3.57-2.77c-.98.66-2.23 1.06-3.71 1.06-2.86 0-5.29-1.93-6.16-4.53H2.18v2.84C3.99 20.53 7.7 23 12 23z"/>
                    <path fill="#FBBC05" d="M5.84 14.09c-.22-.66-.35-1.36-.35-2.09s.13-1.43.35-2.09V7.07H2.18C1.43 8.55 1 10.22 1 12s.43 3.45 1.18 4.93l2.85-2.22.81-.62z"/>
                    <path fill="#EA4335" d="M12 5.38c1.62 0 3.06.56 4.21 1.64l3.15-3.15C17.45 2.09 14.97 1 12 1 7.7 1 3.99 3.47 2.18 7.07l3.66 2.84c.87-2.6 3.3-4.53 6.16-4.53z"/>
                  </svg>
                  <span className="text-xs text-[var(--stone)]">Posted on Google</span>
                </div>
              </div>
            ))}
          </div>
          
          {/* Description after reviews */}
          <div className="text-center mt-10 max-w-2xl mx-auto">
            <p className="text-lg text-[var(--stone)] leading-relaxed">
              Patients consistently praise our attentive care, relaxing environment, and Dr. Bright&apos;s gentle, transparent approach.
            </p>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="relative py-24 gradient-navy overflow-hidden">
        <div className="relative mx-auto max-w-4xl px-4 text-center text-white">
          <Leaf className="h-12 w-12 mx-auto text-[var(--gold)] mb-6" />
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
      
      {/* Wave transition between CTA and Location */}
      <div className="bg-white">
        <svg viewBox="0 0 1440 120" fill="none" xmlns="http://www.w3.org/2000/svg" className="w-full block -mt-1">
          <defs>
            <linearGradient id="waveGradient" x1="0%" y1="0%" x2="100%" y2="100%" gradientTransform="rotate(160)">
              <stop offset="0%" stopColor="#064226" />
              <stop offset="50%" stopColor="#0a3d1f" />
              <stop offset="100%" stopColor="#052a16" />
            </linearGradient>
          </defs>
          <path d="M0 0L60 10C120 20 240 40 360 50C480 60 600 60 720 55C840 50 960 40 1080 35C1200 30 1320 30 1380 30L1440 30V0H0Z" fill="url(#waveGradient)"/>
        </svg>
      </div>

      {/* LOCATION MAP */}
      <section className="relative py-24 bg-white overflow-hidden">
        <div className="mx-auto max-w-6xl px-4">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            {/* Content */}
            <div className="space-y-6">
              <span className="inline-block px-4 py-1.5 rounded-full bg-[var(--gold)]/10 text-[var(--gold)] text-sm font-semibold tracking-wide">
                Our Location
              </span>
              <h2 className="text-3xl sm:text-4xl font-semibold text-[var(--navy)]">
                Find Us in the Heart of Denver&apos;s Cherry Creek Area
              </h2>
              <p className="text-lg text-[var(--stone)] leading-relaxed">
                We&apos;re conveniently located near Glendale, Colorado Boulevard, and Cherry Creek&apos;s residential neighborhoods—making us an easy choice for families, professionals, and Denver-area residents seeking high-quality, patient-first dental care.
              </p>
              
              {/* Address Info */}
              <div className="bg-[var(--mint)] rounded-2xl p-6 space-y-4">
                <div className="flex items-start gap-3">
                  <div className="w-10 h-10 rounded-xl bg-[var(--gold)]/20 flex items-center justify-center flex-shrink-0">
                    <svg className="h-5 w-5 text-[var(--gold)]" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                    </svg>
                  </div>
                  <div>
                    <p className="font-semibold text-[var(--navy)]">Cherry Creek South Dental</p>
                    <p className="text-[var(--stone)]">5055 E Kentucky Ave<br />Denver, CO 80246</p>
                  </div>
                </div>
                <div className="flex items-center gap-3">
                  <div className="w-10 h-10 rounded-xl bg-[var(--gold)]/20 flex items-center justify-center flex-shrink-0">
                    <svg className="h-5 w-5 text-[var(--gold)]" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
                    </svg>
                  </div>
                  <div>
                    <p className="text-[var(--stone)]">Call: <a href="tel:(303) 377-7744" className="font-semibold text-[var(--navy)] hover:text-[var(--gold)]">(303) 377-7744</a></p>
                    <p className="text-[var(--stone)]">Text: <a href="sms:(720) 864-1333" className="font-semibold text-[var(--navy)] hover:text-[var(--gold)]">(720) 864-1333</a></p>
                  </div>
                </div>
              </div>
              
              <a
                href="tel:(303) 377-7744"
                className="inline-flex items-center justify-center rounded-full bg-[var(--gold)] px-8 py-4 text-base font-semibold text-[var(--navy)] transition hover:bg-[var(--navy)] hover:text-white hover:scale-105"
              >
                Schedule Your Appointment
                <ArrowRight className="ml-2 h-5 w-5" />
              </a>
            </div>
            
            {/* Map */}
            <div className="relative">
              <div className="absolute inset-4 bg-[var(--gold)]/20 rounded-[2rem] rotate-3" />
              <div className="relative rounded-[2rem] overflow-hidden shadow-xl">
                <iframe
                  src="https://www.google.com/maps/embed?pb=!1m14!1m8!1m3!1d3069.7435520586664!2d-104.9279661!3d39.7004696!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x876c7d089e7f05fb%3A0x53c315a85d1e3f98!2sCherry%20Creek%20South%20Dental!5e0!3m2!1sen!2sar!4v1764883450582!5m2!1sen!2sar"
                  width="100%"
                  height="450"
                  style={{ border: 0 }}
                  allowFullScreen
                  loading="lazy"
                  referrerPolicy="no-referrer-when-downgrade"
                  title="Cherry Creek South Dental Location"
                  className="w-full"
                />
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
