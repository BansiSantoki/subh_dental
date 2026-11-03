import React, { useEffect, useRef, useState } from 'react';
import { motion, useMotionValue, useReducedMotion, useScroll, useSpring, useTransform } from 'framer-motion';
import { MapPinIcon } from 'lucide-react';
import { images } from '../../data/images';
import { siteConfig } from '../../data/siteConfig';

const spring = { stiffness: 110, damping: 18, mass: 0.6 };

/** Layered 3D hero composition: enamel sculpture with pointer tilt, depth layers and restrained parallax. */
export function HeroSculpture() {
  const ref = useRef<HTMLDivElement>(null);
  const reduce = useReducedMotion();
  const [finePointer, setFinePointer] = useState(false);

  useEffect(() => {
    setFinePointer(window.matchMedia('(pointer: fine)').matches);
  }, []);

  const mx = useMotionValue(0);
  const my = useMotionValue(0);
  const rotateX = useSpring(useTransform(my, [-0.5, 0.5], [7, -7]), spring);
  const rotateY = useSpring(useTransform(mx, [-0.5, 0.5], [-9, 9]), spring);
  const innerX = useSpring(useTransform(mx, [-0.5, 0.5], [14, -14]), spring);
  const innerY = useSpring(useTransform(my, [-0.5, 0.5], [10, -10]), spring);
  const floatX = useSpring(useTransform(mx, [-0.5, 0.5], [-18, 18]), spring);

  const { scrollYProgress } = useScroll({ target: ref, offset: ['start start', 'end start'] });
  const yMain = useTransform(scrollYProgress, [0, 1], [0, 70]);
  const yBack = useTransform(scrollYProgress, [0, 1], [0, 130]);
  const yFloat = useTransform(scrollYProgress, [0, 1], [0, -70]);

  const interactive = finePointer && !reduce;

  const handleMove = (e: React.PointerEvent<HTMLDivElement>) => {
    if (!interactive) return;
    const r = e.currentTarget.getBoundingClientRect();
    mx.set((e.clientX - r.left) / r.width - 0.5);
    my.set((e.clientY - r.top) / r.height - 0.5);
  };
  const handleLeave = () => {
    mx.set(0);
    my.set(0);
  };

  return (
    <div
      ref={ref}
      onPointerMove={handleMove}
      onPointerLeave={handleLeave}
      className="relative mx-auto w-full max-w-[580px] sm:max-w-[620px] lg:ml-auto lg:mr-0 lg:max-w-[760px]"
      style={{ perspective: 1400 }}>
      
      {/* Smile arc — brand motif */}
      <motion.svg
        viewBox="0 0 600 600"
        className="pointer-events-none absolute -left-[18%] -top-[10%] w-[136%] text-champagne"
        style={{ y: reduce ? 0 : yBack }}
        aria-hidden="true">
        
        <circle cx="300" cy="300" r="290" fill="none" stroke="currentColor" strokeWidth="0.8" opacity="0.7" />
        <path d="M90 360c55 100 130 150 210 150s155-50 210-150" fill="none" stroke="currentColor" strokeWidth="1" opacity="0.9" />
      </motion.svg>

      {/* Back depth plane */}
      <motion.div
        className="absolute inset-0 translate-x-[7%] translate-y-[6%] rounded-[32px] bg-sage"
        style={{ y: reduce ? 0 : yBack }}
        aria-hidden="true" />
      

      {/* Main sculpture card */}
      <motion.div style={{ y: reduce ? 0 : yMain }}>
      <motion.div
          initial={{ opacity: 0, y: 30, scale: 0.97 }}
          animate={{ opacity: 1, y: 0, scale: 1 }}
          transition={{ duration: 0.9, ease: [0.23, 1, 0.32, 1], delay: 0.15 }}>
          
        <motion.div
            style={{ rotateX, rotateY, transformStyle: 'preserve-3d' }}
            className="relative aspect-[4/5] overflow-hidden rounded-[32px] bg-[#EFECE5] shadow-[0_60px_100px_-50px_rgba(23,63,58,0.55),0_20px_40px_-30px_rgba(37,43,41,0.35)] lg:translate-x-[10%] lg:scale-[1.08]">
            
          <motion.img
              src={images.heroTooth}
              alt="Sculptural pearl-white tooth resting on a sage stone, lit like a product photograph"
              width={928}
              height={1152}
              {...{ fetchpriority: 'high' }}
              decoding="async"
              style={{ x: innerX, y: innerY, scale: 1.08 }}
              className="h-full w-full object-cover" />
            
          <div className="pointer-events-none absolute inset-0 rounded-[32px] ring-1 ring-inset ring-white/40" aria-hidden="true" />
        </motion.div>
      </motion.div>
      </motion.div>

      {/* Floating interior detail */}
      <motion.div
        className="absolute -bottom-8 -left-4 w-[30%] sm:-left-10 lg:-left-14"
        style={{ y: reduce ? 0 : yFloat, x: interactive ? floatX : 0 }}
        initial={{ opacity: 0, scale: 0.96 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 0.7, ease: [0.23, 1, 0.32, 1], delay: 0.45 }}>
        
        <div className="motion-safe:animate-float">
          <div className="overflow-hidden rounded-[20px] border-[6px] border-ivory bg-ivory shadow-[0_30px_60px_-30px_rgba(23,63,58,0.6)]">
            <img
              src={images.interiorDetail}
              alt="Curved plaster wall and oak shelf inside the studio"
              width={400}
              height={500}
              decoding="async"
              className="aspect-[4/5] w-full object-cover" />
            
          </div>
        </div>
      </motion.div>

      {/* Location label */}
      <motion.div
        className="absolute -right-2 top-8 sm:-right-6 lg:-right-8"
        initial={{ opacity: 0, x: 12 }}
        animate={{ opacity: 1, x: 0 }}
        transition={{ duration: 0.6, ease: [0.23, 1, 0.32, 1], delay: 0.6 }}>
        
        <div className="flex items-center gap-2 rounded-full border border-white/60 bg-white/85 py-2 pl-2.5 pr-4 text-[12.5px] font-semibold text-charcoal shadow-[0_18px_40px_-20px_rgba(23,63,58,0.45)] backdrop-blur">
          <span className="flex h-7 w-7 items-center justify-center rounded-full bg-forest text-ivory">
            <MapPinIcon className="h-3.5 w-3.5" aria-hidden="true" />
          </span>
          {siteConfig.locationLabel}
        </div>
      </motion.div>
    </div>);

}