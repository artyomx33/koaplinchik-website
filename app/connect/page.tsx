/* eslint-disable react/no-unescaped-entities */
"use client";

import { motion, Variants, cubicBezier } from "framer-motion";
import { WhisperText, StoryText, HeartText, MemoryText } from "@/components/ui/Typography";
import Image from "next/image";
import Link from "next/link";

// Animation variants
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

const itemVariants: Variants = {
  hidden: { opacity: 0, y: 20 },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.8,
      ease: cubicBezier(0.4, 0, 0.2, 1),
    },
  },
};

// Connection option component
const ConnectionOption = ({ 
  title, 
  description, 
  imageSrc, 
  alt, 
  href,
  buttonText,
  isPrimary = false
}: { 
  title: string; 
  description: string; 
  imageSrc: string; 
  alt: string; 
  href: string;
  buttonText: string;
  isPrimary?: boolean;
}) => {
  return (
    <motion.div 
      className={`relative overflow-hidden rounded-lg shadow-xl ${
        isPrimary 
          ? "bg-black/10 dark:bg-white/10" 
          : "bg-black/5 dark:bg-white/5"
      }`}
      variants={itemVariants}
      whileHover={{ y: -5, transition: { duration: 0.3 } }}
    >
      <div className="p-8 md:p-10 flex flex-col h-full">
        <div className="mb-6 relative w-16 h-16 md:w-20 md:h-20">
          <Image
            src={imageSrc}
            alt={alt}
            fill
            sizes="(max-width: 640px) 64px, 80px"
            className="object-contain"
          />
        </div>
        
        <h3 className="text-xl md:text-2xl font-light mb-4">{title}</h3>
        <p className="text-sm md:text-base opacity-80 mb-6 flex-grow">{description}</p>
        
        <Link 
          href={href} 
          className={`inline-flex items-center px-6 py-3 text-sm font-medium tracking-wide rounded-full transition-all ${
            isPrimary 
              ? "bg-black text-white hover:bg-black/90 dark:bg-white dark:text-black dark:hover:bg-white/90" 
              : "border border-current hover:bg-black/5 dark:hover:bg-white/5"
          }`}
        >
          {buttonText}
          <svg 
            xmlns="http://www.w3.org/2000/svg" 
            className="h-4 w-4 ml-2 transition-transform duration-300 group-hover:translate-x-1" 
            fill="none" 
            viewBox="0 0 24 24" 
            stroke="currentColor"
          >
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14 5l7 7m0 0l-7 7m7-7H3" />
          </svg>
        </Link>
      </div>
    </motion.div>
  );
};

// Contact Info Item component
const ContactItem = ({ 
  icon, 
  label, 
  value,
  href
}: { 
  icon: React.ReactNode; 
  label: string; 
  value: string;
  href?: string;
}) => {
  const content = (
    <>
      <div className="mr-4 text-black/70 dark:text-white/70">
        {icon}
      </div>
      <div>
        <p className="text-xs uppercase tracking-wider opacity-70 mb-1">{label}</p>
        <p className="font-light">{value}</p>
      </div>
    </>
  );

  return (
    <motion.div 
      className="flex items-center mb-6"
      variants={itemVariants}
    >
      {href ? (
        <a href={href} className="flex items-center hover:opacity-80 transition-opacity">
          {content}
        </a>
      ) : (
        content
      )}
    </motion.div>
  );
};

