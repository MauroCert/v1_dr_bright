import Image from 'next/image';
import Link from 'next/link';
import { ArrowRight, Star, Heart, Shield, Sparkles, GraduationCap, Award, Phone, MapPin } from 'lucide-react';

export default function DrBright() {
  return (
    <div className="bg-white">
      {/* HERO */}
      <section className="relative min-h-[60vh] flex items-center justify-center">
        <div className="absolute inset-0">
          <Image
            src="/IMG_5467 copy_edited.avif"
            alt="Dr. Bright - Cherry Creek South Dental"
            fill
            className="object-cover"
            priority
          />
          <div className="absolute inset-0 bg-black/50" />
        </div>
        <div className="relative z-10 text-center px-6 max-w-4xl mx-auto">
          <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold leading-tight text-white mb-6">
            Meet <span className="text-[var(--gold)]">Dr. Bright</span>
          </h1>
          <p className="text-xl text-white/90 mb-10 max-w-2xl mx-auto">
            Your Trusted Dentist in Denver, CO
          </p>
          <a
            href="tel:3033777744"
            className="inline-flex items-center justify-center bg-[var(--gold)] text-white px-8 py-4 text-base font-semibold transition hover:bg-[var(--gold)]/90"
          >
            Schedule with Dr. Bright
            <ArrowRight className="ml-2 h-5 w-5" />
          </a>
        </div>
      </section>

      {/* INTRO */}
      <section className="py-24 bg-white">
        <div className="mx-auto max-w-6xl px-6">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            <div className="flex justify-center">
              <Image
                src="/images/team/dr-bright.jpg"
                alt="Dr. Bright"
                width={450}
                height={450}
                className="w-[450px] h-[450px] object-cover rounded-full"
              />
            </div>
            <div className="space-y-6">
              <h2 className="text-3xl sm:text-4xl font-bold text-[var(--navy)]">Your Trusted Dentist in Denver, CO</h2>
              <p className="text-gray-600 leading-relaxed">
                At Cherry Creek South Dental, Dr. Bright is more than just your dentist—he&apos;s a caring professional who prioritizes your health and well-being while also keeping up with the latest advancements in dental science. As a dedicated family man and outdoor enthusiast, Dr. Bright&apos;s passion for life and commitment to excellence shine through in everything he does.
              </p>
              <p className="text-gray-600 leading-relaxed">
                Whether you&apos;re visiting for a routine cleaning, Invisalign, Botox, or dental implants, you can trust Dr. Bright to provide you with the best care possible.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Two-Tone Divider */}
      <div className="relative h-24">
        <svg className="absolute w-full h-full" preserveAspectRatio="none" viewBox="0 0 1440 96" fill="none" xmlns="http://www.w3.org/2000/svg">
          <polygon points="0,96 0,20 1440,96" fill="var(--navy)" />
          <polygon points="950,96 1440,40 1440,96" fill="var(--gold)" />
        </svg>
      </div>

      {/* A DENTIST WHO'S ALWAYS ADVANCING */}
      <section className="py-24 bg-[#f8f6f3]">
        <div className="mx-auto max-w-6xl px-6">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            <div className="space-y-6">
              <h2 className="text-3xl sm:text-4xl font-bold text-[var(--navy)]">A Dentist Who&apos;s Always Advancing</h2>
              <p className="text-gray-600 leading-relaxed">
                Dr. Bright believes that providing the best care means staying on top of the latest advancements in oral healthcare. In May 2024, he earned the prestigious title of Fellow of the Academy of General Dentistry (FAGD), a distinction held by only about 6% of dentists in North America. This achievement represents over 500 hours of continuing education and the completion of a rigorous comprehensive exam, ensuring that Dr. Bright remains at the forefront of dental science.
              </p>
              <p className="text-gray-600 leading-relaxed">
                Dr. Bright is also an Associate Fellow of the American Academy of Implant Dentistry, showcasing his advanced skills in surgical procedures and tooth replacement. Whether you are here for cosmetic services like Invisalign or Botox, or more complex procedures such as implants, you can rest assured knowing Dr. Bright uses the latest, most effective techniques to safeguard your health and enhance your smile.
              </p>
            </div>
            <div className="space-y-6">
              <div className="group border border-[var(--gold)]/40 bg-[#faf9f7] p-8 text-center hover:border-[var(--gold)] hover:shadow-lg transition-all">
                <div className="w-16 h-16 mx-auto mb-6 rounded-full bg-[var(--navy)] flex items-center justify-center">
                  <GraduationCap className="w-8 h-8 text-white" strokeWidth={1.5} />
                </div>
                <h3 className="text-lg font-bold text-[var(--navy)] mb-2 uppercase tracking-wide">FAGD</h3>
                <p className="text-gray-600 leading-relaxed text-sm">Fellow of the Academy of General Dentistry — held by only ~6% of dentists in North America</p>
              </div>
              <div className="group border border-[var(--gold)]/40 bg-[#faf9f7] p-8 text-center hover:border-[var(--gold)] hover:shadow-lg transition-all">
                <div className="w-16 h-16 mx-auto mb-6 rounded-full bg-[var(--navy)] flex items-center justify-center">
                  <Award className="w-8 h-8 text-white" strokeWidth={1.5} />
                </div>
                <h3 className="text-lg font-bold text-[var(--navy)] mb-2 uppercase tracking-wide">Implant Dentistry</h3>
                <p className="text-gray-600 leading-relaxed text-sm">Associate Fellow of the American Academy of Implant Dentistry</p>
              </div>
              <div className="group border border-[var(--gold)]/40 bg-[#faf9f7] p-8 text-center hover:border-[var(--gold)] hover:shadow-lg transition-all">
                <div className="w-16 h-16 mx-auto mb-6 rounded-full bg-[var(--navy)] flex items-center justify-center">
                  <Sparkles className="w-8 h-8 text-white" strokeWidth={1.5} />
                </div>
                <h3 className="text-lg font-bold text-[var(--navy)] mb-2 uppercase tracking-wide">500+ Hours CE</h3>
                <p className="text-gray-600 leading-relaxed text-sm">Continuing education ensuring the latest techniques and technology</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* PASSION FOR OUTDOORS AND FAMILY */}
      <section className="py-24 bg-white">
        <div className="mx-auto max-w-6xl px-6">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            <div className="relative h-[450px] overflow-hidden shadow-lg">
              <Image
                src="/54307432591_576cf64694_o.jpg"
                alt="Dr. Bright and family"
                fill
                className="object-cover"
              />
            </div>
            <div className="space-y-6">
              <h2 className="text-3xl sm:text-4xl font-bold text-[var(--navy)]">A Passion for Outdoors and Family</h2>
              <p className="text-gray-600 leading-relaxed">
                Dr. Bright and his family made Colorado their home in 2019, quickly falling in love with the mountains and the vibrant community. A proud father to three young children—a spirited 6-year-old daughter, an adventurous 4-year-old son, and a sweet 7-month-old baby boy—Dr. Bright cherishes every moment spent with his family.
              </p>
              <p className="text-gray-600 leading-relaxed">
                An avid outdoorsman, Dr. Bright enjoys spending his weekends hiking scenic trails or fishing in the tranquil waters of the Rockies. When they&apos;re not out exploring the great outdoors, you can often find the Bright family cheering on the Denver Nuggets, embracing the local culture and spirit.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Geometric Divider */}
      <div className="relative h-24 -mt-1">
        <svg className="absolute w-full h-full" preserveAspectRatio="none" viewBox="0 0 1440 96" fill="none" xmlns="http://www.w3.org/2000/svg">
          <polygon points="0,96 1440,0 1440,96" fill="#f5f5f5" />
          <polygon points="0,0 0,96 1440,0" fill="white" />
        </svg>
      </div>

      {/* DR. BRIGHT'S APPROACH TO CARE */}
      <section className="py-24 bg-[#f5f5f5] -mt-1">
        <div className="mx-auto max-w-6xl px-6">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            <div className="space-y-6">
              <h2 className="text-3xl sm:text-4xl font-bold text-[var(--navy)]">Dr. Bright&apos;s Approach to Care</h2>
              <p className="text-gray-600 leading-relaxed">
                Dr. Bright&apos;s philosophy is simple: he believes that dental care should be comfortable, efficient, and tailored to each patient&apos;s individual needs. He takes the time to understand your goals and concerns and works with you to create a treatment plan that fits your lifestyle and budget.
              </p>
              <p className="text-gray-600 leading-relaxed">
                With his skill, experience, and dedication to excellence, Dr. Bright ensures that every patient receives the highest standard of care in a warm and compassionate environment.
              </p>
            </div>
            <div className="space-y-4">
              <div className="flex items-start gap-4">
                <div className="w-10 h-10 rounded-full bg-[var(--gold)]/10 flex items-center justify-center flex-shrink-0 mt-0.5">
                  <Heart className="h-5 w-5 text-[var(--gold)]" />
                </div>
                <div>
                  <h3 className="font-semibold text-[var(--navy)]">Comfortable & Patient-Centered</h3>
                  <p className="text-gray-600 text-sm">Every treatment plan is designed with your comfort and long-term health as top priority.</p>
                </div>
              </div>
              <div className="flex items-start gap-4">
                <div className="w-10 h-10 rounded-full bg-[var(--gold)]/10 flex items-center justify-center flex-shrink-0 mt-0.5">
                  <Shield className="h-5 w-5 text-[var(--gold)]" />
                </div>
                <div>
                  <h3 className="font-semibold text-[var(--navy)]">Tailored to Your Needs</h3>
                  <p className="text-gray-600 text-sm">He works with you to create a plan that fits your lifestyle and budget.</p>
                </div>
              </div>
              <div className="flex items-start gap-4">
                <div className="w-10 h-10 rounded-full bg-[var(--gold)]/10 flex items-center justify-center flex-shrink-0 mt-0.5">
                  <Star className="h-5 w-5 text-[var(--gold)]" />
                </div>
                <div>
                  <h3 className="font-semibold text-[var(--navy)]">Warm & Compassionate</h3>
                  <p className="text-gray-600 text-sm">The highest standard of care in a welcoming, anxiety-free environment.</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* BOOK YOUR APPOINTMENT */}
      <section className="py-24 bg-white">
        <div className="mx-auto max-w-6xl px-6">
          <div className="grid lg:grid-cols-2 gap-12">
            <div>
              <h2 className="text-3xl sm:text-4xl font-light text-[var(--gold)] mb-4 uppercase tracking-wide">Book Your<br />Appointment</h2>
              <p className="text-gray-600 mb-8">Ready to experience dental care that puts you first? Schedule your appointment with Dr. Bright today.</p>
              <form className="space-y-4">
                <div className="grid grid-cols-2 gap-4">
                  <input type="text" placeholder="First Name" className="w-full px-4 py-3 bg-white border border-gray-200 focus:border-[var(--gold)] focus:outline-none transition" />
                  <input type="text" placeholder="Last Name" className="w-full px-4 py-3 bg-white border border-gray-200 focus:border-[var(--gold)] focus:outline-none transition" />
                </div>
                <div className="grid grid-cols-2 gap-4">
                  <input type="email" placeholder="Email Address" className="w-full px-4 py-3 bg-white border border-gray-200 focus:border-[var(--gold)] focus:outline-none transition" />
                  <input type="tel" placeholder="Mobile Number" className="w-full px-4 py-3 bg-white border border-gray-200 focus:border-[var(--gold)] focus:outline-none transition" />
                </div>
                <textarea placeholder="Your Message" rows={4} className="w-full px-4 py-3 bg-white border border-gray-200 focus:border-[var(--gold)] focus:outline-none transition resize-none" />
                <button type="submit" className="w-full bg-[var(--gold)] text-white py-4 font-semibold transition hover:bg-[var(--gold)]/90">Submit Form</button>
              </form>
            </div>
            <div className="space-y-6 lg:pt-20">
              <div className="bg-[#f5f5f5] p-6 shadow-sm border-l-4 border-[var(--gold)]">
                <h3 className="text-xl font-semibold text-[var(--navy)] mb-3">Call Us</h3>
                <div className="flex items-center gap-3">
                  <div className="w-10 h-10 rounded-full bg-[var(--gold)] flex items-center justify-center"><Phone className="h-5 w-5 text-white" /></div>
                  <a href="tel:(303) 377-7744" className="text-gray-600 hover:text-[var(--gold)] transition">(303) 377-7744</a>
                </div>
              </div>
              <div className="bg-[#f5f5f5] p-6 shadow-sm border-l-4 border-[var(--gold)]">
                <h3 className="text-xl font-semibold text-[var(--navy)] mb-3">Our Address</h3>
                <div className="flex items-center gap-3">
                  <div className="w-10 h-10 rounded-full bg-[var(--gold)] flex items-center justify-center"><MapPin className="h-5 w-5 text-white" /></div>
                  <a href="https://maps.google.com/?q=5055+E+Kentucky+Ave,+Denver,+CO+80246" target="_blank" rel="noopener noreferrer" className="text-gray-600 hover:text-[var(--gold)] transition">5055 E Kentucky Ave, Denver, CO 80246</a>
                </div>
              </div>
              <div className="bg-[#f5f5f5] p-6 shadow-sm border-l-4 border-[var(--gold)]">
                <h3 className="text-xl font-semibold text-[var(--navy)] mb-3">Get Connected</h3>
                <div className="flex items-center gap-3">
                  <a href="https://g.page/r/CQVBXHNMdHxCEAE" target="_blank" rel="noopener noreferrer" className="w-10 h-10 rounded-full bg-[var(--gold)] flex items-center justify-center hover:bg-[var(--navy)] transition"><svg className="h-5 w-5 text-white" viewBox="0 0 24 24" fill="currentColor"><path d="M12.48 10.92v3.28h7.84c-.24 1.84-.853 3.187-1.787 4.133-1.147 1.147-2.933 2.4-6.053 2.4-4.827 0-8.6-3.893-8.6-8.72s3.773-8.72 8.6-8.72c2.6 0 4.507 1.027 5.907 2.347l2.307-2.307C18.747 1.44 16.133 0 12.48 0 5.867 0 .307 5.387.307 12s5.56 12 12.173 12c3.573 0 6.267-1.173 8.373-3.36 2.16-2.16 2.84-5.213 2.84-7.667 0-.76-.053-1.467-.173-2.053H12.48z"/></svg></a>
                  <a href="https://www.facebook.com/drbrightdds" target="_blank" rel="noopener noreferrer" className="w-10 h-10 rounded-full bg-[var(--gold)] flex items-center justify-center hover:bg-[var(--navy)] transition"><svg className="h-5 w-5 text-white" viewBox="0 0 24 24" fill="currentColor"><path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z"/></svg></a>
                  <a href="https://www.instagram.com/drbrightdds" target="_blank" rel="noopener noreferrer" className="w-10 h-10 rounded-full bg-[var(--gold)] flex items-center justify-center hover:bg-[var(--navy)] transition"><svg className="h-5 w-5 text-white" viewBox="0 0 24 24" fill="currentColor"><path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z"/></svg></a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
