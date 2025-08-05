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

export default function FamilyPage() {
  return (
    <main className="flex flex-col items-center min-h-screen">
      {/* Hero Section */}
      <section className="w-full relative h-[70vh] overflow-hidden">
        {/* Background Image */}
        <div className="absolute inset-0">
          <Image
            src="/images/placeholders/chaotic-love-family-story.webp"
            alt="Family laughing together in natural, candid moment"
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
              Chaos, Giggles & Love
            </WhisperText>
            
            <StoryText 
              className="max-w-2xl mx-auto mb-8 opacity-90"
            >
              In the beautiful mess of daily life, we find the moments that tell your family's 
              true story — the laughter between the chaos, the love within the ordinary.
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
              Beautiful Chaos
            </HeartText>
          </motion.div>
          
          <motion.div variants={fadeInUp}>
            <WhisperText 
              as="h2" 
              size="lg" 
              className="mb-6"
            >
              The Magic in Your Everyday
            </WhisperText>
          </motion.div>
          
          <motion.div variants={fadeInUp}>
            <StoryText 
              className="max-w-3xl mx-auto mb-12 opacity-90"
            >
              Family photography isn't about perfect poses or pristine smiles. It's about capturing 
              the authentic rhythm of your life together — the messy breakfasts, the impromptu dance 
              parties, the quiet cuddles, and the wild adventures. These ordinary moments are where 
              your extraordinary story lives.
            </StoryText>
          </motion.div>
          
          <motion.div 
            variants={fadeInUp}
            className="grid grid-cols-1 md:grid-cols-2 gap-12 text-left"
          >
            <div>
              <h3 className="text-xl font-light mb-4">Authentic Over Perfect</h3>
              <p className="opacity-80 mb-6">
                We don't chase perfect family portraits where everyone looks at the camera with 
                identical smiles. Instead, we create space for real interactions — the way your 
                toddler belly-laughs when tickled, how your teenager briefly drops their guard, 
                the silent language between partners who've weathered life together.
              </p>
              <p className="opacity-80">
                These authentic moments tell the truth of your family far better than any 
                posed perfection ever could.
              </p>
            </div>
            
            <div>
              <h3 className="text-xl font-light mb-4">Our Approach</h3>
              <p className="opacity-80 mb-6">
                We begin with gentle direction, then step back and observe. We might suggest 
                an activity or create a scenario, but what happens next is entirely up to your 
                family's natural dynamic. This unscripted approach reveals the connections and 
                personalities that make your family uniquely yours.
              </p>
              <p className="opacity-80">
                The result? Images that feel like your actual life, just on its very best day.
              </p>
            </div>
          </motion.div>
        </motion.div>
      </section>
      
      {/* Session Types */}
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
                SESSION TYPES
              </MemoryText>
            </motion.div>
            
            <motion.div variants={fadeInUp}>
              <WhisperText 
                as="h2" 
                size="md" 
                className="mb-6"
              >
                Choose Your Family's Story
              </WhisperText>
            </motion.div>
            
            <motion.div variants={fadeInUp}>
              <StoryText 
                className="max-w-2xl mx-auto mb-12 opacity-90"
              >
                Every family has its own rhythm and environment where they feel most themselves. 
                We offer different session types to match how your family's story wants to be told.
              </StoryText>
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
              whileHover={{ y: -5, transition: { duration: 0.3 } }}
            >
              <h3 className="text-xl font-light mb-4">Lifestyle At Home</h3>
              <p className="opacity-80 mb-6">
                Your home is where your family's true personality shines. We capture the Saturday 
                morning pancake traditions, bedtime stories, backyard adventures, and quiet moments 
                in the spaces that hold your daily life.
              </p>
              <p className="opacity-80 mb-6">
                Perfect for: Families who want to document their authentic everyday rhythms, 
                especially those with young children who are most comfortable at home.
              </p>
              <p className="font-medium">2-3 hour session</p>
            </motion.div>
            
            <motion.div 
              className="bg-white/50 dark:bg-black/50 p-8 rounded-lg shadow-sm"
              variants={fadeInUp}
              whileHover={{ y: -5, transition: { duration: 0.3 } }}
            >
              <h3 className="text-xl font-light mb-4">Outdoor Adventure</h3>
              <p className="opacity-80 mb-6">
                Beach walks, forest explorations, urban adventures, or countryside wanderings — 
                we follow your family into the landscapes that inspire you. These sessions create 
                space for movement, play, and discovery.
              </p>
              <p className="opacity-80 mb-6">
                Perfect for: Active families who love the outdoors, families with older children 
                who need space to move, and those who feel connected to specific natural settings.
              </p>
              <p className="font-medium">2 hour session</p>
            </motion.div>
            
            <motion.div 
              className="bg-white/50 dark:bg-black/50 p-8 rounded-lg shadow-sm"
              variants={fadeInUp}
              whileHover={{ y: -5, transition: { duration: 0.3 } }}
            >
              <h3 className="text-xl font-light mb-4">Day in the Life</h3>
              <p className="opacity-80 mb-6">
                From morning bedhead to evening tuck-ins, we document the full rhythm of your 
                family's day. These documentary sessions capture the complete story — meals, 
                transitions, routines, play, work, and all the in-between moments.
              </p>
              <p className="opacity-80 mb-6">
                Perfect for: Families wanting to preserve a complete chapter of life, especially 
                during significant transitions or stages you want to remember in full detail.
              </p>
              <p className="font-medium">6-8 hour session</p>
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
              Preserving Your Family's Chapter
            </WhisperText>
          </motion.div>
          
          <motion.div variants={fadeInUp}>
            <StoryText 
              className="max-w-2xl mx-auto mb-12 opacity-90"
            >
              These fleeting family seasons pass so quickly. Our pricing reflects the value 
              of preserving today's moments that become tomorrow's most precious memories.
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
            <h3 className="text-2xl font-light mb-2">Family Moments</h3>
            <p className="opacity-70 mb-6">Essential family memories</p>
            <p className="text-3xl mb-6">€395</p>
            <ul className="space-y-3 text-left mb-8 opacity-80">
              <li>• 1-2 hour session</li>
              <li>• One location</li>
              <li>• 20 digital images</li>
              <li>• Online gallery</li>
              <li>• Print release</li>
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
            <h3 className="text-2xl font-light mb-2">Family Story</h3>
            <p className="opacity-70 mb-6">Complete family narrative</p>
            <p className="text-3xl mb-6">€595</p>
            <ul className="space-y-3 text-left mb-8 opacity-80">
              <li>• 2-3 hour session</li>
              <li>• Multiple locations/activities</li>
              <li>• 35 digital images</li>
              <li>• Custom online gallery</li>
              <li>• 15x20cm family album</li>
              <li>• €120 print credit</li>
            </ul>
            <Link 
              href="/connect" 
              className="inline-block px-6 py-3 bg-black text-white dark:bg-white dark:text-black rounded-full transition-colors hover:bg-black/90 dark:hover:bg-white/90"
            >
              Book This Session
            </Link>
          </motion.div>
          
          <motion.div 
            className="flex-1 border border-black/10 dark:border-white/10 rounded-lg p-8 text-center max-w-md mx-auto"
            variants={fadeInUp}
            whileHover={{ y: -5, transition: { duration: 0.3 } }}
          >
            <h3 className="text-2xl font-light mb-2">Day in the Life</h3>
            <p className="opacity-70 mb-6">Full documentary coverage</p>
            <p className="text-3xl mb-6">€995</p>
            <ul className="space-y-3 text-left mb-8 opacity-80">
              <li>• 6-8 hour session</li>
              <li>• Full day documentary</li>
              <li>• 60+ digital images</li>
              <li>• Custom online gallery</li>
              <li>• 20x25cm premium album</li>
              <li>• Wall art credit €200</li>
            </ul>
            <Link 
              href="/connect" 
              className="inline-block px-6 py-3 border border-current rounded-full transition-colors hover:bg-black/5 dark:hover:bg-white/5"
            >
              Book This Session
            </Link>
          </motion.div>
        </motion.div>
      </section>
      
      {/* Preparation Tips */}
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
                PREPARATION GUIDE
              </MemoryText>
            </motion.div>
            
            <motion.div variants={fadeInUp}>
              <WhisperText 
                as="h2" 
                size="md" 
                className="mb-6"
              >
                How to Prepare (Without Over-Preparing)
              </WhisperText>
            </motion.div>
            
            <motion.div variants={fadeInUp}>
              <StoryText 
                className="max-w-2xl mx-auto mb-12 opacity-90"
              >
                The best family photos happen when everyone feels comfortable and authentic. 
                Here's how to prepare just enough without losing the natural magic.
              </StoryText>
            </motion.div>
          </motion.div>
          
          <motion.div 
            className="grid grid-cols-1 md:grid-cols-2 gap-x-12 gap-y-8"
            variants={staggerContainer}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.2 }}
          >
            <motion.div variants={fadeInUp}>
              <h3 className="text-xl font-light mb-4 flex items-center">
                <span className="w-8 h-8 inline-flex items-center justify-center bg-black/10 dark:bg-white/10 rounded-full mr-3 text-sm">1</span>
                Dress for Comfort & Coordination
              </h3>
              <p className="opacity-80 ml-11">
                Choose clothes everyone feels good in. Aim for coordination rather than matching—think 
                complementary colors instead of identical outfits. Avoid large logos or characters that 
                distract from faces and expressions.
              </p>
            </motion.div>
            
            <motion.div variants={fadeInUp}>
              <h3 className="text-xl font-light mb-4 flex items-center">
                <span className="w-8 h-8 inline-flex items-center justify-center bg-black/10 dark:bg-white/10 rounded-full mr-3 text-sm">2</span>
                Set Realistic Expectations
              </h3>
              <p className="opacity-80 ml-11">
                Prepare children by framing the session as a fun family adventure rather than a formal 
                photo shoot. Avoid promising rewards for "good behavior"—we want their authentic 
                personalities, not their performance.
              </p>
            </motion.div>
            
            <motion.div variants={fadeInUp}>
              <h3 className="text-xl font-light mb-4 flex items-center">
                <span className="w-8 h-8 inline-flex items-center justify-center bg-black/10 dark:bg-white/10 rounded-full mr-3 text-sm">3</span>
                Consider Your Rhythms
              </h3>
              <p className="opacity-80 ml-11">
                Schedule around your family's natural energy patterns. If your toddler is happiest in the 
                morning, don't book an evening session. Well-rested and well-fed family members make for 
                more enjoyable sessions.
              </p>
            </motion.div>
            
            <motion.div variants={fadeInUp}>
              <h3 className="text-xl font-light mb-4 flex items-center">
                <span className="w-8 h-8 inline-flex items-center justify-center bg-black/10 dark:bg-white/10 rounded-full mr-3 text-sm">4</span>
                Bring Meaningful Items
              </h3>
              <p className="opacity-80 ml-11">
                Consider incorporating objects that are meaningful to your family—a special book, a 
                favorite game, musical instruments, or heirloom items that tell part of your story.
              </p>
            </motion.div>
            
            <motion.div variants={fadeInUp}>
              <h3 className="text-xl font-light mb-4 flex items-center">
                <span className="w-8 h-8 inline-flex items-center justify-center bg-black/10 dark:bg-white/10 rounded-full mr-3 text-sm">5</span>
                Release Perfection
              </h3>
              <p className="opacity-80 ml-11">
                The most beautiful images often come from unplanned moments. Trust the process and 
                remember that authentic connection matters more than perfect poses. Sometimes the 
                "outtakes" become the most treasured images.
              </p>
            </motion.div>
            
            <motion.div variants={fadeInUp}>
              <h3 className="text-xl font-light mb-4 flex items-center">
                <span className="w-8 h-8 inline-flex items-center justify-center bg-black/10 dark:bg-white/10 rounded-full mr-3 text-sm">6</span>
                Connect With Each Other
              </h3>
              <p className="opacity-80 ml-11">
                The most important preparation is emotional. Come ready to be present with each other. 
                The camera captures the connections you already have—we're just creating the space for 
                them to shine.
              </p>
            </motion.div>
          </motion.div>
        </div>
      </section>
      
      {/* Testimonial */}
      <section className="w-full py-16 px-6">
        <div className="max-w-4xl mx-auto">
          <motion.blockquote
            className="text-xl md:text-2xl font-light italic text-center mb-8"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 1, ease: [0.4, 0, 0.2, 1] }}
            viewport={{ once: true }}
          >
            "We've done family photos every year, but this was the first time we actually enjoyed 
            the process. Instead of forcing smiles, we played, laughed, and just spent time together. 
            The photos feel like us—our actual life, not some perfect version that doesn't exist. 
            These images captured our family's soul."
          </motion.blockquote>
          
          <motion.div
            className="flex items-center justify-center"
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ delay: 0.5, duration: 0.8 }}
            viewport={{ once: true }}
          >
            <div className="text-center">
              <p className="font-medium">The Jansen Family</p>
              <p className="text-sm opacity-75">Amsterdam, 2024</p>
            </div>
          </motion.div>
        </div>
      </section>
      
      {/* CTA Section */}
      <section className="w-full bg-gradient-to-b from-black/10 to-black/30 py-20 px-6 text-center">
        <div className="max-w-3xl mx-auto">
          <WhisperText 
            as="h2" 
            size="md" 
            className="mb-6"
          >
            This chapter won't repeat itself
          </WhisperText>
          
          <StoryText 
            className="max-w-2xl mx-auto mb-8 opacity-90"
          >
            Children grow, relationships evolve, and family dynamics shift. The beautiful chaos of 
            today becomes tomorrow's most treasured memory. Let's preserve this chapter of your 
            family's story before it turns the page.
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
              Book your family session
            </Link>
          </motion.div>
        </div>
      </section>
    </main>
  );
}
