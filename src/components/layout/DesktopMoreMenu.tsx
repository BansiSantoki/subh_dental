import React, { useEffect, useRef, useState } from 'react';
import { Link } from 'react-router-dom';
import { AnimatePresence, motion } from 'framer-motion';
import { ChevronDownIcon } from 'lucide-react';
import { desktopMoreNav } from '../../data/siteConfig';

export function DesktopMoreMenu() {
  const [open, setOpen] = useState(false);
  const ref = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (!open) return;
    const onClick = (e: MouseEvent) => {
      if (ref.current && !ref.current.contains(e.target as Node)) setOpen(false);
    };
    const onKey = (e: KeyboardEvent) => e.key === 'Escape' && setOpen(false);
    document.addEventListener('mousedown', onClick);
    document.addEventListener('keydown', onKey);
    return () => {
      document.removeEventListener('mousedown', onClick);
      document.removeEventListener('keydown', onKey);
    };
  }, [open]);

  return (
    <div ref={ref} className="relative">
      <button
        type="button"
        aria-expanded={open}
        aria-haspopup="true"
        onClick={() => setOpen((o) => !o)}
        className="flex items-center gap-1 text-[13.5px] font-medium text-charcoal/80 transition-colors duration-200 hover:text-forest">
        
        More
        <ChevronDownIcon className={`h-3.5 w-3.5 transition-transform duration-200 ${open ? 'rotate-180' : ''}`} aria-hidden="true" />
      </button>
      <AnimatePresence>
        {open &&
        <motion.ul
          initial={{ opacity: 0, y: -6, scale: 0.97 }}
          animate={{ opacity: 1, y: 0, scale: 1 }}
          exit={{ opacity: 0, y: -4, scale: 0.98 }}
          transition={{ duration: 0.18, ease: [0.23, 1, 0.32, 1] }}
          style={{ transformOrigin: 'top right' }}
          className="absolute right-0 top-[calc(100%+14px)] w-60 rounded-[18px] border border-charcoal/[0.08] bg-white p-2 shadow-[0_24px_60px_-28px_rgba(23,63,58,0.45)]">
          
            {desktopMoreNav.map((item) =>
          <li key={item.href}>
                <Link
              to={item.href}
              onClick={() => setOpen(false)}
              className="block rounded-[12px] px-4 py-2.5 text-[14px] text-charcoal/85 transition-colors duration-150 hover:bg-ivory hover:text-forest">
              
                  {item.label}
                </Link>
              </li>
          )}
          </motion.ul>
        }
      </AnimatePresence>
    </div>);

}