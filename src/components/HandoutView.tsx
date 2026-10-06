import React from 'react';
import { SLIDES } from '../data/presentationData';
import { CoverSlide } from './slides/CoverSlide';
import { OutlineSlide } from './slides/OutlineSlide';
import { NecessityPurposeSlide } from './slides/NecessityPurposeSlide';
import { ScopeTermsSlide } from './slides/ScopeTermsSlide';
import { TheoreticalBackgroundSlide } from './slides/TheoreticalBackgroundSlide';
import { SwotAnalysisSlide } from './slides/SwotAnalysisSlide';
import { ResearchTasksSlide } from './slides/ResearchTasksSlide';
import { ResearchDesignSlide } from './slides/ResearchDesignSlide';
import { QualitativeMethodSlide } from './slides/QualitativeMethodSlide';
import { Task1EnvironmentSlide } from './slides/Task1EnvironmentSlide';
import { Task2LearningSlide } from './slides/Task2LearningSlide';
import { Task2CareerSlide } from './slides/Task2CareerSlide';
import { Task2CultureSlide } from './slides/Task2CultureSlide';
import { Task2CommunitySlide } from './slides/Task2CommunitySlide';
import { Task3EvaluationSlide } from './slides/Task3EvaluationSlide';
import { QualitativeResultsSlide } from './slides/QualitativeResultsSlide';
import { IntegratedAnalysisSlide } from './slides/IntegratedAnalysisSlide';
import { GyechonModelSlide } from './slides/GyechonModelSlide';
import { ConclusionPolicySlide } from './slides/ConclusionPolicySlide';
import { OutcomesFuturePlanSlide } from './slides/OutcomesFuturePlanSlide';
import { Printer, ArrowLeft } from 'lucide-react';

interface HandoutViewProps {
  onBackToPresentation: () => void;
  onNavigateSlide: (slideId: number) => void;
  onImagePreview?: (imageUrl: string, title: string) => void;
}

export const HandoutView: React.FC<HandoutViewProps> = ({
  onBackToPresentation,
  onNavigateSlide,
  onImagePreview,
}) => {
  const renderSlideComponent = (slideId: number) => {
    switch (slideId) {
      case 1:
        return <CoverSlide onStart={() => onNavigateSlide(2)} />;
      case 2:
        return <OutlineSlide onNavigateSlide={onNavigateSlide} />;
      case 3:
        return <NecessityPurposeSlide />;
      case 4:
        return <ScopeTermsSlide />;
      case 5:
        return <TheoreticalBackgroundSlide />;
      case 6:
        return <SwotAnalysisSlide />;
      case 7:
        return <ResearchTasksSlide />;
      case 8:
        return <ResearchDesignSlide />;
      case 9:
        return <QualitativeMethodSlide />;
      case 10:
        return <Task1EnvironmentSlide onImagePreview={onImagePreview} />;
      case 11:
        return <Task2LearningSlide onImagePreview={onImagePreview} />;
      case 12:
        return <Task2CareerSlide onImagePreview={onImagePreview} />;
      case 13:
        return <Task2CultureSlide onImagePreview={onImagePreview} />;
      case 14:
        return <Task2CommunitySlide onImagePreview={onImagePreview} />;
      case 15:
        return <Task3EvaluationSlide />;
      case 16:
        return <QualitativeResultsSlide />;
      case 17:
        return <IntegratedAnalysisSlide />;
      case 18:
        return <GyechonModelSlide />;
      case 19:
        return <ConclusionPolicySlide />;
      case 20:
        return <OutcomesFuturePlanSlide />;
      default:
        return null;
    }
  };

  return (
    <div className="min-h-screen bg-slate-950 text-slate-100 p-4 md:p-8 max-w-6xl mx-auto">
      {/* Top Action Bar */}
      <div className="no-print mb-8 p-4 rounded-xl bg-slate-900 border border-slate-800 flex items-center justify-between sticky top-4 z-40 shadow-xl">
        <div className="flex items-center gap-3">
          <button
            onClick={onBackToPresentation}
            className="px-3.5 py-1.5 rounded-lg bg-slate-800 hover:bg-slate-700 text-slate-200 text-xs font-semibold flex items-center gap-1.5 transition-colors cursor-pointer"
          >
            <ArrowLeft className="w-4 h-4" />
            <span>프리젠테이션 슬라이드 모드로 복귀</span>
          </button>
          <span className="text-xs text-slate-400 hidden sm:inline">
            운영보고서 전체 연속 열람 및 인쇄 모드
          </span>
        </div>

        <button
          onClick={() => window.print()}
          className="px-4 py-1.5 rounded-lg bg-emerald-500 hover:bg-emerald-400 text-slate-950 text-xs font-bold flex items-center gap-1.5 transition-colors shadow-lg cursor-pointer"
        >
          <Printer className="w-4 h-4" />
          <span>보고서 인쇄 / PDF 저장</span>
        </button>
      </div>

      {/* Continuous Slides Feed */}
      <div className="space-y-12">
        {SLIDES.map((slide) => (
          <section
            key={slide.id}
            id={`slide-${slide.id}`}
            className="print-page-break rounded-2xl bg-slate-900/40 p-6 md:p-8 border border-slate-800/80 shadow-md"
          >
            <div className="mb-4 flex items-center justify-between border-b border-slate-800/60 pb-2 text-xs text-slate-500">
              <span className="font-mono font-bold text-emerald-400">
                SLIDE #{String(slide.id).padStart(2, '0')} / {SLIDES.length}
              </span>
              <span>{slide.sectionNumber} {slide.sectionTitle}</span>
            </div>

            {renderSlideComponent(slide.id)}

            {/* Presenter Note Callout in Handout View */}
            <div className="no-print mt-6 p-3 rounded-lg bg-slate-950 border border-slate-800/80 text-xs text-slate-400">
              <strong className="text-teal-400 block mb-0.5 font-sans">
                [발표자 해설 메모]:
              </strong>
              <p className="leading-relaxed text-slate-300">{slide.speakerNotes}</p>
            </div>
          </section>
        ))}
      </div>
    </div>
  );
};
