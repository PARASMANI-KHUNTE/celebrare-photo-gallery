/**
 * ErrorMessage Component
 *
 * Displays a user-friendly error message when the API request fails.
 *
 * @param {Object} props
 * @param {string} props.message - The error message to display.
 */
function ErrorMessage({ message }) {
  return (
    <div className="text-center py-16">
      <div className="inline-flex items-center justify-center w-14 h-14 rounded-full bg-red-50 mb-4">
        <svg
          xmlns="http://www.w3.org/2000/svg"
          fill="none"
          viewBox="0 0 24 24"
          strokeWidth={1.5}
          stroke="currentColor"
          className="w-7 h-7 text-red-500"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            d="M12 9v3.75m-9.303 3.376c-.866 1.5.217 3.374 1.948 3.374h14.71c1.73 0 2.813-1.874 1.948-3.374L13.949 3.378c-.866-1.5-3.032-1.5-3.898 0L2.697 16.126ZM12 15.75h.007v.008H12v-.008Z"
          />
        </svg>
      </div>
      <p className="text-red-600 font-medium text-lg">Something went wrong</p>
      <p className="text-gray-500 text-sm mt-1">{message}</p>
    </div>
  );
}

export default ErrorMessage;
