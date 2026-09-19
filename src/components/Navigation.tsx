import { useEffect, useState } from "react";
import { motion, AnimatePresence } from "motion/react";
import { Menu, X } from "lucide-react";

interface NavItem {
  id: string;
  label: string;
}

const NAV_ITEMS: NavItem[] = [
  { id: "home", label: "Home" },
  { id: "about", label: "About" },
  { id: "skills", label: "Skills" },
  { id: "experience", label: "Experience" },
  { id: "projects", label: "Projects" },
  { id: "testimonials", label: "Testimonials" },
  { id: "contact", label: "Contact" },
];

export default function Navigation() {
  const [activeSection, setActiveSection] = useState("home");
  const [scrollProgress, setScrollProgress] = useState(0);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  // Tracking page scroll progress and active intersection sections
  useEffect(() => {
    const handleScroll = () => {
      const scrollTop = window.scrollY;
      const docHeight = document.documentElement.scrollHeight - window.innerHeight;
      const progress = docHeight > 0 ? (scrollTop / docHeight) * 100 : 0;
      setScrollProgress(progress);
    };

    window.addEventListener("scroll", handleScroll);

    // IntersectionObserver to detect currently active section
    const observerOptions = {
      root: null,
      rootMargin: "-20% 0px -60% 0px", // Trigger when section occupies the focus area
      threshold: 0,
    };

    const observerCallback = (entries: IntersectionObserverEntry[]) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          setActiveSection(entry.target.id);
        }
      });
    };

    const observer = new IntersectionObserver(observerCallback, observerOptions);

    NAV_ITEMS.forEach((item) => {
      const el = document.getElementById(item.id);
      if (el) observer.observe(el);
    });

    return () => {
      window.removeEventListener("scroll", handleScroll);
      observer.disconnect();
    };
  }, []);

  const handleNavClick = (id: string) => {
    setIsMobileMenuOpen(false);
    const target = document.getElementById(id);
    if (target) {
      target.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <>
      {/* Floated Navigation Wrapper */}
      <nav id="floating-navbar" className="fixed top-6 left-1/2 -translate-x-1/2 z-[490] w-full max-w-[95%] sm:max-w-xl md:max-w-2xl lg:max-w-4xl select-none">
        <div className="relative bg-secondary-bg/75 backdrop-blur-md rounded-full px-5 py-3 border border-border-el shadow-[0_8px_32px_rgba(0,0,0,0.5)] flex items-center justify-between transition-all duration-300">
          
          {/* Logo Brand Signature */}
          <button
            onClick={() => handleNavClick("home")}
            className="font-display text-xl tracking-wider text-primary-txt hover:text-accent-blue transition-colors font-semibold cursor-pointer uppercase py-1"
          >
            B.Schwartz
          </button>

          {/* Desktop Links (Hidden on small screens) */}
          <div className="hidden md:flex items-center gap-1">
            {NAV_ITEMS.map((item) => (
              <button
                key={item.id}
                onClick={() => handleNavClick(item.id)}
                className={`relative px-3.5 py-1 text-xs font-mono tracking-widest uppercase transition-colors cursor-pointer ${
                  activeSection === item.id
                    ? "text-primary-txt"
                    : "text-muted-txt hover:text-primary-txt"
                }`}
              >
                {item.label}
                {activeSection === item.id && (
                  <motion.div
                    layoutId="activeNavBackground"
                    transition={{ type: "spring", stiffness: 350, damping: 30 }}
                    className="absolute inset-0 bg-white/10 rounded-full -z-10"
                  />
                )}
              </button>
            ))}
          </div>

          {/* Hamburger trigger for small viewports */}
          <button
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            className="md:hidden text-primary-txt hover:text-accent-blue transition-colors p-1 rounded-full cursor-pointer"
            aria-label="Toggle navigation menu"
          >
            {isMobileMenuOpen ? <X size={20} /> : <Menu size={20} />}
          </button>

          {/* Floating line scroll progress tracker at bottom of navigation pill */}
          <div className="absolute bottom-0 left-6 right-6 h-[1.5px] bg-white/10 overflow-hidden rounded-full">
            <div
              className="h-full bg-accent-blue rounded-full transition-all duration-75"
              style={{ width: `${scrollProgress}%` }}
            />
          </div>
        </div>
      </nav>

      {/* Screen Overlay Menu for Mobile with Framer Motion */}
      <AnimatePresence>
        {isMobileMenuOpen && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 bg-primary-bg/98 backdrop-blur-lg z-[450] flex flex-col justify-center px-8 md:px-16"
          >
            <div className="absolute top-28 left-8 right-8 flex justify-between font-mono text-[10px] text-muted-txt uppercase tracking-widest border-b border-border-el pb-4">
              <span>Navigation Menu</span>
              <span>Schwartz © 2026</span>
            </div>

            {/* Vertically Staggered Navigation */}
            <div className="flex flex-col gap-4 mt-8">
              {NAV_ITEMS.map((item, index) => (
                <motion.button
                  initial={{ x: -30, opacity: 0 }}
                  animate={{ x: 0, opacity: 1 }}
                  exit={{ x: -20, opacity: 0 }}
                  transition={{ delay: index * 0.08, ease: [0.215, 0.61, 0.355, 1] }}
                  key={item.id}
                  onClick={() => handleNavClick(item.id)}
                  className="text-left py-2 font-display text-5xl sm:text-6xl font-black uppercase tracking-tight flex items-center justify-between group cursor-pointer"
                >
                  <span className={activeSection === item.id ? "text-accent-blue" : "text-primary-txt group-hover:text-accent-blue transition-colors"}>
                    {item.label}
                  </span>
                  <span className="font-mono text-xs text-muted-txt opacity-0 group-hover:opacity-100 transition-opacity">
                    [0{index + 1}]
                  </span>
                </motion.button>
              ))}
            </div>

            <div className="absolute bottom-16 left-8 right-8 flex flex-col sm:flex-row justify-between text-xs font-mono text-muted-txt gap-4 border-t border-border-el pt-6">
              <span>CONTACT: BRIGITTE@SCHWARTZ.DESIGN</span>
              <div className="flex gap-4">
                <span>LI</span>
                <span>GH</span>
                <span>DR</span>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}
