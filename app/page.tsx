import WhisperHero from "@/components/emotional/WhisperHero";
import { WhisperText, StoryText } from "@/components/ui/Typography";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Koaplinchik Photography | Where memories become poetry",
  description: "We capture the whispers between heartbeats, those fleeting seconds where your story breathes. Professional photography with soul.",
  keywords: "photography, memories, portraits, wedding photography, family photography, emotional photography",
};

export default function Home() {
  return (
    <main className="flex flex-col items-center min-h-screen">
      {/* Hero Section */}
      <WhisperHero 
        backgroundImage="/images/hero-whisper-moment.jpg"
        backgroundVideo="/videos/memories-whisper.mp4"
        tagline="Where memories become poetry"
        heading="Before the moment fades into yesterday"
        subheading="We'll capture the whispers between heartbeats, those fleeting seconds where your story breathes"
        ctaText="Let's create together"
        ctaLink="/connect"
      />
      
      {/* Brief Introduction */}
      <section className="w-full max-w-5xl px-6 py-16 mx-auto text-center">
        <WhisperText 
          as="h2" 
          size="md" 
          className="mb-6"
        >
          Every frame tells your story
        </WhisperText>
        
        <StoryText 
          className="max-w-2xl mx-auto mb-8 opacity-90"
        >
          Most people wait too long to capture the moment—until the baby's grown, 
          the laughter fades, or the love is no longer new. 
          <strong className="font-medium"> We won't let that happen.</strong>
        </StoryText>
      </section>
    </main>
  );
}
