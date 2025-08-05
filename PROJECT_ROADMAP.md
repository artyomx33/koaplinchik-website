# 📜 Koaplinchik Project Roadmap  
_Where every milestone is a heartbeat_

---

## 🌅 Immediate Phase – **Hero Awakening** (Today → Tomorrow)

| Moment | Action | Snippet / Asset | Emotional Check |
| ------ | ------ | --------------- | --------------- |
| DNS Clean-up | Remove legacy A/CNAME at TransIP – keep only Vercel nameservers | n/a | “The path is clear, the light may enter.” |
| **WhisperHero v1 → v2** | 1. Import hero video `/videos/hero-moment.mp4`  <br>2. Dark overlay (`bg-black/50`) when video not ready <br>3. Typing headline & signature reveal | ```tsx<br><WhisperHero<br>  backgroundVideo="/videos/hero-moment.mp4"<br>  heading="Every heartbeat has a story…"<br>  signatureSrc="/images/brand/koaplinchik-signature.svg"<br>  ctaText="Begin your memory"<br>/><br>``` | Pause Test: visitor still for ≥ 3 s |
| Scroll hint | Add floating feather (SVG) pulsing after 6 s | `animate-bounce-slow` Tailwind util | Whisper Test: gentle, never nags |

**DONE when:**  
`/` loads video, quote ✨ types in, signature draws, button glows, feather hints scroll.

---

## 🗓️ Week 1 – **Homepage Storyboard**

### 1. “What We Capture” Grid  
- 4 cards, hover fades swap still → moment video  
- Snippet:

```tsx
<MemoryGrid>
  <CaptureCard title="Whispers of New Life" srcStill="/images/newborn.jpg" srcMotion="/videos/newborn.mp4"/>
  …
</MemoryGrid>
```

### 2. Featured Love Stories (3)  
- Reusable `<StoryCard>` with Parallax bg + audio hover

### 3. Quote Carousel  
- `<WhisperCarousel>` auto-fades poems every 7 s  
- Integrate Luna’s text array

### 4. Testimonials (Audio Wave)  
- `<VoiceTestimonial>` component with tiny `wavesurfer.js`

### 5. Connection CTA  
- Soft dust particles, button `Let’s begin`

**Emotional Gate Week 1**  
- You-Language ≥ 70 %  
- One “Pause” per viewport  
- Loading Poetry present

---

## 🗓️ Week 2 – **Beyond the Fold**

| Page / Flow | Essence | Key Task |
| ----------- | ------- | -------- |
| Conversational Booking | “We listen first.” | Multi-step form with progress heartbeat, serverless action (Vercel Edge) |
| Story Galleries | Memory-mode slider, greyscale toggle | `<StoryGallery>` + `<MemoryToggle>` |
| Blog “Field Notes” | SEO 100, SSR MDX | Dynamic OG image generator |
| Contact + Map | Warm hover pins, WhatsApp deep-link | Supabase for submissions |
| 404 / 500 Comfort pages | Hide & Seek copy | Custom `not-found.tsx` |

---

## 🎬 Luna Animation Integration

1. **SignatureSVG** – stroke-dasharray animation (already scaffolded)  
2. **Typing Quote** – `react-type-animation` @ 90 ms/char  
3. **Dust Particles** – `useParticles()` hook (Canvas fallback)  
4. **Cinematic Scroll** – Framer Motion `useScroll()` to fade sections one-by-one

```tsx
<motion.h1 variants={typing} custom="Every heartbeat has a story…" />
<SignatureSVG className="stroke-white" animate />
```

---

## 📏 Success Metrics (from `START_HERE.md`)

| Metric | Target | Measured By |
| ------ | ------ | ----------- |
| Performance | ≥ 95 | Lighthouse CI |
| SEO | 100 | Lighthouse CI + robot tests |
| Accessibility | ≥ 95 | Pa11y | 
| Emotional Impact | ≥ 1 pause/viewport | Manual reviewer tears |
| Feelings Check | 0 errors, ≤ 10 warnings | `npm run feelings:check` |

---

## 🛠️ Factory Snippets Library

| Component | File | Description |
| --------- | ---- | ----------- |
| `WhisperHero` | `components/emotional/WhisperHero.tsx` | Hero with video, overlay, signature |
| `MemoryGrid` | `components/emotional/MemoryGrid.tsx` | 4-item animated grid |
| `StoryCard` | `components/emotional/StoryCard.tsx` | Parallax love story |
| `WhisperCarousel` | `components/emotional/WhisperCarousel.tsx` | Quote fade carousel |
| `VoiceTestimonial` | `components/emotional/VoiceTestimonial.tsx` | Audio snippet with waveform |

Each new file must pass:  
```bash
npm run feelings:check && npm run type-check
```

---

## 💌 Final Blessing

“Build swiftly, but breathe between commits.  
Let every diff feel like turning a page in someone’s album.”  

**Ship with heart, always.** 💕
