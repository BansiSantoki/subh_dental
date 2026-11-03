import { useEffect, useRef, useState } from 'react';
import { ArrowRightIcon, PlayIcon } from 'lucide-react';
import { Link } from 'react-router-dom';
import { Reveal } from '../shared/Reveal';

const videoSrc = '/videos/shubh-dental-smile-clinic.mp4';
const posterSrc = '/videos/shubh-dental-smile-clinic-poster.jpg';

export function ClinicVideoSection() {
  const sectionRef = useRef<HTMLElement>(null);
  const videoRef = useRef<HTMLVideoElement>(null);
  const [videoLoaded, setVideoLoaded] = useState(false);
  const [playRequested, setPlayRequested] = useState(false);
  const [isPlaying, setIsPlaying] = useState(false);
  const [videoError, setVideoError] = useState(false);

  useEffect(() => {
    const section = sectionRef.current;
    if (!section) return;

    if (!('IntersectionObserver' in window)) {
      setVideoLoaded(true);
      return;
    }

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setVideoLoaded(true);
          observer.disconnect();
        }
      },
      { rootMargin: '320px' }
    );

    observer.observe(section);
    return () => observer.disconnect();
  }, []);

  useEffect(() => {
    const video = videoRef.current;
    if (!videoLoaded || !playRequested || !video) return;

    const play = () => {
      setPlayRequested(false);
      void video.play().catch(() => setVideoError(true));
    };

    if (video.readyState >= HTMLMediaElement.HAVE_FUTURE_DATA) {
      play();
      return;
    }

    video.addEventListener('canplay', play, { once: true });
    return () => video.removeEventListener('canplay', play);
  }, [playRequested, videoLoaded]);

  const togglePlayback = () => {
    if (videoError) return;
    if (!videoLoaded) {
      setVideoLoaded(true);
      setPlayRequested(true);
      return;
    }

    const video = videoRef.current;
    if (!video) return;
    if (video.paused) {
      setPlayRequested(true);
    } else {
      video.pause();
    }
  };

  return (
    <section
      ref={sectionRef}
      aria-labelledby="clinic-tour-title"
      className="relative overflow-hidden bg-white py-20 sm:py-24"
    >
      <div className="pointer-events-none absolute -left-24 top-12 h-64 w-64 rounded-full bg-brandBlue/[0.06] blur-3xl" aria-hidden="true" />
      <div className="pointer-events-none absolute -right-20 bottom-0 h-56 w-56 rounded-full bg-brandLime/[0.12] blur-3xl" aria-hidden="true" />

      <div className="relative mx-auto grid max-w-[1240px] items-center gap-12 px-5 md:px-8 lg:grid-cols-[1fr_0.82fr] lg:gap-16 lg:px-12">
        <Reveal>
          <div className="max-w-[550px]">
            <p className="flex items-center gap-3 text-[11px] font-semibold uppercase tracking-[0.24em] text-brandBlue">
              <span className="h-px w-9 bg-brandLime" aria-hidden="true" />
              A little look around
            </p>
            <h2
              id="clinic-tour-title"
              className="mt-6 font-serif text-[42px] font-medium leading-[1.05] tracking-[-0.02em] text-[#172a39] sm:text-[52px]"
            >
              Take a Look Inside <span className="italic text-brandBlue">Shubh Smile</span>
            </h2>
            <p className="mt-6 max-w-[510px] text-pretty text-[16px] leading-[1.85] text-charcoal/70 sm:text-[17px]">
              Get a glimpse of our clinic, our team, and the care we provide to make every smile healthier and brighter.
            </p>

            <div className="mt-8 flex items-center gap-3 text-sm font-medium text-[#172a39]">
              <span className="flex h-10 w-10 items-center justify-center rounded-full bg-brandLime/35 text-brandBlue">
                <PlayIcon className="h-4 w-4 fill-current" aria-hidden="true" />
              </span>
              <span>Press play for a visit to our clinic</span>
            </div>

            <Link
              to="/about"
              className="group mt-8 inline-flex items-center gap-2 text-sm font-semibold text-brandBlue transition-colors hover:text-[#172a39]"
            >
              Get to know our clinic
              <ArrowRightIcon className="h-4 w-4 transition-transform group-hover:translate-x-1" aria-hidden="true" />
            </Link>
          </div>
        </Reveal>

        <Reveal delay={0.08} className="w-full">
          <div className="relative mx-auto w-full max-w-[360px]">
            <div className="pointer-events-none absolute -inset-2 rounded-[34px] border border-brandLime/70" aria-hidden="true" />
            <div className="relative overflow-hidden rounded-[28px] border border-white/80 bg-[#102534] p-2 shadow-[0_28px_70px_-30px_rgba(16,37,52,0.55)]">
              <div className="relative aspect-[9/16] overflow-hidden rounded-[21px] bg-[#102534]">
                <video
                  ref={videoRef}
                  src={videoLoaded ? videoSrc : undefined}
                  poster={posterSrc}
                  controls
                  playsInline
                  preload="metadata"
                  title="A look inside Shubh Smile Dental Clinic"
                  aria-label="Official Shubh Smile Dental Clinic tour video"
                  className="absolute inset-0 h-full w-full object-contain"
                  onClick={(event) => {
                    if (event.target === event.currentTarget) togglePlayback();
                  }}
                  onKeyDown={(event) => {
                    if (event.target === event.currentTarget && (event.key === ' ' || event.key === 'Enter')) {
                      event.preventDefault();
                      togglePlayback();
                    }
                  }}
                  onPlay={() => setIsPlaying(true)}
                  onPause={() => setIsPlaying(false)}
                  onEnded={() => setIsPlaying(false)}
                  onError={() => setVideoError(true)}
                />

                {!isPlaying && !videoError && (
                  <button
                    type="button"
                    onClick={togglePlayback}
                    className="absolute left-1/2 top-1/2 flex -translate-x-1/2 -translate-y-1/2 flex-col items-center gap-3 rounded-full text-white transition-transform hover:scale-105 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-brandLime"
                    aria-label="Play the Shubh Smile Dental Clinic tour"
                  >
                    <span className="flex h-[68px] w-[68px] items-center justify-center rounded-full border border-white/70 bg-brandBlue/90 shadow-[0_8px_30px_rgba(0,0,0,0.3)]">
                      <PlayIcon className="ml-1 h-6 w-6 fill-current" aria-hidden="true" />
                    </span>
                    <span className="rounded-full bg-[#102534]/75 px-3 py-1 text-[11px] font-semibold tracking-wide">
                      Play clinic tour
                    </span>
                  </button>
                )}
              </div>
            </div>
          </div>

          {videoError && (
            <p role="alert" className="mx-auto mt-4 max-w-[360px] text-center text-sm leading-relaxed text-charcoal/70">
              This video could not be played here.{' '}
              <a className="font-semibold text-brandBlue underline underline-offset-2" href={videoSrc} target="_blank" rel="noreferrer">
                Open the clinic video
              </a>
              .
            </p>
          )}
        </Reveal>
      </div>
    </section>
  );
}
