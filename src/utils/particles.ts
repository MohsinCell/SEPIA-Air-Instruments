// ============================================
// Particle System Utilities
// ============================================

import type { Particle, Position } from '../types';
import { PARTICLE_CONFIG } from '../constants';

/**
 * Create a new particle
 * @param position - Initial position
 * @param color - Particle color
 * @param note - Note name to display
 * @returns New particle object
 */
export function createParticle(
  position: Position,
  color: string,
  note: string
): Particle {
  return {
    id: `particle_${Date.now()}_${Math.random().toString(36).substr(2, 9)}`,
    x: position.x,
    y: position.y,
    color,
    note,
    life: PARTICLE_CONFIG.baseLife,
    maxLife: PARTICLE_CONFIG.baseLife,
    velocity: {
      x: (Math.random() - 0.5) * PARTICLE_CONFIG.velocityRange.x,
      y: PARTICLE_CONFIG.initialVelocityY - Math.random() * PARTICLE_CONFIG.velocityRange.y,
    },
    size: PARTICLE_CONFIG.baseSize,
  };
}

/**
 * Update particle position and state
 * @param particle - Particle to update
 * @returns Updated particle
 */
export function updateParticle(particle: Particle): Particle {
  return {
    ...particle,
    x: particle.x + particle.velocity.x,
    y: particle.y + particle.velocity.y,
    life: particle.life - 1,
    velocity: {
      x: particle.velocity.x * 0.98, // Air resistance
      y: particle.velocity.y + PARTICLE_CONFIG.gravity,
    },
    size: particle.size + PARTICLE_CONFIG.sizeGrowth,
  };
}

/**
 * Check if particle is still alive
 * @param particle - Particle to check
 * @returns True if particle should continue existing
 */
export function isParticleAlive(particle: Particle): boolean {
  return particle.life > 0;
}

/**
 * Get particle opacity based on life
 * @param particle - Particle
 * @returns Opacity value (0-1)
 */
export function getParticleOpacity(particle: Particle): number {
  return particle.life / particle.maxLife;
}

/**
 * Update all particles in array
 * @param particles - Array of particles
 * @param maxParticles - Maximum number of particles to keep
 * @returns Updated array of particles
 */
export function updateParticles(
  particles: Particle[],
  maxParticles: number = PARTICLE_CONFIG.maxParticles
): Particle[] {
  return particles
    .map(updateParticle)
    .filter(isParticleAlive)
    .slice(-maxParticles);
}

/**
 * Create multiple particles for a burst effect
 * @param position - Center position
 * @param color - Particle color
 * @param note - Note name
 * @param count - Number of particles
 * @returns Array of new particles
 */
export function createParticleBurst(
  position: Position,
  color: string,
  note: string,
  count: number = 3
): Particle[] {
  return Array.from({ length: count }, () => createParticle(position, color, note));
}
