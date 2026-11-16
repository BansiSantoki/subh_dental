import React from 'react';
import {
  ShieldCheck,
  HeartHandshake,
  Sparkles,
  Award,
  Calendar,
  Phone,
  MessageSquare,
  CheckCircle2,
  Clock,
  Eye,
  Smile
} from 'lucide-react';
import { SEOHead } from '../components/shared/SEOHead';
import { Breadcrumbs } from '../components/shared/Breadcrumbs';
import { SectionHeading } from '../components/shared/SectionHeading';
import { Reveal } from '../components/shared/Reveal';
import { WhatsAppLink } from '../components/shared/WhatsAppLink';
import { siteConfig } from '../data/siteConfig';
import { images } from '../data/images';
import { buttonClass } from '../utils/buttonStyles';
import { useAppointment } from '../contexts/AppointmentContext';
import { breadcrumbSchema, webPageSchema } from '../utils/structuredData';

const pillars = [
  {
    icon: HeartHandshake,
    title: 'Unhurried, Patient-First Care',
    description:
      'We never rush your appointment. We take the time to listen to your dental concerns, understand your comfort levels, and answer every question before starting any treatment.'
  },
  {
    icon: ShieldCheck,
    title: 'Multi-Stage Hospital Sterilization',
    description:
      'Your safety is non-negotiable. Every instrument undergoes autoclaving, ultrasonic cleaning, vacuum sealing in medical-grade pouches, and strict operatory disinfection between patients.'
  },
  {
    icon: Eye,
    title: 'Transparent Treatment Planning',
    description:
      'Zero surprise costs or unnecessary procedures. We present clear clinical findings using digital diagnostics, outline all suitable alternatives, and explain exact timelines upfront.'
  },
  {
    icon: Smile,
    title: 'Gentle, Stress-Free Dentistry',
    description:
      'Designed specifically for individuals who feel nervous about the dentist. We employ gentle chairside techniques, refined anaesthesia delivery, and a calming clinic atmosphere.'
  },
  {
    icon: Sparkles,
    title: 'Modern Multispeciality Facility',
    description:
      'Equipped with digital radiography, precision dental loupes, ultrasonic scalers, and ergonomic patient dental chairs right here in Indira Nagar, Nashik.'
  },
  {
    icon: Clock,
    title: 'Continuous Follow-Up Support',
    description:
      'Our care continues even after you step out of the dental chair. We provide straightforward aftercare guidance and prompt assistance on WhatsApp whenever you have a recovery query.'
  }
];

const standards = [
  'Recognised clinical protocols following Indian and international dental guidelines',
  'Digital imaging used only when clinically justified to protect patient health',
  'Clear post-treatment recovery roadmaps provided in simple, easy-to-follow terms',
  'Friendly clinical team dedicated to making every family member feel comfortable',
  'Centrally located in Indira Nagar, Nashik with accessible parking and clean premises'
];

