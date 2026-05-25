import { useState } from 'react';
import { motion } from 'framer-motion';
import { ArrowUpRight, MapPin, Bell, Award, ChevronRight, Mail, Github, ExternalLink } from 'lucide-react';

// ─── Reusable Components ──────────────────────────────────────────────────────

const Tag = ({ children, color = 'blue' }) => {
  const colors = {
    blue: 'bg-blue-50 text-blue-600 border-blue-100',
    purple: 'bg-purple-50 text-purple-600 border-purple-100',
    green: 'bg-emerald-50 text-emerald-600 border-emerald-100',
    orange: 'bg-orange-50 text-orange-600 border-orange-100',
  };
  return (
    <span className={`inline-flex items-center gap-1.5 px-3 py-1 rounded-full text-xs font-semibold border ${colors[color]}`}>
      {children}
    </span>
  );
};

const StatCard = ({ label, value }) => (
  <div className="flex-1 min-w-[140px] border border-gray-100 rounded-2xl px-5 py-4 bg-white">
    <div className="text-xs text-gray-400 font-medium mb-1">{label}</div>
    <div className="text-sm font-semibold text-gray-800">{value}</div>
  </div>
);

const SectionBadge = ({ number, children }) => (
  <span className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-blue-600 text-white text-xs font-bold">
    개선 {number}. {children}
  </span>
);

const CompareLabel = ({ type }) => (
  <div className={`text-center text-xs font-semibold py-1.5 px-4 rounded-full mb-3 inline-block ${
    type === 'AS-IS'
      ? 'bg-gray-100 text-gray-500'
      : 'bg-blue-600 text-white'
  }`}>
    {type}
  </div>
);

// ─── Phone Mockups ────────────────────────────────────────────────────────────

const PhoneFrame = ({ children }) => (
  <div className="relative mx-auto w-[160px] drop-shadow-xl">
    <div className="bg-gray-900 rounded-[28px] p-[3px]">
      <div className="bg-white rounded-[25px] overflow-hidden" style={{ height: 300 }}>
        {/* Status bar */}
        <div className="bg-white px-4 pt-3 pb-1 flex items-center justify-between">
          <span className="text-[8px] font-semibold text-gray-800">9:41</span>
          <div className="flex items-center gap-0.5">
            <div className="w-4 h-[6px] bg-gray-800 rounded-sm text-[4px] flex items-center justify-end pr-0.5">
              <div className="w-3 h-[4px] bg-gray-800 rounded-sm"></div>
            </div>
          </div>
        </div>
        {children}
      </div>
    </div>
  </div>
);

const FriendListMockup = () => (
  <PhoneFrame>
    <div className="px-3 pb-2">
      <div className="text-[10px] font-bold text-gray-800 mb-2">친구 현황</div>
      {[
        { name: '바락식혜', km: '5.01 km', time: '1분 전' },
        { name: '버터블랙주', km: '7 km', time: '15분 전' },
        { name: '하늘보리', km: '2.45 km', time: '1시간 전' },
        { name: '날땡마', km: '—', time: '3일 전' },
      ].map((f, i) => (
        <div key={i} className="flex items-center gap-2 py-1.5 border-b border-gray-50">
          <div className="w-6 h-6 rounded-full bg-gray-200 flex-shrink-0" />
          <div className="flex-1 min-w-0">
            <div className="text-[8px] font-semibold text-gray-800 truncate">{f.name}</div>
            <div className="text-[7px] text-gray-400">{f.km}</div>
          </div>
          <div className="text-[7px] text-gray-400 flex-shrink-0">{f.time}</div>
        </div>
      ))}
    </div>
  </PhoneFrame>
);

