// ============================================
// Instrument-Specific Note Mappings
// Each instrument has unique, musically accurate notes
// Based on real instrument ranges and common playing patterns
// ============================================

import { NOTE_COLORS } from './chords';

// Helper to create finger mapping
const createMapping = (
  leftNotes: [string, number[], string][],
  rightNotes: [string, number[], string][]
) => ({
  left: {
    thumb: { name: leftNotes[0][0], notes: leftNotes[0][1], color: leftNotes[0][2] },
    index: { name: leftNotes[1][0], notes: leftNotes[1][1], color: leftNotes[1][2] },
    middle: { name: leftNotes[2][0], notes: leftNotes[2][1], color: leftNotes[2][2] },
    ring: { name: leftNotes[3][0], notes: leftNotes[3][1], color: leftNotes[3][2] },
    pinky: { name: leftNotes[4][0], notes: leftNotes[4][1], color: leftNotes[4][2] },
  },
  right: {
    thumb: { name: rightNotes[0][0], notes: rightNotes[0][1], color: rightNotes[0][2] },
    index: { name: rightNotes[1][0], notes: rightNotes[1][1], color: rightNotes[1][2] },
    middle: { name: rightNotes[2][0], notes: rightNotes[2][1], color: rightNotes[2][2] },
    ring: { name: rightNotes[3][0], notes: rightNotes[3][1], color: rightNotes[3][2] },
    pinky: { name: rightNotes[4][0], notes: rightNotes[4][1], color: rightNotes[4][2] },
  },
});

// ============================================
// PIANO FAMILY (0-7)
// Range: A0 (21) to C8 (108)
// ============================================

// 0: Acoustic Grand Piano - Full range, concert repertoire
export const ACOUSTIC_GRAND_PIANO = createMapping(
  [
    ['C4', [60, 64, 67], NOTE_COLORS.red],      // C major
    ['G4', [67, 71, 74], NOTE_COLORS.green],    // G major
    ['Am', [69, 72, 76], NOTE_COLORS.blue],     // A minor
    ['F4', [65, 69, 72], NOTE_COLORS.amber],    // F major
    ['Dm', [62, 65, 69], NOTE_COLORS.purple],   // D minor
  ],
  [
    ['Em', [64, 67, 71], NOTE_COLORS.pink],     // E minor
    ['C7', [60, 64, 67, 70], NOTE_COLORS.teal], // C7
    ['G7', [67, 71, 74, 77], NOTE_COLORS.gold], // G7
    ['Am7', [69, 72, 76, 79], NOTE_COLORS.violet], // Am7
    ['Fmaj7', [65, 69, 72, 76], NOTE_COLORS.cyan], // Fmaj7
  ]
);

// 1: Bright Acoustic Piano - Brighter, higher register
export const BRIGHT_ACOUSTIC_PIANO = createMapping(
  [
    ['C5', [72, 76, 79], NOTE_COLORS.coral],    // C major (octave up)
    ['G5', [79, 83, 86], NOTE_COLORS.lime],     // G major
    ['Am5', [81, 84, 88], NOTE_COLORS.sky],     // A minor
    ['F5', [77, 81, 84], NOTE_COLORS.orange],   // F major
    ['Dm5', [74, 77, 81], NOTE_COLORS.magenta], // D minor
  ],
  [
    ['Em5', [76, 79, 83], NOTE_COLORS.rose],
    ['C7h', [72, 76, 79, 82], NOTE_COLORS.teal],
    ['G7h', [79, 83, 86, 89], NOTE_COLORS.gold],
    ['Am7h', [81, 84, 88, 91], NOTE_COLORS.violet],
    ['Fmaj7h', [77, 81, 84, 88], NOTE_COLORS.cyan],
  ]
);

// 2: Electric Grand Piano - Rhodes-like, warm mids
export const ELECTRIC_GRAND_PIANO = createMapping(
  [
    ['C4', [60, 64, 67], NOTE_COLORS.amber],
    ['Eb', [63, 67, 70], NOTE_COLORS.brown],    // Eb major for jazzy feel
    ['Gm', [67, 70, 74], NOTE_COLORS.indigo],
    ['Bb', [70, 74, 77], NOTE_COLORS.coral],
    ['F4', [65, 69, 72], NOTE_COLORS.gold],
  ],
  [
    ['Dm7', [62, 65, 69, 72], NOTE_COLORS.rose],
    ['Gm7', [67, 70, 74, 77], NOTE_COLORS.teal],
    ['Cmaj7', [60, 64, 67, 71], NOTE_COLORS.pink],
    ['Fmaj7', [65, 69, 72, 76], NOTE_COLORS.violet],
    ['Bbmaj7', [70, 74, 77, 81], NOTE_COLORS.cyan],
  ]
);

// 3: Honky-Tonk Piano - Ragtime style, detuned
export const HONKY_TONK_PIANO = createMapping(
  [
    ['C4', [60, 64, 67], NOTE_COLORS.amber],
    ['F4', [65, 69, 72], NOTE_COLORS.orange],
    ['G4', [67, 71, 74], NOTE_COLORS.gold],
    ['C5', [72, 76, 79], NOTE_COLORS.brown],
    ['G3', [55, 59, 62], NOTE_COLORS.coral],
  ],
  [
    ['D7', [62, 66, 69, 72], NOTE_COLORS.red],
    ['G7', [67, 71, 74, 77], NOTE_COLORS.teal],
    ['C7', [60, 64, 67, 70], NOTE_COLORS.pink],
    ['F7', [65, 69, 72, 75], NOTE_COLORS.violet],
    ['A7', [69, 73, 76, 79], NOTE_COLORS.cyan],
  ]
);

// 4: Electric Piano 1 (Rhodes) - Warm, bell-like
export const ELECTRIC_PIANO_1 = createMapping(
  [
    ['Cmaj9', [60, 64, 67, 71, 74], NOTE_COLORS.teal],
    ['Dm9', [62, 65, 69, 72, 76], NOTE_COLORS.blue],
    ['Em7', [64, 67, 71, 74], NOTE_COLORS.green],
    ['Fmaj7', [65, 69, 72, 76], NOTE_COLORS.amber],
    ['Am7', [69, 72, 76, 79], NOTE_COLORS.purple],
  ],
  [
    ['Gmaj7', [67, 71, 74, 78], NOTE_COLORS.pink],
    ['Bm7b5', [71, 74, 77, 81], NOTE_COLORS.rose],
    ['Dm7', [62, 65, 69, 72], NOTE_COLORS.gold],
    ['G7', [67, 71, 74, 77], NOTE_COLORS.violet],
    ['Cmaj7', [60, 64, 67, 71], NOTE_COLORS.cyan],
  ]
);

// 5: Electric Piano 2 (DX7 FM) - Bright, glassy
export const ELECTRIC_PIANO_2 = createMapping(
  [
    ['C5', [72, 76, 79], NOTE_COLORS.neonCyan],
    ['D5', [74, 78, 81], NOTE_COLORS.neonGreen],
    ['E5', [76, 80, 83], NOTE_COLORS.neonYellow],
    ['G5', [79, 83, 86], NOTE_COLORS.neonPink],
    ['A5', [81, 85, 88], NOTE_COLORS.neonPurple],
  ],
  [
    ['Cmaj7', [72, 76, 79, 83], NOTE_COLORS.cyan],
    ['Dm7', [74, 77, 81, 84], NOTE_COLORS.magenta],
    ['Em7', [76, 79, 83, 86], NOTE_COLORS.pink],
    ['Fmaj7', [77, 81, 84, 88], NOTE_COLORS.violet],
    ['G7', [79, 83, 86, 89], NOTE_COLORS.purple],
  ]
);

// 6: Harpsichord - Baroque, plucked sound
export const HARPSICHORD = createMapping(
  [
    ['C4', [60, 72], NOTE_COLORS.gold],         // Octave doubling typical
    ['D4', [62, 74], NOTE_COLORS.amber],
    ['E4', [64, 76], NOTE_COLORS.orange],
    ['G4', [67, 79], NOTE_COLORS.brown],
    ['A4', [69, 81], NOTE_COLORS.coral],
  ],
  [
    ['C5', [72, 84], NOTE_COLORS.red],
    ['D5', [74, 86], NOTE_COLORS.rose],
    ['E5', [76, 88], NOTE_COLORS.pink],
    ['G5', [79, 91], NOTE_COLORS.magenta],
    ['A5', [81, 93], NOTE_COLORS.purple],
  ]
);

// 7: Clavinet - Funky, percussive
export const CLAVINET = createMapping(
  [
    ['E3', [52], NOTE_COLORS.amber],
    ['A3', [57], NOTE_COLORS.orange],
    ['D4', [62], NOTE_COLORS.gold],
    ['G4', [67], NOTE_COLORS.brown],
    ['C5', [72], NOTE_COLORS.coral],
  ],
  [
    ['E4', [64], NOTE_COLORS.red],
    ['A4', [69], NOTE_COLORS.teal],
    ['D5', [74], NOTE_COLORS.green],
    ['G5', [79], NOTE_COLORS.blue],
    ['C6', [84], NOTE_COLORS.purple],
  ]
);

// ============================================
// CHROMATIC PERCUSSION (8-15)
// ============================================

// 8: Celesta - Delicate, high register
export const CELESTA = createMapping(
  [
    ['C6', [84], NOTE_COLORS.cyan],
    ['D6', [86], NOTE_COLORS.sky],
    ['E6', [88], NOTE_COLORS.blue],
    ['F6', [89], NOTE_COLORS.indigo],
    ['G6', [91], NOTE_COLORS.violet],
  ],
  [
    ['A6', [93], NOTE_COLORS.purple],
    ['B6', [95], NOTE_COLORS.magenta],
    ['C7', [96], NOTE_COLORS.pink],
    ['D7', [98], NOTE_COLORS.rose],
    ['E7', [100], NOTE_COLORS.coral],
  ]
);

// 9: Glockenspiel - Bright metallic bells
export const GLOCKENSPIEL = createMapping(
  [
    ['G5', [79], NOTE_COLORS.silver],
    ['A5', [81], NOTE_COLORS.cyan],
    ['B5', [83], NOTE_COLORS.sky],
    ['C6', [84], NOTE_COLORS.blue],
    ['D6', [86], NOTE_COLORS.indigo],
  ],
  [
    ['E6', [88], NOTE_COLORS.violet],
    ['F6', [89], NOTE_COLORS.purple],
    ['G6', [91], NOTE_COLORS.magenta],
    ['A6', [93], NOTE_COLORS.pink],
    ['C7', [96], NOTE_COLORS.rose],
  ]
);

// 10: Music Box - Delicate, tiny bells
export const MUSIC_BOX = createMapping(
  [
    ['C5', [72], NOTE_COLORS.pink],
    ['E5', [76], NOTE_COLORS.rose],
    ['G5', [79], NOTE_COLORS.coral],
    ['C6', [84], NOTE_COLORS.gold],
    ['E6', [88], NOTE_COLORS.amber],
  ],
  [
    ['G6', [91], NOTE_COLORS.cyan],
    ['C7', [96], NOTE_COLORS.sky],
    ['E7', [100], NOTE_COLORS.blue],
    ['G7', [103], NOTE_COLORS.violet],
    ['C8', [108], NOTE_COLORS.purple],
  ]
);

// 11: Vibraphone - Jazz, motor vibrato
export const VIBRAPHONE = createMapping(
  [
    ['C4', [60], NOTE_COLORS.teal],
    ['Eb4', [63], NOTE_COLORS.cyan],
    ['G4', [67], NOTE_COLORS.green],
    ['Bb4', [70], NOTE_COLORS.blue],
    ['D5', [74], NOTE_COLORS.indigo],
  ],
  [
    ['F5', [77], NOTE_COLORS.violet],
    ['Ab5', [80], NOTE_COLORS.purple],
    ['C6', [84], NOTE_COLORS.magenta],
    ['Eb6', [87], NOTE_COLORS.pink],
    ['G6', [91], NOTE_COLORS.rose],
  ]
);

// 12: Marimba - Warm wooden bars
export const MARIMBA = createMapping(
  [
    ['C3', [48], NOTE_COLORS.brown],
    ['F3', [53], NOTE_COLORS.amber],
    ['G3', [55], NOTE_COLORS.orange],
    ['C4', [60], NOTE_COLORS.gold],
    ['F4', [65], NOTE_COLORS.coral],
  ],
  [
    ['G4', [67], NOTE_COLORS.red],
    ['C5', [72], NOTE_COLORS.rose],
    ['F5', [77], NOTE_COLORS.pink],
    ['G5', [79], NOTE_COLORS.magenta],
    ['C6', [84], NOTE_COLORS.purple],
  ]
);

// 13: Xylophone - Bright wooden bars
export const XYLOPHONE = createMapping(
  [
    ['C5', [72], NOTE_COLORS.amber],
    ['D5', [74], NOTE_COLORS.orange],
    ['E5', [76], NOTE_COLORS.gold],
    ['F5', [77], NOTE_COLORS.coral],
    ['G5', [79], NOTE_COLORS.red],
  ],
  [
    ['A5', [81], NOTE_COLORS.rose],
    ['B5', [83], NOTE_COLORS.pink],
    ['C6', [84], NOTE_COLORS.magenta],
    ['D6', [86], NOTE_COLORS.violet],
    ['E6', [88], NOTE_COLORS.purple],
  ]
);

