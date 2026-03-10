import { ScrollReveal } from "./ScrollReveal";
import { motion, useMotionValue, useTransform, animate, useReducedMotion } from "motion/react";
import { useEffect, useRef, useState } from "react";

function AnimatedNumber({ value, suffix = "" }: { value: string; suffix?: string }) {
  const num = parseInt(value.replace(/[^0-9]/g, ""));
  const isNumeric = !isNaN(num) && value.match(/^\d+$/);
  const [hasAnimated, setHasAnimated] = useState(false);
  const ref = useRef<HTMLParagraphElement>(null);
  const motionVal = useMotionValue(0);
  const rounded = useTransform(motionVal, (v) => Math.round(v));
  const prefersReducedMotion = useReducedMotion();

  useEffect(() => {
    if (prefersReducedMotion && isNumeric) {
      motionVal.set(num);
      setHasAnimated(true);
      return;
    }
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting && !hasAnimated && isNumeric) {
          animate(motionVal, num, { duration: 2, ease: [0.25, 0.1, 0.25, 1] });
          setHasAnimated(true);
        }
      },
      { threshold: 0.5 }
    );
    if (ref.current) observer.observe(ref.current);
    return () => observer.disconnect();
  }, [hasAnimated, isNumeric, motionVal, num]);

  if (!isNumeric) {
    return (
      <span className="font-['Cormorant_Garamond',serif] font-light text-[36px] leading-[36px] text-[#fcfcfc] text-center block" role="presentation">
        {value}{suffix}
      </span>
    );
  }

  return (
    <span ref={ref} className="font-['Cormorant_Garamond',serif] font-light text-[36px] leading-[36px] text-[#fcfcfc] text-center block" role="presentation">
      <motion.span>{rounded}</motion.span>{suffix}
    </span>
  );
}

const stats = [
  { value: "$12M+", label: "Deals Facilitated" },
  { value: "48+", label: "Private Events Yearly" },
  { value: "30+", label: "Industries Represented" },
];

export function StatsBar() {
  return (
    <section className="bg-[#1a1414] border-t border-b border-[rgba(255,255,255,0.1)]" aria-label="Key statistics — over 12 million in deals facilitated, 48 plus private events yearly, 30 plus industries represented">
      <div className="max-w-[1200px] mx-auto flex flex-col md:flex-row items-center justify-center py-6 md:py-8 px-6">
        {stats.map((stat, i) => (
          <ScrollReveal key={stat.label} direction="up" delay={i * 0.15}>
            <div className="flex items-center">
              <div className="flex flex-col items-center px-12 py-4 md:py-0">
                <AnimatedNumber value={stat.value} />
                <p className="font-['Inter',sans-serif] font-medium text-[12px] leading-[18px] tracking-[2px] uppercase text-[#878787] text-center mt-1.5">
                  {stat.label}
                </p>
              </div>
              {i < stats.length - 1 && (
                <div className="hidden md:block w-px h-10 bg-[rgba(255,255,255,0.1)]" />
              )}
            </div>
          </ScrollReveal>
        ))}
      </div>
    </section>
  );
}