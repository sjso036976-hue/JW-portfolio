"use client";

import { useRef } from "react";
import { motion, useInView } from "framer-motion";

const skills = [
  { name: "Premiere Pro", abbr: "PR", percent: 95, color: "#9999FF" },
  { name: "Photoshop", abbr: "PS", percent: 85, color: "#31A8FF" },
  { name: "After Effects", abbr: "AE", percent: 75, color: "#9999FF" },
  { name: "Illustrator", abbr: "AI", percent: 65, color: "#FF9A00" },
];

function ShotMeter({ skill, isInView, index }) {
  const segments = 20;
  const filledCount = Math.round((skill.percent / 100) * segments);

  return (
    <motion.div
      initial={{ opacity: 0, x: -30 }}
      animate={isInView ? { opacity: 1, x: 0 } : {}}
      transition={{ duration: 0.6, delay: 0.1 + index * 0.12 }}
      className="group"
    >
      <div className="flex items-center gap-4 mb-3">
        {/* App badge */}
        <div
          className="w-9 h-9 flex items-center justify-center text-[10px] font-bold text-white flex-shrink-0"
          style={{ backgroundColor: `${skill.color}20`, border: `1px solid ${skill.color}40` }}
        >
          <span style={{ color: skill.color }} className="font-scoreboard text-xs">
            {skill.abbr}
          </span>
        </div>
        <div className="flex-1">
          <div className="flex items-center justify-between mb-2">
            <span className="font-display font-medium text-sm sm:text-base tracking-wider text-white">
              {skill.name}
            </span>
            <span className="font-scoreboard text-sm" style={{ color: skill.color }}>
              {skill.percent}%
            </span>
          </div>

          {/* Shot meter segments */}
          <div className="flex gap-[3px]">
            {Array.from({ length: segments }).map((_, i) => (
              <motion.div
                key={i}
                initial={{ scaleY: 0, opacity: 0 }}
                animate={
                  isInView
                    ? {
                        scaleY: i < filledCount ? 1 : 0.3,
                        opacity: i < filledCount ? 1 : 0.15,
                      }
                    : {}
                }
                transition={{
                  duration: 0.4,
                  delay: 0.3 + index * 0.12 + i * 0.025,
                  ease: "easeOut",
                }}
                className="flex-1 origin-bottom"
                style={{
                  height: i < filledCount
                    ? i >= filledCount - 3 ? "20px" : "16px"
                    : "12px",
                  backgroundColor:
                    i < filledCount
                      ? i >= filledCount - 3
                        ? skill.color
                        : `${skill.color}cc`
                      : "rgba(255,255,255,0.08)",
                }}
              />
            ))}
          </div>
        </div>
      </div>
    </motion.div>
  );
}

export default function Skills() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section id="skills" className="relative py-24 sm:py-32 bg-court court-texture">
      <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-royal/30 to-transparent" />

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8" ref={ref}>
        {/* Quarter header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="flex items-center gap-4 mb-16"
        >
          <div className="font-scoreboard text-royal/50 text-5xl sm:text-7xl leading-none select-none">
            03
          </div>
          <div>
            <div className="font-scoreboard text-royal text-xs tracking-[0.3em] mb-1">
              QUARTER
            </div>
            <h2 className="font-display font-bold text-2xl sm:text-4xl tracking-wider text-white uppercase">
              Player Skills
            </h2>
          </div>
          <div className="flex-1 h-px bg-gradient-to-r from-royal/50 to-transparent ml-4" />
        </motion.div>

        <div className="max-w-2xl">
          {/* Shot meter label */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={isInView ? { opacity: 1 } : {}}
            transition={{ delay: 0.1 }}
            className="flex items-center gap-3 mb-8"
          >
            <div className="font-scoreboard text-xs text-royal/60 tracking-[0.3em]">
              SHOT METER
            </div>
            <div className="h-px flex-1 bg-white/5" />
            <div className="font-scoreboard text-xs text-white/30">
              TOOL PROFICIENCY
            </div>
          </motion.div>

          {/* Skill meters */}
          <div className="space-y-6">
            {skills.map((skill, i) => (
              <ShotMeter key={skill.name} skill={skill} isInView={isInView} index={i} />
            ))}
          </div>

          {/* Bottom note */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={isInView ? { opacity: 1 } : {}}
            transition={{ delay: 1.2 }}
            className="mt-10 pt-6 border-t border-white/5"
          >
            <p className="font-scoreboard text-xs text-white/20 tracking-widest">
              // ADDITIONAL: Davinci Resolve · Canva · Final Cut Pro
            </p>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
