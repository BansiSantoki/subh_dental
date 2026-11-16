import React from 'react';
import { Link } from 'react-router-dom';
import {
  ArrowUpRightIcon,
  MailIcon,
  MapPinIcon,
  PhoneIcon,
  CalendarCheckIcon,
  ClockIcon
} from 'lucide-react';
import { Logo } from '../shared/Logo';
import { WhatsAppLink } from '../shared/WhatsAppLink';
import { footerNav, siteConfig } from '../../data/siteConfig';
import { services } from '../../data/services';
import { useAppointment } from '../../contexts/AppointmentContext';
import { buttonClass } from '../../utils/buttonStyles';

export function Footer() {
  const { openAppointment } = useAppointment();
  const year = new Date().getFullYear();

  return (
    <footer className="relative overflow-hidden bg-[#123B59] text-white">
      {/* Top Banner CTA */}
      <div className="border-b border-white/10 bg-[#0E2E47]/70 py-12 md:py-16">
        <div className="mx-auto max-w-[1440px] px-4 sm:px-6 md:px-8 lg:px-12">
          <div className="flex flex-col gap-8 md:flex-row md:items-center md:justify-between">
            <div className="max-w-2xl">
              <span className="text-xs font-semibold text-[#7EC4E5] flex items-center gap-2">
                <span className="h-1.5 w-1.5 rounded-full bg-[#7EC4E5]" />
                <span>Start Your Smile Journey Today</span>
              </span>
              <h2 className="mt-2.5 font-serif text-2xl sm:text-3xl md:text-4xl font-bold leading-tight text-white">
                Exceptional Dental Care,{' '}
                <span className="text-[#7EC4E5] italic">Tailored for You.</span>
              </h2>
              <p className="mt-3 text-sm sm:text-base text-[#DCEFF8]/80 leading-relaxed">
                Connect with our team to schedule an appointment or ask any question on WhatsApp.
              </p>
            </div>

            <div className="flex flex-wrap items-center gap-3 shrink-0">
              <button
                type="button"
                onClick={() => openAppointment()}
                className={buttonClass('primary', 'lg', 'shadow-md')}
              >
                <CalendarCheckIcon className="h-5 w-5" />
                <span>Book Appointment</span>
              </button>
              <WhatsAppLink size="lg">
                Chat on WhatsApp
              </WhatsAppLink>
            </div>
          </div>
        </div>
      </div>

      {/* Main Footer Content */}
      <div className="mx-auto max-w-[1440px] px-4 sm:px-6 md:px-8 lg:px-12 py-14 lg:py-16">
        <div className="grid gap-10 md:grid-cols-2 lg:grid-cols-12 lg:gap-10">
          {/* Col 1: Logo & Clinic Info (4 cols) */}
          <div className="lg:col-span-4">
            <Logo tone="light" />
            <p className="mt-5 text-sm sm:text-base font-semibold text-white">
              {siteConfig.name}
            </p>
            <p className="mt-2 text-xs sm:text-sm text-[#DCEFF8]/80 leading-relaxed max-w-sm">
              {siteConfig.tagline}
            </p>

            <div className="mt-6 space-y-2 text-xs text-[#DCEFF8]/70">
              <p className="flex items-center gap-2">
                <ClockIcon className="h-4 w-4 text-[#7EC4E5] shrink-0" />
                <span>Mon – Sat: 9:30 AM – 8:30 PM | Sunday By Appointment</span>
              </p>
            </div>

            {/* Social / Direct Links */}
            <div className="mt-6 flex flex-wrap gap-2.5">
              <a
                href={siteConfig.instagramUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-1.5 rounded-full border border-white/20 bg-white/5 px-4 py-1.5 text-xs font-semibold text-white hover:bg-white/15 hover:border-white/40 transition-colors"
              >
                <span>Instagram</span>
                <ArrowUpRightIcon className="h-3 w-3" />
              </a>
              <a
                href={siteConfig.googleMapsUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-1.5 rounded-full border border-white/20 bg-white/5 px-4 py-1.5 text-xs font-semibold text-white hover:bg-white/15 hover:border-white/40 transition-colors"
              >
                <span>Google Maps</span>
                <ArrowUpRightIcon className="h-3 w-3" />
              </a>
            </div>
          </div>

          {/* Col 2: Navigation Links (2 cols) */}
          <div className="lg:col-span-2">
            <h3 className="text-xs font-semibold text-[#7EC4E5] flex items-center gap-1.5">
              <span className="h-1 w-1 rounded-full bg-[#7EC4E5]" />
              <span>Quick Navigation</span>
            </h3>
            <ul className="mt-4 space-y-2.5 text-xs sm:text-sm text-[#DCEFF8]/80">
              {footerNav.map((item) => (
                <li key={item.label}>
                  <Link
                    to={item.href}
                    className="transition-colors hover:text-white hover:underline underline-offset-4"
                  >
                    {item.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Col 3: Services (3 cols) */}
          <div className="lg:col-span-3">
            <h3 className="text-xs font-semibold text-[#7EC4E5] flex items-center gap-1.5">
              <span className="h-1 w-1 rounded-full bg-[#7EC4E5]" />
              <span>Dental Treatments</span>
            </h3>
            <ul className="mt-4 space-y-2 text-xs sm:text-sm text-[#DCEFF8]/80">
              {services.slice(0, 8).map((s) => (
                <li key={s.slug}>
                  <Link
                    to={`/services/${s.slug}`}
                    className="transition-colors hover:text-white hover:underline underline-offset-4 truncate block"
                  >
                    {s.name}
                  </Link>
                </li>
              ))}
              <li>
                <Link
                  to="/services"
                  className="font-semibold text-[#7EC4E5] hover:text-white text-xs inline-flex items-center gap-1 mt-1"
                >
                  <span>View All 12 Treatments &rarr;</span>
                </Link>
              </li>
            </ul>
          </div>

          {/* Col 4: Contact Details (3 cols) */}
          <div className="lg:col-span-3">
            <h3 className="text-xs font-semibold text-[#7EC4E5] flex items-center gap-1.5">
              <span className="h-1 w-1 rounded-full bg-[#7EC4E5]" />
              <span>Clinic Contact</span>
            </h3>
            <address className="mt-4 space-y-3.5 not-italic text-xs sm:text-sm text-[#DCEFF8]/85">
              <p className="flex items-start gap-2.5">
                <MapPinIcon className="h-4 w-4 text-[#7EC4E5] shrink-0 mt-0.5" />
                <span>{siteConfig.address}</span>
              </p>

              <div className="space-y-1.5 pt-1">
                <p>
                  <a
                    href={`tel:${siteConfig.phoneE164}`}
                    className="flex items-center gap-2 hover:text-white font-semibold"
                  >
                    <PhoneIcon className="h-4 w-4 text-[#7EC4E5] shrink-0" />
                    <span>{siteConfig.phoneDisplay}</span>
                  </a>
                </p>
                <p>
                  <a
                    href={`tel:${siteConfig.secondaryPhoneE164}`}
                    className="flex items-center gap-2 hover:text-white font-semibold"
                  >
                    <PhoneIcon className="h-4 w-4 text-[#7EC4E5] shrink-0" />
                    <span>{siteConfig.secondaryPhoneDisplay}</span>
                  </a>
                </p>
              </div>

              <p className="pt-1">
                <a
                  href={`mailto:${siteConfig.email}`}
                  className="flex items-center gap-2 hover:text-white"
                >
                  <MailIcon className="h-4 w-4 text-[#7EC4E5] shrink-0" />
                  <span>{siteConfig.email}</span>
                </a>
              </p>

              <p className="pt-2">
                <a
                  href={siteConfig.googleMapsUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-1.5 text-[#7EC4E5] hover:text-white font-semibold text-xs"
                >
                  <MapPinIcon className="h-3.5 w-3.5" />
                  <span>Get Directions on Google Maps &rarr;</span>
                </a>
              </p>
            </address>
          </div>
        </div>

        {/* Bottom Copyright & Legal Links */}
        <div className="mt-12 pt-8 border-t border-white/10 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs text-[#DCEFF8]/60">
          <p>
            © {year} {siteConfig.name}. All rights reserved.
          </p>
          <div className="flex items-center gap-4">
            <Link to="/privacy-policy" className="hover:text-white transition-colors">
              Privacy Policy
            </Link>
            <span>·</span>
            <Link to="/terms-of-use" className="hover:text-white transition-colors">
              Terms of Use
            </Link>
            <span>·</span>
            <Link to="/sitemap" className="hover:text-white transition-colors">
              Sitemap
            </Link>
          </div>
        </div>
      </div>
    </footer>
  );
}
