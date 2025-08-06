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
      {/* Hero Section – romantic Niki & Artem image */}
      <section className="relative w-full h-[70vh] text-white flex items-end">
        {/* Background image */}
        <Image
          src="/images/heroes/niki kissing artem.webp"
          alt="Niki kissing Artem — souls-kissing-eternal-moment"
          fill
          priority
          sizes="100vw"
          className="object-cover"
        />
        {/* Overlay for text readability */}
        <div className="absolute inset-0 bg-gradient-to-b from-black/30 via-black/60 to-black/90" />

        <div className="relative z-10 w-full px-6 pb-24">
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
        </div>
      </section>
      
      {/* Hearts Behind the Lens */}
      <section className="w-full max-w-6xl px-6 py-24 mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.2 }}
          transition={{ duration: 1, ease: [0.4, 0, 0.2, 1] }}
        >
          <HeartText
            as="span"
            size="sm"
            className="inline-block mb-6 px-4 py-1 bg-black/5 dark:bg-white/5 rounded-full text-center"
          >
            Hearts Behind the Lens
          </HeartText>

          <WhisperText 
            as="h2" 
            size="lg" 
            className="mb-10 text-center"
          >
            Meet Niki &amp; Artem
          </WhisperText>

          <div className="flex flex-col lg:flex-row gap-12 items-center">
            {/* Niki & Artem Photo 1 */}
            <motion.div
              className="relative flex-1 aspect-[4/3] overflow-hidden rounded-lg shadow-lg"
              initial={{ opacity: 0, scale: 0.95 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 1, ease: [0.4, 0, 0.2, 1] }}
            >
              <Image
                src="/images/placeholders/niki artem holding hands ocean.webp"
                alt="Niki and Artem holding hands by the ocean – hearts-together-ocean-dream"
                fill
                sizes="(max-width: 1024px) 100vw, 50vw"
                className="object-cover"
                priority
              />
            </motion.div>

            {/* Copy */}
            <div className="flex-1">
              <StoryText className="mb-6 opacity-90">
                We are <strong>Niki</strong> &amp; <strong>Artem</strong>, the souls breathing life into Koaplinchik. 
                Our journey began with a single click – not of the shutter, but of two hearts 
                recognising the poetry in each other&rsquo;s gaze.
              </StoryText>

              <StoryText className="mb-6 opacity-90">
                From windswept coasts to quiet kitchen mornings, we chase the fleeting seconds 
                where love whispers its truest form. Our cameras are merely pens; light, our ink; 
                your emotions, the story we are humbled to write.
              </StoryText>

              <MemoryText className="italic mb-8">
                “Every photograph is a love letter we send back to the moment it was born.”
              </MemoryText>

              <div className="flex gap-4">
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
          </div>

        </motion.div>
      </section>
    </main>
  );
}
