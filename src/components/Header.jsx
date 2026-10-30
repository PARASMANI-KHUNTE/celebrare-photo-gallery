/**
 * Header Component
 *
 * Displays the application title and subtitle.
 * Clean white header with minimal styling.
 */
function Header() {
  return (
    <header className="bg-white border-b border-gray-200">
      <div className="max-w-7xl mx-auto px-4 py-6 sm:px-6 lg:px-8">
        <h1 className="text-2xl sm:text-3xl font-bold text-gray-900 tracking-tight">
          Celebrare Gallery
        </h1>
        <p className="mt-1 text-sm text-gray-500">
          Discover and save your favourite photos
        </p>
      </div>
    </header>
  );
}

export default Header;
