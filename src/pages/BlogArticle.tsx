import React from 'react';
import { Link, useParams } from 'react-router-dom';
import { ArrowRightIcon } from 'lucide-react';
import { SEOHead } from '../components/shared/SEOHead';
import { Breadcrumbs } from '../components/shared/Breadcrumbs';
import { BlogCard } from '../components/shared/BlogCard';
import { Reveal } from '../components/shared/Reveal';
import { WhatsAppLink } from '../components/shared/WhatsAppLink';
import { BlogContentRenderer } from '../components/blog/BlogContentRenderer';
import { TableOfContents } from '../components/blog/TableOfContents';
import { NotFound } from './NotFound';
import { getPostBySlug, getRelatedPosts, getServiceBySlug, getTableOfContents, readingTimeMinutes } from '../utils/content';
import { treatmentMessage } from '../utils/whatsapp';
import { blogPostingSchema, breadcrumbSchema } from '../utils/structuredData';

export function BlogArticle() {
  const { slug } = useParams();
  const post = getPostBySlug(slug);
  if (!post) return <NotFound />;

  const path = `/blog/${post.slug}`;
  const toc = getTableOfContents(post);
  const related = getRelatedPosts(post);
  const service = getServiceBySlug(post.relatedService);
  const showToc = toc.length >= 3;

  return (
    <>
      <SEOHead
        title={`${post.title} | Aurelia Dental Studio Blog`}
        description={post.metaDescription}
        path={path}
        image={post.featuredImage}
        type="article"
        jsonLd={[
        blogPostingSchema(post),
        breadcrumbSchema([
        { name: 'Home', path: '/' },
        { name: 'Blog', path: '/blog' },
        { name: post.title, path }]
        )]
        } />
      
      <article>
        <header className="bg-ivory pt-[100px] md:pt-[124px]">
          <div className="mx-auto max-w-[1440px] px-5 md:px-8 lg:px-12">
            <Breadcrumbs items={[{ label: 'Home', href: '/' }, { label: 'Blog', href: '/blog' }, { label: post.title }]} />
            <Reveal className="mx-auto max-w-4xl pb-14 pt-14 text-center md:pt-20">
              <p className="flex flex-wrap items-center justify-center gap-x-3 gap-y-1 text-[13px] text-muted">
                <span className="font-semibold uppercase tracking-[0.18em] text-forest">{post.category}</span>
                <span aria-hidden="true">·</span>
                <span>{readingTimeMinutes(post)} min read</span>
                <span aria-hidden="true">·</span>
                <span>{post.publishedLabel}</span>
              </p>
              <h1 className="mt-6 text-balance font-serif text-[44px] font-medium leading-[1] tracking-[-0.02em] text-charcoal sm:text-[60px] lg:text-[72px]">
                {post.title}
              </h1>
              <p className="mx-auto mt-7 max-w-2xl text-pretty text-[18px] leading-[1.7] text-charcoal/70">{post.excerpt}</p>
              <p className="mt-6 text-[13.5px] text-charcoal/60">Author: {post.author}</p>
            </Reveal>
          </div>
          <div className="mx-auto max-w-[1440px] px-5 md:px-8 lg:px-12">
            <img
              src={post.featuredImage}
              alt={post.featuredImageAlt}
              width={1600}
              height={800}
              decoding="async"
              className="aspect-[4/3] w-full rounded-[28px] object-cover sm:aspect-[16/8] md:rounded-[40px]" />
            
          </div>
        </header>

        <div className="bg-ivory py-16 md:py-24">
          <div className="mx-auto grid max-w-[1440px] gap-10 px-5 md:px-8 lg:grid-cols-12 lg:px-12">
            {showToc &&
            <div className="lg:col-span-3">
                <TableOfContents items={toc} />
              </div>
            }
            <div className={`${showToc ? 'lg:col-span-7 lg:col-start-5' : 'lg:col-span-8 lg:col-start-3'} max-w-[720px]`}>
              <aside className="mb-10 rounded-[16px] border border-dashed border-charcoal/20 px-5 py-4 text-[13.5px] leading-relaxed text-charcoal/65">
                Sample educational article. Content should be reviewed by a qualified dentist before publication and is
                not personal medical advice.
              </aside>
              <BlogContentRenderer blocks={post.content} />

              <div className="mt-16 rounded-[28px] bg-forest p-8 text-ivory sm:p-10">
                <p className="font-serif text-[30px] leading-[1.15] sm:text-[36px]">
                  {service ? `Have a question about ${service.name.toLowerCase()}?` : 'Have a question for our team?'}
                </p>
                <p className="mt-3 text-[15px] leading-relaxed text-ivory/70">
                  Our team is happy to help you understand your options. A message is the easiest way to start.
                </p>
                <div className="mt-7 flex flex-col gap-3 sm:flex-row sm:items-center">
                  <WhatsAppLink message={service ? treatmentMessage(service.name) : undefined} size="lg">
                    Ask on WhatsApp
                  </WhatsAppLink>
                  {service &&
                  <Link to={`/services/${service.slug}`} className="inline-flex items-center gap-2 px-2 text-[14px] font-semibold text-ivory/90 hover:text-ivory">
                      About {service.name} <ArrowRightIcon className="h-4 w-4" aria-hidden="true" />
                    </Link>
                  }
                </div>
              </div>
            </div>
          </div>
        </div>
      </article>

      <section aria-labelledby="related-articles" className="bg-white py-20 md:py-28">
        <div className="mx-auto max-w-[1440px] px-5 md:px-8 lg:px-12">
          <h2 id="related-articles" className="font-serif text-[38px] font-medium text-charcoal sm:text-[46px]">
            Keep reading
          </h2>
          <div className="mt-12 grid gap-x-8 gap-y-14 sm:grid-cols-2 lg:grid-cols-3">
            {related.map((p) =>
            <BlogCard key={p.slug} post={p} />
            )}
          </div>
        </div>
      </section>
    </>);

}