import React from 'react';
import { RefreshCw, Share2, FileCheck, Layers, ArrowRight, BookMarked } from 'lucide-react';

export const Task3EvaluationSlide: React.FC = () => {
  return (
    <div className="space-y-6">
      {/* Title Header */}
      <div className="border-b border-slate-800 pb-4">
        <div className="flex items-center gap-2 text-xs font-semibold text-emerald-400">
          <span>Ⅴ. 연구의 실제</span>
          <span>·</span>
          <span>연구 과제 3: 평가 및 나눔</span>
        </div>
        <h2 className="text-2xl md:text-3xl font-bold font-serif-kr text-white mt-1">
          학생 성장 중심 평가·환류 체계 및 성과 현장 확산
        </h2>
        <p className="text-sm text-slate-400 mt-1">
          일회성 행사를 방지하는 계획-운영-평가-환류의 선순환 및 일반화 자료 체계화
        </p>
      </div>

      {/* 3 Pillars Grid */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-5">
        {/* Pillar 1 */}
        <div className="rounded-xl p-5 bg-slate-900/90 border border-slate-800 flex flex-col justify-between">
          <div>
            <div className="w-10 h-10 rounded-xl bg-emerald-500/10 border border-emerald-500/20 flex items-center justify-center text-emerald-400 mb-3">
              <FileCheck className="w-5 h-5" />
            </div>
            <span className="text-[11px] font-bold text-emerald-400 uppercase tracking-wide block mb-1">
              평가 영역
            </span>
            <h3 className="text-base font-bold text-white mb-2">
              학생 성장 중심 질적 평가
            </h3>
            <p className="text-xs text-slate-300 leading-relaxed mb-3">
              단순 수치 만족도 집계를 넘어, 학생 심층면담과 교사 관찰기록을 결합한 다각적 삼각검증 체계를 구축했습니다.
            </p>
            <div className="space-y-1.5 text-[11px] text-slate-400">
              <div className="p-2 rounded bg-slate-950 border border-slate-800/80">
                • <strong>평가 지표:</strong> 학습 자신감, 자기효능감, 또래 관계, 학교 소속감, 문화 감수성, 지역 애착
              </div>
              <div className="p-2 rounded bg-slate-950 border border-slate-800/80">
                • <strong>자료 교차:</strong> 학생 1:1 면담 + 교사 관찰일지 + 학생 포트폴리오
              </div>
            </div>
          </div>

          <div className="mt-4 pt-3 border-t border-slate-800 text-[11px] text-emerald-400 font-semibold">
            학생 개별 성장의 맥락 포착
          </div>
        </div>

        {/* Pillar 2 */}
        <div className="rounded-xl p-5 bg-slate-900/90 border border-slate-800 flex flex-col justify-between">
          <div>
            <div className="w-10 h-10 rounded-xl bg-teal-500/10 border border-teal-500/20 flex items-center justify-center text-teal-400 mb-3">
              <RefreshCw className="w-5 h-5" />
            </div>
            <span className="text-[11px] font-bold text-teal-400 uppercase tracking-wide block mb-1">
              환류 영역
            </span>
            <h3 className="text-base font-bold text-white mb-2">
              교원 협의를 통한 실시간 환류
            </h3>
            <p className="text-xs text-slate-300 leading-relaxed mb-3">
              더배움공동체와 연구학교 운영 협의회를 통해 활동 종료 직후 성과와 어려움을 즉시 분석하고 다음 프로그램에 반영했습니다.
            </p>
            <div className="space-y-1.5 text-[11px] text-slate-400">
              <div className="p-2 rounded bg-slate-950 border border-slate-800/80">
                • <strong>화상영어:</strong> 8교시 교사 피드백 및 주1회 가정 복습 체계 보강
              </div>
              <div className="p-2 rounded bg-slate-950 border border-slate-800/80">
                • <strong>문화예술:</strong> 단순 관람을 넘어 사전 감상교육과 사후 토론 연계
              </div>
              <div className="p-2 rounded bg-slate-950 border border-slate-800/80">
                • <strong>학교야영:</strong> 학생자치회 기획 권한 확대 & 전학생 관계 지원
              </div>
            </div>
          </div>

          <div className="mt-4 pt-3 border-t border-slate-800 text-[11px] text-teal-400 font-semibold">
            계획-운영-평가-환류 선순환
          </div>
        </div>

        {/* Pillar 3 */}
        <div className="rounded-xl p-5 bg-slate-900/90 border border-slate-800 flex flex-col justify-between">
          <div>
            <div className="w-10 h-10 rounded-xl bg-cyan-500/10 border border-cyan-500/20 flex items-center justify-center text-cyan-400 mb-3">
              <Share2 className="w-5 h-5" />
            </div>
            <span className="text-[11px] font-bold text-cyan-400 uppercase tracking-wide block mb-1">
              확산 영역
            </span>
            <h3 className="text-base font-bold text-white mb-2">
              일반화 자료 제작 및 현장 공유
            </h3>
            <p className="text-xs text-slate-300 leading-relaxed mb-3">
              계촌중학교의 실천 결과가 단일 학교의 경험에 그치지 않도록, 타 농어촌 소규모학교에서 즉시 활용 가능한 자료로 체계화했습니다.
            </p>
            <div className="space-y-1.5 text-[11px] text-slate-400">
              <div className="p-2 rounded bg-slate-950 border border-slate-800/80">
                • <strong>교육과정 모듈:</strong> 프로그램별 운영 목적, 대상, 지도안 수록
              </div>
              <div className="p-2 rounded bg-slate-950 border border-slate-800/80">
                • <strong>정착지원 매뉴얼:</strong> 유학생 및 전학생 초기 적응 프로토콜
              </div>
              <div className="p-2 rounded bg-slate-950 border border-slate-800/80">
                • <strong>공개수업 & 나눔:</strong> 강원도 내 교원 및 관계기관 공유회 개최
              </div>
            </div>
          </div>

          <div className="mt-4 pt-3 border-t border-slate-800 text-[11px] text-cyan-400 font-semibold">
            강원형 농어촌유학 모델 확산
          </div>
        </div>
      </div>

      {/* Framework Summary Banner */}
      <div className="p-4 rounded-xl bg-slate-900/80 border border-slate-800 flex flex-wrap items-center justify-between gap-4 text-xs text-slate-300">
        <div className="flex items-center gap-3">
          <span className="w-3 h-3 rounded-full bg-emerald-400" />
          <span className="font-semibold text-white">평가·환류의 본질:</span>
          <span>"농어촌유학은 유학생만을 위한 특화 사업이 아니라, 전교생과 마을이 함께 배우고 성장하는 포용적 공교육 모델입니다."</span>
        </div>
        <span className="font-mono text-emerald-400 font-bold bg-emerald-950 px-2 py-0.5 rounded border border-emerald-800/60">
          신뢰도 삼각검증 완비
        </span>
      </div>
    </div>
  );
};
