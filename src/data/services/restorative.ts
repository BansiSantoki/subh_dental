import { images } from '../images';
import type { Service } from '../../types/content';

export const crownsAndBridges: Service = {
  slug: 'crowns-and-bridges',
  name: 'Dental Crowns & Bridges',
  category: 'restorative',
  short: 'Custom-milled ceramic crowns to protect weakened teeth and durable bridges to replace missing teeth.',
  image: images.crownsRestorative,
  imageAlt: 'Restorative dental instruments and precision ceramic crown preparation models in clinic',
  seoTitle: 'Dental Crowns & Bridges in Nashik | Dr. Naik\'s Shubh Smile Multispeciality Dental Clinic',
  metaDescription:
    'High-strength zirconia and ceramic crowns and dental bridges in Nashik. Restore damaged teeth and replace missing teeth with natural aesthetics.',
  h1: 'Dental Crowns and Bridges in Nashik',
  intro: [
    'A dental crown is a custom-crafted protective cap that encases a tooth severely weakened by deep decay, trauma, or a root canal. A dental bridge replaces one or more missing teeth by anchoring to neighboring teeth or implants.',
    'At Shubh Smile, we utilize modern metal-free ceramic and high-translucency zirconia materials designed to blend invisibly with your surrounding natural dentition.'
  ],
  reasons: [
    'Protecting a brittle tooth following root canal therapy',
    'Severely fractured, cracked, or worn down tooth requiring reinforcement',
    'Replacing one or more missing teeth affecting chewing or speech',
    'Replacing defective, discolored, or ill-fitting older metal restorations'
  ],
  benefits: [
    'Restores optimal chewing ability and natural bite alignment',
    'Protects vulnerable tooth structure from future catastrophic fractures',
    'Prevents adjacent teeth from tilting or drifting into empty spaces',
    'Exceptional aesthetics with shade-matched, biocompatible zirconia and ceramic'
  ],
  process: [
    { title: 'Clinical Preparation', text: 'The tooth is gently prepared under local anesthesia to ensure a snug, flush margin.' },
    { title: 'Digital Impression / Scanning', text: 'Accurate impressions capture your bite details for custom milling.' },
    { title: 'Temporary Protection', text: 'A provisional crown is fitted to shield the tooth while the final crown is crafted.' },
    { title: 'Bonding & Bite Check', text: 'The final zirconia/ceramic crown is permanently cemented and bite-balanced for comfort.' }
  ],
  suitability:
    'Requires sound underlying tooth structure or sturdy adjacent anchor teeth with healthy bone support.',
  faqs: [
    {
      question: 'How long do dental crowns typically last?',
      answer:
        'With proper brushing, flossing, and regular dental check-ups, zirconia and porcelain crowns commonly last 10 to 15+ years.'
    },
    {
      question: 'Should I choose a dental bridge or a dental implant?',
      answer:
        'A bridge relies on modifying adjacent teeth for support, whereas an implant is standalone and preserves neighboring teeth. Your dentist will help you weigh both options.'
    }
  ],
  related: ['root-canal-treatment', 'dental-implants', 'dentures']
};

export const dentalImplants: Service = {
  slug: 'dental-implants',
  name: 'Dental Implants',
  category: 'restorative',
  short: 'Permanent, titanium tooth replacements that mimic natural roots, preventing bone loss and restoring function.',
  image: images.implantModel,
  imageAlt: 'Medical precision model showing dental implant fixture, abutment, and natural-looking ceramic crown',
  seoTitle: 'Dental Implants in Nashik | Dr. Naik\'s Shubh Smile Multispeciality Dental Clinic',
  metaDescription:
    'Permanent titanium dental implants in Nashik. Single tooth replacement, implant-supported bridges, and full arch restoration by experienced dental surgeons.',
  h1: 'Dental Implants in Nashik',
  intro: [
    'Dental implants are the gold standard for replacing missing teeth. Consisting of a biocompatible titanium fixture placed securely into the jawbone, an implant functions exactly like a natural tooth root.',
    'Unlike conventional bridges, dental implants do not require adjacent healthy teeth to be trimmed, and they stimulate the jawbone to prevent the bone resorption that occurs after tooth loss.'
  ],
  reasons: [
    'A single missing tooth due to decay, trauma, or failed root canal',
    'Multiple missing teeth requiring a secure, non-removable solution',
    'Difficulty eating or speaking due to loose, uncomfortable dentures',
    'Desire for a permanent restoration that preserves neighboring healthy teeth'
  ],
  benefits: [
    'Looks, feels, and functions virtually indistinguishable from natural teeth',
    'Maintains jawbone density and prevents facial sinking caused by missing teeth',
    'No modification or filing down of adjacent healthy natural teeth',
    'Decades-long durability with success rates exceeding 95%'
  ],
  process: [
    { title: '3D Imaging & Planning', text: 'Detailed clinical assessment and digital scans evaluate bone density and nerve positioning.' },
    { title: 'Gentle Implant Placement', text: 'The titanium fixture is gently placed under local anesthesia with minimal invasiveness.' },
    { title: 'Osseointegration', text: 'Over a healing period of 2 to 4 months, the implant fuses securely with the jawbone.' },
    { title: 'Custom Crown Placement', text: 'A custom shade-matched ceramic crown is affixed, completing your new, permanent tooth.' }
  ],
  suitability:
    'Patients must have healthy gums and sufficient jawbone density. Bone grafting can often be performed if bone height has diminished.',
  faqs: [
    {
      question: 'Is the dental implant surgery painful?',
      answer:
        'Patients are consistently surprised by how easy the procedure is. Performed under effective local anesthesia, most report less discomfort than a tooth extraction.'
    },
    {
      question: 'Can smokers receive dental implants?',
      answer:
        'Smokers can receive implants, but smoking can slow bone healing. Quitting or reducing smoking before and during healing significantly boosts success.'
    }
  ],
  related: ['crowns-and-bridges', 'dentures', 'general-dentistry']
};

