import { howOftenVisit, professionalCleaning, everydayHabits, childrensCare } from './everydayCarePosts';
import { implantsGuide, rootCanalGuide, smileConsultationGuide, whiteningQuestions, toothExtractionGuide } from './treatmentPosts';
import type { BlogPost } from '../../types/content';

/** Blog articles in display order (newest first). */
export const blogPosts: BlogPost[] = [
  howOftenVisit,
  professionalCleaning,
  implantsGuide,
  toothExtractionGuide,
  rootCanalGuide,
  everydayHabits,
  childrensCare,
  smileConsultationGuide,
  whiteningQuestions
];