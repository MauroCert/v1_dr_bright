import Image from 'next/image';
import Link from 'next/link';
import { ArrowRight, Star, ShieldCheck, Sparkles, Smile } from 'lucide-react';

export default function Home() {
  const howWeCanHelp = [
    {
      titleStart: 'I Want to Keep',
      titleHighlight: 'My',
      titleEnd: 'Teeth Forever',
      description: 'Dental health moves through many stages. We value preventive and functional care for all ages.',
      href: '/services/general-dentistry',
      icon: ShieldCheck,
    },
    {
      titleStart: 'I Want to Improve',
      titleHighlight: 'My',
      titleEnd: 'Smile',
      description: 'Dr. Bright offers a variety of cosmetic dentistry options to customize your smile and confidence.',
      href: '/services/cosmetic-dentistry',
      icon: Sparkles,
    },
    {
      titleStart: 'I Need',
      titleHighlight: 'My',
      titleEnd: 'Tooth Replaced',
      description: 'We offer single or multiple teeth replacements to fit your functional needs and lifestyle.',
      href: '/services',
      icon: Smile,
    },
  ];

  const googleReviews = [
    {
      name: 'Sarah M.',
      initial: 'S',
      quote: 'Dr. Bright and his team made me feel completely comfortable. The longer appointment times really make a difference. Highly recommend!',
    },
    {
      name: 'Mike R.',
      initial: 'M',
      quote: 'Family-owned practice with modern technology. The AI x-rays are amazing! Best dental experience I\'ve had.',
    },
    {
      name: 'Jennifer L.',
      initial: 'J',
      quote: 'The calming atmosphere and patient-first approach is exactly what I needed. Dr. Bright is wonderful!',
    },
  ];

  return (
    <div className="bg-white">
      {/* HERO - Full width image with overlay like SMYLE */}
      <section className="relative min-h-[85vh] flex items-center justify-center">
        {/* Background Image */}
        <div className="absolute inset-0">
          <Image
            src="/Homepage/Why Patients Choose Cherry Creek South Dental.jpg"
            alt="Cherry Creek South Dental"
            fill
            className="object-cover object-top"
            priority
          />
          <div className="absolute inset-0 bg-black/40" />
        </div>
        
        {/* Content */}
        <div className="relative z-10 text-center px-6 max-w-4xl mx-auto">
          <Image
            src="/logo.avif"
            alt="Cherry Creek South Dental"
            width={180}
            height={50}
            className="mx-auto h-16 w-auto mb-8"
            priority
          />
          <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold leading-tight text-white mb-4">
            <span className="text-[var(--gold)]">Cherry Creek South</span> Dental
          </h1>
          <p className="text-xl sm:text-2xl text-white/90 mb-10">
            Top Dentist in Denver, CO
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a
              href="tel:(303) 377-7744"
              className="inline-flex items-center justify-center bg-[var(--gold)] text-white px-8 py-4 text-base font-semibold transition hover:bg-[var(--gold)]/90"
            >
              Request Appointment
            </a>
            <a
              href="tel:(303) 377-7744"
              className="inline-flex items-center justify-center bg-white text-[var(--navy)] px-8 py-4 text-base font-semibold transition hover:bg-white/90"
            >
              (303) 377-7744
            </a>
          </div>
        </div>
      </section>

      {/* Geometric Divider - Hero to How We Can Help */}
      <div className="relative h-24 -mt-1">
        <svg
          className="absolute w-full h-full"
          preserveAspectRatio="none"
          viewBox="0 0 1440 96"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <polygon points="0,0 1440,96 1440,0" fill="var(--gold)" />
          <polygon points="0,0 0,96 1440,96" fill="#f8f6f3" />
        </svg>
      </div>

      {/* HOW WE CAN HELP - SMYLE style cards with icons */}
      <section className="py-24 bg-[#f8f6f3] -mt-1">
        <div className="mx-auto max-w-6xl px-6">
          <h2 className="text-3xl sm:text-4xl font-light tracking-wide text-[var(--navy)] text-center mb-16 uppercase">
            How We Can Help
          </h2>
          
          <div className="grid md:grid-cols-3 gap-8">
            {howWeCanHelp.map((item) => {
              const IconComponent = item.icon;
              return (
                <Link
                  key={item.titleEnd}
                  href={item.href}
                  className="group border border-[var(--gold)]/40 bg-[#faf9f7] p-8 text-center hover:border-[var(--gold)] hover:shadow-lg transition-all"
                >
                  {/* Icon */}
                  <div className="w-16 h-16 mx-auto mb-6 rounded-full bg-[var(--navy)] flex items-center justify-center">
                    <IconComponent className="w-8 h-8 text-white" strokeWidth={1.5} />
                  </div>
                  
                  {/* Title with highlighted "My" */}
                  <h3 className="text-lg font-bold text-[var(--navy)] mb-4 leading-snug uppercase tracking-wide">
                    {item.titleStart}{' '}
                    <span className="text-[var(--gold)]">{item.titleHighlight}</span>{' '}
                    {item.titleEnd}
                  </h3>
                  
                  {/* Description */}
                  <p className="text-gray-600 leading-relaxed text-sm">
                    {item.description}
                  </p>
                </Link>
              );
            })}
          </div>
        </div>
      </section>

      {/* Full-width Image Banner */}
      <section className="relative h-[400px] w-full">
        <Image
          src="/Homepage/Dental Exams & Cleanings.jpg"
          alt="Cherry Creek South Dental office"
          fill
          className="object-cover"
        />
        <div className="absolute inset-0 bg-black/50" />
      </section>

      {/* MEET DR. BRIGHT - Bio section like SMYLE */}
      <section className="py-24 bg-white">
        <div className="mx-auto max-w-6xl px-6">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            {/* Left - Image */}
            <div className="order-2 lg:order-1 flex justify-center">
              <Image
                src="/images/Digital Assets/Dr. Bright and family.png"
                alt="Dr. Bright and family"
                width={450}
                height={450}
                className="w-[450px] h-[450px] object-cover rounded-full"
              />
            </div>
            
            {/* Right - Content */}
            <div className="space-y-6 order-1 lg:order-2">
              <h2 className="text-3xl sm:text-4xl font-bold text-[var(--navy)]">
                Meet Dr. Bright, DDS
              </h2>
              <p className="text-lg text-gray-600 leading-relaxed">
                Dr. Bright is dedicated to staying up to date on the latest dental techniques to always strive for the best care for his patients. He has a genuine desire to always learn and improve, and is part of multiple local study clubs with other dentists and specialists.
              </p>
              
              <div className="space-y-6 pt-4">
                <div>
                  <h3 className="text-xl font-bold text-[var(--navy)] mb-3">Our Vision</h3>
                  <p className="text-gray-600 leading-relaxed">
                    To redefine the dental experience by blending precision, artistry, and personalized care — creating a space where trust, comfort, and uncompromising quality come together to transform smiles and lives.
                  </p>
                </div>
                <div>
                  <h3 className="text-xl font-bold text-[var(--navy)] mb-3">Our Mission</h3>
                  <p className="text-gray-600 leading-relaxed">
                    Our mission is to provide an extraordinary dental experience that combines precision, artistry, and comfort — treating every patient with genuine warmth and personalized care.
                  </p>
                </div>
              </div>
              
              <Link
                href="/about"
                className="inline-flex items-center font-semibold text-[var(--gold)] hover:underline transition pt-2"
              >
                Learn More About Our Office
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Geometric Divider - Meet Dr. Bright to Why Choose Us */}
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

      {/* WHY CHOOSE US - Full width text section like SMYLE */}
      <section className="py-24 bg-[#f5f5f5] -mt-1">
        <div className="mx-auto max-w-4xl px-6">
          <h2 className="text-3xl sm:text-4xl font-bold text-[var(--navy)] text-center mb-10">
            Why choose us?
          </h2>
          <div className="space-y-6 text-lg text-gray-600 leading-relaxed text-center">
            <p>
              At Cherry Creek South Dental we provide quality comprehensive oral healthcare for your whole family. Our patients include families of all ages from young children to grandparents and great-grandparents. We build lifelong relationships at our dental office for a lifetime of wellness!
            </p>
            <p>
              We are happily accepting new patients who value their health as much as we do. We provide preventive, restorative, and cosmetic dentistry for patients of all ages. With our patient-centered approach to dentistry, our goal is to educate patients with all necessary information to make an informed decision with Dr. Bright on their dental needs.
            </p>
          </div>
          <div className="flex flex-col sm:flex-row gap-4 justify-center mt-12">
            <a
              href="tel:(303) 377-7744"
              className="inline-flex items-center justify-center bg-[var(--gold)] text-white px-8 py-4 text-base font-semibold transition hover:bg-[var(--gold)]/90"
            >
              Request Appointment
            </a>
            <a
              href="tel:(303) 377-7744"
              className="inline-flex items-center justify-center bg-transparent border-2 border-[var(--navy)] text-[var(--navy)] px-8 py-4 text-base font-semibold transition hover:bg-[var(--navy)] hover:text-white"
            >
              (303) 377-7744
            </a>
          </div>
        </div>
      </section>

      {/* PATIENT REVIEWS - Split layout with image */}
      <section className="bg-white">
        <div className="grid lg:grid-cols-2">
          {/* Left - Image */}
          <div className="relative h-[600px] lg:h-auto">
            <Image
              src="/Homepage/Cosmetic Dentistry.jpg"
              alt="Happy patient at Cherry Creek South Dental"
              fill
              className="object-cover"
            />
          </div>
          
          {/* Right - Testimonials */}
          <div className="py-16 px-8 lg:px-12">
            <h2 className="text-3xl sm:text-4xl font-bold text-[var(--navy)] mb-4">
              See What Our Patients<br />Have to Say
            </h2>
            
            {/* Google Rating */}
            <div className="flex items-center gap-3 mb-10">
              <svg className="h-6 w-6" viewBox="0 0 24 24">
                <path fill="#4285F4" d="M22.56 12.25c0-.78-.07-1.53-.2-2.25H12v4.26h5.92c-.26 1.37-1.04 2.53-2.21 3.31v2.77h3.57c2.08-1.92 3.28-4.74 3.28-8.09z"/>
                <path fill="#34A853" d="M12 23c2.97 0 5.46-.98 7.28-2.66l-3.57-2.77c-.98.66-2.23 1.06-3.71 1.06-2.86 0-5.29-1.93-6.16-4.53H2.18v2.84C3.99 20.53 7.7 23 12 23z"/>
                <path fill="#FBBC05" d="M5.84 14.09c-.22-.66-.35-1.36-.35-2.09s.13-1.43.35-2.09V7.07H2.18C1.43 8.55 1 10.22 1 12s.43 3.45 1.18 4.93l2.85-2.22.81-.62z"/>
                <path fill="#EA4335" d="M12 5.38c1.62 0 3.06.56 4.21 1.64l3.15-3.15C17.45 2.09 14.97 1 12 1 7.7 1 3.99 3.47 2.18 7.07l3.66 2.84c.87-2.6 3.3-4.53 6.16-4.53z"/>
              </svg>
              <div className="flex">
                {[...Array(5)].map((_, idx) => (
                  <Star key={idx} className="h-5 w-5 fill-[var(--gold)] text-[var(--gold)]" />
                ))}
              </div>
              <span className="text-gray-600">5.0 • 47 Reviews</span>
            </div>
            
            {/* Review Cards - Stacked */}
            <div className="space-y-6">
              {googleReviews.map((review) => (
                <div
                  key={review.name}
                  className="bg-[#f9f9f9] p-5"
                >
                  {/* Reviewer Info */}
                  <div className="flex items-center gap-3 mb-3">
                    <div className="w-10 h-10 rounded-full bg-[var(--navy)] flex items-center justify-center text-white font-semibold">
                      {review.initial}
                    </div>
                    <div>
                      <p className="font-semibold text-[var(--navy)] text-sm">{review.name}</p>
                      <div className="flex">
                        {[...Array(5)].map((_, idx) => (
                          <Star key={idx} className="h-3 w-3 fill-[var(--gold)] text-[var(--gold)]" />
                        ))}
                      </div>
                    </div>
                  </div>
                  
                  {/* Review Text */}
                  <p className="text-gray-600 leading-relaxed text-sm">
                    &ldquo;{review.quote}&rdquo;
                  </p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* BOOK YOUR APPOINTMENT - CTA section like SMYLE */}
      <section className="py-24 bg-[#f5f5f5]">
        <div className="mx-auto max-w-4xl px-6 text-center">
          <h2 className="text-3xl sm:text-4xl font-bold text-[var(--navy)] mb-6">
            Book Your Appointment
          </h2>
          <p className="text-lg text-gray-600 mb-10 max-w-2xl mx-auto">
            Ready to take the next step towards a healthier smile? Contact us with any questions or to schedule an appointment.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a
              href="tel:(303) 377-7744"
              className="inline-flex items-center justify-center bg-[var(--gold)] text-white px-8 py-4 text-base font-semibold transition hover:bg-[var(--gold)]/90"
            >
              Request Appointment
              <ArrowRight className="ml-2 h-5 w-5" />
            </a>
            <a
              href="tel:(303) 377-7744"
              className="inline-flex items-center justify-center bg-transparent border-2 border-[var(--navy)] text-[var(--navy)] px-8 py-4 text-base font-semibold transition hover:bg-[var(--navy)] hover:text-white"
            >
              (303) 377-7744
            </a>
          </div>
        </div>
      </section>
    </div>
  );
}
