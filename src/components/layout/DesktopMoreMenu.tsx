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
        className="flex items-center gap-1 rounded-full px-3 py-1.5 text-[13px] 2xl:text-[14px] font-medium text-[#34465A] transition-colors duration-200 hover:text-[#087FAE] hover:bg-[#F2F8FC] cursor-pointer"
      >
        <span>More</span>
        <ChevronDownIcon
          className={`h-3.5 w-3.5 transition-transform duration-200 ${open ? 'rotate-180 text-[#087FAE]' : ''}`}
          aria-hidden="true"
        />
      </button>

      <AnimatePresence>
        {open && (
          <motion.ul
            initial={{ opacity: 0, y: -6, scale: 0.97 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={{ opacity: 0, y: -4, scale: 0.98 }}
            transition={{ duration: 0.18, ease: [0.23, 1, 0.32, 1] }}
            style={{ transformOrigin: 'top right' }}
            className="absolute right-0 top-[calc(100%+10px)] w-56 rounded-2xl border border-[#E2EAF0] bg-white p-2 shadow-xl z-50"
          >
            {desktopMoreNav.map((item) => (
              <li key={item.label}>
                <Link
                  to={item.href}
                  onClick={() => setOpen(false)}
                  className="block rounded-xl px-3.5 py-2 text-xs sm:text-sm font-medium text-[#123B59] transition-colors duration-150 hover:bg-[#F2F8FC] hover:text-[#087FAE]"
                >
                  {item.label}
                </Link>
              </li>
            ))}
          </motion.ul>
        )}
      </AnimatePresence>
    </div>
  );
}
