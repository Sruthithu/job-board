export default function JobCard({ job }) {
  return (
    <div className="bg-white rounded-xl shadow-sm hover:shadow-md transition p-5 border border-gray-100 flex flex-col">
      <div className="flex justify-between items-start mb-3">
        <h3 className="text-lg font-bold text-gray-800">{job.title}</h3>
        <span className="text-xs bg-indigo-100 text-indigo-700 px-2 py-1 rounded-full font-medium">
          {job.category}
        </span>
      </div>
      <p className="text-gray-600 font-medium">{job.company}</p>
      <p className="text-sm text-gray-500 mb-3">📍 {job.location}</p>
      {job.description && (
        <p className="text-sm text-gray-600 mb-4">{job.description}</p>
      )}
      <button className="mt-auto bg-indigo-600 hover:bg-indigo-700 text-white py-2 rounded-lg font-medium transition">
        Apply Now
      </button>
    </div>
  );
}