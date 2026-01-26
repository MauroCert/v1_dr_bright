import Image from 'next/image';
import Link from 'next/link';
import { ArrowRight, Star, ShieldCheck, Sparkles, Smile, Phone, MapPin } from 'lucide-react';

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
      <section className="relative h-[calc(100vh-120px)] flex flex-col justify-end">
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
        
        {/* Content - Positioned at bottom */}
        <div className="relative z-10 text-center px-6 max-w-4xl mx-auto pb-10">
          <Image
            src="/logo.avif"
            alt="Cherry Creek South Dental"
            width={280}
            height={80}
            className="mx-auto h-28 w-auto mb-8"
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
      <section className="relative h-[550px] w-full">
        <Image
          src="/Homepage/Dental Exams & Cleanings.jpg"
          alt="Cherry Creek South Dental office"
          fill
          className="object-cover object-top"
        />
        <div className="absolute inset-0 bg-black/50" />
        {/* Centered Text */}
        <div className="absolute inset-0 flex items-center justify-center">
          <h2 
            className="text-3xl sm:text-4xl md:text-5xl text-white font-light tracking-wide text-center px-6"
            style={{ fontFamily: 'Lato, sans-serif' }}
          >
            A Practice Made for Your Needs
          </h2>
        </div>
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
              <p className="text-gray-600 leading-relaxed">
                Dr. Bright and his family made Colorado their home in 2019, quickly falling in love with the mountains and community. He is a proud father to three young children: a spirited 6-year-old daughter, an adventurous 4-year-old son, and a sweet 7-month-old baby boy. An avid outdoorsman, Dr. Bright enjoys spending weekends with his family hiking scenic trails or fishing in the tranquil waters of the Rockies. When they&apos;re not exploring the great outdoors, you can often find them cheering on the Denver Nuggets!
              </p>
              <p className="text-gray-600 leading-relaxed">
                Dr. Bright believes that providing the best care means mastering the latest advancements in oral healthcare. In May 2024, he earned the prestigious title of Fellow of the Academy of General Dentistry (FAGD), a distinction held by only about 6% of dentists in North America. This achievement represents over 500 hours of continuing education and the completion of a rigorous comprehensive exam, ensuring he stays at the forefront of dental science. Additionally, as an Associate Fellow of the American Academy of Implant Dentistry, Dr. Bright possesses advanced skills in surgical procedures and tooth replacement. Whether you are visiting for Invisalign, Botox, implants, or a routine check-up, you can rest assured knowing Dr. Bright utilizes the latest techniques to protect your health.
              </p>
              
              <Link
                href="/about"
                className="inline-flex items-center justify-center bg-[var(--gold)] text-white px-8 py-4 font-semibold transition hover:bg-[var(--gold)]/90 mt-4"
              >
                Learn More About Our Office
                <ArrowRight className="ml-2 h-5 w-5" />
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
      <section className="bg-[var(--navy)]">
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
            <h2 className="text-3xl sm:text-4xl font-bold text-white mb-4">
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
              <span className="text-white/80">5.0 • 47 Reviews</span>
            </div>
            
            {/* Review Cards - Stacked */}
            <div className="space-y-6">
              {googleReviews.map((review) => (
                <div
                  key={review.name}
                  className="bg-white/10 backdrop-blur-sm p-5 border-l-4 border-[var(--gold)]"
                >
                  {/* Reviewer Info */}
                  <div className="flex items-center gap-3 mb-3">
                    <div className="w-10 h-10 rounded-full bg-[var(--gold)] flex items-center justify-center text-white font-semibold">
                      {review.initial}
                    </div>
                    <div>
                      <p className="font-semibold text-white text-sm">{review.name}</p>
                      <div className="flex">
                        {[...Array(5)].map((_, idx) => (
                          <Star key={idx} className="h-3 w-3 fill-[var(--gold)] text-[var(--gold)]" />
                        ))}
                      </div>
                    </div>
                  </div>
                  
                  {/* Review Text */}
                  <p className="text-white/90 leading-relaxed text-sm">
                    &ldquo;{review.quote}&rdquo;
                  </p>
                </div>
              ))}
            </div>
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

      {/* AFFILIATIONS - Professional associations and memberships */}
      <section className="py-24 bg-white border-t border-gray-100">
        <div className="mx-auto max-w-6xl px-6">
          <h2 className="text-3xl sm:text-4xl font-bold text-[var(--navy)] text-center mb-16">
            Our Professional Affiliations
          </h2>
          <div className="flex flex-wrap items-center justify-center gap-16">
            <Image
              src="/affiliations_1.png"
              alt="Professional Affiliation"
              width={280}
              height={120}
              className="h-28 w-auto object-contain grayscale hover:grayscale-0 transition-all duration-300"
            />
            <Image
              src="/affiliations_2.png"
              alt="Professional Affiliation"
              width={280}
              height={120}
              className="h-28 w-auto object-contain grayscale hover:grayscale-0 transition-all duration-300"
            />
            <Image
              src="/affiliations_3.png"
              alt="Professional Affiliation"
              width={280}
              height={120}
              className="h-28 w-auto object-contain grayscale hover:grayscale-0 transition-all duration-300"
            />
          </div>
        </div>
      </section>
    </div>
  );
}
