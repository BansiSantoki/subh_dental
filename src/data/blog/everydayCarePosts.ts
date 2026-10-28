import { images } from '../images';
import type { BlogPost } from '../../types/content';

export const howOftenVisit: BlogPost = {
  slug: 'how-often-should-you-visit-a-dentist',
  title: 'How Often Should You Visit a Dentist?',
  category: 'Prevention',
  excerpt: 'The six-month rule is a useful starting point — but the right rhythm for your visits depends on you.',
  metaDescription:
  'How often should you see a dentist? A simple, practical guide to check-up intervals from Aurelia Dental Studio, Nashik.',
  featuredImage: images.consultation,
  featuredImageAlt: 'Dentist discussing a check-up with a patient',
  publishedLabel: '[Publication date]',
  author: '[Reviewing dentist name]',
  relatedService: 'general-dentistry',
  content: [
  {
    type: 'paragraph',
    text: 'Many of us grew up hearing that we should see a dentist every six months. It is a helpful guideline, but it isn’t a fixed rule for everyone. The best interval depends on your teeth, your gums and your general health.'
  },
  { type: 'heading', id: 'why-regular-visits', text: 'Why regular visits matter' },
  {
    type: 'paragraph',
    text: 'Dental problems such as early decay or gum inflammation often develop quietly, without pain. A routine examination gives your dentist a chance to notice changes while they are still small and easier to manage.'
  },
  {
    type: 'image',
    src: images.treatmentRoom,
    alt: 'Calm, modern dental treatment room',
    caption: 'A routine visit is usually short, calm and conversational.',
    layout: 'full'
  },
  { type: 'heading', id: 'what-affects-frequency', text: 'What affects how often you should go' },
  {
    type: 'list',
    items: [
    'Your history of cavities or gum problems',
    'Whether you smoke or use tobacco',
    'Health conditions such as diabetes',
    'Pregnancy, which can affect gum health',
    'Orthodontic appliances, crowns or implants that need monitoring']

  },
  {
    type: 'paragraph',
    text: 'Some people with very healthy mouths may be advised to come less often, while others benefit from more frequent reviews. Your dentist will suggest what makes sense for you.'
  },
  { type: 'heading', id: 'between-visits', text: 'Looking after your teeth between visits' },
  {
    type: 'gallery',
    layout: 'side-by-side',
    images: [
    { src: images.dentalTools, alt: 'Clean dental instruments', caption: 'Professional cleaning reaches areas brushing can miss.' },
    { src: images.smileCloseup, alt: 'Natural healthy smile', caption: 'Daily habits make the biggest difference.' }]

  },
  {
    type: 'paragraph',
    text: 'Brushing twice a day with fluoride toothpaste, cleaning between your teeth and limiting sugary snacks all support healthy teeth. If you notice pain, swelling or bleeding, don’t wait for your next check-up — contact your dentist.'
  },
  {
    type: 'callout',
    text: 'This article is general information and not personal dental advice. Your dentist can recommend a check-up schedule after examining you.'
  }]

};

export const professionalCleaning: BlogPost = {
  slug: 'guide-to-professional-teeth-cleaning',
  title: 'A Simple Guide to Professional Teeth Cleaning',
  category: 'Prevention',
  excerpt: 'What actually happens during a scale and polish — and why it feels so good afterwards.',
  metaDescription: 'What happens during a professional teeth cleaning, how it helps and how often you may need one.',
  featuredImage: images.dentalTools,
  featuredImageAlt: 'Sterilized dental instruments on sage linen',
  publishedLabel: '[Publication date]',
  author: '[Reviewing dentist name]',
  relatedService: 'teeth-cleaning',
  content: [
  {
    type: 'paragraph',
    text: 'Plaque is a soft, sticky film that forms on teeth every day. When it isn’t fully removed, it can harden into tartar — a deposit that brushing and flossing can’t remove on their own.'
  },
  { type: 'heading', id: 'what-happens', text: 'What happens during a cleaning' },
  {
    type: 'list',
    ordered: true,
    items: [
    'Your gums are checked to understand their condition.',
    'Tartar is carefully removed from tooth surfaces and along the gumline.',
    'Teeth are polished to remove surface stains.',
    'You receive tips to make your home routine more effective.']

  },
  {
    type: 'image',
    src: images.treatmentRoom,
    alt: 'Treatment room prepared for a cleaning appointment',
    caption: 'Instruments are sterilized and the room prepared before every appointment.',
    layout: 'inset'
  },
  { type: 'heading', id: 'does-it-hurt', text: 'Does it hurt?' },
  {
    type: 'paragraph',
    text: 'Most people feel pressure or vibration rather than pain. If your teeth are sensitive or your gums are inflamed, tell your dentist — they can adjust the approach and pace.'
  },
  {
    type: 'quote',
    text: 'A professional clean is a reset for your gums — and a good moment to fine-tune your brushing.',
    cite: '[Dentist name, placeholder]'
  },
  { type: 'heading', id: 'after-cleaning', text: 'After your cleaning' },
  {
    type: 'paragraph',
    text: 'Teeth often feel smoother and look brighter. Slight gum tenderness can occur for a day or two. Keep brushing gently and follow any instructions you were given.'
  },
  {
    type: 'callout',
    text: 'General information only. Your dentist will advise how often you need professional cleaning.'
  }]

};

