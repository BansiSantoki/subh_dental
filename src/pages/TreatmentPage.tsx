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
            { name: service.name, path }
          ])
        ]}
      />

      <PageHero
        crumbs={[
          { label: 'Home', href: '/' },
          { label: 'Treatments', href: '/services' },
          { label: service.name }
        ]}
        eyebrow="Speciality Dental Treatment"
        title={service.h1}
        intro={<p>{service.intro[0]}</p>}
        image={service.image}
        imageAlt={service.imageAlt}
        actions={
          <>
            <button
              type="button"
              onClick={() => openAppointment(service.name)}
              className={buttonClass('primary', 'lg', 'shadow-md')}
            >
              Book a Consultation
            </button>
            <WhatsAppLink
              message={treatmentMessage(service.name)}
              variant="whatsappOutline"
              size="lg"
              srContext={service.name}
            >
              To Know More
            </WhatsAppLink>
          </>
        }
      />

      {/* Overview & Clinical Details */}
      <section aria-labelledby="overview-title" className="bg-white py-16 md:py-24">
        <div className="mx-auto grid max-w-[1440px] gap-12 px-4 sm:px-6 md:px-8 lg:grid-cols-12 lg:gap-16 lg:px-12">
          <Reveal className="lg:col-span-4">
            <h2
              id="overview-title"
              className="font-serif text-3xl sm:text-4xl lg:text-[42px] font-bold text-[#123B59] leading-tight lg:sticky lg:top-32"
            >
              Understanding {service.name}
            </h2>
          </Reveal>
          <div className="lg:col-span-8">
            {service.intro.slice(1).map((p) => (
              <Reveal key={p}>
                <p className="font-serif text-xl sm:text-2xl leading-relaxed text-[#123B59]/90 mb-6">
                  {p}
                </p>
              </Reveal>
            ))}

            <div className="mt-12 grid gap-10 md:grid-cols-2">
              <Reveal>
                <div className="rounded-2xl border border-[#E2EAF0] bg-[#F2F8FC] p-6">
                  <h3 className="text-xs font-bold uppercase tracking-wider text-[#087FAE]">
                    When is this treatment explored?
                  </h3>
                  <ul className="mt-4 space-y-3">
                    {service.reasons.map((r) => (
                      <li key={r} className="flex gap-2.5 text-sm leading-relaxed text-[#34465A]">
                        <span className="mt-2 h-1.5 w-1.5 shrink-0 rounded-full bg-[#087FAE]" aria-hidden="true" />
                        <span>{r}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </Reveal>

              <Reveal delay={0.06}>
                <div className="rounded-2xl border border-[#E2EAF0] bg-[#F2F8FC] p-6">
                  <h3 className="text-xs font-bold uppercase tracking-wider text-[#087FAE]">
                    Key clinical benefits
                  </h3>
                  <ul className="mt-4 space-y-3">
                    {service.benefits.map((b) => (
                      <li key={b} className="flex gap-2.5 text-sm leading-relaxed text-[#34465A]">
                        <CheckIcon className="mt-0.5 h-4 w-4 shrink-0 text-[#087FAE]" aria-hidden="true" />
                        <span>{b}</span>
                      </li>
                    ))}
                  </ul>
                  <p className="mt-4 text-xs text-[#34465A]/70">
                    Clinical outcomes and longevity vary based on individual oral health.
                  </p>
                </div>
              </Reveal>
            </div>
          </div>
        </div>
      </section>

      {/* Clinical Process */}
      <section aria-labelledby="process-title" className="px-3 sm:px-5 py-4">
        <div className="mx-auto max-w-[1600px] rounded-[32px] md:rounded-[48px] bg-[#123B59] py-16 md:py-24 text-white shadow-xl">
          <div className="mx-auto max-w-[1440px] px-4 sm:px-6 md:px-8 lg:px-12">
            <Reveal>
              <span className="text-xs font-bold uppercase tracking-widest text-[#7EC4E5]">
                What to Expect
              </span>
              <h2
                id="process-title"
                className="mt-2 font-serif text-3xl sm:text-4xl lg:text-5xl font-bold leading-tight"
              >
                What the Procedure Usually Involves
              </h2>
              <p className="mt-3 max-w-xl text-sm sm:text-base text-[#DCEFF8]/90">
                A standard overview of clinical steps. Your dentist will explain the exact personalized sequence during your initial examination.
              </p>
            </Reveal>

            <ol className="mt-12 sm:mt-14 grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
              {service.process.map((step, i) => (
                <Reveal key={step.title} delay={0.08 * i}>
                  <li className="rounded-2xl border border-white/15 bg-white/5 p-6 backdrop-blur-xs">
                    <span className="font-serif text-3xl font-extrabold text-[#7EC4E5]">
                      0{i + 1}
                    </span>
                    <h3 className="mt-4 font-serif text-xl font-bold leading-snug">{step.title}</h3>
                    <p className="mt-2 text-xs sm:text-sm leading-relaxed text-[#DCEFF8]/80">
                      {step.text}
                    </p>
                  </li>
                </Reveal>
              ))}
            </ol>
          </div>
        </div>
      </section>

      {/* Suitability Notice */}
      <section aria-labelledby="suitability-title" className="bg-[#F2F8FC] py-16 md:py-24">
        <div className="mx-auto max-w-[1440px] px-4 sm:px-6 md:px-8 lg:px-12">
          <Reveal>
            <div className="grid gap-8 rounded-3xl border border-[#E2EAF0] bg-white p-8 sm:p-12 lg:grid-cols-12 lg:items-center">
              <div className="lg:col-span-5">
                <div className="flex h-12 w-12 items-center justify-center rounded-2xl bg-[#DCEFF8] text-[#087FAE]">
                  <StethoscopeIcon className="h-6 w-6" aria-hidden="true" />
                </div>
                <h2
                  id="suitability-title"
                  className="mt-4 font-serif text-2xl sm:text-3xl font-bold text-[#123B59]"
                >
                  Is this treatment right for you?
                </h2>
              </div>
              <div className="lg:col-span-7">
                <p className="text-base sm:text-lg leading-relaxed text-[#34465A]">{service.suitability}</p>
                <p className="mt-3 text-xs sm:text-sm leading-relaxed text-[#34465A]/75">
                  Treatment suitability always requires an individual examination. Information here is educational and does not replace in-person diagnosis.
                </p>
                <button
                  type="button"
                  onClick={() => openAppointment(service.name)}
                  className={buttonClass('primary', 'md', 'mt-6 shadow-sm')}
                >
                  Schedule an In-Person Assessment
                </button>
              </div>
            </div>
          </Reveal>
        </div>
      </section>

      {/* Frequently Asked Questions */}
      <section aria-labelledby="faq-title" className="bg-white py-16 md:py-24 border-t border-[#E2EAF0]">
        <div className="mx-auto grid max-w-[1440px] gap-12 px-4 sm:px-6 md:px-8 lg:grid-cols-12 lg:gap-16 lg:px-12">
          <Reveal className="lg:col-span-4">
            <span className="text-xs font-semibold text-[#087FAE] bg-[#EAF4FA] px-3 py-1 rounded-full">Common Queries</span>
            <h2
              id="faq-title"
              className="mt-3 font-serif text-2xl sm:text-3xl font-bold text-[#123B59] leading-tight"
            >
              Frequently Asked Questions
            </h2>
            <p className="mt-3 text-sm text-[#34465A]/80 leading-relaxed">
              Have a specific clinical question not covered here? Reach our clinic team directly.
            </p>
            <WhatsAppLink
              message={treatmentMessage(service.name)}
              variant="whatsappOutline"
              size="md"
              className="mt-5"
              srContext={service.name}
            >
              To Know More on WhatsApp
            </WhatsAppLink>
          </Reveal>

          <Reveal delay={0.06} className="lg:col-span-8">
            <FAQList faqs={service.faqs} />
          </Reveal>
        </div>
      </section>

      {/* Related Treatments */}
      {related.length > 0 && (
        <section aria-labelledby="related-title" className="bg-[#F2F8FC] py-16 md:py-24 border-t border-[#E2EAF0]">
          <div className="mx-auto max-w-[1440px] px-4 sm:px-6 md:px-8 lg:px-12">
            <Reveal>
              <span className="text-xs font-bold uppercase tracking-wider text-[#087FAE]">Explore More</span>
              <h2 id="related-title" className="mt-1 font-serif text-2xl sm:text-3xl font-bold text-[#123B59]">
                Related Dental Treatments
              </h2>
            </Reveal>
            <div className="mt-8 grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
              {related.map((s, i) => (
                <Reveal key={s.slug} delay={0.05 * i}>
                  <ServiceCard service={s} variant="compact" />
                </Reveal>
              ))}
            </div>
          </div>
        </section>
      )}

      <ContactSection initialTreatment={service.name} title={`Consult With Dr. Naik About ${service.name}.`} />
    </>
  );
}
