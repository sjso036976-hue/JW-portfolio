"use client";

import { useState, useRef } from "react";
import { motion, useInView, AnimatePresence } from "framer-motion";
import { ExternalLink, Play } from "lucide-react";

const tabs = ["Cinematic", "Variety", "Docu & Art Film"];

const portfolioData = {
  Cinematic: [
    {
      title: "당근이세요?",
      subtitle: "당근거래자가 이상하다?! 미스테리 단편.",
      roles: ["기획", "촬영", "편집", "연출", "대본"],
      url: "https://youtu.be/r_0z11OQ9rA?si=GW-KSj2lHnGbQKl_",
      tag: "SHORT FILM",
    },
    {
      title: "양초",
      subtitle: "바람피우는 여자친구를 잡는 법!",
      roles: ["기획", "촬영", "대본"],
      url: "https://youtu.be/8llvqqBJfpM?si=j15lXhUsMjTyQ3N8",
      tag: "SHORT FILM",
    },
    {
      title: "곁",
      subtitle: "홀로 감내해야 했던 고통 속 내밀어지는 손.",
      roles: ["기획", "연출", "촬영"],
      url: "https://youtu.be/bhTtLG-mx5A",
      tag: "SHORT FILM",
    },
  ],
  Variety: [
    {
      title: "SEBS Stock Race",
      subtitle: "주식 레이스 상속자 예능.",
      roles: ["기획", "연출", "촬영", "편집", "그래픽"],
      url: "https://youtu.be/z-HC8O-JFVo?si=hYnhYgDQzgPLpoHj",
      tag: "VARIETY",
    },
    {
      title: "환승고향",
      subtitle: "본격 고향 자랑 콘텐츠.",
      roles: ["기획", "촬영", "연출", "편집", "출연"],
      url: "https://youtu.be/gZ1aq7uVbU4?si=hWumkcCiNIfWLYqN",
      tag: "VARIETY",
    },
    {
      title: "여대추리반",
      subtitle: "수상한 취업 캠프의 진실을 밝히는 미스테리 추리반.",
      roles: ["기획", "촬영", "연출", "편집"],
      url: null,
      tag: "VARIETY",
    },
  ],
  "Docu & Art Film": [
    {
      title: "[2025 기획취재] 동결되지 않은 것들",
      subtitle: "대학 등록금 동결 다큐멘터리.",
      roles: ["기획", "촬영", "그래픽"],
      url: "https://youtu.be/u9d3IjhLbFs?si=IIChNqXZYY7HhFFV",
      tag: "DOCUMENTARY",
    },
    {
      title: "날개를 만드는 법",
      subtitle: "형태 없는 생각들의 시각적 조각.",
      roles: ["기획", "촬영", "연출", "편집"],
      url: "https://youtu.be/xdxUdqJnuoY?si=9u9K3MGGvsUcj3pN",
      tag: "ART FILM",
    },
  ],
};