// 14: Tubular Bells - Church chimes
export const TUBULAR_BELLS = createMapping(
  [
    ['C4', [60], NOTE_COLORS.gold],
    ['D4', [62], NOTE_COLORS.amber],
    ['E4', [64], NOTE_COLORS.silver],
    ['F4', [65], NOTE_COLORS.brown],
    ['G4', [67], NOTE_COLORS.coral],
  ],
  [
    ['A4', [69], NOTE_COLORS.red],
    ['B4', [71], NOTE_COLORS.rose],
    ['C5', [72], NOTE_COLORS.pink],
    ['D5', [74], NOTE_COLORS.magenta],
    ['E5', [76], NOTE_COLORS.purple],
  ]
);

// 15: Dulcimer - Hammered strings
export const DULCIMER = createMapping(
  [
    ['D3', [50], NOTE_COLORS.amber],
    ['A3', [57], NOTE_COLORS.gold],
    ['D4', [62], NOTE_COLORS.brown],
    ['A4', [69], NOTE_COLORS.coral],
    ['D5', [74], NOTE_COLORS.orange],
  ],
  [
    ['A5', [81], NOTE_COLORS.red],
    ['D6', [86], NOTE_COLORS.rose],
    ['G4', [67], NOTE_COLORS.pink],
    ['C5', [72], NOTE_COLORS.teal],
    ['F5', [77], NOTE_COLORS.green],
  ]
);

// ============================================
// ORGAN (16-23)
// ============================================

// 16: Drawbar Organ (Hammond B3)
export const DRAWBAR_ORGAN = createMapping(
  [
    ['C4', [48, 60, 72], NOTE_COLORS.amber],    // Full drawbar sound
    ['F4', [53, 65, 77], NOTE_COLORS.orange],
    ['G4', [55, 67, 79], NOTE_COLORS.gold],
    ['Bb4', [58, 70, 82], NOTE_COLORS.brown],
    ['D4', [50, 62, 74], NOTE_COLORS.coral],
  ],
  [
    ['Am', [57, 69, 81], NOTE_COLORS.red],
    ['Dm', [50, 62, 74], NOTE_COLORS.rose],
    ['Em', [52, 64, 76], NOTE_COLORS.teal],
    ['G7', [55, 67, 79, 77], NOTE_COLORS.green],
    ['C7', [48, 60, 72, 70], NOTE_COLORS.blue],
  ]
);

// 17: Percussive Organ
export const PERCUSSIVE_ORGAN = createMapping(
  [
    ['C4', [60, 72], NOTE_COLORS.amber],
    ['D4', [62, 74], NOTE_COLORS.orange],
    ['E4', [64, 76], NOTE_COLORS.gold],
    ['G4', [67, 79], NOTE_COLORS.brown],
    ['A4', [69, 81], NOTE_COLORS.coral],
  ],
  [
    ['C5', [72, 84], NOTE_COLORS.red],
    ['D5', [74, 86], NOTE_COLORS.rose],
    ['E5', [76, 88], NOTE_COLORS.pink],
    ['G5', [79, 91], NOTE_COLORS.magenta],
    ['A5', [81, 93], NOTE_COLORS.purple],
  ]
);

// 18: Rock Organ - Distorted
export const ROCK_ORGAN = createMapping(
  [
    ['C4', [48, 60, 64, 67], NOTE_COLORS.red],
    ['G4', [43, 55, 59, 62], NOTE_COLORS.orange],
    ['F4', [41, 53, 57, 60], NOTE_COLORS.amber],
    ['D4', [38, 50, 54, 57], NOTE_COLORS.gold],
    ['A3', [45, 57, 61, 64], NOTE_COLORS.brown],
  ],
  [
    ['E4', [40, 52, 56, 59], NOTE_COLORS.coral],
    ['Bb4', [46, 58, 62, 65], NOTE_COLORS.rose],
    ['Em', [52, 64, 67, 71], NOTE_COLORS.teal],
    ['Am', [57, 69, 72, 76], NOTE_COLORS.green],
    ['Dm', [50, 62, 65, 69], NOTE_COLORS.blue],
  ]
);

// 19: Church Organ - Majestic pipes
export const CHURCH_ORGAN = createMapping(
  [
    ['C3', [36, 48, 60, 72], NOTE_COLORS.gold],
    ['G3', [43, 55, 67, 79], NOTE_COLORS.amber],
    ['F3', [41, 53, 65, 77], NOTE_COLORS.brown],
    ['D3', [38, 50, 62, 74], NOTE_COLORS.coral],
    ['Bb2', [34, 46, 58, 70], NOTE_COLORS.orange],
  ],
  [
    ['Am', [45, 57, 69, 81], NOTE_COLORS.red],
    ['Em', [40, 52, 64, 76], NOTE_COLORS.rose],
    ['Dm', [38, 50, 62, 74], NOTE_COLORS.pink],
    ['C4', [48, 60, 72, 84], NOTE_COLORS.purple],
    ['G4', [55, 67, 79, 91], NOTE_COLORS.violet],
  ]
);

// 20: Reed Organ - Pump organ
export const REED_ORGAN = createMapping(
  [
    ['C4', [60, 72], NOTE_COLORS.brown],
    ['D4', [62, 74], NOTE_COLORS.amber],
    ['E4', [64, 76], NOTE_COLORS.gold],
    ['F4', [65, 77], NOTE_COLORS.coral],
    ['G4', [67, 79], NOTE_COLORS.orange],
  ],
  [
    ['A4', [69, 81], NOTE_COLORS.red],
    ['B4', [71, 83], NOTE_COLORS.rose],
    ['C5', [72, 84], NOTE_COLORS.pink],
    ['D5', [74, 86], NOTE_COLORS.magenta],
    ['E5', [76, 88], NOTE_COLORS.purple],
  ]
);

// 21: Accordion - French musette
export const ACCORDION = createMapping(
  [
    ['C4', [60, 64, 67], NOTE_COLORS.red],
    ['G3', [55, 59, 62], NOTE_COLORS.amber],
    ['F4', [65, 69, 72], NOTE_COLORS.orange],
    ['Am', [69, 72, 76], NOTE_COLORS.gold],
    ['Dm', [62, 65, 69], NOTE_COLORS.brown],
  ],
  [
    ['Em', [64, 67, 71], NOTE_COLORS.coral],
    ['C7', [60, 64, 67, 70], NOTE_COLORS.teal],
    ['G7', [55, 59, 62, 65], NOTE_COLORS.green],
    ['D7', [62, 66, 69, 72], NOTE_COLORS.blue],
    ['A7', [69, 73, 76, 79], NOTE_COLORS.purple],
  ]
);

// 22: Harmonica - Blues harp
export const HARMONICA = createMapping(
  [
    ['C4', [60], NOTE_COLORS.blue],
    ['D4', [62], NOTE_COLORS.teal],
    ['E4', [64], NOTE_COLORS.cyan],
    ['G4', [67], NOTE_COLORS.green],
    ['A4', [69], NOTE_COLORS.lime],
  ],
  [
    ['C5', [72], NOTE_COLORS.red],
    ['D5', [74], NOTE_COLORS.orange],
    ['E5', [76], NOTE_COLORS.amber],
    ['G5', [79], NOTE_COLORS.gold],
    ['A5', [81], NOTE_COLORS.brown],
  ]
);

// 23: Tango Accordion - Bandoneon style
export const TANGO_ACCORDION = createMapping(
  [
    ['Am', [57, 60, 64], NOTE_COLORS.red],
    ['E7', [52, 56, 59, 62], NOTE_COLORS.brown],
    ['Dm', [50, 53, 57], NOTE_COLORS.coral],
    ['G7', [55, 59, 62, 65], NOTE_COLORS.amber],
    ['C', [48, 52, 55], NOTE_COLORS.gold],
  ],
  [
    ['F', [53, 57, 60], NOTE_COLORS.orange],
    ['Bdim', [59, 62, 65], NOTE_COLORS.rose],
    ['Em', [52, 55, 59], NOTE_COLORS.teal],
    ['A7', [57, 61, 64, 67], NOTE_COLORS.green],
    ['Dm7', [50, 53, 57, 60], NOTE_COLORS.blue],
  ]
);

// ============================================
// GUITAR (24-31)
// ============================================

// 24: Acoustic Guitar Nylon - Classical
export const ACOUSTIC_GUITAR_NYLON = createMapping(
  [
    ['Em', [52, 55, 59, 64, 67, 71], NOTE_COLORS.amber],
    ['Am', [57, 60, 64, 69, 72], NOTE_COLORS.brown],
    ['Dm', [50, 57, 62, 65, 69], NOTE_COLORS.gold],
    ['G', [55, 59, 62, 67, 71, 74], NOTE_COLORS.coral],
    ['C', [48, 55, 60, 64, 67], NOTE_COLORS.orange],
  ],
  [
    ['F', [53, 57, 60, 65, 69], NOTE_COLORS.red],
    ['B7', [59, 63, 66, 69, 71], NOTE_COLORS.rose],
    ['E', [52, 56, 59, 64, 68, 71], NOTE_COLORS.teal],
    ['A', [57, 61, 64, 69, 73], NOTE_COLORS.green],
    ['D', [50, 57, 62, 66, 69], NOTE_COLORS.blue],
  ]
);

// 25: Acoustic Guitar Steel - Folk
export const ACOUSTIC_GUITAR_STEEL = createMapping(
  [
    ['G', [55, 59, 62, 67, 71, 74], NOTE_COLORS.amber],
    ['C', [48, 55, 60, 64, 67], NOTE_COLORS.gold],
    ['D', [50, 57, 62, 66, 69, 74], NOTE_COLORS.orange],
    ['Em', [52, 55, 59, 64, 67, 71], NOTE_COLORS.brown],
    ['Am', [57, 60, 64, 69, 72], NOTE_COLORS.coral],
  ],
  [
    ['F', [53, 57, 60, 65, 69, 72], NOTE_COLORS.red],
    ['Bm', [59, 62, 66, 71, 74], NOTE_COLORS.rose],
    ['A', [57, 61, 64, 69, 73], NOTE_COLORS.teal],
    ['E', [52, 56, 59, 64, 68, 71], NOTE_COLORS.green],
    ['Dm', [50, 57, 62, 65, 69], NOTE_COLORS.blue],
  ]
);

// 26: Electric Guitar Jazz - Hollow body
export const ELECTRIC_GUITAR_JAZZ = createMapping(
  [
    ['Cmaj7', [48, 55, 59, 64, 67], NOTE_COLORS.teal],
    ['Dm7', [50, 57, 60, 65, 69], NOTE_COLORS.blue],
    ['Em7', [52, 55, 59, 64, 67], NOTE_COLORS.indigo],
    ['Fmaj7', [53, 57, 60, 65, 69], NOTE_COLORS.violet],
    ['G7', [55, 59, 62, 65, 67], NOTE_COLORS.purple],
  ],
  [
    ['Am7', [57, 60, 64, 67, 72], NOTE_COLORS.magenta],
    ['Bm7b5', [59, 62, 65, 69], NOTE_COLORS.pink],
    ['Cmaj9', [48, 55, 59, 64, 74], NOTE_COLORS.rose],
    ['Dm9', [50, 57, 60, 65, 76], NOTE_COLORS.coral],
    ['G13', [55, 59, 62, 65, 69, 71], NOTE_COLORS.gold],
  ]
);

// 27: Electric Guitar Clean
export const ELECTRIC_GUITAR_CLEAN = createMapping(
  [
    ['C', [48, 55, 60, 64, 67], NOTE_COLORS.cyan],
    ['G', [55, 59, 62, 67, 71, 74], NOTE_COLORS.teal],
    ['Am', [57, 60, 64, 69, 72], NOTE_COLORS.green],
    ['F', [53, 57, 60, 65, 69, 72], NOTE_COLORS.blue],
    ['Dm', [50, 57, 62, 65, 69], NOTE_COLORS.indigo],
  ],
  [
    ['Em', [52, 55, 59, 64, 67, 71], NOTE_COLORS.violet],
    ['Bb', [58, 62, 65, 70, 74], NOTE_COLORS.purple],
    ['A', [57, 61, 64, 69, 73], NOTE_COLORS.magenta],
    ['E', [52, 56, 59, 64, 68, 71], NOTE_COLORS.pink],
    ['D', [50, 57, 62, 66, 69, 74], NOTE_COLORS.rose],
  ]
);

// 28: Electric Guitar Muted - Palm muted
export const ELECTRIC_GUITAR_MUTED = createMapping(
  [
    ['E2', [40], NOTE_COLORS.brown],
    ['A2', [45], NOTE_COLORS.amber],
    ['D3', [50], NOTE_COLORS.gold],
    ['G3', [55], NOTE_COLORS.coral],
    ['B3', [59], NOTE_COLORS.orange],
  ],
  [
    ['E3', [52], NOTE_COLORS.red],
    ['A3', [57], NOTE_COLORS.rose],
    ['D4', [62], NOTE_COLORS.pink],
    ['G4', [67], NOTE_COLORS.magenta],
    ['E4', [64], NOTE_COLORS.purple],
  ]
);

