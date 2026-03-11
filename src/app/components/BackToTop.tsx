import { useState, useEffect } from "react";
import { ArrowUp } from "lucide-react";
import { motion, AnimatePresence } from "motion/react";

export function BackToTop() {
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      const scrollPercent =
        window.scrollY /
        (document.documentElement.scrollHeight - window.innerHeight);
      setVisible(scrollPercent >= 0.4);
    };
    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  return (
    <AnimatePresence>
      {visible && (
        <motion.button
          onClick={scrollToTop}
          aria-label="Scroll to top"
          className="fixed bottom-8 right-8 z-50 size-[44px] rounded-full bg-[rgba(26,20,20,0.6)] border border-[rgba(160,133,103,0.3)] flex items-center justify-center backdrop-blur-xl shadow-[0_8px_32px_rgba(0,0,0,0.4)] hover:bg-[rgba(26,20,20,0.8)] hover:border-[rgba(160,133,103,0.5)] transition-colors outline-none focus-visible:ring-2 focus-visible:ring-[#A08567]"
          style={{
            WebkitBackdropFilter: "blur(20px) saturate(180%)",
            backdropFilter: "blur(20px) saturate(180%)",
          }}
          initial={{ opacity: 0, y: 20, scale: 0.8 }}
          animate={{ opacity: 1, y: 0, scale: 1 }}
          exit={{ opacity: 0, y: 20, scale: 0.8 }}
          transition={{ duration: 0.35, ease: [0.25, 0.1, 0.25, 1] }}
        >
          <ArrowUp size={18} className="text-[#A08567]" />
        </motion.button>
      )}
    </AnimatePresence>
  );
}
