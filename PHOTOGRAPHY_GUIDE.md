# 📸 PHOTOGRAPHY_GUIDE.md  
_Honouring every pixel, every whisper of light_

---

## 1. 🖼️ Image Philosophy  

1. **A trust given** – each photo is someone’s vulnerable moment.  
2. **A story chapter** – no image stands alone; it lives in context.  
3. **A performance piece** – must load like a gentle breath, never a jolt.  

“_If an image cannot make you feel, it isn’t ready._”

---

## 2. 📁 Organisation Structure  

```
public/
  images/
    stories/                # Client galleries
      2025-05-anna-mikael/
        preview/            # 400 px thumbs
        full/               # 1200–2400 px display
        moments/            # Hero highlights
    whispers/               # Homepage hero & features
    emotions/               # About page imagery
    dreams/                 # Experience/service visuals
    brand/                  # Logos, handwritten signatures
```

### Naming Conventions  
```
first-look-tears-of-joy.webp
three-generations-one-laugh.webp
quiet-moment-before-yes.webp
```
Never `IMG_1234.jpg` or `photo1.png`.

---

## 3. 🎨 Processing Pipeline  

| Stage | Purpose | Koaplinchik Standard |
|-------|---------|----------------------|
| **Selection** | Emotion filter | Choose only images that make _you_ pause. |
| **Colour Grading** | Signature warmth | Highlights +5 % warmth, gentle lifted shadows, natural skin. |
| **Export** | Technical craft | • **WebP** primary, JPG fallback only if needed.<br>• Thumbs 400 px 85 % Q.<br>• Display 1200 / 2400 px 90 % Q.<br>• Heroes 2400 px 92 % Q. |
| **Metadata** | SEO & a11y | Descriptive `alt` telling the story. |
| **Consent** | Privacy | Written client approval before publish. |

---

## 4. 🛠️ Implementation Standards  

### Story Image Component
```tsx
<StoryImage
  src="/images/stories/2025-05-anna-mikael/first-look.webp"
  alt="The moment Anna's father saw her in the dress his mother wore"
  memory="Their eyes met across fifty years of love"
  priority={isHero}
  onReveal={() => trackEmotion('first-look-tears')}
  sizes="(max-width:768px) 100vw, (max-width:1280px) 50vw, 33vw"
/>
```

### Chapter Gallery
```tsx
<ChapterGallery
  story="Anna & Mikael"
  date="11 May 2025"
  whisper="Where Swedish snow met Italian sun"
  chapters={[
    {
      title: "Morning Anticipation",
      images: [...],
      narration: "The house buzzed with whispered excitement…"
    },
    {
      title: "First Look",
      images: [...],
      narration: "Time stopped when he turned around…"
    }
  ]}
/>
```

---

## 5. 🔒 Client Privacy & Access  

* **Password-protected galleries** using a _WhisperGate_ component.  
* Downloads offered via a beautiful, branded modal – never disable right-click (trust > paranoia).  
* Private EXIF removed unless requested.  
* “Memories waiting” placeholder until the correct password unlocks the story.

---

## 6. ⚡ Performance Rituals  

1. **Progressive reveal** – blur-hash ➜ low-res ➜ full.  
2. **Lazy load with blur-up** for below-fold images.  
3. **Priority preload** for one hero per route.  
4. **Responsive picture** sources for mobile vs. desktop.  
5. **Loading poetry** messages:  
   ```
   0-30 %  “Opening the memory box…”
   31-70 % “Dusting off the moments…”
   71-99 % “Almost there, beautiful…”
   ```

---

## 7. 🚫 What We Never Do  

| ❌ Forbidden | Why it breaks the spell |
|--------------|------------------------|
| Stock photos | Authenticity or nothing. |
| Generic filenames (IMG_1234.jpg) | No story in numbers. |
| Right-click disable banners | Distrustful & dated. |
| Oversaturated filters | Truth over trends. |
| Images > 500 KB display | Slow memories hurt feelings. |
| Alt="photo" | Descriptive feelings only. |

---

## 8. 📊 Pre-Launch Checklist  

- [ ] Emotional impact verified (Pause Test).  
- [ ] Client consent documented.  
- [ ] WebP served with proper fallback.  
- [ ] Alt text tells the story.  
- [ ] File sizes within budget.  
- [ ] Lighthouse image audits = green.  
- [ ] Mobile gallery swipe tested on real device.  

---

## 9. 💝 Frame Test  

> “Would someone print this and hang it on their wall _because of how it makes them feel_?”  

If **yes** → ship.  
If **no** → curate again.

---

*Remember: We’re not storing photos.  
We’re bottling starlight so love can outlive time.* 🌟
