import { motion } from "motion/react";
import { Award, Eye, Compass, Zap } from "lucide-react";

export default function AboutSection() {
  const stats = [
    { value: "08+", label: "Years Creative Direction" },
    { value: "95+", label: "Completed Designs" },
    { value: "14", label: "Awwwards / CSS DA Honors" },
    { value: "100%", label: "Extreme Code Quality" },
  ];

  const pillars = [
    {
      icon: <Eye size={20} className="text-accent-blue" />,
      title: "Tactile Typography",
      desc: "Typography is not just language; it is a weight, a texture, and a presence. We construct rigorous alignment grids to command tension and space."
    },
    {
      icon: <Compass size={20} className="text-accent-blue" />,
      title: "Artistic Authority",
      desc: "Discarding generic presets in favor of structural clarity. High-end editorial storytelling translates business values into digital status."
    },
    {
      icon: <Zap size={20} className="text-accent-blue" />,
      title: "Meticulous Execution",
      desc: "Visual perfection is nothing without technical speed. Our layouts maintain strict pixel alignment while achieving top page-speed compliance."
    }
  ];

  return (
    <section id="about" className="relative bg-primary-bg py-24 md:py-36 px-6 overflow-hidden max-w-[1600px] mx-auto border-b border-border-el/50">
      
      {/* Massive Decorative Typography Watermark */}
      <div className="absolute right-[5%] bottom-[-5%] font-display text-[15rem] md:text-[24rem] font-bold text-neutral-950 select-none pointer-events-none tracking-tighter leading-none opacity-40 z-0">
        ABOUT
      </div>

      <div className="max-w-[1200px] mx-auto relative z-10">
        
        {/* Section Header Label */}
        <div className="flex items-center gap-4 mb-12 border-b border-border-el pb-6">
          <span className="font-mono text-xs text-accent-blue tracking-widest uppercase">[ SECTION 02 ]</span>
          <h2 className="font-display text-4xl md:text-5xl tracking-normal uppercase text-primary-txt">
            THE CREATIVE INTENT
          </h2>
        </div>

        {/* Two Column Editorial Layout */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-start">
          
          {/* Left Column: Vision Statement */}
          <div className="lg:col-span-7 flex flex-col gap-6">
            <h3 className="font-syne font-extrabold text-2xl md:text-4xl leading-tight tracking-tight text-primary-txt">
              “WE DO NOT SIMPLY DESIGN SPREADS; WE ARCHITECT DIGITAL SYSTEMS THAT PERSIST IN MEMORY.”
            </h3>
            
            <p className="font-sans text-secondary-txt text-base md:text-lg leading-relaxed font-light">
              Hello, I am Brigitte Schwartz—an award-winning Senior UI/UX Creative Director and 
              Developer operating at the tight intersection of high-concept brand publishing and 
              advanced front-end layouts. Based in Paris with continuous collaborations across 
              Zurich and Stockholm.
            </p>

            <p className="font-sans text-muted-txt text-sm md:text-base leading-relaxed">
              I believe modern design has drifted toward lazy modular standardization—resulting in 
              identical client cards and boring grids. My purpose is to synthesize the tactile layouts 
              of luxury printing and high-contrast art books with cutting-edge layouts. What emerges is 
              not just a normal interface, but an elite corporate asset.
            </p>

            {/* Signature Block */}
            <div className="mt-6">
              <span className="font-mono text-xs text-muted-txt block tracking-widest uppercase">
                AUTHENTIC MANIFESTO
              </span>
              <span className="font-serif italic text-3xl text-primary-txt/90 font-light tracking-wide mt-2 block select-none">
                Brigitte Schwartz
              </span>
            </div>
          </div>

          {/* Right Column: Creative Pillars */}
          <div className="lg:col-span-5 flex flex-col gap-8 bg-secondary-bg/50 border border-border-el p-8 rounded-2xl backdrop-blur-sm">
            <h4 className="font-display text-2xl tracking-wider text-primary-txt uppercase border-b border-border-el/40 pb-3">
              DESIGN PILLARS
            </h4>
            
            <div className="flex flex-col gap-6">
              {pillars.map((p, idx) => (
                <div key={idx} className="flex flex-col gap-2 group">
                  <div className="flex items-center gap-3">
                    {p.icon}
                    <h5 className="font-mono text-sm tracking-wider uppercase font-medium text-primary-txt group-hover:text-accent-blue transition-colors">
                      {p.title}
                    </h5>
                  </div>
                  <p className="font-sans text-xs text-secondary-txt leading-relaxed pl-8">
                    {p.desc}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Stats Grid under editorial layout */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-6 mt-16 md:mt-24 border-t border-border-el pt-12">
          {stats.map((stat, index) => (
            <div key={index} className="flex flex-col">
              <span className="font-display text-5xl md:text-6xl font-bold tracking-tight text-primary-txt">
                {stat.value}
              </span>
              <span className="font-mono text-[10px] md:text-xs text-muted-txt tracking-widest uppercase mt-2">
                {stat.label}
              </span>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
}
