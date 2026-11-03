import React, { useEffect, useRef } from 'react';
import { Link } from 'react-router-dom';
import { AnimatePresence, motion } from 'framer-motion';
import { PhoneIcon } from 'lucide-react';
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
    const { overflow } = document.body.style;
    document.body.style.overflow = 'hidden';
    const onKey = (e: KeyboardEvent) => e.key === 'Escape' && onClose();
    document.addEventListener('keydown', onKey);
    window.setTimeout(() => panelRef.current?.querySelector<HTMLElement>('a')?.focus(), 60);
    return () => {
      document.body.style.overflow = overflow;
      document.removeEventListener('keydown', onKey);
    };
  }, [open, onClose]);

  return (
    <AnimatePresence>
      {open &&
      <motion.div
        id="mobile-navigation"
        ref={panelRef}
        initial={{ opacity: 0, y: -12 }}
        animate={{ opacity: 1, y: 0 }}
        exit={{ opacity: 0, y: -8 }}
        transition={{ duration: 0.25, ease: [0.23, 1, 0.32, 1] }}
        className="fixed inset-x-0 bottom-0 top-[68px] z-30 overflow-y-auto bg-ivory xl:hidden">
        
          <nav aria-label="Mobile" className="mx-auto flex min-h-full max-w-xl flex-col px-6 pb-[calc(2rem+env(safe-area-inset-bottom))] pt-6">
            <ul className="divide-y divide-charcoal/[0.08] border-y border-charcoal/[0.08]">
              {mainNav.map((item, i) =>
            <motion.li
              key={item.href}
              initial={{ opacity: 0, y: 8 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.25, delay: 0.03 * i, ease: [0.23, 1, 0.32, 1] }}>
              
                  <Link
                to={item.href}
                onClick={onClose}
                className="flex items-center justify-between py-4 font-serif text-[27px] font-medium text-charcoal transition-colors duration-200 hover:text-forest">
                
                    {item.label}
                  </Link>
                </motion.li>
            )}
            </ul>
            <div className="mt-8 grid gap-3">
              <button type="button" onClick={onBook} className={buttonClass('primary', 'lg', 'w-full')}>
                Book an Appointment
              </button>
              <WhatsAppLink size="lg" className="w-full">
                Chat on WhatsApp
              </WhatsAppLink>
              {siteConfig.phoneNumbers.map((phone) => (
                <a
                  key={phone.e164}
                  href={`tel:${phone.e164}`}
                  className="mt-2 inline-flex items-center justify-center gap-2 text-[14px] font-medium text-charcoal/70"
                >
                  <PhoneIcon className="h-4 w-4" aria-hidden="true" />
                  {phone.display}
                </a>
              ))}
            </div>
          </nav>
        </motion.div>
      }
    </AnimatePresence>);

}