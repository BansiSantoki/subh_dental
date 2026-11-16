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

    const originalBodyOverflow = document.body.style.overflow;
    const originalHtmlOverflow = document.documentElement.style.overflow;
    const originalBodyTouchAction = document.body.style.touchAction;

    document.body.style.overflow = 'hidden';
    document.documentElement.style.overflow = 'hidden';
    document.body.style.touchAction = 'none';

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
      document.body.style.overflow = originalBodyOverflow;
      document.documentElement.style.overflow = originalHtmlOverflow;
      document.body.style.touchAction = originalBodyTouchAction;
      document.removeEventListener('keydown', onKey);
      previousFocus.current?.focus();
    };
  }, [isOpen, closeAppointment]);

  return (
    <AnimatePresence>
      {isOpen && (
        <motion.div
          className="fixed inset-0 z-[60] flex items-center justify-center p-0 sm:p-4 md:p-6 overflow-hidden"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 0.2, ease }}
        >
          {/* Backdrop with dark navy tint and blur */}
          <button
            type="button"
            aria-label="Close appointment form"
            onClick={closeAppointment}
            className="absolute inset-0 cursor-default bg-[#0A2033]/70 backdrop-blur-sm"
            tabIndex={-1}
          />

          {/* Modal Container: Flex layout with constrained height and zero overflow clipping */}
          <motion.div
            ref={dialogRef}
            role="dialog"
            aria-modal="true"
            aria-labelledby="appointment-title"
            initial={{ opacity: 0, y: 16, scale: 0.98 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={{ opacity: 0, y: 12, scale: 0.98 }}
            transition={{ duration: 0.25, ease }}
            className="relative flex flex-col md:flex-row w-full h-[100dvh] sm:h-auto max-h-[100dvh] sm:max-h-[calc(100dvh-2rem)] md:max-h-[min(680px,calc(100dvh-2.5rem))] max-w-4xl overflow-hidden rounded-none sm:rounded-[24px] md:rounded-[28px] bg-white shadow-2xl border-0 sm:border border-[#E2EAF0]"
          >
            {/* Left Side: Photo & Brand (Desktop Only) */}
            <div className="relative hidden md:flex md:w-[38%] lg:w-[40%] shrink-0 flex-col justify-end overflow-hidden bg-[#123B59]">
              <img
                src={images.teethCleaning}
                alt="Clinical dentistry at Dr. Naik's Shubh Smile Dental Clinic"
                className="absolute inset-0 h-full w-full object-cover opacity-65"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-[#123B59] via-[#123B59]/45 to-transparent" />
              <div className="relative z-10 p-6 lg:p-7 text-white">
                <span className="inline-flex items-center gap-1.5 rounded-full bg-white/20 px-3 py-1 text-xs font-semibold text-[#DCEFF8] backdrop-blur-xs mb-3 border border-white/20">
                  <SparklesIcon className="h-3.5 w-3.5 text-[#7EC4E5]" />
                  {siteConfig.shortName}
                </span>
                <p className="font-serif text-lg lg:text-xl font-bold leading-snug">
                  Modern, comfortable dental care with a personalized patient-first approach.
                </p>
                <p className="mt-2.5 text-xs text-[#DCEFF8]/90 leading-relaxed">
                  {siteConfig.locationLabel}
                </p>
              </div>
            </div>

            {/* Right Side: Form with Fixed Header, Scrollable Fields, and Fixed Footer */}
            <div className="flex flex-1 flex-col min-h-0 min-w-0 bg-white">
              {/* Fixed Header */}
              <div className="shrink-0 flex items-start justify-between gap-4 px-5 pt-4 pb-3 sm:px-7 sm:pt-5 sm:pb-3.5 border-b border-[#E2EAF0] bg-white z-10">
                <div>
                  <h2
                    id="appointment-title"
                    className="font-serif text-xl sm:text-2xl font-bold text-[#123B59] leading-tight"
                  >
                    Book an Appointment
                  </h2>
                  <p className="mt-0.5 text-xs sm:text-sm text-[#34465A]/80">
                    Fill in your details below and we will prepare your WhatsApp consultation request.
                  </p>
                </div>
                <button
                  type="button"
                  onClick={closeAppointment}
                  aria-label="Close appointment form"
                  className="flex h-9 w-9 shrink-0 items-center justify-center rounded-full border border-[#E2EAF0] text-[#123B59] hover:bg-[#F2F8FC] hover:text-[#087FAE] hover:border-[#087FAE] transition-all cursor-pointer focus:outline-none focus-visible:ring-2 focus-visible:ring-[#087FAE]"
                >
                  <XIcon className="h-4 w-4" />
                </button>
              </div>

              {/* Form Content (Includes Scrollable Fields & Fixed Sticky Footer) */}
              <AppointmentForm initialTreatment={treatment} />
            </div>
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}
