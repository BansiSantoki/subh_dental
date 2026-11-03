import { useEffect } from 'react';
import { siteConfig } from '../../data/siteConfig';
import { images } from '../../data/images';
import { absoluteUrl } from '../../utils/structuredData';

interface SEOHeadProps {
  title: string;
  description: string;
  path: string;
  image?: string;
  type?: 'website' | 'article';
  jsonLd?: Record<string, unknown>[];
  noindex?: boolean;
}

export function SEOHead({ title, description, path, image = images.reception, type = 'website', jsonLd = [], noindex = false }: SEOHeadProps) {
  const jsonString = JSON.stringify(jsonLd);
  const socialImage = image.startsWith('/') ? absoluteUrl(image) : image;

  useEffect(() => {
    const url = absoluteUrl(path);
    document.title = title;
    document.documentElement.lang = 'en-IN';
    setMeta('name', 'description', description);
    setMeta('name', 'robots', noindex ? 'noindex, follow' : 'index, follow');
    setCanonical(url);
    setMeta('property', 'og:title', title);
    setMeta('property', 'og:description', description);
    setMeta('property', 'og:url', url);
    setMeta('property', 'og:type', type);
    setMeta('property', 'og:image', socialImage);
    setMeta('property', 'og:site_name', siteConfig.name);
    setMeta('property', 'og:locale', 'en_IN');
    setMeta('name', 'twitter:card', 'summary_large_image');
    setMeta('name', 'twitter:title', title);
    setMeta('name', 'twitter:description', description);
    setMeta('name', 'twitter:image', socialImage);

    let script = document.getElementById('page-jsonld') as HTMLScriptElement | null;
    if (!script) {
      script = document.createElement('script');
      script.type = 'application/ld+json';
      script.id = 'page-jsonld';
      document.head.appendChild(script);
    }
    script.textContent = jsonString;
  }, [title, description, path, image, socialImage, type, noindex, jsonString]);

  return null;
}

function setMeta(attr: 'name' | 'property', key: string, content: string) {
  let el = document.head.querySelector<HTMLMetaElement>(`meta[${attr}="${key}"]`);
  if (!el) {
    el = document.createElement('meta');
    el.setAttribute(attr, key);
    document.head.appendChild(el);
  }
  el.setAttribute('content', content);
}

function setCanonical(href: string) {
  let el = document.head.querySelector<HTMLLinkElement>('link[rel="canonical"]');
  if (!el) {
    el = document.createElement('link');
    el.rel = 'canonical';
    document.head.appendChild(el);
  }
  el.href = href;
}