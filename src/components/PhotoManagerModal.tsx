import React, { useRef } from 'react';
import {
  X,
  Image as ImageIcon,
  Trash2,
  ImagePlus,
  Check,
  Camera,
  Download,
  Upload,
  Server,
  HardDrive,
} from 'lucide-react';
import { SLIDES } from '../data/presentationData';
import { usePhotos } from '../context/PhotoContext';
import { PhotoSlot } from '../types';

interface PhotoManagerModalProps {
  isOpen: boolean;
  onClose: () => void;
  onJumpToSlide: (slideId: number) => void;
}

export const PhotoManagerModal: React.FC<PhotoManagerModalProps> = ({
  isOpen,
  onClose,
  onJumpToSlide,
}) => {
  const {
    photos,
    isBackendConnected,
    setPhoto,
    removePhoto,
    clearAllPhotos,
    exportPhotoBackup,
    importPhotoBackup,
  } = usePhotos();
  const fileInputRef = useRef<HTMLInputElement>(null);
  const jsonBackupInputRef = useRef<HTMLInputElement>(null);
  const activeSlotIdRef = useRef<string | null>(null);

  if (!isOpen) return null;

  // Aggregate all photo slots from all slides
  const allSlots: { slideId: number; slideTitle: string; slot: PhotoSlot }[] = [];
  SLIDES.forEach((slide) => {
    if (slide.photoSlots && slide.photoSlots.length > 0) {
      slide.photoSlots.forEach((slot) => {
        allSlots.push({ slideId: slide.id, slideTitle: slide.title, slot });
      });
    }
  });

  const handleUploadClick = (slotId: string) => {
    activeSlotIdRef.current = slotId;
    fileInputRef.current?.click();
  };

  const handleFileChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0];
    const slotId = activeSlotIdRef.current;
    if (file && slotId) {
      const reader = new FileReader();
      reader.onloadend = () => {
        if (typeof reader.result === 'string') {
          setPhoto(slotId, reader.result, file.name);
        }
      };
      reader.readAsDataURL(file);
    }
    if (fileInputRef.current) fileInputRef.current.value = '';
  };

  const handleJsonBackupUpload = (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0];
    if (file) {
      const reader = new FileReader();
      reader.onloadend = () => {
        if (typeof reader.result === 'string') {
          const success = importPhotoBackup(reader.result);
          if (success) {
            alert('사진 백업 데이터가 정상 복원되었습니다.');
          } else {
            alert('올바른 백업 JSON 파일이 아닙니다.');
          }
        }
      };
      reader.readAsText(file);
    }
    if (jsonBackupInputRef.current) jsonBackupInputRef.current.value = '';
  };

  const uploadedCount = Object.keys(photos).length;

  return (
    <div className="fixed inset-0 z-50 bg-slate-950/80 backdrop-blur-sm flex items-center justify-center p-4 md:p-8 animate-in fade-in duration-150">
      <input
        ref={fileInputRef}
        type="file"
        accept="image/*"
        onChange={handleFileChange}
        className="hidden"
      />
      <input
        ref={jsonBackupInputRef}
        type="file"
        accept=".json"
        onChange={handleJsonBackupUpload}
        className="hidden"
      />

      <div className="w-full max-w-5xl h-[85vh] bg-slate-900 border border-slate-800 rounded-2xl shadow-2xl flex flex-col overflow-hidden">
        {/* Modal Header */}
        <div className="p-4 md:p-5 border-b border-slate-800 flex flex-wrap items-center justify-between gap-3">
          <div>
            <div className="flex items-center gap-2">
              <h3 className="text-lg font-bold text-white font-serif-kr">
                사진 자료 슬롯 관리자
              </h3>
              <span className="text-xs px-2.5 py-0.5 rounded-full bg-emerald-950 text-emerald-300 border border-emerald-800 font-medium">
                등록 현황: {uploadedCount} / {allSlots.length}
              </span>
              <span
                className={`text-[11px] px-2 py-0.5 rounded-full border flex items-center gap-1 ${
                  isBackendConnected
                    ? 'bg-teal-950 text-teal-300 border-teal-800'
                    : 'bg-slate-800 text-slate-300 border-slate-700'
                }`}
              >
                {isBackendConnected ? (
                  <>
                    <Server className="w-3 h-3 text-teal-400" />
                    <span>Express 서버 연동 (/uploads)</span>
                  </>
                ) : (
                  <>
                    <HardDrive className="w-3 h-3 text-slate-400" />
                    <span>브라우저 로컬 저장 모드</span>
                  </>
                )}
              </span>
            </div>
            <p className="text-xs text-slate-400 mt-0.5">
              각 활동별 사진 슬롯에 현장 사진을 직접 업로드하거나 교체하실 수 있습니다.
            </p>
          </div>

          <div className="flex items-center gap-2">
            <button
              onClick={exportPhotoBackup}
              disabled={uploadedCount === 0}
              className="px-2.5 py-1.5 rounded-lg bg-slate-800 hover:bg-slate-700 disabled:opacity-40 text-slate-300 hover:text-white text-xs font-medium flex items-center gap-1 cursor-pointer transition-colors"
              title="등록된 사진 데이터 JSON 파일로 내보내기"
            >
              <Download className="w-3.5 h-3.5" />
              <span>백업 저장</span>
            </button>

            <button
              onClick={() => jsonBackupInputRef.current?.click()}
              className="px-2.5 py-1.5 rounded-lg bg-slate-800 hover:bg-slate-700 text-slate-300 hover:text-white text-xs font-medium flex items-center gap-1 cursor-pointer transition-colors"
              title="기존 백업 JSON 파일 불러오기"
            >
              <Upload className="w-3.5 h-3.5" />
              <span>백업 복원</span>
            </button>

            {uploadedCount > 0 && (
              <button
                onClick={clearAllPhotos}
                className="px-2.5 py-1.5 rounded-lg bg-rose-950/50 hover:bg-rose-900/60 border border-rose-800 text-rose-300 text-xs font-medium flex items-center gap-1 cursor-pointer transition-colors"
                title="모든 등록 사진 초기화"
              >
                <Trash2 className="w-3.5 h-3.5" />
                <span>전체 삭제</span>
              </button>
            )}

            <button
              onClick={onClose}
              className="p-1.5 rounded-lg bg-slate-800 hover:bg-slate-700 text-slate-300 hover:text-white transition-colors cursor-pointer"
            >
              <X className="w-5 h-5" />
            </button>
          </div>
        </div>

        {/* Modal Slots Grid */}
        <div className="p-4 md:p-6 overflow-y-auto flex-1 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
          {allSlots.map(({ slideId, slideTitle, slot }) => {
            const hasPhoto = !!photos[slot.id];
            return (
              <div
                key={slot.id}
                className={`p-4 rounded-xl border flex flex-col justify-between transition-all ${
                  hasPhoto
                    ? 'bg-slate-900 border-emerald-500/60 shadow-md'
                    : 'bg-slate-950/80 border-slate-800'
                }`}
              >
                <div>
                  <div className="flex items-center justify-between mb-2">
                    <span className="text-[11px] font-mono text-slate-400 bg-slate-900 px-2 py-0.5 rounded border border-slate-800">
                      슬라이드 #{slideId}
                    </span>
                    <span
                      className={`text-[10px] font-bold px-2 py-0.5 rounded-full ${
                        hasPhoto
                          ? 'bg-emerald-500/20 text-emerald-400'
                          : 'bg-slate-800 text-slate-400'
                      }`}
                    >
                      {hasPhoto ? '사진 등록됨' : '슬롯 대기중'}
                    </span>
                  </div>

                  <h4 className="text-sm font-bold text-white line-clamp-1">{slot.title}</h4>
                  <p className="text-[11px] text-slate-400 mt-0.5 line-clamp-1">
                    {slot.category} · "{slot.suggestedCaption}"
                  </p>

                  {/* Thumbnail Preview Area */}
                  <div className="mt-3 aspect-video rounded-lg bg-slate-950 border border-slate-800 overflow-hidden relative flex items-center justify-center">
                    {hasPhoto ? (
                      <img
                        src={photos[slot.id]}
                        alt={slot.title}
                        className="w-full h-full object-cover"
                      />
                    ) : (
                      <div className="text-center p-3 text-slate-600">
                        <Camera className="w-6 h-6 mx-auto mb-1 text-slate-600" />
                        <span className="text-[11px] text-slate-500 block">
                          사진 업로드 대기중
                        </span>
                      </div>
                    )}
                  </div>
                </div>

                {/* Actions bottom */}
                <div className="mt-3 pt-2.5 border-t border-slate-800/80 flex items-center justify-between gap-2">
                  <button
                    onClick={() => {
                      onJumpToSlide(slideId);
                      onClose();
                    }}
                    className="text-[11px] text-slate-400 hover:text-emerald-400 cursor-pointer"
                  >
                    해당 슬라이드로 이동
                  </button>

                  <div className="flex items-center gap-1.5">
                    {hasPhoto && (
                      <button
                        onClick={() => removePhoto(slot.id)}
                        className="p-1 rounded bg-rose-950 text-rose-300 hover:bg-rose-900 transition-colors cursor-pointer"
                        title="사진 삭제"
                      >
                        <Trash2 className="w-3.5 h-3.5" />
                      </button>
                    )}
                    <button
                      onClick={() => handleUploadClick(slot.id)}
                      className="px-2.5 py-1 rounded bg-slate-800 hover:bg-emerald-600 text-slate-200 hover:text-white text-xs font-medium transition-colors cursor-pointer flex items-center gap-1"
                    >
                      <ImagePlus className="w-3.5 h-3.5" />
                      <span>{hasPhoto ? '변경' : '사진 등록'}</span>
                    </button>
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
};

