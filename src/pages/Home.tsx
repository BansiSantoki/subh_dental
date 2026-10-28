import React from 'react';
import { SEOHead } from '../components/shared/SEOHead';
import { HeroSection } from '../components/home/HeroSection';
import { AboutSection } from '../components/home/AboutSection';
import { WhyChooseUs } from '../components/home/WhyChooseUs';
import { TeamSection } from '../components/home/TeamSection';
import { ServicesSection } from '../components/home/ServicesSection';
import { SmileJourney } from '../components/home/SmileJourney';
import { PostTreatmentSupport } from '../components/home/PostTreatmentSupport';
import { TestimonialsSection } from '../components/home/TestimonialsSection';
import { GallerySection } from '../components/home/GallerySection';
import { BlogPreviewSection } from '../components/home/BlogPreviewSection';
import { DentalTourismSection } from '../components/home/DentalTourismSection';
import { ContactSection } from '../components/shared/ContactSection';
import { images } from '../data/images';
import { dentistSchema, webPageSchema, websiteSchema } from '../utils/structuredData';

const title = 'Aurelia Dental Studio | Thoughtful Dental Care in Nashik, Maharashtra';
const description =
'A calm, modern dental studio in Nashik offering personalized general, cosmetic and restorative dental care with clear communication and careful aftercare.';

export function Home() {
  return (
    <>
      <SEOHead
        title={title}
        description={description}
        path="/"
        image={images.heroTooth}
        jsonLd={[dentistSchema(), websiteSchema(), webPageSchema(title, description, '/')]} />
      
      <HeroSection />
      <AboutSection />
      <WhyChooseUs />
      <TeamSection />
      <ServicesSection />
      <SmileJourney />
      <PostTreatmentSupport />
      <TestimonialsSection />
      <GallerySection />
      <BlogPreviewSection />
      <DentalTourismSection />
      <ContactSection />
    </>);

}