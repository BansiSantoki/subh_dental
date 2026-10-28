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
    <section id="blog" aria-labelledby="blog-title" className="bg-white py-24 md:py-36">
      <div className="mx-auto max-w-[1440px] px-5 md:px-8 lg:px-12">
        <div className="flex flex-col gap-8 lg:flex-row lg:items-end lg:justify-between">
          <SectionHeading id="blog-title" eyebrow="Dental education" title="Simple Answers for a Healthier Smile." />
          <Reveal delay={0.1} className="shrink-0">
            <Link to="/blog" className={buttonClass('secondary', 'md')}>
              All articles <ArrowRightIcon className="h-4 w-4" aria-hidden="true" />
            </Link>
          </Reveal>
        </div>

        <div className="mt-14 grid gap-12 lg:grid-cols-12 lg:gap-14">
          <Reveal className="lg:col-span-7">
            <BlogCard post={lead} variant="large" />
          </Reveal>
          <div className="flex flex-col gap-8 divide-y divide-charcoal/10 lg:col-span-5">
            {side.map((post, i) =>
            <Reveal key={post.slug} delay={0.06 * i} className={i > 0 ? 'pt-8' : ''}>
                <BlogCard post={post} variant="row" />
              </Reveal>
            )}
          </div>
        </div>
      </div>
    </section>);

}