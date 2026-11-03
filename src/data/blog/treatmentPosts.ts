import { images } from '../images';
import type { BlogPost } from '../../types/content';

export const implantsGuide: BlogPost = {
  slug: 'what-to-know-before-dental-implants',
  title: 'What to Know Before Exploring Dental Implants',
  category: 'Treatments',
  excerpt: 'Implants can be a great option — but suitability, planning and healing all deserve a clear explanation.',
  metaDescription: 'A clear introduction to dental implants: how they work, who may be suitable and what planning involves.',
  featuredImage: images.implantModel,
  featuredImageAlt: 'Dental implant model with porcelain crown',
  publishedLabel: 'Reviewed by Dr. Naik',
  author: 'Dr. Naik',
  relatedService: 'dental-implants',
  content: [
  {
    type: 'paragraph',
    text: 'If you are missing a tooth, you may have heard about dental implants. They can be an excellent option for some people, but they involve careful assessment and a treatment journey that unfolds over months.'
  },
  { type: 'heading', id: 'what-is-an-implant', text: 'What is a dental implant?' },
  {
    type: 'paragraph',
    text: 'An implant is a small titanium post placed in the jawbone. Over time the bone bonds with it, creating a stable base for a crown, bridge or denture.'
  },
  {
    type: 'image',
    src: images.implantModel,
    alt: 'Educational dental implant model',
    caption: 'An implant has three parts: the post, a connector and the visible crown.',
    layout: 'inset'
  },
  { type: 'heading', id: 'suitability', text: 'Who may be suitable?' },
  {
    type: 'list',
    items: [
    'Enough healthy bone to support the implant (or suitability for preparatory treatment)',
    'Healthy gums',
    'General health that supports healing',
    'Commitment to good oral hygiene and follow-up visits']

  },
  {
    type: 'paragraph',
    text: 'Smoking, uncontrolled diabetes and some medications can affect healing. Your dentist will discuss these openly during assessment.'
  },
  { type: 'heading', id: 'the-process', text: 'Understanding the process' },
  {
    type: 'gallery',
    layout: 'side-by-side',
    images: [
    { src: images.consultation, alt: 'Dentist explaining a treatment plan', caption: 'Assessment and planning come first.' },
    { src: images.treatmentRoom, alt: 'Treatment room', caption: 'Placement is carried out under local anaesthetic.' }]

  },
  {
    type: 'paragraph',
    text: 'After placement there is a healing period, commonly several months, before the final tooth is attached. Every plan is individual, so your timeline may differ.'
  },
  { type: 'heading', id: 'questions-to-ask', text: 'Questions worth asking' },
  {
    type: 'list',
    ordered: true,
    items: [
    'Am I suitable, and what are the alternatives?',
    'Will I need any preparatory treatment?',
    'What is the expected timeline and cost?',
    'How should I care for my implant long-term?']

  },
  {
    type: 'callout',
    text: 'General information only — not a substitute for an individual assessment by a qualified dentist.'
  }]

};

export const rootCanalGuide: BlogPost = {
  slug: 'understanding-root-canal-treatment',
  title: 'Understanding Root Canal Treatment',
  category: 'Treatments',
  excerpt: 'A calm, step-by-step look at one of the most misunderstood dental treatments.',
  metaDescription: 'What root canal treatment involves, why it may be recommended and what recovery is usually like.',
  featuredImage: images.doctorTwo,
  featuredImageAlt: 'Friendly dentist ready to explain treatment',
  publishedLabel: 'Reviewed by Dr. Naik',
  author: 'Dr. Naik',
  relatedService: 'root-canal-treatment',
  content: [
  {
    type: 'paragraph',
    text: 'Few dental phrases cause as much worry as “root canal”. Yet for many people, understanding what happens makes the treatment feel far more manageable.'
  },
  { type: 'heading', id: 'why-needed', text: 'Why might it be recommended?' },
  {
    type: 'paragraph',
    text: 'When the soft tissue inside a tooth — the pulp — becomes inflamed or infected, root canal treatment may help save the tooth rather than removing it.'
  },
  { type: 'heading', id: 'the-steps', text: 'The steps, simply explained' },
  {
    type: 'list',
    ordered: true,
    items: [
    'The tooth is numbed with local anaesthetic.',
    'The affected pulp is removed and the canals are cleaned.',
    'The canals are filled and sealed.',
    'The tooth is restored, often with a crown.']

  },
  {
    type: 'image',
    src: images.treatmentRoom,
    alt: 'Calm treatment room',
    caption: 'A comfortable environment helps make longer appointments easier.',
    layout: 'full'
  },
  { type: 'heading', id: 'recovery', text: 'Recovery' },
  {
    type: 'paragraph',
    text: 'Some tenderness is common for a few days. Your dentist will explain how to manage it, what to eat and when to get in touch if symptoms worsen.'
  },
  {
    type: 'callout',
    text: 'Educational content only. Your dentist will advise whether root canal treatment is appropriate for you.'
  }]

};

