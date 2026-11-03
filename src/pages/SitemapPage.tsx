import React from 'react';
import { Link } from 'react-router-dom';
import { SEOHead } from '../components/shared/SEOHead';
import { PageHero } from '../components/shared/PageHero';
import { getSitemapGroups } from '../utils/sitemap';
import { siteConfig } from '../data/siteConfig';

export function SitemapPage() {
  const groups = getSitemapGroups();
  return (
    <>
      <SEOHead title={`Sitemap | ${siteConfig.name}`} description={`An overview of every page on the ${siteConfig.name} website.`} path="/sitemap" />
      <PageHero crumbs={[{ label: 'Home', href: '/' }, { label: 'Sitemap' }]} title="Sitemap" />
      <section className="bg-white py-20 md:py-28">
        <div className="mx-auto grid max-w-[1440px] gap-12 px-5 sm:grid-cols-2 md:px-8 lg:grid-cols-4 lg:px-12">
          {groups.map((g) =>
          <div key={g.title}>
              <h2 className="border-b border-charcoal/10 pb-3 font-serif text-[28px] font-medium text-charcoal">{g.title}</h2>
              <ul className="mt-5 space-y-2.5">
                {g.links.map((l) =>
              <li key={l.path}>
                    <Link to={l.path} className="text-[15px] leading-snug text-charcoal/75 transition-colors duration-200 hover:text-forest">
                      {l.label}
                    </Link>
                  </li>
              )}
              </ul>
            </div>
          )}
        </div>
      </section>
    </>);

}