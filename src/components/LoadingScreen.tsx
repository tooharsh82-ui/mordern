import { useEffect, useState } from "react";
import { motion, AnimatePresence } from "motion/react";

interface LoadingScreenProps {
  onComplete: () => void;
}

export default function LoadingScreen({ onComplete }: LoadingScreenProps) {
  const [progress, setProgress] = useState(0);
  const [isDone, setIsDone] = useState(false);

  useEffect(() => {
    // Elegant logarithmic speed for preloader loading to feel premium
    let current = 0;
    const interval = setInterval(() => {
      const increment = Math.floor(Math.random() * 15) + 3;
      current = Math.min(current + increment, 100);
      setProgress(current);

      if (current >= 100) {
        clearInterval(interval);
        setTimeout(() => {
          setIsDone(true);
          setTimeout(() => {
            onComplete();
          }, 800); // Wait for the exit curtain slide to finish
        }, 500);
      }
    }, 45);

    return () => clearInterval(interval);
  }, [onComplete]);

  return (
    <AnimatePresence>
      {!isDone && (
        <motion.div
          id="loading-container"
          initial={{ opacity: 1 }}
          exit={{ y: "-100%", transition: { duration: 0.8, ease: [0.76, 0, 0.24, 1] } }}
          className="fixed inset-0 bg-primary-bg z-[10000] flex flex-col justify-between p-8 md:p-16 select-none"
        >
          {/* Noise effect */}
          <div className="noise-overlay opacity-[0.03]" />

          {/* Top Line */}
          <div className="flex justify-between items-center text-xs font-mono tracking-widest text-muted-txt uppercase">
            <span>BRIGITTE SCHWARTZ</span>
            <span>ISSUE 2026 // VOLUME I</span>
          </div>

          {/* Center Title and Visual */}
          <div className="flex flex-col items-center justify-center my-auto">
            <motion.div
              initial={{ letterSpacing: "0.1em", opacity: 0 }}
              animate={{ letterSpacing: "0.25em", opacity: 1 }}
              transition={{ duration: 1 }}
              className="text-center font-display font-medium text-4xl sm:text-6xl md:text-8xl lg:text-9xl tracking-[0.25em] leading-none mb-4 text-primary-txt"
            >
              CREATIVE
            </motion.div>
            <motion.div
              initial={{ scale: 0.95, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              transition={{ delay: 0.2, duration: 1 }}
              className="text-center font-syne font-extrabold text-outline-white text-5xl sm:text-7xl md:text-9xl lg:text-[10rem] tracking-tight leading-none text-transparent"
            >
              PORTFOLIO
            </motion.div>
          </div>

          {/* Bottom Metatags and Percentage Count */}
          <div className="flex flex-col md:flex-row justify-between items-end md:items-center gap-6">
            <div className="flex flex-col uppercase font-mono text-[10px] text-muted-txt gap-1">
              <span>SYSTEM BOOTSTRAP: SUCCESS</span>
              <span>AESTHETIC LEVEL: EDITORIAL</span>
              <span>PARIS / ZURICH / STOCKHOLM</span>
            </div>

            <div className="flex items-baseline gap-2">
              <span className="font-mono text-xs text-muted-txt">LOADING</span>
              <span className="font-display text-8xl md:text-9xl font-semibold select-none leading-none w-[200px] text-right text-primary-txt">
                {String(progress).padStart(3, "0")}
              </span>
              <span className="font-mono text-sm text-accent-blue">%</span>
            </div>
          </div>

          {/* Dynamic Progress indicator bar along bottom border */}
          <div className="absolute bottom-0 left-0 h-[2px] bg-accent-blue transition-all duration-75" style={{ width: `${progress}%` }} />
        </motion.div>
      )}
    </AnimatePresence>
  );
}
