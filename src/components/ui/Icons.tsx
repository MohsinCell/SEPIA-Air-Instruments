// ============================================
// SVG Icon Components
// Professional instrument and UI icons
// ============================================

import type { FC, SVGProps } from 'react';

type IconProps = SVGProps<SVGSVGElement> & {
  size?: number;
};

const defaultProps: IconProps = {
  size: 24,
  fill: 'none',
  stroke: 'currentColor',
  strokeWidth: 1.5,
  strokeLinecap: 'round' as const,
  strokeLinejoin: 'round' as const,
};

// ============================================
// Instrument Icons
// ============================================

export const PianoIcon: FC<IconProps> = ({ size = 24, ...props }) => (
  <svg width={size} height={size} viewBox="0 0 24 24" {...defaultProps} {...props}>
    <rect x="2" y="4" width="20" height="16" rx="2" />
    <line x1="6" y1="4" x2="6" y2="14" />
    <line x1="10" y1="4" x2="10" y2="14" />
    <line x1="14" y1="4" x2="14" y2="14" />
    <line x1="18" y1="4" x2="18" y2="14" />
    <rect x="4" y="4" width="3" height="8" fill="currentColor" opacity="0.3" />
    <rect x="8" y="4" width="3" height="8" fill="currentColor" opacity="0.3" />
    <rect x="13" y="4" width="3" height="8" fill="currentColor" opacity="0.3" />
    <rect x="17" y="4" width="3" height="8" fill="currentColor" opacity="0.3" />
  </svg>
);

export const GuitarIcon: FC<IconProps> = ({ size = 24, ...props }) => (
  <svg width={size} height={size} viewBox="0 0 24 24" {...defaultProps} {...props}>
    <path d="M19 3l-2 2-1-1-2 2 1 1-3.5 3.5a5.5 5.5 0 1 0 2 2L17 9l1 1 2-2-1-1 2-2-2-2z" />
    <circle cx="9" cy="15" r="2" />
  </svg>
);

export const SynthIcon: FC<IconProps> = ({ size = 24, ...props }) => (
  <svg width={size} height={size} viewBox="0 0 24 24" {...defaultProps} {...props}>
    <rect x="2" y="6" width="20" height="12" rx="2" />
    <circle cx="6" cy="10" r="1.5" fill="currentColor" />
    <circle cx="10" cy="10" r="1.5" fill="currentColor" />
    <circle cx="14" cy="10" r="1.5" fill="currentColor" />
    <circle cx="18" cy="10" r="1.5" fill="currentColor" />
    <line x1="5" y1="14" x2="7" y2="14" />
    <line x1="9" y1="14" x2="11" y2="14" />
    <line x1="13" y1="14" x2="15" y2="14" />
    <line x1="17" y1="14" x2="19" y2="14" />
  </svg>
);

export const DrumIcon: FC<IconProps> = ({ size = 24, ...props }) => (
  <svg width={size} height={size} viewBox="0 0 24 24" {...defaultProps} {...props}>
    <ellipse cx="12" cy="8" rx="9" ry="4" />
    <path d="M3 8v8c0 2.2 4 4 9 4s9-1.8 9-4V8" />
    <line x1="3" y1="12" x2="21" y2="12" opacity="0.3" />
  </svg>
);

export const ViolinIcon: FC<IconProps> = ({ size = 24, ...props }) => (
  <svg width={size} height={size} viewBox="0 0 24 24" {...defaultProps} {...props}>
    <path d="M12 2v4M9 4h6" />
    <path d="M8 8c-2 0-4 2-4 5s2 5 4 5h8c2 0 4-2 4-5s-2-5-4-5" />
    <ellipse cx="12" cy="13" rx="2" ry="3" />
    <path d="M12 16v6M10 22h4" />
  </svg>
);

export const BrassIcon: FC<IconProps> = ({ size = 24, ...props }) => (
  <svg width={size} height={size} viewBox="0 0 24 24" {...defaultProps} {...props}>
    <path d="M3 12h4l2-3h6l2 3h4" />
    <path d="M7 12v5c0 1.1.9 2 2 2h6c1.1 0 2-.9 2-2v-5" />
    <circle cx="12" cy="7" r="2" />
    <line x1="12" y1="5" x2="12" y2="3" />
    <path d="M5 12c0-3.9 3.1-7 7-7s7 3.1 7 7" opacity="0.3" />
  </svg>
);

