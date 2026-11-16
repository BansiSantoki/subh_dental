import React from 'react';

interface LogoProps {
  tone?: 'dark' | 'light';
  className?: string;
}

export function Logo({ tone = 'dark', className = '' }: LogoProps) {
  if (tone === 'light') {
    return (
      <div className={`inline-flex items-center rounded-2xl bg-white px-4 py-2 shadow-sm transition-transform duration-200 hover:scale-[1.02] ${className}`}>
        <img
          src="/shubh-smile-nav-logo.png"
          alt="Dr. Naik's Shubh Smile Multispeciality Dental Clinic"
          className="h-12 sm:h-14 md:h-16 w-auto object-contain"
          width={577}
          height={432}
          loading="eager"
        />
      </div>
    );
  }

  return (
    <span className={`inline-flex items-center ${className}`}>
      <img
        src="/shubh-smile-nav-logo.png"
        alt="Dr. Naik's Shubh Smile Multispeciality Dental Clinic"
        className="h-14 sm:h-16 md:h-[68px] lg:h-[72px] w-auto max-w-[260px] sm:max-w-[320px] object-contain transition-transform duration-200 hover:scale-[1.02]"
        width={577}
        height={432}
        loading="eager"
      />
    </span>
  );
}

export function LogoMark({
  tone = 'dark',
  size = 40,
  className = '',
}: {
  tone?: 'dark' | 'light';
  size?: number;
  className?: string;
}) {
  const isLight = tone === 'light';
  return (
    <span
      className={`inline-flex items-center justify-center ${
        isLight ? 'rounded-xl bg-white p-1.5 shadow-sm' : ''
      } ${className}`}
      style={{ width: size, height: size }}
    >
      <img
        src="/shubh-smile-nav-logo.png"
        alt="Dr. Naik\'s Shubh Smile Multispeciality Dental Clinic"
        className="h-full w-full object-contain"
        width={size}
        height={size}
        loading="eager"
      />
    </span>
  );
}