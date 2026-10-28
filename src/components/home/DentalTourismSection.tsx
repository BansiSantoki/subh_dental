import React from 'react';
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
    <section id="visiting-nashik" aria-labelledby="tourism-title" className="bg-ivory py-24 md:py-36">
      <div className="mx-auto max-w-[1440px] px-5 md:px-8 lg:px-12">
        <Reveal>
          <ParallaxImage
            src={images.nashikVineyard}
            alt="Vineyards near Nashik at golden hour with the Western Ghats in the distance"
            className="aspect-[4/3] rounded-[32px] sm:aspect-[16/8] lg:aspect-[21/8]"
            strength={50} />
          
        </Reveal>

        <div className="relative -mt-16 grid gap-12 sm:-mt-24 lg:grid-cols-12 lg:gap-16">
          <Reveal className="lg:col-span-6">
            <div className="rounded-[28px] bg-ivory p-7 pt-9 sm:mx-6 sm:p-10 lg:mx-0 lg:ml-10 lg:p-12">
              <p className="flex items-center gap-3 text-[11.5px] font-semibold uppercase tracking-[0.24em] text-forest">
                <span className="h-px w-8 bg-champagne" aria-hidden="true" />
                Visiting Nashik
              </p>
              <h2
                id="tourism-title"
                className="mt-5 text-balance font-serif text-[40px] font-medium leading-[1.02] tracking-[-0.015em] text-charcoal sm:text-[52px]">
                
                Thoughtful Dental Care for Your Visit to Nashik.
              </h2>
              <p className="mt-6 text-pretty text-[16.5px] leading-[1.75] text-charcoal/70">
                Planning a visit to Nashik and exploring dental treatment options? Contact our team to discuss your
                concerns, arrange an initial consultation, and understand the next steps before making travel plans.
              </p>
              <div className="mt-9 flex flex-col gap-3 sm:flex-row">
                <button type="button" onClick={() => openAppointment('a consultation during my visit to Nashik')} className={buttonClass('primary', 'lg')}>
                  Send a Consultation Inquiry
                </button>
                <WhatsAppLink message={siteConfig.tourismWhatsAppMessage} variant="whatsappOutline" size="lg">
                  Inquire on WhatsApp
                </WhatsAppLink>
              </div>
              <p className="mt-5 text-[13px] leading-relaxed text-muted">
                Treatment timelines can only be discussed after a clinical assessment.
              </p>
            </div>
          </Reveal>

          <div className="lg:col-span-6 lg:pt-36">
            <ol className="space-y-0">
              {tourismSteps.map((s, i) =>
              <Reveal key={s.title} delay={0.05 * i}>
                  <li className="grid grid-cols-[48px_1fr] gap-4 border-t border-charcoal/15 py-6">
                    <span className="font-serif text-[30px] leading-none text-champagne" aria-hidden="true">
                      {i + 1}
                    </span>
                    <div>
                      <h3 className="font-serif text-[24px] font-medium leading-tight text-charcoal">{s.title}</h3>
                      <p className="mt-1.5 text-[15px] leading-relaxed text-charcoal/70">{s.text}</p>
                    </div>
                  </li>
                </Reveal>
              )}
            </ol>

            <Reveal>
              <div className="mt-8 rounded-[24px] border border-dashed border-charcoal/20 bg-white p-6 sm:p-8">
                <div className="flex flex-wrap items-center justify-between gap-3">
                  <h3 className="font-serif text-[24px] font-medium text-charcoal">Travel planning</h3>
                  <span className="rounded-full bg-champagne-light px-3 py-1 text-[11.5px] font-semibold uppercase tracking-[0.14em] text-charcoal/70">
                    To be verified
                  </span>
                </div>
                <dl className="mt-5 space-y-4">
                  {travelPlaceholders.map((t) =>
                  <div key={t.title}>
                      <dt className="text-[14px] font-semibold text-charcoal">{t.title}</dt>
                      <dd className="mt-1 text-[14px] leading-relaxed text-charcoal/60">{t.text}</dd>
                    </div>
                  )}
                </dl>
              </div>
            </Reveal>
          </div>
        </div>
      </div>
    </section>);

}