export const SaxophoneIcon: FC<IconProps> = ({ size = 24, ...props }) => (
  <svg width={size} height={size} viewBox="0 0 24 24" {...defaultProps} {...props}>
    <path d="M7 3h3l1 2v4c0 1-1 2-2 3l-2 3c-1 2-1 4 0 5l2 2" />
    <circle cx="8" cy="20" r="2" />
    <circle cx="10" cy="8" r="0.5" fill="currentColor" />
    <circle cx="10" cy="10" r="0.5" fill="currentColor" />
    <circle cx="9" cy="12" r="0.5" fill="currentColor" />
  </svg>
);

export const FluteIcon: FC<IconProps> = ({ size = 24, ...props }) => (
  <svg width={size} height={size} viewBox="0 0 24 24" {...defaultProps} {...props}>
    <rect x="2" y="10" width="20" height="4" rx="2" />
    <circle cx="6" cy="12" r="1" fill="currentColor" />
    <circle cx="10" cy="12" r="1" fill="currentColor" />
    <circle cx="14" cy="12" r="1" fill="currentColor" />
    <circle cx="18" cy="12" r="1" fill="currentColor" />
  </svg>
);

export const HarpIcon: FC<IconProps> = ({ size = 24, ...props }) => (
  <svg width={size} height={size} viewBox="0 0 24 24" {...defaultProps} {...props}>
    <path d="M6 2c0 8 2 14 6 18" />
    <path d="M6 2h12c0 8-2 14-6 18" />
    <line x1="8" y1="4" x2="8" y2="16" opacity="0.5" />
    <line x1="10" y1="4" x2="10" y2="17" opacity="0.5" />
    <line x1="12" y1="4" x2="12" y2="18" opacity="0.5" />
    <line x1="14" y1="4" x2="14" y2="17" opacity="0.5" />
    <line x1="16" y1="4" x2="16" y2="16" opacity="0.5" />
  </svg>
);

export const BellIcon: FC<IconProps> = ({ size = 24, ...props }) => (
  <svg width={size} height={size} viewBox="0 0 24 24" {...defaultProps} {...props}>
    <path d="M12 2C8 2 5 5 5 9v5l-2 2v1h18v-1l-2-2V9c0-4-3-7-7-7z" />
    <path d="M9 18c0 1.7 1.3 3 3 3s3-1.3 3-3" />
  </svg>
);

export const WaveIcon: FC<IconProps> = ({ size = 24, ...props }) => (
  <svg width={size} height={size} viewBox="0 0 24 24" {...defaultProps} {...props}>
    <path d="M2 12c2-3 4-3 6 0s4 3 6 0 4-3 6 0" />
    <path d="M2 16c2-3 4-3 6 0s4 3 6 0 4-3 6 0" opacity="0.5" />
    <path d="M2 8c2-3 4-3 6 0s4 3 6 0 4-3 6 0" opacity="0.5" />
  </svg>
);

export const PadIcon: FC<IconProps> = ({ size = 24, ...props }) => (
  <svg width={size} height={size} viewBox="0 0 24 24" {...defaultProps} {...props}>
    <rect x="3" y="3" width="7" height="7" rx="1" />
    <rect x="14" y="3" width="7" height="7" rx="1" />
    <rect x="3" y="14" width="7" height="7" rx="1" />
    <rect x="14" y="14" width="7" height="7" rx="1" />
  </svg>
);

export const OrganIcon: FC<IconProps> = ({ size = 24, ...props }) => (
  <svg width={size} height={size} viewBox="0 0 24 24" {...defaultProps} {...props}>
    <rect x="4" y="14" width="16" height="6" rx="1" />
    <rect x="6" y="8" width="3" height="6" />
    <rect x="10.5" y="5" width="3" height="9" />
    <rect x="15" y="8" width="3" height="6" />
  </svg>
);

