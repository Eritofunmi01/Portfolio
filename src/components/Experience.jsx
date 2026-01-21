import React from "react";

const projects = [
  {
    name: "Murse.AY",
    description:
      "A portfolio website for a nurse practitioner, showcasing services, testimonials, and contact info.",
    liveUrl: "https://murseay-nu.vercel.app/",
    githubUrl: "https://github.com/Eritofunmi01/nurse_portfolio",
  },
];

function Experience() {
  return (
    <div className="bg-gray-950 min-h-screen p-10 text-white">
      {/* PAGE TITLE */}
      <h1 className="text-3xl font-bold mb-10 text-center">
        Projects & Experience
      </h1>

      {/* PROJECT CARDS GRID */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        {projects.map((project, idx) => (
          <div
            key={idx}
            className="bg-[#0D1117] p-6 rounded-2xl shadow-lg hover:scale-105 transition-transform"
          >
            <h3 className="text-lg font-semibold mb-2 bg-clip-text text-transparent bg-linear-to-br from-purple-700 to-green-400">
              {project.name}
            </h3>
            <p className="text-gray-300 font-serif mb-4">{project.description}</p>

            <div className="flex gap-4">
              <a
                href={project.liveUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="px-4 py-2 bg-linear-to-r from-purple-600 to-green-400 text-black font-semibold rounded-xl shadow-md hover:scale-105 transition-transform"
              >
                View Live
              </a>
              <a
                href={project.githubUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="px-4 py-2 bg-gray-800 text-gray-200 font-semibold rounded-xl shadow-md hover:scale-105 transition-transform"
              >
                GitHub
              </a>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

export default Experience;
