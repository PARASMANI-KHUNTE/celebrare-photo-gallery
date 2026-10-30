import PhotoCard from './PhotoCard';

/**
 * PhotoGrid Component
 *
 * Renders a responsive grid of photo cards.
 * Displays a "no results" message when the filtered list is empty.
 *
 * Grid layout:
 *   - Mobile:  1 column
 *   - Tablet:  2 columns (md breakpoint)
 *   - Desktop: 4 columns (lg breakpoint)
 *
 * @param {Object} props
 * @param {Array} props.photos - Array of photo objects to display.
 * @param {string[]} props.favorites - Array of favourited photo IDs.
 * @param {Function} props.onToggleFavorite - Callback to toggle a photo's favourite state.
 */
function PhotoGrid({ photos, favorites, onToggleFavorite }) {
  if (photos.length === 0) {
    return (
      <div className="text-center py-16">
        <svg
          xmlns="http://www.w3.org/2000/svg"
          fill="none"
          viewBox="0 0 24 24"
          strokeWidth={1.5}
          stroke="currentColor"
          className="w-12 h-12 mx-auto text-gray-300 mb-4"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            d="m21 21-5.197-5.197m0 0A7.5 7.5 0 1 0 5.196 5.196a7.5 7.5 0 0 0 10.607 10.607Z"
          />
        </svg>
        <p className="text-gray-500 text-lg font-medium">No photos found</p>
        <p className="text-gray-400 text-sm mt-1">
          Try a different search term
        </p>
      </div>
    );
  }

  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
      {photos.map((photo) => (
        <PhotoCard
          key={photo.id}
          photo={photo}
          isFavorite={favorites.includes(photo.id)}
          onToggleFavorite={onToggleFavorite}
        />
      ))}
    </div>
  );
}

export default PhotoGrid;
