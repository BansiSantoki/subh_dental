import type { NavItem } from '../types/content';

/**
 * Central business configuration for the clinic.
 * All components read from here.
 */
export const siteConfig = {
  name: "Dr. Naik\'s Shubh Smile Multispeciality Dental Clinic",
  logoWord: 'DR. NAIK’S',
  logoSub: 'SHUBH SMILE',
  tagline: 'Modern dental care with a personal, patient-first approach.',
  message: 'Official clinic information for Dr. Naik\'s Shubh Smile Multispeciality Dental Clinic in Nashik.',
  footerTagline: 'Confident smiles, compassionate care.',
  siteUrl: 'https://subhdental.vercel.app',
  city: 'Nashik',
  region: 'Maharashtra',
  countryCode: 'IN',
  locationLabel: 'Shastri Nagar, Indira Nagar, Nashik, Maharashtra',
  phoneNumbers: [
    { label: 'Phone 1', display: '+91 74208 80118', e164: '+917420880118' },
    { label: 'Phone 2', display: '+91 84548 89474', e164: '+918454889474' }
  ],
  phoneDisplay: '+91 74208 80118',
  phoneE164: '+917420880118',
  secondaryPhoneDisplay: '+91 84548 89474',
  secondaryPhoneE164: '+918454889474',
  whatsappNumber: '917420880118',
  email: 'shubhsmiledental@gmail.com',
  address: 'Sundaram Appt, Besides Maruti Courier, Gajanan Maharaj Mandir Rd, Opp. Mahila Bank, Shastri Nagar, Indira Nagar, Nashik, Maharashtra 422009, India.',
  addressVerified: true,
  workingHours: [],
  mapEmbedUrl: 'https://www.google.com/maps?q=Sundaram%20Appt%2C%20Besides%20Maruti%20Courier%2C%20Gajanan%20Maharaj%20Mandir%20Rd%2C%20Opp.%20Mahila%20Bank%2C%20Shastri%20Nagar%2C%20Indira%20Nagar%2C%20Nashik%2C%20Maharashtra%20422009%2C%20India&output=embed',
  googleMapsUrl: 'https://g.co/kgs/1L2MUu',
  instagramUrl: 'https://www.instagram.com/shubhsmiledental/',
  instagramUsername: '@shubhsmiledental',
  instagramQrCode: '/instagram-qr-code.png',
  defaultWhatsAppMessage: 'Hello, I would like to inquire about a dental appointment at Dr. Naik\'s Shubh Smile Multispeciality Dental Clinic in Nashik.',
  aftercareWhatsAppMessage:
  'Hello, I would like clinical guidance regarding my post-treatment dental care at Dr. Naik\'s Shubh Smile Multispeciality Dental Clinic.',
  tourismWhatsAppMessage:
  'Hello, I am planning a visit to Nashik and would like to schedule a dental consultation at Dr. Naik\'s Shubh Smile Multispeciality Dental Clinic.',
  social: [
    { label: 'Instagram', href: 'https://www.instagram.com/shubhsmiledental/' }
  ]
};

/** Full navigation in the order requested — used by mobile menu and footer. */
export const mainNav: NavItem[] = [
  { label: 'Home', href: '/' },
  { label: 'Our Team', href: '/team' },
  { label: 'Why Choose Us', href: '/#why-us' },
  { label: 'Services', href: '/services' },
  { label: 'Testimonials', href: '/testimonials' },
  { label: 'Gallery', href: '/gallery' },
  { label: 'Blogs', href: '/blog' },
  { label: 'Post-Treatment Support', href: '/#aftercare' },
  { label: 'Contact Us', href: '/contact' }
];

/** Desktop header shows the most-used links inline; the rest sit under "More". */
export const desktopPrimaryNav: NavItem[] = [
  { label: 'Our Team', href: '/team' },
  { label: 'Why Choose Us', href: '/#why-us' },
  { label: 'Services', href: '/services' },
  { label: 'Gallery', href: '/gallery' },
  { label: 'Blogs', href: '/blog' },
  { label: 'Contact Us', href: '/contact' }
];

export const desktopMoreNav: NavItem[] = [
  { label: 'Home', href: '/' },
  { label: 'Testimonials', href: '/testimonials' },
  { label: 'Post-Treatment Support', href: '/#aftercare' },
  { label: 'Visiting Nashik', href: '/#visiting-nashik' },
  { label: 'All Treatments', href: '/services' }
];