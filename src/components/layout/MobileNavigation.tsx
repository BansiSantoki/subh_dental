import React, { useEffect, useRef } from 'react';
import { Link } from 'react-router-dom';
import { AnimatePresence, motion } from 'framer-motion';
import { PhoneIcon, ChevronRightIcon, CalendarCheckIcon } from 'lucide-react';
import { mainNav, siteConfig } from '../../data/siteConfig';
import { WhatsAppLink } from '../shared/WhatsAppLink';
import { buttonClass } from '../../utils/buttonStyles';

interface MobileNavigationProps {
  open: boolean;
  onClose: () => void;
  onBook: () => void;
}

export function MobileNavigation({ open, onClose, onBook }: MobileNavigationProps) {
  const panelRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (!open) return;
    const originalOverflow = document.body.style.overflow;
    document.body.style.overflow = 'hidden';

    const onKey = (e: KeyboardEvent) => e.key === 'Escape' && onClose();
    document.addEventListener('keydown', onKey);

    return () => {
      document.body.style.overflow = originalOverflow;
      document.removeEventListener('keydown', onKey);
    };
  }, [open, onClose]);

  return (
    <AnimatePresence>
      {open && (
        <motion.div
          id="mobile-navigation"
          ref={panelRef}
          initial={{ opacity: 0, y: -10 }}
          animate={{ opacity: 1, y: 0 }}
          exit={{ opacity: 0, y: -10 }}
          transition={{ duration: 0.22, ease: [0.23, 1, 0.32, 1] }}
          className="fixed inset-x-0 bottom-0 top-20 sm:top-[88px] z-30 overflow-y-auto bg-white border-t border-[#E2EAF0] shadow-2xl lg:hidden"
        >
          <nav
            aria-label="Mobile Navigation"
            className="mx-auto flex min-h-full max-w-lg flex-col px-6 pb-[calc(2.5rem+env(safe-area-inset-bottom))] pt-5"
          >
            {/* Nav Links */}
            <ul className="divide-y divide-[#E2EAF0] border-b border-[#E2EAF0]">
              {mainNav.map((item, i) => (
                <motion.li
                  key={item.label}
                  initial={{ opacity: 0, x: -10 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ duration: 0.2, delay: 0.02 * i }}
                >
                  <Link
                    to={item.href}
                    onClick={onClose}
                    className="flex items-center justify-between py-3.5 text-base font-semibold text-[#123B59] transition-colors duration-150 hover:text-[#087FAE] hover:translate-x-1"
                  >
                    <span>{item.label}</span>
                    <ChevronRightIcon className="h-4 w-4 text-[#087FAE]/60" />
                  </Link>
                </motion.li>
              ))}
            </ul>

            {/* Quick Actions */}
            <div className="mt-6 space-y-3">
              <button
                type="button"
                onClick={onBook}
                className={buttonClass('primary', 'lg', 'w-full shadow-md')}
              >
                <CalendarCheckIcon className="h-5 w-5" />
                <span>Book Appointment Online</span>
              </button>

              <WhatsAppLink size="lg" className="w-full">
                Chat on WhatsApp
              </WhatsAppLink>
            </div>

            {/* Contact Callouts */}
            <div className="mt-6 rounded-2xl bg-[#F2F8FC] p-4 border border-[#E2EAF0]">
              <p className="text-xs font-semibold text-[#087FAE] flex items-center gap-1.5">
                <span className="h-1.5 w-1.5 rounded-full bg-[#087FAE]" />
                <span>Direct Clinic Help Desk</span>
              </p>
              <div className="mt-2 space-y-2">
                {siteConfig.phoneNumbers.map((phone) => (
                  <a
                    key={phone.e164}
                    href={`tel:${phone.e164}`}
                    className="flex items-center gap-2 text-sm font-semibold text-[#123B59] hover:text-[#087FAE]"
                  >
                    <PhoneIcon className="h-4 w-4 text-[#087FAE]" />
                    <span>{phone.display}</span>
                  </a>
                ))}
              </div>
              <p className="mt-3 text-xs text-[#34465A]/80 leading-relaxed">
                Sundaram Appt, Indira Nagar, Nashik
              </p>
            </div>
          </nav>
        </motion.div>
      )}
    </AnimatePresence>
  );
}
