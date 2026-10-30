import { useCallback, useEffect, useMemo, useReducer, useState } from 'react';

import Header from './components/Header';
import SearchBar from './components/SearchBar';
import PhotoGrid from './components/PhotoGrid';
import LoadingSpinner from './components/LoadingSpinner';
import ErrorMessage from './components/ErrorMessage';
import { useFetchPhotos } from './hooks/useFetchPhotos';
import {
  favoritesReducer,
  initFavorites,
  TOGGLE_FAVORITE,
} from './reducers/favoritesReducer';

/**
 * App Component
 *
 * Root component that coordinates:
 *   - Photo fetching via useFetchPhotos hook
 *   - Search filtering via useState + useCallback + useMemo
 *   - Favourite management via useReducer + localStorage persistence
 */
function App() {
  // --- Fetch photos from the Picsum API ---
  const { photos, loading, error } = useFetchPhotos();

  // --- Search state ---
  const [searchQuery, setSearchQuery] = useState('');

  // --- Favourites state (useReducer with lazy initializer) ---
  const [favorites, dispatch] = useReducer(
    favoritesReducer,
    null, // initial arg (unused, lazy initializer reads localStorage)
    initFavorites
  );

  // --- Persist favourites to localStorage whenever they change ---
  useEffect(() => {
    try {
      localStorage.setItem('favorites', JSON.stringify(favorites));
    } catch {
      // localStorage might be full or unavailable; silently ignore
    }
  }, [favorites]);

  // --- Search handler (useCallback for stable reference) ---
  const handleSearchChange = useCallback((e) => {
    setSearchQuery(e.target.value);
  }, []);

  // --- Toggle favourite handler ---
  const handleToggleFavorite = useCallback((id) => {
    dispatch({ type: TOGGLE_FAVORITE, id });
  }, []);

  // --- Filtered photos (useMemo for memoized computation) ---
  const filteredPhotos = useMemo(() => {
    const trimmed = searchQuery.trim();

    // Empty or whitespace-only query shows all photos
    if (trimmed === '') {
      return photos;
    }

    const lowerQuery = trimmed.toLowerCase();
    return photos.filter((photo) =>
      photo.author.toLowerCase().includes(lowerQuery)
    );
  }, [photos, searchQuery]);

  return (
    <div className="min-h-screen bg-gray-50">
      <Header />

      <main className="max-w-7xl mx-auto px-4 py-8 sm:px-6 lg:px-8">
        {/* Show search bar only when photos have loaded successfully */}
        {!loading && !error && photos.length > 0 && (
          <SearchBar
            searchQuery={searchQuery}
            onSearchChange={handleSearchChange}
          />
        )}

        {/* Loading state */}
        {loading && <LoadingSpinner />}

        {/* Error state */}
        {error && <ErrorMessage message={error} />}

        {/* Photo grid (only when loaded and no error) */}
        {!loading && !error && (
          <PhotoGrid
            photos={filteredPhotos}
            favorites={favorites}
            onToggleFavorite={handleToggleFavorite}
          />
        )}
      </main>
    </div>
  );
}

export default App;
