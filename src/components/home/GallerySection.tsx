import React, { useCallback, useState } from 'react';
import { ExpandIcon, CameraIcon } from 'lucide-react';
import { ImageLightbox } from './ImageLightbox';
import { Reveal } from '../shared/Reveal';
import { SectionHeading } from '../shared/SectionHeading';
import { galleryImages } from '../../data/gallery';

const aspectClass = {
  portrait: 'aspect-[4/5]',
  landscape: 'aspect-[3/2]',
  square: 'aspect-square'
};

export function GallerySection() {
  const [active, setActive] = useState<number | null>(null);
  const [category, setCategory] = useState<string>('All');
  const close = useCallback(() => setActive(null), []);

  const categories = ['All', 'Clinic & Lounge', 'Treatment Operatory', 'Equipment', 'Consultation & Team', 'Smile Results'];

  const filtered = category === 'All'
    ? galleryImages
    : galleryImages.filter((img) => img.category === category);

  return (
    <section id="gallery" aria-labelledby="gallery-title" className="bg-[#F2F8FC] py-20 md:py-28 lg:py-32">
      <div className="mx-auto max-w-[1440px] px-4 sm:px-6 md:px-8 lg:px-12">
        <div className="flex flex-col gap-8 lg:flex-row lg:items-end lg:justify-between">
          <SectionHeading
            id="gallery-title"
            eyebrow="Clinic & Practice Gallery"
            title="A Closer Look at Our Space."
            intro="Explore our welcoming reception, spotless clinical treatment suites, and sterilized instrumentation in Nashik. Select any photograph to view larger."
          />

          {/* Category Tabs */}
          <Reveal delay={0.08} className="shrink-0">
            <div className="no-scrollbar flex gap-2 overflow-x-auto pb-1">
              {categories.map((cat) => (
                <button
                  key={cat}
                  type="button"
                  onClick={() => setCategory(cat)}
                  className={`rounded-full px-4 py-2 text-xs sm:text-sm font-semibold transition-all duration-200 cursor-pointer ${
                    category === cat
                      ? 'bg-[#087FAE] text-white shadow-sm'
                      : 'border border-[#E2EAF0] bg-white text-[#123B59] hover:border-[#087FAE] hover:text-[#087FAE]'
                  }`}
                >
                  {cat}
                </button>
              ))}
            </div>
          </Reveal>
        </div>

        {/* Gallery Grid */}
        <ul className="mt-12 sm:mt-14 columns-1 gap-5 sm:columns-2 lg:columns-3 [&>li]:mb-5">
          {filtered.map((img, i) => (
            <li key={img.id} className="break-inside-avoid">
              <Reveal delay={0.04 * (i % 3)}>
                <button
                  type="button"
                  onClick={() => {
                    const originalIndex = galleryImages.findIndex((g) => g.id === img.id);
                    setActive(originalIndex >= 0 ? originalIndex : 0);
                  }}
                  className="group relative block w-full overflow-hidden rounded-2xl border border-[#E2EAF0] bg-white text-left shadow-sm transition-all duration-300 hover:-translate-y-1 hover:shadow-lg cursor-pointer"
                  aria-label={`View larger photograph: ${img.caption}`}
                >
                  <img
                    src={img.src}
                    alt={img.alt}
                    loading="lazy"
                    decoding="async"
                    width={800}
                    height={img.aspect === 'landscape' ? 533 : img.aspect === 'portrait' ? 1000 : 800}
                    className={`w-full object-cover transition-transform duration-700 ease-silk group-hover:scale-105 ${aspectClass[img.aspect]}`}
                  />

                  {/* Caption Bar */}
                  <div className="absolute inset-x-3 bottom-3 flex items-center justify-between rounded-xl bg-[#123B59]/85 py-2.5 pl-4 pr-2.5 text-xs sm:text-sm font-medium text-white shadow-md backdrop-blur transition-all duration-200 group-hover:bg-[#087FAE]/95">
                    <span className="truncate pr-2">{img.caption}</span>
                    <span className="flex h-7 w-7 shrink-0 items-center justify-center rounded-full bg-white/20">
                      <ExpandIcon className="h-3.5 w-3.5" aria-hidden="true" />
                    </span>
                  </div>
                </button>
              </Reveal>
            </li>
          ))}
        </ul>
      </div>

      <ImageLightbox images={galleryImages} index={active} onClose={close} onChange={setActive} />
    </section>
  );
}