const FriendMapMockup = () => (
  <PhoneFrame>
    {/* Map background */}
    <div className="relative mx-2 mb-2 rounded-xl overflow-hidden" style={{ height: 130 }}>
      <div className="absolute inset-0 bg-gradient-to-br from-green-100 via-green-50 to-blue-100">
        {/* Map lines */}
        <div className="absolute top-8 left-4 right-4 h-0.5 bg-white/60 rounded" />
        <div className="absolute top-16 left-2 right-8 h-0.5 bg-white/60 rounded" />
        <div className="absolute left-12 top-2 bottom-2 w-0.5 bg-white/60 rounded" />
        {/* Location pins */}
        <div className="absolute top-5 left-8 w-5 h-5 bg-blue-500 rounded-full border-2 border-white shadow flex items-center justify-center">
          <div className="w-2 h-2 bg-white rounded-full" />
        </div>
        <div className="absolute top-12 right-8 w-5 h-5 bg-orange-400 rounded-full border-2 border-white shadow flex items-center justify-center">
          <div className="w-2 h-2 bg-white rounded-full" />
        </div>
        <div className="absolute bottom-4 left-16 w-5 h-5 bg-purple-500 rounded-full border-2 border-white shadow flex items-center justify-center">
          <div className="w-2 h-2 bg-white rounded-full" />
        </div>
      </div>
    </div>
    {/* Friend list with location */}
    <div className="px-3">
      <div className="flex items-center justify-between mb-1.5">
        <div className="text-[10px] font-bold text-gray-800">친구 현황</div>
        <div className="w-5 h-5 rounded-full bg-gray-100 flex items-center justify-center">
          <span className="text-[6px]">👥</span>
        </div>
      </div>
      {[
        { name: '바락식혜', info: '1.0km / 경기 광명', color: 'bg-blue-500', badge: '1분 전' },
        { name: '버터블랙주', info: '7.36km / 서울 마포', color: 'bg-orange-400', badge: '15분 전' },
        { name: '하늘보리', info: '최신 러닝 기록이 없어요', color: 'bg-purple-500', btn: true },
      ].map((f, i) => (
        <div key={i} className="flex items-center gap-1.5 py-1 border-b border-gray-50">
          <div className={`w-5 h-5 rounded-full ${f.color} flex-shrink-0 border border-white`} />
          <div className="flex-1 min-w-0">
            <div className="text-[8px] font-semibold text-gray-800">{f.name}</div>
            <div className="text-[6px] text-gray-400 truncate">{f.info}</div>
          </div>
          {f.btn ? (
            <div className="text-[6px] bg-blue-500 text-white px-1.5 py-0.5 rounded-full flex-shrink-0">깨우기</div>
          ) : (
            <div className="text-[6px] text-gray-400 bg-gray-50 px-1.5 py-0.5 rounded-full flex-shrink-0">{f.badge}</div>
          )}
        </div>
      ))}
    </div>
  </PhoneFrame>
);

const WakeupAsisMockup = () => (
  <PhoneFrame>
    <div className="flex flex-col items-center justify-center h-[250px] px-4">
      <div className="w-14 h-14 rounded-full bg-gray-100 mb-3 flex items-center justify-center">
        <span className="text-2xl">😴</span>
      </div>
      <div className="text-[9px] font-semibold text-gray-700 mb-3">민희</div>
      <div className="text-[8px] text-gray-500 mb-3">3일 째 인증이 없어요</div>
      <button className="text-[7px] bg-gray-100 text-gray-600 px-4 py-1.5 rounded-full font-medium">
        꼭 찌르기
      </button>
    </div>
  </PhoneFrame>
);

