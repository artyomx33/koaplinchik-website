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

export default function PortraitPage() {
  return (
    <main className="flex flex-col items-center min-h-screen">
      {/* Hero Section */}
      <section className="w-full relative h-[70vh] overflow-hidden">
        {/* Background Image */}
        <div className="absolute inset-0">
          <Image
            src="/images/placeholders/soul-mirror-portrait-moment.png"
            alt="Emotional portrait in natural light"
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
              Quiet Portraits for Loud Emotions
            </WhisperText>
            
            <StoryText 
              className="max-w-2xl mx-auto mb-8 opacity-90"
            >
              We create a mirror that reflects not just your image, but your essence — 
              the light that lives behind your eyes, the story written in your smile.
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
              Soul Mirrors
            </HeartText>
          </motion.div>
          
          <motion.div variants={fadeInUp}>
            <WhisperText 
              as="h2" 
              size="lg" 
              className="mb-6"
            >
              The Art of Being Truly Seen
            </WhisperText>
          </motion.div>
          
          <motion.div variants={fadeInUp}>
            <StoryText 
              className="max-w-3xl mx-auto mb-12 opacity-90"
            >
              We rarely see ourselves as others do. In daily life, we catch glimpses in mirrors, 
              in quick selfies, in the reactions of those around us. But these fragments rarely 
              capture the whole truth of who we are. A portrait session is different — it's an 
              invitation to be fully seen, to have your essence recognized and preserved through 
              the lens of someone who is looking for your light.
            </StoryText>
          </motion.div>
          
          <motion.div 
            variants={fadeInUp}
            className="grid grid-cols-1 md:grid-cols-2 gap-12 text-left"
          >
            <div>
              <h3 className="text-xl font-light mb-4">Beyond Surface Appearance</h3>
              <p className="opacity-80 mb-6">
                Generic portrait photography focuses on making you look "good" according to 
                conventional standards. Our approach is fundamentally different. We seek to 
                capture you looking like yourself at your most authentic — the version of you 
                that those who love you recognize instantly.
              </p>
              <p className="opacity-80">
                This might be your quiet determination, your playful spirit, your gentle wisdom, 
                or your fierce passion. Whatever makes you uniquely you, that's what we're 
                looking for.
              </p>
            </div>
            
            <div>
              <h3 className="text-xl font-light mb-4">The Emotional Approach</h3>
              <p className="opacity-80 mb-6">
                Our portrait sessions begin with conversation, not camera clicks. We want to 
                understand what makes your heart beat faster, what brings the light to your eyes, 
                what story you're living right now. This emotional foundation allows us to create 
                images that feel like you — not just a posed version of yourself.
              </p>
              <p className="opacity-80">
                The result is portraits with soul — images that reveal the person behind the face, 
                the story behind the expression, the life behind the moment.
              </p>
            </div>
          </motion.div>
        </motion.div>
      </section>
      
      {/* Portrait Types */}
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
                PORTRAIT JOURNEYS
              </MemoryText>
            </motion.div>
            
            <motion.div variants={fadeInUp}>
              <WhisperText 
                as="h2" 
                size="md" 
                className="mb-6"
              >
                Finding Your Light
              </WhisperText>
            </motion.div>
            
            <motion.div variants={fadeInUp}>
              <StoryText 
                className="max-w-2xl mx-auto mb-12 opacity-90"
              >
                Every portrait session is tailored to your unique story and purpose. 
                Whether you're marking a milestone, expressing your creativity, or 
                presenting yourself professionally, we approach each with the same 
                dedication to authentic emotional connection.
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
              <h3 className="text-xl font-light mb-4">Personal Milestones</h3>
              <p className="opacity-80 mb-6">
                Life's significant moments deserve to be honored. Whether you're celebrating a 
                birthday, graduation, retirement, or personal transformation, milestone portraits 
                capture not just how you looked, but how it felt to stand at this particular 
                crossroads in your journey.
              </p>
              <p className="opacity-80 mb-6">
                These sessions often include symbolic elements that represent your achievement 
                or transition, creating visual metaphors for your personal story.
              </p>
              <p className="font-medium">2 hour session</p>
            </motion.div>
            
            <motion.div 
              className="bg-white/50 dark:bg-black/50 p-8 rounded-lg shadow-sm"
              variants={fadeInUp}
              whileHover={{ y: -5, transition: { duration: 0.3 } }}
            >
              <h3 className="text-xl font-light mb-4">Artistic Soul Portraits</h3>
              <p className="opacity-80 mb-6">
                For those seeking creative expression beyond traditional portraiture, our artistic 
                sessions push boundaries and explore deeper emotional landscapes. These portraits 
                might incorporate movement, abstract elements, experimental techniques, or 
                environmental storytelling.
              </p>
              <p className="opacity-80 mb-6">
                The result is fine art that captures not just your appearance, but your emotional 
                world — images that feel like visual poetry.
              </p>
              <p className="font-medium">3 hour creative session</p>
            </motion.div>
            
            <motion.div 
              className="bg-white/50 dark:bg-black/50 p-8 rounded-lg shadow-sm"
              variants={fadeInUp}
              whileHover={{ y: -5, transition: { duration: 0.3 } }}
            >
              <h3 className="text-xl font-light mb-4">Personal Branding</h3>
              <p className="opacity-80 mb-6">
                Your professional image should reflect the authentic passion behind your work. 
                Our branding portraits go beyond corporate headshots to capture the human story 
                behind your business — your purpose, values, and the unique energy you bring to 
                your field.
              </p>
              <p className="opacity-80 mb-6">
                These sessions often include a variety of settings and scenarios related to your 
                work, creating a versatile library of images that feel cohesive yet diverse.
              </p>
              <p className="font-medium">Half-day (4 hour) session</p>
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
              Honoring Your Story
            </WhisperText>
          </motion.div>
          
          <motion.div variants={fadeInUp}>
            <StoryText 
              className="max-w-2xl mx-auto mb-12 opacity-90"
            >
              Being truly seen is a profound experience. Our pricing reflects the care, 
              attention, and artistic vision we bring to creating portraits that honor 
              your authentic self.
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
            <h3 className="text-2xl font-light mb-2">Inner Light</h3>
            <p className="opacity-70 mb-6">Essential portrait session</p>
            <p className="text-3xl mb-6">€350</p>
            <ul className="space-y-3 text-left mb-8 opacity-80">
              <li>• 1.5 hour session</li>
              <li>• One location</li>
              <li>• 2 outfit changes</li>
              <li>• 15 digital images</li>
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
            <h3 className="text-2xl font-light mb-2">Soul Mirror</h3>
            <p className="opacity-70 mb-6">Complete portrait experience</p>
            <p className="text-3xl mb-6">€525</p>
            <ul className="space-y-3 text-left mb-8 opacity-80">
              <li>• 3 hour creative session</li>
              <li>• Multiple locations</li>
              <li>• 3-4 outfit changes</li>
              <li>• 25 digital images</li>
              <li>• Custom online gallery</li>
              <li>• 20x30cm fine art print</li>
              <li>• €100 print credit</li>
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
            <h3 className="text-2xl font-light mb-2">Personal Brand</h3>
            <p className="opacity-70 mb-6">Professional identity portfolio</p>
            <p className="text-3xl mb-6">€795</p>
            <ul className="space-y-3 text-left mb-8 opacity-80">
              <li>• 4 hour session</li>
              <li>• Multiple settings</li>
              <li>• 4-5 outfit/scenario changes</li>
              <li>• 40 digital images</li>
              <li>• Brand-specific editing</li>
              <li>• Social media crops</li>
              <li>• Commercial usage rights</li>
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
      
      {/* Comfort & Expression Tips */}
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
                FINDING COMFORT
              </MemoryText>
            </motion.div>
            
            <motion.div variants={fadeInUp}>
              <WhisperText 
                as="h2" 
                size="md" 
                className="mb-6"
              >
                The Art of Being Yourself in Front of the Camera
              </WhisperText>
            </motion.div>
            
            <motion.div variants={fadeInUp}>
              <StoryText 
                className="max-w-2xl mx-auto mb-12 opacity-90"
              >
                Many people feel nervous about being photographed alone. These insights will help you 
                feel comfortable and authentic during your portrait session.
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
                Wear What Feels Like You
              </h3>
              <p className="opacity-80 ml-11">
                Choose clothing that makes you feel confident and authentic. When you feel 
                comfortable in your outfit, that ease translates to your expressions and posture. 
                Bring multiple options that represent different facets of your personality — 
                perhaps something refined, something casual, and something that expresses your 
                creative side.
              </p>
            </motion.div>
            
            <motion.div variants={fadeInUp}>
              <h3 className="text-xl font-light mb-4 flex items-center">
                <span className="w-8 h-8 inline-flex items-center justify-center bg-black/10 dark:bg-white/10 rounded-full mr-3 text-sm">2</span>
                Location as Emotional Context
              </h3>
              <p className="opacity-80 ml-11">
                The environment significantly influences how you feel and express yourself. 
                We'll help you choose locations that resonate with your story — perhaps the 
                quiet of a forest if you're introspective, the energy of an urban setting if 
                you're dynamic, or the comfort of your own creative space if that's where you 
                feel most yourself.
              </p>
            </motion.div>
            
            <motion.div variants={fadeInUp}>
              <h3 className="text-xl font-light mb-4 flex items-center">
                <span className="w-8 h-8 inline-flex items-center justify-center bg-black/10 dark:bg-white/10 rounded-full mr-3 text-sm">3</span>
                Movement Creates Authenticity
              </h3>
              <p className="opacity-80 ml-11">
                Static poses often feel unnatural and stiff. Instead, we incorporate gentle 
                movement — walking, turning, shifting weight, using your hands expressively. 
                These dynamic moments create natural opportunities for authentic expressions 
                and help you forget about the camera.
              </p>
            </motion.div>
            
            <motion.div variants={fadeInUp}>
              <h3 className="text-xl font-light mb-4 flex items-center">
                <span className="w-8 h-8 inline-flex items-center justify-center bg-black/10 dark:bg-white/10 rounded-full mr-3 text-sm">4</span>
                Bring Your Passions
              </h3>
              <p className="opacity-80 ml-11">
                Consider incorporating elements that represent what lights you up — a musical 
                instrument, art supplies, books, or objects related to your work or hobbies. 
                When you interact with things you love, your genuine self naturally emerges, 
                creating portraits filled with authentic energy.
              </p>
            </motion.div>
            
            <motion.div variants={fadeInUp}>
              <h3 className="text-xl font-light mb-4 flex items-center">
                <span className="w-8 h-8 inline-flex items-center justify-center bg-black/10 dark:bg-white/10 rounded-full mr-3 text-sm">5</span>
                The Power of Music
              </h3>
              <p className="opacity-80 ml-11">
                Music can transform your emotional state and help you relax into the session. 
                We encourage you to create a playlist that makes you feel confident, joyful, 
                contemplative, or whatever emotion you want to express in your portraits. 
                This soundtrack becomes part of the experience, helping you connect with your 
                authentic feelings.
              </p>
            </motion.div>
            
            <motion.div variants={fadeInUp}>
              <h3 className="text-xl font-light mb-4 flex items-center">
                <span className="w-8 h-8 inline-flex items-center justify-center bg-black/10 dark:bg-white/10 rounded-full mr-3 text-sm">6</span>
                Trust the Process
              </h3>
              <p className="opacity-80 ml-11">
                The most beautiful portraits often emerge after you've settled into the session. 
                Give yourself permission to feel awkward at first — this is completely normal. 
                As the session progresses, you'll become more comfortable, and your genuine 
                expressions will emerge. Trust us to guide you through this journey of being seen.
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
            "I've always been uncomfortable in front of cameras. But this experience was different — 
            it felt more like a conversation than a photoshoot. For the first time, I recognized 
            myself in professional photos. Not just my face, but the person behind my eyes. 
            These portraits captured something I didn't even know was visible — my spirit."
          </motion.blockquote>
          
          <motion.div
            className="flex items-center justify-center"
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ delay: 0.5, duration: 0.8 }}
            viewport={{ once: true }}
          >
            <div className="text-center">
              <p className="font-medium">Elena K.</p>
              <p className="text-sm opacity-75">Soul Mirror Session, 2024</p>
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
            It's time to be truly seen
          </WhisperText>
          
          <StoryText 
            className="max-w-2xl mx-auto mb-8 opacity-90"
          >
            In a world of filters and facades, there is profound power in being authentically 
            seen and recognized. A portrait session is more than photographs — it's an 
            affirmation of your unique presence in this world, a celebration of the light 
            that only you carry.
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
              Book your portrait session
            </Link>
          </motion.div>
        </div>
      </section>
    </main>
  );
}
