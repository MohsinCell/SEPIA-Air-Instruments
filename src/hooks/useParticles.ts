// ============================================
// Particles Hook
// ============================================

import { useState, useEffect, useCallback } from 'react';
import type { Particle, Position } from '../types';
import { createParticle, updateParticles } from '../utils/particles';
import { ANIMATION_TIMING, PARTICLE_CONFIG } from '../constants';

interface UseParticlesReturn {
  particles: Particle[];
  addParticle: (position: Position, color: string, note: string) => void;
  clearParticles: () => void;
}

export function useParticles(): UseParticlesReturn {
  const [particles, setParticles] = useState<Particle[]>([]);

  // Update particles on animation frame
  useEffect(() => {
    const intervalId = setInterval(() => {
      setParticles(current => updateParticles(current, PARTICLE_CONFIG.maxParticles));
    }, ANIMATION_TIMING.particleUpdateInterval);

    return () => clearInterval(intervalId);
  }, []);

  const addParticle = useCallback((position: Position, color: string, note: string) => {
    setParticles(current => {
      const newParticle = createParticle(position, color, note);
      return [...current, newParticle].slice(-PARTICLE_CONFIG.maxParticles);
    });
  }, []);

  const clearParticles = useCallback(() => {
    setParticles([]);
  }, []);

  return {
    particles,
    addParticle,
    clearParticles,
  };
}
