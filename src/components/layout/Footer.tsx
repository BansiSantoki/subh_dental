import React from 'react';
import { Link } from 'react-router-dom';
import { ArrowUpRightIcon, MailIcon, PhoneIcon } from 'lucide-react';
import { Logo } from '../shared/Logo';
import { WhatsAppLink } from '../shared/WhatsAppLink';
import { mainNav, siteConfig } from '../../data/siteConfig';
import { services } from '../../data/services';
import { locations } from '../../data/locations';
import { useAppointment } from '../../contexts/AppointmentContext';
import { buttonClass } from '../../utils/buttonStyles';

export function Footer() {
  const { openAppointment } = useAppointment();
  const year = new Date().getFullYear();

  return (
    <footer className="relative mt-8 overflow-hidden rounded-t-[36px] bg-forest text-ivory md:rounded-t-[64px]">
      <div className="grain pointer-events-none absolute inset-0 opacity-60" aria-hidden="true" />
      <div className="relative mx-auto max-w-[1440px] px-5 md:px-8 lg:px-12">
        {/* Closing statement */}
        <div className="grid gap-10 border-b border-ivory/10 py-16 md:py-24 lg:grid-cols-[1.4fr_1fr] lg:items-end">
          <h2 className="text-balance font-serif text-[46px] font-medium leading-[0.98] tracking-[-0.015em] sm:text-[64px] lg:text-[84px]">
            A more confident smile <em className="font-normal text-champagne">starts here.</em>
          </h2>
          <div className="flex flex-col gap-3 sm:flex-row lg:justify-end">
            <button type="button" onClick={() => openAppointment()} className={buttonClass('light', 'lg')}>
              Book an Appointment
            </button>
            <WhatsAppLink size="lg">Chat on WhatsApp</WhatsAppLink>
          </div>
        </div>

        <div className="grid gap-12 py-14 md:grid-cols-2 lg:grid-cols-[1.3fr_0.8fr_1.1fr_1fr]">
          <div>
            <Logo tone="light" />
            <p className="mt-6 max-w-xs text-[14.5px] leading-relaxed text-ivory/70">{siteConfig.message}</p>
            <ul className="mt-7 flex flex-wrap gap-2" aria-label="Social media">
              {siteConfig.social.map((s) =>
              <li key={s.label}>
                  <a
                  href={s.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-1 rounded-full border border-ivory/20 px-4 py-2 text-[12.5px] text-ivory/80 transition-colors duration-200 hover:border-ivory/50 hover:text-ivory">
                  
                    {s.label}
                    <ArrowUpRightIcon className="h-3 w-3" aria-hidden="true" />
                  </a>
                </li>
              )}
            </ul>
          </div>

          <FooterColumn title="Explore">
            {mainNav.map((item) =>
            <li key={item.href}>
                <Link to={item.href} className="footer-link text-ivory/75 transition-colors duration-200 hover:text-ivory">
                  {item.label}
                </Link>
              </li>
            )}
          </FooterColumn>

          <FooterColumn title="Treatments">
            {services.map((s) =>
            <li key={s.slug}>
                <Link to={`/services/${s.slug}`} className="text-ivory/75 transition-colors duration-200 hover:text-ivory">
                  {s.name}
                </Link>
              </li>
            )}
          </FooterColumn>

          <div>
            <h3 className="text-[11.5px] font-semibold uppercase tracking-[0.22em] text-champagne">Visit & Contact</h3>
            <address className="mt-5 space-y-4 text-[14.5px] not-italic leading-relaxed text-ivory/75">
              <p>{siteConfig.address}</p>
              <p>
                <a href={`tel:${siteConfig.phoneE164}`} className="inline-flex items-center gap-2 hover:text-ivory">
                  <PhoneIcon className="h-4 w-4 text-champagne" aria-hidden="true" />
                  {siteConfig.phoneDisplay}
                </a>
              </p>
              <p>
                <a href={`mailto:${siteConfig.email}`} className="inline-flex items-center gap-2 hover:text-ivory">
                  <MailIcon className="h-4 w-4 text-champagne" aria-hidden="true" />
                  {siteConfig.email}
                </a>
              </p>
            </address>
            <h3 className="mt-8 text-[11.5px] font-semibold uppercase tracking-[0.22em] text-champagne">Working hours</h3>
            <ul className="mt-4 space-y-1 text-[14.5px] text-ivory/75">
              {siteConfig.workingHours.map((h) =>
              <li key={h}>{h}</li>
              )}
            </ul>
          </div>
        </div>

        <div className="border-t border-ivory/10 py-8">
          <p className="text-[11.5px] font-semibold uppercase tracking-[0.22em] text-champagne">Dental care in Nashik</p>
          <ul className="mt-4 flex flex-wrap gap-x-6 gap-y-2 text-[13.5px] text-ivory/65">
            {locations.map((l) =>
            <li key={l.slug}>
                <Link to={`/${l.slug}`} className="transition-colors duration-200 hover:text-ivory">
                  {l.kind === 'service-area' ? `Patients near ${l.areaName}` : l.h1.replace(', Thoughtfully Planned', '')}
                </Link>
              </li>
            )}
          </ul>
        </div>

        <div className="flex flex-col gap-4 border-t border-ivory/10 py-8 pb-[calc(2rem+env(safe-area-inset-bottom))] text-[13px] text-ivory/60 md:flex-row md:items-center md:justify-between">
          <p>
            © {year} {siteConfig.name}. All rights reserved.
            <span className="ml-2 font-serif text-[15px] italic text-ivory/75">{siteConfig.footerTagline}</span>
          </p>
          <ul className="flex flex-wrap gap-x-6 gap-y-2">
            <li>
              <Link to="/privacy-policy" className="hover:text-ivory">
                Privacy Policy
              </Link>
            </li>
            <li>
              <Link to="/terms-of-use" className="hover:text-ivory">
                Terms of Use
              </Link>
            </li>
            <li>
              <Link to="/sitemap" className="hover:text-ivory">
                Sitemap
              </Link>
            </li>
          </ul>
        </div>
      </div>
    </footer>);

}

function FooterColumn({ title, children }: {title: string;children: React.ReactNode;}) {
  return (
    <div>
      <h3 className="text-[11.5px] font-semibold uppercase tracking-[0.22em] text-champagne">{title}</h3>
      <ul className="mt-5 space-y-2.5 text-[14.5px]">{children}</ul>
    </div>);

}