import { useEffect, useRef, useState, useCallback } from 'react';
import { FilesetResolver, HandLandmarker, } from '@mediapipe/tasks-vision';
import type { HandLandmarkerResult } from '@mediapipe/tasks-vision';
import type { Hand } from '../types';
import { HAND_CONFIG, VIDEO_CONFIG, MEDIAPIPE_CONFIG } from '../constants';
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
export function useHandTracking({ enabled, onHandsDetected, }: UseHandTrackingOptions): UseHandTrackingReturn {
    const videoRef = useRef<HTMLVideoElement>(null);
    const handLandmarkerRef = useRef<HandLandmarker | null>(null);
    const animationFrameRef = useRef<number | null>(null);
    const lastVideoTimeRef = useRef<number>(-1);
    const onHandsDetectedRef = useRef(onHandsDetected);
    const [isLoading, setIsLoading] = useState(true);
    const [error, setError] = useState<string | null>(null);
    const [hands, setHands] = useState<Hand[]>([]);
    useEffect(() => {
        onHandsDetectedRef.current = onHandsDetected;
    }, [onHandsDetected]);
    useEffect(() => {
        if (enabled)
            return;
        if (animationFrameRef.current) {
            cancelAnimationFrame(animationFrameRef.current);
            animationFrameRef.current = null;
        }
        if (videoRef.current?.srcObject) {
            const mediaStream = videoRef.current.srcObject as MediaStream;
            mediaStream.getTracks().forEach((track) => track.stop());
            videoRef.current.srcObject = null;
        }
        if (handLandmarkerRef.current) {
            handLandmarkerRef.current.close();
            handLandmarkerRef.current = null;
        }
        setHands([]);
        setIsLoading(false);
        setError(null);
    }, [enabled]);
    const processResults = useCallback((results: HandLandmarkerResult) => {
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
    }, []);
    useEffect(() => {
        if (!enabled)
            return;
        let mounted = true;
        let stream: MediaStream | null = null;
        let detectionLoopId: number | null = null;
        const detectHands = () => {
            if (!handLandmarkerRef.current || !videoRef.current) {
                detectionLoopId = requestAnimationFrame(detectHands);
                return;
            }
            const video = videoRef.current;
            if (video.readyState >= 2 && video.currentTime !== lastVideoTimeRef.current) {
                lastVideoTimeRef.current = video.currentTime;
                try {
                    const results = handLandmarkerRef.current.detectForVideo(video, performance.now());
                    processResults(results);
                }
                catch (err) {
                    console.error('Hand detection error:', err);
                }
            }
            detectionLoopId = requestAnimationFrame(detectHands);
        };
        const initialize = async () => {
            let handLandmarkerPromise: Promise<HandLandmarker> | null = null;
            try {
                setIsLoading(true);
                setError(null);
                lastVideoTimeRef.current = -1;
                if (!navigator.mediaDevices?.getUserMedia) {
                    throw new Error('Camera API is not available in this browser.');
                }
                const streamPromise = navigator.mediaDevices.getUserMedia({
                    video: {
                        width: { ideal: VIDEO_CONFIG.width },
                        height: { ideal: VIDEO_CONFIG.height },
                        facingMode: VIDEO_CONFIG.facingMode,
                    },
                    audio: false,
                });
                handLandmarkerPromise = (async () => {
                    const vision = await FilesetResolver.forVisionTasks(MEDIAPIPE_CONFIG.wasmPath);
                    const createHandLandmarker = (delegate: 'GPU' | 'CPU') => HandLandmarker.createFromOptions(vision, {
                        baseOptions: {
                            modelAssetPath: MEDIAPIPE_CONFIG.modelPath,
                            delegate,
                        },
                        runningMode: 'VIDEO',
                        numHands: HAND_CONFIG.maxNumHands,
                        minHandDetectionConfidence: HAND_CONFIG.minDetectionConfidence,
                        minHandPresenceConfidence: HAND_CONFIG.minTrackingConfidence,
                        minTrackingConfidence: HAND_CONFIG.minTrackingConfidence,
                    });
                    try {
                        return await createHandLandmarker('GPU');
                    }
                    catch (gpuError) {
                        console.warn('GPU delegate initialization failed, retrying with CPU.', gpuError);
                        return createHandLandmarker('CPU');
                    }
                })();
                stream = await streamPromise;
                if (!mounted || !videoRef.current) {
                    stream.getTracks().forEach((track) => track.stop());
                    return;
                }
                const video = videoRef.current;
                video.muted = true;
                video.playsInline = true;
                video.setAttribute('playsinline', 'true');
                video.srcObject = stream;
                await new Promise<void>((resolve, reject) => {
                    video.onloadedmetadata = () => {
                        video.play().then(resolve).catch(reject);
                    };
                    video.onerror = () => reject(new Error('Video failed to load'));
                });
                const handLandmarker = await handLandmarkerPromise;
                if (!mounted)
                    return handLandmarker.close();
                handLandmarkerRef.current = handLandmarker;
                detectionLoopId = requestAnimationFrame(detectHands);
                animationFrameRef.current = detectionLoopId;
                setIsLoading(false);
            }
            catch (err: any) {
                if (stream) {
                    stream.getTracks().forEach((track) => track.stop());
                    stream = null;
                }
                if (videoRef.current?.srcObject) {
                    const mediaStream = videoRef.current.srcObject as MediaStream;
                    mediaStream.getTracks().forEach((track) => track.stop());
                    videoRef.current.srcObject = null;
                }
                if (handLandmarkerRef.current) {
                    handLandmarkerRef.current.close();
                    handLandmarkerRef.current = null;
                }
                if (handLandmarkerPromise) {
                    handLandmarkerPromise
                        .then((landmarker) => landmarker.close())
                        .catch(() => { });
                    handLandmarkerPromise = null;
                }
                if (mounted) {
                    console.error('Hand tracking initialization error:', err);
                    let errorMessage = err.message || 'Failed to initialize hand tracking';
                    if (err.name === 'NotAllowedError') {
                        errorMessage = 'Camera access denied. Please allow camera access and try again.';
                    }
                    else if (err.name === 'NotFoundError') {
                        errorMessage = 'No camera found. Please connect a camera and try again.';
                    }
                    else if (err.name === 'NotReadableError') {
                        errorMessage = 'Camera is in use by another application.';
                    }
                    else if (err.name === 'AbortError') {
                        errorMessage = 'Camera initialization was interrupted. Please try again.';
                    }
                    else if (typeof err.message === 'string' && (err.message.toLowerCase().includes('fetch') || err.message.toLowerCase().includes('network') || err.message.toLowerCase().includes('wasm'))) {
                        errorMessage = 'Failed to load hand tracking assets. Check your internet connection and try again.';
                    }
                    setError(errorMessage);
                    setIsLoading(false);
                }
            }
        };
        initialize();
        return () => {
            mounted = false;
            if (detectionLoopId) {
                cancelAnimationFrame(detectionLoopId);
            }
            if (animationFrameRef.current) {
                cancelAnimationFrame(animationFrameRef.current);
                animationFrameRef.current = null;
            }
            if (videoRef.current?.srcObject) {
                const mediaStream = videoRef.current.srcObject as MediaStream;
                mediaStream.getTracks().forEach((track) => track.stop());
                videoRef.current.srcObject = null;
            }
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
