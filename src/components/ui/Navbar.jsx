import { useState } from "react";
import { Link } from "react-router-dom";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  return (
    <nav className="bg-gray-800 p-4">
      <div className="container mx-auto flex justify-between items-center">
        <Link to="/" className="text-white text-xl font-bold">
          Logo
        </Link>

        {/* Mobile menu button */}
        <button
          onClick={toggleMenu}
          className="md:hidden text-white focus:outline-none"
        >
          <svg
            className="w-6 h-6"
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
          >
            {isOpen ? (
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M6 18L18 6M6 6l12 12"
              />
            ) : (
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M4 6h16M4 12h16M4 18h16"
              />
            )}
          </svg>
        </button>

        {/* Navigation links */}
        <div className={`md:flex ${isOpen ? "block" : "hidden"}`}>
          <div className="flex flex-col md:flex-row md:items-center">
            <Link
              to="/"
              className="text-white hover:text-gray-300 px-3 py-2 rounded-md"
            >
              Home
            </Link>
            <Link
              to="/about"
              className="text-white hover:text-gray-300 px-3 py-2 rounded-md"
            >
              About
            </Link>
            <Link
              to="/services"
              className="text-white hover:text-gray-300 px-3 py-2 rounded-md"
            >
              Services
            </Link>
            <Link
              to="/contact"
              className="text-white hover:text-gray-300 px-3 py-2 rounded-md"
            >
              Contact
            </Link>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
