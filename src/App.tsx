// ============================================
// Air Instruments - Main Application
// ============================================

import { useState, useCallback, useRef, useEffect } from 'react';
import type { Hand, FingerName } from './types';
import {
  INSTRUMENTS,
  DEFAULT_INSTRUMENT_ID,
  FINGER_NAMES,
} from './constants';
import {
  useAudioEngine,
  useAudioRecorder,
  useHandTracking,
  useParticles,
  useNoteHistory,
  useSettings,
} from './hooks';
import {
  detectRaisedFingers,
  getFingertipPosition,
  getRealHandSide,
  createFingerKey,
  drawMirroredVideo,
  drawCameraOverlay,
  drawHandSkeleton,
  drawFingertips,
  drawParticles,
  clearCanvas,
} from './utils';
import {
  Landing,
  Sidebar,
  RightPanel,
  Stage,
  LoadingOverlay,
  ErrorOverlay,
  HelpModal,
} from './components';

// Import styles
import './styles/global.css';
import './styles/App.css';

export default function App() {
  // Application state
  const [isStarted, setIsStarted] = useState(false);
  const [selectedInstrumentId, setSelectedInstrumentId] = useState(DEFAULT_INSTRUMENT_ID);
  const [activeFingers, setActiveFingers] = useState<Set<string>>(new Set());
  const [showHelp, setShowHelp] = useState(false);
  
  // Refs
  const canvasRef = useRef<HTMLCanvasElement>(null);
  const prevStatesRef = useRef<Map<string, boolean>>(new Map());
  const animationRef = useRef<number | undefined>(undefined);
  
  // Debouncing: Track consecutive frames each finger has been raised
  // This prevents flickering from causing multiple note triggers
  const fingerRaisedFramesRef = useRef<Map<string, number>>(new Map());
  const DEBOUNCE_FRAMES = 3; // Finger must be raised for 3 consecutive frames to trigger

  // Get current instrument
  const instrument = INSTRUMENTS.find(i => i.id === selectedInstrumentId) || INSTRUMENTS[0];

  // Hooks
  const { settings, updateSettings } = useSettings();
  const { particles, addParticle } = useParticles();
  const { history, addNote } = useNoteHistory();
  const { playNote, stopNote, stopAll } = useAudioEngine({
    instrument,
    volume: settings.volume,
  });
  const { 
    isRecording, 
    duration: recordingDuration, 
    lastRecordingUrl, 
    startRecording, 
    stopRecording 
  } = useAudioRecorder();

  // Handle hands detection
  const handleHandsDetected = useCallback((detectedHands: Hand[]) => {
    if (!canvasRef.current) return;

    const newActiveFingers = new Set<string>();

    detectedHands.forEach((hand) => {
      const handSide = getRealHandSide(hand);
      const raisedFingers = detectRaisedFingers(hand);
      const fingerConfig = instrument[handSide];

      FINGER_NAMES.forEach((fingerName, index) => {
        const key = createFingerKey(handSide, fingerName as FingerName);
        const isRaised = raisedFingers[index];
        const wasConfirmedRaised = prevStatesRef.current.get(key) || false;
        const noteConfig = fingerConfig[fingerName as FingerName];

        // Update consecutive raised frame count for debouncing
        const currentFrames = fingerRaisedFramesRef.current.get(key) || 0;
        
        if (isRaised) {
          // Increment consecutive raised frames (cap at DEBOUNCE_FRAMES to prevent overflow)
          fingerRaisedFramesRef.current.set(key, Math.min(currentFrames + 1, DEBOUNCE_FRAMES + 1));
          
          // Only consider finger "confirmed raised" after DEBOUNCE_FRAMES consecutive frames
          const confirmedRaised = fingerRaisedFramesRef.current.get(key)! >= DEBOUNCE_FRAMES;
          
          if (confirmedRaised) {
            newActiveFingers.add(key);

            // Note just started playing (transition from not-confirmed to confirmed)
            if (!wasConfirmedRaised) {
              playNote(key, noteConfig.notes);

              // Add particle effect
              const pos = getFingertipPosition(
                hand,
                index,
                canvasRef.current!.width,
                canvasRef.current!.height
              );
              addParticle(pos, noteConfig.color, noteConfig.name);

              // Add to history
              addNote(noteConfig.name, handSide, fingerName as FingerName, noteConfig.color);
            }
            
            // Update confirmed state
            prevStatesRef.current.set(key, true);
          }
        } else {
          // Reset consecutive raised frames when finger goes down
          fingerRaisedFramesRef.current.set(key, 0);
          
          if (wasConfirmedRaised) {
            // Note just stopped
            stopNote(key);
            prevStatesRef.current.set(key, false);
          }
        }
      });
    });

    // Stop notes for hands that are no longer visible
    prevStatesRef.current.forEach((wasRaised, key) => {
      if (wasRaised && !newActiveFingers.has(key)) {
        const [handSide] = key.split('_') as ['left' | 'right', FingerName];
        const handStillVisible = detectedHands.some(
          (h) => getRealHandSide(h) === handSide
        );
        if (!handStillVisible) {
          stopNote(key);
          prevStatesRef.current.set(key, false);
          fingerRaisedFramesRef.current.set(key, 0); // Reset debounce counter
        }
      }
    });

    setActiveFingers(newActiveFingers);
  }, [instrument, playNote, stopNote, addParticle, addNote]);

  // Hand tracking hook
  const { videoRef, isLoading, error, hands } = useHandTracking({
    enabled: isStarted,
    onHandsDetected: handleHandsDetected,
  });

  // Canvas rendering
  useEffect(() => {
    if (!isStarted || isLoading) return;

    const canvas = canvasRef.current;
    const video = videoRef.current;
    if (!canvas || !video) return;

    const ctx = canvas.getContext('2d');
    if (!ctx) return;

    const render = () => {
      // Clear canvas
      clearCanvas(ctx, canvas.width, canvas.height);

      // Draw video (mirrored)
      drawMirroredVideo(ctx, video, canvas.width, canvas.height);

      // Draw overlay
      drawCameraOverlay(ctx, canvas.width, canvas.height, 0.35);

      // Draw hand visualizations
      hands.forEach((hand) => {
        if (settings.showSkeleton) {
          drawHandSkeleton(ctx, hand, canvas.width, canvas.height);
        }
        drawFingertips(ctx, hand, instrument, canvas.width, canvas.height, true);
      });

      // Draw particles
      if (settings.showParticles) {
        drawParticles(ctx, particles);
      }

      animationRef.current = requestAnimationFrame(render);
    };

    render();

    return () => {
      if (animationRef.current) {
        cancelAnimationFrame(animationRef.current);
      }
    };
  }, [isStarted, isLoading, hands, particles, instrument, settings.showSkeleton, settings.showParticles, videoRef]);

  // Cleanup on unmount
  useEffect(() => {
    return () => {
      stopAll();
    };
  }, [stopAll]);

  // Handle start
  const handleStart = useCallback(() => {
    setIsStarted(true);
  }, []);

  // Handle instrument change
  const handleInstrumentChange = useCallback((id: string) => {
    setSelectedInstrumentId(id);
    stopAll();
    prevStatesRef.current.clear();
    fingerRaisedFramesRef.current.clear(); // Clear debounce counters
    setActiveFingers(new Set());
  }, [stopAll]);

  // Handle going back to home/landing page
  const handleGoHome = useCallback(() => {
    stopAll();
    prevStatesRef.current.clear();
    fingerRaisedFramesRef.current.clear(); // Clear debounce counters
    setActiveFingers(new Set());
    setIsStarted(false);
  }, [stopAll]);

  // Show landing page if not started
  if (!isStarted) {
    return <Landing onStart={handleStart} />;
  }

  return (
    <div className="app">
      {/* Loading Overlay */}
      {isLoading && <LoadingOverlay />}

      {/* Error Overlay */}
      {error && <ErrorOverlay message={error} />}

      {/* Help Modal */}
      <HelpModal isOpen={showHelp} onClose={() => setShowHelp(false)} />

      {/* Main Layout */}
      <div className="app__main">
        {/* Left Sidebar */}
        <Sidebar
          selectedInstrumentId={selectedInstrumentId}
          onSelectInstrument={handleInstrumentChange}
          volume={settings.volume}
          onVolumeChange={(v) => updateSettings({ volume: v })}
          showSkeleton={settings.showSkeleton}
          onShowSkeletonChange={(v) => updateSettings({ showSkeleton: v })}
          showParticles={settings.showParticles}
          onShowParticlesChange={(v) => updateSettings({ showParticles: v })}
          onHelpClick={() => setShowHelp(true)}
          onHomeClick={handleGoHome}
          isRecording={isRecording}
          onStartRecording={startRecording}
          onStopRecording={stopRecording}
          recordingDuration={recordingDuration}
          lastRecordingUrl={lastRecordingUrl}
        />

        {/* Main Stage */}
        <Stage
          instrument={instrument}
          handsCount={hands.length}
          videoRef={videoRef}
          canvasRef={canvasRef}
        />

        {/* Right Panel */}
        <RightPanel
          instrument={instrument}
          activeFingers={activeFingers}
          noteHistory={history}
        />
      </div>
    </div>
  );
}
