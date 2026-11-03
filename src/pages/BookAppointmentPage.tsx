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
  const [doctor, setDoctor] = useState('Any Available Specialist');
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
    const text = `Hello Dr. Naik\'s Shubh Smile Multispeciality Dental Clinic,\nI have scheduled an appointment request:\n- Name: ${name}\n- Phone: ${phone}\n- Treatment: ${treatment || 'General Consultation'}\n- Doctor: ${doctor}\n- Date: ${date}\n- Slot: ${timeSlot}\n- Notes: ${notes || 'None'}\nPlease confirm my slot.`;
    window.open(whatsappUrl(text), '_blank');
  };

  return (
    <>
      <SEOHead
        title={`Book a Dental Appointment | ${siteConfig.name} Nashik`}
        description="Book your dental appointment online at Dr. Naik\'s Shubh Smile Multispeciality Dental Clinic in Nashik. Choose treatment, date, and doctor with zero hassle."
        path="/book-appointment"
      />

      <div className="bg-slate-50/50 pt-24 pb-16">
        <div className="mx-auto max-w-7xl px-5 sm:px-8 lg:px-12">
          <Breadcrumbs items={[{ label: 'Book Appointment', href: '/book-appointment' }]} />

          {/* Page Header */}
          <div className="mt-6 max-w-3xl">
            <span className="inline-flex items-center gap-2 rounded-full bg-sky-50 px-3.5 py-1 text-xs font-semibold text-primary-700 border border-sky-100">
              <Calendar className="h-3.5 w-3.5 text-primary-600" />
              Online Appointment Booking
            </span>
            <h1 className="mt-4 text-3xl font-bold tracking-tight text-slate-900 sm:text-4xl lg:text-5xl">
              Schedule your visit with <span className="text-primary-600">complete ease.</span>
            </h1>
            <p className="mt-4 text-base sm:text-lg leading-relaxed text-slate-600">
              Select your preferred appointment date and time slot. Our clinic care coordinator will promptly confirm your booking and ensure a smooth, zero-wait visit.
            </p>
          </div>

          <div className="mt-10 grid gap-8 lg:grid-cols-12 lg:items-start">
            {/* Booking Form Card */}
            <div className="rounded-2xl border border-slate-200/80 bg-white p-6 sm:p-8 shadow-sm lg:col-span-7">
              {submitted ? (
                <div className="rounded-xl bg-sky-50/80 p-8 text-center border border-sky-100">
                  <div className="mx-auto flex h-14 w-14 items-center justify-center rounded-full bg-primary-100 text-primary-700">
                    <CheckCircle2 className="h-8 w-8" />
                  </div>
                  <h2 className="mt-4 text-2xl font-bold text-slate-900">Appointment Request Received!</h2>
                  <p className="mt-2 text-sm text-slate-600 leading-relaxed max-w-md mx-auto">
                    Thank you, <strong className="text-slate-900">{name}</strong>. Your requested slot for{' '}
                    <strong className="text-slate-900">{treatment || 'General Consultation'}</strong> on{' '}
                    <strong className="text-slate-900">{date}</strong> ({timeSlot}) has been logged.
                  </p>

                  <div className="mt-6 rounded-lg bg-white p-4 border border-slate-200 text-left text-xs sm:text-sm space-y-1.5 text-slate-700">
                    <p><span className="font-semibold text-slate-900">Patient:</span> {name}</p>
                    <p><span className="font-semibold text-slate-900">Phone:</span> {phone}</p>
                    <p><span className="font-semibold text-slate-900">Doctor:</span> {doctor}</p>
                    <p><span className="font-semibold text-slate-900">Slot:</span> {date} – {timeSlot}</p>
                  </div>

                  <div className="mt-6 flex flex-col sm:flex-row justify-center gap-3">
                    <button
                      type="button"
                      onClick={handleWhatsAppConfirm}
                      className={buttonClass('whatsapp', 'md')}
                    >
                      <MessageSquare className="mr-2 h-4 w-4" />
                      Instant Confirm on WhatsApp
                    </button>
                    <button
                      type="button"
                      onClick={() => {
                        setSubmitted(false);
                        setName('');
                        setPhone('');
                      }}
                      className={buttonClass('secondary', 'md')}
                    >
                      Book Another Appointment
                    </button>
                  </div>
                </div>
              ) : (
                <form onSubmit={handleSubmit} className="space-y-5">
                  <h2 className="text-xl font-bold text-slate-900">Patient & Appointment Details</h2>

                  {error && (
                    <div className="flex items-center gap-2 rounded-lg bg-red-50 p-3 text-xs text-red-700 border border-red-200">
                      <AlertCircle className="h-4 w-4 shrink-0" />
                      <span>{error}</span>
                    </div>
                  )}

                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    <div>
                      <label className="block text-xs font-semibold text-slate-700">Patient Full Name *</label>
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
                  </div>

                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    <div>
                      <label className="block text-xs font-semibold text-slate-700">Email Address (Optional)</label>
                      <input
                        type="email"
                        value={email}
                        onChange={(e) => setEmail(e.target.value)}
                        placeholder="patient@example.com"
                        className={inputClass(false, 'mt-1 h-11')}
                      />
                    </div>
                    <div>
                      <label className="block text-xs font-semibold text-slate-700">Treatment of Interest</label>
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
                        <option value="Acute Tooth Pain / Emergency">Acute Tooth Pain / Emergency Relief</option>
                      </select>
                    </div>
                  </div>

                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    <div>
                      <label className="block text-xs font-semibold text-slate-700">Preferred Date</label>
                      <input
                        type="date"
                        min={todayISO()}
                        value={date}
                        onChange={(e) => setDate(e.target.value)}
                        className={inputClass(false, 'mt-1 h-11')}
                      />
                    </div>
                    <div>
                      <label className="block text-xs font-semibold text-slate-700">Preferred Doctor</label>
                      <select
                        value={doctor}
                        onChange={(e) => setDoctor(e.target.value)}
                        className={inputClass(false, 'mt-1 h-11')}
                      >
                        <option value="Any Available Specialist">Any Available Specialist</option>
                        {doctors.map((d) => (
                          <option key={d.id} value={d.name}>
                            {d.name} ({d.specialty.split(' ')[0]})
                          </option>
                        ))}
                      </select>
                    </div>
                  </div>

                  <div>
                    <label className="block text-xs font-semibold text-slate-700">Preferred Time Slot</label>
                    <div className="mt-2 grid grid-cols-1 sm:grid-cols-3 gap-2">
                      {timeSlots.map((slot) => (
                        <button
                          key={slot}
                          type="button"
                          onClick={() => setTimeSlot(slot)}
                          className={`rounded-xl p-2.5 text-xs font-semibold border text-center transition-all ${
                            timeSlot === slot
                              ? 'border-primary-600 bg-sky-50 text-primary-700 shadow-sm'
                              : 'border-slate-200 bg-white text-slate-600 hover:border-slate-300'
                          }`}
                        >
                          {slot}
                        </button>
                      ))}
                    </div>
                  </div>

                  <div>
                    <label className="block text-xs font-semibold text-slate-700">Any Medical Notes / Symptoms</label>
                    <textarea
                      rows={3}
                      value={notes}
                      onChange={(e) => setNotes(e.target.value)}
                      placeholder="Briefly describe your symptoms or any past dental concerns..."
                      className={inputClass(false, 'mt-1 resize-none py-2.5')}
                    />
                  </div>

                  <div className="pt-2">
                    <button type="submit" className={buttonClass('primary', 'lg', 'w-full')}>
                      Confirm Appointment Request
                    </button>
                  </div>
                </form>
              )}
            </div>

            {/* What to Expect & Clinic Assurances Sidebar */}
            <div className="space-y-6 lg:col-span-5">
              <div className="rounded-2xl border border-slate-200/80 bg-white p-6 sm:p-8 shadow-sm">
                <span className="text-xs font-bold uppercase tracking-wider text-primary-600">Your First Visit</span>
                <h3 className="mt-2 text-lg font-bold text-slate-900">What to Expect at Shubh Smile</h3>

                <ul className="mt-5 space-y-3.5 text-sm text-slate-600">
                  <li className="flex items-start gap-3">
                    <CheckCircle2 className="h-5 w-5 shrink-0 text-primary-600 mt-0.5" />
                    <span>
                      <strong className="text-slate-800">Warm Welcome:</strong> Zero waiting hassle with organized digital check-in.
                    </span>
                  </li>
                  <li className="flex items-start gap-3">
                    <CheckCircle2 className="h-5 w-5 shrink-0 text-primary-600 mt-0.5" />
                    <span>
                      <strong className="text-slate-800">Visual Diagnostics:</strong> High-definition intraoral camera review so you see your dental health clearly.
                    </span>
                  </li>
                  <li className="flex items-start gap-3">
                    <CheckCircle2 className="h-5 w-5 shrink-0 text-primary-600 mt-0.5" />
                    <span>
                      <strong className="text-slate-800">No Pressure:</strong> Honest recommendations, pros and cons, and itemized upfront estimates.
                    </span>
                  </li>
                  <li className="flex items-start gap-3">
                    <CheckCircle2 className="h-5 w-5 shrink-0 text-primary-600 mt-0.5" />
                    <span>
                      <strong className="text-slate-800">Sterile Operatory:</strong> Fresh single-use barriers applied right before you sit down.
                    </span>
                  </li>
                </ul>
              </div>

              {/* Urgent Pain Box */}
              <div className="rounded-2xl bg-gradient-to-br from-emerald-50 to-sky-50 p-6 border border-emerald-100">
                <div className="flex items-center gap-3">
                  <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-emerald-600 text-white">
                    <Phone className="h-5 w-5" />
                  </div>
                  <div>
                    <h4 className="text-sm font-bold text-slate-900">Experiencing Acute Tooth Pain?</h4>
                    <p className="text-xs text-slate-600">We prioritize dental emergencies for prompt pain relief.</p>
                  </div>
                </div>
                <div className="mt-4 pt-3 border-t border-emerald-200/60 flex items-center justify-between">
                  <span className="text-xs font-semibold text-slate-700">Emergency Line:</span>
                  <a
                    href={`tel:${siteConfig.phoneE164}`}
                    className="text-sm font-bold text-emerald-700 hover:text-emerald-800"
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
