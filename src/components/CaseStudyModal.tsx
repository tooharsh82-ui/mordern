import { Project } from "../types";
import { motion } from "motion/react";
import { X, Globe, User, ShieldCheck, ArrowUpRight } from "lucide-react";

interface CaseStudyModalProps {
  project: Project;
  onClose: () => void;
}

export default function CaseStudyModal({ project, onClose }: CaseStudyModalProps) {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      className="fixed inset-0 bg-primary-bg z-[1100] overflow-y-auto"
    >
      {/* Absolute Noise BG Layer */}
      <div className="noise-overlay opacity-[0.03] z-0" />

      {/* Floating Close Header Bar */}
      <div className="sticky top-0 bg-primary-bg/85 backdrop-blur-md border-b border-border-el z-50 px-6 py-4 flex justify-between items-center select-none">
        <div className="flex items-center gap-4">
          <span className="font-mono text-[10px] text-accent-blue tracking-widest uppercase border border-accent-blue/30 px-2 py-0.5 rounded-full">
            Case Study
          </span>
          <span className="font-mono text-xs text-muted-txt uppercase hidden sm:inline">
            // {project.name}
          </span>
        </div>
        
        <button
          onClick={onClose}
          className="flex items-center gap-2 font-mono text-xs text-secondary-txt hover:text-accent-blue cursor-pointer group"
          id="close-casestudy"
        >
          <span>CLOSE SPREAD</span>
          <span className="w-8 h-8 rounded-full border border-border-el flex items-center justify-center group-hover:bg-white/5 transition-all">
            <X size={14} />
          </span>
        </button>
      </div>

      {/* Main Container */}
      <div className="max-w-[1200px] mx-auto px-6 py-12 md:py-24 relative z-10 flex flex-col gap-12 sm:gap-20">
        
        {/* Editorial Title Block */}
        <div className="flex flex-col gap-4 border-b border-white/5 pb-10">
          <div className="flex justify-between text-muted-txt font-mono text-[11px] uppercase tracking-wider">
            <span>CLIENT: {project.details.client}</span>
            <span>YEAR: {project.year}</span>
          </div>

          <h1 className="font-display text-5xl sm:text-7xl md:text-9xl leading-none font-bold uppercase tracking-tight text-primary-txt">
            {project.name}
          </h1>

          <p className="font-syne text-xl sm:text-2xl md:text-3xl font-bold text-accent-blue max-w-4xl leading-tight mt-4">
            {project.tagline}
          </p>
        </div>

        {/* Hero Cutout Showcase Layout */}
        <div className="relative h-[250px] sm:h-[400px] md:h-[550px] w-full filter grayscale overflow-hidden rounded-2xl border border-border-el">
          <img
            src={project.thumbnail}
            alt={project.name}
            referrerPolicy="no-referrer"
            className="w-full h-full object-cover scale-105 hover:scale-100 transition-transform duration-1000"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-primary-bg via-transparent to-transparent opacity-80" />
        </div>

        {/* 2-Column Detail Panel Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 border-b border-white/5 pb-12">
          
          {/* Metadata Sidebar (Col: 4) */}
          <div className="lg:col-span-4 flex flex-col gap-8">
            <div className="bg-secondary-bg/60 p-6 rounded-2xl border border-border-el flex flex-col gap-6">
              
              <div className="flex flex-col gap-1">
                <span className="font-mono text-[10px] text-muted-txt uppercase tracking-widest">
                  MY ROLE
                </span>
                <span className="font-sans font-medium text-primary-txt text-sm">
                  {project.details.role}
                </span>
              </div>

              <div className="flex flex-col gap-1">
                <span className="font-mono text-[10px] text-muted-txt uppercase tracking-widest">
                  SERVICES RENDERED
                </span>
                <div className="flex flex-wrap gap-1.5 mt-1.5">
                  {project.details.services.map((serv, idx) => (
                    <span key={idx} className="bg-primary-bg px-2.5 py-1 border border-border-el rounded-full text-[10px] font-mono tracking-widest text-secondary-txt uppercase">
                      {serv}
                    </span>
                  ))}
                </div>
              </div>

              <div className="flex flex-col gap-1">
                <span className="font-mono text-[10px] text-muted-txt uppercase tracking-widest">
                  TECHNOLOGY BULLETS
                </span>
                <div className="flex flex-wrap gap-1.5 mt-1.5">
                  {project.technologies.map((t, idx) => (
                    <span key={idx} className="bg-neutral-900 px-2.5 py-1 border border-white/5 rounded-full text-[10px] font-mono tracking-widest text-accent-blue uppercase">
                      {t}
                    </span>
                  ))}
                </div>
              </div>

            </div>

            {/* Simulated Results Spotlight */}
            <div className="bg-neutral-950 p-6 rounded-2xl border border-border-el flex flex-col gap-3">
              <div className="flex items-center gap-2">
                <ShieldCheck size={16} className="text-accent-blue" />
                <span className="font-mono text-[10px] tracking-widest uppercase text-primary-txt font-semibold">
                  METRICS SPOTLIGHT
                </span>
              </div>
              <p className="font-sans text-xs text-secondary-txt leading-relaxed">
                {project.results}
              </p>
            </div>
          </div>

          {/* Narrative Main Columns (Col: 8) */}
          <div className="lg:col-span-8 flex flex-col gap-12">
            
            {/* CHALLENGE */}
            <div className="flex flex-col gap-3">
              <span className="font-mono text-xs text-accent-blue tracking-widest uppercase">
                [ 01 / THE CHALLENGE ]
              </span>
              <h2 className="font-display text-3xl text-primary-txt uppercase">
                The Creative Disruption
              </h2>
              <p className="font-sans text-secondary-txt text-sm md:text-base leading-relaxed">
                {project.caseStudy.challenge}
              </p>
            </div>

            {/* RESEARCH */}
            <div className="flex flex-col gap-3">
              <span className="font-mono text-xs text-accent-blue tracking-widest uppercase">
                [ 02 / EXPLORATIVE RESEARCH ]
              </span>
              <h2 className="font-display text-3xl text-primary-txt uppercase">
                The Geometric Baseline
              </h2>
              <p className="font-sans text-secondary-txt text-sm md:text-base leading-relaxed">
                {project.caseStudy.research}
              </p>
            </div>

            {/* PROCESS */}
            <div className="flex flex-col gap-3">
              <span className="font-mono text-xs text-accent-blue tracking-widest uppercase">
                [ 03 / RIGOROUS PROCESS ]
              </span>
              <h2 className="font-display text-3xl text-primary-txt uppercase">
                Architectural Prototypes
              </h2>
              <p className="font-sans text-secondary-txt text-sm md:text-base leading-relaxed">
                {project.caseStudy.process}
              </p>
            </div>

            {/* SOLUTION */}
            <div className="flex flex-col gap-3">
              <span className="font-mono text-xs text-accent-blue tracking-widest uppercase">
                [ 04 / EXQUISITE SOLUTION ]
              </span>
              <h2 className="font-display text-3xl text-primary-txt uppercase">
                Fine Digital Precision
              </h2>
              <p className="font-sans text-secondary-txt text-sm md:text-base leading-relaxed">
                {project.caseStudy.solution}
              </p>
            </div>

            {/* OUTCOME */}
            <div className="flex flex-col gap-3">
              <span className="font-mono text-xs text-accent-blue tracking-widest uppercase">
                [ 05 / FINAL OUTCOME ]
              </span>
              <h2 className="font-display text-3xl text-primary-txt uppercase">
                Lasting Memory Footprint
              </h2>
              <p className="font-sans text-secondary-txt text-sm md:text-base leading-relaxed">
                {project.caseStudy.outcome}
              </p>
            </div>

          </div>

        </div>

        {/* Footer Navigation Overlay Actions */}
        <div className="flex justify-between items-center gap-4 bg-secondary-bg p-8 rounded-2xl border border-border-el select-none">
          <div className="flex flex-col">
            <span className="font-mono text-[10px] text-muted-txt uppercase">
              RECRUITMENT INTEREST?
            </span>
            <span className="font-syne font-bold text-lg text-primary-txt uppercase">
              Schedule Case Review
            </span>
          </div>

          <button
            onClick={() => {
              onClose();
              const contactEl = document.getElementById("contact");
              if (contactEl) {
                contactEl.scrollIntoView({ behavior: "smooth" });
              }
            }}
            className="px-6 py-3 bg-primary-bg hover:bg-accent-blue border border-border-el text-xs font-mono tracking-widest text-primary-txt uppercase rounded-full cursor-pointer flex items-center gap-2 transition-all duration-300"
          >
            <span>Inquire Project</span>
            <ArrowUpRight size={14} />
          </button>
        </div>

      </div>
    </motion.div>
  );
}
