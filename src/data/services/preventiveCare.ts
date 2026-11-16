import { images } from '../images';
import type { Service } from '../../types/content';

export const generalDentistry: Service = {
  slug: 'general-dentistry',
  name: 'General Dentistry',
  category: 'everyday',
  short: 'Routine dental examinations, preventive guidance, and care for common dental concerns.',
  image: images.dentistAtWork,
  imageAlt: 'Professional dentist carefully examining patient during a comprehensive dental check-up',
  seoTitle: 'General Dentistry & Dental Check-ups in Nashik | Dr. Naik\'s Shubh Smile Multispeciality Dental Clinic',
  metaDescription:
    'Routine dental examinations, preventive guidance, digital dental check-ups, and gentle oral care at Dr. Naik\'s Shubh Smile Multispeciality Dental Clinic in Nashik, Maharashtra.',
  h1: 'General Dentistry in Nashik',
  intro: [
    'General dentistry is the foundation of long-term oral health. A routine visit allows your dentist to examine teeth and gums thoroughly, spot subtle changes early, and recommend proactive habits.',
    'Whether you have a specific dental query, slight sensitivity, or simply have not visited a dentist in a while, a general consultation at Shubh Smile is a calm, pressure-free first step.'
  ],
  reasons: [
    'It has been more than six months since your last dental examination',
    'You have noticed tooth sensitivity, bleeding gums, or persistent discomfort',
    'You want an honest, comprehensive evaluation of your oral health',
    'You need professional guidance on daily brushing, flossing, and oral care habits',
    'An existing restoration, filling, or crown feels loose or uneven'
  ],
  benefits: [
    'Early detection of minor cavities and gum inflammation before they become severe',
    'Clear, understandable diagnosis with no unnecessary treatment pressure',
    'Tailored oral hygiene advice suited to your lifestyle and dental needs',
    'Accurate clinical dental records to monitor your oral health over time'
  ],
  process: [
    { title: 'Personal Conversation', text: 'We discuss your dental history, any current sensitivities, and what you would like to achieve.' },
    { title: 'Comprehensive Exam', text: 'Your dentist carefully inspects teeth, gums, enamel, and bite. Diagnostic X-rays are taken only when clinically required.' },
    { title: 'Transparent Explanation', text: 'We explain clinical findings clearly, presenting recommended care and alternatives with straightforward pricing.' },
    { title: 'Personalized Prevention Plan', text: 'You receive clear home-care guidance and a sensible follow-up schedule to maintain your healthy smile.' }
  ],
  suitability:
    'Regular check-up intervals vary by individual risk factors and overall gum health. Your dentist will suggest a schedule that suits you.',
  faqs: [
    {
      question: 'How often should I schedule a dental check-up?',
      answer:
        'Most people benefit from a check-up every six months. If you have specific conditions such as diabetes or a history of gum trouble, your dentist may suggest more frequent reviews.'
    },
    {
      question: 'Will I need dental X-rays at every visit?',
      answer:
        'No. Digital X-rays are recommended only when necessary to inspect root structures, hidden cavities between teeth, or bone levels.'
    },
    {
      question: 'Can family members be examined on the same day?',
      answer:
        'Yes. Let our reception team know in advance, and we will happily coordinate appointments together for your family.'
    }
  ],
  related: ['teeth-cleaning', 'pediatric-dentistry', 'root-canal-treatment']
};

