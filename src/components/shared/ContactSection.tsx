import React from 'react';
import { InstagramIcon, MailIcon, MapPinIcon, NavigationIcon, PhoneIcon, ClockIcon } from 'lucide-react';
import { InquiryForm } from '../forms/InquiryForm';
import { Reveal } from './Reveal';
import { SectionHeading } from './SectionHeading';
import { WhatsAppLink } from './WhatsAppLink';
import { siteConfig } from '../../data/siteConfig';

interface ContactSectionProps {
  initialTreatment?: string;
  title?: string;
}

export function ContactSection({
  initialTreatment,
  title = "Let's Take the First Step Toward Your Healthier Smile."
}: ContactSectionProps) {
  return (
    <section id="contact" aria-labelledby="contact-title" className="bg-white py-20 md:py-28 lg:py-32">
      <div className="mx-auto max-w-[1440px] px-4 sm:px-6 md:px-8 lg:px-12">
        <div className="grid gap-14 lg:grid-cols-12 lg:gap-16">
          {/* Left Column: Contact Details, Map & Instagram */}
          <div className="lg:col-span-5">
            <SectionHeading
              id="contact-title"
              eyebrow="Visit & Contact Us"
              title={title}
              intro="Whether you have a general query, wish to schedule an appointment, or need post-treatment support, our Nashik team is here to assist you."
            />

            <Reveal delay={0.08}>
              <ul className="mt-8 divide-y divide-[#E2EAF0] border-y border-[#E2EAF0] text-sm text-[#34465A]">
                {/* Address */}
                <li className="py-4">
                  <div className="flex items-start gap-3">
                    <MapPinIcon className="h-5 w-5 shrink-0 text-[#087FAE] mt-0.5" />
                    <div>
                      <p className="text-xs font-semibold text-[#087FAE]">Clinic Location</p>
                      <p className="mt-1 leading-relaxed text-[#34465A]">{siteConfig.address}</p>
                    </div>
                  </div>
                </li>

                {/* Direct Phone Numbers */}
                <li className="py-4">
                  <div className="flex items-start gap-3">
                    <PhoneIcon className="h-5 w-5 shrink-0 text-[#087FAE] mt-0.5" />
                    <div>
                      <p className="text-xs font-semibold text-[#087FAE]">Call Clinic Reception</p>
                      <div className="mt-1 space-y-1">
                        <a href={`tel:${siteConfig.phoneE164}`} className="block font-semibold text-[#087FAE] hover:underline">
                          {siteConfig.phoneDisplay}
                        </a>
                        <a href={`tel:${siteConfig.secondaryPhoneE164}`} className="block font-semibold text-[#087FAE] hover:underline">
                          {siteConfig.secondaryPhoneDisplay}
                        </a>
                      </div>
                    </div>
                  </div>
                </li>

                {/* Email */}
                <li className="py-4">
                  <div className="flex items-start gap-3">
                    <MailIcon className="h-5 w-5 shrink-0 text-[#087FAE] mt-0.5" />
                    <div>
                      <p className="text-xs font-semibold text-[#087FAE]">Email Us</p>
                      <a href={`mailto:${siteConfig.email}`} className="mt-1 block text-[#087FAE] hover:underline">
                        {siteConfig.email}
                      </a>
                    </div>
                  </div>
                </li>

                {/* Operating Hours */}
                <li className="py-4">
                  <div className="flex items-start gap-3">
                    <ClockIcon className="h-5 w-5 shrink-0 text-[#087FAE] mt-0.5" />
                    <div>
                      <p className="text-xs font-semibold text-[#087FAE]">Working Hours</p>
                      <p className="mt-1 leading-relaxed text-[#34465A]">
                        Monday – Saturday: 9:30 AM – 8:30 PM<br />
                        Sunday: Prior Appointment Only
                      </p>
                    </div>
                  </div>
                </li>
              </ul>

              {/* Action Buttons */}
              <div className="mt-6 flex flex-wrap gap-3">
                <WhatsAppLink size="lg" className="w-full sm:w-auto shadow-sm">
                  Chat on WhatsApp
                </WhatsAppLink>
                <a
                  href={siteConfig.googleMapsUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center justify-center rounded-full border border-[#E2EAF0] bg-[#F2F8FC] px-5 py-3 text-sm font-semibold text-[#123B59] hover:border-[#087FAE] hover:text-[#087FAE] transition-colors"
                >
                  <NavigationIcon className="mr-2 h-4 w-4 text-[#087FAE]" />
                  <span>Get Directions</span>
                </a>
              </div>

              {/* Embedded Google Map */}
              <div className="mt-8 overflow-hidden rounded-2xl border border-[#E2EAF0] shadow-sm">
                <iframe
                  title={`Map showing location of ${siteConfig.name}`}
                  src={siteConfig.mapEmbedUrl}
                  loading="lazy"
                  referrerPolicy="no-referrer-when-downgrade"
                  className="aspect-[16/10] w-full border-0"
                />
              </div>

              {/* Instagram Card with Real QR */}
              <div className="mt-6 rounded-2xl border border-[#E2EAF0] bg-[#F2F8FC] p-5">
                <div className="flex items-center gap-3">
                  <div className="flex h-11 w-11 items-center justify-center rounded-xl bg-white text-rose-500 shadow-xs">
                    <InstagramIcon className="h-5 w-5" />
                  </div>
                  <div>
                    <p className="text-xs font-semibold text-[#123B59]">Follow Our Updates</p>
                    <a
                      href={siteConfig.instagramUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-sm font-semibold text-[#087FAE] hover:underline"
                    >
                      {siteConfig.instagramUsername} &rarr;
                    </a>
                  </div>
                </div>

                <div className="mt-4 flex flex-col sm:flex-row items-center gap-4 rounded-xl bg-white p-4 border border-[#E2EAF0]">
                  <img
                    src={siteConfig.instagramQrCode}
                    alt="Instagram QR code for @shubhsmiledental"
                    className="h-28 w-28 rounded-lg border border-[#E2EAF0] object-cover"
                    loading="lazy"
                  />
                  <div className="text-center sm:text-left text-xs text-[#34465A]/80">
                    <p className="font-semibold text-[#123B59]">Scan to follow us on Instagram</p>
                    <p className="mt-1">Stay updated with dental tips, patient smiles, and clinic events in Nashik.</p>
                  </div>
                </div>
              </div>
            </Reveal>
          </div>

          {/* Right Column: Interactive Appointment & Inquiry Form */}
          <div className="lg:col-span-7">
            <div className="rounded-[28px] border border-[#E2EAF0] bg-[#F2F8FC] p-6 sm:p-10 shadow-sm">
              <h3 className="font-serif text-2xl sm:text-3xl font-bold text-[#123B59]">
                Send an Appointment Inquiry
              </h3>
              <p className="mt-2 text-sm text-[#34465A]/85 leading-relaxed">
                Fill in your details below. Our clinic coordinator will review your request and connect with you on WhatsApp to confirm convenient time slots.
              </p>

              <div className="mt-8 bg-white p-6 sm:p-8 rounded-2xl border border-[#E2EAF0] shadow-xs">
                <InquiryForm initialTreatment={initialTreatment} />
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
