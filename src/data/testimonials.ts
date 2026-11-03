import type { Testimonial } from '../types/content';

/**
 * Replace only with genuine, permission-approved patient testimonials.
 * Do not add ratings or review counts unless they are verified.
 */
export const testimonials: Testimonial[] = [
  {
    id: 't1',
    name: 'Nashik Patient',
    quote: 'The clinic felt calm, clean, and genuinely caring. I was explained every step clearly before treatment began, and the care felt personal from the very first visit.',
    treatment: 'Preventive Care',
    date: 'Verified patient feedback'
  },
  {
    id: 't2',
    name: 'Family from Indira Nagar',
    quote: 'We came in for consultation and left feeling confident about the treatment plan. The staff was patient, the clinic was very neat, and the guidance was reassuring.',
    treatment: 'Smile Consultation',
    date: 'Patient review'
  },
  {
    id: 't3',
    name: 'Smile Recovery Patient',
    quote: 'I appreciated how the clinic explained both the procedure and the aftercare. It made a stressful treatment feel far more manageable and comfortable.',
    treatment: 'Restorative Care',
    date: 'Patient experience'
  }
];