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
      <section className="relative w-full h-[70vh] text-white flex items-end">
        {/* Background Image */}
        <Image
          src="/images/heroes/experiences hero.png"
          alt="Couple enjoying an emotional photography experience"
          fill
          priority
          sizes="100vw"
          className="object-cover"
        />

        {/* Gradient overlay for readability */}
        <div className="absolute inset-0 bg-gradient-to-b from-black/30 via-black/60 to-black/90" />

        {/* Content */}
        <div className="relative z-10 w-full px-6 pb-20 text-center">
          <div className="max-w-5xl mx-auto">
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
        </div>
      </section>
      
      {/* Invitation Section */}
      <section className="w-full px-6 py-20 mx-auto flex items-center justify-center">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.2 }}
          transition={{ duration: 1, ease: [0.4, 0, 0.2, 1] }}
          className="max-w-3xl w-full p-12 bg-black/90 text-white backdrop-blur-xl rounded-lg shadow-2xl border border-white/20 text-center"
        >
          <WhisperText
            as="h2"
            size="lg"
            className="mb-6"
          >
            We're creating something special — just for you.
          </WhisperText>

          <StoryText className="text-lg mb-8 leading-relaxed">
            Some things can’t be rushed. We’re designing a photography experience
            that feels like poetry — quiet, meaningful, timeless.
            <strong className="block mt-4">
              Want to be the first to feel it?
            </strong>
          </StoryText>

          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            {/* Placeholder action – replace with real form/modal later */}
            <a
              href="#notify"
              className="px-8 py-3 text-sm font-medium tracking-wide rounded-full bg-white text-black transition-colors hover:bg-white/90"
            >
              Notify Me When It’s Live
            </a>
            <Link
              href="/connect"
              className="px-8 py-3 text-sm font-medium tracking-wide rounded-full border border-white text-white transition-colors hover:bg-white/10"
            >
              Connect with Us
            </Link>
          </div>
        </motion.div>
      </section>
    </main>
  );
}