const WakeupTobeMockup = () => (
  <PhoneFrame>
    {/* Map */}
    <div className="relative mx-2 mb-2 rounded-xl overflow-hidden" style={{ height: 110 }}>
      <div className="absolute inset-0 bg-gradient-to-br from-green-100 via-green-50 to-blue-100">
        <div className="absolute top-8 left-4 right-4 h-0.5 bg-white/60 rounded" />
        <div className="absolute left-12 top-2 bottom-2 w-0.5 bg-white/60 rounded" />
        <div className="absolute top-4 left-6 w-5 h-5 bg-blue-500 rounded-full border-2 border-white shadow flex items-center justify-center">
          <div className="w-2 h-2 bg-white rounded-full" />
        </div>
        <div className="absolute top-10 right-6 w-5 h-5 bg-orange-400 rounded-full border-2 border-white shadow flex items-center justify-center">
          <div className="w-2 h-2 bg-white rounded-full" />
        </div>
      </div>
    </div>
    <div className="px-3">
      <div className="flex items-center justify-between mb-1.5">
        <div className="text-[10px] font-bold text-gray-800">친구 현황</div>
      </div>
      {[
        { name: '바락식혜', info: '1.0km / 경기 광명', color: 'bg-blue-500' },
        { name: '버터블랙주', info: '최신 러닝 기록이 없어요', color: 'bg-orange-400', zzz: true },
        { name: '하늘보리', info: '최신 러닝 기록이 없어요', color: 'bg-purple-500', zzz: true, btn: true },
      ].map((f, i) => (
        <div key={i} className="flex items-center gap-1.5 py-1 border-b border-gray-50">
          <div className="relative flex-shrink-0">
            <div className={`w-5 h-5 rounded-full ${f.color} border border-white`} />
            {f.zzz && <div className="absolute -top-1 -right-1 text-[6px] bg-gray-800 text-white rounded-full w-3 h-3 flex items-center justify-center">z</div>}
          </div>
          <div className="flex-1 min-w-0">
            <div className="text-[8px] font-semibold text-gray-800">{f.name}</div>
            <div className="text-[6px] text-gray-400 truncate">{f.info}</div>
          </div>
          {f.btn && (
            <div className="text-[6px] bg-blue-500 text-white px-1.5 py-0.5 rounded-full flex-shrink-0">깨우기</div>
          )}
        </div>
      ))}
    </div>
  </PhoneFrame>
);

const LeaderboardMockup = () => (
  <PhoneFrame>
    <div className="px-3 pb-2">
      <div className="text-[9px] font-semibold text-gray-800 mb-2">홈</div>
      <div className="flex items-center gap-1 mb-3 text-[7px]">
        {['나', '달리기', '인증피드', '랭킹'].map((t, i) => (
          <span key={i} className={`px-2 py-0.5 rounded-full ${i === 0 ? 'bg-blue-600 text-white' : 'text-gray-400'}`}>{t}</span>
        ))}
      </div>
      <div className="text-[8px] text-gray-400 text-center mb-1">2025.10.15</div>
      <div className="text-center mb-3">
        <div className="text-[8px] text-gray-400">나 달린</div>
        <div className="text-lg font-bold text-gray-800">5.01km</div>
        <div className="text-[8px] text-gray-500">00:36:47</div>
        <div className="text-[8px] text-gray-500">06'39"</div>
      </div>
      <div className="flex justify-center">
        <div className="text-[8px] text-gray-300">⓪</div>
      </div>
    </div>
  </PhoneFrame>
);

const FeedMockup = () => (
  <PhoneFrame>
    <div className="px-3 pb-2">
      <div className="flex items-center justify-between mb-1">
        <div className="text-[9px] font-semibold text-gray-800">인증피드</div>
        <div className="flex gap-1">
          <div className="w-4 h-4 rounded-full bg-gray-100 flex items-center justify-center text-[6px]">👥</div>
          <div className="w-4 h-4 rounded-full bg-gray-100 flex items-center justify-center text-[6px]">🔔</div>
        </div>
      </div>
      {/* Week calendar */}
      <div className="bg-gray-50 rounded-xl p-2 mb-2">
        <div className="text-[7px] font-semibold text-gray-700 mb-1">10월 2주차</div>
        <div className="flex justify-between">
          {['일','월','화','수','목','금','토'].map((d, i) => (
            <div key={i} className="flex flex-col items-center gap-0.5">
              <div className="text-[5px] text-gray-400">{d}</div>
              <div className={`w-4 h-4 rounded-full flex items-center justify-center text-[5px] font-bold ${i === 4 ? 'bg-blue-600 text-white' : 'bg-white text-gray-600'}`}>
                {11 + i}
              </div>
              <div className="text-[5px] text-blue-500">{i < 4 ? '+' + (i+1) : i === 4 ? '+11' : ''}</div>
            </div>
          ))}
        </div>
      </div>
      <div className="flex items-center gap-1 mb-2">
        <div className="flex -space-x-1">
          {[...Array(3)].map((_, i) => (
            <div key={i} className="w-4 h-4 rounded-full bg-blue-400 border border-white" />
          ))}
        </div>
        <div className="text-[7px] text-gray-600">11명이 인증했어요!</div>
      </div>
      {/* Feed card */}
      <div className="rounded-xl overflow-hidden border border-gray-100">
        <div className="flex items-center gap-1.5 p-2">
          <div className="w-4 h-4 rounded-full bg-blue-500" />
          <div className="text-[7px] font-semibold text-gray-800">바락식혜</div>
          <div className="text-[6px] text-gray-400 ml-auto">1분 전</div>
        </div>
        <div className="bg-green-50 h-12 flex items-end p-1.5">
          <div className="flex gap-2 text-[6px] text-gray-600">
            <span>8.02km</span>
            <span>1:52:06</span>
          </div>
        </div>
      </div>
    </div>
  </PhoneFrame>
);

