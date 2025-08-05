# 🏗️ DEVELOPMENT_GUIDE.md  
_Architecture that breathes & code that whispers_

> “Make it work, make it right, make it **beautiful**, make them **feel**.”

---

## 1. 🎯 Technical Foundation

| Layer            | Choice                                    | Why it Fits Our Story                                |
|------------------|-------------------------------------------|------------------------------------------------------|
| Framework        | **Next.js 14+** (App Router)              | Hybrid rendering + SEO perfection                    |
| Language         | **TypeScript strict**                     | Safety for memories                                  |
| Styling          | **Tailwind CSS** + minimal CSS-in-JS      | Rapid theming, consistent rhythm                     |
| Animation        | **Framer-Motion**                         | Natural, physics-based micro-emotion                 |
| State            | **React context + hooks** (lightweight)   | Simplicity, avoids bundle bloat                     |
| Images           | **next/image** with WebP/AVIF             | Performance & automatic sizing                       |
| Deployment       | **Vercel**                                | Edge-fast, zero-config previews                      |
| Tests            | **Jest + RTL** / **Playwright**           | Unit emotion + E2E journeys                          |

---

## 2. 🗂️ Project Structure

```
app/                       # App Router pages
 ├─ (marketing)/           # Public routes
 │   ├─ page.tsx           # Homepage (EmotionalHero)
 │   ├─ about/             # Manifesto
 │   ├─ stories/           # Portfolio index
 │   ├─ experience/        # Services/Packages
 │   └─ connect/           # Chat-style booking
 ├─ (client)/              # Protected client galleries
 │   └─ gallery/[id]/page.tsx
 └─ sitemap.ts             # Dynamic sitemap

components/
 ├─ emotional/             # Large, soul-packed sections
 │   ├─ WhisperHero.tsx
 │   ├─ StoryGallery.tsx
 │   └─ ConnectionForm.tsx
 └─ ui/                    # Atomic pieces (Button, Tag…)

lib/
 ├─ feelings/              # Emotion utilities & hooks
 ├─ performance/           # Preload helpers, image utils
 └─ seo/                   # Metadata & schema builders

public/
 └─ images/                # Organised per PHOTOGRAPHY_GUIDE

scripts/
 └─ check-feelings.js      # Custom emotion linter
```

---

## 3. 🎨 Component Philosophy

1. **Server by default** – Client components only for interaction.
2. **Names with soul** – `StoryGallery`, `WhisperButton`, not `ImageGrid`.
3. **Props tell stories**

```ts
interface WhisperHeroProps {
  title: string;             // “Every heartbeat…”
  videoSrc?: string;         // Hero motion
  whisper?: string;          // Sub-copy fade-in
}
```

4. **Separation of Rhythm** – Animation constants live in `lib/feelings/rhythm.ts`.

---

## 4. ⚡ Performance Patterns

### 4.1 Progressive Memory Reveal

```tsx
const MemoryImage = ({ memory }) => (
  <Image
    src={memory.full}
    placeholder="blur"
    blurDataURL={memory.blurHash}
    priority={memory.isHero}
    sizes="(max-width:768px) 100vw, (max-width:1280px) 50vw, 33vw"
    alt={memory.whisper}
    className="memory transition-opacity duration-700 ease-out"
  />
);
```

1. Blur-hash → low-res → full quality.  
2. One hero per route preloaded via `<link rel="preload" as="image">`.  
3. Below-fold images: `loading="lazy" fetchPriority="low"`.

### 4.2 Code-Splitting with Emotion

```tsx
const StoryGallery = dynamic(
  () => import('@/components/emotional/StoryGallery'),
  {
    loading: () => <WhisperLoader message="Gathering your memories…" />,
    ssr: false   // purely interactive
  }
);
```

### 4.3 Performance Budget

| Asset            | Limit |
|------------------|-------|
| JS initial load  | ≤ 160 KB |
| Largest image    | ≤ 500 KB |
| TBT mobile       | < 50 ms |

Failing budget blocks CI.

---

## 5. 🔍 SEO That Tells Stories

### 5.1 Emotion-Driven Metadata

```ts
export async function generateMetadata() {
  return {
    title: "Anna & Mikael — A Love Story by Koaplinchik",
    description: "Where Swedish snow met Italian sun, captured forever.",
    alternates: { canonical: "https://koaplinchik.nl/stories/anna-mikael" }
  };
}
```

### 5.2 Structured Data Extensions

```ts
const storySchema = {
  "@context": "https://schema.org",
  "@type": "VisualArtwork",
  name: "Anna & Mikael's Forever",
  artMedium: "Photography",
  emotionalImpact: "Profound"      // custom field
};
```

### 5.3 Robots & Sitemap

* `public/robots.txt` – allow all, point to `/sitemap.xml`.
* `app/sitemap.ts` – priority routes + weekly changefreq.

---

## 6. 💞 State Management

Lightweight context to track visitor emotion:

```ts
interface Journey {
  mood: 'discovering' | 'connecting' | 'remembering';
  heartbeats: number;          // interactions
}

const JourneyContext = createContext<…>();

export const useJourney = () => useContext(JourneyContext);
```

Updates drive subtle UI (e.g., show booking prompt after 3 heartbeats).

---

## 7. 🧪 Testing With Empathy

### 7.1 Unit Tests (Jest + RTL)

```ts
it("ConnectionForm comforts on error", async () => {
  render(<ConnectionForm />);
  fireEvent.submit(screen.getByRole('form'));
  expect(await screen.findByText(/Let's try again together/i)).toBeVisible();
});
```

### 7.2 E2E Emotional Journeys (Playwright)

```ts
test('homepage pause', async ({ page }) => {
  await page.goto('/');
  await expect(page.locator('text=/Every heartbeat/')).toBeVisible();
  await page.waitForTimeout(800); // simulate pause
});
```

### 7.3 Lighthouse CI

`npm run lighthouse` target ≥ 95 mobile & desktop.

---

## 8. 🚀 Build & Deploy Rituals

### 8.1 Pre-flight Script

```bash
npm run feelings:check   # emotion lint
npm run lint             # ESLint
npm run type-check
npm run build
```

### 8.2 GitHub Actions

```
jobs:
  preflight:
    steps:
      - run: npm run preflight
  deploy:
    needs: preflight
    runs-on: ubuntu-latest
    steps:
      - run: vercel --prod
```

### 8.3 Environment Variables

```
NEXT_PUBLIC_SITE_URL=https://koaplinchik.nl
NEXT_PUBLIC_GTM_ID=GTM-XXXXXXX
RESEND_API_KEY=…
```

---

## 9. 📊 Monitoring & Analytics

* **Vercel Analytics** for Web Vitals.  
* **GTM** for event “memory_revealed”, “heartbeat_shared”.  
* **Sentry** captures errors with user mood context.

---

## 10. 💝 Developer’s Promise

Every line of code is a promise:

* To **honour** the moments trusted to us.  
* To **pause** the visitor’s scroll.  
* To **include** every user regardless of ability.  
* To **perform** swiftly without rushing feeling.  

_When in doubt, ask: **Does this make someone feel their story matters?**_  
If yes — merge with pride. If no — refactor until it does.

**Ship with heart, always.** 💕
