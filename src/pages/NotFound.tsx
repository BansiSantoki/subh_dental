import React from 'react';
import { Link } from 'react-router-dom';
import { SEOHead } from '../components/shared/SEOHead';
import { LogoMark } from '../components/shared/Logo';
import { buttonClass } from '../utils/buttonStyles';
import { siteConfig } from '../data/siteConfig';

export function NotFound() {
  return (
    <>
      <SEOHead
        title={`Page not found | ${siteConfig.name}`}
        description="The page you are looking for could not be found."
        path="/404"
        noindex />
      
      <section className="flex min-h-[80vh] items-center bg-ivory px-5 pb-20 pt-[120px]">
        <div className="mx-auto max-w-2xl text-center">
          <div className="flex justify-center">
            <LogoMark size={56} />
          </div>
          <p className="mt-8 font-serif text-[120px] font-medium leading-none text-forest sm:text-[160px]">404</p>
          <h1 className="mt-4 font-serif text-[38px] font-medium leading-tight text-charcoal sm:text-[48px]">
            This page seems to have wandered off.
          </h1>
          <p className="mx-auto mt-5 max-w-md text-[16px] leading-relaxed text-charcoal/70">
            The link may be outdated or the page may have moved. Let’s get you back to somewhere useful.
          </p>
          <div className="mt-10 flex flex-col justify-center gap-3 sm:flex-row">
            <Link to="/" className={buttonClass('primary', 'lg')}>
              Back to home
            </Link>
            <Link to="/services" className={buttonClass('secondary', 'lg')}>
              Explore treatments
            </Link>
          </div>
        </div>
      </section>
    </>);

}