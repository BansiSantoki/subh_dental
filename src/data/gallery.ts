import { images } from './images';
import type { GalleryImage } from '../types/content';

/** Replace with photographs of the actual studio. Never use identifiable patient photos without consent. */
export const galleryImages: GalleryImage[] = [
  {
    id: 'g1',
    src: images.reception,
    alt: 'Reception lounge with oak desk, forest green chairs and an olive tree',
    caption: 'Reception & lounge',
    category: 'Clinic & Lounge',
    aspect: 'landscape'
  },
  {
    id: 'g2',
    src: images.treatmentRoom,
    alt: 'Treatment room with a cream dental chair and sage accent wall',
    caption: 'Treatment room',
    category: 'Treatment Operatory',
    aspect: 'portrait'
  },
  {
    id: 'g3',
    src: images.dentalTools,
    alt: 'Sterilized instruments laid out on sage linen',
    caption: 'Sterilized instruments',
    category: 'Equipment',
    aspect: 'square'
  },
  {
    id: 'g4',
    src: images.interiorDetail,
    alt: 'Curved plaster wall with an oak shelf, ceramics and a brass lamp',
    caption: 'Interior details',
    category: 'Clinic & Lounge',
    aspect: 'portrait'
  },
  {
    id: 'g5',
    src: images.consultation,
    alt: 'Dentist explaining a treatment plan on a tablet',
    caption: 'Consultation',
    category: 'Consultation & Team',
    aspect: 'landscape'
  },
  {
    id: 'g6',
    src: images.doctorFeatured,
    alt: 'Dentist standing in a softly lit treatment room',
    caption: 'Our team',
    category: 'Consultation & Team',
    aspect: 'portrait'
  },
  {
    id: 'g7',
    src: images.implantModel,
    alt: 'Educational dental implant model',
    caption: 'Patient education models',
    category: 'Equipment',
    aspect: 'square'
  },
  {
    id: 'g8',
    src: images.aligners,
    alt: 'Clear aligners on a sage stone surface',
    caption: 'Clear aligner care',
    category: 'Smile Results',
    aspect: 'square'
  }
];