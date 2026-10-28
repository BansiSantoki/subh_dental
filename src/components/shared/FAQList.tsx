import React, { useId, useState } from 'react';
import { PlusIcon } from 'lucide-react';
import type { FAQ } from '../../types/content';

export function FAQList({ faqs }: {faqs: FAQ[];}) {
  const [open, setOpen] = useState<number | null>(0);
  const baseId = useId();

  return (
    <div className="border-t border-charcoal/10">
      {faqs.map((faq, i) => {
        const isOpen = open === i;
        const panelId = `${baseId}-panel-${i}`;
        const buttonId = `${baseId}-button-${i}`;
        return (
          <div key={faq.question} className="border-b border-charcoal/10">
            <h3>
              <button
                id={buttonId}
                type="button"
                aria-expanded={isOpen}
                aria-controls={panelId}
                onClick={() => setOpen(isOpen ? null : i)}
                className="flex w-full items-center justify-between gap-6 py-6 text-left">
                
                <span className="font-serif text-[22px] font-medium leading-snug text-charcoal md:text-[24px]">
                  {faq.question}
                </span>
                <span
                  className={`flex h-9 w-9 shrink-0 items-center justify-center rounded-full border border-charcoal/15 text-forest transition-[transform,background-color] duration-200 ease-silk ${
                  isOpen ? 'rotate-45 bg-sage' : ''}`
                  }
                  aria-hidden="true">
                  
                  <PlusIcon className="h-4 w-4" />
                </span>
              </button>
            </h3>
            <div
              id={panelId}
              role="region"
              aria-labelledby={buttonId}
              className={`grid transition-[grid-template-rows,opacity] duration-300 ease-silk ${
              isOpen ? 'grid-rows-[1fr] opacity-100' : 'grid-rows-[0fr] opacity-0'}`
              }>
              
              <div className="overflow-hidden">
                <p className="max-w-2xl pb-7 text-[15.5px] leading-[1.75] text-charcoal/75">{faq.answer}</p>
              </div>
            </div>
          </div>);

      })}
    </div>);

}