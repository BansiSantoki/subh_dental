import React from 'react';
import { Link } from 'react-router-dom';
import { ArrowRightIcon } from 'lucide-react';
import { readingTimeMinutes } from '../../utils/content';
import type { BlogPost } from '../../types/content';

interface BlogCardProps {
  post: BlogPost;
  variant?: 'large' | 'default' | 'row';
}

export function BlogCard({ post, variant = 'default' }: BlogCardProps) {
  const href = `/blog/${post.slug}`;
  const minutes = readingTimeMinutes(post);
  const meta =
  <p className="flex flex-wrap items-center gap-x-3 gap-y-1 text-[12.5px] text-muted">
      <span className="font-semibold uppercase tracking-[0.16em] text-forest">{post.category}</span>
      <span aria-hidden="true">·</span>
      <span>{minutes} min read</span>
      <span aria-hidden="true">·</span>
      <span>{post.publishedLabel}</span>
    </p>;


  if (variant === 'row') {
    return (
      <article className="group grid grid-cols-[120px_1fr] items-center gap-5 sm:grid-cols-[160px_1fr]">
        <Link to={href} tabIndex={-1} aria-hidden="true" className="block overflow-hidden rounded-[16px]">
          <img
            src={post.featuredImage}
            alt=""
            loading="lazy"
            decoding="async"
            width={320}
            height={240}
            className="aspect-[4/3] w-full object-cover transition-transform duration-[600ms] ease-silk group-hover:scale-[1.05]" />
          
        </Link>
        <div>
          {meta}
          <h3 className="mt-2 font-serif text-[22px] font-medium leading-tight text-charcoal">
            <Link to={href} className="transition-colors duration-200 hover:text-forest">
              {post.title}
            </Link>
          </h3>
          <Link to={href} className="mt-2 inline-flex items-center gap-1.5 text-[13px] font-semibold text-forest">
            Read Article <ArrowRightIcon className="h-3.5 w-3.5 transition-transform duration-200 group-hover:translate-x-0.5" />
            <span className="sr-only">: {post.title}</span>
          </Link>
        </div>
      </article>);

  }

  const large = variant === 'large';
  return (
    <article className="group flex h-full flex-col">
      <Link to={href} tabIndex={-1} aria-hidden="true" className="block overflow-hidden rounded-[22px]">
        <img
          src={post.featuredImage}
          alt=""
          loading="lazy"
          decoding="async"
          width={900}
          height={675}
          className={`w-full object-cover transition-transform duration-[700ms] ease-silk group-hover:scale-[1.04] ${
          large ? 'aspect-[4/3] lg:aspect-[16/11]' : 'aspect-[4/3]'}`
          } />
        
      </Link>
      <div className="flex flex-1 flex-col pt-6">
        {meta}
        <h3
          className={`mt-3 text-balance font-serif font-medium leading-[1.1] text-charcoal ${
          large ? 'text-[32px] md:text-[40px]' : 'text-[25px]'}`
          }>
          
          <Link to={href} className="transition-colors duration-200 hover:text-forest">
            {post.title}
          </Link>
        </h3>
        <p className="mt-3 text-pretty text-[15px] leading-relaxed text-charcoal/65">{post.excerpt}</p>
        <Link
          to={href}
          className="mt-auto inline-flex items-center gap-2 pt-5 text-[13.5px] font-semibold text-forest">
          
          Read Article
          <ArrowRightIcon className="h-4 w-4 transition-transform duration-200 ease-silk group-hover:translate-x-1" />
          <span className="sr-only">: {post.title}</span>
        </Link>
      </div>
    </article>);

}