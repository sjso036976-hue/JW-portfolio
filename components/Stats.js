"use client";

import { motion, useInView } from "framer-motion";
import { useRef } from "react";
import { Instagram, Youtube, Film, Tv, Newspaper } from "lucide-react";

const containerVariants = {
  hidden: {},
  visible: { transition: { staggerChildren: 0.1 } },
};

const itemVariants = {
  hidden: { opacity: 0, y: 30 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.6, ease: "easeOut" } },
};

function QuarterHeader({ quarter, title }) {
  return (
    <div className="flex items-center gap-4 mb-12">
      <div className="font-scoreboard text-royal/50 text-5xl sm:text-7xl leading-none select-none">
        {quarter}
      </div>
      <div>
        <div className="font-scoreboard text-royal text-xs tracking-[0.3em] mb-1">
          QUARTER
        </div>
        <h2 className="font-display font-bold text-2xl sm:text-4xl tracking-wider text-white uppercase">
          {title}
        </h2>
      </div>
      <div className="flex-1 h-px bg-gradient-to-r from-royal/50 to-transparent ml-4" />
    </div>
  );
}

function StatCard({ icon: Icon, platform, count, color }) {
  return (
    <motion.div
      variants={itemVariants}
      className="relative bg-court-mid border border-white/10 p-6 group hover:border-royal/50 transition-all duration-300"
    >
      <div className="absolute top-0 left-0 right-0 h-0.5 bg-gradient-to-r from-transparent via-royal/50 to-transparent opacity-0 group-hover:opacity-100 transition-opacity" />
      <Icon className={`w-6 h-6 mb-3 ${color}`} />
      <div className="font-scoreboard text-3xl sm:text-4xl text-white mb-1">
        {count}
      </div>
      <div className="font-display text-sm tracking-wider text-white/50 uppercase">
        {platform}
      </div>
    </motion.div>
  );
}

const experienceData = [
  {
    icon: Tv,
    category: "Live & Event",
    items: [
      { title: "대동제 카메라 총괄", desc: "2025 실시간 송출" },
      { title: "제50회 방송제 기획 총괄", desc: "" },
    ],
  },
  {
    icon: Film,
    category: "Content Production",
    items: [
      { title: "단편 드라마", desc: "기획·촬영·편집" },
      { title: "아트필름", desc: "기획·연출·편집" },
      { title: "유튜브 기획/편집/그래픽 총괄", desc: "" },
    ],
  },
  {
    icon: Newspaper,
    category: "Journalism",
    items: [
      { title: "교내 뉴스 현장 취재 및 보도 영상 편집", desc: "" },
      { title: "카드뉴스 디자인", desc: "" },
    ],
  },
];

export default function Stats() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section id="stats" className="relative py-24 sm:py-32 bg-court court-texture">
      <div className="absolute inset-0 bg-gradient-to-b from-court via-court-mid/30 to-court pointer-events-none" />

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8" ref={ref}>
        <QuarterHeader quarter="01" title="Season Stats" />

        <motion.div
          variants={containerVariants}
          initial="hidden"
          animate={isInView ? "visible" : "hidden"}
        >
          {/* SNS Stats */}
          <motion.div variants={itemVariants} className="mb-16">
            <div className="font-scoreboard text-xs text-royal/60 tracking-[0.3em] mb-4">
              SNS STATS
            </div>
            <div className="grid grid-cols-2 gap-4 sm:gap-6 max-w-sm">
              <StatCard
                icon={Instagram}
                platform="Instagram"
                count="796+"
                color="text-pink-400"
              />
              <StatCard
                icon={Youtube}
                platform="YouTube"
                count="198+"
                color="text-red-500"
              />
            </div>
          </motion.div>

          {/* Experience */}
          <motion.div variants={itemVariants}>
            <div className="font-scoreboard text-xs text-royal/60 tracking-[0.3em] mb-6">
              EXPERIENCE
            </div>
            <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-6">
              {experienceData.map((exp) => (
                <motion.div
                  key={exp.category}
                  variants={itemVariants}
                  className="relative bg-court-mid border border-white/10 p-6 hover:border-royal/40 transition-all duration-300 group"
                >
                  <div className="absolute top-0 left-0 w-1 h-full bg-royal opacity-0 group-hover:opacity-100 transition-opacity" />
                  <div className="flex items-center gap-2 mb-4">
                    <exp.icon className="w-4 h-4 text-royal" />
                    <span className="font-display text-xs tracking-widest text-royal font-semibold uppercase">
                      {exp.category}
                    </span>
                  </div>
                  <ul className="space-y-3">
                    {exp.items.map((item, i) => (
                      <li key={i} className="flex items-start gap-2">
                        <span className="mt-1.5 w-1 h-1 rounded-full bg-royal/60 flex-shrink-0" />
                        <div>
                          <span className="text-white/90 text-sm leading-snug">
                            {item.title}
                          </span>
                          {item.desc && (
                            <span className="text-white/40 text-xs ml-1">
                              ({item.desc})
                            </span>
                          )}
                        </div>
                      </li>
                    ))}
                  </ul>
                </motion.div>
              ))}
            </div>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
}
