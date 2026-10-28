import React, { useCallback, useState } from 'react';
import { ExpandIcon } from 'lucide-react';
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
  const close = useCallback(() => setActive(null), []);

  return (
    <section id="gallery" aria-labelledby="gallery-title" className="bg-ivory py-24 md:py-36">
      <div className="mx-auto max-w-[1440px] px-5 md:px-8 lg:px-12">
        <div className="grid gap-8 lg:grid-cols-12 lg:items-end">
          <SectionHeading id="gallery-title" eyebrow="The studio" title="A Closer Look at Our Space." className="lg:col-span-7" />
          <Reveal delay={0.1} className="lg:col-span-5">
            <p className="text-[16px] leading-[1.75] text-charcoal/70">
              Warm materials, natural light and spotless clinical rooms — a few glimpses of where your visit takes
              place. Select any image to view it larger.
            </p>
          </Reveal>
        </div>

        <ul className="mt-14 columns-1 gap-5 sm:columns-2 lg:columns-3 [&>li]:mb-5">
          {galleryImages.map((img, i) =>
          <li key={img.id} className="break-inside-avoid">
              <Reveal delay={0.04 * (i % 3)}>
                <button
                type="button"
                onClick={() => setActive(i)}
                className="group relative block w-full overflow-hidden rounded-[22px] text-left"
                aria-label={`View larger: ${img.caption}`}>
                
                  <img
                  src={img.src}
                  alt={img.alt}
                  loading="lazy"
                  decoding="async"
                  width={800}
                  height={img.aspect === 'landscape' ? 533 : img.aspect === 'portrait' ? 1000 : 800}
                  className={`w-full object-cover transition-transform duration-[700ms] ease-silk group-hover:scale-[1.04] ${aspectClass[img.aspect]}`} />
                
                  <span className="absolute inset-x-3 bottom-3 flex items-center justify-between rounded-full bg-charcoal/75 py-2 pl-4 pr-2 text-[13px] font-medium text-ivory backdrop-blur transition-[opacity,transform] duration-200 ease-silk md:translate-y-2 md:opacity-0 md:group-hover:translate-y-0 md:group-hover:opacity-100 md:group-focus-visible:translate-y-0 md:group-focus-visible:opacity-100">
                    {img.caption}
                    <span className="flex h-7 w-7 items-center justify-center rounded-full bg-ivory/15">
                      <ExpandIcon className="h-3.5 w-3.5" aria-hidden="true" />
                    </span>
                  </span>
                </button>
              </Reveal>
            </li>
          )}
        </ul>
      </div>
      <ImageLightbox images={galleryImages} index={active} onClose={close} onChange={setActive} />
    </section>);

}