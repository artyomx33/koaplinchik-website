"use client";

import { useState, useEffect, useRef } from "react";
import Image from "next/image";
import { motion, Variants, cubicBezier } from "framer-motion";
import { useInView } from "react-intersection-observer";
import SignatureAnimation from "./SignatureAnimation";

interface WhisperHeroProps {
  backgroundImage?: string;
  backgroundVideo?: string;
  tagline?: string;
  heading?: string;
  subheading?: string;
  ctaText?: string;
  ctaLink?: string;
}

export default function WhisperHero({
  backgroundImage = "/images/heroes/golden-hour-field.jpg",
  backgroundVideo = "/videos/memories-whisper.mp4",
  tagline = "Where memories become poetry",
  heading = "Every heartbeat has a story...",
  subheading = "We'll capture the whispers between heartbeats, those fleeting seconds where your story breathes",
  ctaText = "Begin your memory",
  ctaLink = "/connect",
}: WhisperHeroProps) {
  const [videoLoaded, setVideoLoaded] = useState(false);
  const videoRef = useRef<HTMLVideoElement>(null);
  const { ref: heroRef, inView } = useInView({
    threshold: 0.2,
    triggerOnce: true,
  });

  // Handle video loading
  useEffect(() => {
    if (videoRef.current) {
      const video = videoRef.current;
      
      const handleCanPlay = () => {
        setVideoLoaded(true);
      };
      
      video.addEventListener("canplay", handleCanPlay);
      
      // If video is already loaded
      if (video.readyState >= 3) {
        setVideoLoaded(true);
      }
      
      return () => {
        video.removeEventListener("canplay", handleCanPlay);
      };
    }
  }, []);

  // Animation variants
  const containerVariants: Variants = {
    hidden: { opacity: 0 },
    visible: { 
      opacity: 1,
      transition: { 
        duration: 1.2,
        ease: cubicBezier(0.4, 0, 0.2, 1),
        delayChildren: 0.2,
        staggerChildren: 0.08
      }
    }
  };
  
  const itemVariants: Variants = {
    hidden: { 
      opacity: 0, 
      y: 10, 
      scale: 0.95,
      filter: "blur(4px)"
    },
    visible: { 
      opacity: 1, 
      y: 0, 
      scale: 1,
      filter: "blur(0px)",
      transition: { 
        duration: 1.2,
        ease: cubicBezier(0.4, 0, 0.2, 1)
      }
    }
  };
  
  const buttonVariants: Variants = {
    hidden: { 
      opacity: 0, 
      scale: 0.9
    },
    visible: { 
      opacity: 1, 
      scale: 1,
      transition: { 
        duration: 0.8,
        ease: cubicBezier(0.4, 0, 0.2, 1),
        delay: 5.5 // Appear after signature animation
      }
    },
    hover: { 
      scale: 1.03,
      transition: { 
        duration: 0.4,
        ease: cubicBezier(0.4, 0, 0.2, 1)
      }
    },
    tap: { 
      scale: 0.98,
      transition: { 
        duration: 0.1,
        ease: cubicBezier(0.4, 0, 0.2, 1)
      }
    }
  };

  // Scroll hint (chevron) pulse after hero finishes
  const hintVariants: Variants = {
    hidden: { opacity: 0, y: 0 },
    visible: {
      opacity: 1,
      y: [0, 10, 0],
      transition: { delay: 6, repeat: Infinity, duration: 2 },
    },
  };

  // Split heading into words for typing effect
  const headingWords = heading.split(" ");

  return (
    <section 
      className="relative w-full h-[80vh] overflow-hidden" 
      aria-label="Hero section"
      ref={heroRef}
    >
      {/* Background Image (fallback) */}
      <div className="absolute inset-0 w-full h-full">
        <Image
          src={backgroundImage}
          alt="A tender moment captured in time"
          fill
          priority
          sizes="100vw"
          className={`object-cover transition-opacity duration-1000 ${
            videoLoaded ? "opacity-0" : "opacity-100"
          }`}
        />
      </div>
      
      {/* Background Video */}
      <div className="absolute inset-0 w-full h-full">
        <video
          ref={videoRef}
          autoPlay
          muted
          loop
          playsInline
          className={`object-cover w-full h-full transition-opacity duration-1000 ${
            videoLoaded ? "opacity-100" : "opacity-0"
          }`}
        >
          <source src={backgroundVideo} type="video/mp4" />
        </video>
      </div>
      
      {/* Overlay Gradient */}
      <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/50 to-black/30"></div>
      
      {/* Content Container */}
      <motion.div 
        className="relative z-10 flex flex-col items-center justify-center w-full h-full px-6 text-center text-white"
        variants={containerVariants}
        initial="hidden"
        animate={inView ? "visible" : "hidden"}
      >
        {/* Tagline */}
        <motion.span 
          className="mb-2 text-sm font-light tracking-widest uppercase md:text-base"
          variants={itemVariants}
        >
          {tagline}
        </motion.span>
        
        {/* Main Heading - word-by-word typing */}
        <h1 className="max-w-3xl mb-4 flex flex-wrap justify-center gap-x-2 text-3xl font-light leading-tight md:text-5xl lg:text-6xl">
          {headingWords.map((word, idx) => (
            <motion.span
              key={word + idx}
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 2.5 + idx * 0.1 }} /* 2.5 s base */
            >
              {word}
            </motion.span>
          ))}
        </h1>
        
        {/* Subheading - Remedy */}
        <motion.p 
          className="max-w-2xl mb-8 text-base font-light leading-relaxed opacity-90 md:text-lg"
          variants={itemVariants}
        >
          {subheading}
        </motion.p>
        
        {/* Animated signature (appears after words) */}
        <SignatureAnimation 
          width="240" 
          height="auto" 
          className="mb-6" 
          color="white"
          delay={4.5}
          duration={1.5}
          animate={inView}
        />

        {/* CTA Button */}
        <motion.a
          href={ctaLink}
          className="px-8 py-3 text-sm font-medium tracking-wide text-white transition-colors border border-white rounded-full md:text-base hover:bg-white/10"
          variants={buttonVariants}
          whileHover="hover"
          whileTap="tap"
          aria-label={ctaText}
        >
          {ctaText}
        </motion.a>
      </motion.div>

      {/* Scroll hint */}
      <motion.div
        className="absolute bottom-6 left-1/2 -translate-x-1/2 z-10 text-white"
        variants={hintVariants}
        initial="hidden"
        animate={inView ? "visible" : "hidden"}
        aria-hidden
      >
        <svg
          xmlns="http://www.w3.org/2000/svg"
          className="w-6 h-6"
          fill="none"
          viewBox="0 0 24 24"
          stroke="currentColor"
          strokeWidth={1.5}
        >
          <path strokeLinecap="round" strokeLinejoin="round" d="M19 9l-7 7-7-7" />
        </svg>
      </motion.div>
    </section>
  );
}
