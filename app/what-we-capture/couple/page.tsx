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

export default function CouplePage() {
  return (
    <main className="flex flex-col items-center min-h-screen">
      {/* Hero Section */}
      <section className="w-full relative h-[70vh] overflow-hidden">
        {/* Background Image */}
        <div className="absolute inset-0">
          <Image
            src="/images/placeholders/forever-whisper-couple-dream.webp"
            alt="Couple sharing an intimate moment together"
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
              The Moment Between 'Yes' and Forever
            </WhisperText>
            
            <StoryText 
              className="max-w-2xl mx-auto mb-8 opacity-90"
            >
              We capture not just how your love looks, but how it feels — the silent conversations,
              the gentle touches, the way time seems to pause when you're in each other's gaze.
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
              Your Love Language
            </HeartText>
          </motion.div>
          
          <motion.div variants={fadeInUp}>
            <WhisperText 
              as="h2" 
              size="lg" 
              className="mb-6"
            >
              Every Love Story Has Its Own Rhythm
            </WhisperText>
          </motion.div>
          
          <motion.div variants={fadeInUp}>
            <StoryText 
              className="max-w-3xl mx-auto mb-12 opacity-90"
            >
              Love isn't a one-size-fits-all emotion. It's as unique as the two people sharing it. 
              Some love stories are loud and vibrant, filled with laughter and adventure. Others are 
              quiet and profound, built on silent understanding and gentle presence. We believe in 
              capturing your love exactly as it exists — not as social media tells you it should look.
            </StoryText>
          </motion.div>
          
          <motion.div 
            variants={fadeInUp}
            className="grid grid-cols-1 md:grid-cols-2 gap-12 text-left"
          >
            <div>
              <h3 className="text-xl font-light mb-4">Beyond Posed Perfection</h3>
              <p className="opacity-80 mb-6">
                We've all seen those couple photos — stiff poses, forced smiles, and awkward hand 
                placements that feel nothing like real love. Our approach is different. We create 
                space for authentic connection, guiding rather than posing, suggesting rather than directing.
              </p>
              <p className="opacity-80">
                The result? Images that capture the natural chemistry between you — the way you 
                naturally fit together, the expressions that only your partner can evoke, the 
                comfort you find in each other's presence.
              </p>
            </div>
            
            <div>
              <h3 className="text-xl font-light mb-4">Emotional Storytelling</h3>
              <p className="opacity-80 mb-6">
                Our couples photography goes beyond beautiful portraits to tell the emotional 
                story of your relationship. We look for the subtle interactions that reveal your 
                unique connection — the way you instinctively reach for each other's hand, the 
                shared glances that speak volumes, the laughter that belongs only to you two.
              </p>
              <p className="opacity-80">
                These intimate moments create a visual narrative that feels authentically yours, 
                preserving not just how you looked, but how being together felt.
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
                LOVE CHAPTERS
              </MemoryText>
            </motion.div>
            
            <motion.div variants={fadeInUp}>
              <WhisperText 
                as="h2" 
                size="md" 
                className="mb-6"
              >
                Celebrating Every Stage of Love
              </WhisperText>
            </motion.div>
            
            <motion.div variants={fadeInUp}>
              <StoryText 
                className="max-w-2xl mx-auto mb-12 opacity-90"
              >
                From the first butterflies to the comfortable silence of decades together, 
                every chapter of your love story deserves to be honored and preserved.
              </StoryText>
            </motion.div>
          </motion.div>
          
          <motion.div 
            className="grid grid-cols-1 md:grid-cols-2 gap-10"
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
              <h3 className="text-xl font-light mb-4">Engagement & Proposal</h3>
              <p className="opacity-80 mb-6">
                The electricity of new promises, the joy of saying "yes," the anticipation of 
                the journey ahead. We capture these milestone moments with the excitement and 
                tenderness they deserve, whether documenting a surprise proposal or celebrating 
                your engagement with a dedicated session.
              </p>
              <p className="font-medium">1.5-2 hour session</p>
              <p className="text-sm opacity-70 mt-2">
                Available as surprise proposal documentation or planned engagement session
              </p>
            </motion.div>
            
            <motion.div 
              className="bg-white/50 dark:bg-black/50 p-8 rounded-lg shadow-sm"
              variants={fadeInUp}
              whileHover={{ y: -5, transition: { duration: 0.3 } }}
            >
              <h3 className="text-xl font-light mb-4">Wedding Day</h3>
              <p className="opacity-80 mb-6">
                Your wedding day passes in a beautiful blur of emotion. Our approach focuses on 
                the authentic moments between you — the tears during vows, the whispered words 
                during your first dance, the quiet minute alone amidst the celebration. We create 
                space for intimate connection even within the day's joyful chaos.
              </p>
              <p className="font-medium">6-10 hour coverage</p>
              <p className="text-sm opacity-70 mt-2">
                Custom packages available to match your unique celebration
              </p>
            </motion.div>
            
            <motion.div 
              className="bg-white/50 dark:bg-black/50 p-8 rounded-lg shadow-sm"
              variants={fadeInUp}
              whileHover={{ y: -5, transition: { duration: 0.3 } }}
            >
              <h3 className="text-xl font-light mb-4">Anniversary Celebration</h3>
              <p className="opacity-80 mb-6">
                Every year together is worth honoring. Anniversary sessions celebrate the depth 
                and growth of your love — the comfortable intimacy that comes only with time, the 
                private language you've developed, the way you've weathered life's storms together. 
                These sessions often reveal a profound connection that's impossible to fake.
              </p>
              <p className="font-medium">2 hour session</p>
              <p className="text-sm opacity-70 mt-2">
                Perfect for milestone anniversaries or annual tradition
              </p>
            </motion.div>
            
            <motion.div 
              className="bg-white/50 dark:bg-black/50 p-8 rounded-lg shadow-sm"
              variants={fadeInUp}
              whileHover={{ y: -5, transition: { duration: 0.3 } }}
            >
              <h3 className="text-xl font-light mb-4">"Just Because" Love</h3>
              <p className="opacity-80 mb-6">
                Sometimes the most meaningful chapters have no special occasion attached — just 
                the beauty of your everyday love. These sessions capture the authentic rhythm of 
                your relationship in this exact moment, preserving the small gestures and quiet 
                intimacy that make your love uniquely yours.
              </p>
              <p className="font-medium">1.5-2 hour session</p>
              <p className="text-sm opacity-70 mt-2">
                Because your everyday love is extraordinary
              </p>
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
              Preserving Your Love Story
            </WhisperText>
          </motion.div>
          
          <motion.div variants={fadeInUp}>
            <StoryText 
              className="max-w-2xl mx-auto mb-12 opacity-90"
            >
              These moments of connection are fleeting but infinitely precious. Our pricing 
              reflects the value of preserving your unique love language for years to come.
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
            <h3 className="text-2xl font-light mb-2">Love Whispers</h3>
            <p className="opacity-70 mb-6">Essential couple session</p>
            <p className="text-3xl mb-6">€375</p>
            <ul className="space-y-3 text-left mb-8 opacity-80">
              <li>• 1.5 hour session</li>
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
            <h3 className="text-2xl font-light mb-2">Love Story</h3>
            <p className="opacity-70 mb-6">Complete couple narrative</p>
            <p className="text-3xl mb-6">€575</p>
            <ul className="space-y-3 text-left mb-8 opacity-80">
              <li>• 2-3 hour session</li>
              <li>• Multiple locations</li>
              <li>• 30 digital images</li>
              <li>• Custom online gallery</li>
              <li>• 15x20cm couple album</li>
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
      
      {/* Connection Tips */}
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
                CREATING AUTHENTIC MOMENTS
              </MemoryText>
            </motion.div>
            
            <motion.div variants={fadeInUp}>
              <WhisperText 
                as="h2" 
                size="md" 
                className="mb-6"
              >
                How to Relax & Connect During Your Session
              </WhisperText>
            </motion.div>
            
            <motion.div variants={fadeInUp}>
              <StoryText 
                className="max-w-2xl mx-auto mb-12 opacity-90"
              >
                Many couples feel nervous about being photographed. These simple tips will help you 
                relax and allow your genuine connection to shine through.
              </StoryText>
            </motion.div>
          </motion.div>
          
          <motion.div 
            className="grid grid-cols-1 md:grid-cols-3 gap-8"
            variants={staggerContainer}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.2 }}
          >
            <motion.div 
              className="bg-white/50 dark:bg-black/50 p-6 rounded-lg"
              variants={fadeInUp}
            >
              <h3 className="text-xl font-light mb-4">Focus on Each Other</h3>
              <p className="opacity-80">
                The secret to natural couple photos is simple: focus on each other, not the camera. 
                When you're genuinely connecting with your partner, the camera fades away and your 
                authentic relationship shines through. We'll create moments for you to simply be 
                together, with gentle guidance rather than rigid posing.
              </p>
            </motion.div>
            
            <motion.div 
              className="bg-white/50 dark:bg-black/50 p-6 rounded-lg"
              variants={fadeInUp}
            >
              <h3 className="text-xl font-light mb-4">Embrace Movement</h3>
              <p className="opacity-80">
                Static poses rarely capture the true essence of a relationship. Instead, we'll 
                incorporate gentle movement — walking together, dancing slowly, brushing hair from 
                each other's face. These dynamic moments create natural opportunities for authentic 
                interaction and reveal the physical language between you.
              </p>
            </motion.div>
            
            <motion.div 
              className="bg-white/50 dark:bg-black/50 p-6 rounded-lg"
              variants={fadeInUp}
            >
              <h3 className="text-xl font-light mb-4">Share Your Story</h3>
              <p className="opacity-80">
                Before your session, we'll ask about your relationship — how you met, your favorite 
                memories, the little things you love about each other. These stories help us capture 
                your unique connection. During the session, we might ask you to whisper these memories 
                to each other, creating genuine emotional responses that no pose could replicate.
              </p>
            </motion.div>
            
            <motion.div 
              className="bg-white/50 dark:bg-black/50 p-6 rounded-lg"
              variants={fadeInUp}
            >
              <h3 className="text-xl font-light mb-4">Create a Meaningful Experience</h3>
              <p className="opacity-80">
                Consider choosing a location that holds significance for your relationship — where you 
                first met, your favorite date spot, or a place that represents your shared dreams. 
                When the environment has meaning, your connection to each other in that space becomes 
                more authentic and emotionally resonant.
              </p>
            </motion.div>
            
            <motion.div 
              className="bg-white/50 dark:bg-black/50 p-6 rounded-lg"
              variants={fadeInUp}
            >
              <h3 className="text-xl font-light mb-4">Trust the Process</h3>
              <p className="opacity-80">
                The most beautiful images often emerge from unplanned moments. Trust us to guide you 
                into situations where natural connection can flourish, then simply be present with each 
                other. Some of our most breathtaking couple photos happened when the pair forgot we were 
                even there.
              </p>
            </motion.div>
            
            <motion.div 
              className="bg-white/50 dark:bg-black/50 p-6 rounded-lg"
              variants={fadeInUp}
            >
              <h3 className="text-xl font-light mb-4">Remember Your Why</h3>
              <p className="opacity-80">
                These photos aren't just for today — they're for decades from now, when you'll want to 
                remember how your love felt in this chapter. Approach the session as a chance to slow 
                down and celebrate your connection, creating both beautiful images and a meaningful 
                experience together.
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
            "We were so nervous about being awkward in front of the camera. But within minutes, 
            we forgot the camera was even there. Koaplinchik created this bubble where it felt like 
            just the two of us, connecting and remembering why we fell in love. The photos don't just 
            show what we look like — they show how we feel when we're together. That's priceless."
          </motion.blockquote>
          
          <motion.div
            className="flex items-center justify-center"
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ delay: 0.5, duration: 0.8 }}
            viewport={{ once: true }}
          >
            <div className="text-center">
              <p className="font-medium">Mila & Jan</p>
              <p className="text-sm opacity-75">Together 7 years</p>
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
            Your love deserves to be remembered
          </WhisperText>
          
          <StoryText 
            className="max-w-2xl mx-auto mb-8 opacity-90"
          >
            In the rush of daily life, we rarely pause to truly see each other. A couple's session 
            is more than beautiful photos — it's permission to slow down, connect deeply, and 
            preserve this chapter of your love story before it turns the page.
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
              Begin your love story session
            </Link>
          </motion.div>
        </div>
      </section>
    </main>
  );
}
