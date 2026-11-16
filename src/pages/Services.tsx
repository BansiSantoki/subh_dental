import React from 'react';
import { SEOHead } from '../components/shared/SEOHead';
import { PageHero } from '../components/shared/PageHero';
import { ServiceCard } from '../components/shared/ServiceCard';
import { Reveal } from '../components/shared/Reveal';
import { WhatsAppLink } from '../components/shared/WhatsAppLink';
import { ContactSection } from '../components/shared/ContactSection';
import { serviceCategories } from '../data/services';
import { images } from '../data/images';
import { getServicesByCategory } from '../utils/content';
import { useAppointment } from '../contexts/AppointmentContext';
import { buttonClass } from '../utils/buttonStyles';
import { breadcrumbSchema, webPageSchema } from '../utils/structuredData';
import { siteConfig } from '../data/siteConfig';

const title = `Dental Treatments & Specialities in Nashik | ${siteConfig.name}`;
const description =
  `Explore general, cosmetic, orthodontic, and restorative dental treatments at ${siteConfig.name} in Nashik — each explained clearly, with honest answers to common questions.`;

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
            { name: 'Dental Treatments', path: '/services' }
          ])
        ]}
      />

      <PageHero
        crumbs={[{ label: 'Home', href: '/' }, { label: 'Treatments' }]}
        eyebrow="All Dental Treatments"
        title={
          <>
            Comprehensive Dental Care, <span className="text-[#087FAE]">Thoughtfully Delivered.</span>
          </>
        }
        intro="Explore personalized treatment options designed around your oral health, comfort, and smile goals. Each procedure is explained in plain terms with honest clinical advice."
        actions={
          <>
            <button
              type="button"
              onClick={() => openAppointment()}
              className={buttonClass('primary', 'lg', 'shadow-md')}
            >
              Book a Consultation
            </button>
            <WhatsAppLink variant="whatsappOutline" size="lg">
              To Know More
            </WhatsAppLink>
          </>
        }
      />

      {/* Featured Clinical Treatment Overview Banner */}
      <section className="bg-white pt-6 pb-12 sm:pt-10 sm:pb-16 border-b border-[#E2EAF0]">
        <div className="mx-auto max-w-[1440px] px-4 sm:px-6 md:px-8 lg:px-12">
          <Reveal>
            <div className="overflow-hidden rounded-[28px] border border-[#E2EAF0] bg-[#F2F8FC] shadow-sm grid gap-8 lg:grid-cols-12 lg:items-center p-6 sm:p-8 lg:p-10">
              <div className="lg:col-span-7">
                <span className="inline-flex items-center gap-1.5 rounded-full bg-white px-3.5 py-1 text-xs font-semibold text-[#087FAE] border border-[#087FAE]/20">
                  <span className="h-2 w-2 rounded-full bg-[#087FAE]" />
                  Advanced Multispeciality Clinical Care
                </span>
                <h2 className="mt-3 font-serif text-2xl sm:text-3xl lg:text-4xl font-bold text-[#123B59] leading-tight">
                  Comprehensive Dental Specialities in One Modern Clinic.
                </h2>
                <p className="mt-3 text-sm sm:text-base leading-relaxed text-[#34465A]">
                  From precision dental implants and orthodontic aligners to porcelain crowns, root canals, and gentle extractions, our clinic provides end-to-end oral health care with hospital-grade sterilization and patient-focused comfort.
                </p>
                <div className="mt-6 flex flex-wrap gap-2.5">
                  {['Root Canal Therapy', 'Dental Implants', 'Clear Aligners', 'Crowns & Bridges', 'Gentle Extractions', 'Teeth Cleaning'].map((tag) => (
                    <span key={tag} className="rounded-lg bg-white px-3 py-1 text-xs font-medium text-[#123B59] border border-[#E2EAF0] shadow-2xs">
                      ✓ {tag}
                    </span>
                  ))}
                </div>
              </div>
              <div className="lg:col-span-5">
                <div className="overflow-hidden rounded-2xl border-4 border-white shadow-md bg-white">
                  <img
                    src={images.dentalCollage}
                    alt="Multispeciality dental treatment collage displaying implants, orthodontics, crowns, and restorative dentistry"
                    className="aspect-square w-full object-cover"
                    loading="lazy"
                    width={600}
                    height={600}
                  />
                </div>
              </div>
            </div>
          </Reveal>
        </div>
      </section>

      {serviceCategories.map((cat, ci) => (
        <section
          key={cat.id}
          aria-labelledby={`cat-${cat.id}`}
          className={`py-16 md:py-24 ${ci % 2 === 0 ? 'bg-white' : 'bg-[#F2F8FC]'}`}
        >
          <div className="mx-auto max-w-[1440px] px-4 sm:px-6 md:px-8 lg:px-12">
            <Reveal className="mb-10 sm:mb-12 grid gap-3 lg:grid-cols-12 lg:items-end">
              <div className="lg:col-span-7">
                <span className="text-xs font-bold uppercase tracking-wider text-[#087FAE]">
                  Speciality Category
                </span>
                <h2
                  id={`cat-${cat.id}`}
                  className="mt-1 font-serif text-3xl sm:text-4xl lg:text-[42px] font-bold text-[#123B59]"
                >
                  {cat.label}
                </h2>
              </div>
              <p className="text-sm sm:text-base leading-relaxed text-[#34465A]/85 lg:col-span-5 lg:text-right">
                {cat.description}
              </p>
            </Reveal>

            <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
              {getServicesByCategory(cat.id).map((s, i) => (
                <Reveal key={s.slug} delay={0.05 * i} className="h-full">
                  <ServiceCard service={s} />
                </Reveal>
              ))}
            </div>
          </div>
        </section>
      ))}

      <ContactSection />
    </>
  );
}
