import React from 'react';
import { SEOHead } from '../components/shared/SEOHead';
import { PageHero } from '../components/shared/PageHero';
import { ServiceCard } from '../components/shared/ServiceCard';
import { Reveal } from '../components/shared/Reveal';
import { WhatsAppLink } from '../components/shared/WhatsAppLink';
import { ContactSection } from '../components/shared/ContactSection';
import { serviceCategories } from '../data/services';
import { getServicesByCategory } from '../utils/content';
import { useAppointment } from '../contexts/AppointmentContext';
import { buttonClass } from '../utils/buttonStyles';
import { breadcrumbSchema, webPageSchema } from '../utils/structuredData';
import { siteConfig } from '../data/siteConfig';

const title = `Dental Treatments in Nashik | ${siteConfig.name}`;
const description =
`Explore general, cosmetic and restorative dental treatments at ${siteConfig.name} in Nashik — each explained clearly, with honest answers to common questions.`;

export function Services() {
  const { openAppointment } = useAppointment();
  return (
    <>
      <SEOHead
        title={title}
        description={description}
        path="/services"
        jsonLd={[
        webPageSchema(title, description, '/services'),
        breadcrumbSchema([
        { name: 'Home', path: '/' },
        { name: 'Treatments', path: '/services' }]
        )]
        } />
      
      <PageHero
        crumbs={[{ label: 'Home', href: '/' }, { label: 'Treatments' }]}
        eyebrow="All treatments"
        title={
        <>
            Comprehensive Dental Care, <em className="font-normal italic text-forest">Thoughtfully Delivered.</em>
          </>
        }
        intro="Explore dental treatment options designed around your needs, comfort, and smile goals. Not sure where to start? A general consultation is always a good first step."
        actions={
        <>
            <button type="button" onClick={() => openAppointment()} className={buttonClass('primary', 'lg')}>
              Book a Consultation
            </button>
            <WhatsAppLink variant="whatsappOutline" size="lg">
              Ask a Question
            </WhatsAppLink>
          </>
        } />
      

      {serviceCategories.map((cat, ci) =>
      <section
        key={cat.id}
        aria-labelledby={`cat-${cat.id}`}
        className={`py-20 md:py-28 ${ci % 2 === 0 ? 'bg-white' : 'bg-ivory'}`}>
        
          <div className="mx-auto max-w-[1440px] px-5 md:px-8 lg:px-12">
            <Reveal className="mb-12 grid gap-4 lg:grid-cols-12 lg:items-end">
              <h2 id={`cat-${cat.id}`} className="font-serif text-[40px] font-medium leading-none text-charcoal sm:text-[52px] lg:col-span-6">
                {cat.label}
              </h2>
              <p className="text-[16px] leading-relaxed text-charcoal/65 lg:col-span-6 lg:text-right">{cat.description}</p>
            </Reveal>
            <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
              {getServicesByCategory(cat.id).map((s, i) =>
            <Reveal key={s.slug} delay={0.05 * i} className="h-full">
                  <ServiceCard service={s} />
                </Reveal>
            )}
            </div>
          </div>
        </section>
      )}

      <ContactSection />
    </>);

}