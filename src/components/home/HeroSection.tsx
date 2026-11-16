import React from 'react';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import {
  CalendarCheckIcon,
  SparklesIcon,
  PhoneCallIcon,
  ArrowRightIcon,
  ShieldCheckIcon,
  MapPinIcon,
  HeartPulseIcon,
  CheckCircle2Icon
} from 'lucide-react';
import { useAppointment } from '../../contexts/AppointmentContext';
import { buttonClass } from '../../utils/buttonStyles';
import { images } from '../../data/images';
import { siteConfig } from '../../data/siteConfig';

const ease = [0.23, 1, 0.32, 1] as const;
const item = {
  hidden: { opacity: 0, y: 20 },
  show: (i: number) => ({
    opacity: 1,
    y: 0,
    transition: { duration: 0.55, ease, delay: 0.07 * i }
  })
};

const trustHighlights = [
  'Personalized Treatment Plans',
  'Gentle & Painless Dentistry',
  'Hospital-Grade Sterilization'
];

export function HeroSection() {
  const { openAppointment } = useAppointment();

  return (
    <section
      aria-labelledby="hero-title"
      className="relative overflow-hidden bg-gradient-to-b from-[#F2F8FC] via-white to-white pt-24 pb-16 md:pt-32 md:pb-24 lg:pt-36 lg:pb-28"
    >
      {/* Subtle architectural background accents */}
      <div
        className="pointer-events-none absolute -top-40 right-0 h-[520px] w-[520px] rounded-full bg-[#DCEFF8]/40 blur-3xl"
        aria-hidden="true"
      />
      <div
        className="pointer-events-none absolute top-1/2 left-0 h-[380px] w-[380px] -translate-x-1/2 rounded-full bg-[#087FAE]/5 blur-3xl"
        aria-hidden="true"
      />

      <div className="relative mx-auto max-w-[1440px] px-4 sm:px-6 md:px-8 lg:px-12">
        <div className="grid items-center gap-12 lg:grid-cols-12 lg:gap-14 xl:gap-16">
          {/* Left Column: Headline, Copy, CTAs, Badges */}
          <div className="lg:col-span-7 xl:col-span-6">
            {/* Pill Eyebrow */}
            <motion.div
              variants={item}
              initial="hidden"
              animate="show"
              custom={0}
              className="inline-flex items-center gap-2 rounded-full border border-[#087FAE]/20 bg-white px-4 py-1.5 shadow-sm"
            >
              <SparklesIcon className="h-4 w-4 text-[#087FAE]" aria-hidden="true" />
              <span className="text-[12px] sm:text-[13px] font-semibold tracking-wide text-[#123B59]">
                Dr. Naik's Shubh Smile · Nashik, Maharashtra
              </span>
            </motion.div>

            {/* Main Headline */}
            <motion.h1
              id="hero-title"
              variants={item}
              initial="hidden"
              animate="show"
              custom={1}
              className="mt-6 font-serif text-4xl font-semibold leading-[1.08] tracking-[-0.015em] text-[#123B59] sm:text-5xl md:text-6xl lg:text-[58px] xl:text-[64px]"
            >
              Your Smile Deserves{' '}
              <span className="relative inline-block text-[#087FAE]">
                Exceptional Care.
                <svg
                  className="absolute -bottom-2 left-0 w-full text-[#DCEFF8]"
                  viewBox="0 0 260 12"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                  aria-hidden="true"
                >
                  <path
                    d="M3 9C60 3 190 2 257 9"
                    stroke="currentColor"
                    strokeWidth="6"
                    strokeLinecap="round"
                  />
                </svg>
              </span>
            </motion.h1>

            {/* Supporting Description */}
            <motion.p
              variants={item}
              initial="hidden"
              animate="show"
              custom={2}
              className="mt-6 max-w-xl text-base sm:text-lg leading-relaxed text-[#34465A]"
            >
              Experience personalised dental care, modern treatments, and a comfortable approach to
              healthier, more confident smiles. Unhurried consultations tailored around you.
            </motion.p>

            {/* Primary Action Buttons (Book Appointment, Explore Services, Contact Us) */}
            <motion.div
              variants={item}
              initial="hidden"
              animate="show"
              custom={3}
              className="mt-8 flex flex-wrap items-center gap-3 sm:gap-4"
            >
              <button
                type="button"
                onClick={() => openAppointment()}
                className={buttonClass('primary', 'lg', 'shadow-md')}
              >
                <CalendarCheckIcon className="h-5 w-5" />
                <span>Book Appointment</span>
              </button>

              <Link to="/services" className={buttonClass('secondary', 'lg')}>
                <span>Explore Our Services</span>
                <ArrowRightIcon className="h-4 w-4" />
              </Link>

              <Link
                to="/contact"
                className="inline-flex items-center gap-2 rounded-full px-5 py-3.5 text-[14px] font-semibold text-[#123B59] hover:text-[#087FAE] hover:bg-[#F2F8FC] transition-colors duration-200"
              >
                <PhoneCallIcon className="h-4 w-4 text-[#087FAE]" />
                <span>Contact Us</span>
              </Link>
            </motion.div>

            {/* Trust Highlights Checklist */}
            <motion.ul
              variants={item}
              initial="hidden"
              animate="show"
              custom={4}
              className="mt-10 flex flex-wrap items-center gap-y-2.5 gap-x-6 border-t border-[#E2EAF0] pt-6 text-xs sm:text-sm font-medium text-[#123B59]"
              aria-label="Clinical Highlights"
            >
              {trustHighlights.map((highlight) => (
                <li key={highlight} className="flex items-center gap-2">
                  <CheckCircle2Icon className="h-4 w-4 shrink-0 text-[#087FAE]" aria-hidden="true" />
                  <span>{highlight}</span>
                </li>
              ))}
            </motion.ul>
          </div>

          {/* Right Column: Genuine Dental Photography & Overlay Highlights */}
          <div className="relative lg:col-span-5 xl:col-span-6">
            <motion.div
              initial={{ opacity: 0, scale: 0.96, y: 20 }}
              animate={{ opacity: 1, scale: 1, y: 0 }}
              transition={{ duration: 0.75, ease }}
              className="relative mx-auto max-w-[540px] lg:max-w-none"
            >
              {/* Outer decorative card frame */}
              <div className="relative aspect-[4/3] sm:aspect-[14/11] lg:aspect-[5/4] overflow-hidden rounded-[32px] border-4 border-white bg-slate-100 shadow-[0_25px_60px_-15px_rgba(8,127,174,0.22)]">
                <img
                  src={images.heroDental}
                  alt="Modern, high-tech dental operatory suite with ergonomic patient dental chair at Dr. Naik's Shubh Smile Multispeciality Dental Clinic"
                  className="h-full w-full object-cover transition-transform duration-700 hover:scale-105"
                  loading="eager"
                  width={1400}
                  height={1120}
                />
                <div className="absolute inset-0 bg-gradient-to-t from-[#123B59]/40 via-transparent to-transparent" />
              </div>

              {/* Floating Verified Clinic Badge */}
              <motion.div
                initial={{ opacity: 0, x: -20, y: 20 }}
                animate={{ opacity: 1, x: 0, y: 0 }}
                transition={{ duration: 0.6, delay: 0.25 }}
                className="absolute -bottom-6 -left-3 sm:-left-6 max-w-[270px] rounded-2xl border border-[#E2EAF0] bg-white p-4 shadow-[0_15px_35px_-10px_rgba(18,59,89,0.18)]"
              >
                <div className="flex items-center gap-3">
                  <div className="flex h-11 w-11 shrink-0 items-center justify-center rounded-xl bg-[#F2F8FC] text-[#087FAE]">
                    <ShieldCheckIcon className="h-6 w-6" />
                  </div>
                  <div>
                    <p className="text-xs font-bold text-[#123B59]">Hospital-Grade Hygiene</p>
                    <p className="text-[11px] text-[#34465A]/80">Autoclaved & 100% Sterile</p>
                  </div>
                </div>
              </motion.div>

              {/* Floating Nashik Location Badge */}
              <motion.div
                initial={{ opacity: 0, x: 20, y: -20 }}
                animate={{ opacity: 1, x: 0, y: 0 }}
                transition={{ duration: 0.6, delay: 0.35 }}
                className="absolute -top-5 -right-2 sm:-right-4 max-w-[240px] rounded-2xl border border-[#E2EAF0] bg-white/95 p-3.5 shadow-[0_12px_30px_-10px_rgba(18,59,89,0.15)] backdrop-blur"
              >
                <div className="flex items-center gap-2.5">
                  <MapPinIcon className="h-4 w-4 shrink-0 text-[#087FAE]" />
                  <p className="text-xs font-semibold text-[#123B59] leading-tight">
                    Shastri Nagar, Indira Nagar, Nashik
                  </p>
                </div>
              </motion.div>
            </motion.div>
          </div>
        </div>
      </div>
    </section>
  );
}
