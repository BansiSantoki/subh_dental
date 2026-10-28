import { images } from '../images';
import type { Service } from '../../types/content';

export const crownsAndBridges: Service = {
  slug: 'dental-crowns',
  name: 'Dental Crowns and Bridges',
  category: 'restorative',
  short: 'Restorative options designed for damaged teeth or to replace missing teeth.',
  image: images.treatmentRoom,
  imageAlt: 'Serene, modern dental treatment room with warm wood and sage tones',
  seoTitle: 'Dental Crowns & Bridges in Nashik | Aurelia Dental Studio',
  metaDescription:
  'Learn about dental crowns and bridges for damaged or missing teeth — how they work and what to expect — at Aurelia Dental Studio, Nashik.',
  h1: 'Dental Crowns and Bridges in Nashik',
  intro: [
  'A crown is a custom-made cap that covers a tooth that has been weakened by decay, a large filling, a crack or root canal treatment. A bridge replaces one or more missing teeth by anchoring to the teeth on either side of the gap.',
  'Both are designed to restore the strength, function and appearance of your smile, using materials matched to your natural teeth.'],

  reasons: [
  'A cracked, broken or heavily filled tooth',
  'A back tooth after root canal treatment',
  'A missing tooth affecting chewing or confidence',
  'An older crown or bridge that needs replacing'],

  benefits: [
  'Protection for a weakened tooth',
  'Restored biting and chewing',
  'A natural-looking appearance matched to nearby teeth',
  'Helps prevent neighbouring teeth from shifting into a gap'],

  process: [
  { title: 'Assessment', text: 'Your dentist examines the tooth or gap and explains whether a crown, bridge or alternative suits you.' },
  { title: 'Preparation', text: 'The tooth is shaped under local anaesthetic and an impression or digital scan is taken.' },
  { title: 'Temporary', text: 'A temporary crown or bridge protects the area while the final one is made.' },
  { title: 'Fitting', text: 'The final restoration is checked for fit, bite and appearance before it is cemented.' }],

  suitability:
  'Crowns and bridges depend on the health of the supporting teeth and gums. Alternatives such as implants may also be discussed.',
  faqs: [
  {
    question: 'How long does a crown last?',
    answer:
    'With good care, crowns can last many years. Their lifespan depends on the material, your bite and your oral hygiene.'
  },
  {
    question: 'Bridge or implant — which is better?',
    answer:
    'Each has advantages. A bridge relies on neighbouring teeth, while an implant does not. Your dentist will explain which may suit your situation.'
  },
  {
    question: 'Will a crown look natural?',
    answer: 'Crowns can be shade-matched to your neighbouring teeth. Your dentist will discuss material options with you.'
  }],

  related: ['root-canal-treatment', 'dental-implants', 'dentures']
};

export const dentalImplants: Service = {
  slug: 'dental-implants',
  name: 'Dental Implants',
  category: 'restorative',
  short: 'Information about implant-based tooth replacement and the careful assessment it requires.',
  image: images.implantModel,
  imageAlt: 'Dental implant model with a titanium post and porcelain crown',
  seoTitle: 'Dental Implants in Nashik | Assessment & Planning | Aurelia',
  metaDescription:
  'Explore dental implants in Nashik — how they work, who may be suitable, and the assessment and planning process at Aurelia Dental Studio.',
  h1: 'Dental Implants in Nashik',
  intro: [
  'A dental implant is a small titanium post placed in the jawbone, where it acts like the root of a tooth. Once healed, it can support a crown, a bridge or a denture.',
  'Implants involve careful planning. Bone levels, gum health, general health and lifestyle factors all influence whether implants are appropriate and how treatment is staged.'],

  reasons: [
  'One or more missing teeth',
  'A loose or uncomfortable denture',
  'Preferring an option that does not rely on neighbouring teeth',
  'A tooth that cannot be saved and will need replacing'],

  benefits: [
  'A fixed replacement that can look and function like a natural tooth',
  'Does not require reshaping neighbouring teeth',
  'Can help stabilise dentures',
  'May help maintain the jawbone where a tooth is missing'],

  process: [
  { title: 'Assessment & imaging', text: 'Your dentist reviews your health history and uses X-rays or scans to assess the bone.' },
  { title: 'Planning', text: 'Implant position, any preparatory steps and the overall timeline are explained.' },
  { title: 'Placement', text: 'The implant is placed under local anaesthetic, followed by a healing period that varies by person.' },
  { title: 'Restoration', text: 'Once healed, a custom crown, bridge or denture is attached to the implant.' }],

  suitability:
  'Implants are not right for everyone. Factors such as bone volume, smoking, diabetes and gum health affect suitability, so an individual assessment is essential.',
  faqs: [
  {
    question: 'Is everyone suitable for dental implants?',
    answer:
    'No. Suitability depends on bone, gum and general health. Some people need preparatory treatment first, and others may be better suited to alternatives.'
  },
  {
    question: 'How long does implant treatment take?',
    answer:
    'It varies. Healing after placement commonly takes several months. Your dentist will give you a personalized timeline after assessment.'
  },
  {
    question: 'Does implant placement hurt?',
    answer:
    'It is carried out under local anaesthetic. Some discomfort and swelling afterwards is common, and your dentist will advise on managing it.'
  }],

  related: ['dental-crowns', 'dentures', 'root-canal-treatment']
};

