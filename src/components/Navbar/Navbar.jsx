import { useState, useEffect } from "react";
import { FiMenu, FiX } from "react-icons/fi";
import { FaGithub, FaLinkedin } from "react-icons/fa";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [activeSection, setActiveSection] = useState("");
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const handleMenuItemClick = (sectionId) => {
    setActiveSection(sectionId);
    setIsOpen(false);
    const section = document.getElementById(sectionId);
    if (section) section.scrollIntoView({ behavior: "smooth" });
  };

  const menuItems = [
    { id: "about", label: "About" },
    { id: "skills", label: "Skills" },
    { id: "work", label: "Projects" },
    { id: "education", label: "Education" },
  ];

  return (
    <nav
      className={`fixed top-0 w-full z-50 transition duration-300 px-[7vw] md:px-[7vw] lg:px-[20vw] ${
        isScrolled
          ? "bg-[#0d0b1d]/80 backdrop-blur-md shadow-lg border-b border-white/10"
          : "bg-transparent"
      }`}
    >
      <div className="flex items-center justify-between py-4 text-white">
        {/* Logo */}
        <div className="text-lg font-bold tracking-wide cursor-pointer text-purple-400">
          &lt;Chandan<span className="text-white font-light">/Prajapati</span>&gt;
        </div>

        {/* Desktop Menu */}
        <ul className="hidden md:flex items-center space-x-8 text-sm">
          {menuItems.map((item) => (
            <li
              key={item.id}
              className={`cursor-pointer hover:text-purple-400 relative transition-all duration-200 ${
                activeSection === item.id ? "text-purple-400 font-semibold" : "text-gray-300"
              }`}
            >
              <button onClick={() => handleMenuItemClick(item.id)}>{item.label}</button>
            </li>
          ))}
        </ul>

        {/* Desktop Icons */}
        <div className="hidden md:flex items-center space-x-4 text-gray-300">
          <a
            href="https://github.com/chandan944"
            target="_blank"
            rel="noopener noreferrer"
            className="hover:text-purple-400"
          >
            <FaGithub size={20} />
          </a>
          <a
            href="https://www.linkedin.com/in/chandan-prajapati7/"
            target="_blank"
            rel="noopener noreferrer"
            className="hover:text-purple-400"
          >
            <FaLinkedin size={20} />
          </a>
        </div>

        {/* Mobile Icon */}
        <div className="md:hidden">
          {isOpen ? (
            <FiX
              onClick={() => setIsOpen(false)}
              className="text-3xl text-purple-400 cursor-pointer"
            />
          ) : (
            <FiMenu
              onClick={() => setIsOpen(true)}
              className="text-3xl text-purple-400 cursor-pointer"
            />
          )}
        </div>
      </div>

      {/* Mobile Menu */}
      {isOpen && (
        <div className="md:hidden bg-[#0d0b1d]/90 backdrop-blur-md shadow-lg rounded-b-xl mt-2 p-6 space-y-6 text-center text-white transition-all duration-500">
          <ul className="space-y-4">
            {menuItems.map((item) => (
              <li
                key={item.id}
                className={`text-base font-medium cursor-pointer transition-all ${
                  activeSection === item.id ? "text-purple-400" : "text-gray-300"
                } hover:text-purple-300`}
              >
                <button onClick={() => handleMenuItemClick(item.id)}>
                  {item.label}
                </button>
              </li>
            ))}
          </ul>

          <div className="flex justify-center gap-6 mt-4 text-gray-300">
            <a
              href="https://github.com/chandan944"
              target="_blank"
              rel="noopener noreferrer"
              className="hover:text-purple-400"
            >
              <FaGithub size={24} />
            </a>
            <a
              href="https://www.linkedin.com/in/chandan-prajapati7/"
              target="_blank"
              rel="noopener noreferrer"
              className="hover:text-purple-400"
            >
              <FaLinkedin size={24} />
            </a>
          </div>
        </div>
      )}
    </nav>
  );
};

export default Navbar;
