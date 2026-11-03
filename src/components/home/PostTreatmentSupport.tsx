import React from 'react';
import { AlertCircleIcon } from 'lucide-react';
import { ParallaxImage } from '../shared/ParallaxImage';
import { Reveal } from '../shared/Reveal';
import { SectionHeading } from '../shared/SectionHeading';
import { WhatsAppLink } from '../shared/WhatsAppLink';
import { aftercareItems, aftercareUrgent } from '../../data/homeSections';
import { images } from '../../data/images';
import { siteConfig } from '../../data/siteConfig';

export function PostTreatmentSupport() {
  return (
    <section id="aftercare" aria-labelledby="aftercare-title" className="bg-[#f5f9fb] py-20 md:py-28">
      <div className="mx-auto grid max-w-[1440px] gap-16 px-5 md:px-8 lg:grid-cols-12 lg:gap-16 lg:px-12">
        <Reveal className="relative lg:col-span-5">
          <ParallaxImage
            src={images.treatmentRoom}
            alt="A modern dental treatment room prepared for patient care"
            className="aspect-[4/5] rounded-[32px]"
            objectPosition="center 25%" />
          
          <div className="absolute -bottom-6 right-4 max-w-[260px] rounded-[20px] bg-white p-5 shadow-[0_30px_60px_-30px_rgba(23,63,58,0.5)] sm:right-[-24px]">
            <p className="font-serif text-[20px] leading-snug text-charcoal">
              “Knowing what to expect makes recovery calmer.”
            </p>
            <p className="mt-2 text-[12.5px] text-muted">Our approach to aftercare</p>
          </div>
        </Reveal>

        <div className="lg:col-span-7 lg:pt-6">
          <SectionHeading
            id="aftercare-title"
            eyebrow="Post-treatment support"
            title="Here for You, Even After Your Visit."
            intro="Good dental care includes knowing what to expect after treatment. We help you understand the next steps and when to contact your dental team." />
          

          <div className="mt-12 grid gap-3 sm:grid-cols-2">
            {aftercareItems.map((item, i) =>
            <Reveal key={item.title} delay={0.05 * (i % 2)}>
                <article className="h-full rounded-[20px] border border-brandBlue/10 bg-white p-5 sm:p-6">
                  <span className="mb-4 block h-1 w-9 rounded-full bg-brandLime" aria-hidden="true" />
                  <h3 className="font-serif text-[24px] font-medium leading-tight text-[#172a39]">{item.title}</h3>
                  <p className="mt-2 text-[14px] leading-[1.7] text-charcoal/70">{item.text}</p>
                </article>
              </Reveal>
            )}
          </div>

          <Reveal>
            <aside
              className="mt-4 flex gap-4 rounded-[22px] border border-champagne bg-champagne-light/60 p-6"
              aria-labelledby="urgent-title">
              
              <AlertCircleIcon className="mt-1 h-5 w-5 shrink-0 text-forest" aria-hidden="true" />
              <div>
                <h3 id="urgent-title" className="font-serif text-[24px] font-medium text-charcoal">
                  {aftercareUrgent.title}
                </h3>
                <p className="mt-1.5 text-[15px] leading-[1.7] text-charcoal/80">{aftercareUrgent.text}</p>
              </div>
            </aside>
          </Reveal>

          <Reveal className="mt-10">
            <WhatsAppLink message={siteConfig.aftercareWhatsAppMessage} size="lg" className="!h-auto w-full !whitespace-normal py-4 text-center sm:w-auto">
              Need Aftercare Guidance? Contact Us on WhatsApp
            </WhatsAppLink>
            <p className="mt-4 max-w-lg text-[13px] leading-relaxed text-muted">
              Information here is educational. Please follow the personalized advice of your treating dentist.
            </p>
          </Reveal>
        </div>
      </div>
    </section>);

}