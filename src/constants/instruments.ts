// ============================================
// General MIDI Instrument Presets (0-127)
// ============================================

import type { InstrumentPreset } from '../types';
import { CHORD_LIBRARY, NOTE_COLORS } from './chords';

// Default instrument ID
export const DEFAULT_INSTRUMENT_ID = 'piano';

// Helper finger mappings by instrument type
const PIANO_LEFT = {
  thumb: { name: 'C', notes: CHORD_LIBRARY['C'], color: NOTE_COLORS.red },
  index: { name: 'G', notes: CHORD_LIBRARY['G'], color: NOTE_COLORS.green },
  middle: { name: 'Am', notes: CHORD_LIBRARY['Am'], color: NOTE_COLORS.blue },
  ring: { name: 'F', notes: CHORD_LIBRARY['F'], color: NOTE_COLORS.amber },
  pinky: { name: 'Dm', notes: CHORD_LIBRARY['Dm'], color: NOTE_COLORS.purple },
};
const PIANO_RIGHT = {
  thumb: { name: 'Em', notes: CHORD_LIBRARY['Em'], color: NOTE_COLORS.pink },
  index: { name: 'C7', notes: CHORD_LIBRARY['C7'], color: NOTE_COLORS.teal },
  middle: { name: 'G7', notes: CHORD_LIBRARY['G7'], color: NOTE_COLORS.gold },
  ring: { name: 'Am7', notes: CHORD_LIBRARY['Am7'], color: NOTE_COLORS.violet },
  pinky: { name: 'Fmaj7', notes: CHORD_LIBRARY['Fmaj7'], color: NOTE_COLORS.cyan },
};

const CHROMATIC_LEFT = {
  thumb: { name: 'C5', notes: CHORD_LIBRARY['C5'], color: NOTE_COLORS.cyan },
  index: { name: 'D5', notes: CHORD_LIBRARY['D5'], color: NOTE_COLORS.sky },
  middle: { name: 'E5', notes: CHORD_LIBRARY['E5'], color: NOTE_COLORS.blue },
  ring: { name: 'F5', notes: CHORD_LIBRARY['F5'], color: NOTE_COLORS.indigo },
  pinky: { name: 'G5', notes: CHORD_LIBRARY['G5'], color: NOTE_COLORS.violet },
};
const CHROMATIC_RIGHT = {
  thumb: { name: 'A5', notes: CHORD_LIBRARY['A5'], color: NOTE_COLORS.purple },
  index: { name: 'B5', notes: CHORD_LIBRARY['B5'], color: NOTE_COLORS.magenta },
  middle: { name: 'C4', notes: CHORD_LIBRARY['C4'], color: NOTE_COLORS.pink },
  ring: { name: 'D4', notes: CHORD_LIBRARY['D4'], color: NOTE_COLORS.rose },
  pinky: { name: 'E4', notes: CHORD_LIBRARY['E4'], color: NOTE_COLORS.coral },
};

const ORGAN_LEFT = {
  thumb: { name: 'C', notes: CHORD_LIBRARY['C'], color: NOTE_COLORS.amber },
  index: { name: 'F', notes: CHORD_LIBRARY['F'], color: NOTE_COLORS.orange },
  middle: { name: 'G', notes: CHORD_LIBRARY['G'], color: NOTE_COLORS.gold },
  ring: { name: 'Am', notes: CHORD_LIBRARY['Am'], color: NOTE_COLORS.brown },
  pinky: { name: 'Dm', notes: CHORD_LIBRARY['Dm'], color: NOTE_COLORS.coral },
};
const ORGAN_RIGHT = {
  thumb: { name: 'Em', notes: CHORD_LIBRARY['Em'], color: NOTE_COLORS.red },
  index: { name: 'G7', notes: CHORD_LIBRARY['G7'], color: NOTE_COLORS.amber },
  middle: { name: 'C7', notes: CHORD_LIBRARY['C7'], color: NOTE_COLORS.orange },
  ring: { name: 'Fmaj7', notes: CHORD_LIBRARY['Fmaj7'], color: NOTE_COLORS.gold },
  pinky: { name: 'Am7', notes: CHORD_LIBRARY['Am7'], color: NOTE_COLORS.brown },
};

