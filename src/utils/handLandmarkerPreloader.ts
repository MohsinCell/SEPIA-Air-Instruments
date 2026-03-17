import { FilesetResolver, HandLandmarker } from '@mediapipe/tasks-vision';
import { HAND_CONFIG, MEDIAPIPE_CONFIG } from '../constants';

let preloadPromise: Promise<HandLandmarker> | null = null;

function createHandLandmarkerAsync(): Promise<HandLandmarker> {
    return (async () => {
        const vision = await FilesetResolver.forVisionTasks(MEDIAPIPE_CONFIG.wasmPath);

        const create = (delegate: 'GPU' | 'CPU') =>
            HandLandmarker.createFromOptions(vision, {
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
            return await create('GPU');
        } catch {
            console.warn('GPU delegate failed during preload, falling back to CPU.');
            return create('CPU');
        }
    })();
}

export function startPreload(): void {
    if (!preloadPromise) {
        preloadPromise = createHandLandmarkerAsync();
        preloadPromise.catch(() => {});
    }
}

export function getPreloadedHandLandmarker(): Promise<HandLandmarker> {
    if (!preloadPromise) {
        preloadPromise = createHandLandmarkerAsync();
    }
    return preloadPromise;
}

export function resetPreload(): void {
    preloadPromise = null;
}
