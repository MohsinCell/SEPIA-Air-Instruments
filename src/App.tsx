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
  getPalmSize,
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
  const [leftAccuracy, setLeftAccuracy] = useState(0);
  const [rightAccuracy, setRightAccuracy] = useState(0);
  
  // Refs
  const canvasRef = useRef<HTMLCanvasElement>(null);
  const prevStatesRef = useRef<Map<string, boolean>>(new Map());
  const animationRef = useRef<number | undefined>(undefined);
  const leftSamplesRef = useRef<number[]>([]);
  const rightSamplesRef = useRef<number[]>([]);
  const leftLastSeenRef = useRef<number>(0);
  const rightLastSeenRef = useRef<number>(0);
  const leftAccuracyRef = useRef<number>(0);
  const rightAccuracyRef = useRef<number>(0);
  const leftFacingRef = useRef<number>(0);
  const rightFacingRef = useRef<number>(0);
  
  // Debouncing: Track consecutive frames each finger has been raised
  // This prevents flickering from causing multiple note triggers
  const fingerRaisedFramesRef = useRef<Map<string, number>>(new Map());
  const DEBOUNCE_FRAMES = 3; // Finger must be raised for 3 consecutive frames to trigger
  const ACCURACY_WINDOW = 30;
  const ACCURACY_DECAY_MS = 1200;

  const computeAccuracy = useCallback((samples: number[], lastSeenMs: number, now: number, facingScore: number) => {
    if (samples.length < 3) return 0;
    if (now - lastSeenMs > ACCURACY_DECAY_MS) return 0;

    const mean = samples.reduce((sum, v) => sum + v, 0) / samples.length;
    const variance = samples.reduce((sum, v) => sum + Math.pow(v - mean, 2), 0) / samples.length;
    const stdDev = Math.sqrt(variance);
    const cv = stdDev / (mean || 1);

    const stability = Math.max(0, Math.min(1, 1 - cv / 0.08));
    const presence = Math.max(0, Math.min(1, 1 - (now - lastSeenMs) / ACCURACY_DECAY_MS));

    return Math.max(0, Math.min(1, stability * presence * facingScore));
  }, []);

  const getFacingScore = useCallback((hand: Hand) => {
    const landmarks = hand.landmarks;
    const mcpIds = [5, 9, 13, 17];
    const tipIds = [4, 8, 12, 16, 20];

    const avgMcpZ = mcpIds.reduce((sum, id) => sum + landmarks[id].z, 0) / mcpIds.length;
    const avgTipZ = tipIds.reduce((sum, id) => sum + landmarks[id].z, 0) / tipIds.length;

    const diff = avgMcpZ - avgTipZ;
    const score = Math.max(0, Math.min(1, diff / 0.03));

    return score;
  }, []);

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

    const now = performance.now();

    detectedHands.forEach((hand) => {
      const side = getRealHandSide(hand);
      const palmSize = getPalmSize(hand);
      const facingScore = getFacingScore(hand);

      if (side === 'left') {
        leftSamplesRef.current.push(palmSize);
        if (leftSamplesRef.current.length > ACCURACY_WINDOW) {
          leftSamplesRef.current.shift();
        }
        leftLastSeenRef.current = now;
        leftFacingRef.current = facingScore;
      } else {
        rightSamplesRef.current.push(palmSize);
        if (rightSamplesRef.current.length > ACCURACY_WINDOW) {
          rightSamplesRef.current.shift();
        }
        rightLastSeenRef.current = now;
        rightFacingRef.current = facingScore;
      }
    });

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

    const leftRaw = computeAccuracy(
      leftSamplesRef.current,
      leftLastSeenRef.current,
      now,
      leftFacingRef.current
    );
    const rightRaw = computeAccuracy(
      rightSamplesRef.current,
      rightLastSeenRef.current,
      now,
      rightFacingRef.current
    );

    leftAccuracyRef.current = leftAccuracyRef.current * 0.8 + leftRaw * 0.2;
    rightAccuracyRef.current = rightAccuracyRef.current * 0.8 + rightRaw * 0.2;

    setLeftAccuracy(leftAccuracyRef.current);
    setRightAccuracy(rightAccuracyRef.current);
  }, [instrument, playNote, stopNote, addParticle, addNote, computeAccuracy]);

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
    setLeftAccuracy(0);
    setRightAccuracy(0);
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
      <div className="accuracy-bar" aria-live="polite">
        <div className="accuracy-bar__section accuracy-bar__section--left">
          <span className="accuracy-bar__label">Left</span>
          <span className="accuracy-bar__value">{Math.round(leftAccuracy * 100)}%</span>
        </div>
        <div className={`accuracy-bar__section accuracy-bar__section--center ${hands.length > 0 ? 'accuracy-bar__section--detected' : ''}`}>
          <span className="accuracy-bar__dot" />
          <span className="accuracy-bar__status">{hands.length > 0 ? `${hands.length} hand${hands.length > 1 ? 's' : ''} detected` : 'Show hands to play'}</span>
        </div>
        <div className="accuracy-bar__section accuracy-bar__section--right">
          <span className="accuracy-bar__label">Right</span>
          <span className="accuracy-bar__value">{Math.round(rightAccuracy * 100)}%</span>
        </div>
      </div>
    </div>
  );
}