export default function ConnectPage() {
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
            Let's Begin a Conversation
          </WhisperText>
          
          <StoryText 
            className="max-w-2xl mx-auto mb-8 opacity-90"
          >
            Most people wait too long to capture their precious moments, until the baby's grown, 
            the laughter fades, or the love is no longer new.
            <strong className="font-medium block mt-2">
              Let's not let that happen to your story.
            </strong>
          </StoryText>
          
          <HeartText
            as="span"
            size="md"
            className="inline-block border-b border-white/30 pb-1"
          >
            Choose how you'd like to connect
          </HeartText>
        </div>
      </section>
      
      {/* Connection Options */}
      <section className="w-full max-w-5xl px-6 py-20 mx-auto">
        <motion.div 
          className="grid grid-cols-1 md:grid-cols-2 gap-8"
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.1 }}
        >
          <ConnectionOption
            title="Book a Session"
            description="Begin a guided conversation about your story. We'll listen first, then craft a custom experience that captures exactly what matters most to you."
            imageSrc="/images/icons/calendar-heart.svg"
            alt="Calendar with heart icon"
            href="/connect/booking"
            buttonText="Start the journey"
            isPrimary={true}
          />
          
          <ConnectionOption
            title="WhatsApp Direct"
            description="Prefer a more casual chat? Connect with us directly on WhatsApp for quick questions or to share your ideas in a more conversational way."
            imageSrc="/images/icons/whatsapp-heart.svg"
            alt="WhatsApp icon"
            href="/connect/whatsapp"
            buttonText="Message us"
          />
        </motion.div>
      </section>
      
      {/* Contact Information */}
      <section className="w-full bg-black/5 dark:bg-white/5 py-16 px-6">
        <div className="max-w-5xl mx-auto">
          <div className="text-center mb-12">
            <MemoryText
              as="span"
              size="sm"
              className="block mb-4"
            >
              OUR DETAILS
            </MemoryText>
            
            <WhisperText 
              as="h2" 
              size="md" 
              className="mb-2"
            >
              The Practical Whispers
            </WhisperText>
            
            <StoryText className="max-w-xl mx-auto opacity-70">
              While we believe in emotional connections, we also know you need the practical details.
              Here's how to find us when you're ready.
            </StoryText>
          </div>
          
          <motion.div 
            className="grid grid-cols-1 md:grid-cols-2 gap-x-12 gap-y-8 max-w-3xl mx-auto"
            variants={containerVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.1 }}
          >
            <ContactItem
              icon={
                <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                </svg>
              }
              label="Email"
              value="hello@koaplinchik.nl"
              href="mailto:hello@koaplinchik.nl"
            />
            
            <ContactItem
              icon={
                <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
                </svg>
              }
              label="Phone"
              value="+31 6 12345678"
              href="tel:+31612345678"
            />
            
            <ContactItem
              icon={
                <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                </svg>
              }
              label="Studio Location"
              value="Leiden, The Netherlands"
            />
            
            <ContactItem
              icon={
                <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
                </svg>
              }
              label="Hours"
              value="Tue-Sat: 10:00 - 18:00"
            />
          </motion.div>
        </div>
      </section>
      
      {/* Founders' Promise Section */}
      <section className="w-full max-w-6xl px-6 py-24 mx-auto">
        <motion.div
          className="flex flex-col lg:flex-row gap-12 items-center"
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.2 }}
          transition={{ duration: 1, ease: [0.4, 0, 0.2, 1] }}
        >
          {/* Photo */}
          <motion.div
            className="relative flex-1 overflow-hidden rounded-lg shadow-lg"
            initial={{ opacity: 0, scale: 0.95 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 1, ease: [0.4, 0, 0.2, 1] }}
          >
            <Image
              src="/images/placeholders/niki kissing artem.webp"
              alt="Niki kissing Artem – promise-of-heart"
              fill
              sizes="(max-width:1024px) 100vw, 50vw"
              className="object-cover"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent" />
          </motion.div>

          {/* Copy */}
          <div className="flex-1">
            <HeartText
              as="span"
              size="sm"
              className="inline-block mb-4 px-4 py-1 bg-black/5 dark:bg-white/5 rounded-full"
            >
              Our Promise to You
            </HeartText>

            <WhisperText as="h2" size="md" className="mb-6">
              More than Photographers—Your Storykeepers
            </WhisperText>

            <StoryText className="mb-6 opacity-90">
              We, <strong>Niki</strong> &amp; <strong>Artem</strong>, believe every heartbeat carries
              a narrative. When you invite us into your life, we don’t just arrive with
              cameras; we arrive with open hearts ready to listen.
            </StoryText>

            <StoryText className="mb-6 opacity-90">
              Our commitment is simple: to preserve the emotion that lives in the spaces
              between words—the laughter, the gentle pauses, the breath before a whisper.
              These are the moments that become forever.
            </StoryText>

            <MemoryText className="italic">
              “Your memories deserve to feel as alive tomorrow as the day they are born.”
            </MemoryText>
          </div>
        </motion.div>
      </section>
      
      {/* Emotional CTA */}
      <section className="w-full py-20 px-6 text-center">
        <div className="max-w-3xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 1, ease: [0.4, 0, 0.2, 1] }}
            viewport={{ once: true }}
          >
            <MemoryText
              as="div"
              size="md"
              className="mb-6 italic"
            >
              "The best stories begin with a simple hello."
            </MemoryText>
            
            <StoryText className="opacity-80 mb-10">
              Every memory we've captured started with a conversation just like this one.
              The first step is always the most meaningful — it's the moment you decide
              your story deserves to be preserved.
            </StoryText>
            
            <Link 
              href="/connect/booking" 
              className="inline-block px-8 py-3 text-sm font-medium tracking-wide text-white bg-black transition-colors rounded-full md:text-base hover:bg-black/90 dark:bg-white dark:text-black dark:hover:bg-white/90"
            >
              Let's begin your story
            </Link>
          </motion.div>
        </div>
      </section>
    </main>
  );
}
