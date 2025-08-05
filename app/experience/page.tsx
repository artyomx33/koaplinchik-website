/* eslint-disable react/no-unescaped-entities */
"use client";

import { motion } from "framer-motion";
import { WhisperText, StoryText, HeartText } from "@/components/ui/Typography";
import Image from "next/image";
import Link from "next/link";

export default function ExperiencePage() {
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
            The Experience
          </WhisperText>
          
          <StoryText 
            className="max-w-2xl mx-auto mb-8 opacity-90"
          >
            We don't just take photos. We create an experience where time slows down, 
            where you can breathe, and where memories crystallize into something tangible.
          </StoryText>
        </div>
      </section>
      
      {/* Coming Soon Section */}
      <section className="w-full max-w-5xl px-6 py-20 mx-auto text-center">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1.2, ease: [0.4, 0, 0.2, 1] }}
          className="relative p-10 border border-gray-200 dark:border-gray-800 rounded-lg overflow-hidden"
        >
          {/* Subtle background pattern */}
          <div className="absolute inset-0 opacity-5">
            <div className="absolute inset-0 bg-gradient-to-br from-black/20 via-transparent to-black/20" />
            <div className="w-full h-full bg-[radial-gradient(circle_at_center,_var(--color-heart)_1px,_transparent_1px)] bg-[size:20px_20px]"></div>
          </div>
          
          <div className="relative">
            <HeartText
              as="span"
              size="sm"
              className="inline-block mb-4 px-4 py-1 bg-black/5 dark:bg-white/5 rounded-full"
            >
              Coming Soon
            </HeartText>
            
            <WhisperText 
              as="h2" 
              size="lg" 
              className="mb-6"
            >
              We're crafting something beautiful
            </WhisperText>
            
            <StoryText 
              className="max-w-2xl mx-auto mb-10 opacity-80"
            >
              Most people rush to show unfinished work, sacrificing soul for speed.
              <strong className="font-medium block mt-2">
                We're taking our time to create an experience worthy of your memories.
              </strong>
            </StoryText>
            
            <div className="flex flex-col md:flex-row items-center justify-center gap-6 mt-8">
              <Link 
                href="/what-we-capture" 
                className="px-8 py-3 text-sm font-medium tracking-wide transition-colors border border-current rounded-full md:text-base hover:bg-black/5 dark:hover:bg-white/5"
              >
                Explore What We Capture
              </Link>
              
              <Link 
                href="/connect" 
                className="px-8 py-3 text-sm font-medium tracking-wide transition-colors rounded-full md:text-base hover:underline"
              >
                Connect with us now
              </Link>
            </div>
          </div>
        </motion.div>
        
        {/* Subtle countdown */}
        <motion.p
          initial={{ opacity: 0 }}
          animate={{ opacity: 0.6 }}
          transition={{ delay: 1, duration: 1 }}
          className="mt-10 text-sm italic"
        >
          The full experience unveils in autumn 2025
        </motion.p>
      </section>
    </main>
  );
}
