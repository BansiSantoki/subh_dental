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
        title={`Page Not Found | ${siteConfig.name}`}
        description="The page you are looking for could not be found."
        path="/404"
        noindex
      />

      <section className="flex min-h-[75vh] items-center bg-[#F2F8FC] px-4 pb-14 pt-28">
        <div className="mx-auto max-w-xl text-center">
          <div className="flex justify-center">
            <LogoMark size={56} />
          </div>
          <p className="mt-6 font-serif text-8xl sm:text-9xl font-extrabold text-[#087FAE]">404</p>
          <h1 className="mt-4 font-serif text-3xl sm:text-4xl font-bold leading-tight text-[#123B59]">
            This page could not be found.
          </h1>
          <p className="mx-auto mt-4 max-w-md text-sm sm:text-base leading-relaxed text-[#34465A]">
            The link may be outdated or the page may have moved. Let’s guide you back to our dental clinic website.
          </p>
          <div className="mt-8 flex flex-col justify-center gap-3 sm:flex-row">
            <Link to="/" className={buttonClass('primary', 'lg', 'shadow-md')}>
              Return to Homepage
            </Link>
            <Link to="/services" className={buttonClass('secondary', 'lg')}>
              View All Treatments
            </Link>
          </div>
        </div>
      </section>
    </>
  );
}
