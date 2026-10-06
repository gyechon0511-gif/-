import React from 'react';
import { CheckCircle2, Lightbulb, Compass, Award, Building, HeartHandshake } from 'lucide-react';

export const ConclusionPolicySlide: React.FC = () => {
  const recommendations = [
    {
      num: '01',
      title: '교육과정 중심 정책으로의 대전환',
      desc: '단순 학생 유치 실적 중심의 예산 지원에서 벗어나, 지역 특색을 담은 지속가능한 교육과정 개발 및 운영 지원으로 전환해야 합니다.',
    },
    {
      num: '02',
      title: '학교-지역사회 협력 거버넌스 제도화',
      desc: '학교만의 노력으로는 한계가 있습니다. 지자체(주거·교통), 교육청(제도·예산), 지역기관(전문인력)이 결합된 협력체계가 법제화되어야 합니다.',
    },
    {
      num: '03',
      title: '문화예술 & 장소기반교육(PBE) 특화 지원',
      desc: '계촌의 클래식축제처럼, 지역의 문화·산업·자연 자원을 정규 교육과정 속 배움의 장으로 승화하는 장소기반 특화 모델을 집중 육성해야 합니다.',
    },
    {
      num: '04',
      title: '유학생과 재학생이 함께 크는 통합 교육과정',
      desc: '유학생만을 분리한 사업이 아닌, 원학구 재학생과 일반전학생이 한 교실에서 차별 없이 함께 배우고 성장하는 포용적 공교육 모델이어야 합니다.',
    },
    {
      num: '05',
      title: '질적 성장 중심의 성과평가 체계 구축',
      desc: '학생 수 증감이라는 단기 지표 대신, 학생의 자기효능감, 또래 관계, 학교 소속감, 지역 애착 등 질적 성장을 종합 관찰하는 평가체계로 혁신해야 합니다.',
    },
  ];

  return (
    <div className="space-y-5">
      {/* Title Header */}
      <div className="border-b border-slate-800 pb-3">
        <div className="flex items-center gap-2 text-xs font-semibold text-emerald-400">
          <span>Ⅶ. 결론 및 제언</span>
          <span>·</span>
          <span>연구의 결론 & 5대 정책적 제언</span>
        </div>
        <h2 className="text-2xl md:text-3xl font-bold font-serif-kr text-white mt-1">
          연구의 결론 및 농어촌유학 지속가능성을 위한 5대 정책 제언
        </h2>
        <p className="text-sm text-slate-400 mt-0.5">
          "작은 학교의 한계 보완이 아닌, 작은 학교의 장점을 교육력으로 전환하는 모델"
        </p>
      </div>

      {/* Main Conclusion Callout */}
      <div className="p-4 rounded-xl bg-gradient-to-r from-emerald-950/70 via-slate-900 to-teal-950/70 border border-emerald-500/40 shadow-lg">
        <div className="flex items-start gap-3">
          <div className="w-9 h-9 rounded-xl bg-emerald-500/20 text-emerald-400 flex items-center justify-center shrink-0 mt-0.5">
            <Award className="w-5 h-5" />
          </div>
          <div>
            <span className="text-[11px] font-bold text-emerald-400 uppercase tracking-wider block mb-0.5">
              연구의 핵심 결론 (Research Conclusion)
            </span>
            <p className="text-xs md:text-sm font-bold text-white leading-relaxed font-serif-kr">
              계촌중학교 농어촌유학 모델은 <span className="text-emerald-300">‘작은 학교의 한계를 메우는 소극적 보완책’</span>이 아니라, 교사의 밀착 지도와 마을의 문화 자원을 결합하여 <span className="text-teal-300">‘작은 학교의 고유한 장점을 최대의 교육력으로 전환시킨 능동적 미래 교육 모델’</span>입니다.
            </p>
          </div>
        </div>
      </div>

      {/* 5 Policy Recommendations */}
      <div>
        <span className="text-xs font-bold text-slate-300 block mb-2.5">
          농어촌유학의 도약을 위한 5대 정책적 제언
        </span>
        <div className="grid grid-cols-1 md:grid-cols-5 gap-2.5">
          {recommendations.map((rec) => (
            <div
              key={rec.num}
              className="p-3.5 rounded-xl bg-slate-900/90 border border-slate-800 hover:border-emerald-500/40 transition-all flex flex-col justify-between"
            >
              <div>
                <span className="text-xs font-mono font-bold text-emerald-400 block mb-1">
                  제언 {rec.num}
                </span>
                <h4 className="text-xs font-bold text-white mb-2 leading-snug">{rec.title}</h4>
                <p className="text-[11px] text-slate-400 leading-relaxed">{rec.desc}</p>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Limitations and Future Study Note */}
      <div className="p-3 rounded-xl bg-slate-900/60 border border-slate-800 text-xs text-slate-400 flex flex-wrap items-center justify-between gap-2">
        <span className="flex items-center gap-1.5">
          <span className="w-2 h-2 rounded-full bg-amber-400" />
          <span>연구의 한계: 단일 소규모 학교 1년 운영 사례로서 타 지역 맞춤 적용을 위한 2차년도 종단 추적 연구 지속 추진</span>
        </span>
        <span className="text-slate-300 font-semibold">
          강원도형 중학교 농어촌유학 표준 매뉴얼 개발 예정
        </span>
      </div>
    </div>
  );
};
