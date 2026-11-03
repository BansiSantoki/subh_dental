import { images } from './images';
import type { Doctor } from '../types/content';

export const doctors: Doctor[] = [
  {
    id: 'lead-dentist',
    name: 'Dr. Naik',
    qualification: 'Lead Dentist, Shubh Smile Dental Clinic',
    specialty: 'Smile Design, Implants & Restorative Care',
    bio: 'Dr. Naik leads the clinic with a calm, patient-first approach focused on preventive care, smile restoration, and long-term oral health for families across Nashik.',
    portrait: images.doctorFeatured,
    portraitAlt: "Portrait of Dr. Naik at Dr. Naik\'s Shubh Smile Multispeciality Dental Clinic",
    featured: true,
    focusAreas: ['Preventive Care', 'Smile Design', 'Dental Implants']
  }
];