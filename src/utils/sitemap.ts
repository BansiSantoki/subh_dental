import { services } from '../data/services';
import { blogPosts } from '../data/blog';
import { locations } from '../data/locations';
import { siteConfig } from '../data/siteConfig';

export interface SitemapGroup {
  title: string;
  links: {label: string;path: string;}[];
}

export function getSitemapGroups(): SitemapGroup[] {
  return [
  {
    title: 'Main',
    links: [
    { label: 'Home', path: '/' },
    { label: 'All Treatments', path: '/services' },
    { label: 'Blog', path: '/blog' },
    { label: 'Privacy Policy', path: '/privacy-policy' },
    { label: 'Terms of Use', path: '/terms-of-use' }]

  },
  { title: 'Treatments', links: services.map((s) => ({ label: s.name, path: `/services/${s.slug}` })) },
  { title: 'Articles', links: blogPosts.map((p) => ({ label: p.title, path: `/blog/${p.slug}` })) },
  { title: 'Nashik', links: locations.map((l) => ({ label: l.h1, path: `/${l.slug}` })) }];

}

/** XML sitemap generated from the same content source — serve as /sitemap.xml at deployment. */
export function generateSitemapXml(): string {
  const urls = getSitemapGroups().
  flatMap((g) => g.links).
  map((l) => `  <url><loc>${siteConfig.siteUrl}${l.path === '/' ? '' : l.path}</loc></url>`).
  join('\n');
  return `<?xml version="1.0" encoding="UTF-8"?>\n<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">\n${urls}\n</urlset>`;
}

/** robots.txt content — serve at the domain root at deployment. */
export const robotsTxt = `User-agent: *\nAllow: /\n\nSitemap: ${siteConfig.siteUrl}/sitemap.xml\n`;