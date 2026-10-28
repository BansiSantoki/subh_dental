import React, { useCallback, useState } from 'react';
import { AnimatePresence, motion, type PanInfo } from 'framer-motion';
import { ArrowLeftIcon, ArrowRightIcon } from 'lucide-react';
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
    if (info.offset.x < -60) go(1);else
    if (info.offset.x > 60) go(-1);
  };

  const t = testimonials[index];

  return (
    <section id="testimonials" aria-labelledby="testimonials-title" className="bg-sage/60 py-24 md:py-36">
      <div className="mx-auto max-w-[1440px] px-5 md:px-8 lg:px-12">
        <SectionHeading id="testimonials-title" eyebrow="Patient stories" title="Kind Words, Meaningful Experiences." align="center" />

        <Reveal delay={0.1}>
          <div
            className="relative mx-auto mt-16 max-w-4xl"
            role="region"
            aria-roledescription="carousel"
            aria-label="Patient testimonials">
            
            <div className="relative min-h-[380px] overflow-hidden rounded-[32px] bg-white px-7 py-12 shadow-[0_40px_80px_-50px_rgba(23,63,58,0.45)] sm:min-h-[340px] sm:px-14 sm:py-16">
              <span className="pointer-events-none absolute left-6 top-0 select-none font-serif text-[180px] leading-none text-champagne/50 sm:left-10" aria-hidden="true">
                “
              </span>
              <AnimatePresence mode="wait" custom={direction}>
                <motion.figure
                  key={t.id}
                  custom={direction}
                  initial={{ opacity: 0, x: 30 * direction }}
                  animate={{ opacity: 1, x: 0 }}
                  exit={{ opacity: 0, x: -30 * direction }}
                  transition={{ duration: 0.28, ease: [0.23, 1, 0.32, 1] }}
                  drag="x"
                  dragConstraints={{ left: 0, right: 0 }}
                  dragElastic={0.15}
                  onDragEnd={onDragEnd}
                  className="relative cursor-grab touch-pan-y active:cursor-grabbing"
                  aria-roledescription="slide"
                  aria-label={`${index + 1} of ${count}`}>
                  
                  <blockquote className="text-balance font-serif text-[30px] font-normal leading-[1.25] text-charcoal sm:text-[40px]">
                    {t.quote}
                  </blockquote>
                  <figcaption className="mt-10 flex flex-wrap items-center gap-x-4 gap-y-1 border-t border-charcoal/10 pt-6 text-[14px]">
                    <span className="font-semibold text-charcoal">{t.name}</span>
                    {t.treatment && <span className="text-forest">{t.treatment}</span>}
                    {t.date && <span className="text-muted">{t.date}</span>}
                  </figcaption>
                </motion.figure>
              </AnimatePresence>
              <p className="sr-only" aria-live="polite">
                Showing testimonial {index + 1} of {count}
              </p>
            </div>

            <div className="mt-8 flex items-center justify-between">
              <div className="flex gap-2">
                {testimonials.map((item, i) =>
                <button
                  key={item.id}
                  type="button"
                  onClick={() => {
                    setDirection(i > index ? 1 : -1);
                    setIndex(i);
                  }}
                  aria-label={`Show testimonial ${i + 1}`}
                  aria-current={i === index ? 'true' : undefined}
                  className="flex h-8 items-center px-1">
                  
                    <span
                    className={`block h-1.5 rounded-full transition-[width,background-color] duration-300 ease-silk ${
                    i === index ? 'w-10 bg-forest' : 'w-4 bg-forest/25'}`
                    } />
                  
                  </button>
                )}
              </div>
              <div className="flex gap-2">
                <button
                  type="button"
                  onClick={() => go(-1)}
                  aria-label="Previous testimonial"
                  className="flex h-12 w-12 items-center justify-center rounded-full border border-forest/20 bg-white text-forest transition-colors duration-200 hover:bg-forest hover:text-ivory">
                  
                  <ArrowLeftIcon className="h-4 w-4" />
                </button>
                <button
                  type="button"
                  onClick={() => go(1)}
                  aria-label="Next testimonial"
                  className="flex h-12 w-12 items-center justify-center rounded-full border border-forest/20 bg-white text-forest transition-colors duration-200 hover:bg-forest hover:text-ivory">
                  
                  <ArrowRightIcon className="h-4 w-4" />
                </button>
              </div>
            </div>
          </div>
        </Reveal>
      </div>
    </section>);

}