import React from 'react';
import {
  FileTextIcon,
  SmileIcon,
  CpuIcon,
  MessageCircleIcon,
  ShieldCheckIcon,
  HeartPulseIcon,
  SparklesIcon
} from 'lucide-react';
import { ParallaxImage } from '../shared/ParallaxImage';
import { Reveal } from '../shared/Reveal';
import { SectionHeading } from '../shared/SectionHeading';
import { whyChooseUs } from '../../data/homeSections';
import { images } from '../../data/images';

const icons = [
  FileTextIcon,
  SmileIcon,
  CpuIcon,
  MessageCircleIcon,
  ShieldCheckIcon,
  HeartPulseIcon
];

export function WhyChooseUs() {
  return (
    <section id="why-us" aria-labelledby="why-title" className="bg-[#F2F8FC] py-20 md:py-28 lg:py-32">
      <div className="mx-auto max-w-[1440px] px-4 sm:px-6 md:px-8 lg:px-12">
        <div className="grid gap-14 lg:grid-cols-12 lg:gap-16">
          {/* Left Column: Heading, Intro, and Real Reception Photo */}
          <div className="lg:col-span-5">
            <div className="lg:sticky lg:top-28">
              <SectionHeading
                id="why-title"
                eyebrow="Why Choose Us"
                title="Your Comfort Matters. Your Smile Comes First."
                intro="Here is why patients across Nashik choose Dr. Naik's Shubh Smile Multispeciality Dental Clinic for their family's oral care."
              />

              <Reveal delay={0.08} className="mt-8 hidden lg:block">
                <div className="overflow-hidden rounded-[24px] border border-[#E2EAF0] bg-white p-2 shadow-sm">
                  <ParallaxImage
                    src={images.reception}
                    alt="Authentic reception and clinic lounge at Dr. Naik's Shubh Smile Dental Clinic in Nashik"
                    className="aspect-[4/3] rounded-[18px]"
                    objectPosition="center"
                  />
                  <div className="p-4">
                    <p className="font-serif text-base font-semibold text-[#123B59]">
                      Welcome to Shubh Smile Dental Clinic
                    </p>
                    <p className="mt-1 text-xs text-[#34465A]/80">
                      Sundaram Appt, Indira Nagar, Nashik
                    </p>
                  </div>
                </div>
              </Reveal>
            </div>
          </div>

          {/* Right Column: 6 Premium Cards with Blue Icons and White Backgrounds */}
          <div className="lg:col-span-7">
            <div className="grid gap-5 sm:grid-cols-2">
              {whyChooseUs.map((item, index) => {
                const IconComponent = icons[index % icons.length];
                return (
                  <Reveal key={item.title} delay={0.06 * (index % 2)}>
                    <article className="group flex h-full flex-col rounded-2xl border border-[#E2EAF0] bg-white p-6 shadow-sm transition-all duration-200 hover:-translate-y-1 hover:border-[#087FAE]/40 hover:shadow-md">
                      <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-[#F2F8FC] text-[#087FAE] transition-colors duration-200 group-hover:bg-[#087FAE] group-hover:text-white">
                        <IconComponent className="h-6 w-6" aria-hidden="true" />
                      </div>
                      <h3 className="mt-5 font-serif text-xl font-bold leading-snug text-[#123B59]">
                        {item.title}
                      </h3>
                      <p className="mt-2.5 text-sm leading-relaxed text-[#34465A]/85">
                        {item.text}
                      </p>
                    </article>
                  </Reveal>
                );
              })}
            </div>

            {/* Hygiene Banner Feature */}
            <Reveal delay={0.15} className="mt-8">
              <div className="overflow-hidden rounded-2xl border border-[#087FAE]/20 bg-white p-5 sm:p-6 shadow-sm">
                <div className="flex flex-col sm:flex-row items-center gap-5">
                  <img
                    src={images.dentalTools}
                    alt="Sterile dental instruments on surgical tray"
                    className="h-28 w-full sm:w-36 rounded-xl object-cover shrink-0"
                    loading="lazy"
                  />
                  <div>
                    <span className="inline-flex items-center gap-1.5 rounded-full bg-[#DCEFF8] px-3 py-1 text-xs font-semibold text-[#087FAE]">
                      <SparklesIcon className="h-3.5 w-3.5" />
                      Infection-Control Guarantee
                    </span>
                    <h4 className="mt-2 text-base font-bold text-[#123B59]">
                      Multi-Stage Autoclave Sterilization
                    </h4>
                    <p className="mt-1 text-xs leading-relaxed text-[#34465A]/80">
                      Every instrument is processed through medical-grade ultrasonic cleaners, sealed in
                      sterile indicator pouches, and autoclaved at high pressure between appointments.
                    </p>
                  </div>
                </div>
              </div>
            </Reveal>

            {/* Link to Dedicated Page */}
            <Reveal delay={0.18} className="mt-8 text-center sm:text-left">
              <a
                href="/why-choose-us"
                className="inline-flex items-center gap-2 text-sm font-semibold text-[#087FAE] hover:text-[#076D96] transition-colors"
              >
                <span>Read our full clinical philosophy and standards</span>
                <span aria-hidden="true">&rarr;</span>
              </a>
            </Reveal>
          </div>
        </div>
      </div>
    </section>
  );
}
