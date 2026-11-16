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
    src: images.treatmentRoom,
    alt: 'Modern, sterile dental operatory room with ergonomic dental chair and overhead light',
    caption: 'Advanced Treatment Operatory',
    category: 'Treatment Operatory',
    aspect: 'portrait'
  },
  {
    id: 'g3',
    src: images.dentalTools,
    alt: 'Hospital-grade autoclaved and sterilized dental instruments prepared on surgical tray',
    caption: 'Sterilized Clinical Instruments',
    category: 'Equipment',
    aspect: 'square'
  },
  {
    id: 'g4',
    src: images.receptionNeon,
    alt: 'Welcoming consultation and patient waiting area at Shubh Smile Clinic',
    caption: 'Patient Waiting Lounge',
    category: 'Clinic & Lounge',
    aspect: 'portrait'
  },
  {
    id: 'g5',
    src: images.consultation,
    alt: 'Dentist conducting detailed patient consultation and reviewing dental records',
    caption: 'Patient Consultation Area',
    category: 'Consultation & Team',
    aspect: 'landscape'
  },
  {
    id: 'g6',
    src: images.heroDental,
    alt: 'Spacious dental treatment suite with modern diagnostic and treatment technology',
    caption: 'Clinical Operatory Suite',
    category: 'Treatment Operatory',
    aspect: 'portrait'
  },
  {
    id: 'g7',
    src: images.implantModel,
    alt: 'Precision dental implant education model showing titanium root and custom crown',
    caption: 'Dental Implant Model',
    category: 'Equipment',
    aspect: 'square'
  },
  {
    id: 'g8',
    src: images.aligners,
    alt: 'Transparent orthodontic clear aligner trays in protective travel case',
    caption: 'Clear Orthodontic Aligners',
    category: 'Smile Results',
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
