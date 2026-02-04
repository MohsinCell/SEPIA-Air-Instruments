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

// Instrument categories (General MIDI compatible)
export type InstrumentCategory =
  | 'piano'           // GM 0-7: Piano
  | 'chromatic'       // GM 8-15: Chromatic Percussion
  | 'organ'           // GM 16-23: Organ
  | 'guitar'          // GM 24-31: Guitar
  | 'bass'            // GM 32-39: Bass
  | 'strings'         // GM 40-47: Strings
  | 'ensemble'        // GM 48-55: Ensemble
  | 'brass'           // GM 56-63: Brass
  | 'reed'            // GM 64-71: Reed
  | 'pipe'            // GM 72-79: Pipe
  | 'synth-lead'      // GM 80-87: Synth Lead
  | 'synth-pad'       // GM 88-95: Synth Pad
  | 'synth-fx'        // GM 96-103: Synth Effects
  | 'ethnic'          // GM 104-111: Ethnic
  | 'percussive'      // GM 112-119: Percussive
  | 'sound-fx';       // GM 120-127: Sound Effects

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
