import React, { useState, useEffect, useCallback } from 'react';
import { SLIDES } from './data/presentationData';
import { SectionId, SlideData } from './types';
import { PhotoProvider } from './context/PhotoContext';
import { TopNav } from './components/TopNav';
import { BottomControls } from './components/BottomControls';
import { SlideGridModal } from './components/SlideGridModal';
import { SpeakerNotesModal } from './components/SpeakerNotesModal';
import { PhotoManagerModal } from './components/PhotoManagerModal';
import { HandoutView } from './components/HandoutView';
import { ImageLightboxModal } from './components/ImageLightboxModal';
import { GitHubDeployGuideModal } from './components/GitHubDeployGuideModal';

// Slide Components
import { CoverSlide } from './components/slides/CoverSlide';
import { OutlineSlide } from './components/slides/OutlineSlide';
import { NecessityPurposeSlide } from './components/slides/NecessityPurposeSlide';
import { ScopeTermsSlide } from './components/slides/ScopeTermsSlide';
import { TheoreticalBackgroundSlide } from './components/slides/TheoreticalBackgroundSlide';
import { SwotAnalysisSlide } from './components/slides/SwotAnalysisSlide';
import { ResearchTasksSlide } from './components/slides/ResearchTasksSlide';
import { ResearchDesignSlide } from './components/slides/ResearchDesignSlide';
import { QualitativeMethodSlide } from './components/slides/QualitativeMethodSlide';
import { Task1EnvironmentSlide } from './components/slides/Task1EnvironmentSlide';
import { Task2LearningSlide } from './components/slides/Task2LearningSlide';
import { Task2CareerSlide } from './components/slides/Task2CareerSlide';
import { Task2CultureSlide } from './components/slides/Task2CultureSlide';
import { Task2CommunitySlide } from './components/slides/Task2CommunitySlide';
import { Task3EvaluationSlide } from './components/slides/Task3EvaluationSlide';
import { QualitativeResultsSlide } from './components/slides/QualitativeResultsSlide';
import { IntegratedAnalysisSlide } from './components/slides/IntegratedAnalysisSlide';
import { GyechonModelSlide } from './components/slides/GyechonModelSlide';
import { ConclusionPolicySlide } from './components/slides/ConclusionPolicySlide';
import { OutcomesFuturePlanSlide } from './components/slides/OutcomesFuturePlanSlide';

