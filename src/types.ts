export type SectionId = 
  | 'intro'
  | 'overview'
  | 'background'
  | 'tasks'
  | 'design'
  | 'practice'
  | 'results'
  | 'conclusion'
  | 'future';

export interface PhotoSlot {
  id: string;
  title: string;
  category: string;
  aspectRatio?: '16:9' | '4:3' | '3:2';
  description: string;
  suggestedCaption: string;
}

export interface QualitativeCodeItem {
  id: string;
  program: string;
  studentId: string;
  quote: string;
  subCategory: string;
  mainCategory: string;
}

export interface SlideData {
  id: number;
  hash: string;
  sectionId: SectionId;
  sectionNumber: string;
  sectionTitle: string;
  title: string;
  subtitle: string;
  speakerNotes: string;
  photoSlots?: PhotoSlot[];
}
