// ============================================
// Canvas Renderer Hook
// ============================================

import { useEffect, useRef, useCallback } from 'react';
import type { Hand, Particle, InstrumentPreset } from '../types';
import {
  clearCanvas,
  drawMirroredVideo,
  drawCameraOverlay,
  drawHandSkeleton,
  drawFingertips,
  drawParticles,
} from '../utils/canvas';

interface UseCanvasRendererOptions {
  videoRef: React.RefObject<HTMLVideoElement | null>;
  hands: Hand[];
  particles: Particle[];
  instrument: InstrumentPreset;
  showSkeleton: boolean;
  showParticles: boolean;
  showLabels: boolean;
  isActive: boolean;
}

interface UseCanvasRendererReturn {
  canvasRef: React.RefObject<HTMLCanvasElement | null>;
}

export function useCanvasRenderer({
  videoRef,
  hands,
  particles,
  instrument,
  showSkeleton,
  showParticles,
  showLabels,
  isActive,
}: UseCanvasRendererOptions): UseCanvasRendererReturn {
  const canvasRef = useRef<HTMLCanvasElement>(null);
  const animationRef = useRef<number | undefined>(undefined);

  const render = useCallback(() => {
    const canvas = canvasRef.current;
    const video = videoRef.current;
    if (!canvas || !video) return;

    const ctx = canvas.getContext('2d');
    if (!ctx) return;

    // Clear canvas
    clearCanvas(ctx, canvas.width, canvas.height);

    // Draw mirrored video
    drawMirroredVideo(ctx, video, canvas.width, canvas.height);

    // Draw dark overlay
    drawCameraOverlay(ctx, canvas.width, canvas.height, 0.35);

    // Draw hand visualizations
    if (showSkeleton) {
      hands.forEach(hand => {
        drawHandSkeleton(ctx, hand, canvas.width, canvas.height);
      });
    }

    // Draw fingertips
    hands.forEach(hand => {
      drawFingertips(ctx, hand, instrument, canvas.width, canvas.height, showLabels);
    });

    // Draw particles
    if (showParticles) {
      drawParticles(ctx, particles);
    }

    // Continue animation loop
    animationRef.current = requestAnimationFrame(render);
  }, [videoRef, hands, particles, instrument, showSkeleton, showParticles, showLabels]);

  useEffect(() => {
    if (!isActive) return;

    animationRef.current = requestAnimationFrame(render);

    return () => {
      if (animationRef.current) {
        cancelAnimationFrame(animationRef.current);
      }
    };
  }, [isActive, render]);

  return {
    canvasRef,
  };
}