export const MalletIcon: FC<IconProps> = ({ size = 24, ...props }) => (
  <svg width={size} height={size} viewBox="0 0 24 24" {...defaultProps} {...props}>
    <rect x="3" y="12" width="18" height="8" rx="1" />
    <rect x="5" y="12" width="2" height="8" fill="currentColor" opacity="0.2" />
    <rect x="9" y="12" width="2" height="8" fill="currentColor" opacity="0.2" />
    <rect x="13" y="12" width="2" height="8" fill="currentColor" opacity="0.2" />
    <rect x="17" y="12" width="2" height="8" fill="currentColor" opacity="0.2" />
    <line x1="8" y1="4" x2="6" y2="12" />
    <circle cx="8" cy="4" r="2" />
  </svg>
);

export const BassIcon: FC<IconProps> = ({ size = 24, ...props }) => (
  <svg width={size} height={size} viewBox="0 0 24 24" {...defaultProps} {...props}>
    <path d="M6 4v16M6 4c4 0 7 2 7 5s-3 5-7 5" />
    <path d="M6 14c3 0 5 1.5 5 3.5S9 21 6 21" />
    <line x1="6" y1="8" x2="10" y2="8" opacity="0.5" />
    <line x1="6" y1="17" x2="9" y2="17" opacity="0.5" />
  </svg>
);

export const ElectronicIcon: FC<IconProps> = ({ size = 24, ...props }) => (
  <svg width={size} height={size} viewBox="0 0 24 24" {...defaultProps} {...props}>
    <rect x="2" y="4" width="20" height="16" rx="2" />
    <circle cx="7" cy="9" r="2" />
    <circle cx="17" cy="9" r="2" />
    <path d="M7 14h10" />
    <path d="M9 16h6" opacity="0.5" />
  </svg>
);

export const SitarIcon: FC<IconProps> = ({ size = 24, ...props }) => (
  <svg width={size} height={size} viewBox="0 0 24 24" {...defaultProps} {...props}>
    <ellipse cx="12" cy="18" rx="6" ry="4" />
    <line x1="12" y1="14" x2="12" y2="2" />
    <circle cx="12" cy="2" r="1" fill="currentColor" />
    <line x1="12" y1="6" x2="14" y2="4" />
    <line x1="12" y1="8" x2="14" y2="6" />
    <line x1="12" y1="10" x2="14" y2="8" />
  </svg>
);

export const KotoIcon: FC<IconProps> = ({ size = 24, ...props }) => (
  <svg width={size} height={size} viewBox="0 0 24 24" {...defaultProps} {...props}>
    <path d="M2 16l20-8v4L2 20v-4z" />
    <line x1="6" y1="13" x2="6" y2="18" opacity="0.5" />
    <line x1="10" y1="11.5" x2="10" y2="16.5" opacity="0.5" />
    <line x1="14" y1="10" x2="14" y2="15" opacity="0.5" />
    <line x1="18" y1="8.5" x2="18" y2="13.5" opacity="0.5" />
  </svg>
);

// ============================================
// UI Icons
// ============================================

export const PlayIcon: FC<IconProps> = ({ size = 24, ...props }) => (
  <svg width={size} height={size} viewBox="0 0 24 24" {...defaultProps} {...props}>
    <polygon points="5 3 19 12 5 21 5 3" fill="currentColor" />
  </svg>
);

export const VolumeIcon: FC<IconProps> = ({ size = 24, ...props }) => (
  <svg width={size} height={size} viewBox="0 0 24 24" {...defaultProps} {...props}>
    <polygon points="11 5 6 9 2 9 2 15 6 15 11 19 11 5" />
    <path d="M15.54 8.46a5 5 0 0 1 0 7.07" />
    <path d="M19.07 4.93a10 10 0 0 1 0 14.14" />
  </svg>
);

export const SettingsIcon: FC<IconProps> = ({ size = 24, ...props }) => (
  <svg width={size} height={size} viewBox="0 0 24 24" {...defaultProps} {...props}>
    <circle cx="12" cy="12" r="3" />
    <path d="M12 1v4M12 19v4M4.22 4.22l2.83 2.83M16.95 16.95l2.83 2.83M1 12h4M19 12h4M4.22 19.78l2.83-2.83M16.95 7.05l2.83-2.83" />
  </svg>
);

