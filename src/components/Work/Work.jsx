import { useState } from "react";
import { projects } from "../../constants";

const Work = () => {
  const [selectedProject, setSelectedProject] = useState(null);

  const handleOpenModal = (project) => setSelectedProject(project);
  const handleCloseModal = () => setSelectedProject(null);

  return (
    <section
      id="work"
      className="py-24 px-[12vw] md:px-[7vw] lg:px-[20vw] font-sans bg-gradient-to-br from-[#0f0c29] via-[#302b63] to-[#24243e] text-white"
    >
      {/* Title */}
      <div className="text-center mb-16">
        <h2 className="text-4xl font-extrabold text-white tracking-wide">My Projects</h2>
        <div className="w-24 h-1 mx-auto bg-purple-500 rounded mt-4"></div>
        <p className="text-gray-400 mt-4 text-base max-w-xl mx-auto">
          Explore the creative apps and tools I’ve built, showcasing real-world use of full-stack development.
        </p>
      </div>

      {/* Projects Grid */}
      <div className="grid gap-10 grid-cols-1 md:grid-cols-2 lg:grid-cols-3">
        {projects.map((project) => (
          <div
            key={project.id}
            onClick={() => handleOpenModal(project)}
            className="bg-white/5 border border-white/10 backdrop-blur-lg rounded-2xl p-4 shadow-xl transition-all duration-300 hover:-translate-y-2 hover:shadow-purple-500/30 cursor-pointer"
          >
            <img
              src={project.image}
              alt={project.title}
              className="rounded-xl w-full h-48 object-cover mb-4"
            />
            <h3 className="text-xl font-semibold text-white mb-2">{project.title}</h3>
            <p className="text-gray-400 text-sm line-clamp-3 mb-3">{project.description}</p>
            <div className="flex flex-wrap gap-2">
              {project.tags.map((tag, idx) => (
                <span
                  key={idx}
                  className="bg-purple-800/30 text-purple-300 text-xs px-3 py-1 rounded-full"
                >
                  {tag}
                </span>
              ))}
            </div>
          </div>
        ))}
      </div>

      {/* Modal */}
      {selectedProject && (
        <div className="fixed inset-0 z-50 flex items-center justify-center bg-black bg-opacity-90 backdrop-blur-sm p-4">
          <div className="bg-white/5 border border-white/10 rounded-2xl w-full max-w-3xl shadow-lg overflow-hidden relative">
            {/* Close */}
            <div className="flex justify-end p-4">
              <button
                onClick={handleCloseModal}
                className="text-3xl font-bold text-white hover:text-purple-400"
              >
                &times;
              </button>
            </div>

            {/* Modal Body */}
            <div className="px-6 pb-8 flex flex-col gap-6">
              <img
                src={selectedProject.image}
                alt={selectedProject.title}
                className="rounded-xl w-full h-64 object-cover"
              />
              <h3 className="text-2xl font-bold text-white">{selectedProject.title}</h3>
              <p className="text-gray-300 text-sm">{selectedProject.description}</p>

              <div className="flex flex-wrap gap-2">
                {selectedProject.tags.map((tag, idx) => (
                  <span
                    key={idx}
                    className="bg-purple-700/40 text-purple-200 text-xs px-3 py-1 rounded-full"
                  >
                    {tag}
                  </span>
                ))}
              </div>

              <div className="flex gap-4 pt-2">
                <a
                  href={selectedProject.github}
                  target="_blank"
                  rel="noreferrer"
                  className="flex-1 text-center bg-gray-800 hover:bg-gray-700 text-gray-300 py-2 rounded-lg transition font-semibold"
                >
                  View Code 💻
                </a>
                <a
                  href={selectedProject.webapp}
                  target="_blank"
                  rel="noreferrer"
                  className="flex-1 text-center bg-purple-600 hover:bg-purple-700 text-white py-2 rounded-lg transition font-semibold"
                >
                  View Live 🌐
                </a>
              </div>
            </div>
          </div>
        </div>
      )}
    </section>
  );
};

export default Work;