export const teethCleaning: Service = {
  slug: 'teeth-cleaning',
  name: 'Dental Cleaning & Scaling',
  category: 'everyday',
  short: 'Professional ultrasonic scaling and polishing to remove plaque, tartar, and surface stains.',
  image: images.teethCleaning,
  imageAlt: 'Dentist performing gentle professional ultrasonic dental cleaning and tartar removal',
  seoTitle: 'Professional Teeth Cleaning & Scaling in Nashik | Dr. Naik\'s Shubh Smile Multispeciality Dental Clinic',
  metaDescription:
    'Gentle ultrasonic dental scaling, plaque removal, and polishing with personalized gum-care advice at Dr. Naik\'s Shubh Smile Multispeciality Dental Clinic in Nashik.',
  h1: 'Professional Teeth Cleaning in Nashik',
  intro: [
    'Even with thorough daily brushing, bacterial plaque hardens over time into tartar along the gumline where toothbrushes cannot reach. Professional ultrasonic scaling gently removes these deposits to keep gums firm and healthy.',
    'A cleaning visit also offers an ideal opportunity to review your daily hygiene routine and make small adjustments that prevent gum disease.'
  ],
  reasons: [
    'Gums that bleed when brushing or flossing',
    'Visible yellow or brown tartar build-up along the gumline',
    'Surface stains from tea, coffee, or food habits',
    'Persistent bad breath despite brushing',
    'Routine 6-month preventive gum maintenance'
  ],
  benefits: [
    'Effective removal of hardened tartar and bacterial biofilm',
    'Prevention of gingivitis and long-term periodontal bone loss',
    'Smoother tooth surfaces that resist future stain accumulation',
    'Fresh breath and revitalized, healthy gums'
  ],
  process: [
    { title: 'Gum Health Check', text: 'We examine your gums for pockets, bleeding, and sensitivity to tailor the scaling intensity.' },
    { title: 'Gentle Ultrasonic Scaling', text: 'Fine, water-cooled ultrasonic tips gently dislodge calculus without harming enamel.' },
    { title: 'Polishing', text: 'Teeth are gently polished with a prophylactic paste to remove surface stains and smooth the enamel.' },
    { title: 'Home Care Recommendations', text: 'You receive personalized guidance on interdental brushes, flossing technique, and suitable toothpastes.' }
  ],
  suitability:
    'Professional cleaning is recommended for all adults and teens. If deep gum inflammation is present, deep periodontal scaling may be advised.',
  faqs: [
    {
      question: 'Does teeth cleaning hurt or make teeth loose?',
      answer:
        'No. Professional ultrasonic scaling does not damage enamel or loosen teeth. If tartar was supporting inflamed gums, removing it allows the gums to heal firmly against the teeth.'
    },
    {
      question: 'Will cleaning make my teeth sensitive?',
      answer:
        'Mild sensitivity can occur for a day or two after deep cleaning as previously covered tooth surfaces adjust, but this subsides quickly.'
    }
  ],
  related: ['general-dentistry', 'teeth-whitening', 'pediatric-dentistry']
};

export const rootCanal: Service = {
  slug: 'root-canal-treatment',
  name: 'Root Canal Treatment (RCT)',
  category: 'everyday',
  short: 'Painless, modern endodontic therapy to eliminate infection and save your natural tooth.',
  image: images.dentalRadiograph,
  imageAlt: 'Dentist reviewing high-resolution digital radiograph showing tooth root canals on chairside display',
  seoTitle: 'Painless Root Canal Treatment (RCT) in Nashik | Dr. Naik\'s Shubh Smile Multispeciality Dental Clinic',
  metaDescription:
    'Gentle, modern root canal treatment in Nashik. Eliminate toothache, treat deep infection, and save your natural tooth with single-visit RCT options.',
  h1: 'Root Canal Treatment in Nashik',
  intro: [
    'When deep tooth decay, repeated procedures, or a crack reaches the inner pulp containing nerves and blood vessels, severe pain or infection can result. A root canal treatment removes this infected pulp, cleans and disinfects the canals, and seals them permanently.',
    'With modern local anesthesia and rotary endodontics, root canal therapy is no more uncomfortable than having a routine filling placed.'
  ],
  reasons: [
    'Persistent, throbbing tooth pain, especially when chewing or lying down',
    'Prolonged sensitivity to hot or cold temperatures',
    'Swelling or tenderness in the gum next to a painful tooth',
    'A pimple-like bump on the gum discharging fluid',
    'A deeply decayed or traumatized tooth'
  ],
  benefits: [
    'Rapid relief from intense dental toothache',
    'Preserves your natural tooth root and bone structure',
    'Prevents infection from spreading to adjacent teeth and jawbone',
    'Restores full chewing efficiency when paired with a dental crown'
  ],
  process: [
    { title: 'Digital Diagnosis', text: 'High-clarity digital X-rays confirm the root anatomy and extent of pulp infection.' },
    { title: 'Effective Anesthesia', text: 'The tooth is completely numbed to ensure a comfortable, painless experience throughout.' },
    { title: 'Cleaning & Shaping', text: 'Rotary instruments thoroughly clean, disinfect, and shape the root canals.' },
    { title: 'Hermetic Sealing & Crown', text: 'The canals are sealed with biocompatible gutta-percha. A crown is typically recommended to restore strength.' }
  ],
  suitability:
    'Root canal therapy is suitable for teeth with restorable crown structure. Your dentist evaluates the tooth to confirm long-term success.',
  faqs: [
    {
      question: 'Is root canal treatment painful?',
      answer:
        'Modern RCT is virtually pain-free. Local anesthesia ensures total numbness during treatment, and post-procedure soreness is easily managed with mild medication.'
    },
    {
      question: 'Do I always need a crown after a root canal?',
      answer:
        'Back teeth (molars and premolars) endure heavy chewing forces and become brittle after pulp removal. A dental crown is highly recommended to prevent fracture.'
    }
  ],
  related: ['crowns-and-bridges', 'general-dentistry', 'dental-implants']
};

