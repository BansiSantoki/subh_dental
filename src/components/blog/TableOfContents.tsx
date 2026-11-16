import React, { useEffect, useState } from 'react';
import { ChevronDownIcon } from 'lucide-react';

interface TableOfContentsProps {
  items: { id: string; text: string }[];
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

  const list = (
    <ol className="space-y-1 border-l border-[#E2EAF0]">
      {items.map((item) => (
        <li key={item.id}>
          <a
            href={`#${item.id}`}
            className={`-ml-px block border-l-2 py-1.5 pl-3.5 text-xs sm:text-sm leading-snug transition-colors duration-200 ${
              active === item.id
                ? 'border-[#087FAE] font-bold text-[#087FAE]'
                : 'border-transparent text-[#34465A]/70 hover:text-[#123B59]'
            }`}
          >
            {item.text}
          </a>
        </li>
      ))}
    </ol>
  );

  return (
    <>
      <details className="group mb-8 rounded-2xl border border-[#E2EAF0] bg-white p-4 lg:hidden">
        <summary className="flex cursor-pointer list-none items-center justify-between text-xs sm:text-sm font-bold text-[#123B59]">
          <span>Table of Contents</span>
          <ChevronDownIcon
            className="h-4 w-4 transition-transform duration-200 group-open:rotate-180 text-[#087FAE]"
            aria-hidden="true"
          />
        </summary>
        <div className="mt-3.5 pt-3 border-t border-[#E2EAF0]">{list}</div>
      </details>
      <nav aria-label="Table of contents" className="sticky top-28 hidden lg:block">
        <p className="mb-3 text-xs font-semibold text-[#087FAE] flex items-center gap-1.5">
          <span className="h-1.5 w-1.5 rounded-full bg-[#087FAE]" />
          <span>In this article</span>
        </p>
        {list}
      </nav>
    </>
  );
}
