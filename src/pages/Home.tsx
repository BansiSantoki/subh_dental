import React from 'react';
import { SEOHead } from '../components/shared/SEOHead';
import { HeroSection } from '../components/home/HeroSection';
import { ClinicVideoSection } from '../components/home/ClinicVideoSection';
import { AboutSection } from '../components/home/AboutSection';
import { WhyChooseUs } from '../components/home/WhyChooseUs';
import { ServicesSection } from '../components/home/ServicesSection';
import { TeamSection } from '../components/home/TeamSection';
import { TestimonialsSection } from '../components/home/TestimonialsSection';
import { GallerySection } from '../components/home/GallerySection';
import { DentalTourismSection } from '../components/home/DentalTourismSection';
import { SmileJourney } from '../components/home/SmileJourney';
import { BlogPreviewSection } from '../components/home/BlogPreviewSection';
import { PostTreatmentSupport } from '../components/home/PostTreatmentSupport';
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

      {/* B. Hero Section */}
      <HeroSection />

      {/* Clinic Video Tour */}
      <ClinicVideoSection />

      {/* C. About the Clinic ("Dentistry That Puts You First.") */}
      <AboutSection />

      {/* D. Why Choose Us */}
      <WhyChooseUs />

      {/* E. Dental Services */}
      <ServicesSection />

      {/* F. Our Team Preview */}
      <TeamSection />

      {/* G. Patient Testimonials */}
      <TestimonialsSection />

      {/* H. Gallery */}
      <GallerySection />

      {/* I. Dental Tourism */}
      <DentalTourismSection />

      {/* J. Your Smile Journey (6-Step Visual Journey) */}
      <SmileJourney />

      {/* K. Blogs Preview */}
      <BlogPreviewSection />

      {/* L. Post-Treatment Support */}
      <PostTreatmentSupport />

      {/* M. Appointment CTA ("Ready to Take the First Step Towards a Healthier Smile?") */}
      <AppointmentBookingSection />

      {/* Contact Section with Google Maps & Details */}
      <ContactSection />
    </>
  );
}
