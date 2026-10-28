import type { NavItem } from '../types/content';

/**
 * Central business configuration.
 * Every contact detail below is a DEVELOPMENT PLACEHOLDER — replace with
 * verified clinic information before launch. All components read from here.
 */
export const siteConfig = {
  name: 'Aurelia Dental Studio',
  logoWord: 'AURELIA',
  logoSub: 'DENTAL STUDIO',
  tagline: 'A More Confident Smile Starts Here.',
  message: 'Thoughtful dental care. Modern techniques. A smile that feels like you.',
  footerTagline: 'Thoughtful care for every smile.',
  siteUrl: 'https://www.example.com',
  city: 'Nashik',
  region: 'Maharashtra',
  countryCode: 'IN',
  locationLabel: 'Nashik, Maharashtra',
  phoneDisplay: '+91 98765 43210',
  phoneE164: '+919876543210',
  whatsappNumber: '919876543210',
  email: 'hello@example.com',
  address: '[Add the verified clinic address in Nashik, Maharashtra]',
  addressVerified: false,
  workingHours: ['[Add actual clinic working hours]'],
  /** Paste a Google Maps embed URL here once the address is verified. */
  mapEmbedUrl: '',
  defaultWhatsAppMessage: 'Hello, I would like to know more about Aurelia Dental Studio in Nashik.',
  aftercareWhatsAppMessage:
  'Hello, I would like guidance regarding post-treatment care. Please let me know how I can contact the clinic.',
  tourismWhatsAppMessage:
  'Hello, I am planning a visit to Nashik and would like to discuss a dental consultation at Aurelia Dental Studio.',
  social: [
  { label: 'Instagram', href: 'https://www.instagram.com/' },
  { label: 'Facebook', href: 'https://www.facebook.com/' },
  { label: 'YouTube', href: 'https://www.youtube.com/' }]

};

/** Full navigation in the order requested — used by mobile menu and footer. */
export const mainNav: NavItem[] = [
{ label: 'Home', href: '/' },
{ label: 'Our Team', href: '/#team' },
{ label: 'Why Choose Us', href: '/#why-us' },
{ label: 'Services', href: '/#services' },
{ label: 'Testimonials', href: '/#testimonials' },
{ label: 'Gallery', href: '/#gallery' },
{ label: 'Blogs', href: '/blog' },
{ label: 'Post-Treatment Support', href: '/#aftercare' },
{ label: 'Contact Us', href: '/#contact' }];


/** Desktop header shows the most-used links inline; the rest sit under "More". */
export const desktopPrimaryNav: NavItem[] = [
{ label: 'Our Team', href: '/#team' },
{ label: 'Why Choose Us', href: '/#why-us' },
{ label: 'Services', href: '/#services' },
{ label: 'Gallery', href: '/#gallery' },
{ label: 'Blogs', href: '/blog' },
{ label: 'Contact Us', href: '/#contact' }];


export const desktopMoreNav: NavItem[] = [
{ label: 'Home', href: '/' },
{ label: 'Testimonials', href: '/#testimonials' },
{ label: 'Post-Treatment Support', href: '/#aftercare' },
{ label: 'Visiting Nashik', href: '/#visiting-nashik' },
{ label: 'All Treatments', href: '/services' }];