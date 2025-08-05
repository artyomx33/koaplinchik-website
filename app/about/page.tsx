/* eslint-disable @next/next/no-img-element */
"use client";
import { Metadata } from "next";
import { motion } from "framer-motion";
import { WhisperText, StoryText, HeartText, MemoryText } from "@/components/ui/Typography";
import Image from "next/image";
import Link from "next/link";

export default function AboutPage() {
  return (
    <main className="flex flex-col items-center min-h-screen">
      {/* Hero Section */}
      <section className="w-full bg-gradient-to-b from-black/90 to-black/70 text-white py-32 px-6">
        <div className="max-w-5xl mx-auto text-center">
          <WhisperText 
            as="h1" 
            size="xl" 
            className="mb-6"
          >
            Our Story
          </WhisperText>
          
          <StoryText 
            className="max-w-2xl mx-auto mb-8 opacity-90"
          >
            Behind every photograph is a philosophy — a belief that moments deserve to be 
            preserved not just as they appeared, but as they were felt.
          </StoryText>
        </div>
      </section>
      
      {/* Coming Soon Section */}
      <section className="w-full max-w-5xl px-6 py-20 mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1.2, ease: [0.4, 0, 0.2, 1] }}
          className="relative p-10 border border-gray-200 dark:border-gray-800 rounded-lg overflow-hidden"
        >
          {/* Subtle background pattern */}
          <div className="absolute inset-0 opacity-5">
            <div className="absolute inset-0 bg-gradient-to-br from-black/20 via-transparent to-black/20" />
            <div className="w-full h-full bg-[radial-gradient(circle_at_center,_var(--color-whisper)_1px,_transparent_1px)] bg-[size:20px_20px]"></div>
          </div>
          
          <div className="relative text-center">
            <HeartText
              as="span"
              size="sm"
              className="inline-block mb-4 px-4 py-1 bg-black/5 dark:bg-white/5 rounded-full"
            >
              Our Journey Unfolds
            </HeartText>
            
            <WhisperText 
              as="h2" 
              size="lg" 
              className="mb-6"
            >
              We're crafting our story with the same care we give yours
            </WhisperText>
            
            <StoryText 
              className="max-w-2xl mx-auto mb-10 opacity-80"
            >
              Most people rush to tell their story, filling pages with words that don't breathe.
              <strong className="font-medium block mt-2">
                We're taking our time, because the best stories are felt, not just read.
              </strong>
            </StoryText>
            
            <motion.div
              initial={{ opacity: 0, scale: 0.95 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ delay: 0.5, duration: 0.8 }}
              className="w-24 h-1 bg-gradient-to-r from-transparent via-gray-300 dark:via-gray-700 to-transparent mx-auto my-10"
            />
            
            <MemoryText
              as="div"
              size="md"
              className="italic"
            >
              "In a world of pixels, we choose poetry."
            </MemoryText>
            
            <div className="flex flex-col md:flex-row items-center justify-center gap-6 mt-12">
              <Link 
                href="/what-we-capture" 
                className="px-8 py-3 text-sm font-medium tracking-wide transition-colors border border-current rounded-full md:text-base hover:bg-black/5 dark:hover:bg-white/5"
              >
                Explore Our Work
              </Link>
              
              <Link 
                href="/connect" 
                className="px-8 py-3 text-sm font-medium tracking-wide transition-colors rounded-full md:text-base hover:underline"
              >
                Begin a Conversation
              </Link>
            </div>
          </div>
        </motion.div>
        
        {/* Subtle hint */}
        <motion.p
          initial={{ opacity: 0 }}
          animate={{ opacity: 0.6 }}
          transition={{ delay: 1, duration: 1 }}
          className="mt-10 text-sm italic text-center"
        >
          Our full story arrives with the autumn leaves, 2025
        </motion.p>
      </section>
    </main>
  );
}
