import React from 'react';
import { motion } from 'framer-motion';
import { Breadcrumbs, type Crumb } from './Breadcrumbs';

interface PageHeroProps {
  crumbs: Crumb[];
  eyebrow?: string;
  title: React.ReactNode;
  intro?: React.ReactNode;
  image?: string;
  imageAlt?: string;
  actions?: React.ReactNode;
  children?: React.ReactNode;
}

const ease = [0.23, 1, 0.32, 1] as const;

export function PageHero({
  crumbs,
  eyebrow,
  title,
  intro,
  image,
  imageAlt = '',
  actions,
  children
}: PageHeroProps) {
  return (
    <section className="relative overflow-hidden bg-gradient-to-b from-[#F2F8FC] via-white to-white pt-24 sm:pt-28 md:pt-30 pb-10 md:pb-12 lg:pb-14 border-b border-[#E2EAF0]">
      <div className="relative mx-auto max-w-[1440px] px-4 sm:px-6 md:px-8 lg:px-12">
        <div
          className={`grid gap-10 ${
            image ? 'lg:grid-cols-12 lg:items-center lg:gap-14' : 'max-w-4xl'
          }`}
        >
          <motion.div
            initial={{ opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, ease }}
            className={image ? 'lg:col-span-7' : ''}
          >
            <Breadcrumbs items={crumbs} />

            {eyebrow && (
              <div className="mt-5 inline-flex items-center gap-2 rounded-full border border-[#087FAE]/20 bg-white px-3.5 py-1 text-xs font-semibold text-[#087FAE] shadow-2xs">
                <span>{eyebrow}</span>
              </div>
            )}

            <h1 className="mt-4 font-serif text-3xl sm:text-4xl lg:text-[46px] font-bold leading-[1.18] tracking-[-0.015em] text-[#123B59]">
              {title}
            </h1>

            {intro && (
              <div className="mt-4 max-w-2xl text-base sm:text-lg leading-relaxed text-[#34465A]">
                {intro}
              </div>
            )}

            {actions && (
              <div className="mt-8 flex flex-wrap items-center gap-3.5">{actions}</div>
            )}

            {children}
          </motion.div>

          {image && (
            <motion.div
              initial={{ opacity: 0, scale: 0.96 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.6, ease, delay: 0.1 }}
              className="relative lg:col-span-5"
            >
              <div className="overflow-hidden rounded-[28px] border-4 border-white bg-slate-100 shadow-[0_20px_50px_-15px_rgba(8,127,174,0.2)]">
                <img
                  src={image}
                  alt={imageAlt}
                  width={800}
                  height={600}
                  className="aspect-[4/3] w-full object-cover"
                />
              </div>
            </motion.div>
          )}
        </div>
      </div>
    </section>
  );
}
