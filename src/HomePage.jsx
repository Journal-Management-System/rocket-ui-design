import React from 'react';

export default function HomePage() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-900 via-Electric blue to-blue-400 text-white font-sans">

      
      <header className="flex justify-between items-center px-6 py-4">
        <h1 className="text-white text-3xl font-bold tracking-tight">
          <span className="text-amber-400">Rocket</span> Academy
        </h1>
        <button className="bg-amber-500 hover:bg-amber-600 text-white px-5 py-2 rounded-full shadow-md transition duration-300">
          Apply now
        </button>
      </header>

      <main className="text-center px-6 py-16">
        <h2 className="text-5xl font-extrabold mb-6 tracking-tight">
          From <span className="text-amber-300">Theory</span> to <span className="text-white">Therapy</span>
        </h2>

        <h3 className="text-2xl italic mb-6 text-amber-100">
          Skill Building <span className="text-white not-italic">Courses</span>
        </h3>

        <p className="text-lg max-w-2xl mx-auto mb-8 text-white/90">
          Transform academic knowledge into practical skills with expert-led courses, hands-on experience, and mentorship—designed to prepare you for success as a professional psychologist.
        </p>

        <div className="mb-6">
          <button className="bg-white text-black px-6 py-3 rounded-full font-semibold hover:bg-amber-400 hover:text-white transition duration-300 shadow-lg">
            Apply now
          </button>
        </div>

        <p className="text-green-300 font-medium">🟢 C5 is ongoing. Enrollment for C6 is live.</p>
      </main>

      <footer className="flex justify-center gap-8 items-center py-8 border-t border-white/20">
        <div className="bg-white/10 backdrop-blur-md p-4 rounded-xl shadow-lg transition hover:scale-105 duration-300">
          <h4 className="text-amber-300 text-sm">Next Cohort</h4>
          <p className="text-lg font-bold">28th July, 2025</p>
        </div>
        <div className="bg-white/10 backdrop-blur-md p-4 rounded-xl shadow-lg transition hover:scale-105 duration-300">
          <h4 className="text-amber-300 text-sm">Enrollment</h4>
          <p className="text-lg font-bold">Live now</p>
        </div>
      </footer>

      <div className="text-right px-6 py-4">
        <button className="bg-amber-500 text-white px-4 py-2 rounded-full text-sm hover:brightness-110 shadow-md transition">
          Powered by <strong>Rocket</strong> Health 🚀
        </button>
      </div>
    </div>
  );
}
