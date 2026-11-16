import React, { useState } from 'react';
import { Camera, ZoomIn } from 'lucide-react';
import { SEOHead } from '../components/shared/SEOHead';
import { Breadcrumbs } from '../components/shared/Breadcrumbs';
import { ImageLightbox } from '../components/home/ImageLightbox';
import { siteConfig } from '../data/siteConfig';
import { galleryImages } from '../data/gallery';
import { buttonClass } from '../utils/buttonStyles';
import { useAppointment } from '../contexts/AppointmentContext';

const aspectClass = {
  portrait: 'aspect-[4/5]',
  landscape: 'aspect-[3/2]',
  square: 'aspect-square'
};

export function GalleryPage() {
  const { openAppointment } = useAppointment();
  const [selectedCategory, setSelectedCategory] = useState<string>('All');
  const [activeLightboxIndex, setActiveLightboxIndex] = useState<number | null>(null);

  const categories = ['All', 'Clinic & Lounge', 'Treatment Operatory', 'Equipment', 'Consultation & Team', 'Smile Results'];

  const filteredImages =
    selectedCategory === 'All'
      ? galleryImages
      : galleryImages.filter((img) => img.category === selectedCategory);

  return (
    <>
      <SEOHead
        title={`Clinic Gallery & Practice Facilities | ${siteConfig.name}`}
        description="Explore the clinic facilities, modern treatment operatory rooms, sterilized instruments, and patient lounge at Dr. Naik's Shubh Smile Multispeciality Dental Clinic in Nashik."
        path="/gallery"
      />

      <div className="bg-[#F2F8FC] pt-24 pb-12 sm:pt-28 md:pt-30 md:pb-16">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 md:px-8 lg:px-12">
          <Breadcrumbs items={[{ label: 'Home', href: '/' }, { label: 'Gallery' }]} />

          {/* Page Header */}
          <div className="mt-6 max-w-3xl">
            <span className="inline-flex items-center gap-2 rounded-full bg-white px-3.5 py-1 text-xs font-semibold text-[#087FAE] border border-[#087FAE]/20 shadow-2xs">
              <Camera className="h-3.5 w-3.5" />
              Practice & Clinical Photography
            </span>
            <h1 className="mt-4 font-serif text-3xl sm:text-4xl lg:text-[44px] font-bold tracking-tight text-[#123B59] leading-tight">
              Take a look inside <span className="text-[#087FAE]">our clinic.</span>
            </h1>
            <p className="mt-4 text-base sm:text-lg leading-relaxed text-[#34465A]">
              We take pride in maintaining an ultra-clean, welcoming, and technologically modern dental clinic in Nashik. Browse our reception lounge, sterile treatment operatories, and dental instruments.
            </p>
          </div>

          {/* Category Filter Tabs */}
          <div className="mt-10 flex flex-wrap gap-2 border-b border-[#E2EAF0] pb-5">
            {categories.map((cat) => (
              <button
                key={cat}
                type="button"
                onClick={() => setSelectedCategory(cat)}
                className={`rounded-full px-4 py-2 text-xs sm:text-sm font-semibold transition-all duration-200 cursor-pointer ${
                  selectedCategory === cat
                    ? 'bg-[#087FAE] text-white shadow-sm'
                    : 'bg-white text-[#123B59] border border-[#E2EAF0] hover:border-[#087FAE] hover:text-[#087FAE]'
                }`}
              >
                {cat}
              </button>
            ))}
          </div>

          {/* Gallery Grid */}
          <ul className="mt-10 columns-1 gap-5 sm:columns-2 lg:columns-3 [&>li]:mb-5">
            {filteredImages.map((img) => (
              <li key={img.id} className="break-inside-avoid">
                <button
                  type="button"
                  onClick={() => {
                    const originalIndex = galleryImages.findIndex((g) => g.id === img.id);
                    setActiveLightboxIndex(originalIndex >= 0 ? originalIndex : 0);
                  }}
                  className="group relative block w-full overflow-hidden rounded-2xl border border-[#E2EAF0] bg-white text-left shadow-sm transition-all duration-300 hover:-translate-y-1 hover:shadow-lg cursor-pointer"
                  aria-label={`View larger: ${img.caption}`}
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
                      <ZoomIn className="h-3.5 w-3.5" aria-hidden="true" />
                    </span>
                  </div>
                </button>
              </li>
            ))}
          </ul>

          {/* Booking CTA Bottom */}
          <div className="mt-16 rounded-3xl bg-white p-8 sm:p-12 border border-[#E2EAF0] shadow-sm text-center max-w-2xl mx-auto">
            <h3 className="font-serif text-2xl font-bold text-[#123B59]">
              Experience our clinic in person
            </h3>
            <p className="mt-2 text-sm text-[#34465A]/80 leading-relaxed">
              Schedule a consultation at Dr. Naik's Shubh Smile Dental Clinic in Indira Nagar, Nashik.
            </p>
            <div className="mt-6">
              <button
                type="button"
                onClick={() => openAppointment()}
                className={buttonClass('primary', 'lg', 'shadow-md')}
              >
                Book an Appointment Online
              </button>
            </div>
          </div>
        </div>
      </div>

      <ImageLightbox
        images={galleryImages}
        index={activeLightboxIndex}
        onClose={() => setActiveLightboxIndex(null)}
        onChange={setActiveLightboxIndex}
      />
    </>
  );
}