// 29: Overdriven Guitar
export const OVERDRIVEN_GUITAR = createMapping(
  [
    ['E5', [40, 52], NOTE_COLORS.red],      // Power chord E
    ['A5', [45, 57], NOTE_COLORS.orange],   // Power chord A
    ['D5', [50, 62], NOTE_COLORS.amber],    // Power chord D
    ['G5', [55, 67], NOTE_COLORS.gold],     // Power chord G
    ['B5', [59, 71], NOTE_COLORS.brown],    // Power chord B
  ],
  [
    ['C5', [48, 60], NOTE_COLORS.coral],
    ['F5', [53, 65], NOTE_COLORS.rose],
    ['Bb5', [58, 70], NOTE_COLORS.teal],
    ['Eb5', [51, 63], NOTE_COLORS.green],
    ['Ab5', [56, 68], NOTE_COLORS.blue],
  ]
);

// 30: Distortion Guitar - Heavy metal
export const DISTORTION_GUITAR = createMapping(
  [
    ['E5', [40, 47, 52], NOTE_COLORS.red],
    ['A5', [45, 52, 57], NOTE_COLORS.orange],
    ['D5', [50, 57, 62], NOTE_COLORS.amber],
    ['G5', [55, 62, 67], NOTE_COLORS.gold],
    ['C5', [48, 55, 60], NOTE_COLORS.brown],
  ],
  [
    ['F#5', [54, 61, 66], NOTE_COLORS.coral],
    ['B5', [59, 66, 71], NOTE_COLORS.rose],
    ['Eb5', [51, 58, 63], NOTE_COLORS.purple],
    ['Ab5', [56, 63, 68], NOTE_COLORS.violet],
    ['Bb5', [58, 65, 70], NOTE_COLORS.magenta],
  ]
);

// 31: Guitar Harmonics
export const GUITAR_HARMONICS = createMapping(
  [
    ['E5h', [76], NOTE_COLORS.silver],    // 12th fret harmonic
    ['B4h', [83], NOTE_COLORS.cyan],
    ['G4h', [79], NOTE_COLORS.sky],
    ['D4h', [86], NOTE_COLORS.blue],
    ['A3h', [81], NOTE_COLORS.indigo],
  ],
  [
    ['E4h', [88], NOTE_COLORS.violet],
    ['E6h', [100], NOTE_COLORS.purple],   // 5th fret harmonic
    ['B5h', [95], NOTE_COLORS.magenta],
    ['G5h', [91], NOTE_COLORS.pink],
    ['D5h', [98], NOTE_COLORS.rose],
  ]
);

// ============================================
// BASS (32-39)
// Range: E1 (28) to G4 (67)
// ============================================

// 32: Acoustic Bass - Upright
export const ACOUSTIC_BASS = createMapping(
  [
    ['E1', [28], NOTE_COLORS.indigo],
    ['A1', [33], NOTE_COLORS.blue],
    ['D2', [38], NOTE_COLORS.teal],
    ['G2', [43], NOTE_COLORS.green],
    ['C2', [36], NOTE_COLORS.cyan],
  ],
  [
    ['F2', [41], NOTE_COLORS.purple],
    ['Bb1', [34], NOTE_COLORS.violet],
    ['Eb2', [39], NOTE_COLORS.magenta],
    ['Ab1', [32], NOTE_COLORS.pink],
    ['B1', [35], NOTE_COLORS.rose],
  ]
);

// 33: Electric Bass Finger
export const ELECTRIC_BASS_FINGER = createMapping(
  [
    ['E1', [28], NOTE_COLORS.blue],
    ['A1', [33], NOTE_COLORS.indigo],
    ['D2', [38], NOTE_COLORS.violet],
    ['G2', [43], NOTE_COLORS.purple],
    ['C2', [36], NOTE_COLORS.teal],
  ],
  [
    ['F2', [41], NOTE_COLORS.green],
    ['Bb1', [34], NOTE_COLORS.cyan],
    ['Eb2', [39], NOTE_COLORS.magenta],
    ['A2', [45], NOTE_COLORS.pink],
    ['D3', [50], NOTE_COLORS.rose],
  ]
);

// 34: Electric Bass Pick
export const ELECTRIC_BASS_PICK = createMapping(
  [
    ['E1', [28], NOTE_COLORS.amber],
    ['A1', [33], NOTE_COLORS.orange],
    ['D2', [38], NOTE_COLORS.gold],
    ['G2', [43], NOTE_COLORS.brown],
    ['C2', [36], NOTE_COLORS.coral],
  ],
  [
    ['F2', [41], NOTE_COLORS.red],
    ['Bb1', [34], NOTE_COLORS.rose],
    ['E2', [40], NOTE_COLORS.pink],
    ['A2', [45], NOTE_COLORS.magenta],
    ['D3', [50], NOTE_COLORS.purple],
  ]
);

// 35: Fretless Bass
export const FRETLESS_BASS = createMapping(
  [
    ['E1', [28], NOTE_COLORS.teal],
    ['F1', [29], NOTE_COLORS.cyan],
    ['G1', [31], NOTE_COLORS.sky],
    ['A1', [33], NOTE_COLORS.blue],
    ['Bb1', [34], NOTE_COLORS.indigo],
  ],
  [
    ['C2', [36], NOTE_COLORS.violet],
    ['D2', [38], NOTE_COLORS.purple],
    ['Eb2', [39], NOTE_COLORS.magenta],
    ['F2', [41], NOTE_COLORS.pink],
    ['G2', [43], NOTE_COLORS.rose],
  ]
);

// 36: Slap Bass 1
export const SLAP_BASS_1 = createMapping(
  [
    ['E1', [28], NOTE_COLORS.red],
    ['A1', [33], NOTE_COLORS.orange],
    ['D2', [38], NOTE_COLORS.amber],
    ['G2', [43], NOTE_COLORS.gold],
    ['C2', [36], NOTE_COLORS.brown],
  ],
  [
    ['E2', [40], NOTE_COLORS.coral],
    ['A2', [45], NOTE_COLORS.rose],
    ['D3', [50], NOTE_COLORS.teal],
    ['G3', [55], NOTE_COLORS.green],
    ['C3', [48], NOTE_COLORS.blue],
  ]
);

// 37: Slap Bass 2
export const SLAP_BASS_2 = createMapping(
  [
    ['E2', [40], NOTE_COLORS.red],
    ['A2', [45], NOTE_COLORS.orange],
    ['D3', [50], NOTE_COLORS.amber],
    ['G3', [55], NOTE_COLORS.gold],
    ['C3', [48], NOTE_COLORS.brown],
  ],
  [
    ['F2', [41], NOTE_COLORS.coral],
    ['Bb2', [46], NOTE_COLORS.rose],
    ['Eb3', [51], NOTE_COLORS.teal],
    ['Ab2', [44], NOTE_COLORS.green],
    ['B2', [47], NOTE_COLORS.blue],
  ]
);

// 38: Synth Bass 1
export const SYNTH_BASS_1 = createMapping(
  [
    ['C2', [36], NOTE_COLORS.neonCyan],
    ['D2', [38], NOTE_COLORS.neonGreen],
    ['E2', [40], NOTE_COLORS.neonYellow],
    ['F2', [41], NOTE_COLORS.neonPink],
    ['G2', [43], NOTE_COLORS.neonPurple],
  ],
  [
    ['A2', [45], NOTE_COLORS.cyan],
    ['Bb2', [46], NOTE_COLORS.magenta],
    ['C3', [48], NOTE_COLORS.pink],
    ['D3', [50], NOTE_COLORS.violet],
    ['E3', [52], NOTE_COLORS.purple],
  ]
);

// 39: Synth Bass 2
export const SYNTH_BASS_2 = createMapping(
  [
    ['C1', [24], NOTE_COLORS.neonPink],
    ['E1', [28], NOTE_COLORS.neonPurple],
    ['G1', [31], NOTE_COLORS.neonCyan],
    ['Bb1', [34], NOTE_COLORS.neonGreen],
    ['C2', [36], NOTE_COLORS.neonYellow],
  ],
  [
    ['D2', [38], NOTE_COLORS.cyan],
    ['F2', [41], NOTE_COLORS.magenta],
    ['Ab2', [44], NOTE_COLORS.pink],
    ['A2', [45], NOTE_COLORS.violet],
    ['B2', [47], NOTE_COLORS.purple],
  ]
);

// ============================================
// STRINGS (40-47)
// ============================================

// 40: Violin - G3 to E7
export const VIOLIN = createMapping(
  [
    ['G3', [55], NOTE_COLORS.brown],
    ['D4', [62], NOTE_COLORS.amber],
    ['A4', [69], NOTE_COLORS.gold],
    ['E5', [76], NOTE_COLORS.coral],
    ['B4', [71], NOTE_COLORS.orange],
  ],
  [
    ['C5', [72], NOTE_COLORS.red],
    ['F5', [77], NOTE_COLORS.rose],
    ['G5', [79], NOTE_COLORS.pink],
    ['A5', [81], NOTE_COLORS.magenta],
    ['D6', [86], NOTE_COLORS.purple],
  ]
);

// 41: Viola - C3 to A6
export const VIOLA = createMapping(
  [
    ['C3', [48], NOTE_COLORS.brown],
    ['G3', [55], NOTE_COLORS.amber],
    ['D4', [62], NOTE_COLORS.gold],
    ['A4', [69], NOTE_COLORS.coral],
    ['E4', [64], NOTE_COLORS.orange],
  ],
  [
    ['B4', [71], NOTE_COLORS.red],
    ['F4', [65], NOTE_COLORS.rose],
    ['C5', [72], NOTE_COLORS.pink],
    ['G5', [79], NOTE_COLORS.magenta],
    ['D5', [74], NOTE_COLORS.purple],
  ]
);

// 42: Cello - C2 to A5
export const CELLO = createMapping(
  [
    ['C2', [36], NOTE_COLORS.brown],
    ['G2', [43], NOTE_COLORS.amber],
    ['D3', [50], NOTE_COLORS.gold],
    ['A3', [57], NOTE_COLORS.coral],
    ['E3', [52], NOTE_COLORS.orange],
  ],
  [
    ['C3', [48], NOTE_COLORS.red],
    ['G3', [55], NOTE_COLORS.rose],
    ['D4', [62], NOTE_COLORS.pink],
    ['A4', [69], NOTE_COLORS.magenta],
    ['E4', [64], NOTE_COLORS.purple],
  ]
);

// 43: Contrabass - E1 to G4
export const CONTRABASS = createMapping(
  [
    ['E1', [28], NOTE_COLORS.indigo],
    ['A1', [33], NOTE_COLORS.blue],
    ['D2', [38], NOTE_COLORS.teal],
    ['G2', [43], NOTE_COLORS.green],
    ['C2', [36], NOTE_COLORS.cyan],
  ],
  [
    ['E2', [40], NOTE_COLORS.violet],
    ['A2', [45], NOTE_COLORS.purple],
    ['D3', [50], NOTE_COLORS.magenta],
    ['G3', [55], NOTE_COLORS.pink],
    ['C3', [48], NOTE_COLORS.rose],
  ]
);

// 44: Tremolo Strings
export const TREMOLO_STRINGS = createMapping(
  [
    ['C4', [60, 64, 67], NOTE_COLORS.brown],
    ['G4', [67, 71, 74], NOTE_COLORS.amber],
    ['Am', [69, 72, 76], NOTE_COLORS.gold],
    ['F4', [65, 69, 72], NOTE_COLORS.coral],
    ['Dm', [62, 65, 69], NOTE_COLORS.orange],
  ],
  [
    ['Em', [64, 67, 71], NOTE_COLORS.red],
    ['Bb', [70, 74, 77], NOTE_COLORS.rose],
    ['Eb', [63, 67, 70], NOTE_COLORS.pink],
    ['Ab', [68, 72, 75], NOTE_COLORS.magenta],
    ['Cm', [60, 63, 67], NOTE_COLORS.purple],
  ]
);

// 45: Pizzicato Strings
export const PIZZICATO_STRINGS = createMapping(
  [
    ['C3', [48], NOTE_COLORS.amber],
    ['G3', [55], NOTE_COLORS.gold],
    ['D4', [62], NOTE_COLORS.brown],
    ['A4', [69], NOTE_COLORS.coral],
    ['E4', [64], NOTE_COLORS.orange],
  ],
  [
    ['C4', [60], NOTE_COLORS.red],
    ['G4', [67], NOTE_COLORS.rose],
    ['D5', [74], NOTE_COLORS.pink],
    ['A5', [81], NOTE_COLORS.magenta],
    ['E5', [76], NOTE_COLORS.purple],
  ]
);

