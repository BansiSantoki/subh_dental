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

  const meta = (
    <div className="flex flex-wrap items-center gap-x-2.5 gap-y-1 text-xs text-[#34465A]/70">
      <span className="font-semibold text-xs text-[#087FAE] bg-[#DCEFF8] px-2.5 py-0.5 rounded-full">
        {post.category}
      </span>
      <span aria-hidden="true">·</span>
      <span>{minutes} min read</span>
      {post.publishedLabel && (
        <>
          <span aria-hidden="true">·</span>
          <span>{post.publishedLabel}</span>
        </>
      )}
    </div>
  );

  if (variant === 'row') {
    return (
      <article className="group grid grid-cols-[100px_1fr] sm:grid-cols-[140px_1fr] items-center gap-4">
        <Link
          to={href}
          tabIndex={-1}
          aria-hidden="true"
          className="block overflow-hidden rounded-xl border border-[#E2EAF0] bg-slate-100"
        >
          <img
            src={post.featuredImage}
            alt={post.featuredImageAlt || post.title}
            loading="lazy"
            decoding="async"
            width={320}
            height={240}
            className="aspect-[4/3] w-full object-cover transition-transform duration-500 ease-silk group-hover:scale-105"
          />
        </Link>
        <div>
          {meta}
          <h3 className="mt-2 font-serif text-base sm:text-lg font-bold leading-snug text-[#123B59]">
            <Link to={href} className="transition-colors duration-200 hover:text-[#087FAE]">
              {post.title}
            </Link>
          </h3>
          <Link
            to={href}
            className="mt-2 inline-flex items-center gap-1 text-xs font-semibold text-[#087FAE] hover:text-[#076D96]"
          >
            <span>Read Article</span>
            <ArrowRightIcon className="h-3.5 w-3.5 transition-transform duration-200 group-hover:translate-x-0.5" />
          </Link>
        </div>
      </article>
    );
  }

  const isLarge = variant === 'large';

  return (
    <article className="group flex h-full flex-col overflow-hidden rounded-2xl border border-[#E2EAF0] bg-white p-5 sm:p-6 shadow-sm transition-all duration-200 hover:-translate-y-1 hover:border-[#087FAE]/30 hover:shadow-md">
      <Link
        to={href}
        tabIndex={-1}
        aria-hidden="true"
        className="block overflow-hidden rounded-xl border border-[#E2EAF0] bg-slate-100"
      >
        <img
          src={post.featuredImage}
          alt={post.featuredImageAlt || post.title}
          loading="lazy"
          decoding="async"
          width={900}
          height={675}
          className={`w-full object-cover transition-transform duration-700 ease-silk group-hover:scale-105 ${
            isLarge ? 'aspect-[4/3] lg:aspect-[16/10]' : 'aspect-[4/3]'
          }`}
        />
      </Link>

      <div className="flex flex-1 flex-col pt-5">
        {meta}
        <h3
          className={`mt-3 font-serif font-bold text-[#123B59] leading-tight ${
            isLarge ? 'text-2xl sm:text-3xl lg:text-[32px]' : 'text-xl'
          }`}
        >
          <Link to={href} className="transition-colors duration-200 hover:text-[#087FAE]">
            {post.title}
          </Link>
        </h3>
        <p className="mt-3 text-sm sm:text-base leading-relaxed text-[#34465A]/85 flex-1">
          {post.excerpt}
        </p>
        <div className="mt-5 pt-4 border-t border-[#E2EAF0]">
          <Link
            to={href}
            className="inline-flex items-center gap-1.5 text-xs sm:text-sm font-semibold text-[#087FAE] hover:text-[#076D96]"
          >
            <span>Read Full Article</span>
            <ArrowRightIcon className="h-4 w-4 transition-transform duration-200 ease-silk group-hover:translate-x-1" />
          </Link>
        </div>
      </div>
    </article>
  );
}
