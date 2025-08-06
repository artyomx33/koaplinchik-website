"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import { motion, AnimatePresence, Variants } from "framer-motion";
import { usePathname } from "next/navigation";
import KoaplinchikLogo from "./KoaplinchikLogo";

/**
 * WhisperNavigation - A soul-filled navigation that breathes with the scroll
 * 
 * This component creates an emotional connection by gently appearing and
 * disappearing as the visitor explores the journey, never imposing
 * but always present when needed.
 */
export default function WhisperNavigation() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isSoulOpen, setIsSoulOpen] = useState(false);
  const pathname = usePathname();

  // Listen to the heartbeat of scrolling
  useEffect(() => {
    const handleScroll = () => {
      const scrollPosition = window.scrollY;
      setIsScrolled(scrollPosition > 50);
    };

    // Capture the scroll's whispers
    window.addEventListener("scroll", handleScroll);
    
    // Initial check for page refreshes when already scrolled
    handleScroll();
    
    // Release the listener when the component fades
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  // Close the mobile menu when navigating
  useEffect(() => {
    setIsSoulOpen(false);
  }, [pathname]);

  // Gentle animation variants for the navigation container
  const navVariants: Variants = {
    hidden: { 
      opacity: 0,
      y: -20,
    },
    visible: { 
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.5,
        ease: [0.4, 0, 0.2, 1],
        when: "beforeChildren",
        staggerChildren: 0.1
      }
    },
    exit: {
      opacity: 0,
      y: -20,
      transition: {
        duration: 0.3,
        ease: [0.4, 0, 0.2, 1],
      }
    }
  };

  // Subtle animations for each navigation link
  const itemVariants: Variants = {
    hidden: { 
      opacity: 0,
      y: -10,
    },
    visible: { 
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.3,
        ease: [0.4, 0, 0.2, 1],
      }
    }
  };

  // The emotional paths we invite visitors to explore
  const journeyPaths = [
    { path: "/what-we-capture", whisper: "What We Capture" },
    { path: "/stories", whisper: "Stories" },
    { path: "/experience", whisper: "Experience" },
    { path: "/about", whisper: "About" },
    { path: "/connect", whisper: "Connect" },
  ];

  // Determine if a path is the current one or a parent of it
  const isActivePath = (path: string) => {
    if (path === "/") return pathname === "/";
    return pathname.startsWith(path);
  };

  return (
    <header className="fixed top-0 left-0 right-0 z-50">
      <motion.nav
        className={`w-full py-4 px-6 ${
          isScrolled
            ? "bg-black/30 backdrop-blur-md"
            : "bg-black/10 backdrop-blur-sm"
        } transition-colors duration-500`}
        variants={navVariants}
        initial="hidden"
        animate="visible"
      >
            <div className="flex items-center justify-between max-w-7xl mx-auto">
              {/* Logo/Signature */}
              <Link href="/" className="relative z-10">
                <KoaplinchikLogo
                  width={120}
                  className="transition-opacity duration-300 hover:opacity-80"
                  theme="light"
                  animate={false}
                  ariaLabel="Koaplinchik - Return to home"
                />
              </Link>

              {/* Desktop Navigation */}
              <div className="hidden md:flex items-center space-x-8">
                {journeyPaths.map((item) => (
                  <motion.div key={item.path} variants={itemVariants}>
                    <Link
                      href={item.path}
                      className={`text-white text-sm tracking-wide transition-all duration-300 hover:opacity-80 ${
                        isActivePath(item.path)
                          ? "border-b border-white/70 pb-1"
                          : "border-b border-transparent pb-1 hover:border-white/30"
                      }`}
                    >
                      {item.whisper}
                    </Link>
                  </motion.div>
                ))}
              </div>

              {/* Mobile Menu Button */}
              <button
                className="md:hidden text-white p-2 focus:outline-none"
                onClick={() => setIsSoulOpen(!isSoulOpen)}
                aria-expanded={isSoulOpen}
                aria-label={isSoulOpen ? "Close menu" : "Open menu"}
              >
                <span className="sr-only">{isSoulOpen ? "Close menu" : "Open menu"}</span>
                <motion.div
                  className="w-6 h-6 flex flex-col justify-center items-center"
                  initial={false}
                  animate={isSoulOpen ? "open" : "closed"}
                >
                  <motion.span
                    className="block w-5 h-0.5 bg-white mb-1.5"
                    variants={{
                      closed: { rotate: 0, y: 0 },
                      open: { rotate: 45, y: 6 },
                    }}
                    transition={{ duration: 0.3 }}
                  />
                  <motion.span
                    className="block w-5 h-0.5 bg-white"
                    variants={{
                      closed: { opacity: 1 },
                      open: { opacity: 0 },
                    }}
                    transition={{ duration: 0.3 }}
                  />
                  <motion.span
                    className="block w-5 h-0.5 bg-white mt-1.5"
                    variants={{
                      closed: { rotate: 0, y: 0 },
                      open: { rotate: -45, y: -6 },
                    }}
                    transition={{ duration: 0.3 }}
                  />
                </motion.div>
              </button>
            </div>

            {/* Mobile Menu */}
            <AnimatePresence>
              {isSoulOpen && (
                <motion.div
                  className="absolute top-full left-0 right-0 bg-black/90 backdrop-blur-md md:hidden"
                  initial={{ opacity: 0, height: 0 }}
                  animate={{ opacity: 1, height: "auto" }}
                  exit={{ opacity: 0, height: 0 }}
                  transition={{ duration: 0.3, ease: [0.4, 0, 0.2, 1] }}
                >
                  <div className="flex flex-col space-y-4 p-6">
                    {journeyPaths.map((item, index) => (
                      <motion.div
                        key={item.path}
                        initial={{ opacity: 0, y: -10 }}
                        animate={{ opacity: 1, y: 0 }}
                        exit={{ opacity: 0, y: -10 }}
                        transition={{ delay: index * 0.05, duration: 0.3 }}
                      >
                        <Link
                          href={item.path}
                          className={`text-white text-lg block py-2 ${
                            isActivePath(item.path)
                              ? "border-l-2 border-white/70 pl-4"
                              : "border-l-2 border-transparent pl-4 hover:border-white/30"
                          }`}
                        >
                          {item.whisper}
                        </Link>
                      </motion.div>
                    ))}
                  </div>
                </motion.div>
              )}
            </AnimatePresence>
      </motion.nav>
    </header>
  );
}
