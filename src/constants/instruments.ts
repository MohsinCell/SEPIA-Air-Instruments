// ============================================
// General MIDI Instrument Presets (0-119)
// Each instrument has unique, musically accurate note mappings
// ============================================

import type { InstrumentPreset } from '../types';
import { INSTRUMENT_MAPPINGS } from './instrumentMappings';

// Default instrument ID
export const DEFAULT_INSTRUMENT_ID = 'acoustic-grand-piano';

// Instrument definitions with unique mappings
export const INSTRUMENTS: InstrumentPreset[] = [
  // ==========================================
  // PIANO (GM 0-7)
  // ==========================================
  { id: 'acoustic-grand-piano', name: 'Acoustic Grand Piano', icon: 'piano', description: 'Classic concert grand piano with rich harmonics', category: 'piano', instrument: 0, ...INSTRUMENT_MAPPINGS[0] },
  { id: 'bright-acoustic-piano', name: 'Bright Acoustic Piano', icon: 'piano', description: 'Crisp and bright acoustic piano tone', category: 'piano', instrument: 1, ...INSTRUMENT_MAPPINGS[1] },
  { id: 'electric-grand-piano', name: 'Electric Grand Piano', icon: 'piano', description: 'Hybrid electric-acoustic grand piano', category: 'piano', instrument: 2, ...INSTRUMENT_MAPPINGS[2] },
  { id: 'honky-tonk-piano', name: 'Honky-Tonk Piano', icon: 'piano', description: 'Detuned saloon-style upright piano', category: 'piano', instrument: 3, ...INSTRUMENT_MAPPINGS[3] },
  { id: 'electric-piano-1', name: 'Electric Piano 1', icon: 'piano', description: 'Rhodes-style electric piano', category: 'piano', instrument: 4, ...INSTRUMENT_MAPPINGS[4] },
  { id: 'electric-piano-2', name: 'Electric Piano 2', icon: 'piano', description: 'DX7-style FM electric piano', category: 'piano', instrument: 5, ...INSTRUMENT_MAPPINGS[5] },
  { id: 'harpsichord', name: 'Harpsichord', icon: 'piano', description: 'Baroque plucked keyboard instrument', category: 'piano', instrument: 6, ...INSTRUMENT_MAPPINGS[6] },
  { id: 'clavinet', name: 'Clavinet', icon: 'piano', description: 'Funky electric clavichord', category: 'piano', instrument: 7, ...INSTRUMENT_MAPPINGS[7] },

  // ==========================================
  // CHROMATIC PERCUSSION (GM 8-15)
  // ==========================================
  { id: 'celesta', name: 'Celesta', icon: 'bell', description: 'Delicate bell-like keyboard', category: 'chromatic', instrument: 8, ...INSTRUMENT_MAPPINGS[8] },
  { id: 'glockenspiel', name: 'Glockenspiel', icon: 'bell', description: 'Bright metallic percussion bells', category: 'chromatic', instrument: 9, ...INSTRUMENT_MAPPINGS[9] },
  { id: 'music-box', name: 'Music Box', icon: 'bell', description: 'Delicate music box tones', category: 'chromatic', instrument: 10, ...INSTRUMENT_MAPPINGS[10] },
  { id: 'vibraphone', name: 'Vibraphone', icon: 'bell', description: 'Jazz vibraphone with motor vibrato', category: 'chromatic', instrument: 11, ...INSTRUMENT_MAPPINGS[11] },
  { id: 'marimba', name: 'Marimba', icon: 'bell', description: 'Wooden percussion marimba', category: 'chromatic', instrument: 12, ...INSTRUMENT_MAPPINGS[12] },
  { id: 'xylophone', name: 'Xylophone', icon: 'bell', description: 'Bright wooden xylophone', category: 'chromatic', instrument: 13, ...INSTRUMENT_MAPPINGS[13] },
  { id: 'tubular-bells', name: 'Tubular Bells', icon: 'bell', description: 'Orchestral chimes', category: 'chromatic', instrument: 14, ...INSTRUMENT_MAPPINGS[14] },
  { id: 'dulcimer', name: 'Dulcimer', icon: 'harp', description: 'Hammered dulcimer strings', category: 'chromatic', instrument: 15, ...INSTRUMENT_MAPPINGS[15] },

  // ==========================================
  // ORGAN (GM 16-23)
  // ==========================================
  { id: 'drawbar-organ', name: 'Drawbar Organ', icon: 'organ', description: 'Hammond-style drawbar organ', category: 'organ', instrument: 16, ...INSTRUMENT_MAPPINGS[16] },
  { id: 'percussive-organ', name: 'Percussive Organ', icon: 'organ', description: 'Organ with percussive attack', category: 'organ', instrument: 17, ...INSTRUMENT_MAPPINGS[17] },
  { id: 'rock-organ', name: 'Rock Organ', icon: 'organ', description: 'Distorted rock organ', category: 'organ', instrument: 18, ...INSTRUMENT_MAPPINGS[18] },
  { id: 'church-organ', name: 'Church Organ', icon: 'organ', description: 'Majestic pipe organ', category: 'organ', instrument: 19, ...INSTRUMENT_MAPPINGS[19] },
  { id: 'reed-organ', name: 'Reed Organ', icon: 'organ', description: 'Pump organ with reeds', category: 'organ', instrument: 20, ...INSTRUMENT_MAPPINGS[20] },
  { id: 'accordion', name: 'Accordion', icon: 'accordion', description: 'French musette accordion', category: 'organ', instrument: 21, ...INSTRUMENT_MAPPINGS[21] },
  { id: 'harmonica', name: 'Harmonica', icon: 'wind', description: 'Blues harmonica', category: 'organ', instrument: 22, ...INSTRUMENT_MAPPINGS[22] },
  { id: 'tango-accordion', name: 'Tango Accordion', icon: 'accordion', description: 'Bandoneón-style tango accordion', category: 'organ', instrument: 23, ...INSTRUMENT_MAPPINGS[23] },

  // ==========================================
  // GUITAR (GM 24-31)
  // ==========================================
  { id: 'acoustic-guitar-nylon', name: 'Acoustic Guitar (Nylon)', icon: 'guitar', description: 'Classical nylon string guitar', category: 'guitar', instrument: 24, ...INSTRUMENT_MAPPINGS[24] },
  { id: 'acoustic-guitar-steel', name: 'Acoustic Guitar (Steel)', icon: 'guitar', description: 'Steel string acoustic guitar', category: 'guitar', instrument: 25, ...INSTRUMENT_MAPPINGS[25] },
  { id: 'electric-guitar-jazz', name: 'Electric Guitar (Jazz)', icon: 'guitar', description: 'Hollow-body jazz guitar', category: 'guitar', instrument: 26, ...INSTRUMENT_MAPPINGS[26] },
  { id: 'electric-guitar-clean', name: 'Electric Guitar (Clean)', icon: 'guitar', description: 'Clean electric guitar tone', category: 'guitar', instrument: 27, ...INSTRUMENT_MAPPINGS[27] },
  { id: 'electric-guitar-muted', name: 'Electric Guitar (Muted)', icon: 'guitar', description: 'Palm-muted electric guitar', category: 'guitar', instrument: 28, ...INSTRUMENT_MAPPINGS[28] },
  { id: 'overdriven-guitar', name: 'Overdriven Guitar', icon: 'guitar', description: 'Crunchy overdriven guitar', category: 'guitar', instrument: 29, ...INSTRUMENT_MAPPINGS[29] },
  { id: 'distortion-guitar', name: 'Distortion Guitar', icon: 'guitar', description: 'Heavy distortion guitar', category: 'guitar', instrument: 30, ...INSTRUMENT_MAPPINGS[30] },
  { id: 'guitar-harmonics', name: 'Guitar Harmonics', icon: 'guitar', description: 'Natural guitar harmonics', category: 'guitar', instrument: 31, ...INSTRUMENT_MAPPINGS[31] },

  // ==========================================
  // BASS (GM 32-39)
  // ==========================================
  { id: 'acoustic-bass', name: 'Acoustic Bass', icon: 'bass', description: 'Upright double bass', category: 'bass', instrument: 32, ...INSTRUMENT_MAPPINGS[32] },
  { id: 'electric-bass-finger', name: 'Electric Bass (Finger)', icon: 'bass', description: 'Fingerstyle electric bass', category: 'bass', instrument: 33, ...INSTRUMENT_MAPPINGS[33] },
  { id: 'electric-bass-pick', name: 'Electric Bass (Pick)', icon: 'bass', description: 'Pick-style electric bass', category: 'bass', instrument: 34, ...INSTRUMENT_MAPPINGS[34] },
  { id: 'fretless-bass', name: 'Fretless Bass', icon: 'bass', description: 'Smooth fretless bass', category: 'bass', instrument: 35, ...INSTRUMENT_MAPPINGS[35] },
  { id: 'slap-bass-1', name: 'Slap Bass 1', icon: 'bass', description: 'Funky slap bass', category: 'bass', instrument: 36, ...INSTRUMENT_MAPPINGS[36] },
  { id: 'slap-bass-2', name: 'Slap Bass 2', icon: 'bass', description: 'Aggressive slap bass', category: 'bass', instrument: 37, ...INSTRUMENT_MAPPINGS[37] },
  { id: 'synth-bass-1', name: 'Synth Bass 1', icon: 'bass', description: 'Classic synth bass', category: 'bass', instrument: 38, ...INSTRUMENT_MAPPINGS[38] },
  { id: 'synth-bass-2', name: 'Synth Bass 2', icon: 'bass', description: 'Resonant synth bass', category: 'bass', instrument: 39, ...INSTRUMENT_MAPPINGS[39] },

  // ==========================================
  // STRINGS (GM 40-47)
  // ==========================================
  { id: 'violin', name: 'Violin', icon: 'violin', description: 'Solo violin', category: 'strings', instrument: 40, ...INSTRUMENT_MAPPINGS[40] },
  { id: 'viola', name: 'Viola', icon: 'violin', description: 'Solo viola', category: 'strings', instrument: 41, ...INSTRUMENT_MAPPINGS[41] },
  { id: 'cello', name: 'Cello', icon: 'violin', description: 'Solo cello', category: 'strings', instrument: 42, ...INSTRUMENT_MAPPINGS[42] },
  { id: 'contrabass', name: 'Contrabass', icon: 'violin', description: 'Orchestral double bass', category: 'strings', instrument: 43, ...INSTRUMENT_MAPPINGS[43] },
  { id: 'tremolo-strings', name: 'Tremolo Strings', icon: 'violin', description: 'Tremolo string section', category: 'strings', instrument: 44, ...INSTRUMENT_MAPPINGS[44] },
  { id: 'pizzicato-strings', name: 'Pizzicato Strings', icon: 'violin', description: 'Plucked string section', category: 'strings', instrument: 45, ...INSTRUMENT_MAPPINGS[45] },
  { id: 'orchestral-harp', name: 'Orchestral Harp', icon: 'harp', description: 'Concert pedal harp', category: 'strings', instrument: 46, ...INSTRUMENT_MAPPINGS[46] },
  { id: 'timpani', name: 'Timpani', icon: 'drum', description: 'Orchestral kettledrums', category: 'strings', instrument: 47, ...INSTRUMENT_MAPPINGS[47] },

  // ==========================================
  // ENSEMBLE (GM 48-55)
  // ==========================================
  { id: 'string-ensemble-1', name: 'String Ensemble 1', icon: 'violin', description: 'Lush string section', category: 'ensemble', instrument: 48, ...INSTRUMENT_MAPPINGS[48] },
  { id: 'string-ensemble-2', name: 'String Ensemble 2', icon: 'violin', description: 'Slower string ensemble', category: 'ensemble', instrument: 49, ...INSTRUMENT_MAPPINGS[49] },
  { id: 'synth-strings-1', name: 'Synth Strings 1', icon: 'synth', description: 'Analog synth strings', category: 'ensemble', instrument: 50, ...INSTRUMENT_MAPPINGS[50] },
  { id: 'synth-strings-2', name: 'Synth Strings 2', icon: 'synth', description: 'Digital synth strings', category: 'ensemble', instrument: 51, ...INSTRUMENT_MAPPINGS[51] },
  { id: 'choir-aahs', name: 'Choir Aahs', icon: 'voice', description: 'Vocal choir aahs', category: 'ensemble', instrument: 52, ...INSTRUMENT_MAPPINGS[52] },
  { id: 'voice-oohs', name: 'Voice Oohs', icon: 'voice', description: 'Vocal choir oohs', category: 'ensemble', instrument: 53, ...INSTRUMENT_MAPPINGS[53] },
  { id: 'synth-voice', name: 'Synth Voice', icon: 'voice', description: 'Synthetic vocal pad', category: 'ensemble', instrument: 54, ...INSTRUMENT_MAPPINGS[54] },
  { id: 'orchestra-hit', name: 'Orchestra Hit', icon: 'orchestra', description: 'Orchestral stab', category: 'ensemble', instrument: 55, ...INSTRUMENT_MAPPINGS[55] },

  // ==========================================
  // BRASS (GM 56-63)
  // ==========================================
  { id: 'trumpet', name: 'Trumpet', icon: 'trumpet', description: 'Solo trumpet', category: 'brass', instrument: 56, ...INSTRUMENT_MAPPINGS[56] },
  { id: 'trombone', name: 'Trombone', icon: 'brass', description: 'Solo trombone', category: 'brass', instrument: 57, ...INSTRUMENT_MAPPINGS[57] },
  { id: 'tuba', name: 'Tuba', icon: 'brass', description: 'Solo tuba', category: 'brass', instrument: 58, ...INSTRUMENT_MAPPINGS[58] },
  { id: 'muted-trumpet', name: 'Muted Trumpet', icon: 'trumpet', description: 'Harmon-muted trumpet', category: 'brass', instrument: 59, ...INSTRUMENT_MAPPINGS[59] },
  { id: 'french-horn', name: 'French Horn', icon: 'brass', description: 'Solo French horn', category: 'brass', instrument: 60, ...INSTRUMENT_MAPPINGS[60] },
  { id: 'brass-section', name: 'Brass Section', icon: 'brass', description: 'Full brass section', category: 'brass', instrument: 61, ...INSTRUMENT_MAPPINGS[61] },
  { id: 'synth-brass-1', name: 'Synth Brass 1', icon: 'synth', description: 'Analog synth brass', category: 'brass', instrument: 62, ...INSTRUMENT_MAPPINGS[62] },
  { id: 'synth-brass-2', name: 'Synth Brass 2', icon: 'synth', description: 'Digital synth brass', category: 'brass', instrument: 63, ...INSTRUMENT_MAPPINGS[63] },

  // ==========================================
  // REED (GM 64-71)
  // ==========================================
  { id: 'soprano-sax', name: 'Soprano Sax', icon: 'sax', description: 'Soprano saxophone', category: 'reed', instrument: 64, ...INSTRUMENT_MAPPINGS[64] },
  { id: 'alto-sax', name: 'Alto Sax', icon: 'sax', description: 'Alto saxophone', category: 'reed', instrument: 65, ...INSTRUMENT_MAPPINGS[65] },
  { id: 'tenor-sax', name: 'Tenor Sax', icon: 'sax', description: 'Tenor saxophone', category: 'reed', instrument: 66, ...INSTRUMENT_MAPPINGS[66] },
  { id: 'baritone-sax', name: 'Baritone Sax', icon: 'sax', description: 'Baritone saxophone', category: 'reed', instrument: 67, ...INSTRUMENT_MAPPINGS[67] },
  { id: 'oboe', name: 'Oboe', icon: 'wind', description: 'Solo oboe', category: 'reed', instrument: 68, ...INSTRUMENT_MAPPINGS[68] },
  { id: 'english-horn', name: 'English Horn', icon: 'wind', description: 'Cor anglais', category: 'reed', instrument: 69, ...INSTRUMENT_MAPPINGS[69] },
  { id: 'bassoon', name: 'Bassoon', icon: 'wind', description: 'Solo bassoon', category: 'reed', instrument: 70, ...INSTRUMENT_MAPPINGS[70] },
  { id: 'clarinet', name: 'Clarinet', icon: 'wind', description: 'Solo clarinet', category: 'reed', instrument: 71, ...INSTRUMENT_MAPPINGS[71] },

  // ==========================================
  // PIPE (GM 72-79)
  // ==========================================
  { id: 'piccolo', name: 'Piccolo', icon: 'wind', description: 'High-pitched piccolo', category: 'pipe', instrument: 72, ...INSTRUMENT_MAPPINGS[72] },
  { id: 'flute', name: 'Flute', icon: 'flute', description: 'Concert flute', category: 'pipe', instrument: 73, ...INSTRUMENT_MAPPINGS[73] },
  { id: 'recorder', name: 'Recorder', icon: 'wind', description: 'Baroque recorder', category: 'pipe', instrument: 74, ...INSTRUMENT_MAPPINGS[74] },
  { id: 'pan-flute', name: 'Pan Flute', icon: 'wind', description: 'Pan pipes', category: 'pipe', instrument: 75, ...INSTRUMENT_MAPPINGS[75] },
  { id: 'blown-bottle', name: 'Blown Bottle', icon: 'wind', description: 'Bottle blowing sound', category: 'pipe', instrument: 76, ...INSTRUMENT_MAPPINGS[76] },
  { id: 'shakuhachi', name: 'Shakuhachi', icon: 'wind', description: 'Japanese bamboo flute', category: 'pipe', instrument: 77, ...INSTRUMENT_MAPPINGS[77] },
  { id: 'whistle', name: 'Whistle', icon: 'wind', description: 'Tin whistle', category: 'pipe', instrument: 78, ...INSTRUMENT_MAPPINGS[78] },
  { id: 'ocarina', name: 'Ocarina', icon: 'wind', description: 'Clay ocarina', category: 'pipe', instrument: 79, ...INSTRUMENT_MAPPINGS[79] },

  // ==========================================
  // SYNTH LEAD (GM 80-87)
  // ==========================================
  { id: 'lead-square', name: 'Lead 1 (Square)', icon: 'synth', description: 'Square wave lead', category: 'synth-lead', instrument: 80, ...INSTRUMENT_MAPPINGS[80] },
  { id: 'lead-sawtooth', name: 'Lead 2 (Sawtooth)', icon: 'synth', description: 'Sawtooth wave lead', category: 'synth-lead', instrument: 81, ...INSTRUMENT_MAPPINGS[81] },
  { id: 'lead-calliope', name: 'Lead 3 (Calliope)', icon: 'synth', description: 'Calliope lead', category: 'synth-lead', instrument: 82, ...INSTRUMENT_MAPPINGS[82] },
  { id: 'lead-chiff', name: 'Lead 4 (Chiff)', icon: 'synth', description: 'Chiff lead', category: 'synth-lead', instrument: 83, ...INSTRUMENT_MAPPINGS[83] },
  { id: 'lead-charang', name: 'Lead 5 (Charang)', icon: 'synth', description: 'Charang lead', category: 'synth-lead', instrument: 84, ...INSTRUMENT_MAPPINGS[84] },
  { id: 'lead-voice', name: 'Lead 6 (Voice)', icon: 'synth', description: 'Voice lead', category: 'synth-lead', instrument: 85, ...INSTRUMENT_MAPPINGS[85] },
  { id: 'lead-fifths', name: 'Lead 7 (Fifths)', icon: 'synth', description: 'Fifth interval lead', category: 'synth-lead', instrument: 86, ...INSTRUMENT_MAPPINGS[86] },
  { id: 'lead-bass-lead', name: 'Lead 8 (Bass + Lead)', icon: 'synth', description: 'Bass and lead combo', category: 'synth-lead', instrument: 87, ...INSTRUMENT_MAPPINGS[87] },

  // ==========================================
  // SYNTH PAD (GM 88-95)
  // ==========================================
  { id: 'pad-new-age', name: 'Pad 1 (New Age)', icon: 'synth', description: 'New age pad', category: 'synth-pad', instrument: 88, ...INSTRUMENT_MAPPINGS[88] },
  { id: 'pad-warm', name: 'Pad 2 (Warm)', icon: 'synth', description: 'Warm analog pad', category: 'synth-pad', instrument: 89, ...INSTRUMENT_MAPPINGS[89] },
  { id: 'pad-polysynth', name: 'Pad 3 (Polysynth)', icon: 'synth', description: 'Polysynth pad', category: 'synth-pad', instrument: 90, ...INSTRUMENT_MAPPINGS[90] },
  { id: 'pad-choir', name: 'Pad 4 (Choir)', icon: 'synth', description: 'Choir pad', category: 'synth-pad', instrument: 91, ...INSTRUMENT_MAPPINGS[91] },
  { id: 'pad-bowed', name: 'Pad 5 (Bowed)', icon: 'synth', description: 'Bowed glass pad', category: 'synth-pad', instrument: 92, ...INSTRUMENT_MAPPINGS[92] },
  { id: 'pad-metallic', name: 'Pad 6 (Metallic)', icon: 'synth', description: 'Metallic pad', category: 'synth-pad', instrument: 93, ...INSTRUMENT_MAPPINGS[93] },
  { id: 'pad-halo', name: 'Pad 7 (Halo)', icon: 'synth', description: 'Halo pad', category: 'synth-pad', instrument: 94, ...INSTRUMENT_MAPPINGS[94] },
  { id: 'pad-sweep', name: 'Pad 8 (Sweep)', icon: 'synth', description: 'Sweep pad', category: 'synth-pad', instrument: 95, ...INSTRUMENT_MAPPINGS[95] },

  // ==========================================
  // SYNTH FX (GM 96-103)
  // ==========================================
  { id: 'fx-rain', name: 'FX 1 (Rain)', icon: 'fx', description: 'Rain effect', category: 'synth-fx', instrument: 96, ...INSTRUMENT_MAPPINGS[96] },
  { id: 'fx-soundtrack', name: 'FX 2 (Soundtrack)', icon: 'fx', description: 'Soundtrack texture', category: 'synth-fx', instrument: 97, ...INSTRUMENT_MAPPINGS[97] },
  { id: 'fx-crystal', name: 'FX 3 (Crystal)', icon: 'fx', description: 'Crystal texture', category: 'synth-fx', instrument: 98, ...INSTRUMENT_MAPPINGS[98] },
  { id: 'fx-atmosphere', name: 'FX 4 (Atmosphere)', icon: 'fx', description: 'Atmospheric texture', category: 'synth-fx', instrument: 99, ...INSTRUMENT_MAPPINGS[99] },
  { id: 'fx-brightness', name: 'FX 5 (Brightness)', icon: 'fx', description: 'Bright texture', category: 'synth-fx', instrument: 100, ...INSTRUMENT_MAPPINGS[100] },
  { id: 'fx-goblins', name: 'FX 6 (Goblins)', icon: 'fx', description: 'Goblin texture', category: 'synth-fx', instrument: 101, ...INSTRUMENT_MAPPINGS[101] },
  { id: 'fx-echoes', name: 'FX 7 (Echoes)', icon: 'fx', description: 'Echo texture', category: 'synth-fx', instrument: 102, ...INSTRUMENT_MAPPINGS[102] },
  { id: 'fx-sci-fi', name: 'FX 8 (Sci-Fi)', icon: 'fx', description: 'Science fiction texture', category: 'synth-fx', instrument: 103, ...INSTRUMENT_MAPPINGS[103] },

  // ==========================================
  // ETHNIC (GM 104-111)
  // ==========================================
  { id: 'sitar', name: 'Sitar', icon: 'sitar', description: 'Indian sitar', category: 'ethnic', instrument: 104, ...INSTRUMENT_MAPPINGS[104] },
  { id: 'banjo', name: 'Banjo', icon: 'banjo', description: 'American banjo', category: 'ethnic', instrument: 105, ...INSTRUMENT_MAPPINGS[105] },
  { id: 'shamisen', name: 'Shamisen', icon: 'koto', description: 'Japanese shamisen', category: 'ethnic', instrument: 106, ...INSTRUMENT_MAPPINGS[106] },
  { id: 'koto', name: 'Koto', icon: 'koto', description: 'Japanese koto', category: 'ethnic', instrument: 107, ...INSTRUMENT_MAPPINGS[107] },
  { id: 'kalimba', name: 'Kalimba', icon: 'kalimba', description: 'African thumb piano', category: 'ethnic', instrument: 108, ...INSTRUMENT_MAPPINGS[108] },
  { id: 'bagpipe', name: 'Bagpipe', icon: 'bagpipe', description: 'Scottish bagpipes', category: 'ethnic', instrument: 109, ...INSTRUMENT_MAPPINGS[109] },
  { id: 'fiddle', name: 'Fiddle', icon: 'violin', description: 'Folk fiddle', category: 'ethnic', instrument: 110, ...INSTRUMENT_MAPPINGS[110] },
  { id: 'shanai', name: 'Shanai', icon: 'wind', description: 'Indian shehnai', category: 'ethnic', instrument: 111, ...INSTRUMENT_MAPPINGS[111] },

  // ==========================================
  // PERCUSSIVE (GM 112-119)
  // ==========================================
  { id: 'tinkle-bell', name: 'Tinkle Bell', icon: 'bell', description: 'Small bell', category: 'percussive', instrument: 112, ...INSTRUMENT_MAPPINGS[112] },
  { id: 'agogo', name: 'Agogo', icon: 'percussion', description: 'Agogo bells', category: 'percussive', instrument: 113, ...INSTRUMENT_MAPPINGS[113] },
  { id: 'steel-drums', name: 'Steel Drums', icon: 'steel-drum', description: 'Caribbean steel drums', category: 'percussive', instrument: 114, ...INSTRUMENT_MAPPINGS[114] },
  { id: 'woodblock', name: 'Woodblock', icon: 'percussion', description: 'Wooden block', category: 'percussive', instrument: 115, ...INSTRUMENT_MAPPINGS[115] },
  { id: 'taiko-drum', name: 'Taiko Drum', icon: 'drum', description: 'Japanese taiko', category: 'percussive', instrument: 116, ...INSTRUMENT_MAPPINGS[116] },
  { id: 'melodic-tom', name: 'Melodic Tom', icon: 'drum', description: 'Melodic tom drums', category: 'percussive', instrument: 117, ...INSTRUMENT_MAPPINGS[117] },
  { id: 'synth-drum', name: 'Synth Drum', icon: 'drum', description: 'Electronic synth drum', category: 'percussive', instrument: 118, ...INSTRUMENT_MAPPINGS[118] },
  { id: 'reverse-cymbal', name: 'Reverse Cymbal', icon: 'drum', description: 'Reversed cymbal swell', category: 'percussive', instrument: 119, ...INSTRUMENT_MAPPINGS[119] },
];

// Category display names for UI
export const CATEGORY_NAMES: Record<string, string> = {
  'piano': 'Piano',
  'chromatic': 'Chromatic Percussion',
  'organ': 'Organ',
  'guitar': 'Guitar',
  'bass': 'Bass',
  'strings': 'Strings',
  'ensemble': 'Ensemble',
  'brass': 'Brass',
  'reed': 'Reed',
  'pipe': 'Pipe',
  'synth-lead': 'Synth Lead',
  'synth-pad': 'Synth Pad',
  'synth-fx': 'Synth FX',
  'ethnic': 'Ethnic',
  'percussive': 'Percussive',
};

// GM Category order
export const CATEGORY_ORDER = [
  'piano', 'chromatic', 'organ', 'guitar', 'bass', 'strings',
  'ensemble', 'brass', 'reed', 'pipe', 'synth-lead', 'synth-pad',
  'synth-fx', 'ethnic', 'percussive'
];