export const dentures: Service = {
  slug: 'dentures',
  name: 'Dentures and Tooth Replacement',
  category: 'restorative',
  short: 'Comfortable, carefully fitted options for replacing missing teeth.',
  image: images.denturesSenior,
  imageAlt: 'Smiling woman with silver hair seated in a bright, calm room',
  seoTitle: 'Dentures & Tooth Replacement in Nashik | Aurelia Dental Studio',
  metaDescription:
  'Complete and partial dentures and other tooth replacement options in Nashik, fitted with care at Aurelia Dental Studio.',
  h1: 'Dentures and Tooth Replacement in Nashik',
  intro: [
  'Missing teeth can affect how you eat, speak and feel when you smile. Dentures are removable replacements — complete dentures replace all teeth in a jaw, while partial dentures fill gaps between remaining teeth.',
  'A well-made denture is all about fit and comfort. We take time over each stage and make adjustments as you get used to it.'],

  reasons: [
  'Several missing teeth',
  'An existing denture that feels loose or uncomfortable',
  'Difficulty chewing certain foods',
  'Exploring removable alternatives to implants or bridges'],

  benefits: [
  'Helps restore chewing and speech',
  'Supports the appearance of the lips and cheeks',
  'Can be adjusted over time for comfort',
  'Implant-supported options may be discussed for added stability'],

  process: [
  { title: 'Assessment', text: 'Your mouth is examined and options — complete, partial or implant-supported — are explained.' },
  { title: 'Impressions', text: 'Accurate impressions and bite records are taken to make your denture.' },
  { title: 'Try-in', text: 'You see and try a trial version so shape, shade and fit can be refined.' },
  { title: 'Fitting & reviews', text: 'Your denture is fitted, with follow-up visits for any adjustments.' }],

  suitability:
  'The most suitable type of denture depends on your remaining teeth, gums and bone. Your dentist will recommend options after examination.',
  faqs: [
  {
    question: 'How long does it take to get used to dentures?',
    answer:
    'Many people need a few weeks to adapt to eating and speaking. Follow-up visits allow adjustments for comfort.'
  },
  {
    question: 'How should I clean my dentures?',
    answer: 'Your dentist will show you how to clean them daily and store them overnight to keep them and your gums healthy.'
  },
  {
    question: 'Can dentures be fixed in place?',
    answer: 'Implant-supported dentures may offer more stability. Suitability depends on an individual assessment.'
  }],

  related: ['dental-implants', 'dental-crowns', 'general-dentistry']
};

export const clearAligners: Service = {
  slug: 'clear-aligners',
  name: 'Orthodontics and Clear Aligners',
  category: 'restorative',
  short: 'Options for addressing tooth alignment and bite concerns, including clear aligners.',
  image: images.aligners,
  imageAlt: 'Clear dental aligners resting on a smooth sage stone',
  seoTitle: 'Clear Aligners & Orthodontics in Nashik | Aurelia Dental Studio',
  metaDescription:
  'Explore orthodontic options in Nashik, including clear aligners and braces for alignment and bite concerns. Aurelia Dental Studio.',
  h1: 'Orthodontics and Clear Aligners in Nashik',
  intro: [
  'Orthodontic treatment gradually moves teeth into better alignment. Options include traditional braces and clear aligners — a series of removable, transparent trays that are changed at regular intervals.',
  'The right approach depends on your teeth, your bite and your lifestyle. A careful assessment helps decide which option suits you.'],

  reasons: [
  'Crowded or overlapping teeth',
  'Gaps between teeth',
  'Concerns about how the upper and lower teeth meet',
  'Teeth that have shifted after earlier treatment'],

  benefits: [
  'Straighter teeth may be easier to clean',
  'Clear aligners are discreet and removable',
  'A plan you can visualise before starting',
  'Options for both teenagers and adults'],

  process: [
  { title: 'Assessment & records', text: 'Photographs, X-rays and impressions or scans are used to understand your bite.' },
  { title: 'Treatment plan', text: 'Your dentist explains the suitable option, the expected movement and an estimated duration.' },
  { title: 'Active treatment', text: 'Braces are adjusted or aligners are changed, with regular review appointments.' },
  { title: 'Retention', text: 'Retainers help keep teeth in their new position once active treatment ends.' }],

  suitability:
  'Clear aligners are not suitable for every case. Complex bite concerns may need braces or specialist referral — your dentist will advise.',
  faqs: [
  {
    question: 'How long does orthodontic treatment take?',
    answer: 'It varies widely depending on the case. Your dentist will give you an estimated timeline after assessment.'
  },
  {
    question: 'Am I too old for aligners?',
    answer: 'Many adults have orthodontic treatment. What matters most is the health of your teeth and gums.'
  },
  {
    question: 'Will I need a retainer?',
    answer: 'Usually, yes. Teeth can drift after treatment, so retainers help maintain the result.'
  }],

  related: ['smile-makeover', 'cosmetic-dentistry', 'pediatric-dentistry']
};