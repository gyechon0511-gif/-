import React, { useState } from 'react';
import { Globe, BookOpen, RefreshCw, CheckCircle, Laptop, ArrowRight } from 'lucide-react';
import { PhotoSlotCard } from '../PhotoSlotCard';
import { SLIDES } from '../../data/presentationData';

interface Task2LearningSlideProps {
  onImagePreview?: (imageUrl: string, title: string) => void;
}

export const Task2LearningSlide: React.FC<Task2LearningSlideProps> = ({ onImagePreview }) => {
  const [activeTab, setActiveTab] = useState<'english' | 'coaching'>('english');
  const currentSlide = SLIDES.find((s) => s.id === 11);
  const photoSlots = currentSlide?.photoSlots || [];

  return (
    <div className="space-y-5">
      {/* Title Header */}
      <div className="border-b border-slate-800 pb-3">
        <div className="flex items-center justify-between">
          <div className="flex items-center gap-2 text-xs font-semibold text-emerald-400">
            <span>Ⅴ. 연구의 실제</span>
            <span>·</span>
            <span>연구 과제 2 실행 ① 학습성장 프로그램</span>
          </div>
          <div className="flex items-center gap-1 bg-slate-900 p-1 rounded-lg border border-slate-800 text-xs">
            <button
              onClick={() => setActiveTab('english')}
              className={`px-3 py-1 rounded-md transition-colors cursor-pointer ${
                activeTab === 'english' ? 'bg-emerald-500 text-slate-950 font-bold' : 'text-slate-400 hover:text-white'
              }`}
            >
              1) 원어민 화상영어 (표 6)
            </button>
            <button
              onClick={() => setActiveTab('coaching')}
              className={`px-3 py-1 rounded-md transition-colors cursor-pointer ${
                activeTab === 'coaching' ? 'bg-emerald-500 text-slate-950 font-bold' : 'text-slate-400 hover:text-white'
              }`}
            >
              2) 5단계 맞춤형 학습코칭 (표 7)
            </button>
          </div>
        </div>
        <h2 className="text-2xl md:text-3xl font-bold font-serif-kr text-white mt-1">
          {activeTab === 'english'
            ? '원어민 1:1 화상영어: 학교-가정 순환형 회화 시스템'
            : '학습코칭 기반 맞춤형 학습성장: 자기주도 5단계 체계'}
        </h2>
      </div>

      {activeTab === 'english' ? (
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-5">
          <div className="lg:col-span-5 p-4 rounded-xl bg-slate-900/80 border border-slate-800 space-y-3">
            <div className="flex items-center gap-2 text-emerald-400 font-bold text-xs">
              <Globe className="w-4 h-4" />
              <span>원어민 화상영어의 혁신적 3단계 순환 체계</span>
            </div>
            <div className="space-y-2 text-xs text-slate-300 leading-relaxed">
              <div className="p-2.5 rounded-lg bg-slate-950 border border-slate-800">
                <span className="font-bold text-emerald-400 block mb-0.5">STEP 1. 매주 수요일 7교시 (화상 회화)</span>
                <p className="text-slate-400 text-[11px]">
                  개인별 노트북/태블릿으로 원어민 교사와 1:1 실시간 회화. 모든 학생이 충분한 발화 시간 확보.
                </p>
              </div>

              <div className="p-2.5 rounded-lg bg-slate-950 border border-slate-800">
                <span className="font-bold text-teal-400 block mb-0.5">STEP 2. 매주 수요일 8교시 (본교 교사 피드백)</span>
                <p className="text-slate-400 text-[11px]">
                  본교 영어교사가 7교시 화상 수업 내용을 즉시 확인하여 부족한 어휘, 문법, 발음을 1:1 보충 지도.
                </p>
              </div>

              <div className="p-2.5 rounded-lg bg-slate-950 border border-slate-800">
                <span className="font-bold text-cyan-400 block mb-0.5">STEP 3. 주 1회 가정 연계학습 (복습 및 체화)</span>
                <p className="text-slate-400 text-[11px]">
                  가정에서 배운 핵심 표현 복습 과제 수행 후 차주 화상수업에서 연계 확인하는 누적 학습 구조.
                </p>
              </div>
            </div>
          </div>

          <div className="lg:col-span-7 rounded-xl p-4 bg-slate-900/80 border border-slate-800">
            <span className="text-xs font-bold text-slate-200 block mb-2">[표 6] 원어민 화상영어 프로그램 운영 개요</span>
            <div className="overflow-x-auto text-xs">
              <table className="w-full text-left border-collapse">
                <tbody className="divide-y divide-slate-800/70 text-slate-300">
                  <tr className="hover:bg-slate-800/20">
                    <td className="py-2 px-3 font-semibold text-slate-400 w-1/4">운영 대상</td>
                    <td className="py-2 px-3 text-white font-medium">전교생 (1~3학년 전원)</td>
                  </tr>
                  <tr className="hover:bg-slate-800/20">
                    <td className="py-2 px-3 font-semibold text-slate-400">운영 시간</td>
                    <td className="py-2 px-3">매주 수요일 7, 8교시 및 가정 연계학습 주 1회</td>
                  </tr>
                  <tr className="hover:bg-slate-800/20">
                    <td className="py-2 px-3 font-semibold text-slate-400">수업 형태</td>
                    <td className="py-2 px-3 text-emerald-300 font-medium">학생별 원어민 교사와의 1:1 개별 화상 회화수업</td>
                  </tr>
                  <tr className="hover:bg-slate-800/20">
                    <td className="py-2 px-3 font-semibold text-slate-400">학교 연계</td>
                    <td className="py-2 px-3">8교시 본교 영어교사의 개별 보충 피드백 및 교과 연계</td>
                  </tr>
                  <tr className="hover:bg-slate-800/20">
                    <td className="py-2 px-3 font-semibold text-slate-400">주요 내용</td>
                    <td className="py-2 px-3">일상 회화, 관심 주제 표현, 듣기·말하기, 문장 구성 교정</td>
                  </tr>
                </tbody>
              </table>
            </div>

            <div className="mt-3 p-2.5 rounded-lg bg-emerald-950/40 border border-emerald-800/40 text-[11px] text-emerald-300 flex items-center justify-between">
              <span>지리적 한계 극복</span>
              <span className="font-semibold">농어촌 소규모 학교의 디지털 기반 맞춤형 영어교육 모델</span>
            </div>
          </div>
        </div>
      ) : (
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-5">
          <div className="lg:col-span-5 p-4 rounded-xl bg-slate-900/80 border border-slate-800 space-y-3">
            <div className="flex items-center gap-2 text-teal-400 font-bold text-xs">
              <BookOpen className="w-4 h-4" />
              <span>학습코칭 기반 5단계 자기주도 성장 프로세스</span>
            </div>
            <div className="space-y-2 text-xs text-slate-300 leading-relaxed">
              <div className="p-2 rounded bg-slate-950 border border-slate-800 flex items-center gap-2">
                <span className="w-5 h-5 rounded-full bg-emerald-500/20 text-emerald-400 font-bold text-[11px] flex items-center justify-center shrink-0">1</span>
                <div><strong className="text-white">목표 설정:</strong> 학생 본인 수준에 맞는 단기 달성 목표 수립</div>
              </div>
              <div className="p-2 rounded bg-slate-950 border border-slate-800 flex items-center gap-2">
                <span className="w-5 h-5 rounded-full bg-emerald-500/20 text-emerald-400 font-bold text-[11px] flex items-center justify-center shrink-0">2</span>
                <div><strong className="text-white">실행 계획:</strong> 시간 관리, 과제 순서, 집중 환경 구체화</div>
              </div>
              <div className="p-2 rounded bg-slate-950 border border-slate-800 flex items-center gap-2">
                <span className="w-5 h-5 rounded-full bg-emerald-500/20 text-emerald-400 font-bold text-[11px] flex items-center justify-center shrink-0">3</span>
                <div><strong className="text-white">실천:</strong> 정규수업 및 방과후 자기주도 실천 점검</div>
              </div>
              <div className="p-2 rounded bg-slate-950 border border-slate-800 flex items-center gap-2">
                <span className="w-5 h-5 rounded-full bg-emerald-500/20 text-emerald-400 font-bold text-[11px] flex items-center justify-center shrink-0">4</span>
                <div><strong className="text-white">점검:</strong> 교사의 과정 중심 격려와 미이행 원인 분석</div>
              </div>
              <div className="p-2 rounded bg-slate-950 border border-slate-800 flex items-center gap-2">
                <span className="w-5 h-5 rounded-full bg-emerald-500/20 text-emerald-400 font-bold text-[11px] flex items-center justify-center shrink-0">5</span>
                <div><strong className="text-white">성찰:</strong> 성취감 축적 및 차기 학습 플랜 피드백</div>
              </div>
            </div>
          </div>

          <div className="lg:col-span-7 rounded-xl p-4 bg-slate-900/80 border border-slate-800">
            <span className="text-xs font-bold text-slate-200 block mb-2">[표 7] 학습코칭 기반 맞춤형 학습성장 개요</span>
            <div className="overflow-x-auto text-xs">
              <table className="w-full text-left border-collapse">
                <tbody className="divide-y divide-slate-800/70 text-slate-300">
                  <tr className="hover:bg-slate-800/20">
                    <td className="py-2 px-3 font-semibold text-slate-400 w-1/4">운영 주체</td>
                    <td className="py-2 px-3 text-white font-medium">학습코칭 기본·심화과정을 이수한 본교 교원 7명</td>
                  </tr>
                  <tr className="hover:bg-slate-800/20">
                    <td className="py-2 px-3 font-semibold text-slate-400">운영 형태</td>
                    <td className="py-2 px-3">개별 상담, 소집단 코칭, 교과 연계 지도</td>
                  </tr>
                  <tr className="hover:bg-slate-800/20">
                    <td className="py-2 px-3 font-semibold text-slate-400">운영 시기</td>
                    <td className="py-2 px-3">정규수업, 창의적 체험활동, 상담 및 방과후 시간</td>
                  </tr>
                  <tr className="hover:bg-slate-800/20">
                    <td className="py-2 px-3 font-semibold text-slate-400">전문성 협의</td>
                    <td className="py-2 px-3 text-teal-300">더배움공동체 통해 학생별 변화 사례 공유 및 공동 지원</td>
                  </tr>
                </tbody>
              </table>
            </div>

            <div className="mt-4 p-2.5 rounded-lg bg-teal-950/40 border border-teal-800/40 text-[11px] text-teal-300 flex items-center justify-between">
              <span>소규모 학교의 밀착 강점</span>
              <span className="font-semibold">학습 불안 해소 & 자기효능감 및 자기주도성 극대화</span>
            </div>
          </div>
        </div>
      )}

      {/* Photo Row (그림 5 / 그림 6) */}
      <div>
        <div className="flex items-center justify-between mb-2">
          <span className="text-xs font-bold text-slate-300 flex items-center gap-1.5">
            <span className="text-emerald-400 font-bold">[그림 5 · 6]</span>
            <span>학습성장 프로그램 운영 현장 사진</span>
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
