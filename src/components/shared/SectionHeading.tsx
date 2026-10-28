import React from 'react';
import { Reveal } from './Reveal';

interface SectionHeadingProps {
  eyebrow?: string;
  title: React.ReactNode;
  intro?: React.ReactNode;
  align?: 'left' | 'center';
  tone?: 'dark' | 'light';
  id?: string;
  className?: string;
}

export function SectionHeading({
  eyebrow,
  title,
  intro,
  align = 'left',
  tone = 'dark',
  id,
  className = ''
}: SectionHeadingProps) {
  const center = align === 'center';
  const titleColor = tone === 'dark' ? 'text-charcoal' : 'text-ivory';
  const introColor = tone === 'dark' ? 'text-charcoal/70' : 'text-ivory/75';
  const eyebrowColor = tone === 'dark' ? 'text-forest' : 'text-champagne';
  return (
    <Reveal className={`${center ? 'mx-auto text-center' : ''} max-w-3xl ${className}`}>
      {eyebrow &&
      <p
        className={`mb-5 flex items-center gap-3 text-[11.5px] font-semibold uppercase tracking-[0.24em] ${eyebrowColor} ${
        center ? 'justify-center' : ''}`
        }>
        
          <span className="h-px w-8 bg-champagne" aria-hidden="true" />
          {eyebrow}
        </p>
      }
      <h2
        id={id}
        className={`text-balance font-serif text-[40px] font-medium leading-[1.02] tracking-[-0.015em] sm:text-[52px] lg:text-[62px] ${titleColor}`}>
        
        {title}
      </h2>
      {intro &&
      <p className={`mt-6 max-w-xl text-pretty text-[16.5px] leading-[1.75] ${introColor} ${center ? 'mx-auto' : ''}`}>
          {intro}
        </p>
      }
    </Reveal>);

}