// 46: Orchestral Harp
export const ORCHESTRAL_HARP = createMapping(
  [
    ['C2', [36, 48], NOTE_COLORS.gold],
    ['D2', [38, 50], NOTE_COLORS.amber],
    ['E2', [40, 52], NOTE_COLORS.silver],
    ['F2', [41, 53], NOTE_COLORS.brown],
    ['G2', [43, 55], NOTE_COLORS.coral],
  ],
  [
    ['A2', [45, 57], NOTE_COLORS.red],
    ['B2', [47, 59], NOTE_COLORS.rose],
    ['C3', [48, 60], NOTE_COLORS.pink],
    ['D3', [50, 62], NOTE_COLORS.magenta],
    ['E3', [52, 64], NOTE_COLORS.purple],
  ]
);

// 47: Timpani
export const TIMPANI = createMapping(
  [
    ['C2', [36], NOTE_COLORS.red],
    ['D2', [38], NOTE_COLORS.orange],
    ['F2', [41], NOTE_COLORS.amber],
    ['G2', [43], NOTE_COLORS.gold],
    ['A2', [45], NOTE_COLORS.brown],
  ],
  [
    ['Bb2', [46], NOTE_COLORS.coral],
    ['C3', [48], NOTE_COLORS.rose],
    ['D3', [50], NOTE_COLORS.pink],
    ['Eb3', [51], NOTE_COLORS.magenta],
    ['F3', [53], NOTE_COLORS.purple],
  ]
);

// ============================================
// ENSEMBLE (48-55)
// ============================================

// 48: String Ensemble 1
export const STRING_ENSEMBLE_1 = createMapping(
  [
    ['C', [48, 60, 64, 67, 72], NOTE_COLORS.brown],
    ['G', [43, 55, 59, 62, 67], NOTE_COLORS.amber],
    ['Am', [45, 57, 60, 64, 69], NOTE_COLORS.gold],
    ['F', [41, 53, 57, 60, 65], NOTE_COLORS.coral],
    ['Dm', [38, 50, 53, 57, 62], NOTE_COLORS.orange],
  ],
  [
    ['Em', [40, 52, 55, 59, 64], NOTE_COLORS.red],
    ['Bb', [46, 58, 62, 65, 70], NOTE_COLORS.rose],
    ['Eb', [39, 51, 55, 58, 63], NOTE_COLORS.teal],
    ['Ab', [44, 56, 60, 63, 68], NOTE_COLORS.green],
    ['Cm', [36, 48, 51, 55, 60], NOTE_COLORS.blue],
  ]
);

// 49: String Ensemble 2
export const STRING_ENSEMBLE_2 = createMapping(
  [
    ['Cmaj7', [48, 55, 60, 64, 67, 71], NOTE_COLORS.brown],
    ['Gmaj7', [43, 50, 55, 59, 62, 66], NOTE_COLORS.amber],
    ['Am7', [45, 52, 57, 60, 64, 67], NOTE_COLORS.gold],
    ['Fmaj7', [41, 48, 53, 57, 60, 64], NOTE_COLORS.coral],
    ['Dm7', [38, 45, 50, 53, 57, 60], NOTE_COLORS.orange],
  ],
  [
    ['Em7', [40, 47, 52, 55, 59, 62], NOTE_COLORS.red],
    ['Bm7', [47, 54, 59, 62, 66, 69], NOTE_COLORS.rose],
    ['Cmaj9', [48, 55, 60, 64, 67, 74], NOTE_COLORS.teal],
    ['Fmaj9', [41, 48, 53, 57, 60, 67], NOTE_COLORS.green],
    ['Am9', [45, 52, 57, 60, 64, 71], NOTE_COLORS.blue],
  ]
);

// 50: Synth Strings 1
export const SYNTH_STRINGS_1 = createMapping(
  [
    ['C', [48, 60, 64, 67, 72, 76], NOTE_COLORS.cyan],
    ['G', [43, 55, 59, 62, 67, 71], NOTE_COLORS.teal],
    ['Am', [45, 57, 60, 64, 69, 72], NOTE_COLORS.green],
    ['F', [41, 53, 57, 60, 65, 69], NOTE_COLORS.blue],
    ['Dm', [38, 50, 53, 57, 62, 65], NOTE_COLORS.indigo],
  ],
  [
    ['Em', [40, 52, 55, 59, 64, 67], NOTE_COLORS.violet],
    ['Bb', [46, 58, 62, 65, 70, 74], NOTE_COLORS.purple],
    ['Eb', [39, 51, 55, 58, 63, 67], NOTE_COLORS.magenta],
    ['Ab', [44, 56, 60, 63, 68, 72], NOTE_COLORS.pink],
    ['Cm', [36, 48, 51, 55, 60, 63], NOTE_COLORS.rose],
  ]
);

// 51: Synth Strings 2
export const SYNTH_STRINGS_2 = createMapping(
  [
    ['Cmaj7', [48, 60, 64, 67, 71, 76], NOTE_COLORS.neonCyan],
    ['Dm7', [50, 62, 65, 69, 72, 77], NOTE_COLORS.neonGreen],
    ['Em7', [52, 64, 67, 71, 74, 79], NOTE_COLORS.neonYellow],
    ['Fmaj7', [53, 65, 69, 72, 76, 81], NOTE_COLORS.neonPink],
    ['G7', [55, 67, 71, 74, 77, 83], NOTE_COLORS.neonPurple],
  ],
  [
    ['Am7', [57, 69, 72, 76, 79, 84], NOTE_COLORS.cyan],
    ['Bm7b5', [59, 71, 74, 77, 81, 86], NOTE_COLORS.magenta],
    ['Csus2', [48, 60, 62, 67, 72, 74], NOTE_COLORS.pink],
    ['Gsus4', [43, 55, 60, 62, 67, 72], NOTE_COLORS.violet],
    ['Fsus2', [41, 53, 55, 60, 65, 67], NOTE_COLORS.purple],
  ]
);

// 52: Choir Aahs
export const CHOIR_AAHS = createMapping(
  [
    ['C', [48, 55, 60, 64, 67], NOTE_COLORS.gold],
    ['G', [43, 50, 55, 59, 62], NOTE_COLORS.amber],
    ['Am', [45, 52, 57, 60, 64], NOTE_COLORS.orange],
    ['F', [41, 48, 53, 57, 60], NOTE_COLORS.brown],
    ['Dm', [38, 45, 50, 53, 57], NOTE_COLORS.coral],
  ],
  [
    ['Em', [40, 47, 52, 55, 59], NOTE_COLORS.red],
    ['Bb', [46, 53, 58, 62, 65], NOTE_COLORS.rose],
    ['Eb', [39, 46, 51, 55, 58], NOTE_COLORS.pink],
    ['Ab', [44, 51, 56, 60, 63], NOTE_COLORS.magenta],
    ['Cm', [36, 43, 48, 51, 55], NOTE_COLORS.purple],
  ]
);

// 53: Voice Oohs
export const VOICE_OOHS = createMapping(
  [
    ['C', [60, 64, 67, 72], NOTE_COLORS.pink],
    ['G', [55, 59, 62, 67], NOTE_COLORS.rose],
    ['Am', [57, 60, 64, 69], NOTE_COLORS.coral],
    ['F', [53, 57, 60, 65], NOTE_COLORS.gold],
    ['Dm', [50, 53, 57, 62], NOTE_COLORS.amber],
  ],
  [
    ['Em', [52, 55, 59, 64], NOTE_COLORS.red],
    ['Bb', [58, 62, 65, 70], NOTE_COLORS.orange],
    ['Eb', [51, 55, 58, 63], NOTE_COLORS.brown],
    ['Ab', [56, 60, 63, 68], NOTE_COLORS.teal],
    ['Cm', [48, 51, 55, 60], NOTE_COLORS.blue],
  ]
);

// 54: Synth Voice
export const SYNTH_VOICE = createMapping(
  [
    ['C5', [72, 76, 79], NOTE_COLORS.neonPink],
    ['D5', [74, 78, 81], NOTE_COLORS.neonPurple],
    ['E5', [76, 80, 83], NOTE_COLORS.neonCyan],
    ['F5', [77, 81, 84], NOTE_COLORS.neonGreen],
    ['G5', [79, 83, 86], NOTE_COLORS.neonYellow],
  ],
  [
    ['A5', [81, 85, 88], NOTE_COLORS.cyan],
    ['B5', [83, 87, 90], NOTE_COLORS.magenta],
    ['C6', [84, 88, 91], NOTE_COLORS.pink],
    ['D6', [86, 90, 93], NOTE_COLORS.violet],
    ['E6', [88, 92, 95], NOTE_COLORS.purple],
  ]
);

// 55: Orchestra Hit
export const ORCHESTRA_HIT = createMapping(
  [
    ['C', [36, 48, 60, 64, 67, 72], NOTE_COLORS.gold],
    ['Db', [37, 49, 61, 65, 68, 73], NOTE_COLORS.amber],
    ['D', [38, 50, 62, 66, 69, 74], NOTE_COLORS.orange],
    ['Eb', [39, 51, 63, 67, 70, 75], NOTE_COLORS.brown],
    ['E', [40, 52, 64, 68, 71, 76], NOTE_COLORS.coral],
  ],
  [
    ['F', [41, 53, 65, 69, 72, 77], NOTE_COLORS.red],
    ['G', [43, 55, 67, 71, 74, 79], NOTE_COLORS.rose],
    ['Ab', [44, 56, 68, 72, 75, 80], NOTE_COLORS.pink],
    ['A', [45, 57, 69, 73, 76, 81], NOTE_COLORS.magenta],
    ['Bb', [46, 58, 70, 74, 77, 82], NOTE_COLORS.purple],
  ]
);

// ============================================
// BRASS (56-63)
// ============================================

// 56: Trumpet - F#3 to D6
export const TRUMPET = createMapping(
  [
    ['C4', [60], NOTE_COLORS.gold],
    ['D4', [62], NOTE_COLORS.amber],
    ['E4', [64], NOTE_COLORS.orange],
    ['F4', [65], NOTE_COLORS.brown],
    ['G4', [67], NOTE_COLORS.coral],
  ],
  [
    ['A4', [69], NOTE_COLORS.red],
    ['Bb4', [70], NOTE_COLORS.rose],
    ['C5', [72], NOTE_COLORS.pink],
    ['D5', [74], NOTE_COLORS.magenta],
    ['E5', [76], NOTE_COLORS.purple],
  ]
);

// 57: Trombone - E2 to Bb4
export const TROMBONE = createMapping(
  [
    ['Bb2', [46], NOTE_COLORS.gold],
    ['C3', [48], NOTE_COLORS.amber],
    ['D3', [50], NOTE_COLORS.orange],
    ['Eb3', [51], NOTE_COLORS.brown],
    ['F3', [53], NOTE_COLORS.coral],
  ],
  [
    ['G3', [55], NOTE_COLORS.red],
    ['Ab3', [56], NOTE_COLORS.rose],
    ['Bb3', [58], NOTE_COLORS.pink],
    ['C4', [60], NOTE_COLORS.magenta],
    ['D4', [62], NOTE_COLORS.purple],
  ]
);

// 58: Tuba - D1 to F4
export const TUBA = createMapping(
  [
    ['C2', [36], NOTE_COLORS.indigo],
    ['D2', [38], NOTE_COLORS.blue],
    ['Eb2', [39], NOTE_COLORS.teal],
    ['F2', [41], NOTE_COLORS.green],
    ['G2', [43], NOTE_COLORS.cyan],
  ],
  [
    ['Ab2', [44], NOTE_COLORS.violet],
    ['Bb2', [46], NOTE_COLORS.purple],
    ['C3', [48], NOTE_COLORS.magenta],
    ['D3', [50], NOTE_COLORS.pink],
    ['Eb3', [51], NOTE_COLORS.rose],
  ]
);

// 59: Muted Trumpet
export const MUTED_TRUMPET = createMapping(
  [
    ['C4', [60], NOTE_COLORS.brown],
    ['Db4', [61], NOTE_COLORS.amber],
    ['Eb4', [63], NOTE_COLORS.gold],
    ['F4', [65], NOTE_COLORS.coral],
    ['G4', [67], NOTE_COLORS.orange],
  ],
  [
    ['Ab4', [68], NOTE_COLORS.red],
    ['Bb4', [70], NOTE_COLORS.rose],
    ['C5', [72], NOTE_COLORS.pink],
    ['Db5', [73], NOTE_COLORS.magenta],
    ['Eb5', [75], NOTE_COLORS.purple],
  ]
);

// 60: French Horn - B1 to F5
export const FRENCH_HORN = createMapping(
  [
    ['F3', [53], NOTE_COLORS.gold],
    ['G3', [55], NOTE_COLORS.amber],
    ['Ab3', [56], NOTE_COLORS.orange],
    ['Bb3', [58], NOTE_COLORS.brown],
    ['C4', [60], NOTE_COLORS.coral],
  ],
  [
    ['D4', [62], NOTE_COLORS.red],
    ['Eb4', [63], NOTE_COLORS.rose],
    ['F4', [65], NOTE_COLORS.pink],
    ['G4', [67], NOTE_COLORS.magenta],
    ['Ab4', [68], NOTE_COLORS.purple],
  ]
);

