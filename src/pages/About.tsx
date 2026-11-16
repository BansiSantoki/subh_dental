import React from 'react';
import { Link } from 'react-router-dom';
import { ShieldCheck, HeartHandshake, Sparkles, Award, ArrowRight, CheckCircle2 } from 'lucide-react';
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
        description="Learn about Dr. Naik's Shubh Smile Multispeciality Dental Clinic in Nashik. Our clinical philosophy, advanced dental technology, strict sterilization standards, and patient-first approach."
        path="/about"
        image={images.reception}
      />

      <div className="bg-[#F2F8FC] pt-28 pb-16 md:pt-36 md:pb-24">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 md:px-8 lg:px-12">
          <Breadcrumbs items={[{ label: 'Home', href: '/' }, { label: 'About Us' }]} />

          {/* Page Header */}
          <div className="mt-6 max-w-3xl">
            <span className="inline-flex items-center gap-2 rounded-full bg-white px-3.5 py-1 text-xs font-semibold text-[#087FAE] border border-[#087FAE]/20 shadow-2xs">
              <Sparkles className="h-3.5 w-3.5" />
              Our Philosophy & Story
            </span>
            <h1 className="mt-4 font-serif text-3xl sm:text-4xl lg:text-[44px] font-bold tracking-tight text-[#123B59] leading-tight">
              Thoughtful, modern dental care crafted around <span className="text-[#087FAE]">your comfort.</span>
            </h1>
            <p className="mt-4 text-base sm:text-lg leading-relaxed text-[#34465A]">
              At Dr. Naik's Shubh Smile Multispeciality Dental Clinic, we believe a visit to the dentist should inspire confidence, not anxiety. Located in Shastri Nagar, Indira Nagar, Nashik, we combine clinical excellence with a gentle, patient-first approach.
            </p>
          </div>

          {/* Hero Image & Highlights Grid */}
          <div className="mt-10 grid gap-8 lg:grid-cols-12 lg:items-center">
            <div className="relative overflow-hidden rounded-2xl shadow-lg border border-[#E2EAF0] lg:col-span-7 bg-white">
              <img
                src={images.treatmentRoom}
                alt="Dentist performing clinical procedure in operatory chair at Dr. Naik's Shubh Smile Multispeciality Dental Clinic in Nashik"
                className="h-[360px] w-full object-cover sm:h-[440px]"
                loading="eager"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-[#123B59]/80 via-transparent to-transparent" />
              <div className="absolute bottom-5 left-5 right-5 text-white">
                <p className="text-xs font-medium text-[#DCEFF8] flex items-center gap-1.5">
                  <span className="h-1.5 w-1.5 rounded-full bg-[#7EC4E5]" />
                  <span>Our Clinical Mission</span>
                </p>
                <p className="mt-1 text-lg sm:text-xl font-bold font-serif">Gentle touch, evidence-based practices, and lasting smile health.</p>
              </div>
            </div>

            <div className="space-y-4 lg:col-span-5">
              <div className="rounded-2xl border border-[#E2EAF0] bg-white p-6 shadow-sm">
                <div className="flex items-center gap-3">
                  <div className="flex h-11 w-11 items-center justify-center rounded-xl bg-[#F2F8FC] text-[#087FAE]">
                    <HeartHandshake className="h-6 w-6" />
                  </div>
                  <h3 className="font-serif text-lg font-bold text-[#123B59]">Patient-First Philosophy</h3>
                </div>
                <p className="mt-3 text-sm leading-relaxed text-[#34465A]/85">
                  We schedule unhurried appointments so you always have time to voice concerns, ask questions, and review all treatment options without feeling pressured.
                </p>
              </div>

              <div className="rounded-2xl border border-[#E2EAF0] bg-white p-6 shadow-sm">
                <div className="flex items-center gap-3">
                  <div className="flex h-11 w-11 items-center justify-center rounded-xl bg-[#F2F8FC] text-[#087FAE]">
                    <ShieldCheck className="h-6 w-6" />
                  </div>
                  <h3 className="font-serif text-lg font-bold text-[#123B59]">Multi-Stage Sterilization</h3>
                </div>
                <p className="mt-3 text-sm leading-relaxed text-[#34465A]/85">
                  Your safety is paramount. We follow strict hospital-grade autoclave sterilization, vacuum sealed pouches, and medical-grade surface disinfection between every single patient.
                </p>
              </div>

              <div className="rounded-2xl border border-[#E2EAF0] bg-white p-6 shadow-sm">
                <div className="flex items-center gap-3">
                  <div className="flex h-11 w-11 items-center justify-center rounded-xl bg-[#F2F8FC] text-[#087FAE]">
                    <Award className="h-6 w-6" />
                  </div>
                  <h3 className="font-serif text-lg font-bold text-[#123B59]">Experienced Specialists</h3>
                </div>
                <p className="mt-3 text-sm leading-relaxed text-[#34465A]/85">
                  Our doctors bring specialized clinical expertise in implantology, orthodontics, and restorative dentistry, ensuring meticulous care for simple and complex treatments.
                </p>
              </div>
            </div>
          </div>

          {/* Pillars of Care */}
          <div className="mt-20">
            <div className="text-center max-w-2xl mx-auto">
              <span className="text-xs font-bold uppercase tracking-wider text-[#087FAE]">Our Core Values</span>
              <h2 className="mt-2 font-serif text-2xl sm:text-3xl lg:text-4xl font-bold text-[#123B59]">
                The principles that guide every smile we treat
              </h2>
            </div>

            <div className="mt-10 grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
              <div className="rounded-2xl border border-[#E2EAF0] bg-white p-6 shadow-sm transition-all hover:border-[#087FAE] hover:shadow-md">
                <span className="font-serif text-3xl font-extrabold text-[#087FAE]">01</span>
                <h3 className="mt-3 font-serif text-lg font-bold text-[#123B59]">Empathy & Comfort</h3>
                <p className="mt-2 text-sm leading-relaxed text-[#34465A]/85">
                  Understanding dental anxiety is at the heart of what we do. From gentle numbing to soothing operatories, we ensure total peace of mind.
                </p>
              </div>

              <div className="rounded-2xl border border-[#E2EAF0] bg-white p-6 shadow-sm transition-all hover:border-[#087FAE] hover:shadow-md">
                <span className="font-serif text-3xl font-extrabold text-[#087FAE]">02</span>
                <h3 className="mt-3 font-serif text-lg font-bold text-[#123B59]">Absolute Transparency</h3>
                <p className="mt-2 text-sm leading-relaxed text-[#34465A]/85">
                  Clear visual diagnosis with digital intraoral cameras. You see what we see, with clear cost estimates and procedure explanations before we begin.
                </p>
              </div>

              <div className="rounded-2xl border border-[#E2EAF0] bg-white p-6 shadow-sm transition-all hover:border-[#087FAE] hover:shadow-md">
                <span className="font-serif text-3xl font-extrabold text-[#087FAE]">03</span>
                <h3 className="mt-3 font-serif text-lg font-bold text-[#123B59]">Tooth Preservation</h3>
                <p className="mt-2 text-sm leading-relaxed text-[#34465A]/85">
                  We adopt a conservative clinical approach, prioritizing saving and strengthening your natural teeth whenever possible over invasive interventions.
                </p>
              </div>

              <div className="rounded-2xl border border-[#E2EAF0] bg-white p-6 shadow-sm transition-all hover:border-[#087FAE] hover:shadow-md">
                <span className="font-serif text-3xl font-extrabold text-[#087FAE]">04</span>
                <h3 className="mt-3 font-serif text-lg font-bold text-[#123B59]">Lifelong Guidance</h3>
                <p className="mt-2 text-sm leading-relaxed text-[#34465A]/85">
                  Dental care doesn’t end when you leave our clinic chair. We provide customized post-care instructions and preventive checkup routines for lasting oral wellness.
                </p>
              </div>
            </div>
          </div>

          {/* Clinical Facility Showcase */}
          <div className="mt-20 rounded-3xl bg-white p-8 sm:p-12 border border-[#E2EAF0] shadow-sm">
            <div className="grid gap-8 lg:grid-cols-2 lg:items-center">
              <div>
                <span className="text-xs font-bold uppercase tracking-wider text-[#087FAE]">Modern Clinical Facility</span>
                <h2 className="mt-2 font-serif text-2xl sm:text-3xl font-bold text-[#123B59]">
                  Designed for clinical precision, hygiene, and patient relaxation
                </h2>
                <p className="mt-4 text-sm sm:text-base leading-relaxed text-[#34465A]/85">
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
                    <li key={idx} className="flex items-start gap-2.5 text-sm text-[#34465A]">
                      <CheckCircle2 className="h-5 w-5 shrink-0 text-[#087FAE]" />
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
                <div className="rounded-2xl border border-[#E2EAF0] bg-[#F2F8FC] p-5">
                  <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-white text-[#087FAE] shadow-2xs font-bold text-sm">
                    01
                  </div>
                  <h4 className="mt-3 font-serif text-base font-bold text-[#123B59]">Digital Diagnostics</h4>
                  <p className="mt-1 text-xs leading-relaxed text-[#34465A]/85">Ultra-low radiation RVG digital X-rays and intraoral high-def camera imaging.</p>
                </div>

                <div className="rounded-2xl border border-[#E2EAF0] bg-[#F2F8FC] p-5">
                  <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-white text-[#087FAE] shadow-2xs font-bold text-sm">
                    02
                  </div>
                  <h4 className="mt-3 font-serif text-base font-bold text-[#123B59]">Class-B Autoclave</h4>
                  <p className="mt-1 text-xs leading-relaxed text-[#34465A]/85">Multi-vacuum medical sterilization for 100% infection-free dental instruments.</p>
                </div>

                <div className="rounded-2xl border border-[#E2EAF0] bg-[#F2F8FC] p-5">
                  <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-white text-[#087FAE] shadow-2xs font-bold text-sm">
                    03
                  </div>
                  <h4 className="mt-3 font-serif text-base font-bold text-[#123B59]">Rotary Endodontics</h4>
                  <p className="mt-1 text-xs leading-relaxed text-[#34465A]/85">Modern computerized apex locators and rotary motors for swift, painless RCT.</p>
                </div>

                <div className="rounded-2xl border border-[#E2EAF0] bg-[#F2F8FC] p-5">
                  <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-white text-[#087FAE] shadow-2xs font-bold text-sm">
                    04
                  </div>
                  <h4 className="mt-3 font-serif text-base font-bold text-[#123B59]">Comfort Operatories</h4>
                  <p className="mt-1 text-xs leading-relaxed text-[#34465A]/85">Ergonomic soft-cushioned chairs, soothing ambient atmosphere, and unhurried care.</p>
                </div>
              </div>
            </div>
          </div>

          {/* CTA Banner */}
          <div className="mt-20 rounded-3xl bg-[#123B59] p-8 sm:p-12 text-center text-white shadow-xl">
            <h2 className="font-serif text-2xl sm:text-3xl font-bold">Ready to experience gentle dental care?</h2>
            <p className="mx-auto mt-3 max-w-xl text-sm sm:text-base text-[#DCEFF8]/90">
              Schedule your first appointment today. We look forward to meeting you and helping you maintain a healthy, beautiful smile.
            </p>
            <div className="mt-6 flex flex-col sm:flex-row justify-center gap-3">
              <button
                type="button"
                onClick={() => openAppointment()}
                className={buttonClass('primary', 'lg', 'shadow-md')}
              >
                Book an Appointment
              </button>
              <Link
                to="/contact"
                className={buttonClass('outlineLight', 'lg')}
              >
                <span>Find Our Clinic</span>
                <ArrowRight className="h-4 w-4" />
              </Link>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
