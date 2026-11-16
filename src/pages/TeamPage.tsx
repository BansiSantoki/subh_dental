import React from 'react';
import { Award, Calendar, CheckCircle2, Heart, Sparkles, Phone, MessageSquare, ShieldCheck } from 'lucide-react';
import { SEOHead } from '../components/shared/SEOHead';
import { Breadcrumbs } from '../components/shared/Breadcrumbs';
import { siteConfig } from '../data/siteConfig';
import { doctors } from '../data/team';
import { images } from '../data/images';
import { buttonClass } from '../utils/buttonStyles';
import { useAppointment } from '../contexts/AppointmentContext';
import { whatsappUrl } from '../utils/whatsapp';

export function TeamPage() {
  const { openAppointment } = useAppointment();
  const leadDoctor = doctors[0];

  return (
    <>
      <SEOHead
        title={`Our Lead Dentist & Clinical Team | ${siteConfig.name}`}
        description="Meet Dr. Naik and the dental team at Dr. Naik's Shubh Smile Multispeciality Dental Clinic in Nashik. Specialized in implants, restorative dentistry, and smile design."
        path="/team"
      />

      <div className="bg-[#F2F8FC] pt-28 pb-16 md:pt-36 md:pb-24">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 md:px-8 lg:px-12">
          <Breadcrumbs items={[{ label: 'Home', href: '/' }, { label: 'Our Team' }]} />

          {/* Page Header */}
          <div className="mt-6 max-w-3xl">
            <span className="inline-flex items-center gap-2 rounded-full bg-white px-3.5 py-1 text-xs font-semibold text-[#087FAE] border border-[#087FAE]/20 shadow-2xs">
              <Award className="h-3.5 w-3.5" />
              Specialist Clinical Team
            </span>
            <h1 className="mt-4 font-serif text-3xl sm:text-4xl lg:text-[44px] font-bold tracking-tight text-[#123B59] leading-tight">
              Experienced dental care dedicated to your <span className="text-[#087FAE]">healthy smile.</span>
            </h1>
            <p className="mt-4 text-base sm:text-lg leading-relaxed text-[#34465A]">
              At Dr. Naik's Shubh Smile Multispeciality Dental Clinic, you are in skilled and gentle hands. Led by Dr. Naik, our clinical practice brings attentive care, modern techniques, and unhurried consultations to every patient in Nashik.
            </p>
          </div>

          {/* Lead Doctor Featured Card */}
          <div className="mt-12 grid gap-8 rounded-3xl border border-[#E2EAF0] bg-white p-6 sm:p-10 shadow-sm lg:grid-cols-[0.8fr_1.2fr]">
            <div className="overflow-hidden rounded-2xl border border-[#E2EAF0] bg-[#F2F8FC] relative">
              <img
                src={leadDoctor.portrait}
                alt="Dr. Naik, Lead Dental Surgeon at Dr. Naik's Shubh Smile Multispeciality Dental Clinic in Nashik"
                className="h-full min-h-[300px] sm:min-h-[360px] w-full object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-[#123B59]/70 via-transparent to-transparent" />
              <div className="absolute bottom-4 left-4 right-4 text-white">
                <span className="inline-block rounded-full bg-white/20 backdrop-blur-xs px-3 py-0.5 text-xs font-semibold text-[#DCEFF8]">
                  Lead Dentist & Clinic Director
                </span>
                <p className="font-serif text-xl font-bold mt-1">{leadDoctor.name}</p>
                <p className="text-xs text-[#DCEFF8]/90">Dr. Naik's Shubh Smile, Nashik</p>
              </div>
            </div>

            <div className="flex flex-col justify-center">
              <span className="text-xs font-semibold text-[#087FAE]">
                Lead Clinical Practitioner
              </span>
              <h2 className="mt-2 font-serif text-2xl sm:text-3xl font-bold text-[#123B59]">
                {leadDoctor.name}
              </h2>
              <p className="mt-1 text-sm font-semibold text-[#087FAE]">{leadDoctor.qualification}</p>
              <p className="mt-3 text-sm font-medium text-[#123B59]">{leadDoctor.specialty}</p>
              <p className="mt-4 text-base leading-relaxed text-[#34465A]/85">{leadDoctor.bio}</p>

              <div className="mt-6">
                <p className="text-xs font-semibold text-[#123B59]/80 mb-2">
                  Specialized Focus Areas
                </p>
                <div className="flex flex-wrap gap-2">
                  {leadDoctor.focusAreas?.map((area) => (
                    <span
                      key={area}
                      className="rounded-full bg-[#F2F8FC] border border-[#E2EAF0] px-3.5 py-1 text-xs font-semibold text-[#123B59]"
                    >
                      {area}
                    </span>
                  ))}
                </div>
              </div>

              <div className="mt-8 flex flex-wrap gap-3">
                <button
                  type="button"
                  onClick={() => openAppointment(leadDoctor.name)}
                  className={buttonClass('primary', 'md', 'shadow-sm')}
                >
                  <Calendar className="h-4 w-4" />
                  <span>Book a Consultation</span>
                </button>
                <a
                  href={`tel:${siteConfig.phoneE164}`}
                  className={buttonClass('secondary', 'md')}
                >
                  <Phone className="h-4 w-4 text-[#087FAE]" />
                  <span>Call Reception</span>
                </a>
                <a
                  href={whatsappUrl(`Hello, I would like to book a consultation with Dr. Naik at Shubh Smile Clinic Nashik.`)}
                  target="_blank"
                  rel="noopener noreferrer"
                  className={buttonClass('whatsappOutline', 'md')}
                >
                  <MessageSquare className="h-4 w-4" />
                  <span>WhatsApp Inquiry</span>
                </a>
              </div>
            </div>
          </div>

          {/* Clinical Philosophy Standards */}
          <div className="mt-16 rounded-3xl bg-white p-8 sm:p-12 border border-[#E2EAF0] shadow-sm">
            <div className="grid gap-8 lg:grid-cols-2 lg:items-center">
              <div>
                <span className="text-xs font-semibold text-[#087FAE]">
                  Our Clinical Standards
                </span>
                <h3 className="mt-2 font-serif text-2xl sm:text-3xl font-bold text-[#123B59]">
                  Evidence-based dental protocols, modern equipment & patient comfort
                </h3>
                <p className="mt-4 text-sm sm:text-base leading-relaxed text-[#34465A]/85">
                  Dentistry requires continuous refinement. Our clinic follows recognized dental association guidelines, digital treatment planning, and strict infection-control standards so that every procedure is predictable and comfortable.
                </p>

                <div className="mt-6 space-y-3">
                  {[
                    'Evidence-based dental protocols backed by clinical research',
                    'Digital treatment planning using intraoral imaging and precision X-rays',
                    'Gentle chairside communication to eliminate dental anxiety',
                    'Multidisciplinary consultations for complex smile makeovers and implants'
                  ].map((item, idx) => (
                    <div key={idx} className="flex items-start gap-2.5 text-sm text-[#34465A]">
                      <CheckCircle2 className="h-4 w-4 text-[#087FAE] shrink-0 mt-0.5" />
                      <span>{item}</span>
                    </div>
                  ))}
                </div>
              </div>

              <div className="rounded-2xl bg-[#F2F8FC] p-6 sm:p-8 border border-[#E2EAF0] text-center">
                <div className="flex h-14 w-14 items-center justify-center rounded-2xl bg-[#087FAE] text-white mx-auto shadow-sm">
                  <ShieldCheck className="h-7 w-7" />
                </div>
                <h4 className="mt-4 font-serif text-xl font-bold text-[#123B59]">
                  Unhurried Patient Consultations
                </h4>
                <p className="mt-2 text-xs sm:text-sm text-[#34465A]/80 leading-relaxed max-w-sm mx-auto">
                  We dedicate adequate time to listen to your concerns, explain all suitable treatment choices, and answer every question before you make any decisions.
                </p>
                <div className="mt-6">
                  <button
                    type="button"
                    onClick={() => openAppointment()}
                    className={buttonClass('primary', 'md', 'w-full sm:w-auto shadow-xs')}
                  >
                    Schedule an Appointment
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
