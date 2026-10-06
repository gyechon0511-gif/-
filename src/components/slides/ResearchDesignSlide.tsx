import React, { useState } from 'react';
import { Calendar, Users, GitFork, CheckCircle, Network, Building2 } from 'lucide-react';

export const ResearchDesignSlide: React.FC = () => {
  const [activeView, setActiveView] = useState<'timeline' | 'organization'>('timeline');

  return (
    <div className="space-y-5">
      {/* Title Header */}
      <div className="border-b border-slate-800 pb-3">
        <div className="flex items-center justify-between">
          <div className="flex items-center gap-2 text-xs font-semibold text-emerald-400">
            <span>Ⅳ. 연구의 설계</span>
            <span>·</span>
            <span>추진 절차(표 3) & 연구 조직(표 4)</span>
          </div>
          <div className="flex items-center gap-1 bg-slate-900 p-1 rounded-lg border border-slate-800 text-xs">
            <button
              onClick={() => setActiveView('timeline')}
              className={`px-3 py-1 rounded-md transition-colors cursor-pointer ${
                activeView === 'timeline' ? 'bg-emerald-500 text-slate-950 font-bold' : 'text-slate-400 hover:text-white'
              }`}
            >
              연간 추진 절차 로드맵
            </button>
            <button
              onClick={() => setActiveView('organization')}
              className={`px-3 py-1 rounded-md transition-colors cursor-pointer ${
                activeView === 'organization' ? 'bg-emerald-500 text-slate-950 font-bold' : 'text-slate-400 hover:text-white'
              }`}
            >
              연구학교 운영 조직도
            </button>
          </div>
        </div>
        <h2 className="text-2xl md:text-3xl font-bold font-serif-kr text-white mt-1">
          {activeView === 'timeline' ? '연구 추진 절차 및 연간 실행 로드맵' : '연구학교 협력 거버넌스 및 운영 조직 체계'}
        </h2>
      </div>

      {activeView === 'timeline' ? (
        <div className="space-y-4">
          <div className="grid grid-cols-1 md:grid-cols-4 gap-3">
            {/* Phase 1 */}
            <div className="p-4 rounded-xl bg-slate-900/90 border border-slate-800 border-t-4 border-t-sky-500">
              <span className="text-[11px] font-bold text-sky-400 uppercase tracking-wider block mb-1">
                1단계: 계획 및 준비 (12월~2월)
              </span>
              <h4 className="text-sm font-bold text-white mb-2">기반 구축 및 진단</h4>
              <ul className="text-xs text-slate-400 space-y-1.5 leading-relaxed">
                <li>• 농어촌유학 지역협의체 구축 및 정비</li>
                <li>• 유학 주거 확보 및 제반 환경 구성</li>
                <li>• 농어촌유학생 모집 및 심사 선정</li>
                <li>• 선행연구 분석 및 기초 설문조사 실시</li>
                <li>• 연구 운영조직 구성 및 계획서 심의</li>
              </ul>
            </div>

            {/* Phase 2 */}
            <div className="p-4 rounded-xl bg-slate-900/90 border border-slate-800 border-t-4 border-t-emerald-500">
              <span className="text-[11px] font-bold text-emerald-400 uppercase tracking-wider block mb-1">
                2단계: 과제 1 실행 (3월~11월)
              </span>
              <h4 className="text-sm font-bold text-white mb-2">운영 기반 조성</h4>
              <ul className="text-xs text-slate-400 space-y-1.5 leading-relaxed">
                <li>• 소규모 맞춤형 스마트 교육환경 정비</li>
                <li>• 전 교원 학습코칭 연수 (기본·심화)</li>
                <li>• 전문적학습공동체 '더배움공동체' 가동</li>
                <li>• 학부모·마을 지원협력체계 정례화</li>
              </ul>
            </div>

            {/* Phase 3 */}
            <div className="p-4 rounded-xl bg-slate-900/90 border border-slate-800 border-t-4 border-t-teal-500">
              <span className="text-[11px] font-bold text-teal-400 uppercase tracking-wider block mb-1">
                3단계: 과제 2 실행 (3월~12월)
              </span>
              <h4 className="text-sm font-bold text-white mb-2">4대 특화 프로그램</h4>
              <ul className="text-xs text-slate-400 space-y-1.5 leading-relaxed">
                <li>• 1:1 원어민 화상영어 & 학습코칭</li>
                <li>• 무인멀티콥터 1종 조종자 국가자격</li>
                <li>• 계촌클래식축제 & 서울 페스티벌 & LP</li>
                <li>• 평창바로알기(목장), 스포츠역사, 야영</li>
              </ul>
            </div>

            {/* Phase 4 */}
            <div className="p-4 rounded-xl bg-slate-900/90 border border-slate-800 border-t-4 border-t-cyan-500">
              <span className="text-[11px] font-bold text-cyan-400 uppercase tracking-wider block mb-1">
                4단계: 평가 및 일반화 (9월~2월)
              </span>
              <h4 className="text-sm font-bold text-white mb-2">질적분석 및 확산</h4>
              <ul className="text-xs text-slate-400 space-y-1.5 leading-relaxed">
                <li>• 학생 심층면담 및 질적 코딩 분석</li>
                <li>• 자료 삼각검증 및 계촌형 모델 도출</li>
                <li>• 1차년도 결과보고서 작성 및 보고회</li>
                <li>• 교육과정 모듈·매뉴얼 자료 탑재</li>
              </ul>
            </div>
          </div>

          <div className="p-3.5 rounded-xl bg-slate-900/60 border border-slate-800 flex items-center justify-between text-xs text-slate-300">
            <span className="flex items-center gap-2">
              <span className="w-2 h-2 rounded-full bg-emerald-400" />
              <span>연구 대상: 계촌중학교 학생(전교생 11명), 학부모, 교원 7명</span>
            </span>
            <span className="font-mono text-emerald-400 font-semibold">
              연구 기간: 2026. 03. 01. ~ 2027. 02. 28. (1년간 전주기 실행)
            </span>
          </div>
        </div>
      ) : (
        <div className="rounded-xl p-5 bg-slate-900/80 border border-slate-800 space-y-5">
          {/* Top Organization Nodes */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-3">
            <div className="p-3 rounded-lg bg-slate-950 border border-slate-800 text-center">
              <span className="text-[11px] font-semibold text-slate-400 block mb-0.5">지도 기관</span>
              <p className="text-xs font-bold text-slate-200">강원특별자치도교육청<br />교육연구원 · 평창교육지원청</p>
            </div>
            <div className="p-3 rounded-lg bg-emerald-950/60 border border-emerald-800/80 text-center">
              <span className="text-[11px] font-bold text-emerald-400 block mb-0.5">연구 추진 총괄</span>
              <p className="text-xs font-bold text-white">위원장: 교장 황○연</p>
              <p className="text-[11px] text-slate-300 mt-0.5">부위원장 & 담당자: 교사 하○수</p>
            </div>
            <div className="p-3 rounded-lg bg-slate-950 border border-slate-800 text-center">
              <span className="text-[11px] font-semibold text-slate-400 block mb-0.5">협력 팀(기관)</span>
              <p className="text-xs font-bold text-slate-200">학교운영위 · 학생자치회 · 학부모회<br />지역협의체 · 중등교육과정 지원단</p>
            </div>
          </div>

          {/* 5 Implementation Divisions */}
          <div>
            <span className="text-xs font-bold text-slate-300 block mb-2">5대 교원 실행 분과 및 전문 역할</span>
            <div className="grid grid-cols-2 md:grid-cols-5 gap-2.5 text-xs">
              <div className="p-3 rounded-lg bg-slate-950/70 border border-slate-800">
                <span className="font-bold text-emerald-400 block">연구기획</span>
                <span className="text-[11px] text-slate-400">교사 하○수</span>
                <p className="text-[11px] text-slate-300 mt-1">기초조사, 선행연구, 계획서 작성, 기관연계</p>
              </div>

              <div className="p-3 rounded-lg bg-slate-950/70 border border-slate-800">
                <span className="font-bold text-teal-400 block">운영실천</span>
                <span className="text-[11px] text-slate-400">교사 최○은</span>
                <p className="text-[11px] text-slate-300 mt-1">더배움공동체, 교내환경, 교내행사, 수업나눔</p>
              </div>

              <div className="p-3 rounded-lg bg-slate-950/70 border border-slate-800">
                <span className="font-bold text-cyan-400 block">활동지원·자료개발</span>
                <span className="text-[11px] text-slate-400">교사 이○늘</span>
                <p className="text-[11px] text-slate-300 mt-1">체험학습 추진, 지역연계, 학습자료, 동아리</p>
              </div>

              <div className="p-3 rounded-lg bg-slate-950/70 border border-slate-800">
                <span className="font-bold text-sky-400 block">연수 및 홍보</span>
                <span className="text-[11px] text-slate-400">교사 김○옥</span>
                <p className="text-[11px] text-slate-300 mt-1">학부모 연수, 홈페이지·플랫폼 운영, 작품전시</p>
              </div>

              <div className="p-3 rounded-lg bg-slate-950/70 border border-slate-800">
                <span className="font-bold text-amber-400 block">평가분석</span>
                <span className="text-[11px] text-slate-400">교사 이○영</span>
                <p className="text-[11px] text-slate-300 mt-1">실태조사, 평가계획, 질적자료 분석, 발간자료</p>
              </div>
            </div>
          </div>

          {/* Admin Support Community */}
          <div className="p-3 rounded-lg bg-slate-950/50 border border-slate-800 flex flex-wrap items-center justify-between text-xs text-slate-400 gap-2">
            <span className="font-semibold text-slate-200">학교업무 정상화 지원 공동체:</span>
            <span>행정실장 (예산 조정·집행)</span>
            <span>·</span>
            <span>주무관 (계약, 교육환경, 에듀버스)</span>
            <span>·</span>
            <span>교무행정사 (예산품의, 사진촬영, 안내)</span>
          </div>
        </div>
      )}
    </div>
  );
};
