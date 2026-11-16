import React from 'react';
import { Link } from 'react-router-dom';
import { AwardIcon, SparklesIcon, CalendarCheckIcon, ArrowRightIcon } from 'lucide-react';
import { ParallaxImage } from '../shared/ParallaxImage';
import { Reveal } from '../shared/Reveal';
import { SectionHeading } from '../shared/SectionHeading';
import { WhatsAppLink } from '../shared/WhatsAppLink';
import { doctors } from '../../data/team';
import { useAppointment } from '../../contexts/AppointmentContext';
import { buttonClass } from '../../utils/buttonStyles';

export function TeamSection() {
  const { openAppointment } = useAppointment();
  const featured = doctors[0];

  return (
    <section id="team" aria-labelledby="team-title" className="bg-[#F2F8FC] py-20 md:py-28 lg:py-32">
      <div className="mx-auto max-w-[1440px] px-4 sm:px-6 md:px-8 lg:px-12">
        <SectionHeading
          id="team-title"
          eyebrow="Our Dental Team"
          title="Meet the Clinicians Behind Your Care."
          intro="An attentive, patient-first clinical team led by Dr. Naik, committed to gentle treatment and honest communication."
        />

        <div className="mt-14 grid gap-12 lg:mt-16 lg:grid-cols-12 lg:items-center lg:gap-16">
          {/* Left Column: Authentic Clinic Setting & Doctor Card */}
          <Reveal className="relative lg:col-span-5">
            <div className="overflow-hidden rounded-[28px] border-4 border-white bg-white shadow-[0_20px_50px_-15px_rgba(8,127,174,0.18)]">
              <ParallaxImage
                src={featured.portrait}
                alt="Reception and practice setting of Dr. Naik's Shubh Smile Multispeciality Dental Clinic in Nashik"
                className="aspect-[4/3] sm:aspect-[1/1] w-full"
                objectPosition="center"
              />
              <div className="bg-white p-5 border-t border-[#E2EAF0]">
                <div className="flex items-center gap-3">
                  <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-2xl bg-[#087FAE] text-white font-serif font-bold text-lg shadow-sm">
                    DN
                  </div>
                  <div>
                    <h4 className="font-serif text-lg font-bold text-[#123B59]">{featured.name}</h4>
                    <p className="text-xs font-semibold text-[#087FAE]">{featured.qualification}</p>
                  </div>
                </div>
              </div>
            </div>
          </Reveal>

          {/* Right Column: Bio, Qualifications, Focus Areas, CTAs */}
          <Reveal delay={0.08} className="lg:col-span-7">
            <div className="inline-flex items-center gap-2 rounded-full border border-[#087FAE]/20 bg-white px-3.5 py-1 text-xs font-semibold text-[#087FAE]">
              <AwardIcon className="h-3.5 w-3.5" />
              <span>{featured.specialty}</span>
            </div>

            <h3 className="mt-4 font-serif text-3xl sm:text-4xl lg:text-5xl font-bold text-[#123B59] leading-tight">
              {featured.name}
            </h3>

            <p className="mt-2 text-sm sm:text-base font-semibold text-[#087FAE]">
              {featured.qualification} · Shubh Smile Dental Clinic
            </p>

            <p className="mt-6 text-base sm:text-lg leading-relaxed text-[#34465A]">
              {featured.bio}
            </p>

            {featured.focusAreas && (
              <div className="mt-8">
                <p className="text-xs font-bold uppercase tracking-wider text-[#123B59]/70">
                  Clinical Focus Areas
                </p>
                <ul className="mt-3 flex flex-wrap gap-2" aria-label="Clinical Focus Areas">
                  {featured.focusAreas.map((area) => (
                    <li
                      key={area}
                      className="rounded-full border border-[#E2EAF0] bg-white px-4 py-1.5 text-xs sm:text-sm font-semibold text-[#123B59] shadow-2xs"
                    >
                      {area}
                    </li>
                  ))}
                </ul>
              </div>
            )}

            <div className="mt-10 flex flex-wrap items-center gap-3.5">
              <button
                type="button"
                onClick={() => openAppointment('a consultation with Dr. Naik')}
                className={buttonClass('primary', 'lg', 'shadow-md')}
              >
                <CalendarCheckIcon className="h-5 w-5" />
                <span>Book a Consultation</span>
              </button>

              <WhatsAppLink
                variant="whatsappOutline"
                size="lg"
                message="Hello, I would like to book a consultation with Dr. Naik at Dr. Naik's Shubh Smile Multispeciality Dental Clinic in Nashik."
              >
                Ask on WhatsApp
              </WhatsAppLink>

              <Link
                to="/team"
                className="inline-flex items-center gap-1.5 text-sm font-semibold text-[#087FAE] hover:text-[#076D96] px-3 py-2"
              >
                <span>Read Full Profile</span>
                <ArrowRightIcon className="h-4 w-4" />
              </Link>
            </div>
          </Reveal>
        </div>
      </div>
    </section>
  );
}
