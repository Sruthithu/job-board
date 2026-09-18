export default function Header({ onPostJobClick }) {
  return (
    <header className="bg-white shadow-sm sticky top-0 z-10">
      <div className="max-w-7xl mx-auto px-4 py-4 flex justify-between items-center">
        <div className="flex items-center gap-2">
          <div className="w-9 h-9 bg-indigo-600 rounded-lg flex items-center justify-center text-white font-bold">
            JB
          </div>
          <span className="text-xl font-bold text-gray-800">JobBoard</span>
        </div>

        <nav className="hidden md:flex gap-6 text-gray-600 font-medium">
          <a href="#" className="hover:text-indigo-600">Home</a>
          <a href="#jobs" className="hover:text-indigo-600">Jobs</a>
          <a href="#footer" className="hover:text-indigo-600">Contact</a>
        </nav>

        <button
          onClick={onPostJobClick}
          className="bg-indigo-600 hover:bg-indigo-700 text-white px-4 py-2 rounded-lg font-medium transition"
        >
          Post a Job
        </button>
      </div>
    </header>
  );
}