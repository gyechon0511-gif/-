import React from 'react';
import { FileText, ArrowRight, ShieldCheck, HelpCircle, CheckCircle2 } from 'lucide-react';

export const QualitativeMethodSlide: React.FC = () => {
  const steps = [
    { num: '01', title: '원자료 전사·정리', desc: '1:1 심층면담 음성 및 기록 텍스트화, 익명코드(101~302) 부여' },
    { num: '02', title: '의미 진술 추출', desc: '연구주제 관련 경험, 감정, 관계, 인식 등 핵심 발언 반복 선별' },
    { num: '03', title: '개방코딩 (Open Coding)', desc: '의미 단위 구분 및 각 진술의 핵심 의미를 간결한 코드로 명명' },
    { num: '04', title: '유사코드 범주화', desc: '비슷한 의미를 가진 코드 비교·분석하여 범주화 기준 설정' },
    { num: '05', title: '상·하위범주 구조화', desc: '범주들을 통합하여 하위범주와 상위범주 간 위계적 관계 구축' },
    { num: '06', title: '활동별 핵심주제 도출', desc: '각 프로그램별(7개) 경험의 본질적 의미와 성취 종합' },
    { num: '07', title: '활동 간 주제 통합', desc: '활동별 주제를 비교·통합하여 공통 핵심 주제 도출 및 구조화' },
    { num: '08', title: '계촌형 모델 의미 해석', desc: '도출된 주제를 농어촌 교육생태계 모델 요소와 연계하여 시사점 도출' },
  ];

  return (
    <div className="space-y-6">
      {/* Title Header */}
      <div className="border-b border-slate-800 pb-4">
        <div className="flex items-center gap-2 text-xs font-semibold text-emerald-400">
          <span>Ⅳ. 연구 도구</span>
          <span>·</span>
          <span>질적분석의 필요성 & 8단계 절차 흐름도 (그림 3)</span>
        </div>
        <h2 className="text-2xl md:text-3xl font-bold font-serif-kr text-white mt-1">
          질적 사례연구 설계 및 8단계 분석 프로세스
        </h2>
        <p className="text-sm text-slate-400 mt-1">
          전교생 11명의 특수성을 고려한 심층 면담, 다각적 관찰 및 자료 삼각검증
        </p>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-12 gap-5">
        {/* Left Column: Why Qualitative (4 cols) */}
        <div className="lg:col-span-4 space-y-3.5">
          <div className="p-4 rounded-xl bg-slate-900/90 border border-slate-800">
            <span className="text-[11px] font-bold text-amber-400 uppercase tracking-wide block mb-1">
              연구방법론적 당위성
            </span>
            <h3 className="text-sm font-bold text-white mb-2">
              왜 수치 통계 대신 질적 사례연구인가?
            </h3>
            <div className="text-xs text-slate-300 space-y-2 leading-relaxed">
              <p>
                • <strong>표본 한계 극복:</strong> 전교생 11명 소규모 학교에서는 1~2명의 응답만으로 통계 평균이 왜곡되므로, 수치보다 학생 개별 변화의 맥락과 의미를 심층 분석하는 것이 타당함.
              </p>
              <p>
                • <strong>다층적 학생 구성:</strong> 농어촌유학생, 일반전학생, 원학구 재학생 모두의 배경과 경험이 다르므로 구체적 언어를 통해 관계와 성장의 양상을 파악함.
              </p>
            </div>
          </div>

          <div className="p-4 rounded-xl bg-slate-900/90 border border-slate-800">
            <div className="flex items-center gap-2 text-emerald-400 mb-2">
              <ShieldCheck className="w-4 h-4" />
              <h4 className="text-xs font-bold text-slate-100">연구의 신뢰도 확보 (자료 삼각검증)</h4>
            </div>
            <ul className="text-xs text-slate-400 space-y-1.5 leading-relaxed">
              <li>① <strong>학생 심층면담:</strong> 반구조화 10문항 1:1 면담</li>
              <li>② <strong>교사 학생관찰지:</strong> 일상 및 수업·활동 중 행동 기록</li>
              <li>③ <strong>활동 결과물:</strong> 소감문, 드론 시험결과, 포트폴리오</li>
            </ul>
          </div>
        </div>

        {/* Right Column: 8-Step Flow (8 cols) */}
        <div className="lg:col-span-8 p-5 rounded-xl bg-slate-900/80 border border-slate-800 flex flex-col justify-between">
          <div>
            <div className="flex items-center justify-between mb-3 border-b border-slate-800/80 pb-2">
              <h3 className="text-sm font-bold text-slate-100 flex items-center gap-2">
                <span>[그림 3] 질적분석 절차 및 흐름도</span>
                <span className="text-[11px] text-emerald-400 font-normal">8-Step Qualitative Analysis</span>
              </h3>
              <span className="text-[11px] text-slate-500">학생 심층면담 → 계촌형 모델 교육적 의미 도출</span>
            </div>

            <div className="grid grid-cols-2 sm:grid-cols-4 gap-2.5">
              {steps.map((st) => (
                <div
                  key={st.num}
                  className="p-3 rounded-lg bg-slate-950/70 border border-slate-800/80 hover:border-emerald-500/40 transition-colors flex flex-col justify-between"
                >
                  <div>
                    <span className="text-xs font-mono font-bold text-emerald-400 block mb-1">
                      STEP {st.num}
                    </span>
                    <h4 className="text-xs font-bold text-slate-200 leading-snug">{st.title}</h4>
                    <p className="text-[11px] text-slate-400 mt-1 leading-normal">
                      {st.desc}
                    </p>
                  </div>
                </div>
              ))}
            </div>
          </div>

          <div className="mt-4 p-3 rounded-lg bg-emerald-950/30 border border-emerald-800/40 flex flex-wrap items-center justify-between text-xs text-emerald-300 gap-2">
            <span className="font-semibold">질적분석의 최종 목표:</span>
            <span>단순 프로그램 만족도 나열이 아닌, <strong>학생 성장과 지역 교육생태계 상생 가치 규명</strong></span>
          </div>
        </div>
      </div>
    </div>
  );
};
