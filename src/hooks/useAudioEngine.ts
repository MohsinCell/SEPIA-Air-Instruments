// ============================================
// Audio Engine Hook
// ============================================

import { useEffect, useRef, useCallback } from 'react';
import { AudioEngine, getAudioEngine } from '../utils/AudioEngine';
import type { InstrumentPreset } from '../types';

interface UseAudioEngineOptions {
  instrument: InstrumentPreset;
  volume: number;
}

interface UseAudioEngineReturn {
  playNote: (key: string, notes: number[]) => void;
  stopNote: (key: string) => void;
  stopAll: () => void;
}

export function useAudioEngine({
  instrument,
  volume,
}: UseAudioEngineOptions): UseAudioEngineReturn {
  const audioRef = useRef<AudioEngine | null>(null);
  const initializedRef = useRef(false);

  // Initialize audio engine
  useEffect(() => {
    const initAudio = async () => {
      if (initializedRef.current) return;
      
      try {
        audioRef.current = getAudioEngine();
        await audioRef.current.initialize();
        initializedRef.current = true;
      } catch (error) {
        console.error('Failed to initialize audio:', error);
      }
    };

    initAudio();

    return () => {
      audioRef.current?.stopAll();
    };
  }, []);

  // Update instrument configuration
  useEffect(() => {
    if (audioRef.current) {
      audioRef.current.setInstrument({
        instrument: instrument.instrument,
        isDrum: instrument.category === 'percussive',
      });
    }
  }, [instrument]);

  // Update volume
  useEffect(() => {
    if (audioRef.current) {
      audioRef.current.setVolume(volume / 100);
    }
  }, [volume]);

  const playNote = useCallback((key: string, notes: number[]) => {
    audioRef.current?.resume();
    audioRef.current?.playNotes(key, notes, volume / 100);
  }, [volume]);

  const stopNote = useCallback((key: string) => {
    audioRef.current?.stopNotes(key);
  }, []);

  const stopAll = useCallback(() => {
    audioRef.current?.stopAll();
  }, []);

  return {
    playNote,
    stopNote,
    stopAll,
  };
}
