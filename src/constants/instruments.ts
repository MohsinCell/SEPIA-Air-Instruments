// ============================================
// General MIDI Instrument Presets (0-127)
// ============================================

import type { InstrumentPreset } from '../types';
import { CHORD_LIBRARY, NOTE_COLORS } from './chords';

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

const REED_LEFT = {
  thumb: { name: 'C4', notes: CHORD_LIBRARY['C4'], color: NOTE_COLORS.amber },
  index: { name: 'D4', notes: CHORD_LIBRARY['D4'], color: NOTE_COLORS.gold },
  middle: { name: 'E4', notes: CHORD_LIBRARY['E4'], color: NOTE_COLORS.orange },
  ring: { name: 'F4', notes: CHORD_LIBRARY['F4'], color: NOTE_COLORS.coral },
  pinky: { name: 'G4', notes: CHORD_LIBRARY['G4'], color: NOTE_COLORS.red },
};
const REED_RIGHT = {
  thumb: { name: 'A4', notes: CHORD_LIBRARY['A4'], color: NOTE_COLORS.brown },
  index: { name: 'B4', notes: CHORD_LIBRARY['B4'], color: NOTE_COLORS.rose },
  middle: { name: 'C5', notes: CHORD_LIBRARY['C5'], color: NOTE_COLORS.pink },
  ring: { name: 'D5', notes: CHORD_LIBRARY['D5'], color: NOTE_COLORS.magenta },
  pinky: { name: 'E5', notes: CHORD_LIBRARY['E5'], color: NOTE_COLORS.purple },
};

const PIPE_LEFT = {
  thumb: { name: 'C5', notes: CHORD_LIBRARY['C5'], color: NOTE_COLORS.sky },
  index: { name: 'D5', notes: CHORD_LIBRARY['D5'], color: NOTE_COLORS.cyan },
  middle: { name: 'E5', notes: CHORD_LIBRARY['E5'], color: NOTE_COLORS.teal },
  ring: { name: 'F5', notes: CHORD_LIBRARY['F5'], color: NOTE_COLORS.green },
  pinky: { name: 'G5', notes: CHORD_LIBRARY['G5'], color: NOTE_COLORS.lime },
};
const PIPE_RIGHT = {
  thumb: { name: 'A5', notes: CHORD_LIBRARY['A5'], color: NOTE_COLORS.blue },
  index: { name: 'B5', notes: CHORD_LIBRARY['B5'], color: NOTE_COLORS.indigo },
  middle: { name: 'C4', notes: CHORD_LIBRARY['C4'], color: NOTE_COLORS.violet },
  ring: { name: 'D4', notes: CHORD_LIBRARY['D4'], color: NOTE_COLORS.purple },
  pinky: { name: 'E4', notes: CHORD_LIBRARY['E4'], color: NOTE_COLORS.magenta },
};

const SYNTH_LEAD_LEFT = {
  thumb: { name: 'C4', notes: CHORD_LIBRARY['C4'], color: NOTE_COLORS.neonCyan },
  index: { name: 'D4', notes: CHORD_LIBRARY['D4'], color: NOTE_COLORS.neonGreen },
  middle: { name: 'E4', notes: CHORD_LIBRARY['E4'], color: NOTE_COLORS.neonYellow },
  ring: { name: 'F4', notes: CHORD_LIBRARY['F4'], color: NOTE_COLORS.neonPink },
  pinky: { name: 'G4', notes: CHORD_LIBRARY['G4'], color: NOTE_COLORS.neonPurple },
};
const SYNTH_LEAD_RIGHT = {
  thumb: { name: 'A4', notes: CHORD_LIBRARY['A4'], color: NOTE_COLORS.cyan },
  index: { name: 'B4', notes: CHORD_LIBRARY['B4'], color: NOTE_COLORS.magenta },
  middle: { name: 'C5', notes: CHORD_LIBRARY['C5'], color: NOTE_COLORS.pink },
  ring: { name: 'D5', notes: CHORD_LIBRARY['D5'], color: NOTE_COLORS.violet },
  pinky: { name: 'E5', notes: CHORD_LIBRARY['E5'], color: NOTE_COLORS.purple },
};

