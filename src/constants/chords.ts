// ============================================
// Chord & Note Library
// MIDI note numbers (60 = Middle C)
// ============================================

export const CHORD_LIBRARY: Record<string, number[]> = {
  // Major Triads
  'C': [60, 64, 67],
  'D': [62, 66, 69],
  'E': [64, 68, 71],
  'F': [65, 69, 72],
  'G': [67, 71, 74],
  'A': [69, 73, 76],
  'B': [71, 75, 78],

  // Minor Triads
  'Cm': [60, 63, 67],
  'Dm': [62, 65, 69],
  'Em': [64, 67, 71],
  'Fm': [65, 68, 72],
  'Gm': [67, 70, 74],
  'Am': [69, 72, 76],
  'Bm': [71, 74, 78],

  // Dominant 7th
  'C7': [60, 64, 67, 70],
  'D7': [62, 66, 69, 72],
  'E7': [64, 68, 71, 74],
  'F7': [65, 69, 72, 75],
  'G7': [67, 71, 74, 77],
  'A7': [69, 73, 76, 79],
  'B7': [71, 75, 78, 81],

  // Major 7th
  'Cmaj7': [60, 64, 67, 71],
  'Dmaj7': [62, 66, 69, 73],
  'Emaj7': [64, 68, 71, 75],
  'Fmaj7': [65, 69, 72, 76],
  'Gmaj7': [67, 71, 74, 78],
  'Amaj7': [69, 73, 76, 80],
  'Bmaj7': [71, 75, 78, 82],

  // Minor 7th
  'Cm7': [60, 63, 67, 70],
  'Dm7': [62, 65, 69, 72],
  'Em7': [64, 67, 71, 74],
  'Fm7': [65, 68, 72, 75],
  'Gm7': [67, 70, 74, 77],
  'Am7': [69, 72, 76, 79],
  'Bm7': [71, 74, 78, 81],

  // Suspended Chords
  'Csus2': [60, 62, 67],
  'Dsus2': [62, 64, 69],
  'Esus2': [64, 66, 71],
  'Fsus2': [65, 67, 72],
  'Gsus2': [67, 69, 74],
  'Asus2': [69, 71, 76],
  'Csus4': [60, 65, 67],
  'Dsus4': [62, 67, 69],
  'Gsus4': [67, 72, 74],

  // Diminished
  'Cdim': [60, 63, 66],
  'Ddim': [62, 65, 68],
  'Edim': [64, 67, 70],
  'Bdim': [71, 74, 77],

  // Augmented
  'Caug': [60, 64, 68],
  'Faug': [65, 69, 73],

  // Single Notes (Octave 4)
  'C4': [60],
  'C#4': [61],
  'D4': [62],
  'D#4': [63],
  'E4': [64],
  'F4': [65],
  'F#4': [66],
  'G4': [67],
  'G#4': [68],
  'A4': [69],
  'A#4': [70],
  'B4': [71],

  // Single Notes (Octave 5)
  'C5': [72],
  'C#5': [73],
  'D5': [74],
  'D#5': [75],
  'E5': [76],
  'F5': [77],
  'F#5': [78],
  'G5': [79],
  'G#5': [80],
  'A5': [81],
  'A#5': [82],
  'B5': [83],

  // Drum Kit (General MIDI)
  'Kick': [36],
  'Kick2': [35],
  'Snare': [38],
  'Snare2': [40],
  'SideStick': [37],
  'Clap': [39],
  'HiHat': [42],
  'HiHatOpen': [46],
  'HiHatPedal': [44],
  'Tom1': [45],
  'Tom2': [47],
  'Tom3': [48],
  'Tom4': [50],
  'Crash': [49],
  'Crash2': [57],
  'Ride': [51],
  'RideBell': [53],
  'Cowbell': [56],
  'Tambourine': [54],

  // Bass Notes
  'BassC': [36],
  'BassD': [38],
  'BassE': [40],
  'BassF': [41],
  'BassG': [43],
  'BassA': [45],
  'BassB': [47],
};

// Color palette for notes
export const NOTE_COLORS = {
  // Warm colors
  red: '#FF6B6B',
  coral: '#FF8E72',
  orange: '#FF9F43',
  amber: '#FECA57',
  yellow: '#FFF176',
  
  // Cool colors
  lime: '#C6FF00',
  green: '#4ECDC4',
  teal: '#26A69A',
  cyan: '#00BCD4',
  sky: '#29B6F6',
  blue: '#42A5F5',
  indigo: '#5C6BC0',
  
  // Purples & Pinks
  purple: '#9B59B6',
  violet: '#7E57C2',
  magenta: '#E040FB',
  pink: '#EC407A',
  rose: '#F48FB1',
  
  // Neutrals & Special
  brown: '#8D6E63',
  gold: '#FFD54F',
  silver: '#B0BEC5',
  
  // Neon
  neonPink: '#FF0080',
  neonCyan: '#00F5FF',
  neonGreen: '#00FF87',
  neonYellow: '#FFE600',
  neonPurple: '#8000FF',
};