export const HelpIcon: FC<IconProps> = ({ size = 24, ...props }) => (
  <svg width={size} height={size} viewBox="0 0 24 24" {...defaultProps} {...props}>
    <circle cx="12" cy="12" r="10" />
    <path d="M9.09 9a3 3 0 0 1 5.83 1c0 2-3 3-3 3" />
    <line x1="12" y1="17" x2="12.01" y2="17" />
  </svg>
);

export const CloseIcon: FC<IconProps> = ({ size = 24, ...props }) => (
  <svg width={size} height={size} viewBox="0 0 24 24" {...defaultProps} {...props}>
    <line x1="18" y1="6" x2="6" y2="18" />
    <line x1="6" y1="6" x2="18" y2="18" />
  </svg>
);

export const HandIcon: FC<IconProps> = ({ size = 24, ...props }) => (
  <svg width={size} height={size} viewBox="0 0 24 24" {...defaultProps} {...props}>
    <path d="M18 11V6a2 2 0 0 0-2-2 2 2 0 0 0-2 2v0M14 10V4a2 2 0 0 0-2-2 2 2 0 0 0-2 2v6" />
    <path d="M10 10.5V6a2 2 0 0 0-2-2 2 2 0 0 0-2 2v8" />
    <path d="M18 8a2 2 0 1 1 4 0v6a8 8 0 0 1-8 8h-2c-2.8 0-4.5-.9-5.7-2.4L3.8 16" />
  </svg>
);

export const CameraIcon: FC<IconProps> = ({ size = 24, ...props }) => (
  <svg width={size} height={size} viewBox="0 0 24 24" {...defaultProps} {...props}>
    <path d="M23 19a2 2 0 0 1-2 2H3a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h4l2-3h6l2 3h4a2 2 0 0 1 2 2z" />
    <circle cx="12" cy="13" r="4" />
  </svg>
);

export const MusicNoteIcon: FC<IconProps> = ({ size = 24, ...props }) => (
  <svg width={size} height={size} viewBox="0 0 24 24" {...defaultProps} {...props}>
    <path d="M9 18V5l12-2v13" />
    <circle cx="6" cy="18" r="3" />
    <circle cx="18" cy="16" r="3" />
  </svg>
);

export const WavesIcon: FC<IconProps> = ({ size = 24, ...props }) => (
  <svg width={size} height={size} viewBox="0 0 24 24" {...defaultProps} {...props}>
    <path d="M2 12h2a2 2 0 0 0 2-2V8a2 2 0 0 1 2-2h0a2 2 0 0 1 2 2v8a2 2 0 0 0 2 2h0a2 2 0 0 0 2-2v-4a2 2 0 0 1 2-2h0a2 2 0 0 1 2 2v2h2" />
  </svg>
);

export const SparklesIcon: FC<IconProps> = ({ size = 24, ...props }) => (
  <svg width={size} height={size} viewBox="0 0 24 24" {...defaultProps} {...props}>
    <path d="M12 3l1.5 4.5L18 9l-4.5 1.5L12 15l-1.5-4.5L6 9l4.5-1.5L12 3z" fill="currentColor" />
    <path d="M5 19l.5 1.5L7 21l-1.5.5L5 23l-.5-1.5L3 21l1.5-.5L5 19z" fill="currentColor" opacity="0.5" />
    <path d="M19 8l.5 1.5L21 10l-1.5.5L19 12l-.5-1.5L17 10l1.5-.5L19 8z" fill="currentColor" opacity="0.5" />
  </svg>
);

export const ChevronRightIcon: FC<IconProps> = ({ size = 24, ...props }) => (
  <svg width={size} height={size} viewBox="0 0 24 24" {...defaultProps} {...props}>
    <polyline points="9 18 15 12 9 6" />
  </svg>
);

export const CheckIcon: FC<IconProps> = ({ size = 24, ...props }) => (
  <svg width={size} height={size} viewBox="0 0 24 24" {...defaultProps} {...props}>
    <polyline points="20 6 9 17 4 12" />
  </svg>
);

