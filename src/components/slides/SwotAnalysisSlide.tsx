import React, { useState } from 'react';
import { ArrowUpRight, TrendingUp, ShieldAlert, Award, Lightbulb, Users, CheckCircle2 } from 'lucide-react';
import { STUDENT_STATISTICS } from '../../data/presentationData';

export const SwotAnalysisSlide: React.FC = () => {
  const [selectedQuadrant, setSelectedQuadrant] = useState<'ALL' | 'SO' | 'WO' | 'ST' | 'WT'>('ALL');

  return (
    <div className="space-y-5">
      {/* Title Header */}
      <div className="border-b border-slate-800 pb-3">
        <div className="flex items-center gap-2 text-xs font-semibold text-emerald-400">
          <span>Ⅱ. 실태 분석</span>
          <span>·</span>
          <span>학생 수 변화 & SWOT 분석 (그림 1)</span>
        </div>
        <h2 className="text-2xl md:text-3xl font-bold font-serif-kr text-white mt-1">
          실태 분석: 학생 수 변화 및 SWOT 전략 매트릭스
        </h2>
        <p className="text-sm text-slate-400 mt-0.5">
          일반전학생 유입 성과 분석과 학교 지속가능성을 위한 4대 전략 방향
        </p>
      </div>

      {/* Top: Student Number Table (Table 2) */}
      <div className="rounded-xl p-4 bg-slate-900/80 border border-slate-800">
        <div className="flex flex-wrap items-center justify-between gap-2 mb-2.5">
          <div className="flex items-center gap-2">
            <span className="text-xs font-bold text-emerald-400 bg-emerald-950 px-2 py-0.5 rounded border border-emerald-800/60">
              [표 2]
            </span>
            <h3 className="text-xs md:text-sm font-bold text-slate-100">
              2026학년도 농어촌유학에 따른 계촌중학교 학생 수 변화
            </h3>
          </div>
          <span className="text-[11px] text-emerald-400 font-semibold flex items-center gap-1">
            <TrendingUp className="w-3.5 h-3.5" />
            <span>유학 홍보 효과로 농어촌유학생 1명 + 일반전학생 1명 총 2명 순증 (전교생 11명)</span>
          </span>
        </div>

        <div className="overflow-x-auto">
          <table className="w-full text-xs text-center border-collapse">
            <thead>
              <tr className="bg-slate-950 text-slate-300 border-b border-slate-800">
                <th rowSpan={2} className="py-2 px-3 text-left font-semibold border-r border-slate-800">구분</th>
                <th colSpan={3} className="py-1.5 px-2 font-semibold border-r border-slate-800 text-sky-400">1학년</th>
                <th colSpan={3} className="py-1.5 px-2 font-semibold border-r border-slate-800 text-teal-400">2학년</th>
                <th colSpan={3} className="py-1.5 px-2 font-semibold border-r border-slate-800 text-amber-400">3학년</th>
                <th rowSpan={2} className="py-2 px-3 font-bold bg-slate-900 text-emerald-400">총계</th>
              </tr>
              <tr className="bg-slate-950/80 text-slate-400 border-b border-slate-800 text-[11px]">
                <th className="py-1 px-1.5">남</th>
                <th className="py-1 px-1.5">여</th>
                <th className="py-1 px-2 border-r border-slate-800 font-semibold text-slate-200">소계</th>
                <th className="py-1 px-1.5">남</th>
                <th className="py-1 px-1.5">여</th>
                <th className="py-1 px-2 border-r border-slate-800 font-semibold text-slate-200">소계</th>
                <th className="py-1 px-1.5">남</th>
                <th className="py-1 px-1.5">여</th>
                <th className="py-1 px-2 border-r border-slate-800 font-semibold text-slate-200">소계</th>
              </tr>
            </thead>
            <tbody className="divide-y divide-slate-800/70 text-slate-300">
              <tr className="hover:bg-slate-800/30">
                <td className="py-1.5 px-3 text-left font-medium border-r border-slate-800 text-slate-300">원학구 재학생</td>
                <td className="py-1.5 px-1.5">2</td>
                <td className="py-1.5 px-1.5">1</td>
                <td className="py-1.5 px-2 font-bold text-slate-100 border-r border-slate-800">3</td>
                <td className="py-1.5 px-1.5">1</td>
                <td className="py-1.5 px-1.5">4</td>
                <td className="py-1.5 px-2 font-bold text-slate-100 border-r border-slate-800">5</td>
                <td className="py-1.5 px-1.5">1</td>
                <td className="py-1.5 px-1.5">0</td>
                <td className="py-1.5 px-2 font-bold text-slate-100 border-r border-slate-800">1</td>
                <td className="py-1.5 px-3 font-bold bg-slate-900/60 text-slate-200">9명</td>
              </tr>
              <tr className="bg-emerald-950/20 text-emerald-300 hover:bg-emerald-950/30">
                <td className="py-1.5 px-3 text-left font-semibold border-r border-slate-800 flex items-center gap-1.5">
                  <span className="w-1.5 h-1.5 rounded-full bg-emerald-400" />
                  <span>농어촌유학생 & 일반전학생</span>
                </td>
                <td className="py-1.5 px-1.5">-</td>
                <td className="py-1.5 px-1.5 font-bold text-emerald-400">1 (유학)</td>
                <td className="py-1.5 px-2 font-bold border-r border-slate-800 text-emerald-300">1</td>
                <td className="py-1.5 px-1.5">-</td>
                <td className="py-1.5 px-1.5">-</td>
                <td className="py-1.5 px-2 font-bold border-r border-slate-800">-</td>
                <td className="py-1.5 px-1.5">-</td>
                <td className="py-1.5 px-1.5 font-bold text-teal-400">1 (전학)</td>
                <td className="py-1.5 px-2 font-bold border-r border-slate-800 text-teal-300">1</td>
                <td className="py-1.5 px-3 font-bold bg-emerald-900/40 text-emerald-300">+2명</td>
              </tr>
              <tr className="bg-slate-950 font-bold text-white">
                <td className="py-2 px-3 text-left border-r border-slate-800">최종 재학생수 합계</td>
                <td colSpan={3} className="py-2 px-2 border-r border-slate-800 text-sky-300">4명</td>
                <td colSpan={3} className="py-2 px-2 border-r border-slate-800 text-teal-300">5명</td>
                <td colSpan={3} className="py-2 px-2 border-r border-slate-800 text-amber-300">2명</td>
                <td className="py-2 px-3 bg-emerald-950 text-emerald-300 text-sm">총 11명</td>
              </tr>
            </tbody>
          </table>
        </div>
      </div>

      {/* SWOT Quadrant Matrix + Strategy Tabs */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-3.5">
        {/* Strengths */}
        <div className="p-3.5 rounded-xl bg-slate-900/90 border-l-4 border-l-emerald-500 border border-slate-800/80">
          <div className="flex items-center justify-between mb-2">
            <span className="text-xs font-bold text-emerald-400 uppercase tracking-wide flex items-center gap-1.5">
              <span className="w-5 h-5 rounded bg-emerald-500/20 flex items-center justify-center text-emerald-400 font-black">S</span>
              강점 (Strengths)
            </span>
            <span className="text-[10px] text-slate-500">내부 요인</span>
          </div>
          <ul className="text-xs text-slate-300 space-y-1.5">
            <li>• <strong>계촌클래식축제 연계</strong> 지역특화 교육과정 및 오케스트라 문화</li>
            <li>• <strong>특성화 교육 성과:</strong> 무인멀티콥터 1종 조종자, 원어민 화상영어</li>
            <li>• <strong>학생 맞춤형 교육:</strong> 1:1 학습코칭 및 소규모학교 밀착 지도</li>
            <li>• <strong className="text-emerald-300">★ 일반전학생 유입 발생:</strong> 교육 매력도로 자발적 전학 성과 입증</li>
          </ul>
        </div>

        {/* Weaknesses */}
        <div className="p-3.5 rounded-xl bg-slate-900/90 border-l-4 border-l-amber-500 border border-slate-800/80">
          <div className="flex items-center justify-between mb-2">
            <span className="text-xs font-bold text-amber-400 uppercase tracking-wide flex items-center gap-1.5">
              <span className="w-5 h-5 rounded bg-amber-500/20 flex items-center justify-center text-amber-400 font-black">W</span>
              약점 (Weaknesses)
            </span>
            <span className="text-[10px] text-slate-500">내부 요인</span>
          </div>
          <ul className="text-xs text-slate-300 space-y-1.5">
            <li>• 소규모 학교로 인한 교원 1인당 업무 및 특성화 프로그램 부담 과중</li>
            <li>• 농어촌유학생 장기 정착을 위한 <strong>주거 및 생활 편의 인프라 부족</strong></li>
            <li>• 외부 재원 의존도가 높아 연구학교 종료 후 프로그램 지속 예산 불투명</li>
            <li>• 지역 내 전문 강사 인력풀(Pool)의 지리적 한계</li>
          </ul>
        </div>

        {/* Opportunities */}
        <div className="p-3.5 rounded-xl bg-slate-900/90 border-l-4 border-l-sky-500 border border-slate-800/80">
          <div className="flex items-center justify-between mb-2">
            <span className="text-xs font-bold text-sky-400 uppercase tracking-wide flex items-center gap-1.5">
              <span className="w-5 h-5 rounded bg-sky-500/20 flex items-center justify-center text-sky-400 font-black">O</span>
              기회 (Opportunities)
            </span>
            <span className="text-[10px] text-slate-500">외부 환경</span>
          </div>
          <ul className="text-xs text-slate-300 space-y-1.5">
            <li>• <strong>강원특별자치도교육청</strong> 농어촌유학 정책 확대 및 제도적 지원 강화</li>
            <li>• 계촌 클래식 마을, 평창 자연·스마트농축산 등 <strong>지역 자원 연계 확장</strong></li>
            <li>• 중학교형 농어촌유학 모델의 선도적 일반화 및 타 학교 확산 가능성</li>
            <li>• 교육지원청-평창군청-한예종 등 지역 협력 네트워크 강화 분위기</li>
          </ul>
        </div>

        {/* Threats */}
        <div className="p-3.5 rounded-xl bg-slate-900/90 border-l-4 border-l-rose-500 border border-slate-800/80">
          <div className="flex items-center justify-between mb-2">
            <span className="text-xs font-bold text-rose-400 uppercase tracking-wide flex items-center gap-1.5">
              <span className="w-5 h-5 rounded bg-rose-500/20 flex items-center justify-center text-rose-400 font-black">T</span>
              위협 (Threats)
            </span>
            <span className="text-[10px] text-slate-500">외부 환경</span>
          </div>
          <ul className="text-xs text-slate-300 space-y-1.5">
            <li>• 저출생에 따른 지속적인 학령인구 급감 및 농어촌 인구 유출 심화</li>
            <li>• 전국적 농어촌유학 운영교 증가에 따른 <strong>학교 간 유치 경쟁 심화</strong></li>
            <li>• 지자체 재정 여건 및 지원 정책 변동에 따른 불확실성</li>
            <li>• 초등 중심 유학 정책에 따른 중학교급 연계 지원 제도 미비</li>
          </ul>
        </div>
      </div>

      {/* 4 Major Strategic Directions */}
      <div className="p-3.5 rounded-xl bg-slate-900/70 border border-slate-800">
        <span className="text-[11px] font-bold text-slate-300 uppercase tracking-wider block mb-2">
          SWOT 분석을 통한 4대 도출 전략 (실행 방향)
        </span>
        <div className="grid grid-cols-1 md:grid-cols-4 gap-2.5 text-xs">
          <div className="p-2.5 rounded-lg bg-emerald-950/40 border border-emerald-800/40">
            <span className="font-bold text-emerald-400 block mb-1">SO 전략 (강점-기회)</span>
            <p className="text-slate-300 font-semibold">교육 모델 고도화 및 확산</p>
            <p className="text-[11px] text-slate-400 mt-1">지역 특화 교육과정 바탕 정착 연계 확대 & 일반전학생 유입 홍보</p>
          </div>
          <div className="p-2.5 rounded-lg bg-teal-950/40 border border-teal-800/40">
            <span className="font-bold text-teal-400 block mb-1">WO 전략 (약점-기회)</span>
            <p className="text-slate-300 font-semibold">정착지원 및 인프라 강화</p>
            <p className="text-[11px] text-slate-400 mt-1">학부모 정착지원 체계 구축 & 지자체 연계 주거·생활 편의 개선</p>
          </div>
          <div className="p-2.5 rounded-lg bg-sky-950/40 border border-sky-800/40">
            <span className="font-bold text-sky-400 block mb-1">ST 전략 (강점-위협)</span>
            <p className="text-slate-300 font-semibold">차별화 및 브랜드화 전략</p>
            <p className="text-[11px] text-slate-400 mt-1">오케스트라·드론·글로벌 차별화 & 학교 브랜드 스토리 제고</p>
          </div>
          <div className="p-2.5 rounded-lg bg-indigo-950/40 border border-indigo-800/40">
            <span className="font-bold text-indigo-400 block mb-1">WT 전략 (약점-위협)</span>
            <p className="text-slate-300 font-semibold">지속가능 운영체계 구축</p>
            <p className="text-[11px] text-slate-400 mt-1">지자체·교육청 정례 거버넌스 & 장기적 관점의 학교발전 연대</p>
          </div>
        </div>
      </div>
    </div>
  );
};
