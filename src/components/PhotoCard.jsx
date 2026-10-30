/**
 * PhotoCard Component
 *
 * Displays a single photo with its image, author name, and a favourite toggle button.
 * The heart icon changes appearance based on whether the photo is favourited.
 *
 * @param {Object} props
 * @param {Object} props.photo - Photo object from the Picsum API.
 * @param {string} props.photo.id - Unique photo ID.
 * @param {string} props.photo.author - Author name.
 * @param {string} props.photo.download_url - Full-resolution image URL.
 * @param {boolean} props.isFavorite - Whether this photo is currently favourited.
 * @param {Function} props.onToggleFavorite - Callback to toggle the favourite state.
 */
function PhotoCard({ photo, isFavorite, onToggleFavorite }) {
  return (
    <div className="bg-white rounded-lg border border-gray-200 shadow-sm overflow-hidden
                    hover:shadow-md transition-shadow duration-200">
      {/* Photo image */}
      <div className="aspect-[4/3] overflow-hidden bg-gray-100">
        <img
          src={photo.download_url}
          alt={`Photo by ${photo.author}`}
          loading="lazy"
          className="w-full h-full object-cover"
        />
      </div>

      {/* Card footer: author name and favourite button */}
      <div className="px-4 py-3 flex items-center justify-between">
        <p className="text-sm font-medium text-gray-800 truncate mr-2">
          {photo.author}
        </p>

        <button
          onClick={() => onToggleFavorite(photo.id)}
          aria-label={isFavorite ? 'Remove from favourites' : 'Add to favourites'}
          aria-pressed={isFavorite}
          className="flex-shrink-0 p-1.5 rounded-full hover:bg-gray-100
                     transition-colors duration-150 cursor-pointer"
        >
          {isFavorite ? (
            /* Filled heart (favourited) */
            <svg
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 24 24"
              fill="currentColor"
              className="w-5 h-5 text-red-500"
            >
              <path d="m11.645 20.91-.007-.003-.022-.012a15.247 15.247 0 0 1-.383-.218 25.18 25.18 0 0 1-4.244-3.17C4.688 15.36 2.25 12.174 2.25 8.25 2.25 5.322 4.714 3 7.688 3A5.5 5.5 0 0 1 12 5.052 5.5 5.5 0 0 1 16.313 3c2.973 0 5.437 2.322 5.437 5.25 0 3.925-2.438 7.111-4.739 9.256a25.175 25.175 0 0 1-4.244 3.17 15.247 15.247 0 0 1-.383.219l-.022.012-.007.004-.003.001a.752.752 0 0 1-.704 0l-.003-.001Z" />
            </svg>
          ) : (
            /* Outline heart (not favourited) */
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              strokeWidth={1.5}
              stroke="currentColor"
              className="w-5 h-5 text-gray-400"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M21 8.25c0-2.485-2.099-4.5-4.688-4.5-1.935 0-3.597 1.126-4.312 2.733-.715-1.607-2.377-2.733-4.313-2.733C5.1 3.75 3 5.765 3 8.25c0 7.22 9 12 9 12s9-4.78 9-12Z"
              />
            </svg>
          )}
        </button>
      </div>
    </div>
  );
}

export default PhotoCard;
