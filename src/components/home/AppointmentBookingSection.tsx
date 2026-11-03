import React from 'react';
import { Link } from 'react-router-dom';
import { CalendarCheckIcon, PhoneCallIcon, ClockIcon, MapPinIcon, ShieldCheckIcon } from 'lucide-react';
import { Reveal } from '../shared/Reveal';
import { WhatsAppLink } from '../shared/WhatsAppLink';
import { siteConfig } from '../../data/siteConfig';
import { images } from '../../data/images';
import { useAppointment } from '../../contexts/AppointmentContext';
import { buttonClass } from '../../utils/buttonStyles';

export function AppointmentBookingSection() {
  const { openAppointment } = useAppointment();

  return (
    <section aria-labelledby="cta-title" className="bg-gradient-to-br from-sky-50 via-white to-primary/5 py-14 md:py-20">
      <div className="mx-auto max-w-[1440px] px-5 md:px-8 lg:px-12">
        <div className="overflow-hidden rounded-3xl border border-primary/20 bg-white shadow-xl shadow-slate-900/5">
          <div className="grid items-center lg:grid-cols-12">
            {/* Left Content */}
            <div className="p-8 sm:p-12 lg:col-span-7">
              <span className="inline-flex items-center gap-2 rounded-full bg-secondary/15 px-3 py-1 text-xs font-bold text-secondary-dark">
                <ShieldCheckIcon className="h-3.5 w-3.5" />
                Book Your Visit
              </span>

              <h2
                id="cta-title"
                className="mt-4 text-3xl font-extrabold text-slate-900 sm:text-4xl lg:text-5xl leading-tight">
                Ready to Experience a Healthier, Confident Smile?
              </h2>

              <p className="mt-4 text-base leading-relaxed text-slate-600">
                Whether you need a routine check-up, single-visit root canal, orthodontic alignment, or dental implants, our specialists are here to guide you with care and precision.
              </p>

              {/* Action Buttons */}
              <div className="mt-8 flex flex-wrap items-center gap-3.5">
                <button
                  type="button"
                  onClick={() => openAppointment()}
                  className={`${buttonClass('primary', 'lg')} shadow-md shadow-primary/25`}>
                  <CalendarCheckIcon className="h-5 w-5" />
                  <span>Book Appointment Online</span>
                </button>

                <Link to="/book-appointment" className={buttonClass('secondary', 'lg')}>
                  Appointment Form Page
                </Link>

                <WhatsAppLink variant="whatsappOutline" size="lg">
                  Instant WhatsApp
                </WhatsAppLink>
              </div>

              {/* Trust Details Bar */}
              <div className="mt-10 grid gap-4 border-t border-slate-100 pt-6 sm:grid-cols-2 text-xs text-slate-600">
                <div className="flex items-center gap-2.5">
                  <MapPinIcon className="h-4 w-4 shrink-0 text-primary" />
                  <span>Shastri Nagar, Indira Nagar, Nashik</span>
                </div>
                <div className="flex items-center gap-2.5">
                  <ClockIcon className="h-4 w-4 shrink-0 text-secondary-dark" />
                  <span>Mon - Sat: 9:30 AM – 8:30 PM</span>
                </div>
              </div>
            </div>

            {/* Right Image */}
            <div className="relative h-full min-h-[300px] lg:col-span-5">
              <img
                src={images.whiteningSmile}
                alt="Happy patient with radiant, healthy smile at Dr. Naik\'s Shubh Smile Multispeciality Dental Clinic"
                className="h-full w-full object-cover"
                loading="lazy"
                width={800}
                height={700}
              />
              <div className="absolute inset-0 bg-gradient-to-t from-slate-950/50 via-transparent to-transparent lg:hidden" />
              <div className="absolute bottom-4 left-4 right-4 text-white lg:hidden">
                <p className="text-sm font-bold">Dr. Naik\'s Shubh Smile Multispeciality Dental Clinic</p>
                <p className="text-xs text-slate-200">Compassionate, gentle care for all ages</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
