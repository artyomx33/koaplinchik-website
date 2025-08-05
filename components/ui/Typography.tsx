"use client";

import React, { ReactNode } from "react";
import { motion, Variants, cubicBezier } from "framer-motion";
import { useInView } from "react-intersection-observer";

// Color variants for different emotional contexts
type EmotionColor = 
  | "whisper" // subtle light
  | "heart" // warm, passionate
  | "memory" // nostalgic, soft
  | "dream" // ethereal, hopeful
  | "story" // grounded, present
  | "custom"; // for custom styling

// Animation variants
const textAnimationVariants: Variants = {
  hidden: { 
    opacity: 0, 
    y: 10, 
    filter: "blur(2px)" 
  },
  visible: { 
    opacity: 1, 
    y: 0, 
    filter: "blur(0px)",
    transition: { 
      duration: 0.8,
      ease: cubicBezier(0.4, 0, 0.2, 1)
    }
  }
};

// Base props for all typography components
interface BaseTypographyProps {
  children: ReactNode;
  className?: string;
  emotion?: EmotionColor;
  animate?: boolean;
  delay?: number;
  id?: string;
}

// Color mapping based on emotion
const getEmotionColors = (emotion: EmotionColor = "whisper") => {
  switch (emotion) {
    case "whisper":
      return "text-gray-100";
    case "heart":
      return "text-rose-50";
    case "memory":
      return "text-amber-50";
    case "dream":
      return "text-indigo-50";
    case "story":
      return "text-emerald-50";
    case "custom":
      return "";
    default:
      return "text-gray-100";
  }
};

// WhisperText Component - For main headings that pause the reader
interface WhisperTextProps extends BaseTypographyProps {
  as?: "h1" | "h2" | "h3" | "h4";
  size?: "xs" | "sm" | "md" | "lg" | "xl" | "2xl";
}

export function WhisperText({
  children,
  className = "",
  emotion = "whisper",
  animate = true,
  delay = 0,
  as = "h2",
  size = "lg",
  id,
}: WhisperTextProps) {
  const { ref, inView } = useInView({
    threshold: 0.2,
    triggerOnce: true,
  });

  const sizeClasses = {
    xs: "text-xl md:text-2xl leading-tight",
    sm: "text-2xl md:text-3xl leading-tight",
    md: "text-3xl md:text-4xl leading-tight",
    lg: "text-4xl md:text-5xl leading-tight",
    xl: "text-5xl md:text-6xl leading-tight",
    "2xl": "text-6xl md:text-7xl leading-tight",
  };

  const emotionColor = getEmotionColors(emotion);
  const Component = as;
  
  const content = (
    <Component
      id={id}
      className={`font-light tracking-wide ${sizeClasses[size]} ${emotionColor} ${className}`}
    >
      {children}
    </Component>
  );

  if (!animate) return content;

  return (
    <motion.div
      ref={ref}
      variants={textAnimationVariants}
      initial="hidden"
      animate={inView ? "visible" : "hidden"}
      transition={{ delay }}
    >
      {content}
    </motion.div>
  );
}

// StoryText Component - For body text that flows like poetry
interface StoryTextProps extends BaseTypographyProps {
  as?: "p" | "span" | "div";
  size?: "xs" | "sm" | "md" | "lg";
}

export function StoryText({
  children,
  className = "",
  emotion = "story",
  animate = true,
  delay = 0.1,
  as = "p",
  size = "md",
  id,
}: StoryTextProps) {
  const { ref, inView } = useInView({
    threshold: 0.2,
    triggerOnce: true,
  });

  const sizeClasses = {
    xs: "text-sm md:text-base leading-relaxed",
    sm: "text-base md:text-lg leading-relaxed",
    md: "text-lg md:text-xl leading-relaxed",
    lg: "text-xl md:text-2xl leading-relaxed",
  };

  const emotionColor = getEmotionColors(emotion);
  const Component = as;
  
  const content = (
    <Component
      id={id}
      className={`font-light ${sizeClasses[size]} ${emotionColor} ${className}`}
    >
      {children}
    </Component>
  );

  if (!animate) return content;

  return (
    <motion.div
      ref={ref}
      variants={textAnimationVariants}
      initial="hidden"
      animate={inView ? "visible" : "hidden"}
      transition={{ delay }}
    >
      {content}
    </motion.div>
  );
}

// HeartText Component - For CTAs and important actions
interface HeartTextProps extends BaseTypographyProps {
  as?: "span" | "strong" | "em" | "div";
  size?: "xs" | "sm" | "md" | "lg";
}

export function HeartText({
  children,
  className = "",
  emotion = "heart",
  animate = true,
  delay = 0.2,
  as = "span",
  size = "md",
  id,
}: HeartTextProps) {
  const { ref, inView } = useInView({
    threshold: 0.2,
    triggerOnce: true,
  });

  const sizeClasses = {
    xs: "text-sm md:text-base",
    sm: "text-base md:text-lg",
    md: "text-lg md:text-xl",
    lg: "text-xl md:text-2xl",
  };

  const emotionColor = getEmotionColors(emotion);
  const Component = as;
  
  const content = (
    <Component
      id={id}
      className={`font-medium tracking-wide ${sizeClasses[size]} ${emotionColor} ${className}`}
    >
      {children}
    </Component>
  );

  if (!animate) return content;

  return (
    <motion.div
      ref={ref}
      variants={textAnimationVariants}
      initial="hidden"
      animate={inView ? "visible" : "hidden"}
      transition={{ delay }}
    >
      {content}
    </motion.div>
  );
}

// MemoryText Component - For captions and subtle text
interface MemoryTextProps extends BaseTypographyProps {
  as?: "span" | "small" | "figcaption" | "div";
  size?: "xs" | "sm" | "md";
}

export function MemoryText({
  children,
  className = "",
  emotion = "memory",
  animate = true,
  delay = 0.15,
  as = "span",
  size = "sm",
  id,
}: MemoryTextProps) {
  const { ref, inView } = useInView({
    threshold: 0.2,
    triggerOnce: true,
  });

  const sizeClasses = {
    xs: "text-xs md:text-sm",
    sm: "text-sm md:text-base",
    md: "text-base md:text-lg",
  };

  const emotionColor = getEmotionColors(emotion);
  const Component = as;
  
  const content = (
    <Component
      id={id}
      className={`font-light italic ${sizeClasses[size]} ${emotionColor} ${className}`}
    >
      {children}
    </Component>
  );

  if (!animate) return content;

  return (
    <motion.div
      ref={ref}
      variants={textAnimationVariants}
      initial="hidden"
      animate={inView ? "visible" : "hidden"}
      transition={{ delay }}
    >
      {content}
    </motion.div>
  );
}
