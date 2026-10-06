import React from 'react';
import { Award, Compass, School, Music } from 'lucide-react';

interface CoverSlideProps {
  onStart: () => void;
}

export const CoverSlide: React.FC<CoverSlideProps> = ({ onStart }) => {
  return (
    <div className="relative min-h-[640px] h-full flex flex-col justify-between p-8 md:p-12 lg:p-16 rounded-2xl bg-gradient-to-br from-slate-900 via-slate-900 to-emerald-950/40 border border-slate-800 shadow-2xl overflow-hidden">
      {/* Decorative background ambient glows */}
      <div className="absolute -top-32 -right-32 w-96 h-96 bg-emerald-500/10 rounded-full blur-3xl pointer-events-none" />
      <div className="absolute -bottom-32 -left-32 w-96 h-96 bg-sky-500/10 rounded-full blur-3xl pointer-events-none" />

      {/* Top Header Information */}
      <div className="relative z-10 flex flex-wrap items-center justify-between gap-4 border-b border-slate-800/80 pb-6">
        <div className="flex items-center gap-3">
          <div className="w-10 h-10 rounded-xl bg-emerald-500/10 border border-emerald-500/20 flex items-center justify-center text-emerald-400">
            <School className="w-5 h-5" />
          </div>
          <div>
            <span className="text-xs font-semibold text-emerald-400 tracking-wider">강원특별자치도교육청 지정 연구(시범)학교</span>
            <h3 className="text-base font-bold text-slate-100">계촌중학교 (평창)</h3>
          </div>
        </div>

        <div className="flex items-center gap-4 text-xs text-slate-300">
          <div className="flex items-center gap-1.5">
            <span className="text-slate-400 font-medium">영역:</span>
            <span className="text-slate-100 font-semibold">교육과정</span>
          </div>
          <span className="text-slate-700">|</span>
          <div className="flex items-center gap-1.5">
            <span className="text-slate-400 font-medium">운영기간:</span>
            <span className="text-slate-100 font-mono">2026. 3. 1. ~ 2027. 2. 28. (1/1)</span>
          </div>
        </div>
      </div>

      {/* Main Title Hero */}
      <div className="relative z-10 my-auto py-8">
        <div className="inline-flex items-center gap-2 text-xs font-medium text-emerald-400 mb-4 bg-emerald-950/60 border border-emerald-800/60 px-3 py-1 rounded-md">
          <Award className="w-3.5 h-3.5" />
          <span>교육과정 연구학교 운영 결과보고서</span>
        </div>

        <h1 className="text-3xl md:text-5xl lg:text-6xl font-black font-serif-kr tracking-tight text-white leading-tight md:leading-tight">
          <span className="text-emerald-400">유학이 살리고,</span><br className="hidden md:block" />
          <span className="text-white">마을이 자라는 </span>
          <span className="bg-gradient-to-r from-emerald-300 to-teal-200 bg-clip-text text-transparent">지속가능한</span><br />
          <span>농어촌 교육생태계 구축 방안 연구</span>
        </h1>

        <p className="mt-6 text-base md:text-lg text-slate-300 max-w-3xl leading-relaxed">
          전교생 11명의 평창 계촌중학교가 마을의 문화자원(계촌클래식축제·별빛 오케스트라)과 미래역량(무인멀티콥터·스마트축산)을 유기적으로 연계하여 실현한 <strong className="text-emerald-300 font-semibold">중학교형 농어촌유학 모델</strong>의 질적 사례연구 및 운영 성과를 보고합니다.
        </p>

        <div className="mt-8 flex flex-wrap items-center gap-3">
          <button
            onClick={onStart}
            className="inline-flex items-center gap-2 px-6 py-3 rounded-xl bg-emerald-500 hover:bg-emerald-400 text-slate-950 font-bold text-sm tracking-wide transition-all shadow-lg hover:shadow-emerald-500/25 cursor-pointer"
          >
            <span>발표 시작하기 (다음 슬라이드)</span>
            <Compass className="w-4 h-4" />
          </button>
        </div>
      </div>

      {/* Footer Info Strip */}
      <div className="relative z-10 pt-6 border-t border-slate-800/80 grid grid-cols-1 md:grid-cols-3 gap-4 text-xs text-slate-400">
        <div>
          <span className="text-slate-400 font-medium block">연구 주무 기관</span>
          <p className="text-slate-200 font-medium mt-0.5">강원특별자치도교육청 · 평창교육지원청</p>
        </div>
        <div>
          <span className="text-slate-400 font-medium block">학교 소재지</span>
          <p className="text-slate-200 font-medium mt-0.5">강원특별자치도 평창군 방림면 계촌길 139</p>
        </div>
        <div className="md:text-right">
          <span className="text-slate-400 font-medium block">보고 일자</span>
          <p className="text-slate-200 font-semibold mt-0.5">2026년 10월 운영 결과 발표</p>
        </div>
      </div>
    </div>
  );
};
