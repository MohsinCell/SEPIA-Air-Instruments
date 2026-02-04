// ============================================
// Error Overlay Component
// ============================================

interface ErrorOverlayProps {
  message: string;
  onRetry?: () => void;
}

export function ErrorOverlay({ message, onRetry }: ErrorOverlayProps) {
  const handleRetry = () => {
    if (onRetry) {
      onRetry();
    } else {
      window.location.reload();
    }
  };

  return (
    <div className="error-overlay">
      <div className="error-overlay__icon">
        <svg width="48" height="48" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
          <path d="M10.29 3.86L1.82 18a2 2 0 0 0 1.71 3h16.94a2 2 0 0 0 1.71-3L13.71 3.86a2 2 0 0 0-3.42 0z" />
          <line x1="12" y1="9" x2="12" y2="13" />
          <line x1="12" y1="17" x2="12.01" y2="17" />
        </svg>
      </div>
      <h2 className="error-overlay__title">Something went wrong</h2>
      <p className="error-overlay__message">{message}</p>
      <button className="error-overlay__button" onClick={handleRetry}>
        Try Again
      </button>
    </div>
  );
}
