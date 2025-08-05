# 💕 FEELINGS_FIRST.md  
_The Koaplinchik Philosophy for Coding With Soul_

> “Code is just the vessel. Emotion is the cargo.”

---

## 1. Why This Guide Exists
Anyone can build a fast site.  
We build a **pause** — that instant between heartbeats when a visitor realises  
“_this is about **my** story_”.

This file is the guardian of that pause.  
Follow it, and every commit will whisper instead of shout.

---

## 2. The Three Questions Before Every Commit
| # | Question | Purpose |
|---|----------|---------|
| 1 | **How does this make _them_ feel?** | Emotion over function |
| 2 | **Is this about _them_ or about us?** | Visitor-centric language |
| 3 | **Would someone _pause_ here?** | Create moments, not scroll |

If any answer is “no”, refactor until it’s “yes”.

---

## 3. The Koaplinchik Voice

### 3.1 Tone Rules
* **Whispers, never shouts** – soft verbs, gentle invites.  
* **“You / We” > “I / Me”** – co-creation, not self-promo.  
* **Promises, not features** – “Memories kept safe” vs. “24 MP RAW”.  

### 3.2 Language Swap Table
| Generic ❌ | Koaplinchik ✅ |
|-----------|----------------|
| “Book now” | “Let’s create together” |
| “Our services” | “What we can craft for you” |
| “Submit” | “Send your heartbeat” |
| “Error” | “Something is shy, let’s try again” |
| “Loading…” | “Gathering the light…” |

---

## 4. Pain → Remedy Pattern
1. **Reveal the loss**: “Most people wait too long…”  
2. **Offer rescue**: “We won’t let that moment slip away.”

Use this rhythm on the homepage & CTAs to create empathetic urgency.

---

## 5. Micro-Interactions With Soul

| Element | Interaction | Feeling Target |
|---------|-------------|----------------|
| Hover on gallery | Gentle zoom + brightness 5 % | Curiosity |
| Button click | Pulse once like a heartbeat | Assurance |
| Form field focus | Label floats & sighs | Calm |
| Scroll stop points | Parallax slow-mo | Breath |

**Rule:** Animation must last long enough to _feel_, never long enough to annoy (400-1200 ms easing `cubic-bezier(0.4,0,0.2,1)`).

---

## 6. Animation Principles

```css
/* Memory reveal */
.memory-enter {
  opacity: 0;
  transform: scale(.95) translateY(10px) blur(4px);
}
.memory-enter-active {
  opacity: 1;
  transform: scale(1) translateY(0) blur(0);
  transition: all 1.2s cubic-bezier(.4,0,.2,1);
}
```

1. **Opacity → Focus → Clarity** (like remembering).  
2. **No hard eas-in/out**; every curve should breathe.  
3. **Stagger 80 ms** between siblings to mimic human anticipation.

---

## 7. Loading & Error Poetry

### 7.1 Loading States
```
0–30 %  “Opening the memory box…”
30–70 % “Dusting off the moments…”
70–99 % “Almost there, beautiful…”
```

### 7.2 Error Comfort
*404*: “This page is playing hide & seek. Shall we find another path?”  
*500*: “Even cameras need a moment to rest. We’ll be back with the light.”

---

## 8. Quality Checks (Feelings Gate)

| Check | Pass Condition |
|-------|----------------|
| **Pause Test** | At least one element per viewport triggers a pause |
| **You-Language Test** | >70 % of CTAs use “you / we” |
| **Whisper Test** | No generic placeholders or lorem ipsum |
| **Warmth Test** | Color contrast ≥ 4.5 : 1 but never cold |
| **Tear Test** | Team reviewer felt _something_ |

Automated script: `npm run feelings:check` enforces wording & naming rules.

---

## 9. Kill-Switch Rules
Delete or rewrite if you spot:
* Stock photo or “image1.jpg”.
* “Click here” CTA.
* Right-click disabled scripture (paranoia kills trust).
* Animation > 2 s or CPU-hungry loaders.  
* Any copy starting with “I am…”.

---

## 10. Final Blessing

If the feature you built:
* Makes a visitor **pause**,  
* Warms their chest **2 °**,  
* And tells them **“your love matters”**,  

then merge with pride.

**Ship with heart, always.** 💝
