import { images } from './images';
import type { LocationPage } from '../types/content';

/**
 * Location pages. Only publish neighbourhood pages that reflect the clinic’s
 * genuine service area. "service-area" pages must not imply a physical branch.
 */
export const locations: LocationPage[] = [
  {
    slug: 'dental-clinic-in-nashik',
    areaName: 'Nashik',
    kind: 'clinic',
    h1: 'Dr. Naik\'s Shubh Smile Multispeciality Dental Clinic in Nashik',
    seoTitle: 'Dental Clinic in Nashik | Dr. Naik\'s Shubh Smile Multispeciality Dental Clinic',
    metaDescription:
      'Dr. Naik\'s Shubh Smile Multispeciality Dental Clinic is located at Sundaram Appt, Shastri Nagar, Indira Nagar, Nashik, Maharashtra 422009, India.',
    eyebrow: 'Official clinic in Nashik',
    intro: [
      'Dr. Naik\'s Shubh Smile Multispeciality Dental Clinic provides thoughtful, patient-first dental care in Nashik with attention to comfort, clarity, and long-term oral health.',
      'The clinic is conveniently located at Sundaram Appt, Besides Maruti Courier, Gajanan Maharaj Mandir Rd, Opp. Mahila Bank, Shastri Nagar, Indira Nagar, Nashik, Maharashtra 422009, India.'
    ],
    areaNote: 'Clinic address: Sundaram Appt, Besides Maruti Courier, Gajanan Maharaj Mandir Rd, Opp. Mahila Bank, Shastri Nagar, Indira Nagar, Nashik, Maharashtra 422009, India.',
    highlights: [
      { title: 'Convenient location', text: 'Easily accessible in Indira Nagar, Nashik.' },
      { title: 'Clear communication', text: 'Treatment guidance and options explained in a patient-friendly way.' },
      { title: 'Multispeciality care', text: 'Personalized dental treatment tailored to your oral health needs.' }
    ],
    treatments: ['general-dentistry', 'teeth-cleaning', 'dental-implants', 'cosmetic-dentistry', 'root-canal-treatment', 'pediatric-dentistry'],
    faqs: [
      {
        question: 'Where is Dr. Naik\'s Shubh Smile Multispeciality Dental Clinic located?',
        answer: 'The clinic is located at Sundaram Appt, Besides Maruti Courier, Gajanan Maharaj Mandir Rd, Opp. Mahila Bank, Shastri Nagar, Indira Nagar, Nashik, Maharashtra 422009, India.'
      },
      {
        question: 'How can I contact the clinic?',
        answer: 'You can call +91 74208 80118 or +91 84548 89474, or email shubhsmiledental@gmail.com.'
      },
      {
        question: 'Where can I get directions?',
        answer: 'Use the official Google Maps link: https://g.co/kgs/1L2MUu.'
      }
    ],
    image: images.reception,
    imageAlt: 'Warm and calm dental clinic reception at Dr. Naik\'s Shubh Smile Multispeciality Dental Clinic'
  },
  {
    slug: 'dentist-in-indira-nagar-nashik',
    areaName: 'Indira Nagar',
    kind: 'service-area',
    h1: 'Dental Care for Patients Near Indira Nagar, Nashik',
    seoTitle: 'Dentist Near Indira Nagar, Nashik | Dr. Naik\'s Shubh Smile Multispeciality Dental Clinic',
    metaDescription:
      'Patients from Indira Nagar, Nashik can visit Dr. Naik\'s Shubh Smile Multispeciality Dental Clinic for general, cosmetic and restorative dental care.',
    eyebrow: 'Serving Indira Nagar',
    intro: [
      'Patients from Indira Nagar, Nashik are welcome at Dr. Naik\'s Shubh Smile Multispeciality Dental Clinic for routine check-ups, restorative care and smile consultations.',
      'The clinic is located in Shastri Nagar, Indira Nagar, Nashik, Maharashtra 422009, India, making it easy for local patients to access trusted dental care.'
    ],
    areaNote: 'Clinic address: Sundaram Appt, Besides Maruti Courier, Gajanan Maharaj Mandir Rd, Opp. Mahila Bank, Shastri Nagar, Indira Nagar, Nashik, Maharashtra 422009, India.',
    highlights: [
      { title: 'Accessible care', text: 'Conveniently located for patients in Indira Nagar.' },
      { title: 'Trusted guidance', text: 'Clear explanations and personalized treatment planning.' },
      { title: 'Comprehensive dental services', text: 'General, cosmetic and restorative dental care in one place.' }
    ],
    treatments: ['general-dentistry', 'root-canal-treatment', 'smile-makeover', 'dental-implants'],
    faqs: [
      {
        question: 'Is there a clinic in Indira Nagar?',
        answer: 'Yes. Dr. Naik\'s Shubh Smile Multispeciality Dental Clinic is at Sundaram Appt, Besides Maruti Courier, Gajanan Maharaj Mandir Rd, Opp. Mahila Bank, Shastri Nagar, Indira Nagar, Nashik, Maharashtra 422009, India.'
      },
      {
        question: 'How do I contact the clinic?',
        answer: 'Call +91 74208 80118 or +91 84548 89474, or email shubhsmiledental@gmail.com.'
      },
      {
        question: 'Can I get directions to the clinic?',
        answer: 'Yes. Use the official Google Maps link: https://g.co/kgs/1L2MUu.'
      }
    ],
    image: images.treatmentRoom,
    imageAlt: 'Treatment room at Dr. Naik\'s Shubh Smile Multispeciality Dental Clinic'
  },
  {
    slug: 'dental-implants-in-nashik',
    areaName: 'Nashik',
    kind: 'treatment',
    h1: 'Dental Implant Consultations in Nashik',
    seoTitle: 'Dental Implants in Nashik | Dr. Naik\'s Shubh Smile Multispeciality Dental Clinic',
    metaDescription:
      'Learn about dental implant consultations at Dr. Naik\'s Shubh Smile Multispeciality Dental Clinic in Nashik, Maharashtra.',
    eyebrow: 'Implant care in Nashik',
    intro: [
      'Dental implant consultations at Dr. Naik\'s Shubh Smile Multispeciality Dental Clinic help patients explore implant options with clear explanations, clinical assessment, and care planning.',
      'The clinic is located in Shastri Nagar, Indira Nagar, Nashik, Maharashtra 422009, India, and can guide you through the dental implant process.'
    ],
    areaNote: 'Clinic address: Sundaram Appt, Besides Maruti Courier, Gajanan Maharaj Mandir Rd, Opp. Mahila Bank, Shastri Nagar, Indira Nagar, Nashik, Maharashtra 422009, India.',
    highlights: [
      { title: 'Detailed assessment', text: 'Review your oral health and suitability for implant treatment.' },
      { title: 'Clear treatment guidance', text: 'Understand the stages, timeline and recommendations before treatment begins.' },
      { title: 'Personalized planning', text: 'Discuss options based on your specific dental needs.' }
    ],
    treatments: ['dental-implants', 'dental-crowns', 'dentures', 'root-canal-treatment'],
    faqs: [
      {
        question: 'How can I book a dental implant consultation?',
        answer: 'Call +91 74208 80118 or +91 84548 89474, or email shubhsmiledental@gmail.com.'
      },
      {
        question: 'Where is the clinic located?',
        answer: 'Dr. Naik\'s Shubh Smile Multispeciality Dental Clinic is at Sundaram Appt, Besides Maruti Courier, Gajanan Maharaj Mandir Rd, Opp. Mahila Bank, Shastri Nagar, Indira Nagar, Nashik, Maharashtra 422009, India.'
      },
      {
        question: 'Can I get directions online?',
        answer: 'Yes. Use the official Google Maps link: https://g.co/kgs/1L2MUu.'
      }
    ],
    image: images.implantModel,
    imageAlt: 'Dental implant model at the clinic'
  },
  {
    slug: 'cosmetic-dentist-in-nashik',
    areaName: 'Nashik',
    kind: 'treatment',
    h1: 'Cosmetic Dentistry in Nashik, Thoughtfully Planned',
    seoTitle: 'Cosmetic Dentist in Nashik | Dr. Naik\'s Shubh Smile Multispeciality Dental Clinic',
    metaDescription:
      'Explore cosmetic dentistry consultations at Dr. Naik\'s Shubh Smile Multispeciality Dental Clinic in Nashik, Maharashtra.',
    eyebrow: 'Cosmetic care in Nashik',
    intro: [
      'Dr. Naik\'s Shubh Smile Multispeciality Dental Clinic offers cosmetic dentistry consultations for patients who want brighter, more balanced smiles with a natural result.',
      'The clinic is conveniently located in Indira Nagar, Nashik, and helps patients explore personalized treatment options based on their goals and oral health.'
    ],
    areaNote: 'Clinic address: Sundaram Appt, Besides Maruti Courier, Gajanan Maharaj Mandir Rd, Opp. Mahila Bank, Shastri Nagar, Indira Nagar, Nashik, Maharashtra 422009, India.',
    highlights: [
      { title: 'Smile-focused planning', text: 'Discuss veneers, whitening and smile enhancement options.' },
      { title: 'Personalized results', text: 'Treatment is planned around your smile goals and oral health.' },
      { title: 'Comfort-first care', text: 'A respectful, clear approach to cosmetic dental treatment.' }
    ],
    treatments: ['cosmetic-dentistry', 'teeth-whitening', 'dental-veneers', 'smile-makeover', 'clear-aligners'],
    faqs: [
      {
        question: 'How do I book a cosmetic dental consultation?',
        answer: 'Call +91 74208 80118 or +91 84548 89474, or email shubhsmiledental@gmail.com.'
      },
      {
        question: 'Where is the clinic?',
        answer: 'Dr. Naik\'s Shubh Smile Multispeciality Dental Clinic is at Sundaram Appt, Besides Maruti Courier, Gajanan Maharaj Mandir Rd, Opp. Mahila Bank, Shastri Nagar, Indira Nagar, Nashik, Maharashtra 422009, India.'
      },
      {
        question: 'Can I get directions?',
        answer: 'Yes. Visit the official Google Maps location: https://g.co/kgs/1L2MUu.'
      }
    ],
    image: images.smileCloseup,
    imageAlt: 'Smile consultation at the clinic'
  }
];