import { useState } from "react";
import { Link, useLocation } from "react-router-dom";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);
  const [isDarkMode, setIsDarkMode] = useState(false);
  const location = useLocation();

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  const logOutAction = () => {
    localStorage.removeItem("token");
  };
  const handleLogout = () => {
    logOutAction();
    window.location.reload(); // Reload the page to reflect the logout state
  };

  const toggleDropdown = () => {
    setIsDropdownOpen(!isDropdownOpen);
  };

  const toggleDarkMode = () => {
    setIsDarkMode(!isDarkMode);
  };

  const isActivePage = (path) => {
    return location.pathname === path;
  };

  return (
    <nav className="fixed top-0 left-0 w-full z-50 bg-gray-100 p-4">
      <div className="container mx-auto flex justify-between items-center">
        <Link to="/" className="text-gray-800 text-xl font-bold">
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
          <div className="flex flex-col md:flex-row md:items-center gap-4">
            <Link
              to="/"
              className={`text-gray-800 hover:text-gray-300 hover:bg-gray-700 px-3 py-2 rounded-md transition-colors ${
                isActivePage("/") ? "bg-gray-600 text-white" : ""
              }`}
            >
              Home
            </Link>
            <Link
              to="/about"
              className={`text-gray-800 hover:text-gray-300 hover:bg-gray-700 px-3 py-2 rounded-md transition-colors ${
                isActivePage("/about") ? "bg-gray-600 text-white" : ""
              }`}
            >
              About
            </Link>
            <Link
              to="/services"
              className={`text-gray-800 hover:text-gray-300 hover:bg-gray-700 px-3 py-2 rounded-md transition-colors ${
                isActivePage("/services") ? "bg-gray-600 text-white" : ""
              }`}
            >
              Services
            </Link>
            <Link
              to="/contact"
              className={`text-gray-800 hover:text-gray-300 hover:bg-gray-700 px-3 py-2 rounded-md transition-colors ${
                isActivePage("/contact") ? "bg-gray-600 text-white" : ""
              }`}
            >
              Contact
            </Link>

            {/* Dark mode toggle */}
            <button
              onClick={toggleDarkMode}
              className="w-8 h-8 bg-gray-300 rounded-full flex items-center justify-center hover:bg-gray-400 transition-colors"
            >
              {isDarkMode ? (
                <svg
                  className="w-5 h-5 text-yellow-500"
                  fill="currentColor"
                  viewBox="0 0 20 20"
                >
                  <path
                    fillRule="evenodd"
                    d="M10 2a1 1 0 011 1v1a1 1 0 11-2 0V3a1 1 0 011-1zm4 8a4 4 0 11-8 0 4 4 0 018 0zm-.464 4.95l.707.707a1 1 0 001.414-1.414l-.707-.707a1 1 0 00-1.414 1.414zm2.12-10.607a1 1 0 010 1.414l-.706.707a1 1 0 11-1.414-1.414l.707-.707a1 1 0 011.414 0zM17 11a1 1 0 100-2h-1a1 1 0 100 2h1zm-7 4a1 1 0 011 1v1a1 1 0 11-2 0v-1a1 1 0 011-1zM5.05 6.464A1 1 0 106.465 5.05l-.708-.707a1 1 0 00-1.414 1.414l.707.707zm1.414 8.486l-.707.707a1 1 0 01-1.414-1.414l.707-.707a1 1 0 011.414 1.414zM4 11a1 1 0 100-2H3a1 1 0 000 2h1z"
                    clipRule="evenodd"
                  />
                </svg>
              ) : (
                <svg
                  className="w-5 h-5 text-gray-700"
                  fill="currentColor"
                  viewBox="0 0 20 20"
                >
                  <path d="M17.293 13.293A8 8 0 016.707 2.707a8.001 8.001 0 1010.586 10.586z" />
                </svg>
              )}
            </button>

            <div className="relative">
              <button
                onClick={toggleDropdown}
                className="w-8 h-8 bg-gray-300 rounded-full flex items-center justify-center hover:bg-gray-400 transition-colors"
              >
                <svg
                  className="w-5 h-5 text-gray-700"
                  fill="currentColor"
                  viewBox="0 0 20 20"
                >
                  <path
                    fillRule="evenodd"
                    d="M10 9a3 3 0 100-6 3 3 0 000 6zm-7 9a7 7 0 1114 0H3z"
                    clipRule="evenodd"
                  />
                </svg>
              </button>

              {isDropdownOpen && (
                <div className="absolute right-0 mt-2 w-48 bg-white rounded-md shadow-lg py-1 z-50">
                  <button
                    onClick={handleLogout}
                    className="block w-full text-left px-4 py-2 text-sm text-gray-700 hover:bg-gray-100"
                  >
                    Log Out
                  </button>
                </div>
              )}
            </div>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
