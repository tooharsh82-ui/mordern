import { useState } from "react";
import LoadingScreen from "./components/LoadingScreen";
import CursorFollower from "./components/CursorFollower";
import Navigation from "./components/Navigation";
import HeroSection from "./components/HeroSection";
import AboutSection from "./components/AboutSection";
import SkillsSection from "./components/SkillsSection";
import ExperienceSection from "./components/ExperienceSection";
import ProjectsSection from "./components/ProjectsSection";
import TestimonialsSection from "./components/TestimonialsSection";
import ContactSection from "./components/ContactSection";
import Footer from "./components/Footer";
import { motion, AnimatePresence } from "motion/react";

export default function App() {
  const [isLoading, setIsLoading] = useState(true);

  const handleExploreProjects = () => {
    const el = document.getElementById("projects");
    if (el) el.scrollIntoView({ behavior: "smooth" });
  };

  const handleContactMe = () => {
    const el = document.getElementById("contact");
    if (el) el.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <div className="relative min-h-screen bg-primary-bg text-primary-txt selection:bg-accent-blue/30 selection:text-primary-txt">
      
      {/* Global CSS Noise Sheet overlay for high-end cinematic tactile look */}
      <div className="noise-overlay" />

      {/* Modern custom trailing mouse coordinate elements */}
      <CursorFollower />

      {/* Chronological loading ticker and curtain count-up entrance */}
      <LoadingScreen onComplete={() => setIsLoading(false)} />

      {/* Full App View Container */}
      <AnimatePresence>
        {!isLoading && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 1, ease: "easeOut" }}
            className="flex flex-col"
          >
            {/* Sticky Floating centralized glass navigation */}
            <Navigation />

            {/* Layout structures organized by magazine-inspired page-folds */}
            <main>
              
              {/* Coverage Cover and main model portrait showcase */}
              <HeroSection
                onExploreProjects={handleExploreProjects}
                onContactMe={handleContactMe}
              />

              {/* Personal Manifesto & values column */}
              <AboutSection />

              {/* Structural outlined capsules */}
              <SkillsSection />

              {/* Career chronicles & bulletins line timeline */}
              <ExperienceSection />

              {/* Dynamic filtration grid of modern projects */}
              <ProjectsSection />

              {/* Client horizontal citation slide-deck */}
              <TestimonialsSection />

              {/* Secure interactive request box with live local log tracker */}
              <ContactSection />

            </main>

            {/* Minimal premium footer */}
            <Footer />

          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}
