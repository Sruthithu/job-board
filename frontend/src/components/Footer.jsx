export default function Footer() {
  return (
    <footer id="footer" className="bg-gray-900 text-gray-300 mt-10">
      <div className="max-w-7xl mx-auto px-4 py-10 grid grid-cols-1 md:grid-cols-3 gap-8">
        <div>
          <h3 className="text-white font-bold text-lg mb-3">JobBoard</h3>
          <p className="text-sm">
            Connecting talented people with great companies worldwide.
          </p>
        </div>

        <div>
          <h4 className="text-white font-semibold mb-3">Quick Links</h4>
          <ul className="space-y-2 text-sm">
            <li><a href="#" className="hover:text-white">Home</a></li>
            <li><a href="#jobs" className="hover:text-white">Jobs</a></li>
            <li><a href="#post-job" className="hover:text-white">Post a Job</a></li>
          </ul>
        </div>

        <div>
          <h4 className="text-white font-semibold mb-3">Contact</h4>
          <p className="text-sm">📧 hello@jobboard.com</p>
          <p className="text-sm">📞 +1 (555) 123-4567</p>
          <div className="flex gap-3 mt-3">
            <a href="#" className="w-8 h-8 bg-gray-700 rounded-full flex items-center justify-center hover:bg-indigo-600">f</a>
            <a href="#" className="w-8 h-8 bg-gray-700 rounded-full flex items-center justify-center hover:bg-indigo-600">t</a>
            <a href="#" className="w-8 h-8 bg-gray-700 rounded-full flex items-center justify-center hover:bg-indigo-600">in</a>
          </div>
        </div>
      </div>

      <div className="border-t border-gray-800 text-center py-4 text-sm">
        © {new Date().getFullYear()} JobBoard. All rights reserved.
      </div>
    </footer>
  );
}