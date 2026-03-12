export interface HandLandmark {
    x: number;
    y: number;
    z: number;
}
export interface Hand {
    landmarks: HandLandmark[];
    handedness: 'Left' | 'Right';
}
export interface NoteConfig {
    name: string;
    notes: number[];
    color: string;
}
export interface FingerMapping {
    thumb: NoteConfig;
    index: NoteConfig;
    middle: NoteConfig;
    ring: NoteConfig;
    pinky: NoteConfig;
}
export interface InstrumentPreset {
    id: string;
    name: string;
    icon: string;
    description: string;
    category: InstrumentCategory;
    instrument: number;
    left: FingerMapping;
    right: FingerMapping;
}
export type InstrumentCategory = 'piano' | 'chromatic' | 'organ' | 'guitar' | 'bass' | 'strings' | 'ensemble' | 'brass' | 'reed' | 'pipe' | 'synth-lead' | 'synth-pad' | 'synth-fx' | 'ethnic' | 'percussive';
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
export interface NoteHistoryItem {
    id: string;
    note: string;
    hand: 'left' | 'right';
    finger: FingerName;
    timestamp: number;
    color: string;
}
export type FingerName = 'thumb' | 'index' | 'middle' | 'ring' | 'pinky';
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
export interface Settings {
    volume: number;
    showSkeleton: boolean;
    showParticles: boolean;
    showFingerLabels: boolean;
    cameraFacingMode: 'user' | 'environment';
    handTrackingConfidence: number;
}
export interface AudioConfig {
    instrument: number;
    isDrum: boolean;
    attack: number;
    decay: number;
    sustain: number;
    release: number;
}
export interface HandDetectionResult {
    multiHandLandmarks?: HandLandmark[][];
    multiHandedness?: Array<{
        label: 'Left' | 'Right';
    }>;
}
export interface Position {
    x: number;
    y: number;
}
