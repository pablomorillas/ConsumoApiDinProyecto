import { useState } from "react";

/**
 * Functional component for a search bar with swipe gesture support.
 *
 * @component
 * @param {Object} props - Component props
 * @param {string} props.searchTerm - Current value of the search input
 * @param {function} props.onSearchChange - Callback function to handle input changes
 * @param {string} [props.placeholder="Search..."] - Placeholder text for the input
 * @param {React.ReactNode} [props.children] - Optional content to render next to the search input
 * @param {function} [props.onVoiceActivate] - Callback to trigger voice search
 * @param {boolean} [props.isMobile=false] - Whether the device is mobile
 * @param {boolean} [props.voiceSupported=false] - Whether voice recognition is supported
 */
function SearchBar({
  searchTerm,
  onSearchChange,
  placeholder = "Buscar...",
  children,
  onVoiceActivate,
  isMobile = false,
  voiceSupported = false
}) {
  const [touchStart, setTouchStart] = useState(null);
  const [swiping, setSwiping] = useState(false);

  const handleTouchStart = (e) => {
    setTouchStart(e.touches[0].clientX);
    setSwiping(false);
  };

  const handleTouchMove = (e) => {
    if (!touchStart) return;

    const currentTouch = e.touches[0].clientX;
    const distance = currentTouch - touchStart;

    // Visual feedback when swiping right
    if (distance > 20) {
      setSwiping(true);
    }
  };

  const handleTouchEnd = (e) => {
    if (!touchStart) return;

    const touchEnd = e.changedTouches[0].clientX;
    const distance = touchEnd - touchStart;

    // Right swipe threshold: 50px
    if (distance > 50 && onVoiceActivate) {
      onVoiceActivate();
    }

    setTouchStart(null);
    setSwiping(false);
  };

  const showHint = isMobile && voiceSupported;

  return (
    <div className="search-container" style={{ display: 'flex', alignItems: 'center', gap: '0.5rem', position: 'relative' }}>
      <label htmlFor="search-input" className="sr-only">{placeholder}</label>
      <div
        style={{
          width: '100%',
          position: 'relative',
          transition: 'transform 0.2s ease'
        }}
        onTouchStart={handleTouchStart}
        onTouchMove={handleTouchMove}
        onTouchEnd={handleTouchEnd}
      >
        <input
          id="search-input"
          type="text"
          placeholder={placeholder}
          value={searchTerm}
          onChange={(e) => onSearchChange(e.target.value)}
          className="search-input"
          aria-label={placeholder}
          style={{
            marginBottom: 0,
            width: '100%'
          }}
        />
        {showHint && (
          <div
            className="swipe-hint"
            style={{
              position: 'absolute',
              right: '12px',
              top: '50%',
              transform: 'translateY(-50%)',
              fontSize: '0.75rem',
              color: 'var(--color-grey-3)',
              pointerEvents: 'none',
              opacity: searchTerm ? 0 : 0.7,
              transition: 'opacity 0.3s ease'
            }}
          >
            Desliza → para voz
          </div>
        )}
      </div>
      {children}
    </div>
  );
}

export default SearchBar;