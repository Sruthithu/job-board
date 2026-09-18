export default function Hero({ search, setSearch }) {
  return (
    <section className="bg-gradient-to-br from-indigo-600 to-purple-600 text-white py-16 px-4">
      <div className="max-w-3xl mx-auto text-center">
        <h1 className="text-4xl md:text-5xl font-extrabold mb-4">
          Find Your Dream Job
        </h1>
        <p className="text-lg text-indigo-100 mb-8">
          Discover opportunities from top companies around the world.
        </p>

        <input
          type="text"
          value={search}
          onChange={(e) => setSearch(e.target.value)}
          placeholder="Search job titles or companies..."
          className="w-full max-w-xl px-5 py-3 rounded-xl text-gray-800 focus:outline-none focus:ring-4 focus:ring-indigo-300 shadow-lg"
        />
      </div>
    </section>
  );
}