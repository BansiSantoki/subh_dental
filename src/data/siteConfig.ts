import type { NavItem } from '../types/content';

/**
 * Official clinic configuration for Dr. Naik's Shubh Smile Multispeciality Dental Clinic.
 * Exact verified contact details for Nashik, Maharashtra.
 */
export const siteConfig = {
  name: "Dr. Naik's Shubh Smile Multispeciality Dental Clinic",
  shortName: 'Shubh Smile Dental Clinic',
  doctorName: 'Dr. Naik',
  logoWord: "DR. NAIK'S",
  logoSub: 'SHUBH SMILE',
  tagline: 'Modern, comfortable dental care with a personalized patient-first approach in Nashik.',
  message: "Official clinic website of Dr. Naik's Shubh Smile Multispeciality Dental Clinic in Nashik.",
  footerTagline: 'Exceptional dental care for healthier, more confident smiles.',
  siteUrl: 'https://subhdental.vercel.app',
  city: 'Nashik',
  region: 'Maharashtra',
  postalCode: '422009',
  countryCode: 'IN',
  locationLabel: 'Shastri Nagar, Indira Nagar, Nashik, Maharashtra',
  phoneNumbers: [
    { label: 'Primary Contact', display: '+91 74208 80118', e164: '+917420880118' },
    { label: 'Secondary Contact', display: '+91 84548 89474', e164: '+918454889474' }
  ],
  phoneDisplay: '+91 74208 80118',
  phoneE164: '+917420880118',
  secondaryPhoneDisplay: '+91 84548 89474',
  secondaryPhoneE164: '+918454889474',
  whatsappNumber: '917420880118',
  email: 'shubhsmiledental@gmail.com',
  address:
    'Sundaram Appt, Besides Maruti Courier, Gajanan Maharaj Mandir Rd, Opp. Mahila Bank, Shastri Nagar, Indira Nagar, Nashik, Maharashtra 422009, India.',
  addressVerified: true,
  mapEmbedUrl:
    'https://www.google.com/maps?q=Sundaram%20Appt%2C%20Besides%20Maruti%20Courier%2C%20Gajanan%20Maharaj%20Mandir%20Rd%2C%20Opp.%20Mahila%20Bank%2C%20Shastri%20Nagar%2C%20Indira%20Nagar%2C%20Nashik%2C%20Maharashtra%20422009%2C%20India&output=embed',
  googleMapsUrl: 'https://g.co/kgs/1L2MUu',
  instagramUrl: 'https://www.instagram.com/shubhsmiledental/',
  instagramUsername: '@shubhsmiledental',
  instagramQrCode: '/instagram-qr-code.png',
  defaultWhatsAppMessage:
    "Hello, I would like to inquire about a dental appointment at Dr. Naik's Shubh Smile Multispeciality Dental Clinic in Nashik.",
  aftercareWhatsAppMessage:
    "Hello, I would like clinical guidance regarding my post-treatment dental care at Dr. Naik's Shubh Smile Multispeciality Dental Clinic.",
  tourismWhatsAppMessage:
    "Hello, I am planning a visit to Nashik and would like to schedule a dental consultation at Dr. Naik's Shubh Smile Multispeciality Dental Clinic.",
  social: [
    { label: 'Instagram', href: 'https://www.instagram.com/shubhsmiledental/' },
    { label: 'Google Maps Directions', href: 'https://g.co/kgs/1L2MUu' }
  ]
};

/**
 * Official navigation links for Header and Mobile Drawer.
 * Note: 'Home' is accessed directly via the clickable official logo.
 * 'Why Choose Us' and 'Testimonials' are prominently featured on the Home Page and Footer,
 * keeping the primary navbar clean, balanced, and uncluttered.
 */
export const mainNav: NavItem[] = [
  { label: 'Our Team', href: '/team' },
  { label: 'Treatments', href: '/services' },
  { label: 'Gallery', href: '/gallery' },
  { label: 'Blogs', href: '/blog' },
  { label: 'Dental Tourism', href: '/dental-tourism' },
  { label: 'Post-Treatment Support', href: '/post-treatment-support' },
  { label: 'Contact Us', href: '/contact' }
];

export const desktopPrimaryNav: NavItem[] = [
  { label: 'Our Team', href: '/team' },
  { label: 'Treatments', href: '/services' },
  { label: 'Gallery', href: '/gallery' },
  { label: 'Blogs', href: '/blog' },
  { label: 'Dental Tourism', href: '/dental-tourism' },
  { label: 'Post-Treatment Support', href: '/post-treatment-support' },
  { label: 'Contact Us', href: '/contact' }
];

export const footerNav: NavItem[] = [
  { label: 'Our Team', href: '/team' },
  { label: 'Why Choose Us', href: '/why-choose-us' },
  { label: 'Treatments', href: '/services' },
  { label: 'Testimonials', href: '/testimonials' },
  { label: 'Gallery', href: '/gallery' },
  { label: 'Blogs', href: '/blog' },
  { label: 'Dental Tourism', href: '/dental-tourism' },
  { label: 'Post-Treatment Support', href: '/post-treatment-support' },
  { label: 'Contact Us', href: '/contact' }
];
