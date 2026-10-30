# Celebrare Photo Gallery

A responsive photo gallery built with React and Vite for the Celebrare Frontend React Intern Pre-Screening Assignment.

## Features

- **Photo Grid** — Fetches and displays 30 photos from the Picsum Photos API in a responsive grid (1 column on mobile, 2 on tablet, 4 on desktop).
- **Search Filter** — Real-time, case-insensitive filtering by author name. Filters the already-fetched data without making additional API requests.
- **Favourites** — Toggle favourites by clicking the heart icon. Favourite photo IDs are persisted in browser `localStorage` and survive page refreshes.
- **Loading & Error States** — A spinner is shown while photos are loading; a clear error message is displayed if the API request fails.

## Tech Stack

- **React 19** — Functional components and hooks (`useState`, `useEffect`, `useReducer`, `useCallback`, `useMemo`)
- **Vite** — Fast development server and build tool
- **Tailwind CSS v4** — Utility-first CSS framework (via `@tailwindcss/vite` plugin)

## API

Photos are fetched from:

```
https://picsum.photos/v2/list?limit=30
```

## Getting Started

### Prerequisites

- Node.js (v18 or later recommended)
- npm

### Installation

```bash
git clone <your-repo-url>
cd celebrare-photo-gallery
npm install
```

### Development

```bash
npm run dev
```

Open [http://localhost:5173](http://localhost:5173) in your browser.

### Production Build

```bash
npm run build
```

The built files will be in the `dist/` directory.

### Lint

```bash
npm run lint
```

## Project Structure

```
src/
├── components/
│   ├── Header.jsx          # App header with title and subtitle
│   ├── SearchBar.jsx       # Search input for filtering by author
│   ├── PhotoCard.jsx       # Individual photo card with favourite toggle
│   ├── PhotoGrid.jsx       # Responsive grid layout for photo cards
│   ├── LoadingSpinner.jsx  # Loading state indicator
│   └── ErrorMessage.jsx    # Error state display
├── hooks/
│   └── useFetchPhotos.js   # Custom hook for API data fetching
├── reducers/
│   └── favoritesReducer.js # useReducer logic for favourite state
├── App.jsx                 # Root component coordinating all state
├── index.css               # Tailwind CSS entry point
└── main.jsx                # React DOM entry point
```

## Key Implementation Details

- **`useFetchPhotos`** — Custom hook that returns `{ photos, loading, error }`. Uses `AbortController` to cancel in-flight requests on unmount.
- **`favoritesReducer`** — Manages favourite IDs with `useReducer`. Initializes from `localStorage` via a lazy initializer; persists changes with `useEffect`. Handles malformed JSON gracefully.
- **`useCallback`** — Wraps the search handler to provide a stable function reference.
- **`useMemo`** — Derives the filtered photo list from the full photos array and the search query, recomputing only when either changes.

## Notes

- Favourites are stored in browser `localStorage` under the key `"favorites"`. They persist across page refreshes but are local to the browser.
- No UI component libraries (Material UI, Ant Design, Bootstrap, etc.) are used — all styling is done with Tailwind CSS utility classes.
