import React from 'react';
import { siteConfig } from '../../data/siteConfig';

interface LogoProps {
  tone?: 'dark' | 'light';
  className?: string;
}

export function Logo({ tone = 'dark', className = '' }: LogoProps) {
  const word = tone === 'dark' ? 'text-forest' : 'text-ivory';
  const sub = tone === 'dark' ? 'text-charcoal/60' : 'text-ivory/60';
  return (
    <span className={`inline-flex items-center gap-3 ${className}`}>
      <LogoMark tone={tone} />
      <span className="flex flex-col leading-none">
        <span className={`font-serif text-[23px] font-medium tracking-[0.26em] ${word}`}>{siteConfig.logoWord}</span>
        <span className={`mt-1 text-[8.5px] font-semibold tracking-[0.42em] ${sub}`}>{siteConfig.logoSub}</span>
      </span>
    </span>);

}

export function LogoMark({ tone = 'dark', size = 38 }: {tone?: 'dark' | 'light';size?: number;}) {
  const stroke = tone === 'dark' ? '#173F3A' : '#FAF8F3';
  return (
    <svg width={size} height={size} viewBox="0 0 40 40" fill="none" aria-hidden="true">
      <circle cx="20" cy="20" r="18.5" stroke="#D6C3A3" strokeWidth="1" />
      <path
        d="M12.5 17.2c0-3.1 2-5.2 4.4-5.2 1.4 0 2.2.7 3.1.7.9 0 1.7-.7 3.1-.7 2.4 0 4.4 2.1 4.4 5.2"
        stroke={stroke}
        strokeWidth="1.4"
        strokeLinecap="round" />
      
      <path d="M11 22.5c2.4 3.6 5.5 5.3 9 5.3s6.6-1.7 9-5.3" stroke={stroke} strokeWidth="1.4" strokeLinecap="round" />
    </svg>);

}