import React, { useState } from 'react';
import { Phone, Mail, MapPin, Clock, MessageSquare, Send, CheckCircle2, AlertCircle } from 'lucide-react';
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
      setError('Please enter your name.');
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
    const text = `Hello Dr. Naik\'s Shubh Smile Multispeciality Dental Clinic,\nMy name is ${name || 'Patient'}.\nPhone: ${phone}\nTopic: ${subject || 'Inquiry'}\nMessage: ${message || 'I would like to inquire about dental care.'}`;
    window.open(whatsappUrl(text), '_blank');
  };

  return (
    <>
      <SEOHead
        title={`Contact Us & Clinic Location | ${siteConfig.name}`}
        description="Contact Dr. Naik\'s Shubh Smile Multispeciality Dental Clinic in Nashik. Phone, WhatsApp, email, clinic address, and Google Maps directions."
        path="/contact"
      />

      <div className="bg-slate-50/50 pt-24 pb-16">
        <div className="mx-auto max-w-7xl px-5 sm:px-8 lg:px-12">
          <Breadcrumbs items={[{ label: 'Contact Us', href: '/contact' }]} />

          {/* Page Header */}
          <div className="mt-6 max-w-3xl">
            <span className="inline-flex items-center gap-2 rounded-full bg-sky-50 px-3.5 py-1 text-xs font-semibold text-primary-700 border border-sky-100">
              <MapPin className="h-3.5 w-3.5 text-primary-600" />
              Visit & Inquire
            </span>
            <h1 className="mt-4 text-3xl font-bold tracking-tight text-slate-900 sm:text-4xl lg:text-5xl">
              We are here to help you <span className="text-primary-600">smile with ease.</span>
            </h1>
            <p className="mt-4 text-base sm:text-lg leading-relaxed text-slate-600">
              Whether you have a general query or need to schedule a consultation, our team is here to assist you at Dr. Naik\'s Shubh Smile Multispeciality Dental Clinic in Nashik.
            </p>
          </div>

          {/* Contact Details Grid */}
          <div className="mt-10 grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
            <div className="rounded-2xl border border-slate-200/80 bg-white p-6 shadow-sm">
              <div className="flex h-11 w-11 items-center justify-center rounded-xl bg-sky-50 text-primary-600">
                <Phone className="h-6 w-6" />
              </div>
              <h3 className="mt-4 text-base font-bold text-slate-900">Call Us</h3>
              <p className="mt-1 text-xs text-slate-500">Direct clinic reception lines</p>
              <div className="mt-3 space-y-2">
                <a href={`tel:${siteConfig.phoneE164}`} className="block text-sm font-bold text-primary-600 hover:text-primary-700">
                  {siteConfig.phoneDisplay}
                </a>
                <a href={`tel:${siteConfig.secondaryPhoneE164}`} className="block text-sm font-bold text-primary-600 hover:text-primary-700">
                  {siteConfig.secondaryPhoneDisplay}
                </a>
              </div>
            </div>

            <div className="rounded-2xl border border-slate-200/80 bg-white p-6 shadow-sm">
              <div className="flex h-11 w-11 items-center justify-center rounded-xl bg-emerald-50 text-emerald-600">
                <MessageSquare className="h-6 w-6" />
              </div>
              <h3 className="mt-4 text-base font-bold text-slate-900">WhatsApp Chat</h3>
              <p className="mt-1 text-xs text-slate-500">Quick inquiries & assistance</p>
              <a
                href={whatsappUrl()}
                target="_blank"
                rel="noopener noreferrer"
                className="mt-3 block text-sm font-bold text-emerald-600 hover:text-emerald-700"
              >
                Chat on WhatsApp &rarr;
              </a>
            </div>

            <div className="rounded-2xl border border-slate-200/80 bg-white p-6 shadow-sm">
              <div className="flex h-11 w-11 items-center justify-center rounded-xl bg-sky-50 text-primary-600">
                <Mail className="h-6 w-6" />
              </div>
              <h3 className="mt-4 text-base font-bold text-slate-900">Email Us</h3>
              <p className="mt-1 text-xs text-slate-500">Inquiries and consultations</p>
              <a
                href={`mailto:${siteConfig.email}`}
                className="mt-3 block truncate text-sm font-bold text-primary-600 hover:text-primary-700"
              >
                {siteConfig.email}
              </a>
            </div>

            <div className="rounded-2xl border border-slate-200/80 bg-white p-6 shadow-sm">
              <div className="flex h-11 w-11 items-center justify-center rounded-xl bg-lime-50 text-lime-700">
                <MapPin className="h-6 w-6" />
              </div>
              <h3 className="mt-4 text-base font-bold text-slate-900">Clinic Location</h3>
              <p className="mt-1 text-xs text-slate-500">Google Maps directions</p>
              <a
                href={siteConfig.googleMapsUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="mt-3 block text-sm font-bold text-lime-700 hover:text-lime-800"
              >
                Get Directions &rarr;
              </a>
            </div>
          </div>

          {/* Form & Map Section */}
          <div className="mt-12 grid gap-8 lg:grid-cols-12 lg:items-start">
            {/* Contact Form */}
            <div className="rounded-2xl border border-slate-200/80 bg-white p-6 sm:p-8 shadow-sm lg:col-span-6">
              <h2 className="text-xl font-bold text-slate-900">Send Us an Inquiry</h2>
              <p className="mt-1 text-sm text-slate-500">
                Fill in your details and our clinic coordinator will contact you promptly.
              </p>

              {submitted ? (
                <div className="mt-6 rounded-xl bg-sky-50 p-6 text-center border border-sky-100">
                  <div className="mx-auto flex h-12 w-12 items-center justify-center rounded-full bg-primary-100 text-primary-700">
                    <CheckCircle2 className="h-6 w-6" />
                  </div>
                  <h3 className="mt-3 text-lg font-bold text-slate-900">Thank you, {name}!</h3>
                  <p className="mt-2 text-sm text-slate-600">
                    Your message has been received. You can also connect immediately on WhatsApp to confirm an appointment slot.
                  </p>
                  <div className="mt-6 flex flex-col sm:flex-row justify-center gap-3">
                    <button
                      type="button"
                      onClick={handleWhatsAppSend}
                      className={buttonClass('whatsapp', 'md')}
                    >
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
                    <div className="flex items-center gap-2 rounded-lg bg-red-50 p-3 text-xs text-red-700 border border-red-200">
                      <AlertCircle className="h-4 w-4 shrink-0" />
                      <span>{error}</span>
                    </div>
                  )}

                  <div>
                    <label className="block text-xs font-semibold text-slate-700">Your Full Name *</label>
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
                      <label className="block text-xs font-semibold text-slate-700">Phone Number *</label>
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
                      <label className="block text-xs font-semibold text-slate-700">Email Address (Optional)</label>
                      <input
                        type="email"
                        value={email}
                        onChange={(e) => setEmail(e.target.value)}
                        placeholder="you@example.com"
                        className={inputClass(false, 'mt-1 h-11')}
                      />
                    </div>
                  </div>

                  <div>
                    <label className="block text-xs font-semibold text-slate-700">Treatment or Query Topic</label>
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
                    <label className="block text-xs font-semibold text-slate-700">Your Message</label>
                    <textarea
                      rows={3}
                      value={message}
                      onChange={(e) => setMessage(e.target.value)}
                      placeholder="Describe what you would like help with..."
                      className={inputClass(false, 'mt-1 resize-none py-2.5')}
                    />
                  </div>

                  <div className="pt-2">
                    <button type="submit" className={buttonClass('primary', 'lg', 'w-full')}>
                      <Send className="mr-2 h-4 w-4" />
                      Submit Inquiry
                    </button>
                  </div>
                </form>
              )}
            </div>

            {/* Address & Google Maps Embed */}
            <div className="space-y-6 lg:col-span-6">
              <div className="rounded-2xl border border-slate-200/80 bg-white p-6 sm:p-8 shadow-sm">
                <div className="flex items-start gap-3">
                  <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-xl bg-sky-50 text-primary-600">
                    <MapPin className="h-5 w-5" />
                  </div>
                  <div>
                    <h3 className="text-base font-bold text-slate-900">Clinic Address in Nashik</h3>
                    <p className="mt-1 text-sm leading-relaxed text-slate-600">
                      {siteConfig.address}
                    </p>
                    <p className="mt-2 text-xs font-medium text-slate-500">
                      Nearby landmark: Opp. Mahila Bank, Gajanan Maharaj Mandir Rd, Shastri Nagar, Indira Nagar.
                    </p>
                  </div>
                </div>

                <div className="mt-6 overflow-hidden rounded-xl border border-slate-200 aspect-[16/10] w-full">
                  <iframe
                    title="Dr. Naik\'s Shubh Smile Multispeciality Dental Clinic Location Map"
                    src={siteConfig.mapEmbedUrl}
                    width="100%"
                    height="100%"
                    style={{ border: 0 }}
                    allowFullScreen={false}
                    loading="lazy"
                    referrerPolicy="no-referrer-when-downgrade"
                  />
                </div>

                <div className="mt-4 flex flex-wrap items-center justify-between gap-3 text-xs text-slate-500">
                  <span>Official Google Maps location</span>
                  <a
                    href={siteConfig.googleMapsUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="font-bold text-primary-600 hover:text-primary-700"
                  >
                    Get Directions &rarr;
                  </a>
                </div>
              </div>

              <div className="rounded-2xl border border-slate-200/80 bg-white p-6 shadow-sm">
                <div className="flex items-center gap-3">
                  <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-pink-50 text-pink-600">
                    <MessageSquare className="h-5 w-5" />
                  </div>
                  <div>
                    <h3 className="text-base font-bold text-slate-900">Follow Us on Instagram</h3>
                    <p className="text-xs text-slate-500">@shubhsmiledental</p>
                  </div>
                </div>
                <div className="mt-4 flex items-center justify-center rounded-2xl border border-slate-200 bg-slate-50 p-4">
                  <img
                    src={siteConfig.instagramQrCode}
                    alt="Instagram QR code for @shubhsmiledental"
                    className="h-32 w-32 rounded-xl object-cover shadow-sm"
                    onError={(event) => {
                      const target = event.currentTarget as HTMLImageElement;
                      target.style.display = 'none';
                    }}
                  />
                </div>
                <a
                  href={siteConfig.instagramUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="mt-4 inline-flex items-center text-sm font-bold text-primary-600 hover:text-primary-700"
                >
                  Visit Instagram Profile &rarr;
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