export default function App() {
  // Parse initial slide from URL Hash (e.g. #1, #5, #model, etc.)
  const parseHash = (): number => {
    const hash = window.location.hash.replace('#', '').trim();
    if (!hash) return 1;
    const num = parseInt(hash, 10);
    if (!isNaN(num) && num >= 1 && num <= SLIDES.length) {
      return num;
    }
    const found = SLIDES.find((s) => s.hash.toLowerCase() === hash.toLowerCase());
    return found ? found.id : 1;
  };

  const [currentSlideId, setCurrentSlideId] = useState<number>(parseHash);
  const [isFullscreen, setIsFullscreen] = useState<boolean>(false);
  const [isGridOpen, setIsGridOpen] = useState<boolean>(false);
  const [isNotesOpen, setIsNotesOpen] = useState<boolean>(false);
  const [isPhotoManagerOpen, setIsPhotoManagerOpen] = useState<boolean>(false);
  const [isGitHubGuideOpen, setIsGitHubGuideOpen] = useState<boolean>(false);
  const [isHandoutMode, setIsHandoutMode] = useState<boolean>(false);
  const [lightbox, setLightbox] = useState<{ isOpen: boolean; imageUrl: string | null; title: string }>({
    isOpen: false,
    imageUrl: null,
    title: '',
  });

  // Sync state with URL hash
  const navigateSlide = useCallback((id: number) => {
    if (id < 1 || id > SLIDES.length) return;
    setCurrentSlideId(id);
    window.location.hash = String(id);
  }, []);

  // Listen to hash changes (browser Back / Forward buttons)
  useEffect(() => {
    const handleHashChange = () => {
      const newId = parseHash();
      setCurrentSlideId(newId);
    };
    window.addEventListener('hashchange', handleHashChange);
    return () => window.removeEventListener('hashchange', handleHashChange);
  }, []);

  // Keyboard navigation shortcuts
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      // Ignore if user is typing in an input
      if (['INPUT', 'TEXTAREA'].includes((e.target as HTMLElement).tagName)) {
        return;
      }

      if (e.key === 'ArrowRight' || e.key === ' ' || e.key === 'PageDown') {
        e.preventDefault();
        navigateSlide(currentSlideId + 1);
      } else if (e.key === 'ArrowLeft' || e.key === 'PageUp') {
        e.preventDefault();
        navigateSlide(currentSlideId - 1);
      } else if (e.key === 'f' || e.key === 'F') {
        e.preventDefault();
        toggleFullscreen();
      } else if (e.key === 'g' || e.key === 'G') {
        e.preventDefault();
        setIsGridOpen((prev) => !prev);
      } else if (e.key === 'n' || e.key === 'N') {
        e.preventDefault();
        setIsNotesOpen((prev) => !prev);
      } else if (e.key === 'p' || e.key === 'P') {
        e.preventDefault();
        setIsPhotoManagerOpen((prev) => !prev);
      } else if (e.key === 'Escape') {
        if (isGridOpen) setIsGridOpen(false);
        if (isNotesOpen) setIsNotesOpen(false);
        if (isPhotoManagerOpen) setIsPhotoManagerOpen(false);
        if (isGitHubGuideOpen) setIsGitHubGuideOpen(false);
        if (lightbox.isOpen) setLightbox({ isOpen: false, imageUrl: null, title: '' });
      }
    };

    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, [currentSlideId, navigateSlide, isGridOpen, isNotesOpen, isPhotoManagerOpen, isGitHubGuideOpen, lightbox.isOpen]);

  // Fullscreen toggle handler
  const toggleFullscreen = () => {
    if (!document.fullscreenElement) {
      document.documentElement.requestFullscreen().then(() => setIsFullscreen(true)).catch(() => {});
    } else {
      document.exitFullscreen().then(() => setIsFullscreen(false)).catch(() => {});
    }
  };

  useEffect(() => {
    const handleFsChange = () => {
      setIsFullscreen(!!document.fullscreenElement);
    };
    document.addEventListener('fullscreenchange', handleFsChange);
    return () => document.removeEventListener('fullscreenchange', handleFsChange);
  }, []);

  const jumpToSection = (sectionId: SectionId) => {
    const targetSlide = SLIDES.find((s) => s.sectionId === sectionId);
    if (targetSlide) {
      navigateSlide(targetSlide.id);
    }
  };

  const handleImagePreview = (imageUrl: string, title: string) => {
    setLightbox({ isOpen: true, imageUrl, title });
  };

  const currentSlide: SlideData = SLIDES.find((s) => s.id === currentSlideId) || SLIDES[0];

  const renderCurrentSlide = () => {
    switch (currentSlideId) {
      case 1:
        return <CoverSlide onStart={() => navigateSlide(2)} />;
      case 2:
        return <OutlineSlide onNavigateSlide={navigateSlide} />;
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
        return <Task1EnvironmentSlide onImagePreview={handleImagePreview} />;
      case 11:
        return <Task2LearningSlide onImagePreview={handleImagePreview} />;
      case 12:
        return <Task2CareerSlide onImagePreview={handleImagePreview} />;
      case 13:
        return <Task2CultureSlide onImagePreview={handleImagePreview} />;
      case 14:
        return <Task2CommunitySlide onImagePreview={handleImagePreview} />;
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
        return <CoverSlide onStart={() => navigateSlide(2)} />;
    }
  };

  return (
    <PhotoProvider>
      {isHandoutMode ? (
        <HandoutView
          onBackToPresentation={() => setIsHandoutMode(false)}
          onNavigateSlide={(id) => {
            setIsHandoutMode(false);
            navigateSlide(id);
          }}
          onImagePreview={handleImagePreview}
        />
      ) : (
        <div className="flex flex-col h-screen w-screen overflow-hidden bg-slate-950 text-slate-100 select-none">
          {/* Top Bar Navigation */}
          <TopNav
            currentSlideId={currentSlideId}
            totalSlides={SLIDES.length}
            isFullscreen={isFullscreen}
            onToggleFullscreen={toggleFullscreen}
            onOpenGrid={() => setIsGridOpen(true)}
            onOpenNotes={() => setIsNotesOpen(true)}
            onOpenPhotoManager={() => setIsPhotoManagerOpen(true)}
            onOpenGitHubGuide={() => setIsGitHubGuideOpen(true)}
            onToggleHandout={() => setIsHandoutMode(true)}
            isHandoutMode={isHandoutMode}
            onJumpToSection={jumpToSection}
          />

          {/* Main Slide Deck Canvas Viewport */}
          <main className="flex-1 overflow-y-auto px-4 py-5 md:px-8 md:py-6 lg:px-12 flex items-center justify-center">
            <div
              key={currentSlideId}
              className="w-full max-w-6xl mx-auto slide-content-active"
            >
              {renderCurrentSlide()}
            </div>
          </main>

          {/* Bottom Controls with progress bar and stopwatch */}
          <BottomControls
            currentSlide={currentSlide}
            currentIndex={currentSlideId - 1}
            totalSlides={SLIDES.length}
            onPrev={() => navigateSlide(currentSlideId - 1)}
            onNext={() => navigateSlide(currentSlideId + 1)}
            onNavigateSlide={navigateSlide}
          />

          {/* Modals & Lightbox */}
          <SlideGridModal
            isOpen={isGridOpen}
            onClose={() => setIsGridOpen(false)}
            currentSlideId={currentSlideId}
            onSelectSlide={navigateSlide}
          />

          <SpeakerNotesModal
            isOpen={isNotesOpen}
            onClose={() => setIsNotesOpen(false)}
            slide={currentSlide}
          />

          <PhotoManagerModal
            isOpen={isPhotoManagerOpen}
            onClose={() => setIsPhotoManagerOpen(false)}
            onJumpToSlide={navigateSlide}
          />

          <GitHubDeployGuideModal
            isOpen={isGitHubGuideOpen}
            onClose={() => setIsGitHubGuideOpen(false)}
          />

          <ImageLightboxModal
            isOpen={lightbox.isOpen}
            onClose={() => setLightbox({ isOpen: false, imageUrl: null, title: '' })}
            imageUrl={lightbox.imageUrl}
            title={lightbox.title}
          />
        </div>
      )}
    </PhotoProvider>
  );
}
