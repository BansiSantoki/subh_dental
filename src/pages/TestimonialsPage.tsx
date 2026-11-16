import React, { useState } from 'react';
import { Quote, MessageSquareQuote, CheckCircle, Calendar, ArrowRight, Heart } from 'lucide-react';
import { SEOHead } from '../components/shared/SEOHead';
import { Breadcrumbs } from '../components/shared/Breadcrumbs';
import { siteConfig } from '../data/siteConfig';
import { testimonials } from '../data/testimonials';
import { buttonClass } from '../utils/buttonStyles';
import { useAppointment } from '../contexts/AppointmentContext';

export function TestimonialsPage() {
  const { openAppointment } = useAppointment();
  const [selectedFilter, setSelectedFilter] = useState<string>('All');

  const categories = ['All', 'Preventive Care', 'Smile Consultation', 'Restorative Care'];

  const filteredTestimonials =
    selectedFilter === 'All'
      ? testimonials
      : testimonials.filter((t) => t.treatment === selectedFilter);

  return (
    <>
      <SEOHead
        title={`Patient Experiences & Feedback | ${siteConfig.name}`}
        description="Read authentic experiences and feedback from patients treated at Dr. Naik's Shubh Smile Multispeciality Dental Clinic in Nashik."
        path="/testimonials"
      />

      <div className="bg-[#F2F8FC] pt-28 pb-16 md:pt-36 md:pb-24">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 md:px-8 lg:px-12">
          <Breadcrumbs items={[{ label: 'Home', href: '/' }, { label: 'Testimonials' }]} />

          {/* Page Header */}
          <div className="mt-6 max-w-3xl">
            <span className="inline-flex items-center gap-2 rounded-full bg-white px-3.5 py-1 text-xs font-semibold text-[#087FAE] border border-[#087FAE]/20 shadow-2xs">
              <MessageSquareQuote className="h-3.5 w-3.5" />
              Patient Experiences
            </span>
            <h1 className="mt-4 font-serif text-3xl sm:text-4xl lg:text-[44px] font-bold tracking-tight text-[#123B59] leading-tight">
              Real stories from patients who <span className="text-[#087FAE]">trust our care.</span>
            </h1>
            <p className="mt-4 text-base sm:text-lg leading-relaxed text-[#34465A]">
              We believe authentic feedback speaks for itself. Read how our gentle chairside manners, transparent communication, and meticulous clinical approach make dental visits reassuring for families across Nashik.
            </p>
          </div>

          {/* Category Filter Pills */}
          <div className="mt-10 flex flex-wrap gap-2 border-b border-[#E2EAF0] pb-5">
            {categories.map((cat) => (
              <button
                key={cat}
                type="button"
                onClick={() => setSelectedFilter(cat)}
                className={`rounded-full px-4 py-2 text-xs sm:text-sm font-semibold transition-all duration-200 cursor-pointer ${
                  selectedFilter === cat
                    ? 'bg-[#087FAE] text-white shadow-sm'
                    : 'bg-white text-[#123B59] border border-[#E2EAF0] hover:border-[#087FAE] hover:text-[#087FAE]'
                }`}
              >
                {cat}
              </button>
            ))}
          </div>

          {/* Testimonial Cards Grid */}
          <div className="mt-8 grid gap-6 md:grid-cols-2 lg:grid-cols-3">
            {filteredTestimonials.map((t) => (
              <article
                key={t.id}
                className="flex flex-col justify-between rounded-3xl border border-[#E2EAF0] bg-white p-7 sm:p-8 shadow-sm transition-all duration-200 hover:-translate-y-1 hover:border-[#087FAE]/30 hover:shadow-md"
              >
                <div>
                  <Quote className="h-8 w-8 text-[#DCEFF8] mb-4" />
                  <p className="font-serif text-base sm:text-lg leading-relaxed text-[#123B59]">
                    “{t.quote}”
                  </p>
                </div>

                <div className="mt-6 border-t border-[#E2EAF0] pt-4">
                  <div className="flex items-center justify-between">
                    <div>
                      <p className="font-bold text-[#123B59] text-sm">{t.name}</p>
                      <p className="text-xs text-[#34465A]/70">{t.date}</p>
                    </div>
                    {t.treatment && (
                      <span className="rounded-full bg-[#F2F8FC] border border-[#E2EAF0] px-3 py-1 text-xs font-semibold text-[#087FAE]">
                        {t.treatment}
                      </span>
                    )}
                  </div>
                </div>
              </article>
            ))}
          </div>

          {/* Share Your Experience Invitation */}
          <div className="mt-16 rounded-3xl bg-white p-8 sm:p-12 border border-[#E2EAF0] shadow-sm text-center max-w-3xl mx-auto">
            <div className="flex h-12 w-12 items-center justify-center rounded-2xl bg-[#DCEFF8] text-[#087FAE] mx-auto shadow-2xs">
              <Heart className="h-6 w-6" />
            </div>
            <h3 className="mt-4 font-serif text-2xl font-bold text-[#123B59]">
              Visited Dr. Naik's Shubh Smile Dental Clinic?
            </h3>
            <p className="mt-2 text-sm sm:text-base text-[#34465A]/80 leading-relaxed max-w-lg mx-auto">
              Your feedback helps us continuously improve our patient experience. Leave us a review on Google Maps or share your experience directly with our team.
            </p>
            <div className="mt-6 flex flex-wrap justify-center gap-3">
              <a
                href={siteConfig.googleMapsUrl}
                target="_blank"
                rel="noopener noreferrer"
                className={buttonClass('primary', 'md', 'shadow-xs')}
              >
                Review Us on Google Maps
              </a>
              <button
                type="button"
                onClick={() => openAppointment()}
                className={buttonClass('secondary', 'md')}
              >
                Schedule Next Visit
              </button>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
