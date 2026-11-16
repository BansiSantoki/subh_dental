import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import {
  Star,
  Quote,
  CheckCircle2,
  ArrowRight,
  ArrowLeft,
  CalendarCheck,
  ShieldCheck,
  Sparkles
} from 'lucide-react';
import { SectionHeading } from '../shared/SectionHeading';
import { Reveal } from '../shared/Reveal';
import { testimonials } from '../../data/testimonials';
import type { Testimonial } from '../../types/content';
import { siteConfig } from '../../data/siteConfig';
import { useAppointment } from '../../contexts/AppointmentContext';
import { buttonClass } from '../../utils/buttonStyles';

function TestimonialCard({ testimonial }: { testimonial: Testimonial }) {
  const initials = testimonial.name
    .split(' ')
    .slice(0, 2)
    .map((name) => name[0])
    .join('')
    .toUpperCase();

  return (
    <article className="group relative flex h-full flex-col justify-between rounded-3xl border border-[#E2EAF0] bg-white p-5 shadow-xs transition-all duration-300 hover:border-[#087FAE]/35 hover:shadow-lg sm:p-8 md:hover:-translate-y-1">
      <div>
        <div className="flex items-center justify-between">
          <div className="flex gap-1 text-amber-400">
            {[...Array(5)].map((_, i) => (
              <Star key={i} className="h-4 w-4 fill-amber-400" />
            ))}
          </div>
          <Quote className="h-7 w-7 text-[#DCEFF8] transition-colors group-hover:text-[#087FAE]/40" />
        </div>
        <p className="mt-4 font-serif text-base leading-relaxed text-[#123B59] sm:mt-5 sm:text-lg">
          “{testimonial.quote}”
        </p>
      </div>

      <div className="mt-6 border-t border-[#E2EAF0] pt-4 sm:mt-8 sm:pt-5">
        <div className="flex items-center justify-between gap-3">
          <div className="flex min-w-0 items-center gap-3">
            <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-full bg-[#EAF4FA] text-xs font-bold text-[#087FAE]">
              {initials}
            </div>
            <div className="min-w-0">
              <p className="truncate text-sm font-bold leading-tight text-[#123B59]">
                {testimonial.name}
              </p>
              <p className="mt-0.5 flex items-center gap-1 text-xs text-[#34465A]/80">
                <CheckCircle2 className="h-3 w-3 shrink-0 text-[#087FAE]" />
                <span className="truncate">{testimonial.date || 'Nashik'}</span>
              </p>
            </div>
          </div>

          {testimonial.treatment && (
            <span className="max-w-[45%] truncate rounded-full border border-[#E2EAF0] bg-[#F2F8FC] px-2.5 py-1 text-[11px] font-semibold text-[#087FAE]">
              {testimonial.treatment}
            </span>
          )}
        </div>
      </div>
    </article>
  );
}

export function TestimonialsSection() {
  const { openAppointment } = useAppointment();
  const [currentPage, setCurrentPage] = useState(0);

  const pageSize = 3;
  const totalPages = Math.ceil(testimonials.length / pageSize);
  const displayedTestimonials = testimonials.slice(
    currentPage * pageSize,
    (currentPage + 1) * pageSize
  );

  return (
    <section
      id="testimonials"
      aria-labelledby="testimonials-title"
      className="relative overflow-hidden bg-gradient-to-b from-white via-[#F4F9FC] to-white py-10 sm:py-12 md:py-14 lg:py-16"
    >
      <div className="mx-auto max-w-[1440px] px-4 sm:px-6 md:px-8 lg:px-12">
        <SectionHeading
          id="testimonials-title"
          eyebrow="Patient Experiences"
          title="Kind Words, Genuine Experiences."
          intro="Read honest stories from patients across Nashik who trust Dr. Naik's Shubh Smile Multispeciality Dental Clinic for gentle, transparent, and comprehensive dental care."
          align="center"
        />

        {/* Clinical Trust Strip */}
        <Reveal delay={0.05}>
          <div className="mt-5 flex flex-wrap items-center justify-center gap-2 sm:mt-8 sm:gap-6 text-xs sm:text-sm font-semibold text-[#123B59]">
            <div className="hidden items-center gap-1.5 rounded-full border border-[#E2EAF0] bg-white px-3.5 py-1.5 shadow-2xs sm:inline-flex">
              <div className="flex text-amber-400">
                {[...Array(5)].map((_, i) => (
                  <Star key={i} className="h-3.5 w-3.5 fill-amber-400" />
                ))}
              </div>
              <span className="text-[#123B59]">5.0 ★ Rated Patient Care</span>
            </div>

            <div className="hidden items-center gap-1.5 rounded-full border border-[#E2EAF0] bg-white px-3.5 py-1.5 shadow-2xs sm:inline-flex">
              <ShieldCheck className="h-4 w-4 text-[#087FAE]" />
              <span className="text-[#34465A]">Hospital-Grade Autoclave Sterilization</span>
            </div>

            <div className="inline-flex items-center gap-1.5 rounded-full bg-white px-3.5 py-1.5 border border-[#E2EAF0] shadow-2xs">
              <Sparkles className="h-4 w-4 text-[#087FAE]" />
              <span className="text-[#34465A]">Gentle & Pain-Managed Dentistry</span>
            </div>
          </div>
        </Reveal>

        {/* Swipeable cards on phones */}
        <Reveal delay={0.15}>
          <div
            role="region"
            aria-label="Patient testimonials"
            tabIndex={0}
            className="no-scrollbar mt-6 flex snap-x snap-mandatory gap-4 overflow-x-auto overscroll-x-contain pb-3 [scrollbar-width:none] [&>*]:w-[88%] [&>*]:max-w-[360px] [&>*]:shrink-0 [&>*]:snap-start sm:mt-12 sm:gap-8 sm:[&>*]:w-[75%] md:hidden"
          >
            {testimonials.map((testimonial) => (
              <TestimonialCard key={testimonial.id} testimonial={testimonial} />
            ))}
          </div>

          {/* Paginated grid on tablets and larger screens */}
          <div className="mt-12 hidden gap-6 sm:gap-8 md:grid md:grid-cols-2 lg:grid-cols-3">
            {displayedTestimonials.map((testimonial) => (
              <TestimonialCard key={testimonial.id} testimonial={testimonial} />
            ))}
          </div>
        </Reveal>

        {/* Pagination & Next/Prev Controls */}
        {totalPages > 1 && (
          <Reveal delay={0.2} className="hidden md:block">
            <div className="mt-10 flex items-center justify-center gap-4">
              <button
                type="button"
                onClick={() => setCurrentPage((p) => Math.max(0, p - 1))}
                disabled={currentPage === 0}
                aria-label="Previous testimonials"
                className={`flex h-10 w-10 items-center justify-center rounded-full border transition-all ${
                  currentPage === 0
                    ? 'border-[#E2EAF0] bg-white text-gray-300 cursor-not-allowed'
                    : 'border-[#E2EAF0] bg-white text-[#123B59] hover:border-[#087FAE] hover:bg-[#F2F8FC] hover:text-[#087FAE] cursor-pointer shadow-xs'
                }`}
              >
                <ArrowLeft className="h-4 w-4" />
              </button>

              <div className="flex gap-2">
                {[...Array(totalPages)].map((_, i) => (
                  <button
                    key={i}
                    type="button"
                    onClick={() => setCurrentPage(i)}
                    aria-label={`Go to testimonial page ${i + 1}`}
                    className={`h-2.5 rounded-full transition-all duration-300 ${
                      i === currentPage
                        ? 'w-8 bg-[#087FAE]'
                        : 'w-2.5 bg-[#DCEFF8] hover:bg-[#087FAE]/50'
                    }`}
                  />
                ))}
              </div>

              <button
                type="button"
                onClick={() => setCurrentPage((p) => Math.min(totalPages - 1, p + 1))}
                disabled={currentPage === totalPages - 1}
                aria-label="Next testimonials"
                className={`flex h-10 w-10 items-center justify-center rounded-full border transition-all ${
                  currentPage === totalPages - 1
                    ? 'border-[#E2EAF0] bg-white text-gray-300 cursor-not-allowed'
                    : 'border-[#E2EAF0] bg-white text-[#123B59] hover:border-[#087FAE] hover:bg-[#F2F8FC] hover:text-[#087FAE] cursor-pointer shadow-xs'
                }`}
              >
                <ArrowRight className="h-4 w-4" />
              </button>
            </div>
          </Reveal>
        )}

        {/* Section CTAs */}
        <Reveal delay={0.25}>
          <div className="mt-8 flex flex-wrap items-center justify-center gap-4 sm:mt-12">
            <Link
              to="/testimonials"
              className={buttonClass(
                'secondary',
                'md',
                'inline-flex items-center gap-2 border border-[#E2EAF0] bg-white hover:border-[#087FAE] text-[#123B59] hover:text-[#087FAE] shadow-2xs font-semibold'
              )}
            >
              <span>Read All Patient Stories</span>
              <ArrowRight className="h-4 w-4" />
            </Link>

            <button
              type="button"
              onClick={() => openAppointment()}
              className={buttonClass(
                'primary',
                'md',
                'inline-flex items-center gap-2 shadow-sm font-semibold'
              )}
            >
              <CalendarCheck className="h-4 w-4" />
              <span>Book Your Consultation</span>
            </button>

            <a
              href={siteConfig.googleMapsUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-1.5 text-xs sm:text-sm font-semibold text-[#087FAE] hover:underline underline-offset-4 py-2 px-3"
            >
              <span>View Reviews on Google Maps &rarr;</span>
            </a>
          </div>
        </Reveal>
      </div>
    </section>
  );
}
