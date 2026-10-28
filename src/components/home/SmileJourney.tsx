import React from 'react';
import { motion } from 'framer-motion';
import { Reveal } from '../shared/Reveal';
import { SectionHeading } from '../shared/SectionHeading';
import { journeySteps } from '../../data/homeSections';

const ease = [0.23, 1, 0.32, 1] as const;

export function SmileJourney() {
  return (
    <section id="journey" aria-labelledby="journey-title" className="px-3 md:px-5">
      <div className="relative mx-auto max-w-[1600px] overflow-hidden rounded-[32px] bg-forest py-24 text-ivory md:rounded-[56px] md:py-32">
        <div className="grain pointer-events-none absolute inset-0 opacity-70" aria-hidden="true" />
        <div className="relative mx-auto max-w-[1440px] px-5 md:px-8 lg:px-12">
          <div className="grid gap-8 lg:grid-cols-12 lg:items-end">
            <SectionHeading
              id="journey-title"
              eyebrow="How it works"
              tone="light"
              title="Your Smile Journey, Made Simple."
              className="lg:col-span-7" />
            
            <Reveal delay={0.1} className="lg:col-span-5">
              <p className="text-[16px] leading-[1.75] text-ivory/70">
                Every treatment is different, and your dentist will explain the steps that apply to you. This is
                simply how most journeys with us begin.
              </p>
            </Reveal>
          </div>

          <ol className="relative mt-20 grid gap-12 pl-10 md:pl-0 lg:grid-cols-4 lg:gap-8">
            {/* Desktop horizontal line */}
            <motion.span
              aria-hidden="true"
              className="absolute left-0 right-0 top-[11px] hidden h-px origin-left bg-champagne/60 lg:block"
              initial={{ scaleX: 0 }}
              whileInView={{ scaleX: 1 }}
              viewport={{ once: true, margin: '0px 0px -20% 0px' }}
              transition={{ duration: 0.9, ease }} />
            
            {/* Mobile vertical line */}
            <motion.span
              aria-hidden="true"
              className="absolute bottom-2 left-[11px] top-2 w-px origin-top bg-champagne/60 lg:hidden"
              initial={{ scaleY: 0 }}
              whileInView={{ scaleY: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.9, ease }} />
            
            {journeySteps.map((step, i) =>
            <motion.li
              key={step.title}
              className="relative md:pl-10 lg:pl-0"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: '0px 0px -15% 0px' }}
              transition={{ duration: 0.55, ease, delay: 0.12 * i }}>
              
                <span
                className="absolute -left-10 top-0 flex h-[23px] w-[23px] items-center justify-center rounded-full border border-champagne bg-forest md:left-0 lg:relative lg:left-auto"
                aria-hidden="true">
                
                  <span className="h-[7px] w-[7px] rounded-full bg-champagne" />
                </span>
                <p className="text-[12px] font-semibold uppercase tracking-[0.22em] text-champagne lg:mt-8">Step {i + 1}</p>
                <h3 className="mt-3 font-serif text-[30px] font-medium leading-[1.08] text-ivory">{step.title}</h3>
                <p className="mt-3 max-w-xs text-[15px] leading-[1.75] text-ivory/70">{step.text}</p>
              </motion.li>
            )}
          </ol>
        </div>
      </div>
    </section>);

}