import { useState } from "react";
import { EXPERIENCE_DATA } from "../data";
import { motion, AnimatePresence } from "motion/react";
import { Briefcase, Calendar, MapPin, ChevronDown, Award } from "lucide-react";

export default function ExperienceSection() {
  const [expandedId, setExpandedId] = useState<string | null>("exp-1"); // First expanded by default

  const toggleExpand = (id: string) => {
    setExpandedId(expandedId === id ? null : id);
  };

  return (
    <section id="experience" className="relative bg-primary-bg py-24 md:py-36 px-6 overflow-hidden max-w-[1600px] mx-auto border-b border-border-el/50">
      
      {/* Decorative Oversized Watermark */}
      <div className="absolute right-[5%] top-[-5%] font-display text-[15rem] md:text-[23rem] font-bold text-neutral-950 select-none pointer-events-none tracking-tighter leading-none opacity-40 z-0">
        JOURNEY
      </div>

      <div className="max-w-[1200px] mx-auto relative z-10">
        
        {/* Section Header */}
        <div className="flex items-center gap-4 mb-16 border-b border-border-el pb-6">
          <span className="font-mono text-xs text-accent-blue tracking-widest uppercase">[ SECTION 04 ]</span>
          <h2 className="font-display text-4xl md:text-5xl tracking-normal uppercase text-primary-txt">
            CHRONOLOGICAL BULLETINS
          </h2>
        </div>

        {/* Timeline List */}
        <div className="flex flex-col relative border-l border-white/10 ml-4 md:ml-8 pl-6 md:pl-12 gap-8 md:gap-12">
          
          {EXPERIENCE_DATA.map((exp, idx) => {
            const isExpanded = expandedId === exp.id;

            return (
              <div key={exp.id} className="relative group">
                
                {/* Bullet node on timeline */}
                <div className={`absolute -left-[31px] md:-left-[55px] top-1 w-4 h-4 rounded-full border-2 bg-primary-bg transition-colors duration-300 ${
                  isExpanded ? "border-accent-blue bg-accent-blue" : "border-border-el group-hover:border-primary-txt"
                }`} />

                {/* Main Card */}
                <div className="bg-secondary-bg/40 border border-border-el rounded-2xl p-6 md:p-8 hover:border-white/20 transition-all duration-300">
                  
                  {/* Header info */}
                  <div
                    onClick={() => toggleExpand(exp.id)}
                    className="flex flex-col md:flex-row md:items-center justify-between gap-4 cursor-pointer select-none"
                  >
                    <div>
                      <div className="flex items-center gap-3 text-xs font-mono text-accent-blue tracking-widest uppercase mb-1">
                        <Briefcase size={12} />
                        <span>{exp.company}</span>
                      </div>
                      <h3 className="font-display text-2xl md:text-3xl text-primary-txt group-hover:text-accent-blue transition-colors uppercase leading-none">
                        {exp.role}
                      </h3>
                    </div>

                    <div className="flex items-center gap-4">
                      <div className="flex flex-col items-start md:items-end font-mono text-[10px] sm:text-xs text-muted-txt gap-1">
                        <span className="flex items-center gap-1">
                          <Calendar size={11} /> {exp.duration}
                        </span>
                        <span className="flex items-center gap-1">
                          <MapPin size={11} /> {exp.location}
                        </span>
                      </div>
                      
                      {/* Expand Chevron Icon */}
                      <motion.div
                        animate={{ rotate: isExpanded ? 180 : 0 }}
                        transition={{ duration: 0.2 }}
                        className="w-8 h-8 rounded-full border border-border-el flex items-center justify-center text-secondary-txt"
                      >
                        <ChevronDown size={14} />
                      </motion.div>
                    </div>
                  </div>

                  {/* Expandable Body */}
                  <AnimatePresence initial={false}>
                    {isExpanded && (
                      <motion.div
                        initial={{ height: 0, opacity: 0 }}
                        animate={{ height: "auto", opacity: 1 }}
                        exit={{ height: 0, opacity: 0 }}
                        transition={{ duration: 0.3 }}
                        className="overflow-hidden"
                      >
                        <div className="pt-6 mt-6 border-t border-white/5 flex flex-col gap-6">
                          
                          <p className="font-sans text-xs md:text-sm text-secondary-txt leading-relaxed font-light">
                            {exp.description}
                          </p>

                          <div>
                            <span className="font-mono text-[10px] text-muted-txt tracking-widest uppercase block mb-3">
                              CORE HONORS & ACCOMPLISHMENTS
                            </span>
                            <ul className="flex flex-col gap-2.5 pl-1.5">
                              {exp.achievements.map((item, idx_a) => (
                                <li key={idx_a} className="flex items-start gap-2.5 text-xs text-muted-txt font-sans">
                                  <Award size={14} className="text-accent-blue shrink-0 mt-0.5" />
                                  <span className="leading-normal">{item}</span>
                                </li>
                              ))}
                            </ul>
                          </div>

                        </div>
                      </motion.div>
                    )}
                  </AnimatePresence>

                </div>

              </div>
            );
          })}

        </div>

      </div>
    </section>
  );
}
