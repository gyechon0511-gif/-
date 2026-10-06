import React from 'react';
import { SectionId } from '../types';
import {
  Maximize2,
  Minimize2,
  Grid,
  FileText,
  Clock,
  Printer,
  Image as ImageIcon,
  Compass,
  School,
  Github,
} from 'lucide-react';

interface TopNavProps {
  currentSlideId: number;
  totalSlides: number;
  isFullscreen: boolean;
  onToggleFullscreen: () => void;
  onOpenGrid: () => void;
  onOpenNotes: () => void;
  onOpenPhotoManager: () => void;
  onOpenGitHubGuide: () => void;
  onToggleHandout: () => void;
  isHandoutMode: boolean;
  onJumpToSection: (sectionId: SectionId) => void;
}

export const TopNav: React.FC<TopNavProps> = ({
  currentSlideId,
  totalSlides,
  isFullscreen,
  onToggleFullscreen,
  onOpenGrid,
  onOpenNotes,
  onOpenPhotoManager,
  onOpenGitHubGuide,
  onToggleHandout,
  isHandoutMode,
  onJumpToSection,
}) => {
  const navSections: { id: SectionId; label: string }[] = [
    { id: 'intro', label: '표지/목차' },
    { id: 'overview', label: 'Ⅰ.개요' },
    { id: 'background', label: 'Ⅱ.이론·실태' },
    { id: 'tasks', label: 'Ⅲ.연구과제' },
    { id: 'design', label: 'Ⅳ.연구설계' },
    { id: 'practice', label: 'Ⅴ.연구실제' },
    { id: 'results', label: 'Ⅵ.결과·모델' },
    { id: 'conclusion', label: 'Ⅶ.결론·제언' },
    { id: 'future', label: 'Ⅷ.성과·계획' },
  ];

  return (
    <header className="no-print h-14 bg-slate-900/95 backdrop-blur border-b border-slate-800 px-4 md:px-6 flex items-center justify-between z-30 sticky top-0">
      {/* Zone 1: Single text element wordmark */}
      <div className="flex items-center gap-2.5 shrink-0">
        <div className="w-8 h-8 rounded-lg bg-emerald-500/10 border border-emerald-500/20 flex items-center justify-center text-emerald-400">
          <School className="w-4 h-4" />
        </div>
        <button
          onClick={() => onJumpToSection('intro')}
          className="text-left cursor-pointer group"
        >
          <span className="text-sm md:text-base font-bold tracking-tight text-white group-hover:text-emerald-400 transition-colors font-serif-kr">
            계촌중 연구학교 운영보고
          </span>
        </button>
      </div>

      {/* Zone 2: Section links */}
      <nav className="hidden xl:flex items-center gap-1.5 text-xs font-medium text-slate-400">
        {navSections.map((sec) => (
          <button
            key={sec.id}
            onClick={() => onJumpToSection(sec.id)}
            className="px-2.5 py-1 rounded-md hover:text-white hover:bg-slate-800 transition-colors whitespace-nowrap cursor-pointer"
          >
            {sec.label}
          </button>
        ))}
      </nav>

      {/* Zone 3: Primary presentation utilities */}
      <div className="flex items-center gap-1.5">
        <button
          onClick={onOpenGrid}
          className="inline-flex items-center gap-1 px-2.5 py-1.5 rounded-lg bg-slate-800 hover:bg-slate-700 text-slate-300 hover:text-white text-xs font-medium transition-colors cursor-pointer"
          title="전체 슬라이드 보기 (G)"
        >
          <Grid className="w-3.5 h-3.5" />
          <span className="hidden sm:inline">슬라이드</span>
        </button>

        <button
          onClick={onOpenPhotoManager}
          className="inline-flex items-center gap-1 px-2.5 py-1.5 rounded-lg bg-slate-800 hover:bg-slate-700 text-slate-300 hover:text-white text-xs font-medium transition-colors cursor-pointer"
          title="사진 자료 슬롯 관리"
        >
          <ImageIcon className="w-3.5 h-3.5 text-emerald-400" />
          <span className="hidden sm:inline">사진관리</span>
        </button>

        <button
          onClick={onOpenNotes}
          className="inline-flex items-center gap-1 px-2.5 py-1.5 rounded-lg bg-slate-800 hover:bg-slate-700 text-slate-300 hover:text-white text-xs font-medium transition-colors cursor-pointer"
          title="발표자 메모 / 해설 (N)"
        >
          <FileText className="w-3.5 h-3.5 text-teal-400" />
          <span className="hidden sm:inline">발표해설</span>
        </button>

        <button
          onClick={onOpenGitHubGuide}
          className="inline-flex items-center gap-1 px-2.5 py-1.5 rounded-lg bg-slate-800 hover:bg-slate-700 text-slate-300 hover:text-white text-xs font-medium transition-colors cursor-pointer"
          title="깃허브 배포 가이드"
        >
          <Github className="w-3.5 h-3.5 text-sky-400" />
          <span className="hidden sm:inline">깃허브</span>
        </button>

        <button
          onClick={onToggleHandout}
          className={`inline-flex items-center gap-1 px-2.5 py-1.5 rounded-lg text-xs font-medium transition-colors cursor-pointer ${
            isHandoutMode
              ? 'bg-emerald-500 text-slate-950 font-bold'
              : 'bg-slate-800 hover:bg-slate-700 text-slate-300 hover:text-white'
          }`}
          title="인쇄 및 전체 유인물 모드"
        >
          <Printer className="w-3.5 h-3.5" />
          <span className="hidden sm:inline">{isHandoutMode ? '슬라이드' : '유인물'}</span>
        </button>

        <button
          onClick={onToggleFullscreen}
          className="p-1.5 rounded-lg bg-slate-800 hover:bg-slate-700 text-slate-300 hover:text-white transition-colors cursor-pointer"
          title={isFullscreen ? '전체화면 종료 (Esc)' : '전체화면 발표모드 (F)'}
        >
          {isFullscreen ? <Minimize2 className="w-4 h-4" /> : <Maximize2 className="w-4 h-4" />}
        </button>
      </div>
    </header>
  );
};