export const ArrowRightIcon: FC<IconProps> = ({ size = 24, ...props }) => (
  <svg width={size} height={size} viewBox="0 0 24 24" {...defaultProps} {...props}>
    <line x1="5" y1="12" x2="19" y2="12" />
    <polyline points="12 5 19 12 12 19" />
  </svg>
);

export const GridIcon: FC<IconProps> = ({ size = 24, ...props }) => (
  <svg width={size} height={size} viewBox="0 0 24 24" {...defaultProps} {...props}>
    <rect x="3" y="3" width="7" height="7" />
    <rect x="14" y="3" width="7" height="7" />
    <rect x="14" y="14" width="7" height="7" />
    <rect x="3" y="14" width="7" height="7" />
  </svg>
);

export const LayersIcon: FC<IconProps> = ({ size = 24, ...props }) => (
  <svg width={size} height={size} viewBox="0 0 24 24" {...defaultProps} {...props}>
    <polygon points="12 2 2 7 12 12 22 7 12 2" />
    <polyline points="2 17 12 22 22 17" />
    <polyline points="2 12 12 17 22 12" />
  </svg>
);

export const RotateIcon: FC<IconProps> = ({ size = 24, ...props }) => (
  <svg width={size} height={size} viewBox="0 0 24 24" {...defaultProps} {...props}>
    <rect x="4" y="7" width="16" height="10" rx="2" />
    <path d="M8 3l4 4-4 4" />
    <path d="M2 7h6" />
  </svg>
);

export const SmartphoneIcon: FC<IconProps> = ({ size = 24, ...props }) => (
  <svg width={size} height={size} viewBox="0 0 24 24" {...defaultProps} {...props}>
    <rect x="5" y="2" width="14" height="20" rx="2" />
    <line x1="12" y1="18" x2="12" y2="18" strokeWidth="2" strokeLinecap="round" />
  </svg>
);

export const RecordIcon: FC<IconProps> = ({ size = 24, ...props }) => (
  <svg width={size} height={size} viewBox="0 0 24 24" {...defaultProps} {...props}>
    <circle cx="12" cy="12" r="8" fill="currentColor" />
  </svg>
);

export const StopRecordIcon: FC<IconProps> = ({ size = 24, ...props }) => (
  <svg width={size} height={size} viewBox="0 0 24 24" {...defaultProps} {...props}>
    <rect x="6" y="6" width="12" height="12" rx="1" fill="currentColor" />
  </svg>
);

export const DownloadIcon: FC<IconProps> = ({ size = 24, ...props }) => (
  <svg width={size} height={size} viewBox="0 0 24 24" {...defaultProps} {...props}>
    <path d="M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4" />
    <polyline points="7 10 12 15 17 10" />
    <line x1="12" y1="15" x2="12" y2="3" />
  </svg>
);

// Sepia Logo component - loads from public folder
interface SepiaLogoProps {
  size?: number;
  className?: string;
}

export const SepiaLogo: FC<SepiaLogoProps> = ({ size = 24, className }) => (
  <img 
    src="/sepia.svg" 
    alt="Sepia" 
    width={size} 
    height={size} 
    className={className}
    style={{ display: 'block' }}
  />
);

// Icon map for instrument lookup by icon ID
export const instrumentIcons: Record<string, FC<IconProps>> = {
  'piano': PianoIcon,
  'guitar': GuitarIcon,
  'violin': ViolinIcon,
  'bass': BassIcon,
  'synth': SynthIcon,
  'wave': WaveIcon,
  'electronic': ElectronicIcon,
  'drum': DrumIcon,
  'brass': BrassIcon,
  'saxophone': SaxophoneIcon,
  'flute': FluteIcon,
  'harp': HarpIcon,
  'organ': OrganIcon,
  'mallet': MalletIcon,
  'bell': BellIcon,
  'sitar': SitarIcon,
  'koto': KotoIcon,
  'pad': PadIcon,
};

export const getInstrumentIcon = (iconId: string): FC<IconProps> => {
  return instrumentIcons[iconId] || MusicNoteIcon;
};
