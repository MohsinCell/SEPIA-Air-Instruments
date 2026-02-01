// ============================================
// Audio Engine - Web Audio API Synthesizer
// ============================================

import { AUDIO_CONFIG } from '../constants';

export type WaveformType = OscillatorType;

export interface AudioEngineConfig {
  instrument: number;
  isDrum: boolean;
}

export class AudioEngine {
  private _audioContext: AudioContext | null = null;
  private _masterGain: GainNode | null = null;
  private compressor: DynamicsCompressorNode | null = null;
  private recordingDestination: MediaStreamAudioDestinationNode | null = null;
  private activeOscillators: Map<string, { oscillators: OscillatorNode[]; gainNodes: GainNode[] }> = new Map();
  private instrument: number = 0;
  private isDrum: boolean = false;
  private isInitialized: boolean = false;

  // Expose audio context for recording
  get audioContext(): AudioContext | null {
    return this._audioContext;
  }

  // Expose master gain for recording
  get masterGain(): GainNode | null {
    return this._masterGain;
  }

  /**
   * Initialize the audio engine
   */
  async initialize(): Promise<void> {
    if (this.isInitialized) return;

    try {
      this._audioContext = new AudioContext();
      
      // Create compressor for better dynamics
      this.compressor = this._audioContext.createDynamicsCompressor();
      this.compressor.threshold.value = -24;
      this.compressor.knee.value = 30;
      this.compressor.ratio.value = 12;
      this.compressor.attack.value = 0.003;
      this.compressor.release.value = 0.25;
      this.compressor.connect(this._audioContext.destination);
      
      // Create master gain node
      this._masterGain = this._audioContext.createGain();
      this._masterGain.gain.value = AUDIO_CONFIG.defaultVolume;
      this._masterGain.connect(this.compressor);
      
      this.isInitialized = true;
    } catch (error) {
      console.error('Failed to initialize audio engine:', error);
      throw error;
    }
  }

  /**
   * Resume audio context if suspended
   */
  async resume(): Promise<void> {
    if (this._audioContext?.state === 'suspended') {
      await this._audioContext.resume();
    }
  }

  /**
   * Set master volume (0-1)
   */
  setVolume(volume: number): void {
    if (this._masterGain) {
      this._masterGain.gain.setValueAtTime(
        Math.max(0, Math.min(1, volume)),
        this._audioContext?.currentTime || 0
      );
    }
  }

  /**
   * Create a recording destination for capturing audio
   */
  createRecordingDestination(): MediaStreamAudioDestinationNode | null {
    if (!this._audioContext || !this._masterGain) return null;
    
    this.recordingDestination = this._audioContext.createMediaStreamDestination();
    this._masterGain.connect(this.recordingDestination);
    
    return this.recordingDestination;
  }

  /**
   * Disconnect recording destination
   */
  disconnectRecordingDestination(): void {
    if (this.recordingDestination && this._masterGain) {
      try {
        this._masterGain.disconnect(this.recordingDestination);
      } catch {
        // Already disconnected
      }
      this.recordingDestination = null;
    }
  }

  /**
   * Configure instrument settings
   */
  setInstrument(config: AudioEngineConfig): void {
    this.instrument = config.instrument;
    this.isDrum = config.isDrum;
  }

  /**
   * Get waveform type based on instrument
   */
  private getWaveform(): WaveformType {
    if (this.isDrum) return 'triangle';
    
    switch (this.instrument) {
      case 29: // Electric Guitar
      case 33: // Electric Bass
        return 'sawtooth';
      case 81: // Lead Synth
      case 85: // Retrowave
        return 'square';
      case 48: // Strings
      case 89: // Pad
      case 94: // Ambient
        return 'sine';
      case 4: // Electric Piano
        return 'sine';
      default:
        return 'triangle';
    }
  }

  /**
   * Convert MIDI note to frequency
   */
  private midiToFrequency(midiNote: number): number {
    return 440 * Math.pow(2, (midiNote - 69) / 12);
  }

  /**
   * Play notes with a unique key identifier
   */
  playNotes(key: string, midiNotes: number[], volume: number = 0.5): void {
    if (!this._audioContext || !this._masterGain) return;

    // Stop any existing notes with this key
    this.stopNotes(key);

    const currentTime = this._audioContext.currentTime;
    const waveform = this.getWaveform();
    const oscillators: OscillatorNode[] = [];
    const gainNodes: GainNode[] = [];

    midiNotes.forEach((note, index) => {
      // Create oscillator
      const oscillator = this._audioContext!.createOscillator();
      oscillator.type = waveform;
      oscillator.frequency.value = this.midiToFrequency(note);
      
      // Add slight detune for richness
      const detuneAmount = (index - midiNotes.length / 2) * AUDIO_CONFIG.detuneAmount;
      oscillator.detune.value = detuneAmount;

      // Create gain node for envelope
      const gainNode = this._audioContext!.createGain();
      gainNode.gain.setValueAtTime(0, currentTime);
      
      // ADSR envelope
      const attackTime = this.isDrum ? 0.001 : AUDIO_CONFIG.attackTime;
      const decayTime = this.isDrum ? 0.05 : AUDIO_CONFIG.decayTime;
      const sustainLevel = this.isDrum ? volume * 0.2 : volume * AUDIO_CONFIG.sustainLevel;
      
      gainNode.gain.linearRampToValueAtTime(volume * 0.5, currentTime + attackTime);
      gainNode.gain.exponentialRampToValueAtTime(
        Math.max(sustainLevel, 0.001),
        currentTime + attackTime + decayTime
      );

      // Connect nodes
      oscillator.connect(gainNode);
      gainNode.connect(this._masterGain!);

      // Start oscillator
      oscillator.start(currentTime);

      oscillators.push(oscillator);
      gainNodes.push(gainNode);
    });

    // Store active oscillators
    this.activeOscillators.set(key, { oscillators, gainNodes });
  }

  /**
   * Stop notes with a unique key identifier
   */
  stopNotes(key: string): void {
    const active = this.activeOscillators.get(key);
    if (!active || !this._audioContext) return;

    const currentTime = this._audioContext.currentTime;
    const releaseTime = this.isDrum ? 0.05 : AUDIO_CONFIG.releaseTime;

    active.gainNodes.forEach((gainNode) => {
      try {
        gainNode.gain.cancelScheduledValues(currentTime);
        gainNode.gain.setValueAtTime(gainNode.gain.value, currentTime);
        gainNode.gain.exponentialRampToValueAtTime(0.001, currentTime + releaseTime);
      } catch {
        // Ignore errors from already stopped nodes
      }
    });

    active.oscillators.forEach((oscillator) => {
      try {
        oscillator.stop(currentTime + releaseTime + 0.01);
      } catch {
        // Ignore errors from already stopped oscillators
      }
    });

    this.activeOscillators.delete(key);
  }

  /**
   * Stop all active notes
   */
  stopAll(): void {
    this.activeOscillators.forEach((_, key) => this.stopNotes(key));
  }

  /**
   * Cleanup and dispose
   */
  dispose(): void {
    this.stopAll();
    if (this._audioContext) {
      this._audioContext.close();
      this._audioContext = null;
    }
    this._masterGain = null;
    this.compressor = null;
    this.isInitialized = false;
  }
}

// Singleton instance
let audioEngineInstance: AudioEngine | null = null;

export const getAudioEngine = (): AudioEngine => {
  if (!audioEngineInstance) {
    audioEngineInstance = new AudioEngine();
  }
  return audioEngineInstance;
};
