import React from 'react';
import type { BlogBlock, BlogImage } from '../../types/content';

/** Renders typed article blocks: paragraphs, headings, inline images, galleries, lists, quotes and callouts. */
export function BlogContentRenderer({ blocks }: {blocks: BlogBlock[];}) {
  return (
    <div className="text-charcoal">
      {blocks.map((block, i) =>
      <BlockView key={i} block={block} />
      )}
    </div>);

}

function BlockView({ block }: {block: BlogBlock;}) {
  switch (block.type) {
    case 'paragraph':
      return <p className="mb-7 text-pretty text-[17.5px] leading-[1.85] text-charcoal/80">{block.text}</p>;
    case 'heading':
      return (
        <h2 id={block.id} className="mb-5 mt-16 scroll-mt-28 font-serif text-[34px] font-medium leading-[1.1] text-charcoal sm:text-[40px]">
          {block.text}
        </h2>);

    case 'subheading':
      return <h3 className="mb-4 mt-10 font-serif text-[26px] font-medium text-charcoal">{block.text}</h3>;
    case 'image':
      return (
        <figure className={`my-12 ${block.layout === 'full' ? 'lg:-mx-20' : ''}`}>
          <ArticleImage image={block} className={block.layout === 'full' ? 'aspect-[16/9]' : 'aspect-[3/2]'} />
          {block.caption && <Caption text={block.caption} />}
        </figure>);

    case 'gallery':
      return (
        <div
          className={`my-12 grid gap-4 ${
          block.layout === 'side-by-side' ? 'sm:grid-cols-2 lg:-mx-10' : 'grid-cols-2 md:grid-cols-3 lg:-mx-20'}`
          }>
          
          {block.images.map((img, i) =>
          <figure key={`${img.src}-${i}`} className={block.layout === 'grid' && i === 0 ? 'col-span-2 md:col-span-1' : ''}>
              <ArticleImage image={img} className={block.layout === 'side-by-side' ? 'aspect-[4/5]' : 'aspect-square'} />
              {img.caption && <Caption text={img.caption} />}
            </figure>
          )}
        </div>);

    case 'list':{
        const Tag = block.ordered ? 'ol' : 'ul';
        return (
          <Tag className="mb-8 space-y-3">
          {block.items.map((item, i) =>
            <li key={item} className="flex gap-4 text-[17px] leading-[1.75] text-charcoal/80">
              {block.ordered ?
              <span className="w-6 shrink-0 font-serif text-[22px] leading-[1.4] text-forest">{i + 1}.</span> :

              <span className="mt-[13px] h-1.5 w-1.5 shrink-0 rounded-full bg-champagne" aria-hidden="true" />
              }
              <span>{item}</span>
            </li>
            )}
        </Tag>);

      }
    case 'quote':
      return (
        <figure className="my-12 border-l-2 border-champagne pl-7">
          <blockquote className="font-serif text-[28px] italic leading-[1.35] text-charcoal sm:text-[32px]">{block.text}</blockquote>
          {block.cite && <figcaption className="mt-4 text-[14px] text-muted">— {block.cite}</figcaption>}
        </figure>);

    case 'callout':
      return (
        <aside className="my-10 rounded-[20px] bg-sage/70 p-6 text-[15px] leading-relaxed text-charcoal/80">{block.text}</aside>);

    default:
      return null;
  }
}

function ArticleImage({ image, className }: {image: BlogImage;className: string;}) {
  return (
    <img
      src={image.src}
      alt={image.alt}
      loading="lazy"
      decoding="async"
      width={1200}
      height={800}
      className={`w-full rounded-[20px] object-cover ${className}`} />);


}

function Caption({ text }: {text: string;}) {
  return <figcaption className="mt-3 text-[13.5px] leading-relaxed text-muted">{text}</figcaption>;
}