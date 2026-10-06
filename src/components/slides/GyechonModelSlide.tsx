import React, { useState } from 'react';
import { BookOpen, Zap, Music, MapPin, School, User, Home, Network, Sparkles, RefreshCw } from 'lucide-react';

export const GyechonModelSlide: React.FC = () => {
  const [selectedDomain, setSelectedDomain] = useState<number | null>(null);

  const domains = [
    {
      id: 1,
      name: '① 학습성장',
      sub: '자기주도적 학습역량 강화',
      icon: BookOpen,
      color: 'border-emerald-500 bg-emerald-950/40 text-emerald-300',
      tagColor: 'bg-emerald-500/20 text-emerald-400',
      programs: ['원어민 1:1 화상영어', '5단계 학습코칭 프로그램'],
      effects: ['자기주도학습 습관 형성', '학습 자신감 및 성취감 향상'],
      relation: '기초역량 형성이 다른 영역의 성장을 단단히 뒷받침',
    },
    {
      id: 2,
      name: '② 진로·미래역량',
      sub: '도전과 성취를 통한 미래역량 강화',
      icon: Zap,
      color: 'border-teal-500 bg-teal-950/40 text-teal-300',
      tagColor: 'bg-teal-500/20 text-teal-400',
      programs: ['무인멀티콥터 1종 조종자 자격취득', '스마트 미래산업 탐색'],
      effects: ['도전 경험 및 한계 극복', '자기효능감 향상 & 진로 구체화'],
      relation: '학습역량이 진로 탐색과 고난도 도전의 기반이 됨',
    },
    {
      id: 3,
      name: '③ 문화예술·공동체',
      sub: '예술경험 확장을 통한 자기성장·공동체',
      icon: Music,
      color: 'border-cyan-500 bg-cyan-950/40 text-cyan-300',
      tagColor: 'bg-cyan-500/20 text-cyan-400',
      programs: ['계촌클래식축제 오케스트라', '서울 오케스트라 페스티벌', 'LP 인문체험'],
      effects: ['문화감수성 및 예술적 소양', '공동체 의식 & 자기표현력'],
      relation: '문화예술 활동이 공동체 의식과 유학생 관계 형성을 촉진',
    },
    {
      id: 4,
      name: '④ 지역연계·공동체',
      sub: '지역과 함께 배우는 공동체 기반 교육',
      icon: MapPin,
      color: 'border-amber-500 bg-amber-950/40 text-amber-300',
      tagColor: 'bg-amber-500/20 text-amber-400',
      programs: ['평창바로알기(서울대목장)', '심리·정서지원 체험', '학생자치 학교야영'],
      effects: ['장소기반교육(PBE) 실현', '관계 형성, 학교 적응, 공동체 회복력'],
      relation: '지역 자원을 교육과정으로 연결하여 학교와 마을의 상생 구조 실현',
    },
  ];

  const stakeholders = [
    { title: '학교', desc: '교육과정 다양화 · 교육력 전문성 · 작은학교 강점 극대화', icon: School },
    { title: '학생', desc: '전인적 성장 · 미래역량 함양 · 자기주도적 삶의 태도', icon: User },
    { title: '마을(지역)', desc: '교육자원 활용 · 마을공동체 활성화 · 지역 가치 재발견', icon: Home },
    { title: '협력체계', desc: '학교-가정-마을 협력 · 전문기관 연계 · 거버넌스 구축', icon: Network },
    { title: '지속가능성', desc: '선순환 구조 확립 · 농어촌유학 모델 확산 · 상생 발전', icon: RefreshCw },
  ];

  return (
    <div className="space-y-4">
      {/* Title Header */}
      <div className="border-b border-slate-800 pb-3">
        <div className="flex items-center gap-2 text-xs font-semibold text-emerald-400">
          <span>Ⅵ. 연구(운영) 결과</span>
          <span>·</span>
          <span>[그림 14] 계촌형 농어촌유학 모델 도출</span>
        </div>
        <h2 className="text-2xl md:text-3xl font-bold font-serif-kr text-white mt-1">
          계촌형 농어촌유학 모델: 배움과 삶의 상생 교육생태계
        </h2>
        <p className="text-sm text-slate-400 mt-0.5">
          배움과 삶이 하나 되어 학생 · 학교 · 마을이 함께 성장하는 지속가능한 교육생태계
        </p>
      </div>

      {/* Main Model Diagram Canvas */}
      <div className="p-4 rounded-xl bg-slate-900/90 border border-slate-800 space-y-4 shadow-xl">
        {/* Central 4-Domain Orbital Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-3">
          {domains.map((dom) => {
            const Icon = dom.icon;
            const isSelected = selectedDomain === dom.id;
            return (
              <div
                key={dom.id}
                onClick={() => setSelectedDomain(isSelected ? null : dom.id)}
                className={`p-3.5 rounded-xl border transition-all cursor-pointer flex flex-col justify-between ${dom.color} ${
                  isSelected ? 'ring-2 ring-emerald-400 scale-[1.02]' : 'hover:border-slate-600'
                }`}
              >
                <div>
                  <div className="flex items-center justify-between mb-2">
                    <span className={`text-[11px] font-bold px-2 py-0.5 rounded ${dom.tagColor}`}>
                      {dom.name}
                    </span>
                    <Icon className="w-4 h-4 text-slate-300" />
                  </div>
                  <h4 className="text-xs font-bold text-white mb-2">{dom.sub}</h4>

                  <div className="space-y-1.5 text-[11px]">
                    <div className="bg-slate-950/70 p-1.5 rounded border border-slate-800/80">
                      <span className="text-slate-400 block text-[10px]">핵심 프로그램:</span>
                      <span className="text-slate-200 font-medium">{dom.programs.join(' · ')}</span>
                    </div>
                    <div className="bg-slate-950/70 p-1.5 rounded border border-slate-800/80">
                      <span className="text-slate-400 block text-[10px]">변화 성과:</span>
                      <span className="text-slate-200 font-medium">{dom.effects.join(' · ')}</span>
                    </div>
                  </div>
                </div>

                <div className="mt-2.5 pt-2 border-t border-slate-800 text-[10px] text-slate-300 italic">
                  {dom.relation}
                </div>
              </div>
            );
          })}
        </div>

        {/* Central Core Connection Ribbon */}
        <div className="p-2.5 rounded-lg bg-gradient-to-r from-emerald-950 via-slate-950 to-teal-950 border border-emerald-500/30 text-center flex items-center justify-center gap-2">
          <Sparkles className="w-4 h-4 text-emerald-400" />
          <span className="text-xs font-bold text-white">
            중앙 코어: <strong className="text-emerald-300 font-serif-kr">계촌형 농어촌유학 모델 (학생 중심 맞춤형 교육과정)</strong>
          </span>
          <span className="text-[11px] text-slate-400 hidden sm:inline">
            — 4대 영역이 상호 유기적으로 결합되어 학생 한 명 한 명을 온전하게 지원
          </span>
        </div>

        {/* Bottom: 5 Key Governance Stakeholders */}
        <div>
          <span className="text-xs font-bold text-slate-300 block mb-2">
            지속가능한 농어촌 교육생태계 5대 상생 주체 (거버넌스)
          </span>
          <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-5 gap-2 text-xs">
            {stakeholders.map((sh, idx) => {
              const Icon = sh.icon;
              return (
                <div key={idx} className="p-2.5 rounded-lg bg-slate-950 border border-slate-800 text-center flex flex-col items-center">
                  <div className="w-7 h-7 rounded-full bg-slate-800 flex items-center justify-center text-emerald-400 mb-1.5">
                    <Icon className="w-3.5 h-3.5" />
                  </div>
                  <strong className="text-slate-100 text-xs">{sh.title}</strong>
                  <p className="text-[10px] text-slate-400 mt-1 leading-snug">{sh.desc}</p>
                </div>
              );
            })}
          </div>
        </div>
      </div>

      {/* Slogan Footer */}
      <div className="p-3 rounded-xl bg-emerald-950/60 border border-emerald-800/80 text-center text-xs font-bold font-serif-kr text-emerald-300 tracking-wide">
        "유학이 살리고, 마을이 자라는 지속가능한 계촌 교육생태계"
      </div>
    </div>
  );
};
