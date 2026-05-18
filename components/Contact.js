"use client";

import { useRef } from "react";
import { motion, useInView } from "framer-motion";
import { Mail, Instagram, Youtube } from "lucide-react";

const contactLinks = [
  {
    icon: Mail,
    label: "EMAIL",
    value: "may_true0@naver.com",
    href: "mailto:may_true0@naver.com",
    color: "text-blue-400",
    borderColor: "border-blue-400/20",
    hoverBorder: "hover:border-blue-400/50",
  },
  {
    icon: Instagram,
    label: "INSTAGRAM",
    value: "@archive_may_",
    href: "https://www.instagram.com/archive_may_",
    color: "text-pink-400",
    borderColor: "border-pink-400/20",
    hoverBorder: "hover:border-pink-400/50",
  },
  {
    icon: Youtube,
    label: "YOUTUBE",
    value: "@archive_may",
    href: "https://www.youtube.com/@archive_may",
    color: "text-red-500",
    borderColor: "border-red-500/20",
    hoverBorder: "hover:border-red-500/50",
  },
];

export default function Contact() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section id="contact" className="relative py-24 sm:py-32 bg-court-mid">
      <div className="absolute inset-0 court-texture opacity-30" />
      <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-royal/30 to-transparent" />
      {/* Bottom court arc */}
      <div className="absolute bottom-0 left-1/2 -translate-x-1/2 pointer-events-none">
        <div
          className="rounded-t-full border-t border-l border-r border-royal/10"
          style={{ width: 600, height: 300 }}
        />
      </div>

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8" ref={ref}>
        {/* Quarter header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="flex items-center gap-4 mb-16"
        >
          <div className="font-scoreboard text-royal/50 text-5xl sm:text-7xl leading-none select-none">
            04
          </div>
          <div>
            <div className="font-scoreboard text-royal text-xs tracking-[0.3em] mb-1">
              QUARTER
            </div>
            <h2 className="font-display font-bold text-2xl sm:text-4xl tracking-wider text-white uppercase">
              Get in the Game
            </h2>
          </div>
          <div className="flex-1 h-px bg-gradient-to-r from-royal/50 to-transparent ml-4" />
        </motion.div>

        <div className="max-w-3xl">
          {/* Headline */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.6, delay: 0.15 }}
            className="mb-12"
          >
            <h3 className="font-display font-bold text-3xl sm:text-5xl text-white leading-tight mb-4">
              LET'S MAKE <br />
              <span className="text-royal">CLUTCH SHOTS</span>
              <br />
              TOGETHER.
            </h3>
            <p className="text-white/50 text-sm sm:text-base leading-relaxed max-w-lg">
              콜라보, 작업 의뢰, 또는 그냥 안녕이라도 — 언제든지 연락주세요.
              새로운 플레이메이트를 기다립니다.
            </p>
          </motion.div>

          {/* Contact cards */}
          <div className="grid gap-4">
            {contactLinks.map((item, i) => (
              <motion.a
                key={item.label}
                href={item.href}
                target={item.label !== "EMAIL" ? "_blank" : undefined}
                rel="noopener noreferrer"
                initial={{ opacity: 0, x: -30 }}
                animate={isInView ? { opacity: 1, x: 0 } : {}}
                transition={{ duration: 0.5, delay: 0.3 + i * 0.1 }}
                className={`flex items-center gap-5 p-5 sm:p-6 border ${item.borderColor} ${item.hoverBorder} bg-court/50 hover:bg-court transition-all duration-300 group`}
              >
                <div
                  className={`w-10 h-10 flex items-center justify-center border ${item.borderColor} group-hover:bg-white/5 transition-colors flex-shrink-0`}
                >
                  <item.icon className={`w-5 h-5 ${item.color}`} />
                </div>
                <div className="flex-1 min-w-0">
                  <div className="font-scoreboard text-[10px] text-white/30 tracking-[0.3em] mb-0.5">
                    {item.label}
                  </div>
                  <div className="font-display font-medium text-sm sm:text-base tracking-wider text-white group-hover:text-white/90 truncate">
                    {item.value}
                  </div>
                </div>
                <svg
                  className="w-4 h-4 text-white/20 group-hover:text-white/60 flex-shrink-0 transition-colors"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14"
                  />
                </svg>
              </motion.a>
            ))}
          </div>
        </div>
      </div>

      {/* Footer */}
      <motion.footer
        initial={{ opacity: 0 }}
        animate={isInView ? { opacity: 1 } : {}}
        transition={{ delay: 0.8 }}
        className="relative mt-24 pt-8 border-t border-white/5"
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex flex-col sm:flex-row items-center justify-between gap-4">
          <div className="flex items-center gap-2">
            <div className="w-6 h-6 rounded-full bg-royal/30 flex items-center justify-center">
              <svg viewBox="0 0 24 24" className="w-4 h-4" fill="none">
                <circle cx="12" cy="12" r="10" stroke="white" strokeWidth="1.5" />
                <path d="M12 2C12 2 8 7 8 12s4 10 4 10" stroke="white" strokeWidth="1.5" fill="none" />
                <path d="M12 2c0 0 4 5 4 10s-4 10-4 10" stroke="white" strokeWidth="1.5" fill="none" />
                <path d="M2 12h20" stroke="white" strokeWidth="1.5" />
              </svg>
            </div>
            <span className="font-display text-sm font-bold tracking-widest text-white/60">
              JIWON
            </span>
          </div>
          <p className="font-scoreboard text-xs text-white/20 tracking-wider">
            © 2025 JIWON. ALL RIGHTS RESERVED.
          </p>
        </div>
      </motion.footer>
    </section>
  );
}
