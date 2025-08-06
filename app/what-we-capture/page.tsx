/* eslint-disable react/no-unescaped-entities */
"use client";

import Image from "next/image";
import Link from "next/link";
import { motion, Variants, cubicBezier } from "framer-motion";
import { WhisperText, StoryText, HeartText } from "@/components/ui/Typography";

// Animation variants for staggered reveals
const containerVariants: Variants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.15,
      delayChildren: 0.3,
    },
  },
};

const cardVariants: Variants = {
  hidden: { opacity: 0, y: 30 },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.8,
      ease: cubicBezier(0.4, 0, 0.2, 1),
    },
  },
};

// CaptureCard component for each photography type
const CaptureCard = ({ 
  title, 
  description, 
  painPoint, 
  remedy, 
  imageSrc, 
  alt, 
  href 
}: { 
  title: string; 
  description: string; 
  painPoint: string; 
  remedy: string; 
  imageSrc: string; 
  alt: string; 
  href: string; 
}) => {
  return (
    <motion.div 
      className="group relative overflow-hidden rounded-lg shadow-xl bg-black/5 dark:bg-white/5"
      variants={cardVariants}
      whileHover={{ y: -5, transition: { duration: 0.3 } }}
    >
      <Link href={href} className="block h-full">
        <div className="relative aspect-[4/5] overflow-hidden">
          <Image
            src={imageSrc}
            alt={alt}
            fill
            sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 25vw"
            className="object-cover transition-transform duration-700 group-hover:scale-105"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/30 to-transparent" />
        </div>
        
        <div className="absolute bottom-0 left-0 right-0 p-6 text-white">
          <h3 className="text-xl md:text-2xl font-light mb-2">{title}</h3>
          <p className="text-sm opacity-90 mb-4">{description}</p>
          
          {/* Pain → Remedy pattern on hover */}
          <div className="overflow-hidden h-0 group-hover:h-auto transition-all duration-500">
            <p className="text-sm italic opacity-80 mb-2">{painPoint}</p>
            <p className="text-sm font-medium">{remedy}</p>
            
            <div className="mt-4 inline-flex items-center text-sm font-medium">
              <span>Explore</span>
              <svg 
                xmlns="http://www.w3.org/2000/svg" 
                className="h-4 w-4 ml-1 transition-transform duration-300 group-hover:translate-x-1" 
                fill="none" 
                viewBox="0 0 24 24" 
                stroke="currentColor"
              >
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14 5l7 7m0 0l-7 7m7-7H3" />
              </svg>
            </div>
          </div>
        </div>
      </Link>
    </motion.div>
  );
};

export default function WhatWeCapturePage() {
  return (
    <main className="flex flex-col items-center min-h-screen">
      {/* Hero Section */}
      <section className="relative w-full h-[70vh] text-white flex items-end">
        {/* Background image */}
        <Image
          src="/images/heroes/what we capture hero.webp"
          alt="Dramatic collage of captured moments"
          fill
          priority
          sizes="100vw"
          className="object-cover"
        />
        {/* Gradient overlay to ensure text readability */}
        <div className="absolute inset-0 bg-gradient-to-b from-black/30 via-black/60 to-black/90" />

        {/* Hero copy */}
        <div className="relative z-10 w-full px-6 pb-20">
          <div className="max-w-5xl mx-auto text-center">
          <WhisperText 
            as="h1" 
            size="xl" 
            className="mb-6"
          >
            What We Capture
          </WhisperText>
          
          <StoryText 
            className="max-w-2xl mx-auto mb-8 opacity-90"
          >
            Most photographers take pictures. We pause time. We listen for the whispers between 
            heartbeats, those fleeting seconds where your story breathes.
          </StoryText>
          
          <HeartText
            as="span"
            size="md"
            className="inline-block border-b border-white/30 pb-1"
          >
            Choose your journey below
          </HeartText>
        </div>
        </div>
      </section>
      
      {/* Capture Cards Grid */}
      <section className="w-full max-w-7xl px-6 py-20 mx-auto">
        <motion.div 
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8"
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.1 }}
        >
          <CaptureCard
            title="Whispers of New Life"
            description="The tender beginnings, tiny fingers, and first breaths"
            painPoint="They grow so quickly, those first precious days blur into memory."
            remedy="We slow time down, capturing each tiny detail before they change."
            imageSrc="/images/placeholders/tiny-heartbeat-newborn-memory.webp"
            alt="Newborn baby's hand gently held by parent"
            href="/what-we-capture/newborn"
          />
          
          <CaptureCard
            title="Chaos, Giggles & Love"
            description="Family moments that capture both the mess and the magic"
            painPoint="Daily life rushes by in a blur of routines and responsibilities."
            remedy="We find beauty in your beautiful chaos, preserving the laughter between the busy."
            imageSrc="/images/placeholders/chaotic-love-family-story.webp"
            alt="Family laughing together in natural, candid moment"
            href="/what-we-capture/family"
          />
          
          <CaptureCard
            title="The Moment Between 'Yes' and Forever"
            description="Wedding and couple photography that feels like your love story"
            painPoint="The day you've dreamed of passes in a heartbeat, often too quick to savor."
            remedy="We capture not just how it looked, but how it felt to promise forever."
            imageSrc="/images/placeholders/forever-whisper-couple-dream.webp"
            alt="Couple sharing an intimate moment together"
            href="/what-we-capture/couple"
          />
          
          <CaptureCard
            title="Quiet Portraits for Loud Emotions"
            description="Individual portraits that reveal your inner light"
            painPoint="We rarely see ourselves as others do, the beauty in our own story."
            remedy="We create a mirror that reflects not just your image, but your essence."
            imageSrc="/images/placeholders/soul-mirror-portrait-moment.JPG"
            alt="Emotional portrait in natural light"
            href="/what-we-capture/portrait"
          />
        </motion.div>
      </section>
      
      {/* Bottom CTA */}
      <section className="w-full bg-gradient-to-b from-black/10 to-black/30 py-20 px-6 text-center">
        <WhisperText 
          as="h2" 
          size="md" 
          className="mb-6"
        >
          When does your heart tell you it's time?
        </WhisperText>
        
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: [0.4, 0, 0.2, 1] }}
          viewport={{ once: true }}
        >
          <Link 
            href="/connect" 
            className="inline-block px-8 py-3 text-sm font-medium tracking-wide text-white transition-colors border border-black rounded-full md:text-base hover:bg-black/10"
          >
            Let's begin your story
          </Link>
        </motion.div>
      </section>
    </main>
  );
}
