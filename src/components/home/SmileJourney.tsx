import React from 'react';
import { motion } from 'framer-motion';
import {
  CheckCircle2Icon,
  MessageCircleIcon,
  SearchIcon,
  FileTextIcon,
  SparklesIcon,
  HeartHandshakeIcon,
  SmileIcon
} from 'lucide-react';
import { Reveal } from '../shared/Reveal';
import { SectionHeading } from '../shared/SectionHeading';
import { journeySteps } from '../../data/homeSections';

const stepIcons = [
  MessageCircleIcon,
  SearchIcon,
  FileTextIcon,
  SparklesIcon,
  HeartHandshakeIcon,
  SmileIcon
];

export function SmileJourney() {
  return (
    <section id="journey" aria-labelledby="journey-title" className="px-3 sm:px-5 py-6">
      <div className="relative mx-auto max-w-[1600px] overflow-hidden rounded-[32px] md:rounded-[48px] bg-[#123B59] py-12 sm:py-16 md:py-20 text-white shadow-2xl">
        {/* Subtle background glow */}
        <div
          className="pointer-events-none absolute -top-40 -left-40 h-[450px] w-[450px] rounded-full bg-[#087FAE]/30 blur-3xl"
          aria-hidden="true"
        />
        <div
          className="pointer-events-none absolute -bottom-40 -right-40 h-[450px] w-[450px] rounded-full bg-[#DCEFF8]/15 blur-3xl"
          aria-hidden="true"
        />

        <div className="relative mx-auto max-w-[1440px] px-4 sm:px-6 md:px-8 lg:px-12">
          {/* Header */}
          <div className="grid gap-6 lg:grid-cols-12 lg:items-end">
            <div className="lg:col-span-7">
              <span className="inline-flex items-center gap-2 rounded-full bg-white/10 px-3.5 py-1 text-xs font-semibold text-[#DCEFF8] border border-white/15">
                <CheckCircle2Icon className="h-3.5 w-3.5 text-[#7EC4E5]" />
                How It Works
              </span>
              <h2
                id="journey-title"
                className="mt-4 font-serif text-2xl sm:text-3xl md:text-4xl lg:text-[40px] font-bold leading-tight text-white"
              >
                Your Smile Journey, Made Simple.
              </h2>
            </div>

            <Reveal delay={0.08} className="lg:col-span-5">
              <p className="text-base sm:text-lg leading-relaxed text-[#DCEFF8]/90">
                Every treatment is unique, but our patient-first approach remains consistent. Here is our
                transparent, step-by-step pathway from your first inquiry to lasting smile wellness.
              </p>
            </Reveal>
          </div>

          {/* 6-Step Visual Grid (3 columns on desktop, 2 on tablet, 1 on mobile) */}
          <div className="mt-14 sm:mt-16 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
            {journeySteps.map((item, index) => {
              const StepIcon = stepIcons[index % stepIcons.length];
              return (
                <motion.div
                  key={item.step}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true, margin: '0px 0px -10% 0px' }}
                  transition={{ duration: 0.45, delay: 0.08 * index }}
                  className="group relative flex flex-col justify-between rounded-2xl border border-white/15 bg-white/5 p-6 sm:p-7 backdrop-blur-sm transition-all duration-300 hover:border-[#087FAE] hover:bg-white/10"
                >
                  <div>
                    <div className="flex items-center justify-between">
                      <span className="font-serif text-3xl sm:text-4xl font-extrabold text-[#7EC4E5] opacity-80 group-hover:opacity-100 transition-opacity">
                        {item.step}
                      </span>
                      <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-white/10 text-[#7EC4E5] transition-colors group-hover:bg-[#087FAE] group-hover:text-white">
                        <StepIcon className="h-5 w-5" aria-hidden="true" />
                      </div>
                    </div>

                    <h3 className="mt-4 font-serif text-lg sm:text-xl font-bold leading-snug text-white">
                      {item.title}
                    </h3>

                    <p className="mt-2.5 text-sm leading-relaxed text-[#DCEFF8]/80">
                      {item.text}
                    </p>
                  </div>

                  <div className="mt-6 pt-4 border-t border-white/10 text-xs font-medium text-[#7EC4E5]/90">
                    Step {index + 1} of 6
                  </div>
                </motion.div>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
}
