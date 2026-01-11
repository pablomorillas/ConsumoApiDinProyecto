/**
 * Functional component for a search bar.
 *
 * @component
 * @param {Object} props - Component props
 * @param {string} props.searchTerm - Current value of the search input
 * @param {function} props.onSearchChange - Callback function to handle input changes
 * @param {string} [props.placeholder="Search..."] - Placeholder text for the input
 */
function SearchBar({ searchTerm, onSearchChange, placeholder = "Search..." }) {
    return (
        <div className="search-container">
            <label htmlFor="search-input" className="sr-only">
                {placeholder}
            </label>
            <input
                id="search-input"
                type="text"
                placeholder={placeholder}
                value={searchTerm}
                // Calls the function provided by the parent on every change
                onChange={(e) => onSearchChange(e.target.value)}
                className="search-input" aria-label={placeholder}
            />
        </div>
    );
}
export default SearchBar;