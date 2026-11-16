import React from 'react';
import type { BlogBlock, BlogImage } from '../../types/content';

/** Renders rich article blocks: paragraphs, headings, inline images, galleries, lists, quotes and callouts. */
export function BlogContentRenderer({ blocks }: { blocks: BlogBlock[] }) {
  return (
    <div className="text-[#34465A]">
      {blocks.map((block, i) => (
        <BlockView key={i} block={block} />
      ))}
    </div>
  );
}

function BlockView({ block }: { block: BlogBlock }) {
  switch (block.type) {
    case 'paragraph':
      return <p className="mb-6 text-base sm:text-lg leading-relaxed text-[#34465A]">{block.text}</p>;

    case 'heading':
      return (
        <h2
          id={block.id}
          className="mb-4 mt-12 scroll-mt-28 font-serif text-2xl sm:text-3xl font-bold leading-tight text-[#123B59]"
        >
          {block.text}
        </h2>
      );

    case 'subheading':
      return <h3 className="mb-3 mt-8 font-serif text-xl sm:text-2xl font-bold text-[#123B59]">{block.text}</h3>;

    case 'image':
      return (
        <figure className={`my-10 ${block.layout === 'full' ? 'lg:-mx-16' : ''}`}>
          <ArticleImage
            image={block}
            className={`border border-[#E2EAF0] shadow-sm ${block.layout === 'full' ? 'aspect-[16/9]' : 'aspect-[3/2]'}`}
          />
          {block.caption && <Caption text={block.caption} />}
        </figure>
      );

    case 'gallery':
      return (
        <div
          className={`my-10 grid gap-4 ${
            block.layout === 'side-by-side'
              ? 'sm:grid-cols-2 lg:-mx-10'
              : 'grid-cols-2 md:grid-cols-3 lg:-mx-16'
          }`}
        >
          {block.images.map((img, i) => (
            <figure
              key={`${img.src}-${i}`}
              className={block.layout === 'grid' && i === 0 ? 'col-span-2 md:col-span-1' : ''}
            >
              <ArticleImage
                image={img}
                className={`border border-[#E2EAF0] shadow-xs ${
                  block.layout === 'side-by-side' ? 'aspect-[4/3] sm:aspect-[4/5]' : 'aspect-square'
                }`}
              />
              {img.caption && <Caption text={img.caption} />}
            </figure>
          ))}
        </div>
      );

    case 'list': {
      const Tag = block.ordered ? 'ol' : 'ul';
      return (
        <Tag className="mb-8 space-y-3 pl-1">
          {block.items.map((item, i) => (
            <li key={item} className="flex gap-3 text-sm sm:text-base leading-relaxed text-[#34465A]">
              {block.ordered ? (
                <span className="w-6 shrink-0 font-serif font-bold text-[#087FAE]">{i + 1}.</span>
              ) : (
                <span className="mt-2.5 h-1.5 w-1.5 shrink-0 rounded-full bg-[#087FAE]" aria-hidden="true" />
              )}
              <span>{item}</span>
            </li>
          ))}
        </Tag>
      );
    }

    case 'quote':
      return (
        <figure className="my-10 rounded-2xl border-l-4 border-[#087FAE] bg-[#F2F8FC] p-6 sm:p-8">
          <blockquote className="font-serif text-xl sm:text-2xl font-medium italic leading-relaxed text-[#123B59]">
            “{block.text}”
          </blockquote>
          {block.cite && (
            <figcaption className="mt-3 text-xs sm:text-sm font-semibold text-[#087FAE]">
              — {block.cite}
            </figcaption>
          )}
        </figure>
      );

    case 'callout':
      return (
        <aside className="my-8 rounded-2xl border border-[#087FAE]/25 bg-[#F2F8FC] p-6 text-sm sm:text-base leading-relaxed text-[#123B59]">
          {block.text}
        </aside>
      );

    default:
      return null;
  }
}

function ArticleImage({ image, className }: { image: BlogImage; className: string }) {
  return (
    <img
      src={image.src}
      alt={image.alt}
      loading="lazy"
      decoding="async"
      width={1200}
      height={800}
      className={`w-full rounded-2xl object-cover ${className}`}
    />
  );
}

function Caption({ text }: { text: string }) {
  return <figcaption className="mt-2 text-center text-xs text-[#34465A]/75">{text}</figcaption>;
}
