import React, { useState } from 'react';
import { X, Search, ChevronRight } from 'lucide-react';
import { SLIDES } from '../data/presentationData';

interface SlideGridModalProps {
  isOpen: boolean;
  onClose: () => void;
  currentSlideId: number;
  onSelectSlide: (slideId: number) => void;
}

export const SlideGridModal: React.FC<SlideGridModalProps> = ({
  isOpen,
  onClose,
  currentSlideId,
  onSelectSlide,
}) => {
  const [searchTerm, setSearchTerm] = useState('');

  if (!isOpen) return null;

  const filteredSlides = SLIDES.filter(
    (s) =>
      s.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
      s.subtitle.toLowerCase().includes(searchTerm.toLowerCase()) ||
      s.sectionTitle.toLowerCase().includes(searchTerm.toLowerCase())
  );

  return (
    <div className="fixed inset-0 z-50 bg-slate-950/80 backdrop-blur-sm flex items-center justify-center p-4 md:p-8 animate-in fade-in duration-150">
      <div className="w-full max-w-5xl h-[85vh] bg-slate-900 border border-slate-800 rounded-2xl shadow-2xl flex flex-col overflow-hidden">
        {/* Modal Header */}
        <div className="p-4 md:p-5 border-b border-slate-800 flex items-center justify-between gap-4">
          <div>
            <h3 className="text-lg font-bold text-white font-serif-kr">
              전체 슬라이드 탐색 ({SLIDES.length}개 슬라이드)
            </h3>
            <p className="text-xs text-slate-400 mt-0.5">
              원하는 슬라이드를 클릭하시면 해당 화면으로 즉시 이동합니다.
            </p>
          </div>

          <div className="flex items-center gap-3">
            <div className="relative w-48 sm:w-64">
              <Search className="w-3.5 h-3.5 text-slate-400 absolute left-2.5 top-1/2 -translate-y-1/2" />
              <input
                type="text"
                placeholder="슬라이드 검색..."
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
                className="w-full pl-8 pr-3 py-1.5 rounded-lg bg-slate-950 border border-slate-800 text-xs text-white placeholder-slate-500 focus:outline-none focus:border-emerald-500"
              />
            </div>

            <button
              onClick={onClose}
              className="p-1.5 rounded-lg bg-slate-800 hover:bg-slate-700 text-slate-300 hover:text-white transition-colors cursor-pointer"
            >
              <X className="w-5 h-5" />
            </button>
          </div>
        </div>

        {/* Modal Grid Content */}
        <div className="p-4 md:p-6 overflow-y-auto flex-1 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
          {filteredSlides.map((slide) => {
            const isCurrent = slide.id === currentSlideId;
            return (
              <button
                key={slide.id}
                onClick={() => {
                  onSelectSlide(slide.id);
                  onClose();
                }}
                className={`text-left p-4 rounded-xl border transition-all hover:scale-[1.02] flex flex-col justify-between group cursor-pointer ${
                  isCurrent
                    ? 'bg-emerald-950/40 border-emerald-500 ring-2 ring-emerald-500/40'
                    : 'bg-slate-950/80 border-slate-800 hover:border-slate-700'
                }`}
              >
                <div>
                  <div className="flex items-center justify-between mb-2">
                    <span className="font-mono text-xs font-bold text-emerald-400 bg-slate-900 px-2 py-0.5 rounded border border-slate-800">
                      #{String(slide.id).padStart(2, '0')}
                    </span>
                    <span className="text-[10px] text-slate-500 uppercase tracking-wide truncate max-w-[100px]">
                      {slide.sectionNumber} {slide.sectionTitle}
                    </span>
                  </div>
                  <h4 className="text-xs font-bold text-white group-hover:text-emerald-300 transition-colors line-clamp-2">
                    {slide.title}
                  </h4>
                  <p className="text-[11px] text-slate-400 mt-1 line-clamp-2 leading-relaxed">
                    {slide.subtitle}
                  </p>
                </div>

                <div className="mt-3 pt-2 border-t border-slate-900 flex items-center justify-between text-[10px] text-slate-500 group-hover:text-emerald-400 font-medium">
                  <span>{isCurrent ? '현재 슬라이드' : '이동하기'}</span>
                  <ChevronRight className="w-3.5 h-3.5" />
                </div>
              </button>
            );
          })}
        </div>
      </div>
    </div>
  );
};
