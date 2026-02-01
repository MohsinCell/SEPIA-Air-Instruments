// ============================================
// Hand Tracking Hook using MediaPipe Tasks Vision
// ============================================

import { useEffect, useRef, useState, useCallback } from 'react';
import {
  FilesetResolver,
  HandLandmarker,
} from '@mediapipe/tasks-vision';
import type { HandLandmarkerResult } from '@mediapipe/tasks-vision';
import type { Hand } from '../types';
import { HAND_CONFIG, VIDEO_CONFIG } from '../constants';

interface UseHandTrackingOptions {
  enabled: boolean;
  onHandsDetected?: (hands: Hand[]) => void;
}

interface UseHandTrackingReturn {
  videoRef: React.RefObject<HTMLVideoElement | null>;
  isLoading: boolean;
  error: string | null;
  hands: Hand[];
}

export function useHandTracking({
  enabled,
  onHandsDetected,
}: UseHandTrackingOptions): UseHandTrackingReturn {
  const videoRef = useRef<HTMLVideoElement>(null);
  const handLandmarkerRef = useRef<HandLandmarker | null>(null);
  const animationFrameRef = useRef<number | null>(null);
  const lastVideoTimeRef = useRef<number>(-1);
  const onHandsDetectedRef = useRef(onHandsDetected);

  const [isLoading, setIsLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);
  const [hands, setHands] = useState<Hand[]>([]);

  // Keep callback ref up to date
  useEffect(() => {
    onHandsDetectedRef.current = onHandsDetected;
  }, [onHandsDetected]);

  // Process results from hand landmarker - stable reference
  const processResults = useCallback(
    (results: HandLandmarkerResult) => {
      const detectedHands: Hand[] = [];

      if (results.landmarks && results.handednesses) {
        results.landmarks.forEach((landmarks, index) => {
          const handedness = results.handednesses[index]?.[0];
          if (handedness) {
            detectedHands.push({
              landmarks: landmarks.map((l) => ({
                x: l.x,
                y: l.y,
                z: l.z,
              })),
              handedness: handedness.categoryName as 'Left' | 'Right',
            });
          }
        });
      }

      setHands(detectedHands);
      onHandsDetectedRef.current?.(detectedHands);
    },
    [] // No dependencies - uses ref for callback
  );

  // Initialize hand tracking
  useEffect(() => {
    if (!enabled) return;

    let mounted = true;
    let stream: MediaStream | null = null;
    let detectionLoopId: number | null = null;

    const detectHands = () => {
      if (!handLandmarkerRef.current || !videoRef.current) {
        detectionLoopId = requestAnimationFrame(detectHands);
        return;
      }

      const video = videoRef.current;

      // Only process if video time has changed
      if (video.readyState >= 2 && video.currentTime !== lastVideoTimeRef.current) {
        lastVideoTimeRef.current = video.currentTime;

        try {
          const results = handLandmarkerRef.current.detectForVideo(
            video,
            performance.now()
          );
          processResults(results);
        } catch (err) {
          console.error('Hand detection error:', err);
        }
      }

      detectionLoopId = requestAnimationFrame(detectHands);
    };

    const initialize = async () => {
      try {
        setIsLoading(true);
        setError(null);

        // Initialize MediaPipe Vision
        const vision = await FilesetResolver.forVisionTasks(
          'https://cdn.jsdelivr.net/npm/@mediapipe/tasks-vision@latest/wasm'
        );

        if (!mounted) return;

        // Create hand landmarker
        const handLandmarker = await HandLandmarker.createFromOptions(vision, {
          baseOptions: {
            modelAssetPath:
              'https://storage.googleapis.com/mediapipe-models/hand_landmarker/hand_landmarker/float16/1/hand_landmarker.task',
            delegate: 'GPU',
          },
          runningMode: 'VIDEO',
          numHands: HAND_CONFIG.maxNumHands,
          minHandDetectionConfidence: HAND_CONFIG.minDetectionConfidence,
          minHandPresenceConfidence: HAND_CONFIG.minTrackingConfidence,
          minTrackingConfidence: HAND_CONFIG.minTrackingConfidence,
        });

        if (!mounted) {
          handLandmarker.close();
          return;
        }

        handLandmarkerRef.current = handLandmarker;

        // Get camera stream
        stream = await navigator.mediaDevices.getUserMedia({
          video: {
            width: { ideal: VIDEO_CONFIG.width },
            height: { ideal: VIDEO_CONFIG.height },
            facingMode: VIDEO_CONFIG.facingMode,
          },
        });

        if (!mounted || !videoRef.current) {
          stream.getTracks().forEach((track) => track.stop());
          return;
        }

        // Set video source
        videoRef.current.srcObject = stream;
        
        // Wait for video to be ready
        await new Promise<void>((resolve, reject) => {
          const video = videoRef.current!;
          video.onloadedmetadata = () => {
            video.play().then(resolve).catch(reject);
          };
          video.onerror = () => reject(new Error('Video failed to load'));
        });

        if (!mounted) return;

        // Start detection loop
        detectionLoopId = requestAnimationFrame(detectHands);
        animationFrameRef.current = detectionLoopId;

        setIsLoading(false);
      } catch (err: any) {
        if (mounted) {
          console.error('Hand tracking initialization error:', err);
          let errorMessage = err.message || 'Failed to initialize hand tracking';
          
          if (err.name === 'NotAllowedError') {
            errorMessage = 'Camera access denied. Please allow camera access and try again.';
          } else if (err.name === 'NotFoundError') {
            errorMessage = 'No camera found. Please connect a camera and try again.';
          } else if (err.name === 'NotReadableError') {
            errorMessage = 'Camera is in use by another application.';
          }
          
          setError(errorMessage);
          setIsLoading(false);
        }
      }
    };

    initialize();

    return () => {
      mounted = false;

      // Stop animation frame
      if (detectionLoopId) {
        cancelAnimationFrame(detectionLoopId);
      }
      if (animationFrameRef.current) {
        cancelAnimationFrame(animationFrameRef.current);
        animationFrameRef.current = null;
      }

      // Stop camera stream
      if (videoRef.current?.srcObject) {
        const mediaStream = videoRef.current.srcObject as MediaStream;
        mediaStream.getTracks().forEach((track) => track.stop());
        videoRef.current.srcObject = null;
      }

      // Close hand landmarker
      if (handLandmarkerRef.current) {
        handLandmarkerRef.current.close();
        handLandmarkerRef.current = null;
      }
    };
  }, [enabled, processResults]);

  return {
    videoRef,
    isLoading,
    error,
    hands,
  };
}
