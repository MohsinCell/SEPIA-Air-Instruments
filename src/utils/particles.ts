import type { Particle, Position } from '../types';
import { PARTICLE_CONFIG } from '../constants';
export function createParticle(position: Position, color: string, note: string): Particle {
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
export function updateParticle(particle: Particle): Particle {
    return {
        ...particle,
        x: particle.x + particle.velocity.x,
        y: particle.y + particle.velocity.y,
        life: particle.life - 1,
        velocity: {
            x: particle.velocity.x * 0.98,
            y: particle.velocity.y + PARTICLE_CONFIG.gravity,
        },
        size: particle.size + PARTICLE_CONFIG.sizeGrowth,
    };
}
export function isParticleAlive(particle: Particle): boolean {
    return particle.life > 0;
}
export function getParticleOpacity(particle: Particle): number {
    return particle.life / particle.maxLife;
}
export function updateParticles(particles: Particle[], maxParticles: number = PARTICLE_CONFIG.maxParticles): Particle[] {
    return particles
        .map(updateParticle)
        .filter(isParticleAlive)
        .slice(-maxParticles);
}
export function createParticleBurst(position: Position, color: string, note: string, count: number = 3): Particle[] {
    return Array.from({ length: count }, () => createParticle(position, color, note));
}
