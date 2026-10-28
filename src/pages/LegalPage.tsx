import React from 'react';
import { SEOHead } from '../components/shared/SEOHead';
import { PageHero } from '../components/shared/PageHero';
import { siteConfig } from '../data/siteConfig';

type LegalKind = 'privacy' | 'terms';

const content: Record<LegalKind, {title: string;path: string;intro: string;sections: {heading: string;text: string;}[];}> = {
  privacy: {
    title: 'Privacy Policy',
    path: '/privacy-policy',
    intro: '[Placeholder — replace with a privacy policy reviewed by a qualified legal professional before launch.]',
    sections: [
    {
      heading: 'Information you share with us',
      text: 'When you send an inquiry, you may share your name, phone number, email address, treatment interest and a short message. Inquiry forms on this website prepare a WhatsApp message on your device; they do not store your details on our servers.'
    },
    {
      heading: 'How we use your information',
      text: '[Describe how the clinic uses contact details — for example, to respond to inquiries and arrange appointments.]'
    },
    {
      heading: 'Third-party services',
      text: 'Messages sent through WhatsApp are subject to WhatsApp’s own privacy policy. [List any analytics or other third-party services used.]'
    },
    { heading: 'Contact', text: `For privacy questions, contact ${siteConfig.email}.` }]

  },
  terms: {
    title: 'Terms of Use',
    path: '/terms-of-use',
    intro: '[Placeholder — replace with terms of use reviewed by a qualified legal professional before launch.]',
    sections: [
    {
      heading: 'Educational information',
      text: 'Content on this website is for general information only and does not replace personal advice from a qualified dentist. Treatment suitability is determined through an individual examination.'
    },
    {
      heading: 'Inquiries and appointments',
      text: 'Submitting an inquiry does not confirm an appointment. The clinic will reply with available options.'
    },
    { heading: 'Changes', text: '[Describe how and when these terms may be updated.]' }]

  }
};

export function LegalPage({ kind }: {kind: LegalKind;}) {
  const page = content[kind];
  return (
    <>
      <SEOHead title={`${page.title} | ${siteConfig.name}`} description={`${page.title} for ${siteConfig.name}, Nashik.`} path={page.path} />
      <PageHero crumbs={[{ label: 'Home', href: '/' }, { label: page.title }]} title={page.title} intro={<p>{page.intro}</p>} />
      <section className="bg-white py-20 md:py-28">
        <div className="mx-auto max-w-3xl px-5 md:px-8">
          {page.sections.map((s) =>
          <div key={s.heading} className="border-t border-charcoal/10 py-8">
              <h2 className="font-serif text-[30px] font-medium text-charcoal">{s.heading}</h2>
              <p className="mt-3 text-[16px] leading-[1.8] text-charcoal/75">{s.text}</p>
            </div>
          )}
        </div>
      </section>
    </>);

}