import React, { useCallback, useState } from 'react';
import { Link } from 'react-router-dom';
import { ExpandIcon, ArrowRightIcon } from 'lucide-react';
import { ImageLightbox } from './ImageLightbox';
import { Reveal } from '../shared/Reveal';
import { SectionHeading } from '../shared/SectionHeading';
import { galleryImages } from '../../data/gallery';

export function GallerySection() {
  const [active, setActive] = useState<number | null>(null);
  const close = useCallback(() => setActive(null), []);

  // Curated, small, and attractive homepage preview (fewer, better photos)
  const previewImages = galleryImages.slice(0, 4);

  return (
    <section id="gallery" aria-labelledby="gallery-title" className="bg-[#F4F9FC] py-20 md:py-28">
      <div className="mx-auto max-w-[1440px] px-4 sm:px-6 md:px-8 lg:px-12">
        <div className="flex flex-col gap-6 sm:flex-row sm:items-end sm:justify-between">
          <SectionHeading
            id="gallery-title"
            eyebrow="Clinic & Practice Gallery"
            title="A Look Inside Our Clinic."
            intro="Explore our reception lounge, modern operatory suites, and sterilised equipment in Indira Nagar, Nashik."
          />

          <Reveal delay={0.08} className="shrink-0">
            <Link
              to="/gallery"
              className="inline-flex items-center gap-2 rounded-full border border-[#E2EAF0] bg-white px-5 py-2.5 text-xs sm:text-sm font-semibold text-[#123B59] hover:border-[#087FAE] hover:text-[#087FAE] transition-colors shadow-2xs"
            >
              <span>View Full Gallery</span>
              <ArrowRightIcon className="h-4 w-4" />
            </Link>
          </Reveal>
        </div>

        {/* Small & Attractive Preview Grid */}
        <div className="mt-10 grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
          {previewImages.map((img, i) => (
            <Reveal key={img.id} delay={0.05 * i}>
              <button
                type="button"
                onClick={() => setActive(i)}
                className="group relative block w-full overflow-hidden rounded-2xl border border-[#E2EAF0] bg-white text-left shadow-xs transition-all duration-300 hover:-translate-y-1 hover:shadow-md cursor-pointer"
                aria-label={`View larger photograph: ${img.caption}`}
              >
                <div className="aspect-[4/3] w-full overflow-hidden bg-slate-100">
                  <img
                    src={img.src}
                    alt={img.alt}
                    loading="lazy"
                    decoding="async"
                    width={600}
                    height={450}
                    className="h-full w-full object-cover transition-transform duration-500 ease-silk group-hover:scale-105"
                  />
                </div>

                {/* Caption Bar */}
                <div className="p-3.5 bg-white border-t border-[#E2EAF0] flex items-center justify-between">
                  <p className="truncate text-xs font-semibold text-[#123B59]">{img.caption}</p>
                  <span className="flex h-6 w-6 shrink-0 items-center justify-center rounded-full bg-[#EAF4FA] text-[#087FAE]">
                    <ExpandIcon className="h-3 w-3" aria-hidden="true" />
                  </span>
                </div>
              </button>
            </Reveal>
          ))}
        </div>
      </div>

      <ImageLightbox images={previewImages} index={active} onClose={close} onChange={setActive} />
    </section>
  );
}
