import Image from 'next/image';
import Link from 'next/link';
import { ArrowLeft, ArrowRight, Clock, User, Calendar, CheckCircle2, Phone, MapPin } from 'lucide-react';

export default function InvisalignVsBraces() {
  return (
    <div className="bg-white">
      {/* HERO */}
      <section className="relative min-h-[50vh] flex items-center justify-center">
        <div className="absolute inset-0">
          <Image
            src="/images/f0e477_39aba48e92444e238d089a57789598f7~mv2.avif"
            alt="Invisalign vs Traditional Braces"
            fill
            className="object-cover"
            priority
          />
          <div className="absolute inset-0 bg-black/60" />
        </div>
        <div className="relative z-10 text-center px-6 max-w-4xl mx-auto">
          <div className="flex items-center justify-center gap-4 text-sm text-white/80 mb-6">
            <span className="bg-[var(--gold)] text-white text-xs font-bold uppercase tracking-wider px-3 py-1">
              Orthodontics
            </span>
            <span className="flex items-center gap-1"><Calendar className="h-3.5 w-3.5" /> February 10, 2026</span>
            <span className="flex items-center gap-1"><Clock className="h-3.5 w-3.5" /> 6 min read</span>
          </div>
          <h1 className="text-3xl sm:text-4xl lg:text-5xl font-bold leading-tight text-white mb-6">
            Invisalign vs. Traditional Braces: <span className="text-[var(--gold)]">Which Is Right for You?</span>
          </h1>
          <div className="flex items-center justify-center gap-2 text-white/80">
            <User className="h-4 w-4" />
            <span>By Dr. Bright</span>
          </div>
        </div>
      </section>

      {/* BREADCRUMB */}
      <div className="bg-[#f5f5f5] py-4">
        <div className="mx-auto max-w-3xl px-6">
          <div className="flex items-center gap-2 text-sm text-gray-500">
            <Link href="/blog" className="hover:text-[var(--gold)] transition flex items-center gap-1">
              <ArrowLeft className="h-3.5 w-3.5" /> Back to Blog
            </Link>
          </div>
        </div>
      </div>

      {/* ARTICLE */}
      <article className="py-16">
        <div className="mx-auto max-w-3xl px-6">
          <div className="prose prose-lg max-w-none">
            <p className="text-xl text-gray-600 leading-relaxed mb-8">
              If you&apos;re considering straightening your teeth, you&apos;ve likely come across two popular options: Invisalign clear aligners and traditional metal braces. Both are effective orthodontic treatments, but they differ significantly in terms of appearance, comfort, lifestyle impact, and cost. Here at Cherry Creek South Dental, Dr. Bright helps patients navigate this decision every day.
            </p>

            <h2 className="text-2xl font-bold text-[var(--navy)] mt-12 mb-4">How Invisalign Works</h2>
            <p className="text-gray-600 leading-relaxed mb-6">
              Invisalign uses a series of custom-made, clear plastic aligners that gradually shift your teeth into the desired position. Each set of aligners is worn for 1–2 weeks before moving to the next set. The aligners are virtually invisible, removable, and made from smooth, BPA-free plastic.
            </p>
            <p className="text-gray-600 leading-relaxed mb-6">
              At Cherry Creek South Dental, Dr. Bright uses iTero digital scanning technology to create a precise 3D model of your teeth and map out every stage of treatment. You can even see your projected results before treatment begins with ClinCheck software.
            </p>

            <h2 className="text-2xl font-bold text-[var(--navy)] mt-12 mb-4">How Traditional Braces Work</h2>
            <p className="text-gray-600 leading-relaxed mb-6">
              Traditional braces consist of metal brackets bonded to your teeth, connected by wires and elastic bands. Your orthodontist periodically adjusts the wires to apply pressure and guide your teeth into alignment. Treatment typically requires office visits every 4–6 weeks for adjustments.
            </p>

            <h2 className="text-2xl font-bold text-[var(--navy)] mt-12 mb-4">Comparing the Two: Key Differences</h2>

            {/* Comparison Cards */}
            <div className="space-y-6 my-8">
              <div className="bg-[#f5f5f5] p-6 border-l-4 border-[var(--gold)]">
                <h3 className="text-lg font-bold text-[var(--navy)] mb-2">Appearance</h3>
                <p className="text-gray-600 text-sm mb-2"><strong className="text-[var(--navy)]">Invisalign:</strong> Nearly invisible. Most people won&apos;t notice you&apos;re wearing them.</p>
                <p className="text-gray-600 text-sm"><strong className="text-[var(--navy)]">Braces:</strong> Visible metal brackets and wires. Ceramic (tooth-colored) options exist but are still noticeable.</p>
              </div>

              <div className="bg-[#f5f5f5] p-6 border-l-4 border-[var(--gold)]">
                <h3 className="text-lg font-bold text-[var(--navy)] mb-2">Comfort</h3>
                <p className="text-gray-600 text-sm mb-2"><strong className="text-[var(--navy)]">Invisalign:</strong> Smooth plastic with no sharp edges. Mild pressure when switching aligners.</p>
                <p className="text-gray-600 text-sm"><strong className="text-[var(--navy)]">Braces:</strong> Brackets and wires can irritate cheeks and gums, especially after adjustments.</p>
              </div>

              <div className="bg-[#f5f5f5] p-6 border-l-4 border-[var(--gold)]">
                <h3 className="text-lg font-bold text-[var(--navy)] mb-2">Diet & Lifestyle</h3>
                <p className="text-gray-600 text-sm mb-2"><strong className="text-[var(--navy)]">Invisalign:</strong> Completely removable. Eat whatever you want—just remove aligners first.</p>
                <p className="text-gray-600 text-sm"><strong className="text-[var(--navy)]">Braces:</strong> Food restrictions apply (no popcorn, sticky candy, hard foods). Harder to clean around brackets.</p>
              </div>

              <div className="bg-[#f5f5f5] p-6 border-l-4 border-[var(--gold)]">
                <h3 className="text-lg font-bold text-[var(--navy)] mb-2">Treatment Time</h3>
                <p className="text-gray-600 text-sm mb-2"><strong className="text-[var(--navy)]">Invisalign:</strong> Typically 6–18 months for most cases. Simple cases can finish in 3–6 months.</p>
                <p className="text-gray-600 text-sm"><strong className="text-[var(--navy)]">Braces:</strong> Usually 18–36 months depending on complexity.</p>
              </div>

              <div className="bg-[#f5f5f5] p-6 border-l-4 border-[var(--gold)]">
                <h3 className="text-lg font-bold text-[var(--navy)] mb-2">Office Visits</h3>
                <p className="text-gray-600 text-sm mb-2"><strong className="text-[var(--navy)]">Invisalign:</strong> Quick check-ins every 6–8 weeks (usually 15–20 minutes).</p>
                <p className="text-gray-600 text-sm"><strong className="text-[var(--navy)]">Braces:</strong> Adjustment appointments every 4–6 weeks (30–60 minutes).</p>
              </div>
            </div>

            <h2 className="text-2xl font-bold text-[var(--navy)] mt-12 mb-4">Who Is a Good Candidate for Invisalign?</h2>
            <p className="text-gray-600 leading-relaxed mb-4">
              Invisalign is an excellent choice for most teens and adults with mild to moderate orthodontic issues. It works well for:
            </p>
            <ul className="space-y-2 mb-6">
              {['Crowded teeth', 'Gaps and spacing issues', 'Overbite, underbite, or crossbite', 'Patients who want a discreet option', 'Busy professionals and active teens'].map((item) => (
                <li key={item} className="flex items-center gap-3 text-gray-600">
                  <CheckCircle2 className="h-5 w-5 text-[var(--gold)] flex-shrink-0" />
                  {item}
                </li>
              ))}
            </ul>

            <h2 className="text-2xl font-bold text-[var(--navy)] mt-12 mb-4">When Might Braces Be Better?</h2>
            <p className="text-gray-600 leading-relaxed mb-4">
              Traditional braces may be recommended for severe or complex cases, including significant bite issues, severely rotated teeth, or cases requiring precise vertical movements. They&apos;re also a good fit for younger patients who might not be disciplined about wearing removable aligners 20–22 hours per day.
            </p>

            <h2 className="text-2xl font-bold text-[var(--navy)] mt-12 mb-4">Dr. Bright&apos;s Recommendation</h2>
            <div className="bg-[var(--navy)] text-white p-8 my-8">
              <p className="text-white/90 leading-relaxed italic text-lg">
                &ldquo;For the vast majority of my patients, Invisalign delivers outstanding results with far less disruption to daily life. The digital treatment planning gives us incredible precision, and patients love the freedom of removable aligners. That said, every smile is unique—the best choice depends on your specific needs and goals. I always recommend a thorough evaluation before making a decision.&rdquo;
              </p>
              <p className="text-[var(--gold)] font-semibold mt-4">— Dr. Bright, DDS, FAGD</p>
            </div>

            <h2 className="text-2xl font-bold text-[var(--navy)] mt-12 mb-4">Ready to Find Out Which Option Is Right for You?</h2>
            <p className="text-gray-600 leading-relaxed mb-6">
              The best way to determine whether Invisalign or braces is right for your smile is to schedule a consultation. At Cherry Creek South Dental, Dr. Bright will evaluate your teeth, discuss your goals, and recommend the most effective treatment for your unique situation. Invisalign consultations are complimentary.
            </p>
          </div>

          {/* CTA */}
          <div className="mt-12 bg-[#f8f6f3] p-8 text-center">
            <h3 className="text-2xl font-bold text-[var(--navy)] mb-3">Schedule Your Free Invisalign Consultation</h3>
            <p className="text-gray-600 mb-6">Find out if Invisalign is right for you with a no-obligation evaluation.</p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <a
                href="tel:3033777744"
                className="inline-flex items-center justify-center bg-[var(--gold)] text-white px-8 py-4 font-semibold transition hover:bg-[var(--gold)]/90"
              >
                Call (303) 377-7744
              </a>
              <Link
                href="/services/invisalign"
                className="inline-flex items-center justify-center border-2 border-[var(--navy)] text-[var(--navy)] px-8 py-4 font-semibold transition hover:bg-[var(--navy)] hover:text-white"
              >
                Learn More About Invisalign
                <ArrowRight className="ml-2 h-5 w-5" />
              </Link>
            </div>
          </div>

          {/* RELATED POSTS */}
          <div className="mt-16 pt-12 border-t border-gray-200">
            <h3 className="text-2xl font-bold text-[var(--navy)] mb-6">Continue Reading</h3>
            <Link
              href="/blog/tips-for-maintaining-oral-health-between-visits"
              className="group flex items-center gap-6 bg-white border border-gray-200 p-4 hover:shadow-lg transition-all hover:-translate-y-0.5"
            >
              <div className="relative h-24 w-36 flex-shrink-0 overflow-hidden">
                <Image
                  src="/Main service page/Copy of Dental Exams & Cleanings.jpg"
                  alt="Oral health tips"
                  fill
                  className="object-cover"
                />
              </div>
              <div>
                <span className="text-xs text-gray-500">January 28, 2026</span>
                <h4 className="font-bold text-[var(--navy)] group-hover:text-[var(--gold)] transition-colors">7 Tips for Maintaining Oral Health Between Dental Visits</h4>
                <span className="text-sm text-[var(--gold)] font-semibold flex items-center gap-1 mt-1">
                  Read More <ArrowRight className="h-3.5 w-3.5" />
                </span>
              </div>
            </Link>
          </div>
        </div>
      </article>

      {/* BOOK YOUR APPOINTMENT */}
      <section className="py-24 bg-[#f5f5f5]">
        <div className="mx-auto max-w-6xl px-6">
          <div className="grid lg:grid-cols-2 gap-12">
            <div>
              <h2 className="text-3xl sm:text-4xl font-light text-[var(--gold)] mb-4 uppercase tracking-wide">Book Your<br />Appointment</h2>
              <p className="text-gray-600 mb-8">Ready to take the next step towards a healthier smile? Contact us with any questions or to schedule an appointment.</p>
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
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
