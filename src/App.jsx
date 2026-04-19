
import React, { useState, useEffect } from 'react';
import { Play, ChevronRight, Mail, Instagram, Youtube, ArrowUpRight, Camera, Mic, Clapperboard } from 'lucide-react';

const App = () => {
  const [activeTab, setActiveTab] = useState('All');

  const projects = [
    {
      id: '01',
      title: '당근이세요?',
      category: 'Cinematic',
      size: 'large',
      thumbnail: 'https://images.unsplash.com/photo-1538332576228-eb5b4c4de6ee?auto=format&fit=crop&q=80&w=1200',
      description: '당근거래자가 이상하다?! 미스테리한 현장을 담은 단편 시네마.',
      roles: ['기획', '촬영', '편집', '연출', '대본'],
      color: 'from-rose-500/20 to-transparent',
      link: 'https://youtu.be/r_0z11OQ9rA?si=GW-KSj2lHnGbQKl_' 
    },
    {
      id: '02',
      title: '양초',
      category: 'Cinematic',
      size: 'small',
      thumbnail: 'https://images.unsplash.com/photo-1550745165-9bc0b252726f?auto=format&fit=crop&q=80&w=800',
      description: '바람피우는 여자친구를 잡는 법!',
      roles: ['기획', '촬영', '대본'],
      color: 'from-blue-500/20 to-transparent',
      link: '#'
    },
    {
      id: '03',
      title: '틈',
      category: 'Cinematic',
      size: 'small',
      thumbnail: 'https://images.unsplash.com/photo-1493225255756-d9584f8606e9?auto=format&fit=crop&q=80&w=800',
      description: '홀로 감내해야했던 고통 속 내밀어지는 손',
      roles: ['기획', '연출', '촬영'],
      color: 'from-amber-500/20 to-transparent',
      link: '#'
    },
    {
      id: '04',
      title: 'SEBS Stock Race',
      category: 'Variety',
      size: 'medium',
      thumbnail: 'https://images.unsplash.com/photo-1441974231531-c6227db76b6e?auto=format&fit=crop&q=80&w=1000',
      description: '주식 레이스를 통해 결정되는 상속자! 셉스스탁레이스',
      roles: ['기획', '연출', '촬영', '편집', '그래픽 디자인'],
      color: 'from-emerald-500/20 to-transparent',
      link: 'https://youtu.be/z-HC8O-JFVo?si=hYnhYgDQzgPLpoHj'
    },
    {
      id: '05',
      title: '여대추리반',
      category: 'Entertainment',
      size: 'medium',
      thumbnail: 'https://images.unsplash.com/photo-1489411032822-26127e997f6c?auto=format&fit=crop&q=80&w=1000',
      description: '수상한 취업 캠프의 진실을 밝하라. 미스테리 추리반의 스토리',
      roles: ['기획', '촬영', '연출', '편집'],
      color: 'from-orange-500/20 to-transparent',
      link: '#'
    },
    {
      id: '06',
      title: '환승고향',
      category: 'Variety',
      size: 'small',
      thumbnail: 'https://images.unsplash.com/photo-1639762681485-074b7f938ba0?auto=format&fit=crop&q=80&w=800',
      description: '고향도 환승할 수 있을까? 본격 고향 자랑 콘텐츠',
      roles: ['기획', '촬영', '연출', '편집', '출연'],
      color: 'from-indigo-500/20 to-transparent',
      link: 'https://youtu.be/gZ1aq7uVbU4?si=hWumkcCiNIfWLYqN'
    },
    {
      id: '07',
      title: '[2025 SEBS 기획취재] 동결되지 않은 것들 : 등록금의 무게와 변화의 목소리',
      category: 'Documentary',
      size: 'small',
      thumbnail: 'https://images.unsplash.com/photo-1515886657613-9f3515b0c78f?auto=format&fit=crop&q=80&w=800',
      description: '대학 등록금 동결 뒤에 숨겨진 학생들의 목소리를 담은 다큐멘터리.',
      roles: ['기획', '촬영', '그래픽 디자인'],
      color: 'from-pink-500/20 to-transparent',
      link: '#'
    },
    {
      id: '08',
      title: '날개를 만드는 법',
      category: 'Art Film',
      size: 'large',
      thumbnail: 'https://images.unsplash.com/photo-1541339907198-e08756eaa83e?auto=format&fit=crop&q=80&w=1200',
      description: '형태 없는 생각들의 시각적 조각.',
      roles: ['기획', '촬영', '연출', '편집'],
      color: 'from-cyan-500/20 to-transparent',
      link: 'https://youtu.be/xdxUdqJnuoY?si=9u9K3MGGvsUcj3pN'
    }
  ];

  const handleProjectClick = (link) => {
    if (link && link !== '#') {
      window.open(link, '_blank', 'noopener,noreferrer');
    }
  };

  return (
    <div className="min-h-screen bg-[#000000] text-[#f5f5f7] font-sans antialiased selection:bg-blue-500/30">
      {/* Apple-style Global Nav */}
      <nav className="fixed top-0 w-full z-[100] bg-black/70 backdrop-blur-xl border-b border-white/5">
        <div className="max-w-[1200px] mx-auto px-6 h-12 flex items-center justify-between">
          <div className="text-lg font-semibold tracking-tight cursor-pointer hover:opacity-70 transition-opacity">
            Visual Studio
          </div>
          <div className="hidden md:flex gap-8 text-[12px] font-medium text-zinc-400">
            {['Showreel', 'Works', 'About', 'Contact'].map(item => (
              <a key={item} href={`#${item.toLowerCase()}`} className="hover:text-white transition-colors">{item}</a>
            ))}
          </div>
          <button className="bg-[#0071e3] hover:bg-[#0077ed] text-white px-3 py-1 rounded-full text-[12px] font-medium transition-all">
            Inquiry
          </button>
        </div>
      </nav>

      {/* Hero Section */}
      <section className="relative h-screen flex flex-col items-center justify-center text-center px-6 overflow-hidden">
        <div className="z-10 max-w-4xl">
          <h1 className="text-[14vw] md:text-[160px] font-bold tracking-tighter leading-none mb-4 bg-clip-text text-transparent bg-gradient-to-b from-white to-zinc-500 animate-reveal">
            Immersive.
          </h1>
          <p className="text-xl md:text-2xl text-zinc-400 font-medium tracking-tight mb-10 max-w-2xl mx-auto opacity-0 animate-[fadeInUp_1s_ease_0.5s_forwards]">
            영상의 경계를 넘어선 감각의 확장. <br/> 8개의 프레임으로 증명하는 압도적 몰입감.
          </p>
          <div className="flex justify-center gap-6 opacity-0 animate-[fadeInUp_1s_ease_0.8s_forwards]">
            <button className="group flex items-center gap-2 bg-white text-black px-8 py-3.5 rounded-full font-semibold hover:bg-zinc-200 transition-all active:scale-95">
              <Play size={18} fill="black" /> 2026 Showreel
            </button>
          </div>
        </div>
        
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-blue-600/10 rounded-full blur-[120px] -z-10"></div>
      </section>

      {/* Projects Grid */}
      <section id="works" className="max-w-[1200px] mx-auto px-6 py-32">
        <div className="flex flex-col md:flex-row items-baseline justify-between mb-20 gap-4">
          <h2 className="text-4xl md:text-6xl font-bold tracking-tight">Recent Projects</h2>
          <p className="text-zinc-500 font-medium">8 Selected Works / 2025-2026</p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-12 gap-6">
          {projects.map((p) => (
            <div 
              key={p.id}
              onClick={() => handleProjectClick(p.link)}
              className={`group relative overflow-hidden rounded-[2.5rem] bg-[#1d1d1f] border border-white/5 cursor-pointer 
                ${p.size === 'large' ? 'md:col-span-12' : p.size === 'medium' ? 'md:col-span-8' : 'md:col-span-4'}
                aspect-square md:aspect-auto md:h-[500px] transition-all duration-500 hover:shadow-2xl hover:shadow-blue-500/10`}
            >
              {/* Background Image & Overlay */}
              <div className="absolute inset-0">
                <img 
                  src={p.thumbnail} 
                  alt={p.title} 
                  className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105 opacity-60" 
                />
                <div className={`absolute inset-0 bg-gradient-to-t ${p.color} via-black/20 to-transparent opacity-60`}></div>
              </div>

              {/* Content */}
              <div className="absolute inset-0 p-10 flex flex-col justify-end items-start">
                <div className="mb-auto">
                   <span className="text-[12px] font-bold uppercase tracking-widest text-white/40 bg-white/5 backdrop-blur-md px-3 py-1 rounded-full border border-white/10">
                    {p.category}
                  </span>
                </div>
                <div className="w-full transform transition-transform duration-500 group-hover:-translate-y-2">
                  <div className="flex items-center justify-between w-full mb-2">
                    <h3 className="text-3xl md:text-5xl font-bold tracking-tight group-hover:underline decoration-blue-500 underline-offset-8">
                      {p.title}
                    </h3>
                    <div className="w-12 h-12 rounded-full bg-white/10 backdrop-blur-md border border-white/20 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity">
                      <ArrowUpRight size={20} />
                    </div>
                  </div>
                  <p className="text-lg text-zinc-400 max-w-md opacity-0 group-hover:opacity-100 transition-opacity duration-500 mb-4">
                    {p.description}
                  </p>
                  
                  {/* 추가된 역할(Role) 태그 섹션 */}
                  <div className="flex flex-wrap gap-2 opacity-0 group-hover:opacity-100 transition-opacity duration-700 delay-100">
                    {p.roles && p.roles.map((role, index) => (
                      <span key={index} className="text-[11px] font-medium px-2.5 py-1 rounded border border-zinc-700 bg-zinc-900/50 text-zinc-300">
                        {role}
                      </span>
                    ))}
                  </div>

                </div>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* Expertise Section */}
      <section className="bg-[#1d1d1f] py-40 px-6">
        <div className="max-w-[1200px] mx-auto">
          <div className="grid md:grid-cols-2 gap-20 items-center">
            <h2 className="text-5xl md:text-7xl font-bold tracking-tight leading-[1.1]">
              감동을 만드는 <br/> <span className="text-zinc-500">정교한 디테일.</span>
            </h2>
            <div className="space-y-12">
              {[
                { title: 'Variety Production', desc: '시청자의 눈길을 사로잡는 재치 있는 편집과 구성 능력을 갖추고 있습니다.' },
                { title: 'Cinematic Direction', desc: '스토리의 본질을 꿰뚫는 연출로 관객을 압도합니다.' },
                { title: 'Motion Graphics', desc: '예능의 재미를 배가시키는 역동적인 자막과 그래픽을 구현합니다.' }
              ].map((skill, i) => (
                <div key={i} className="group cursor-default">
                  <h4 className="text-xl font-bold mb-3 flex items-center gap-3">
                    <span className="text-blue-500 text-sm font-mono">0{i+1}</span>
                    {skill.title}
                  </h4>
                  <p className="text-zinc-400 leading-relaxed">{skill.desc}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Experience & Impact Section (About) */}
      <section id="about" className="py-40 px-6">
        <div className="max-w-[1200px] mx-auto">
          <div className="mb-20">
            <h2 className="text-4xl md:text-6xl font-bold tracking-tight mb-6">Beyond the Frame.</h2>
            <p className="text-zinc-500 font-medium text-lg max-w-2xl">
              카메라 안팎을 넘나들며 쌓아온 제작 경험과, 직접 채널을 운영하며 증명한 성장의 기록입니다.
            </p>
          </div>

          {/* Metrics Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-6">
            <div className="bg-[#1d1d1f] rounded-[2.5rem] p-10 border border-white/5 flex flex-col justify-between h-[240px] hover:bg-[#252528] transition-colors cursor-default">
              <div className="flex justify-between items-start mb-4">
                <div className="text-sm font-bold text-zinc-500 uppercase tracking-widest">Instagram</div>
                <Instagram size={24} className="text-pink-500" />
              </div>
              <div>
                <div className="text-6xl md:text-8xl font-bold text-white tracking-tighter mb-2">796<span className="text-pink-500">+</span></div>
                <div className="text-zinc-400 font-medium">직접 채널을 운영하며 시각적 소통을 통해 모은 팔로워</div>
              </div>
            </div>
            <div className="bg-[#1d1d1f] rounded-[2.5rem] p-10 border border-white/5 flex flex-col justify-between h-[240px] hover:bg-[#252528] transition-colors cursor-default">
              <div className="flex justify-between items-start mb-4">
                <div className="text-sm font-bold text-zinc-500 uppercase tracking-widest">YouTube</div>
                <Youtube size={24} className="text-red-500" />
              </div>
              <div>
                <div className="text-6xl md:text-8xl font-bold text-white tracking-tighter mb-2">198<span className="text-red-500">+</span></div>
                <div className="text-zinc-400 font-medium">유튜브 콘텐츠 기획 및 제작을 통해 달성한 구독자 수</div>
              </div>
            </div>
          </div>

          {/* Career Grid */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {/* 1. Content Production */}
            <div className="bg-[#1d1d1f] rounded-[2.5rem] p-10 border border-white/5 hover:border-white/10 transition-all">
              <div className="w-12 h-12 bg-white/5 rounded-full flex items-center justify-center mb-8 border border-white/10">
                <Clapperboard size={20} className="text-white" />
              </div>
              <h3 className="text-2xl font-bold mb-8 tracking-tight">Content Production</h3>
              <ul className="space-y-5 text-sm leading-relaxed">
                <li className="flex flex-col gap-1.5">
                  <span className="text-white font-semibold">단편 드라마 & 아트필름 제작</span>
                  <span className="text-zinc-500">기획, 시나리오, 연출, 촬영, 편집</span>
                </li>
                <li className="flex flex-col gap-1.5">
                  <span className="text-white font-semibold">유튜브 & 기획 취재 영상 제작</span>
                  <span className="text-zinc-500">기획, 촬영, 편집, 그래픽 제작</span>
                </li>
                <li className="flex flex-col gap-1.5">
                  <span className="text-white font-semibold">교내 뉴스 제작</span>
                  <span className="text-zinc-500">기획, 촬영, 편집</span>
                </li>
              </ul>
            </div>

            {/* 2. Live & Event */}
            <div className="bg-[#1d1d1f] rounded-[2.5rem] p-10 border border-white/5 hover:border-white/10 transition-all">
              <div className="w-12 h-12 bg-white/5 rounded-full flex items-center justify-center mb-8 border border-white/10">
                <Camera size={20} className="text-white" />
              </div>
              <h3 className="text-2xl font-bold mb-8 tracking-tight">Live & Event</h3>
              <ul className="space-y-5 text-sm leading-relaxed">
                <li className="flex flex-col gap-1.5">
                  <span className="text-white font-semibold">성신여대 대동제(축제) 카메라 총괄</span>
                  <span className="text-zinc-500">2024 녹화 / 2025 실시간 송출 담당</span>
                </li>
                <li className="flex flex-col gap-1.5">
                  <span className="text-white font-semibold">제50회 방송제 행사 개최</span>
                  <span className="text-zinc-500">기획, 디자인, 현장 스태프 총괄</span>
                </li>
                <li className="flex flex-col gap-1.5">
                  <span className="text-white font-semibold">학내 언론 행사 주최</span>
                  <span className="text-zinc-500">행사 기획 및 현장 스태프 담당</span>
                </li>
              </ul>
            </div>

            {/* 3. Audio & Institutional */}
            <div className="bg-[#1d1d1f] rounded-[2.5rem] p-10 border border-white/5 hover:border-white/10 transition-all">
              <div className="w-12 h-12 bg-white/5 rounded-full flex items-center justify-center mb-8 border border-white/10">
                <Mic size={20} className="text-white" />
              </div>
              <h3 className="text-2xl font-bold mb-8 tracking-tight">Audio & Institutional</h3>
              <ul className="space-y-5 text-sm leading-relaxed">
                <li className="flex flex-col gap-1.5">
                  <span className="text-white font-semibold">교내 오디오 방송 기획 및 송출</span>
                  <span className="text-zinc-500">대본, 엔지니어, 아나운서 / 2025-2 일정표 총괄</span>
                </li>
                <li className="flex flex-col gap-1.5">
                  <span className="text-white font-semibold">2025 수강신청 안내 영상 제작</span>
                  <span className="text-zinc-500">교무처 학사운영팀, 창의융합대학 교학팀 협업</span>
                </li>
                <li className="flex flex-col gap-1.5">
                  <span className="text-white font-semibold">2025 제21대 대선 안내 영상</span>
                  <span className="text-zinc-500">편집 및 그래픽 제작</span>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="py-40 px-6 text-center overflow-hidden">
        <div className="max-w-4xl mx-auto relative">
          <h2 className="text-[12vw] md:text-[180px] font-bold tracking-tighter leading-none mb-20 opacity-10 select-none absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-full">
            CONNECT
          </h2>
          <div className="relative z-10">
            <p className="text-2xl font-medium mb-10 tracking-tight">새로운 시각적 여정을 시작할 준비가 되셨나요?</p>
            <a href="mailto:hello@visual.studio" className="inline-block text-4xl md:text-6xl font-bold tracking-tighter border-b-4 border-blue-600 pb-2 hover:text-blue-500 transition-all mb-16">
              hello@visual.studio
            </a>
            <div className="flex justify-center gap-10 text-zinc-500">
              <Instagram className="cursor-pointer hover:text-white transition-colors" />
              <Youtube className="cursor-pointer hover:text-white transition-colors" />
              <Mail className="cursor-pointer hover:text-white transition-colors" />
            </div>
          </div>
        </div>
        <div className="mt-40 text-[11px] font-medium text-zinc-600 uppercase tracking-[0.3em]">
          © 2026 Visual Studio. All Rights Reserved.
        </div>
      </footer>

      <style dangerouslySetInnerHTML={{ __html: `
        @keyframes reveal {
          from { clip-path: inset(100% 0 0 0); transform: translateY(50px); }
          to { clip-path: inset(0 0 0 0); transform: translateY(0); }
        }
        @keyframes fadeInUp {
          from { opacity: 0; transform: translateY(20px); }
          to { opacity: 1; transform: translateY(0); }
        }
        .animate-reveal {
          animation: reveal 1.5s cubic-bezier(0.19, 1, 0.22, 1) forwards;
        }
        body {
          scrollbar-width: none;
          -ms-overflow-style: none;
          background-color: #000;
        }
        body::-webkit-scrollbar {
          display: none;
        }
        .tracking-tighter { letter-spacing: -0.05em; }
        .tracking-tight { letter-spacing: -0.02em; }
      `}} />
    </div>
  );
};

export default App;
