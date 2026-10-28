import React, { useEffect, useRef } from 'react';
import { motion } from 'framer-motion';
import { CheckIcon, PencilLineIcon } from 'lucide-react';
import { WhatsAppIcon } from '../shared/WhatsAppIcon';
import { buttonClass } from '../../utils/buttonStyles';

interface InquiryReadyProps {
  name: string;
  message: string;
  waUrl: string;
  onEdit: () => void;
}

/** Shown after validation. Honest copy: nothing has been sent or booked yet. */
export function InquiryReady({ name, message, waUrl, onEdit }: InquiryReadyProps) {
  const headingRef = useRef<HTMLHeadingElement>(null);
  useEffect(() => headingRef.current?.focus(), []);
  const firstName = name.trim().split(' ')[0];

  return (
    <motion.div
      initial={{ opacity: 0, y: 12 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.3, ease: [0.23, 1, 0.32, 1] }}
      role="status"
      aria-live="polite">
      
      <span className="flex h-12 w-12 items-center justify-center rounded-full bg-sage text-forest">
        <CheckIcon className="h-5 w-5" aria-hidden="true" />
      </span>
      <h3 ref={headingRef} tabIndex={-1} className="mt-5 font-serif text-[32px] font-medium leading-tight text-charcoal focus:outline-none">
        Thank you, {firstName}. Your inquiry is ready.
      </h3>
      <p className="mt-3 text-[15px] leading-relaxed text-charcoal/70">
        Nothing has been sent or booked yet. Tap below to send these details to our team on WhatsApp — they will
        reply with available options. Sending an inquiry does not confirm an appointment.
      </p>
      <div className="mt-6 rounded-[16px] border border-charcoal/10 bg-ivory p-5">
        <p className="text-[11.5px] font-semibold uppercase tracking-[0.18em] text-muted">Message preview</p>
        <p className="mt-3 whitespace-pre-line text-[14px] leading-relaxed text-charcoal/80">{message}</p>
      </div>
      <div className="mt-6 flex flex-wrap gap-3">
        <a href={waUrl} target="_blank" rel="noopener noreferrer" className={buttonClass('whatsapp', 'lg')}>
          <WhatsAppIcon className="h-5 w-5" />
          Send on WhatsApp
          <span className="sr-only">(opens WhatsApp in a new tab)</span>
        </a>
        <button type="button" onClick={onEdit} className={buttonClass('secondary', 'lg')}>
          <PencilLineIcon className="h-4 w-4" aria-hidden="true" />
          Edit details
        </button>
      </div>
    </motion.div>);

}