import React from 'react';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import { ArrowRightIcon } from 'lucide-react';
import { HeroSculpture } from './HeroSculpture';
import { useAppointment } from '../../contexts/AppointmentContext';
import { buttonClass } from '../../utils/buttonStyles';

const ease = [0.23, 1, 0.32, 1] as const;
const item = {
  hidden: { opacity: 0, y: 22 },
  show: (i: number) => ({ opacity: 1, y: 0, transition: { duration: 0.6, ease, delay: 0.08 * i } })
};

const trust = ['Personalized Care', 'Modern Dentistry', 'A Smile-First Approach'];

export function HeroSection() {
  const { openAppointment } = useAppointment();

  return (
    <section aria-labelledby="hero-title" className="relative overflow-hidden bg-ivory pt-[68px] md:pt-[84px]">
      <div className="grain pointer-events-none absolute inset-0" aria-hidden="true" />
      <div className="relative mx-auto grid max-w-[1440px] items-center gap-16 px-5 pb-24 pt-10 md:px-8 lg:min-h-[calc(100svh-84px)] lg:grid-cols-12 lg:gap-6 lg:px-12 lg:pb-28 lg:pt-6">
        <div className="relative z-10 lg:col-span-7 xl:col-span-6">
          <motion.p
            variants={item}
            initial="hidden"
            animate="show"
            custom={0}
            className="flex items-center gap-3 text-[11.5px] font-semibold uppercase tracking-[0.26em] text-forest">
            
            <span className="h-px w-10 bg-champagne" aria-hidden="true" />
            Thoughtful Dental Care in Nashik
          </motion.p>

          <motion.h1
            id="hero-title"
            variants={item}
            initial="hidden"
            animate="show"
            custom={1}
            className="mt-7 font-serif text-[54px] font-medium leading-[0.94] tracking-[-0.02em] text-charcoal sm:text-[76px] lg:text-[88px] xl:text-[104px]">
            
            Your Smile Deserves <em className="font-normal italic text-forest">Exceptional</em> Care.
          </motion.h1>

          <motion.p
            variants={item}
            initial="hidden"
            animate="show"
            custom={2}
            className="mt-8 max-w-[520px] text-pretty text-[17px] leading-[1.75] text-charcoal/70 md:text-[18px]">
            
            Discover a more comfortable dental experience with personalized care, modern techniques, and a team that
            puts your well-being first.
          </motion.p>

          <motion.div
            variants={item}
            initial="hidden"
            animate="show"
            custom={3}
            className="mt-10 flex flex-col gap-3 sm:flex-row sm:items-center">
            
            <button type="button" onClick={() => openAppointment()} className={buttonClass('primary', 'lg')}>
              Book Your Consultation
              <ArrowRightIcon className="h-4 w-4 transition-transform duration-200 ease-silk group-hover/btn:translate-x-0.5" aria-hidden="true" />
            </button>
            <Link to="/#services" className={buttonClass('secondary', 'lg')}>
              Explore Our Treatments
            </Link>
          </motion.div>

          <motion.ul
            variants={item}
            initial="hidden"
            animate="show"
            custom={4}
            className="mt-12 flex flex-wrap items-center gap-x-4 gap-y-2 border-t border-charcoal/10 pt-6 text-[13.5px] font-medium text-charcoal/70"
            aria-label="Our approach">
            
            {trust.map((t, i) =>
            <li key={t} className="flex items-center gap-4">
                {i > 0 && <span className="h-1 w-1 rounded-full bg-champagne" aria-hidden="true" />}
                {t}
              </li>
            )}
          </motion.ul>
        </div>

        <div className="relative lg:col-span-5 xl:col-span-6">
          <HeroSculpture />
        </div>
      </div>

      <a
        href="#about"
        className="absolute bottom-6 left-1/2 hidden -translate-x-1/2 flex-col items-center gap-3 text-[10.5px] font-semibold uppercase tracking-[0.3em] text-charcoal/50 transition-colors duration-200 hover:text-forest lg:flex"
        aria-label="Scroll to learn more about us">
        
        Scroll
        <span className="relative h-12 w-px overflow-hidden bg-charcoal/10" aria-hidden="true">
          <span className="absolute inset-0 bg-forest motion-safe:animate-scrollcue" />
        </span>
      </a>
    </section>);

}