export const smileConsultationGuide: BlogPost = {
  slug: 'what-to-expect-during-a-smile-consultation',
  title: 'What to Expect During a Smile Consultation',
  category: 'Cosmetic',
  excerpt: 'A smile consultation is a conversation, not a commitment. Here is how it usually unfolds.',
  metaDescription: 'What happens during a smile makeover consultation and how to prepare for it.',
  featuredImage: images.shadeGuide,
  featuredImageAlt: 'Dentist holding a shade guide',
  publishedLabel: 'Reviewed by Dr. Naik',
  author: 'Dr. Naik',
  relatedService: 'smile-makeover',
  content: [
  {
    type: 'paragraph',
    text: 'If you have been thinking about changing something about your smile, a consultation is a relaxed way to understand what is possible — without any pressure to proceed.'
  },
  { type: 'heading', id: 'before', text: 'Before you arrive' },
  {
    type: 'paragraph',
    text: 'Think about what you like and what you would change. Photos of smiles you admire can help, as long as expectations stay realistic for your own teeth.'
  },
  {
    type: 'gallery',
    layout: 'grid',
    images: [
    { src: images.shadeGuide, alt: 'Shade guide', caption: 'Shade and colour' },
    { src: images.veneers, alt: 'Porcelain veneers', caption: 'Shape and proportion' },
    { src: images.smileCloseup, alt: 'Natural smile', caption: 'Balance with your face' }]

  },
  { type: 'heading', id: 'during', text: 'During the consultation' },
  {
    type: 'list',
    items: [
    'A conversation about your goals',
    'An examination of teeth, gums and bite',
    'Photographs for planning, with your permission',
    'An explanation of suitable options and costs']

  },
  { type: 'heading', id: 'after', text: 'Afterwards' },
  {
    type: 'paragraph',
    text: 'Take time to think. A good plan is one you understand and feel comfortable with — there is no need to decide on the day.'
  },
  {
    type: 'callout',
    text: 'General information. Treatment suitability is always determined through an individual examination.'
  }]

};

export const whiteningQuestions: BlogPost = {
  slug: 'questions-to-ask-before-teeth-whitening',
  title: 'Questions to Ask Before Choosing Teeth Whitening',
  category: 'Cosmetic',
  excerpt: 'Five honest questions that help you decide whether whitening is right for you.',
  metaDescription: 'Considering teeth whitening? Five questions to ask your dentist first.',
  featuredImage: images.whiteningSmile,
  featuredImageAlt: 'Man laughing with a bright, natural smile',
  publishedLabel: 'Reviewed by Dr. Naik',
  author: 'Dr. Naik',
  relatedService: 'teeth-whitening',
  content: [
  {
    type: 'paragraph',
    text: 'Whitening is one of the most popular cosmetic treatments, and for good reason. But a few honest questions beforehand help you choose wisely.'
  },
  { type: 'heading', id: 'q-healthy', text: '1. Are my teeth and gums healthy enough?' },
  {
    type: 'paragraph',
    text: 'Decay or gum problems should usually be addressed first. Your dentist will check before recommending whitening.'
  },
  { type: 'heading', id: 'q-restorations', text: '2. What about my fillings or crowns?' },
  {
    type: 'paragraph',
    text: 'Whitening does not change the colour of existing restorations, which may then look darker than your natural teeth.'
  },
  {
    type: 'image',
    src: images.smileCloseup,
    alt: 'Natural smile in warm light',
    caption: 'A natural shade often looks best.',
    layout: 'inset'
  },
  { type: 'heading', id: 'q-sensitivity', text: '3. Will it cause sensitivity?' },
  {
    type: 'paragraph',
    text: 'Some people experience temporary sensitivity. Ask how it can be reduced and what to do if it happens.'
  },
  { type: 'heading', id: 'q-results', text: '4. How long will results last?' },
  {
    type: 'paragraph',
    text: 'Results fade gradually, influenced by diet and habits. Ask about maintenance options.'
  },
  { type: 'heading', id: 'q-options', text: '5. In-clinic or at home?' },
  {
    type: 'paragraph',
    text: 'Both can be effective when supervised by a dentist. The best choice depends on your teeth, schedule and preferences.'
  },
  {
    type: 'callout',
    text: 'General educational content. Please consult your dentist before starting any whitening treatment.'
  }]

};