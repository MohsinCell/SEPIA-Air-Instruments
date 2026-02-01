// ============================================
// Right Panel Component
// ============================================

import type { InstrumentPreset, NoteHistoryItem, FingerName } from '../../types';
import { FINGER_NAMES } from '../../constants';

interface RightPanelProps {
  instrument: InstrumentPreset;
  activeFingers: Set<string>;
  noteHistory: NoteHistoryItem[];
}

export function RightPanel({
  instrument,
  activeFingers,
  noteHistory,
}: RightPanelProps) {
  return (
    <aside className="panel-right">
      <div className="panel-right__content">
        {/* Left Hand Mapping */}
        <FingerMappingSection
          title="Left Hand"
          handSide="left"
          instrument={instrument}
          activeFingers={activeFingers}
        />

        {/* Right Hand Mapping */}
        <FingerMappingSection
          title="Right Hand"
          handSide="right"
          instrument={instrument}
          activeFingers={activeFingers}
        />

        {/* Note History */}
        <div className="note-history">
          <h3 className="note-history__title">Recent Notes</h3>
          <div className="note-history__list">
            {noteHistory.length > 0 ? (
              noteHistory
                .slice()
                .reverse()
                .slice(0, 10)
                .map((item, index) => (
                  <div
                    key={item.id}
                    className="note-history__item"
                    style={{ opacity: 1 - index * 0.08 }}
                  >
                    <div
                      className="note-history__dot"
                      style={{ backgroundColor: item.color }}
                    />
                    <span className="note-history__hand">
                      {item.hand[0]}:
                    </span>
                    <span
                      className="note-history__note"
                      style={{ color: item.color }}
                    >
                      {item.note}
                    </span>
                  </div>
                ))
            ) : (
              <p className="note-history__empty">No notes played yet</p>
            )}
          </div>
        </div>
      </div>
    </aside>
  );
}

// Finger Mapping Section Sub-component
interface FingerMappingSectionProps {
  title: string;
  handSide: 'left' | 'right';
  instrument: InstrumentPreset;
  activeFingers: Set<string>;
}

function FingerMappingSection({
  title,
  handSide,
  instrument,
  activeFingers,
}: FingerMappingSectionProps) {
  const fingerConfig = instrument[handSide];

  return (
    <div className="finger-mapping">
      <h3 className="finger-mapping__title">{title}</h3>
      <div className="finger-mapping__list">
        {FINGER_NAMES.map((fingerName) => {
          const noteConfig = fingerConfig[fingerName as FingerName];
          const isActive = activeFingers.has(`${handSide}_${fingerName}`);

          return (
            <div
              key={fingerName}
              className={`finger-mapping__item ${isActive ? 'finger-mapping__item--active' : ''}`}
            >
              <div
                className="finger-mapping__dot"
                style={{
                  backgroundColor: noteConfig.color,
                  color: noteConfig.color,
                }}
              />
              <span className="finger-mapping__finger">{fingerName}</span>
              <span
                className="finger-mapping__note"
                style={{ color: isActive ? noteConfig.color : 'var(--color-text-secondary)' }}
              >
                {noteConfig.name}
              </span>
            </div>
          );
        })}
      </div>
    </div>
  );
}
