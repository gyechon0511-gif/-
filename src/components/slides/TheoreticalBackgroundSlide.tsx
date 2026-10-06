import React, { useState } from 'react';
import { Layers, Network, RefreshCw, MapPin, ArrowRight } from 'lucide-react';

export const TheoreticalBackgroundSlide: React.FC = () => {
  const [activeTab, setActiveTab] = useState<number>(0);

  const theories = [
    {
      id: 0,
      title: '관계인구 이론',
      eng: 'Relational Population',
      scholar: '한국농촌경제연구원(KREI, 2021)',
      icon: Network,
      color: 'emerald',
      summary: '정주인구와 교류인구의 중간 단계로, 지역과 지속적인 관계를 맺고 활동하는 인구',
      keyPoints: [
        '농어촌유학은 단순 방문이나 관광이 아닌 지속적인 관계를 형성하는 핵심 매개',
        '학교가 관계인구 형성의 중심 거점으로 기능하며 장기적인 정주 전환 가능성 증대',
        '학생의 학교 적응뿐 아니라 학부모의 주거·생활·네트워크 등 종합적 정착 지원이 필수',
      ],
      application: '계촌중학교는 유학생뿐 아니라 농어촌유학을 희망해 전학 온 학생과 가족까지 포용하여 지속적인 지역 네트워크를 형성함.',
    },
    {
      id: 1,
      title: '교육생태계 이론',
      eng: 'Ecological Systems Theory',
      scholar: 'Bronfenbrenner(1979)',
      icon: Layers,
      color: 'teal',
      summary: '학생의 발달은 미시·중간·외·거시체계의 유기적 상호작용 속에서 달성됨',
      keyPoints: [
        '미시체계(가정과 학교), 중간체계(학교-가정-마을 연계), 외체계(지자체·교육지원청 지원)',
        '단순 학교 내부 교육을 넘어 마을과 지역기관이 함께 협력하는 통합적 교육공동체 구축',
        '학생의 전인적 성장과 지역사회의 지속가능한 발전을 동시에 실현하는 구조',
      ],
      application: '학교-교육지원청-평창군청-한국예술종합학교-마을공동체가 협력 거버넌스를 구축하여 교육활동을 공동 지원.',
    },
    {
      id: 2,
      title: '회복력 이론',
      eng: 'Resilience Theory',
      scholar: 'Holling(1973), Walker et al.(2004)',
      icon: RefreshCw,
      color: 'cyan',
      summary: '외부의 충격이나 위기 속에서도 고유 기능을 유지하며 능동적으로 재조직하는 시스템 역량',
      keyPoints: [
        '학령인구 감소와 소규모화 위기를 단순 방어가 아닌 새로운 교육적 가치 창출 기회로 전환',
        '학생에게는 낯선 환경 적응과 도전 속에서 자아존중감 및 회복탄력성 형성',
        '학교와 마을은 지역 자원을 재발견하여 교육력을 높이는 선순환 회복 구조 구축',
      ],
      application: '소규모 학교의 밀착형 개별지도 강점을 활용해 학생의 심리정서 안정과 자기효능감을 강화하는 성장 중심 교육 실천.',
    },
    {
      id: 3,
      title: '장소기반교육 (PBE)',
      eng: 'Place-Based Education',
      scholar: 'Dewey(1938), Sobel(2004)',
      icon: MapPin,
      color: 'amber',
      summary: '학생이 살아가는 지역의 자연, 역사, 문화, 산업을 교육과정의 핵심 자원으로 활용',
      keyPoints: [
        '지역을 단순한 견학 장소가 아닌 교과 배움과 삶을 통합하는 교육과정으로 재구성',
        '지역 문제를 탐구하고 참여하며 시민성과 공동체 의식 함양',
        '지역에 대한 애향심과 자긍심을 바탕으로 지역사회 구성원으로 성장',
      ],
      application: '계촌클래식축제, 오케스트라 합주, 서울대 평창목장 스마트축산, 지역 드론교육원 등 지역 자원을 교육과정으로 내재화.',
    },
  ];

  return (
    <div className="space-y-6">
      {/* Title Header */}
      <div className="border-b border-slate-800 pb-4">
        <div className="flex items-center gap-2 text-xs font-semibold text-emerald-400">
          <span>Ⅱ. 이론적 배경</span>
          <span>·</span>
          <span>1. 관련 이론 탐색 & 2. 선행연구 시사점</span>
        </div>
        <h2 className="text-2xl md:text-3xl font-bold font-serif-kr text-white mt-1">
          4대 이론적 기저 및 선행연구 분석
        </h2>
        <p className="text-sm text-slate-400 mt-1">
          농어촌유학의 정책적 타당성과 교육적 정당성을 뒷받침하는 이론적 토대
        </p>
      </div>

      {/* Interactive Tabs */}
      <div className="grid grid-cols-2 md:grid-cols-4 gap-2">
        {theories.map((theory) => {
          const Icon = theory.icon;
          const isActive = activeTab === theory.id;
          return (
            <button
              key={theory.id}
              onClick={() => setActiveTab(theory.id)}
              className={`p-3 rounded-xl border text-left transition-all cursor-pointer flex flex-col justify-between ${
                isActive
                  ? 'bg-slate-900 border-emerald-500 shadow-md ring-1 ring-emerald-500/50'
                  : 'bg-slate-950/80 border-slate-800 hover:border-slate-700 text-slate-400'
              }`}
            >
              <div className="flex items-center justify-between mb-2">
                <span className={`text-[11px] font-bold ${isActive ? 'text-emerald-400' : 'text-slate-500'}`}>
                  이론 0{theory.id + 1}
                </span>
                <Icon className={`w-4 h-4 ${isActive ? 'text-emerald-400' : 'text-slate-600'}`} />
              </div>
              <div>
                <h4 className={`text-xs md:text-sm font-bold truncate ${isActive ? 'text-white' : 'text-slate-300'}`}>
                  {theory.title}
                </h4>
                <p className="text-[10px] text-slate-400 truncate mt-0.5">{theory.eng}</p>
              </div>
            </button>
          );
        })}
      </div>

      {/* Tab Detail View */}
      {(() => {
        const cur = theories[activeTab];
        return (
          <div className="rounded-xl p-6 bg-slate-900/90 border border-slate-800 shadow-xl space-y-4">
            <div className="flex flex-wrap items-center justify-between gap-2 border-b border-slate-800/80 pb-3">
              <div>
                <span className="text-xs font-semibold text-emerald-400">{cur.eng}</span>
                <h3 className="text-lg md:text-xl font-bold text-white mt-0.5">
                  {cur.title} <span className="text-xs font-normal text-slate-400 ml-2">({cur.scholar})</span>
                </h3>
              </div>
              <span className="text-xs bg-slate-800 text-slate-300 px-2.5 py-1 rounded-md border border-slate-700">
                핵심 개념: {cur.summary}
              </span>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-12 gap-4 pt-1">
              <div className="md:col-span-7 space-y-2">
                <span className="text-xs font-bold text-slate-200 block mb-2">이론의 핵심 명제</span>
                {cur.keyPoints.map((pt, idx) => (
                  <div key={idx} className="flex items-start gap-2 text-xs text-slate-300 leading-relaxed p-2.5 rounded-lg bg-slate-950/60 border border-slate-800/60">
                    <span className="w-1.5 h-1.5 rounded-full bg-emerald-400 mt-1.5 shrink-0" />
                    <span>{pt}</span>
                  </div>
                ))}
              </div>

              <div className="md:col-span-5 p-4 rounded-xl bg-emerald-950/20 border border-emerald-900/40 flex flex-col justify-between">
                <div>
                  <span className="text-xs font-bold text-emerald-400 uppercase tracking-wide block mb-2">
                    본 연구(계촌중) 적용 및 구현
                  </span>
                  <p className="text-xs text-slate-300 leading-relaxed">
                    {cur.application}
                  </p>
                </div>
                <div className="mt-3 pt-3 border-t border-emerald-900/40 text-[11px] text-emerald-300/80 flex items-center gap-1.5">
                  <ArrowRight className="w-3.5 h-3.5" />
                  <span>단순 학생 유치를 넘어 지속가능한 농어촌 상생 모델 정립</span>
                </div>
              </div>
            </div>
          </div>
        );
      })()}

      {/* Synthesis footer */}
      <div className="p-3.5 rounded-xl bg-slate-900/60 border border-slate-800/80 text-xs text-slate-300 flex items-center justify-between">
        <span className="text-slate-400 font-medium">선행연구 종합 시사점:</span>
        <span className="font-semibold text-emerald-300">
          지역 특화 교육과정 – 학생 성장 지원 – 유학 가정 정착 – 지역 협력체계 – 성과 환류의 유기적 결합
        </span>
      </div>
    </div>
  );
};
