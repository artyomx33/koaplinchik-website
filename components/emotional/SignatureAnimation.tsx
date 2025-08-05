"use client";

import React from "react";
import { motion, Variants, cubicBezier } from "framer-motion";

interface SignatureAnimationProps {
  /** Width of the signature (default: "auto") */
  width?: string | number;
  /** Height of the signature (default: "auto") */
  height?: string | number;
  /** Color of the signature (default: "currentColor") */
  color?: string;
  /** Stroke width of the signature (default: 4) */
  strokeWidth?: number;
  /** Delay before animation starts in seconds (default: 0) */
  delay?: number;
  /** Duration of the animation in seconds (default: 1.5) */
  duration?: number;
  /** Custom CSS class names */
  className?: string;
  /** Whether to animate on mount (default: true) */
  animate?: boolean;
  /** Accessibility label (default: "Koaplinchik signature") */
  ariaLabel?: string;
  /** Optional ID for the SVG element */
  id?: string;
}

/**
 * SignatureAnimation - Animates the Koaplinchik signature with a handwriting effect
 * 
 * This component creates an emotional connection by revealing the signature
 * as if it's being written in real-time, creating a moment of pause.
 */
export default function SignatureAnimation({
  width = "auto",
  height = "auto",
  color = "currentColor",
  strokeWidth = 4,
  delay = 0,
  duration = 1.5,
  className = "",
  animate = true,
  ariaLabel = "Koaplinchik signature",
  id,
}: SignatureAnimationProps) {
  // Signature animation variants
  const signatureVariants: Variants = {
    hidden: { 
      opacity: 0,
    },
    visible: {
      opacity: 1,
      transition: {
        duration: 0.5,
        ease: cubicBezier(0.4, 0, 0.2, 1),
        delay: delay,
      },
    },
  };
  
  // Path animation variants - creates the drawing effect
  const pathVariants: Variants = {
    hidden: { 
      pathLength: 0,
      opacity: 0,
    },
    visible: {
      pathLength: 1,
      opacity: 1,
      transition: {
        pathLength: {
          duration: duration,
          ease: cubicBezier(0.4, 0, 0.2, 1),
          delay: delay,
        },
        opacity: {
          duration: 0.3,
          ease: cubicBezier(0.4, 0, 0.2, 1),
          delay: delay,
        }
      },
    },
  };

  // Dot animation variants - appear after the signature is drawn
  const dotVariants: Variants = {
    hidden: { 
      opacity: 0,
      scale: 0,
    },
    visible: {
      opacity: 1,
      scale: 1,
      transition: {
        duration: 0.3,
        ease: cubicBezier(0.4, 0, 0.2, 1),
        delay: delay + duration * 0.9, // Dots appear near the end of the signature animation
      },
    },
  };

  return (
    <motion.svg
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 600 200"
      width={width}
      height={height}
      className={className}
      variants={signatureVariants}
      initial={animate ? "hidden" : "visible"}
      animate={animate ? "visible" : "visible"}
      aria-label={ariaLabel}
      id={id}
      role="img"
    >
      <motion.path
        d="M30.5,76.2c0,0,9.8-42.2,19.7-35.6c9.8,6.7,5.7,23.7,0.8,34.8c-4.9,11.1-14.8,27.4-14.8,27.4
          s-6.6,10.4-3.3,11.9c3.3,1.5,9.8-4.4,16.4-11.9c6.6-7.4,18-29.6,18-29.6s7.4-17.8,13.9-13.3c6.6,4.4,0,14.8-4.9,24.4
          c-4.9,9.6-13.1,21.5-13.1,21.5s-4.1,5.9-0.8,6.7c3.3,0.7,9.8-5.9,14.8-11.9c4.9-5.9,13.9-17.8,13.9-17.8s6.6-8.9,11.5-5.9
          c4.9,3,1.6,8.9-1.6,14.8c-3.3,5.9-9.8,16.3-9.8,16.3s-3.3,5.9,0,5.9c3.3,0,9.8-5.9,14.8-11.9c4.9-5.9,13.1-14.8,13.1-14.8
          s8.2-8.9,13.1-5.9c4.9,3,1.6,8.9-1.6,14.8c-3.3,5.9-8.2,13.3-8.2,13.3s-3.3,5.9,0,5.9c3.3,0,8.2-4.4,13.1-10.4
          c4.9-5.9,13.9-17.8,13.9-17.8s4.9-8.1,9.8-5.2c4.9,3,0,11.9-4.9,20.7c-4.9,8.9-11.5,17.8-11.5,17.8s-4.9,5.9-0.8,7.4
          c4.1,1.5,11.5-5.9,17.2-13.3c5.7-7.4,13.9-20.7,13.9-20.7s4.9-8.9,9.8-5.9c4.9,3,0,11.9-4.9,20.7c-4.9,8.9-9.8,17.8-9.8,17.8
          s-3.3,5.9,0.8,5.9c4.1,0,9.8-5.9,14.8-11.9c4.9-5.9,13.1-17.8,13.1-17.8s4.9-8.9,9.8-5.9c4.9,3,0,11.9-4.9,20.7
          c-4.9,8.9-9.8,17.8-9.8,17.8s-3.3,5.9,0.8,5.9c4.1,0,9.8-5.9,14.8-11.9c4.9-5.9,13.1-17.8,13.1-17.8s4.9-8.9,9.8-5.9
          c4.9,3,0,11.9-4.9,20.7c-4.9,8.9-9.8,17.8-9.8,17.8s-3.3,5.9,0.8,5.9c4.1,0,9.8-5.9,14.8-11.9c4.9-5.9,11.5-16.3,11.5-16.3
          s3.3-5.9,8.2-2.2c4.9,3.7,0,11.9-4.9,20.7c-4.9,8.9-9.8,17.8-9.8,17.8s-3.3,5.9,0.8,5.9c4.1,0,9.8-5.9,14.8-11.9
          c4.9-5.9,13.1-17.8,13.1-17.8s4.9-8.9,9.8-5.9c4.9,3,0,11.9-4.9,20.7c-4.9,8.9-9.8,17.8-9.8,17.8s-3.3,5.9,0.8,5.9
          c4.1,0,9.8-5.9,14.8-11.9c4.9-5.9,11.5-16.3,11.5-16.3s3.3-5.9,8.2-2.2c4.9,3.7,0,11.9-4.9,20.7c-4.9,8.9-9.8,17.8-9.8,17.8
          s-3.3,5.9,0.8,5.9c4.1,0,9.8-5.9,14.8-11.9c4.9-5.9,13.1-17.8,13.1-17.8"
        stroke={color}
        strokeWidth={strokeWidth}
        strokeLinecap="round"
        strokeLinejoin="round"
        fill="none"
        variants={pathVariants}
        initial={animate ? "hidden" : "visible"}
        animate={animate ? "visible" : "visible"}
      />
      
      {/* The signature dots */}
      <motion.circle 
        cx="498" 
        cy="77" 
        r={strokeWidth} 
        fill={color} 
        variants={dotVariants}
        initial={animate ? "hidden" : "visible"}
        animate={animate ? "visible" : "visible"}
      />
      <motion.circle 
        cx="545" 
        cy="77" 
        r={strokeWidth} 
        fill={color} 
        variants={dotVariants}
        initial={animate ? "hidden" : "visible"}
        animate={animate ? "visible" : "visible"}
      />
    </motion.svg>
  );
}