// ─── Section Components ───────────────────────────────────────────────────────

const fadeUp = {
  hidden: { opacity: 0, y: 32 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.6, ease: [0.22, 1, 0.36, 1] } },
};

const Improvement1 = () => (
  <motion.div
    initial="hidden" whileInView="visible" viewport={{ once: true, margin: '-80px' }}
    variants={fadeUp}
    className="bg-blue-50/50 rounded-3xl p-8 md:p-12"
  >
    <div className="grid md:grid-cols-2 gap-10 items-center">
      {/* Text */}
      <div>
        <SectionBadge number="1">친구 러닝 현황</SectionBadge>
        <h3 className="mt-4 text-2xl md:text-3xl font-bold text-gray-900 leading-snug">
          자극 받고 꾸준히 달릴 수 있도록,<br />
          <span className="text-blue-600">위치 시각화를 통해 '함께 달리는 경험'</span>을<br />
          강화했어요
        </h3>
        <p className="mt-4 text-gray-500 text-sm leading-relaxed">
          이전에는 친구들의 달린 기록만 보여 서로의 러닝 현황을 한 눈에 보기 어려웠어요.
          이에 기록과 함께 달린 위치와 상태를 추가해 '함께 달리는 느낌'을 높이고 동기부여를 강화했어요.
        </p>
        <p className="mt-2 text-gray-400 text-xs leading-relaxed">
          Previously, only friends' records were shown, making it hard to see everyone's running status.
          We added their running location and status to create a shared running experience and boost motivation.
        </p>
      </div>
      {/* Mockups */}
      <div className="flex gap-6 justify-center">
        <div className="flex flex-col items-center gap-3">
          <CompareLabel type="AS-IS" />
          <FriendListMockup />
        </div>
        <div className="flex flex-col items-center gap-3">
          <CompareLabel type="TO-BE" />
          <FriendMapMockup />
        </div>
      </div>
    </div>
  </motion.div>
);

const Improvement2 = () => (
  <motion.div
    initial="hidden" whileInView="visible" viewport={{ once: true, margin: '-80px' }}
    variants={fadeUp}
    className="bg-gray-50 rounded-3xl p-8 md:p-12"
  >
    <div className="grid md:grid-cols-2 gap-10 items-center">
      {/* Mockups first on mobile, second on desktop */}
      <div className="flex gap-6 justify-center md:order-first">
        <div className="flex flex-col items-center gap-3">
          <CompareLabel type="AS-IS" />
          <WakeupAsisMockup />
        </div>
        <div className="flex flex-col items-center gap-3">
          <CompareLabel type="TO-BE" />
          <WakeupTobeMockup />
        </div>
      </div>
      {/* Text */}
      <div>
        <SectionBadge number="2">깨우기 알림</SectionBadge>
        <h3 className="mt-4 text-2xl md:text-3xl font-bold text-gray-900 leading-snug">
          양방향 소통이 더 쉽도록{' '}
          <span className="text-blue-600">'깨우기' 알림의<br />위치와 표현을 다듬었어요</span>
        </h3>
        <p className="mt-4 text-gray-500 text-sm leading-relaxed">
          이전에는 깨우기 기능이 피드에 있어 기록과 섞여 눌러보기 어려웠어요.
          이에 기능을 친구 현황으로 옮기고, 3일 이상 달리지 않은 친구에게 Zzz 표시를 추가해 사용 시점을 명확히 했어요.
        </p>
        <p className="mt-2 text-gray-400 text-xs leading-relaxed">
          Previously, the wake-up feature was buried in the feed and hard to tap.
          We moved it to the friend status screen and added a Zzz marker for friends inactive for three days.
        </p>
      </div>
    </div>
  </motion.div>
);

