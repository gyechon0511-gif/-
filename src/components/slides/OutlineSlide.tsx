import React from 'react';
import { ArrowRight, BookOpen, Layers, Target, Compass, Sparkles, CheckCircle2, TrendingUp } from 'lucide-react';

interface OutlineSlideProps {
  onNavigateSlide: (slideId: number) => void;
}

export const OutlineSlide: React.FC<OutlineSlideProps> = ({ onNavigateSlide }) => {
  const chapters = [
    {
      num: 'Ⅰ',
      title: '연구의 개요',
      desc: '연구의 필요성, 목적, 연구 범위 및 제한점, 핵심 용어 정의',
      slideTarget: 3,
      icon: BookOpen,
      color: 'emerald',
    },
    {
      num: 'Ⅱ',
      title: '이론적 배경 및 실태 분석',
      desc: '관계인구·생태계·회복력·PBE 4대 이론, 선행연구 분석, 학생수 변화 및 SWOT',
      slideTarget: 5,
      icon: Layers,
      color: 'teal',
    },
    {
      num: 'Ⅲ',
      title: '연구 과제 설정',
      desc: '과제 1(기반 조성), 과제 2(프로그램 개발·운영), 과제 3(평가·나눔) 체계도',
      slideTarget: 7,
      icon: Target,
      color: 'cyan',
    },
    {
      num: 'Ⅳ',
      title: '연구의 설계',
      desc: '연구 대상 및 기간, 연간 추진 절차(월별 로드맵), 연구 조직, 질적 연구 도구',
      slideTarget: 8,
      icon: Compass,
      color: 'sky',
    },
    {
      num: 'Ⅴ',
      title: '연구의 실제 (프로그램 실행)',
      desc: '교원 역량강화, 4대 특화 프로그램(학습·진로·예술·지역) 및 성과 환류',
      slideTarget: 10,
      icon: Sparkles,
      color: 'amber',
    },
    {
      num: 'Ⅵ',
      title: '연구(운영) 결과 & 모델 도출',
      desc: '활동별 학생 심층면담 질적 코딩 분석, 4대 영역 통합분석, 계촌형 모델(그림14)',
      slideTarget: 16,
      icon: TrendingUp,
      color: 'violet',
    },
    {
      num: 'Ⅶ',
      title: '결론 및 제언',
      desc: '연구 결론, 농어촌유학 활성화를 위한 5대 정책적 제언, 연구의 한계 및 제언',
      slideTarget: 19,
      icon: CheckCircle2,
      color: 'rose',
    },
    {
      num: 'Ⅷ',
      title: '성과 및 향후 연구계획',
      desc: '1차년도 연구성과 총괄, 2차년도 고도화 및 확산 계획, 질의응답',
      slideTarget: 20,
      icon: ArrowRight,
      color: 'indigo',
    },
  ];

  return (
    <div className="space-y-6">
      <div className="border-b border-slate-800 pb-4">
        <span className="text-xs font-semibold text-emerald-400 uppercase tracking-wider">목차 안내</span>
        <h2 className="text-2xl md:text-3xl font-bold font-serif-kr text-white mt-1">
          운영보고서 발표 순서 및 핵심 구성
        </h2>
        <p className="text-sm text-slate-400 mt-1">
          각 장을 클릭하시면 해당 슬라이드로 바로 이동하실 수 있습니다.
        </p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
        {chapters.map((chap) => {
          const Icon = chap.icon;
          return (
            <button
              key={chap.num}
              onClick={() => onNavigateSlide(chap.slideTarget)}
              className="text-left p-4 rounded-xl bg-slate-900/90 border border-slate-800 hover:border-emerald-500/60 transition-all hover:translate-y-[-2px] hover:shadow-lg hover:shadow-emerald-950/30 group cursor-pointer flex flex-col justify-between"
            >
              <div>
                <div className="flex items-center justify-between mb-3">
                  <span className="text-sm font-bold font-serif-kr text-emerald-400 bg-emerald-950/80 px-2 py-0.5 rounded border border-emerald-800/60">
                    {chap.num}
                  </span>
                  <div className="p-2 rounded-lg bg-slate-800 text-slate-400 group-hover:text-emerald-400 group-hover:bg-slate-700/80 transition-colors">
                    <Icon className="w-4 h-4" />
                  </div>
                </div>
                <h3 className="text-base font-bold text-slate-100 group-hover:text-emerald-300 transition-colors">
                  {chap.title}
                </h3>
                <p className="text-xs text-slate-400 mt-2 line-clamp-3 leading-relaxed">
                  {chap.desc}
                </p>
              </div>

              <div className="mt-4 pt-3 border-t border-slate-800/80 flex items-center justify-between text-xs text-slate-500 group-hover:text-emerald-400 font-medium">
                <span>슬라이드 {chap.slideTarget}번으로 이동</span>
                <ArrowRight className="w-3.5 h-3.5 transform group-hover:translate-x-1 transition-transform" />
              </div>
            </button>
          );
        })}
      </div>

      <div className="p-4 rounded-xl bg-slate-900/60 border border-slate-800/80 text-xs text-slate-400 flex flex-wrap items-center justify-between gap-3">
        <span className="flex items-center gap-2">
          <span className="w-2 h-2 rounded-full bg-emerald-400" />
          <span>본 보고서는 2026학년도 1년간의 계촌중학교 연구학교 운영 실천과 학생 질적 면담 결과를 바탕으로 작성되었습니다.</span>
        </span>
        <button
          onClick={() => onNavigateSlide(3)}
          className="text-emerald-400 hover:text-emerald-300 font-semibold inline-flex items-center gap-1 cursor-pointer"
        >
          <span>Ⅰ. 연구의 개요부터 시작하기</span>
          <ArrowRight className="w-3.5 h-3.5" />
        </button>
      </div>
    </div>
  );
};
