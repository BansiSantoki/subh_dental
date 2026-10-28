import React from 'react';
import { useAppointment } from '../../contexts/AppointmentContext';
import type { Doctor } from '../../types/content';

export function DoctorCard({ doctor }: {doctor: Doctor;}) {
  const { openAppointment } = useAppointment();
  return (
    <article className="group grid h-full grid-cols-1 gap-6 sm:grid-cols-[0.85fr_1fr] sm:items-stretch">
      <div className="overflow-hidden rounded-[24px] bg-sage">
        <img
          src={doctor.portrait}
          alt={doctor.portraitAlt}
          loading="lazy"
          decoding="async"
          width={600}
          height={750}
          className="aspect-[4/5] h-full w-full object-cover transition-transform duration-[700ms] ease-silk group-hover:scale-[1.04]" />
        
      </div>
      <div className="flex flex-col py-2">
        <p className="text-[11.5px] font-semibold uppercase tracking-[0.2em] text-forest">{doctor.specialty}</p>
        <h3 className="mt-3 font-serif text-[30px] font-medium leading-tight text-charcoal">{doctor.name}</h3>
        <p className="mt-1 text-[14px] text-muted">{doctor.qualification}</p>
        <p className="mt-4 text-[14.5px] leading-relaxed text-charcoal/70">{doctor.bio}</p>
        <button
          type="button"
          onClick={() => openAppointment('a general consultation')}
          className="mt-auto inline-flex w-fit items-center gap-2 border-b border-forest/30 pb-1 pt-6 text-[14px] font-semibold text-forest transition-colors duration-200 hover:border-forest">
          
          Book a Consultation
        </button>
      </div>
    </article>);

}