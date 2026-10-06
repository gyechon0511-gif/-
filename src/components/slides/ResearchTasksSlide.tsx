import React from 'react';
import { Target, Layers, ArrowDown, Sparkles, Share2, CheckCircle2 } from 'lucide-react';

export const ResearchTasksSlide: React.FC = () => {
  return (
    <div className="space-y-6">
      {/* Title Header */}
      <div className="border-b border-slate-800 pb-4">
        <div className="flex items-center gap-2 text-xs font-semibold text-emerald-400">
          <span>Ⅲ. 연구 과제 설정</span>
          <span>·</span>
          <span>연구 과제 체계도 (그림 2)</span>
        </div>
        <h2 className="text-2xl md:text-3xl font-bold font-serif-kr text-white mt-1">
          연구 과제 설정 및 실행 프레임워크
        </h2>
        <p className="text-sm text-slate-400 mt-1">
          기반 조성에서 프로그램 실행, 성과 평가 및 나눔으로 이어지는 구조적 체계
        </p>
      </div>

      {/* Main Vision Banner */}
      <div className="p-4 rounded-xl bg-gradient-to-r from-emerald-950/80 via-slate-900 to-teal-950/80 border border-emerald-500/40 text-center shadow-lg">
        <span className="text-[11px] font-semibold text-emerald-400 uppercase tracking-widest block mb-1">
          연구 대주제 (Grand Research Vision)
        </span>
        <h3 className="text-lg md:text-xl font-bold font-serif-kr text-white">
          "유학이 살리고, 마을이 자라는 지속가능한 농어촌 교육생태계 구축 방안 연구"
        </h3>
      </div>

      {/* 3 Research Tasks Architecture */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-5">
        {/* Task 1 */}
        <div className="rounded-xl p-5 bg-slate-900/90 border border-slate-800 flex flex-col justify-between hover:border-emerald-500/50 transition-all shadow-md group">
          <div>
            <div className="flex items-center justify-between mb-3">
              <span className="text-xs font-black text-emerald-400 bg-emerald-950 px-2.5 py-1 rounded-md border border-emerald-800/80">
                연구 과제 1
              </span>
              <span className="text-xs text-slate-500">기반 조성</span>
            </div>

            <h4 className="text-base font-bold text-white group-hover:text-emerald-300 transition-colors">
              농어촌유학 프로그램 운영 기반 조성
            </h4>
            <p className="text-xs text-slate-400 mt-2 mb-4 leading-relaxed">
              성공적인 운영을 위한 환경 및 인적·제도적 인프라 확충
            </p>

            <div className="space-y-2.5 text-xs text-slate-300">
              <div className="p-2.5 rounded-lg bg-slate-950/70 border border-slate-800/80">
                <span className="font-semibold text-emerald-400 block mb-0.5">가. 교육환경 구성</span>
                <p className="text-slate-400 text-[11px]">소규모 맞춤형 스마트 디지털 기기 및 특화 실습실 여건 정비</p>
              </div>

              <div className="p-2.5 rounded-lg bg-slate-950/70 border border-slate-800/80">
                <span className="font-semibold text-emerald-400 block mb-0.5">나. 교육공동체 역량 강화</span>
                <p className="text-slate-400 text-[11px]">전 교원 학습코칭 지도자 연수(기본·심화) & 더배움공동체 운영</p>
              </div>

              <div className="p-2.5 rounded-lg bg-slate-950/70 border border-slate-800/80">
                <span className="font-semibold text-emerald-400 block mb-0.5">다. 지원협력체계 구축</span>
                <p className="text-slate-400 text-[11px]">교육청-지자체-지역협의체-마을공동체 협력 거버넌스 가동</p>
              </div>
            </div>
          </div>

          <div className="mt-4 pt-3 border-t border-slate-800/80 text-[11px] text-emerald-400 font-medium flex items-center justify-between">
            <span>운영 토대 완성</span>
            <span>전문성 & 인프라</span>
          </div>
        </div>

        {/* Task 2 */}
        <div className="rounded-xl p-5 bg-slate-900/90 border border-slate-800 flex flex-col justify-between hover:border-teal-500/50 transition-all shadow-md group">
          <div>
            <div className="flex items-center justify-between mb-3">
              <span className="text-xs font-black text-teal-400 bg-teal-950 px-2.5 py-1 rounded-md border border-teal-800/80">
                연구 과제 2
              </span>
              <span className="text-xs text-slate-500">프로그램 실행</span>
            </div>

            <h4 className="text-base font-bold text-white group-hover:text-teal-300 transition-colors">
              지속 가능한 농어촌유학 프로그램 개발·운영
            </h4>
            <p className="text-xs text-slate-400 mt-2 mb-4 leading-relaxed">
              교과·진로·예술·마을을 연계한 4대 핵심 특화 교육과정
            </p>

            <div className="space-y-2.5 text-xs text-slate-300">
              <div className="p-2.5 rounded-lg bg-slate-950/70 border border-slate-800/80">
                <span className="font-semibold text-teal-400 block mb-0.5">가. 학습성장 프로그램</span>
                <p className="text-slate-400 text-[11px]">1:1 원어민 화상영어(학교-가정 연계) & 5단계 맞춤형 학습코칭</p>
              </div>

              <div className="p-2.5 rounded-lg bg-slate-950/70 border border-slate-800/80">
                <span className="font-semibold text-teal-400 block mb-0.5">나. 진로·미래 & 문화예술</span>
                <p className="text-slate-400 text-[11px]">무인멀티콥터 1종 자격 취득, 계촌클래식축제, 오케스트라 페스티벌</p>
              </div>

              <div className="p-2.5 rounded-lg bg-slate-950/70 border border-slate-800/80">
                <span className="font-semibold text-teal-400 block mb-0.5">다. 지역연계 & 정착지원</span>
                <p className="text-slate-400 text-[11px]">평창바로알기(서울대목장), 심리정서지원, 학생자치 학교야영</p>
              </div>
            </div>
          </div>

          <div className="mt-4 pt-3 border-t border-slate-800/80 text-[11px] text-teal-400 font-medium flex items-center justify-between">
            <span>핵심 교육활동</span>
            <span>4대 영역 실천</span>
          </div>
        </div>

        {/* Task 3 */}
        <div className="rounded-xl p-5 bg-slate-900/90 border border-slate-800 flex flex-col justify-between hover:border-cyan-500/50 transition-all shadow-md group">
          <div>
            <div className="flex items-center justify-between mb-3">
              <span className="text-xs font-black text-cyan-400 bg-cyan-950 px-2.5 py-1 rounded-md border border-cyan-800/80">
                연구 과제 3
              </span>
              <span className="text-xs text-slate-500">평가 및 나눔</span>
            </div>

            <h4 className="text-base font-bold text-white group-hover:text-cyan-300 transition-colors">
              농어촌유학 프로그램 평가 및 나눔
            </h4>
            <p className="text-xs text-slate-400 mt-2 mb-4 leading-relaxed">
              학생 성장 중심 평가와 강원형 농어촌유학 모델 확산
            </p>

            <div className="space-y-2.5 text-xs text-slate-300">
              <div className="p-2.5 rounded-lg bg-slate-950/70 border border-slate-800/80">
                <span className="font-semibold text-cyan-400 block mb-0.5">가. 학생 성장 중심 질적 평가</span>
                <p className="text-slate-400 text-[11px]">사후 심층면담 및 관찰기록 기반 질적 코딩·다각적 분석</p>
              </div>

              <div className="p-2.5 rounded-lg bg-slate-950/70 border border-slate-800/80">
                <span className="font-semibold text-cyan-400 block mb-0.5">나. 교육공동체 운영 환류</span>
                <p className="text-slate-400 text-[11px]">계획-실행-평가-환류 선순환을 통한 차기 교육과정 개선</p>
              </div>

              <div className="p-2.5 rounded-lg bg-slate-950/70 border border-slate-800/80">
                <span className="font-semibold text-cyan-400 block mb-0.5">다. 일반화 자료 제작 및 확산</span>
                <p className="text-slate-400 text-[11px]">교육과정 모듈, 정착 매뉴얼 제작 및 타 농어촌학교 공유</p>
              </div>
            </div>
          </div>

          <div className="mt-4 pt-3 border-t border-slate-800/80 text-[11px] text-cyan-400 font-medium flex items-center justify-between">
            <span>성과의 일반화</span>
            <span>강원형 모델 확산</span>
          </div>
        </div>
      </div>
    </div>
  );
};
