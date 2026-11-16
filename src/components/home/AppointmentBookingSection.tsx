import React from 'react';
import { Link } from 'react-router-dom';
import { CalendarCheckIcon, PhoneCallIcon, MapPinIcon, ClockIcon, ShieldCheckIcon } from 'lucide-react';
import { WhatsAppLink } from '../shared/WhatsAppLink';
import { siteConfig } from '../../data/siteConfig';
import { images } from '../../data/images';
import { useAppointment } from '../../contexts/AppointmentContext';
import { buttonClass } from '../../utils/buttonStyles';

export function AppointmentBookingSection() {
  const { openAppointment } = useAppointment();

  return (
    <section aria-labelledby="cta-title" className="bg-gradient-to-b from-white via-[#F2F8FC] to-[#F2F8FC] py-16 md:py-24">
      <div className="mx-auto max-w-[1440px] px-4 sm:px-6 md:px-8 lg:px-12">
        <div className="overflow-hidden rounded-[32px] border border-[#087FAE]/25 bg-white shadow-[0_20px_60px_-20px_rgba(8,127,174,0.2)]">
          <div className="grid items-center lg:grid-cols-12">
            {/* Left Content */}
            <div className="p-8 sm:p-12 lg:col-span-7">
              <span className="inline-flex items-center gap-2 rounded-full bg-[#DCEFF8] px-3.5 py-1 text-xs font-semibold text-[#087FAE]">
                <ShieldCheckIcon className="h-3.5 w-3.5" />
                <span>Dr. Naik's Shubh Smile · Nashik</span>
              </span>

              {/* Exact Requested Heading */}
              <h2
                id="cta-title"
                className="mt-5 font-serif text-3xl sm:text-4xl lg:text-[44px] font-bold text-[#123B59] leading-[1.12]"
              >
                Ready for a Healthier, More Confident Smile?
              </h2>

              <p className="mt-4 text-base sm:text-lg leading-relaxed text-[#34465A]">
                Whether you need a routine dental check-up, gentle cleaning, single-visit root canal, orthodontic
                aligners, or dental implants, our team is ready to guide you with clinical excellence and warmth.
              </p>

              {/* Exact Requested 3 Action Buttons */}
              <div className="mt-8 flex flex-wrap items-center gap-3.5">
                {/* 1. Book an Appointment */}
                <button
                  type="button"
                  onClick={() => openAppointment()}
                  className={buttonClass('primary', 'lg', 'shadow-md')}
                >
                  <CalendarCheckIcon className="h-5 w-5" />
                  <span>Book an Appointment</span>
                </button>

                {/* 2. Call Our Clinic */}
                <a
                  href={`tel:${siteConfig.phoneE164}`}
                  className={buttonClass('secondary', 'lg')}
                  aria-label={`Call our clinic at ${siteConfig.phoneDisplay}`}
                >
                  <PhoneCallIcon className="h-4 w-4 text-[#087FAE]" />
                  <span>Call Our Clinic</span>
                </a>

                {/* 3. WhatsApp Us */}
                <WhatsAppLink size="lg">
                  WhatsApp Us
                </WhatsAppLink>
              </div>

              {/* Quick Info Bar */}
              <div className="mt-10 grid gap-3 border-t border-[#E2EAF0] pt-6 sm:grid-cols-2 text-xs text-[#34465A]/85">
                <div className="flex items-center gap-2">
                  <MapPinIcon className="h-4 w-4 shrink-0 text-[#087FAE]" />
                  <span>Sundaram Appt, Indira Nagar, Nashik</span>
                </div>
                <div className="flex items-center gap-2">
                  <ClockIcon className="h-4 w-4 shrink-0 text-[#087FAE]" />
                  <span>Mon – Sat: 9:30 AM – 8:30 PM</span>
                </div>
              </div>
            </div>

            {/* Right Image */}
            <div className="relative h-full min-h-[320px] lg:col-span-5 bg-slate-100">
              <img
                src={images.dentistAtWork}
                alt="Indian dentist providing gentle patient care at Dr. Naik's Shubh Smile Multispeciality Dental Clinic"
                className="h-full w-full object-cover object-top"
                loading="lazy"
                width={800}
                height={700}
              />
              <div className="absolute inset-0 bg-gradient-to-t from-[#123B59]/40 via-transparent to-transparent lg:hidden" />
              <div className="absolute bottom-4 left-4 right-4 text-white lg:hidden">
                <p className="text-sm font-bold">Dr. Naik's Shubh Smile Dental Clinic</p>
                <p className="text-xs text-white/90">Comfort-first multispeciality care</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
