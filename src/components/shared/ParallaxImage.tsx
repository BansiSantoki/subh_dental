import React, { useRef } from 'react';
import { motion, useReducedMotion, useScroll, useTransform } from 'framer-motion';

interface ParallaxImageProps {
  src: string;
  alt: string;
  className?: string;
  strength?: number;
  priority?: boolean;
  width?: number;
  height?: number;
  objectPosition?: string;
}

/** Image that drifts gently inside its frame as the page scrolls. */
export function ParallaxImage({
  src,
  alt,
  className = '',
  strength = 36,
  priority = false,
  width = 1200,
  height = 1500,
  objectPosition = 'center'
}: ParallaxImageProps) {
  const ref = useRef<HTMLDivElement>(null);
  const reduce = useReducedMotion();
  const { scrollYProgress } = useScroll({ target: ref, offset: ['start end', 'end start'] });
  const y = useTransform(scrollYProgress, [0, 1], [-strength, strength]);

  return (
    <div ref={ref} className={`relative overflow-hidden ${className}`}>
      <motion.img
        src={src}
        alt={alt}
        width={width}
        height={height}
        loading={priority ? 'eager' : 'lazy'}
        decoding="async"
        style={{
          y: reduce ? 0 : y,
          top: -strength,
          height: `calc(100% + ${strength * 2}px)`,
          objectPosition
        }}
        className="absolute inset-x-0 w-full object-cover" />
      
    </div>);

}