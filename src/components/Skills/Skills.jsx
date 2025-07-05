import { SkillsInfo } from "../../constants";
import Tilt from "react-parallax-tilt";

const Skills = () => (
  <section
    id="skills"
    className="py-24 px-[7vw] lg:px-[20vw] bg-gradient-to-br from-[#0f0c29] via-[#302b63] to-[#24243e] text-white"
  >
    {/* Section Title */}
    <div className="text-center mb-12">
      <h2 className="text-4xl font-extrabold">Skills</h2>
      <div className="w-24 h-1 bg-purple-500 mx-auto mt-4 rounded"></div>
      <p className="text-gray-300 mt-4 text-base max-w-xl mx-auto">
        A collection of my technical skills, frameworks, and tools used to build real-world full-stack projects 🚀
      </p>
    </div>

    {/* Skill Categories */}
    <div className="flex flex-wrap gap-6 justify-center">
      {SkillsInfo.map((category) => (
        <Tilt
          key={category.title}
          tiltMaxAngleX={10}
          tiltMaxAngleY={10}
          perspective={1000}
          scale={1.03}
          transitionSpeed={1000}
          gyroscope={true}
          className="bg-white/5 backdrop-blur-lg border border-white/10 shadow-lg rounded-2xl p-6 sm:p-8 w-full md:w-[45%] lg:w-[30%] hover:shadow-purple-500/30 transition duration-300"
        >
          <h3 className="text-xl sm:text-2xl font-bold text-purple-300 text-center mb-6">
            {category.title}
          </h3>

          <div className="grid grid-cols-3 gap-4">
            {category.skills.map((skill) => (
              <div
                key={skill.name}
                className="flex flex-col items-center justify-center space-y-2 bg-white/5 border border-white/10 rounded-xl py-4 px-2 hover:shadow-md hover:scale-105 transition-all duration-300"
              >
                <img
                  src={skill.logo}
                  alt={skill.name}
                  className="w-10 h-10 object-contain"
                />
                
              </div>
            ))}
          </div>
        </Tilt>
      ))}
    </div>
  </section>
);

export default Skills;
