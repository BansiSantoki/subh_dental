import React, { useMemo, useState } from 'react';
import { SEOHead } from '../components/shared/SEOHead';
import { PageHero } from '../components/shared/PageHero';
import { BlogCard } from '../components/shared/BlogCard';
import { Reveal } from '../components/shared/Reveal';
import { blogPosts } from '../data/blog';
import { breadcrumbSchema, webPageSchema } from '../utils/structuredData';
import { siteConfig } from '../data/siteConfig';

const title = `Dental Health Blog & Oral Care Guides | ${siteConfig.name}`;
const description =
  `Clear, informative dental health articles from ${siteConfig.name} in Nashik — preventive habits, teeth cleaning, dental implants, root canal care, and whitening advice.`;

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
            { name: 'Blog', path: '/blog' }
          ])
        ]}
      />

      <PageHero
        crumbs={[{ label: 'Home', href: '/' }, { label: 'Blog' }]}
        eyebrow="Dental Health Education"
        title={
          <>
            Simple Answers for a <span className="text-[#087FAE]">Healthier Smile.</span>
          </>
        }
        intro="Practical, easy-to-understand dental articles to help you care for your teeth, understand treatment options, and make confident oral health choices."
      />

      <section aria-label="Blog Articles" className="bg-white py-16 md:py-24">
        <div className="mx-auto max-w-[1440px] px-4 sm:px-6 md:px-8 lg:px-12">
          {/* Category Filter */}
          <div
            role="group"
            aria-label="Filter by category"
            className="no-scrollbar flex gap-2 overflow-x-auto pb-4"
          >
            {categories.map((c) => (
              <button
                key={c}
                type="button"
                aria-pressed={category === c}
                onClick={() => setCategory(c)}
                className={`h-10 shrink-0 rounded-full px-5 text-xs sm:text-sm font-semibold transition-all duration-200 cursor-pointer ${
                  category === c
                    ? 'border-[#087FAE] bg-[#087FAE] text-white shadow-sm'
                    : 'border border-[#E2EAF0] bg-[#F2F8FC] text-[#123B59] hover:border-[#087FAE] hover:text-[#087FAE]'
                }`}
              >
                {c}
              </button>
            ))}
          </div>

          {/* Featured First Article */}
          {lead && (
            <div className="mt-10">
              <Reveal>
                <div className="rounded-3xl border border-[#E2EAF0] bg-[#F2F8FC] p-6 sm:p-10 shadow-xs">
                  <span className="text-xs font-bold uppercase tracking-wider text-[#087FAE]">
                    Featured Editorial
                  </span>
                  <div className="mt-6">
                    <BlogCard post={lead} variant="large" />
                  </div>
                </div>
              </Reveal>
            </div>
          )}

          {/* Remaining Articles Grid */}
          {rest.length > 0 && (
            <div className="mt-12 sm:mt-16">
              <h2 className="font-serif text-2xl font-bold text-[#123B59] mb-8">
                More Articles & Oral Hygiene Guides
              </h2>
              <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-3">
                {rest.map((post, i) => (
                  <Reveal key={post.slug} delay={0.05 * (i % 3)}>
                    <BlogCard post={post} />
                  </Reveal>
                ))}
              </div>
            </div>
          )}
        </div>
      </section>
    </>
  );
}
