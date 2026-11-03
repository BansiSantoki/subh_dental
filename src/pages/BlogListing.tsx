import React, { useMemo, useState } from 'react';
import { SEOHead } from '../components/shared/SEOHead';
import { PageHero } from '../components/shared/PageHero';
import { BlogCard } from '../components/shared/BlogCard';
import { Reveal } from '../components/shared/Reveal';
import { blogPosts } from '../data/blog';
import { breadcrumbSchema, webPageSchema } from '../utils/structuredData';
import { siteConfig } from '../data/siteConfig';

const title = `Dental Health Blog | Simple Answers for a Healthier Smile | ${siteConfig.name}`;
const description =
  `Clear, friendly dental education from ${siteConfig.name} in Nashik — check-ups, cleaning, implants, root canals, whitening and more.`;

export function BlogListing() {
  const categories = useMemo(() => ['All', ...Array.from(new Set(blogPosts.map((p) => p.category)))], []);
  const [category, setCategory] = useState('All');
  const posts = category === 'All' ? blogPosts : blogPosts.filter((p) => p.category === category);
  const [lead, ...rest] = posts;

  return (
    <>
      <SEOHead
        title={title}
        description={description}
        path="/blog"
        jsonLd={[
          webPageSchema(title, description, '/blog'),
          breadcrumbSchema([
            { name: 'Home', path: '/' },
            { name: 'Blog', path: '/blog' }]
          )]
        } />

      <PageHero
        crumbs={[{ label: 'Home', href: '/' }, { label: 'Blog' }]}
        eyebrow="Dental education"
        title={
          <>
            Simple Answers for a <em className="font-normal italic text-forest">Healthier Smile.</em>
          </>
        }
        intro="Friendly, practical articles to help you understand your teeth, your options and what to expect. General information only — always follow your dentist’s personal advice." />


      <section aria-label="Articles" className="bg-white py-20 md:py-28">
        <div className="mx-auto max-w-[1440px] px-5 md:px-8 lg:px-12">
          <div role="group" aria-label="Filter by category" className="no-scrollbar -mx-5 flex gap-2 overflow-x-auto px-5 sm:mx-0 sm:flex-wrap sm:px-0">
            {categories.map((c) =>
              <button
                key={c}
                type="button"
                aria-pressed={category === c}
                onClick={() => setCategory(c)}
                className={`h-10 shrink-0 rounded-full border px-5 text-[13.5px] font-semibold transition-colors duration-200 ${category === c ? 'border-forest bg-forest text-ivory' : 'border-charcoal/15 text-charcoal/75 hover:border-charcoal/30'}`
                }>

                {c}
              </button>
            )}
          </div>

          {!lead ?
            <p className="py-24 text-center text-[16px] text-charcoal/60">No articles in this category yet.</p> :

            <>
              <Reveal key={lead.slug} className="mt-14">
                <div className="grid gap-10 lg:grid-cols-12">
                  <div className="lg:col-span-8">
                    <BlogCard post={lead} variant="large" />
                  </div>
                  <div className="flex flex-col gap-8 lg:col-span-4">
                    {rest.slice(0, 2).map((p) =>
                      <BlogCard key={p.slug} post={p} />
                    )}
                  </div>
                </div>
              </Reveal>
              {rest.length > 2 &&
                <div className="mt-20 grid gap-x-8 gap-y-14 border-t border-charcoal/10 pt-16 sm:grid-cols-2 lg:grid-cols-3">
                  {rest.slice(2).map((p, i) =>
                    <Reveal key={p.slug} delay={0.05 * (i % 3)} className="h-full">
                      <BlogCard post={p} />
                    </Reveal>
                  )}
                </div>
              }
            </>
          }
        </div>
      </section>
    </>);

}