import { useState } from "react";
import {
  FaFacebook,
  FaLinkedin,
  FaTwitter,
  FaInstagram,
  FaSun,
  FaMoon,
} from "react-icons/fa";


const TopNavbar = () => {
         const [darkMode, setDarkMode] = useState(false);
  const toggleDarkMode = () => {
    setDarkMode(!darkMode);
    // You can also add logic to toggle the class on the body or a theme provider here
  };

  return (
    <nav
      className={`p-1 flex items-center justify-between ${
        darkMode ? "bg-gray-800" : "bg-cyan-500"
      } text-white`}
    >
      <div className="text-lg px-8 font-semibold hover:text-blue-300 duration-300">
        Your Name
      </div>
      <div className="flex space-x-4 px-8 items-center">
        <a href="mailto:youremail@example.com" className="hover:text-blue-500">
          <span className="sr-only">Email</span>
          <svg
            xmlns="http://www.w3.org/2000/svg"
            className="h-5 w-5"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2}
              d="M3 8l7.297 7.297a4 4 0 005.406 0L21 8"
            />
          </svg>
        </a>
        <a
          href="https://www.facebook.com"
          target="_blank"
          rel="noopener noreferrer"
          className="hover:text-blue-300 duration-300"
        >
          <FaFacebook className="h-5 w-5" />
        </a>
        <a
          href="https://www.linkedin.com"
          target="_blank"
          rel="noopener noreferrer"
          className="hover:text-blue-300 duration-300"
        >
          <FaLinkedin className="h-5 w-5" />
        </a>
        <a
          href="https://twitter.com"
          target="_blank"
          rel="noopener noreferrer"
          className="hover:text-blue-300 duration-300"
        >
          <FaTwitter className="h-5 w-5" />
        </a>
        <a
          href="https://www.instagram.com"
          target="_blank"
          rel="noopener noreferrer"
          className="hover:text-blue-300 duration-300"
        >
          <FaInstagram className="h-5 w-5" />
        </a>
        <button onClick={toggleDarkMode} className="text-lg">
          {darkMode ? (
            <FaSun className="h-5 w-5" />
          ) : (
            <FaMoon className="h-5 w-5" />
          )}
        </button>
      </div>
    </nav>
  );
};

export default TopNavbar;
