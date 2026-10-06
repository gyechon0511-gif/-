import React from 'react';
import { Users, Info, ShieldAlert, Award, Compass, School } from 'lucide-react';

export const ScopeTermsSlide: React.FC = () => {
  return (
    <div className="space-y-6">
      {/* Title Header */}
      <div className="border-b border-slate-800 pb-4">
        <div className="flex items-center gap-2 text-xs font-semibold text-emerald-400">
          <span>Ⅰ. 연구의 개요</span>
          <span>·</span>
          <span>3. 범위 및 제한점 / 4. 용어의 정의</span>
        </div>
        <h2 className="text-2xl md:text-3xl font-bold font-serif-kr text-white mt-1">
          연구의 범위, 제한점 및 핵심 용어 정의
        </h2>
        <p className="text-sm text-slate-400 mt-1">
          연구의 명확한 경계 설정과 학술적 개념의 정립
        </p>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-12 gap-6">
        {/* Left Column: Scope & Limitations (5 cols) */}
        <div className="lg:col-span-5 space-y-4">
          <div className="p-4 rounded-xl bg-slate-900/80 border border-slate-800">
            <div className="flex items-center gap-2 text-emerald-400 mb-2">
              <Users className="w-4 h-4" />
              <h3 className="text-sm font-bold text-slate-100">연구의 범위</h3>
            </div>
            <ul className="text-xs text-slate-300 space-y-2 leading-relaxed">
              <li className="flex items-start gap-2">
                <span className="w-1.5 h-1.5 rounded-full bg-emerald-400 mt-1.5 shrink-0" />
                <span><strong className="text-white">연구 대상:</strong> 계촌중학교 전교생 11명 (원학구 재학생, 농어촌유학생, 일반전학생) 및 교원 7명, 학부모</span>
              </li>
              <li className="flex items-start gap-2">
                <span className="w-1.5 h-1.5 rounded-full bg-emerald-400 mt-1.5 shrink-0" />
                <span><strong className="text-white">연구 기간:</strong> 2026. 3. 1. ~ 2027. 2. 28. (1차년도)</span>
              </li>
              <li className="flex items-start gap-2">
                <span className="w-1.5 h-1.5 rounded-full bg-emerald-400 mt-1.5 shrink-0" />
                <span><strong className="text-white">주요 영역:</strong> 지역 특화 자원 활용 교육과정(클래식, 드론, 목장, 화상영어), 학교 적응 및 정착 지원, 교육 거버넌스 체계 구축</span>
              </li>
            </ul>
          </div>

          <div className="p-4 rounded-xl bg-slate-900/80 border border-slate-800">
            <div className="flex items-center gap-2 text-amber-400 mb-2">
              <ShieldAlert className="w-4 h-4" />
              <h3 className="text-sm font-bold text-slate-100">연구의 제한점</h3>
            </div>
            <div className="text-xs text-slate-400 space-y-2 leading-relaxed">
              <p>
                • <strong>소규모 표본(11명):</strong> 양적 통계보다는 심층면담 중심의 질적 사례연구를 채택하여 학생 개별 변화의 맥락을 심층 포착함.
              </p>
              <p>
                • <strong>운영 기간(1년):</strong> 장기 정착 여부 및 지역사회 중장기 파급효과는 향후 2차년도 및 후속 연구를 통해 지속 검증 필요.
              </p>
            </div>
          </div>
        </div>

        {/* Right Column: Key Term Definitions (7 cols) */}
        <div className="lg:col-span-7 space-y-4">
          <div className="p-4 rounded-xl bg-slate-900/90 border border-slate-800">
            <span className="text-[11px] font-semibold text-emerald-400 uppercase tracking-wider block mb-1">
              핵심 용어 01
            </span>
            <h3 className="text-base font-bold text-slate-100 flex items-center gap-2">
              <span>농어촌유학</span>
              <span className="text-xs font-normal text-slate-400">(Rural-Urban Student Exchange)</span>
            </h3>
            <p className="text-xs text-slate-300 mt-2 leading-relaxed">
              도시 학생이 일정 기간 농어촌 지역의 학교에서 생활하며 정규 교육과정을 이수하고 지역사회와 함께 성장하는 교육활동. 단순한 일회성 체험이나 전학을 넘어, <strong>교과학습·심리안정·진로역량·공동체 역량을 종합 지원하고 학부모의 지역 적응까지 포괄</strong>하는 지속가능한 교육체제.
            </p>
          </div>

          <div className="p-4 rounded-xl bg-slate-900/90 border border-slate-800">
            <span className="text-[11px] font-semibold text-teal-400 uppercase tracking-wider block mb-1">
              핵심 용어 02
            </span>
            <h3 className="text-base font-bold text-slate-100 flex items-center gap-2">
              <span>농어촌 교육생태계</span>
              <span className="text-xs font-normal text-slate-400">(Rural Educational Ecosystem)</span>
            </h3>
            <p className="text-xs text-slate-300 mt-2 leading-relaxed">
              학교를 중심으로 학생, 학부모, 교원, 마을, 교육지원청, 지자체 및 유관기관이 상호 협력하는 상생 공동체. 지역의 자연환경, 문화예술, 생활문화, 산업 인프라를 교육과정과 연계하여 <strong>학생의 배움이 마을로 확장되고 학교의 성장이 지역의 존속으로 이어지는 선순환 구조</strong>.
            </p>
          </div>

          <div className="p-4 rounded-xl bg-slate-900/90 border border-slate-800 border-l-4 border-l-emerald-500">
            <span className="text-[11px] font-semibold text-cyan-400 uppercase tracking-wider block mb-1">
              핵심 용어 03
            </span>
            <h3 className="text-base font-bold text-white flex items-center gap-2">
              <span>계촌형 농어촌유학 모델</span>
              <span className="text-xs font-normal text-emerald-400 font-semibold">(Gyechon Model)</span>
            </h3>
            <p className="text-xs text-slate-300 mt-2 leading-relaxed">
              계촌 마을 고유의 문화예술(계촌클래식축제, 별빛 오케스트라)과 지역 특화 자원(무인멀티콥터 드론 자격, 서울대 평창목장 스마트축산, 1:1 화상영어)을 정규 교육과정에 내재화하고, <strong>학교-가정-마을-지자체가 결합된 전주기 정착 지원 체계를 구축한 중학교 중심의 지속가능한 상생 교육모델</strong>.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};