// 61: Brass Section
export const BRASS_SECTION = createMapping(
  [
    ['C', [48, 60, 64, 67], NOTE_COLORS.gold],
    ['G', [43, 55, 59, 62], NOTE_COLORS.amber],
    ['F', [41, 53, 57, 60], NOTE_COLORS.orange],
    ['Bb', [46, 58, 62, 65], NOTE_COLORS.brown],
    ['Eb', [39, 51, 55, 58], NOTE_COLORS.coral],
  ],
  [
    ['Ab', [44, 56, 60, 63], NOTE_COLORS.red],
    ['D', [50, 62, 66, 69], NOTE_COLORS.rose],
    ['A', [45, 57, 61, 64], NOTE_COLORS.pink],
    ['E', [40, 52, 56, 59], NOTE_COLORS.magenta],
    ['B', [47, 59, 63, 66], NOTE_COLORS.purple],
  ]
);

// 62: Synth Brass 1
export const SYNTH_BRASS_1 = createMapping(
  [
    ['C', [48, 60, 64, 67, 72], NOTE_COLORS.neonCyan],
    ['G', [43, 55, 59, 62, 67], NOTE_COLORS.neonGreen],
    ['F', [41, 53, 57, 60, 65], NOTE_COLORS.neonYellow],
    ['Bb', [46, 58, 62, 65, 70], NOTE_COLORS.neonPink],
    ['Eb', [39, 51, 55, 58, 63], NOTE_COLORS.neonPurple],
  ],
  [
    ['Ab', [44, 56, 60, 63, 68], NOTE_COLORS.cyan],
    ['D', [50, 62, 66, 69, 74], NOTE_COLORS.magenta],
    ['A', [45, 57, 61, 64, 69], NOTE_COLORS.pink],
    ['E', [40, 52, 56, 59, 64], NOTE_COLORS.violet],
    ['B', [47, 59, 63, 66, 71], NOTE_COLORS.purple],
  ]
);

// 63: Synth Brass 2
export const SYNTH_BRASS_2 = createMapping(
  [
    ['C7', [48, 60, 64, 67, 70], NOTE_COLORS.neonPink],
    ['G7', [43, 55, 59, 62, 65], NOTE_COLORS.neonPurple],
    ['F7', [41, 53, 57, 60, 63], NOTE_COLORS.neonCyan],
    ['Bb7', [46, 58, 62, 65, 68], NOTE_COLORS.neonGreen],
    ['Eb7', [39, 51, 55, 58, 61], NOTE_COLORS.neonYellow],
  ],
  [
    ['Ab7', [44, 56, 60, 63, 66], NOTE_COLORS.cyan],
    ['D7', [50, 62, 66, 69, 72], NOTE_COLORS.magenta],
    ['A7', [45, 57, 61, 64, 67], NOTE_COLORS.pink],
    ['E7', [40, 52, 56, 59, 62], NOTE_COLORS.violet],
    ['B7', [47, 59, 63, 66, 69], NOTE_COLORS.purple],
  ]
);

// ============================================
// REED (64-71)
// ============================================

// 64: Soprano Sax - Ab3 to E6
export const SOPRANO_SAX = createMapping(
  [
    ['Ab4', [68], NOTE_COLORS.gold],
    ['Bb4', [70], NOTE_COLORS.amber],
    ['C5', [72], NOTE_COLORS.orange],
    ['D5', [74], NOTE_COLORS.brown],
    ['Eb5', [75], NOTE_COLORS.coral],
  ],
  [
    ['F5', [77], NOTE_COLORS.red],
    ['G5', [79], NOTE_COLORS.rose],
    ['Ab5', [80], NOTE_COLORS.pink],
    ['Bb5', [82], NOTE_COLORS.magenta],
    ['C6', [84], NOTE_COLORS.purple],
  ]
);

// 65: Alto Sax - Db3 to Ab5
export const ALTO_SAX = createMapping(
  [
    ['Db4', [61], NOTE_COLORS.gold],
    ['Eb4', [63], NOTE_COLORS.amber],
    ['F4', [65], NOTE_COLORS.orange],
    ['G4', [67], NOTE_COLORS.brown],
    ['Ab4', [68], NOTE_COLORS.coral],
  ],
  [
    ['Bb4', [70], NOTE_COLORS.red],
    ['C5', [72], NOTE_COLORS.rose],
    ['Db5', [73], NOTE_COLORS.pink],
    ['Eb5', [75], NOTE_COLORS.magenta],
    ['F5', [77], NOTE_COLORS.purple],
  ]
);

// 66: Tenor Sax - Ab2 to E5
export const TENOR_SAX = createMapping(
  [
    ['Ab3', [56], NOTE_COLORS.gold],
    ['Bb3', [58], NOTE_COLORS.amber],
    ['C4', [60], NOTE_COLORS.orange],
    ['D4', [62], NOTE_COLORS.brown],
    ['Eb4', [63], NOTE_COLORS.coral],
  ],
  [
    ['F4', [65], NOTE_COLORS.red],
    ['G4', [67], NOTE_COLORS.rose],
    ['Ab4', [68], NOTE_COLORS.pink],
    ['Bb4', [70], NOTE_COLORS.magenta],
    ['C5', [72], NOTE_COLORS.purple],
  ]
);

// 67: Baritone Sax - Db2 to Ab4
export const BARITONE_SAX = createMapping(
  [
    ['Db3', [49], NOTE_COLORS.indigo],
    ['Eb3', [51], NOTE_COLORS.blue],
    ['F3', [53], NOTE_COLORS.teal],
    ['G3', [55], NOTE_COLORS.green],
    ['Ab3', [56], NOTE_COLORS.cyan],
  ],
  [
    ['Bb3', [58], NOTE_COLORS.violet],
    ['C4', [60], NOTE_COLORS.purple],
    ['Db4', [61], NOTE_COLORS.magenta],
    ['Eb4', [63], NOTE_COLORS.pink],
    ['F4', [65], NOTE_COLORS.rose],
  ]
);

// 68: Oboe - Bb3 to A6
export const OBOE = createMapping(
  [
    ['C4', [60], NOTE_COLORS.brown],
    ['D4', [62], NOTE_COLORS.amber],
    ['E4', [64], NOTE_COLORS.gold],
    ['F4', [65], NOTE_COLORS.coral],
    ['G4', [67], NOTE_COLORS.orange],
  ],
  [
    ['A4', [69], NOTE_COLORS.red],
    ['B4', [71], NOTE_COLORS.rose],
    ['C5', [72], NOTE_COLORS.pink],
    ['D5', [74], NOTE_COLORS.magenta],
    ['E5', [76], NOTE_COLORS.purple],
  ]
);

// 69: English Horn - E3 to C6
export const ENGLISH_HORN = createMapping(
  [
    ['F3', [53], NOTE_COLORS.brown],
    ['G3', [55], NOTE_COLORS.amber],
    ['A3', [57], NOTE_COLORS.gold],
    ['Bb3', [58], NOTE_COLORS.coral],
    ['C4', [60], NOTE_COLORS.orange],
  ],
  [
    ['D4', [62], NOTE_COLORS.red],
    ['E4', [64], NOTE_COLORS.rose],
    ['F4', [65], NOTE_COLORS.pink],
    ['G4', [67], NOTE_COLORS.magenta],
    ['A4', [69], NOTE_COLORS.purple],
  ]
);

// 70: Bassoon - Bb1 to Eb5
export const BASSOON = createMapping(
  [
    ['Bb2', [46], NOTE_COLORS.brown],
    ['C3', [48], NOTE_COLORS.amber],
    ['D3', [50], NOTE_COLORS.gold],
    ['Eb3', [51], NOTE_COLORS.coral],
    ['F3', [53], NOTE_COLORS.orange],
  ],
  [
    ['G3', [55], NOTE_COLORS.red],
    ['A3', [57], NOTE_COLORS.rose],
    ['Bb3', [58], NOTE_COLORS.pink],
    ['C4', [60], NOTE_COLORS.magenta],
    ['D4', [62], NOTE_COLORS.purple],
  ]
);

// 71: Clarinet - D3 to Bb6
export const CLARINET = createMapping(
  [
    ['E3', [52], NOTE_COLORS.teal],
    ['F3', [53], NOTE_COLORS.cyan],
    ['G3', [55], NOTE_COLORS.sky],
    ['A3', [57], NOTE_COLORS.blue],
    ['Bb3', [58], NOTE_COLORS.indigo],
  ],
  [
    ['C4', [60], NOTE_COLORS.violet],
    ['D4', [62], NOTE_COLORS.purple],
    ['E4', [64], NOTE_COLORS.magenta],
    ['F4', [65], NOTE_COLORS.pink],
    ['G4', [67], NOTE_COLORS.rose],
  ]
);

// ============================================
// PIPE (72-79)
// ============================================

// 72: Piccolo - D5 to C8
export const PICCOLO = createMapping(
  [
    ['D5', [74], NOTE_COLORS.silver],
    ['E5', [76], NOTE_COLORS.cyan],
    ['F5', [77], NOTE_COLORS.sky],
    ['G5', [79], NOTE_COLORS.blue],
    ['A5', [81], NOTE_COLORS.indigo],
  ],
  [
    ['B5', [83], NOTE_COLORS.violet],
    ['C6', [84], NOTE_COLORS.purple],
    ['D6', [86], NOTE_COLORS.magenta],
    ['E6', [88], NOTE_COLORS.pink],
    ['F6', [89], NOTE_COLORS.rose],
  ]
);

// 73: Flute - C4 to D7
export const FLUTE = createMapping(
  [
    ['C4', [60], NOTE_COLORS.cyan],
    ['D4', [62], NOTE_COLORS.sky],
    ['E4', [64], NOTE_COLORS.blue],
    ['F4', [65], NOTE_COLORS.indigo],
    ['G4', [67], NOTE_COLORS.violet],
  ],
  [
    ['A4', [69], NOTE_COLORS.purple],
    ['B4', [71], NOTE_COLORS.magenta],
    ['C5', [72], NOTE_COLORS.pink],
    ['D5', [74], NOTE_COLORS.rose],
    ['E5', [76], NOTE_COLORS.coral],
  ]
);

// 74: Recorder
export const RECORDER = createMapping(
  [
    ['C5', [72], NOTE_COLORS.green],
    ['D5', [74], NOTE_COLORS.lime],
    ['E5', [76], NOTE_COLORS.cyan],
    ['F5', [77], NOTE_COLORS.teal],
    ['G5', [79], NOTE_COLORS.sky],
  ],
  [
    ['A5', [81], NOTE_COLORS.blue],
    ['B5', [83], NOTE_COLORS.indigo],
    ['C6', [84], NOTE_COLORS.violet],
    ['D6', [86], NOTE_COLORS.purple],
    ['E6', [88], NOTE_COLORS.magenta],
  ]
);

// 75: Pan Flute
export const PAN_FLUTE = createMapping(
  [
    ['G4', [67], NOTE_COLORS.brown],
    ['A4', [69], NOTE_COLORS.amber],
    ['B4', [71], NOTE_COLORS.gold],
    ['C5', [72], NOTE_COLORS.coral],
    ['D5', [74], NOTE_COLORS.orange],
  ],
  [
    ['E5', [76], NOTE_COLORS.red],
    ['F5', [77], NOTE_COLORS.rose],
    ['G5', [79], NOTE_COLORS.pink],
    ['A5', [81], NOTE_COLORS.magenta],
    ['B5', [83], NOTE_COLORS.purple],
  ]
);

// 76: Blown Bottle
export const BLOWN_BOTTLE = createMapping(
  [
    ['C4', [60], NOTE_COLORS.teal],
    ['E4', [64], NOTE_COLORS.cyan],
    ['G4', [67], NOTE_COLORS.sky],
    ['C5', [72], NOTE_COLORS.blue],
    ['E5', [76], NOTE_COLORS.indigo],
  ],
  [
    ['G5', [79], NOTE_COLORS.violet],
    ['C6', [84], NOTE_COLORS.purple],
    ['D4', [62], NOTE_COLORS.magenta],
    ['F4', [65], NOTE_COLORS.pink],
    ['A4', [69], NOTE_COLORS.rose],
  ]
);

// 77: Shakuhachi - Japanese bamboo flute
export const SHAKUHACHI = createMapping(
  [
    ['D4', [62], NOTE_COLORS.brown],
    ['F4', [65], NOTE_COLORS.amber],
    ['G4', [67], NOTE_COLORS.gold],
    ['A4', [69], NOTE_COLORS.coral],
    ['C5', [72], NOTE_COLORS.orange],
  ],
  [
    ['D5', [74], NOTE_COLORS.red],
    ['F5', [77], NOTE_COLORS.rose],
    ['G5', [79], NOTE_COLORS.pink],
    ['A5', [81], NOTE_COLORS.magenta],
    ['C6', [84], NOTE_COLORS.purple],
  ]
);

// 78: Whistle - Tin whistle
export const WHISTLE = createMapping(
  [
    ['D5', [74], NOTE_COLORS.green],
    ['E5', [76], NOTE_COLORS.lime],
    ['F#5', [78], NOTE_COLORS.cyan],
    ['G5', [79], NOTE_COLORS.teal],
    ['A5', [81], NOTE_COLORS.sky],
  ],
  [
    ['B5', [83], NOTE_COLORS.blue],
    ['C#6', [85], NOTE_COLORS.indigo],
    ['D6', [86], NOTE_COLORS.violet],
    ['E6', [88], NOTE_COLORS.purple],
    ['F#6', [90], NOTE_COLORS.magenta],
  ]
);

