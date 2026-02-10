/**
 * Functional component for a search bar.
 *
 * @component
 * @param {Object} props - Component props
 * @param {string} props.searchTerm - Current value of the search input
 * @param {function} props.onSearchChange - Callback function to handle input changes
 * @param {string} [props.placeholder="Search..."] - Placeholder text for the input
 */
function SearchBar({ searchTerm, onSearchChange, placeholder = "Buscar..." }) {
  return (
    <div className="w-full relative">
      <label htmlFor="search-input" className="sr-only">{placeholder}</label>
      <input
        id="search-input"
        type="text"
        placeholder={placeholder}
        value={searchTerm}
        onChange={(e) => onSearchChange(e.target.value)}
        className="w-full p-3 border-2 rounded-lg shadow-inner focus:outline-none focus:ring-2 transition duration-150 ease-in-out"
        style={{
          borderColor: "var(--color-black-3)",
          backgroundColor: "var(--color-secondary)",
          color: "var(--color-black-1)",
        }}
        onFocus={(e) => (e.currentTarget.style.borderColor = "var(--color-primary)")}
        onBlur={(e) => (e.currentTarget.style.borderColor = "var(--color-black-3)")}
        aria-label={placeholder}
      />
    </div>
  );
}

export default SearchBar;