/**
 * Favourites Reducer
 *
 * Manages the set of favourited photo IDs using useReducer.
 * Supports toggling a favourite and loading favourites from localStorage.
 */

// Action types
export const TOGGLE_FAVORITE = 'TOGGLE_FAVORITE';
export const LOAD_FAVORITES = 'LOAD_FAVORITES';

/**
 * Reducer function for favourite photo IDs.
 *
 * @param {string[]} state - Current array of favourited photo IDs.
 * @param {Object} action - The dispatched action.
 * @param {string} action.type - Action type (TOGGLE_FAVORITE or LOAD_FAVORITES).
 * @param {string} [action.id] - Photo ID to toggle (for TOGGLE_FAVORITE).
 * @param {string[]} [action.favorites] - Array of IDs to load (for LOAD_FAVORITES).
 * @returns {string[]} Updated array of favourited photo IDs.
 */
export function favoritesReducer(state, action) {
  switch (action.type) {
    case TOGGLE_FAVORITE: {
      const id = action.id;
      if (state.includes(id)) {
        // Remove the ID if already favourited
        return state.filter((favId) => favId !== id);
      }
      // Add the ID if not favourited
      return [...state, id];
    }

    case LOAD_FAVORITES: {
      // Replace state with the provided list
      return Array.isArray(action.favorites) ? action.favorites : [];
    }

    default:
      return state;
  }
}

/**
 * Lazy initializer for useReducer.
 * Reads favourite IDs from localStorage on first render.
 * Handles malformed JSON or missing data gracefully.
 *
 * @returns {string[]} Array of favourite photo IDs from localStorage, or empty array.
 */
export function initFavorites() {
  try {
    const stored = localStorage.getItem('favorites');
    if (stored === null) {
      return [];
    }
    const parsed = JSON.parse(stored);
    // Validate: must be an array of strings
    if (Array.isArray(parsed) && parsed.every((item) => typeof item === 'string')) {
      return parsed;
    }
    return [];
  } catch {
    // Malformed JSON or localStorage unavailable
    return [];
  }
}
