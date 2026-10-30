/**
 * SearchBar Component
 *
 * Renders a search input that filters photos by author name.
 * Receives the search query and change handler as props.
 *
 * @param {Object} props
 * @param {string} props.searchQuery - Current search query value.
 * @param {Function} props.onSearchChange - Callback fired when the input value changes.
 */
function SearchBar({ searchQuery, onSearchChange }) {
  return (
    <div className="w-full max-w-md mx-auto mb-8">
      <label htmlFor="search" className="sr-only">
        Search photos by author
      </label>
      <div className="relative">
        {/* Search icon */}
        <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
          <svg
            className="h-5 w-5 text-gray-400"
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 20 20"
            fill="currentColor"
            aria-hidden="true"
          >
            <path
              fillRule="evenodd"
              d="M9 3.5a5.5 5.5 0 100 11 5.5 5.5 0 000-11zM2 9a7 7 0 1112.452 4.391l3.328 3.329a.75.75 0 11-1.06 1.06l-3.329-3.328A7 7 0 012 9z"
              clipRule="evenodd"
            />
          </svg>
        </div>

        <input
          type="text"
          id="search"
          placeholder="Search by author name..."
          value={searchQuery}
          onChange={onSearchChange}
          className="block w-full pl-10 pr-4 py-2.5 border border-gray-300 rounded-lg
                     bg-white text-gray-900 placeholder-gray-400
                     focus:outline-none focus:ring-2 focus:ring-gray-900 focus:border-transparent
                     text-sm transition-shadow"
        />
      </div>
    </div>
  );
}

export default SearchBar;