const Improvement3 = () => (
  <motion.div
    initial="hidden" whileInView="visible" viewport={{ once: true, margin: '-80px' }}
    variants={fadeUp}
    className="bg-blue-50/50 rounded-3xl p-8 md:p-12"
  >
    <div className="grid md:grid-cols-2 gap-10 items-center">
      {/* Text */}
      <div>
        <SectionBadge number="3">인증 노출 방식</SectionBadge>
        <h3 className="mt-4 text-2xl md:text-3xl font-bold text-gray-900 leading-snug">
          리더보드 구조로 비교하기 보다<br />
          <span className="text-blue-600">함께 인증 기록을 쌓아가는 즐거움</span>이<br />
          느껴지도록 수정했어요
        </h3>
        <p className="mt-4 text-gray-500 text-sm leading-relaxed">
          비교 중심의 리더보드에서 벗어나, 오늘 인증한 친구 수와 실시간으로 쌓이는 인증 기록을 강조해
          친구들의 활동을 확인하고 자연스럽게 동기부여를 느낄 수 있게 했어요.
        </p>
        <p className="mt-2 text-gray-400 text-xs leading-relaxed">
          We moved away from comparison-based leaderboards and emphasized today's friend activity and
          real-time records, making it easier to stay aware and motivated.
        </p>
      </div>
      {/* Mockups */}
      <div className="flex gap-6 justify-center">
        <div className="flex flex-col items-center gap-3">
          <CompareLabel type="AS-IS" />
          <LeaderboardMockup />
        </div>
        <div className="flex flex-col items-center gap-3">
          <CompareLabel type="TO-BE" />
          <FeedMockup />
        </div>
      </div>
    </div>
  </motion.div>
);

// ─── Case Study ───────────────────────────────────────────────────────────────

const CaseStudy = () => (
  <section id="works" className="py-24 px-4 md:px-8">
    <div className="max-w-5xl mx-auto">
      {/* Study Header */}
      <motion.div
        initial="hidden" whileInView="visible" viewport={{ once: true }}
        variants={fadeUp}
        className="mb-16"
      >
        <Tag color="blue">Usability Test</Tag>
        <h2 className="mt-4 text-3xl md:text-5xl font-bold text-gray-900 leading-tight">
          UT를 통해 사용성을 검증하고,<br />
          친구와 함께하는 경험 전반을 개선했어요
        </h2>
        <p className="mt-3 text-gray-400 text-sm">
          We validated the usability through UT and improved the overall experience of running together with friends.
        </p>
        {/* Stats */}
        <div className="flex flex-wrap gap-3 mt-8">
          <StatCard label="총 응답자" value="러닝 경험자 6명" />
          <StatCard label="기간" value="2025.09.01–07" />
          <StatCard label="리서치 도구" value="Maze, Figma 프로토타입" />
        </div>
      </motion.div>

      {/* Improvements */}
      <div className="flex flex-col gap-8">
        <Improvement1 />
        <Improvement2 />
        <Improvement3 />
      </div>
    </div>
  </section>
);

// ─── Nav ──────────────────────────────────────────────────────────────────────

const Nav = () => {
  const [scrolled, setScrolled] = useState(false);

  return (
    <nav className={`fixed top-0 w-full z-50 transition-all duration-300 ${
      scrolled ? 'bg-white/90 backdrop-blur-xl shadow-sm' : 'bg-white'
    } border-b border-gray-100`}>
      <div className="max-w-5xl mx-auto px-4 md:px-8 h-14 flex items-center justify-between">
        <a href="#" className="text-base font-bold text-gray-900 tracking-tight">이지원</a>
        <div className="hidden md:flex items-center gap-8 text-sm text-gray-500 font-medium">
          {[['About', '#about'], ['Works', '#works'], ['Contact', '#contact']].map(([label, href]) => (
            <a key={label} href={href} className="hover:text-gray-900 transition-colors">{label}</a>
          ))}
        </div>
        <a
          href="mailto:sjso036976@gmail.com"
          className="text-xs font-semibold bg-blue-600 hover:bg-blue-700 text-white px-4 py-2 rounded-full transition-colors"
        >
          Contact
        </a>
      </div>
    </nav>
  );
};

