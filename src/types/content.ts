export interface NavItem {
  label: string;
  href: string;
}

export interface FAQ {
  question: string;
  answer: string;
}

export interface ProcessStep {
  title: string;
  text: string;
}

export type ServiceCategory = 'everyday' | 'cosmetic' | 'restorative';

export interface Service {
  slug: string;
  name: string;
  category: ServiceCategory;
  short: string;
  image: string;
  imageAlt: string;
  seoTitle: string;
  metaDescription: string;
  h1: string;
  intro: string[];
  reasons: string[];
  benefits: string[];
  process: ProcessStep[];
  suitability: string;
  faqs: FAQ[];
  related: string[];
}

export interface Doctor {
  id: string;
  name: string;
  qualification: string;
  specialty: string;
  bio: string;
  portrait: string;
  portraitAlt: string;
  featured?: boolean;
  focusAreas?: string[];
}

export interface Testimonial {
  id: string;
  name: string;
  quote: string;
  treatment?: string;
  date?: string;
}

export interface GalleryImage {
  id: string;
  src: string;
  alt: string;
  caption: string;
  category: string;
  aspect: 'portrait' | 'landscape' | 'square';
}

export interface BlogImage {
  src: string;
  alt: string;
  caption?: string;
}

export type BlogBlock =
{type: 'paragraph';text: string;} |
{type: 'heading';id: string;text: string;} |
{type: 'subheading';text: string;} |
({type: 'image';layout?: 'full' | 'inset';} & BlogImage) |
{type: 'gallery';layout: 'grid' | 'side-by-side';images: BlogImage[];} |
{type: 'list';ordered?: boolean;items: string[];} |
{type: 'quote';text: string;cite?: string;} |
{type: 'callout';text: string;};

export interface BlogPost {
  slug: string;
  title: string;
  category: string;
  excerpt: string;
  metaDescription: string;
  featuredImage: string;
  featuredImageAlt: string;
  publishedLabel: string;
  author: string;
  relatedService?: string;
  content: BlogBlock[];
}

export type LocationKind = 'clinic' | 'service-area' | 'treatment';

export interface LocationPage {
  slug: string;
  areaName: string;
  kind: LocationKind;
  h1: string;
  seoTitle: string;
  metaDescription: string;
  eyebrow: string;
  intro: string[];
  areaNote: string;
  highlights: ProcessStep[];
  treatments: string[];
  faqs: FAQ[];
  image: string;
  imageAlt: string;
}