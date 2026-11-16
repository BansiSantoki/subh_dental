import React from 'react';
import { Link } from 'react-router-dom';
import { ArrowRightIcon } from 'lucide-react';
import { BlogCard } from '../shared/BlogCard';
import { Reveal } from '../shared/Reveal';
import { SectionHeading } from '../shared/SectionHeading';
import { blogPosts } from '../../data/blog';
import { buttonClass } from '../../utils/buttonStyles';

export function BlogPreviewSection() {
  const [lead, ...rest] = blogPosts;
  const side = rest.slice(0, 3);

  return (
    <section id="blog" aria-labelledby="blog-title" className="bg-white py-10 sm:py-12 md:py-14 lg:py-16">
      <div className="mx-auto max-w-[1440px] px-4 sm:px-6 md:px-8 lg:px-12">
        <div className="flex flex-col gap-8 lg:flex-row lg:items-end lg:justify-between">
          <SectionHeading
            id="blog-title"
            eyebrow="Dental Health Blog"
            title="Simple Answers for a Healthier Smile."
            intro="Helpful clinical insights and home oral hygiene guidance from Dr. Naik's Shubh Smile Dental Clinic in Nashik."
          />
          <Reveal delay={0.08} className="shrink-0">
            <Link to="/blog" className={buttonClass('secondary', 'md')}>
              <span>View All Articles</span>
              <ArrowRightIcon className="h-4 w-4" aria-hidden="true" />
            </Link>
          </Reveal>
        </div>

        <div className="mt-12 sm:mt-14 grid gap-10 lg:grid-cols-12 lg:gap-12">
          {/* Featured Large Article */}
          <Reveal className="lg:col-span-7">
            <BlogCard post={lead} variant="large" />
          </Reveal>

          {/* Side Articles */}
          <div className="flex flex-col gap-6 divide-y divide-[#E2EAF0] lg:col-span-5">
            {side.map((post, i) => (
              <Reveal key={post.slug} delay={0.06 * i} className={i > 0 ? 'pt-6' : ''}>
                <BlogCard post={post} variant="row" />
              </Reveal>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
