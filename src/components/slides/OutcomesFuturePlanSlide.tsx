import React from 'react';
import { Award, ArrowRight, HelpCircle, CheckCircle2, MessageSquare, Compass, Phone, Globe } from 'lucide-react';

export const OutcomesFuturePlanSlide: React.FC = () => {
  return (
    <div className="space-y-5">
      {/* Title Header */}
      <div className="border-b border-slate-800 pb-3">
        <div className="flex items-center gap-2 text-xs font-semibold text-emerald-400">
          <span>Ⅷ. 성과 및 향후 연구계획</span>
          <span>·</span>
          <span>1차년도 성과 요약 & 2차년도 로드맵 / 질의응답</span>
        </div>
        <h2 className="text-2xl md:text-3xl font-bold font-serif-kr text-white mt-1">
          1차년도 주요 연구성과 및 2차년도 심화·확산 계획
        </h2>
        <p className="text-sm text-slate-400 mt-0.5">
          연구 성과의 질적 완성도를 높이고 강원특별자치도 전역으로 실천 모델 확산
        </p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
        {/* 1st Year Outcomes */}
        <div className="p-4 rounded-xl bg-slate-900/90 border border-slate-800 space-y-3">
          <div className="flex items-center gap-2 text-emerald-400">
            <Award className="w-5 h-5" />
            <h3 className="text-sm font-bold text-white">1차년도 핵심 연구 성과 (2026)</h3>
          </div>

          <div className="space-y-2 text-xs text-slate-300">
            <div className="p-2.5 rounded-lg bg-slate-950 border border-slate-800">
              <span className="font-bold text-emerald-300 block mb-0.5">① 4대 특화 교육과정 성공적 정착</span>
              <p className="text-slate-400 text-[11px]">
                원어민 화상영어, 학습코칭, 무인멀티콥터 자격취득, 계촌클래식축제, 평창목장 등 소규모 맞춤형 교육 실천.
              </p>
            </div>

            <div className="p-2.5 rounded-lg bg-slate-950 border border-slate-800">
              <span className="font-bold text-emerald-300 block mb-0.5">② 학생 성장 질적 검증 완료</span>
              <p className="text-slate-400 text-[11px]">
                학생 심층면담 및 관찰기록 삼각검증을 통해 자기효능감, 문화 향유력, 포용적 또래 관계 입증.
              </p>
            </div>

            <div className="p-2.5 rounded-lg bg-slate-950 border border-slate-800">
              <span className="font-bold text-emerald-300 block mb-0.5">③ 전 교원 전문성 및 협력 거버넌스 가동</span>
              <p className="text-slate-400 text-[11px]">
                전 교원 학습코칭 자격 취득, 더배움공동체 정례화, 지자체·마을 협의체 구축.
              </p>
            </div>

            <div className="p-2.5 rounded-lg bg-slate-950 border border-slate-800">
              <span className="font-bold text-emerald-300 block mb-0.5">④ 교육 매력도 입증 (일반전학생 유입)</span>
              <p className="text-slate-400 text-[11px]">
                단순 유학생 유치뿐 아니라 본교 교육활동을 희망한 자발적 일반전학 성과 창출.
              </p>
            </div>
          </div>
        </div>

        {/* 2nd Year Plans */}
        <div className="p-4 rounded-xl bg-slate-900/90 border border-slate-800 space-y-3">
          <div className="flex items-center gap-2 text-teal-400">
            <Compass className="w-5 h-5" />
            <h3 className="text-sm font-bold text-white">2차년도 심화 및 확산 계획 (2027)</h3>
          </div>

          <div className="space-y-2 text-xs text-slate-300">
            <div className="p-2.5 rounded-lg bg-slate-950 border border-slate-800">
              <span className="font-bold text-teal-300 block mb-0.5">① 학생 개별 성장지원 시스템 고도화</span>
              <p className="text-slate-400 text-[11px]">
                1차년도 구축된 4대 영역 교육과정을 정교화하고, 학생별 성장 포트폴리오를 지속 누적·관리.
              </p>
            </div>

            <div className="p-2.5 rounded-lg bg-slate-950 border border-slate-800">
              <span className="font-bold text-teal-300 block mb-0.5">② 일반화 매뉴얼 및 프로그램 자료집 발간</span>
              <p className="text-slate-400 text-[11px]">
                타 농어촌 소규모학교에서 즉각 적용할 수 있는 표준 운영 가이드 및 수업 지도 모듈 완성.
              </p>
            </div>

            <div className="p-2.5 rounded-lg bg-slate-950 border border-slate-800">
              <span className="font-bold text-teal-300 block mb-0.5">③ 학부모·지역사회 거버넌스 환류 확대</span>
              <p className="text-slate-400 text-[11px]">
                정례 협의체 운영 활성화 및 학부모·지역 관계자 심층 면담을 통해 상생 네트워크 강화.
              </p>
            </div>

            <div className="p-2.5 rounded-lg bg-slate-950 border border-slate-800">
              <span className="font-bold text-teal-300 block mb-0.5">④ 강원도형 중학교 농어촌유학 모델 확산</span>
              <p className="text-slate-400 text-[11px]">
                종단적 연구 효과 검증을 바탕으로 도내 유관 학교와의 정책 연계 및 성과 공유회 주관.
              </p>
            </div>
          </div>
        </div>
      </div>

      {/* Q&A Presentation Footer */}
      <div className="p-5 rounded-xl bg-gradient-to-r from-emerald-950/90 via-slate-900 to-teal-950/90 border border-emerald-500/50 shadow-xl flex flex-col md:flex-row items-center justify-between gap-4 text-center md:text-left">
        <div>
          <div className="flex items-center justify-center md:justify-start gap-2 text-emerald-400 font-bold text-xs mb-1">
            <HelpCircle className="w-4 h-4" />
            <span>질의 및 응답 (Q & A)</span>
          </div>
          <h3 className="text-lg md:text-xl font-bold font-serif-kr text-white">
            "경청해 주셔서 대단히 감사합니다."
          </h3>
          <p className="text-xs text-slate-300 mt-1">
            위원님들의 소중한 질문과 조언을 경청하고 지속가능한 교육생태계 발전에 반영하겠습니다.
          </p>
        </div>

        <div className="flex flex-col items-center md:items-end text-xs text-slate-400 shrink-0">
          <span className="text-slate-200 font-semibold">강원특별자치도교육청 지정 연구학교</span>
          <span className="text-emerald-400 font-bold text-sm mt-0.5">계촌중학교 연구학교 운영위원회</span>
          <span className="text-[11px] text-slate-500 mt-1">TEL: 033-333-0511 · FAX: 033-333-4605</span>
        </div>
      </div>
    </div>
  );
};
