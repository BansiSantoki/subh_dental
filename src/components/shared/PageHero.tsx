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

/** Editorial hero used by inner pages (treatments, locations, blog listing). */
export function PageHero({ crumbs, eyebrow, title, intro, image, imageAlt = '', actions, children }: PageHeroProps) {
  return (
    <section className="relative overflow-hidden bg-ivory pt-[100px] md:pt-[124px]">
      <div className="grain pointer-events-none absolute inset-0" aria-hidden="true" />
      <div
        className={`relative mx-auto grid max-w-[1440px] gap-12 px-5 pb-20 md:px-8 lg:px-12 lg:pb-28 ${
        image ? 'lg:grid-cols-12 lg:items-center lg:gap-16' : ''}`
        }>
        
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, ease }}
          className={image ? 'lg:col-span-6' : 'max-w-4xl'}>
          
          <Breadcrumbs items={crumbs} />
          {eyebrow &&
          <p className="mt-10 flex items-center gap-3 text-[11.5px] font-semibold uppercase tracking-[0.24em] text-forest">
              <span className="h-px w-8 bg-champagne" aria-hidden="true" />
              {eyebrow}
            </p>
          }
          <h1
            className={`text-balance font-serif text-[46px] font-medium leading-[0.98] tracking-[-0.02em] text-charcoal sm:text-[64px] lg:text-[76px] ${
            eyebrow ? 'mt-5' : 'mt-10'}`
            }>
            
            {title}
          </h1>
          {intro && <div className="mt-7 max-w-xl text-pretty text-[17px] leading-[1.75] text-charcoal/70">{intro}</div>}
          {actions && <div className="mt-10 flex flex-col gap-3 sm:flex-row sm:flex-wrap">{actions}</div>}
          {children}
        </motion.div>
        {image &&
        <motion.div
          initial={{ opacity: 0, scale: 0.97 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.8, ease, delay: 0.1 }}
          className="relative lg:col-span-6">
          
            <div className="absolute inset-0 translate-x-4 translate-y-4 rounded-[32px] bg-sage" aria-hidden="true" />
            <img
            src={image}
            alt={imageAlt}
            width={1000}
            height={800}
            decoding="async"
            className="relative aspect-[5/4] w-full rounded-[32px] object-cover shadow-[0_50px_90px_-50px_rgba(23,63,58,0.55)]" />
          
          </motion.div>
        }
      </div>
    </section>);

}