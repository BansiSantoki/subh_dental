import React, { useState } from 'react';
import { Phone, Mail, MapPin, Clock, MessageSquare, Send, CheckCircle2, AlertCircle, Navigation } from 'lucide-react';
import { SEOHead } from '../components/shared/SEOHead';
import { Breadcrumbs } from '../components/shared/Breadcrumbs';
import { siteConfig } from '../data/siteConfig';
import { buttonClass } from '../utils/buttonStyles';
import { inputClass } from '../utils/formStyles';
import { whatsappUrl } from '../utils/whatsapp';

export function ContactPage() {
  const [name, setName] = useState('');
  const [phone, setPhone] = useState('');
  const [email, setEmail] = useState('');
  const [subject, setSubject] = useState('');
  const [message, setMessage] = useState('');
  const [submitted, setSubmitted] = useState(false);
  const [error, setError] = useState('');

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!name.trim()) {
      setError('Please enter your full name.');
      return;
    }
    if (!phone.trim() || phone.trim().length < 8) {
      setError('Please enter a valid phone number.');
      return;
    }
    setError('');
    setSubmitted(true);
  };

  const handleWhatsAppSend = () => {
    const text = `Hello Dr. Naik's Shubh Smile Multispeciality Dental Clinic,\nMy name is ${name || 'Patient'}.\nPhone: ${phone}\nTopic: ${subject || 'Inquiry'}\nMessage: ${message || 'I would like to inquire about dental care.'}`;
    window.open(whatsappUrl(text), '_blank');
  };

  return (
    <>
      <SEOHead
        title={`Contact Us & Clinic Location in Nashik | ${siteConfig.name}`}
        description="Contact Dr. Naik's Shubh Smile Multispeciality Dental Clinic in Nashik. Phone, WhatsApp, email, clinic address in Indira Nagar, and Google Maps directions."
        path="/contact"
      />

      <div className="bg-[#F2F8FC] pt-28 pb-16 md:pt-36 md:pb-24">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 md:px-8 lg:px-12">
          <Breadcrumbs items={[{ label: 'Home', href: '/' }, { label: 'Contact Us' }]} />

          {/* Page Header */}
          <div className="mt-6 max-w-3xl">
            <span className="inline-flex items-center gap-2 rounded-full bg-white px-3.5 py-1 text-xs font-semibold text-[#087FAE] border border-[#087FAE]/20 shadow-2xs">
              <MapPin className="h-3.5 w-3.5" />
              Visit & Inquire
            </span>
            <h1 className="mt-4 font-serif text-3xl sm:text-4xl lg:text-[44px] font-bold tracking-tight text-[#123B59] leading-tight">
              We are here to help you <span className="text-[#087FAE]">smile with ease.</span>
            </h1>
            <p className="mt-4 text-base sm:text-lg leading-relaxed text-[#34465A]">
              Whether you have a general query, wish to schedule an appointment, or need directions to our Nashik clinic, our team is happy to assist you.
            </p>
          </div>

          {/* Contact Details Grid */}
          <div className="mt-10 grid gap-5 sm:grid-cols-2 lg:grid-cols-4">
            {/* Phone */}
            <div className="rounded-2xl border border-[#E2EAF0] bg-white p-6 shadow-sm">
              <div className="flex h-11 w-11 items-center justify-center rounded-xl bg-[#F2F8FC] text-[#087FAE]">
                <Phone className="h-5 w-5" />
              </div>
              <h3 className="mt-4 font-serif text-base font-bold text-[#123B59]">Call Reception</h3>
              <p className="mt-1 text-xs text-[#34465A]/70">Direct clinic reception lines</p>
              <div className="mt-3 space-y-1">
                <a href={`tel:${siteConfig.phoneE164}`} className="block text-sm font-bold text-[#087FAE] hover:underline">
                  {siteConfig.phoneDisplay}
                </a>
                <a href={`tel:${siteConfig.secondaryPhoneE164}`} className="block text-sm font-bold text-[#087FAE] hover:underline">
                  {siteConfig.secondaryPhoneDisplay}
                </a>
              </div>
            </div>

            {/* WhatsApp */}
            <div className="rounded-2xl border border-[#E2EAF0] bg-white p-6 shadow-sm">
              <div className="flex h-11 w-11 items-center justify-center rounded-xl bg-emerald-50 text-emerald-600">
                <MessageSquare className="h-5 w-5" />
              </div>
              <h3 className="mt-4 font-serif text-base font-bold text-[#123B59]">WhatsApp Chat</h3>
              <p className="mt-1 text-xs text-[#34465A]/70">Fast inquiries & appointments</p>
              <a
                href={whatsappUrl()}
                target="_blank"
                rel="noopener noreferrer"
                className="mt-3 block text-sm font-bold text-emerald-600 hover:underline"
              >
                Chat on WhatsApp &rarr;
              </a>
            </div>

            {/* Email */}
            <div className="rounded-2xl border border-[#E2EAF0] bg-white p-6 shadow-sm">
              <div className="flex h-11 w-11 items-center justify-center rounded-xl bg-[#F2F8FC] text-[#087FAE]">
                <Mail className="h-5 w-5" />
              </div>
              <h3 className="mt-4 font-serif text-base font-bold text-[#123B59]">Email Us</h3>
              <p className="mt-1 text-xs text-[#34465A]/70">Inquiries and consultations</p>
              <a
                href={`mailto:${siteConfig.email}`}
                className="mt-3 block truncate text-sm font-bold text-[#087FAE] hover:underline"
              >
                {siteConfig.email}
              </a>
            </div>

            {/* Address */}
            <div className="rounded-2xl border border-[#E2EAF0] bg-white p-6 shadow-sm">
              <div className="flex h-11 w-11 items-center justify-center rounded-xl bg-[#DCEFF8] text-[#087FAE]">
                <MapPin className="h-5 w-5" />
              </div>
              <h3 className="mt-4 font-serif text-base font-bold text-[#123B59]">Clinic Location</h3>
              <p className="mt-1 text-xs text-[#34465A]/70">Indira Nagar, Nashik</p>
              <a
                href={siteConfig.googleMapsUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="mt-3 block text-sm font-bold text-[#087FAE] hover:underline"
              >
                Get Directions &rarr;
              </a>
            </div>
          </div>

          {/* Form & Map Section */}
          <div className="mt-12 grid gap-8 lg:grid-cols-12 lg:items-start">
            {/* Contact Form */}
            <div className="rounded-3xl border border-[#E2EAF0] bg-white p-6 sm:p-8 shadow-sm lg:col-span-6">
              <h2 className="font-serif text-2xl font-bold text-[#123B59]">Send Us an Inquiry</h2>
              <p className="mt-1 text-xs sm:text-sm text-[#34465A]/80">
                Fill in your details and our clinic coordinator will contact you promptly.
              </p>

              {submitted ? (
                <div className="mt-6 rounded-2xl bg-[#F2F8FC] p-6 text-center border border-[#087FAE]/30">
                  <div className="mx-auto flex h-12 w-12 items-center justify-center rounded-2xl bg-[#087FAE] text-white shadow-xs">
                    <CheckCircle2 className="h-6 w-6" />
                  </div>
                  <h3 className="mt-3 font-serif text-xl font-bold text-[#123B59]">Thank you, {name}!</h3>
                  <p className="mt-2 text-xs sm:text-sm text-[#34465A] leading-relaxed">
                    Your inquiry details are ready. Tap below to continue on WhatsApp and confirm your preferred slot.
                  </p>
                  <div className="mt-6 flex flex-col sm:flex-row justify-center gap-3">
                    <button
                      type="button"
                      onClick={handleWhatsAppSend}
                      className={buttonClass('whatsapp', 'md', 'shadow-sm')}
                    >
                      <MessageSquare className="mr-2 h-4 w-4" />
                      Continue on WhatsApp
                    </button>
                    <button
                      type="button"
                      onClick={() => setSubmitted(false)}
                      className={buttonClass('secondary', 'md')}
                    >
                      Send Another Inquiry
                    </button>
                  </div>
                </div>
              ) : (
                <form onSubmit={handleSubmit} className="mt-6 space-y-4">
                  {error && (
                    <div className="flex items-center gap-2 rounded-xl bg-red-50 p-3 text-xs text-red-700 border border-red-200">
                      <AlertCircle className="h-4 w-4 shrink-0" />
                      <span>{error}</span>
                    </div>
                  )}

                  <div>
                    <label className="block text-xs font-semibold text-[#123B59]">Your Full Name *</label>
                    <input
                      type="text"
                      required
                      value={name}
                      onChange={(e) => setName(e.target.value)}
                      placeholder="e.g. Ramesh Patel"
                      className={inputClass(false, 'mt-1 h-11')}
                    />
                  </div>

                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    <div>
                      <label className="block text-xs font-semibold text-[#123B59]">Phone Number *</label>
                      <input
                        type="tel"
                        required
                        value={phone}
                        onChange={(e) => setPhone(e.target.value)}
                        placeholder="+91 98765 43210"
                        className={inputClass(false, 'mt-1 h-11')}
                      />
                    </div>
                    <div>
                      <label className="block text-xs font-semibold text-[#123B59]">Email Address (Optional)</label>
                      <input
                        type="email"
                        value={email}
                        onChange={(e) => setEmail(e.target.value)}
                        placeholder="name@example.com"
                        className={inputClass(false, 'mt-1 h-11')}
                      />
                    </div>
                  </div>

                  <div>
                    <label className="block text-xs font-semibold text-[#123B59]">Treatment or Query Topic</label>
                    <select
                      value={subject}
                      onChange={(e) => setSubject(e.target.value)}
                      className={inputClass(false, 'mt-1 h-11')}
                    >
                      <option value="">Select subject</option>
                      <option value="Appointment Booking">Appointment Booking</option>
                      <option value="Tooth Pain / Emergency">Tooth Pain / Emergency Care</option>
                      <option value="Dental Implants Inquiry">Dental Implants Inquiry</option>
                      <option value="Clear Aligners & Braces">Clear Aligners & Braces</option>
                      <option value="Teeth Whitening & Cleaning">Teeth Whitening & Cleaning</option>
                      <option value="General Checkup">General Dental Checkup</option>
                      <option value="Other Inquiry">Other Inquiry</option>
                    </select>
                  </div>

                  <div>
                    <label className="block text-xs font-semibold text-[#123B59]">Your Message</label>
                    <textarea
                      rows={3}
                      value={message}
                      onChange={(e) => setMessage(e.target.value)}
                      placeholder="Describe what you would like help with..."
                      className={inputClass(false, 'mt-1 resize-none py-2.5')}
                    />
                  </div>

                  <div className="pt-2">
                    <button type="submit" className={buttonClass('primary', 'lg', 'w-full shadow-md')}>
                      <Send className="mr-2 h-4 w-4" />
                      Submit Inquiry
                    </button>
                  </div>
                </form>
              )}
            </div>

            {/* Address & Google Maps Embed */}
            <div className="space-y-6 lg:col-span-6">
              <div className="rounded-3xl border border-[#E2EAF0] bg-white p-6 sm:p-8 shadow-sm">
                <div className="flex items-start gap-3">
                  <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-xl bg-[#F2F8FC] text-[#087FAE]">
                    <MapPin className="h-5 w-5" />
                  </div>
                  <div>
                    <h3 className="font-serif text-lg font-bold text-[#123B59]">Clinic Address in Nashik</h3>
                    <p className="mt-1 text-xs sm:text-sm leading-relaxed text-[#34465A]">
                      {siteConfig.address}
                    </p>
                    <p className="mt-2 text-xs font-medium text-[#087FAE]">
                      Landmark: Beside Maruti Courier, Opp. Mahila Bank, Shastri Nagar, Indira Nagar.
                    </p>
                  </div>
                </div>

                <div className="mt-6 overflow-hidden rounded-2xl border border-[#E2EAF0] aspect-[16/10] w-full">
                  <iframe
                    title="Dr. Naik's Shubh Smile Multispeciality Dental Clinic Location Map"
                    src={siteConfig.mapEmbedUrl}
                    width="100%"
                    height="100%"
                    style={{ border: 0 }}
                    allowFullScreen={false}
                    loading="lazy"
                    referrerPolicy="no-referrer-when-downgrade"
                  />
                </div>

                <div className="mt-4 flex flex-wrap items-center justify-between gap-3 text-xs">
                  <span className="text-[#34465A]/70">Official Google Maps listing</span>
                  <a
                    href={siteConfig.googleMapsUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-1 font-bold text-[#087FAE] hover:underline"
                  >
                    <Navigation className="h-3.5 w-3.5" />
                    <span>Get Directions on Google Maps &rarr;</span>
                  </a>
                </div>
              </div>

              {/* Instagram Card */}
              <div className="rounded-3xl border border-[#E2EAF0] bg-white p-6 shadow-sm">
                <div className="flex items-center justify-between">
                  <div className="flex items-center gap-3">
                    <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-pink-50 text-pink-600">
                      <MessageSquare className="h-5 w-5" />
                    </div>
                    <div>
                      <h3 className="font-serif text-base font-bold text-[#123B59]">Follow Us on Instagram</h3>
                      <p className="text-xs text-[#34465A]/70">{siteConfig.instagramUsername}</p>
                    </div>
                  </div>
                  <a
                    href={siteConfig.instagramUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-xs font-bold text-[#087FAE] hover:underline"
                  >
                    View Profile &rarr;
                  </a>
                </div>

                <div className="mt-4 flex items-center justify-center rounded-2xl border border-[#E2EAF0] bg-[#F2F8FC] p-4">
                  <img
                    src={siteConfig.instagramQrCode}
                    alt="Instagram QR code for @shubhsmiledental"
                    className="h-28 w-28 rounded-xl object-cover shadow-xs border border-[#E2EAF0]"
                  />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
