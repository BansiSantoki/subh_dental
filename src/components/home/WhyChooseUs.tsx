import React from 'react';
import { ParallaxImage } from '../shared/ParallaxImage';
import { Reveal } from '../shared/Reveal';
import { SectionHeading } from '../shared/SectionHeading';
import { whyChooseUs } from '../../data/homeSections';
import { images } from '../../data/images';

export function WhyChooseUs() {
  const firstHalf = whyChooseUs.slice(0, 4);
  const secondHalf = whyChooseUs.slice(4);

  return (
    <section id="why-us" aria-labelledby="why-title" className="bg-[#f5f9fb] py-20 md:py-28">
      <div className="mx-auto grid max-w-[1440px] gap-16 px-5 md:px-8 lg:grid-cols-12 lg:gap-16 lg:px-12">
        <div className="lg:col-span-5">
          <div className="lg:sticky lg:top-32">
            <SectionHeading
              id="why-title"
              eyebrow="Why choose us"
              title={
              <>
                  Your Comfort Matters. <em className="font-normal italic text-forest">Your Smile Comes First.</em>
                </>
              } />
            <Reveal delay={0.05} className="mt-7">
              <p className="inline-flex items-center gap-2 rounded-full border border-brandBlue/10 bg-white px-4 py-2 text-[12px] font-semibold text-[#294354]">
                <span className="h-2 w-2 rounded-full bg-brandLime" aria-hidden="true" />
                Care shaped around you
              </p>
            </Reveal>
            
            <Reveal delay={0.1} className="mt-12 hidden lg:block">
              <ParallaxImage
                src={images.reception}
                alt="Reception area at Shubh Smile Dental Clinic"
                className="aspect-[4/5] rounded-[28px]"
                objectPosition="center" />
              
            </Reveal>
          </div>
        </div>

        <div className="lg:col-span-7 lg:pt-4">
          <FeatureGrid items={firstHalf} />
          <Reveal className="my-14">
            <figure>
              <ParallaxImage
                src={images.dentalTools}
                alt="Sterilized instruments neatly arranged on sage linen"
                className="aspect-[16/9] rounded-[28px]"
                strength={28} />
              
              <figcaption className="mt-4 font-serif text-[19px] italic text-charcoal/60">
                Hygiene and care, considered in every detail.
              </figcaption>
            </figure>
          </Reveal>
          <FeatureGrid items={secondHalf} />
        </div>
      </div>
    </section>);

}

function FeatureGrid({ items }: {items: {title: string;text: string;}[];}) {
  return (
    <div className="grid gap-x-12 sm:grid-cols-2">
      {items.map((f, i) =>
      <Reveal key={f.title} delay={0.06 * (i % 2)}>
          <article className="h-full rounded-[20px] border border-brandBlue/10 bg-white p-6 shadow-[0_16px_40px_-34px_rgba(23,63,58,0.3)] sm:p-7">
            <span className="mb-5 block h-1 w-10 rounded-full bg-brandLime" aria-hidden="true" />
            <h3 className="font-serif text-[26px] font-medium leading-[1.1] text-[#172a39]">{f.title}</h3>
            <p className="mt-3 text-pretty text-[14.5px] leading-[1.75] text-charcoal/70">{f.text}</p>
          </article>
        </Reveal>
      )}
    </div>);

}