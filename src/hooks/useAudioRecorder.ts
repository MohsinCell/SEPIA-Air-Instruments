import { useState, useRef, useCallback, useEffect } from 'react';
import { getAudioEngine } from '../utils/AudioEngine';
interface UseAudioRecorderReturn {
    isRecording: boolean;
    duration: number;
    lastRecordingUrl: string | null;
    startRecording: () => Promise<void>;
    stopRecording: () => void;
    clearRecording: () => void;
}
export function useAudioRecorder(): UseAudioRecorderReturn {
    const [isRecording, setIsRecording] = useState(false);
    const [duration, setDuration] = useState(0);
    const [lastRecordingUrl, setLastRecordingUrl] = useState<string | null>(null);
    const mediaRecorderRef = useRef<MediaRecorder | null>(null);
    const chunksRef = useRef<Blob[]>([]);
    const durationIntervalRef = useRef<number | null>(null);
    useEffect(() => {
        return () => {
            if (durationIntervalRef.current) {
                clearInterval(durationIntervalRef.current);
            }
            if (lastRecordingUrl) {
                URL.revokeObjectURL(lastRecordingUrl);
            }
        };
    }, [lastRecordingUrl]);
    const startRecording = useCallback(async () => {
        try {
            const audioEngine = getAudioEngine();
            const destination = audioEngine.createRecordingDestination();
            if (!destination) {
                console.error('Failed to create recording destination');
                return;
            }
            const mimeType = MediaRecorder.isTypeSupported('audio/webm;codecs=opus')
                ? 'audio/webm;codecs=opus'
                : 'audio/webm';
            const mediaRecorder = new MediaRecorder(destination.stream, { mimeType });
            mediaRecorderRef.current = mediaRecorder;
            chunksRef.current = [];
            mediaRecorder.ondataavailable = (event) => {
                if (event.data.size > 0) {
                    chunksRef.current.push(event.data);
                }
            };
            mediaRecorder.onstop = () => {
                const blob = new Blob(chunksRef.current, { type: mimeType });
                if (lastRecordingUrl) {
                    URL.revokeObjectURL(lastRecordingUrl);
                }
                const url = URL.createObjectURL(blob);
                setLastRecordingUrl(url);
                audioEngine.disconnectRecordingDestination();
            };
            mediaRecorder.start(100);
            setIsRecording(true);
            setDuration(0);
            durationIntervalRef.current = window.setInterval(() => {
                setDuration(prev => prev + 1);
            }, 1000);
        }
        catch (error) {
            console.error('Failed to start recording:', error);
        }
    }, [lastRecordingUrl]);
    const stopRecording = useCallback(() => {
        if (mediaRecorderRef.current && mediaRecorderRef.current.state !== 'inactive') {
            mediaRecorderRef.current.stop();
        }
        if (durationIntervalRef.current) {
            clearInterval(durationIntervalRef.current);
            durationIntervalRef.current = null;
        }
        setIsRecording(false);
    }, []);
    const clearRecording = useCallback(() => {
        if (lastRecordingUrl) {
            URL.revokeObjectURL(lastRecordingUrl);
            setLastRecordingUrl(null);
        }
        setDuration(0);
    }, [lastRecordingUrl]);
    return {
        isRecording,
        duration,
        lastRecordingUrl,
        startRecording,
        stopRecording,
        clearRecording,
    };
}
