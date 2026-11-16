import React, { useState } from 'react';
import {
  HeartPulse,
  AlertCircle,
  Phone,
  MessageSquare,
  ShieldCheck,
  CheckCircle2,
  Clock,
  HelpCircle,
  Calendar
} from 'lucide-react';
import { SEOHead } from '../components/shared/SEOHead';
import { Breadcrumbs } from '../components/shared/Breadcrumbs';
import { WhatsAppLink } from '../components/shared/WhatsAppLink';
import { siteConfig } from '../data/siteConfig';
import { images } from '../data/images';
import { buttonClass } from '../utils/buttonStyles';
import { useAppointment } from '../contexts/AppointmentContext';
import { breadcrumbSchema, webPageSchema } from '../utils/structuredData';
import { whatsappUrl } from '../utils/whatsapp';

const aftercareCategories = [
  {
    title: 'Routine Cleaning & Scaling',
    summary: 'Mild gum sensitivity is normal for 24–48 hours.',
    guidance: [
      'Rinse gently with lukewarm saltwater if your gums feel sensitive.',
      'Use a soft-bristled toothbrush and brush gently around the gumline.',
      'Avoid extremely hot, cold, or highly acidic foods on the day of treatment.',
      'Continue regular flossing to keep the cleaned areas free of plaque.'
    ]
  },
  {
    title: 'Tooth Fillings & Bonding',
    summary: 'Restorations are set, but local anaesthetic takes time to wear off.',
    guidance: [
      'Avoid chewing until the numbness from anaesthetic has completely subsided to prevent biting your cheek or tongue.',
      'Mild sensitivity to cold or pressure is common for a few days as the nerve settles.',
      'If your bite feels uneven or higher than surrounding teeth, contact our clinic for a simple, painless adjustment.'
    ]
  },
  {
    title: 'Root Canal Treatment',
    summary: 'Tenderness around the treated tooth is expected while tissues heal.',
    guidance: [
      'Take recommended pain relief as advised by Dr. Naik if tenderness occurs.',
      'Avoid biting hard or crunchy foods on the treated side until the permanent crown is placed.',
      'Brush and floss normally around the tooth, taking care with temporary filling material.',
      'Attend your follow-up appointment to have your permanent restoration or crown fitted.'
    ]
  },
  {
    title: 'Tooth Extraction & Oral Surgery',
    summary: 'Protecting the blood clot is key to smooth, comfortable healing.',
    guidance: [
      'Keep firm, gentle bite pressure on the gauze pad for 30–45 minutes following extraction.',
      'Do not spit forcefully, smoke, or drink through a straw for at least 24 hours.',
      'Eat soft, cool foods such as curd, khichdi, or soups; avoid hot and spicy meals.',
      'After 24 hours, begin gentle saltwater rinses (half teaspoon salt in warm water) after meals.'
    ]
  },
  {
    title: 'Clear Aligners & Orthodontics',
    summary: 'Consistent wear and cleanliness protect both teeth and aligners.',
    guidance: [
      'Wear your aligners 20–22 hours per day as prescribed for predictable movement.',
      'Clean your aligners with lukewarm water and a soft brush; never use hot water.',
      'Always remove aligners while drinking hot beverages, tea, or eating meals.',
      'Keep previous trays safely in your case as backup.'
    ]
  },
  {
    title: 'Dental Crowns & Bridges',
    summary: 'Getting accustomed to a new restoration usually takes a few days.',
    guidance: [
      'Avoid sticky or very hard foods for the first 24 hours while permanent cement sets fully.',
      'Maintain regular brushing and use floss or interdental brushes under the bridge margins.',
      'Contact the clinic promptly if you notice any looseness or persistent bite discomfort.'
    ]
  }
];

