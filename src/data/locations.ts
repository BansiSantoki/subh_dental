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
  h1: 'A Thoughtful Dental Clinic in Nashik',
  seoTitle: 'Dental Clinic in Nashik | Aurelia Dental Studio',
  metaDescription:
  'Aurelia Dental Studio is a calm, modern dental clinic in Nashik, Maharashtra offering general, cosmetic and restorative dental care.',
  eyebrow: 'Our studio in Nashik',
  intro: [
  'Aurelia Dental Studio was created for people in Nashik who want dental care that feels personal, unhurried and clearly explained. From routine check-ups to more involved treatment, every visit begins with listening.',
  'Our studio is designed to feel calm the moment you walk in — warm materials, natural light and a team that takes time to answer your questions.'],

  areaNote: 'Studio address: [Add the verified clinic address in Nashik, Maharashtra]. Directions will be added once verified.',
  highlights: [
  { title: 'Care for the whole family', text: 'General, preventive and children’s dentistry under one roof.' },
  { title: 'Clear treatment planning', text: 'Options, steps and costs explained before anything begins.' },
  { title: 'A calm environment', text: 'A space designed to help nervous patients feel more at ease.' }],

  treatments: ['general-dentistry', 'teeth-cleaning', 'dental-implants', 'cosmetic-dentistry', 'root-canal-treatment', 'pediatric-dentistry'],
  faqs: [
  {
    question: 'Where is Aurelia Dental Studio located?',
    answer: 'The studio is in Nashik, Maharashtra. [Add the verified address and landmark directions here.]'
  },
  {
    question: 'Do I need an appointment?',
    answer: 'Booking ahead helps us give you unhurried time. Send an inquiry by WhatsApp or the contact form and the team will reply with available options.'
  },
  {
    question: 'What should I bring to my first visit?',
    answer: 'Please bring a list of any medications, previous dental records or X-rays if you have them, and any questions you would like to ask.'
  }],

  image: images.reception,
  imageAlt: 'Calm reception lounge at Aurelia Dental Studio'
},
{
  slug: 'dentist-in-college-road-nashik',
  areaName: 'College Road',
  kind: 'service-area',
  h1: 'Dental Care for Patients Near College Road, Nashik',
  seoTitle: 'Dentist Near College Road, Nashik | Aurelia Dental Studio',
  metaDescription:
  'Patients from College Road, Nashik are welcome at Aurelia Dental Studio for check-ups, cleaning, cosmetic and restorative dentistry.',
  eyebrow: 'Serving College Road',
  intro: [
  'College Road is one of Nashik’s busiest neighbourhoods — home to students, young professionals and families. Many people here look for dental care that fits around full schedules, without feeling rushed.',
  'Patients from College Road are welcome at our Nashik studio for routine care, preventive cleaning and treatment planning for cosmetic or restorative concerns.'],

  areaNote:
  'College Road is part of our service area. We do not have a separate branch on College Road — all appointments take place at our Nashik studio: [Add verified address].',
  highlights: [
  { title: 'Planned around busy days', text: 'Ask about appointment times that suit work or study schedules.' },
  { title: 'Preventive focus', text: 'Regular check-ups and cleaning help keep small concerns small.' },
  { title: 'Cosmetic consultations', text: 'Honest advice on whitening, veneers and aligners.' }],

  treatments: ['general-dentistry', 'teeth-cleaning', 'teeth-whitening', 'clear-aligners'],
  faqs: [
  {
    question: 'Is the clinic located on College Road?',
    answer: 'No. College Road is part of our service area. Appointments take place at our Nashik studio. [Add verified address and travel directions.]'
  },
  {
    question: 'How long does it take to reach the studio from College Road?',
    answer: '[Add verified approximate travel time once the clinic address is confirmed.]'
  },
  {
    question: 'Can I book a quick check-up?',
    answer: 'Yes, send an inquiry and the team will share suitable appointment options.'
  }],

  image: images.consultation,
  imageAlt: 'Dentist explaining a treatment plan to a patient'
},
{
  slug: 'dentist-in-gangapur-road-nashik',
  areaName: 'Gangapur Road',
  kind: 'service-area',
  h1: 'Dental Care for Families Near Gangapur Road, Nashik',
  seoTitle: 'Dentist Near Gangapur Road, Nashik | Aurelia Dental Studio',
  metaDescription:
  'Families from Gangapur Road, Nashik are welcome at Aurelia Dental Studio for gentle family, children’s and restorative dental care.',
  eyebrow: 'Serving Gangapur Road',
  intro: [
  'Gangapur Road has grown into one of Nashik’s most family-friendly residential areas. For families here, finding one calm dental practice for parents, children and grandparents can make life simpler.',
  'Our Nashik studio welcomes patients from Gangapur Road for family check-ups, children’s dentistry and restorative care such as crowns, dentures and implant consultations.'],

  areaNote:
  'Gangapur Road is part of our service area. We do not have a branch on Gangapur Road — appointments take place at our Nashik studio: [Add verified address].',
  highlights: [
  { title: 'Family-friendly visits', text: 'Care for children, parents and grandparents in one place.' },
  { title: 'Gentle children’s care', text: 'Unhurried, friendly visits that help children feel at ease.' },
  { title: 'Restorative options', text: 'Crowns, bridges, dentures and implant assessments.' }],

  treatments: ['pediatric-dentistry', 'general-dentistry', 'dentures', 'dental-crowns'],
  faqs: [
  {
    question: 'Is the clinic on Gangapur Road?',
    answer: 'No — Gangapur Road is part of our service area. All appointments are at our Nashik studio. [Add verified address.]'
  },
  {
    question: 'Can I book appointments for my whole family?',
    answer: 'Please mention it in your inquiry and the team will try to arrange convenient times.'
  },
  {
    question: 'Do you see young children?',
    answer: 'Yes. Pediatric visits are adapted to your child’s age and comfort.'
  }],

  image: images.kids,
  imageAlt: 'Child relaxed in a dental chair with a friendly dentist'
},
{
  slug: 'dentist-in-indira-nagar-nashik',
  areaName: 'Indira Nagar',
  kind: 'service-area',
  h1: 'Dental Care for Patients Near Indira Nagar, Nashik',
  seoTitle: 'Dentist Near Indira Nagar, Nashik | Aurelia Dental Studio',
  metaDescription:
  'Patients from Indira Nagar, Nashik are welcome at Aurelia Dental Studio for general, cosmetic and restorative dental care.',
  eyebrow: 'Serving Indira Nagar',
  intro: [
  'Indira Nagar is a well-established neighbourhood with a strong sense of community. Many residents value a long-term relationship with a dental team they trust.',
  'Patients from Indira Nagar are welcome at our Nashik studio for everything from routine care to root canal treatment and smile consultations.'],

  areaNote:
  'Indira Nagar is part of our service area. We do not operate a branch in Indira Nagar — appointments take place at our Nashik studio: [Add verified address].',
  highlights: [
  { title: 'Long-term relationships', text: 'Continuity of care with a team that knows your history.' },
  { title: 'Clear explanations', text: 'Every option explained before you decide.' },
  { title: 'Comfort-first approach', text: 'A calm environment for anxious patients.' }],

  treatments: ['general-dentistry', 'root-canal-treatment', 'smile-makeover', 'dental-implants'],
  faqs: [
  {
    question: 'Is there a clinic in Indira Nagar?',
    answer: 'No. Indira Nagar is part of our service area and appointments take place at our Nashik studio. [Add verified address.]'
  },
  {
    question: 'Can I transfer my dental records?',
    answer: 'Yes. Bring any previous records or X-rays you have — they help your dentist understand your history.'
  },
  {
    question: 'Do you help nervous patients?',
    answer: 'Yes. Let us know how you feel and we will take things at a pace that suits you.'
  }],

  image: images.treatmentRoom,
  imageAlt: 'Calm treatment room at the studio'
},
{
  slug: 'dental-implants-in-nashik',
  areaName: 'Nashik',
  kind: 'treatment',
  h1: 'Dental Implant Consultations in Nashik',
  seoTitle: 'Dental Implants in Nashik | Consultation & Assessment | Aurelia',
  metaDescription:
  'Considering dental implants in Nashik? Learn about the assessment process and book an implant consultation at Aurelia Dental Studio.',
  eyebrow: 'Implant care in Nashik',
  intro: [
  'For people in Nashik living with missing teeth, dental implants are one of several replacement options worth understanding. An implant consultation helps you learn whether they may suit you — and what the alternatives are.',
  'We take time to assess bone, gum and general health, explain the stages and timeline, and give you a clear outline of costs before you decide.'],

  areaNote: 'Implant consultations take place at our Nashik studio: [Add verified address].',
  highlights: [
  { title: 'Thorough assessment', text: 'Imaging and health history reviewed before any recommendation.' },
  { title: 'Honest alternatives', text: 'Bridges and dentures discussed alongside implants.' },
  { title: 'Staged, clear plans', text: 'A personalized timeline explained step by step.' }],

  treatments: ['dental-implants', 'dental-crowns', 'dentures', 'root-canal-treatment'],
  faqs: [
  {
    question: 'What happens at an implant consultation?',
    answer: 'Your dentist reviews your health history, examines the area and may recommend imaging to assess bone levels before discussing options.'
  },
  {
    question: 'Can implants be done in one visit?',
    answer: 'Implant treatment usually happens in stages with a healing period. Your dentist will explain a timeline based on your assessment.'
  },
  {
    question: 'Are implants the only option for missing teeth?',
    answer: 'No. Bridges and dentures are also options. Your dentist will explain the pros and cons of each for you.'
  }],

  image: images.implantModel,
  imageAlt: 'Dental implant model on an ivory surface'
},
{
  slug: 'cosmetic-dentist-in-nashik',
  areaName: 'Nashik',
  kind: 'treatment',
  h1: 'Cosmetic Dentistry in Nashik, Thoughtfully Planned',
  seoTitle: 'Cosmetic Dentist in Nashik | Whitening, Veneers & Smile Design',
  metaDescription:
  'Explore cosmetic dentistry in Nashik — whitening, veneers, aligners and smile makeover consultations — at Aurelia Dental Studio.',
  eyebrow: 'Cosmetic care in Nashik',
  intro: [
  'Cosmetic dentistry is personal. Some people in Nashik want a subtle brightening before a wedding; others want to address chipped or uneven teeth that have bothered them for years.',
  'Whatever brings you in, we start with your goals and your oral health — then explain the realistic, suitable options so you can decide with confidence.'],

  areaNote: 'Cosmetic consultations take place at our Nashik studio: [Add verified address].',
  highlights: [
  { title: 'Natural-looking goals', text: 'Plans designed around your face, smile and preferences.' },
  { title: 'Health first', text: 'Underlying concerns are addressed before cosmetic work.' },
  { title: 'No pressure', text: 'Take time to consider your options after consultation.' }],

  treatments: ['cosmetic-dentistry', 'teeth-whitening', 'dental-veneers', 'smile-makeover', 'clear-aligners'],
  faqs: [
  {
    question: 'How do I know which cosmetic treatment is right for me?',
    answer: 'A smile consultation helps. Your dentist examines your teeth, listens to your goals and explains suitable options.'
  },
  {
    question: 'Will the result look natural?',
    answer: 'A natural-looking result is usually the aim. Shade, shape and proportion are discussed during planning.'
  },
  {
    question: 'Can I see costs before deciding?',
    answer: 'Yes. You receive an outline of options and costs before any treatment begins.'
  }],

  image: images.smileCloseup,
  imageAlt: 'Natural, healthy smile in soft warm light'
}];