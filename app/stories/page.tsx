/* eslint-disable react/no-unescaped-entities */
"use client";
import Image from "next/image";
import Link from "next/link";
import { motion, Variants, cubicBezier } from "framer-motion";
import { WhisperText, StoryText, HeartText, MemoryText } from "@/components/ui/Typography";

// Animation variants for staggered reveals
const containerVariants: Variants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.2,
      delayChildren: 0.3,
    },
  },
};

const storyVariants: Variants = {
  hidden: { opacity: 0, y: 40 },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 1,
      ease: cubicBezier(0.4, 0, 0.2, 1),
    },
  },
};

// StoryCard component for each featured story
const StoryCard = ({ 
  title, 
  caption, 
  date,
  location,
  imageSrc, 
  alt, 
  slug,
  testimonial
}: { 
  title: string; 
  caption: string; 
  date: string;
  location: string;
  imageSrc: string; 
  alt: string; 
  slug: string;
  testimonial?: string;
}) => {
  return (
    <motion.div 
      className="group relative overflow-hidden rounded-lg shadow-xl bg-black/5 dark:bg-white/5 h-full"
      variants={storyVariants}
      whileHover={{ y: -8, transition: { duration: 0.5 } }}
    >
      <Link href={`/stories/${slug}`} className="block h-full">
        <div className="relative aspect-[3/4] overflow-hidden">
          <Image
            src={imageSrc}
            alt={alt}
            fill
            sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw"
            className="object-cover transition-transform duration-1000 group-hover:scale-105 filter group-hover:brightness-110"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/40 to-transparent" />
          
          {/* Parallax metadata overlay */}
          <motion.div 
            className="absolute bottom-0 left-0 right-0 p-6 text-white"
            style={{
              y: 0
            }}
            whileHover={{
              y: -5,
              transition: { duration: 0.5 }
            }}
          >
            <h3 className="text-2xl md:text-3xl font-light mb-2">{title}</h3>
            <p className="text-sm italic opacity-90 mb-4">{caption}</p>
            
            <div className="flex items-center text-xs opacity-75 mb-6">
              <span className="mr-4">{date}</span>
              <span>{location}</span>
            </div>
            
            {testimonial && (
              <div className="overflow-hidden max-h-0 group-hover:max-h-24 transition-all duration-700">
                <blockquote className="text-sm border-l border-white/30 pl-4 italic">
                  "{testimonial}"
                </blockquote>
              </div>
            )}
            
            <div className="mt-4 inline-flex items-center text-sm font-medium">
              <span>Experience their story</span>
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
          </motion.div>
        </div>
      </Link>
    </motion.div>
  );
};

export default function StoriesPage() {
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
            Love Stories
          </WhisperText>
          
          <StoryText 
            className="max-w-2xl mx-auto mb-8 opacity-90"
          >
            These aren't just photographs. They're pauses in time, whispers of emotion 
            preserved exactly as they were felt. Browse through the memories we've been 
            honored to capture, and perhaps imagine your own.
          </StoryText>
          
          <HeartText
            as="span"
            size="md"
            className="inline-block border-b border-white/30 pb-1"
          >
            Each frame tells a story
          </HeartText>
        </div>
      </section>
      
      {/* Featured Stories Grid */}
      <section className="w-full max-w-6xl px-6 py-20 mx-auto">
        <WhisperText 
          as="h2" 
          size="md" 
          className="mb-12 text-center"
        >
          Recent Memories
        </WhisperText>
        
        <motion.div 
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.1 }}
        >
          <StoryCard
            title="Anna & Mikael: The Snow Kissed Sun"
            caption="A winter wedding where warmth defied the cold"
            date="December 12, 2024"
            location="Stockholm, Sweden"
            imageSrc="/images/placeholders/snow-kissed-hearts-anna-mikael-story.jpg"
            alt="Couple holding hands walking on snow with mountain sunlight behind them"
            slug="anna-mikael"
            testimonial="Koaplinchik didn't just capture our day, they captured our story. Every time we look at these photos, we feel the warmth despite the snow."
          />
          
          <StoryCard
            title="Three Generations, One Laugh"
            caption="The kitchen where time stands still"
            date="September 8, 2024"
            location="Amsterdam, Netherlands"
            imageSrc="/images/placeholders/kitchen-laughs-three-generations-memory.jpg"
            alt="Grandmother, mother, and child laughing while baking together"
            slug="three-generations"
            testimonial="I never knew how much I needed these memories until I saw them through your lens. My mother, my daughter, and me - three hearts beating as one."
          />
          
          <StoryCard
            title="Before He Said 'Dad'"
            caption="The silent conversations before first words"
            date="July 23, 2024"
            location="Leiden, Netherlands"
            imageSrc="/images/placeholders/silent-conversations-before-dad-moment.jpg"
            alt="Young father holding a baby with both laughing"
            slug="before-he-said-dad"
            testimonial="These photos captured something I didn't even realize was happening - the way he looked at me before he could even speak. I'll treasure this forever."
          />
        </motion.div>
      </section>
      
      {/* Testimonial Section */}
      <section className="w-full bg-black/5 dark:bg-white/5 py-20 px-6">
        <div className="max-w-4xl mx-auto text-center">
          <MemoryText
            as="span"
            size="sm"
            className="block mb-6"
          >
            FROM THOSE WHO TRUSTED US WITH THEIR MOMENTS
          </MemoryText>
          
          <motion.blockquote
            className="text-xl md:text-2xl font-light italic mb-8"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 1, ease: [0.4, 0, 0.2, 1] }}
            viewport={{ once: true }}
          >
            "In a world where everything moves too fast, Koaplinchik taught us to pause. 
            These aren't just photos. They're the feeling of that day, bottled forever."
          </motion.blockquote>
          
          <motion.div
            className="flex items-center justify-center"
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ delay: 0.5, duration: 0.8 }}
            viewport={{ once: true }}
          >
            <div className="w-12 h-12 relative rounded-full overflow-hidden mr-4">
              <Image
                src="/images/placeholders/grateful-hearts-testimonial-memory.jpg"
                alt="Portrait of Emma & James"
                fill
                sizes="48px"
                className="object-cover"
              />
            </div>
            <div className="text-left">
              <p className="font-medium">Emma & James</p>
              <p className="text-sm opacity-75">Married June 2023</p>
            </div>
          </motion.div>
        </div>
      </section>
      
      {/* Bottom CTA */}
      <section className="w-full bg-gradient-to-b from-black/10 to-black/30 py-20 px-6 text-center">
        <WhisperText 
          as="h2" 
          size="md" 
          className="mb-6"
        >
          Ready to create your own story?
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
            Let's begin your chapter
          </Link>
        </motion.div>
      </section>
    </main>
  );
}
