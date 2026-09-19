import { useState } from "react";
import { SKILLS_DATA } from "../data";
import { motion } from "motion/react";
import { Cpu, CheckCircle2, ChevronRight } from "lucide-react";

export default function SkillsSection() {
  const [hoveredSkill, setHoveredSkill] = useState<{ categoryIdx: number; skillIdx: number } | null>(null);

  return (
    <section id="skills" className="relative bg-secondary-bg py-24 md:py-36 px-6 overflow-hidden max-w-[1600px] mx-auto border-b border-border-el/50">
      
      {/* Decorative Oversized Watermark */}
      <div className="absolute left-[5%] top-[-5%] font-display text-[15rem] md:text-[24rem] font-bold text-black select-none pointer-events-none tracking-tighter leading-none opacity-40 z-0">
        SKILLS
      </div>

      <div className="max-w-[1200px] mx-auto relative z-10">
        
        {/* Section Header */}
        <div className="flex items-center gap-4 mb-12 border-b border-border-el pb-6">
          <span className="font-mono text-xs text-accent-blue tracking-widest uppercase">[ SECTION 03 ]</span>
          <h2 className="font-display text-4xl md:text-5xl tracking-normal uppercase text-primary-txt">
            COGNITIVE STACK
          </h2>
        </div>

        {/* Introduction text in columns */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-16">
          <h3 className="font-syne font-semibold text-2xl md:text-3xl text-primary-txt leading-relaxed">
            SYNTHESIZING THE RIGOR OF SYSTEMATIC CODE WITH PURE CHROME MINIMAL AESTHETICS.
          </h3>
          <p className="font-sans text-xs sm:text-sm text-secondary-txt leading-relaxed md:pt-2">
            My skill set represents a comprehensive toolkit refined in high-end design consultancies. 
            By merging graphic layout expertise with native low-overhead TypeScript architectures, I 
            eliminate standard engineering hand-off distortion. Hover over each core capability 
            to review proficiency weights and detail capsules.
          </p>
        </div>

        {/* Categories Layout */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-10">
          
          {SKILLS_DATA.map((category, catIdx) => (
            <div
              key={catIdx}
              className="bg-primary-bg/70 border border-border-el rounded-2xl p-8 backdrop-blur-sm flex flex-col justify-between"
            >
              <div>
                <div className="flex items-center gap-3 mb-6 pb-4 border-b border-white/5">
                  <Cpu size={18} className="text-accent-blue" />
                  <h4 className="font-mono text-xs tracking-widest uppercase text-primary-txt font-semibold">
                    {category.title}
                  </h4>
                </div>

                {/* Skills Interactive Capsules & meters */}
                <div className="flex flex-col gap-6">
                  {category.skills.map((skill, skillIdx) => {
                    const isCurrentHovered = hoveredSkill?.categoryIdx === catIdx && hoveredSkill?.skillIdx === skillIdx;
                    
                    return (
                      <div
                        key={skillIdx}
                        onMouseEnter={() => setHoveredSkill({ categoryIdx: catIdx, skillIdx: skillIdx })}
                        onMouseLeave={() => setHoveredSkill(null)}
                        className="cursor-pointer group"
                      >
                        <div className="flex justify-between items-center mb-2">
                          <span className="font-display text-lg md:text-xl tracking-wider text-secondary-txt group-hover:text-primary-txt transition-colors flex items-center gap-2">
                            <ChevronRight size={14} className="text-accent-blue opacity-0 group-hover:opacity-100 transition-opacity" />
                            {skill.name}
                          </span>
                          <span className="font-mono text-xs font-semibold text-accent-blue">
                            {skill.proficiency}%
                          </span>
                        </div>

                        {/* Custom Outlined Pill Meter */}
                        <div className="h-1.5 w-full bg-neutral-900 rounded-full overflow-hidden border border-white/5 relative">
                          <motion.div
                            initial={{ width: 0 }}
                            whileInView={{ width: `${skill.proficiency}%` }}
                            viewport={{ once: true }}
                            transition={{ duration: 1, ease: "easeOut" }}
                            className="absolute h-full bg-primary-txt group-hover:bg-accent-blue transition-colors rounded-full"
                          />
                        </div>
                      </div>
                    );
                  })}
                </div>
              </div>

              {/* Detail capsules previewer at the bottom for polished feedback */}
              <div className="mt-8 pt-4 border-t border-white/5 min-h-[50px] flex items-center">
                <p className="font-sans text-[11px] text-muted-txt leading-relaxed">
                  {catIdx === 0 
                    ? "* Engineered utilizing clean component separation, memory management, and high-performance layout bindings."
                    : "* Orchestrated under strict Parisian and Scandinavian design specs focusing on pixel metrics and strict styling rules."}
                </p>
              </div>

            </div>
          ))}

        </div>

        {/* Additional Capsule List at bottom */}
        <div className="mt-12 flex flex-wrap justify-center gap-2">
          {["Tailwind CSS", "Vite", "WebGL shaders", "Three.js", "Framer Motion", "TypeScript", "UI/UX Design", "Figma Design Tokens", "Advanced Prototyping", "Awwwards Best Practices", "Git", "SEO Optimization"].map((tag, idx) => (
            <span
              key={idx}
              className="px-4 py-1.5 bg-primary-bg hover:bg-neutral-900 border border-border-el text-[10px] md:text-xs font-mono tracking-widest text-secondary-txt uppercase rounded-full cursor-default transition-all duration-300 hover:border-accent-blue hover:text-primary-txt"
            >
              {tag}
            </span>
          ))}
        </div>

      </div>
    </section>
  );
}
