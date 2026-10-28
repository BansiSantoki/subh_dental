import React from 'react';
import { WhatsAppIcon } from '../shared/WhatsAppIcon';
import { whatsappUrl } from '../../utils/whatsapp';

export function FloatingWhatsAppButton() {
  return (
    <a
      href={whatsappUrl()}
      target="_blank"
      rel="noopener noreferrer"
      aria-label="Chat with us on WhatsApp"
      className="group fixed bottom-[calc(1.25rem+env(safe-area-inset-bottom))] right-[calc(1.25rem+env(safe-area-inset-right))] z-40 flex h-14 w-14 items-center justify-center rounded-full bg-whatsapp text-white shadow-[0_16px_36px_-12px_rgba(18,140,78,0.65)] transition-transform duration-200 ease-silk hover:scale-[1.06] active:scale-95 md:bottom-8 md:right-8">
      
      <span className="absolute inset-0 rounded-full bg-whatsapp motion-safe:animate-softpulse" aria-hidden="true" />
      <WhatsAppIcon className="relative h-7 w-7" />
      <span
        className="pointer-events-none absolute right-[calc(100%+12px)] hidden translate-x-1 whitespace-nowrap rounded-full bg-charcoal px-3.5 py-2 text-[12.5px] font-medium text-ivory opacity-0 transition-[opacity,transform] duration-200 ease-silk group-hover:translate-x-0 group-hover:opacity-100 md:block"
        aria-hidden="true">
        
        Chat with us
      </span>
    </a>);

}