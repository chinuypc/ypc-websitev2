import { ScrollReveal } from "./ScrollReveal";
import { motion, useReducedMotion } from "motion/react";
import { useEffect, useRef, useState } from "react";
import phoneScreen from "@/assets/platform-phone.png";

const features = [
  {
    title: "Impact Index",
    desc: "See the financial value your network is generating in real time. Every introduction, referral, and deal tracked and attributed to your profile.",
  },
  {
    title: "Curated Dinners",
    desc: "AI-matched gatherings based on your industry, ambitions, and who you need to meet. Seating confirmed two days in advance.",
  },
  {
    title: "The Vault",
    desc: "On-demand access to a private library of founder-focused education built around the six pillars of scale.",
  },
  {
    title: "YP Concierge",
    desc: "24/7 travel desk with up to 50% off Emirates and Etihad business class, luxury hotel upgrades, and VIP arrival treatment.",
  },
  {
    title: "YP Nodes",
    desc: "Our members travel frequently so their network should follow them. Pop-up activations and curated introductions globally and at conferences.",
  },
];

const VISIBLE_COUNT = 3;
const SCROLL_SPEED = 30; // px per second

function InfiniteFeatureScroll() {
  const prefersReducedMotion = useReducedMotion();
  const [offset, setOffset] = useState(0);
  const [isPaused, setIsPaused] = useState(false);
  const [measured, setMeasured] = useState(false);
  const [itemHeights, setItemHeights] = useState<number[]>([]);
  const rafRef = useRef<number>(0);
  const lastTimeRef = useRef<number>(0);
  const innerRef = useRef<HTMLDivElement>(null);

  // Measure actual rendered item heights after first paint
  useEffect(() => {
    if (!innerRef.current || measured) return;
    const items = innerRef.current.querySelectorAll<HTMLElement>("[data-feature-item]");
    if (items.length === 0) return;
    // Only measure the first set (not the duplicates)
    const heights: number[] = [];
    for (let i = 0; i < features.length && i < items.length; i++) {
      heights.push(items[i].getBoundingClientRect().height);
    }
    setItemHeights(heights);
    setMeasured(true);
  }, [measured]);

  // Recalculate on resize
  useEffect(() => {
    const onResize = () => setMeasured(false);
    window.addEventListener("resize", onResize);
    return () => window.removeEventListener("resize", onResize);
  }, []);

  const totalHeight = itemHeights.reduce((sum, h) => sum + h, 0);
  const visibleHeight =
    itemHeights.length >= VISIBLE_COUNT
      ? itemHeights.slice(0, VISIBLE_COUNT).reduce((sum, h) => sum + h, 0)
      : 400; // fallback before measurement

  useEffect(() => {
    if (prefersReducedMotion || isPaused || !measured || totalHeight === 0) return;

    const tick = (time: number) => {
      if (lastTimeRef.current) {
        const delta = (time - lastTimeRef.current) / 1000;
        setOffset((prev) => {
          const next = prev + SCROLL_SPEED * delta;
          return next >= totalHeight ? next - totalHeight : next;
        });
      }
      lastTimeRef.current = time;
      rafRef.current = requestAnimationFrame(tick);
    };

    rafRef.current = requestAnimationFrame(tick);
    return () => {
      cancelAnimationFrame(rafRef.current);
      lastTimeRef.current = 0;
    };
  }, [prefersReducedMotion, isPaused, measured, totalHeight]);

  // Double the list for seamless wrapping
  const doubled = [...features, ...features];

  return (
    <div
      className="relative overflow-hidden max-w-[660px]"
      style={{ height: measured ? visibleHeight : "auto" }}
      onMouseEnter={() => setIsPaused(true)}
      onMouseLeave={() => setIsPaused(false)}
      onTouchStart={() => setIsPaused(true)}
      onTouchEnd={() => setIsPaused(false)}
      onFocus={() => setIsPaused(true)}
      onBlur={() => setIsPaused(false)}
      role="list"
      aria-label="Platform features"
    >
      {/* Top fade */}
      <div className="absolute top-0 left-0 right-0 h-6 bg-gradient-to-b from-[#1a1414] to-transparent z-10 pointer-events-none" />
      {/* Bottom fade */}
      <div className="absolute bottom-0 left-0 right-0 h-6 bg-gradient-to-t from-[#1a1414] to-transparent z-10 pointer-events-none" />

      <div
        ref={innerRef}
        style={{
          transform: measured ? `translateY(-${offset}px)` : undefined,
          willChange: measured ? "transform" : undefined,
        }}
      >
        {doubled.map((feature, i) => (
          <div
            key={`${feature.title}-${i}`}
            data-feature-item
            className="border-b border-[rgba(255,255,255,0.1)] py-5 sm:py-6"
            role="listitem"
          >
            <div className="flex items-start gap-3 sm:gap-4">
              <div className="w-1.5 h-1.5 rounded-sm bg-[#816a54] mt-1.5 shrink-0" />
              <div className="min-w-0">
                <p className="font-['Inter',sans-serif] font-semibold text-[12px] leading-[18px] tracking-[1.65px] uppercase text-[#fcfcfc] mb-1.5">
                  {feature.title}
                </p>
                <p className="font-['Inter',sans-serif] font-light text-[14px] leading-[24px] text-[#fcfcfc]">
                  {feature.desc}
                </p>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

export function PlatformSection() {
  return (
    <section className="py-16 md:py-24 px-6" aria-labelledby="platform-heading">
      <div className="max-w-[1200px] mx-auto flex flex-col lg:flex-row gap-16 lg:gap-24">
        {/* Left content */}
        <div className="flex-1">
          <ScrollReveal direction="up">
            <p className="font-['Inter',sans-serif] font-medium text-[12px] leading-[18px] tracking-[3px] uppercase text-[#A08567] mb-5">
              The Platform
            </p>
          </ScrollReveal>
          <ScrollReveal direction="up" delay={0.1}>
            <div className="mb-8">
              <h2 id="platform-heading" className="font-['Cormorant_Garamond',serif] font-light text-[28px] sm:text-[36px] md:text-[48px] leading-[1.1] text-[#fcfcfc]">
                One Platform.
                <span className="block italic text-[#A08567]">
                  Every Tool You Need to Scale.
                </span>
              </h2>
            </div>
          </ScrollReveal>
          <ScrollReveal direction="up" delay={0.15}>
            <p className="font-['Inter',sans-serif] font-light text-[14px] leading-[24px] text-[#fcfcfc] max-w-[560px] mb-10">
              The PioneerOS is the digital infrastructure behind your membership, built to manage your network, track your impact, and give you access to everything YP Club offers in one place.
            </p>
          </ScrollReveal>

          {/* Infinite scrolling feature list */}
          <ScrollReveal direction="up" delay={0.2}>
            <InfiniteFeatureScroll />
          </ScrollReveal>
        </div>

        {/* Right phone mockup */}
        <ScrollReveal direction="right" delay={0.3} className="hidden lg:block w-[440px] shrink-0">
          <motion.div
            initial={{ y: 40 }}
            whileInView={{ y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 1, ease: [0.25, 0.1, 0.25, 1] }}
            className="w-[375px] mx-auto rounded-[32px] overflow-hidden border border-[rgba(255,255,255,0.1)]"
          >
            <img
              src={phoneScreen}
              alt="PioneerOS member profile with Club Impact stats"
              className="block w-full h-auto"
            />
          </motion.div>
        </ScrollReveal>
      </div>
    </section>
  );
}