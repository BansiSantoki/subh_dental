import React, { useEffect, useRef } from 'react';
import { AnimatePresence, motion } from 'framer-motion';
import { XIcon, SparklesIcon } from 'lucide-react';
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
      {isOpen && (
        <motion.div
          className="fixed inset-0 z-[60] flex items-end justify-center sm:items-center sm:p-6"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 0.2, ease }}
        >
          {/* Backdrop */}
          <button
            type="button"
            aria-label="Close appointment form"
            onClick={closeAppointment}
            className="absolute inset-0 cursor-default bg-[#0A2033]/60 backdrop-blur-sm"
            tabIndex={-1}
          />

          <motion.div
            ref={dialogRef}
            role="dialog"
            aria-modal="true"
            aria-labelledby="appointment-title"
            initial={{ opacity: 0, y: 24, scale: 0.98 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={{ opacity: 0, y: 16, scale: 0.98 }}
            transition={{ duration: 0.28, ease }}
            className="relative grid max-h-[94vh] w-full max-w-4xl overflow-hidden rounded-t-[28px] bg-white shadow-2xl sm:rounded-[28px] md:grid-cols-[0.8fr_1.2fr] border border-[#E2EAF0]"
          >
            {/* Left Side: Photo & Brand */}
            <div className="relative hidden md:block bg-[#123B59]">
              <img
                src={images.treatmentRoom}
                alt="Operatory at Dr. Naik's Shubh Smile Dental Clinic"
                className="absolute inset-0 h-full w-full object-cover opacity-60"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-[#123B59] via-[#123B59]/40 to-transparent" />
              <div className="absolute inset-x-0 bottom-0 p-8 text-white">
                <span className="inline-flex items-center gap-1.5 rounded-full bg-white/20 px-3 py-1 text-xs font-semibold text-[#DCEFF8] backdrop-blur-xs mb-3">
                  <SparklesIcon className="h-3.5 w-3.5" />
                  {siteConfig.shortName}
                </span>
                <p className="font-serif text-2xl font-bold leading-snug">{siteConfig.tagline}</p>
                <p className="mt-3 text-xs text-[#DCEFF8]/90 leading-relaxed">{siteConfig.locationLabel}</p>
              </div>
            </div>

            {/* Right Side: Form */}
            <div className="overflow-y-auto p-6 sm:p-8">
              <div className="mb-6 flex items-start justify-between gap-4">
                <div>
                  <h2
                    id="appointment-title"
                    className="font-serif text-2xl sm:text-3xl font-bold text-[#123B59]"
                  >
                    Book an Appointment
                  </h2>
                  <p className="mt-1 text-xs sm:text-sm text-[#34465A]/80">
                    Fill in your details below and we will prepare your WhatsApp consultation request.
                  </p>
                </div>
                <button
                  type="button"
                  onClick={closeAppointment}
                  aria-label="Close"
                  className="flex h-9 w-9 shrink-0 items-center justify-center rounded-full border border-[#E2EAF0] text-[#123B59] hover:bg-[#F2F8FC] hover:text-[#087FAE] transition-colors cursor-pointer"
                >
                  <XIcon className="h-4 w-4" />
                </button>
              </div>

              <AppointmentForm initialTreatment={treatment} />
            </div>
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}
