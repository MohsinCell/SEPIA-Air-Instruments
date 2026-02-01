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
      <div className="error-overlay__icon">⚠️</div>
      <h2 className="error-overlay__title">Something went wrong</h2>
      <p className="error-overlay__message">{message}</p>
      <button className="error-overlay__button" onClick={handleRetry}>
        Try Again
      </button>
    </div>
  );
}
