// ============================================
// Note History Hook
// ============================================

import { useState, useCallback } from 'react';
import type { NoteHistoryItem, FingerName } from '../types';
import { UI_CONFIG } from '../constants';

interface UseNoteHistoryReturn {
  history: NoteHistoryItem[];
  addNote: (note: string, hand: 'left' | 'right', finger: FingerName, color: string) => void;
  clearHistory: () => void;
}

export function useNoteHistory(): UseNoteHistoryReturn {
  const [history, setHistory] = useState<NoteHistoryItem[]>([]);

  const addNote = useCallback((
    note: string,
    hand: 'left' | 'right',
    finger: FingerName,
    color: string
  ) => {
    const newItem: NoteHistoryItem = {
      id: `note_${Date.now()}_${Math.random().toString(36).substr(2, 9)}`,
      note,
      hand,
      finger,
      timestamp: Date.now(),
      color,
    };

    setHistory(current => [...current, newItem].slice(-UI_CONFIG.noteHistoryLength));
  }, []);

  const clearHistory = useCallback(() => {
    setHistory([]);
  }, []);

  return {
    history,
    addNote,
    clearHistory,
  };
}
