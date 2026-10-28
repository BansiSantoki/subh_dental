import React, { useEffect, useRef } from 'react';
import { AnimatePresence, motion, type PanInfo } from 'framer-motion';
import { ArrowLeftIcon, ArrowRightIcon, XIcon } from 'lucide-react';
import type { GalleryImage } from '../../types/content';

interface ImageLightboxProps {
  images: GalleryImage[];
  index: number | null;
  onClose: () => void;
  onChange: (index: number) => void;
}

export function ImageLightbox({ images, index, onClose, onChange }: ImageLightboxProps) {
  const closeRef = useRef<HTMLButtonElement>(null);
  const dialogRef = useRef<HTMLDivElement>(null);
  const open = index !== null;
  const count = images.length;

  useEffect(() => {
    if (!open) return;
    const previous = document.activeElement as HTMLElement | null;
    const { overflow } = document.body.style;
    document.body.style.overflow = 'hidden';
    closeRef.current?.focus();
    const onKey = (e: KeyboardEvent) => {
      if (e.key === 'Escape') onClose();
      if (e.key === 'ArrowRight') onChange(((index ?? 0) + 1) % count);
      if (e.key === 'ArrowLeft') onChange(((index ?? 0) - 1 + count) % count);
      if (e.key === 'Tab' && dialogRef.current) {
        const f = dialogRef.current.querySelectorAll<HTMLElement>('button');
        if (e.shiftKey && document.activeElement === f[0]) {
          e.preventDefault();
          f[f.length - 1].focus();
        } else if (!e.shiftKey && document.activeElement === f[f.length - 1]) {
          e.preventDefault();
          f[0].focus();
        }
      }
    };
    document.addEventListener('keydown', onKey);
    return () => {
      document.body.style.overflow = overflow;
      document.removeEventListener('keydown', onKey);
      previous?.focus();
    };
  }, [open, index, count, onClose, onChange]);

  const onDragEnd = (_: unknown, info: PanInfo) => {
    if (index === null) return;
    if (info.offset.x < -60) onChange((index + 1) % count);else
    if (info.offset.x > 60) onChange((index - 1 + count) % count);
  };

  const img = index !== null ? images[index] : null;

  return (
    <AnimatePresence>
      {img &&
      <motion.div
        ref={dialogRef}
        role="dialog"
        aria-modal="true"
        aria-label="Image viewer"
        className="fixed inset-0 z-[60] flex flex-col bg-forest-deep/95 backdrop-blur-sm"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        exit={{ opacity: 0 }}
        transition={{ duration: 0.2 }}>
        
          <div className="flex items-center justify-between px-5 py-4 text-ivory md:px-8">
            <p className="text-[13px] tabular-nums text-ivory/70">
              {(index ?? 0) + 1} / {count}
            </p>
            <button
            ref={closeRef}
            type="button"
            onClick={onClose}
            aria-label="Close image viewer"
            className="flex h-11 w-11 items-center justify-center rounded-full border border-ivory/25 transition-colors duration-200 hover:bg-ivory/10">
            
              <XIcon className="h-5 w-5" />
            </button>
          </div>
          <div className="relative flex flex-1 items-center justify-center px-4 pb-4 md:px-24">
            <AnimatePresence mode="wait">
              <motion.figure
              key={img.id}
              initial={{ opacity: 0, scale: 0.97 }}
              animate={{ opacity: 1, scale: 1 }}
              exit={{ opacity: 0, scale: 0.98 }}
              transition={{ duration: 0.22, ease: [0.23, 1, 0.32, 1] }}
              drag="x"
              dragConstraints={{ left: 0, right: 0 }}
              dragElastic={0.2}
              onDragEnd={onDragEnd}
              className="flex max-h-full flex-col items-center touch-pan-y">
              
                <img src={img.src} alt={img.alt} className="max-h-[72vh] w-auto rounded-[18px] object-contain" />
                <figcaption className="mt-4 text-center font-serif text-[20px] italic text-ivory/85">{img.caption}</figcaption>
              </motion.figure>
            </AnimatePresence>
            <button
            type="button"
            onClick={() => onChange(((index ?? 0) - 1 + count) % count)}
            aria-label="Previous image"
            className="absolute left-3 top-1/2 hidden h-12 w-12 -translate-y-1/2 items-center justify-center rounded-full border border-ivory/25 text-ivory transition-colors duration-200 hover:bg-ivory/10 md:left-8 md:flex">
            
              <ArrowLeftIcon className="h-5 w-5" />
            </button>
            <button
            type="button"
            onClick={() => onChange(((index ?? 0) + 1) % count)}
            aria-label="Next image"
            className="absolute right-3 top-1/2 hidden h-12 w-12 -translate-y-1/2 items-center justify-center rounded-full border border-ivory/25 text-ivory transition-colors duration-200 hover:bg-ivory/10 md:right-8 md:flex">
            
              <ArrowRightIcon className="h-5 w-5" />
            </button>
          </div>
          <div className="flex justify-center gap-3 pb-[calc(1.5rem+env(safe-area-inset-bottom))] md:hidden">
            <button
            type="button"
            onClick={() => onChange(((index ?? 0) - 1 + count) % count)}
            aria-label="Previous image"
            className="flex h-12 w-12 items-center justify-center rounded-full border border-ivory/25 text-ivory">
            
              <ArrowLeftIcon className="h-5 w-5" />
            </button>
            <button
            type="button"
            onClick={() => onChange(((index ?? 0) + 1) % count)}
            aria-label="Next image"
            className="flex h-12 w-12 items-center justify-center rounded-full border border-ivory/25 text-ivory">
            
              <ArrowRightIcon className="h-5 w-5" />
            </button>
          </div>
        </motion.div>
      }
    </AnimatePresence>);

}