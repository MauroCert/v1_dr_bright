import Image from 'next/image';
import Link from 'next/link';
import { ArrowLeft, ArrowRight, Clock, User, Calendar, CheckCircle2, Phone, MapPin } from 'lucide-react';

const tips = [
  {
    number: 1,
    title: 'Brush Twice Daily with Proper Technique',
    content: 'It sounds basic, but technique matters more than most people realize. Hold your brush at a 45-degree angle to your gum line and use gentle, circular motions rather than aggressive back-and-forth scrubbing. Spend at least two minutes each session—30 seconds per quadrant of your mouth. Dr. Bright recommends an electric toothbrush with a built-in timer for the best results.',
  },
  {
    number: 2,
    title: 'Floss Every Day—No Exceptions',
    content: 'Brushing alone only cleans about 60% of your tooth surfaces. Flossing reaches the tight spaces between teeth where bacteria love to hide and plaque builds up. If you struggle with traditional floss, try a water flosser—Dr. Bright recommends them to many patients and they can be just as effective. The key is consistency: once a day, every day.',
  },
  {
    number: 3,
    title: 'Watch What You Eat and Drink',
    content: 'Sugary and acidic foods are the primary culprits behind tooth decay. Sodas, sports drinks, candy, and even fruit juices can erode enamel and feed cavity-causing bacteria. When you do indulge, rinse your mouth with water afterward and wait 30 minutes before brushing (brushing too soon after acidic foods can actually damage softened enamel). Crunchy fruits and vegetables like apples, carrots, and celery naturally help clean your teeth.',
  },
  {
    number: 4,
    title: 'Stay Hydrated with Water',
    content: 'Water is your mouth\'s best friend. It washes away food particles, dilutes acids produced by bacteria, and helps maintain saliva production. Saliva is your body\'s natural defense against tooth decay—it neutralizes acids, delivers minerals to your enamel, and kills harmful bacteria. If you experience dry mouth, talk to Dr. Bright about solutions.',
  },
  {
    number: 5,
    title: 'Don\'t Skip Your Nighttime Routine',
    content: 'Your nighttime oral care routine is arguably more important than your morning one. While you sleep, saliva production decreases dramatically, giving bacteria hours of uninterrupted time to produce acids and attack your teeth. Going to bed without brushing and flossing is like leaving the door open for decay. Make it non-negotiable: brush, floss, and rinse before bed every single night.',
  },
  {
    number: 6,
    title: 'Replace Your Toothbrush Regularly',
    content: 'A worn toothbrush does a poor job cleaning your teeth. The American Dental Association recommends replacing your toothbrush (or electric brush head) every 3–4 months, or sooner if the bristles are frayed. Also replace your brush after you\'ve been sick to avoid reintroducing bacteria.',
  },
  {
    number: 7,
    title: 'Use Mouthwash as a Supplement, Not a Replacement',
    content: 'Antimicrobial or fluoride mouthwash can be a great addition to your routine, but it should never replace brushing and flossing. Think of it as the finishing touch—a way to reach areas you might have missed and strengthen enamel. Dr. Bright can recommend the best mouthwash for your specific needs, whether that\'s cavity prevention, gum health, or dry mouth relief.',
  },
];

