import React, { useCallback, useEffect, useState } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { MenuIcon, XIcon } from 'lucide-react';
import { Logo } from '../shared/Logo';
import { WhatsAppIcon } from '../shared/WhatsAppIcon';
import { DesktopMoreMenu } from './DesktopMoreMenu';
import { MobileNavigation } from './MobileNavigation';
import { desktopPrimaryNav } from '../../data/siteConfig';
import { useAppointment } from '../../contexts/AppointmentContext';
import { whatsappUrl } from '../../utils/whatsapp';
import { buttonClass } from '../../utils/buttonStyles';

export function Header() {
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);
  const { openAppointment } = useAppointment();
  const location = useLocation();

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 24);
    onScroll();
    window.addEventListener('scroll', onScroll, { passive: true });
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  useEffect(() => setMenuOpen(false), [location.key]);

  const closeMenu = useCallback(() => setMenuOpen(false), []);
  const bookFromMenu = useCallback(() => {
    setMenuOpen(false);
    openAppointment();
  }, [openAppointment]);

  const solid = scrolled || menuOpen;

  return (
    <>
      <header
        className={`fixed inset-x-0 top-0 z-40 border-b transition-[background-color,border-color,box-shadow] duration-300 ease-silk ${
        solid ?
        'border-charcoal/[0.06] bg-ivory/90 shadow-[0_10px_40px_-28px_rgba(37,43,41,0.4)] backdrop-blur-md' :
        'border-transparent bg-transparent'}`
        }>
        
        <div
          className={`mx-auto flex max-w-[1440px] items-center justify-between gap-6 px-5 transition-[height] duration-300 ease-silk md:px-8 lg:px-12 ${
          scrolled ? 'h-[68px]' : 'h-[68px] md:h-[84px]'}`
          }>
          
          <Link to="/" aria-label="Aurelia Dental Studio — home" className="shrink-0">
            <Logo />
          </Link>

          <nav aria-label="Primary" className="hidden items-center gap-7 xl:flex">
            {desktopPrimaryNav.map((item) => {
              const active = item.href === '/blog' && location.pathname.startsWith('/blog');
              return (
                <Link
                  key={item.href}
                  to={item.href}
                  aria-current={active ? 'page' : undefined}
                  className={`relative text-[13.5px] font-medium transition-colors duration-200 after:absolute after:-bottom-1.5 after:left-0 after:h-px after:w-full after:origin-left after:bg-forest after:transition-transform after:duration-200 after:ease-silk hover:text-forest hover:after:scale-x-100 ${
                  active ? 'text-forest after:scale-x-100' : 'text-charcoal/80 after:scale-x-0'}`
                  }>
                  
                  {item.label}
                </Link>);

            })}
            <DesktopMoreMenu />
          </nav>

          <div className="flex items-center gap-2.5">
            <a
              href={whatsappUrl()}
              target="_blank"
              rel="noopener noreferrer"
              aria-label="Chat with us on WhatsApp (opens in a new tab)"
              className="flex h-11 w-11 items-center justify-center rounded-full border border-charcoal/[0.12] bg-white/60 text-[#1FA855] transition-[background-color,border-color] duration-200 hover:border-[#1FA855]/40 hover:bg-white">
              
              <WhatsAppIcon className="h-[19px] w-[19px]" />
            </a>
            <button type="button" onClick={() => openAppointment()} className={buttonClass('primary', 'sm', 'hidden h-11 px-5 sm:inline-flex')}>
              Book an Appointment
            </button>
            <button
              type="button"
              onClick={() => setMenuOpen((o) => !o)}
              aria-expanded={menuOpen}
              aria-controls="mobile-navigation"
              aria-label={menuOpen ? 'Close menu' : 'Open menu'}
              className="flex h-11 w-11 items-center justify-center rounded-full border border-charcoal/[0.12] bg-white/60 text-charcoal transition-colors duration-200 hover:bg-white xl:hidden">
              
              {menuOpen ? <XIcon className="h-5 w-5" /> : <MenuIcon className="h-5 w-5" />}
            </button>
          </div>
        </div>
      </header>
      <MobileNavigation open={menuOpen} onClose={closeMenu} onBook={bookFromMenu} />
    </>);

}