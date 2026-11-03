import React from 'react';
import { Award, GraduationCap, Calendar, CheckCircle2, Heart, Sparkles, Phone, MessageSquare } from 'lucide-react';
import { SEOHead } from '../components/shared/SEOHead';
import { Breadcrumbs } from '../components/shared/Breadcrumbs';
import { siteConfig } from '../data/siteConfig';
import { doctors } from '../data/team';
import { buttonClass } from '../utils/buttonStyles';
import { useAppointment } from '../contexts/AppointmentContext';
import { whatsappUrl } from '../utils/whatsapp';

export function TeamPage() {
  const { openAppointment } = useAppointment();
  const leadDoctor = doctors[0];

  return (
    <>
      <SEOHead
        title={`Our Doctors & Dental Specialists | ${siteConfig.name}`}
        description="Meet the specialized dental team at Dr. Naik\'s Shubh Smile Multispeciality Dental Clinic in Nashik. Highly qualified MDS dentists in implantology, orthodontics, and restorative dentistry."
        path="/team"
      />

      <div className="bg-slate-50/50 pt-24 pb-16">
        <div className="mx-auto max-w-7xl px-5 sm:px-8 lg:px-12">
          <Breadcrumbs items={[{ label: 'Our Doctors', href: '/team' }]} />

          {/* Page Header */}
          <div className="mt-6 max-w-3xl">
            <span className="inline-flex items-center gap-2 rounded-full bg-sky-50 px-3.5 py-1 text-xs font-semibold text-primary-700 border border-sky-100">
              <Award className="h-3.5 w-3.5 text-primary-600" />
              Specialist Clinical Team
            </span>
            <h1 className="mt-4 text-3xl font-bold tracking-tight text-slate-900 sm:text-4xl lg:text-5xl">
              Experienced specialists dedicated to your <span className="text-primary-600">healthy smile.</span>
            </h1>
            <p className="mt-4 text-base sm:text-lg leading-relaxed text-slate-600">
              At Dr. Naik\'s Shubh Smile Multispeciality Dental Clinic, you are in skilled and gentle hands. Our team of postgraduate dentists brings specialized training, modern clinical techniques, and deep empathy to every consultation.
            </p>
          </div>

          <div className="mt-12 grid gap-8 rounded-2xl border border-slate-200/80 bg-white p-6 shadow-sm lg:grid-cols-[0.8fr_1.2fr] lg:p-8">
            <div className="overflow-hidden rounded-2xl bg-slate-100">
              <img
                src={leadDoctor.portrait}
                alt={leadDoctor.portraitAlt}
                className="h-full min-h-[320px] w-full object-cover"
              />
            </div>
            <div className="flex flex-col justify-center">
              <span className="text-xs font-bold uppercase tracking-[0.18em] text-primary-600">Lead Dentist</span>
              <h2 className="mt-3 text-3xl font-bold text-slate-900 sm:text-4xl">{leadDoctor.name}</h2>
              <p className="mt-2 text-sm font-semibold text-slate-600">{leadDoctor.qualification}</p>
              <p className="mt-4 text-base text-slate-700">{leadDoctor.specialty}</p>
              <p className="mt-5 text-base leading-relaxed text-slate-600">{leadDoctor.bio}</p>
              <div className="mt-6 flex flex-wrap gap-2">
                {leadDoctor.focusAreas?.map((area) => (
                  <span key={area} className="rounded-full bg-sky-50 px-3 py-1.5 text-xs font-semibold text-primary-700">
                    {area}
                  </span>
                ))}
              </div>
              <div className="mt-8 flex flex-col gap-3 sm:flex-row">
                <button type="button" onClick={() => openAppointment(leadDoctor.name)} className={buttonClass('primary', 'md')}>
                  Book a Consultation
                </button>
                <a href={`tel:${siteConfig.phoneE164}`} className={buttonClass('secondary', 'md')}>
                  Call Clinic
                </a>
              </div>
            </div>
          </div>

          {/* Clinical Philosophy & Continuing Education */}
          <div className="mt-20 rounded-2xl bg-white p-8 sm:p-12 border border-slate-200/80 shadow-sm">
            <div className="grid gap-8 lg:grid-cols-2 lg:items-center">
              <div>
                <span className="text-xs font-bold uppercase tracking-wider text-primary-600">Our Clinical Standards</span>
                <h3 className="mt-2 text-2xl font-bold text-slate-900">
                  Continuous training, modern equipment & patient comfort
                </h3>
                <p className="mt-4 text-sm sm:text-base leading-relaxed text-slate-600">
                  Dentistry evolves rapidly. Our doctors actively participate in national and international dental conferences, continuing medical education (CME) seminars, and masterclasses in implantology and digital orthodontics.
                </p>

                <div className="mt-6 space-y-3">
                  {[
                    'Evidence-based dental protocols backed by clinical research',
                    'Digital treatment planning using high-precision 3D imaging',
                    'Gentle chairside communication to eliminate dental anxiety',
                    'Multidisciplinary consultations for complex smile makeovers'
                  ].map((item, idx) => (
                    <div key={idx} className="flex items-center gap-2.5 text-sm text-slate-700">
                      <Sparkles className="h-4 w-4 text-secondary-600 shrink-0" />
                      <span>{item}</span>
                    </div>
                  ))}
                </div>
              </div>

              <div className="rounded-xl bg-gradient-to-br from-sky-50 to-slate-100 p-6 sm:p-8 border border-sky-100 text-center">
                <div className="mx-auto flex h-14 w-14 items-center justify-center rounded-full bg-white shadow-sm text-primary-600">
                  <Phone className="h-6 w-6" />
                </div>
                <h4 className="mt-4 text-lg font-bold text-slate-900">Need Guidance on Choosing a Specialist?</h4>
                <p className="mt-2 text-xs sm:text-sm text-slate-600 max-w-sm mx-auto">
                  Not sure which treatment or doctor is right for you? Call our clinic care coordinator for gentle guidance.
                </p>
                <div className="mt-6 flex flex-col sm:flex-row justify-center gap-3">
                  <a href={`tel:${siteConfig.phoneE164}`} className={buttonClass('secondary', 'sm')}>
                    Call {siteConfig.phoneDisplay}
                  </a>
                  <button type="button" onClick={() => openAppointment()} className={buttonClass('primary', 'sm')}>
                    Book Consultation
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
