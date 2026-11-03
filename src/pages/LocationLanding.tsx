import React from 'react';
import { MapPinIcon } from 'lucide-react';
import { SEOHead } from '../components/shared/SEOHead';
import { PageHero } from '../components/shared/PageHero';
import { Reveal } from '../components/shared/Reveal';
import { FAQList } from '../components/shared/FAQList';
import { ServiceCard } from '../components/shared/ServiceCard';
import { WhatsAppLink } from '../components/shared/WhatsAppLink';
import { ContactSection } from '../components/shared/ContactSection';
import { useAppointment } from '../contexts/AppointmentContext';
import { getServicesBySlugs } from '../utils/content';
import { buttonClass } from '../utils/buttonStyles';
import { breadcrumbSchema, dentistSchema, faqSchema, webPageSchema } from '../utils/structuredData';
import { siteConfig } from '../data/siteConfig';
import type { LocationPage } from '../types/content';

const kindLabel: Record<LocationPage['kind'], string> = {
  clinic: 'Our studio',
  'service-area': 'Service area — not a branch location',
  treatment: 'Treatment in Nashik'
};

export function LocationLanding({ location }: {location: LocationPage;}) {
  const { openAppointment } = useAppointment();
  const path = `/${location.slug}`;
  const treatments = getServicesBySlugs(location.treatments);
  const waMessage = `Hello, I would like to know more about dental care at ${siteConfig.name} in Nashik. I am contacting you from ${location.areaName}.`;

  return (
    <>
      <SEOHead
        title={location.seoTitle}
        description={location.metaDescription}
        path={path}
        image={location.image}
        jsonLd={[
        ...(location.kind === 'clinic' ? [dentistSchema()] : []),
        webPageSchema(location.seoTitle, location.metaDescription, path),
        faqSchema(location.faqs),
        breadcrumbSchema([
        { name: 'Home', path: '/' },
        { name: location.h1, path }]
        )]
        } />
      
      <PageHero
        crumbs={[{ label: 'Home', href: '/' }, { label: location.areaName === 'Nashik' ? location.h1 : `Near ${location.areaName}` }]}
        eyebrow={location.eyebrow}
        title={location.h1}
        intro={<p>{location.intro[0]}</p>}
        image={location.image}
        imageAlt={location.imageAlt}
        actions={
        <>
            <button type="button" onClick={() => openAppointment()} className={buttonClass('primary', 'lg')}>
              Book a Consultation
            </button>
            <WhatsAppLink message={waMessage} variant="whatsappOutline" size="lg">
              Chat on WhatsApp
            </WhatsAppLink>
          </>
        } />
      

      <section aria-labelledby="local-title" className="bg-white py-24 md:py-32">
        <div className="mx-auto grid max-w-[1440px] gap-12 px-5 md:px-8 lg:grid-cols-12 lg:gap-16 lg:px-12">
          <div className="lg:col-span-5">
            <Reveal>
              <div className="rounded-[24px] border border-champagne bg-champagne-light/50 p-6">
                <p className="flex items-center gap-2 text-[12px] font-semibold uppercase tracking-[0.18em] text-forest">
                  <MapPinIcon className="h-4 w-4" aria-hidden="true" />
                  {kindLabel[location.kind]}
                </p>
                <p className="mt-3 text-[15px] leading-relaxed text-charcoal/80">{location.areaNote}</p>
              </div>
            </Reveal>
          </div>
          <div className="lg:col-span-7">
            <Reveal>
              <h2 id="local-title" className="sr-only">
                About dental care for {location.areaName}
              </h2>
              {location.intro.slice(1).map((p) =>
              <p key={p} className="text-pretty font-serif text-[26px] leading-[1.45] text-charcoal/85 sm:text-[30px]">
                  {p}
                </p>
              )}
            </Reveal>
            <dl className="mt-12 border-t border-charcoal/10">
              {location.highlights.map((h, i) =>
              <Reveal key={h.title} delay={0.05 * i}>
                  <div className="grid gap-2 border-b border-charcoal/10 py-6 sm:grid-cols-[220px_1fr] sm:gap-8">
                    <dt className="font-serif text-[23px] font-medium leading-tight text-charcoal">{h.title}</dt>
                    <dd className="text-[15.5px] leading-relaxed text-charcoal/70">{h.text}</dd>
                  </div>
                </Reveal>
              )}
            </dl>
          </div>
        </div>
      </section>

      <section aria-labelledby="local-treatments" className="bg-ivory py-24 md:py-32">
        <div className="mx-auto max-w-[1440px] px-5 md:px-8 lg:px-12">
          <Reveal>
            <h2 id="local-treatments" className="font-serif text-[40px] font-medium leading-[1.02] text-charcoal sm:text-[52px]">
              Treatments to explore
            </h2>
          </Reveal>
          <div className="mt-12 grid gap-5 md:grid-cols-2">
            {treatments.map((s, i) =>
            <Reveal key={s.slug} delay={0.04 * i}>
                <ServiceCard service={s} variant="compact" />
              </Reveal>
            )}
          </div>
        </div>
      </section>

      <section aria-labelledby="local-faq" className="bg-ivory pb-24 md:pb-32">
        <div className="mx-auto grid max-w-[1440px] gap-12 px-5 md:px-8 lg:grid-cols-12 lg:gap-16 lg:px-12">
          <Reveal className="lg:col-span-4">
            <h2 id="local-faq" className="font-serif text-[40px] font-medium leading-[1.02] text-charcoal sm:text-[50px]">
              Common questions
            </h2>
          </Reveal>
          <Reveal delay={0.06} className="lg:col-span-8">
            <FAQList faqs={location.faqs} />
          </Reveal>
        </div>
      </section>

      <ContactSection />
    </>);

}