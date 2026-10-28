import React from 'react';
import { Link } from 'react-router-dom';
import { ChevronRightIcon } from 'lucide-react';

export interface Crumb {
  label: string;
  href?: string;
}

export function Breadcrumbs({ items, tone = 'dark' }: {items: Crumb[];tone?: 'dark' | 'light';}) {
  const base = tone === 'dark' ? 'text-charcoal/60' : 'text-ivory/70';
  const hover = tone === 'dark' ? 'hover:text-forest' : 'hover:text-ivory';
  const current = tone === 'dark' ? 'text-charcoal' : 'text-ivory';
  return (
    <nav aria-label="Breadcrumb">
      <ol className={`flex flex-wrap items-center gap-1.5 text-[13px] ${base}`}>
        {items.map((item, i) => {
          const last = i === items.length - 1;
          return (
            <li key={`${item.label}-${i}`} className="flex items-center gap-1.5">
              {item.href && !last ?
              <Link to={item.href} className={`transition-colors duration-200 ${hover}`}>
                  {item.label}
                </Link> :

              <span aria-current={last ? 'page' : undefined} className={last ? `font-medium ${current}` : ''}>
                  {item.label}
                </span>
              }
              {!last && <ChevronRightIcon className="h-3.5 w-3.5 opacity-50" aria-hidden="true" />}
            </li>);

        })}
      </ol>
    </nav>);

}