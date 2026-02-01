// ============================================
// Air Instruments - Type Definitions
// ============================================

// MediaPipe Hand Landmark point
export interface HandLandmark {
  x: number;
  y: number;
  z: number;
}

// Detected hand with landmarks and handedness
export interface Hand {
  landmarks: HandLandmark[];
  handedness: 'Left' | 'Right';
}

// Note configuration for a finger
export interface NoteConfig {
  name: string;
  notes: number[];
  color: string;
}

// Finger mapping for a hand (left or right)
export interface FingerMapping {
  thumb: NoteConfig;
  index: NoteConfig;
  middle: NoteConfig;
  ring: NoteConfig;
  pinky: NoteConfig;
}

// Instrument preset configuration
export interface InstrumentPreset {
  id: string;
  name: string;
  icon: string;
  description: string;
  category: InstrumentCategory;
  instrument: number; // MIDI instrument number
  left: FingerMapping;
  right: FingerMapping;
}

// Instrument categories
export type InstrumentCategory = 
  | 'keys' 
  | 'strings' 
  | 'synth' 
  | 'percussion' 
  | 'ambient'
  | 'brass'
  | 'woodwinds'
  | 'ethnic'
  | 'electronic';

// Visual particle effect
export interface Particle {
  id: string;
  x: number;
  y: number;
  color: string;
  note: string;
  life: number;
  maxLife: number;
  velocity: {
    x: number;
    y: number;
  };
  size: number;
}

// Note history item for recent notes display
export interface NoteHistoryItem {
  id: string;
  note: string;
  hand: 'left' | 'right';
  finger: FingerName;
  timestamp: number;
  color: string;
}

// Finger names
export type FingerName = 'thumb' | 'index' | 'middle' | 'ring' | 'pinky';

// Application state
export interface AppState {
  isStarted: boolean;
  isLoading: boolean;
  error: string | null;
  selectedInstrumentId: string;
  hands: Hand[];
  activeFingers: Set<string>;
  particles: Particle[];
  noteHistory: NoteHistoryItem[];
}

// Settings state
export interface Settings {
  volume: number;
  showSkeleton: boolean;
  showParticles: boolean;
  showFingerLabels: boolean;
  cameraFacingMode: 'user' | 'environment';
  handTrackingConfidence: number;
}

// Audio engine configuration
export interface AudioConfig {
  instrument: number;
  isDrum: boolean;
  attack: number;
  decay: number;
  sustain: number;
  release: number;
}

// Hand detection result from MediaPipe
export interface HandDetectionResult {
  multiHandLandmarks?: HandLandmark[][];
  multiHandedness?: Array<{ label: 'Left' | 'Right' }>;
}

// Position on canvas
export interface Position {
  x: number;
  y: number;
}
