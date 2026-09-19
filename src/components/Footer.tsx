import { ArrowUp, CreativeCommons } from "lucide-react";

export default function Footer() {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  return (
    <footer id="footer" className="relative bg-primary-bg py-16 px-6 border-t border-border-el/40 select-none">
      <div className="max-w-[1200px] mx-auto flex flex-col md:flex-row items-center justify-between gap-8">
        
        {/* Left trademark lines */}
        <div className="flex flex-col gap-1.5 text-center md:text-left">
          <h4 className="font-display text-2xl tracking-wide uppercase text-primary-txt">
            BRIGITTE SCHWARTZ // CREATIVE LEAGUE
          </h4>
          <span className="font-mono text-[10px] text-muted-txt tracking-widest uppercase">
            © 2026 BRIGITTE SCHWARTZ. ALL INTELLECTUAL CODES PROTECTED.
          </span>
        </div>

        {/* Center motto */}
        <span className="font-serif italic text-base text-secondary-txt text-center">
          "Crafted with Absolute Creativity & Rigid Precision"
        </span>

        {/* Right circular active trigger to top */}
        <button
          onClick={scrollToTop}
          className="w-12 h-12 rounded-full border border-border-el hover:border-accent-blue hover:bg-white/5 text-primary-txt flex items-center justify-center cursor-pointer group transition-all duration-300"
          aria-label="Back to top of page"
        >
          <ArrowUp size={16} className="group-hover:-translate-y-1 transition-transform" />
        </button>

      </div>
    </footer>
  );
}
