import React from 'react';
import {
  Compass,
  MapPin,
  Calendar,
  MessageSquare,
  Clock,
  CheckCircle2,
  Phone,
  Plane,
  Train,
  Car
} from 'lucide-react';
import { SEOHead } from '../components/shared/SEOHead';
import { Breadcrumbs } from '../components/shared/Breadcrumbs';
import { WhatsAppLink } from '../components/shared/WhatsAppLink';
import { siteConfig } from '../data/siteConfig';
import { images } from '../data/images';
import { buttonClass } from '../utils/buttonStyles';
import { useAppointment } from '../contexts/AppointmentContext';
import { breadcrumbSchema, webPageSchema } from '../utils/structuredData';

const travelSteps = [
  {
    step: '01',
    title: 'Initial Digital Conversation',
    description:
      'Contact our clinic team on WhatsApp with your dental goals, previous dental history, and any recent digital X-rays or photos. Let us know your planned travel dates to Nashik.'
  },
  {
    step: '02',
    title: 'Preliminary Feasibility & Timeline',
    description:
      'We discuss potential treatment options and suggest a realistic timeline (e.g. single-session vs. multiple days) so you can plan your travel schedule comfortably.'
  },
  {
    step: '03',
    title: 'Comprehensive In-Person Examination',
    description:
      'Upon arrival in Nashik, you receive a full clinical examination, diagnostic digital X-rays if needed, and a confirmed, transparent treatment roadmap with zero pressure.'
  },
  {
    step: '04',
    title: 'Treatment Delivery & Follow-Up Guidance',
    description:
      'Your care is completed with gentle precision. Before heading home, you receive full aftercare instructions and direct WhatsApp access for ongoing follow-up questions.'
  }
];

const nashikHighlights = [
  {
    title: 'Accessible Travel Hub',
    description: 'Well-connected by the Mumbai-Nashik Expressway (approx. 3.5 hours from Mumbai) and direct express trains.'
  },
  {
    title: 'Serene Heritage & Wine Capital',
    description: 'Enjoy Nashik’s pleasant climate, historic temples, and scenic vineyards while caring for your dental wellness.'
  },
  {
    title: 'Convenient Clinic Location',
    description: 'Situated at Shastri Nagar, Indira Nagar, easily reachable from major hotels, transit points, and express routes.'
  }
];

