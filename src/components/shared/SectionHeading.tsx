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
        <div className={`mb-3.5 flex items-center gap-2 ${center ? 'justify-center' : ''}`}>
          <span
            className={`inline-flex items-center gap-2 rounded-full px-3 py-1 text-xs font-semibold tracking-wide ${
              tone === 'dark'
                ? 'bg-[#DCEFF8] text-[#087FAE]'
                : 'bg-white/15 text-[#7EC4E5]'
            }`}
          >
            <span className="h-1.5 w-1.5 rounded-full bg-current" aria-hidden="true" />
            <span>{eyebrow}</span>
          </span>
        </div>
      )}

      <h2
        id={id}
        className={`font-serif text-2xl sm:text-3xl md:text-4xl lg:text-[40px] font-bold leading-tight tracking-[-0.015em] ${titleColor}`}
      >
        {title}
      </h2>

      {intro && (
        <p
          className={`mt-3.5 max-w-2xl text-base sm:text-lg leading-relaxed ${introColor} ${
            center ? 'mx-auto' : ''
          }`}
        >
          {intro}
        </p>
      )}
    </Reveal>
  );
}
