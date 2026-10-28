import React from 'react';
import { Link } from 'react-router-dom';
import { ArrowUpRightIcon } from 'lucide-react';
import { WhatsAppLink } from './WhatsAppLink';
import { treatmentMessage } from '../../utils/whatsapp';
import type { Service } from '../../types/content';

interface ServiceCardProps {
  service: Service;
  variant?: 'feature' | 'compact' | 'grid';
}

export function ServiceCard({ service, variant = 'grid' }: ServiceCardProps) {
  const href = `/services/${service.slug}`;

  if (variant === 'compact') {
    return (
      <article className="group grid grid-cols-[112px_1fr] gap-5 rounded-[20px] border border-charcoal/[0.07] bg-white p-3 pr-5 transition-[box-shadow,transform] duration-200 ease-silk hover:-translate-y-0.5 hover:shadow-[0_24px_50px_-30px_rgba(23,63,58,0.45)] sm:grid-cols-[148px_1fr]">
        <Link to={href} tabIndex={-1} aria-hidden="true" className="relative block overflow-hidden rounded-[14px]">
          <img
            src={service.image}
            alt=""
            loading="lazy"
            decoding="async"
            width={300}
            height={360}
            className="h-full min-h-[148px] w-full object-cover transition-transform duration-[600ms] ease-silk group-hover:scale-[1.05]" />
          
        </Link>
        <div className="flex flex-col py-2">
          <h3 className="font-serif text-[23px] font-medium leading-tight text-charcoal">
            <Link to={href} className="transition-colors duration-200 hover:text-forest">
              {service.name}
            </Link>
          </h3>
          <p className="mt-2 line-clamp-2 text-[14px] leading-relaxed text-charcoal/65">{service.short}</p>
          <div className="mt-auto flex flex-wrap items-center gap-x-4 gap-y-2 pt-4">
            <WhatsAppLink message={treatmentMessage(service.name)} size="sm" variant="whatsappOutline" srContext={service.name}>
              To Know More
            </WhatsAppLink>
            <Link
              to={href}
              className="inline-flex items-center gap-1 text-[13px] font-semibold text-forest"
              aria-label={`View details about ${service.name}`}>
              
              Details
              <ArrowUpRightIcon className="h-4 w-4 transition-transform duration-200 ease-silk group-hover:-translate-y-0.5 group-hover:translate-x-0.5" />
            </Link>
          </div>
        </div>
      </article>);

  }

  const feature = variant === 'feature';
  return (
    <article
      className={`group flex h-full flex-col overflow-hidden rounded-[24px] border border-charcoal/[0.07] bg-white transition-[box-shadow,transform] duration-200 ease-silk hover:-translate-y-1 hover:shadow-[0_30px_60px_-34px_rgba(23,63,58,0.5)]`}>
      
      <Link
        to={href}
        tabIndex={-1}
        aria-hidden="true"
        className={`relative block overflow-hidden ${feature ? 'aspect-[4/3] lg:aspect-auto lg:flex-1' : 'aspect-[4/3]'}`}>
        
        <img
          src={service.image}
          alt=""
          loading="lazy"
          decoding="async"
          width={800}
          height={600}
          className={`h-full w-full object-cover transition-transform duration-[700ms] ease-silk group-hover:scale-[1.04] ${
          feature ? 'lg:absolute lg:inset-0' : ''}`
          } />
        
        <span className="absolute right-4 top-4 flex h-10 w-10 items-center justify-center rounded-full bg-ivory/90 text-forest backdrop-blur transition-transform duration-200 ease-silk group-hover:rotate-45">
          <ArrowUpRightIcon className="h-4 w-4" />
        </span>
      </Link>
      <div className={`flex flex-1 flex-col ${feature ? 'p-7 lg:flex-none lg:p-9' : 'p-6 md:p-7'}`}>
        <h3
          className={`font-serif font-medium leading-[1.08] text-charcoal ${
          feature ? 'text-[32px] md:text-[38px]' : 'text-[26px]'}`
          }>
          
          <Link to={href} className="transition-colors duration-200 hover:text-forest">
            {service.name}
          </Link>
        </h3>
        <p className={`mt-3 text-pretty leading-relaxed text-charcoal/65 ${feature ? 'text-[15.5px] max-w-md' : 'text-[14.5px]'}`}>
          {service.short}
        </p>
        <div className="mt-auto flex flex-wrap items-center gap-x-5 gap-y-3 pt-6">
          <WhatsAppLink
            message={treatmentMessage(service.name)}
            size="sm"
            variant={feature ? 'whatsapp' : 'whatsappOutline'}
            srContext={service.name}>
            
            To Know More
          </WhatsAppLink>
          <Link
            to={href}
            className="inline-flex items-center gap-1 text-[13px] font-semibold text-forest underline-offset-4 hover:underline"
            aria-label={`Read more about ${service.name}`}>
            
            Treatment details
          </Link>
        </div>
      </div>
    </article>);

}