export const pediatricDentistry: Service = {
  slug: 'pediatric-dentistry',
  name: 'Pediatric Dental Care',
  category: 'everyday',
  short: 'Gentle, friendly dentistry for children and teens to build a lifetime of positive oral health.',
  image: images.kids,
  imageAlt: 'Gentle dentist consulting warmly with child patient and parent in comfortable clinic room',
  seoTitle: 'Pediatric Dentistry & Children Dental Care in Nashik | Dr. Naik\'s Shubh Smile Multispeciality Dental Clinic',
  metaDescription:
    'Child-friendly, compassionate dental care in Nashik. Preventive fluoride, sealants, cavity fillings, and gentle habits for children of all ages.',
  h1: 'Pediatric Dental Care in Nashik',
  intro: [
    'Early dental experiences shape a child’s attitude toward oral health for life. At Dr. Naik’s Shubh Smile, we make visits enjoyable, interactive, and positive.',
    'From preventive pit-and-fissure sealants to gentle primary tooth restorations, our priority is keeping little smiles cavity-free and teaching enjoyable brushing habits.'
  ],
  reasons: [
    'Child’s first dental visit or routine school check-up',
    'Tooth decay or cavities in milk teeth',
    'Thumb sucking, tongue thrusting, or mouth breathing concerns',
    'Preventive fluoride applications and dental sealants',
    'Early monitoring of tooth eruption and alignment'
  ],
  benefits: [
    'Builds a positive, anxiety-free attitude toward dental visits',
    'Protects baby teeth that preserve space for incoming permanent teeth',
    'Minimizes future orthodontic complications with early intervention',
    'Practical, fun guidance for parents and children on diet and brushing'
  ],
  process: [
    { title: 'Friendly Introduction', text: 'We introduce dental instruments with playful, reassuring explanations so your child feels completely comfortable.' },
    { title: 'Gentle Assessment', text: 'A thorough yet gentle check of tooth growth, enamel health, and bite development.' },
    { title: 'Preventive Care', text: 'Professional cleaning, fluoride treatment, or sealant placement as indicated.' },
    { title: 'Positive Reinforcement', text: 'Praise and home hygiene advice that leaves children proud of their smiles.' }
  ],
  suitability:
    'Children should have their first dental visit around their first birthday or when their first tooth appears, followed by regular 6-month check-ups.',
  faqs: [
    {
      question: 'Why treat baby teeth if they fall out anyway?',
      answer:
        'Baby teeth are crucial for chewing, speech development, and holding space for adult teeth. Untreated decay can cause severe pain, infections, and damage developing permanent teeth.'
    },
    {
      question: 'What are dental sealants?',
      answer:
        'Sealants are protective resin coatings brushed into deep grooves of molars to seal out food and bacteria, drastically reducing cavities.'
    }
  ],
  related: ['general-dentistry', 'teeth-cleaning', 'clear-aligners']
};
