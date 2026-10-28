import React, { Suspense } from 'react';
import { Outlet } from 'react-router-dom';
import { Header } from './Header';
import { Footer } from './Footer';
import { FloatingWhatsAppButton } from './FloatingWhatsAppButton';
import { ScrollManager } from './ScrollManager';
import { PageLoader } from './PageLoader';
import { AppointmentModal } from '../forms/AppointmentModal';

export function SiteLayout() {
  return (
    <div className="min-h-screen w-full bg-ivory">
      <a
        href="#main"
        className="sr-only focus:not-sr-only focus:fixed focus:left-4 focus:top-4 focus:z-[70] focus:rounded-full focus:bg-forest focus:px-5 focus:py-3 focus:text-ivory">
        
        Skip to content
      </a>
      <ScrollManager />
      <Header />
      <main id="main">
        <Suspense fallback={<PageLoader />}>
          <Outlet />
        </Suspense>
      </main>
      <Footer />
      <FloatingWhatsAppButton />
      <AppointmentModal />
    </div>);

}