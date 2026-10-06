import React from 'react';
import { Compass, ShieldCheck, CheckCircle2, Award, Zap, ArrowRight } from 'lucide-react';
import { PhotoSlotCard } from '../PhotoSlotCard';
import { SLIDES } from '../../data/presentationData';

interface Task2CareerSlideProps {
  onImagePreview?: (imageUrl: string, title: string) => void;
}

export const Task2CareerSlide: React.FC<Task2CareerSlideProps> = ({ onImagePreview }) => {
  const currentSlide = SLIDES.find((s) => s.id === 12);
  const photoSlots = currentSlide?.photoSlots || [];

  return (
    <div className="space-y-5">
      {/* Title Header */}
      <div className="border-b border-slate-800 pb-3">
        <div className="flex items-center gap-2 text-xs font-semibold text-emerald-400">
          <span>Ⅴ. 연구의 실제</span>
          <span>·</span>
          <span>연구 과제 2 실행 ② 진로·미래역량 프로그램</span>
        </div>
        <h2 className="text-2xl md:text-3xl font-bold font-serif-kr text-white mt-1">
          무인멀티콥터 1종 조종자 국가자격 취득 프로그램
        </h2>
        <p className="text-sm text-slate-400 mt-0.5">
          지역 드론 전문기관 연계: 단순 체험을 넘어선 국가공인 전문 자격 취득 및 미래 농촌 산업 연계
        </p>
      </div>

      {/* Narrative & Table 8 */}
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-5">
        <div className="lg:col-span-5 p-4 rounded-xl bg-slate-900/80 border border-slate-800 space-y-3">
          <div className="flex items-center gap-2 text-cyan-400 font-bold text-xs">
            <Zap className="w-4 h-4" />
            <span>중학교 단계 심화형 미래 진로교육의 선도 모델</span>
          </div>
          <div className="text-xs text-slate-300 space-y-2.5 leading-relaxed">
            <p>
              무인멀티콥터 1종 자격은 만 14세 이상 취득 가능합니다. 본교 3학년 학생을 대상으로 일회성 비행 체험이 아닌, <strong>항공역학 이론부터 시뮬레이터 비행, 야외 실기 조종 및 국가시험 응시까지 전 과정</strong>을 지역 전문교육기관과 협력하여 운영하였습니다.
            </p>
            <div className="p-3 rounded-lg bg-slate-950/80 border border-slate-800 text-[11px] space-y-1">
              <span className="font-bold text-emerald-300 block">농어촌 미래 산업과의 실질적 연결</span>
              <p className="text-slate-400">
                드론 기술을 도시 산업으로만 보지 않고, <strong>스마트 농업, 산림 관리, 가축 방제, 산불 및 재난 대응, 영상 기록</strong> 등 농어촌 지역의 핵심 산업과 연결하여 학생들의 진로 지평을 크게 넓혔습니다.
              </p>
            </div>
          </div>

          <div className="p-2.5 rounded-lg bg-emerald-950/40 border border-emerald-800/40 text-[11px] text-emerald-300">
            성과: 반복 연습과 실기 시험 통과를 통한 자기효능감 및 진로 자신감 극대화
          </div>
        </div>

        {/* Table 8 */}
        <div className="lg:col-span-7 rounded-xl p-4 bg-slate-900/80 border border-slate-800">
          <div className="flex items-center justify-between mb-2">
            <span className="text-xs font-bold text-slate-200">[표 8] 무인멀티콥터 1종 자격취득 운영 개요</span>
            <span className="text-[11px] text-emerald-400 font-semibold flex items-center gap-1">
              <Award className="w-3.5 h-3.5" />
              <span>국가공인 자격 취득 달성</span>
            </span>
          </div>

          <div className="overflow-x-auto text-xs">
            <table className="w-full text-left border-collapse">
              <tbody className="divide-y divide-slate-800/70 text-slate-300">
                <tr className="hover:bg-slate-800/20">
                  <td className="py-2 px-3 font-semibold text-slate-400 w-1/4">운영 대상</td>
                  <td className="py-2 px-3 text-white font-medium">만 14세 이상 3학년 진학 예정 학생</td>
                </tr>
                <tr className="hover:bg-slate-800/20">
                  <td className="py-2 px-3 font-semibold text-slate-400">운영 형태</td>
                  <td className="py-2 px-3 text-emerald-300 font-medium">지역 드론 전문교육기관 연계 위탁 및 밀착 교육</td>
                </tr>
                <tr className="hover:bg-slate-800/20">
                  <td className="py-2 px-3 font-semibold text-slate-400">운영 장소</td>
                  <td className="py-2 px-3">지역 드론 전문교육원 강의실 및 야외 전용 비행 실습장</td>
                </tr>
                <tr className="hover:bg-slate-800/20">
                  <td className="py-2 px-3 font-semibold text-slate-400">단계별 내용</td>
                  <td className="py-2 px-3">
                    ① 항공법규·기체구조 이론 → ② 컴퓨터 시뮬레이터 모의비행 → ③ 야외 실기비행 훈련 → ④ 자격시험 응시
                  </td>
                </tr>
                <tr className="hover:bg-slate-800/20">
                  <td className="py-2 px-3 font-semibold text-slate-400">연계 교과</td>
                  <td className="py-2 px-3">진로교육, 과학·기술, 항공안전, 자기관리역량</td>
                </tr>
              </tbody>
            </table>
          </div>

          <div className="mt-4 grid grid-cols-3 gap-2 text-center text-[11px]">
            <div className="p-2 rounded bg-slate-950 border border-slate-800">
              <span className="text-slate-400 block">도전과 끈기</span>
              <strong className="text-white mt-0.5 block">자기조절력 함양</strong>
            </div>
            <div className="p-2 rounded bg-slate-950 border border-slate-800">
              <span className="text-slate-400 block">동료 피드백</span>
              <strong className="text-white mt-0.5 block">구술 상호평가</strong>
            </div>
            <div className="p-2 rounded bg-slate-950 border border-slate-800">
              <span className="text-slate-400 block">진로 시야</span>
              <strong className="text-emerald-300 mt-0.5 block">드론 연구원·방제</strong>
            </div>
          </div>
        </div>
      </div>

      {/* Photo Row (그림 7) */}
      <div>
        <div className="flex items-center justify-between mb-2">
          <span className="text-xs font-bold text-slate-300 flex items-center gap-1.5">
            <span className="text-emerald-400 font-bold">[그림 7]</span>
            <span>무인멀티콥터 1종 조종자 자격취득 프로그램 운영 현장 사진</span>
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
