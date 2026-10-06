import React, { useState, useEffect } from 'react';
import {
  ChevronLeft,
  ChevronRight,
  Play,
  Pause,
  RotateCcw,
  Keyboard,
  Clock,
  Sparkles,
} from 'lucide-react';
import { SlideData } from '../types';

interface BottomControlsProps {
  currentSlide: SlideData;
  currentIndex: number;
  totalSlides: number;
  onPrev: () => void;
  onNext: () => void;
  onNavigateSlide: (slideId: number) => void;
}

export const BottomControls: React.FC<BottomControlsProps> = ({
  currentSlide,
  currentIndex,
  totalSlides,
  onPrev,
  onNext,
  onNavigateSlide,
}) => {
  // Presentation stopwatch timer
  const [seconds, setSeconds] = useState<number>(0);
  const [isTimerRunning, setIsTimerRunning] = useState<boolean>(false);
  const [showKeyboardHelp, setShowKeyboardHelp] = useState<boolean>(false);

  useEffect(() => {
    let interval: NodeJS.Timeout | null = null;
    if (isTimerRunning) {
      interval = setInterval(() => {
        setSeconds((s) => s + 1);
      }, 1000);
    } else if (!isTimerRunning && seconds !== 0) {
      if (interval) clearInterval(interval);
    }
    return () => {
      if (interval) clearInterval(interval);
    };
  }, [isTimerRunning, seconds]);

  const formatTimer = (totalSec: number) => {
    const mins = Math.floor(totalSec / 60);
    const secs = totalSec % 60;
    return `${mins.toString().padStart(2, '0')}:${secs.toString().padStart(2, '0')}`;
  };

  const progressPercent = ((currentIndex + 1) / totalSlides) * 100;

  return (
    <footer className="no-print relative bg-slate-900/95 backdrop-blur border-t border-slate-800 px-4 md:px-6 py-2.5 z-20">
      {/* Progress Line */}
      <div className="absolute top-0 left-0 right-0 h-1 bg-slate-800">
        <div
          className="h-full bg-gradient-to-r from-emerald-500 to-teal-400 transition-all duration-300"
          style={{ width: `${progressPercent}%` }}
        />
      </div>

      <div className="flex items-center justify-between gap-4">
        {/* Left: Slide Indicator & Title */}
        <div className="flex items-center gap-3 min-w-0">
          <div className="flex items-center gap-1 font-mono text-xs font-bold text-slate-300 bg-slate-800 px-2.5 py-1 rounded-md border border-slate-700 shrink-0">
            <span className="text-emerald-400">{String(currentIndex + 1).padStart(2, '0')}</span>
            <span className="text-slate-500">/</span>
            <span>{String(totalSlides).padStart(2, '0')}</span>
          </div>

          <div className="hidden sm:block truncate text-xs text-slate-400">
            <span className="text-emerald-400 font-semibold mr-1.5">
              [{currentSlide.sectionTitle}]
            </span>
            <span className="text-slate-200 font-medium truncate">
              {currentSlide.title}
            </span>
          </div>
        </div>

        {/* Center: Prev / Next Buttons */}
        <div className="flex items-center gap-2 shrink-0">
          <button
            onClick={onPrev}
            disabled={currentIndex === 0}
            className="p-1.5 md:px-3 md:py-1.5 rounded-lg bg-slate-800 hover:bg-slate-700 disabled:opacity-30 disabled:hover:bg-slate-800 text-slate-200 text-xs font-semibold flex items-center gap-1 transition-all cursor-pointer disabled:cursor-not-allowed"
            title="이전 슬라이드 (←, PageUp)"
          >
            <ChevronLeft className="w-4 h-4" />
            <span className="hidden md:inline">이전</span>
          </button>

          <button
            onClick={onNext}
            disabled={currentIndex === totalSlides - 1}
            className="p-1.5 md:px-4 md:py-1.5 rounded-lg bg-emerald-500 hover:bg-emerald-400 disabled:opacity-30 disabled:hover:bg-emerald-500 text-slate-950 text-xs font-bold flex items-center gap-1 transition-all cursor-pointer disabled:cursor-not-allowed shadow-md shadow-emerald-500/10"
            title="다음 슬라이드 (→, Space, PageDown)"
          >
            <span className="hidden md:inline">다음</span>
            <ChevronRight className="w-4 h-4" />
          </button>
        </div>

        {/* Right: Presentation Timer & Keyboard helper */}
        <div className="flex items-center gap-2 shrink-0">
          {/* Practice Timer */}
          <div className="flex items-center gap-1.5 bg-slate-950 px-2 py-1 rounded-md border border-slate-800 text-xs">
            <Clock className="w-3.5 h-3.5 text-slate-400 hidden xs:inline" />
            <span className="font-mono text-xs font-bold text-slate-200">
              {formatTimer(seconds)}
            </span>
            <button
              onClick={() => setIsTimerRunning(!isTimerRunning)}
              className="p-0.5 rounded text-slate-400 hover:text-emerald-400 cursor-pointer"
              title={isTimerRunning ? '타이머 일시정지' : '발표 연습 타이머 시작'}
            >
              {isTimerRunning ? <Pause className="w-3.5 h-3.5" /> : <Play className="w-3.5 h-3.5" />}
            </button>
            <button
              onClick={() => {
                setIsTimerRunning(false);
                setSeconds(0);
              }}
              className="p-0.5 rounded text-slate-500 hover:text-slate-300 cursor-pointer"
              title="타이머 리셋"
            >
              <RotateCcw className="w-3 h-3" />
            </button>
          </div>

          {/* Keyboard shortcut popover trigger */}
          <div className="relative">
            <button
              onClick={() => setShowKeyboardHelp(!showKeyboardHelp)}
              className="p-1.5 rounded-lg bg-slate-800 hover:bg-slate-700 text-slate-400 hover:text-white transition-colors cursor-pointer"
              title="키보드 단축키 안내"
            >
              <Keyboard className="w-4 h-4" />
            </button>

            {showKeyboardHelp && (
              <div className="absolute right-0 bottom-10 w-64 p-3 rounded-xl bg-slate-900 border border-slate-800 shadow-2xl text-xs text-slate-300 z-50">
                <span className="font-bold text-white block mb-2 border-b border-slate-800 pb-1">
                  프리젠테이션 단축키
                </span>
                <ul className="space-y-1.5 text-[11px] text-slate-400">
                  <li className="flex justify-between">
                    <span>다음 슬라이드</span>
                    <kbd className="bg-slate-800 px-1.5 py-0.5 rounded text-slate-200 font-mono">→ / Space</kbd>
                  </li>
                  <li className="flex justify-between">
                    <span>이전 슬라이드</span>
                    <kbd className="bg-slate-800 px-1.5 py-0.5 rounded text-slate-200 font-mono">←</kbd>
                  </li>
                  <li className="flex justify-between">
                    <span>전체화면 발표</span>
                    <kbd className="bg-slate-800 px-1.5 py-0.5 rounded text-slate-200 font-mono">F</kbd>
                  </li>
                  <li className="flex justify-between">
                    <span>슬라이드 전체보기</span>
                    <kbd className="bg-slate-800 px-1.5 py-0.5 rounded text-slate-200 font-mono">G</kbd>
                  </li>
                  <li className="flex justify-between">
                    <span>발표자 메모</span>
                    <kbd className="bg-slate-800 px-1.5 py-0.5 rounded text-slate-200 font-mono">N</kbd>
                  </li>
                  <li className="flex justify-between">
                    <span>창 닫기</span>
                    <kbd className="bg-slate-800 px-1.5 py-0.5 rounded text-slate-200 font-mono">Esc</kbd>
                  </li>
                </ul>
              </div>
            )}
          </div>
        </div>
      </div>
    </footer>
  );
};
