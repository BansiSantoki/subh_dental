import { images } from './images';
import type { Doctor } from '../types/content';

/**
 * Doctor profiles — EDITABLE PLACEHOLDERS.
 * Replace with verified names, qualifications and biographies.
 * To add a doctor, append another object to this array.
 */
export const doctors: Doctor[] = [
{
  id: 'lead-dentist',
  name: 'Dr. [Doctor Name]',
  qualification: '[BDS / MDS / Relevant Qualification]',
  specialty: '[Dental Specialty]',
  bio: '[Professional Biography] — Add a short, verified introduction here: the dentist’s training, the areas of dentistry they focus on, and what they value most when caring for patients.',
  portrait: images.doctorFeatured,
  portraitAlt: 'Portrait of the lead dentist at Aurelia Dental Studio (placeholder)',
  featured: true,
  focusAreas: ['[Focus area]', '[Focus area]', '[Focus area]']
},
{
  id: 'associate-dentist-1',
  name: 'Dr. [Doctor Name]',
  qualification: '[BDS / MDS / Relevant Qualification]',
  specialty: '[Dental Specialty]',
  bio: '[Professional Biography] — A brief, verified introduction to this dentist.',
  portrait: images.doctorTwo,
  portraitAlt: 'Portrait of an associate dentist at Aurelia Dental Studio (placeholder)'
},
{
  id: 'associate-dentist-2',
  name: 'Dr. [Doctor Name]',
  qualification: '[BDS / MDS / Relevant Qualification]',
  specialty: '[Dental Specialty]',
  bio: '[Professional Biography] — A brief, verified introduction to this dentist.',
  portrait: images.doctorThree,
  portraitAlt: 'Portrait of an associate dentist at Aurelia Dental Studio (placeholder)'
}];