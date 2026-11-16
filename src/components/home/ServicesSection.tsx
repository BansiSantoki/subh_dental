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
    const next =
      (index + (e.key === 'ArrowRight' ? 1 : -1) + serviceCategories.length) %
      serviceCategories.length;
    setActive(serviceCategories[next].id);
    tabRefs.current[next]?.focus();
  };

  return (
    <section id="services" aria-labelledby="services-title" className="bg-white py-10 sm:py-12 md:py-14 lg:py-16">
      <div className="mx-auto max-w-[1440px] px-4 sm:px-6 md:px-8 lg:px-12">
        <div className="flex flex-col gap-8 lg:flex-row lg:items-end lg:justify-between">
          <SectionHeading
            id="services-title"
            eyebrow="Our Dental Treatments"
            title="Comprehensive Dental Care, Thoughtfully Delivered."
            intro="Explore dental treatments designed around your health, comfort, and smile goals. Each treatment is explained transparently with no unnecessary procedures."
          />

          {/* Treatment Category Tabs */}
          <Reveal delay={0.08} className="shrink-0">
            <div
              role="tablist"
              aria-label="Treatment categories"
              className="no-scrollbar flex gap-2 overflow-x-auto pb-1"
            >
              {serviceCategories.map((c, i) => {
                const selected = c.id === active;
                return (
                  <button
                    key={c.id}
                    ref={(el) => (tabRefs.current[i] = el)}
                    role="tab"
                    id={`tab-${c.id}`}
                    aria-selected={selected}
                    aria-controls={`panel-${c.id}`}
                    tabIndex={selected ? 0 : -1}
                    onClick={() => setActive(c.id)}
                    onKeyDown={(e) => onKeyDown(e, i)}
                    className={`relative h-11 shrink-0 rounded-full px-5 text-xs sm:text-sm font-semibold transition-all duration-200 cursor-pointer ${
                      selected
                        ? 'text-white'
                        : 'border border-[#E2EAF0] bg-[#F2F8FC] text-[#123B59] hover:bg-[#DCEFF8] hover:text-[#087FAE]'
                    }`}
                  >
                    {selected && (
                      <motion.span
                        layoutId="service-tab-pill"
                        className="absolute inset-0 rounded-full bg-[#087FAE] shadow-sm"
                        transition={{ duration: 0.25, ease: [0.23, 1, 0.32, 1] }}
                      />
                    )}
                    <span className="relative z-10">{c.label}</span>
                  </button>
                );
              })}
            </div>
          </Reveal>
        </div>

        {/* Treatment Panel */}
        <div id={`panel-${active}`} role="tabpanel" aria-labelledby={`tab-${active}`} className="mt-8 sm:mt-10">
          <p className="mb-8 max-w-2xl text-sm sm:text-base text-[#34465A]/80 font-medium">
            {activeMeta?.description}
          </p>

          <AnimatePresence mode="wait">
            <motion.div
              key={active}
              initial={{ opacity: 0, y: 12 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -8 }}
              transition={{ duration: 0.25, ease: [0.23, 1, 0.32, 1] }}
              className="grid gap-6 lg:grid-cols-12"
            >
              {feature && (
                <div className="lg:col-span-6">
                  <ServiceCard service={feature} variant="feature" />
                </div>
              )}
              <div className="grid gap-4 lg:col-span-6">
                {rest.map((s) => (
                  <ServiceCard key={s.slug} service={s} variant="compact" />
                ))}
              </div>
            </motion.div>
          </AnimatePresence>

          {/* View All Treatments Link */}
          <div className="mt-8 text-center">
            <Link to="/services" className={buttonClass('secondary', 'lg', 'shadow-sm')}>
              <span>View All 12 Dental Treatments</span>
              <ArrowRightIcon className="h-4 w-4" />
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
}