export function DentalTourismPage() {
  const { openAppointment } = useAppointment();
  const title = `Dental Tourism in Nashik, Maharashtra | ${siteConfig.name}`;
  const description =
    `Plan your dental visit to Nashik with Dr. Naik's Shubh Smile Multispeciality Dental Clinic. Transparent consultation process, treatment planning, and travel advice for visiting patients.`;

  return (
    <>
      <SEOHead
        title={title}
        description={description}
        path="/dental-tourism"
        image={images.nashikVineyard}
        jsonLd={[
          webPageSchema(title, description, '/dental-tourism'),
          breadcrumbSchema([
            { name: 'Home', path: '/' },
            { name: 'Dental Tourism', path: '/dental-tourism' }
          ])
        ]}
      />

      <div className="bg-[#F4F9FC] pt-28 pb-16 md:pt-36 md:pb-24">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 md:px-8 lg:px-12">
          <Breadcrumbs items={[{ label: 'Home', href: '/' }, { label: 'Dental Tourism' }]} />

          {/* Page Hero Header */}
          <div className="mt-6 max-w-3xl">
            <span className="inline-flex items-center gap-2 rounded-full bg-white px-3.5 py-1 text-xs font-semibold text-[#087FAE] border border-[#087FAE]/20 shadow-2xs">
              <Compass className="h-3.5 w-3.5" />
              Visiting Nashik for Dental Care
            </span>
            <h1 className="mt-4 font-serif text-3xl sm:text-4xl lg:text-[44px] font-bold tracking-tight text-[#123B59] leading-tight">
              Thoughtful dental care tailored for your <span className="text-[#087FAE]">visit to Nashik.</span>
            </h1>
            <p className="mt-4 text-base sm:text-lg leading-relaxed text-[#34465A]">
              Whether you are visiting family in Maharashtra, holidaying in the wine capital of India, or traveling from nearby cities like Mumbai or Pune, Dr. Naik's Shubh Smile Multispeciality Dental Clinic offers unhurried consultations and meticulously planned dental treatments.
            </p>
          </div>

          {/* Scenic Nashik Landscape Card */}
          <div className="mt-12 overflow-hidden rounded-3xl border border-[#E2EAF0] bg-white shadow-sm">
            <div className="relative aspect-[16/9] sm:aspect-[21/9] w-full bg-slate-100">
              <img
                src={images.nashikVineyard}
                alt="Scenic vineyard landscape and hills of Nashik, Maharashtra"
                className="h-full w-full object-cover"
                loading="eager"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-[#123B59]/80 via-transparent to-transparent" />
              <div className="absolute bottom-5 left-5 right-5 text-white">
                <span className="inline-block rounded-full bg-white/20 backdrop-blur-xs px-3 py-0.5 text-xs font-semibold text-[#EAF4FA]">
                  Nashik, Maharashtra
                </span>
                <p className="mt-1 font-serif text-lg sm:text-2xl font-bold">
                  A peaceful city for dental care, scenic getaways, and gentle healing.
                </p>
              </div>
            </div>
          </div>

          {/* 4-Step Consultation Process */}
          <div className="mt-16">
            <div className="text-center max-w-2xl mx-auto">
              <span className="text-xs font-semibold text-[#087FAE] bg-[#EAF4FA] px-3 py-1 rounded-full">
                Step-by-Step Pathway
              </span>
              <h2 className="mt-3 font-serif text-2xl sm:text-3xl lg:text-4xl font-bold text-[#123B59]">
                How Dental Care for Travelers Works
              </h2>
              <p className="mt-2 text-sm sm:text-base text-[#34465A]/85">
                We believe in complete transparency before you book any travel. Here is how our four-step planning process works:
              </p>
            </div>

            <div className="mt-10 grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
              {travelSteps.map((s) => (
                <article
                  key={s.step}
                  className="flex flex-col justify-between rounded-2xl border border-[#E2EAF0] bg-white p-6 shadow-xs"
                >
                  <div>
                    <span className="flex h-10 w-10 items-center justify-center rounded-xl bg-[#087FAE] text-white font-serif font-bold text-sm shadow-xs">
                      {s.step}
                    </span>
                    <h3 className="mt-4 font-serif text-lg font-bold text-[#123B59] leading-snug">
                      {s.title}
                    </h3>
                    <p className="mt-2 text-xs sm:text-sm leading-relaxed text-[#34465A]/85">
                      {s.description}
                    </p>
                  </div>
                </article>
              ))}
            </div>
          </div>

          {/* Travel & Transit Information */}
          <div className="mt-16 rounded-3xl border border-[#E2EAF0] bg-white p-8 sm:p-12 shadow-xs">
            <div className="grid gap-8 lg:grid-cols-12 lg:items-center">
              <div className="lg:col-span-7">
                <span className="text-xs font-semibold text-[#087FAE] flex items-center gap-1.5">
                  <span className="h-1.5 w-1.5 rounded-full bg-[#087FAE]" />
                  <span>Getting to Nashik</span>
                </span>
                <h3 className="mt-2 font-serif text-2xl sm:text-3xl font-bold text-[#123B59]">
                  Convenient Connectivity & Clinical Accessibility
                </h3>
                <p className="mt-3 text-sm sm:text-base leading-relaxed text-[#34465A]/85">
                  Nashik is one of western India’s most accessible cities, well-connected to major metropolitan centers via modern expressways and regular rail networks:
                </p>

                <div className="mt-6 grid gap-4 sm:grid-cols-3">
                  <div className="rounded-xl border border-[#E2EAF0] bg-[#F4F9FC] p-4 text-center">
                    <Car className="h-6 w-6 text-[#087FAE] mx-auto mb-2" />
                    <p className="text-xs font-bold text-[#123B59]">By Road</p>
                    <p className="mt-1 text-[11px] text-[#34465A]/80">3.5 hrs from Mumbai via Samruddhi / NH-160</p>
                  </div>
                  <div className="rounded-xl border border-[#E2EAF0] bg-[#F4F9FC] p-4 text-center">
                    <Train className="h-6 w-6 text-[#087FAE] mx-auto mb-2" />
                    <p className="text-xs font-bold text-[#123B59]">By Rail</p>
                    <p className="mt-1 text-[11px] text-[#34465A]/80">Frequent trains to Nashik Road Railway Station</p>
                  </div>
                  <div className="rounded-xl border border-[#E2EAF0] bg-[#F4F9FC] p-4 text-center">
                    <MapPin className="h-6 w-6 text-[#087FAE] mx-auto mb-2" />
                    <p className="text-xs font-bold text-[#123B59]">Location</p>
                    <p className="mt-1 text-[11px] text-[#34465A]/80">Indira Nagar, near Mumbai Agra highway exit</p>
                  </div>
                </div>

                <p className="mt-6 text-xs text-[#34465A]/70 leading-relaxed italic">
                  * Note: Actual treatment suitability, clinical steps, and exact timelines can only be determined after an in-person clinical examination by Dr. Naik.
                </p>
              </div>

              {/* Inquiry Action Card */}
              <div className="rounded-2xl bg-[#F4F9FC] p-6 sm:p-8 border border-[#E2EAF0] text-center lg:col-span-5">
                <div className="flex h-14 w-14 items-center justify-center rounded-2xl bg-[#087FAE] text-white mx-auto shadow-sm">
                  <MessageSquare className="h-7 w-7" />
                </div>
                <h4 className="mt-4 font-serif text-xl font-bold text-[#123B59]">
                  Start Your Travel Inquiry
                </h4>
                <p className="mt-2 text-xs sm:text-sm text-[#34465A]/80 leading-relaxed max-w-sm mx-auto">
                  Connect with our team to discuss your dates and treatment questions. We will assist you with scheduling and time estimates.
                </p>

                <div className="mt-6 flex flex-col gap-3">
                  <WhatsAppLink
                    message={siteConfig.tourismWhatsAppMessage}
                    size="lg"
                    className="w-full shadow-xs"
                  >
                    <span>Inquire on WhatsApp</span>
                  </WhatsAppLink>

                  <button
                    type="button"
                    onClick={() => openAppointment('a consultation during my visit to Nashik')}
                    className={buttonClass('secondary', 'lg', 'w-full')}
                  >
                    <Calendar className="h-4 w-4" />
                    <span>Plan Appointment Online</span>
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

