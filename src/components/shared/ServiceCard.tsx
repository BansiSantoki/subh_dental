import React from 'react';
import { Link } from 'react-router-dom';
import { ArrowUpRightIcon, MessageSquareIcon } from 'lucide-react';
import { WhatsAppLink } from './WhatsAppLink';
import { treatmentMessage } from '../../utils/whatsapp';
import type { Service } from '../../types/content';

interface ServiceCardProps {
  service: Service;
  variant?: 'feature' | 'compact' | 'grid';
}

export function ServiceCard({ service, variant = 'grid' }: ServiceCardProps) {
  const href = `/services/${service.slug}`;
  const prefilledWa = treatmentMessage(service.name);

  if (variant === 'compact') {
    return (
      <article className="group grid grid-cols-[100px_1fr] sm:grid-cols-[130px_1fr] gap-4 rounded-2xl border border-[#E2EAF0] bg-white p-3 pr-4 shadow-sm transition-all duration-200 hover:-translate-y-0.5 hover:border-[#087FAE]/40 hover:shadow-md">
        <Link
          to={href}
          tabIndex={-1}
          aria-hidden="true"
          className="relative block overflow-hidden rounded-xl bg-slate-100"
        >
          <img
            src={service.image}
            alt={service.imageAlt || service.name}
            loading="lazy"
            decoding="async"
            width={300}
            height={360}
            className="h-full min-h-[120px] w-full object-cover transition-transform duration-500 group-hover:scale-105"
          />
        </Link>
        <div className="flex flex-col justify-between py-1">
          <div>
            <h3 className="font-serif text-lg font-bold text-[#123B59] leading-snug">
              <Link to={href} className="transition-colors hover:text-[#087FAE]">
                {service.name}
              </Link>
            </h3>
            <p className="mt-1 line-clamp-2 text-xs leading-relaxed text-[#34465A]/80">
              {service.short}
            </p>
          </div>
          <div className="mt-3 flex flex-wrap items-center gap-x-3 gap-y-2">
            <WhatsAppLink
              message={prefilledWa}
              size="sm"
              variant="whatsappOutline"
              srContext={service.name}
              className="!h-8 !px-3 text-xs"
            >
              To Know More
            </WhatsAppLink>
            <Link
              to={href}
              className="inline-flex items-center gap-1 text-xs font-semibold text-[#087FAE] hover:text-[#076D96]"
              aria-label={`Learn more about ${service.name}`}
            >
              Learn More
              <ArrowUpRightIcon className="h-3.5 w-3.5" />
            </Link>
          </div>
        </div>
      </article>
    );
  }

  const isFeature = variant === 'feature';

  return (
    <article className="group flex h-full flex-col overflow-hidden rounded-2xl border border-[#E2EAF0] bg-white shadow-sm transition-all duration-200 hover:-translate-y-1 hover:border-[#087FAE]/40 hover:shadow-lg">
      {/* Photograph Container */}
      <Link
        to={href}
        tabIndex={-1}
        aria-hidden="true"
        className={`relative block overflow-hidden bg-slate-100 ${
          isFeature ? 'aspect-[4/3] lg:aspect-[16/11]' : 'aspect-[4/3]'
        }`}
      >
        <img
          src={service.image}
          alt={service.imageAlt || service.name}
          loading="lazy"
          decoding="async"
          width={800}
          height={600}
          className="h-full w-full object-cover transition-transform duration-700 ease-silk group-hover:scale-105"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-[#123B59]/20 via-transparent to-transparent opacity-0 transition-opacity duration-300 group-hover:opacity-100" />
        <span className="absolute top-3.5 right-3.5 flex h-9 w-9 items-center justify-center rounded-full bg-white/90 text-[#087FAE] shadow-sm backdrop-blur transition-transform duration-200 group-hover:scale-110">
          <ArrowUpRightIcon className="h-4 w-4" />
        </span>
      </Link>

      {/* Details Container */}
      <div className={`flex flex-1 flex-col ${isFeature ? 'p-6 sm:p-7' : 'p-5 sm:p-6'}`}>
        <h3
          className={`font-serif font-bold text-[#123B59] leading-snug ${
            isFeature ? 'text-2xl sm:text-3xl' : 'text-xl'
          }`}
        >
          <Link to={href} className="transition-colors hover:text-[#087FAE]">
            {service.name}
          </Link>
        </h3>
        <p className="mt-2.5 flex-1 text-sm leading-relaxed text-[#34465A]/85">
          {service.short}
        </p>

        {/* Buttons: Learn More & WhatsApp "To Know More" */}
        <div className="mt-5 flex flex-wrap items-center justify-between gap-2.5 border-t border-[#E2EAF0] pt-4">
          <Link
            to={href}
            className="inline-flex items-center gap-1.5 text-xs sm:text-sm font-semibold text-[#087FAE] hover:text-[#076D96]"
          >
            <span>Learn More</span>
            <ArrowUpRightIcon className="h-3.5 w-3.5" />
          </Link>

          <WhatsAppLink
            message={prefilledWa}
            size="sm"
            variant="whatsappOutline"
            srContext={service.name}
            className="!h-9 !px-3.5 text-xs font-semibold"
          >
            To Know More
          </WhatsAppLink>
        </div>
      </div>
    </article>
  );
}