const SYNTH_PAD_LEFT = {
  thumb: { name: 'Cmaj7', notes: CHORD_LIBRARY['Cmaj7'], color: NOTE_COLORS.cyan },
  index: { name: 'Dm7', notes: CHORD_LIBRARY['Dm7'], color: NOTE_COLORS.teal },
  middle: { name: 'Em7', notes: CHORD_LIBRARY['Em7'], color: NOTE_COLORS.green },
  ring: { name: 'Fmaj7', notes: CHORD_LIBRARY['Fmaj7'], color: NOTE_COLORS.blue },
  pinky: { name: 'Gmaj7', notes: CHORD_LIBRARY['Gmaj7'], color: NOTE_COLORS.indigo },
};
const SYNTH_PAD_RIGHT = {
  thumb: { name: 'Am7', notes: CHORD_LIBRARY['Am7'], color: NOTE_COLORS.violet },
  index: { name: 'Bm7', notes: CHORD_LIBRARY['Bm7'], color: NOTE_COLORS.purple },
  middle: { name: 'Csus2', notes: CHORD_LIBRARY['Csus2'], color: NOTE_COLORS.magenta },
  ring: { name: 'Gsus2', notes: CHORD_LIBRARY['Gsus2'], color: NOTE_COLORS.pink },
  pinky: { name: 'Dsus2', notes: CHORD_LIBRARY['Dsus2'], color: NOTE_COLORS.rose },
};

const ETHNIC_LEFT = {
  thumb: { name: 'C4', notes: CHORD_LIBRARY['C4'], color: NOTE_COLORS.amber },
  index: { name: 'D4', notes: CHORD_LIBRARY['D4'], color: NOTE_COLORS.orange },
  middle: { name: 'E4', notes: CHORD_LIBRARY['E4'], color: NOTE_COLORS.coral },
  ring: { name: 'G4', notes: CHORD_LIBRARY['G4'], color: NOTE_COLORS.red },
  pinky: { name: 'A4', notes: CHORD_LIBRARY['A4'], color: NOTE_COLORS.brown },
};
const ETHNIC_RIGHT = {
  thumb: { name: 'C5', notes: CHORD_LIBRARY['C5'], color: NOTE_COLORS.gold },
  index: { name: 'D5', notes: CHORD_LIBRARY['D5'], color: NOTE_COLORS.amber },
  middle: { name: 'E5', notes: CHORD_LIBRARY['E5'], color: NOTE_COLORS.orange },
  ring: { name: 'G5', notes: CHORD_LIBRARY['G5'], color: NOTE_COLORS.coral },
  pinky: { name: 'A5', notes: CHORD_LIBRARY['A5'], color: NOTE_COLORS.red },
};

const PERCUSSIVE_LEFT = {
  thumb: { name: 'Kick', notes: CHORD_LIBRARY['Kick'], color: NOTE_COLORS.red },
  index: { name: 'Snare', notes: CHORD_LIBRARY['Snare'], color: NOTE_COLORS.orange },
  middle: { name: 'HiHat', notes: CHORD_LIBRARY['HiHat'], color: NOTE_COLORS.amber },
  ring: { name: 'Tom1', notes: CHORD_LIBRARY['Tom1'], color: NOTE_COLORS.gold },
  pinky: { name: 'Tom2', notes: CHORD_LIBRARY['Tom2'], color: NOTE_COLORS.brown },
};
const PERCUSSIVE_RIGHT = {
  thumb: { name: 'Crash', notes: CHORD_LIBRARY['Crash'], color: NOTE_COLORS.cyan },
  index: { name: 'Ride', notes: CHORD_LIBRARY['Ride'], color: NOTE_COLORS.teal },
  middle: { name: 'HiHatOpen', notes: CHORD_LIBRARY['HiHatOpen'], color: NOTE_COLORS.green },
  ring: { name: 'Clap', notes: CHORD_LIBRARY['Clap'], color: NOTE_COLORS.blue },
  pinky: { name: 'Cowbell', notes: CHORD_LIBRARY['Cowbell'], color: NOTE_COLORS.indigo },
};

