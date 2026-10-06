import React, { useState } from 'react';
import { Music, Radio, Disc3, BookOpen, Sparkles, MapPin } from 'lucide-react';
import { PhotoSlotCard } from '../PhotoSlotCard';
import { SLIDES } from '../../data/presentationData';

interface Task2CultureSlideProps {
  onImagePreview?: (imageUrl: string, title: string) => void;
}

export const Task2CultureSlide: React.FC<Task2CultureSlideProps> = ({ onImagePreview }) => {
  const [activeProject, setActiveProject] = useState<'festival' | 'seoul' | 'humanities'>('festival');
  const currentSlide = SLIDES.find((s) => s.id === 13);
  const photoSlots = currentSlide?.photoSlots || [];

  return (
    <div className="space-y-5">
      {/* Title Header */}
      <div className="border-b border-slate-800 pb-3">
        <div className="flex items-center justify-between">
          <div className="flex items-center gap-2 text-xs font-semibold text-emerald-400">
            <span>Ⅴ. 연구의 실제</span>
            <span>·</span>
            <span>연구 과제 2 실행 ③ 문화예술·공동체 프로그램</span>
          </div>
          <div className="flex items-center gap-1 bg-slate-900 p-1 rounded-lg border border-slate-800 text-xs">
            <button
              onClick={() => setActiveProject('festival')}
              className={`px-2.5 py-1 rounded-md transition-colors cursor-pointer ${
                activeProject === 'festival' ? 'bg-emerald-500 text-slate-950 font-bold' : 'text-slate-400 hover:text-white'
              }`}
            >
              1. 계촌클래식축제 (표 9)
            </button>
            <button
              onClick={() => setActiveProject('seoul')}
              className={`px-2.5 py-1 rounded-md transition-colors cursor-pointer ${
                activeProject === 'seoul' ? 'bg-emerald-500 text-slate-950 font-bold' : 'text-slate-400 hover:text-white'
              }`}
            >
              2. 서울 오케스트라 (표 10)
            </button>
            <button
              onClick={() => setActiveProject('humanities')}
              className={`px-2.5 py-1 rounded-md transition-colors cursor-pointer ${
                activeProject === 'humanities' ? 'bg-emerald-500 text-slate-950 font-bold' : 'text-slate-400 hover:text-white'
              }`}
            >
              3. LP 인문체험 (표 11)
            </button>
          </div>
        </div>
        <h2 className="text-2xl md:text-3xl font-bold font-serif-kr text-white mt-1">
          {activeProject === 'festival' && '계촌클래식축제 연계: 연주자이자 운영 주체로의 도약'}
          {activeProject === 'seoul' && '서울 청소년 오케스트라 페스티벌: 시야 확장 및 공동체 환기'}
          {activeProject === 'humanities' && '클래식 음악 인문체험: LP 바이닐 청음 & 고래책방 인문 탐색'}
        </h2>
      </div>

      {/* Narrative & Table Switcher */}
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-5">
        <div className="lg:col-span-5 p-4 rounded-xl bg-slate-900/80 border border-slate-800 space-y-3">
          {activeProject === 'festival' && (
            <>
              <div className="flex items-center gap-2 text-emerald-400 font-bold text-xs">
                <Music className="w-4 h-4" />
                <span>학교와 마을이 음악으로 하나 되는 예술 공동체</span>
              </div>
              <p className="text-xs text-slate-300 leading-relaxed">
                학생들은 단순한 관람객이 아니었습니다. 방과후 파트별 연습과 계촌초 연계 합주를 거쳐 <strong>별빛 오케스트라 메인 무대 공연</strong>을 직접 선보였습니다.
              </p>
              <div className="p-3 rounded-lg bg-slate-950 border border-slate-800 text-[11px] text-slate-300 space-y-1">
                <strong className="text-emerald-300 block">운영 주체로서의 성장</strong>
                <p className="text-slate-400">
                  관람객 대상 곡 해설, 퀴즈 부스 운영, 무대·음향 감독과의 인터뷰를 통해 지역축제의 진정한 주인공이자 문화예술 진로의 가능성을 발견했습니다.
                </p>
              </div>
            </>
          )}

          {activeProject === 'seoul' && (
            <>
              <div className="flex items-center gap-2 text-sky-400 font-bold text-xs">
                <Radio className="w-4 h-4" />
                <span>도시 전문 예술 자원과의 만남을 통한 환류</span>
              </div>
              <p className="text-xs text-slate-300 leading-relaxed">
                2026년 5월 16일 서울어린이대공원에서 열린 대규모 청소년 오케스트라 페스티벌을 참관하며 타 지역 청소년들의 수준 높은 합주를 직접 감상했습니다.
              </p>
              <div className="p-3 rounded-lg bg-slate-950 border border-slate-800 text-[11px] text-slate-300 space-y-1">
                <strong className="text-sky-300 block">견문 확장과 또래 유대감</strong>
                <p className="text-slate-400">
                  "우리가 하고 있는 오케스트라가 얼마나 멋진 일인지 알게 되었다"는 자긍심과 함께, 학교 밖 놀이공원 체험을 통해 유학생과 기존 학생의 심리적 거리가 급격히 좁혀졌습니다.
                </p>
              </div>
            </>
          )}

          {activeProject === 'humanities' && (
            <>
              <div className="flex items-center gap-2 text-amber-400 font-bold text-xs">
                <Disc3 className="w-4 h-4" />
                <span>디지털 스트리밍을 넘어선 아날로그 인문 감상</span>
              </div>
              <p className="text-xs text-slate-300 leading-relaxed">
                강릉 바이닐(청음카페)에서 LP 턴테이블로 클래식을 직접 고르고 듣는 아날로그 체험을 진행하고, 음악 전문서점 '고래책방'에서 음악가 전기를 읽었습니다.
              </p>
              <div className="p-3 rounded-lg bg-slate-950 border border-slate-800 text-[11px] text-slate-300 space-y-1">
                <strong className="text-amber-300 block">음악을 읽고 향유하는 주체성</strong>
                <p className="text-slate-400">
                  선생님이 틀어주는 음악이 아닌, 자신이 음반을 살펴보고 취향을 발견하는 능동적 문화예술 향유 역량을 심어주었습니다.
                </p>
              </div>
            </>
          )}
        </div>

        {/* Right Details Table */}
        <div className="lg:col-span-7 rounded-xl p-4 bg-slate-900/80 border border-slate-800">
          <div className="flex items-center justify-between mb-2">
            <span className="text-xs font-bold text-slate-200">
              {activeProject === 'festival' && '[표 9] 계촌클래식축제 연계 프로그램 개요'}
              {activeProject === 'seoul' && '[표 10] 서울 청소년 오케스트라 페스티벌 개요'}
              {activeProject === 'humanities' && '[표 11] 클래식 음악 인문체험 프로그램 개요'}
            </span>
            <span className="text-[11px] text-emerald-400 font-semibold">장소기반 문화예술교육(PBE)</span>
          </div>

          <div className="overflow-x-auto text-xs">
            <table className="w-full text-left border-collapse">
              <tbody className="divide-y divide-slate-800/70 text-slate-300">
                {activeProject === 'festival' && (
                  <>
                    <tr className="hover:bg-slate-800/20"><td className="py-2 px-3 font-semibold text-slate-400 w-1/4">운영 대상</td><td className="py-2 px-3 text-white font-medium">전교생 및 계촌초 연계 합주단</td></tr>
                    <tr className="hover:bg-slate-800/20"><td className="py-2 px-3 font-semibold text-slate-400">운영 장소</td><td className="py-2 px-3">계촌중학교 강당 및 축제 야외 메인무대</td></tr>
                    <tr className="hover:bg-slate-800/20"><td className="py-2 px-3 font-semibold text-slate-400">주요 활동</td><td className="py-2 px-3">별빛오케스트라 공연, 클래식 명인 공연 관람, 해설 부스 운영</td></tr>
                    <tr className="hover:bg-slate-800/20"><td className="py-2 px-3 font-semibold text-slate-400">연계 기관</td><td className="py-2 px-3">계촌클래식축제 추진위원회, 한국예술종합학교, 마을회</td></tr>
                  </>
                )}
                {activeProject === 'seoul' && (
                  <>
                    <tr className="hover:bg-slate-800/20"><td className="py-2 px-3 font-semibold text-slate-400 w-1/4">운영 일시</td><td className="py-2 px-3 text-white font-medium">2026년 5월 16일 (토요일)</td></tr>
                    <tr className="hover:bg-slate-800/20"><td className="py-2 px-3 font-semibold text-slate-400">운영 장소</td><td className="py-2 px-3">서울어린이대공원 일대 및 야외음악당</td></tr>
                    <tr className="hover:bg-slate-800/20"><td className="py-2 px-3 font-semibold text-slate-400">주요 활동</td><td className="py-2 px-3">타 청소년 오케스트라 연주 감상, 관람 예절 실천, 놀이공원 공동체 체험</td></tr>
                    <tr className="hover:bg-slate-800/20"><td className="py-2 px-3 font-semibold text-slate-400">사후 활동</td><td className="py-2 px-3">악기 음색 비교 토론, 감상문 작성 및 별빛 오케스트라 연습 목표 재설정</td></tr>
                  </>
                )}
                {activeProject === 'humanities' && (
                  <>
                    <tr className="hover:bg-slate-800/20"><td className="py-2 px-3 font-semibold text-slate-400 w-1/4">운영 장소</td><td className="py-2 px-3 text-white font-medium">강릉 바이닐(청음카페), 고래책방(음악전문서점)</td></tr>
                    <tr className="hover:bg-slate-800/20"><td className="py-2 px-3 font-semibold text-slate-400">운영 형태</td><td className="py-2 px-3">클래식 음악 감상 및 인문학 독서 융합 체험학습</td></tr>
                    <tr className="hover:bg-slate-800/20"><td className="py-2 px-3 font-semibold text-slate-400">주요 활동</td><td className="py-2 px-3">LP 음반 재생법 실습, 아날로그 음색 탐구, 음악 관련 인문 도서 탐색</td></tr>
                    <tr className="hover:bg-slate-800/20"><td className="py-2 px-3 font-semibold text-slate-400">교육과정 연계</td><td className="py-2 px-3">음악과 감상 영역, 문화예술교육, 독서·인문 융합 교육</td></tr>
                  </>
                )}
              </tbody>
            </table>
          </div>

          <div className="mt-4 p-2.5 rounded-lg bg-emerald-950/40 border border-emerald-800/40 text-[11px] text-emerald-300">
            핵심 성과: 참여(Participate) → 확장(Experience) → 향유(Appreciate)로 이어지는 3단계 예술 심화
          </div>
        </div>
      </div>

      {/* Photo Row (그림 8, 9, 10 대표) */}
      <div>
        <div className="flex items-center justify-between mb-2">
          <span className="text-xs font-bold text-slate-300 flex items-center gap-1.5">
            <span className="text-emerald-400 font-bold">[그림 8·9·10]</span>
            <span>문화예술·공동체 프로그램 3대 프로젝트 활동 사진</span>
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
