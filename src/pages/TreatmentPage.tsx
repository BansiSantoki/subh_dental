import React from 'react';
import { useParams } from 'react-router-dom';
import { CheckIcon, StethoscopeIcon } from 'lucide-react';
import { SEOHead } from '../components/shared/SEOHead';
import { PageHero } from '../components/shared/PageHero';
import { Reveal } from '../components/shared/Reveal';
import { FAQList } from '../components/shared/FAQList';
import { ServiceCard } from '../components/shared/ServiceCard';
import { WhatsAppLink } from '../components/shared/WhatsAppLink';
import { ContactSection } from '../components/shared/ContactSection';
import { NotFound } from './NotFound';
import { useAppointment } from '../contexts/AppointmentContext';
import { getServiceBySlug, getServicesBySlugs } from '../utils/content';
import { treatmentMessage } from '../utils/whatsapp';
import { buttonClass } from '../utils/buttonStyles';
import { breadcrumbSchema, faqSchema, serviceSchema } from '../utils/structuredData';

export function TreatmentPage() {
  const { slug } = useParams();
  const service = getServiceBySlug(slug);
  const { openAppointment } = useAppointment();

  if (!service) return <NotFound />;

  const path = `/services/${service.slug}`;
  const related = getServicesBySlugs(service.related);

  return (
    <>
      <SEOHead
        title={service.seoTitle}
        description={service.metaDescription}
        path={path}
        image={service.image}
        jsonLd={[
        serviceSchema(service),
        faqSchema(service.faqs),
        breadcrumbSchema([
        { name: 'Home', path: '/' },
        { name: 'Treatments', path: '/services' },
        { name: service.name, path }]
        )]
        } />
      
      <PageHero
        crumbs={[{ label: 'Home', href: '/' }, { label: 'Treatments', href: '/services' }, { label: service.name }]}
        eyebrow="Treatment in Nashik"
        title={service.h1}
        intro={<p>{service.intro[0]}</p>}
        image={service.image}
        imageAlt={service.imageAlt}
        actions={
        <>
            <button type="button" onClick={() => openAppointment(service.name)} className={buttonClass('primary', 'lg')}>
              Book a Consultation
            </button>
            <WhatsAppLink message={treatmentMessage(service.name)} variant="whatsappOutline" size="lg" srContext={service.name}>
              To Know More on WhatsApp
            </WhatsAppLink>
          </>
        } />
      

      {/* Overview */}
      <section aria-labelledby="overview-title" className="bg-white py-24 md:py-32">
        <div className="mx-auto grid max-w-[1440px] gap-12 px-5 md:px-8 lg:grid-cols-12 lg:gap-16 lg:px-12">
          <Reveal className="lg:col-span-4">
            <h2 id="overview-title" className="font-serif text-[40px] font-medium leading-[1.02] text-charcoal sm:text-[50px] lg:sticky lg:top-32">
              Understanding {service.name}
            </h2>
          </Reveal>
          <div className="lg:col-span-8">
            {service.intro.slice(1).map((p) =>
            <Reveal key={p}>
                <p className="text-pretty font-serif text-[26px] leading-[1.45] text-charcoal/85 sm:text-[30px]">{p}</p>
              </Reveal>
            )}
            <div className="mt-16 grid gap-12 md:grid-cols-2">
              <Reveal>
                <h3 className="text-[12px] font-semibold uppercase tracking-[0.2em] text-forest">Why people explore it</h3>
                <ul className="mt-6 space-y-4">
                  {service.reasons.map((r) =>
                  <li key={r} className="flex gap-3 border-b border-charcoal/10 pb-4 text-[15.5px] leading-relaxed text-charcoal/80">
                      <span className="mt-2.5 h-1.5 w-1.5 shrink-0 rounded-full bg-champagne" aria-hidden="true" />
                      {r}
                    </li>
                  )}
                </ul>
              </Reveal>
              <Reveal delay={0.06}>
                <h3 className="text-[12px] font-semibold uppercase tracking-[0.2em] text-forest">Potential benefits</h3>
                <ul className="mt-6 space-y-4">
                  {service.benefits.map((b) =>
                  <li key={b} className="flex gap-3 border-b border-charcoal/10 pb-4 text-[15.5px] leading-relaxed text-charcoal/80">
                      <CheckIcon className="mt-1 h-4 w-4 shrink-0 text-forest" aria-hidden="true" />
                      {b}
                    </li>
                  )}
                </ul>
                <p className="mt-4 text-[13px] text-muted">Benefits and results vary from person to person.</p>
              </Reveal>
            </div>
          </div>
        </div>
      </section>

      {/* Process */}
      <section aria-labelledby="process-title" className="px-3 md:px-5">
        <div className="mx-auto max-w-[1600px] rounded-[32px] bg-forest py-20 text-ivory md:rounded-[56px] md:py-28">
          <div className="mx-auto max-w-[1440px] px-5 md:px-8 lg:px-12">
            <Reveal>
              <h2 id="process-title" className="max-w-2xl font-serif text-[40px] font-medium leading-[1.02] sm:text-[54px]">
                What the process usually involves
              </h2>
              <p className="mt-5 max-w-xl text-[16px] leading-relaxed text-ivory/70">
                An overview of typical steps. Your dentist will explain exactly what applies to you.
              </p>
            </Reveal>
            <ol className="mt-16 grid gap-10 sm:grid-cols-2 lg:grid-cols-4 lg:gap-8">
              {service.process.map((step, i) =>
              <Reveal key={step.title} delay={0.08 * i}>
                  <li className="border-t border-ivory/20 pt-6">
                    <span className="font-serif text-[44px] leading-none text-champagne">{String(i + 1).padStart(2, '0')}</span>
                    <h3 className="mt-5 font-serif text-[27px] font-medium leading-tight">{step.title}</h3>
                    <p className="mt-3 text-[15px] leading-[1.7] text-ivory/70">{step.text}</p>
                  </li>
                </Reveal>
              )}
            </ol>
          </div>
        </div>
      </section>

      {/* Suitability */}
      <section aria-labelledby="suitability-title" className="bg-ivory py-24 md:py-32">
        <div className="mx-auto max-w-[1440px] px-5 md:px-8 lg:px-12">
          <Reveal>
            <div className="grid gap-8 rounded-[32px] bg-sage p-8 sm:p-12 lg:grid-cols-12 lg:items-center lg:p-16">
              <div className="lg:col-span-5">
                <span className="flex h-12 w-12 items-center justify-center rounded-full bg-forest text-ivory">
                  <StethoscopeIcon className="h-5 w-5" aria-hidden="true" />
                </span>
                <h2 id="suitability-title" className="mt-6 font-serif text-[36px] font-medium leading-[1.05] text-charcoal sm:text-[44px]">
                  Is this treatment right for me?
                </h2>
              </div>
              <div className="lg:col-span-7">
                <p className="text-[17px] leading-[1.8] text-charcoal/80">{service.suitability}</p>
                <p className="mt-4 text-[15px] leading-relaxed text-charcoal/70">
                  Suitability always depends on an individual examination. Nothing on this page replaces personal advice
                  from a qualified dentist.
                </p>
                <button type="button" onClick={() => openAppointment(service.name)} className={buttonClass('primary', 'md', 'mt-8')}>
                  Arrange an assessment
                </button>
              </div>
            </div>
          </Reveal>
        </div>
      </section>

      {/* FAQ */}
      <section aria-labelledby="faq-title" className="bg-ivory pb-24 md:pb-32">
        <div className="mx-auto grid max-w-[1440px] gap-12 px-5 md:px-8 lg:grid-cols-12 lg:gap-16 lg:px-12">
          <Reveal className="lg:col-span-4">
            <h2 id="faq-title" className="font-serif text-[40px] font-medium leading-[1.02] text-charcoal sm:text-[50px]">
              Frequently asked questions
            </h2>
            <p className="mt-5 text-[15.5px] leading-relaxed text-charcoal/65">Have a question not listed here?</p>
            <WhatsAppLink message={treatmentMessage(service.name)} variant="whatsappOutline" size="md" className="mt-5" srContext={service.name}>
              Ask on WhatsApp
            </WhatsAppLink>
          </Reveal>
          <Reveal delay={0.06} className="lg:col-span-8">
            <FAQList faqs={service.faqs} />
          </Reveal>
        </div>
      </section>

      {/* Related */}
      <section aria-labelledby="related-title" className="bg-white py-24 md:py-28">
        <div className="mx-auto max-w-[1440px] px-5 md:px-8 lg:px-12">
          <Reveal>
            <h2 id="related-title" className="font-serif text-[36px] font-medium text-charcoal sm:text-[44px]">
              Related treatments
            </h2>
          </Reveal>
          <div className="mt-10 grid gap-5 lg:grid-cols-3">
            {related.map((s, i) =>
            <Reveal key={s.slug} delay={0.05 * i}>
                <ServiceCard service={s} variant="compact" />
              </Reveal>
            )}
          </div>
        </div>
      </section>

      <ContactSection initialTreatment={service.name} title={`Let’s talk about ${service.name.toLowerCase()}.`} />
    </>);

}