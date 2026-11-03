import { images } from '../images';
import type { Service } from '../../types/content';

export const cosmeticDentistry: Service = {
  slug: 'cosmetic-dentistry',
  name: 'Cosmetic Dentistry',
  category: 'cosmetic',
  short: 'Treatment options for people interested in improving the appearance of their smile.',
  image: images.whiteningSmile,
  imageAlt: 'Relaxed man laughing with a natural, healthy smile',
  seoTitle: 'Cosmetic Dentistry in Nashik | Dr. Naik\'s Shubh Smile Multispeciality Dental Clinic',
  metaDescription:
  'Explore cosmetic dentistry options in Nashik — whitening, veneers, bonding and more — with honest, personalized advice at Dr. Naik\'s Shubh Smile Multispeciality Dental Clinic.',
  h1: 'Cosmetic Dentistry in Nashik',
  intro: [
  'Cosmetic dentistry focuses on how your smile looks — its colour, shape, alignment and balance. For some people that means a subtle refresh; for others, addressing something that has bothered them for years.',
  'Good cosmetic care always starts with healthy teeth and gums, and with listening carefully to what you would actually like to change.'],

  reasons: [
  'Discoloured or stained teeth',
  'Chipped, worn or uneven edges',
  'Small gaps between teeth',
  'Teeth that look too short or irregular in shape',
  'Wanting to feel more confident when smiling in photos'],

  benefits: [
  'Options ranging from conservative to more involved',
  'Treatment planned around your facial features and preferences',
  'May help you feel more comfortable with your smile',
  'A clear discussion of what is realistic for your teeth'],

  process: [
  { title: 'Listening', text: 'We start by understanding what you like about your smile and what you would like to change.' },
  { title: 'Health check', text: 'Your teeth and gums are assessed, as any underlying concerns usually come first.' },
  { title: 'Options', text: 'Suitable treatments are explained with their benefits, limitations and costs.' },
  { title: 'Your decision', text: 'You choose what feels right, at your own pace, with no pressure to proceed.' }],

  suitability:
  'What can be achieved depends on your teeth, gums, bite and expectations. Your dentist will explain realistic options after an examination.',
  faqs: [
  {
    question: 'Is cosmetic dentistry only about appearance?',
    answer:
    'Its main focus is appearance, but some treatments — such as repairing chipped teeth — may also improve function. Your dentist will explain both aspects.'
  },
  {
    question: 'Will my smile look natural?',
    answer:
    'A natural-looking result is usually the goal. Your dentist will discuss shade, shape and proportion with you during planning.'
  },
  {
    question: 'Can I combine more than one treatment?',
    answer:
    'Yes, some people combine treatments such as whitening and bonding. A smile makeover consultation can help you understand possible combinations.'
  }],

  related: ['teeth-whitening', 'dental-veneers', 'smile-makeover']
};

export const teethWhitening: Service = {
  slug: 'teeth-whitening',
  name: 'Teeth Whitening',
  category: 'cosmetic',
  short: 'Information about suitable professional whitening options, supervised by your dentist.',
  image: images.smileCloseup,
  imageAlt: 'Close-up of a natural, healthy smile in soft warm light',
  seoTitle: 'Professional Teeth Whitening in Nashik | Dr. Naik\'s Shubh Smile Multispeciality Dental Clinic',
  metaDescription:
  'Learn about professional teeth whitening options in Nashik, who may be suitable and what to expect. Dr. Naik\'s Shubh Smile Multispeciality Dental Clinic.',
  h1: 'Professional Teeth Whitening in Nashik',
  intro: [
  'Over time, tea, coffee, certain foods and natural ageing can make teeth look darker or more yellow. Professional whitening uses dentist-supervised products to lighten the natural shade of your teeth.',
  'Before whitening, your dentist checks that your teeth and gums are healthy and talks you through what kind of change is realistic for you.'],

  reasons: [
  'Teeth that have gradually darkened over time',
  'Staining from tea, coffee or other foods',
  'Preparing for a wedding or special occasion',
  'Wanting a brighter look without changing tooth shape'],

  benefits: [
  'A brighter-looking smile, with results that vary between people',
  'Professional supervision and guidance on sensitivity',
  'A shade goal discussed and agreed with you',
  'A non-invasive option that does not reshape teeth'],

  process: [
  { title: 'Assessment', text: 'Your dentist checks for decay, gum issues or restorations that may affect whitening.' },
  { title: 'Shade record', text: 'Your current shade is noted so changes can be compared over time.' },
  { title: 'Whitening', text: 'In-clinic or dentist-supervised home whitening is carried out, depending on what suits you.' },
  { title: 'Maintenance advice', text: 'You receive tips to help maintain your result and manage any sensitivity.' }],

  suitability:
  'Whitening does not change the colour of crowns, veneers or fillings, and results vary. Your dentist will confirm whether it is appropriate for you.',
  faqs: [
  {
    question: 'Is whitening permanent?',
    answer:
    'No. Results fade gradually depending on diet and habits. Your dentist can advise on maintenance and touch-up options.'
  },
  {
    question: 'Will whitening make my teeth sensitive?',
    answer:
    'Some people experience temporary sensitivity. Your dentist will explain how to reduce it and what to do if it occurs.'
  },
  {
    question: 'Can I use over-the-counter whitening products?',
    answer:
    'It is best to speak with your dentist first. Professional supervision helps ensure products are used safely and appropriately for your teeth.'
  }],

  related: ['cosmetic-dentistry', 'teeth-cleaning', 'dental-veneers']
};

