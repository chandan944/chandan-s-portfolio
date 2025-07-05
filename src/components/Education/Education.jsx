import { education } from "../../constants";

const Education = () => {
  return (
    <section
      id="education"
      className="py-24 px-[7vw] lg:px-[16vw] font-sans bg-gradient-to-br from-[#1f1c2c] via-[#302b63] to-[#24243e] text-white"
    >
      {/* Title */}
      <div className="text-center mb-16">
        <h2 className="text-4xl font-extrabold tracking-wide">Education</h2>
        <div className="w-24 h-1 bg-purple-500 mx-auto mt-4 rounded"></div>
        <p className="text-gray-300 mt-4 text-base max-w-2xl mx-auto">
          My educational journey laid the foundation of my development and problem-solving skills.
        </p>
      </div>

      {/* Timeline */}
      <div className="relative">
        {/* Vertical Line */}
        <div className="absolute left-1/2 transform -translate-x-1/2 h-full w-[2px] bg-purple-500/30"></div>

        {/* Timeline Items */}
        {education.map((edu, index) => (
          <div
            key={edu.id}
            className={`relative mb-16 w-full flex flex-col sm:flex-row items-center ${
              index % 2 === 0 ? "sm:justify-start" : "sm:justify-end"
            }`}
          >
            {/* Card Content */}
            <div
              className={`bg-white/5 backdrop-blur-lg border border-white/10 p-6 sm:p-8 rounded-2xl shadow-xl w-full sm:w-[80%] md:w-[60%] hover:shadow-purple-500/30 transition-transform duration-300 hover:scale-[1.02] ${
                index % 2 === 0 ? "sm:ml-10" : "sm:mr-10"
              }`}
            >
              {/* Header */}
              <div className="flex items-center gap-5">
                {/* School Image */}
                <div className="w-16 h-16 rounded-lg overflow-hidden border border-purple-500/50 shadow">
                  <img
                    src={edu.img}
                    alt={edu.school}
                    className="w-full h-full object-cover"
                  />
                </div>

                {/* School Info */}
                <div>
                  <h3 className="text-xl font-bold text-purple-300">
                    {edu.degree}
                  </h3>
                  <h4 className="text-sm text-gray-300">{edu.school}</h4>
                  <p className="text-xs text-gray-500">{edu.date}</p>
                </div>
              </div>

              {/* Description */}
              <p className="text-gray-400 text-sm mt-4 font-semibold">
                Grade: <span className="font-normal">{edu.grade}</span>
              </p>
              <p className="text-gray-400 text-sm mt-2">{edu.desc}</p>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Education;
