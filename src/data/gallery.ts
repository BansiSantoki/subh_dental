import { images } from './images';
import type { GalleryImage } from '../types/content';

/** Curated genuine clinic and professional dental photography library */
export const galleryImages: GalleryImage[] = [
  {
    id: 'g1',
    src: images.reception,
    alt: 'Main reception and patient lounge at Dr. Naik\'s Shubh Smile Multispeciality Dental Clinic, Nashik',
    caption: 'Clinic Reception & Lounge',
    category: 'Clinic & Lounge',
    aspect: 'landscape'
  },
  {
    id: 'g2',
    src: '/assets/images/indian-dental-operatory-clinic.jpg',
    alt: 'Clean, modern dental operatory room with blue dental chair and sterilization equipment at Shubh Smile Nashik',
    caption: 'Dental Operatory Suite',
    category: 'Treatment Operatory',
    aspect: 'portrait'
  },
  {
    id: 'g3',
    src: '/assets/images/dental-examination-probe.jpg',
    alt: 'Close-up examination of teeth with precision dental mirror and probe in sterile gloves',
    caption: 'Precision Dental Examination',
    category: 'Equipment',
    aspect: 'square'
  },
  {
    id: 'g4',
    src: images.receptionNeon,
    alt: 'Welcoming consultation and patient waiting area at Shubh Smile Clinic with neon logo',
    caption: 'Patient Waiting Lounge',
    category: 'Clinic & Lounge',
    aspect: 'portrait'
  },
  {
    id: 'g5',
    src: '/assets/images/indian-dentist-patient-treatment.jpg',
    alt: 'Indian dentist gently treating patient in dental chair with clinical illumination at Shubh Smile',
    caption: 'Indian Dentist Patient Care',
    category: 'Consultation & Team',
    aspect: 'portrait'
  },
  {
    id: 'g6',
    src: '/assets/images/dentist-operatory-procedure.jpg',
    alt: 'Dentist performing clinical procedure in operatory chair with dental unit and digital monitor',
    caption: 'Clinical Procedure in Chair',
    category: 'Consultation & Team',
    aspect: 'portrait'
  },
  {
    id: 'g7',
    src: '/assets/images/dental-treatment-collage.jpg',
    alt: 'Clinical collage displaying braces, crowns, implants, and restorative dental procedures',
    caption: 'Multispeciality Treatments',
    category: 'Equipment',
    aspect: 'square'
  },
  {
    id: 'g8',
    src: '/assets/images/tooth-extraction-procedure.jpg',
    alt: 'Anatomical educational illustration of gentle tooth extraction procedure with surgical forceps',
    caption: 'Tooth Extraction & Oral Surgery',
    category: 'Treatment Operatory',
    aspect: 'square'
  },
  {
    id: 'g9',
    src: images.shadeGuide,
    alt: 'Vita clinical tooth shade guide for customized aesthetic porcelain veneer matching',
    caption: 'Precision Shade Matching Guide',
    category: 'Equipment',
    aspect: 'landscape'
  }
];