const GUITAR_LEFT = {
  thumb: { name: 'C', notes: CHORD_LIBRARY['C'], color: NOTE_COLORS.amber },
  index: { name: 'G', notes: CHORD_LIBRARY['G'], color: NOTE_COLORS.green },
  middle: { name: 'Am', notes: CHORD_LIBRARY['Am'], color: NOTE_COLORS.blue },
  ring: { name: 'F', notes: CHORD_LIBRARY['F'], color: NOTE_COLORS.orange },
  pinky: { name: 'Em', notes: CHORD_LIBRARY['Em'], color: NOTE_COLORS.teal },
};
const GUITAR_RIGHT = {
  thumb: { name: 'Dm', notes: CHORD_LIBRARY['Dm'], color: NOTE_COLORS.purple },
  index: { name: 'A', notes: CHORD_LIBRARY['A'], color: NOTE_COLORS.red },
  middle: { name: 'E', notes: CHORD_LIBRARY['E'], color: NOTE_COLORS.cyan },
  ring: { name: 'D', notes: CHORD_LIBRARY['D'], color: NOTE_COLORS.gold },
  pinky: { name: 'Bm', notes: CHORD_LIBRARY['Bm'], color: NOTE_COLORS.violet },
};

const BASS_LEFT = {
  thumb: { name: 'BassC', notes: CHORD_LIBRARY['BassC'], color: NOTE_COLORS.indigo },
  index: { name: 'BassD', notes: CHORD_LIBRARY['BassD'], color: NOTE_COLORS.blue },
  middle: { name: 'BassE', notes: CHORD_LIBRARY['BassE'], color: NOTE_COLORS.teal },
  ring: { name: 'BassF', notes: CHORD_LIBRARY['BassF'], color: NOTE_COLORS.green },
  pinky: { name: 'BassG', notes: CHORD_LIBRARY['BassG'], color: NOTE_COLORS.cyan },
};
const BASS_RIGHT = {
  thumb: { name: 'BassA', notes: CHORD_LIBRARY['BassA'], color: NOTE_COLORS.purple },
  index: { name: 'BassB', notes: CHORD_LIBRARY['BassB'], color: NOTE_COLORS.violet },
  middle: { name: 'C3', notes: CHORD_LIBRARY['C3'], color: NOTE_COLORS.magenta },
  ring: { name: 'D3', notes: CHORD_LIBRARY['D3'], color: NOTE_COLORS.pink },
  pinky: { name: 'E3', notes: CHORD_LIBRARY['E3'], color: NOTE_COLORS.rose },
};

const STRINGS_LEFT = {
  thumb: { name: 'C', notes: CHORD_LIBRARY['C'], color: NOTE_COLORS.brown },
  index: { name: 'G', notes: CHORD_LIBRARY['G'], color: NOTE_COLORS.amber },
  middle: { name: 'Am', notes: CHORD_LIBRARY['Am'], color: NOTE_COLORS.orange },
  ring: { name: 'F', notes: CHORD_LIBRARY['F'], color: NOTE_COLORS.gold },
  pinky: { name: 'Dm', notes: CHORD_LIBRARY['Dm'], color: NOTE_COLORS.coral },
};
const STRINGS_RIGHT = {
  thumb: { name: 'Em', notes: CHORD_LIBRARY['Em'], color: NOTE_COLORS.red },
  index: { name: 'Cmaj7', notes: CHORD_LIBRARY['Cmaj7'], color: NOTE_COLORS.rose },
  middle: { name: 'Fmaj7', notes: CHORD_LIBRARY['Fmaj7'], color: NOTE_COLORS.pink },
  ring: { name: 'G7', notes: CHORD_LIBRARY['G7'], color: NOTE_COLORS.magenta },
  pinky: { name: 'Am7', notes: CHORD_LIBRARY['Am7'], color: NOTE_COLORS.purple },
};

const ENSEMBLE_LEFT = {
  thumb: { name: 'C', notes: CHORD_LIBRARY['C'], color: NOTE_COLORS.gold },
  index: { name: 'G', notes: CHORD_LIBRARY['G'], color: NOTE_COLORS.amber },
  middle: { name: 'F', notes: CHORD_LIBRARY['F'], color: NOTE_COLORS.orange },
  ring: { name: 'Am', notes: CHORD_LIBRARY['Am'], color: NOTE_COLORS.coral },
  pinky: { name: 'Em', notes: CHORD_LIBRARY['Em'], color: NOTE_COLORS.red },
};
const ENSEMBLE_RIGHT = {
  thumb: { name: 'Dm', notes: CHORD_LIBRARY['Dm'], color: NOTE_COLORS.rose },
  index: { name: 'Cmaj7', notes: CHORD_LIBRARY['Cmaj7'], color: NOTE_COLORS.pink },
  middle: { name: 'Gmaj7', notes: CHORD_LIBRARY['Gmaj7'], color: NOTE_COLORS.magenta },
  ring: { name: 'Fmaj7', notes: CHORD_LIBRARY['Fmaj7'], color: NOTE_COLORS.purple },
  pinky: { name: 'Am7', notes: CHORD_LIBRARY['Am7'], color: NOTE_COLORS.violet },
};

