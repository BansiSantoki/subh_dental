import { useEffect, useRef, useState } from 'react';
import { ArrowRightIcon, PlayIcon, SparklesIcon } from 'lucide-react';
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
      className="relative overflow-hidden bg-[#F2F8FC] py-20 sm:py-24 border-y border-[#E2EAF0]"
    >
      <div className="pointer-events-none absolute -left-24 top-12 h-64 w-64 rounded-full bg-[#087FAE]/10 blur-3xl" aria-hidden="true" />
      <div className="pointer-events-none absolute -right-20 bottom-0 h-56 w-56 rounded-full bg-[#DCEFF8]/60 blur-3xl" aria-hidden="true" />

      <div className="relative mx-auto grid max-w-[1240px] items-center gap-12 px-5 md:px-8 lg:grid-cols-[1fr_0.82fr] lg:gap-16 lg:px-12">
        <Reveal>
          <div className="max-w-[550px]">
            <span className="inline-flex items-center gap-2 rounded-full bg-white px-3.5 py-1 text-xs font-semibold text-[#087FAE] border border-[#087FAE]/20 shadow-2xs">
              <SparklesIcon className="h-3.5 w-3.5" />
              Real Clinic Tour
            </span>
            <h2
              id="clinic-tour-title"
              className="mt-6 font-serif text-3xl sm:text-4xl lg:text-5xl font-bold leading-[1.08] text-[#123B59]"
            >
              Take a Look Inside <span className="text-[#087FAE]">Shubh Smile</span>
            </h2>
            <p className="mt-5 text-base sm:text-lg leading-relaxed text-[#34465A]">
              Get an authentic glimpse of our clinic operatory, dental technology, and welcoming atmosphere designed to keep you relaxed and comfortable.
            </p>

            <div className="mt-8 flex items-center gap-3 text-sm font-semibold text-[#123B59]">
              <span className="flex h-10 w-10 items-center justify-center rounded-full bg-[#DCEFF8] text-[#087FAE]">
                <PlayIcon className="h-4 w-4 fill-current" aria-hidden="true" />
              </span>
              <span>Watch our short 1-minute video walkthrough</span>
            </div>

            <Link
              to="/about"
              className="group mt-8 inline-flex items-center gap-2 text-sm font-semibold text-[#087FAE] hover:text-[#076D96] transition-colors"
            >
              <span>Learn more about our dental clinic</span>
              <ArrowRightIcon className="h-4 w-4 transition-transform group-hover:translate-x-1" aria-hidden="true" />
            </Link>
          </div>
        </Reveal>

        <Reveal delay={0.08} className="w-full">
          <div className="relative mx-auto w-full max-w-[340px]">
            <div className="relative overflow-hidden rounded-[28px] border-4 border-white bg-[#102534] p-1.5 shadow-[0_25px_60px_-20px_rgba(8,127,174,0.3)]">
              <div className="relative aspect-[9/16] overflow-hidden rounded-[22px] bg-[#102534]">
                <video
                  ref={videoRef}
                  src={videoLoaded ? videoSrc : undefined}
                  poster={posterSrc}
                  controls
                  playsInline
                  preload="metadata"
                  title="A look inside Dr. Naik's Shubh Smile Dental Clinic"
                  aria-label="Official Shubh Smile Dental Clinic tour video"
                  className="absolute inset-0 h-full w-full object-cover"
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
                    className="absolute left-1/2 top-1/2 flex -translate-x-1/2 -translate-y-1/2 flex-col items-center gap-3 rounded-full text-white transition-transform hover:scale-105 cursor-pointer"
                    aria-label="Play the Shubh Smile Dental Clinic tour"
                  >
                    <span className="flex h-16 w-16 items-center justify-center rounded-full border-2 border-white/80 bg-[#087FAE]/90 shadow-xl backdrop-blur-xs">
                      <PlayIcon className="ml-1 h-6 w-6 fill-current text-white" aria-hidden="true" />
                    </span>
                    <span className="rounded-full bg-[#102534]/80 px-3.5 py-1 text-xs font-semibold tracking-wide text-white">
                      Play Clinic Video
                    </span>
                  </button>
                )}
              </div>
            </div>
          </div>

          {videoError && (
            <p role="alert" className="mx-auto mt-4 max-w-[340px] text-center text-xs leading-relaxed text-[#34465A]/80">
              Video preview unavailable.{' '}
              <a className="font-semibold text-[#087FAE] underline" href={videoSrc} target="_blank" rel="noreferrer">
                Open clinic video directly
              </a>
              .
            </p>
          )}
        </Reveal>
      </div>
    </section>
  );
}
