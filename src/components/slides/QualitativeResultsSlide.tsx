import React, { useState } from 'react';
import { QUALITATIVE_CODES } from '../../data/presentationData';
import { Quote, Filter, Sparkles, User, Tag, CheckCircle2 } from 'lucide-react';

export const QualitativeResultsSlide: React.FC = () => {
  const [selectedProgram, setSelectedProgram] = useState<string>('전체');

  const programs = [
    '전체',
    '무인멀티콥터 자격취득',
    '계촌클래식축제',
    '서울 오케스트라 페스티벌',
    '평창바로알기 이음교육',
    '심리·정서지원 체험',
    '클래식 음악 인문체험',
    '학생자치 학교야영',
  ];

  const filteredCodes = selectedProgram === '전체'
    ? QUALITATIVE_CODES
    : QUALITATIVE_CODES.filter((c) => c.program === selectedProgram);

  const getStudentRoleBadge = (studentId: string) => {
    if (studentId === '104') {
      return { label: '일반전학생', color: 'bg-teal-950 text-teal-300 border-teal-800' };
    }
    if (studentId === '302') {
      return { label: '농어촌유학생', color: 'bg-emerald-950 text-emerald-300 border-emerald-800' };
    }
    return { label: '원학구 재학생', color: 'bg-slate-800 text-slate-300 border-slate-700' };
  };

  return (
    <div className="space-y-4">
      {/* Title Header */}
      <div className="border-b border-slate-800 pb-3">
        <div className="flex items-center justify-between">
          <div className="flex items-center gap-2 text-xs font-semibold text-emerald-400">
            <span>Ⅵ. 연구(운영) 결과</span>
            <span>·</span>
            <span>활동별 학생 심층면담 질적분석 (표 15~21)</span>
          </div>
          <span className="text-[11px] text-slate-400">
            개방코딩 → 유사코드 범주화 → 상·하위범주 구조화
          </span>
        </div>
        <h2 className="text-2xl md:text-3xl font-bold font-serif-kr text-white mt-1">
          활동별 질적분석: 학생들의 생생한 목소리와 변화
        </h2>
        <p className="text-sm text-slate-400 mt-0.5">
          반구조화 면담에서 도출된 의미 있는 진술, 하위범주 및 상위범주 매트릭스
        </p>
      </div>

      {/* Program Selector Tabs */}
      <div className="flex items-center gap-1.5 overflow-x-auto pb-1 no-scrollbar">
        {programs.map((prog) => (
          <button
            key={prog}
            onClick={() => setSelectedProgram(prog)}
            className={`px-3 py-1.5 rounded-lg text-xs font-medium whitespace-nowrap transition-all cursor-pointer ${
              selectedProgram === prog
                ? 'bg-emerald-500 text-slate-950 font-bold shadow-md'
                : 'bg-slate-900 text-slate-400 hover:text-white border border-slate-800 hover:border-slate-700'
            }`}
          >
            {prog}
          </button>
        ))}
      </div>

      {/* Coding Cards Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-3.5 max-h-[460px] overflow-y-auto pr-1">
        {filteredCodes.map((item) => {
          const badge = getStudentRoleBadge(item.studentId);
          return (
            <div
              key={item.id}
              className="p-4 rounded-xl bg-slate-900/90 border border-slate-800 hover:border-slate-700 transition-all flex flex-col justify-between shadow-md"
            >
              <div>
                {/* Header: Student & Program */}
                <div className="flex items-center justify-between gap-2 mb-2.5">
                  <div className="flex items-center gap-1.5">
                    <div className="w-6 h-6 rounded-full bg-slate-800 flex items-center justify-center text-slate-300 text-xs font-mono font-bold">
                      {item.studentId}
                    </div>
                    <span className={`text-[10px] px-1.5 py-0.5 rounded border ${badge.color}`}>
                      {badge.label}
                    </span>
                  </div>
                  <span className="text-[11px] text-slate-500 truncate max-w-[130px]">
                    {item.program}
                  </span>
                </div>

                {/* Direct Quote */}
                <div className="relative pl-3 border-l-2 border-emerald-500/80 my-2">
                  <p className="text-xs text-slate-200 leading-relaxed italic">
                    "{item.quote}"
                  </p>
                </div>
              </div>

              {/* Coding tags footer */}
              <div className="mt-3 pt-2.5 border-t border-slate-800/80 flex flex-col gap-1 text-[11px]">
                <div className="flex items-center justify-between text-slate-400">
                  <span className="text-slate-500">하위범주</span>
                  <span className="font-semibold text-slate-300 text-right">{item.subCategory}</span>
                </div>
                <div className="flex items-center justify-between text-emerald-400">
                  <span className="text-slate-500">상위범주</span>
                  <span className="font-bold text-emerald-300 text-right">{item.mainCategory}</span>
                </div>
              </div>
            </div>
          );
        })}
      </div>

      {/* Summary Banner */}
      <div className="p-3 rounded-xl bg-slate-900/60 border border-slate-800 flex items-center justify-between text-xs text-slate-300">
        <span className="flex items-center gap-2">
          <CheckCircle2 className="w-4 h-4 text-emerald-400 shrink-0" />
          <span>총 7개 활동 21개 범주 분석: 자기효능감 형성, 문화예술 향유, 또래 유대감, 포용적 정착 확인</span>
        </span>
        <span className="text-emerald-400 font-semibold hidden md:inline">
          학생 중심 질적 평가 체계화 완결
        </span>
      </div>
    </div>
  );
};
