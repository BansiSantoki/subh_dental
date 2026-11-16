import React, { useCallback, useEffect, useState } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { MenuIcon, XIcon, CalendarCheckIcon, PhoneIcon } from 'lucide-react';
import { Logo } from '../shared/Logo';
import { MobileNavigation } from './MobileNavigation';
import { desktopPrimaryNav, siteConfig } from '../../data/siteConfig';
import { useAppointment } from '../../contexts/AppointmentContext';
import { buttonClass } from '../../utils/buttonStyles';

export function Header() {
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);
  const { openAppointment } = useAppointment();
  const location = useLocation();

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 16);
    onScroll();
    window.addEventListener('scroll', onScroll, { passive: true });
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  useEffect(() => {
    setMenuOpen(false);
  }, [location.key]);

  const closeMenu = useCallback(() => setMenuOpen(false), []);
  const bookFromMenu = useCallback(() => {
    setMenuOpen(false);
    openAppointment();
  }, [openAppointment]);

  return (
    <>
      <header
        className={`fixed inset-x-0 top-0 z-40 transition-all duration-300 ${
          scrolled || menuOpen
            ? 'border-b border-[#E2EAF0] bg-white/95 shadow-[0_4px_20px_-8px_rgba(18,59,89,0.12)] backdrop-blur-md'
            : 'border-b border-transparent bg-white/90 backdrop-blur-sm'
        }`}
      >
        <div className="mx-auto flex max-w-[1440px] items-center justify-between gap-4 px-4 sm:px-6 lg:px-10 h-20 md:h-[86px]">
          {/* Official Clinic Logo */}
          <Link
            to="/"
            aria-label={`${siteConfig.name} - Home`}
            className="shrink-0 transition-opacity duration-200 hover:opacity-90"
          >
            <Logo />
          </Link>

          {/* Desktop Navigation Links */}
          <nav
            aria-label="Primary Navigation"
            className="hidden items-center gap-1 xl:gap-2 2xl:gap-3 lg:flex"
          >
            {desktopPrimaryNav.map((item) => {
              const isBlog = item.href === '/blog' && location.pathname.startsWith('/blog');
              const isCurrent = location.pathname === item.href || isBlog;

              return (
                <Link
                  key={item.label}
                  to={item.href}
                  className={`group relative rounded-full px-3 py-1.5 text-[13px] 2xl:text-[14px] font-medium transition-colors duration-200 ${
                    isCurrent
                      ? 'text-[#087FAE] font-semibold bg-[#F2F8FC]'
                      : 'text-[#34465A] hover:text-[#087FAE] hover:bg-[#F2F8FC]/80'
                  }`}
                >
                  <span>{item.label}</span>
                  {/* Subtle active blue bottom indicator */}
                  {isCurrent && (
                    <span className="absolute bottom-0 left-1/2 h-0.5 w-4 -translate-x-1/2 rounded-full bg-[#087FAE]" />
                  )}
                </Link>
              );
            })}
          </nav>

          {/* Right Action Buttons */}
          <div className="flex items-center gap-2.5 sm:gap-3">
            {/* Quick Call Button (Tablet & Desktop) */}
            <a
              href={`tel:${siteConfig.phoneE164}`}
              className="hidden items-center gap-1.5 rounded-full border border-[#E2EAF0] bg-[#F2F8FC] px-3.5 py-2 text-xs font-semibold text-[#123B59] transition-colors duration-200 hover:border-[#087FAE] hover:text-[#087FAE] md:inline-flex"
              aria-label={`Call ${siteConfig.phoneDisplay}`}
            >
              <PhoneIcon className="h-3.5 w-3.5 text-[#087FAE]" />
              <span className="hidden xl:inline">{siteConfig.phoneDisplay}</span>
              <span className="xl:hidden">Call</span>
            </a>

            {/* Book Appointment CTA Button */}
            <button
              type="button"
              onClick={() => openAppointment()}
              className={buttonClass('primary', 'sm', 'hidden sm:inline-flex h-11 px-5 shadow-sm')}
            >
              <CalendarCheckIcon className="h-4 w-4" />
              <span>Book Appointment</span>
            </button>

            {/* Mobile Menu Toggle Button */}
            <button
              type="button"
              onClick={() => setMenuOpen((prev) => !prev)}
              aria-expanded={menuOpen}
              aria-controls="mobile-navigation"
              aria-label={menuOpen ? 'Close navigation menu' : 'Open navigation menu'}
              className="flex h-11 w-11 items-center justify-center rounded-xl border border-[#E2EAF0] bg-white text-[#123B59] shadow-sm transition-colors duration-200 hover:bg-[#F2F8FC] hover:text-[#087FAE] lg:hidden"
            >
              {menuOpen ? <XIcon className="h-5 w-5" /> : <MenuIcon className="h-5 w-5" />}
            </button>
          </div>
        </div>
      </header>

      {/* Responsive Mobile Drawer Navigation */}
      <MobileNavigation open={menuOpen} onClose={closeMenu} onBook={bookFromMenu} />
    </>
  );
}