export function WhyChooseUsPage() {
  const { openAppointment } = useAppointment();
  const title = `Why Choose Us | ${siteConfig.name} Nashik`;
  const description =
    `Discover why patients across Nashik choose Dr. Naik's Shubh Smile Multispeciality Dental Clinic — gentle dentistry, hospital-grade sterilization, transparent pricing, and unhurried care.`;

  return (
    <>
      <SEOHead
        title={title}
        description={description}
        path="/why-choose-us"
        image={images.reception}
        jsonLd={[
          webPageSchema(title, description, '/why-choose-us'),
          breadcrumbSchema([
            { name: 'Home', path: '/' },
            { name: 'Why Choose Us', path: '/why-choose-us' }
          ])
        ]}
      />

      <div className="bg-[#F4F9FC] pt-24 pb-12 sm:pt-28 md:pt-30 md:pb-16">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 md:px-8 lg:px-12">
          <Breadcrumbs items={[{ label: 'Home', href: '/' }, { label: 'Why Choose Us' }]} />

          {/* Hero Header */}
          <div className="mt-6 max-w-3xl">
            <span className="inline-flex items-center gap-2 rounded-full bg-white px-3.5 py-1 text-xs font-semibold text-[#087FAE] border border-[#087FAE]/20 shadow-2xs">
              <Award className="h-3.5 w-3.5" />
              Our Clinical Commitment
            </span>
            <h1 className="mt-4 font-serif text-3xl sm:text-4xl lg:text-[44px] font-bold tracking-tight text-[#123B59] leading-tight">
              Gentle, honest dental care that puts your <span className="text-[#087FAE]">comfort first.</span>
            </h1>
            <p className="mt-4 text-base sm:text-lg leading-relaxed text-[#34465A]">
              We know that choosing a dental clinic is about trust. At Dr. Naik's Shubh Smile Multispeciality Dental Clinic in Nashik, we pair clinical precision with empathetic care so you always feel heard, safe, and well-cared for.
            </p>
          </div>

          {/* Featured Reception & Philosophy Showcase */}
          <div className="mt-12 grid gap-8 lg:grid-cols-12 lg:items-center">
            <div className="relative overflow-hidden rounded-3xl border border-[#E2EAF0] bg-white shadow-sm lg:col-span-7">
              <img
                src={images.reception}
                alt="Welcoming reception and patient waiting lounge at Dr. Naik's Shubh Smile Multispeciality Dental Clinic in Nashik"
                className="h-[360px] sm:h-[420px] w-full object-cover"
                loading="eager"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-[#123B59]/75 via-transparent to-transparent" />
              <div className="absolute bottom-5 left-5 right-5 text-white">
                <span className="inline-block rounded-full bg-white/20 backdrop-blur-xs px-3 py-0.5 text-xs font-semibold text-[#EAF4FA]">
                  Our Practice Philosophy
                </span>
                <p className="mt-1.5 font-serif text-lg sm:text-xl font-bold">
                  “A healthy, confident smile begins with honest conversations and genuine clinical care.”
                </p>
              </div>
            </div>

            <div className="space-y-4 lg:col-span-5">
              <div className="rounded-2xl border border-[#E2EAF0] bg-white p-6 shadow-xs">
                <div className="flex items-center gap-3">
                  <div className="flex h-11 w-11 items-center justify-center rounded-xl bg-[#EAF4FA] text-[#087FAE]">
                    <HeartHandshake className="h-6 w-6" />
                  </div>
                  <h3 className="font-serif text-lg font-bold text-[#123B59]">No Treatment Pressure</h3>
                </div>
                <p className="mt-3 text-sm leading-relaxed text-[#34465A]/85">
                  We explain what is essential for your oral health versus what is optional aesthetic enhancement. The decision to proceed is always entirely yours.
                </p>
              </div>

              <div className="rounded-2xl border border-[#E2EAF0] bg-white p-6 shadow-xs">
                <div className="flex items-center gap-3">
                  <div className="flex h-11 w-11 items-center justify-center rounded-xl bg-[#EAF4FA] text-[#087FAE]">
                    <ShieldCheck className="h-6 w-6" />
                  </div>
                  <h3 className="font-serif text-lg font-bold text-[#123B59]">Zero Cross-Contamination</h3>
                </div>
                <p className="mt-3 text-sm leading-relaxed text-[#34465A]/85">
                  Hospital-grade disinfection protocols guarantee that every patient sits in an impeccably sterile operatory suite with freshly sealed instruments.
                </p>
              </div>
            </div>
          </div>

          {/* 6 Core Pillars Grid */}
          <div className="mt-16">
            <div className="text-center max-w-2xl mx-auto">
              <span className="text-xs font-semibold text-[#087FAE] bg-[#EAF4FA] px-3 py-1 rounded-full">
                The Shubh Smile Difference
              </span>
              <h2 className="mt-3 font-serif text-2xl sm:text-3xl lg:text-4xl font-bold text-[#123B59]">
                Six Principles That Define Every Visit
              </h2>
              <p className="mt-2 text-sm sm:text-base text-[#34465A]/85">
                Carefully designed so dental care feels predictable, painless, and completely reassuring.
              </p>
            </div>

            <div className="mt-10 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
              {pillars.map((pillar) => {
                const IconComponent = pillar.icon;
                return (
                  <article
                    key={pillar.title}
                    className="flex flex-col justify-between rounded-2xl border border-[#E2EAF0] bg-white p-6 shadow-xs transition-all duration-200 hover:-translate-y-1 hover:border-[#087FAE]/30 hover:shadow-md"
                  >
                    <div>
                      <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-[#EAF4FA] text-[#087FAE]">
                        <IconComponent className="h-6 w-6" />
                      </div>
                      <h3 className="mt-4 font-serif text-lg font-bold text-[#123B59]">
                        {pillar.title}
                      </h3>
                      <p className="mt-2 text-sm leading-relaxed text-[#34465A]/85">
                        {pillar.description}
                      </p>
                    </div>
                  </article>
                );
              })}
            </div>
          </div>

          {/* Clinical Standards Checklist Banner */}
          <div className="mt-16 rounded-3xl border border-[#E2EAF0] bg-white p-8 sm:p-12 shadow-xs">
            <div className="grid gap-8 lg:grid-cols-12 lg:items-center">
              <div className="lg:col-span-7">
                <span className="text-xs font-semibold text-[#087FAE] flex items-center gap-1.5">
                  <span className="h-1.5 w-1.5 rounded-full bg-[#087FAE]" />
                  <span>Clinical Quality Standards</span>
                </span>
                <h3 className="mt-2 font-serif text-2xl sm:text-3xl font-bold text-[#123B59]">
                  What You Can Expect at Every Appointment
                </h3>
                <p className="mt-3 text-sm sm:text-base leading-relaxed text-[#34465A]/85">
                  We believe that consistent clinical habits produce outstanding smile outcomes. Every check-up and procedure at Dr. Naik's Shubh Smile adheres to these verified standards:
                </p>

                <ul className="mt-6 space-y-3">
                  {standards.map((standard, idx) => (
                    <li key={idx} className="flex items-start gap-2.5 text-sm text-[#34465A]">
                      <CheckCircle2 className="h-4 w-4 text-[#087FAE] shrink-0 mt-0.5" />
                      <span>{standard}</span>
                    </li>
                  ))}
                </ul>
              </div>

              {/* Action Box */}
              <div className="rounded-2xl bg-[#F4F9FC] p-6 sm:p-8 border border-[#E2EAF0] text-center lg:col-span-5">
                <div className="flex h-14 w-14 items-center justify-center rounded-2xl bg-[#087FAE] text-white mx-auto shadow-sm">
                  <Sparkles className="h-7 w-7" />
                </div>
                <h4 className="mt-4 font-serif text-xl font-bold text-[#123B59]">
                  Experience Thoughtful Dental Care
                </h4>
                <p className="mt-2 text-xs sm:text-sm text-[#34465A]/80 leading-relaxed max-w-sm mx-auto">
                  Schedule your consultation today or message us on WhatsApp to speak directly with our clinic help desk.
                </p>

                <div className="mt-6 flex flex-col gap-3">
                  <button
                    type="button"
                    onClick={() => openAppointment('a consultation at Dr. Naik\'s Shubh Smile')}
                    className={buttonClass('primary', 'lg', 'w-full shadow-xs')}
                  >
                    <Calendar className="h-4 w-4" />
                    <span>Book Your Consultation</span>
                  </button>

                  <WhatsAppLink size="lg" className="w-full">
                    <MessageSquare className="h-4 w-4" />
                    <span>Inquire on WhatsApp</span>
                  </WhatsAppLink>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