// 79: Ocarina
export const OCARINA = createMapping(
  [
    ['C5', [72], NOTE_COLORS.coral],
    ['D5', [74], NOTE_COLORS.orange],
    ['E5', [76], NOTE_COLORS.amber],
    ['F5', [77], NOTE_COLORS.gold],
    ['G5', [79], NOTE_COLORS.brown],
  ],
  [
    ['A5', [81], NOTE_COLORS.red],
    ['B5', [83], NOTE_COLORS.rose],
    ['C6', [84], NOTE_COLORS.pink],
    ['D6', [86], NOTE_COLORS.magenta],
    ['E6', [88], NOTE_COLORS.purple],
  ]
);

// ============================================
// SYNTH LEAD (80-87)
// ============================================

// 80: Lead 1 (Square)
export const LEAD_SQUARE = createMapping(
  [
    ['C4', [60], NOTE_COLORS.neonCyan],
    ['D4', [62], NOTE_COLORS.neonGreen],
    ['E4', [64], NOTE_COLORS.neonYellow],
    ['F4', [65], NOTE_COLORS.neonPink],
    ['G4', [67], NOTE_COLORS.neonPurple],
  ],
  [
    ['A4', [69], NOTE_COLORS.cyan],
    ['B4', [71], NOTE_COLORS.magenta],
    ['C5', [72], NOTE_COLORS.pink],
    ['D5', [74], NOTE_COLORS.violet],
    ['E5', [76], NOTE_COLORS.purple],
  ]
);

// 81: Lead 2 (Sawtooth)
export const LEAD_SAWTOOTH = createMapping(
  [
    ['C5', [72], NOTE_COLORS.neonPink],
    ['D5', [74], NOTE_COLORS.neonPurple],
    ['E5', [76], NOTE_COLORS.neonCyan],
    ['F5', [77], NOTE_COLORS.neonGreen],
    ['G5', [79], NOTE_COLORS.neonYellow],
  ],
  [
    ['A5', [81], NOTE_COLORS.cyan],
    ['B5', [83], NOTE_COLORS.magenta],
    ['C6', [84], NOTE_COLORS.pink],
    ['D6', [86], NOTE_COLORS.violet],
    ['E6', [88], NOTE_COLORS.purple],
  ]
);

// 82: Lead 3 (Calliope)
export const LEAD_CALLIOPE = createMapping(
  [
    ['C5', [72], NOTE_COLORS.gold],
    ['D5', [74], NOTE_COLORS.amber],
    ['E5', [76], NOTE_COLORS.orange],
    ['G5', [79], NOTE_COLORS.coral],
    ['A5', [81], NOTE_COLORS.red],
  ],
  [
    ['C6', [84], NOTE_COLORS.rose],
    ['D6', [86], NOTE_COLORS.pink],
    ['E6', [88], NOTE_COLORS.magenta],
    ['G6', [91], NOTE_COLORS.violet],
    ['A6', [93], NOTE_COLORS.purple],
  ]
);

// 83: Lead 4 (Chiff)
export const LEAD_CHIFF = createMapping(
  [
    ['C4', [60], NOTE_COLORS.cyan],
    ['Eb4', [63], NOTE_COLORS.teal],
    ['F4', [65], NOTE_COLORS.sky],
    ['G4', [67], NOTE_COLORS.blue],
    ['Bb4', [70], NOTE_COLORS.indigo],
  ],
  [
    ['C5', [72], NOTE_COLORS.violet],
    ['Eb5', [75], NOTE_COLORS.purple],
    ['F5', [77], NOTE_COLORS.magenta],
    ['G5', [79], NOTE_COLORS.pink],
    ['Bb5', [82], NOTE_COLORS.rose],
  ]
);

// 84: Lead 5 (Charang)
export const LEAD_CHARANG = createMapping(
  [
    ['E4', [64], NOTE_COLORS.red],
    ['A4', [69], NOTE_COLORS.orange],
    ['D5', [74], NOTE_COLORS.amber],
    ['G5', [79], NOTE_COLORS.gold],
    ['B5', [83], NOTE_COLORS.brown],
  ],
  [
    ['E5', [76], NOTE_COLORS.coral],
    ['A5', [81], NOTE_COLORS.rose],
    ['D6', [86], NOTE_COLORS.pink],
    ['G6', [91], NOTE_COLORS.magenta],
    ['B6', [95], NOTE_COLORS.purple],
  ]
);

// 85: Lead 6 (Voice)
export const LEAD_VOICE = createMapping(
  [
    ['C5', [72], NOTE_COLORS.pink],
    ['D5', [74], NOTE_COLORS.rose],
    ['E5', [76], NOTE_COLORS.coral],
    ['F5', [77], NOTE_COLORS.gold],
    ['G5', [79], NOTE_COLORS.amber],
  ],
  [
    ['A5', [81], NOTE_COLORS.orange],
    ['B5', [83], NOTE_COLORS.brown],
    ['C6', [84], NOTE_COLORS.teal],
    ['D6', [86], NOTE_COLORS.cyan],
    ['E6', [88], NOTE_COLORS.blue],
  ]
);

// 86: Lead 7 (Fifths)
export const LEAD_FIFTHS = createMapping(
  [
    ['C4+G4', [60, 67], NOTE_COLORS.neonCyan],
    ['D4+A4', [62, 69], NOTE_COLORS.neonGreen],
    ['E4+B4', [64, 71], NOTE_COLORS.neonYellow],
    ['F4+C5', [65, 72], NOTE_COLORS.neonPink],
    ['G4+D5', [67, 74], NOTE_COLORS.neonPurple],
  ],
  [
    ['A4+E5', [69, 76], NOTE_COLORS.cyan],
    ['B4+F#5', [71, 78], NOTE_COLORS.magenta],
    ['C5+G5', [72, 79], NOTE_COLORS.pink],
    ['D5+A5', [74, 81], NOTE_COLORS.violet],
    ['E5+B5', [76, 83], NOTE_COLORS.purple],
  ]
);

// 87: Lead 8 (Bass + Lead)
export const LEAD_BASS_LEAD = createMapping(
  [
    ['C2+C4', [36, 60], NOTE_COLORS.neonPink],
    ['D2+D4', [38, 62], NOTE_COLORS.neonPurple],
    ['E2+E4', [40, 64], NOTE_COLORS.neonCyan],
    ['F2+F4', [41, 65], NOTE_COLORS.neonGreen],
    ['G2+G4', [43, 67], NOTE_COLORS.neonYellow],
  ],
  [
    ['A2+A4', [45, 69], NOTE_COLORS.cyan],
    ['Bb2+Bb4', [46, 70], NOTE_COLORS.magenta],
    ['C3+C5', [48, 72], NOTE_COLORS.pink],
    ['D3+D5', [50, 74], NOTE_COLORS.violet],
    ['E3+E5', [52, 76], NOTE_COLORS.purple],
  ]
);

// ============================================
// SYNTH PAD (88-95)
// ============================================

// 88: Pad 1 (New Age)
export const PAD_NEW_AGE = createMapping(
  [
    ['Cmaj9', [48, 55, 60, 64, 67, 74], NOTE_COLORS.cyan],
    ['Gmaj9', [43, 50, 55, 59, 62, 69], NOTE_COLORS.teal],
    ['Am9', [45, 52, 57, 60, 64, 71], NOTE_COLORS.green],
    ['Fmaj9', [41, 48, 53, 57, 60, 67], NOTE_COLORS.blue],
    ['Dm9', [38, 45, 50, 53, 57, 64], NOTE_COLORS.indigo],
  ],
  [
    ['Em9', [40, 47, 52, 55, 59, 66], NOTE_COLORS.violet],
    ['Bm7b5', [47, 54, 59, 62, 65], NOTE_COLORS.purple],
    ['Csus2', [48, 55, 60, 62, 67], NOTE_COLORS.magenta],
    ['Gsus4', [43, 50, 55, 60, 62], NOTE_COLORS.pink],
    ['Asus2', [45, 52, 57, 59, 64], NOTE_COLORS.rose],
  ]
);

// 89: Pad 2 (Warm)
export const PAD_WARM = createMapping(
  [
    ['C', [36, 48, 60, 64, 67], NOTE_COLORS.amber],
    ['G', [31, 43, 55, 59, 62], NOTE_COLORS.orange],
    ['Am', [33, 45, 57, 60, 64], NOTE_COLORS.gold],
    ['F', [29, 41, 53, 57, 60], NOTE_COLORS.brown],
    ['Dm', [26, 38, 50, 53, 57], NOTE_COLORS.coral],
  ],
  [
    ['Em', [28, 40, 52, 55, 59], NOTE_COLORS.red],
    ['Bb', [34, 46, 58, 62, 65], NOTE_COLORS.rose],
    ['Eb', [27, 39, 51, 55, 58], NOTE_COLORS.pink],
    ['Ab', [32, 44, 56, 60, 63], NOTE_COLORS.magenta],
    ['Cm', [24, 36, 48, 51, 55], NOTE_COLORS.purple],
  ]
);

// 90: Pad 3 (Polysynth)
export const PAD_POLYSYNTH = createMapping(
  [
    ['Cmaj7', [48, 60, 64, 67, 71, 76], NOTE_COLORS.neonCyan],
    ['Dm7', [50, 62, 65, 69, 72, 77], NOTE_COLORS.neonGreen],
    ['Em7', [52, 64, 67, 71, 74, 79], NOTE_COLORS.neonYellow],
    ['Fmaj7', [53, 65, 69, 72, 76, 81], NOTE_COLORS.neonPink],
    ['G7', [55, 67, 71, 74, 77, 83], NOTE_COLORS.neonPurple],
  ],
  [
    ['Am7', [57, 69, 72, 76, 79, 84], NOTE_COLORS.cyan],
    ['Bm7b5', [59, 71, 74, 77, 81, 86], NOTE_COLORS.magenta],
    ['C9', [48, 60, 64, 67, 70, 74], NOTE_COLORS.pink],
    ['F9', [41, 53, 57, 60, 63, 67], NOTE_COLORS.violet],
    ['G9', [43, 55, 59, 62, 65, 69], NOTE_COLORS.purple],
  ]
);

// 91: Pad 4 (Choir)
export const PAD_CHOIR = createMapping(
  [
    ['C', [48, 55, 60, 64, 67, 72], NOTE_COLORS.gold],
    ['G', [43, 50, 55, 59, 62, 67], NOTE_COLORS.amber],
    ['Am', [45, 52, 57, 60, 64, 69], NOTE_COLORS.orange],
    ['F', [41, 48, 53, 57, 60, 65], NOTE_COLORS.brown],
    ['Dm', [38, 45, 50, 53, 57, 62], NOTE_COLORS.coral],
  ],
  [
    ['Em', [40, 47, 52, 55, 59, 64], NOTE_COLORS.red],
    ['Bb', [46, 53, 58, 62, 65, 70], NOTE_COLORS.rose],
    ['Eb', [39, 46, 51, 55, 58, 63], NOTE_COLORS.pink],
    ['Ab', [44, 51, 56, 60, 63, 68], NOTE_COLORS.magenta],
    ['Cm', [36, 43, 48, 51, 55, 60], NOTE_COLORS.purple],
  ]
);

// 92: Pad 5 (Bowed)
export const PAD_BOWED = createMapping(
  [
    ['C', [36, 48, 60, 67, 72], NOTE_COLORS.brown],
    ['G', [31, 43, 55, 62, 67], NOTE_COLORS.amber],
    ['Am', [33, 45, 57, 64, 69], NOTE_COLORS.gold],
    ['F', [29, 41, 53, 60, 65], NOTE_COLORS.coral],
    ['Dm', [26, 38, 50, 57, 62], NOTE_COLORS.orange],
  ],
  [
    ['Em', [28, 40, 52, 59, 64], NOTE_COLORS.red],
    ['Bb', [34, 46, 58, 65, 70], NOTE_COLORS.rose],
    ['Eb', [27, 39, 51, 58, 63], NOTE_COLORS.pink],
    ['Ab', [32, 44, 56, 63, 68], NOTE_COLORS.magenta],
    ['Cm', [24, 36, 48, 55, 60], NOTE_COLORS.purple],
  ]
);

// 93: Pad 6 (Metallic)
export const PAD_METALLIC = createMapping(
  [
    ['C', [60, 64, 67, 72, 76, 84], NOTE_COLORS.silver],
    ['G', [55, 59, 62, 67, 71, 79], NOTE_COLORS.cyan],
    ['Am', [57, 60, 64, 69, 72, 81], NOTE_COLORS.sky],
    ['F', [53, 57, 60, 65, 69, 77], NOTE_COLORS.blue],
    ['Dm', [50, 53, 57, 62, 65, 74], NOTE_COLORS.indigo],
  ],
  [
    ['Em', [52, 55, 59, 64, 67, 76], NOTE_COLORS.violet],
    ['Bb', [58, 62, 65, 70, 74, 82], NOTE_COLORS.purple],
    ['Eb', [51, 55, 58, 63, 67, 75], NOTE_COLORS.magenta],
    ['Ab', [56, 60, 63, 68, 72, 80], NOTE_COLORS.pink],
    ['Cm', [48, 51, 55, 60, 63, 72], NOTE_COLORS.rose],
  ]
);

