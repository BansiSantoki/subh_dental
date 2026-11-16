import React from 'react';
import { WhatsAppIcon } from '../shared/WhatsAppIcon';
import { whatsappUrl } from '../../utils/whatsapp';

export function FloatingWhatsAppButton() {
  return (
    <a
      href={whatsappUrl()}
      target="_blank"
      rel="noopener noreferrer"
      aria-label="Chat with Dr. Naik's Shubh Smile Dental Clinic on WhatsApp"
      className="group fixed bottom-[calc(1.25rem+env(safe-area-inset-bottom))] right-[calc(1.25rem+env(safe-area-inset-right))] z-40 flex h-14 w-14 items-center justify-center rounded-full bg-[#25D366] text-white shadow-[0_12px_32px_-8px_rgba(37,211,102,0.6)] transition-all duration-200 hover:scale-105 active:scale-95 md:bottom-8 md:right-8"
    >
      <span className="absolute inset-0 rounded-full bg-[#25D366] motion-safe:animate-softpulse" aria-hidden="true" />
      <WhatsAppIcon className="relative h-7 w-7" />
      <span
        className="pointer-events-none absolute right-[calc(100%+12px)] hidden translate-x-1 whitespace-nowrap rounded-xl bg-[#123B59] px-3.5 py-1.5 text-xs font-semibold text-white shadow-md opacity-0 transition-all duration-200 group-hover:translate-x-0 group-hover:opacity-100 md:block"
        aria-hidden="true"
      >
        Chat with our clinic
      </span>
    </a>
  );
}
