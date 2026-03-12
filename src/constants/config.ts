export const HAND_CONFIG = {
    maxNumHands: 2,
    modelComplexity: 1,
    minDetectionConfidence: 0.5,
    minTrackingConfidence: 0.4,
};
export const VIDEO_CONFIG = {
    width: 1280,
    height: 720,
    facingMode: 'user' as const,
};
export const FINGER_TIP_IDS = [4, 8, 12, 16, 20] as const;
export const FINGER_PIP_IDS = [2, 6, 10, 14, 18] as const;
export const FINGER_NAMES = ['thumb', 'index', 'middle', 'ring', 'pinky'] as const;
export const HAND_CONNECTIONS = [
    [0, 1], [1, 2], [2, 3], [3, 4],
    [0, 5], [5, 6], [6, 7], [7, 8],
    [0, 9], [9, 10], [10, 11], [11, 12],
    [0, 13], [13, 14], [14, 15], [15, 16],
    [0, 17], [17, 18], [18, 19], [19, 20],
    [5, 9], [9, 13], [13, 17],
] as const;
export const PARTICLE_CONFIG = {
    maxParticles: 100,
    baseLife: 60,
    gravity: 0.15,
    baseSize: 20,
    sizeGrowth: 1.2,
    velocityRange: { x: 6, y: 5 },
    initialVelocityY: -4,
};
export const AUDIO_CONFIG = {
    defaultVolume: 0.3,
    attackTime: 0.02,
    decayTime: 0.1,
    sustainLevel: 0.3,
    releaseTime: 0.3,
    detuneAmount: 5,
};
export const UI_CONFIG = {
    noteHistoryLength: 15,
    fingerThreshold: 0.015,
    activeIndicatorRadius: 20,
    glowRadius: 40,
};
export const DEFAULT_SETTINGS = {
    volume: 50,
    showSkeleton: true,
    showParticles: true,
    showFingerLabels: true,
    cameraFacingMode: 'user' as const,
    handTrackingConfidence: 0.7,
};
export const MEDIAPIPE_CONFIG = {
    wasmPath: 'https://cdn.jsdelivr.net/npm/@mediapipe/tasks-vision@0.10.32/wasm',
    modelPath: 'https://storage.googleapis.com/mediapipe-models/hand_landmarker/hand_landmarker/float16/1/hand_landmarker.task',
};
export const ANIMATION_TIMING = {
    particleUpdateInterval: 16,
    loadingTimeout: 30000,
    scriptLoadDelay: 1000,
};
export const THEME = {
    bgPrimary: '#0a0a0a',
    bgSecondary: '#121212',
    bgTertiary: 'rgba(255, 255, 255, 0.02)',
    accentPrimary: '#4ECDC4',
    accentSecondary: '#FF6B6B',
    accentGradient: 'linear-gradient(135deg, #FF6B6B, #4ECDC4)',
    textPrimary: '#ffffff',
    textSecondary: 'rgba(255, 255, 255, 0.7)',
    textMuted: 'rgba(255, 255, 255, 0.4)',
    borderLight: 'rgba(255, 255, 255, 0.08)',
    borderMedium: 'rgba(255, 255, 255, 0.15)',
    success: '#4ECDC4',
    error: '#FF6B6B',
    warning: '#F39C12',
    glass: 'rgba(255, 255, 255, 0.05)',
    glassBorder: 'rgba(255, 255, 255, 0.1)',
    glassBlur: '10px',
};
