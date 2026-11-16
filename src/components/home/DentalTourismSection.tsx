import React from 'react';
import { PlaneIcon, MapPinIcon, CalendarCheckIcon, CompassIcon } from 'lucide-react';
import { ParallaxImage } from '../shared/ParallaxImage';
import { Reveal } from '../shared/Reveal';
import { WhatsAppLink } from '../shared/WhatsAppLink';
import { tourismSteps, travelPlaceholders } from '../../data/homeSections';
import { images } from '../../data/images';
import { siteConfig } from '../../data/siteConfig';
import { useAppointment } from '../../contexts/AppointmentContext';
import { buttonClass } from '../../utils/buttonStyles';

export function DentalTourismSection() {
  const { openAppointment } = useAppointment();

  return (
    <section id="visiting-nashik" aria-labelledby="tourism-title" className="bg-white py-10 sm:py-14 md:py-16 lg:py-18">
      <div className="mx-auto max-w-[1440px] px-4 sm:px-6 md:px-8 lg:px-12">
        {/* Scenic Nashik Landscape Banner */}
        <Reveal>
          <div className="overflow-hidden rounded-[32px] border border-[#E2EAF0] shadow-[0_20px_50px_-20px_rgba(8,127,174,0.18)]">
            <ParallaxImage
              src={images.nashikVineyard}
              alt="Beautiful scenic vineyards and Western Ghats hills in Nashik, Maharashtra"
              className="aspect-[16/9] sm:aspect-[21/9] w-full"
              strength={35}
            />
          </div>
        </Reveal>

        {/* Content Box Overlapping */}
        <div className="relative -mt-12 sm:-mt-20 grid gap-10 lg:grid-cols-12 lg:gap-14">
          {/* Left Column: Heading, Info, CTAs */}
          <Reveal className="lg:col-span-6">
            <div className="rounded-[28px] border border-[#E2EAF0] bg-white p-7 sm:p-10 lg:p-12 shadow-xl shadow-slate-900/5">
              <span className="inline-flex items-center gap-2 rounded-full bg-[#DCEFF8] px-3.5 py-1 text-xs font-semibold text-[#087FAE]">
                <CompassIcon className="h-3.5 w-3.5" />
                <span>Visiting Nashik</span>
              </span>

              <h2
                id="tourism-title"
                className="mt-5 font-serif text-3xl sm:text-4xl lg:text-[42px] font-bold text-[#123B59] leading-tight"
              >
                Thoughtful Dental Care for Your Visit to Nashik.
              </h2>

              <p className="mt-5 text-base sm:text-lg leading-relaxed text-[#34465A]">
                Planning a trip to Nashik and exploring dental treatments? Contact our clinic team in advance
                to discuss your dental goals, schedule an unhurried consultation, and receive a clear
                treatment timeline before making travel commitments.
              </p>

              <div className="mt-8 flex flex-wrap items-center gap-3.5">
                <button
                  type="button"
                  onClick={() => openAppointment('a consultation during my visit to Nashik')}
                  className={buttonClass('primary', 'lg', 'shadow-md')}
                >
                  <CalendarCheckIcon className="h-5 w-5" />
                  <span>Plan a Consultation</span>
                </button>

                <WhatsAppLink
                  message={siteConfig.tourismWhatsAppMessage}
                  variant="whatsappOutline"
                  size="lg"
                >
                  Inquire on WhatsApp
                </WhatsAppLink>
              </div>

              <p className="mt-4 text-xs leading-relaxed text-[#34465A]/70">
                Accurate clinical timelines and options can only be confirmed after an in-person assessment.
              </p>

              <div className="mt-4">
                <a
                  href="/dental-tourism"
                  className="inline-flex items-center gap-1.5 text-xs sm:text-sm font-semibold text-[#087FAE] hover:underline"
                >
                  <span>Read Complete Nashik Dental Travel Guide &rarr;</span>
                </a>
              </div>
            </div>
          </Reveal>

          {/* Right Column: 4-Step Process & Travel Advice */}
          <div className="lg:col-span-6 lg:pt-16">
            <div className="space-y-4">
              {tourismSteps.map((s, i) => (
                <Reveal key={s.title} delay={0.06 * i}>
                  <div className="flex gap-4 rounded-2xl border border-[#E2EAF0] bg-[#F2F8FC] p-5 transition-colors duration-200 hover:border-[#087FAE]/30">
                    <span className="flex h-10 w-10 shrink-0 items-center justify-center rounded-xl bg-[#087FAE] text-white font-serif font-bold text-sm shadow-sm">
                      0{i + 1}
                    </span>
                    <div>
                      <h3 className="font-serif text-lg font-bold text-[#123B59]">{s.title}</h3>
                      <p className="mt-1 text-sm leading-relaxed text-[#34465A]/85">{s.text}</p>
                    </div>
                  </div>
                </Reveal>
              ))}
            </div>

            {/* Travel Guidelines Card */}
            <Reveal delay={0.2} className="mt-6">
              <div className="rounded-2xl border border-[#E2EAF0] bg-white p-6 shadow-sm">
                <h4 className="font-serif text-lg font-bold text-[#123B59] flex items-center gap-2">
                  <MapPinIcon className="h-4 w-4 text-[#087FAE]" />
                  <span>Travel & Stay Planning Advice</span>
                </h4>
                <div className="mt-4 space-y-3">
                  {travelPlaceholders.map((t) => (
                    <div key={t.title} className="text-sm">
                      <p className="font-semibold text-[#123B59]">{t.title}</p>
                      <p className="text-xs sm:text-sm text-[#34465A]/80 mt-0.5 leading-relaxed">{t.text}</p>
                    </div>
                  ))}
                </div>
              </div>
            </Reveal>
          </div>
        </div>
      </div>
    </section>
  );
}
