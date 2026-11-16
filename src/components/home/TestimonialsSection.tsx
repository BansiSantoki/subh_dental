import React, { useCallback, useState } from 'react';
import { AnimatePresence, motion, type PanInfo } from 'framer-motion';
import { ArrowLeftIcon, ArrowRightIcon, QuoteIcon } from 'lucide-react';
import { SectionHeading } from '../shared/SectionHeading';
import { Reveal } from '../shared/Reveal';
import { testimonials } from '../../data/testimonials';

export function TestimonialsSection() {
  const [index, setIndex] = useState(0);
  const [direction, setDirection] = useState(1);
  const count = testimonials.length;

  const go = useCallback(
    (delta: number) => {
      setDirection(delta);
      setIndex((i) => (i + delta + count) % count);
    },
    [count]
  );

  const onDragEnd = (_: unknown, info: PanInfo) => {
    if (info.offset.x < -50) go(1);
    else if (info.offset.x > 50) go(-1);
  };

  const t = testimonials[index];

  return (
    <section id="testimonials" aria-labelledby="testimonials-title" className="bg-white py-20 md:py-28 lg:py-32">
      <div className="mx-auto max-w-[1440px] px-4 sm:px-6 md:px-8 lg:px-12">
        <SectionHeading
          id="testimonials-title"
          eyebrow="Patient Feedback"
          title="Kind Words, Meaningful Experiences."
          intro="Genuine experiences shared by patients who visited Dr. Naik's Shubh Smile Multispeciality Dental Clinic."
          align="center"
        />

        <Reveal delay={0.1}>
          <div
            className="relative mx-auto mt-12 sm:mt-16 max-w-4xl"
            role="region"
            aria-roledescription="carousel"
            aria-label="Patient testimonials"
          >
            {/* Card */}
            <div className="relative min-h-[320px] overflow-hidden rounded-[28px] border border-[#E2EAF0] bg-[#F2F8FC] p-8 sm:p-12 md:p-16 shadow-[0_20px_50px_-20px_rgba(8,127,174,0.12)]">
              {/* Decorative Blue Quote Icon */}
              <QuoteIcon
                className="pointer-events-none absolute top-6 right-8 sm:right-12 h-20 w-20 text-[#DCEFF8] opacity-60"
                aria-hidden="true"
              />

              <AnimatePresence mode="wait" custom={direction}>
                <motion.figure
                  key={t.id}
                  custom={direction}
                  initial={{ opacity: 0, x: 25 * direction }}
                  animate={{ opacity: 1, x: 0 }}
                  exit={{ opacity: 0, x: -25 * direction }}
                  transition={{ duration: 0.28, ease: [0.23, 1, 0.32, 1] }}
                  drag="x"
                  dragConstraints={{ left: 0, right: 0 }}
                  dragElastic={0.15}
                  onDragEnd={onDragEnd}
                  className="relative cursor-grab touch-pan-y active:cursor-grabbing"
                  aria-roledescription="slide"
                  aria-label={`${index + 1} of ${count}`}
                >
                  <blockquote className="font-serif text-xl sm:text-2xl md:text-3xl font-medium leading-relaxed text-[#123B59]">
                    “{t.quote}”
                  </blockquote>

                  <figcaption className="mt-8 flex flex-wrap items-center gap-x-4 gap-y-2 border-t border-[#E2EAF0] pt-6 text-sm">
                    <span className="font-bold text-[#123B59]">{t.name}</span>
                    {t.treatment && (
                      <span className="inline-block rounded-full bg-white px-3 py-0.5 text-xs font-semibold text-[#087FAE] border border-[#E2EAF0]">
                        {t.treatment}
                      </span>
                    )}
                    {t.date && <span className="text-xs text-[#34465A]/70">{t.date}</span>}
                  </figcaption>
                </motion.figure>
              </AnimatePresence>
            </div>

            {/* Carousel Controls */}
            <div className="mt-8 flex items-center justify-between">
              {/* Dot Indicators */}
              <div className="flex gap-2">
                {testimonials.map((item, i) => (
                  <button
                    key={item.id}
                    type="button"
                    onClick={() => {
                      setDirection(i > index ? 1 : -1);
                      setIndex(i);
                    }}
                    aria-label={`Show testimonial ${i + 1}`}
                    aria-current={i === index ? 'true' : undefined}
                    className="flex h-8 items-center px-1 cursor-pointer"
                  >
                    <span
                      className={`block h-2 rounded-full transition-all duration-300 ${
                        i === index ? 'w-8 bg-[#087FAE]' : 'w-2 bg-[#DCEFF8] hover:bg-[#087FAE]/50'
                      }`}
                    />
                  </button>
                ))}
              </div>

              {/* Prev / Next Buttons */}
              <div className="flex gap-2.5">
                <button
                  type="button"
                  onClick={() => go(-1)}
                  aria-label="Previous testimonial"
                  className="flex h-11 w-11 items-center justify-center rounded-full border border-[#E2EAF0] bg-white text-[#123B59] shadow-xs transition-colors duration-200 hover:border-[#087FAE] hover:bg-[#F2F8FC] hover:text-[#087FAE] cursor-pointer"
                >
                  <ArrowLeftIcon className="h-4 w-4" />
                </button>
                <button
                  type="button"
                  onClick={() => go(1)}
                  aria-label="Next testimonial"
                  className="flex h-11 w-11 items-center justify-center rounded-full border border-[#E2EAF0] bg-white text-[#123B59] shadow-xs transition-colors duration-200 hover:border-[#087FAE] hover:bg-[#F2F8FC] hover:text-[#087FAE] cursor-pointer"
                >
                  <ArrowRightIcon className="h-4 w-4" />
                </button>
              </div>
            </div>
          </div>
        </Reveal>
      </div>
    </section>
  );
}
