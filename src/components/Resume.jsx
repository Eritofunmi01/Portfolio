import React from "react";

const skills = [
  { name: "HTML / CSS", level: 95 },
  { name: "Web Design", level: 85 },
  { name: "JavaScript", level: 80 },
  { name: "Express.js", level: 90 },
  { name: "React.js", level: 90 },
  { name: "Communication and Team work", level: 87 },
];

function Resume() {
  return (
    <div className="bg-gray-950 min-h-screen p-10 text-white">

      {/* PAGE TITLE */}
      <h1 className="text-3xl font-bold mb-10 text-center">Resume & Skills</h1>

      {/* DOWNLOAD CV */}
      <div className="flex justify-center mb-10">
        <a
          href="/Sodiya's CV.docx"
          download
          className="px-6 py-3 rounded-xl bg-linear-to-r from-purple-600 to-green-400 text-black font-semibold shadow-lg hover:scale-105 transition"
        >
          Download My CV
        </a>
      </div>

      {/* EDUCATION GRID */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-16">

        <div className="bg-[#0D1117] rounded-2xl p-4">
          <h3 className="bg-linear-to-br from-purple-700 to-green-400 bg-clip-text text-transparent text-lg font-semibold">
            High School Certificate
          </h3>
          <p className="text-gray-300 font-serif mt-1">
            Ogbe College | 2021 - 2024
          </p>
        </div>

        <div className="bg-[#0D1117] rounded-2xl p-4">
          <h3 className="bg-linear-to-br from-purple-700 to-green-400 bg-clip-text text-transparent text-lg font-semibold">
            Computer Science
          </h3>
          <p className="text-gray-300 font-serif mt-1">
            Lagos State Ministry of Women Affairs & Poverty Alleviation (WAPA) |
            2024
          </p>
        </div>

        <div className="bg-[#0D1117] rounded-2xl p-4">
          <h3 className="bg-linear-to-br from-purple-700 to-green-400 bg-clip-text text-transparent text-lg font-semibold">
            Fullstack Web Developer
          </h3>
          <p className="text-gray-300 font-serif mt-1">
            Anchorsoft Academy | 2024 - 2025
          </p>
        </div>

        <div className="bg-[#0D1117] rounded-2xl p-4">
          <h3 className="bg-linear-to-br from-purple-700 to-green-400 bg-clip-text text-transparent text-lg font-semibold">
            Data Analysis
          </h3>
          <p className="text-gray-300 font-serif mt-1">
            MUHDUL FURQAAN FOUNDATION | 2025
          </p>
        </div>
      </div>

      {/* MY SKILLS SECTION */}
      <div className="bg-[#0D1117] p-6 rounded-2xl max-w-4xl mx-auto">
        <h2 className="text-2xl font-bold text-center mb-2">My Skills</h2>
        <p className="text-center text-gray-400 mb-8">
          My level of knowledge in some tools
        </p>

        <div className="space-y-6">
          {skills.map((s, idx) => (
            <div key={idx}>
              <div className="flex justify-between mb-2">
                <span>{s.name}</span>
                <span>{s.level}%</span>
              </div>
              <div className="w-full bg-gray-800 h-3 rounded-xl">
                <div
                  className="h-3 rounded-xl bg-cyan-400 transition-all"
                  style={{ width: `${s.level}%` }}
                />
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

export default Resume;
