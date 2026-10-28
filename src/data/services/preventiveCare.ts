import { images } from '../images';
import type { Service } from '../../types/content';

export const generalDentistry: Service = {
  slug: 'general-dentistry',
  name: 'General Dentistry',
  category: 'everyday',
  short: 'Routine dental examinations, preventive guidance, and care for common dental concerns.',
  image: images.consultation,
  imageAlt: 'Dentist calmly explaining a check-up to a patient in a bright clinic room',
  seoTitle: 'General Dentistry & Dental Check-ups in Nashik | Aurelia Dental Studio',
  metaDescription:
  'Routine dental examinations, preventive guidance and care for common dental concerns at Aurelia Dental Studio in Nashik, Maharashtra.',
  h1: 'General Dentistry in Nashik',
  intro: [
  'General dentistry is the everyday foundation of a healthy mouth. A routine visit gives your dentist the chance to examine your teeth and gums, notice small changes early, and talk with you about habits that support long-term oral health.',
  'Whether you have a specific concern or simply haven’t seen a dentist in a while, a general consultation is a calm, low-pressure place to start.'],

  reasons: [
  'It has been a while since your last dental check-up',
  'You have noticed sensitivity, discomfort, or bleeding gums',
  'You want a clear picture of your current oral health',
  'You would like guidance on brushing, flossing, or diet',
  'An older filling or dental work feels different than before'],

  benefits: [
  'Changes in teeth and gums may be noticed at an earlier stage',
  'A clearer understanding of your oral health and any recommended next steps',
  'Preventive advice tailored to your daily routine',
  'A dental record that helps guide future visits'],

  process: [
  { title: 'Conversation', text: 'We ask about your medical history, any concerns, and what you would like from the visit.' },
  { title: 'Examination', text: 'Your dentist examines your teeth, gums and bite. X-rays are suggested only when clinically useful.' },
  { title: 'Discussion', text: 'Findings are explained in plain language, with any recommended treatment and its options outlined.' },
  { title: 'Prevention plan', text: 'You leave with practical guidance and, if needed, a suggested timeline for follow-up care.' }],

  suitability:
  'The frequency of check-ups and any treatment recommended depend on your individual examination and oral health history.',
  faqs: [
  {
    question: 'How often should I have a dental check-up?',
    answer:
    'Many people are advised to visit about every six months, but the right interval depends on your oral health. Your dentist will suggest a schedule after examining you.'
  },
  {
    question: 'Will I need X-rays at every visit?',
    answer:
    'Not necessarily. X-rays are recommended only when they help your dentist assess something that can’t be seen during a visual examination.'
  },
  {
    question: 'Can my family visit on the same day?',
    answer: 'Please mention it when you get in touch and the team will try to arrange visits that work for your family.'
  }],

  related: ['teeth-cleaning', 'pediatric-dentistry', 'root-canal-treatment']
};

export const teethCleaning: Service = {
  slug: 'teeth-cleaning',
  name: 'Dental Cleaning and Preventive Care',
  category: 'everyday',
  short: 'Professional cleaning and personalized oral hygiene guidance for healthier gums.',
  image: images.dentalTools,
  imageAlt: 'Sterilized dental cleaning instruments arranged on a sage linen cloth',
  seoTitle: 'Professional Teeth Cleaning in Nashik | Aurelia Dental Studio',
  metaDescription:
  'Professional dental cleaning, scaling and polishing with personalized hygiene guidance at Aurelia Dental Studio, Nashik.',
  h1: 'Professional Teeth Cleaning in Nashik',
  intro: [
  'Even with careful brushing, plaque can harden into tartar in places a toothbrush can’t reach. A professional cleaning removes these deposits and gives your gums a fresh start.',
  'It is also a valuable moment to review your home routine — the small adjustments that make everyday brushing and flossing more effective.'],

  reasons: [
  'Gums that bleed when brushing or flossing',
  'Visible tartar build-up along the gumline',
  'Surface stains from tea, coffee or tobacco',
  'Persistent bad breath',
  'Maintaining oral health between check-ups'],

  benefits: [
  'Removal of plaque and tartar that brushing alone may miss',
  'Support for healthier-feeling gums',
  'A smoother, cleaner feel to your teeth',
  'Personal guidance to make your routine more effective'],

  process: [
  { title: 'Gum assessment', text: 'Your gums are checked so the cleaning can be adapted to their condition.' },
  { title: 'Scaling', text: 'Gentle instruments remove tartar from tooth surfaces and along the gumline.' },
  { title: 'Polishing', text: 'Teeth are polished to remove surface stains and leave a smooth finish.' },
  { title: 'Home-care guidance', text: 'You receive practical tips on brushing technique, flossing and helpful products.' }],

  suitability:
  'If your gums need more than a routine clean, your dentist will explain why and discuss the appropriate next steps.',
  faqs: [
  {
    question: 'Does a professional cleaning hurt?',
    answer:
    'Most people feel only mild pressure or vibration. If you have sensitive teeth or gums, let your dentist know so they can adjust their approach.'
  },
  {
    question: 'Will cleaning make my teeth whiter?',
    answer:
    'Cleaning can remove surface stains, so teeth may look brighter, but it doesn’t change the natural shade of your teeth. Whitening is a separate treatment.'
  },
  {
    question: 'How often should I have my teeth cleaned?',
    answer: 'This varies from person to person. Your dentist will recommend a suitable interval based on your gum health.'
  }],

  related: ['general-dentistry', 'teeth-whitening', 'pediatric-dentistry']
};

