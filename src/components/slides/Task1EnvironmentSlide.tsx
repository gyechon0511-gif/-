import React from 'react';
import { Award, BookOpen, Users, CheckCircle2 } from 'lucide-react';
import { PhotoSlotCard } from '../PhotoSlotCard';
import { SLIDES } from '../../data/presentationData';

interface Task1EnvironmentSlideProps {
  onImagePreview?: (imageUrl: string, title: string) => void;
}

export const Task1EnvironmentSlide: React.FC<Task1EnvironmentSlideProps> = ({ onImagePreview }) => {
  const currentSlide = SLIDES.find((s) => s.id === 10);
  const photoSlots = currentSlide?.photoSlots || [];

  return (
    <div className="space-y-5">
      {/* Title Header */}
      <div className="border-b border-slate-800 pb-3">
        <div className="flex items-center gap-2 text-xs font-semibold text-emerald-400">
          <span>Ⅴ. 연구의 실제</span>
          <span>·</span>
          <span>연구 과제 1: 교육공동체 역량 강화</span>
        </div>
        <h2 className="text-2xl md:text-3xl font-bold font-serif-kr text-white mt-1">
          농어촌유학 프로그램 운영 기반 조성: 교육공동체 역량 강화
        </h2>
        <p className="text-sm text-slate-400 mt-0.5">
          전 교원 학습코칭 자격 취득 및 전문적 학습공동체 '더배움공동체' 정착
        </p>
      </div>

      {/* Top: Narrative Summary & Table 5 */}
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-5">
        <div className="lg:col-span-5 p-4 rounded-xl bg-slate-900/80 border border-slate-800 flex flex-col justify-between">
          <div className="space-y-3 text-xs text-slate-300 leading-relaxed">
            <div className="flex items-center gap-2 text-emerald-400 font-bold">
              <BookOpen className="w-4 h-4" />
              <span>전 교원 학습코칭 지도자 연수 이수</span>
            </div>
            <p>
              농어촌 소규모 학교의 최대 강점인 <strong className="text-emerald-300 font-semibold">'학생 밀착형 개별 지도'</strong>를 체계화하기 위해 전 교원 7명이 학습코칭 기본과정과 심화과정을 전원 이수하였습니다. 학생의 학습 동기, 자기조절력, 정서적 특성을 심층 파악하여 맞춤형 상담에 적용했습니다.
            </p>
            <div className="flex items-center gap-2 text-teal-400 font-bold pt-2 border-t border-slate-800">
              <Users className="w-4 h-4" />
              <span>전문적학습공동체 '더배움공동체' 운영</span>
            </div>
            <p>
              단순 연수에 그치지 않고 자발적 전문적학습공동체를 정례화하여, 매주 학생 관찰 사례를 분석하고 교육과정 재구성 및 질적분석 코딩을 함께 성찰하는 협력적 교직 문화를 정착시켰습니다.
            </p>
          </div>

          <div className="mt-3 p-2.5 rounded-lg bg-emerald-950/40 border border-emerald-800/40 text-[11px] text-emerald-300">
            성과: 교사 개인의 성장을 넘어 학교 전체의 학생 맞춤형 교육력 강화
          </div>
        </div>

        {/* Table 5: Training Results */}
        <div className="lg:col-span-7 rounded-xl p-4 bg-slate-900/80 border border-slate-800">
          <div className="flex items-center gap-2 mb-2">
            <span className="text-xs font-bold text-emerald-400 bg-emerald-950 px-2 py-0.5 rounded border border-emerald-800/60">
              [표 5]
            </span>
            <h3 className="text-xs font-bold text-slate-100">
              교육공동체 역량 강화 운영 결과
            </h3>
          </div>

          <div className="overflow-x-auto">
            <table className="w-full text-xs text-left border-collapse">
              <thead>
                <tr className="bg-slate-950 text-slate-300 border-b border-slate-800">
                  <th className="py-2 px-3 font-semibold w-1/4">구분</th>
                  <th className="py-2 px-3 font-semibold w-2/5">주요 내용</th>
                  <th className="py-2 px-3 font-semibold text-emerald-400">운영 성과</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-slate-800/70 text-slate-300">
                <tr className="hover:bg-slate-800/30">
                  <td className="py-2.5 px-3 font-semibold text-white">학습코칭 기본과정</td>
                  <td className="py-2.5 px-3 text-slate-400">학생 이해 및 학습코칭 기초 이론 (전교원 7명 이수)</td>
                  <td className="py-2.5 px-3 font-medium text-emerald-300">학생 맞춤형 지도 역량 향상</td>
                </tr>
                <tr className="hover:bg-slate-800/30">
                  <td className="py-2.5 px-3 font-semibold text-white">학습코칭 심화과정</td>
                  <td className="py-2.5 px-3 text-slate-400">심화 학습코칭 및 실제 학생 사례 적용 실습</td>
                  <td className="py-2.5 px-3 font-medium text-emerald-300">자기주도학습 지원 역량 강화</td>
                </tr>
                <tr className="hover:bg-slate-800/30">
                  <td className="py-2.5 px-3 font-semibold text-white">더배움공동체 협의</td>
                  <td className="py-2.5 px-3 text-slate-400">사례 공유, 교육과정 재구성 협의, 프로그램 개선 환류</td>
                  <td className="py-2.5 px-3 font-medium text-emerald-300">연구학교 운영 전문성 및 협력 문화 정착</td>
                </tr>
              </tbody>
            </table>
          </div>
        </div>
      </div>

      {/* Photo Placeholder Row (그림 4) */}
      <div>
        <div className="flex items-center justify-between mb-2">
          <span className="text-xs font-bold text-slate-300 flex items-center gap-1.5">
            <span className="text-emerald-400 font-bold">[그림 4]</span>
            <span>교육공동체 역량 강화 활동 사진 자료</span>
          </span>
          <span className="text-[11px] text-slate-500">
            * 추후 고화질 사진을 직접 등록하거나 교체할 수 있습니다.
          </span>
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
