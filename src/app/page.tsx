"use client";

export default function Home() {
  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
      <div className="text-center">
        <h1 className="text-4xl font-bold tracking-tight text-gray-900 sm:text-5xl">
          Enoram API
        </h1>
        <p className="mt-4 text-lg text-gray-500">
          API Documentation and Testing
        </p>
      </div>

      <div className="mt-12 grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3">
        <div className="block p-6 bg-white rounded-lg shadow-sm">
          <h2 className="text-xl font-semibold text-gray-900">Jobs API</h2>
          <p className="mt-2 text-gray-500">/api/jobs</p>
        </div>

        <div className="block p-6 bg-white rounded-lg shadow-sm">
          <h2 className="text-xl font-semibold text-gray-900">Candidates API</h2>
          <p className="mt-2 text-gray-500">/api/candidates</p>
        </div>

        <div className="block p-6 bg-white rounded-lg shadow-sm">
          <h2 className="text-xl font-semibold text-gray-900">Interviewers API</h2>
          <p className="mt-2 text-gray-500">/api/interviewers</p>
        </div>
      </div>
    </div>
  );
}
