import React from 'react';
import { X, ZoomIn } from 'lucide-react';

interface ImageLightboxModalProps {
  isOpen: boolean;
  onClose: () => void;
  imageUrl: string | null;
  title: string;
}

export const ImageLightboxModal: React.FC<ImageLightboxModalProps> = ({
  isOpen,
  onClose,
  imageUrl,
  title,
}) => {
  if (!isOpen || !imageUrl) return null;

  return (
    <div
      onClick={onClose}
      className="fixed inset-0 z-50 bg-slate-950/90 backdrop-blur-md flex items-center justify-center p-4 md:p-8 animate-in fade-in duration-150 cursor-zoom-out"
    >
      <div
        onClick={(e) => e.stopPropagation()}
        className="relative max-w-5xl max-h-[90vh] bg-slate-900 border border-slate-800 rounded-2xl overflow-hidden shadow-2xl flex flex-col cursor-default"
      >
        {/* Header */}
        <div className="p-3.5 bg-slate-900/90 border-b border-slate-800 flex items-center justify-between">
          <span className="text-sm font-bold text-white truncate max-w-lg">
            {title}
          </span>
          <button
            onClick={onClose}
            className="p-1 rounded-lg bg-slate-800 hover:bg-slate-700 text-slate-300 hover:text-white transition-colors cursor-pointer"
          >
            <X className="w-5 h-5" />
          </button>
        </div>

        {/* Image viewport */}
        <div className="flex-1 overflow-auto bg-slate-950 flex items-center justify-center p-2">
          <img
            src={imageUrl}
            alt={title}
            className="max-h-[78vh] w-auto object-contain rounded-lg shadow-lg"
          />
        </div>
      </div>
    </div>
  );
};
