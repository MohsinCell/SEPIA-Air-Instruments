// ============================================
// Help Modal Component
// Documentation and usage instructions
// ============================================

import { CloseIcon, HandIcon, MusicNoteIcon, CameraIcon, VolumeIcon, SparklesIcon } from './Icons';
import { useEffect, useCallback } from 'react';

interface HelpModalProps {
  isOpen: boolean;
  onClose: () => void;
}

export function HelpModal({ isOpen, onClose }: HelpModalProps) {
  // Handle escape key
  const handleKeyDown = useCallback((e: KeyboardEvent) => {
    if (e.key === 'Escape') {
      onClose();
    }
  }, [onClose]);

  useEffect(() => {
    if (isOpen) {
      document.addEventListener('keydown', handleKeyDown);
      document.body.style.overflow = 'hidden';
    }
    return () => {
      document.removeEventListener('keydown', handleKeyDown);
      document.body.style.overflow = '';
    };
  }, [isOpen, handleKeyDown]);

  if (!isOpen) return null;

  return (
    <div className="help-modal__overlay" onClick={onClose}>
      <div className="help-modal" onClick={(e) => e.stopPropagation()}>
        <header className="help-modal__header">
          <h2 className="help-modal__title">How to Play</h2>
          <button 
            className="help-modal__close" 
            onClick={onClose}
            aria-label="Close help"
          >
            <CloseIcon size={20} />
          </button>
        </header>

        <div className="help-modal__content">
          {/* Quick Start */}
          <section className="help-modal__section">
            <h3 className="help-modal__section-title">Quick Start</h3>
            <ol className="help-modal__steps">
              <li>Allow camera access when prompted</li>
              <li>Position yourself so your hands are visible</li>
              <li>Raise individual fingers to play notes</li>
              <li>Each finger triggers a different chord or note</li>
            </ol>
          </section>

          {/* Controls */}
          <section className="help-modal__section">
            <h3 className="help-modal__section-title">Controls</h3>
            <div className="help-modal__grid">
              <HelpItem 
                icon={<HandIcon size={24} />}
                title="Hand Gestures"
                description="Raise a finger above its base position to trigger its assigned note. Lower it to stop."
              />
              <HelpItem 
                icon={<MusicNoteIcon size={24} />}
                title="Instruments"
                description="Select from 25+ instruments in the left panel. Each has unique chord mappings."
              />
              <HelpItem 
                icon={<VolumeIcon size={24} />}
                title="Volume"
                description="Adjust the master volume using the slider in the settings panel."
              />
              <HelpItem 
                icon={<SparklesIcon size={24} />}
                title="Visual Effects"
                description="Toggle particle effects and hand skeleton visibility in settings."
              />
            </div>
          </section>

          {/* Finger Mapping */}
          <section className="help-modal__section">
            <h3 className="help-modal__section-title">Finger Mapping</h3>
            <div className="help-modal__hands">
              <div className="help-modal__hand">
                <h4>Left Hand</h4>
                <ul>
                  <li><span>Thumb</span> Primary chord</li>
                  <li><span>Index</span> Secondary chord</li>
                  <li><span>Middle</span> Tertiary chord</li>
                  <li><span>Ring</span> Fourth chord</li>
                  <li><span>Pinky</span> Fifth chord</li>
                </ul>
              </div>
              <div className="help-modal__hand">
                <h4>Right Hand</h4>
                <ul>
                  <li><span>Thumb</span> Sixth chord</li>
                  <li><span>Index</span> Seventh chord</li>
                  <li><span>Middle</span> Eighth chord</li>
                  <li><span>Ring</span> Ninth chord</li>
                  <li><span>Pinky</span> Tenth chord</li>
                </ul>
              </div>
            </div>
            <p className="help-modal__note">
              The specific notes/chords vary by instrument. Check the right panel during play for current mappings.
            </p>
          </section>

          {/* Tips */}
          <section className="help-modal__section">
            <h3 className="help-modal__section-title">Tips for Best Results</h3>
            <ul className="help-modal__tips">
              <li>
                <CameraIcon size={16} />
                <span>Ensure good lighting on your hands</span>
              </li>
              <li>
                <HandIcon size={16} />
                <span>Keep hands 1-2 feet from the camera</span>
              </li>
              <li>
                <MusicNoteIcon size={16} />
                <span>Use headphones for zero latency audio</span>
              </li>
              <li>
                <SparklesIcon size={16} />
                <span>Plain backgrounds work better for tracking</span>
              </li>
            </ul>
          </section>
        </div>

        <footer className="help-modal__footer">
          <button className="help-modal__button" onClick={onClose}>
            Got it, let's play!
          </button>
        </footer>
      </div>
    </div>
  );
}

// Help Item sub-component
interface HelpItemProps {
  icon: React.ReactNode;
  title: string;
  description: string;
}

function HelpItem({ icon, title, description }: HelpItemProps) {
  return (
    <div className="help-modal__item">
      <div className="help-modal__item-icon">{icon}</div>
      <div className="help-modal__item-content">
        <h4 className="help-modal__item-title">{title}</h4>
        <p className="help-modal__item-desc">{description}</p>
      </div>
    </div>
  );
}
