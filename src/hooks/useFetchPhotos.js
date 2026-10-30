import { useEffect, useState } from 'react';

/**
 * Custom hook to fetch photos from the Picsum Photos API.
 *
 * Fetches exactly 30 photos on mount and returns the loading/error state.
 * Uses AbortController to safely cancel the request if the component unmounts.
 *
 * @returns {{ photos: Array, loading: boolean, error: string|null }}
 */
export function useFetchPhotos() {
  const [photos, setPhotos] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const controller = new AbortController();

    async function fetchPhotos() {
      try {
        setLoading(true);
        setError(null);

        const response = await fetch(
          'https://picsum.photos/v2/list?limit=30',
          { signal: controller.signal }
        );

        if (!response.ok) {
          throw new Error(`Failed to fetch photos (HTTP ${response.status})`);
        }

        const data = await response.json();

        if (!Array.isArray(data)) {
          throw new Error('Invalid response format from API');
        }

        setPhotos(data);
      } catch (err) {
        // Don't update state if the request was aborted (component unmounted)
        if (err.name === 'AbortError') {
          return;
        }
        setError(err.message || 'An unexpected error occurred');
      } finally {
        // Only set loading to false if not aborted
        if (!controller.signal.aborted) {
          setLoading(false);
        }
      }
    }

    fetchPhotos();

    // Cleanup: abort the request if the component unmounts
    return () => {
      controller.abort();
    };
  }, []);

  return { photos, loading, error };
}