// 94: Pad 7 (Halo)
export const PAD_HALO = createMapping(
  [
    ['Cmaj9', [60, 64, 67, 71, 74, 79], NOTE_COLORS.gold],
    ['Gmaj9', [55, 59, 62, 66, 69, 74], NOTE_COLORS.amber],
    ['Am9', [57, 60, 64, 67, 71, 76], NOTE_COLORS.orange],
    ['Fmaj9', [53, 57, 60, 64, 67, 72], NOTE_COLORS.brown],
    ['Dm9', [50, 53, 57, 60, 64, 69], NOTE_COLORS.coral],
  ],
  [
    ['Em9', [52, 55, 59, 62, 66, 71], NOTE_COLORS.red],
    ['Bm7b5', [59, 62, 65, 69, 71, 77], NOTE_COLORS.rose],
    ['Csus2', [60, 62, 67, 72, 74, 79], NOTE_COLORS.pink],
    ['Gsus4', [55, 60, 62, 67, 72, 74], NOTE_COLORS.magenta],
    ['Fsus2', [53, 55, 60, 65, 67, 72], NOTE_COLORS.purple],
  ]
);

// 95: Pad 8 (Sweep)
export const PAD_SWEEP = createMapping(
  [
    ['C', [36, 48, 60, 64, 67, 72, 76], NOTE_COLORS.neonPink],
    ['G', [31, 43, 55, 59, 62, 67, 71], NOTE_COLORS.neonPurple],
    ['Am', [33, 45, 57, 60, 64, 69, 72], NOTE_COLORS.neonCyan],
    ['F', [29, 41, 53, 57, 60, 65, 69], NOTE_COLORS.neonGreen],
    ['Dm', [26, 38, 50, 53, 57, 62, 65], NOTE_COLORS.neonYellow],
  ],
  [
    ['Em', [28, 40, 52, 55, 59, 64, 67], NOTE_COLORS.cyan],
    ['Bb', [34, 46, 58, 62, 65, 70, 74], NOTE_COLORS.magenta],
    ['Eb', [27, 39, 51, 55, 58, 63, 67], NOTE_COLORS.pink],
    ['Ab', [32, 44, 56, 60, 63, 68, 72], NOTE_COLORS.violet],
    ['Cm', [24, 36, 48, 51, 55, 60, 63], NOTE_COLORS.purple],
  ]
);

// ============================================
// SYNTH FX (96-103)
// ============================================

// 96: FX 1 (Rain)
export const FX_RAIN = createMapping(
  [
    ['C', [60, 67, 72, 76, 79], NOTE_COLORS.cyan],
    ['G', [55, 62, 67, 71, 74], NOTE_COLORS.teal],
    ['Am', [57, 64, 69, 72, 76], NOTE_COLORS.sky],
    ['F', [53, 60, 65, 69, 72], NOTE_COLORS.blue],
    ['Dm', [50, 57, 62, 65, 69], NOTE_COLORS.indigo],
  ],
  [
    ['Em', [52, 59, 64, 67, 71], NOTE_COLORS.violet],
    ['Bb', [58, 65, 70, 74, 77], NOTE_COLORS.purple],
    ['Eb', [51, 58, 63, 67, 70], NOTE_COLORS.magenta],
    ['Ab', [56, 63, 68, 72, 75], NOTE_COLORS.pink],
    ['Cm', [48, 55, 60, 63, 67], NOTE_COLORS.rose],
  ]
);

// 97: FX 2 (Soundtrack)
export const FX_SOUNDTRACK = createMapping(
  [
    ['Cmaj9', [48, 60, 64, 67, 71, 74], NOTE_COLORS.gold],
    ['Gmaj9', [43, 55, 59, 62, 66, 69], NOTE_COLORS.amber],
    ['Am9', [45, 57, 60, 64, 67, 71], NOTE_COLORS.orange],
    ['Fmaj9', [41, 53, 57, 60, 64, 67], NOTE_COLORS.brown],
    ['Dm9', [38, 50, 53, 57, 60, 64], NOTE_COLORS.coral],
  ],
  [
    ['Em9', [40, 52, 55, 59, 62, 66], NOTE_COLORS.red],
    ['Bbmaj9', [46, 58, 62, 65, 69, 72], NOTE_COLORS.rose],
    ['Ebmaj9', [39, 51, 55, 58, 62, 65], NOTE_COLORS.pink],
    ['Abmaj9', [44, 56, 60, 63, 67, 70], NOTE_COLORS.magenta],
    ['Cm9', [36, 48, 51, 55, 58, 62], NOTE_COLORS.purple],
  ]
);

// 98: FX 3 (Crystal)
export const FX_CRYSTAL = createMapping(
  [
    ['C6', [84], NOTE_COLORS.silver],
    ['D6', [86], NOTE_COLORS.cyan],
    ['E6', [88], NOTE_COLORS.sky],
    ['G6', [91], NOTE_COLORS.blue],
    ['A6', [93], NOTE_COLORS.indigo],
  ],
  [
    ['C7', [96], NOTE_COLORS.violet],
    ['D7', [98], NOTE_COLORS.purple],
    ['E7', [100], NOTE_COLORS.magenta],
    ['G7', [103], NOTE_COLORS.pink],
    ['A7', [105], NOTE_COLORS.rose],
  ]
);

// 99: FX 4 (Atmosphere)
export const FX_ATMOSPHERE = createMapping(
  [
    ['Csus2', [48, 50, 55, 60, 62, 67], NOTE_COLORS.cyan],
    ['Gsus2', [43, 45, 50, 55, 57, 62], NOTE_COLORS.teal],
    ['Asus2', [45, 47, 52, 57, 59, 64], NOTE_COLORS.green],
    ['Fsus2', [41, 43, 48, 53, 55, 60], NOTE_COLORS.blue],
    ['Dsus2', [38, 40, 45, 50, 52, 57], NOTE_COLORS.indigo],
  ],
  [
    ['Esus2', [40, 42, 47, 52, 54, 59], NOTE_COLORS.violet],
    ['Bbsus2', [46, 48, 53, 58, 60, 65], NOTE_COLORS.purple],
    ['Ebsus2', [39, 41, 46, 51, 53, 58], NOTE_COLORS.magenta],
    ['Absus2', [44, 46, 51, 56, 58, 63], NOTE_COLORS.pink],
    ['Csus4', [48, 53, 55, 60, 65, 67], NOTE_COLORS.rose],
  ]
);

// 100: FX 5 (Brightness)
export const FX_BRIGHTNESS = createMapping(
  [
    ['C', [72, 76, 79, 84, 88], NOTE_COLORS.neonCyan],
    ['G', [67, 71, 74, 79, 83], NOTE_COLORS.neonGreen],
    ['Am', [69, 72, 76, 81, 84], NOTE_COLORS.neonYellow],
    ['F', [65, 69, 72, 77, 81], NOTE_COLORS.neonPink],
    ['Dm', [62, 65, 69, 74, 77], NOTE_COLORS.neonPurple],
  ],
  [
    ['Em', [64, 67, 71, 76, 79], NOTE_COLORS.cyan],
    ['Bb', [70, 74, 77, 82, 86], NOTE_COLORS.magenta],
    ['Eb', [63, 67, 70, 75, 79], NOTE_COLORS.pink],
    ['Ab', [68, 72, 75, 80, 84], NOTE_COLORS.violet],
    ['Cm', [60, 63, 67, 72, 75], NOTE_COLORS.purple],
  ]
);

// 101: FX 6 (Goblins)
export const FX_GOBLINS = createMapping(
  [
    ['Cdim', [48, 51, 54, 60, 63, 66], NOTE_COLORS.brown],
    ['Ddim', [50, 53, 56, 62, 65, 68], NOTE_COLORS.amber],
    ['Edim', [52, 55, 58, 64, 67, 70], NOTE_COLORS.gold],
    ['F#dim', [54, 57, 60, 66, 69, 72], NOTE_COLORS.coral],
    ['Abdim', [56, 59, 62, 68, 71, 74], NOTE_COLORS.orange],
  ],
  [
    ['Bbdim', [58, 61, 64, 70, 73, 76], NOTE_COLORS.red],
    ['Cm', [48, 51, 55, 60, 63, 67], NOTE_COLORS.rose],
    ['Ebm', [51, 54, 58, 63, 66, 70], NOTE_COLORS.teal],
    ['F#m', [54, 57, 61, 66, 69, 73], NOTE_COLORS.green],
    ['Am', [57, 60, 64, 69, 72, 76], NOTE_COLORS.blue],
  ]
);

// 102: FX 7 (Echoes)
export const FX_ECHOES = createMapping(
  [
    ['C', [48, 60, 72, 84], NOTE_COLORS.cyan],
    ['G', [43, 55, 67, 79], NOTE_COLORS.teal],
    ['Am', [45, 57, 69, 81], NOTE_COLORS.sky],
    ['F', [41, 53, 65, 77], NOTE_COLORS.blue],
    ['Dm', [38, 50, 62, 74], NOTE_COLORS.indigo],
  ],
  [
    ['Em', [40, 52, 64, 76], NOTE_COLORS.violet],
    ['Bb', [46, 58, 70, 82], NOTE_COLORS.purple],
    ['Eb', [39, 51, 63, 75], NOTE_COLORS.magenta],
    ['Ab', [44, 56, 68, 80], NOTE_COLORS.pink],
    ['Cm', [36, 48, 60, 72], NOTE_COLORS.rose],
  ]
);

// 103: FX 8 (Sci-Fi)
export const FX_SCI_FI = createMapping(
  [
    ['C+', [48, 52, 56, 60, 64, 68], NOTE_COLORS.neonPink],
    ['D+', [50, 54, 58, 62, 66, 70], NOTE_COLORS.neonPurple],
    ['E+', [52, 56, 60, 64, 68, 72], NOTE_COLORS.neonCyan],
    ['F#+', [54, 58, 62, 66, 70, 74], NOTE_COLORS.neonGreen],
    ['Ab+', [56, 60, 64, 68, 72, 76], NOTE_COLORS.neonYellow],
  ],
  [
    ['Bb+', [58, 62, 66, 70, 74, 78], NOTE_COLORS.cyan],
    ['Cdim7', [48, 51, 54, 57, 60, 63], NOTE_COLORS.magenta],
    ['D#dim7', [51, 54, 57, 60, 63, 66], NOTE_COLORS.pink],
    ['F#dim7', [54, 57, 60, 63, 66, 69], NOTE_COLORS.violet],
    ['Adim7', [57, 60, 63, 66, 69, 72], NOTE_COLORS.purple],
  ]
);

// ============================================
// ETHNIC (104-111)
// ============================================

// 104: Sitar - Indian classical
export const SITAR = createMapping(
  [
    ['Sa', [60], NOTE_COLORS.amber],      // C (tonic)
    ['Re', [62], NOTE_COLORS.gold],       // D
    ['Ga', [64], NOTE_COLORS.orange],     // E
    ['Pa', [67], NOTE_COLORS.brown],      // G (fifth)
    ['Dha', [69], NOTE_COLORS.coral],     // A
  ],
  [
    ['Ni', [71], NOTE_COLORS.red],        // B
    ['Sa2', [72], NOTE_COLORS.rose],      // C (octave)
    ['Re2', [74], NOTE_COLORS.pink],
    ['Ga2', [76], NOTE_COLORS.magenta],
    ['Pa2', [79], NOTE_COLORS.purple],
  ]
);

// 105: Banjo
export const BANJO = createMapping(
  [
    ['G3', [55], NOTE_COLORS.amber],
    ['C4', [60], NOTE_COLORS.gold],
    ['D4', [62], NOTE_COLORS.orange],
    ['G4', [67], NOTE_COLORS.brown],
    ['B4', [71], NOTE_COLORS.coral],
  ],
  [
    ['D5', [74], NOTE_COLORS.red],
    ['G5', [79], NOTE_COLORS.rose],
    ['A4', [69], NOTE_COLORS.pink],
    ['E4', [64], NOTE_COLORS.teal],
    ['F4', [65], NOTE_COLORS.green],
  ]
);

// 106: Shamisen - Japanese
export const SHAMISEN = createMapping(
  [
    ['C4', [60], NOTE_COLORS.brown],
    ['D4', [62], NOTE_COLORS.amber],
    ['F4', [65], NOTE_COLORS.gold],
    ['G4', [67], NOTE_COLORS.coral],
    ['A4', [69], NOTE_COLORS.orange],
  ],
  [
    ['C5', [72], NOTE_COLORS.red],
    ['D5', [74], NOTE_COLORS.rose],
    ['F5', [77], NOTE_COLORS.pink],
    ['G5', [79], NOTE_COLORS.magenta],
    ['A5', [81], NOTE_COLORS.purple],
  ]
);

