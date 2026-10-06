import React from 'react';
import { X, FileText, Sparkles, MessageSquare, Volume2 } from 'lucide-react';
import { SlideData } from '../types';

interface SpeakerNotesModalProps {
  isOpen: boolean;
  onClose: () => void;
  slide: SlideData;
}

export const SpeakerNotesModal: React.FC<SpeakerNotesModalProps> = ({
  isOpen,
  onClose,
  slide,
}) => {
  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 z-50 bg-slate-950/80 backdrop-blur-sm flex items-center justify-center p-4 animate-in fade-in duration-150">
      <div className="w-full max-w-2xl bg-slate-900 border border-slate-800 rounded-2xl shadow-2xl flex flex-col overflow-hidden">
        {/* Modal Header */}
        <div className="p-4 md:p-5 border-b border-slate-800 flex items-center justify-between">
          <div className="flex items-center gap-2.5">
            <div className="w-8 h-8 rounded-lg bg-teal-500/10 border border-teal-500/20 flex items-center justify-center text-teal-400">
              <FileText className="w-4 h-4" />
            </div>
            <div>
              <span className="text-[11px] font-bold text-teal-400 uppercase tracking-wide">
                슬라이드 #{String(slide.id).padStart(2, '0')} 발표 대본 & 해설
              </span>
              <h3 className="text-sm md:text-base font-bold text-white line-clamp-1">
                {slide.title}
              </h3>
            </div>
          </div>

          <button
            onClick={onClose}
            className="p-1.5 rounded-lg bg-slate-800 hover:bg-slate-700 text-slate-300 hover:text-white transition-colors cursor-pointer"
          >
            <X className="w-5 h-5" />
          </button>
        </div>

        {/* Modal Body */}
        <div className="p-5 md:p-6 space-y-4 max-h-[70vh] overflow-y-auto">
          {/* Main Script */}
          <div className="p-4 rounded-xl bg-slate-950 border border-slate-800/80">
            <div className="flex items-center gap-1.5 text-xs font-bold text-emerald-400 mb-2">
              <Volume2 className="w-3.5 h-3.5" />
              <span>추천 발표 구어체 대본 (1분 스피치 가이드)</span>
            </div>
            <p className="text-sm text-slate-200 leading-relaxed font-sans font-normal whitespace-pre-line">
              {slide.speakerNotes}
            </p>
          </div>

          {/* Key Talking Points */}
          <div className="p-3.5 rounded-xl bg-slate-900/60 border border-slate-800 text-xs text-slate-300 space-y-1.5">
            <span className="font-bold text-slate-200 block text-xs">
              발표 심사위원 질의 대비 포인트
            </span>
            <p className="text-slate-400 text-[11px] leading-relaxed">
              • <strong>전교생 11명의 특수성:</strong> 통계적 일반화보다는 학생 한 명 한 명의 질적 성장과 변화 과정을 강조하세요.
            </p>
            <p className="text-slate-400 text-[11px] leading-relaxed">
              • <strong>지속가능성:</strong> 단순 유학생 유입에 그치지 않고, 일반전학생이 생겨난 계촌중학교만의 교육과정 매력도를 부각하세요.
            </p>
          </div>
        </div>

        {/* Modal Footer */}
        <div className="p-3.5 border-t border-slate-800 bg-slate-950/60 flex items-center justify-between text-xs text-slate-400">
          <span>키보드 단축키 <kbd className="bg-slate-800 px-1.5 py-0.5 rounded text-white font-mono">N</kbd>으로 언제든 열고 닫을 수 있습니다.</span>
          <button
            onClick={onClose}
            className="px-3 py-1 rounded-md bg-slate-800 hover:bg-slate-700 text-slate-200 text-xs font-medium cursor-pointer"
          >
            닫기
          </button>
        </div>
      </div>
    </div>
  );
};
