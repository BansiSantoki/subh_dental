import React from 'react';
import { Link } from 'react-router-dom';
import { ArrowRightIcon, CheckCircle2Icon, ShieldCheckIcon, HeartHandshakeIcon, SparklesIcon } from 'lucide-react';
import { ParallaxImage } from '../shared/ParallaxImage';
import { Reveal } from '../shared/Reveal';
import { SectionHeading } from '../shared/SectionHeading';
import { principles } from '../../data/homeSections';
import { images } from '../../data/images';
import { buttonClass } from '../../utils/buttonStyles';

export function AboutSection() {
  return (
    <section id="about" aria-labelledby="about-title" className="relative bg-white py-20 md:py-28 lg:py-32">
      <div className="mx-auto max-w-[1440px] px-4 sm:px-6 md:px-8 lg:px-12">
        <div className="grid gap-14 lg:grid-cols-12 lg:items-center lg:gap-16">
          {/* Left: Authentic Clinical Photography */}
          <Reveal className="relative lg:col-span-6">
            <div className="relative mx-auto max-w-lg lg:max-w-none">
              {/* Primary Photo: Dentist examining patient */}
              <div className="overflow-hidden rounded-[28px] border border-[#E2EAF0] bg-[#F2F8FC] shadow-[0_20px_50px_-20px_rgba(8,127,174,0.18)]">
                <ParallaxImage
                  src={images.dentistExamination}
                  alt="Dentist performing gentle clinical dental examination with professional dental lighting"
                  className="aspect-[4/3] w-full"
                  strength={15}
                  width={1200}
                  height={900}
                />
              </div>

              {/* Secondary Overlapping Photo: Modern operatory room */}
              <div className="absolute -bottom-8 -right-3 sm:-right-6 w-[52%] overflow-hidden rounded-[22px] border-4 border-white shadow-[0_20px_45px_-15px_rgba(18,59,89,0.25)]">
                <ParallaxImage
                  src={images.treatmentRoom}
                  alt="Sterile modern treatment room at Dr. Naik's Shubh Smile Multispeciality Dental Clinic"
                  className="aspect-[4/3] w-full"
                  strength={20}
                  width={800}
                  height={600}
                />
              </div>

              {/* Quote Pill */}
              <div className="absolute -top-4 -left-2 sm:-left-4 rounded-xl border border-[#087FAE]/20 bg-white/95 px-4 py-2.5 shadow-sm backdrop-blur">
                <p className="text-xs font-semibold text-[#087FAE]">
                  Gentle · Unhurried · Transparent
                </p>
              </div>
            </div>
          </Reveal>

          {/* Right: Content & Principles */}
          <div className="lg:col-span-6 lg:pl-4">
            <SectionHeading
              id="about-title"
              eyebrow="About Dr. Naik's Shubh Smile"
              title="Dentistry That Puts You First."
              className="max-w-none"
            />

            <Reveal delay={0.06}>
              <p className="mt-6 text-base sm:text-lg leading-relaxed text-[#34465A]">
                We believe that great dentistry begins with genuine listening. At Dr. Naik's Shubh Smile
                Multispeciality Dental Clinic in Nashik, we combine clinical expertise, modern diagnostic tools,
                and a calm, comforting environment to make every dental visit reassuring and stress-free.
              </p>
              <p className="mt-4 text-base leading-relaxed text-[#34465A]/85">
                From explaining procedures in plain language to ensuring zero surprises regarding timelines and
                costs, our focus is entirely on your long-term oral health and confidence.
              </p>
            </Reveal>

            {/* Three Core Pillars */}
            <dl className="mt-8 space-y-4">
              {principles.map((p, i) => (
                <Reveal key={p.title} delay={0.08 * i}>
                  <div className="flex items-start gap-4 rounded-2xl border border-[#E2EAF0] bg-[#F2F8FC]/60 p-4 sm:p-5 transition-colors duration-200 hover:border-[#087FAE]/30 hover:bg-[#F2F8FC]">
                    <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-xl bg-white text-[#087FAE] shadow-sm">
                      {i === 0 && <HeartHandshakeIcon className="h-5 w-5" />}
                      {i === 1 && <SparklesIcon className="h-5 w-5" />}
                      {i === 2 && <ShieldCheckIcon className="h-5 w-5" />}
                    </div>
                    <div>
                      <dt className="text-base font-bold text-[#123B59]">{p.title}</dt>
                      <dd className="mt-1 text-sm leading-relaxed text-[#34465A]">{p.text}</dd>
                    </div>
                  </div>
                </Reveal>
              ))}
            </dl>

            {/* Link to Team */}
            <Reveal delay={0.12} className="mt-8">
              <Link
                to="/team"
                className="group inline-flex items-center gap-3 text-sm font-semibold text-[#087FAE] hover:text-[#076D96]"
              >
                <span className="border-b border-[#087FAE]/30 pb-0.5 group-hover:border-[#087FAE]">
                  Meet Dr. Naik & Clinical Specialists
                </span>
                <span className="flex h-8 w-8 items-center justify-center rounded-full bg-[#DCEFF8] text-[#087FAE] transition-transform duration-200 group-hover:translate-x-1">
                  <ArrowRightIcon className="h-4 w-4" />
                </span>
              </Link>
            </Reveal>
          </div>
        </div>
      </div>
    </section>
  );
}
