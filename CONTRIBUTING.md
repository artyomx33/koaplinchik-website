# 🤝 Contributing to Koaplinchik — Where Code Becomes Poetry

Welcome, memory-maker!  
This document shows how we protect the magic while we build.

---

## 1. ✨ Quick Setup

```bash
git clone https://github.com/artyomx33/koaplinchik-website.git
cd koaplinchik-website
npm install            # installs dependencies & intentions
npm run dev            # http://localhost:3000
```

### Prerequisites

| Tool | Version | Why |
|------|---------|-----|
| Node | ≥ 20 | ES2023 features + speed |
| npm  | ≥ 10 | Workspaces & overrides |
| Git  | Any  | Time-travel for memories |

---

## 2. 📐 Code Standards (Technical + Soulful)

| Category | Rule | Heart-reason |
|----------|------|--------------|
| **TypeScript** | `strict` mode, no `any` | Trust & safety |
| **Images** | Always `next/image` | Optimised memories |
| **Alt text** | Emotive, descriptive | Accessibility = empathy |
| **Variables** | Use feeling words (`heartbeats`, `whisperText`) | Readable poetry |
| **Comments** | Explain *why*, not *what* | Story > documentation |
| **Imports** | Path alias `@/` | Clean mental map |
| **Styling** | Tailwind first; custom classes only if poetic | Consistency |

Example:

```typescript
// ❌ dull
const img = "/public/img1.jpg";

// ✅ poetic
const firstKissMemory = "/public/images/stories/first-kiss.webp";
```

---

## 3. 🎨 Component Philosophy

1. **Emotion in the Name**  
   `WhisperHero`, `StoryGallery`, `MemoryCard` > `Hero`, `Gallery`, `Card`.
2. **Server by Default**  
   Mark `'use client'` only when interaction is essential.
3. **Props With Purpose**

```typescript
interface StoryGalleryProps {
  memories: Memory[];
  whisper?: string;           // not “caption”
  onHeartbeat?: () => void;   // not “onClick”
}
```

4. **Separation of Rhythm**  
   Animation & timing live in `lib/feelings`.

---

## 4. 🌊 Git Flow & Emotional Commits

### Branch Naming

```
feat/whisper-hero
fix/soften-shadows-mobile
polish/warmer-hover-glow
```

### Commit Messages

```
✨ feat: add whisper animations to gallery cards
💕 polish: soften shadow to feel like dusk
🩹 fix: heal broken heart animation on Safari
```

Prefixes: `feat`, `fix`, `polish`, `docs`, `refactor`, `chore`.

### Pre-Commit Hook

Husky runs:

```
npm run feelings:check   # custom emotion linter
npm run lint             # ESLint
npm run type-check       # TypeScript strict
npm run build            # Ensure dream compiles
```

---

## 5. 🧪 Testing With Heart

| Level | Tool | What We Validate |
|-------|------|------------------|
| Unit | Jest + RTL | Logic & small feelings |
| Component | Storybook tests | Visual & a11y |
| E2E | Playwright | Emotional journeys |

Example Emotional Test:

```typescript
test('booking form feels conversational', async ({ page }) => {
  await page.goto('/connect');
  await expect(page.getByText(/What moment/i)).toBeVisible();
});
```

---

## 6. 🔍 Code Review Culture

1. **Celebrate First**: “Beautiful work! The hover feels like a sigh.”  
2. **Guide, Don’t Judge**: Suggest alternatives with empathy.  
3. **Guard the Vibe**: Flag anything generic, rushed, or soul-less.  
4. **Check the Four Pillars**  
   - Emotion  
   - Performance  
   - Accessibility  
   - Maintainability  

Sample Review Comment:

> “Love the transition! Could we ease-out 250 ms longer so the memory lingers?”

---

## 7. 🚀 Merge & Deploy Ritual

1. PR title = final commit message.  
2. All checks green (CI + Lighthouse ≥ 95 mobile).  
3. Preview link shared in #memories-review.  
4. Someone felt a spark ➜ Merge.  
5. Celebrate with virtual confetti. 🎉

---

## 8. 💌 Final Note

Every pull request is a love letter to future visitors.  
Write it with care, merge with pride, and remember:

**If the code doesn’t make hearts pause, rewrite until it does.**

Ship with love, always. 💕