export const clearAligners: Service = {
  slug: 'clear-aligners',
  name: 'Clear Aligners & Orthodontics',
  category: 'restorative',
  short: 'Discreet, removable transparent aligners to straighten crooked teeth without metal wires and brackets.',
  image: images.aligners,
  imageAlt: 'Modern transparent clear aligner orthodontic trays resting in hygienic case',
  seoTitle: 'Clear Aligners & Invisible Braces in Nashik | Dr. Naik\'s Shubh Smile Multispeciality Dental Clinic',
  metaDescription:
    'Discreet, transparent clear aligners in Nashik. Straighten crowded, spaced, or misaligned teeth without visible metal braces.',
  h1: 'Clear Aligners and Orthodontics in Nashik',
  intro: [
    'Clear aligners offer a modern, virtually invisible alternative to traditional metal braces. Using a series of custom-designed transparent plastic trays, your teeth are gently guided into optimal alignment.',
    'Removable for meals, brushing, and special occasions, clear aligners allow you to achieve a straight, confident smile without dietary restrictions or metal wires.'
  ],
  reasons: [
    'Crowded, overlapping, or rotated teeth',
    'Noticeable gaps or spacing between teeth',
    'Overbite, underbite, or crossbite alignment issues',
    'Adults or working professionals wanting discreet orthodontic correction'
  ],
  benefits: [
    'Nearly invisible in daily conversation and photographs',
    'Removable for easy eating, brushing, and flossing',
    'No painful metal brackets or poking orthodontic wires',
    'Fewer emergency appointments and predictable digital tracking'
  ],
  process: [
    { title: 'Digital Scan & 3D Simulation', text: 'High-precision scans generate a 3D digital model showing how teeth will move step-by-step.' },
    { title: 'Custom Aligner Fabrication', text: 'A series of personalized, smooth plastic aligner trays are fabricated for your treatment.' },
    { title: 'Progressive Wear', text: 'You wear each set for about 1 to 2 weeks, 20–22 hours daily, before advancing to the next.' },
    { title: 'Retainer Protection', text: 'Upon completion, a comfortable retainer preserves your beautifully aligned smile.' }
  ],
  suitability:
    'Suitable for teens and adults with mild to moderate orthodontic alignment issues. Complex skeletal issues may require specialized brackets.',
  faqs: [
    {
      question: 'How many hours a day do I need to wear clear aligners?',
      answer:
        'For optimal movement and progress, aligners should be worn for 20 to 22 hours per day, removing them only to eat, drink hot beverages, and brush.'
    },
    {
      question: 'How long does clear aligner treatment take?',
      answer:
        'Average treatment duration ranges from 6 to 18 months, depending on the degree of alignment needed and consistent wear.'
    }
  ],
  related: ['cosmetic-dentistry', 'smile-makeover', 'pediatric-dentistry']
};

