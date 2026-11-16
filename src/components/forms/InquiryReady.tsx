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
      aria-live="polite"
      className="p-2"
    >
      <span className="flex h-12 w-12 items-center justify-center rounded-2xl bg-[#DCEFF8] text-[#087FAE] shadow-xs">
        <CheckIcon className="h-6 w-6" aria-hidden="true" />
      </span>

      <h3
        ref={headingRef}
        tabIndex={-1}
        className="mt-5 font-serif text-2xl sm:text-3xl font-bold leading-tight text-[#123B59] focus:outline-none"
      >
        Thank you, {firstName}. Your inquiry is ready.
      </h3>

      <p className="mt-2.5 text-sm sm:text-base leading-relaxed text-[#34465A]">
        Nothing has been charged or confirmed yet. Tap below to send these details directly to our clinic
        team on WhatsApp — we will review available slots and reply promptly.
      </p>

      <div className="mt-5 rounded-2xl border border-[#E2EAF0] bg-[#F2F8FC] p-4 sm:p-5">
        <p className="text-[11px] font-bold uppercase tracking-wider text-[#087FAE]">
          Inquiry Message Preview
        </p>
        <p className="mt-2.5 whitespace-pre-line text-xs sm:text-sm leading-relaxed text-[#123B59] font-mono bg-white p-3.5 rounded-xl border border-[#E2EAF0]">
          {message}
        </p>
      </div>

      <div className="mt-6 flex flex-wrap gap-3">
        <a
          href={waUrl}
          target="_blank"
          rel="noopener noreferrer"
          className={buttonClass('whatsapp', 'lg', 'shadow-md')}
        >
          <WhatsAppIcon className="h-5 w-5" />
          <span>Send on WhatsApp</span>
        </a>

        <button type="button" onClick={onEdit} className={buttonClass('secondary', 'lg')}>
          <PencilLineIcon className="h-4 w-4" aria-hidden="true" />
          <span>Edit Details</span>
        </button>
      </div>
    </motion.div>
  );
}
