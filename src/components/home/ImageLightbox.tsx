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
      document.body.style.overflow = originalOverflow;
      document.removeEventListener('keydown', onKey);
      previous?.focus();
    };
    const originalOverflow = overflow;
  }, [open, index, count, onClose, onChange]);

  const onDragEnd = (_: unknown, info: PanInfo) => {
    if (index === null) return;
    if (info.offset.x < -60) onChange((index + 1) % count);
    else if (info.offset.x > 60) onChange((index - 1 + count) % count);
  };

  const img = index !== null ? images[index] : null;

  return (
    <AnimatePresence>
      {img && (
        <motion.div
          ref={dialogRef}
          role="dialog"
          aria-modal="true"
          aria-label="Image viewer"
          className="fixed inset-0 z-[60] flex flex-col bg-[#0A2033]/95 backdrop-blur-md"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 0.2 }}
        >
          {/* Header */}
          <div className="flex items-center justify-between px-5 py-4 text-white md:px-8 border-b border-white/10">
            <p className="text-xs sm:text-sm font-semibold tracking-wider text-[#DCEFF8]">
              {(index ?? 0) + 1} / {count}
            </p>
            <button
              ref={closeRef}
              type="button"
              onClick={onClose}
              aria-label="Close image viewer"
              className="flex h-10 w-10 items-center justify-center rounded-full border border-white/20 text-white transition-colors duration-200 hover:bg-white/10 hover:border-white cursor-pointer"
            >
              <XIcon className="h-5 w-5" />
            </button>
          </div>

          {/* Body */}
          <div className="relative flex flex-1 items-center justify-center px-4 pb-4 md:px-24">
            <AnimatePresence mode="wait">
              <motion.figure
                key={img.id}
                initial={{ opacity: 0, scale: 0.96 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0, scale: 0.96 }}
                transition={{ duration: 0.2, ease: [0.23, 1, 0.32, 1] }}
                drag="x"
                dragConstraints={{ left: 0, right: 0 }}
                dragElastic={0.2}
                onDragEnd={onDragEnd}
                className="flex max-h-full flex-col items-center touch-pan-y"
              >
                <img
                  src={img.src}
                  alt={img.alt}
                  className="max-h-[72vh] w-auto rounded-2xl object-contain shadow-2xl border border-white/10"
                />
                <figcaption className="mt-4 text-center font-serif text-lg sm:text-xl font-medium text-white">
                  {img.caption}
                </figcaption>
              </motion.figure>
            </AnimatePresence>

            {/* Desktop Navigation Arrows */}
            <button
              type="button"
              onClick={() => onChange(((index ?? 0) - 1 + count) % count)}
              aria-label="Previous image"
              className="absolute left-4 top-1/2 hidden h-12 w-12 -translate-y-1/2 items-center justify-center rounded-full border border-white/25 bg-black/20 text-white transition-colors duration-200 hover:bg-white/20 hover:border-white md:flex cursor-pointer"
            >
              <ArrowLeftIcon className="h-5 w-5" />
            </button>
            <button
              type="button"
              onClick={() => onChange(((index ?? 0) + 1) % count)}
              aria-label="Next image"
              className="absolute right-4 top-1/2 hidden h-12 w-12 -translate-y-1/2 items-center justify-center rounded-full border border-white/25 bg-black/20 text-white transition-colors duration-200 hover:bg-white/20 hover:border-white md:flex cursor-pointer"
            >
              <ArrowRightIcon className="h-5 w-5" />
            </button>
          </div>

          {/* Mobile Navigation Controls */}
          <div className="flex justify-center gap-4 pb-6 md:hidden">
            <button
              type="button"
              onClick={() => onChange(((index ?? 0) - 1 + count) % count)}
              aria-label="Previous image"
              className="flex h-11 w-11 items-center justify-center rounded-full border border-white/25 bg-black/20 text-white"
            >
              <ArrowLeftIcon className="h-5 w-5" />
            </button>
            <button
              type="button"
              onClick={() => onChange(((index ?? 0) + 1) % count)}
              aria-label="Next image"
              className="flex h-11 w-11 items-center justify-center rounded-full border border-white/25 bg-black/20 text-white"
            >
              <ArrowRightIcon className="h-5 w-5" />
            </button>
          </div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}
