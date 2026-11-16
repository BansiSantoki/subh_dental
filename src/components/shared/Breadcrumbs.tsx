import React from 'react';
import { Link } from 'react-router-dom';
import { ChevronRightIcon } from 'lucide-react';

export interface Crumb {
  label: string;
  href?: string;
}

export function Breadcrumbs({ items, tone = 'dark' }: { items: Crumb[]; tone?: 'dark' | 'light' }) {
  const base = tone === 'dark' ? 'text-[#34465A]/70' : 'text-white/70';
  const hover = tone === 'dark' ? 'hover:text-[#087FAE]' : 'hover:text-white';
  const current = tone === 'dark' ? 'font-semibold text-[#123B59]' : 'font-semibold text-white';

  return (
    <nav aria-label="Breadcrumb">
      <ol className={`flex flex-wrap items-center gap-1.5 text-xs sm:text-sm ${base}`}>
        {items.map((item, i) => {
          const last = i === items.length - 1;
          return (
            <li key={`${item.label}-${i}`} className="flex items-center gap-1.5">
              {item.href && !last ? (
                <Link to={item.href} className={`transition-colors duration-200 ${hover}`}>
                  {item.label}
                </Link>
              ) : (
                <span aria-current={last ? 'page' : undefined} className={current}>
                  {item.label}
                </span>
              )}
              {!last && <ChevronRightIcon className="h-3.5 w-3.5 text-[#087FAE]/60" aria-hidden="true" />}
            </li>
          );
        })}
      </ol>
    </nav>
  );
}
