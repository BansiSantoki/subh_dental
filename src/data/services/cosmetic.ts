import { images } from '../images';
import type { Service } from '../../types/content';

export const cosmeticDentistry: Service = {
  slug: 'cosmetic-dentistry',
  name: 'Cosmetic Dentistry',
  category: 'cosmetic',
  short: 'Customized aesthetic treatments designed to enhance tooth shape, shade, alignment, and facial balance.',
  image: images.cosmeticSmile,
  imageAlt: 'Dentist conducting facial and smile aesthetic assessment with patient in dental operatory',
  seoTitle: 'Cosmetic Dentistry & Smile Enhancement in Nashik | Dr. Naik\'s Shubh Smile Multispeciality Dental Clinic',
  metaDescription:
    'Explore personalized cosmetic dentistry in Nashik. Professional smile assessments, composite bonding, aesthetic recontouring, and custom smile design.',
  h1: 'Cosmetic Dentistry in Nashik',
  intro: [
    'Cosmetic dentistry focuses on elevating the aesthetic harmony of your teeth, gums, and overall smile. Whether you desire subtle refinements or a full smile transformation, our approach begins with healthy teeth and honest clinical communication.',
    'We work closely with you to design results that appear natural, complement your unique facial proportions, and preserve maximum natural enamel.'
  ],
  reasons: [
    'Discolored, deeply stained, or dull teeth',
    'Chipped, cracked, or worn incisal edges',
    'Visible gaps or minor spacing between front teeth',
    'Irregularly shaped or unevenly proportioned teeth',
    'Desire for a brighter, more confident smile in professional and personal life'
  ],
  benefits: [
    'Customized treatment plan designed specifically for your facial contours',
    'Conservative, minimally invasive techniques prioritizing natural tooth structure',
    'Noticeable enhancement in everyday confidence and photo-ready smiles',
    'Clear upfront guidance on realistic results and longevity'
  ],
  process: [
    { title: 'Aesthetic Consultation', text: 'We listen to what you wish to enhance and examine your tooth shade, shape, and bite harmony.' },
    { title: 'Digital Smile Evaluation', text: 'We map out realistic enhancements using clinical photographs and shade guides.' },
    { title: 'Treatment Selection', text: 'Choose between conservative bonding, contouring, or combined cosmetic options.' },
    { title: 'Artistic Execution', text: 'Careful chairside application with high-precision cosmetic materials for a natural finish.' }
  ],
  suitability:
    'Cosmetic enhancements require healthy gums and stable teeth as a foundation. Any active decay or gum issues are addressed first.',
  faqs: [
    {
      question: 'Will cosmetic dental work look artificial or too white?',
      answer:
        'Not at all. We carefully select shades and translucent gradations that match your natural enamel and harmonize with your skin tone.'
    },
    {
      question: 'How long do cosmetic restorations last?',
      answer:
        'With routine oral hygiene and regular dental check-ups, modern composite bonding and aesthetic porcelain last many years.'
    }
  ],
  related: ['teeth-whitening', 'dental-veneers', 'smile-makeover']
};

