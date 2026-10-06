import React, { useRef } from 'react';
import { PhotoSlot } from '../types';
import { usePhotos } from '../context/PhotoContext';
import { ImagePlus, Trash2, Maximize2, Camera } from 'lucide-react';

interface PhotoSlotCardProps {
  slot: PhotoSlot;
  onPreview?: (imageUrl: string, title: string) => void;
}

export const PhotoSlotCard: React.FC<PhotoSlotCardProps> = ({ slot, onPreview }) => {
  const { photos, setPhoto, removePhoto } = usePhotos();
  const fileInputRef = useRef<HTMLInputElement>(null);
  const currentImage = photos[slot.id];

  const handleFileChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0];
    if (file) {
      const reader = new FileReader();
      reader.onloadend = () => {
        if (typeof reader.result === 'string') {
          setPhoto(slot.id, reader.result);
        }
      };
      reader.readAsDataURL(file);
    }
  };

  const triggerUpload = () => {
    fileInputRef.current?.click();
  };

  return (
    <div className="flex flex-col rounded-xl overflow-hidden bg-slate-900/80 border border-slate-800/80 shadow-md transition-all hover:border-slate-700 group">
      <input
        ref={fileInputRef}
        type="file"
        accept="image/*"
        onChange={handleFileChange}
        className="hidden"
      />

      {/* Media container */}
      <div className="relative aspect-[4/3] bg-gradient-to-br from-slate-900 to-slate-950 flex flex-col items-center justify-center overflow-hidden">
        {currentImage ? (
          <>
            <img
              src={currentImage}
              alt={slot.title}
              className="w-full h-full object-cover"
              referrerPolicy="no-referrer"
            />
            <div className="absolute inset-0 bg-slate-950/40 opacity-0 group-hover:opacity-100 transition-opacity flex items-center justify-center gap-2">
              {onPreview && (
                <button
                  onClick={() => onPreview(currentImage, slot.title)}
                  className="p-2 rounded-lg bg-slate-900/90 text-white hover:bg-slate-800 transition-colors shadow-lg"
                  title="크게 보기"
                >
                  <Maximize2 className="w-4 h-4" />
                </button>
              )}
              <button
                onClick={triggerUpload}
                className="p-2 rounded-lg bg-emerald-600/90 text-white hover:bg-emerald-500 transition-colors shadow-lg"
                title="사진 변경"
              >
                <ImagePlus className="w-4 h-4" />
              </button>
              <button
                onClick={() => removePhoto(slot.id)}
                className="p-2 rounded-lg bg-rose-600/90 text-white hover:bg-rose-500 transition-colors shadow-lg"
                title="사진 삭제"
              >
                <Trash2 className="w-4 h-4" />
              </button>
            </div>
          </>
        ) : (
          <div className="p-4 text-center flex flex-col items-center justify-center h-full w-full border border-dashed border-slate-800 hover:border-slate-600 transition-colors rounded-t-xl bg-slate-950/40">
            <div className="w-10 h-10 rounded-full bg-slate-800/80 flex items-center justify-center text-emerald-400 mb-2.5">
              <Camera className="w-5 h-5" />
            </div>
            <span className="text-xs font-semibold text-emerald-400 tracking-wide uppercase">
              사진 등록 예정 슬롯
            </span>
            <p className="text-xs font-medium text-slate-300 mt-1 line-clamp-1">
              {slot.title}
            </p>
            <p className="text-[11px] text-slate-500 mt-0.5 max-w-[200px] line-clamp-2">
              {slot.description}
            </p>

            <button
              onClick={triggerUpload}
              className="mt-3 inline-flex items-center gap-1.5 px-3 py-1.5 rounded-lg bg-slate-800 hover:bg-emerald-600 text-slate-200 hover:text-white text-xs font-medium transition-all shadow-sm cursor-pointer"
            >
              <ImagePlus className="w-3.5 h-3.5" />
              <span>사진 파일 등록</span>
            </button>
          </div>
        )}
      </div>

      {/* Caption & details footer */}
      <div className="p-3 bg-slate-900 border-t border-slate-800/80">
        <div className="flex items-center justify-between text-xs text-slate-400">
          <span className="font-semibold text-slate-200 truncate">{slot.title}</span>
          <span className="text-[11px] text-slate-400 shrink-0 ml-2">{slot.category}</span>
        </div>
        <p className="text-[11px] text-slate-400 mt-1 line-clamp-1 italic">
          "{slot.suggestedCaption}"
        </p>
      </div>
    </div>
  );
};
