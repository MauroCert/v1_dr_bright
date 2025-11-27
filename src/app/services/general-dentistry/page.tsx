import Image from 'next/image';
import Link from 'next/link';
import { ArrowRight, CheckCircle2 } from 'lucide-react';

const preventivePillars = [
  {
    title: 'Longer Hygiene Visits',
    copy:
      'Modeled after Miyamoto Family Dental’s preventive philosophy, we schedule generous time for cleanings, exams, and questions.',
    points: ['Ultrasonic + hand scaling combo', 'Gum health charting each visit', 'Personalized home-care coaching'],
  },
  {
    title: 'Oral Cancer Screenings',
    copy: 'Every comprehensive visit includes an oral cancer screening and airway review for full-body wellness insights.',
    points: ['Head & neck exam', 'Airway + TMJ check', 'Lifestyle risk review'],
  },
  {
    title: 'Home Care Partners',
    copy: 'We mirror Miyamoto’s educational approach by pairing each patient with tailored product and technique recommendations.',
    points: ['Electric brush guidance', 'Floss & water flosser demos', 'Follow-up check-ins by text'],
  },
  {
    title: 'Periodontal Therapy',
    copy: 'For gums that need extra support we stage therapy visits with the same joyful, plant-filled energy you see on drbrightsmiles.com.',
    points: ['Localized irrigation', 'Comfort-focused anesthesia options', 'Ongoing maintenance plans'],
  },
];

const visitTimeline = [
  {
    title: 'Warm Welcome',
    description: 'Atrium check-in, beverage station, and a judgement-free conversation about goals.',
  },
  {
    title: 'Digital Diagnostics',
    description: 'AI-assisted x-rays, CBCT as needed, intraoral photos, and perio charting.',
  },
  {
    title: 'Co-Planning',
    description: 'Dr. Bright reviews findings chairside, similar to the collaborative tone on MiyamotoFamilyDental.com.',
  },
  {
    title: 'Comfort Menu',
    description: 'Laughing gas, weighted blankets, curated playlists, and breaks whenever you need them.',
  },
];

const membershipHighlights = [
  'Free whitening touch-ups when you keep preventive visits on track',
  'Savings on periodontal therapy, nightguards, and Invisalign® maintenance trays',
  'Annual credit toward facial aesthetics or cosmetic upgrades',
];

