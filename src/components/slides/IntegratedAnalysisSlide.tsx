import React, { useState } from 'react';
import { BookOpen, Zap, Music, MapPin, ArrowRight, CheckCircle2 } from 'lucide-react';

export const IntegratedAnalysisSlide: React.FC = () => {
  const [activeArea, setActiveArea] = useState<number>(0);

  const areas = [
    {
      id: 0,
      title: '1. 학습성장 영역',
      sub: '맞춤형 학습지원 & 자기주도역량',
      icon: BookOpen,
      color: 'emerald',
      coreTheme: '학생 맞춤형 학습지원을 통한 자기주도적 학습역량 형성',
      mechanism: [
        '학생 맞춤형 학습지원',
        '학습 자신감 형성',
        '자기주도적 학습역량 강화',
        '농어촌학교 교육력 향상',
      ],
      detail:
        '원어민 1:1 화상영어와 5단계 학습코칭을 통해 교과 성적 중심 지도를 탈피했습니다. 소규모 학교의 강점을 살려 개별 학생의 수준과 특성을 반영한 코칭으로 학습 실패에 대한 두려움을 극복하고 스스로 계획하고 성찰하는 자기주도 학습 습관을 완성했습니다.',
      modelLink: '농어촌학교의 기초학력 신뢰를 확보하여 학부모 유학 만족도의 단단한 지지대가 됨.',
    },
    {
      id: 1,
      title: '2. 진로·미래역량 영역',
      sub: '도전과 성취 & 미래산업 연계',
      icon: Zap,
      color: 'teal',
      coreTheme: '도전과 성취 경험을 통한 미래역량 및 진로인식 형성',
      mechanism: [
        '미래기술 경험',
        '도전과 성취 반복',
        '자기효능감·문제해결력',
        '미래역량 인재 성장',
      ],
      detail:
        '무인멀티콥터 1종 조종자 자격 과정을 통해 이론부터 실기 시험까지 난도 높은 과제를 끈기 있게 완수했습니다. 드론을 도시 산업이 아닌 스마트 농업·산림·재난방제 등 농어촌 미래 산업과 연결하여 학생들의 미래 진로 시야를 획기적으로 넓혔습니다.',
      modelLink: '소규모 중학교에서도 도시 이상의 첨단 기술 자격 취득이 가능함을 입증.',
    },
    {
      id: 2,
      title: '3. 문화예술·공동체 영역',
      sub: '참여·경험·향유 3단계 확장',
      icon: Music,
      color: 'cyan',
      coreTheme: '문화예술 경험의 확장을 통한 자기성장과 공동체 형성',
      mechanism: [
        '예술 실천 (Participate)',
        '문화예술 경험 (Experience)',
        '삶 속 향유 (Appreciate)',
        '문화예술 생태계 형성',
      ],
      detail:
        '계촌클래식축제(실천)에서 별빛 오케스트라 합주와 부스 운영을 주도하고, 서울 오케스트라 페스티벌(경험)로 시야를 넓혔으며, 강릉 바이닐 LP 청음(향유)으로 자신만의 예술 감수성을 심화했습니다. 음악이 또래와 마을을 잇는 공통 언어가 되었습니다.',
      modelLink: '계촌의 문화적 자산을 바탕으로 유학생과 원학구 학생이 화합하는 매개체 역할.',
    },
    {
      id: 3,
      title: '4. 지역연계·공동체 영역',
      sub: '이해·관계·소속의 선순환',
      icon: MapPin,
      color: 'amber',
      coreTheme: '지역과 함께 배우고 성장하는 공동체 기반 교육생태계 형성',
      mechanism: [
        '지역 이해 (Understand)',
        '사람 관계 (Connect)',
        '공동체 적응 (Belong)',
        '마을-학교 상생 생태계',
      ],
      detail:
        '서울대 평창목장 스마트축산 이음교육으로 지역 산업을 이해하고, 심리정서지원(프로농구 직관·영화)으로 관계를 맺었으며, 학생자치 학교야영을 통해 새로운 전학생까지 완벽히 포용했습니다. 지역과 학교가 하나의 삶의 터전으로 결합되었습니다.',
      modelLink: '단순 거주를 넘어 지역사회 구성원으로서의 애향심과 정주 의식을 태동시킴.',
    },
  ];

  const cur = areas[activeArea];

  return (
    <div className="space-y-5">
      {/* Title Header */}
      <div className="border-b border-slate-800 pb-3">
        <div className="flex items-center gap-2 text-xs font-semibold text-emerald-400">
          <span>Ⅵ. 연구(운영) 결과</span>
          <span>·</span>
          <span>4대 영역별 통합분석</span>
        </div>
        <h2 className="text-2xl md:text-3xl font-bold font-serif-kr text-white mt-1">
          4대 핵심 영역별 통합분석 및 성장 메커니즘
        </h2>
        <p className="text-sm text-slate-400 mt-0.5">
          개별 프로그램의 파편화를 극복하고 유기적으로 상호 보완하는 통합 교육 모델
        </p>
      </div>

      {/* 4 Area Buttons */}
      <div className="grid grid-cols-2 md:grid-cols-4 gap-2.5">
        {areas.map((a) => {
          const Icon = a.icon;
          const isActive = activeArea === a.id;
          return (
            <button
              key={a.id}
              onClick={() => setActiveArea(a.id)}
              className={`p-3 rounded-xl border text-left transition-all cursor-pointer flex flex-col justify-between ${
                isActive
                  ? 'bg-slate-900 border-emerald-500 shadow-md ring-1 ring-emerald-500/50'
                  : 'bg-slate-950 border-slate-800 hover:border-slate-700 text-slate-400'
              }`}
            >
              <div className="flex items-center justify-between mb-2">
                <span className={`text-[11px] font-bold ${isActive ? 'text-emerald-400' : 'text-slate-500'}`}>
                  영역 0{a.id + 1}
                </span>
                <Icon className={`w-4 h-4 ${isActive ? 'text-emerald-400' : 'text-slate-600'}`} />
              </div>
              <div>
                <h4 className={`text-xs md:text-sm font-bold truncate ${isActive ? 'text-white' : 'text-slate-300'}`}>
                  {a.title}
                </h4>
                <p className="text-[10px] text-slate-400 truncate mt-0.5">{a.sub}</p>
              </div>
            </button>
          );
        })}
      </div>

      {/* Active Area Detailed Mechanism */}
      <div className="p-5 rounded-xl bg-slate-900/90 border border-slate-800 space-y-4 shadow-xl">
        <div className="flex flex-wrap items-center justify-between gap-2 border-b border-slate-800 pb-3">
          <div>
            <span className="text-xs font-semibold text-emerald-400 uppercase tracking-wide">
              영역별 통합 분석
            </span>
            <h3 className="text-lg md:text-xl font-bold text-white mt-0.5">
              {cur.title}: <span className="text-emerald-300">{cur.coreTheme}</span>
            </h3>
          </div>
          <span className="text-xs px-2.5 py-1 rounded bg-slate-800 text-slate-300 border border-slate-700">
            {cur.sub}
          </span>
        </div>

        {/* Linear Mechanism Step Pipeline */}
        <div>
          <span className="text-xs font-bold text-slate-400 block mb-2">
            교육적 성장의 선순환 메커니즘 (Growth Pipeline)
          </span>
          <div className="grid grid-cols-1 md:grid-cols-4 gap-2">
            {cur.mechanism.map((step, idx) => (
              <div
                key={idx}
                className="p-3 rounded-lg bg-slate-950 border border-slate-800 flex items-center justify-between relative group"
              >
                <div className="flex items-center gap-2">
                  <span className="w-5 h-5 rounded-full bg-emerald-500/20 text-emerald-400 font-bold text-xs flex items-center justify-center shrink-0">
                    {idx + 1}
                  </span>
                  <span className="text-xs font-semibold text-slate-200">{step}</span>
                </div>
                {idx < cur.mechanism.length - 1 && (
                  <ArrowRight className="hidden md:block w-3.5 h-3.5 text-emerald-500/60 shrink-0" />
                )}
              </div>
            ))}
          </div>
        </div>

        {/* Narrative & Model Link */}
        <div className="grid grid-cols-1 md:grid-cols-12 gap-4 pt-1">
          <div className="md:col-span-8 p-3.5 rounded-lg bg-slate-950/60 border border-slate-800 text-xs text-slate-300 leading-relaxed">
            <span className="font-bold text-slate-200 block mb-1.5">통합 분석 및 질적 논의</span>
            <p className="text-slate-400 leading-relaxed">{cur.detail}</p>
          </div>

          <div className="md:col-span-4 p-3.5 rounded-lg bg-emerald-950/30 border border-emerald-900/40 text-xs text-emerald-300 flex flex-col justify-between">
            <div>
              <span className="font-bold text-emerald-400 block mb-1.5">계촌형 모델과의 연계성</span>
              <p className="text-slate-300 text-[11px] leading-relaxed">{cur.modelLink}</p>
            </div>
            <div className="mt-2 pt-2 border-t border-emerald-900/40 text-[10px] text-emerald-400/80">
              상호 보완적 선순환 기여
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