const SFX_LEFT = {
  thumb: { name: 'C3', notes: CHORD_LIBRARY['C3'], color: NOTE_COLORS.silver },
  index: { name: 'E3', notes: CHORD_LIBRARY['E3'], color: NOTE_COLORS.cyan },
  middle: { name: 'G3', notes: CHORD_LIBRARY['G3'], color: NOTE_COLORS.teal },
  ring: { name: 'C4', notes: CHORD_LIBRARY['C4'], color: NOTE_COLORS.blue },
  pinky: { name: 'E4', notes: CHORD_LIBRARY['E4'], color: NOTE_COLORS.indigo },
};
const SFX_RIGHT = {
  thumb: { name: 'G4', notes: CHORD_LIBRARY['G4'], color: NOTE_COLORS.violet },
  index: { name: 'C5', notes: CHORD_LIBRARY['C5'], color: NOTE_COLORS.purple },
  middle: { name: 'E5', notes: CHORD_LIBRARY['E5'], color: NOTE_COLORS.magenta },
  ring: { name: 'G5', notes: CHORD_LIBRARY['G5'], color: NOTE_COLORS.pink },
  pinky: { name: 'C4', notes: CHORD_LIBRARY['C4'], color: NOTE_COLORS.rose },
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
  // REED (GM 64-71)
  // ==========================================
  { id: 'soprano-sax', name: 'Soprano Sax', icon: 'sax', description: 'Soprano saxophone', category: 'reed', instrument: 64, left: REED_LEFT, right: REED_RIGHT },
  { id: 'alto-sax', name: 'Alto Sax', icon: 'sax', description: 'Alto saxophone', category: 'reed', instrument: 65, left: REED_LEFT, right: REED_RIGHT },
  { id: 'tenor-sax', name: 'Tenor Sax', icon: 'sax', description: 'Tenor saxophone', category: 'reed', instrument: 66, left: REED_LEFT, right: REED_RIGHT },
  { id: 'baritone-sax', name: 'Baritone Sax', icon: 'sax', description: 'Baritone saxophone', category: 'reed', instrument: 67, left: REED_LEFT, right: REED_RIGHT },
  { id: 'oboe', name: 'Oboe', icon: 'wind', description: 'Solo oboe', category: 'reed', instrument: 68, left: REED_LEFT, right: REED_RIGHT },
  { id: 'english-horn', name: 'English Horn', icon: 'wind', description: 'Cor anglais', category: 'reed', instrument: 69, left: REED_LEFT, right: REED_RIGHT },
  { id: 'bassoon', name: 'Bassoon', icon: 'wind', description: 'Solo bassoon', category: 'reed', instrument: 70, left: REED_LEFT, right: REED_RIGHT },
  { id: 'clarinet', name: 'Clarinet', icon: 'wind', description: 'Solo clarinet', category: 'reed', instrument: 71, left: REED_LEFT, right: REED_RIGHT },

  // ==========================================
  // PIPE (GM 72-79)
  // ==========================================
  { id: 'piccolo', name: 'Piccolo', icon: 'wind', description: 'High-pitched piccolo', category: 'pipe', instrument: 72, left: PIPE_LEFT, right: PIPE_RIGHT },
  { id: 'flute', name: 'Flute', icon: 'flute', description: 'Concert flute', category: 'pipe', instrument: 73, left: PIPE_LEFT, right: PIPE_RIGHT },
  { id: 'recorder', name: 'Recorder', icon: 'wind', description: 'Baroque recorder', category: 'pipe', instrument: 74, left: PIPE_LEFT, right: PIPE_RIGHT },
  { id: 'pan-flute', name: 'Pan Flute', icon: 'wind', description: 'Pan pipes', category: 'pipe', instrument: 75, left: PIPE_LEFT, right: PIPE_RIGHT },
  { id: 'blown-bottle', name: 'Blown Bottle', icon: 'wind', description: 'Bottle blowing sound', category: 'pipe', instrument: 76, left: PIPE_LEFT, right: PIPE_RIGHT },
  { id: 'shakuhachi', name: 'Shakuhachi', icon: 'wind', description: 'Japanese bamboo flute', category: 'pipe', instrument: 77, left: PIPE_LEFT, right: PIPE_RIGHT },
  { id: 'whistle', name: 'Whistle', icon: 'wind', description: 'Tin whistle', category: 'pipe', instrument: 78, left: PIPE_LEFT, right: PIPE_RIGHT },
  { id: 'ocarina', name: 'Ocarina', icon: 'wind', description: 'Clay ocarina', category: 'pipe', instrument: 79, left: PIPE_LEFT, right: PIPE_RIGHT },

  // ==========================================
  // SYNTH LEAD (GM 80-87)
  // ==========================================
  { id: 'lead-square', name: 'Lead 1 (Square)', icon: 'synth', description: 'Square wave lead', category: 'synth-lead', instrument: 80, left: SYNTH_LEAD_LEFT, right: SYNTH_LEAD_RIGHT },
  { id: 'lead-sawtooth', name: 'Lead 2 (Sawtooth)', icon: 'synth', description: 'Sawtooth wave lead', category: 'synth-lead', instrument: 81, left: SYNTH_LEAD_LEFT, right: SYNTH_LEAD_RIGHT },
  { id: 'lead-calliope', name: 'Lead 3 (Calliope)', icon: 'synth', description: 'Calliope lead', category: 'synth-lead', instrument: 82, left: SYNTH_LEAD_LEFT, right: SYNTH_LEAD_RIGHT },
  { id: 'lead-chiff', name: 'Lead 4 (Chiff)', icon: 'synth', description: 'Chiff lead', category: 'synth-lead', instrument: 83, left: SYNTH_LEAD_LEFT, right: SYNTH_LEAD_RIGHT },
  { id: 'lead-charang', name: 'Lead 5 (Charang)', icon: 'synth', description: 'Charang lead', category: 'synth-lead', instrument: 84, left: SYNTH_LEAD_LEFT, right: SYNTH_LEAD_RIGHT },
  { id: 'lead-voice', name: 'Lead 6 (Voice)', icon: 'synth', description: 'Voice lead', category: 'synth-lead', instrument: 85, left: SYNTH_LEAD_LEFT, right: SYNTH_LEAD_RIGHT },
  { id: 'lead-fifths', name: 'Lead 7 (Fifths)', icon: 'synth', description: 'Fifth interval lead', category: 'synth-lead', instrument: 86, left: SYNTH_LEAD_LEFT, right: SYNTH_LEAD_RIGHT },
  { id: 'lead-bass-lead', name: 'Lead 8 (Bass + Lead)', icon: 'synth', description: 'Bass and lead combo', category: 'synth-lead', instrument: 87, left: SYNTH_LEAD_LEFT, right: SYNTH_LEAD_RIGHT },

  // ==========================================
  // SYNTH PAD (GM 88-95)
  // ==========================================
  { id: 'pad-new-age', name: 'Pad 1 (New Age)', icon: 'synth', description: 'New age pad', category: 'synth-pad', instrument: 88, left: SYNTH_PAD_LEFT, right: SYNTH_PAD_RIGHT },
  { id: 'pad-warm', name: 'Pad 2 (Warm)', icon: 'synth', description: 'Warm analog pad', category: 'synth-pad', instrument: 89, left: SYNTH_PAD_LEFT, right: SYNTH_PAD_RIGHT },
  { id: 'pad-polysynth', name: 'Pad 3 (Polysynth)', icon: 'synth', description: 'Polysynth pad', category: 'synth-pad', instrument: 90, left: SYNTH_PAD_LEFT, right: SYNTH_PAD_RIGHT },
  { id: 'pad-choir', name: 'Pad 4 (Choir)', icon: 'synth', description: 'Choir pad', category: 'synth-pad', instrument: 91, left: SYNTH_PAD_LEFT, right: SYNTH_PAD_RIGHT },
  { id: 'pad-bowed', name: 'Pad 5 (Bowed)', icon: 'synth', description: 'Bowed glass pad', category: 'synth-pad', instrument: 92, left: SYNTH_PAD_LEFT, right: SYNTH_PAD_RIGHT },
  { id: 'pad-metallic', name: 'Pad 6 (Metallic)', icon: 'synth', description: 'Metallic pad', category: 'synth-pad', instrument: 93, left: SYNTH_PAD_LEFT, right: SYNTH_PAD_RIGHT },
  { id: 'pad-halo', name: 'Pad 7 (Halo)', icon: 'synth', description: 'Halo pad', category: 'synth-pad', instrument: 94, left: SYNTH_PAD_LEFT, right: SYNTH_PAD_RIGHT },
  { id: 'pad-sweep', name: 'Pad 8 (Sweep)', icon: 'synth', description: 'Sweep pad', category: 'synth-pad', instrument: 95, left: SYNTH_PAD_LEFT, right: SYNTH_PAD_RIGHT },

  // ==========================================
  // SYNTH FX (GM 96-103)
  // ==========================================
  { id: 'fx-rain', name: 'FX 1 (Rain)', icon: 'fx', description: 'Rain effect', category: 'synth-fx', instrument: 96, left: SYNTH_PAD_LEFT, right: SYNTH_PAD_RIGHT },
  { id: 'fx-soundtrack', name: 'FX 2 (Soundtrack)', icon: 'fx', description: 'Soundtrack texture', category: 'synth-fx', instrument: 97, left: SYNTH_PAD_LEFT, right: SYNTH_PAD_RIGHT },
  { id: 'fx-crystal', name: 'FX 3 (Crystal)', icon: 'fx', description: 'Crystal texture', category: 'synth-fx', instrument: 98, left: SYNTH_PAD_LEFT, right: SYNTH_PAD_RIGHT },
  { id: 'fx-atmosphere', name: 'FX 4 (Atmosphere)', icon: 'fx', description: 'Atmospheric texture', category: 'synth-fx', instrument: 99, left: SYNTH_PAD_LEFT, right: SYNTH_PAD_RIGHT },
  { id: 'fx-brightness', name: 'FX 5 (Brightness)', icon: 'fx', description: 'Bright texture', category: 'synth-fx', instrument: 100, left: SYNTH_PAD_LEFT, right: SYNTH_PAD_RIGHT },
  { id: 'fx-goblins', name: 'FX 6 (Goblins)', icon: 'fx', description: 'Goblin texture', category: 'synth-fx', instrument: 101, left: SYNTH_PAD_LEFT, right: SYNTH_PAD_RIGHT },
  { id: 'fx-echoes', name: 'FX 7 (Echoes)', icon: 'fx', description: 'Echo texture', category: 'synth-fx', instrument: 102, left: SYNTH_PAD_LEFT, right: SYNTH_PAD_RIGHT },
  { id: 'fx-sci-fi', name: 'FX 8 (Sci-Fi)', icon: 'fx', description: 'Science fiction texture', category: 'synth-fx', instrument: 103, left: SYNTH_PAD_LEFT, right: SYNTH_PAD_RIGHT },

  // ==========================================
  // ETHNIC (GM 104-111)
  // ==========================================
  { id: 'sitar', name: 'Sitar', icon: 'sitar', description: 'Indian sitar', category: 'ethnic', instrument: 104, left: ETHNIC_LEFT, right: ETHNIC_RIGHT },
  { id: 'banjo', name: 'Banjo', icon: 'banjo', description: 'American banjo', category: 'ethnic', instrument: 105, left: ETHNIC_LEFT, right: ETHNIC_RIGHT },
  { id: 'shamisen', name: 'Shamisen', icon: 'koto', description: 'Japanese shamisen', category: 'ethnic', instrument: 106, left: ETHNIC_LEFT, right: ETHNIC_RIGHT },
  { id: 'koto', name: 'Koto', icon: 'koto', description: 'Japanese koto', category: 'ethnic', instrument: 107, left: ETHNIC_LEFT, right: ETHNIC_RIGHT },
  { id: 'kalimba', name: 'Kalimba', icon: 'kalimba', description: 'African thumb piano', category: 'ethnic', instrument: 108, left: ETHNIC_LEFT, right: ETHNIC_RIGHT },
  { id: 'bagpipe', name: 'Bagpipe', icon: 'bagpipe', description: 'Scottish bagpipes', category: 'ethnic', instrument: 109, left: ETHNIC_LEFT, right: ETHNIC_RIGHT },
  { id: 'fiddle', name: 'Fiddle', icon: 'violin', description: 'Folk fiddle', category: 'ethnic', instrument: 110, left: ETHNIC_LEFT, right: ETHNIC_RIGHT },
  { id: 'shanai', name: 'Shanai', icon: 'wind', description: 'Indian shehnai', category: 'ethnic', instrument: 111, left: ETHNIC_LEFT, right: ETHNIC_RIGHT },

  // ==========================================
  // PERCUSSIVE (GM 112-119)
  // ==========================================
  { id: 'tinkle-bell', name: 'Tinkle Bell', icon: 'bell', description: 'Small bell', category: 'percussive', instrument: 112, left: CHROMATIC_LEFT, right: CHROMATIC_RIGHT },
  { id: 'agogo', name: 'Agogo', icon: 'percussion', description: 'Agogo bells', category: 'percussive', instrument: 113, left: PERCUSSIVE_LEFT, right: PERCUSSIVE_RIGHT },
  { id: 'steel-drums', name: 'Steel Drums', icon: 'steel-drum', description: 'Caribbean steel drums', category: 'percussive', instrument: 114, left: CHROMATIC_LEFT, right: CHROMATIC_RIGHT },
  { id: 'woodblock', name: 'Woodblock', icon: 'percussion', description: 'Wooden block', category: 'percussive', instrument: 115, left: PERCUSSIVE_LEFT, right: PERCUSSIVE_RIGHT },
  { id: 'taiko-drum', name: 'Taiko Drum', icon: 'drum', description: 'Japanese taiko', category: 'percussive', instrument: 116, left: PERCUSSIVE_LEFT, right: PERCUSSIVE_RIGHT },
  { id: 'melodic-tom', name: 'Melodic Tom', icon: 'drum', description: 'Melodic tom drums', category: 'percussive', instrument: 117, left: PERCUSSIVE_LEFT, right: PERCUSSIVE_RIGHT },
  { id: 'synth-drum', name: 'Synth Drum', icon: 'drum', description: 'Electronic synth drum', category: 'percussive', instrument: 118, left: PERCUSSIVE_LEFT, right: PERCUSSIVE_RIGHT },
  { id: 'reverse-cymbal', name: 'Reverse Cymbal', icon: 'drum', description: 'Reversed cymbal swell', category: 'percussive', instrument: 119, left: PERCUSSIVE_LEFT, right: PERCUSSIVE_RIGHT },

  // ==========================================
  // SOUND FX (GM 120-127)
  // ==========================================
  { id: 'guitar-fret-noise', name: 'Guitar Fret Noise', icon: 'fx', description: 'Guitar string noise', category: 'sound-fx', instrument: 120, left: SFX_LEFT, right: SFX_RIGHT },
  { id: 'breath-noise', name: 'Breath Noise', icon: 'fx', description: 'Breath sound', category: 'sound-fx', instrument: 121, left: SFX_LEFT, right: SFX_RIGHT },
  { id: 'seashore', name: 'Seashore', icon: 'fx', description: 'Ocean waves', category: 'sound-fx', instrument: 122, left: SFX_LEFT, right: SFX_RIGHT },
  { id: 'bird-tweet', name: 'Bird Tweet', icon: 'fx', description: 'Bird sounds', category: 'sound-fx', instrument: 123, left: SFX_LEFT, right: SFX_RIGHT },
  { id: 'telephone-ring', name: 'Telephone Ring', icon: 'fx', description: 'Phone ringing', category: 'sound-fx', instrument: 124, left: SFX_LEFT, right: SFX_RIGHT },
  { id: 'helicopter', name: 'Helicopter', icon: 'fx', description: 'Helicopter blades', category: 'sound-fx', instrument: 125, left: SFX_LEFT, right: SFX_RIGHT },
  { id: 'applause', name: 'Applause', icon: 'fx', description: 'Crowd applause', category: 'sound-fx', instrument: 126, left: SFX_LEFT, right: SFX_RIGHT },
  { id: 'gunshot', name: 'Gunshot', icon: 'fx', description: 'Gunshot sound', category: 'sound-fx', instrument: 127, left: SFX_LEFT, right: SFX_RIGHT },
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
  'sound-fx': 'Sound FX',
};

// GM Category order
export const CATEGORY_ORDER = [
  'piano', 'chromatic', 'organ', 'guitar', 'bass', 'strings',
  'ensemble', 'brass', 'reed', 'pipe', 'synth-lead', 'synth-pad',
  'synth-fx', 'ethnic', 'percussive', 'sound-fx'
];
