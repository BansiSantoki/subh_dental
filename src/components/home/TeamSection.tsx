import React from 'react';
import { DoctorCard } from './DoctorCard';
import { ParallaxImage } from '../shared/ParallaxImage';
import { Reveal } from '../shared/Reveal';
import { SectionHeading } from '../shared/SectionHeading';
import { WhatsAppLink } from '../shared/WhatsAppLink';
import { doctors } from '../../data/team';
import { useAppointment } from '../../contexts/AppointmentContext';
import { buttonClass } from '../../utils/buttonStyles';

export function TeamSection() {
  const { openAppointment } = useAppointment();
  const featured = doctors.find((d) => d.featured) ?? doctors[0];
  const others = doctors.filter((d) => d.id !== featured.id);

  return (
    <section id="team" aria-labelledby="team-title" className="bg-white py-24 md:py-36">
      <div className="mx-auto max-w-[1440px] px-5 md:px-8 lg:px-12">
        <SectionHeading
          id="team-title"
          eyebrow="Our team"
          title="Meet the People Behind Your Smile."
          intro="A small, attentive team who believe good dentistry starts with a good conversation." />
        

        <div className="mt-16 grid gap-12 lg:mt-20 lg:grid-cols-12 lg:items-center lg:gap-16">
          <Reveal className="relative lg:col-span-5">
            <div className="absolute -left-4 -top-4 h-full w-full rounded-[32px] border border-champagne" aria-hidden="true" />
            <ParallaxImage
              src={featured.portrait}
              alt={featured.portraitAlt}
              className="relative aspect-[4/5] rounded-[32px] bg-sage"
              objectPosition="center 20%" />
            
          </Reveal>
          <Reveal delay={0.08} className="lg:col-span-7">
            <p className="text-[12px] font-semibold uppercase tracking-[0.22em] text-forest">
              Lead dentist · {featured.specialty}
            </p>
            <h3 className="mt-4 font-serif text-[46px] font-medium leading-[1] text-charcoal sm:text-[60px]">
              {featured.name}
            </h3>
            <p className="mt-3 text-[15px] text-muted">{featured.qualification}</p>
            <p className="mt-8 max-w-2xl text-pretty text-[17px] leading-[1.8] text-charcoal/75">{featured.bio}</p>
            {featured.focusAreas &&
            <ul className="mt-8 flex flex-wrap gap-2" aria-label="Focus areas">
                {featured.focusAreas.map((f, i) =>
              <li key={`${f}-${i}`} className="rounded-full bg-sage px-4 py-2 text-[13px] font-medium text-forest">
                    {f}
                  </li>
              )}
              </ul>
            }
            <div className="mt-10 flex flex-col gap-3 sm:flex-row">
              <button type="button" onClick={() => openAppointment('a general consultation')} className={buttonClass('primary', 'lg')}>
                Book a Consultation
              </button>
              <WhatsAppLink variant="whatsappOutline" size="lg" message="Hello, I would like to book a consultation with your lead dentist at Aurelia Dental Studio in Nashik.">
                Ask on WhatsApp
              </WhatsAppLink>
            </div>
          </Reveal>
        </div>

        <div className="mt-24 grid gap-14 border-t border-charcoal/10 pt-16 lg:grid-cols-2 lg:gap-16">
          {others.map((d, i) =>
          <Reveal key={d.id} delay={0.06 * i}>
              <DoctorCard doctor={d} />
            </Reveal>
          )}
        </div>
      </div>
    </section>);

}