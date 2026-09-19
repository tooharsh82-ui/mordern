import { motion } from "motion/react";
import { ArrowDown, CornerRightDown, Layers, FileText } from "lucide-react";

interface HeroSectionProps {
  onExploreProjects: () => void;
  onContactMe: () => void;
}

export default function HeroSection({ onExploreProjects, onContactMe }: HeroSectionProps) {
  
  // Table of Contents pills mapping to section IDs or smooth-scrolling points
  const contextIndex = [
    { target: "about", label: "INTRODUCTION" },
    { target: "about", label: "ABOUT ME" },
    { target: "skills", label: "PERSONAL SKILL" },
    { target: "experience", label: "EXPERIENCE" },
    { target: "projects", label: "PROJECT PORTFOLIO" },
    { target: "testimonials", label: "CLIENT ENDORSEMENTS" },
    { target: "contact", label: "CONTACT" },
    { target: "incoming-ledger", label: "STUDIO LEDGER" },
  ];

  const handleScrollTo = (id: string) => {
    const el = document.getElementById(id);
    if (el) {
      el.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <section id="home" className="relative bg-primary-bg min-h-screen px-6 pt-32 pb-24 overflow-hidden max-w-[1600px] mx-auto flex flex-col justify-between border-b border-border-el/50 select-none">
      
      {/* Absolute Film Grain/Noise BG overlay scoped to Hero */}
      <div className="absolute inset-0 bg-radial-[circle_at_top_right] from-neutral-900/40 via-transparent to-transparent pointer-events-none" />

      {/* Decorative vertical coordinates label */}
      <div className="absolute left-6 top-1/3 -rotate-90 origin-left text-[9px] font-mono text-muted-txt tracking-[0.3em] uppercase hidden xl:block">
        GRID CODE SYSTEM // 54.9° N, 12.3° E // PARIS
      </div>

      {/* Hero Frame Header */}
      <div className="max-w-[1200px] mx-auto w-full flex justify-between items-start border-b border-border-el pb-6 mb-8 text-xs font-mono text-muted-txt uppercase">
        <div className="flex flex-col">
          <span>CREATIVE REGISTER</span>
          <span>ESTABLISHED 2026 // EDITION I</span>
        </div>
        <div className="flex flex-col text-right">
          <span>PORTFOLIO PLATFORM</span>
          <span>BRIGITTE SCHWARTZ</span>
        </div>
      </div>

      {/* MAIN STORYTELLING SPREAD (Hero visual and giant text) */}
      <div className="max-w-[1200px] mx-auto w-full grid grid-cols-1 lg:grid-cols-12 gap-8 items-center relative z-10 flex-grow py-8">
        
        {/* Left Side: Dramatic Typography */}
        <div className="lg:col-span-7 flex flex-col gap-6 relative order-2 lg:order-1">
          <div className="flex items-center gap-2 text-accent-blue font-mono text-xs tracking-widest uppercase">
            <Layers size={14} />
            <span>EXECUTIVE PRESENTATION</span>
          </div>

          <h1 className="flex flex-col font-display leading-[0.80] tracking-tighter uppercase font-black text-primary-txt">
            <span className="text-[5rem] sm:text-[8rem] md:text-[10rem] lg:text-[11rem] leading-none">
              CREATIVE
            </span>
            <span className="text-[5.5rem] sm:text-[9rem] md:text-[11.5rem] lg:text-[13rem] text-transparent text-outline-white pl-2 leading-none">
              PORTFOLIO
            </span>
          </h1>

          <div className="flex flex-col gap-4 mt-2 max-w-lg">
            <h2 className="font-syne font-semibold text-xl md:text-2xl text-accent-blue tracking-tight uppercase">
              Creative Director & Lead Developer
            </h2>
            <p className="font-sans text-secondary-txt text-base leading-relaxed font-light">
              “Creating digital experiences that people remember.” Unifying luxury boutique publication design with cutting-edge responsive systems.
            </p>
          </div>

          <div className="flex flex-wrap gap-4 mt-6">
            <button
              onClick={onExploreProjects}
              className="px-6 py-3 bg-white hover:bg-accent-blue text-primary-bg hover:text-primary-txt font-mono text-xs font-bold tracking-widest uppercase rounded-xl cursor-pointer transition-all duration-300 shadow-lg"
            >
              VIEW PORTFOLIO
            </button>
            <button
              onClick={onContactMe}
              className="px-6 py-3 border border-border-el hover:border-accent-blue bg-secondary-bg/50 text-primary-txt font-mono text-xs tracking-widest uppercase rounded-xl cursor-pointer transition-all duration-300"
            >
              INQUIRE DIRECT
            </button>
          </div>
        </div>

        {/* Right Side: Portrait Image with slight floating overlap action */}
        <div className="lg:col-span-5 flex justify-center relative order-1 lg:order-2">
          
          {/* Subtle decoration dots */}
          <div className="absolute -top-6 -left-6 font-mono text-[10px] text-muted-txt">
            [F/1.8 MODEL VIEW]
          </div>

          <motion.div
            initial={{ y: 20 }}
            animate={{ y: [0, -10, 0] }}
            transition={{ duration: 6, repeat: Infinity, ease: "easeInOut" }}
            className="w-[280px] sm:w-[350px] md:w-[400px] aspect-[3/4] rounded-2xl overflow-hidden filter grayscale contrast-[1.08] shadow-[0_20px_50px_rgba(0,0,0,0.8)] border border-border-el p-2 bg-secondary-bg"
          >
            <div className="w-full h-full rounded-xl overflow-hidden bg-neutral-950 relative">
              <img
                src="/src/assets/images/developer_portrait_1780204845319.png"
                alt="Portrait of Brigitte Schwartz"
                referrerPolicy="no-referrer"
                className="w-full h-full object-cover scale-102 hover:scale-105 transition-transform duration-1000 select-none"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/50 via-transparent to-transparent pointer-events-none" />
            </div>
          </motion.div>
        </div>

      </div>

      {/* FLOATED INDEX TABLE OF CONTENTS PANEL (Literal Mockup Replica) */}
      <div className="max-w-[1200px] mx-auto w-full mt-10 md:mt-16 border-t border-border-el/40 pt-10 relative z-10">
        
        <div className="flex items-center gap-3 mb-6 select-none">
          <CornerRightDown size={14} className="text-accent-blue" />
          <h3 className="font-display text-2xl tracking-wider text-primary-txt uppercase">
            TABLE OF CONTENTS
          </h3>
        </div>

        {/* Pill buttons conforming to mockup guidelines */}
        <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 gap-3">
          {contextIndex.map((indexItem, keyIdx) => (
            <button
              onClick={() => handleScrollTo(indexItem.target)}
              key={keyIdx}
              className="py-3 px-4 bg-secondary-bg/60 hover:bg-neutral-900 border border-border-el/60 hover:border-accent-blue rounded-full text-left text-[11px] font-mono tracking-widest text-secondary-txt hover:text-primary-txt transition-all duration-300 flex items-center justify-between group cursor-pointer"
            >
              <span>{indexItem.label}</span>
              <span className="text-[9px] text-muted-txt group-hover:text-accent-blue transition-colors">
                [0{keyIdx + 1}]
              </span>
            </button>
          ))}
        </div>

        <div className="flex flex-col md:flex-row justify-between items-start md:items-center mt-10 gap-4 text-muted-txt text-[10px] font-mono uppercase">
          <span>PARIS ART AND DIGIT DIRECTIVE CODE INDEX</span>
          <span className="flex items-center gap-1.5 animate-pulse text-accent-blue">
            <span className="w-2 h-2 rounded-full bg-accent-blue" />
            LIVE PRESENTATION ACTIVE
          </span>
        </div>

      </div>

    </section>
  );
}
