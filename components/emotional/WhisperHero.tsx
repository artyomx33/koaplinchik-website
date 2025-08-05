"use client";

import { useState, useEffect, useRef } from "react";
import Image from "next/image";
import { motion, Variants, Easing, cubicBezier } from "framer-motion";
import { useInView } from "react-intersection-observer";

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
  backgroundImage = "/images/hero-whisper-moment.jpg",
  backgroundVideo = "/videos/memories-whisper.mp4",
  tagline = "Where memories become poetry",
  heading = "Before the moment fades into yesterday",
  subheading = "We'll capture the whispers between heartbeats, those fleeting seconds where your story breathes",
  ctaText = "Let's create together",
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
        delay: 0.4
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
      <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-black/40 to-black/20"></div>
      
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
        
        {/* Main Heading - Pain */}
        <motion.h1 
          className="max-w-3xl mb-4 text-3xl font-light leading-tight md:text-5xl lg:text-6xl"
          variants={itemVariants}
        >
          {heading}
        </motion.h1>
        
        {/* Subheading - Remedy */}
        <motion.p 
          className="max-w-2xl mb-8 text-base font-light leading-relaxed opacity-90 md:text-lg"
          variants={itemVariants}
        >
          {subheading}
        </motion.p>
        
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
    </section>
  );
}