function VideoCard({ item, index }) {
  const isClickable = !!item.url;

  const CardWrapper = ({ children }) =>
    isClickable ? (
      <a
        href={item.url}
        target="_blank"
        rel="noopener noreferrer"
        className="block group"
      >
        {children}
      </a>
    ) : (
      <div className="block group cursor-default">{children}</div>
    );

  return (
    <motion.div
      initial={{ opacity: 0, y: 40 }}
      animate={{ opacity: 1, y: 0 }}
      exit={{ opacity: 0, y: -20 }}
      transition={{ duration: 0.5, delay: index * 0.08 }}
    >
      <CardWrapper>
        <div
          className={`relative bg-court-mid border border-white/10 overflow-hidden transition-all duration-300 ${
            isClickable
              ? "hover:border-royal/60 hover:-translate-y-1 hover:shadow-lg hover:shadow-royal/10"
              : "opacity-70"
          }`}
        >
          {/* Top color bar */}
          <div className="h-0.5 bg-gradient-to-r from-royal via-royal-light to-transparent" />

          {/* Thumbnail placeholder */}
          <div className="relative aspect-video bg-court flex items-center justify-center overflow-hidden">
            <div className="absolute inset-0 court-texture opacity-50" />
            {/* Court arc decoration */}
            <div
              className="absolute bottom-0 left-1/2 -translate-x-1/2 rounded-t-full border-t border-l border-r border-royal/10"
              style={{ width: 240, height: 120 }}
            />
            <div className="relative z-10 flex flex-col items-center gap-2">
              {isClickable ? (
                <div className="w-12 h-12 rounded-full bg-royal/20 border border-royal/40 flex items-center justify-center group-hover:bg-royal/40 transition-all duration-300">
                  <Play className="w-5 h-5 text-royal fill-royal ml-0.5" />
                </div>
              ) : (
                <div className="font-scoreboard text-xs text-white/30 tracking-widest">
                  COMING SOON
                </div>
              )}
            </div>
            {/* Tag */}
            <div className="absolute top-3 left-3">
              <span className="font-scoreboard text-[10px] text-royal/70 bg-royal/10 border border-royal/20 px-2 py-0.5 tracking-widest">
                {item.tag}
              </span>
            </div>
          </div>

          {/* Card content */}
          <div className="p-5">
            <div className="flex items-start justify-between gap-3 mb-2">
              <h3 className="font-display font-semibold text-base sm:text-lg text-white leading-tight tracking-wide">
                {item.title}
              </h3>
              {isClickable && (
                <ExternalLink className="w-4 h-4 text-white/30 group-hover:text-royal flex-shrink-0 mt-0.5 transition-colors" />
              )}
            </div>
            <p className="text-white/50 text-sm leading-relaxed mb-4">
              {item.subtitle}
            </p>
            <div className="flex flex-wrap gap-1.5">
              {item.roles.map((role) => (
                <span
                  key={role}
                  className="font-scoreboard text-[10px] text-white/80 border border-white/20 px-2 py-0.5 tracking-wider"
                >
                  {role}
                </span>
              ))}
            </div>
          </div>
        </div>
      </CardWrapper>
    </motion.div>
  );
}

export default function Portfolio() {
  const [activeTab, setActiveTab] = useState("Cinematic");
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section id="portfolio" className="relative py-24 sm:py-32 bg-court-mid">
      <div className="absolute inset-0 court-texture opacity-50" />
      <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-royal/30 to-transparent" />

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8" ref={ref}>
        {/* Quarter header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="flex items-center gap-4 mb-12"
        >
          <div className="font-scoreboard text-royal/50 text-5xl sm:text-7xl leading-none select-none">
            02
          </div>
          <div>
            <div className="font-scoreboard text-royal text-xs tracking-[0.3em] mb-1">
              QUARTER
            </div>
            <h2 className="font-display font-bold text-2xl sm:text-4xl tracking-wider text-white uppercase">
              Game Tape
            </h2>
          </div>
          <div className="flex-1 h-px bg-gradient-to-r from-royal/50 to-transparent ml-4" />
        </motion.div>

        {/* Tabs */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6, delay: 0.15 }}
          className="flex gap-0 mb-10 border-b border-white/10"
        >
          {tabs.map((tab) => (
            <button
              key={tab}
              onClick={() => setActiveTab(tab)}
              className={`relative px-4 sm:px-6 py-3 font-display text-sm sm:text-base font-medium tracking-wider transition-colors duration-200 ${
                activeTab === tab
                  ? "text-white"
                  : "text-white/40 hover:text-white/70"
              }`}
            >
              {tab}
              {activeTab === tab && (
                <motion.div
                  layoutId="tab-underline"
                  className="absolute bottom-0 left-0 right-0 h-0.5 bg-royal"
                  transition={{ type: "spring", stiffness: 400, damping: 30 }}
                />
              )}
            </button>
          ))}
        </motion.div>

        {/* Cards grid */}
        <AnimatePresence mode="wait">
          <motion.div
            key={activeTab}
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.2 }}
            className="grid sm:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-6"
          >
            {portfolioData[activeTab].map((item, i) => (
              <VideoCard key={item.title} item={item} index={i} />
            ))}
          </motion.div>
        </AnimatePresence>
      </div>
    </section>
  );
}
