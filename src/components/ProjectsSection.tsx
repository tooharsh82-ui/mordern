import { useState } from "react";
import { PROJECTS_DATA } from "../data";
import { Project } from "../types";
import { motion, AnimatePresence } from "motion/react";
import CaseStudyModal from "./CaseStudyModal";
import { ArrowUpRight, Filter, Grid3X3 } from "lucide-react";

export default function ProjectsSection() {
  const [selectedCategory, setSelectedCategory] = useState<string>("All");
  const [activeProject, setActiveProject] = useState<Project | null>(null);

  const categories = ["All", "Web Design", "Branding", "UI Design", "Development", "Motion Graphics"];

  const filteredProjects = selectedCategory === "All"
    ? PROJECTS_DATA
    : PROJECTS_DATA.filter(project => project.category.toLowerCase() === selectedCategory.toLowerCase());

  return (
    <section id="projects" className="relative bg-secondary-bg py-24 md:py-36 px-6 overflow-hidden max-w-[1600px] mx-auto border-b border-border-el/50">
      
      {/* Decorative Oversized Typography */}
      <div className="absolute left-[3%] bottom-[5%] font-display text-[15rem] md:text-[24rem] font-bold text-black select-none pointer-events-none tracking-tighter leading-none opacity-40 z-0">
        GALLERY
      </div>

      <div className="max-w-[1200px] mx-auto relative z-10">
        
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-16 border-b border-border-el pb-8">
          <div>
            <div className="flex items-center gap-4 mb-3">
              <span className="font-mono text-xs text-accent-blue tracking-widest uppercase">[ SECTION 05 ]</span>
              <span className="font-mono text-xs text-muted-txt">// ACTIVE PORTFOLIO SPREADS</span>
            </div>
            <h2 className="font-display text-4xl sm:text-5xl md:text-6xl tracking-tight uppercase text-primary-txt">
              SELECTED ARTIFACTS
            </h2>
          </div>

          {/* Luxury Category Selection Pill Menu */}
          <div className="flex flex-wrap items-center gap-2 select-none">
            {categories.map((cat, idx) => (
              <button
                key={idx}
                onClick={() => setSelectedCategory(cat)}
                className={`px-4 py-1.5 rounded-full border text-[11px] font-mono uppercase tracking-widest transition-all duration-300 cursor-pointer ${
                  selectedCategory === cat
                    ? "bg-primary-txt text-primary-bg border-primary-txt shadow-lg"
                    : "bg-primary-bg text-secondary-txt border-border-el hover:border-accent-blue hover:text-primary-txt"
                }`}
              >
                {cat}
              </button>
            ))}
          </div>
        </div>

        {/* 12-Column Editorial Grid System / Masonry Layout */}
        <motion.div
          layout
          className="grid grid-cols-1 md:grid-cols-12 gap-8 md:gap-10"
        >
          <AnimatePresence mode="popLayout">
            {filteredProjects.map((project, index) => {
              // Custom responsive size configuration per project for dynamic high-fashion organic asymmetrical grid look!
              // Project index 0 = 7 cols, 1 = 5 cols, 2 = 5 cols, 3 = 7 cols, 4 = 12 cols
              const columnSpans = [
                "md:col-span-7", 
                "md:col-span-5", 
                "md:col-span-5", 
                "md:col-span-7", 
                "md:col-span-12"
              ];
              const gridSpan = columnSpans[index % columnSpans.length];

              return (
                <motion.div
                  layout
                  initial={{ opacity: 0, y: 40 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, scale: 0.95 }}
                  transition={{ duration: 0.6, ease: [0.215, 0.61, 0.355, 1] }}
                  key={project.id}
                  className={`${gridSpan} group cursor-pointer flex flex-col justify-between`}
                  onClick={() => setActiveProject(project)}
                >
                  <div className="bg-primary-bg border border-border-el hover:border-accent-blue rounded-2xl overflow-hidden transition-all duration-500 shadow-xl flex flex-col justify-end h-full relative">
                    
                    {/* Project Layout Top Tag Line */}
                    <div className="absolute top-6 left-6 right-6 flex justify-between items-center z-10 pointer-events-none">
                      <span className="font-mono text-[10px] bg-secondary-bg/80 backdrop-blur-md px-3 py-1 rounded-full text-accent-blue border border-white/5 uppercase tracking-wider">
                        {project.category}
                      </span>
                      <span className="font-mono text-xs text-primary-txt/60 font-semibold bg-secondary-bg/85 backdrop-blur-md px-3 py-1 rounded-full">
                        {project.year}
                      </span>
                    </div>

                    {/* Grayscale Visual cover that transitions completely on hover */}
                    <div className="aspect-[4/3] md:aspect-auto md:h-[420px] w-full overflow-hidden filter grayscale contrast-[1.10] group-hover:grayscale-0 transition-all duration-1000 relative">
                      <img
                        src={project.thumbnail}
                        alt={project.name}
                        referrerPolicy="no-referrer"
                        className="w-full h-full object-cover scale-102 group-hover:scale-108 transition-all duration-[1200ms] ease-out select-none"
                      />
                      {/* Gradient Vignette overlay */}
                      <div className="absolute inset-0 bg-gradient-to-t from-primary-bg via-transparent to-black/35 opacity-90" />
                    </div>

                    {/* Overlay project info */}
                    <div className="p-6 md:p-8 bg-gradient-to-t from-neutral-950 via-primary-bg/95 to-primary-bg/75 border-t border-white/5 relative z-10">
                      <div className="flex justify-between items-start gap-4">
                        <div className="flex flex-col gap-1.5">
                          <h3 className="font-display text-2xl sm:text-3xl lg:text-4xl hover:text-accent-blue text-primary-txt leading-none uppercase tracking-wide">
                            {project.name}
                          </h3>
                          <p className="font-sans text-xs text-secondary-txt font-light line-clamp-1">
                            {project.tagline}
                          </p>
                        </div>

                        {/* Top-Right Arrow trigger block */}
                        <div className="p-2.0 rounded-full bg-neutral-900 border border-white/10 text-primary-txt group-hover:bg-accent-blue group-hover:border-accent-blue transition-colors shrink-0">
                          <ArrowUpRight size={16} />
                        </div>
                      </div>

                      {/* Display brief tech lines on card */}
                      <div className="flex flex-wrap gap-1.5 mt-4 pt-4 border-t border-white/5">
                        {project.technologies.slice(0, 3).map((tech, tIdx) => (
                          <span key={tIdx} className="text-[9px] font-mono uppercase tracking-widest text-muted-txt">
                            • {tech}
                          </span>
                        ))}
                      </div>

                    </div>

                  </div>
                </motion.div>
              );
            })}
          </AnimatePresence>
        </motion.div>

        {/* Dynamic Fallback if no projects */}
        {filteredProjects.length === 0 && (
          <div className="flex flex-col items-center justify-center p-20 border border-dashed border-border-el/40 rounded-2xl">
            <span className="font-mono text-xs text-muted-txt mb-4">NO ALIGNED SPREADS FOUND</span>
            <button
              onClick={() => setSelectedCategory("All")}
              className="px-6 py-2 border border-border-el hover:border-accent-blue font-mono text-xs text-primary-txt uppercase rounded-full"
            >
              RESET FILTER
            </button>
          </div>
        )}

      </div>

      {/* Case Study Fullscreen Modal component loaded dynamically */}
      <AnimatePresence>
        {activeProject && (
          <CaseStudyModal
            project={activeProject}
            onClose={() => setActiveProject(null)}
          />
        )}
      </AnimatePresence>

    </section>
  );
}
