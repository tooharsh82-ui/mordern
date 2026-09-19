import React, { useState, useEffect } from "react";
import { Send, CheckCircle, Mail, MessageSquare, Briefcase, Award } from "lucide-react";
import { motion, AnimatePresence } from "motion/react";

interface SavedInquiry {
  id: string;
  name: string;
  email: string;
  subject: string;
  message: string;
  timestamp: string;
}

export default function ContactSection() {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [subject, setSubject] = useState("");
  const [message, setMessage] = useState("");
  const [inquiries, setInquiries] = useState<SavedInquiry[]>([]);
  const [isSuccessfullySubmitted, setIsSuccessfullySubmitted] = useState(false);

  // Load existing submissions from localStorage
  useEffect(() => {
    const saved = localStorage.getItem("portfolio_studio_inquiries");
    if (saved) {
      try {
        setInquiries(JSON.parse(saved));
      } catch (e) {
        console.error("Could not parse saved inquiries", e);
      }
    } else {
      // Mock some realistic introductory messages
      const initialMock: SavedInquiry[] = [
        {
          id: "inq-1",
          name: "Jean-Laurent Mercier",
          email: "j.mercier@belmont-couture.com",
          subject: "Consultancy: Autumn Campaign Digital Exhibition",
          message: "Brigitte, we loved your brutalist architectural design layouts. We are seeking to deploy an immersive full-screen WebGL product exhibition in Paris next autumn. Let's arrange a call.",
          timestamp: "2026-05-30T14:35:00Z",
        },
        {
          id: "inq-2",
          name: "Sarah Lindström",
          email: "s.lindstrom@sonder-film.se",
          subject: "Scandinavian Cinema Portfolio Launch",
          message: "Stunning work on Sonder's video gallery. Can we discuss designing another cinematic portfolio suite for our sister production house?",
          timestamp: "2026-05-31T01:10:00Z",
        }
      ];
      setInquiries(initialMock);
      localStorage.setItem("portfolio_studio_inquiries", JSON.stringify(initialMock));
    }
  }, []);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!name || !email || !message) return;

    const newInquiry: SavedInquiry = {
      id: "inq-" + Date.now(),
      name,
      email,
      subject: subject || "General Creative Consultation",
      message,
      timestamp: new Date().toISOString(),
    };

    const updated = [newInquiry, ...inquiries];
    setInquiries(updated);
    localStorage.setItem("portfolio_studio_inquiries", JSON.stringify(updated));

    // Reset Form Fields
    setName("");
    setEmail("");
    setSubject("");
    setMessage("");
    setIsSuccessfullySubmitted(true);

    // Fade out success notification after 5 seconds
    setTimeout(() => {
      setIsSuccessfullySubmitted(false);
    }, 5000);
  };

  const handleDeleteInquiry = (id: string) => {
    const updated = inquiries.filter((item) => item.id !== id);
    setInquiries(updated);
    localStorage.setItem("portfolio_studio_inquiries", JSON.stringify(updated));
  };

  return (
    <section id="contact" className="relative bg-secondary-bg py-24 md:py-36 px-6 overflow-hidden max-w-[1600px] mx-auto border-b border-border-el/50">
      
      {/* Decorative Oversized Watermark */}
      <div className="absolute right-[5%] bottom-[-5%] font-display text-[15rem] md:text-[23rem] font-bold text-black select-none pointer-events-none tracking-tighter leading-none opacity-45 z-0">
        JOURNAL
      </div>

      <div className="max-w-[1200px] mx-auto relative z-10">
        
        {/* Section Header */}
        <div className="flex items-center gap-4 mb-16 border-b border-border-el pb-6">
          <span className="font-mono text-xs text-accent-blue tracking-widest uppercase">[ SECTION 07 ]</span>
          <h2 className="font-display text-4xl md:text-5xl tracking-normal uppercase text-primary-txt">
            LET'S CONSTRUCT AN IDEA
          </h2>
        </div>

        {/* 2-Column Pitch Layout */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-start">
          
          {/* Left: Interactive Form (Col: 7) */}
          <div className="lg:col-span-7 flex flex-col gap-8">
            <h3 className="font-syne font-extrabold text-2xl md:text-3xl text-primary-txt uppercase tracking-tight">
              ESTABLISH THE INITIATIVE
            </h3>

            <form onSubmit={handleSubmit} className="flex flex-col gap-6">
              
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                
                {/* Name */}
                <div className="flex flex-col gap-2">
                  <label htmlFor="form-name" className="font-mono text-[10px] text-muted-txt uppercase tracking-widest">
                    Your Name / Representative *
                  </label>
                  <input
                    id="form-name"
                    type="text"
                    required
                    value={name}
                    onChange={(e) => setName(e.target.value)}
                    placeholder="E.g. Jean-Laurent Mercier"
                    className="bg-primary-bg/75 border border-border-el rounded-lg px-4 py-3 font-sans text-sm text-primary-txt placeholder-muted-txt/55 focus:outline-none focus:border-accent-blue focus:ring-1 focus:ring-accent-blue transition-all"
                  />
                </div>

                {/* Email */}
                <div className="flex flex-col gap-2">
                  <label htmlFor="form-email" className="font-mono text-[10px] text-muted-txt uppercase tracking-widest">
                    Your Email Address *
                  </label>
                  <input
                    id="form-email"
                    type="email"
                    required
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    placeholder="E.g. j.mercier@brand.com"
                    className="bg-primary-bg/75 border border-border-el rounded-lg px-4 py-3 font-sans text-sm text-primary-txt placeholder-muted-txt/55 focus:outline-none focus:border-accent-blue focus:ring-1 focus:ring-accent-blue transition-all"
                  />
                </div>

              </div>

              {/* Subject */}
              <div className="flex flex-col gap-2">
                <label htmlFor="form-subject" className="font-mono text-[10px] text-muted-txt uppercase tracking-widest">
                  Subject Scope
                </label>
                <input
                  id="form-subject"
                  type="text"
                  value={subject}
                  onChange={(e) => setSubject(e.target.value)}
                  placeholder="E.g. Campaign Creative Direction"
                  className="bg-primary-bg/75 border border-border-el rounded-lg px-4 py-3 font-sans text-sm text-primary-txt placeholder-muted-txt/55 focus:outline-none focus:border-accent-blue focus:ring-1 focus:ring-accent-blue transition-all"
                />
              </div>

              {/* Message */}
              <div className="flex flex-col gap-2">
                <label htmlFor="form-message" className="font-mono text-[10px] text-muted-txt uppercase tracking-widest">
                  Your Concept Blueprint *
                </label>
                <textarea
                  id="form-message"
                  required
                  rows={5}
                  value={message}
                  onChange={(e) => setMessage(e.target.value)}
                  placeholder="Describe your design parameters, budget alignment, or timeline requirements..."
                  className="bg-primary-bg/75 border border-border-el rounded-lg px-4 py-3 font-sans text-sm text-primary-txt placeholder-muted-txt/55 focus:outline-none focus:border-accent-blue focus:ring-1 focus:ring-accent-blue transition-all resize-none"
                />
              </div>

              {/* Submission Button with extreme luxury animation hover */}
              <button
                type="submit"
                id="submit-contact"
                className="w-full shrink-0 flex items-center justify-center gap-3 bg-white hover:bg-accent-blue border border-white hover:border-accent-blue text-primary-bg hover:text-primary-txt font-mono text-xs font-bold tracking-widest py-4 rounded-xl cursor-pointer transition-all duration-300 shadow-xl"
              >
                <span>DISPATCH STUDIO REQUEST</span>
                <Send size={14} />
              </button>

              {/* Success Alert Pill */}
              <AnimatePresence>
                {isSuccessfullySubmitted && (
                  <motion.div
                    initial={{ opacity: 0, y: 15 }}
                    animate={{ opacity: 1, y: 0 }}
                    exit={{ opacity: 0 }}
                    className="p-4 bg-accent-blue/10 border border-accent-blue/50 rounded-xl flex items-center gap-3 text-accent-blue"
                  >
                    <CheckCircle size={18} />
                    <span className="font-sans text-xs tracking-wide">
                      Your inquiry has been successfully committed to the active Local Registry queue. See below!
                    </span>
                  </motion.div>
                )}
              </AnimatePresence>

            </form>
          </div>

          {/* Right: Contact details list and coordinates (Col: 5) */}
          <div className="lg:col-span-5 flex flex-col gap-8 bg-primary-bg/60 border border-border-el p-8 rounded-2xl backdrop-blur-sm">
            <h4 className="font-display text-2xl tracking-wider text-primary-txt uppercase border-b border-border-el/40 pb-3">
              CREATIVE DISPATCH COORDINATES
            </h4>

            <div className="flex flex-col gap-6 font-mono text-xs text-muted-txt">
              
              <div className="flex flex-col gap-1.5">
                <span className="text-[10px] text-accent-blue block tracking-widest">OFFICIAL REPRESENTATIVE</span>
                <span className="text-secondary-txt text-sm font-sans font-medium">Brigitte Schwartz Agency</span>
                <span className="text-[11px]">86 Rue du Faubourg Saint-Honoré, Esc. B 75008 Paris</span>
              </div>

              <div className="flex flex-col gap-1.5 border-t border-white/5 pt-4">
                <span className="text-[10px] text-accent-blue block tracking-widest">DIRECT COMMUNICATE</span>
                <a href="mailto:brigitte@schwartz.design" className="text-primary-txt text-sm font-sans font-medium hover:text-accent-blue transition-colors">
                  brigitte@schwartz.design
                </a>
              </div>

              <div className="flex flex-col gap-1.5 border-t border-white/5 pt-4">
                <span className="text-[10px] text-accent-blue block tracking-widest">CONNECTED PLATFORMS</span>
                <div className="grid grid-cols-2 gap-3 mt-1 text-secondary-txt">
                  <a href="https://linkedin.com" target="_blank" rel="noreferrer" className="hover:text-accent-blue transition-colors flex items-center gap-1.5 py-0.5">
                    • LinkedIn
                  </a>
                  <a href="https://github.com" target="_blank" rel="noreferrer" className="hover:text-accent-blue transition-colors flex items-center gap-1.5 py-0.5">
                    • GitHub
                  </a>
                  <a href="https://behance.net" target="_blank" rel="noreferrer" className="hover:text-accent-blue transition-colors flex items-center gap-1.5 py-0.5">
                    • Behance
                  </a>
                  <a href="https://dribbble.com" target="_blank" rel="noreferrer" className="hover:text-accent-blue transition-colors flex items-center gap-1.5 py-0.5">
                    • Dribbble
                  </a>
                  <a href="https://twitter.com" target="_blank" rel="noreferrer" className="hover:text-accent-blue transition-colors flex items-center gap-1.5 py-0.5">
                    • Twitter / X
                  </a>
                </div>
              </div>

            </div>
          </div>

        </div>

        {/* PERSISTENT RECEIVED MESSAGES DECK (Creative Interactive Proof) */}
        <div id="incoming-ledger" className="mt-20 border-t border-border-el/40 pt-16">
          <div className="flex items-center justify-between mb-8">
            <div className="flex items-center gap-3">
              <MessageSquare size={18} className="text-accent-blue" />
              <h4 className="font-display text-2xl text-primary-txt uppercase tracking-wide">
                ACTIVE QUEUED INBOX INQUIRIES ({inquiries.length})
              </h4>
            </div>
            <span className="font-mono text-[9px] text-muted-txt uppercase hidden sm:inline">
              // WRITES PERSIST TO CLIENT-SIDE LOCAL STORAGE REGISTRY
            </span>
          </div>

          {/* Staggered Deck layout */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            <AnimatePresence mode="popLayout">
              {inquiries.map((item) => (
                <motion.div
                  layout
                  initial={{ opacity: 0, scale: 0.95 }}
                  animate={{ opacity: 1, scale: 1 }}
                  exit={{ opacity: 0, scale: 0.95, y: -20 }}
                  transition={{ duration: 0.4 }}
                  key={item.id}
                  className="bg-primary-bg border-l-2 border-l-accent-blue border border-border-el/60 rounded-xl p-6 flex flex-col justify-between hover:border-white/20 transition-all shadow-md group relative"
                >
                  {/* Delete overlay button for review */}
                  <button
                    onClick={() => handleDeleteInquiry(item.id)}
                    className="absolute top-4 right-4 font-mono text-[9px] text-muted-txt group-hover:text-red-500 hover:underline transition-colors uppercase cursor-pointer"
                  >
                    RESOLVE
                  </button>

                  <div className="flex flex-col gap-4">
                    <div>
                      <span className="font-mono text-[9px] text-muted-txt block uppercase">
                        {new Date(item.timestamp).toLocaleDateString(undefined, {
                          month: "short",
                          day: "numeric",
                          year: "numeric"
                        })}
                      </span>
                      <h5 className="font-syne font-bold text-sm text-primary-txt truncate pr-14 mt-1">
                        {item.subject}
                      </h5>
                    </div>

                    <p className="font-sans text-xs text-secondary-txt leading-relaxed line-clamp-4 italic">
                      “{item.message}”
                    </p>
                  </div>

                  <div className="border-t border-white/5 pt-4 mt-4 flex items-center gap-2.5">
                    <div className="w-7 h-7 rounded-full bg-neutral-900 border border-white/10 flex items-center justify-center text-[10px] font-mono tracking-widest font-semibold uppercase text-accent-blue shrink-0">
                      {item.name.substring(0, 2)}
                    </div>
                    <div className="flex flex-col leading-tight overflow-hidden">
                      <span className="font-display text-xs uppercase tracking-wide text-primary-txt truncate">
                        {item.name}
                      </span>
                      <span className="font-mono text-[9px] text-muted-txt truncate">
                        {item.email}
                      </span>
                    </div>
                  </div>

                </motion.div>
              ))}
            </AnimatePresence>
          </div>

        </div>

      </div>
    </section>
  );
}
