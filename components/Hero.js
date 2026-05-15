"use client";

import { motion } from "framer-motion";

function CourtLines() {
  return (
    <div className="absolute inset-0 overflow-hidden pointer-events-none select-none">
      {/* Center circle */}
      <div
        className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 rounded-full border border-white/5"
        style={{ width: 480, height: 480 }}
      />
      <div
        className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 rounded-full border border-white/5"
        style={{ width: 280, height: 280 }}
      />
      {/* Half-court line */}
      <div className="absolute top-0 bottom-0 left-1/2 -translate-x-1/2 w-px bg-white/5" />
      {/* Three-point arc suggestion */}
      <div
        className="absolute bottom-0 left-1/2 -translate-x-1/2 rounded-t-full border-t border-l border-r border-white/4"
        style={{ width: 520, height: 260 }}
      />
      {/* Vertical lines */}
      {[15, 30, 45, 55, 70, 85].map((pct) => (
        <div
          key={pct}
          className="absolute top-0 bottom-0 w-px bg-white/[0.02]"
          style={{ left: `${pct}%` }}
        />
      ))}
      {/* Lane lines */}
      <div className="absolute bottom-0 left-[35%] right-[35%] h-48 border-l border-r border-white/5" />
    </div>
  );
}

export default function Hero() {
  return (
    <section
      id="hero"
      className="relative min-h-screen flex flex-col items-center justify-center overflow-hidden bg-court court-texture"
    >
      <CourtLines />

      {/* Blue gradient top */}
      <div className="absolute inset-0 bg-gradient-to-b from-royal/10 via-transparent to-court pointer-events-none" />

      <div className="relative z-10 text-center px-4 sm:px-6 max-w-5xl mx-auto">
        {/* Scoreboard-style quarter badge */}
        <motion.div
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="inline-flex items-center gap-2 mb-8"
        >
          <div className="h-px w-12 bg-royal" />
          <span className="font-scoreboard text-royal text-sm tracking-[0.3em]">
            TIP-OFF
          </span>
          <div className="h-px w-12 bg-royal" />
        </motion.div>

        {/* Basketball icon */}
        <motion.div
          initial={{ opacity: 0, scale: 0.5 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.8, delay: 0.1, ease: "easeOut" }}
          className="flex justify-center mb-8"
        >
          <div className="relative w-20 h-20 sm:w-24 sm:h-24">
            <div className="w-full h-full rounded-full bg-royal royal-glow flex items-center justify-center">
              <svg
                viewBox="0 0 48 48"
                className="w-14 h-14 sm:w-16 sm:h-16"
                fill="none"
              >
                <circle cx="24" cy="24" r="20" fill="#1a5bc4" stroke="white" strokeWidth="1.5" />
                <path d="M24 4C24 4 16 13 16 24s8 20 8 20" stroke="white" strokeWidth="1.5" fill="none"/>
                <path d="M24 4c0 0 8 9 8 20s-8 20-8 20" stroke="white" strokeWidth="1.5" fill="none"/>
                <path d="M4 24h40" stroke="white" strokeWidth="1.5"/>
                <path d="M6 15h36M6 33h36" stroke="rgba(255,255,255,0.6)" strokeWidth="1"/>
              </svg>
            </div>
            {/* Pulse ring */}
            <motion.div
              animate={{ scale: [1, 1.4], opacity: [0.5, 0] }}
              transition={{ duration: 2, repeat: Infinity, ease: "easeOut" }}
              className="absolute inset-0 rounded-full border border-royal"
            />
          </div>
        </motion.div>

        {/* Main copy */}
        <motion.h1
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.3 }}
          className="font-display font-bold leading-none tracking-tight mb-6"
        >
          <span className="block text-4xl sm:text-6xl lg:text-8xl text-white">
            BEYOND
          </span>
          <span className="block text-4xl sm:text-6xl lg:text-8xl text-royal">
            THE FRAME,
          </span>
          <span className="block text-3xl sm:text-5xl lg:text-7xl text-white/80 mt-2">
            WINNING THE SCENE.
          </span>
        </motion.h1>

        {/* Divider */}
        <motion.div
          initial={{ scaleX: 0 }}
          animate={{ scaleX: 1 }}
          transition={{ duration: 0.8, delay: 0.6 }}
          className="flex items-center justify-center gap-4 my-8"
        >
          <div className="h-px flex-1 max-w-24 bg-gradient-to-r from-transparent to-royal/60" />
          <div className="w-2 h-2 rounded-full bg-royal" />
          <div className="h-px flex-1 max-w-24 bg-gradient-to-l from-transparent to-royal/60" />
        </motion.div>

        {/* Intro text */}
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.7 }}
          className="text-white/70 text-sm sm:text-base lg:text-lg max-w-2xl mx-auto leading-relaxed font-light"
        >
          카메라 안팎의 흐름을 읽고 관객의 마음을 사로잡는{" "}
          <span className="text-royal font-medium">'클러치 슛'</span> 같은 영상을
          만듭니다.
          <br className="hidden sm:block" />
          영상 디렉터 <span className="text-white font-semibold">JIWON</span>입니다.
        </motion.p>

        {/* CTA */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.9 }}
          className="flex flex-col sm:flex-row gap-4 justify-center mt-12"
        >
          <a
            href="#portfolio"
            className="inline-flex items-center justify-center gap-2 bg-royal hover:bg-royal-light text-white font-display font-semibold tracking-widest px-8 py-3.5 transition-all duration-200 royal-glow hover:royal-glow"
          >
            GAME TAPE
            <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
            </svg>
          </a>
          <a
            href="#contact"
            className="inline-flex items-center justify-center gap-2 border border-royal/50 hover:border-royal text-white/80 hover:text-white font-display font-semibold tracking-widest px-8 py-3.5 transition-all duration-200"
          >
            GET IN THE GAME
          </a>
        </motion.div>
      </div>

      {/* Scroll indicator */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1.4 }}
        className="absolute bottom-8 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2"
      >
        <span className="font-scoreboard text-[10px] text-white/30 tracking-widest">
          SCROLL
        </span>
        <motion.div
          animate={{ y: [0, 8, 0] }}
          transition={{ duration: 1.5, repeat: Infinity, ease: "easeInOut" }}
          className="w-px h-8 bg-gradient-to-b from-royal/60 to-transparent"
        />
      </motion.div>
    </section>
  );
}