export const rootCanal: Service = {
  slug: 'root-canal-treatment',
  name: 'Root Canal Treatment',
  category: 'everyday',
  short: 'Treatment intended to address problems affecting the dental pulp inside a tooth.',
  image: images.doctorTwo,
  imageAlt: 'Calm, friendly dentist ready to explain root canal treatment',
  seoTitle: 'Root Canal Treatment in Nashik | Aurelia Dental Studio',
  metaDescription:
  'Understand root canal treatment — when it may be recommended, what the steps involve and how to prepare. Aurelia Dental Studio, Nashik.',
  h1: 'Root Canal Treatment in Nashik',
  intro: [
  'Inside every tooth is a soft core called the pulp, which contains nerves and blood vessels. When the pulp becomes inflamed or infected — often due to deep decay, a crack or an injury — root canal treatment may be recommended to help save the natural tooth.',
  'The idea of a root canal worries many people. Understanding what actually happens, step by step, often makes it feel far more manageable.'],

  reasons: [
  'Lingering sensitivity to hot or cold',
  'Ongoing toothache or pain when biting',
  'Swelling or tenderness in the gum near a tooth',
  'A tooth that has darkened after an injury',
  'Deep decay identified during an examination'],

  benefits: [
  'May allow you to keep your natural tooth',
  'Aims to address the source of pain or infection',
  'Helps restore normal biting and chewing',
  'Often a more conservative option than extraction'],

  process: [
  { title: 'Assessment', text: 'Your dentist examines the tooth and usually takes an X-ray to understand the problem.' },
  { title: 'Cleaning the canals', text: 'Under local anaesthetic, the affected pulp is removed and the canals are carefully cleaned.' },
  { title: 'Sealing', text: 'The canals are filled and sealed to help prevent further infection.' },
  { title: 'Restoration', text: 'The tooth is restored with a filling or, often for back teeth, a crown for added strength.' }],

  suitability:
  'Not every painful tooth needs a root canal, and not every tooth can be saved. Your dentist will explain the options after examining it.',
  faqs: [
  {
    question: 'Is root canal treatment painful?',
    answer:
    'The procedure is carried out under local anaesthetic, so most people feel pressure rather than pain. Some tenderness afterwards is common and your dentist will explain how to manage it.'
  },
  {
    question: 'How many visits will it take?',
    answer: 'It depends on the tooth and its condition. Some treatments are completed in one visit, while others need two or more.'
  },
  {
    question: 'Will I need a crown afterwards?',
    answer:
    'Back teeth often benefit from a crown after root canal treatment because they handle strong biting forces. Your dentist will advise what suits your tooth.'
  }],

  related: ['dental-crowns', 'general-dentistry', 'dental-implants']
};

export const pediatricDentistry: Service = {
  slug: 'pediatric-dentistry',
  name: 'Pediatric Dentistry',
  category: 'everyday',
  short: 'Gentle, age-appropriate dental care that helps children feel safe and curious.',
  image: images.kids,
  imageAlt: 'Smiling child in a dental chair while a kind dentist shows a toothbrush',
  seoTitle: 'Children’s Dentist in Nashik | Pediatric Dentistry at Aurelia',
  metaDescription:
  'Gentle, age-appropriate dental care for children in Nashik, with guidance for parents on healthy habits. Aurelia Dental Studio.',
  h1: 'Gentle Dental Care for Children in Nashik',
  intro: [
  'A child’s early experiences at the dentist can shape how they feel about dental care for years to come. Our aim is simple: visits that feel friendly, unhurried and even a little interesting.',
  'We also support parents with practical advice on brushing, snacks and habits like thumb-sucking — the everyday things that make a real difference.'],

  reasons: [
  'Your child’s first dental visit',
  'Routine check-ups as baby and adult teeth develop',
  'Concerns about cavities or discoloured teeth',
  'Questions about thumb-sucking or teething',
  'Guidance on brushing for young children'],

  benefits: [
  'Helps children become familiar and comfortable with dental visits',
  'Early guidance for healthy habits at home',
  'Development of teeth and jaws monitored over time',
  'Practical, reassuring advice for parents'],

  process: [
  { title: 'A friendly welcome', text: 'We take a few minutes to say hello and let your child explore at their own pace.' },
  { title: 'Gentle check-up', text: 'The dentist counts and checks teeth, often with your child sitting comfortably on your lap.' },
  { title: 'Preventive care', text: 'Where appropriate, preventive options are explained to you before anything is done.' },
  { title: 'Tips for home', text: 'You receive simple, age-appropriate guidance to support healthy teeth.' }],

  suitability:
  'Care is always adapted to your child’s age, development and comfort. Your dentist will discuss any recommendations with you first.',
  faqs: [
  {
    question: 'When should my child first see a dentist?',
    answer:
    'Many dental organisations suggest a first visit around the time the first tooth appears or by the first birthday. Your dentist can advise on what suits your child.'
  },
  {
    question: 'Do baby teeth really matter?',
    answer:
    'Yes. Baby teeth help children chew and speak, and they hold space for adult teeth. Looking after them supports healthy development.'
  },
  {
    question: 'How can I prepare my child for the visit?',
    answer:
    'Keep it positive and simple — reading a picture book about the dentist or playing “counting teeth” at home can help. Avoid words that might sound scary.'
  }],

  related: ['general-dentistry', 'teeth-cleaning', 'clear-aligners']
};