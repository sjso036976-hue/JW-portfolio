"use client";

import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Menu, X } from "lucide-react";

const navLinks = [
  { href: "#stats", label: "1ST QTR", sub: "Stats" },
  { href: "#portfolio", label: "2ND QTR", sub: "Portfolio" },
  { href: "#skills", label: "3RD QTR", sub: "Skills" },
  { href: "#contact", label: "4TH QTR", sub: "Contact" },
];

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 50);
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <motion.header
      initial={{ y: -80 }}
      animate={{ y: 0 }}
      transition={{ duration: 0.6, ease: "easeOut" }}
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        scrolled
          ? "bg-court/95 backdrop-blur-md border-b border-royal/20"
          : "bg-transparent"
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          {/* Logo */}
          <a href="#" className="flex items-center gap-2 group">
            <div className="w-8 h-8 rounded-full bg-royal flex items-center justify-center royal-glow-sm group-hover:scale-110 transition-transform">
              <svg viewBox="0 0 24 24" className="w-5 h-5 fill-white">
                <circle cx="12" cy="12" r="10" fill="none" stroke="white" strokeWidth="1.5"/>
                <path d="M12 2C12 2 8 7 8 12s4 10 4 10" stroke="white" strokeWidth="1.5" fill="none"/>
                <path d="M12 2c0 0 4 5 4 10s-4 10-4 10" stroke="white" strokeWidth="1.5" fill="none"/>
                <path d="M2 12h20" stroke="white" strokeWidth="1.5"/>
                <path d="M3.5 7h17M3.5 17h17" stroke="white" strokeWidth="1"/>
              </svg>
            </div>
            <span className="font-display font-bold text-xl tracking-widest text-white">
              JIWON
            </span>
          </a>

          {/* Desktop nav */}
          <nav className="hidden md:flex items-center gap-8">
            {navLinks.map((link) => (
              <a
                key={link.href}
                href={link.href}
                className="group flex flex-col items-center leading-none hover:text-royal transition-colors"
              >
                <span className="font-scoreboard text-[10px] text-royal/70 group-hover:text-royal transition-colors">
                  {link.label}
                </span>
                <span className="font-display text-sm font-medium tracking-wider text-white group-hover:text-royal transition-colors">
                  {link.sub}
                </span>
              </a>
            ))}
          </nav>

          {/* Mobile menu button */}
          <button
            className="md:hidden text-white hover:text-royal transition-colors"
            onClick={() => setOpen(!open)}
            aria-label="메뉴 열기"
          >
            {open ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>
      </div>

      {/* Mobile menu */}
      <AnimatePresence>
        {open && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: "auto" }}
            exit={{ opacity: 0, height: 0 }}
            className="md:hidden bg-court-mid border-t border-royal/20 overflow-hidden"
          >
            <div className="px-4 py-4 flex flex-col gap-4">
              {navLinks.map((link) => (
                <a
                  key={link.href}
                  href={link.href}
                  onClick={() => setOpen(false)}
                  className="flex items-center gap-3 py-2 border-b border-white/5 last:border-0"
                >
                  <span className="font-scoreboard text-xs text-royal/70 w-16">
                    {link.label}
                  </span>
                  <span className="font-display text-base font-medium tracking-wider text-white">
                    {link.sub}
                  </span>
                </a>
              ))}
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.header>
  );
}
