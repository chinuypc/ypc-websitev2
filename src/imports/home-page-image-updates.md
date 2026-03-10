On the home page, apply the following image changes across each section. Use only Unsplash images via the unsplash_tool — never hallucinate URLs. Every image must be contextually relevant to the section content (no decorative filler). Follow NNGroup/Baymard principles: authentic > generic, every image earns its place by supporting the message, and maintain visual rhythm by alternating between text-heavy and image-rich sections.

---

HERO SECTION (HeroSection.tsx):
- Replace the existing background image with a fresh luxury Dubai skyline night aerial shot.
- Increase the image opacity from 0.15 to 0.20 so the background is more visible and immersive.
- Reduce the overlay darkness: change the linear-gradient bottom stop from rgba(26,20,20,0.95) to rgba(26,20,20,0.92), and the top from rgba(26,20,20,0.7) to rgba(26,20,20,0.5).
- Slightly boost the radial gradient accents: Teal glow from 0.12 to 0.15, Sandy Tone glow from 0.06 to 0.08.

---

WHY SECTION (WhySection.tsx):
- Increase the existing right-column image height from 260px to 300px.
- Replace the image with an exclusive private dinner table / luxury restaurant evening shot.
- Add a bottom-left caption overlay on the image: "Curated Dinners · Dubai" using Inter font, 8px, tracking 1.6px, uppercase, Sandy Tone color (#816a54), positioned absolute bottom-4 left-4 right-4. Include a gradient overlay (from-[#1a1414] via-transparent to-transparent opacity-70) to ensure caption legibility.
- Add a SECOND image below the existing quote block as a new ScrollReveal (direction="right", delay={0.5}): an elegant evening cocktail reception / luxury venue shot, 200px height, same rounded-sm overflow-hidden treatment, same gradient overlay at opacity-60, with a caption "Private Receptions · Members Only" in the same style.
- Change the gap between elements in the right column from gap-10 to gap-8.

---

BUILT FOR SECTION (BuiltForSection.tsx):
- Remove the old centered text-only layout and the nearly invisible background image (opacity 0.04).
- Restructure into a two-column flex layout (flex-col lg:flex-row, gap-16 lg:gap-20).
- LEFT COLUMN (lg:w-[440px] shrink-0): Wrap in ScrollReveal direction="left" delay={0.2}. Add a main image (luxury lounge interior, dark elegant modern) at h-[400px] lg:h-[480px] with rounded-sm overflow-hidden. Apply two gradient overlays: one from bottom (from-[#1a1414] via 0.2 to 0.1 transparency) and one from left (from rgba(26,20,20,0.3) to transparent).
- Add a floating accent card positioned absolute -bottom-6 -right-4 lg:-right-8: bg-[#1a1414] with Sandy Tone border (rgba(129,106,84,0.25)), padding 5, showing "190+" (number in white Cormorant Garamond 32px, "+" in Sandy Tone) and "Vetted Founders" label (Inter 8px, tracking 1.6px, uppercase, #4f4f4f).
- RIGHT COLUMN: Move all existing content (label, heading, divider, body text, tags) here, change text alignment to text-center lg:text-left, and update tag flex to justify-center lg:justify-start.

---

FRAMEWORK SECTION (FrameworkSection.tsx) — previously applied:
- Replace all three pillar card hover images:
  - "Influence" → luxury business conference stage speaker
  - "Knowledge" → executive private library dark moody
  - "Wealth" → luxury private dinner event elegant
- Normalize hover opacity: change the motion.div animate from { opacity: hovered ? 0.12 : 0 } to { opacity: hovered ? 1 : 0 }, and apply opacity-[0.15] directly on the ImageWithFallback className so all cards look identical on hover regardless of image brightness.
- Strengthen the gradient overlay: change via-[rgba(26,20,20,0.6)] to via-[rgba(26,20,20,0.7)] and to-[rgba(26,20,20,0.3)] to to-[rgba(26,20,20,0.4)].

---

TESTIMONIALS SECTION (TestimonialsSection.tsx):
- Add an import for ImageWithFallback.
- Wrap existing content in a relative container. Add an atmospheric background layer behind all content: a modern conference room / executive meeting image at opacity-[0.04], with a #1a1414 overlay at opacity-80. This adds subtle depth without competing with testimonial card content.
- Change the section className to include "relative" and "overflow-hidden".

---

NEW: VISUAL BREATHER (VisualBreather.tsx) — placed between Testimonials and Platform sections:
- Create a new component: a full-width cinematic image strip at h-[50vh] md:h-[60vh] with overflow-hidden.
- Background: luxury penthouse cityscape night view image using CSS background-attachment: fixed for a parallax effect on desktop. Add an ImageWithFallback as a mobile fallback (md:hidden) since background-attachment: fixed doesn't work on iOS.
- Two overlays: a gradient from-[#1a1414] via-transparent to-[#1a1414], plus a flat rgba(26,20,20,0.5) layer.
- Centered content: a ScrollReveal label row with decorative gradient lines flanking the text "Where Ambition Meets Infrastructure" (Inter 9px, tracking 3px, uppercase, Sandy Tone), followed by a ScrollReveal heading "Your Next Chapter Starts / in the Right Room." (Cormorant Garamond light 36px md:52px, white + italic Sandy Tone).
- Wire into HomePage.tsx between <TestimonialsSection /> and <PlatformSection />.

---

CTA SECTION (CtaSection.tsx):
- Add an import for ImageWithFallback.
- Add a background image layer behind the existing animated glow: a business partnership / professional handshake image at opacity-[0.08].
- Add an overlay div on top of the image with radial-gradient (Sandy Tone at 0.08 opacity, centered) plus linear-gradient (from rgba(26,20,20,0.85) to rgba(26,20,20,0.95)) to keep text fully legible while adding warmth and depth.