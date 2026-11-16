import type { Doctor } from '../types/content';

export const doctors: Doctor[] = [
  {
    id: 'lead-dentist',
    name: 'Dr. Naik',
    qualification: 'Lead Dental Surgeon & Implantologist',
    specialty: 'Smile Design, Implants & Restorative Dentistry',
    bio: 'Dr. Naik leads Dr. Naik\'s Shubh Smile Multispeciality Dental Clinic with an unhurried, patient-centered approach. Committed to gentle dentistry, evidence-based practices, and meticulous clinical precision for patients across Nashik.',
    portrait: '/assets/images/dentist-operatory-procedure.jpg',
    portraitAlt: "Dr. Naik, Lead Dental Surgeon at Dr. Naik's Shubh Smile Multispeciality Dental Clinic in Nashik",
    featured: true,
    focusAreas: ['Preventive Care', 'Smile Makeovers', 'Dental Implants', 'Full-Mouth Rehabilitation']
  }
];
