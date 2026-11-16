import React from 'react';
import { ArrowRightIcon, CalendarCheckIcon } from 'lucide-react';
import { useAppointment } from '../../contexts/AppointmentContext';
import type { Doctor } from '../../types/content';

export function DoctorCard({ doctor }: { doctor: Doctor }) {
  const { openAppointment } = useAppointment();

  return (
    <article className="group grid h-full grid-cols-1 gap-6 rounded-2xl border border-[#E2EAF0] bg-white p-6 shadow-sm transition-all duration-200 hover:-translate-y-1 hover:border-[#087FAE]/30 hover:shadow-md sm:grid-cols-[0.85fr_1fr] sm:items-stretch">
      <div className="overflow-hidden rounded-xl bg-[#F2F8FC]">
        <img
          src={doctor.portrait}
          alt={doctor.portraitAlt}
          loading="lazy"
          decoding="async"
          width={600}
          height={750}
          className="aspect-[4/3] sm:aspect-[4/5] h-full w-full object-cover transition-transform duration-500 ease-silk group-hover:scale-105"
        />
      </div>
      <div className="flex flex-col justify-between py-1">
        <div>
          <span className="inline-block rounded-full bg-[#DCEFF8] px-3 py-1 text-xs font-semibold text-[#087FAE]">
            {doctor.specialty}
          </span>
          <h3 className="mt-3 font-serif text-2xl font-bold leading-tight text-[#123B59]">
            {doctor.name}
          </h3>
          <p className="mt-1 text-xs font-semibold text-[#087FAE]">{doctor.qualification}</p>
          <p className="mt-3 text-sm leading-relaxed text-[#34465A]/85">{doctor.bio}</p>
        </div>

        <button
          type="button"
          onClick={() => openAppointment(`a consultation with ${doctor.name}`)}
          className="mt-6 inline-flex w-fit items-center gap-2 border-b-2 border-[#087FAE]/40 pb-1 text-sm font-semibold text-[#087FAE] transition-colors duration-200 hover:border-[#087FAE] hover:text-[#076D96] cursor-pointer"
        >
          <CalendarCheckIcon className="h-4 w-4" />
          <span>Book a Consultation</span>
          <ArrowRightIcon className="h-3.5 w-3.5" />
        </button>
      </div>
    </article>
  );
}
