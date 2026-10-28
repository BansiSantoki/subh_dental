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
    <section id="why-us" aria-labelledby="why-title" className="bg-ivory py-24 md:py-36">
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
            
            <Reveal delay={0.1} className="mt-12 hidden lg:block">
              <ParallaxImage
                src={images.consultation}
                alt="Dentist explaining a treatment plan on a tablet to a relaxed patient"
                className="aspect-[4/5] rounded-[28px]"
                objectPosition="60% center" />
              
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
          <article className="border-t border-charcoal/15 pb-10 pt-7">
            <h3 className="font-serif text-[27px] font-medium leading-[1.1] text-charcoal">{f.title}</h3>
            <p className="mt-3 text-pretty text-[15px] leading-[1.75] text-charcoal/70">{f.text}</p>
          </article>
        </Reveal>
      )}
    </div>);

}