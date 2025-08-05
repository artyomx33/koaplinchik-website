/* eslint-disable react/no-unescaped-entities */
"use client";

import Image from "next/image";
import Link from "next/link";
import { motion, Variants, cubicBezier } from "framer-motion";
import { WhisperText, StoryText, HeartText, MemoryText } from "@/components/ui/Typography";

// Animation variants
const fadeInUp: Variants = {
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

const staggerContainer: Variants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.2,
      delayChildren: 0.3,
    },
  },
};

export default function NewbornPage() {
  return (
    <main className="flex flex-col items-center min-h-screen">
      {/* Hero Section */}
      <section className="w-full relative h-[70vh] overflow-hidden">
        {/* Background Image */}
        <div className="absolute inset-0">
          <Image
            src="/images/placeholders/tiny-heartbeat-newborn-memory.webp"
            alt="Newborn baby's hand gently held by parent"
            fill
            priority
            sizes="100vw"
            className="object-cover"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/50 to-black/30" />
        </div>
        
        {/* Hero Content */}
        <div className="relative z-10 flex flex-col items-center justify-end w-full h-full px-6 pb-20 text-center text-white">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1, ease: [0.4, 0, 0.2, 1] }}
          >
            <WhisperText 
              as="h1" 
              size="xl" 
              className="mb-6"
            >
              Whispers of New Life
            </WhisperText>
            
            <StoryText 
              className="max-w-2xl mx-auto mb-8 opacity-90"
            >
              Those first precious days pass in a heartbeat. Let us slow time down, 
              capturing each tiny detail before they change forever.
            </StoryText>
          </motion.div>
        </div>
      </section>
      
      {/* Introduction Section */}
      <section className="w-full max-w-5xl px-6 py-20 mx-auto">
        <motion.div
          variants={staggerContainer}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.2 }}
          className="text-center"
        >
          <motion.div variants={fadeInUp}>
            <HeartText
              as="span"
              size="sm"
              className="inline-block mb-4 px-4 py-1 bg-black/5 dark:bg-white/5 rounded-full"
            >
              The First Whispers
            </HeartText>
          </motion.div>
          
          <motion.div variants={fadeInUp}>
            <WhisperText 
              as="h2" 
              size="lg" 
              className="mb-6"
            >
              Those First Precious Days
            </WhisperText>
          </motion.div>
          
          <motion.div variants={fadeInUp}>
            <StoryText 
              className="max-w-3xl mx-auto mb-12 opacity-90"
            >
              Newborns change daily, sometimes hourly. The tiny fingers, the delicate eyelashes, 
              the way they curl into that perfect position they held for months in the womb. 
              These details deserve to be preserved with the same tenderness they were created.
            </StoryText>
          </motion.div>
          
          <motion.div 
            variants={fadeInUp}
            className="grid grid-cols-1 md:grid-cols-2 gap-12 text-left"
          >
            <div>
              <h3 className="text-xl font-light mb-4">The Perfect Timing</h3>
              <p className="opacity-80 mb-6">
                The ideal time for newborn photography is within the first two weeks of life, 
                when your baby still naturally curls into those womb-like poses and sleeps 
                deeply enough for gentle positioning.
              </p>
              <p className="opacity-80">
                We recommend booking your session during your pregnancy, ideally in your 
                second trimester, to ensure we reserve time around your due date.
              </p>
            </div>
            
            <div>
              <h3 className="text-xl font-light mb-4">Our Approach</h3>
              <p className="opacity-80 mb-6">
                We focus on baby-led posing, following your newborn's natural movements and 
                comfort. Our sessions are unhurried, allowing plenty of time for feeding, 
                soothing, and those unexpected precious moments.
              </p>
              <p className="opacity-80">
                Safety is our absolute priority. We use only natural poses, gentle handling, 
                and maintain constant supervision.
              </p>
            </div>
          </motion.div>
        </motion.div>
      </section>
      
      {/* Session Details */}
      <section className="w-full bg-black/5 dark:bg-white/5 py-20 px-6">
        <div className="max-w-5xl mx-auto">
          <motion.div
            variants={staggerContainer}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.2 }}
            className="text-center mb-12"
          >
            <motion.div variants={fadeInUp}>
              <MemoryText
                as="span"
                size="sm"
                className="block mb-4"
              >
                SESSION DETAILS
              </MemoryText>
            </motion.div>
            
            <motion.div variants={fadeInUp}>
              <WhisperText 
                as="h2" 
                size="md" 
                className="mb-6"
              >
                What to Expect
              </WhisperText>
            </motion.div>
          </motion.div>
          
          <motion.div 
            className="grid grid-cols-1 md:grid-cols-3 gap-10"
            variants={staggerContainer}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.2 }}
          >
            <motion.div 
              className="bg-white/50 dark:bg-black/50 p-8 rounded-lg shadow-sm"
              variants={fadeInUp}
            >
              <h3 className="text-xl font-light mb-4">Before Your Session</h3>
              <ul className="space-y-3 opacity-80">
                <li>• Consultation to discuss your vision</li>
                <li>• Guidance on preparing your baby</li>
                <li>• Access to our prop collection</li>
                <li>• Flexible scheduling around your due date</li>
                <li>• Preparation guide for a smooth session</li>
              </ul>
            </motion.div>
            
            <motion.div 
              className="bg-white/50 dark:bg-black/50 p-8 rounded-lg shadow-sm"
              variants={fadeInUp}
            >
              <h3 className="text-xl font-light mb-4">During Your Session</h3>
              <ul className="space-y-3 opacity-80">
                <li>• 2-4 hour unhurried session</li>
                <li>• Warm, comfortable environment</li>
                <li>• Time for feeding and soothing</li>
                <li>• Family and sibling portraits</li>
                <li>• Variety of setups and poses</li>
              </ul>
            </motion.div>
            
            <motion.div 
              className="bg-white/50 dark:bg-black/50 p-8 rounded-lg shadow-sm"
              variants={fadeInUp}
            >
              <h3 className="text-xl font-light mb-4">After Your Session</h3>
              <ul className="space-y-3 opacity-80">
                <li>• Careful editing of each image</li>
                <li>• Online gallery of 20-30 images</li>
                <li>• Assistance with print selection</li>
                <li>• Custom album design options</li>
                <li>• Archival of your images</li>
              </ul>
            </motion.div>
          </motion.div>
        </div>
      </section>
      
      {/* Pricing Section */}
      <section className="w-full max-w-5xl px-6 py-20 mx-auto">
        <motion.div
          variants={staggerContainer}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.2 }}
          className="text-center mb-12"
        >
          <motion.div variants={fadeInUp}>
            <HeartText
              as="span"
              size="sm"
              className="inline-block mb-4 px-4 py-1 bg-black/5 dark:bg-white/5 rounded-full"
            >
              Investment
            </HeartText>
          </motion.div>
          
          <motion.div variants={fadeInUp}>
            <WhisperText 
              as="h2" 
              size="md" 
              className="mb-6"
            >
              Preserving First Memories
            </WhisperText>
          </motion.div>
          
          <motion.div variants={fadeInUp}>
            <StoryText 
              className="max-w-2xl mx-auto mb-12 opacity-90"
            >
              We believe these fleeting moments deserve to be preserved with the highest quality 
              and care. Our pricing reflects the time, expertise, and heart we put into each session.
            </StoryText>
          </motion.div>
        </motion.div>
        
        <motion.div 
          className="flex flex-col md:flex-row gap-8 justify-center"
          variants={staggerContainer}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.2 }}
        >
          <motion.div 
            className="flex-1 border border-black/10 dark:border-white/10 rounded-lg p-8 text-center max-w-md mx-auto"
            variants={fadeInUp}
            whileHover={{ y: -5, transition: { duration: 0.3 } }}
          >
            <h3 className="text-2xl font-light mb-2">Whisper Session</h3>
            <p className="opacity-70 mb-6">Essential newborn memories</p>
            <p className="text-3xl mb-6">€450</p>
            <ul className="space-y-3 text-left mb-8 opacity-80">
              <li>• 2-3 hour session</li>
              <li>• 15 digital images</li>
              <li>• Online gallery</li>
              <li>• Basic props and wraps</li>
              <li>• Baby-only poses</li>
            </ul>
            <Link 
              href="/connect" 
              className="inline-block px-6 py-3 border border-current rounded-full transition-colors hover:bg-black/5 dark:hover:bg-white/5"
            >
              Book This Session
            </Link>
          </motion.div>
          
          <motion.div 
            className="flex-1 bg-black/5 dark:bg-white/5 rounded-lg p-8 text-center max-w-md mx-auto border-2 border-black/20 dark:border-white/20"
            variants={fadeInUp}
            whileHover={{ y: -5, transition: { duration: 0.3 } }}
          >
            <div className="inline-block px-3 py-1 bg-black/10 dark:bg-white/10 rounded-full text-sm mb-4">Most Popular</div>
            <h3 className="text-2xl font-light mb-2">Heartbeat Collection</h3>
            <p className="opacity-70 mb-6">Complete newborn story</p>
            <p className="text-3xl mb-6">€650</p>
            <ul className="space-y-3 text-left mb-8 opacity-80">
              <li>• 3-4 hour session</li>
              <li>• 25 digital images</li>
              <li>• Family & sibling poses</li>
              <li>• Premium props collection</li>
              <li>• 10 printed photos (13x18cm)</li>
              <li>• €100 print credit</li>
            </ul>
            <Link 
              href="/connect" 
              className="inline-block px-6 py-3 bg-black text-white dark:bg-white dark:text-black rounded-full transition-colors hover:bg-black/90 dark:hover:bg-white/90"
            >
              Book This Session
            </Link>
          </motion.div>
        </motion.div>
      </section>
      
      {/* Testimonial */}
      <section className="w-full bg-black/5 dark:bg-white/5 py-16 px-6">
        <div className="max-w-4xl mx-auto">
          <motion.blockquote
            className="text-xl md:text-2xl font-light italic text-center mb-8"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 1, ease: [0.4, 0, 0.2, 1] }}
            viewport={{ once: true }}
          >
            "I didn't realize how quickly those first days would pass. The images Koaplinchik created 
            of our daughter's first week are now our most treasured possessions. They captured not just 
            how she looked, but how it felt to hold her for the first time."
          </motion.blockquote>
          
          <motion.div
            className="flex items-center justify-center"
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ delay: 0.5, duration: 0.8 }}
            viewport={{ once: true }}
          >
            <div className="text-center">
              <p className="font-medium">Sara & Thomas</p>
              <p className="text-sm opacity-75">Parents to Lily, 2024</p>
            </div>
          </motion.div>
        </div>
      </section>
      
      {/* Safety Note */}
      <section className="w-full max-w-4xl px-6 py-16 mx-auto">
        <motion.div
          className="bg-white/50 dark:bg-black/50 p-8 rounded-lg border border-black/10 dark:border-white/10"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: [0.4, 0, 0.2, 1] }}
          viewport={{ once: true }}
        >
          <h3 className="text-xl font-light mb-4 flex items-center">
            <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 mr-2" viewBox="0 0 20 20" fill="currentColor">
              <path fillRule="evenodd" d="M10 2a8 8 0 100 16 8 8 0 000-16zm0 14a6 6 0 100-12 6 6 0 000 12zm0-9a1 1 0 011 1v3a1 1 0 11-2 0V8a1 1 0 011-1zm0 8a1 1 0 100-2 1 1 0 000 2z" clipRule="evenodd" />
            </svg>
            Our Commitment to Safety
          </h3>
          <p className="opacity-80 mb-4">
            Your baby's safety is our absolute priority. We never force poses or put your baby in unsafe positions. 
            Many of our composite images are created from multiple photos to ensure your baby is supported at all times.
          </p>
          <p className="opacity-80">
            We maintain a clean, warm environment and are up-to-date on vaccinations and infant CPR certification. 
            Parents are always within arm's reach during the session.
          </p>
        </motion.div>
      </section>
      
      {/* CTA Section */}
      <section className="w-full bg-gradient-to-b from-black/10 to-black/30 py-20 px-6 text-center">
        <div className="max-w-3xl mx-auto">
          <WhisperText 
            as="h2" 
            size="md" 
            className="mb-6"
          >
            They'll only be this small once
          </WhisperText>
          
          <StoryText 
            className="max-w-2xl mx-auto mb-8 opacity-90"
          >
            Those tiny fingers and toes, that newborn scent, the way they curl perfectly into your chest—
            these fleeting details deserve to be preserved before they change.
          </StoryText>
          
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, ease: [0.4, 0, 0.2, 1] }}
            viewport={{ once: true }}
          >
            <Link 
              href="/connect" 
              className="inline-block px-8 py-3 text-sm font-medium tracking-wide text-white bg-black transition-colors rounded-full md:text-base hover:bg-black/90 dark:bg-white dark:text-black dark:hover:bg-white/90"
            >
              Book your newborn session
            </Link>
          </motion.div>
        </div>
      </section>
    </main>
  );
}
