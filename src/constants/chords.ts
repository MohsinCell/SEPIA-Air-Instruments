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

  // Bass Notes (Octave 2)
  'BassC': [36],
  'BassC#': [37],
  'BassD': [38],
  'BassD#': [39],
  'BassE': [40],
  'BassF': [41],
  'BassF#': [42],
  'BassG': [43],
  'BassG#': [44],
  'BassA': [45],
  'BassA#': [46],
  'BassB': [47],

  // Single Notes (Octave 3)
  'C3': [48],
  'C#3': [49],
  'D3': [50],
  'D#3': [51],
  'E3': [52],
  'F3': [53],
  'F#3': [54],
  'G3': [55],
  'G#3': [56],
  'A3': [57],
  'A#3': [58],
  'B3': [59],

  // Single Notes (Octave 6)
  'C6': [84],
  'D6': [86],
  'E6': [88],
  'F6': [89],
  'G6': [91],
  'A6': [93],
  'B6': [95],

  // Power Chords
  'C5pow': [36, 43],
  'D5pow': [38, 45],
  'E5pow': [40, 47],
  'F5pow': [41, 48],
  'G5pow': [43, 50],
  'A5pow': [45, 52],

  // Octave Bass
  'BassC8': [36, 48],
  'BassD8': [38, 50],
  'BassE8': [40, 52],
  'BassF8': [41, 53],
  'BassG8': [43, 55],
  'BassA8': [45, 57],

  // Minor 9th chords
  'Cm9': [60, 63, 67, 70, 74],
  'Dm9': [62, 65, 69, 72, 76],
  'Em9': [64, 67, 71, 74, 78],
  'Am9': [69, 72, 76, 79, 83],

  // Add9 chords
  'Cadd9': [60, 64, 67, 74],
  'Gadd9': [67, 71, 74, 81],
  'Dadd9': [62, 66, 69, 76],

  // 6th chords
  'Cmaj6': [60, 64, 67, 69],
  'Gmaj6': [67, 71, 74, 76],
  'Am6': [69, 72, 76, 78],
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
