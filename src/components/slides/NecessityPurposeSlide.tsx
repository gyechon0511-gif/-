import React from 'react';
import { AlertCircle, Target, Sparkles, CheckCircle2, ChevronRight } from 'lucide-react';

export const NecessityPurposeSlide: React.FC = () => {
  return (
    <div className="space-y-6">
      {/* Title Header */}
      <div className="border-b border-slate-800 pb-4">
        <div className="flex items-center gap-2 text-xs font-semibold text-emerald-400">
          <span>Ⅰ. 연구의 개요</span>
          <span>·</span>
          <span>1. 필요성 및 2. 목적</span>
        </div>
        <h2 className="text-2xl md:text-3xl font-bold font-serif-kr text-white mt-1">
          연구의 필요성 및 목적
        </h2>
        <p className="text-sm text-slate-400 mt-1">
          작은 학교의 위기를 지역 교육자원 기반의 상생형 교육생태계로 전환
        </p>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
        {/* Left Column: Research Necessity */}
        <div className="rounded-xl p-5 bg-slate-900/80 border border-slate-800 flex flex-col justify-between">
          <div>
            <div className="flex items-center gap-2 text-rose-400 mb-3">
              <AlertCircle className="w-5 h-5" />
              <h3 className="text-base font-bold text-slate-100">1. 연구의 필요성</h3>
            </div>

            <div className="space-y-3.5 text-xs text-slate-300 leading-relaxed">
              <div className="p-3 rounded-lg bg-slate-950/60 border border-slate-800/80">
                <span className="font-semibold text-rose-300 block mb-1">
                  1) 학령인구 감소와 농어촌 지역소멸의 악순환
                </span>
                <p className="text-slate-400">
                  학생 수 감소는 학급 감축과 교육활동 축소로 이어지고, 이는 다시 지역 이탈을 심화시킵니다. 학교는 학생 교육을 넘어 지역 주민을 연결하고 문화를 유지하는 핵심 거점입니다.
                </p>
              </div>

              <div className="p-3 rounded-lg bg-slate-950/60 border border-slate-800/80">
                <span className="font-semibold text-amber-300 block mb-1">
                  2) 일회성 체험을 넘어 지속가능한 정주 교육과정의 절실함
                </span>
                <p className="text-slate-400">
                  단기 체험이나 일회성 행사 중심의 농어촌유학은 지속성이 결여됩니다. 정규 교육과정, 창의적 체험활동, 방과후학교, 주말 활동을 지역 자원과 유기적으로 통합하는 체계적 교육과정이 요구됩니다.
                </p>
              </div>

              <div className="p-3 rounded-lg bg-slate-950/60 border border-slate-800/80">
                <span className="font-semibold text-emerald-300 block mb-1">
                  3) 초등학교와 차별화된 중학교 농어촌유학의 특수성
                </span>
                <p className="text-slate-400">
                  청소년기는 또래 적응뿐 아니라 교과학습의 연속성, 진로 탐색, 정서적 독립이라는 발달 과제를 겪습니다. 단순 자연체험을 넘어 <strong>학습·심리·공동체·진로가 결합된 중학교형 교육 모델</strong>이 반드시 필요합니다.
                </p>
              </div>
            </div>
          </div>

          <div className="mt-4 pt-3 border-t border-slate-800/80 text-[11px] text-slate-400 flex items-center justify-between">
            <span>참고: 한국농촌경제연구원(2021), 한국교육개발원(2023)</span>
            <span className="text-emerald-400 font-semibold">소규모학교 강점 극대화</span>
          </div>
        </div>

        {/* Right Column: Research Purpose */}
        <div className="rounded-xl p-5 bg-slate-900/80 border border-slate-800 flex flex-col justify-between">
          <div>
            <div className="flex items-center gap-2 text-emerald-400 mb-3">
              <Target className="w-5 h-5" />
              <h3 className="text-base font-bold text-slate-100">2. 연구의 3대 목적</h3>
            </div>

            <div className="space-y-3.5">
              <div className="p-3.5 rounded-lg bg-slate-950/60 border-l-4 border-l-emerald-500 border border-slate-800/80">
                <div className="flex items-center gap-2">
                  <span className="text-xs font-bold text-emerald-400">목적 1</span>
                  <h4 className="text-xs font-bold text-slate-100">지역 특화 농어촌유학 교육과정 운영</h4>
                </div>
                <p className="text-xs text-slate-400 mt-1.5 leading-relaxed">
                  계촌클래식축제, 별빛 오케스트라, 평창바로알기, 무인멀티콥터 1종 자격과정, 원어민 화상영어 등 지역의 인적·물적 자원을 교육과정으로 재구성하여 학생의 학습·진로·공동체 역량을 함양합니다.
                </p>
              </div>

              <div className="p-3.5 rounded-lg bg-slate-950/60 border-l-4 border-l-teal-500 border border-slate-800/80">
                <div className="flex items-center gap-2">
                  <span className="text-xs font-bold text-teal-400">목적 2</span>
                  <h4 className="text-xs font-bold text-slate-100">학습·심리·정서 지원체계 및 교육생태계 조성</h4>
                </div>
                <p className="text-xs text-slate-400 mt-1.5 leading-relaxed">
                  농어촌유학생과 재학생이 함께 성장할 수 있도록 맞춤형 학습코칭과 심리정서 지원을 제공하고, 학교·가정·마을·교육지원청·지자체가 협력하는 안정적 정착 거버넌스를 구축합니다.
                </p>
              </div>

              <div className="p-3.5 rounded-lg bg-slate-950/60 border-l-4 border-l-cyan-500 border border-slate-800/80">
                <div className="flex items-center gap-2">
                  <span className="text-xs font-bold text-cyan-400">목적 3</span>
                  <h4 className="text-xs font-bold text-slate-100">질적 사례연구 기반 중학교형 모델 정립 및 일반화</h4>
                </div>
                <p className="text-xs text-slate-400 mt-1.5 leading-relaxed">
                  소규모 학교의 특성을 반영하여 학생 심층면담 중심의 질적 사례연구로 변화를 심층 분석하고, 교육과정 모듈 및 정착 매뉴얼 등 강원도 내 타 학교로 확산 가능한 일반화 자료를 개발합니다.
                </p>
              </div>
            </div>
          </div>

          <div className="mt-4 p-2.5 rounded-lg bg-emerald-950/40 border border-emerald-800/40 flex items-center justify-between text-xs text-emerald-300">
            <span className="font-semibold">최종 비전</span>
            <span>유학이 살리고, 마을이 자라는 지속가능한 계촌 교육생태계</span>
          </div>
        </div>
      </div>
    </div>
  );
};