const BRASS_LEFT = {
  thumb: { name: 'C', notes: CHORD_LIBRARY['C'], color: NOTE_COLORS.gold },
  index: { name: 'G', notes: CHORD_LIBRARY['G'], color: NOTE_COLORS.amber },
  middle: { name: 'F', notes: CHORD_LIBRARY['F'], color: NOTE_COLORS.orange },
  ring: { name: 'D', notes: CHORD_LIBRARY['D'], color: NOTE_COLORS.coral },
  pinky: { name: 'A', notes: CHORD_LIBRARY['A'], color: NOTE_COLORS.red },
};
const BRASS_RIGHT = {
  thumb: { name: 'E', notes: CHORD_LIBRARY['E'], color: NOTE_COLORS.brown },
  index: { name: 'Dm', notes: CHORD_LIBRARY['Dm'], color: NOTE_COLORS.rose },
  middle: { name: 'Am', notes: CHORD_LIBRARY['Am'], color: NOTE_COLORS.pink },
  ring: { name: 'Em', notes: CHORD_LIBRARY['Em'], color: NOTE_COLORS.magenta },
  pinky: { name: 'Bm', notes: CHORD_LIBRARY['Bm'], color: NOTE_COLORS.purple },
};

export const INSTRUMENTS: InstrumentPreset[] = [
  // ==========================================
  // PIANO (GM 0-7)
  // ==========================================
  { id: 'acoustic-grand-piano', name: 'Acoustic Grand Piano', icon: 'piano', description: 'Classic concert grand piano with rich harmonics', category: 'piano', instrument: 0, left: PIANO_LEFT, right: PIANO_RIGHT },
  { id: 'bright-acoustic-piano', name: 'Bright Acoustic Piano', icon: 'piano', description: 'Crisp and bright acoustic piano tone', category: 'piano', instrument: 1, left: PIANO_LEFT, right: PIANO_RIGHT },
  { id: 'electric-grand-piano', name: 'Electric Grand Piano', icon: 'piano', description: 'Hybrid electric-acoustic grand piano', category: 'piano', instrument: 2, left: PIANO_LEFT, right: PIANO_RIGHT },
  { id: 'honky-tonk-piano', name: 'Honky-Tonk Piano', icon: 'piano', description: 'Detuned saloon-style upright piano', category: 'piano', instrument: 3, left: PIANO_LEFT, right: PIANO_RIGHT },
  { id: 'electric-piano-1', name: 'Electric Piano 1', icon: 'piano', description: 'Rhodes-style electric piano', category: 'piano', instrument: 4, left: PIANO_LEFT, right: PIANO_RIGHT },
  { id: 'electric-piano-2', name: 'Electric Piano 2', icon: 'piano', description: 'DX7-style FM electric piano', category: 'piano', instrument: 5, left: PIANO_LEFT, right: PIANO_RIGHT },
  { id: 'harpsichord', name: 'Harpsichord', icon: 'piano', description: 'Baroque plucked keyboard instrument', category: 'piano', instrument: 6, left: PIANO_LEFT, right: PIANO_RIGHT },
  { id: 'clavinet', name: 'Clavinet', icon: 'piano', description: 'Funky electric clavichord', category: 'piano', instrument: 7, left: PIANO_LEFT, right: PIANO_RIGHT },

  // ==========================================
  // CHROMATIC PERCUSSION (GM 8-15)
  // ==========================================
  { id: 'celesta', name: 'Celesta', icon: 'bell', description: 'Delicate bell-like keyboard', category: 'chromatic', instrument: 8, left: CHROMATIC_LEFT, right: CHROMATIC_RIGHT },
  { id: 'glockenspiel', name: 'Glockenspiel', icon: 'bell', description: 'Bright metallic percussion bells', category: 'chromatic', instrument: 9, left: CHROMATIC_LEFT, right: CHROMATIC_RIGHT },
  { id: 'music-box', name: 'Music Box', icon: 'bell', description: 'Delicate music box tones', category: 'chromatic', instrument: 10, left: CHROMATIC_LEFT, right: CHROMATIC_RIGHT },
  { id: 'vibraphone', name: 'Vibraphone', icon: 'bell', description: 'Jazz vibraphone with motor vibrato', category: 'chromatic', instrument: 11, left: CHROMATIC_LEFT, right: CHROMATIC_RIGHT },
  { id: 'marimba', name: 'Marimba', icon: 'bell', description: 'Wooden percussion marimba', category: 'chromatic', instrument: 12, left: CHROMATIC_LEFT, right: CHROMATIC_RIGHT },
  { id: 'xylophone', name: 'Xylophone', icon: 'bell', description: 'Bright wooden xylophone', category: 'chromatic', instrument: 13, left: CHROMATIC_LEFT, right: CHROMATIC_RIGHT },
  { id: 'tubular-bells', name: 'Tubular Bells', icon: 'bell', description: 'Orchestral chimes', category: 'chromatic', instrument: 14, left: CHROMATIC_LEFT, right: CHROMATIC_RIGHT },
  { id: 'dulcimer', name: 'Dulcimer', icon: 'harp', description: 'Hammered dulcimer strings', category: 'chromatic', instrument: 15, left: CHROMATIC_LEFT, right: CHROMATIC_RIGHT },

  // ==========================================
  // ORGAN (GM 16-23)
  // ==========================================
  { id: 'drawbar-organ', name: 'Drawbar Organ', icon: 'organ', description: 'Hammond-style drawbar organ', category: 'organ', instrument: 16, left: ORGAN_LEFT, right: ORGAN_RIGHT },
  { id: 'percussive-organ', name: 'Percussive Organ', icon: 'organ', description: 'Organ with percussive attack', category: 'organ', instrument: 17, left: ORGAN_LEFT, right: ORGAN_RIGHT },
  { id: 'rock-organ', name: 'Rock Organ', icon: 'organ', description: 'Distorted rock organ', category: 'organ', instrument: 18, left: ORGAN_LEFT, right: ORGAN_RIGHT },
  { id: 'church-organ', name: 'Church Organ', icon: 'organ', description: 'Majestic pipe organ', category: 'organ', instrument: 19, left: ORGAN_LEFT, right: ORGAN_RIGHT },
  { id: 'reed-organ', name: 'Reed Organ', icon: 'organ', description: 'Pump organ with reeds', category: 'organ', instrument: 20, left: ORGAN_LEFT, right: ORGAN_RIGHT },
  { id: 'accordion', name: 'Accordion', icon: 'accordion', description: 'French musette accordion', category: 'organ', instrument: 21, left: ORGAN_LEFT, right: ORGAN_RIGHT },
  { id: 'harmonica', name: 'Harmonica', icon: 'wind', description: 'Blues harmonica', category: 'organ', instrument: 22, left: ORGAN_LEFT, right: ORGAN_RIGHT },
  { id: 'tango-accordion', name: 'Tango Accordion', icon: 'accordion', description: 'Bandoneón-style tango accordion', category: 'organ', instrument: 23, left: ORGAN_LEFT, right: ORGAN_RIGHT },

  // ==========================================
  // GUITAR (GM 24-31)
  // ==========================================
  { id: 'acoustic-guitar-nylon', name: 'Acoustic Guitar (Nylon)', icon: 'guitar', description: 'Classical nylon string guitar', category: 'guitar', instrument: 24, left: GUITAR_LEFT, right: GUITAR_RIGHT },
  { id: 'acoustic-guitar-steel', name: 'Acoustic Guitar (Steel)', icon: 'guitar', description: 'Steel string acoustic guitar', category: 'guitar', instrument: 25, left: GUITAR_LEFT, right: GUITAR_RIGHT },
  { id: 'electric-guitar-jazz', name: 'Electric Guitar (Jazz)', icon: 'guitar', description: 'Hollow-body jazz guitar', category: 'guitar', instrument: 26, left: GUITAR_LEFT, right: GUITAR_RIGHT },
  { id: 'electric-guitar-clean', name: 'Electric Guitar (Clean)', icon: 'guitar', description: 'Clean electric guitar tone', category: 'guitar', instrument: 27, left: GUITAR_LEFT, right: GUITAR_RIGHT },
  { id: 'electric-guitar-muted', name: 'Electric Guitar (Muted)', icon: 'guitar', description: 'Palm-muted electric guitar', category: 'guitar', instrument: 28, left: GUITAR_LEFT, right: GUITAR_RIGHT },
  { id: 'overdriven-guitar', name: 'Overdriven Guitar', icon: 'guitar', description: 'Crunchy overdriven guitar', category: 'guitar', instrument: 29, left: GUITAR_LEFT, right: GUITAR_RIGHT },
  { id: 'distortion-guitar', name: 'Distortion Guitar', icon: 'guitar', description: 'Heavy distortion guitar', category: 'guitar', instrument: 30, left: GUITAR_LEFT, right: GUITAR_RIGHT },
  { id: 'guitar-harmonics', name: 'Guitar Harmonics', icon: 'guitar', description: 'Natural guitar harmonics', category: 'guitar', instrument: 31, left: GUITAR_LEFT, right: GUITAR_RIGHT },

  // ==========================================
  // BASS (GM 32-39)
  // ==========================================
  { id: 'acoustic-bass', name: 'Acoustic Bass', icon: 'bass', description: 'Upright double bass', category: 'bass', instrument: 32, left: BASS_LEFT, right: BASS_RIGHT },
  { id: 'electric-bass-finger', name: 'Electric Bass (Finger)', icon: 'bass', description: 'Fingerstyle electric bass', category: 'bass', instrument: 33, left: BASS_LEFT, right: BASS_RIGHT },
  { id: 'electric-bass-pick', name: 'Electric Bass (Pick)', icon: 'bass', description: 'Pick-style electric bass', category: 'bass', instrument: 34, left: BASS_LEFT, right: BASS_RIGHT },
  { id: 'fretless-bass', name: 'Fretless Bass', icon: 'bass', description: 'Smooth fretless bass', category: 'bass', instrument: 35, left: BASS_LEFT, right: BASS_RIGHT },
  { id: 'slap-bass-1', name: 'Slap Bass 1', icon: 'bass', description: 'Funky slap bass', category: 'bass', instrument: 36, left: BASS_LEFT, right: BASS_RIGHT },
  { id: 'slap-bass-2', name: 'Slap Bass 2', icon: 'bass', description: 'Aggressive slap bass', category: 'bass', instrument: 37, left: BASS_LEFT, right: BASS_RIGHT },
  { id: 'synth-bass-1', name: 'Synth Bass 1', icon: 'bass', description: 'Classic synth bass', category: 'bass', instrument: 38, left: BASS_LEFT, right: BASS_RIGHT },
  { id: 'synth-bass-2', name: 'Synth Bass 2', icon: 'bass', description: 'Resonant synth bass', category: 'bass', instrument: 39, left: BASS_LEFT, right: BASS_RIGHT },

  // ==========================================
  // STRINGS (GM 40-47)
  // ==========================================
  { id: 'violin', name: 'Violin', icon: 'violin', description: 'Solo violin', category: 'strings', instrument: 40, left: STRINGS_LEFT, right: STRINGS_RIGHT },
  { id: 'viola', name: 'Viola', icon: 'violin', description: 'Solo viola', category: 'strings', instrument: 41, left: STRINGS_LEFT, right: STRINGS_RIGHT },
  { id: 'cello', name: 'Cello', icon: 'violin', description: 'Solo cello', category: 'strings', instrument: 42, left: STRINGS_LEFT, right: STRINGS_RIGHT },
  { id: 'contrabass', name: 'Contrabass', icon: 'violin', description: 'Orchestral double bass', category: 'strings', instrument: 43, left: STRINGS_LEFT, right: STRINGS_RIGHT },
  { id: 'tremolo-strings', name: 'Tremolo Strings', icon: 'violin', description: 'Tremolo string section', category: 'strings', instrument: 44, left: STRINGS_LEFT, right: STRINGS_RIGHT },
  { id: 'pizzicato-strings', name: 'Pizzicato Strings', icon: 'violin', description: 'Plucked string section', category: 'strings', instrument: 45, left: STRINGS_LEFT, right: STRINGS_RIGHT },
  { id: 'orchestral-harp', name: 'Orchestral Harp', icon: 'harp', description: 'Concert pedal harp', category: 'strings', instrument: 46, left: STRINGS_LEFT, right: STRINGS_RIGHT },
  { id: 'timpani', name: 'Timpani', icon: 'drum', description: 'Orchestral kettledrums', category: 'strings', instrument: 47, left: STRINGS_LEFT, right: STRINGS_RIGHT },

  // ==========================================
  // ENSEMBLE (GM 48-55)
  // ==========================================
  { id: 'string-ensemble-1', name: 'String Ensemble 1', icon: 'violin', description: 'Lush string section', category: 'ensemble', instrument: 48, left: ENSEMBLE_LEFT, right: ENSEMBLE_RIGHT },
  { id: 'string-ensemble-2', name: 'String Ensemble 2', icon: 'violin', description: 'Slower string ensemble', category: 'ensemble', instrument: 49, left: ENSEMBLE_LEFT, right: ENSEMBLE_RIGHT },
  { id: 'synth-strings-1', name: 'Synth Strings 1', icon: 'synth', description: 'Analog synth strings', category: 'ensemble', instrument: 50, left: ENSEMBLE_LEFT, right: ENSEMBLE_RIGHT },
  { id: 'synth-strings-2', name: 'Synth Strings 2', icon: 'synth', description: 'Digital synth strings', category: 'ensemble', instrument: 51, left: ENSEMBLE_LEFT, right: ENSEMBLE_RIGHT },
  { id: 'choir-aahs', name: 'Choir Aahs', icon: 'voice', description: 'Vocal choir aahs', category: 'ensemble', instrument: 52, left: ENSEMBLE_LEFT, right: ENSEMBLE_RIGHT },
  { id: 'voice-oohs', name: 'Voice Oohs', icon: 'voice', description: 'Vocal choir oohs', category: 'ensemble', instrument: 53, left: ENSEMBLE_LEFT, right: ENSEMBLE_RIGHT },
  { id: 'synth-voice', name: 'Synth Voice', icon: 'voice', description: 'Synthetic vocal pad', category: 'ensemble', instrument: 54, left: ENSEMBLE_LEFT, right: ENSEMBLE_RIGHT },
  { id: 'orchestra-hit', name: 'Orchestra Hit', icon: 'orchestra', description: 'Orchestral stab', category: 'ensemble', instrument: 55, left: ENSEMBLE_LEFT, right: ENSEMBLE_RIGHT },

  // ==========================================
  // BRASS (GM 56-63)
  // ==========================================
  { id: 'trumpet', name: 'Trumpet', icon: 'trumpet', description: 'Solo trumpet', category: 'brass', instrument: 56, left: BRASS_LEFT, right: BRASS_RIGHT },
  { id: 'trombone', name: 'Trombone', icon: 'brass', description: 'Solo trombone', category: 'brass', instrument: 57, left: BRASS_LEFT, right: BRASS_RIGHT },
  { id: 'tuba', name: 'Tuba', icon: 'brass', description: 'Solo tuba', category: 'brass', instrument: 58, left: BRASS_LEFT, right: BRASS_RIGHT },
  { id: 'muted-trumpet', name: 'Muted Trumpet', icon: 'trumpet', description: 'Harmon-muted trumpet', category: 'brass', instrument: 59, left: BRASS_LEFT, right: BRASS_RIGHT },
  { id: 'french-horn', name: 'French Horn', icon: 'brass', description: 'Solo French horn', category: 'brass', instrument: 60, left: BRASS_LEFT, right: BRASS_RIGHT },
  { id: 'brass-section', name: 'Brass Section', icon: 'brass', description: 'Full brass section', category: 'brass', instrument: 61, left: BRASS_LEFT, right: BRASS_RIGHT },
  { id: 'synth-brass-1', name: 'Synth Brass 1', icon: 'synth', description: 'Analog synth brass', category: 'brass', instrument: 62, left: BRASS_LEFT, right: BRASS_RIGHT },
  { id: 'synth-brass-2', name: 'Synth Brass 2', icon: 'synth', description: 'Digital synth brass', category: 'brass', instrument: 63, left: BRASS_LEFT, right: BRASS_RIGHT },

  // ==========================================
  // SOUND FX (GM 120-127) - REMOVED
  // ==========================================
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
};

// GM Category order
export const CATEGORY_ORDER = [
  'piano', 'chromatic', 'organ', 'guitar', 'bass', 'strings',
  'ensemble', 'brass'
];