// 107: Koto - Japanese harp
export const KOTO = createMapping(
  [
    ['D3', [50], NOTE_COLORS.gold],
    ['G3', [55], NOTE_COLORS.amber],
    ['A3', [57], NOTE_COLORS.brown],
    ['D4', [62], NOTE_COLORS.coral],
    ['E4', [64], NOTE_COLORS.orange],
  ],
  [
    ['G4', [67], NOTE_COLORS.red],
    ['A4', [69], NOTE_COLORS.rose],
    ['D5', [74], NOTE_COLORS.pink],
    ['E5', [76], NOTE_COLORS.magenta],
    ['G5', [79], NOTE_COLORS.purple],
  ]
);

// 108: Kalimba - African thumb piano
export const KALIMBA = createMapping(
  [
    ['C5', [72], NOTE_COLORS.cyan],
    ['D5', [74], NOTE_COLORS.teal],
    ['E5', [76], NOTE_COLORS.sky],
    ['G5', [79], NOTE_COLORS.blue],
    ['A5', [81], NOTE_COLORS.indigo],
  ],
  [
    ['C6', [84], NOTE_COLORS.violet],
    ['D6', [86], NOTE_COLORS.purple],
    ['E6', [88], NOTE_COLORS.magenta],
    ['G6', [91], NOTE_COLORS.pink],
    ['A6', [93], NOTE_COLORS.rose],
  ]
);

// 109: Bagpipe
export const BAGPIPE = createMapping(
  [
    ['G3', [55], NOTE_COLORS.green],      // Drone
    ['A3', [57], NOTE_COLORS.lime],
    ['B3', [59], NOTE_COLORS.cyan],
    ['C4', [60], NOTE_COLORS.teal],
    ['D4', [62], NOTE_COLORS.sky],
  ],
  [
    ['E4', [64], NOTE_COLORS.blue],
    ['F#4', [66], NOTE_COLORS.indigo],
    ['G4', [67], NOTE_COLORS.violet],
    ['A4', [69], NOTE_COLORS.purple],
    ['B4', [71], NOTE_COLORS.magenta],
  ]
);

// 110: Fiddle
export const FIDDLE = createMapping(
  [
    ['G3', [55], NOTE_COLORS.brown],
    ['D4', [62], NOTE_COLORS.amber],
    ['A4', [69], NOTE_COLORS.gold],
    ['E5', [76], NOTE_COLORS.coral],
    ['B4', [71], NOTE_COLORS.orange],
  ],
  [
    ['C5', [72], NOTE_COLORS.red],
    ['F5', [77], NOTE_COLORS.rose],
    ['G5', [79], NOTE_COLORS.pink],
    ['A5', [81], NOTE_COLORS.magenta],
    ['D6', [86], NOTE_COLORS.purple],
  ]
);

// 111: Shanai - Indian shehnai
export const SHANAI = createMapping(
  [
    ['C4', [60], NOTE_COLORS.amber],
    ['D4', [62], NOTE_COLORS.gold],
    ['E4', [64], NOTE_COLORS.orange],
    ['G4', [67], NOTE_COLORS.brown],
    ['A4', [69], NOTE_COLORS.coral],
  ],
  [
    ['C5', [72], NOTE_COLORS.red],
    ['D5', [74], NOTE_COLORS.rose],
    ['E5', [76], NOTE_COLORS.pink],
    ['G5', [79], NOTE_COLORS.magenta],
    ['A5', [81], NOTE_COLORS.purple],
  ]
);

// ============================================
// PERCUSSIVE (112-119)
// ============================================

// 112: Tinkle Bell
export const TINKLE_BELL = createMapping(
  [
    ['C6', [84], NOTE_COLORS.silver],
    ['D6', [86], NOTE_COLORS.cyan],
    ['E6', [88], NOTE_COLORS.sky],
    ['F6', [89], NOTE_COLORS.blue],
    ['G6', [91], NOTE_COLORS.indigo],
  ],
  [
    ['A6', [93], NOTE_COLORS.violet],
    ['B6', [95], NOTE_COLORS.purple],
    ['C7', [96], NOTE_COLORS.magenta],
    ['D7', [98], NOTE_COLORS.pink],
    ['E7', [100], NOTE_COLORS.rose],
  ]
);

// 113: Agogo
export const AGOGO = createMapping(
  [
    ['G#5', [80], NOTE_COLORS.gold],
    ['Bb5', [82], NOTE_COLORS.amber],
    ['C6', [84], NOTE_COLORS.orange],
    ['D6', [86], NOTE_COLORS.brown],
    ['E6', [88], NOTE_COLORS.coral],
  ],
  [
    ['F6', [89], NOTE_COLORS.red],
    ['G6', [91], NOTE_COLORS.rose],
    ['A6', [93], NOTE_COLORS.pink],
    ['B6', [95], NOTE_COLORS.magenta],
    ['C7', [96], NOTE_COLORS.purple],
  ]
);

// 114: Steel Drums
export const STEEL_DRUMS = createMapping(
  [
    ['C4', [60], NOTE_COLORS.cyan],
    ['D4', [62], NOTE_COLORS.teal],
    ['E4', [64], NOTE_COLORS.sky],
    ['G4', [67], NOTE_COLORS.blue],
    ['A4', [69], NOTE_COLORS.indigo],
  ],
  [
    ['C5', [72], NOTE_COLORS.violet],
    ['D5', [74], NOTE_COLORS.purple],
    ['E5', [76], NOTE_COLORS.magenta],
    ['G5', [79], NOTE_COLORS.pink],
    ['A5', [81], NOTE_COLORS.rose],
  ]
);

// 115: Woodblock
export const WOODBLOCK = createMapping(
  [
    ['G#5', [80], NOTE_COLORS.brown],
    ['C6', [84], NOTE_COLORS.amber],
    ['G#6', [92], NOTE_COLORS.gold],
    ['C7', [96], NOTE_COLORS.coral],
    ['E5', [76], NOTE_COLORS.orange],
  ],
  [
    ['A5', [81], NOTE_COLORS.red],
    ['D6', [86], NOTE_COLORS.rose],
    ['F6', [89], NOTE_COLORS.pink],
    ['A6', [93], NOTE_COLORS.magenta],
    ['C8', [108], NOTE_COLORS.purple],
  ]
);

// 116: Taiko Drum
export const TAIKO_DRUM = createMapping(
  [
    ['C2', [36], NOTE_COLORS.red],
    ['D2', [38], NOTE_COLORS.orange],
    ['E2', [40], NOTE_COLORS.amber],
    ['G2', [43], NOTE_COLORS.gold],
    ['A2', [45], NOTE_COLORS.brown],
  ],
  [
    ['C3', [48], NOTE_COLORS.coral],
    ['D3', [50], NOTE_COLORS.rose],
    ['E3', [52], NOTE_COLORS.pink],
    ['G3', [55], NOTE_COLORS.magenta],
    ['A3', [57], NOTE_COLORS.purple],
  ]
);

// 117: Melodic Tom
export const MELODIC_TOM = createMapping(
  [
    ['C3', [48], NOTE_COLORS.red],
    ['D3', [50], NOTE_COLORS.orange],
    ['E3', [52], NOTE_COLORS.amber],
    ['G3', [55], NOTE_COLORS.gold],
    ['A3', [57], NOTE_COLORS.brown],
  ],
  [
    ['C4', [60], NOTE_COLORS.coral],
    ['D4', [62], NOTE_COLORS.rose],
    ['E4', [64], NOTE_COLORS.pink],
    ['G4', [67], NOTE_COLORS.magenta],
    ['A4', [69], NOTE_COLORS.purple],
  ]
);

// 118: Synth Drum
export const SYNTH_DRUM = createMapping(
  [
    ['C2', [36], NOTE_COLORS.neonCyan],
    ['D2', [38], NOTE_COLORS.neonGreen],
    ['E2', [40], NOTE_COLORS.neonYellow],
    ['G2', [43], NOTE_COLORS.neonPink],
    ['A2', [45], NOTE_COLORS.neonPurple],
  ],
  [
    ['C3', [48], NOTE_COLORS.cyan],
    ['D3', [50], NOTE_COLORS.magenta],
    ['E3', [52], NOTE_COLORS.pink],
    ['G3', [55], NOTE_COLORS.violet],
    ['A3', [57], NOTE_COLORS.purple],
  ]
);

// 119: Reverse Cymbal
export const REVERSE_CYMBAL = createMapping(
  [
    ['C4', [60], NOTE_COLORS.silver],
    ['D4', [62], NOTE_COLORS.cyan],
    ['E4', [64], NOTE_COLORS.sky],
    ['F4', [65], NOTE_COLORS.blue],
    ['G4', [67], NOTE_COLORS.indigo],
  ],
  [
    ['A4', [69], NOTE_COLORS.violet],
    ['B4', [71], NOTE_COLORS.purple],
    ['C5', [72], NOTE_COLORS.magenta],
    ['D5', [74], NOTE_COLORS.pink],
    ['E5', [76], NOTE_COLORS.rose],
  ]
);

// Export all mappings in order
export const INSTRUMENT_MAPPINGS = [
  // Piano (0-7)
  ACOUSTIC_GRAND_PIANO,
  BRIGHT_ACOUSTIC_PIANO,
  ELECTRIC_GRAND_PIANO,
  HONKY_TONK_PIANO,
  ELECTRIC_PIANO_1,
  ELECTRIC_PIANO_2,
  HARPSICHORD,
  CLAVINET,
  // Chromatic Percussion (8-15)
  CELESTA,
  GLOCKENSPIEL,
  MUSIC_BOX,
  VIBRAPHONE,
  MARIMBA,
  XYLOPHONE,
  TUBULAR_BELLS,
  DULCIMER,
  // Organ (16-23)
  DRAWBAR_ORGAN,
  PERCUSSIVE_ORGAN,
  ROCK_ORGAN,
  CHURCH_ORGAN,
  REED_ORGAN,
  ACCORDION,
  HARMONICA,
  TANGO_ACCORDION,
  // Guitar (24-31)
  ACOUSTIC_GUITAR_NYLON,
  ACOUSTIC_GUITAR_STEEL,
  ELECTRIC_GUITAR_JAZZ,
  ELECTRIC_GUITAR_CLEAN,
  ELECTRIC_GUITAR_MUTED,
  OVERDRIVEN_GUITAR,
  DISTORTION_GUITAR,
  GUITAR_HARMONICS,
  // Bass (32-39)
  ACOUSTIC_BASS,
  ELECTRIC_BASS_FINGER,
  ELECTRIC_BASS_PICK,
  FRETLESS_BASS,
  SLAP_BASS_1,
  SLAP_BASS_2,
  SYNTH_BASS_1,
  SYNTH_BASS_2,
  // Strings (40-47)
  VIOLIN,
  VIOLA,
  CELLO,
  CONTRABASS,
  TREMOLO_STRINGS,
  PIZZICATO_STRINGS,
  ORCHESTRAL_HARP,
  TIMPANI,
  // Ensemble (48-55)
  STRING_ENSEMBLE_1,
  STRING_ENSEMBLE_2,
  SYNTH_STRINGS_1,
  SYNTH_STRINGS_2,
  CHOIR_AAHS,
  VOICE_OOHS,
  SYNTH_VOICE,
  ORCHESTRA_HIT,
  // Brass (56-63)
  TRUMPET,
  TROMBONE,
  TUBA,
  MUTED_TRUMPET,
  FRENCH_HORN,
  BRASS_SECTION,
  SYNTH_BRASS_1,
  SYNTH_BRASS_2,
  // Reed (64-71)
  SOPRANO_SAX,
  ALTO_SAX,
  TENOR_SAX,
  BARITONE_SAX,
  OBOE,
  ENGLISH_HORN,
  BASSOON,
  CLARINET,
  // Pipe (72-79)
  PICCOLO,
  FLUTE,
  RECORDER,
  PAN_FLUTE,
  BLOWN_BOTTLE,
  SHAKUHACHI,
  WHISTLE,
  OCARINA,
  // Synth Lead (80-87)
  LEAD_SQUARE,
  LEAD_SAWTOOTH,
  LEAD_CALLIOPE,
  LEAD_CHIFF,
  LEAD_CHARANG,
  LEAD_VOICE,
  LEAD_FIFTHS,
  LEAD_BASS_LEAD,
  // Synth Pad (88-95)
  PAD_NEW_AGE,
  PAD_WARM,
  PAD_POLYSYNTH,
  PAD_CHOIR,
  PAD_BOWED,
  PAD_METALLIC,
  PAD_HALO,
  PAD_SWEEP,
  // Synth FX (96-103)
  FX_RAIN,
  FX_SOUNDTRACK,
  FX_CRYSTAL,
  FX_ATMOSPHERE,
  FX_BRIGHTNESS,
  FX_GOBLINS,
  FX_ECHOES,
  FX_SCI_FI,
  // Ethnic (104-111)
  SITAR,
  BANJO,
  SHAMISEN,
  KOTO,
  KALIMBA,
  BAGPIPE,
  FIDDLE,
  SHANAI,
  // Percussive (112-119)
  TINKLE_BELL,
  AGOGO,
  STEEL_DRUMS,
  WOODBLOCK,
  TAIKO_DRUM,
  MELODIC_TOM,
  SYNTH_DRUM,
  REVERSE_CYMBAL,
];
