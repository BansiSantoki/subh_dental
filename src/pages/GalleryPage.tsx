import React, { useState } from 'react';
import { Camera, X, ZoomIn, CheckCircle2, ShieldCheck, Calendar } from 'lucide-react';
import { SEOHead } from '../components/shared/SEOHead';
import { Breadcrumbs } from '../components/shared/Breadcrumbs';
import { siteConfig } from '../data/siteConfig';
import { galleryImages } from '../data/gallery';
import { buttonClass } from '../utils/buttonStyles';
import { useAppointment } from '../contexts/AppointmentContext';
import type { GalleryImage } from '../types/content';

export function GalleryPage() {
  const { openAppointment } = useAppointment();
  const [selectedCategory, setSelectedCategory] = useState<string>('All');
  const [activeImage, setActiveImage] = useState<GalleryImage | null>(null);

  const categories = ['All', 'Clinic & Lounge', 'Treatment Operatory', 'Equipment', 'Consultation & Team', 'Smile Results'];

  const filteredImages = selectedCategory === 'All'
    ? galleryImages
    : galleryImages.filter((img) => img.category === selectedCategory);

  return (
    <>
      <SEOHead
        title={`Clinic Gallery & Facilities | ${siteConfig.name}`}
        description="Explore the real clinic facilities, modern treatment operatories, sterilized equipment, and patient spaces at Dr. Naik\'s Shubh Smile Multispeciality Dental Clinic in Nashik."
        path="/gallery"
      />

      <div className="bg-slate-50/50 pt-24 pb-16">
        <div className="mx-auto max-w-7xl px-5 sm:px-8 lg:px-12">
          <Breadcrumbs items={[{ label: 'Gallery', href: '/gallery' }]} />

          {/* Page Header */}
          <div className="mt-6 max-w-3xl">
            <span className="inline-flex items-center gap-2 rounded-full bg-sky-50 px-3.5 py-1 text-xs font-semibold text-primary-700 border border-sky-100">
              <Camera className="h-3.5 w-3.5 text-primary-600" />
              Real Clinic Photography
            </span>
            <h1 className="mt-4 text-3xl font-bold tracking-tight text-slate-900 sm:text-4xl lg:text-5xl">
              Take a transparent look inside <span className="text-primary-600">our clinic.</span>
            </h1>
            <p className="mt-4 text-base sm:text-lg leading-relaxed text-slate-600">
              We take immense pride in maintaining an ultra-clean, welcoming, and technologically advanced clinical space in Nashik. Explore our treatment rooms, sterilization facilities, and patient care areas.
            </p>
          </div>

          {/* Category Filter Tabs */}
          <div className="mt-8 flex flex-wrap gap-2 border-b border-slate-200/80 pb-4">
            {categories.map((cat) => (
              <button
                key={cat}
                type="button"
                onClick={() => setSelectedCategory(cat)}
                className={`rounded-xl px-4 py-2 text-xs sm:text-sm font-semibold transition-all ${
                  selectedCategory === cat
                    ? 'bg-primary-600 text-white shadow-sm'
                    : 'bg-white text-slate-600 border border-slate-200 hover:border-primary-400 hover:text-primary-600'
                }`}
              >
                {cat}
              </button>
            ))}
          </div>

          {/* Gallery Grid */}
          <div className="mt-8 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
            {filteredImages.map((img) => (
              <div
                key={img.id}
                onClick={() => setActiveImage(img)}
                className="group relative cursor-pointer overflow-hidden rounded-2xl border border-slate-200/80 bg-white shadow-sm transition-all duration-300 hover:-translate-y-1 hover:shadow-md"
              >
                <div className="aspect-[4/3] w-full overflow-hidden bg-slate-100">
                  <img
                    src={img.src}
                    alt={img.alt}
                    className="h-full w-full object-cover transition-transform duration-500 group-hover:scale-105"
                    loading="lazy"
                  />
                </div>
                <div className="p-4">
                  <span className="text-[11px] font-bold uppercase tracking-wider text-primary-600">
                    {img.category}
                  </span>
                  <p className="mt-1 text-sm font-bold text-slate-900">{img.caption}</p>
                </div>
                <div className="absolute top-3 right-3 rounded-full bg-white/90 p-2 text-slate-700 shadow-sm opacity-0 transition-opacity duration-200 group-hover:opacity-100">
                  <ZoomIn className="h-4 w-4" />
                </div>
              </div>
            ))}
          </div>

          {/* Hygiene & Sterilization Assurance Section */}
          <div className="mt-20 rounded-2xl bg-white p-8 sm:p-12 border border-slate-200 shadow-sm">
            <div className="grid gap-8 lg:grid-cols-12 lg:items-center">
              <div className="lg:col-span-8">
                <span className="inline-flex items-center gap-1.5 text-xs font-bold uppercase tracking-wider text-secondary-600">
                  <ShieldCheck className="h-4 w-4" /> Hygiene Protocol
                </span>
                <h3 className="mt-2 text-2xl font-bold text-slate-900">
                  Hospital-Grade Infection Control & Sterilization
                </h3>
                <p className="mt-3 text-sm sm:text-base leading-relaxed text-slate-600">
                  Every clinical instrument passes through an ultrasonic cleaner, medical packaging pouches, and a Class-B vacuum autoclave. We follow zero-compromise hygiene standards for 100% patient safety.
                </p>
                <div className="mt-6 grid grid-cols-1 sm:grid-cols-2 gap-3 text-sm text-slate-700">
                  {[
                    'Multi-stage Class B Autoclave Cycle',
                    'Single-use disposable barriers for chairs & sensors',
                    'Medical air filtration & surface disinfection',
                    'RO purified water lines for all dental operatories'
                  ].map((item, idx) => (
                    <div key={idx} className="flex items-center gap-2">
                      <CheckCircle2 className="h-4 w-4 text-primary-600 shrink-0" />
                      <span>{item}</span>
                    </div>
                  ))}
                </div>
              </div>

              <div className="lg:col-span-4 text-center lg:text-right">
                <button
                  type="button"
                  onClick={() => openAppointment()}
                  className={buttonClass('primary', 'lg', 'w-full sm:w-auto')}
                >
                  <Calendar className="mr-2 h-4 w-4" />
                  Book Your Visit
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Lightbox Modal */}
      {activeImage && (
        <div
          className="fixed inset-0 z-50 flex items-center justify-center bg-slate-900/90 p-4 backdrop-blur-sm"
          onClick={() => setActiveImage(null)}
        >
          <div
            className="relative max-w-4xl w-full overflow-hidden rounded-2xl bg-white p-2 shadow-2xl"
            onClick={(e) => e.stopPropagation()}
          >
            <button
              type="button"
              onClick={() => setActiveImage(null)}
              className="absolute top-4 right-4 z-10 rounded-full bg-slate-900/70 p-2 text-white hover:bg-slate-900"
              aria-label="Close image"
            >
              <X className="h-5 w-5" />
            </button>
            <div className="overflow-hidden rounded-xl bg-slate-950 max-h-[75vh] flex items-center justify-center">
              <img
                src={activeImage.src}
                alt={activeImage.alt}
                className="max-h-[75vh] w-auto object-contain"
              />
            </div>
            <div className="p-4 sm:p-5">
              <span className="text-xs font-bold uppercase tracking-wider text-primary-600">
                {activeImage.category}
              </span>
              <h3 className="mt-1 text-base sm:text-lg font-bold text-slate-900">
                {activeImage.caption}
              </h3>
              <p className="mt-1 text-xs sm:text-sm text-slate-500">{activeImage.alt}</p>
            </div>
          </div>
        </div>
      )}
    </>
  );
}
