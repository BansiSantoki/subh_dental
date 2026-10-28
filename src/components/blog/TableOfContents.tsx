import React, { useEffect, useState } from 'react';
import { ChevronDownIcon } from 'lucide-react';

interface TableOfContentsProps {
  items: {id: string;text: string;}[];
}

export function TableOfContents({ items }: TableOfContentsProps) {
  const [active, setActive] = useState(items[0]?.id ?? '');

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        const visible = entries.filter((e) => e.isIntersecting);
        if (visible[0]) setActive(visible[0].target.id);
      },
      { rootMargin: '-20% 0px -70% 0px' }
    );
    items.forEach((i) => {
      const el = document.getElementById(i.id);
      if (el) observer.observe(el);
    });
    return () => observer.disconnect();
  }, [items]);

  const list =
  <ol className="space-y-1 border-l border-charcoal/10">
      {items.map((item) =>
    <li key={item.id}>
          <a
        href={`#${item.id}`}
        className={`-ml-px block border-l py-1.5 pl-4 text-[14px] leading-snug transition-colors duration-200 ${
        active === item.id ? 'border-forest font-semibold text-forest' : 'border-transparent text-charcoal/60 hover:text-charcoal'}`
        }>
        
            {item.text}
          </a>
        </li>
    )}
    </ol>;


  return (
    <>
      <details className="group mb-10 rounded-[18px] border border-charcoal/10 bg-white p-5 lg:hidden">
        <summary className="flex cursor-pointer list-none items-center justify-between text-[14px] font-semibold text-charcoal">
          In this article
          <ChevronDownIcon className="h-4 w-4 transition-transform duration-200 group-open:rotate-180" aria-hidden="true" />
        </summary>
        <div className="mt-4">{list}</div>
      </details>
      <nav aria-label="Table of contents" className="sticky top-28 hidden lg:block">
        <p className="mb-4 text-[11.5px] font-semibold uppercase tracking-[0.2em] text-muted">In this article</p>
        {list}
      </nav>
    </>);

}