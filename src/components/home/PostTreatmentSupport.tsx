import React from 'react';
import { AlertCircleIcon, ShieldCheckIcon, PhoneCallIcon, MessageSquareIcon } from 'lucide-react';
import { ParallaxImage } from '../shared/ParallaxImage';
import { Reveal } from '../shared/Reveal';
import { SectionHeading } from '../shared/SectionHeading';
import { WhatsAppLink } from '../shared/WhatsAppLink';
import { aftercareItems, aftercareUrgent } from '../../data/homeSections';
import { images } from '../../data/images';
import { siteConfig } from '../../data/siteConfig';

export function PostTreatmentSupport() {
  return (
    <section id="aftercare" aria-labelledby="aftercare-title" className="bg-[#F2F8FC] py-12 sm:py-16 md:py-18 lg:py-20">
      <div className="mx-auto max-w-[1440px] px-4 sm:px-6 md:px-8 lg:px-12">
        <div className="grid gap-14 lg:grid-cols-12 lg:gap-16">
          {/* Left Column: Authentic Treatment Room & Support Badge */}
          <Reveal className="relative lg:col-span-5">
            <div className="overflow-hidden rounded-[28px] border-4 border-white bg-white shadow-[0_20px_50px_-20px_rgba(8,127,174,0.18)]">
              <ParallaxImage
                src={images.treatmentRoom}
                alt="Dentist performing patient treatment in modern operatory chair at Dr. Naik's Shubh Smile Multispeciality Dental Clinic"
                className="aspect-[4/3] sm:aspect-[4/5] w-full"
                objectPosition="center 30%"
              />
              <div className="p-5 border-t border-[#E2EAF0] bg-white">
                <p className="font-serif text-lg font-bold text-[#123B59]">
                  “Care That Extends Beyond the Dental Chair.”
                </p>
                <p className="mt-1 text-xs text-[#34465A]/80">
                  Comprehensive post-treatment guidance & follow-ups
                </p>
              </div>
            </div>
          </Reveal>

          {/* Right Column: Aftercare Cards, Urgent Callout, WhatsApp CTA */}
          <div className="lg:col-span-7">
            <SectionHeading
              id="aftercare-title"
              eyebrow="Post-Treatment Care"
              title="Here for You, Even After Your Visit."
              intro="Quality dental care doesn't stop when your appointment ends. We provide clear, personalized recovery guidelines and prompt assistance whenever you have questions."
            />

            {/* 4 Guidance Cards */}
            <div className="mt-10 grid gap-4 sm:grid-cols-2">
              {aftercareItems.map((item, i) => (
                <Reveal key={item.title} delay={0.05 * (i % 2)}>
                  <article className="h-full rounded-2xl border border-[#E2EAF0] bg-white p-5 shadow-xs transition-colors duration-200 hover:border-[#087FAE]/30">
                    <span className="mb-3 block h-1 w-8 rounded-full bg-[#087FAE]" aria-hidden="true" />
                    <h3 className="font-serif text-lg font-bold text-[#123B59] leading-snug">
                      {item.title}
                    </h3>
                    <p className="mt-2 text-xs sm:text-sm leading-relaxed text-[#34465A]/85">
                      {item.text}
                    </p>
                  </article>
                </Reveal>
              ))}
            </div>

            {/* Urgent Care Advisory Notice */}
            <Reveal className="mt-6">
              <aside
                className="flex gap-4 rounded-2xl border border-amber-200 bg-amber-50/70 p-5 sm:p-6"
                aria-labelledby="urgent-title"
              >
                <AlertCircleIcon className="mt-0.5 h-5 w-5 shrink-0 text-amber-700" aria-hidden="true" />
                <div>
                  <h3 id="urgent-title" className="font-serif text-base sm:text-lg font-bold text-amber-900">
                    {aftercareUrgent.title}
                  </h3>
                  <p className="mt-1 text-xs sm:text-sm leading-relaxed text-amber-800">
                    {aftercareUrgent.text}
                  </p>
                </div>
              </aside>
            </Reveal>

            {/* Direct WhatsApp Guidance Button & Full Page Link */}
            <Reveal className="mt-8 flex flex-wrap items-center gap-4">
              <WhatsAppLink
                message={siteConfig.aftercareWhatsAppMessage}
                size="lg"
                className="w-full sm:w-auto shadow-md"
              >
                <MessageSquareIcon className="h-4 w-4" />
                <span>Need Post-Treatment Guidance? WhatsApp Us</span>
              </WhatsAppLink>
              <a
                href={`tel:${siteConfig.phoneE164}`}
                className="inline-flex items-center gap-2 rounded-full border border-[#E2EAF0] bg-white px-5 py-3.5 text-xs sm:text-sm font-semibold text-[#123B59] hover:border-[#087FAE] hover:text-[#087FAE] transition-colors"
              >
                <PhoneCallIcon className="h-4 w-4 text-[#087FAE]" />
                <span>Call Clinic Reception</span>
              </a>
              <a
                href="/post-treatment-support"
                className="inline-flex items-center gap-1.5 text-xs sm:text-sm font-semibold text-[#087FAE] hover:underline py-2"
              >
                <span>View Full Aftercare Guide &rarr;</span>
              </a>
            </Reveal>
          </div>
        </div>
      </div>
    </section>
  );
}
