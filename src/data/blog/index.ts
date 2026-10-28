import { howOftenVisit, professionalCleaning, everydayHabits, childrensCare } from './everydayCarePosts';
import { implantsGuide, rootCanalGuide, smileConsultationGuide, whiteningQuestions } from './treatmentPosts';
import type { BlogPost } from '../../types/content';

/** Blog articles in display order (newest first). */
export const blogPosts: BlogPost[] = [
howOftenVisit,
professionalCleaning,
implantsGuide,
rootCanalGuide,
everydayHabits,
childrensCare,
smileConsultationGuide,
whiteningQuestions];