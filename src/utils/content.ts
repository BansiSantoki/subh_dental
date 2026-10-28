import { services } from '../data/services';
import { blogPosts } from '../data/blog';
import type { BlogPost, Service, ServiceCategory } from '../types/content';

export function getServiceBySlug(slug: string | undefined): Service | undefined {
  return services.find((s) => s.slug === slug);
}

export function getServicesBySlugs(slugs: string[]): Service[] {
  return slugs.map((slug) => getServiceBySlug(slug)).filter((s): s is Service => Boolean(s));
}

export function getServicesByCategory(category: ServiceCategory): Service[] {
  return services.filter((s) => s.category === category);
}

export function getPostBySlug(slug: string | undefined): BlogPost | undefined {
  return blogPosts.find((p) => p.slug === slug);
}

export function getRelatedPosts(post: BlogPost, count = 3): BlogPost[] {
  const sameCategory = blogPosts.filter((p) => p.slug !== post.slug && p.category === post.category);
  const others = blogPosts.filter((p) => p.slug !== post.slug && p.category !== post.category);
  return [...sameCategory, ...others].slice(0, count);
}

export function readingTimeMinutes(post: BlogPost): number {
  const words = post.content.reduce((total, block) => {
    switch (block.type) {
      case 'paragraph':
      case 'heading':
      case 'subheading':
      case 'quote':
      case 'callout':
        return total + block.text.split(/\s+/).length;
      case 'list':
        return total + block.items.join(' ').split(/\s+/).length;
      default:
        return total;
    }
  }, 0);
  return Math.max(1, Math.ceil(words / 200));
}

export function getTableOfContents(post: BlogPost): {id: string;text: string;}[] {
  return post.content.flatMap((block) => block.type === 'heading' ? [{ id: block.id, text: block.text }] : []);
}