import React from 'react';
import { Link } from 'react-router-dom';
import { ShieldCheck, HeartHandshake, Sparkles, Clock, CheckCircle2, Award, ArrowRight } from 'lucide-react';
import { SEOHead } from '../components/shared/SEOHead';
import { Breadcrumbs } from '../components/shared/Breadcrumbs';
import { siteConfig } from '../data/siteConfig';
import { images } from '../data/images';
import { buttonClass } from '../utils/buttonStyles';
import { useAppointment } from '../contexts/AppointmentContext';

export function About() {
  const { openAppointment } = useAppointment();

  return (
    <>
      <SEOHead
        title={`About Us | ${siteConfig.name} Nashik`}
        description="Learn about Dr. Naik\'s Shubh Smile Multispeciality Dental Clinic in Nashik. Our mission, advanced dental technology, strict sterilization standards, and patient-first clinical philosophy."
        path="/about"
        image={images.reception}
      />

      <div className="bg-slate-50/50 pt-24 pb-16">
        <div className="mx-auto max-w-7xl px-5 sm:px-8 lg:px-12">
          <Breadcrumbs items={[{ label: 'About Us', href: '/about' }]} />

          {/* Page Header */}
          <div className="mt-6 max-w-3xl">
            <span className="inline-flex items-center gap-2 rounded-full bg-sky-50 px-3.5 py-1 text-xs font-semibold text-primary-700 border border-sky-100">
              <Sparkles className="h-3.5 w-3.5 text-primary-600" />
              Our Story & Philosophy
            </span>
            <h1 className="mt-4 text-3xl font-bold tracking-tight text-slate-900 sm:text-4xl lg:text-5xl">
              Thoughtful, modern dental care crafted around <span className="text-primary-600">your comfort.</span>
            </h1>
            <p className="mt-4 text-base sm:text-lg leading-relaxed text-slate-600">
              At Dr. Naik\'s Shubh Smile Multispeciality Dental Clinic, we believe a visit to the dentist should inspire confidence, not anxiety. Located in Shastri Nagar, Indira Nagar, Nashik, we combine clinical excellence with a gentle, patient-first approach.
            </p>
          </div>

          {/* Hero Image & Highlights Grid */}
          <div className="mt-10 grid gap-8 lg:grid-cols-12 lg:items-center">
            <div className="relative overflow-hidden rounded-2xl shadow-lg border border-slate-100 lg:col-span-7">
              <img
                src={images.consultation}
                alt="Dentist consulting with a patient warmly at Dr. Naik\'s Shubh Smile Multispeciality Dental Clinic"
                className="h-[360px] w-full object-cover sm:h-[440px]"
                loading="eager"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-slate-900/60 via-transparent to-transparent" />
              <div className="absolute bottom-5 left-5 right-5 text-white">
                <p className="text-sm font-medium text-sky-200">Our Clinical Mission</p>
                <p className="text-lg font-semibold sm:text-xl">Gentle touch, evidence-based practices, and lasting smile health.</p>
              </div>
            </div>

            <div className="space-y-4 lg:col-span-5">
              <div className="rounded-xl border border-slate-200/80 bg-white p-6 shadow-sm">
                <div className="flex items-center gap-3">
                  <div className="flex h-11 w-11 items-center justify-center rounded-lg bg-sky-50 text-primary-600">
                    <HeartHandshake className="h-6 w-6" />
                  </div>
                  <h3 className="text-lg font-bold text-slate-900">Patient-First Philosophy</h3>
                </div>
                <p className="mt-3 text-sm leading-relaxed text-slate-600">
                  We schedule unhurried appointments so you always have time to voice concerns, ask questions, and review all treatment options without feeling pressured.
                </p>
              </div>

              <div className="rounded-xl border border-slate-200/80 bg-white p-6 shadow-sm">
                <div className="flex items-center gap-3">
                  <div className="flex h-11 w-11 items-center justify-center rounded-lg bg-lime-50 text-lime-700">
                    <ShieldCheck className="h-6 w-6" />
                  </div>
                  <h3 className="text-lg font-bold text-slate-900">Multi-Stage Sterilization</h3>
                </div>
                <p className="mt-3 text-sm leading-relaxed text-slate-600">
                  Your safety is paramount. We follow strict hospital-grade autoclave sterilization, vacuum sealed pouches, and medical-grade surface disinfection between every single patient.
                </p>
              </div>

              <div className="rounded-xl border border-slate-200/80 bg-white p-6 shadow-sm">
                <div className="flex items-center gap-3">
                  <div className="flex h-11 w-11 items-center justify-center rounded-lg bg-sky-50 text-primary-600">
                    <Award className="h-6 w-6" />
                  </div>
                  <h3 className="text-lg font-bold text-slate-900">Experienced Specialists</h3>
                </div>
                <p className="mt-3 text-sm leading-relaxed text-slate-600">
                  Our doctors bring advanced postgraduate training (MDS) in implantology, orthodontics, and restorative dentistry, ensuring specialized clinical expertise for complex cases.
                </p>
              </div>
            </div>
          </div>

          {/* Pillars of Care */}
          <div className="mt-20">
            <div className="text-center max-w-2xl mx-auto">
              <span className="text-xs font-bold uppercase tracking-wider text-primary-600">Our Core Values</span>
              <h2 className="mt-2 text-2xl sm:text-3xl font-bold text-slate-900">
                The principles that guide every smile we treat
              </h2>
            </div>

            <div className="mt-10 grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
              <div className="rounded-xl border border-slate-200 bg-white p-6 shadow-sm transition-all hover:border-primary-300 hover:shadow-md">
                <span className="text-3xl font-black text-primary-600">01</span>
                <h3 className="mt-3 text-lg font-bold text-slate-900">Empathy & Comfort</h3>
                <p className="mt-2 text-sm leading-relaxed text-slate-600">
                  Understanding dental anxiety is at the heart of what we do. From painless numbing techniques to soothing operatories, we ensure total peace of mind.
                </p>
              </div>

              <div className="rounded-xl border border-slate-200 bg-white p-6 shadow-sm transition-all hover:border-primary-300 hover:shadow-md">
                <span className="text-3xl font-black text-secondary-600">02</span>
                <h3 className="mt-3 text-lg font-bold text-slate-900">Absolute Transparency</h3>
                <p className="mt-2 text-sm leading-relaxed text-slate-600">
                  Clear visual diagnosis with digital intraoral cameras. You see what we see, with clear cost estimates and step-by-step procedure explanations before we begin.
                </p>
              </div>

              <div className="rounded-xl border border-slate-200 bg-white p-6 shadow-sm transition-all hover:border-primary-300 hover:shadow-md">
                <span className="text-3xl font-black text-primary-600">03</span>
                <h3 className="mt-3 text-lg font-bold text-slate-900">Tooth Preservation</h3>
                <p className="mt-2 text-sm leading-relaxed text-slate-600">
                  We adopt a conservative clinical approach, prioritizing saving and strengthening your natural teeth whenever possible over invasive interventions.
                </p>
              </div>

              <div className="rounded-xl border border-slate-200 bg-white p-6 shadow-sm transition-all hover:border-primary-300 hover:shadow-md">
                <span className="text-3xl font-black text-secondary-600">04</span>
                <h3 className="mt-3 text-lg font-bold text-slate-900">Lifelong Guidance</h3>
                <p className="mt-2 text-sm leading-relaxed text-slate-600">
                  Dental care doesn’t end when you leave our clinic chair. We provide customized post-care instructions and preventive checkup routines for lasting oral wellness.
                </p>
              </div>
            </div>
          </div>

          {/* Clinical Facility Showcase */}
          <div className="mt-20 rounded-2xl bg-gradient-to-br from-sky-50/70 to-slate-100 p-8 sm:p-12 border border-sky-100">
            <div className="grid gap-8 lg:grid-cols-2 lg:items-center">
              <div>
                <span className="text-xs font-bold uppercase tracking-wider text-primary-700">Modern Clinical Facility</span>
                <h2 className="mt-2 text-2xl sm:text-3xl font-bold text-slate-900">
                  Designed for clinical precision, hygiene, and patient relaxation
                </h2>
                <p className="mt-4 text-sm sm:text-base leading-relaxed text-slate-600">
                  Our clinic is located in Sundaram Appt, Besides Maruti Courier, Gajanan Maharaj Mandir Rd, Opp. Mahila Bank, Shastri Nagar, Indira Nagar, Nashik. Every corner of our facility has been thoughtfully planned to provide clean, serene, and barrier-free dental care.
                </p>

                <ul className="mt-6 space-y-3">
                  {[
                    'Ergonomic dental operatory chairs with automated position memory',
                    'Low-radiation digital intraoral radiovisiography (RVG) sensors',
                    'Class B autoclave sterilization with computerized temperature tracking',
                    'Quiet rotary endodontic equipment for swift, gentle root canal therapies',
                    'Pleasant waiting lounge with purified air and filtered drinking water'
                  ].map((item, idx) => (
                    <li key={idx} className="flex items-start gap-2.5 text-sm text-slate-700">
                      <CheckCircle2 className="h-5 w-5 shrink-0 text-primary-600" />
                      <span>{item}</span>
                    </li>
                  ))}
                </ul>

                <div className="mt-8 flex flex-wrap gap-3">
                  <Link to="/gallery" className={buttonClass('secondary', 'md')}>
                    View Clinic Gallery
                  </Link>
                  <Link to="/team" className={buttonClass('primary', 'md')}>
                    Meet Our Doctors
                  </Link>
                </div>
              </div>

              <div className="grid grid-cols-2 gap-4">
                <img
                  src={images.reception}
                  alt="Reception lounge at Dr. Naik\'s Shubh Smile Multispeciality Dental Clinic"
                  className="h-48 w-full rounded-xl object-cover shadow-sm border border-white"
                />
                <img
                  src={images.treatmentRoom}
                  alt="Modern treatment room at Dr. Naik\'s Shubh Smile Multispeciality Dental Clinic"
                  className="h-48 w-full rounded-xl object-cover shadow-sm border border-white"
                />
                <img
                  src={images.dentalTools}
                  alt="Sterilized clinical instruments at Dr. Naik\'s Shubh Smile Multispeciality Dental Clinic"
                  className="h-48 w-full rounded-xl object-cover shadow-sm border border-white"
                />
                <img
                  src={images.consultation}
                  alt="Doctor consulting with patient at Dr. Naik\'s Shubh Smile Multispeciality Dental Clinic"
                  className="h-48 w-full rounded-xl object-cover shadow-sm border border-white"
                />
              </div>
            </div>
          </div>

          {/* CTA Banner */}
          <div className="mt-20 rounded-2xl bg-gradient-to-r from-primary-700 to-sky-900 p-8 sm:p-12 text-center text-white shadow-lg">
            <h2 className="text-2xl sm:text-3xl font-bold">Ready to experience gentle dental care?</h2>
            <p className="mx-auto mt-3 max-w-xl text-sm sm:text-base text-sky-100">
              Schedule your first appointment today. We look forward to meeting you and helping you maintain a healthy, beautiful smile.
            </p>
            <div className="mt-6 flex flex-col sm:flex-row justify-center gap-3">
              <button
                type="button"
                onClick={() => openAppointment()}
                className="inline-flex items-center justify-center rounded-xl bg-white px-6 py-3.5 text-sm font-semibold text-primary-700 shadow-md hover:bg-sky-50 transition-colors"
              >
                Book an Appointment
              </button>
              <Link
                to="/contact"
                className="inline-flex items-center justify-center rounded-xl border border-white/40 bg-white/10 px-6 py-3.5 text-sm font-semibold text-white hover:bg-white/20 transition-colors"
              >
                Find Our Clinic <ArrowRight className="ml-2 h-4 w-4" />
              </Link>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
