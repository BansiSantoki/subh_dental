import { siteConfig } from '../data/siteConfig';
import { images } from '../data/images';
import type { BlogPost, FAQ, Service } from '../types/content';

type JsonLd = Record<string, unknown>;

const base = siteConfig.siteUrl;
const dentistId = `${base}/#dentist`;

export function absoluteUrl(path: string): string {
  return `${base}${path === '/' ? '' : path}`;
}

/** Address is only published once marked verified in siteConfig. No ratings or reviews are included. */
export function dentistSchema(): JsonLd {
  const schema: JsonLd = {
    '@context': 'https://schema.org',
    '@type': 'Dentist',
    '@id': dentistId,
    name: siteConfig.name,
    slogan: siteConfig.tagline,
    url: base,
    image: absoluteUrl(images.reception),
    telephone: siteConfig.phoneNumbers.map((phone) => phone.e164),
    email: siteConfig.email,
    sameAs: [siteConfig.instagramUrl],
    hasMap: siteConfig.googleMapsUrl,
    areaServed: { '@type': 'City', name: siteConfig.city },
    contactPoint: {
      '@type': 'ContactPoint',
      telephone: siteConfig.phoneNumbers.map((phone) => phone.e164),
      contactType: 'customer service',
      email: siteConfig.email,
      areaServed: siteConfig.city,
      availableLanguage: ['English', 'Hindi', 'Marathi']
    }
  };
  if (siteConfig.addressVerified) {
    schema.address = {
      '@type': 'PostalAddress',
      streetAddress: siteConfig.address,
      addressLocality: siteConfig.city,
      addressRegion: siteConfig.region,
      addressCountry: siteConfig.countryCode,
      postalCode: '422009'
    };
  }
  return schema;
}

export function websiteSchema(): JsonLd {
  return {
    '@context': 'https://schema.org',
    '@type': 'WebSite',
    name: siteConfig.name,
    url: base,
    publisher: { '@id': dentistId }
  };
}

export function webPageSchema(title: string, description: string, path: string): JsonLd {
  return {
    '@context': 'https://schema.org',
    '@type': 'WebPage',
    name: title,
    description,
    url: absoluteUrl(path),
    isPartOf: { '@type': 'WebSite', url: base }
  };
}

export function breadcrumbSchema(items: {name: string;path: string;}[]): JsonLd {
  return {
    '@context': 'https://schema.org',
    '@type': 'BreadcrumbList',
    itemListElement: items.map((item, i) => ({
      '@type': 'ListItem',
      position: i + 1,
      name: item.name,
      item: absoluteUrl(item.path)
    }))
  };
}

export function serviceSchema(service: Service): JsonLd {
  return {
    '@context': 'https://schema.org',
    '@type': 'Service',
    name: service.name,
    description: service.metaDescription,
    serviceType: service.name,
    url: absoluteUrl(`/services/${service.slug}`),
    image: service.image,
    areaServed: { '@type': 'City', name: siteConfig.city },
    provider: { '@id': dentistId, '@type': 'Dentist', name: siteConfig.name }
  };
}

export function faqSchema(faqs: FAQ[]): JsonLd {
  return {
    '@context': 'https://schema.org',
    '@type': 'FAQPage',
    mainEntity: faqs.map((f) => ({
      '@type': 'Question',
      name: f.question,
      acceptedAnswer: { '@type': 'Answer', text: f.answer }
    }))
  };
}

export function blogPostingSchema(post: BlogPost): JsonLd {
  return {
    '@context': 'https://schema.org',
    '@type': 'BlogPosting',
    headline: post.title,
    description: post.metaDescription,
    image: post.featuredImage,
    url: absoluteUrl(`/blog/${post.slug}`),
    mainEntityOfPage: absoluteUrl(`/blog/${post.slug}`),
    publisher: { '@id': dentistId, '@type': 'Organization', name: siteConfig.name }
  };
}