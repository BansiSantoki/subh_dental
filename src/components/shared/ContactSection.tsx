import React from 'react';
import { InstagramIcon, MailIcon, MapPinIcon, NavigationIcon, PhoneIcon } from 'lucide-react';
import { InquiryForm } from '../forms/InquiryForm';
import { Reveal } from './Reveal';
import { SectionHeading } from './SectionHeading';
import { WhatsAppLink } from './WhatsAppLink';
import { siteConfig } from '../../data/siteConfig';
import { images } from '../../data/images';

interface ContactSectionProps {
  initialTreatment?: string;
  title?: string;
}

export function ContactSection({ initialTreatment, title = 'Let’s Take the First Step Toward Your Smile.' }: ContactSectionProps) {
  return (
    <section id="contact" aria-labelledby="contact-title" className="bg-white py-24 md:py-36">
      <div className="mx-auto grid max-w-[1440px] gap-14 px-5 md:px-8 lg:grid-cols-12 lg:gap-16 lg:px-12">
        <div className="lg:col-span-5">
          <SectionHeading
            id="contact-title"
            eyebrow="Contact us"
            title={title}
            intro="Whether you have a question, a concern or you’re ready to book a visit, we’re happy to help. Reach out the way that suits you best." />

          <Reveal delay={0.08}>
            <ul className="mt-12 divide-y divide-charcoal/10 border-y border-charcoal/10">
              <ContactRow icon={<MapPinIcon className="h-4 w-4" />} label="Clinic address">
                <span>{siteConfig.address}</span>
              </ContactRow>
              <ContactRow icon={<PhoneIcon className="h-4 w-4" />} label="Call us">
                <div className="space-y-2">
                  {siteConfig.phoneNumbers.map((phone) => (
                    <a key={phone.e164} href={`tel:${phone.e164}`} className="block hover:text-forest">
                      {phone.display}
                    </a>
                  ))}
                </div>
              </ContactRow>
              <ContactRow icon={<MailIcon className="h-4 w-4" />} label="Email">
                <a href={`mailto:${siteConfig.email}`} className="hover:text-forest">
                  {siteConfig.email}
                </a>
              </ContactRow>
              <ContactRow icon={<InstagramIcon className="h-4 w-4" />} label="Instagram">
                <a href={siteConfig.instagramUrl} target="_blank" rel="noopener noreferrer" className="hover:text-forest">
                  {siteConfig.instagramUsername}
                </a>
              </ContactRow>
            </ul>

            <div className="mt-8 flex flex-wrap gap-3">
              <WhatsAppLink size="lg" className="w-full sm:w-auto">Chat with us on WhatsApp</WhatsAppLink>
              <a
                href={siteConfig.googleMapsUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center justify-center rounded-full border border-charcoal/10 bg-ivory px-5 py-3 text-sm font-semibold text-charcoal transition-colors hover:border-forest hover:text-forest"
              >
                <NavigationIcon className="mr-2 h-4 w-4" />
                Get Directions
              </a>
            </div>

            <div className="relative mt-10 overflow-hidden rounded-[24px]">
              {siteConfig.mapEmbedUrl ? (
                <iframe
                  title={`Map showing ${siteConfig.name}`}
                  src={siteConfig.mapEmbedUrl}
                  loading="lazy"
                  referrerPolicy="no-referrer-when-downgrade"
                  className="aspect-[16/10] w-full border-0" />
              ) : (
                <div className="relative aspect-[16/10]">
                  <img src={images.reception} alt="" loading="lazy" className="absolute inset-0 h-full w-full object-cover opacity-40 grayscale" />
                  <div className="absolute inset-0 flex items-center justify-center bg-ivory/60 p-6 text-center">
                    <p className="max-w-xs text-[14px] font-medium leading-relaxed text-charcoal/80">
                      A map will appear here once the verified clinic address is added.
                    </p>
                  </div>
                </div>
              )}
            </div>

            <div className="mt-10 rounded-[28px] border border-charcoal/10 bg-slate-50 p-5 sm:p-6">
              <div className="flex items-center gap-3">
                <div className="flex h-12 w-12 items-center justify-center rounded-2xl bg-white text-rose-500 shadow-sm">
                  <InstagramIcon className="h-5 w-5" />
                </div>
                <div>
                  <p className="text-[11px] font-semibold uppercase tracking-[0.18em] text-slate-500">Follow us</p>
                  <h3 className="font-serif text-[24px] font-medium text-charcoal">Follow Us on Instagram</h3>
                </div>
              </div>

              <div className="mt-5 flex flex-col items-center rounded-[22px] border border-charcoal/10 bg-white p-5 text-center shadow-sm sm:flex-row sm:justify-center">
                <img
                  src={siteConfig.instagramQrCode}
                  alt="Instagram QR code for @shubhsmiledental"
                  className="h-36 w-36 rounded-2xl border border-charcoal/10 object-cover shadow-sm"
                  onError={(event) => {
                    const target = event.currentTarget as HTMLImageElement;
                    target.style.display = 'none';
                  }}
                />
              </div>

              <div className="mt-5 text-center">
                <a href={siteConfig.instagramUrl} target="_blank" rel="noopener noreferrer" className="inline-flex items-center gap-2 text-base font-semibold text-charcoal hover:text-forest">
                  <InstagramIcon className="h-4 w-4" />
                  {siteConfig.instagramUsername}
                </a>
              </div>
            </div>
          </Reveal>
        </div>

        <Reveal delay={0.12} className="lg:col-span-7">
          <div className="rounded-[32px] bg-ivory p-6 sm:p-10 lg:p-12">
            <h3 className="font-serif text-[32px] font-medium leading-tight text-charcoal">Request a consultation</h3>
            <p className="mb-9 mt-2 text-[15px] leading-relaxed text-charcoal/65">
              Fields marked as optional can be left blank. We’ll prepare your inquiry for WhatsApp so you can send it
              directly to our team.
            </p>
            <InquiryForm initialTreatment={initialTreatment} />
          </div>
        </Reveal>
      </div>
    </section>);

}

function ContactRow({ icon, label, children }: {icon: React.ReactNode;label: string;children: React.ReactNode;}) {
  return (
    <li className="grid grid-cols-[40px_1fr] gap-4 py-5">
      <span className="flex h-10 w-10 items-center justify-center rounded-full bg-sage text-forest" aria-hidden="true">
        {icon}
      </span>
      <div>
        <p className="text-[12px] font-semibold uppercase tracking-[0.16em] text-muted">{label}</p>
        <p className="mt-1 text-[15.5px] leading-relaxed text-charcoal">{children}</p>
      </div>
    </li>);

}