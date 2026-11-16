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
  const titleColor = tone === 'dark' ? 'text-[#123B59]' : 'text-white';
  const introColor = tone === 'dark' ? 'text-[#34465A]' : 'text-[#DCEFF8]/90';
  const eyebrowColor = tone === 'dark' ? 'text-[#087FAE]' : 'text-[#7EC4E5]';

  return (
    <Reveal className={`${center ? 'mx-auto text-center' : ''} max-w-3xl ${className}`}>
      {eyebrow && (
        <p
          className={`mb-4 flex items-center gap-2.5 text-xs font-bold uppercase tracking-[0.2em] ${eyebrowColor} ${
            center ? 'justify-center' : ''
          }`}
        >
          <span className="h-0.5 w-6 rounded-full bg-[#087FAE]" aria-hidden="true" />
          <span>{eyebrow}</span>
        </p>
      )}

      <h2
        id={id}
        className={`font-serif text-3xl sm:text-4xl lg:text-5xl font-bold leading-[1.1] tracking-[-0.015em] ${titleColor}`}
      >
        {title}
      </h2>

      {intro && (
        <p
          className={`mt-4 max-w-2xl text-sm sm:text-base leading-relaxed ${introColor} ${
            center ? 'mx-auto' : ''
          }`}
        >
          {intro}
        </p>
      )}
    </Reveal>
  );
}