// ─── Hero ─────────────────────────────────────────────────────────────────────

const Hero = () => (
  <section id="about" className="pt-28 pb-20 px-4 md:px-8">
    <div className="max-w-5xl mx-auto">
      <motion.div initial={{ opacity: 0, y: 24 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.7, ease: [0.22, 1, 0.36, 1] }}>
        <Tag color="blue">UX Designer & Researcher</Tag>
        <h1 className="mt-5 text-4xl md:text-6xl font-bold text-gray-900 leading-tight tracking-tight">
          사용자 경험을 <span className="text-blue-600">설계하고</span>,<br />
          데이터로 <span className="text-blue-600">검증해요.</span>
        </h1>
        <p className="mt-5 text-gray-500 text-base md:text-lg leading-relaxed max-w-xl">
          성신여자대학교 미디어커뮤니케이션학과에서 UX 리서치와 인터랙션 디자인을 공부하고 있어요.
          사용자의 맥락을 이해하고, 그 안에서 의미 있는 경험을 만들어나갑니다.
        </p>
        <div className="flex flex-wrap items-center gap-3 mt-8">
          <a
            href="#works"
            className="inline-flex items-center gap-2 bg-blue-600 hover:bg-blue-700 text-white text-sm font-semibold px-6 py-3 rounded-full transition-colors"
          >
            프로젝트 보기 <ChevronRight size={16} />
          </a>
          <a
            href="mailto:sjso036976@gmail.com"
            className="inline-flex items-center gap-2 border border-gray-200 hover:border-gray-300 text-gray-700 text-sm font-medium px-6 py-3 rounded-full transition-colors"
          >
            <Mail size={14} /> 이메일 보내기
          </a>
        </div>
      </motion.div>

      {/* Highlights */}
      <motion.div
        initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.3, duration: 0.7 }}
        className="grid grid-cols-2 md:grid-cols-4 gap-4 mt-16"
      >
        {[
          { icon: <MapPin size={18} className="text-blue-500" />, label: '위치 기반 UX', desc: '공간 인터랙션 설계' },
          { icon: <Bell size={18} className="text-purple-500" />, label: '알림 시스템', desc: '적시 개입 설계' },
          { icon: <Award size={18} className="text-emerald-500" />, label: '동기부여 UX', desc: '행동 변화 디자인' },
          { icon: <ArrowUpRight size={18} className="text-orange-500" />, label: '사용성 검증', desc: 'UT & 데이터 분석' },
        ].map((item, i) => (
          <div key={i} className="bg-gray-50 hover:bg-blue-50/50 rounded-2xl p-4 transition-colors border border-gray-100">
            <div className="mb-2">{item.icon}</div>
            <div className="text-sm font-semibold text-gray-800">{item.label}</div>
            <div className="text-xs text-gray-400 mt-0.5">{item.desc}</div>
          </div>
        ))}
      </motion.div>
    </div>
  </section>
);

// ─── Project Cards ────────────────────────────────────────────────────────────

const projects = [
  {
    tag: 'Usability Test',
    tagColor: 'blue',
    title: '러닝 앱 친구와 함께하기 기능 개선',
    desc: 'UT를 통해 친구 현황, 깨우기 알림, 인증 피드를 개선해 함께 달리는 경험을 강화했어요.',
    tools: ['Maze', 'Figma', 'User Interview'],
    year: '2025',
    anchor: '#works',
  },
  {
    tag: 'Product Design',
    tagColor: 'purple',
    title: '대학 커뮤니티 앱 정보 구조 재설계',
    desc: '카드 소팅과 트리 테스트를 통해 정보 구조를 개선하고 탐색 효율을 높였어요.',
    tools: ['OptimalSort', 'Figma'],
    year: '2025',
    anchor: '#',
  },
  {
    tag: 'Research',
    tagColor: 'green',
    title: '미디어 소비 행태 리서치',
    desc: '20대 미디어 소비 패턴 분석을 통해 콘텐츠 추천 알고리즘 개선 방향을 도출했어요.',
    tools: ['설문조사', '심층 인터뷰'],
    year: '2024',
    anchor: '#',
  },
];

