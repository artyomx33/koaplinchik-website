"use client";

import React from "react";
import Image from "next/image";
import { motion, Variants, cubicBezier } from "framer-motion";

interface KoaplinchikLogoProps {
  /** Width of the logo (default: 200) */
  width?: number;
  /** Height of the logo (auto by default to maintain aspect ratio) */
  height?: number;
  /** Additional CSS classes */
  className?: string;
  /** Animation delay in seconds (default: 0) */
  delay?: number;
  /** Duration of fade-in animation in seconds (default: 0.8) */
  duration?: number;
  /** Whether to animate the logo (default: true) */
  animate?: boolean;
  /** Color theme (default: "light" for white logo) */
  theme?: "light" | "dark";
  /** Accessible label for the logo */
  ariaLabel?: string;
}

/**
 * KoaplinchikLogo - A simple, emotional logo component
 * 
 * Displays the Koaplinchik signature with a gentle fade-in animation,
 * creating a moment of recognition without overwhelming the experience.
 */
export default function KoaplinchikLogo({
  width = 200,
  height,
  className = "",
  delay = 0,
  duration = 0.8,
  animate = true,
  theme = "light",
  ariaLabel = "Koaplinchik Photography"
}: KoaplinchikLogoProps) {
  // Determine the image source based on theme
  const imageSrc = theme === "light" 
    ? "/images/brand/hearts-signature-light-dream.png" 
    : "/images/brand/hearts-signature-dark-dream.png";
  
  // Calculate aspect ratio-preserving height if not specified
  const imageHeight = height || (width * 0.33); // Assuming 3:1 aspect ratio
  
  // Simple fade-in animation
  const fadeVariants: Variants = {
    hidden: { opacity: 0 },
    visible: { 
      opacity: 1,
      transition: { 
        duration: duration,
        delay: delay,
        ease: cubicBezier(0.4, 0, 0.2, 1) 
      }
    }
  };

  return (
    <motion.div
      className={`relative ${className}`}
      style={{ width, height: imageHeight }}
      initial={animate ? "hidden" : "visible"}
      animate="visible"
      variants={fadeVariants}
      aria-label={ariaLabel}
    >
      <Image
        src={imageSrc}
        alt={ariaLabel}
        fill
        sizes={`${width}px`}
        style={{ objectFit: "contain", objectPosition: "center" }}
        priority={delay < 0.5} // Use priority loading for logos that appear immediately
      />
    </motion.div>
  );
}
