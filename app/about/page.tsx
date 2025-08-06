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
            className="max-w-2xl mx-auto mb-8 text-gray-100 opacity-95"
          >
            We don’t take photos. <br className="hidden md:inline" />
            We pause time and send it back as a love letter.
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
              className="relative flex-1 aspect-[4/3] overflow-hidden rounded-lg shadow-lg border-4 border-white"
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
              <StoryText className="mb-6 text-gray-800 dark:text-gray-200 leading-relaxed">
                We are <strong>Niki</strong> &amp; <strong>Artem</strong> — the souls behind Koaplinchik.
                Our story didn’t begin with a business plan. It began with a kiss, a laugh,
                and the kind of look that says, <em>“I see you.”</em>
                <br /><br />
                That’s what we chase through every lens: the look that matters. The quiet
                breath before a vow. The fingertip that brushes a cheek. The last moment
                before everything changes.
                <br /><br />
                We’ve shot memories in storm-light, in candle-light, in the kind of light that
                only exists when someone’s falling in love.
                <br /><br />
                We don’t offer photography. <br className="hidden md:inline" />
                We offer remembrance — shaped by instinct, trust, and a little bit of magic.
              </StoryText>

              <MemoryText className="italic mb-8 text-gray-800 dark:text-gray-200">
                “Every photograph is a love letter we send back to the moment it was born.”
              </MemoryText>

              <div className="flex gap-4">
                <Link 
                  href="/stories" 
                  className="px-8 py-3 text-sm font-medium tracking-wide transition-colors border border-current rounded-full md:text-base hover:bg-black/5 dark:hover:bg-white/5"
                >
                  Explore the Stories
                </Link>
                
                <Link 
                  href="/connect" 
                  className="px-8 py-3 text-sm font-medium tracking-wide transition-all rounded-full md:text-base border border-current hover:bg-black/90 hover:text-white dark:hover:bg-white dark:hover:text-black"
                >
                  Start a Conversation
                </Link>
              </div>
            </div>
          </div>

        </motion.div>
      </section>
    </main>
  );
}
