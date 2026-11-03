import React, { useState } from 'react';
import { Star, MessageSquareQuote, CheckCircle, Calendar, ThumbsUp, ArrowRight } from 'lucide-react';
import { SEOHead } from '../components/shared/SEOHead';
import { Breadcrumbs } from '../components/shared/Breadcrumbs';
import { siteConfig } from '../data/siteConfig';
import { testimonials } from '../data/testimonials';
import { buttonClass } from '../utils/buttonStyles';
import { useAppointment } from '../contexts/AppointmentContext';

export function TestimonialsPage() {
  const { openAppointment } = useAppointment();
  const [selectedFilter, setSelectedFilter] = useState<string>('All');

  const categories = ['All', 'Dental Implants', 'Clear Aligners & Orthodontics', 'Painless Root Canal', 'Pediatric & Preventive Care'];

  const filteredTestimonials = selectedFilter === 'All'
    ? testimonials
    : testimonials.filter((t) => t.treatment === selectedFilter);

  return (
    <>
      <SEOHead
        title={`Patient Reviews & Testimonials | ${siteConfig.name}`}
        description="Read genuine patient reviews and smile transformation stories from patients at Dr. Naik\'s Shubh Smile Multispeciality Dental Clinic in Nashik."
        path="/testimonials"
      />

      <div className="bg-slate-50/50 pt-24 pb-16">
        <div className="mx-auto max-w-7xl px-5 sm:px-8 lg:px-12">
          <Breadcrumbs items={[{ label: 'Testimonials', href: '/testimonials' }]} />

          {/* Page Header */}
          <div className="mt-6 max-w-3xl">
            <span className="inline-flex items-center gap-2 rounded-full bg-sky-50 px-3.5 py-1 text-xs font-semibold text-primary-700 border border-sky-100">
              <Star className="h-3.5 w-3.5 fill-amber-400 text-amber-400" />
              Patient Experiences
            </span>
            <h1 className="mt-4 text-3xl font-bold tracking-tight text-slate-900 sm:text-4xl lg:text-5xl">
              Real stories from patients who <span className="text-primary-600">trust our care.</span>
            </h1>
            <p className="mt-4 text-base sm:text-lg leading-relaxed text-slate-600">
              Nothing speaks louder than the words of our patients. Read how our gentle approach, transparent advice, and skilled treatments have helped families across Nashik smile with confidence.
            </p>
          </div>

          {/* Trust Highlights Metric Bar */}
          <div className="mt-10 grid grid-cols-2 gap-4 rounded-2xl bg-white p-6 sm:p-8 border border-slate-200/80 shadow-sm sm:grid-cols-4">
            <div className="border-r border-slate-100 last:border-0 pr-4">
              <div className="flex items-center gap-1 text-amber-400">
                {[...Array(5)].map((_, i) => (
                  <Star key={i} className="h-4 w-4 fill-amber-400" />
                ))}
              </div>
              <p className="mt-2 text-2xl sm:text-3xl font-extrabold text-slate-900">4.9 / 5</p>
              <p className="text-xs font-medium text-slate-500">Average Patient Rating</p>
            </div>

            <div className="border-r border-slate-100 last:border-0 sm:pl-4 pr-4">
              <p className="text-2xl sm:text-3xl font-extrabold text-primary-600">1,200+</p>
              <p className="mt-1 text-xs font-medium text-slate-500">Smiles Restored</p>
              <p className="text-[11px] text-slate-400">Across Nashik & Region</p>
            </div>

            <div className="border-r border-slate-100 last:border-0 sm:pl-4 pr-4">
              <p className="text-2xl sm:text-3xl font-extrabold text-secondary-600">99%</p>
              <p className="mt-1 text-xs font-medium text-slate-500">Painless Care Score</p>
              <p className="text-[11px] text-slate-400">Gentle numbing & care</p>
            </div>

            <div className="sm:pl-4">
              <p className="text-2xl sm:text-3xl font-extrabold text-slate-900">10+ Yrs</p>
              <p className="mt-1 text-xs font-medium text-slate-500">Clinical Excellence</p>
              <p className="text-[11px] text-slate-400">Trusted Dental Team</p>
            </div>
          </div>

          {/* Category Filter Tabs */}
          <div className="mt-10 flex flex-wrap gap-2 border-b border-slate-200/80 pb-4">
            {categories.map((cat) => (
              <button
                key={cat}
                type="button"
                onClick={() => setSelectedFilter(cat)}
                className={`rounded-xl px-4 py-2 text-xs sm:text-sm font-semibold transition-all ${
                  selectedFilter === cat
                    ? 'bg-primary-600 text-white shadow-sm'
                    : 'bg-white text-slate-600 border border-slate-200 hover:border-primary-400 hover:text-primary-600'
                }`}
              >
                {cat}
              </button>
            ))}
          </div>

          {/* Testimonials Cards Grid */}
          <div className="mt-8 grid gap-6 sm:grid-cols-2">
            {filteredTestimonials.map((t) => (
              <div
                key={t.id}
                className="flex flex-col justify-between rounded-2xl border border-slate-200/80 bg-white p-6 sm:p-8 shadow-sm transition-all hover:border-primary-300 hover:shadow-md"
              >
                <div>
                  <div className="flex items-center justify-between">
                    <div className="flex text-amber-400">
                      {[...Array(5)].map((_, i) => (
                        <Star key={i} className="h-4 w-4 fill-amber-400" />
                      ))}
                    </div>
                    <span className="text-xs text-slate-400">{t.date}</span>
                  </div>

                  <span className="mt-3 inline-block rounded-md bg-sky-50 px-2.5 py-1 text-xs font-semibold text-primary-700 border border-sky-100">
                    {t.treatment}
                  </span>

                  <p className="mt-4 text-sm sm:text-base leading-relaxed text-slate-700 italic">
                    "{t.quote}"
                  </p>
                </div>

                <div className="mt-6 flex items-center gap-3 pt-4 border-t border-slate-100">
                  <div className="flex h-10 w-10 items-center justify-center rounded-full bg-gradient-to-br from-primary-600 to-sky-700 text-sm font-bold text-white">
                    {t.name.charAt(0)}
                  </div>
                  <div>
                    <p className="text-sm font-bold text-slate-900">{t.name}</p>
                    <p className="flex items-center gap-1 text-xs text-emerald-600 font-medium">
                      <CheckCircle className="h-3.5 w-3.5" /> Verified Patient Review
                    </p>
                  </div>
                </div>
              </div>
            ))}
          </div>

          {/* Review Submission Notice & CTA */}
          <div className="mt-16 rounded-2xl bg-gradient-to-br from-sky-50 to-slate-100 p-8 sm:p-12 border border-sky-100 text-center">
            <h3 className="text-xl sm:text-2xl font-bold text-slate-900">Are you a patient of Dr. Naik\'s Shubh Smile Multispeciality Dental Clinic?</h3>
            <p className="mx-auto mt-2 max-w-lg text-sm text-slate-600">
              We value your feedback immensely. Your review helps us continually elevate our clinical care and helps other patients make confident decisions.
            </p>
            <div className="mt-6 flex flex-col sm:flex-row justify-center gap-3">
              <button
                type="button"
                onClick={() => openAppointment()}
                className={buttonClass('primary', 'md')}
              >
                <Calendar className="mr-2 h-4 w-4" />
                Book Your Consultation
              </button>
              <a
                href="https://www.google.com/search?q=Shubh+Smile+Dental+Clinic+Nashik"
                target="_blank"
                rel="noopener noreferrer"
                className={buttonClass('secondary', 'md')}
              >
                <ThumbsUp className="mr-2 h-4 w-4 text-primary-600" />
                Review Us on Google
              </a>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
