import Image from 'next/image';
import Link from 'next/link';
import { ArrowRight, Star, Heart, Shield, Sparkles, GraduationCap, Award, Phone, MapPin } from 'lucide-react';

const credentials = [
  { title: 'Fellow, Academy of General Dentistry (FAGD)', detail: 'A distinction held by only ~6% of dentists in North America' },
  { title: 'Associate Fellow, American Academy of Implant Dentistry', detail: 'Advanced skills in surgical procedures and tooth replacement' },
  { title: '500+ Hours of Continuing Education', detail: 'Staying at the forefront of dental science and technique' },
];

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
            Meet <span className="text-[var(--gold)]">Dr. Bright</span>, DDS
          </h1>
          <p className="text-xl text-white/90 mb-10 max-w-2xl mx-auto">
            A dedicated dentist committed to exceptional care with a focus on patient comfort, advanced technology, and building lasting relationships.
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

      {/* ABOUT DR. BRIGHT */}
      <section className="py-24 bg-white">
        <div className="mx-auto max-w-6xl px-6">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            <div className="flex justify-center">
              <Image
                src="/images/Digital Assets/Dr. Bright and family.png"
                alt="Dr. Bright and family"
                width={450}
                height={450}
                className="w-[450px] h-[450px] object-cover rounded-full"
              />
            </div>
            <div className="space-y-6">
              <h2 className="text-3xl sm:text-4xl font-bold text-[var(--navy)]">About Dr. Bright</h2>
              <p className="text-gray-600 leading-relaxed">
                Dr. Bright and his family made Colorado their home in 2019, quickly falling in love with the mountains and community. He is a proud father to three young children: a spirited 6-year-old daughter, an adventurous 4-year-old son, and a sweet 7-month-old baby boy.
              </p>
              <p className="text-gray-600 leading-relaxed">
                An avid outdoorsman, Dr. Bright enjoys spending weekends with his family hiking scenic trails or fishing in the tranquil waters of the Rockies. When they&apos;re not exploring the great outdoors, you can often find them cheering on the Denver Nuggets!
              </p>
              <p className="text-gray-600 leading-relaxed">
                Dr. Bright believes that providing the best care means mastering the latest advancements in oral healthcare. In May 2024, he earned the prestigious title of Fellow of the Academy of General Dentistry (FAGD), a distinction held by only about 6% of dentists in North America.
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

      {/* CREDENTIALS */}
      <section className="py-24 bg-[#f8f6f3]">
        <div className="mx-auto max-w-6xl px-6">
          <h2 className="text-3xl sm:text-4xl font-light tracking-wide text-[var(--navy)] text-center mb-16 uppercase">
            Credentials & Expertise
          </h2>
          <div className="grid md:grid-cols-3 gap-8">
            <div className="group border border-[var(--gold)]/40 bg-[#faf9f7] p-8 text-center hover:border-[var(--gold)] hover:shadow-lg transition-all">
              <div className="w-16 h-16 mx-auto mb-6 rounded-full bg-[var(--navy)] flex items-center justify-center">
                <GraduationCap className="w-8 h-8 text-white" strokeWidth={1.5} />
              </div>
              <h3 className="text-lg font-bold text-[var(--navy)] mb-4 leading-snug uppercase tracking-wide">Education</h3>
              <p className="text-gray-600 leading-relaxed text-sm">Doctor of Dental Surgery degree with extensive post-graduate training in advanced techniques.</p>
            </div>
            <div className="group border border-[var(--gold)]/40 bg-[#faf9f7] p-8 text-center hover:border-[var(--gold)] hover:shadow-lg transition-all">
              <div className="w-16 h-16 mx-auto mb-6 rounded-full bg-[var(--navy)] flex items-center justify-center">
                <Award className="w-8 h-8 text-white" strokeWidth={1.5} />
              </div>
              <h3 className="text-lg font-bold text-[var(--navy)] mb-4 leading-snug uppercase tracking-wide">Certifications</h3>
              <p className="text-gray-600 leading-relaxed text-sm">Advanced training in cosmetic, restorative, and implant dentistry with top professional organizations.</p>
            </div>
            <div className="group border border-[var(--gold)]/40 bg-[#faf9f7] p-8 text-center hover:border-[var(--gold)] hover:shadow-lg transition-all">
              <div className="w-16 h-16 mx-auto mb-6 rounded-full bg-[var(--navy)] flex items-center justify-center">
                <Sparkles className="w-8 h-8 text-white" strokeWidth={1.5} />
              </div>
              <h3 className="text-lg font-bold text-[var(--navy)] mb-4 leading-snug uppercase tracking-wide">Technology</h3>
              <p className="text-gray-600 leading-relaxed text-sm">Certified in advanced dental technology, AI diagnostics, and digital treatment planning.</p>
            </div>
          </div>

          <div className="mt-16 bg-white p-8 shadow-sm border-l-4 border-[var(--gold)]">
            <h3 className="text-2xl font-bold text-[var(--navy)] mb-6">Professional Achievements</h3>
            <div className="space-y-4">
              {credentials.map((cred) => (
                <div key={cred.title} className="flex items-start gap-4">
                  <Star className="h-5 w-5 text-[var(--gold)] flex-shrink-0 mt-0.5" />
                  <div>
                    <h4 className="font-semibold text-[var(--navy)]">{cred.title}</h4>
                    <p className="text-gray-600 text-sm">{cred.detail}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* PHILOSOPHY */}
      <section className="py-24 bg-white">
        <div className="mx-auto max-w-6xl px-6">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            <div className="relative h-[450px] overflow-hidden shadow-lg">
              <Image
                src="/54307432591_576cf64694_o.jpg"
                alt="Dr. Bright's philosophy"
                fill
                className="object-cover"
              />
            </div>
            <div className="space-y-6">
              <h2 className="text-3xl sm:text-4xl font-bold text-[var(--navy)]">
                Dr. Bright&apos;s Philosophy
              </h2>
              <p className="text-gray-600 leading-relaxed">
                Dr. Bright&apos;s commitment to excellence extends beyond the dental chair. He believes in educating patients about their oral health and involving them in decisions about their treatment. This collaborative approach ensures that every patient feels heard, respected, and confident in their dental care choices.
              </p>
              <ul className="space-y-4">
                <li className="flex items-start gap-4">
                  <div className="w-10 h-10 rounded-full bg-[var(--gold)]/10 flex items-center justify-center flex-shrink-0 mt-0.5">
                    <Heart className="h-5 w-5 text-[var(--gold)]" />
                  </div>
                  <div>
                    <h3 className="font-semibold text-[var(--navy)]">Patient-First Approach</h3>
                    <p className="text-gray-600 text-sm">Every treatment plan is designed with your comfort and long-term health as top priority.</p>
                  </div>
                </li>
                <li className="flex items-start gap-4">
                  <div className="w-10 h-10 rounded-full bg-[var(--gold)]/10 flex items-center justify-center flex-shrink-0 mt-0.5">
                    <Shield className="h-5 w-5 text-[var(--gold)]" />
                  </div>
                  <div>
                    <h3 className="font-semibold text-[var(--navy)]">Family-Centered Care</h3>
                    <p className="text-gray-600 text-sm">Dental care should be a positive experience that brings families together.</p>
                  </div>
                </li>
                <li className="flex items-start gap-4">
                  <div className="w-10 h-10 rounded-full bg-[var(--gold)]/10 flex items-center justify-center flex-shrink-0 mt-0.5">
                    <Award className="h-5 w-5 text-[var(--gold)]" />
                  </div>
                  <div>
                    <h3 className="font-semibold text-[var(--navy)]">Excellence in Dentistry</h3>
                    <p className="text-gray-600 text-sm">Committed to staying at the forefront of dental technology and techniques.</p>
                  </div>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* WHY CHOOSE DR. BRIGHT */}
      <section className="py-24 bg-[var(--navy)]">
        <div className="mx-auto max-w-4xl px-6 text-center">
          <h2 className="text-3xl sm:text-4xl font-bold text-white mb-10">Why Choose Dr. Bright?</h2>
          <div className="grid sm:grid-cols-2 gap-6 text-left">
            {[
              { label: 'Family-Owned Practice', desc: 'Personal care in a corporate world' },
              { label: 'Extended Appointment Times', desc: 'No rushing, thorough care' },
              { label: 'Advanced Technology', desc: 'AI-powered diagnostics and modern equipment' },
              { label: 'Patient Involvement', desc: 'Collaborative treatment planning' },
              { label: 'Calming Environment', desc: 'Designed to reduce dental anxiety' },
              { label: 'Continuing Education', desc: 'Always learning the latest techniques' },
            ].map((item) => (
              <div key={item.label} className="flex items-start gap-3 bg-white/10 p-4 border-l-4 border-[var(--gold)]">
                <Star className="h-5 w-5 text-[var(--gold)] flex-shrink-0 mt-0.5" />
                <div>
                  <p className="font-semibold text-white">{item.label}</p>
                  <p className="text-white/70 text-sm">{item.desc}</p>
                </div>
              </div>
            ))}
          </div>
          <div className="mt-12 flex flex-col sm:flex-row gap-4 justify-center">
            <a
              href="tel:3033777744"
              className="inline-flex items-center justify-center bg-[var(--gold)] text-white px-8 py-4 font-semibold transition hover:bg-[var(--gold)]/90"
            >
              Call (303) 377-7744
            </a>
            <Link
              href="/contact"
              className="inline-flex items-center justify-center bg-white/10 text-white border border-white/30 px-8 py-4 font-semibold transition hover:bg-white/20"
            >
              Contact Us
            </Link>
          </div>
        </div>
      </section>

      {/* BOOK YOUR APPOINTMENT */}
      <section className="py-24 bg-[#f5f5f5]">
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
              <div className="bg-white p-6 shadow-sm border-l-4 border-[var(--gold)]">
                <h3 className="text-xl font-semibold text-[var(--navy)] mb-3">Call Us</h3>
                <div className="flex items-center gap-3">
                  <div className="w-10 h-10 rounded-full bg-[var(--gold)] flex items-center justify-center"><Phone className="h-5 w-5 text-white" /></div>
                  <a href="tel:(303) 377-7744" className="text-gray-600 hover:text-[var(--gold)] transition">(303) 377-7744</a>
                </div>
              </div>
              <div className="bg-white p-6 shadow-sm border-l-4 border-[var(--gold)]">
                <h3 className="text-xl font-semibold text-[var(--navy)] mb-3">Our Address</h3>
                <div className="flex items-center gap-3">
                  <div className="w-10 h-10 rounded-full bg-[var(--gold)] flex items-center justify-center"><MapPin className="h-5 w-5 text-white" /></div>
                  <a href="https://maps.google.com/?q=5055+E+Kentucky+Ave,+Denver,+CO+80246" target="_blank" rel="noopener noreferrer" className="text-gray-600 hover:text-[var(--gold)] transition">5055 E Kentucky Ave, Denver, CO 80246</a>
                </div>
              </div>
              <div className="bg-white p-6 shadow-sm border-l-4 border-[var(--gold)]">
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
