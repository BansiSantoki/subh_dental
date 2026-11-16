import React from 'react';
import { SEOHead } from '../components/shared/SEOHead';
import { HeroSection } from '../components/home/HeroSection';
import { ClinicVideoSection } from '../components/home/ClinicVideoSection';
import { AboutSection } from '../components/home/AboutSection';
import { WhyChooseUs } from '../components/home/WhyChooseUs';
import { ServicesSection } from '../components/home/ServicesSection';
import { TeamSection } from '../components/home/TeamSection';
import { TestimonialsSection } from '../components/home/TestimonialsSection';
import { SmileJourney } from '../components/home/SmileJourney';
import { BlogPreviewSection } from '../components/home/BlogPreviewSection';
import { AppointmentBookingSection } from '../components/home/AppointmentBookingSection';
import { ContactSection } from '../components/shared/ContactSection';
import { images } from '../data/images';
import { dentistSchema, webPageSchema, websiteSchema } from '../utils/structuredData';
import { siteConfig } from '../data/siteConfig';

const title = `${siteConfig.name} | Modern Dental Clinic in Nashik, Maharashtra`;
const description =
  "Experience personalized, comfortable dental care at Dr. Naik's Shubh Smile Multispeciality Dental Clinic in Nashik. Specialized in implants, root canals, smile design, clear aligners, and preventive dentistry.";

export function Home() {
  return (
    <>
      <SEOHead
        title={title}
        description={description}
        path="/"
        image={images.heroDental}
        jsonLd={[dentistSchema(), websiteSchema(), webPageSchema(title, description, '/')]}
      />

      {/* A. Hero Section */}
      <HeroSection />

      {/* B. About the Studio ("Dentistry That Puts You First.") */}
      <AboutSection />

      {/* C. Why Choose Us */}
      <WhyChooseUs />

      {/* D. Dental Services Preview */}
      <ServicesSection />

      {/* Clinical Team (Dr. Naik) */}
      <TeamSection />

      {/* E. Your Smile Journey (6-Step Visual Journey) */}
      <SmileJourney />

      {/* F. Clinic Video Tour ("Take a Look Inside Shubh Smile") */}
      <ClinicVideoSection />

      {/* G. Patient Testimonials */}
      <TestimonialsSection />

      {/* K. Blogs Preview */}
      <BlogPreviewSection />

      {/* L. Final Appointment CTA ("Ready for a Healthier, More Confident Smile?") */}
      <AppointmentBookingSection />

      {/* Contact Section with Google Maps & Direct Details */}
      <ContactSection />
    </>
  );
}
