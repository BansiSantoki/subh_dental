import React, { useEffect, useRef } from 'react';
import { AnimatePresence, motion } from 'framer-motion';
import { XIcon } from 'lucide-react';
import { AppointmentForm } from './AppointmentForm';
import { useAppointment } from '../../contexts/AppointmentContext';
import { images } from '../../data/images';
import { siteConfig } from '../../data/siteConfig';

const ease = [0.23, 1, 0.32, 1] as const;

export function AppointmentModal() {
  const { isOpen, treatment, closeAppointment } = useAppointment();
  const dialogRef = useRef<HTMLDivElement>(null);
  const previousFocus = useRef<HTMLElement | null>(null);

  useEffect(() => {
    if (!isOpen) return;
    previousFocus.current = document.activeElement as HTMLElement;
    const { overflow } = document.body.style;
    document.body.style.overflow = 'hidden';
    const t = window.setTimeout(() => {
      dialogRef.current?.querySelector<HTMLElement>('input, select, textarea, button')?.focus();
    }, 50);

    const onKey = (e: KeyboardEvent) => {
      if (e.key === 'Escape') closeAppointment();
      if (e.key === 'Tab' && dialogRef.current) {
        const focusables = dialogRef.current.querySelectorAll<HTMLElement>(
          'a[href], button:not([disabled]), input, select, textarea, [tabindex]:not([tabindex="-1"])'
        );
        const first = focusables[0];
        const last = focusables[focusables.length - 1];
        if (e.shiftKey && document.activeElement === first) {
          e.preventDefault();
          last.focus();
        } else if (!e.shiftKey && document.activeElement === last) {
          e.preventDefault();
          first.focus();
        }
      }
    };
    document.addEventListener('keydown', onKey);
    return () => {
      window.clearTimeout(t);
      document.body.style.overflow = overflow;
      document.removeEventListener('keydown', onKey);
      previousFocus.current?.focus();
    };
  }, [isOpen, closeAppointment]);

  return (
    <AnimatePresence>
      {isOpen &&
      <motion.div
        className="fixed inset-0 z-[60] flex items-end justify-center sm:items-center sm:p-6"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        exit={{ opacity: 0 }}
        transition={{ duration: 0.2, ease }}>
        
          <button
          type="button"
          aria-label="Close appointment form"
          onClick={closeAppointment}
          className="absolute inset-0 cursor-default bg-forest-deep/50 backdrop-blur-[3px]"
          tabIndex={-1} />
        
          <motion.div
          ref={dialogRef}
          role="dialog"
          aria-modal="true"
          aria-labelledby="appointment-title"
          initial={{ opacity: 0, y: 24, scale: 0.98 }}
          animate={{ opacity: 1, y: 0, scale: 1 }}
          exit={{ opacity: 0, y: 16, scale: 0.98 }}
          transition={{ duration: 0.28, ease }}
          className="relative grid max-h-[92vh] w-full max-w-4xl overflow-hidden rounded-t-[28px] bg-ivory shadow-[0_40px_120px_-40px_rgba(15,44,40,0.6)] sm:rounded-[28px] md:grid-cols-[0.8fr_1.2fr]">
          
            <div className="relative hidden md:block">
              <img src={images.treatmentRoom} alt="" className="absolute inset-0 h-full w-full object-cover" />
              <div className="absolute inset-0 bg-forest-deep/40" />
              <div className="absolute inset-x-0 bottom-0 p-8 text-ivory">
                <p className="font-serif text-[30px] leading-[1.1]">{siteConfig.tagline}</p>
                <p className="mt-3 text-[13px] text-ivory/80">{siteConfig.locationLabel}</p>
              </div>
            </div>
            <div className="overflow-y-auto p-6 sm:p-9">
              <div className="mb-7 flex items-start justify-between gap-4">
                <div>
                  <h2 id="appointment-title" className="font-serif text-[34px] font-medium leading-tight text-charcoal">
                    Book an Appointment
                  </h2>
                  <p className="mt-2 max-w-sm text-[14.5px] leading-relaxed text-charcoal/65">
                    Share a few details and we’ll prepare a WhatsApp message for our team.
                  </p>
                </div>
                <button
                type="button"
                onClick={closeAppointment}
                aria-label="Close"
                className="flex h-10 w-10 shrink-0 items-center justify-center rounded-full border border-charcoal/15 text-charcoal transition-colors duration-200 hover:bg-white">
                
                  <XIcon className="h-4 w-4" />
                </button>
              </div>
              <AppointmentForm key={treatment} initialTreatment={treatment} />
            </div>
          </motion.div>
        </motion.div>
      }
    </AnimatePresence>);

}