export const dentalVeneers: Service = {
  slug: 'dental-veneers',
  name: 'Dental Veneers',
  category: 'cosmetic',
  short: 'Information about veneers, suitability, and personalized treatment planning.',
  image: images.veneers,
  imageAlt: 'Thin porcelain veneer shells arranged in an arc on an ivory surface',
  seoTitle: 'Dental Veneers in Nashik | Porcelain & Composite | Dr. Naik\'s Shubh Smile Multispeciality Dental Clinic',
  metaDescription:
  'Understand dental veneers — porcelain and composite options, suitability and the planning process — at Dr. Naik\'s Shubh Smile Multispeciality Dental Clinic, Nashik.',
  h1: 'Dental Veneers in Nashik',
  intro: [
  'Veneers are thin, custom-made layers bonded to the front surfaces of teeth. They can change the colour, shape or proportion of teeth that are chipped, worn, discoloured or uneven.',
  'Because veneers are a significant decision — and porcelain veneers usually involve reshaping some natural enamel — careful planning and an honest conversation come first.'],

  reasons: [
  'Teeth that remain discoloured after whitening',
  'Chipped, worn or slightly uneven front teeth',
  'Small gaps you would like to close',
  'Teeth that look too small or irregular'],

  benefits: [
  'Can change colour and shape at the same time',
  'Designed to suit your face and smile line',
  'Porcelain is stain-resistant compared with natural enamel',
  'A preview stage helps you visualise the plan'],

  process: [
  { title: 'Consultation', text: 'We discuss your goals and check that your teeth and gums are healthy enough for veneers.' },
  { title: 'Planning & preview', text: 'Photographs and models may be used to plan the shape, length and shade with you.' },
  { title: 'Preparation', text: 'Where needed, a thin layer of enamel is reshaped and impressions or scans are taken.' },
  { title: 'Placement', text: 'Your veneers are checked for fit and appearance, then bonded into place.' }],

  suitability:
  'Veneers are not suitable for everyone — for example, where there is active decay, gum disease or heavy teeth grinding. An examination is essential.',
  faqs: [
  {
    question: 'Are veneers reversible?',
    answer:
    'Porcelain veneers usually involve removing some enamel, so they are generally considered irreversible. Composite veneers may need less preparation. Your dentist will explain the difference.'
  },
  {
    question: 'How long do veneers last?',
    answer:
    'With good care they can last many years, but they may eventually need repair or replacement. Longevity depends on the material, your bite and your habits.'
  },
  {
    question: 'Porcelain or composite — which is better?',
    answer:
    'Each has advantages. Porcelain tends to be more stain-resistant; composite is often more conservative and easier to repair. The right choice depends on your teeth and goals.'
  }],

  related: ['cosmetic-dentistry', 'smile-makeover', 'teeth-whitening']
};

export const smileMakeover: Service = {
  slug: 'smile-makeover',
  name: 'Smile Makeover Consultation',
  category: 'cosmetic',
  short: 'A personalized discussion of possible treatments for your smile goals.',
  image: images.shadeGuide,
  imageAlt: 'Dentist holding a porcelain shade guide during a smile consultation',
  seoTitle: 'Smile Makeover Consultation in Nashik | Dr. Naik\'s Shubh Smile Multispeciality Dental Clinic',
  metaDescription:
  'A personalized smile makeover consultation in Nashik to explore possible treatment combinations, timelines and costs. Dr. Naik\'s Shubh Smile Multispeciality Dental Clinic.',
  h1: 'Smile Makeover Consultation in Nashik',
  intro: [
  'A smile makeover isn’t a single treatment — it is a thoughtful plan that may combine several options, such as whitening, alignment, bonding, veneers or restorations, to help you move toward the smile you have in mind.',
  'The consultation is a conversation. You share what you would like, your dentist explains what is possible, and together you decide what — if anything — feels right.'],

  reasons: [
  'Several things about your smile you would like to change',
  'Unsure which treatment is right for you',
  'Wanting to understand costs and timelines before committing',
  'Planning ahead for a life event'],

  benefits: [
  'A complete picture of your options in one conversation',
  'Treatments sequenced in a sensible order',
  'Phased plans that can fit your budget and schedule',
  'Clear expectations before any treatment begins'],

  process: [
  { title: 'Your goals', text: 'We talk about what you like, what you would change and how you want your smile to feel.' },
  { title: 'Assessment', text: 'Your dentist examines your teeth, gums and bite, and may take photographs for planning.' },
  { title: 'Proposal', text: 'You receive suitable options, possible phases, timelines and an outline of costs.' },
  { title: 'Your pace', text: 'Take time to consider. There is no obligation to proceed with any treatment.' }],

  suitability:
  'A makeover plan is always individual. Recommendations depend on your oral health, anatomy and expectations, confirmed through examination.',
  faqs: [
  {
    question: 'Do I have to commit to treatment after the consultation?',
    answer: 'No. The consultation is for understanding your options. You are welcome to take time to think it over.'
  },
  {
    question: 'Can treatment be done in stages?',
    answer: 'Often, yes. Many plans are phased so you can spread treatment over time. Your dentist will suggest a sensible order.'
  },
  {
    question: 'Will I see what my smile might look like?',
    answer:
    'Depending on the treatment, your dentist may use photographs, models or a trial preview to help you visualise the plan.'
  }],

  related: ['cosmetic-dentistry', 'dental-veneers', 'clear-aligners']
};