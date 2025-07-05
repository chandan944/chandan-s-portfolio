import { FaLinkedin, FaInstagram, FaGithub } from "react-icons/fa";

const Footer = () => {
  const handleScroll = (sectionId) => {
    const section = document.getElementById(sectionId);
    if (section) {
      section.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <footer className="w-full text-white bg-gradient-to-r from-[#1f1c2c] via-[#302b63] to-[#24243e] py-5 px-[7vw] font-sans">
      <div className="max-w-7xl mx-auto text-center">
        {/* Name */}
        <h2 className="text-2xl font-bold text-purple-400 mb-2">Chandan Prajapati</h2>

        {/* Navigation Links */}
        <nav className="flex flex-wrap justify-center gap-4 mt-2 text-sm sm:text-base">
          {[
            { name: "About", id: "about" },
            { name: "Skills", id: "skills" },
            { name: "Projects", id: "projects" },
            { name: "Education", id: "education" },
          ].map((item, index) => (
            <button
              key={index}
              onClick={() => handleScroll(item.id)}
              className="text-gray-300 hover:text-purple-500 transition duration-300"
            >
              {item.name}
            </button>
          ))}
        </nav>

        {/* Social Media */}
        <div className="flex justify-center items-center gap-6 mt-3">
          {[
            {
              icon: <FaLinkedin />,
              link: "https://www.linkedin.com/in/chandan-prajapati7/",
            },
            {
              icon: <FaInstagram />,
              link: "https://www.instagram.com/chandan._.prajapati/",
            },
            {
              icon: <FaGithub />,
              link: "https://github.com/chandan944",
            },
          ].map((item, index) => (
            <a
              key={index}
              href={item.link}
              target="_blank"
              rel="noopener noreferrer"
              className="text-xl text-gray-300 hover:text-purple-500 transition transform hover:scale-110"
            >
              {item.icon}
            </a>
          ))}
        </div>

        {/* Copyright */}
        <p className="text-gray-500 mt-8 text-sm">
          &copy; {new Date().getFullYear()} Chandan Prajapati. All rights reserved.
        </p>
      </div>
    </footer>
  );
};

export default Footer;
