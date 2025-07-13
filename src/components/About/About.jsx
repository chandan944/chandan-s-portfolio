import ReactTypingEffect from "react-typing-effect";
import Tilt from "react-parallax-tilt";
import profileImage from "../../assets/chandan1 (2).png";

const About = () => {
  return (
    <section
      id="about"
      className="px-[7vw] md:px-[7vw] lg:px-[20vw] mb-3 font-sans mt-20 md:mt-28 lg:mt-36 text-white"
    >
      <div className="flex flex-col-reverse md:flex-row justify-between items-center gap-10">
        {/* Left Side */}
        <div className="md:w-1/2 text-center md:text-left">
          <h1 className="text-4xl md:text-5xl font-extrabold leading-tight mb-2">
             Hi  , I’m 
          </h1>
          <h2 className="text-5xl md:text-6xl font-extrabold text-purple-400 drop-shadow mb-4">
            Chandan Prajapati
          </h2>

          <h3 className="text-2xl md:text-3xl font-semibold text-gray-200 mb-6">
            <span className="text-white">I am a <br/> </span>
            <span className="text-[#50ce31]">
              <ReactTypingEffect
                text={["Front-end developer","Backend developer","Fullstack Java Developer", "App Developer"]}
                speed={100}
                eraseSpeed={50}
                typingDelay={500}
                eraseDelay={2000}
                cursorRenderer={(cursor) => (
                  <span className="text-purple-400">{cursor}</span>
                )}
              />
            </span>
          </h3>

          <p className="text-base md:text-lg text-gray-400 leading-relaxed mb-8">
            Passionate Full-Stack Java Developer skilled in building modern web
            apps with Spring Boot & React. Experienced with authentication, REST
            APIs, responsive design, and dynamic content. Always learning,
            always building.
          </p>

          <a
            href="https://drive.google.com/file/d/15PxYuDyje8Cl_Gp_Gr66KWg6Al_3hvtX/view?usp=drive_link"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-block text-black py-3 px-8 rounded-full text-lg font-bold bg-gradient-to-r from-purple-600 to-pink-500 shadow-lg hover:shadow-purple-800/50 transform hover:scale-105 transition duration-300"
          >
            📄 DOWNLOAD Resume
          </a>
        </div>

        {/* Right Side (Tilt Image) */}
        <div className="md:w-1/2 flex justify-center md:justify-end">
          <Tilt
            className="rounded-[20px] border-4 border-purple-600 shadow-[0_0_60px_#8e44ad50] hover:shadow-purple-500/40 transition duration-700"
            tiltMaxAngleX={15}
            tiltMaxAngleY={15}
            perspective={1000}
            scale={1.05}
            transitionSpeed={1000}
            gyroscope={true}
          >
            <img
              src={profileImage}
              alt="Chandan Prajapati"
              className="w-[240px] sm:w-[300px] md:w-[400px] h-auto rounded-[18px] object-cover"
            />
          </Tilt>
        </div>
      </div>
    </section>
  );
};

export default About;
