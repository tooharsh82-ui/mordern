import { useEffect, useState } from "react";
import { TESTIMONIALS_DATA } from "../data";
import { motion, AnimatePresence } from "motion/react";
import { Quote, ChevronLeft, ChevronRight } from "lucide-react";

export default function TestimonialsSection() {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [direction, setDirection] = useState(0); // -1 for left slide, 1 for right slide

  useEffect(() => {
    const timer = setInterval(() => {
      handleNext();
    }, 6000); // Transitions automatically every 6 seconds

    return () => clearInterval(timer);
  }, [currentIndex]);

  const handlePrev = () => {
    setDirection(-1);
    setCurrentIndex((prev) => (prev === 0 ? TESTIMONIALS_DATA.length - 1 : prev - 1));
  };

  const handleNext = () => {
    setDirection(1);
    setCurrentIndex((prev) => (prev === TESTIMONIALS_DATA.length - 1 ? 0 : prev + 1));
  };

  // Custom motion variants for slide animations to feel premium and buttery smooth
  const slideVariants = {
    enter: (dir: number) => ({
      x: dir > 0 ? "50%" : "-50%",
      opacity: 0,
    }),
    center: {
      x: 0,
      opacity: 1,
      transition: {
        x: { type: "spring", stiffness: 300, damping: 30 },
        opacity: { duration: 0.35 },
      },
    },
    exit: (dir: number) => ({
      x: dir < 0 ? "50%" : "-50%",
      opacity: 0,
      transition: {
        x: { type: "spring", stiffness: 300, damping: 30 },
        opacity: { duration: 0.35 },
      },
    }),
  };

  const activeTest = TESTIMONIALS_DATA[currentIndex];

  return (
    <section id="testimonials" className="relative bg-primary-bg py-24 md:py-36 px-6 overflow-hidden max-w-[1600px] mx-auto border-b border-border-el/50 select-none">
      
      {/* Background Decorative Graphic Grid Lines */}
      <div className="absolute inset-0 grid grid-cols-4 pointer-events-none z-0">
        <div className="border-r border-white/5 h-full" />
        <div className="border-r border-white/5 h-full" />
        <div className="border-r border-white/5 h-full" />
      </div>

      <div className="max-w-[1000px] mx-auto relative z-10 flex flex-col items-center text-center">
        
        {/* Section Header */}
        <div className="flex items-center gap-4 mb-16 border-b border-border-el pb-4 w-full justify-center">
          <span className="font-mono text-xs text-accent-blue tracking-widest uppercase">[ SECTION 06 ]</span>
          <h2 className="font-display text-4xl sm:text-5xl tracking-normal uppercase text-primary-txt">
            CLIENT ENDORSEMENTS
          </h2>
        </div>

        {/* Huge Luxury Citation SVG Marks */}
        <Quote size={80} className="text-white/5 font-bold mb-6 scale-y-[-1] transform shrink-0" />

        {/* Carousel Content Frame with Custom Height to prevent snapping layout jumps */}
        <div className="min-h-[280px] sm:min-h-[220px] w-full relative flex items-center justify-center overflow-hidden mb-10">
          <AnimatePresence custom={direction} mode="wait">
            <motion.div
              key={activeTest.id}
              custom={direction}
              variants={slideVariants}
              initial="enter"
              animate="center"
              exit="exit"
              className="absolute w-full px-4 flex flex-col items-center gap-6"
            >
              <h3 className="font-syne font-medium text-lg sm:text-2xl md:text-3xl text-primary-txt italic leading-relaxed max-w-4xl text-center">
                “{activeTest.quote}”
              </h3>

              {/* Author credentials block with small portrait */}
              <div className="flex items-center gap-4.5 mt-4">
                <div className="w-12 h-12 rounded-full overflow-hidden border border-border-el grayscale bg-neutral-900">
                  <img
                    src={activeTest.avatar}
                    alt={activeTest.author}
                    referrerPolicy="no-referrer"
                    className="w-full h-full object-cover"
                  />
                </div>
                <div className="text-left flex flex-col">
                  <span className="font-display text-lg uppercase tracking-wide text-primary-txt leading-none">
                    {activeTest.author}
                  </span>
                  <span className="font-mono text-[10px] text-accent-blue uppercase tracking-widest mt-1">
                    {activeTest.role} // {activeTest.company}
                  </span>
                </div>
              </div>
            </motion.div>
          </AnimatePresence>
        </div>

        {/* Interactive Controls pill */}
        <div className="flex items-center gap-6 mt-4">
          
          <button
            onClick={handlePrev}
            className="w-12 h-12 rounded-full border border-border-el hover:border-accent-blue flex items-center justify-center text-secondary-txt hover:text-primary-txt hover:bg-white/5 transition-all cursor-pointer"
            aria-label="Previous quote"
          >
            <ChevronLeft size={18} />
          </button>

          {/* Pagination Indicators dot track */}
          <div className="flex items-center gap-2">
            {TESTIMONIALS_DATA.map((_, idx) => (
              <button
                key={idx}
                onClick={() => {
                  setDirection(idx > currentIndex ? 1 : -1);
                  setCurrentIndex(idx);
                }}
                className={`h-1.5 rounded-full transition-all duration-300 cursor-pointer ${
                  currentIndex === idx ? "w-8 bg-accent-blue" : "w-1.5 bg-neutral-800"
                }`}
                aria-label={`Go to slide ${idx + 1}`}
              />
            ))}
          </div>

          <button
            onClick={handleNext}
            className="w-12 h-12 rounded-full border border-border-el hover:border-accent-blue flex items-center justify-center text-secondary-txt hover:text-primary-txt hover:bg-white/5 transition-all cursor-pointer"
            aria-label="Next quote"
          >
            <ChevronRight size={18} />
          </button>

        </div>

      </div>
    </section>
  );
}