export default function OralHealthTips() {
  return (
    <div className="bg-white">
      {/* HERO */}
      <section className="relative min-h-[50vh] flex items-center justify-center">
        <div className="absolute inset-0">
          <Image
            src="/Main service page/Copy of Dental Exams & Cleanings.jpg"
            alt="Tips for Maintaining Oral Health"
            fill
            className="object-cover"
            priority
          />
          <div className="absolute inset-0 bg-black/60" />
        </div>
        <div className="relative z-10 text-center px-6 max-w-4xl mx-auto">
          <div className="flex items-center justify-center gap-4 text-sm text-white/80 mb-6">
            <span className="bg-[var(--gold)] text-white text-xs font-bold uppercase tracking-wider px-3 py-1">
              Preventive Care
            </span>
            <span className="flex items-center gap-1"><Calendar className="h-3.5 w-3.5" /> January 28, 2026</span>
            <span className="flex items-center gap-1"><Clock className="h-3.5 w-3.5" /> 5 min read</span>
          </div>
          <h1 className="text-3xl sm:text-4xl lg:text-5xl font-bold leading-tight text-white mb-6">
            7 Tips for Maintaining <span className="text-[var(--gold)]">Oral Health</span> Between Dental Visits
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
              Professional cleanings and exams are essential for maintaining oral health—but what you do at home between those visits matters just as much. Your daily habits have a direct impact on the health of your teeth, gums, and overall wellbeing. Here are seven dentist-approved strategies Dr. Bright recommends to keep your smile healthy every day.
            </p>

            {/* TIPS */}
            <div className="space-y-10">
              {tips.map((tip) => (
                <div key={tip.number} className="flex gap-5">
                  <div className="flex-shrink-0">
                    <span className="flex h-10 w-10 items-center justify-center rounded-full bg-[var(--gold)] text-white font-bold text-lg">
                      {tip.number}
                    </span>
                  </div>
                  <div>
                    <h2 className="text-xl font-bold text-[var(--navy)] mb-3">{tip.title}</h2>
                    <p className="text-gray-600 leading-relaxed">{tip.content}</p>
                  </div>
                </div>
              ))}
            </div>

            {/* BONUS */}
            <div className="bg-[var(--navy)] text-white p-8 mt-12">
              <h3 className="text-xl font-bold text-white mb-3">Bonus: Know When to Call Your Dentist</h3>
              <p className="text-white/90 leading-relaxed mb-4">
                Don&apos;t wait for your next scheduled appointment if you notice any of these warning signs:
              </p>
              <ul className="space-y-2">
                {[
                  'Persistent toothache or sensitivity',
                  'Bleeding gums when brushing or flossing',
                  'A chipped, cracked, or loose tooth',
                  'Sores that don\'t heal within two weeks',
                  'Jaw pain, clicking, or difficulty opening your mouth',
                ].map((item) => (
                  <li key={item} className="flex items-center gap-3 text-white/80">
                    <CheckCircle2 className="h-5 w-5 text-[var(--gold)] flex-shrink-0" />
                    {item}
                  </li>
                ))}
              </ul>
              <p className="text-[var(--gold)] font-semibold mt-6">
                Early intervention almost always leads to simpler, less costly treatment.
              </p>
            </div>

            <h2 className="text-2xl font-bold text-[var(--navy)] mt-12 mb-4">The Bottom Line</h2>
            <p className="text-gray-600 leading-relaxed mb-6">
              Maintaining great oral health isn&apos;t complicated—it just takes consistency. Brush well, floss daily, mind your diet, stay hydrated, and never skip your nighttime routine. Combined with regular visits to Cherry Creek South Dental, these habits will help you keep your natural teeth strong and healthy for a lifetime.
            </p>
            <p className="text-gray-600 leading-relaxed mb-6">
              Have questions about your oral care routine? Dr. Bright and our team love helping patients optimize their at-home care. Don&apos;t hesitate to ask at your next visit—or reach out anytime.
            </p>
          </div>

          {/* CTA */}
          <div className="mt-12 bg-[#f8f6f3] p-8 text-center">
            <h3 className="text-2xl font-bold text-[var(--navy)] mb-3">Due for a Cleaning?</h3>
            <p className="text-gray-600 mb-6">Schedule your next preventive visit with Dr. Bright and get personalized home-care recommendations.</p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <a
                href="tel:3033777744"
                className="inline-flex items-center justify-center bg-[var(--gold)] text-white px-8 py-4 font-semibold transition hover:bg-[var(--gold)]/90"
              >
                Call (303) 377-7744
              </a>
              <Link
                href="/services/general-dentistry"
                className="inline-flex items-center justify-center border-2 border-[var(--navy)] text-[var(--navy)] px-8 py-4 font-semibold transition hover:bg-[var(--navy)] hover:text-white"
              >
                Our Preventive Services
                <ArrowRight className="ml-2 h-5 w-5" />
              </Link>
            </div>
          </div>

          {/* RELATED POSTS */}
          <div className="mt-16 pt-12 border-t border-gray-200">
            <h3 className="text-2xl font-bold text-[var(--navy)] mb-6">Continue Reading</h3>
            <Link
              href="/blog/invisalign-vs-traditional-braces"
              className="group flex items-center gap-6 bg-white border border-gray-200 p-4 hover:shadow-lg transition-all hover:-translate-y-0.5"
            >
              <div className="relative h-24 w-36 flex-shrink-0 overflow-hidden">
                <Image
                  src="/images/f0e477_39aba48e92444e238d089a57789598f7~mv2.avif"
                  alt="Invisalign vs Braces"
                  fill
                  className="object-cover"
                />
              </div>
              <div>
                <span className="text-xs text-gray-500">February 10, 2026</span>
                <h4 className="font-bold text-[var(--navy)] group-hover:text-[var(--gold)] transition-colors">Invisalign vs. Traditional Braces: Which Is Right for You?</h4>
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