export const teethWhitening: Service = {
  slug: 'teeth-whitening',
  name: 'Professional Teeth Whitening',
  category: 'cosmetic',
  short: 'Safe, clinic-supervised teeth whitening treatments to lift stubborn coffee, tea, and aging stains.',
  image: images.whiteningSmile,
  imageAlt: 'Individual smiling naturally with bright, clean, healthy teeth after whitening treatment',
  seoTitle: 'Professional Teeth Whitening in Nashik | Dr. Naik\'s Shubh Smile Multispeciality Dental Clinic',
  metaDescription:
    'Safe, long-lasting professional teeth whitening in Nashik. In-office chairside bleaching and custom take-home kits for a visibly brighter smile.',
  h1: 'Professional Teeth Whitening in Nashik',
  intro: [
    'Daily exposure to tea, coffee, spices, smoking, and natural aging gradually darkens enamel. Professional dental whitening safely lifts deep pigment stains while preserving enamel integrity.',
    'Under expert clinical supervision, whitening formulas are carefully monitored to protect your gums and minimize transient sensitivity.'
  ],
  reasons: [
    'Extrinsic stains from tea, coffee, wine, or tobacco use',
    'Yellowing or darkening caused by natural enamel aging',
    'Special upcoming events such as weddings, reunions, or photo shoots',
    'Desire for a fresher, brighter smile appearance'
  ],
  benefits: [
    'Safe clinical whitening agents that protect delicate tooth enamel',
    'Targeted gum barriers to prevent irritation and sensitivity',
    'Visibly brighter shade results achieved in a controlled, predictable manner',
    'Professional advice on preserving your results with simple habits'
  ],
  process: [
    { title: 'Pre-Whitening Exam', text: 'We check enamel health, existing restorations, and baseline shade with a clinical shade guide.' },
    { title: 'Gum & Soft-Tissue Protection', text: 'Protective isolation barrier is applied to keep gums completely shielded.' },
    { title: 'Whitening Gel Activation', text: 'Professional-grade whitening gel is applied and monitored in measured intervals.' },
    { title: 'Shade Reveal & Guidance', text: 'We measure your new shade and provide helpful aftercare tips to maintain your brightness.' }
  ],
  suitability:
    'Whitening works effectively on natural enamel. Existing crowns, veneers, or fillings do not lighten and may need shade matching later.',
  faqs: [
    {
      question: 'Is professional whitening safe for tooth enamel?',
      answer:
        'Yes. Clinically approved dental bleaching gels do not erode or thin enamel when administered by a trained dentist.'
    },
    {
      question: 'How long do whitening results typically last?',
      answer:
        'Results generally last between one and two years, depending on your dietary habits like tea, coffee, and tobacco consumption.'
    }
  ],
  related: ['teeth-cleaning', 'cosmetic-dentistry', 'dental-veneers']
};

export const dentalVeneers: Service = {
  slug: 'dental-veneers',
  name: 'Porcelain & Composite Veneers',
  category: 'cosmetic',
  short: 'Ultra-thin, custom shells bonded to the front of teeth to correct deep discoloration, chips, or gaps.',
  image: images.shadeGuide,
  imageAlt: 'Dentist using precision Vita clinical dental tooth shade guide for customized porcelain veneer matching',
  seoTitle: 'Dental Veneers in Nashik | Dr. Naik\'s Shubh Smile Multispeciality Dental Clinic',
  metaDescription:
    'Custom porcelain and composite veneers in Nashik. Transform chipped, uneven, or deeply stained teeth with handcrafted aesthetic shells.',
  h1: 'Dental Veneers in Nashik',
  intro: [
    'Dental veneers are custom-crafted, ultra-thin shells designed to cover the front surface of teeth. They represent an exquisite solution for masking deep intrinsic stains, closing stubborn gaps, and restoring chipped or worn teeth.',
    'Our clinic offers both direct composite veneers and handcrafted laboratory porcelain veneers, each designed to replicate the subtle translucency of natural enamel.'
  ],
  reasons: [
    'Deep intrinsic tooth discoloration that does not respond to whitening',
    'Chipped, broken, or unevenly worn tooth edges',
    'Noticeable gaps or diastema between front teeth',
    'Mild crowding or minor misalignment where orthodontics is not preferred'
  ],
  benefits: [
    'Dramatically improves smile aesthetics with minimal tooth preparation',
    'Porcelain materials are highly stain-resistant and durable',
    'Engineered to match your surrounding natural teeth flawlessly',
    'Long-lasting solution that provides immediate cosmetic confidence'
  ],
  process: [
    { title: 'Consultation & Mock-up', text: 'We discuss your aesthetic goals and evaluate facial proportions and dental alignment.' },
    { title: 'Gentle Enamel Preparation', text: 'A conservative layer of enamel is prepared to accommodate the veneer shell.' },
    { title: 'Custom Impression / Scanning', text: 'Precise records are sent to dental ceramists for custom fabrication.' },
    { title: 'Bonding & Polishing', text: 'The custom veneers are bonded with medical-grade resin and polished to a lifelike luster.' }
  ],
  suitability:
    'Veneers are ideal for patients with healthy gums, adequate enamel thickness, and a balanced bite without severe teeth grinding.',
  faqs: [
    {
      question: 'How long do porcelain veneers last?',
      answer:
        'Porcelain veneers typically last 10 to 15 years or longer when supported by daily oral hygiene and routine dental reviews.'
    },
    {
      question: 'Is the veneer procedure reversible?',
      answer:
        'Because a tiny amount of outer enamel is usually reshaped for a seamless fit, the procedure is considered a permanent restoration.'
    }
  ],
  related: ['cosmetic-dentistry', 'smile-makeover', 'teeth-whitening']
};

