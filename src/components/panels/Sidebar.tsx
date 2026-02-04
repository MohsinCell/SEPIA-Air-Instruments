// ============================================
// Sidebar Component (Left Panel)
// ============================================

import type { InstrumentPreset } from '../../types';
import { INSTRUMENTS } from '../../constants';
import { 
  getInstrumentIcon, 
  SepiaLogo, 
  VolumeIcon, 
  SettingsIcon, 
  HelpIcon, 
  RecordIcon, 
  StopRecordIcon, 
  DownloadIcon 
} from '../ui/Icons';

interface SidebarProps {
  selectedInstrumentId: string;
  onSelectInstrument: (id: string) => void;
  volume: number;
  onVolumeChange: (volume: number) => void;
  showSkeleton: boolean;
  onShowSkeletonChange: (show: boolean) => void;
  showParticles: boolean;
  onShowParticlesChange: (show: boolean) => void;
  onHelpClick?: () => void;
  onHomeClick?: () => void;
  // Recording props
  isRecording?: boolean;
  onStartRecording?: () => void;
  onStopRecording?: () => void;
  recordingDuration?: number;
  lastRecordingUrl?: string | null;
}

export function Sidebar({
  selectedInstrumentId,
  onSelectInstrument,
  volume,
  onVolumeChange,
  showSkeleton,
  onShowSkeletonChange,
  showParticles,
  onShowParticlesChange,
  onHelpClick,
  onHomeClick,
  isRecording = false,
  onStartRecording,
  onStopRecording,
  recordingDuration = 0,
  lastRecordingUrl,
}: SidebarProps) {
  // Format recording duration as MM:SS
  const formatDuration = (seconds: number) => {
    const mins = Math.floor(seconds / 60);
    const secs = seconds % 60;
    return `${mins.toString().padStart(2, '0')}:${secs.toString().padStart(2, '0')}`;
  };

  // Handle download
  const handleDownload = () => {
    if (!lastRecordingUrl) return;
    const a = document.createElement('a');
    a.href = lastRecordingUrl;
    a.download = `sepia-recording-${Date.now()}.webm`;
    document.body.appendChild(a);
    a.click();
    document.body.removeChild(a);
  };

  // Group instruments by GM category
  const categories = [
    { id: 'piano', label: 'Piano' },
    { id: 'chromatic', label: 'Chromatic Percussion' },
    { id: 'organ', label: 'Organ' },
    { id: 'guitar', label: 'Guitar' },
    { id: 'bass', label: 'Bass' },
    { id: 'strings', label: 'Strings' },
    { id: 'ensemble', label: 'Ensemble' },
    { id: 'brass', label: 'Brass' },
    { id: 'reed', label: 'Reed' },
    { id: 'pipe', label: 'Pipe' },
    { id: 'synth-lead', label: 'Synth Lead' },
    { id: 'synth-pad', label: 'Synth Pad' },
    { id: 'synth-fx', label: 'Synth FX' },
    { id: 'ethnic', label: 'Ethnic' },
    { id: 'percussive', label: 'Percussive' },
    { id: 'sound-fx', label: 'Sound FX' },
  ];

  const instrumentsByCategory = categories.map(cat => ({
    ...cat,
    instruments: INSTRUMENTS.filter(i => i.category === cat.id),
  }));

  return (
    <aside className="sidebar">
      <header className="sidebar__header">
        <a 
          href="#" 
          className="sidebar__brand" 
          onClick={(e) => { e.preventDefault(); onHomeClick?.(); }}
          title="Back to home"
        >
          <span className="sidebar__logo">
            <SepiaLogo size={28} />
          </span>
          <span className="sidebar__title">Sepia</span>
        </a>
        {onHelpClick && (
          <button 
            className="sidebar__help-btn" 
            onClick={onHelpClick}
            aria-label="Help"
            title="How to play"
          >
            <HelpIcon size={18} />
          </button>
        )}
      </header>

<div className="sidebar__content">
        {/* Recording Section */}
        {(onStartRecording || onStopRecording) && (
          <section className="sidebar__section">
            <h3 className="sidebar__section-title">
              <RecordIcon size={14} style={{ marginRight: '6px', opacity: 0.7 }} />
              Recording
            </h3>
            <div className="recording-panel">
              <div className="recording-panel__controls">
                {isRecording ? (
                  <button 
                    className="recording-panel__btn recording-panel__btn--stop"
                    onClick={onStopRecording}
                    title="Stop Recording"
                  >
                    <StopRecordIcon size={18} />
                    <span>Stop</span>
                  </button>
                ) : (
                  <button 
                    className="recording-panel__btn recording-panel__btn--record"
                    onClick={onStartRecording}
                    title="Start Recording"
                  >
                    <RecordIcon size={18} />
                    <span>Record</span>
                  </button>
                )}
                
                {lastRecordingUrl && !isRecording && (
                  <button 
                    className="recording-panel__btn recording-panel__btn--download"
                    onClick={handleDownload}
                    title="Download Recording"
                  >
                    <DownloadIcon size={18} />
                    <span>Save</span>
                  </button>
                )}
              </div>
              
              {isRecording && (
                <div className="recording-panel__status">
                  <span className="recording-panel__indicator" />
                  <span className="recording-panel__time">{formatDuration(recordingDuration)}</span>
                </div>
              )}
            </div>
          </section>
        )}

        {/* Settings - Moved before Instruments */}
        <section className="sidebar__section">
          <h3 className="sidebar__section-title">
            <SettingsIcon size={14} style={{ marginRight: '6px', opacity: 0.7 }} />
            Sound Settings
          </h3>
          <div className="settings-panel">
            {/* Volume */}
            <div className="settings-panel__row">
              <div className="settings-panel__slider-header">
                <span className="settings-panel__label">
                  <VolumeIcon size={14} style={{ marginRight: '6px' }} />
                  Volume
                </span>
                <span className="settings-panel__slider-value">{volume}%</span>
              </div>
              <input
                type="range"
                min="0"
                max="100"
                value={volume}
                onChange={(e) => onVolumeChange(Number(e.target.value))}
              />
            </div>

            {/* Show Skeleton */}
            <div className="settings-panel__row">
              <label className="settings-panel__checkbox">
                <input
                  type="checkbox"
                  checked={showSkeleton}
                  onChange={(e) => onShowSkeletonChange(e.target.checked)}
                />
                <span>Show hand skeleton</span>
              </label>
            </div>

            {/* Show Particles */}
            <div className="settings-panel__row">
              <label className="settings-panel__checkbox">
                <input
                  type="checkbox"
                  checked={showParticles}
                  onChange={(e) => onShowParticlesChange(e.target.checked)}
                />
                <span>Show particles</span>
              </label>
            </div>
          </div>
        </section>

        {/* Instruments List */}
        {instrumentsByCategory.map(category => (
          category.instruments.length > 0 && (
            <section key={category.id} className="sidebar__section">
              <h3 className="sidebar__section-title">{category.label}</h3>
              <div className="instrument-list">
                {category.instruments.map(instrument => (
                  <InstrumentButton
                    key={instrument.id}
                    instrument={instrument}
                    isActive={instrument.id === selectedInstrumentId}
                    onClick={() => onSelectInstrument(instrument.id)}
                  />
                ))}
              </div>
            </section>
          )
        ))}
      </div>
    </aside>
  );
}

// Instrument Button Sub-component
interface InstrumentButtonProps {
  instrument: InstrumentPreset;
  isActive: boolean;
  onClick: () => void;
}

function InstrumentButton({ instrument, isActive, onClick }: InstrumentButtonProps) {
  const IconComponent = getInstrumentIcon(instrument.icon);
  
  return (
    <button
      className={`instrument-item ${isActive ? 'instrument-item--active' : ''}`}
      onClick={onClick}
      aria-pressed={isActive}
    >
      <span className="instrument-item__icon">
        <IconComponent size={20} />
      </span>
      <div className="instrument-item__info">
        <div className="instrument-item__name">{instrument.name}</div>
        <div className="instrument-item__desc">{instrument.description}</div>
      </div>
    </button>
  );
}
