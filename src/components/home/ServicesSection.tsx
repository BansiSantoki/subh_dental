import React, { useRef, useState } from 'react';
import { Link } from 'react-router-dom';
import { AnimatePresence, motion } from 'framer-motion';
import { ArrowRightIcon } from 'lucide-react';
import { ServiceCard } from '../shared/ServiceCard';
import { SectionHeading } from '../shared/SectionHeading';
import { Reveal } from '../shared/Reveal';
import { serviceCategories } from '../../data/services';
import { getServicesByCategory } from '../../utils/content';
import { buttonClass } from '../../utils/buttonStyles';
import type { ServiceCategory } from '../../types/content';

export function ServicesSection() {
  const [active, setActive] = useState<ServiceCategory>('everyday');
  const tabRefs = useRef<(HTMLButtonElement | null)[]>([]);
  const list = getServicesByCategory(active);
  const [feature, ...rest] = list;
  const activeMeta = serviceCategories.find((c) => c.id === active);

  const onKeyDown = (e: React.KeyboardEvent, index: number) => {
    if (e.key !== 'ArrowRight' && e.key !== 'ArrowLeft') return;
    e.preventDefault();
    const next = (index + (e.key === 'ArrowRight' ? 1 : -1) + serviceCategories.length) % serviceCategories.length;
    setActive(serviceCategories[next].id);
    tabRefs.current[next]?.focus();
  };

  return (
    <section id="services" aria-labelledby="services-title" className="bg-ivory py-24 md:py-36">
      <div className="mx-auto max-w-[1440px] px-5 md:px-8 lg:px-12">
        <div className="flex flex-col gap-10 lg:flex-row lg:items-end lg:justify-between">
          <SectionHeading
            id="services-title"
            eyebrow="Treatments"
            title="Comprehensive Dental Care, Thoughtfully Delivered."
            intro="Explore dental treatment options designed around your needs, comfort, and smile goals." />
          
          <Reveal delay={0.1} className="shrink-0">
            <div
              role="tablist"
              aria-label="Treatment categories"
              className="no-scrollbar -mx-5 flex gap-2 overflow-x-auto px-5 pb-1 sm:mx-0 sm:px-0">
              
              {serviceCategories.map((c, i) => {
                const selected = c.id === active;
                return (
                  <button
                    key={c.id}
                    ref={(el) => tabRefs.current[i] = el}
                    role="tab"
                    id={`tab-${c.id}`}
                    aria-selected={selected}
                    aria-controls={`panel-${c.id}`}
                    tabIndex={selected ? 0 : -1}
                    onClick={() => setActive(c.id)}
                    onKeyDown={(e) => onKeyDown(e, i)}
                    className={`relative h-11 shrink-0 rounded-full px-5 text-[13.5px] font-semibold transition-colors duration-200 ${
                    selected ? 'text-ivory' : 'text-charcoal/70 hover:text-charcoal'}`
                    }>
                    
                    {selected &&
                    <motion.span
                      layoutId="service-tab"
                      className="absolute inset-0 rounded-full bg-forest"
                      transition={{ duration: 0.28, ease: [0.23, 1, 0.32, 1] }} />

                    }
                    <span className="relative">{c.label}</span>
                  </button>);

              })}
            </div>
          </Reveal>
        </div>

        <div id={`panel-${active}`} role="tabpanel" aria-labelledby={`tab-${active}`} className="mt-14">
          <p className="mb-8 font-serif text-[21px] italic text-charcoal/60">{activeMeta?.description}</p>
          <AnimatePresence mode="wait">
            <motion.div
              key={active}
              initial={{ opacity: 0, y: 14 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -8 }}
              transition={{ duration: 0.25, ease: [0.23, 1, 0.32, 1] }}
              className="grid gap-6 lg:grid-cols-12">
              
              {feature &&
              <div className="lg:col-span-6">
                  <ServiceCard service={feature} variant="feature" />
                </div>
              }
              <div className="grid gap-4 lg:col-span-6">
                {rest.map((s) =>
                <ServiceCard key={s.slug} service={s} variant="compact" />
                )}
              </div>
            </motion.div>
          </AnimatePresence>
        </div>

        <div className="mt-14 flex flex-col items-start gap-4 border-t border-charcoal/10 pt-10 sm:flex-row sm:items-center sm:justify-between">
          <p className="max-w-lg text-[15px] leading-relaxed text-charcoal/70">
            Twelve treatment areas, each explained in plain language with honest answers to common questions.
          </p>
          <Link to="/services" className={buttonClass('secondary', 'md')}>
            View all treatments <ArrowRightIcon className="h-4 w-4" aria-hidden="true" />
          </Link>
        </div>
      </div>
    </section>);

}