export const smileMakeover: Service = {
  slug: 'smile-makeover',
  name: 'Comprehensive Smile Makeover',
  category: 'cosmetic',
  short: 'A multi-treatment aesthetic plan combining whitening, veneers, alignment, and contouring for a harmonious smile.',
  image: images.veneers,
  imageAlt: 'Dentist presenting smile makeover aesthetic options and dental contouring models to patient',
  seoTitle: 'Full Smile Makeover in Nashik | Dr. Naik\'s Shubh Smile Multispeciality Dental Clinic',
  metaDescription:
    'Comprehensive smile makeover treatments in Nashik. Combine whitening, veneers, crowns, and aligners for a healthy, balanced, radiant smile.',
  h1: 'Comprehensive Smile Makeover in Nashik',
  intro: [
    'A smile makeover is a thoughtful combination of cosmetic and restorative procedures tailored to address multiple concerns simultaneously. From tooth alignment and gumline symmetry to color harmony and bite balance, every detail is considered.',
    'Dr. Naik takes a holistic approach, ensuring that your transformed smile not only looks stunning but also functions comfortably and endures for years to come.'
  ],
  reasons: [
    'Multiple aesthetic concerns such as chips, misalignment, and discoloration',
    'Worn-down, shortened teeth from aging or night grinding',
    'Asymmetrical smile line or irregular tooth proportions',
    'Rebuilding oral confidence with a comprehensive, organized treatment plan'
  ],
  benefits: [
    'Harmonized transformation addressing both aesthetics and dental function',
    'Phased treatment schedule that fits your timeline and financial planning',
    'Preserves oral health foundations before aesthetic enhancements',
    'Natural, balanced outcome designed specifically for your face'
  ],
  process: [
    { title: 'Comprehensive Smile Assessment', text: 'Detailed photo analysis, bite examination, and discussion of your ideal smile.' },
    { title: 'Unified Treatment Blueprint', text: 'We create a phased plan combining required services like whitening, veneers, or crowns.' },
    { title: 'Health Stabilization', text: 'Addressing any foundational cavities or gum needs before starting cosmetic stages.' },
    { title: 'Aesthetic Realization', text: 'Completing cosmetic restorations with regular reviews to ensure comfort and symmetry.' }
  ],
  suitability:
    'Suitable for anyone looking for comprehensive aesthetic enhancement. Each plan is customized to individual clinical parameters.',
  faqs: [
    {
      question: 'How many visits does a smile makeover require?',
      answer:
        'Depending on the procedures included, a smile makeover typically requires between 2 to 4 visits over a few weeks.'
    },
    {
      question: 'Can I preview my new smile before treatment?',
      answer:
        'Yes. We use diagnostic mock-ups and digital smile previews so you can visualize the expected results before commencing irreversible work.'
    }
  ],
  related: ['dental-veneers', 'clear-aligners', 'teeth-whitening']
};
