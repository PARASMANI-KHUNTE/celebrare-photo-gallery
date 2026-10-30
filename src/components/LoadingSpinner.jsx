/**
 * LoadingSpinner Component
 *
 * Displays a centered spinner with a loading message.
 * Shown while the API request is in progress.
 */
function LoadingSpinner() {
  return (
    <div className="flex flex-col items-center justify-center py-20">
      <div
        className="w-10 h-10 border-4 border-gray-200 border-t-gray-900 rounded-full animate-spin"
        role="status"
        aria-label="Loading photos"
      />
      <p className="mt-4 text-gray-500 text-sm">Loading photos...</p>
    </div>
  );
}

export default LoadingSpinner;
