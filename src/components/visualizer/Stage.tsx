// ============================================
// Stage Component (Main Video/Canvas Area)
// ============================================

import { forwardRef } from 'react';
import type { InstrumentPreset } from '../../types';
import { VIDEO_CONFIG } from '../../constants';
import { getInstrumentIcon } from '../ui/Icons';

interface StageProps {
  instrument: InstrumentPreset;
  videoRef: React.RefObject<HTMLVideoElement | null>;
  canvasRef: React.RefObject<HTMLCanvasElement | null>;
}

export const Stage = forwardRef<HTMLDivElement, StageProps>(
  function Stage({ instrument, videoRef, canvasRef }, ref) {
    const IconComponent = getInstrumentIcon(instrument.icon);
    
    return (
      <main className="stage" ref={ref}>
        {/* Hidden Video Element */}
        <video
          ref={videoRef}
          className="stage__video"
          playsInline
          muted
          autoPlay
        />

        {/* Main Canvas */}
        <canvas
          ref={canvasRef}
          className="stage__canvas"
          width={VIDEO_CONFIG.width}
          height={VIDEO_CONFIG.height}
        />

        {/* Top Overlay - Instrument Badge */}
        <div className="stage__overlay-top">
          <div className="stage__instrument-badge">
            <span className="stage__instrument-icon">
              <IconComponent size={24} />
            </span>
            <span className="stage__instrument-name">{instrument.name}</span>
          </div>
        </div>

      </main>
    );
  }
);