export const everydayHabits: BlogPost = {
  slug: 'everyday-habits-for-healthy-teeth',
  title: 'Everyday Habits That Support Healthy Teeth',
  category: 'Daily Care',
  excerpt: 'Small, repeatable habits — not complicated routines — do most of the work for a healthy smile.',
  metaDescription: 'Simple daily habits that support healthy teeth and gums, from brushing technique to snacking.',
  featuredImage: images.smileCloseup,
  featuredImageAlt: 'Close-up of a natural, healthy smile',
  publishedLabel: '[Publication date]',
  author: '[Reviewing dentist name]',
  relatedService: 'teeth-cleaning',
  content: [
  {
    type: 'paragraph',
    text: 'Healthy teeth are rarely about one big effort. They are built quietly, through small habits repeated every day. Here are a few that make a real difference.'
  },
  { type: 'heading', id: 'brushing', text: 'Brush well, twice a day' },
  {
    type: 'paragraph',
    text: 'Use a soft-bristled brush and fluoride toothpaste for about two minutes. Angle the bristles toward the gumline and use gentle circles rather than hard scrubbing.'
  },
  { type: 'heading', id: 'between-teeth', text: 'Clean between your teeth' },
  {
    type: 'paragraph',
    text: 'A toothbrush can’t reach every surface. Floss or interdental brushes help clean the tight spaces where plaque often collects.'
  },
  {
    type: 'gallery',
    layout: 'grid',
    images: [
    { src: images.dentalTools, alt: 'Dental hygiene tools', caption: 'The right tools make it easier.' },
    { src: images.aligners, alt: 'Clear aligners on stone', caption: 'Appliances need cleaning too.' },
    { src: images.interiorDetail, alt: 'Calm interior detail', caption: 'A routine works best when it is calm and consistent.' }]

  },
  { type: 'heading', id: 'food-and-drink', text: 'Be mindful of food and drink' },
  {
    type: 'list',
    items: [
    'Keep sugary snacks and drinks to mealtimes where possible',
    'Drink water through the day',
    'Rinse with water after tea or coffee',
    'Avoid using teeth to open packets or bottles']

  },
  {
    type: 'image',
    src: images.whiteningSmile,
    alt: 'Man laughing with a natural smile',
    caption: 'Consistency matters more than perfection.',
    layout: 'full'
  },
  {
    type: 'callout',
    text: 'General educational content. Ask your dentist for guidance specific to your teeth and gums.'
  }]

};

export const childrensCare: BlogPost = {
  slug: 'dental-care-tips-for-children',
  title: 'Dental Care Tips for Children',
  category: 'Family',
  excerpt: 'Gentle, practical ways to help children build healthy habits — and feel relaxed at the dentist.',
  metaDescription: 'Practical dental care tips for parents: brushing, snacks, first visits and building positive habits.',
  featuredImage: images.kids,
  featuredImageAlt: 'Child smiling in a dental chair beside a kind dentist',
  publishedLabel: '[Publication date]',
  author: '[Reviewing dentist name]',
  relatedService: 'pediatric-dentistry',
  content: [
  {
    type: 'paragraph',
    text: 'Children learn by watching and by repeating. The habits they build now — and the way they feel about dental visits — often stay with them for life.'
  },
  { type: 'heading', id: 'starting-early', text: 'Starting early' },
  {
    type: 'paragraph',
    text: 'Gently clean your baby’s gums with a soft cloth, and begin brushing as soon as the first tooth appears. Your dentist can advise on the right amount of toothpaste for your child’s age.'
  },
  { type: 'heading', id: 'making-it-fun', text: 'Making brushing feel easy' },
  {
    type: 'list',
    items: [
    'Brush together so your child can copy you',
    'Use a two-minute song or timer',
    'Let them choose their own toothbrush',
    'Help with brushing until they can do it thoroughly themselves']

  },
  {
    type: 'image',
    src: images.kids,
    alt: 'Dentist showing a child how to hold a toothbrush',
    caption: 'Calm, friendly visits help children feel safe.',
    layout: 'inset'
  },
  { type: 'heading', id: 'first-visit', text: 'Preparing for the first visit' },
  {
    type: 'paragraph',
    text: 'Keep conversations positive and simple. Picture books, pretend play and a relaxed tone help. Try to avoid words like “hurt” or “injection” that may cause worry.'
  },
  {
    type: 'callout',
    text: 'General information only. Your dentist will give advice tailored to your child’s age and development.'
  }]

};