const ProjectCards = () => (
  <section className="pb-24 px-4 md:px-8 bg-white">
    <div className="max-w-5xl mx-auto">
      <div className="flex items-baseline justify-between mb-8">
        <h2 className="text-2xl font-bold text-gray-900">Projects</h2>
        <span className="text-sm text-gray-400">Selected works</span>
      </div>
      <div className="grid md:grid-cols-3 gap-5">
        {projects.map((p, i) => (
          <motion.a
            key={i} href={p.anchor}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: i * 0.1, duration: 0.5 }}
            className="group block bg-gray-50 hover:bg-white border border-gray-100 hover:border-blue-100 hover:shadow-md rounded-2xl p-6 transition-all"
          >
            <div className="flex items-start justify-between mb-3">
              <Tag color={p.tagColor}>{p.tag}</Tag>
              <ArrowUpRight size={16} className="text-gray-300 group-hover:text-blue-500 transition-colors mt-0.5" />
            </div>
            <h3 className="text-base font-semibold text-gray-800 leading-snug mb-2">{p.title}</h3>
            <p className="text-sm text-gray-400 leading-relaxed mb-4">{p.desc}</p>
            <div className="flex flex-wrap gap-1.5">
              {p.tools.map((t, j) => (
                <span key={j} className="text-xs bg-white border border-gray-200 text-gray-500 px-2 py-0.5 rounded-full">{t}</span>
              ))}
            </div>
            <div className="mt-4 text-xs text-gray-300 font-medium">{p.year}</div>
          </motion.a>
        ))}
      </div>
    </div>
  </section>
);

// ─── Footer ───────────────────────────────────────────────────────────────────

const Footer = () => (
  <footer id="contact" className="bg-gray-900 text-white py-20 px-4 md:px-8">
    <div className="max-w-5xl mx-auto">
      <div className="flex flex-col md:flex-row items-start justify-between gap-10">
        <div>
          <h2 className="text-3xl md:text-5xl font-bold leading-tight mb-3">
            함께 만들어갈<br />
            <span className="text-blue-400">경험이 있나요?</span>
          </h2>
          <p className="text-gray-400 text-sm mt-4 max-w-sm leading-relaxed">
            UX 리서치, 프로덕트 디자인, 콘텐츠 기획 분야의 협업을 환영합니다.
            언제든 편하게 연락주세요.
          </p>
        </div>
        <div className="flex flex-col gap-4">
          <a
            href="mailto:sjso036976@gmail.com"
            className="inline-flex items-center gap-2 bg-blue-600 hover:bg-blue-700 text-white font-semibold px-6 py-3 rounded-full transition-colors text-sm"
          >
            <Mail size={16} /> sjso036976@gmail.com
          </a>
          <a
            href="https://github.com"
            className="inline-flex items-center gap-2 border border-gray-700 hover:border-gray-500 text-gray-300 font-medium px-6 py-3 rounded-full transition-colors text-sm"
          >
            <Github size={16} /> GitHub
          </a>
        </div>
      </div>
      <div className="border-t border-gray-800 mt-16 pt-8 flex items-center justify-between text-xs text-gray-600">
        <span>© 2026 이지원. All rights reserved.</span>
        <span className="text-gray-700">UX Designer & Researcher</span>
      </div>
    </div>
  </footer>
);

// ─── App ──────────────────────────────────────────────────────────────────────

const App = () => (
  <div className="min-h-screen bg-white text-gray-900 font-sans">
    <Nav />
    <Hero />
    <ProjectCards />
    <CaseStudy />
    <Footer />
  </div>
);

export default App;
