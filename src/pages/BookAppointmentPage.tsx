import React, { useState } from 'react';
import { Calendar, Clock, CheckCircle2, ShieldCheck, AlertCircle, Phone, MessageSquare, Sparkles } from 'lucide-react';
import { SEOHead } from '../components/shared/SEOHead';
import { Breadcrumbs } from '../components/shared/Breadcrumbs';
import { siteConfig } from '../data/siteConfig';
import { services } from '../data/services';
import { doctors } from '../data/team';
import { buttonClass } from '../utils/buttonStyles';
import { inputClass } from '../utils/formStyles';
import { todayISO } from '../utils/validation';
import { whatsappUrl } from '../utils/whatsapp';

export function BookAppointmentPage() {
  const [name, setName] = useState('');
  const [phone, setPhone] = useState('');
  const [email, setEmail] = useState('');
  const [treatment, setTreatment] = useState('');
  const [doctor, setDoctor] = useState('Dr. Naik (Lead Dental Surgeon)');
  const [date, setDate] = useState(todayISO());
  const [timeSlot, setTimeSlot] = useState('Morning (9:30 AM – 1:00 PM)');
  const [notes, setNotes] = useState('');
  const [submitted, setSubmitted] = useState(false);
  const [error, setError] = useState('');

  const timeSlots = [
    'Morning (9:30 AM – 1:00 PM)',
    'Afternoon (2:00 PM – 5:00 PM)',
    'Evening (5:00 PM – 8:30 PM)'
  ];

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!name.trim()) {
      setError('Please provide your full name.');
      return;
    }
    if (!phone.trim() || phone.trim().length < 8) {
      setError('Please provide a valid phone number.');
      return;
    }
    setError('');
    setSubmitted(true);
  };

  const handleWhatsAppConfirm = () => {
    const text = `Hello Dr. Naik's Shubh Smile Multispeciality Dental Clinic,\nI have scheduled an appointment inquiry:\n- Name: ${name}\n- Phone: ${phone}\n- Treatment: ${treatment || 'General Consultation'}\n- Doctor: ${doctor}\n- Preferred Date: ${date}\n- Slot: ${timeSlot}\n- Notes: ${notes || 'None'}\nPlease let me know the available confirmation slot.`;
    window.open(whatsappUrl(text), '_blank');
  };

  return (
    <>
      <SEOHead
        title={`Book a Dental Appointment in Nashik | ${siteConfig.name}`}
        description="Book your dental consultation online at Dr. Naik's Shubh Smile Multispeciality Dental Clinic in Nashik. Choose treatment, date, and doctor with zero hassle."
        path="/book-appointment"
      />

      <div className="bg-[#F2F8FC] pt-28 pb-16 md:pt-36 md:pb-24">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 md:px-8 lg:px-12">
          <Breadcrumbs items={[{ label: 'Home', href: '/' }, { label: 'Book Appointment' }]} />

          {/* Page Header */}
          <div className="mt-6 max-w-3xl">
            <span className="inline-flex items-center gap-2 rounded-full bg-white px-3.5 py-1 text-xs font-semibold text-[#087FAE] border border-[#087FAE]/20 shadow-2xs">
              <Calendar className="h-3.5 w-3.5" />
              Online Appointment Scheduling
            </span>
            <h1 className="mt-4 font-serif text-3xl sm:text-4xl lg:text-5xl font-bold tracking-tight text-[#123B59]">
              Schedule your visit with <span className="text-[#087FAE]">complete ease.</span>
            </h1>
            <p className="mt-4 text-base sm:text-lg leading-relaxed text-[#34465A]">
              Select your preferred appointment date and time slot. Our clinic care coordinator will promptly review your request and connect via WhatsApp to confirm your convenient appointment.
            </p>
          </div>

          <div className="mt-10 grid gap-8 lg:grid-cols-12 lg:items-start">
            {/* Booking Form Card */}
            <div className="rounded-3xl border border-[#E2EAF0] bg-white p-6 sm:p-10 shadow-sm lg:col-span-7">
              {submitted ? (
                <div className="rounded-2xl bg-[#F2F8FC] p-8 text-center border border-[#087FAE]/30">
                  <div className="mx-auto flex h-14 w-14 items-center justify-center rounded-2xl bg-[#087FAE] text-white shadow-xs">
                    <CheckCircle2 className="h-8 w-8" />
                  </div>
                  <h2 className="mt-4 font-serif text-2xl font-bold text-[#123B59]">
                    Appointment Request Prepared!
                  </h2>
                  <p className="mt-2 text-sm text-[#34465A] leading-relaxed max-w-md mx-auto">
                    Thank you, <strong className="text-[#123B59]">{name}</strong>. Your requested slot for{' '}
                    <strong className="text-[#123B59]">{treatment || 'General Consultation'}</strong> on{' '}
                    <strong className="text-[#123B59]">{date}</strong> ({timeSlot}) has been logged. Tap below to send on WhatsApp for prompt confirmation.
                  </p>

                  <div className="mt-6 rounded-xl bg-white p-4 border border-[#E2EAF0] text-left text-xs sm:text-sm space-y-1.5 text-[#34465A]">
                    <p><span className="font-semibold text-[#123B59]">Patient:</span> {name}</p>
                    <p><span className="font-semibold text-[#123B59]">Phone:</span> {phone}</p>
                    {email && <p><span className="font-semibold text-[#123B59]">Email:</span> {email}</p>}
                    <p><span className="font-semibold text-[#123B59]">Doctor:</span> {doctor}</p>
                    <p><span className="font-semibold text-[#123B59]">Preferred Slot:</span> {date} – {timeSlot}</p>
                  </div>

                  <div className="mt-6 flex flex-col sm:flex-row justify-center gap-3">
                    <button
                      type="button"
                      onClick={handleWhatsAppConfirm}
                      className={buttonClass('whatsapp', 'lg', 'shadow-md')}
                    >
                      <MessageSquare className="mr-2 h-4 w-4" />
                      Send on WhatsApp
                    </button>
                    <button
                      type="button"
                      onClick={() => {
                        setSubmitted(false);
                        setName('');
                        setPhone('');
                      }}
                      className={buttonClass('secondary', 'lg')}
                    >
                      Book Another Appointment
                    </button>
                  </div>
                </div>
              ) : (
                <form onSubmit={handleSubmit} className="space-y-4">
                  <h2 className="font-serif text-xl font-bold text-[#123B59]">Patient & Appointment Details</h2>

                  {error && (
                    <div className="flex items-center gap-2 rounded-xl bg-red-50 p-3 text-xs text-red-700 border border-red-200">
                      <AlertCircle className="h-4 w-4 shrink-0" />
                      <span>{error}</span>
                    </div>
                  )}

                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    <div>
                      <label className="block text-xs font-semibold text-[#123B59]">Patient Full Name *</label>
                      <input
                        type="text"
                        required
                        value={name}
                        onChange={(e) => setName(e.target.value)}
                        placeholder="e.g. Bansi Patel"
                        className={inputClass(false, 'mt-1 h-11')}
                      />
                    </div>
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
                  </div>

                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    <div>
                      <label className="block text-xs font-semibold text-[#123B59]">Email Address (Optional)</label>
                      <input
                        type="email"
                        value={email}
                        onChange={(e) => setEmail(e.target.value)}
                        placeholder="patient@example.com"
                        className={inputClass(false, 'mt-1 h-11')}
                      />
                    </div>
                    <div>
                      <label className="block text-xs font-semibold text-[#123B59]">Treatment of Interest</label>
                      <select
                        value={treatment}
                        onChange={(e) => setTreatment(e.target.value)}
                        className={inputClass(false, 'mt-1 h-11')}
                      >
                        <option value="">General Consultation / Checkup</option>
                        {services.map((s) => (
                          <option key={s.slug} value={s.name}>
                            {s.name}
                          </option>
                        ))}
                        <option value="Acute Tooth Pain / Emergency">Acute Tooth Pain / Emergency Care</option>
                      </select>
                    </div>
                  </div>

                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    <div>
                      <label className="block text-xs font-semibold text-[#123B59]">Preferred Date</label>
                      <input
                        type="date"
                        min={todayISO()}
                        value={date}
                        onChange={(e) => setDate(e.target.value)}
                        className={inputClass(false, 'mt-1 h-11')}
                      />
                    </div>
                    <div>
                      <label className="block text-xs font-semibold text-[#123B59]">Preferred Doctor</label>
                      <select
                        value={doctor}
                        onChange={(e) => setDoctor(e.target.value)}
                        className={inputClass(false, 'mt-1 h-11')}
                      >
                        <option value="Dr. Naik (Lead Dental Surgeon)">Dr. Naik (Lead Dental Surgeon)</option>
                        <option value="Any Available Specialist">Any Available Specialist</option>
                      </select>
                    </div>
                  </div>

                  <div>
                    <label className="block text-xs font-semibold text-[#123B59]">Preferred Time Slot</label>
                    <div className="mt-2 grid grid-cols-1 sm:grid-cols-3 gap-2">
                      {timeSlots.map((slot) => (
                        <button
                          key={slot}
                          type="button"
                          onClick={() => setTimeSlot(slot)}
                          className={`rounded-xl p-2.5 text-xs font-semibold border text-center transition-all cursor-pointer ${
                            timeSlot === slot
                              ? 'border-[#087FAE] bg-[#F2F8FC] text-[#087FAE] shadow-2xs'
                              : 'border-[#E2EAF0] bg-white text-[#34465A] hover:border-[#087FAE]/50'
                          }`}
                        >
                          {slot}
                        </button>
                      ))}
                    </div>
                  </div>

                  <div>
                    <label className="block text-xs font-semibold text-[#123B59]">Any Symptoms or Medical Notes (Optional)</label>
                    <textarea
                      rows={3}
                      value={notes}
                      onChange={(e) => setNotes(e.target.value)}
                      placeholder="Briefly describe what you would like help with..."
                      className={inputClass(false, 'mt-1 resize-none py-2.5')}
                    />
                  </div>

                  <div className="pt-2">
                    <button type="submit" className={buttonClass('primary', 'lg', 'w-full shadow-md')}>
                      <Calendar className="mr-2 h-4 w-4" />
                      Continue to WhatsApp Confirmation
                    </button>
                    <p className="mt-2 text-center text-xs text-[#34465A]/70">
                      Sending an inquiry does not finalize an appointment until our clinic team confirms your slot.
                    </p>
                  </div>
                </form>
              )}
            </div>

            {/* Sidebar Information */}
            <div className="space-y-6 lg:col-span-5">
              <div className="rounded-3xl border border-[#E2EAF0] bg-white p-6 sm:p-8 shadow-sm">
                <span className="text-xs font-bold uppercase tracking-wider text-[#087FAE]">
                  Your First Visit
                </span>
                <h3 className="mt-2 font-serif text-xl font-bold text-[#123B59]">
                  What to Expect at Shubh Smile
                </h3>

                <ul className="mt-5 space-y-3.5 text-sm text-[#34465A]">
                  <li className="flex items-start gap-3">
                    <CheckCircle2 className="h-5 w-5 shrink-0 text-[#087FAE] mt-0.5" />
                    <span>
                      <strong className="text-[#123B59]">Warm Welcome:</strong> Unhurried appointments with prompt check-in.
                    </span>
                  </li>
                  <li className="flex items-start gap-3">
                    <CheckCircle2 className="h-5 w-5 shrink-0 text-[#087FAE] mt-0.5" />
                    <span>
                      <strong className="text-[#123B59]">Visual Diagnostics:</strong> Clear explanation using intraoral camera images and digital X-rays.
                    </span>
                  </li>
                  <li className="flex items-start gap-3">
                    <CheckCircle2 className="h-5 w-5 shrink-0 text-[#087FAE] mt-0.5" />
                    <span>
                      <strong className="text-[#123B59]">Zero Pressure:</strong> Honest recommendations with transparent pricing before any procedure starts.
                    </span>
                  </li>
                  <li className="flex items-start gap-3">
                    <CheckCircle2 className="h-5 w-5 shrink-0 text-[#087FAE] mt-0.5" />
                    <span>
                      <strong className="text-[#123B59]">Hospital-Grade Hygiene:</strong> Autoclaved instruments and sterile barriers prepared right before you sit.
                    </span>
                  </li>
                </ul>
              </div>

              {/* Emergency Callout */}
              <div className="rounded-3xl bg-gradient-to-br from-[#F2F8FC] to-[#DCEFF8] p-6 border border-[#087FAE]/20">
                <div className="flex items-center gap-3">
                  <div className="flex h-11 w-11 items-center justify-center rounded-2xl bg-[#087FAE] text-white shadow-xs">
                    <Phone className="h-5 w-5" />
                  </div>
                  <div>
                    <h4 className="text-sm font-bold text-[#123B59]">Experiencing Severe Tooth Pain?</h4>
                    <p className="text-xs text-[#34465A]/80">We accommodate urgent dental pain inquiries promptly.</p>
                  </div>
                </div>
                <div className="mt-4 pt-3 border-t border-[#087FAE]/20 flex items-center justify-between">
                  <span className="text-xs font-semibold text-[#123B59]">Clinic Line:</span>
                  <a
                    href={`tel:${siteConfig.phoneE164}`}
                    className="text-sm font-bold text-[#087FAE] hover:underline"
                  >
                    {siteConfig.phoneDisplay}
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
