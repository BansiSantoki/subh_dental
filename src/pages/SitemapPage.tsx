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
      <SEOHead
        title={`HTML Sitemap | ${siteConfig.name}`}
        description={`An overview of all pages and dental treatments on the ${siteConfig.name} website.`}
        path="/sitemap"
      />
      <PageHero crumbs={[{ label: 'Home', href: '/' }, { label: 'Sitemap' }]} title="Website Sitemap" />
      <section className="bg-white py-16 md:py-24">
        <div className="mx-auto grid max-w-[1440px] gap-10 px-4 sm:grid-cols-2 md:px-8 lg:grid-cols-4 lg:px-12">
          {groups.map((g) => (
            <div key={g.title} className="rounded-2xl border border-[#E2EAF0] bg-[#F2F8FC] p-6">
              <h2 className="border-b border-[#E2EAF0] pb-3 font-serif text-xl font-bold text-[#123B59]">
                {g.title}
              </h2>
              <ul className="mt-4 space-y-2 text-sm">
                {g.links.map((l) => (
                  <li key={l.path}>
                    <Link
                      to={l.path}
                      className="text-[#34465A] transition-colors duration-200 hover:text-[#087FAE] hover:underline"
                    >
                      {l.label}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </section>
    </>
  );
}