export function PostTreatmentSupportPage() {
  const { openAppointment } = useAppointment();
  const [patientName, setPatientName] = useState('');
  const [treatmentName, setTreatmentName] = useState('');
  const [concernText, setConcernText] = useState('');

  const title = `Post-Treatment Support & Dental Aftercare | ${siteConfig.name}`;
  const description =
    `Helpful post-treatment dental care guidance from Dr. Naik's Shubh Smile Multispeciality Dental Clinic in Nashik. Recovery tips for cleanings, fillings, root canals, and extractions.`;

  const handleWhatsAppInquiry = (e: React.FormEvent) => {
    e.preventDefault();
    const msg = `Hello Dr. Naik's Shubh Smile Dental Clinic,\nI have a post-treatment query:\n- Patient: ${patientName || 'Patient'}\n- Treatment: ${treatmentName || 'General Dental Treatment'}\n- Question/Symptom: ${concernText || 'Need aftercare advice'}`;
    window.open(whatsappUrl(msg), '_blank');
  };

  return (
    <>
      <SEOHead
        title={title}
        description={description}
        path="/post-treatment-support"
        image={images.treatmentRoom}
        jsonLd={[
          webPageSchema(title, description, '/post-treatment-support'),
          breadcrumbSchema([
            { name: 'Home', path: '/' },
            { name: 'Post-Treatment Support', path: '/post-treatment-support' }
          ])
        ]}
      />

      <div className="bg-[#F4F9FC] pt-28 pb-16 md:pt-36 md:pb-24">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 md:px-8 lg:px-12">
          <Breadcrumbs items={[{ label: 'Home', href: '/' }, { label: 'Post-Treatment Support' }]} />

          {/* Hero Header */}
          <div className="mt-6 max-w-3xl">
            <span className="inline-flex items-center gap-2 rounded-full bg-white px-3.5 py-1 text-xs font-semibold text-[#087FAE] border border-[#087FAE]/20 shadow-2xs">
              <HeartPulse className="h-3.5 w-3.5" />
              Patient Aftercare & Recovery
            </span>
            <h1 className="mt-4 font-serif text-3xl sm:text-4xl lg:text-[44px] font-bold tracking-tight text-[#123B59] leading-tight">
              Care that extends well beyond the <span className="text-[#087FAE]">dental chair.</span>
            </h1>
            <p className="mt-4 text-base sm:text-lg leading-relaxed text-[#34465A]">
              Your comfort during healing is just as important as the treatment itself. Below are straightforward, verified home-care guidelines to help you recover smoothly following your visit to Dr. Naik's Shubh Smile Multispeciality Dental Clinic in Nashik.
            </p>
          </div>

          {/* Urgent Care Advisory Notice */}
          <div className="mt-10 rounded-2xl border border-amber-200 bg-amber-50/80 p-5 sm:p-6">
            <div className="flex gap-4 items-start">
              <AlertCircle className="h-6 w-6 text-amber-700 shrink-0 mt-0.5" />
              <div>
                <h2 className="font-serif text-lg font-bold text-amber-900">
                  When to Contact Our Clinic Promptly
                </h2>
                <p className="mt-1 text-sm leading-relaxed text-amber-800">
                  While mild soreness or adjustment tenderness is normal, please call or WhatsApp our clinic immediately if you experience persistent heavy bleeding, worsening facial swelling, high fever, or severe pain that does not respond to prescribed medication.
                </p>
                <div className="mt-3 flex flex-wrap gap-4 text-xs font-semibold text-amber-900">
                  <a href={`tel:${siteConfig.phoneE164}`} className="underline hover:text-amber-950">
                    Clinic Call: {siteConfig.phoneDisplay}
                  </a>
                  <span>·</span>
                  <a href={`tel:${siteConfig.secondaryPhoneE164}`} className="underline hover:text-amber-950">
                    Secondary: {siteConfig.secondaryPhoneDisplay}
                  </a>
                </div>
              </div>
            </div>
          </div>

          {/* Aftercare Cards Grid */}
          <div className="mt-14">
            <div className="text-center max-w-2xl mx-auto">
              <span className="text-xs font-semibold text-[#087FAE] bg-[#EAF4FA] px-3 py-1 rounded-full">
                Treatment-Specific Guidance
              </span>
              <h2 className="mt-3 font-serif text-2xl sm:text-3xl lg:text-4xl font-bold text-[#123B59]">
                General Aftercare Instructions
              </h2>
              <p className="mt-2 text-sm sm:text-base text-[#34465A]/85">
                Clear, simple steps for everyday dental procedures. Always follow any specific personalized advice provided directly by Dr. Naik during your visit.
              </p>
            </div>

            <div className="mt-10 grid gap-6 md:grid-cols-2 lg:grid-cols-3">
              {aftercareCategories.map((cat) => (
                <article
                  key={cat.title}
                  className="flex flex-col justify-between rounded-2xl border border-[#E2EAF0] bg-white p-6 shadow-xs"
                >
                  <div>
                    <h3 className="font-serif text-lg font-bold text-[#123B59] leading-snug">
                      {cat.title}
                    </h3>
                    <p className="mt-1.5 text-xs font-medium text-[#087FAE]">
                      {cat.summary}
                    </p>

                    <ul className="mt-4 space-y-2.5 text-xs sm:text-sm text-[#34465A]/85">
                      {cat.guidance.map((tip, i) => (
                        <li key={i} className="flex items-start gap-2">
                          <CheckCircle2 className="h-4 w-4 text-[#087FAE] shrink-0 mt-0.5" />
                          <span>{tip}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                </article>
              ))}
            </div>
          </div>

          {/* Direct Post-Treatment WhatsApp Help Desk Box */}
          <div className="mt-16 rounded-3xl border border-[#E2EAF0] bg-white p-8 sm:p-12 shadow-xs">
            <div className="grid gap-8 lg:grid-cols-12 lg:items-center">
              <div className="lg:col-span-7">
                <span className="text-xs font-semibold text-[#087FAE] flex items-center gap-1.5">
                  <span className="h-1.5 w-1.5 rounded-full bg-[#087FAE]" />
                  <span>Direct Clinical Helpline</span>
                </span>
                <h3 className="mt-2 font-serif text-2xl sm:text-3xl font-bold text-[#123B59]">
                  Have a Question About Your Healing?
                </h3>
                <p className="mt-3 text-sm sm:text-base leading-relaxed text-[#34465A]/85">
                  If you have had a recent procedure at Shubh Smile and want to clarify an aftercare instruction, verify normal healing symptoms, or request a quick review, message our clinic team on WhatsApp with your details.
                </p>

                <div className="mt-6 flex flex-wrap gap-4 text-xs sm:text-sm text-[#34465A]">
                  <div className="flex items-center gap-2">
                    <Clock className="h-4 w-4 text-[#087FAE]" />
                    <span>Mon – Sat: 9:30 AM – 8:30 PM</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <Phone className="h-4 w-4 text-[#087FAE]" />
                    <a href={`tel:${siteConfig.phoneE164}`} className="font-semibold text-[#087FAE] hover:underline">
                      {siteConfig.phoneDisplay}
                    </a>
                  </div>
                </div>
              </div>

              {/* Inquiry Mini-Form */}
              <div className="rounded-2xl bg-[#F4F9FC] p-6 sm:p-7 border border-[#E2EAF0] lg:col-span-5">
                <h4 className="font-serif text-base font-bold text-[#123B59]">
                  Send an Aftercare Query
                </h4>
                <form onSubmit={handleWhatsAppInquiry} className="mt-4 space-y-3">
                  <div>
                    <label htmlFor="patient-name" className="block text-xs font-semibold text-[#123B59]">
                      Your Name
                    </label>
                    <input
                      id="patient-name"
                      type="text"
                      required
                      placeholder="e.g. Ramesh Patil"
                      value={patientName}
                      onChange={(e) => setPatientName(e.target.value)}
                      className="mt-1 w-full rounded-xl border border-[#E2EAF0] bg-white px-3.5 py-2 text-xs sm:text-sm text-[#123B59] focus:border-[#087FAE] focus:outline-none"
                    />
                  </div>

                  <div>
                    <label htmlFor="treatment-type" className="block text-xs font-semibold text-[#123B59]">
                      Treatment Received
                    </label>
                    <input
                      id="treatment-type"
                      type="text"
                      placeholder="e.g. Root Canal / Cleaning / Extraction"
                      value={treatmentName}
                      onChange={(e) => setTreatmentName(e.target.value)}
                      className="mt-1 w-full rounded-xl border border-[#E2EAF0] bg-white px-3.5 py-2 text-xs sm:text-sm text-[#123B59] focus:border-[#087FAE] focus:outline-none"
                    />
                  </div>

                  <div>
                    <label htmlFor="concern-notes" className="block text-xs font-semibold text-[#123B59]">
                      Your Question or Concern
                    </label>
                    <textarea
                      id="concern-notes"
                      rows={2}
                      placeholder="Describe your question or healing symptom..."
                      value={concernText}
                      onChange={(e) => setConcernText(e.target.value)}
                      className="mt-1 w-full rounded-xl border border-[#E2EAF0] bg-white px-3.5 py-2 text-xs sm:text-sm text-[#123B59] focus:border-[#087FAE] focus:outline-none"
                    />
                  </div>

                  <button
                    type="submit"
                    className={buttonClass('whatsapp', 'md', 'w-full shadow-xs mt-2')}
                  >
                    <MessageSquare className="h-4 w-4" />
                    <span>WhatsApp Our Clinic Team</span>
                  </button>
                </form>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

