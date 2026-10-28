import React from 'react';
import { Link } from 'react-router-dom';
import { ArrowRightIcon } from 'lucide-react';
import { ParallaxImage } from '../shared/ParallaxImage';
import { Reveal } from '../shared/Reveal';
import { SectionHeading } from '../shared/SectionHeading';
import { principles } from '../../data/homeSections';
import { images } from '../../data/images';

export function AboutSection() {
  return (
    <section id="about" aria-labelledby="about-title" className="relative bg-white py-24 md:py-36">
      <div className="mx-auto grid max-w-[1440px] gap-16 px-5 md:px-8 lg:grid-cols-12 lg:gap-12 lg:px-12">
        <Reveal className="relative pb-16 lg:col-span-7 lg:pb-24">
          <ParallaxImage
            src={images.reception}
            alt="Reception lounge with oak desk, forest green chairs and soft daylight"
            className="aspect-[5/4] w-[88%] rounded-[28px]" />
          
          <div className="absolute bottom-0 right-0 w-[44%] overflow-hidden rounded-[24px] border-[8px] border-white shadow-[0_40px_80px_-40px_rgba(23,63,58,0.5)]">
            <ParallaxImage
              src={images.treatmentRoom}
              alt="Calm treatment room with a cream dental chair"
              className="aspect-[4/5]"
              strength={24} />
            
          </div>
          <p className="absolute bottom-6 left-0 max-w-[44%] font-serif text-[19px] italic leading-snug text-charcoal/60 sm:text-[22px]">
            A calm space, designed around how you feel.
          </p>
        </Reveal>

        <div className="lg:col-span-5 lg:pt-10">
          <SectionHeading id="about-title" eyebrow="About the studio" title="Dentistry That Puts You First." />
          <Reveal delay={0.05}>
            <p className="mt-7 text-pretty text-[17px] leading-[1.8] text-charcoal/75">
              We believe a positive dental experience begins with listening. Our approach combines thoughtful
              communication, personalized treatment planning, and a welcoming environment designed to help you feel
              comfortable at every step.
            </p>
          </Reveal>

          <dl className="mt-12 border-t border-charcoal/10">
            {principles.map((p, i) =>
            <Reveal key={p.title} delay={0.06 * i}>
                <div className="grid grid-cols-[110px_1fr] items-baseline gap-6 border-b border-charcoal/10 py-6 sm:grid-cols-[140px_1fr]">
                  <dt className="font-serif text-[34px] italic leading-none text-forest">{p.title}</dt>
                  <dd className="text-[15px] leading-relaxed text-charcoal/70">{p.text}</dd>
                </div>
              </Reveal>
            )}
          </dl>

          <Reveal delay={0.1}>
            <Link
              to="/#team"
              className="group mt-10 inline-flex items-center gap-3 text-[15px] font-semibold text-forest">
              
              <span className="border-b border-forest/30 pb-1 transition-colors duration-200 group-hover:border-forest">
                Get to Know Us
              </span>
              <span className="flex h-10 w-10 items-center justify-center rounded-full bg-forest text-ivory transition-transform duration-200 ease-silk group-hover:translate-x-1">
                <ArrowRightIcon className="h-4 w-4" aria-hidden="true" />
              </span>
            </Link>
          </Reveal>
        </div>
      </div>
    </section>);

}