export default function GeneralDentistry() {
  return (
    <div className="bg-white text-slate-900">
      {/* HERO */}
      <section className="relative isolate overflow-hidden">
        <div
          className="absolute inset-0 bg-cover bg-center"
          style={{ backgroundImage: "url('/images/drbright-patient.jpg')" }}
        />
        <div className="absolute inset-0 bg-slate-900/70" />
        <div className="relative mx-auto flex max-w-5xl flex-col gap-8 px-4 py-24 text-white">
          <p className="text-xs uppercase tracking-[0.3em] text-blue-100">General Dentistry</p>
          <h1 className="text-4xl font-semibold leading-tight sm:text-5xl">
            Preventive care inspired by Miyamoto, delivered with Dr. Bright’s calm touch.
          </h1>
          <p className="text-lg text-blue-100">
            Longer appointments, joyful surroundings, and honest education—exactly what you see on drbrightsmiles.com and what we admired on MiyamotoFamilyDental.com.
          </p>
          <div className="flex flex-col gap-4 sm:flex-row">
            <Link
              href="/contact"
              className="inline-flex items-center justify-center rounded-full bg-blue-500 px-8 py-3 font-semibold text-white transition hover:bg-blue-400"
            >
              Reserve a preventive visit
              <ArrowRight className="ml-2 h-5 w-5" />
            </Link>
            <Link
              href="tel:(303) 377-7744"
              className="inline-flex items-center justify-center rounded-full border border-white/70 px-8 py-3 font-semibold text-white transition hover:bg-white/10"
            >
              Call (303) 377-7744
            </Link>
          </div>
        </div>
      </section>

      {/* PREVENTIVE PILLARS */}
      <section className="bg-slate-50 py-20">
        <div className="mx-auto max-w-6xl px-4">
          <div className="mb-12 text-center">
            <p className="text-xs uppercase tracking-[0.3em] text-blue-600">Cleanings & Prevention</p>
            <h2 className="mt-3 text-3xl font-semibold">Everything you loved on Miyamoto’s page—now localized for Denver.</h2>
          </div>
          <div className="grid gap-6 md:grid-cols-2">
            {preventivePillars.map((pillar) => (
              <div key={pillar.title} className="rounded-3xl border border-slate-100 bg-white p-6 shadow-sm">
                <h3 className="text-xl font-semibold text-slate-900">{pillar.title}</h3>
                <p className="mt-3 text-slate-600">{pillar.copy}</p>
                <ul className="mt-4 space-y-2 text-sm text-slate-600">
                  {pillar.points.map((point) => (
                    <li key={point} className="flex items-center gap-2">
                      <CheckCircle2 className="h-4 w-4 text-blue-500" />
                      {point}
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* EXPERIENCE SECTION */}
      <section className="py-20">
        <div className="mx-auto grid max-w-6xl gap-12 px-4 lg:grid-cols-2 lg:items-center">
          <div className="relative min-h-[360px] overflow-hidden rounded-3xl shadow-xl">
            <Image
              src="/images/drbright-lobby.jpg"
              alt="Joyful atrium inside Cherry Creek South Dental"
              fill
              className="object-cover"
              sizes="(min-width: 1024px) 520px, 100vw"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-slate-900/70 via-slate-900/0" />
            <div className="absolute bottom-8 left-8 right-8 space-y-2 text-white">
              <p className="text-xs uppercase tracking-[0.3em] text-blue-200">As seen on drbrightsmiles.com</p>
              <p className="text-2xl font-semibold">Atrium calm + concierge-level time</p>
            </div>
          </div>
          <div className="space-y-6">
            <p className="text-xs uppercase tracking-[0.3em] text-blue-600">First visit flow</p>
            <h2 className="text-3xl font-semibold">What your general dentistry visit feels like</h2>
            <div className="space-y-4">
              {visitTimeline.map((step) => (
                <div key={step.title} className="rounded-2xl border border-slate-100 p-5 shadow-sm">
                  <p className="text-sm uppercase tracking-[0.2em] text-blue-500">{step.title}</p>
                  <p className="mt-2 text-slate-700">{step.description}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* MEMBERSHIP + CTA */}
      <section className="bg-[#0d1b2a] py-20 text-white">
        <div className="mx-auto max-w-5xl px-4 text-center">
          <p className="text-xs uppercase tracking-[0.3em] text-blue-200">Cherry Creek South Dental Membership</p>
          <h2 className="mt-3 text-3xl font-semibold">Keep cleanings on track, unlock cosmetic + tech perks</h2>
          <ul className="mx-auto mt-8 max-w-3xl space-y-3 text-left text-sm text-blue-100">
            {membershipHighlights.map((perk) => (
              <li key={perk} className="flex items-start gap-3">
                <CheckCircle2 className="mt-1 h-4 w-4 text-blue-400" />
                <span>{perk}</span>
              </li>
            ))}
          </ul>
          <div className="mt-10 flex flex-col gap-4 sm:flex-row sm:justify-center">
            <a
              href="sms:(720) 864-1333"
              className="inline-flex items-center justify-center rounded-full bg-white px-8 py-3 font-semibold text-blue-600 transition hover:bg-blue-50"
            >
              Text (720) 864-1333
            </a>
            <a
              href="/membership"
              className="inline-flex items-center justify-center rounded-full border border-white px-8 py-3 font-semibold text-white transition hover:bg-white/10"
            >
              View membership details
            </a>
          </div>
        </div>
      </section>
    </div>
  );
}
