# 📦 ASSETS_SETUP.md  
_Set up every pixel with purpose_

This guide ensures all visual assets load flawlessly and whisper emotion rather than scream for attention. Follow it before deploy → **`npm run feelings:check` must pass with **0** image-naming errors.**

---

## 1. Required Images & Paths

| Section | File name | Path (public/) | Notes |
|---------|-----------|----------------|-------|
| **Logo** | `koaplinchik-signature-white.png` | `images/brand/` | White on transparent (light themes) |
|  | `koaplinchik-signature-black.png` | `images/brand/` | Black on transparent (dark themes) |
| **Hero** | `golden-hour-field.jpg` | `images/heroes/` | Default hero fallback frame |
|  | `hero-moment.mp4` | `videos/` | 6–15 s muted loop, ≤3 MB |
| **Capture Cards** | `newborn.jpg` | `images/placeholders/` | 4 : 5 ratio |
|  | `family.jpg` | `images/placeholders/` | 4 : 5 |
|  | `couple.jpg` | `images/placeholders/` | 4 : 5 |
|  | `portrait.jpg` | `images/placeholders/` | 4 : 5 |
| **Story Covers** | `anna-mikael.jpg` | `images/placeholders/` | 3 : 4 ratio |
|  | `three-generations.jpg` | `images/placeholders/` | 3 : 4 |
|  | `before-dad.jpg` | `images/placeholders/` | 3 : 4 |
| **Icons** | `calendar-heart.svg` | `images/icons/` | 64 × 64 viewBox |
|  | `whatsapp-heart.svg` | `images/icons/` | 64 × 64 |
| **Testimonials** | `testimonial-portrait.jpg` | `images/placeholders/` | Square 1 : 1 |

> Naming rule: `kebab-case` + emotion keyword (e.g. `golden-hour-field.jpg`). **No `IMG_1234` ever.**

---

## 2. Dimensions & Specs

| Asset type | Recommended | Reason |
|------------|-------------|--------|
| Hero fallback | 1920 × 1080 JPG, 70 % quality | crisp on large screens |
| Capture/Story | shortest edge ≥1200 px | retina & crop safety |
| Logo PNG | width 1200 px (3 : 1 aspect) | scales from 120 px to full-width |
| Icons SVG | 64 × 64 viewBox | pixel-perfect in UI |
| Video | H.264, 1080p, 24–30 fps, muted, loop, ≤3 MB | fast start, mobile friendly |

**Color**: keep mild warmth (#FFE4E6-ish).  
**Compression**: use `squoosh-cli --oxipng` for PNG, `mozjpeg -quality 70` for JPG.

---

## 3. Converting the Signature to PNG

1. Open `koaplinchik-signature.svg` in Figma / Illustrator.  
2. Set fill **#000000** (export dark) and **#FFFFFF** (export light).  
3. Export as PNG @1× with **transparent background**.  
4. Optimise:  
   ```bash
   npx squoosh-cli --oxipng --quality 80 koaplinchik-signature-*.png
   ```  
5. Place in `public/images/brand/`.

---

## 4. Replacement Priority

1. **Logo PNGs** – site loads them in nav & hero; missing ⇒ broken layout.  
2. **Hero video + fallback image** – first visual impression.  
3. **Capture Card images** – grid placeholders look generic; replace early.  
4. **Story cover images** – secondary; update once stories are ready.  
5. **Icons & testimonial portraits** – polish pass.

---

## 5. Quick-Fix Checklist for Immediate Deployment

- [ ] Copy placeholder assets above into listed paths (blank files OK for now).  
- [ ] Verify each path with `npm run feelings:check` (no “Image needs emotional naming”).  
- [ ] Run `npm run dev` → ensure **no 404s** in Network tab for images/video.  
- [ ] Commit with message:  
  ```
  chore(assets): add placeholder images & logo PNGs
  ```  
- [ ] Re-deploy to Vercel – pages should now render every visual.

---

**Ship with heart, always.** 💝
