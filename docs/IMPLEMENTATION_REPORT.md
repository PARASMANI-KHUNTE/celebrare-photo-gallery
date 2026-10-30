# Celebrare Photo Gallery — Final Implementation Report

## 1. Features Implemented

| # | Requirement | Status |
|---|-------------|--------|
| 1 | React + Vite project setup | ✅ |
| 2 | Tailwind CSS v4 styling (no UI libraries) | ✅ |
| 3 | Fetch 30 photos from `https://picsum.photos/v2/list?limit=30` | ✅ |
| 4 | Loading spinner during fetch | ✅ |
| 5 | Error message on fetch failure | ✅ |
| 6 | Custom `useFetchPhotos` hook returning `{ photos, loading, error }` | ✅ |
| 7 | `AbortController` for safe unmount/cancellation | ✅ |
| 8 | Responsive grid: 1 col (mobile) / 2 col (tablet) / 4 col (desktop) | ✅ |
| 9 | Photo card: image, author, heart button | ✅ |
| 10 | `photo.id` as React key, meaningful `alt` text, lazy loading | ✅ |
| 11 | Case-insensitive real-time search by author | ✅ |
| 12 | Search filters fetched data (no additional API call) | ✅ |
| 13 | Empty/whitespace query shows all photos | ✅ |
| 14 | `useCallback` on search handler | ✅ |
| 15 | `useMemo` for filtered photo list | ✅ |
| 16 | Favourites managed with `useReducer` (not `useState`) | ✅ |
| 17 | Stores photo IDs (not full objects) | ✅ |
| 18 | Toggle add/remove on heart click | ✅ |
| 19 | Persist to `localStorage` | ✅ |
| 20 | Restore from `localStorage` on init (lazy initializer) | ✅ |
| 21 | Malformed JSON / unavailable storage handled | ✅ |
| 22 | `aria-label` and `aria-pressed` on favourite button | ✅ |
| 23 | "No photos found" message for empty search results | ✅ |
| 24 | README with accurate instructions | ✅ |
| 25 | Production build succeeds | ✅ |

## 2. Files Created / Modified

### Created
| File | Purpose |
|------|---------|
| `src/hooks/useFetchPhotos.js` | Custom hook for API fetching |
| `src/reducers/favoritesReducer.js` | Reducer, action types, and lazy initializer |
| `src/components/Header.jsx` | App title and subtitle |
| `src/components/SearchBar.jsx` | Search input with icon |
| `src/components/PhotoCard.jsx` | Photo card with image, author, heart button |
| `src/components/PhotoGrid.jsx` | Responsive grid + empty state |
| `src/components/LoadingSpinner.jsx` | Animated loading spinner |
| `src/components/ErrorMessage.jsx` | Error state display |

### Modified
| File | Change |
|------|--------|
| `vite.config.js` | Added `@tailwindcss/vite` plugin |
| `src/index.css` | Replaced with `@import "tailwindcss"` |
| `src/main.jsx` | Cleaned up to render `<App />` |
| `src/App.jsx` | Full rewrite — root component with all hooks |
| `index.html` | Updated `<title>` to "Celebrare Gallery" |
| `README.md` | Complete rewrite with project docs |

### Removed
| File | Reason |
|------|--------|
| `src/App.css` | Unused (Tailwind handles all styling) |
| `src/assets/hero.png`, `react.svg`, `vite.svg` | Boilerplate assets not needed |

## 3. React Hooks & Architecture

```
App.jsx
├── useFetchPhotos()        → { photos, loading, error }
├── useState(searchQuery)   → controlled search input
├── useReducer(favoritesReducer, null, initFavorites)
│   └── useEffect           → persists favorites to localStorage
├── useCallback(handleSearchChange)  → stable ref for SearchBar
├── useCallback(handleToggleFavorite) → stable ref for PhotoGrid
└── useMemo(filteredPhotos) → derived from [photos, searchQuery]
```

> **State ownership is clear:** `useFetchPhotos` owns API state, `App` coordinates search + favourites, `favoritesReducer` owns favourite transitions, presentational components receive props and render UI.

## 4. Build & Lint Results

| Check | Result |
|-------|--------|
| `npm run build` | ✅ 0 errors, built in ~180ms |
| `npm run lint` (oxlint) | ✅ 0 warnings, 0 errors |
| API verification | ✅ 30 photos returned, status 200 |
| Dev server | ✅ Starts on http://localhost:5173 |

## 5. Remaining Issues / Unverified Behaviour

> [!NOTE]
> No browser automation tool (Puppeteer/Chrome DevTools plugin) was available to screenshot or interact with the running app. The following must be verified manually in a browser:

- [ ] Visual appearance of loading spinner, error state, photo grid at all breakpoints
- [ ] Heart icon toggles immediately on click (red filled ↔ gray outline)
- [ ] Favourites survive browser refresh (`localStorage` persistence)
- [ ] Console has no React warnings or errors
- [ ] Mobile / tablet / desktop column counts (1 / 2 / 4)

All code logic has been verified through build, lint, and API testing. The implementation follows the specification exactly.

## 6. Commands to Run the Project

```bash
cd celebrare-photo-gallery
npm install          # Install dependencies (first time only)
npm run dev          # Start development server → http://localhost:5173
npm run build        # Production build → dist/
npm run lint         # Lint with oxlint
```

## 7. What You Must Do Before Submission

1. **Open the app** at `http://localhost:5173` and verify all features work
2. **Test at different screen widths** — resize browser or use DevTools responsive mode
3. **Check the browser console** for any React warnings
4. **Create a public GitHub repository** and push the `celebrare-photo-gallery` folder
5. **Record a 5-minute screen recording** demonstrating:
   - Photos loading, search filtering, favourite toggling, favourites surviving refresh
   - The `useFetchPhotos` hook code and its return values
   - The reducer actions and why `useReducer` is used
   - The `useCallback` and `useMemo` implementation
   - One difficult part and how it was solved
6. **Upload the recording** to Google Drive or YouTube (unlisted)
7. **Submit both links** via the Google Form shared by the recruiter
