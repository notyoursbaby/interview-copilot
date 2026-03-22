export default function Home() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-black via-gray-900 to-gray-800 text-white flex flex-col items-center justify-center px-6">

      {/* HERO */}
      <div className="text-center max-w-2xl">
        <h1 className="text-5xl font-bold mb-4">
          🎯 Interview Copilot
        </h1>

        <p className="text-lg text-gray-400 mb-6">
          Practice real interview questions, get instant AI feedback, and improve your answers — all in one place.
        </p>

        <div className="flex justify-center gap-4">
          <a href="/mock">
            <button className="bg-white text-black px-6 py-3 rounded-xl font-semibold hover:scale-105 transition shadow-lg">
              Start Mock Interview
            </button>
          </a>

          <button className="border border-gray-600 px-6 py-3 rounded-xl hover:bg-white hover:text-black transition">
            Explore Features
          </button>
        </div>
      </div>

      {/* FEATURES */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mt-16 max-w-4xl w-full">

        <div className="bg-gray-900 p-6 rounded-2xl shadow-lg">
          <h3 className="text-xl font-semibold mb-2">🎤 Mock Interviews</h3>
          <p className="text-gray-400 text-sm">
            Practice real-world interview questions and improve your answers instantly.
          </p>
        </div>

        <div className="bg-gray-900 p-6 rounded-2xl shadow-lg">
          <h3 className="text-xl font-semibold mb-2">🧠 Smart Feedback</h3>
          <p className="text-gray-400 text-sm">
            Get structured feedback and better answers tailored to your responses.
          </p>
        </div>

        <div className="bg-gray-900 p-6 rounded-2xl shadow-lg">
          <h3 className="text-xl font-semibold mb-2">⚡ Real Experience</h3>
          <p className="text-gray-400 text-sm">
            Simulate actual interview conditions with guided flows and voice input.
          </p>
        </div>

      </div>

      {/* FOOTER LINE */}
      <p className="text-gray-500 text-sm mt-12">
        Built for developers preparing for real interviews 🚀
      </p>

    </div>
  );
}