import React, { lazy } from 'react';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import { MotionConfig } from 'framer-motion';
import { AppointmentProvider } from './contexts/AppointmentContext';
import { SiteLayout } from './components/layout/SiteLayout';
import { Home } from './pages/Home';
import { locations } from './data/locations';

const Services = lazy(() => import('./pages/Services').then((m) => ({ default: m.Services })));
const TreatmentPage = lazy(() => import('./pages/TreatmentPage').then((m) => ({ default: m.TreatmentPage })));
const BlogListing = lazy(() => import('./pages/BlogListing').then((m) => ({ default: m.BlogListing })));
const BlogArticle = lazy(() => import('./pages/BlogArticle').then((m) => ({ default: m.BlogArticle })));
const LocationLanding = lazy(() => import('./pages/LocationLanding').then((m) => ({ default: m.LocationLanding })));
const LegalPage = lazy(() => import('./pages/LegalPage').then((m) => ({ default: m.LegalPage })));
const SitemapPage = lazy(() => import('./pages/SitemapPage').then((m) => ({ default: m.SitemapPage })));
const NotFound = lazy(() => import('./pages/NotFound').then((m) => ({ default: m.NotFound })));

export function App() {
  return (
    <BrowserRouter>
      <MotionConfig reducedMotion="user">
        <AppointmentProvider>
          <Routes>
            <Route element={<SiteLayout />}>
              <Route index element={<Home />} />
              <Route path="services" element={<Services />} />
              <Route path="services/:slug" element={<TreatmentPage />} />
              <Route path="blog" element={<BlogListing />} />
              <Route path="blog/:slug" element={<BlogArticle />} />
              {locations.map((l) =>
              <Route key={l.slug} path={l.slug} element={<LocationLanding location={l} />} />
              )}
              <Route path="privacy-policy" element={<LegalPage kind="privacy" />} />
              <Route path="terms-of-use" element={<LegalPage kind="terms" />} />
              <Route path="sitemap" element={<SitemapPage />} />
              <Route path="*" element={<NotFound />} />
            </Route>
          </Routes>
        </AppointmentProvider>
      </MotionConfig>
    </BrowserRouter>);

}