export const dentures: Service = {
  slug: 'dentures',
  name: 'Complete & Partial Dentures',
  category: 'restorative',
  short: 'Comfort-engineered full and partial dentures designed to restore chewing, speech, and facial fullness.',
  image: images.denturesSenior,
  imageAlt: 'Warm senior smiling comfortably with fully restored, natural-looking functional teeth and dentures',
  seoTitle: 'Dentures & Full Mouth Rehabilitation in Nashik | Dr. Naik\'s Shubh Smile Multispeciality Dental Clinic',
  metaDescription:
    'Comfortable full and partial dentures in Nashik. Modern lightweight materials, precision fit, and implant-supported overdentures for seniors and adults.',
  h1: 'Complete and Partial Dentures in Nashik',
  intro: [
    'Missing multiple teeth affects not only your ability to enjoy food but also facial profile and speaking clarity. Modern dentures are lightweight, ergonomically designed, and crafted to fit securely.',
    'At Shubh Smile, we provide customized complete dentures, flexible partial dentures, and implant-retained overdentures that eliminate slipping.'
  ],
  reasons: [
    'Missing multiple or all teeth in upper or lower dental arches',
    'Difficulty chewing everyday foods comfortably',
    'Sunken facial cheeks caused by missing teeth support',
    'Replacement of worn-out, loose, or cracked older dentures'
  ],
  benefits: [
    'Restores clear speech articulation and enjoyable chewing function',
    'Provides crucial support to facial muscles and lips, preventing facial collapse',
    'Modern acrylic and flexible resin designs that mimic natural gum contours',
    'Option to anchor with dental implants for complete stability'
  ],
  process: [
    { title: 'Anatomical Assessment', text: 'Careful examination of your gum ridges, jaw relation, and palate.' },
    { title: 'Precision Impressions', text: 'Detailed molds capture the exact contours of your mouth for optimal retention.' },
    { title: 'Wax Try-in & Aesthetics', text: 'You preview the tooth shade, arrangement, and smile appearance before final processing.' },
    { title: 'Final Delivery & Adjustments', text: 'We fit the completed denture, adjust contact points, and guide you on adaptation.' }
  ],
  suitability:
    'Suitable for individuals missing multiple or all teeth who want a reliable, cost-effective restoration.',
  faqs: [
    {
      question: 'How long does it take to get used to new dentures?',
      answer:
        'Most patients adapt comfortably within a few weeks as mouth muscles learn to keep the denture stable. We schedule follow-ups for any minor adjustments.'
    },
    {
      question: 'Can dentures be fixed securely with implants?',
      answer:
        'Yes. Implant-supported overdentures snap onto 2 to 4 titanium implants, completely stopping unwanted movement and slipping while eating.'
    }
  ],
  related: ['dental-implants', 'crowns-and-bridges', 'general-dentistry']
};

export const toothExtraction: Service = {
  slug: 'tooth-extraction',
  name: 'Wisdom Tooth & Gentle Extractions',
  category: 'restorative',
  short: 'Painless, gentle tooth removal and wisdom tooth extractions with comfortable local anesthesia and rapid healing.',
  image: images.toothExtraction,
  imageAlt: 'Anatomical educational illustration of gentle tooth extraction procedure with surgical dental instruments',
  seoTitle: 'Painless Tooth & Wisdom Tooth Extraction in Nashik | Dr. Naik\'s Shubh Smile Multispeciality Dental Clinic',
  metaDescription:
    'Gentle tooth removal and wisdom tooth extractions in Nashik. Painless techniques, careful bone preservation, and personalized post-extraction recovery support.',
  h1: 'Gentle Tooth and Wisdom Tooth Extraction in Nashik',
  intro: [
    'While our foremost philosophy is always natural tooth preservation, an extraction may occasionally be necessary when a tooth is compromised beyond repair by severe trauma, deep decay beneath the bone, or impaction.',
    'At Shubh Smile, extractions are performed with utmost gentleness under effective local anesthesia, ensuring you remain completely comfortable and relaxed throughout.'
  ],
  reasons: [
    'Impacted, painful, or misaligned wisdom teeth causing gum infections',
    'Severe tooth decay or fractures extending deep below the gum line',
    'Advanced periodontal disease with significant tooth mobility',
    'Orthodontic clearance to create necessary space for aligner or braces treatment',
    'Emergency relief for acute dental trauma or irreversible root infections'
  ],
  benefits: [
    'Immediate relief from acute, throbbing toothaches and infection pressure',
    'Prevents damage or crowding to neighboring healthy teeth and jawbone',
    'Minimally invasive extraction techniques that preserve surrounding alveolar bone',
    'Comprehensive aftercare guidance and prompt follow-up assistance for rapid healing'
  ],
  process: [
    { title: 'Diagnostic Radiograph', text: 'Digital X-rays evaluate root curvature, bone levels, and proximity to anatomical nerves.' },
    { title: 'Complete Local Anesthesia', text: 'Targeted numbing ensures the treatment area is entirely pain-free before procedure begins.' },
    { title: 'Gentle Elevation', text: 'Careful precision instruments gently loosen and remove the tooth with minimal tissue pressure.' },
    { title: 'Hemostasis & Post-Care', text: 'A sterile gauze compress is placed, and clear instructions for comfortable recovery are provided.' }
  ],
  suitability:
    'Evaluated carefully through clinical examination and digital radiographs. Medical history and medications are thoroughly reviewed prior to procedure.',
  faqs: [
    {
      question: 'Will I feel pain during a tooth extraction?',
      answer:
        'No. Effective local anesthesia completely numbs the tooth and surrounding gums. You may feel slight pressure, but no sharp discomfort or pain.'
    },
    {
      question: 'How long does recovery take after an extraction?',
      answer:
        'Most patients resume normal light activities within 24 to 48 hours. The extraction site heals substantially within 1 to 2 weeks with our gentle post-care protocol.'
    }
  ],
  related: ['root-canal-treatment', 'dental-implants', 'general-dentistry']
};
