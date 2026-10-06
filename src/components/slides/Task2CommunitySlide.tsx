import React, { useState } from 'react';
import { Tent, Compass, HeartHandshake, MapPin, Users, Flame } from 'lucide-react';
import { PhotoSlotCard } from '../PhotoSlotCard';
import { SLIDES } from '../../data/presentationData';

interface Task2CommunitySlideProps {
  onImagePreview?: (imageUrl: string, title: string) => void;
}

export const Task2CommunitySlide: React.FC<Task2CommunitySlideProps> = ({ onImagePreview }) => {
  const [activeTab, setActiveTab] = useState<'pyeongchang' | 'psychology' | 'camp'>('camp');
  const currentSlide = SLIDES.find((s) => s.id === 14);
  const photoSlots = currentSlide?.photoSlots || [];

  return (
    <div className="space-y-5">
      {/* Title Header */}
      <div className="border-b border-slate-800 pb-3">
        <div className="flex items-center justify-between">
          <div className="flex items-center gap-2 text-xs font-semibold text-emerald-400">
            <span>Ⅴ. 연구의 실제</span>
            <span>·</span>
            <span>연구 과제 2 실행 ④ 지역연계 프로그램</span>
          </div>
          <div className="flex items-center gap-1 bg-slate-900 p-1 rounded-lg border border-slate-800 text-xs">
            <button
              onClick={() => setActiveTab('pyeongchang')}
              className={`px-2.5 py-1 rounded-md transition-colors cursor-pointer ${
                activeTab === 'pyeongchang' ? 'bg-emerald-500 text-slate-950 font-bold' : 'text-slate-400 hover:text-white'
              }`}
            >
              1. 평창바로알기 이음교육 (표 12)
            </button>
            <button
              onClick={() => setActiveTab('psychology')}
              className={`px-2.5 py-1 rounded-md transition-colors cursor-pointer ${
                activeTab === 'psychology' ? 'bg-emerald-500 text-slate-950 font-bold' : 'text-slate-400 hover:text-white'
              }`}
            >
              2. 심리·정서지원 체험 (표 13)
            </button>
            <button
              onClick={() => setActiveTab('camp')}
              className={`px-2.5 py-1 rounded-md transition-colors cursor-pointer ${
                activeTab === 'camp' ? 'bg-emerald-500 text-slate-950 font-bold' : 'text-slate-400 hover:text-white'
              }`}
            >
              3. 학생자치 학교야영 (표 14)
            </button>
          </div>
        </div>
        <h2 className="text-2xl md:text-3xl font-bold font-serif-kr text-white mt-1">
          {activeTab === 'pyeongchang' && '평창바로알기 이음교육: 유·초·중 연계 서울대 평창목장 스마트축산'}
          {activeTab === 'psychology' && '심리·정서지원 지역체험: 원주 프로농구 직관 & 강원 역사(단종) 영화'}
          {activeTab === 'camp' && '학생자치 학교야영: 텐트 밖은 계촌 & 일반전학생 초기 정착 포용'}
        </h2>
      </div>

      {/* Narrative & Details Switcher */}
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-5">
        <div className="lg:col-span-5 p-4 rounded-xl bg-slate-900/80 border border-slate-800 space-y-3">
          {activeTab === 'pyeongchang' && (
            <>
              <div className="flex items-center gap-2 text-emerald-400 font-bold text-xs">
                <Compass className="w-4 h-4" />
                <span>유치원·초등학교·중학교가 함께하는 학교급 간 이음교육</span>
              </div>
              <p className="text-xs text-slate-300 leading-relaxed">
                서울대학교 평창캠퍼스 평창목장을 방문하여 로봇착유기와 IoT 기반 스마트축산 최신 기술을 직접 체험했습니다.
              </p>
              <div className="p-3 rounded-lg bg-slate-950 border border-slate-800 text-[11px] text-slate-300 space-y-1">
                <strong className="text-emerald-300 block">계란 브랜드 기획 및 디자인</strong>
                <p className="text-slate-400">
                  단순 동물 먹이주기를 넘어 계란 수집, 브랜드 네이밍, 캐릭터 포장지 디자인 마케팅까지 실습하여 지역 산업과 진로를 융합했습니다.
                </p>
              </div>
            </>
          )}

          {activeTab === 'psychology' && (
            <>
              <div className="flex items-center gap-2 text-teal-400 font-bold text-xs">
                <HeartHandshake className="w-4 h-4" />
                <span>가족과 함께하는 스포츠맨십 & 역사적 가치 성찰</span>
              </div>
              <p className="text-xs text-slate-300 leading-relaxed">
                원주 DB 프로농구 직관 응원을 통해 팀워크와 경쟁의 가치를 배우고, 강원 영월 단종의 역사를 다룬 영화를 학부모와 함께 관람했습니다.
              </p>
              <div className="p-3 rounded-lg bg-slate-950 border border-slate-800 text-[11px] text-slate-300 space-y-1">
                <strong className="text-teal-300 block">심리적 회복과 소속감</strong>
                <p className="text-slate-400">
                  학생들은 "목청껏 응원하며 답답함이 해소되었다", "단종의 삶에서 옳은 일을 향한 용기를 배웠다"며 높은 정서적 환기를 보고했습니다.
                </p>
              </div>
            </>
          )}

          {activeTab === 'camp' && (
            <>
              <div className="flex items-center gap-2 text-amber-400 font-bold text-xs">
                <Flame className="w-4 h-4" />
                <span>학생자치회가 직접 만든 1박 2일 공동생활</span>
              </div>
              <p className="text-xs text-slate-300 leading-relaxed">
                교사가 기획한 행사가 아닌, 학생자치회가 프로그램 기획, 식사 준비, 설거지, 물놀이, 불꽃놀이, 텐트 숙박을 직접 총괄했습니다.
              </p>
              <div className="p-3 rounded-lg bg-slate-950 border border-slate-800 text-[11px] text-slate-300 space-y-1">
                <strong className="text-amber-300 block">★ 일반전학생 104번의 완벽한 학교 적응</strong>
                <p className="text-slate-400">
                  전학 직후 참여한 야영에서 기존 재학생들의 따뜻한 배려와 역할 분담을 통해 낯섦을 극복하고 진정한 계촌의 일원으로 뿌리내렸습니다.
                </p>
              </div>
            </>
          )}
        </div>

        {/* Right Details Table */}
        <div className="lg:col-span-7 rounded-xl p-4 bg-slate-900/80 border border-slate-800">
          <div className="flex items-center justify-between mb-2">
            <span className="text-xs font-bold text-slate-200">
              {activeTab === 'pyeongchang' && '[표 12] 평창바로알기 이음교육과정 운영 개요'}
              {activeTab === 'psychology' && '[표 13] 심리·정서지원 지역연계 체험학습 개요'}
              {activeTab === 'camp' && '[표 14] 학생자치 중심 학교야영 공동체 프로그램 개요'}
            </span>
            <span className="text-[11px] text-emerald-400 font-semibold">공동체 관계 회복력</span>
          </div>

          <div className="overflow-x-auto text-xs">
            <table className="w-full text-left border-collapse">
              <tbody className="divide-y divide-slate-800/70 text-slate-300">
                {activeTab === 'pyeongchang' && (
                  <>
                    <tr className="hover:bg-slate-800/20"><td className="py-2 px-3 font-semibold text-slate-400 w-1/4">운영 대상</td><td className="py-2 px-3 text-white font-medium">계촌중학교, 계촌초등학교, 계촌초병설유치원 연계</td></tr>
                    <tr className="hover:bg-slate-800/20"><td className="py-2 px-3 font-semibold text-slate-400">운영 장소</td><td className="py-2 px-3">서울대학교 평창캠퍼스 평창목장</td></tr>
                    <tr className="hover:bg-slate-800/20"><td className="py-2 px-3 font-semibold text-slate-400">주요 활동</td><td className="py-2 px-3">스마트축산 탐방, 로봇 착유기 & IoT 체험, 계란 브랜드 포장 디자인</td></tr>
                    <tr className="hover:bg-slate-800/20"><td className="py-2 px-3 font-semibold text-slate-400">연계 교과</td><td className="py-2 px-3">사회, 과학, 진로교육, 지역교육과정 (장소기반학습)</td></tr>
                  </>
                )}
                {activeTab === 'psychology' && (
                  <>
                    <tr className="hover:bg-slate-800/20"><td className="py-2 px-3 font-semibold text-slate-400 w-1/4">운영 대상</td><td className="py-2 px-3 text-white font-medium">전교생 및 희망 학부모 가족</td></tr>
                    <tr className="hover:bg-slate-800/20"><td className="py-2 px-3 font-semibold text-slate-400">운영 장소</td><td className="py-2 px-3">원주시 일대 (원주 DB아레나 농구장, 영화관)</td></tr>
                    <tr className="hover:bg-slate-800/20"><td className="py-2 px-3 font-semibold text-slate-400">주요 활동</td><td className="py-2 px-3">강원 역사 영화 관람, 프로농구 경기 직관 응원, 공동 만찬</td></tr>
                    <tr className="hover:bg-slate-800/20"><td className="py-2 px-3 font-semibold text-slate-400">운영 성과</td><td className="py-2 px-3">심리·정서적 안정, 유학생과 재학생 또래 유대감, 학교-가정 신뢰</td></tr>
                  </>
                )}
                {activeTab === 'camp' && (
                  <>
                    <tr className="hover:bg-slate-800/20"><td className="py-2 px-3 font-semibold text-slate-400 w-1/4">운영 주체</td><td className="py-2 px-3 text-white font-medium">계촌중학교 학생자치회 주도 (자율 운영)</td></tr>
                    <tr className="hover:bg-slate-800/20"><td className="py-2 px-3 font-semibold text-slate-400">운영 장소</td><td className="py-2 px-3">계촌중학교 교내 (운동장, 특별실, 텐트)</td></tr>
                    <tr className="hover:bg-slate-800/20"><td className="py-2 px-3 font-semibold text-slate-400">주요 활동</td><td className="py-2 px-3">저녁식사 공동조리, 텐트밖은계촌 레크리에이션, 워터배틀, 불꽃놀이</td></tr>
                    <tr className="hover:bg-slate-800/20"><td className="py-2 px-3 font-semibold text-slate-400">교육적 의미</td><td className="py-2 px-3 text-emerald-300 font-semibold">공동생활 속 책임감 실천 & 새로운 전학생에 대한 포용적 환대 문화 정착</td></tr>
                  </>
                )}
              </tbody>
            </table>
          </div>

          <div className="mt-4 p-2.5 rounded-lg bg-emerald-950/40 border border-emerald-800/40 text-[11px] text-emerald-300 flex items-center justify-between">
            <span>핵심 메커니즘</span>
            <span>지역 이해(Understand) → 사람 관계(Connect) → 공동체 소속(Belong)</span>
          </div>
        </div>
      </div>

      {/* Photo Row (그림 11, 12, 13 대표) */}
      <div>
        <div className="flex items-center justify-between mb-2">
          <span className="text-xs font-bold text-slate-300 flex items-center gap-1.5">
            <span className="text-emerald-400 font-bold">[그림 11·12·13]</span>
            <span>지역연계 프로그램 3대 프로젝트 활동 사진</span>
          </span>
          <span className="text-[11px] text-slate-500">* 사진 슬롯 클릭 시 로컬 이미지 파일 등록 가능</span>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
          {photoSlots.map((slot) => (
            <PhotoSlotCard key={slot.id} slot={slot} onPreview={onImagePreview} />
          ))}
        </div>
      </div>
    </div>
  );
};
