import React, { createContext, useContext, useState, useEffect } from 'react';

interface PhotoContextType {
  photos: Record<string, string>; // slotId -> dataUrl or server url (/uploads/...)
  isBackendConnected: boolean;
  setPhoto: (slotId: string, dataUrl: string, fileName?: string) => Promise<void>;
  removePhoto: (slotId: string) => Promise<void>;
  clearAllPhotos: () => Promise<void>;
  exportPhotoBackup: () => void;
  importPhotoBackup: (jsonString: string) => boolean;
}

const PhotoContext = createContext<PhotoContextType | undefined>(undefined);

const LOCAL_STORAGE_KEY = 'gyechon_presentation_photos_v2';

export const PhotoProvider: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  const [photos, setPhotos] = useState<Record<string, string>>(() => {
    try {
      const saved = localStorage.getItem(LOCAL_STORAGE_KEY);
      return saved ? JSON.parse(saved) : {};
    } catch {
      return {};
    }
  });

  const [isBackendConnected, setIsBackendConnected] = useState<boolean>(false);

  // Sync with backend API on mount
  useEffect(() => {
    let isMounted = true;

    async function syncWithBackend() {
      try {
        const res = await fetch('/api/photos');
        if (res.ok) {
          const data = await res.json();
          if (data.success && isMounted) {
            setIsBackendConnected(true);
            if (data.photos && Object.keys(data.photos).length > 0) {
              setPhotos((prev) => ({
                ...prev,
                ...data.photos,
              }));
            }
          }
        }
      } catch (e) {
        // Backend not available (e.g. static GitHub Pages hosting)
        if (isMounted) setIsBackendConnected(false);
      }
    }

    syncWithBackend();

    return () => {
      isMounted = false;
    };
  }, []);

  // Save to localStorage whenever photos change
  useEffect(() => {
    try {
      localStorage.setItem(LOCAL_STORAGE_KEY, JSON.stringify(photos));
    } catch (e) {
      console.warn('Failed to save to localStorage:', e);
    }
  }, [photos]);

  const setPhoto = async (slotId: string, dataUrl: string, fileName?: string) => {
    // Optimistic local update
    setPhotos((prev) => ({ ...prev, [slotId]: dataUrl }));

    // Try uploading to backend server
    try {
      const res = await fetch('/api/upload', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ slotId, dataUrl, fileName }),
      });
      if (res.ok) {
        const result = await res.json();
        if (result.success && result.url) {
          setIsBackendConnected(true);
          setPhotos((prev) => ({ ...prev, [slotId]: result.url }));
        }
      }
    } catch (e) {
      // Fallback silently stays as dataUrl in localStorage (works for GitHub Pages)
      console.info('Backend upload unavailable; stored locally in browser.');
    }
  };

  const removePhoto = async (slotId: string) => {
    setPhotos((prev) => {
      const next = { ...prev };
      delete next[slotId];
      return next;
    });

    try {
      await fetch(`/api/photos/${slotId}`, { method: 'DELETE' });
    } catch {}
  };

  const clearAllPhotos = async () => {
    setPhotos({});
    try {
      await fetch('/api/photos', { method: 'DELETE' });
    } catch {}
  };

  // Export current photos as a downloadable JSON file
  const exportPhotoBackup = () => {
    const dataStr = 'data:text/json;charset=utf-8,' + encodeURIComponent(JSON.stringify(photos, null, 2));
    const downloadAnchor = document.createElement('a');
    downloadAnchor.setAttribute('href', dataStr);
    downloadAnchor.setAttribute('download', `gyechon_photos_backup_${new Date().toISOString().slice(0, 10)}.json`);
    document.body.appendChild(downloadAnchor);
    downloadAnchor.click();
    downloadAnchor.remove();
  };

  // Import photos from JSON backup
  const importPhotoBackup = (jsonString: string): boolean => {
    try {
      const parsed = JSON.parse(jsonString);
      if (typeof parsed === 'object' && parsed !== null) {
        setPhotos(parsed);
        return true;
      }
    } catch (e) {
      console.error('Failed to parse backup:', e);
    }
    return false;
  };

  return (
    <PhotoContext.Provider
      value={{
        photos,
        isBackendConnected,
        setPhoto,
        removePhoto,
        clearAllPhotos,
        exportPhotoBackup,
        importPhotoBackup,
      }}
    >
      {children}
    </PhotoContext.Provider>
  );
};

export const usePhotos = () => {
  const context = useContext(PhotoContext);
  if (!context) {
    throw new Error('usePhotos must be used within a PhotoProvider');
  }
  return context;
};

