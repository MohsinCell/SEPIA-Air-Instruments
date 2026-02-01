// ============================================
// Loading Overlay Component
// ============================================

interface LoadingOverlayProps {
  message?: string;
  subMessage?: string;
}

export function LoadingOverlay({
  message = 'Initializing hand tracking...',
  subMessage = 'Please allow camera access when prompted',
}: LoadingOverlayProps) {
  return (
    <div className="loading-overlay">
      <div className="loading-overlay__spinner" />
      <p className="loading-overlay__text">{message}</p>
      {subMessage && (
        <p className="loading-overlay__subtext">{subMessage}</p>
      )}
    </div>
  );
}
