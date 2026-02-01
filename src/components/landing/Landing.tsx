// ============================================
// Landing Page Component
// ============================================

import { INSTRUMENTS } from '../../constants';
import { 
  HandIcon, 
  CameraIcon,
  SparklesIcon,
  ArrowRightIcon,
  RotateIcon,
  SepiaLogo,
  MusicNoteIcon,
  getInstrumentIcon 
} from '../ui/Icons';
import '../../styles/Landing.css';

interface LandingProps {
  onStart: () => void;
}

export function Landing({ onStart }: LandingProps) {
  // Get unique icon IDs for display (limit to 8 varied icons)
  const uniqueIcons = [...new Set(INSTRUMENTS.map(i => i.icon))].slice(0, 8);

  return (
    <div className="landing">
      <div className="landing__background">
        <div className="landing__gradient-orb landing__gradient-orb--1" />
        <div className="landing__gradient-orb landing__gradient-orb--2" />
        <div className="landing__gradient-orb landing__gradient-orb--3" />
      </div>
      
      <div className="landing__content">
        <div className="landing__badge">
          <SparklesIcon size={14} />
          <span>Gesture-Powered Music</span>
        </div>

        <div className="landing__icon">
          <SepiaLogo size={64} />
        </div>
        
        <h1 className="landing__title">
          <span className="landing__title-sepia">SEPIA</span>
          <span className="landing__title-instruments">AIR INSTRUMENTS</span>
        </h1>
        
        <p className="landing__subtitle">
          A touchless music performance system powered by hand tracking. Create notes, 
          build chords, and play 60+ instruments using intuitive gestures.
        </p>
        
        <div className="landing__instruments">
          {uniqueIcons.map((iconId, index) => {
            const IconComponent = getInstrumentIcon(iconId);
            return (
              <div 
                key={iconId} 
                className="landing__instrument-icon"
                style={{ animationDelay: `${index * 0.1}s` }}
              >
                <IconComponent size={24} />
              </div>
            );
          })}
        </div>
        
        <button className="landing__start-btn" onClick={onStart}>
          <span>Start Playing</span>
          <ArrowRightIcon size={20} />
        </button>
        
        <p className="landing__hint">
          <CameraIcon size={16} />
          <span>Requires camera access for hand tracking</span>
        </p>

        <p className="landing__hint landing__hint--mobile">
          <RotateIcon size={16} />
          <span>Rotate to landscape mode for the best experience on mobile</span>
        </p>
        
        <div className="landing__features">
          <div className="landing__feature">
            <div className="landing__feature-icon">
              <HandIcon size={28} />
            </div>
            <div className="landing__feature-title">Gesture Control</div>
            <div className="landing__feature-desc">
              Each finger triggers a unique note or chord
            </div>
          </div>
          
          <div className="landing__feature">
            <div className="landing__feature-icon">
              <MusicNoteIcon size={28} />
            </div>
            <div className="landing__feature-title">60+ Instruments</div>
            <div className="landing__feature-desc">
              Piano, guitar, synths, brass, world instruments and more
            </div>
          </div>
          
          <div className="landing__feature">
            <div className="landing__feature-icon">
              <SparklesIcon size={28} />
            </div>
            <div className="landing__feature-title">Visual Feedback</div>
            <div className="landing__feature-desc">
              Beautiful particle effects and real-time hand tracking
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
