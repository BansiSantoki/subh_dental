import React from 'react';
import { Link, useParams } from 'react-router-dom';
import { ArrowRightIcon, CalendarCheckIcon, MessageSquareIcon } from 'lucide-react';
import { SEOHead } from '../components/shared/SEOHead';
import { Breadcrumbs } from '../components/shared/Breadcrumbs';
import { BlogCard } from '../components/shared/BlogCard';
import { Reveal } from '../components/shared/Reveal';
import { WhatsAppLink } from '../components/shared/WhatsAppLink';
import { BlogContentRenderer } from '../components/blog/BlogContentRenderer';
import { TableOfContents } from '../components/blog/TableOfContents';
import { NotFound } from './NotFound';
import {
  getPostBySlug,
  getRelatedPosts,
  getServiceBySlug,
  getTableOfContents,
  readingTimeMinutes
} from '../utils/content';
import { treatmentMessage } from '../utils/whatsapp';
import { blogPostingSchema, breadcrumbSchema } from '../utils/structuredData';
import { siteConfig } from '../data/siteConfig';
import { useAppointment } from '../contexts/AppointmentContext';
import { buttonClass } from '../utils/buttonStyles';

export function BlogArticle() {
  const { slug } = useParams();
  const post = getPostBySlug(slug);
  const { openAppointment } = useAppointment();

  if (!post) return <NotFound />;

  const path = `/blog/${post.slug}`;
  const toc = getTableOfContents(post);
  const related = getRelatedPosts(post);
  const service = getServiceBySlug(post.relatedService);
  const showToc = toc.length >= 2;

  return (
    <>
      <SEOHead
        title={`${post.title} | ${siteConfig.name} Blog`}
        description={post.metaDescription}
        path={path}
        image={post.featuredImage}
        type="article"
        jsonLd={[
          blogPostingSchema(post),
          breadcrumbSchema([
            { name: 'Home', path: '/' },
            { name: 'Blog', path: '/blog' },
            { name: post.title, path }
          ])
        ]}
      />

      <article>
        {/* Header */}
        <header className="bg-gradient-to-b from-[#F2F8FC] via-white to-white pt-28 pb-12 md:pt-36 md:pb-16 border-b border-[#E2EAF0]">
          <div className="mx-auto max-w-[1440px] px-4 sm:px-6 md:px-8 lg:px-12">
            <Breadcrumbs
              items={[
                { label: 'Home', href: '/' },
                { label: 'Blog', href: '/blog' },
                { label: post.title }
              ]}
            />
            <Reveal className="mx-auto max-w-4xl pt-8 text-center">
              <div className="flex flex-wrap items-center justify-center gap-2.5 text-xs text-[#34465A]/80">
                <span className="font-bold uppercase tracking-wider text-[#087FAE] bg-[#DCEFF8] px-3 py-1 rounded-full">
                  {post.category}
                </span>
                <span aria-hidden="true">·</span>
                <span>{readingTimeMinutes(post)} min read</span>
                <span aria-hidden="true">·</span>
                <span>{post.publishedLabel}</span>
              </div>
              <h1 className="mt-4 font-serif text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold leading-tight text-[#123B59]">
                {post.title}
              </h1>
              <p className="mx-auto mt-4 max-w-2xl text-base sm:text-lg leading-relaxed text-[#34465A]">
                {post.excerpt}
              </p>
            </Reveal>
          </div>
        </header>

        {/* Featured Image */}
        <div className="bg-white">
          <div className="mx-auto max-w-5xl px-4 sm:px-6 py-8 sm:py-12">
            <div className="overflow-hidden rounded-3xl border border-[#E2EAF0] shadow-md bg-slate-100">
              <img
                src={post.featuredImage}
                alt={post.featuredImageAlt || post.title}
                width={1200}
                height={700}
                className="aspect-[16/9] w-full object-cover"
                loading="eager"
              />
            </div>
            {post.featuredImageAlt && (
              <p className="mt-2 text-center text-xs text-[#34465A]/70">
                {post.featuredImageAlt}
              </p>
            )}
          </div>
        </div>

        {/* Article Body + Sidebar */}
        <div className="bg-white pb-20">
          <div className="mx-auto max-w-[1440px] px-4 sm:px-6 md:px-8 lg:px-12">
            <div
              className={`mx-auto grid max-w-5xl gap-12 ${
                showToc ? 'lg:grid-cols-[1fr_260px]' : ''
              }`}
            >
              <div className="min-w-0">
                <BlogContentRenderer blocks={post.content} />

                {/* WhatsApp Enquiry Card */}
                <div className="mt-14 rounded-3xl border border-[#087FAE]/25 bg-[#F2F8FC] p-6 sm:p-8">
                  <div className="flex items-start gap-4">
                    <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-2xl bg-[#087FAE] text-white shadow-xs">
                      <MessageSquareIcon className="h-6 w-6" />
                    </div>
                    <div>
                      <h3 className="font-serif text-xl sm:text-2xl font-bold text-[#123B59]">
                        Have Questions About This Dental Topic?
                      </h3>
                      <p className="mt-1.5 text-xs sm:text-sm leading-relaxed text-[#34465A]">
                        Connect directly with our clinic on WhatsApp. Dr. Naik and our clinical team are happy to answer your oral health queries.
                      </p>
                      <div className="mt-4 flex flex-wrap gap-3">
                        <WhatsAppLink
                          message={treatmentMessage(post.title)}
                          size="md"
                          className="shadow-sm"
                        >
                          Ask on WhatsApp
                        </WhatsAppLink>
                        <button
                          type="button"
                          onClick={() => openAppointment(post.title)}
                          className={buttonClass('secondary', 'md')}
                        >
                          <CalendarCheckIcon className="h-4 w-4" />
                          <span>Book an Appointment</span>
                        </button>
                      </div>
                    </div>
                  </div>
                </div>

                {/* Related Treatment Card */}
                {service && (
                  <div className="mt-10 rounded-2xl border border-[#E2EAF0] bg-white p-6 shadow-xs">
                    <span className="text-xs font-bold uppercase tracking-wider text-[#087FAE]">
                      Related Treatment
                    </span>
                    <h4 className="mt-1 font-serif text-xl font-bold text-[#123B59]">
                      {service.name}
                    </h4>
                    <p className="mt-1 text-sm text-[#34465A]/80 leading-relaxed">
                      {service.short}
                    </p>
                    <div className="mt-4 flex flex-wrap items-center gap-3">
                      <Link
                        to={`/services/${service.slug}`}
                        className={buttonClass('primary', 'sm')}
                      >
                        <span>Learn About {service.name}</span>
                        <ArrowRightIcon className="h-3.5 w-3.5" />
                      </Link>
                      <button
                        type="button"
                        onClick={() => openAppointment(service.name)}
                        className={buttonClass('secondary', 'sm')}
                      >
                        Schedule Consultation
                      </button>
                    </div>
                  </div>
                )}
              </div>

              {showToc && (
                <aside className="hidden lg:block">
                  <TableOfContents items={toc} />
                </aside>
              )}
            </div>
          </div>
        </div>

        {/* Related Articles */}
        {related.length > 0 && (
          <section className="bg-[#F2F8FC] py-16 md:py-24 border-t border-[#E2EAF0]">
            <div className="mx-auto max-w-[1440px] px-4 sm:px-6 md:px-8 lg:px-12">
              <span className="text-xs font-bold uppercase tracking-wider text-[#087FAE]">
                Further Reading
              </span>
              <h2 className="mt-1 font-serif text-2xl sm:text-3xl font-bold text-[#123B59]">
                Related Articles & Oral Health Guides
              </h2>
              <div className="mt-8 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
                {related.map((r) => (
                  <BlogCard key={r.slug} post={r} />
                ))}
              </div>
            </div>
          </section>
        )}
      </article>
    </>
  );
}
