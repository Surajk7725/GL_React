import React, { useState } from 'react';
import { Link } from 'react-router-dom';

const Navbar = () => {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);

  const toggleMobileMenu = () => {
    setIsMobileMenuOpen(!isMobileMenuOpen);
  };

  const toggleDropdown = () => {
    setIsDropdownOpen(!isDropdownOpen);
  };

  return (
    <nav className="bg-gray-900 text-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          {/* Logo on the left side */}
          <div className="flex-shrink-0 flex items-center">
            <Link to="/home" className="text-2xl font-bold text-white">
              CodeMetrics
            </Link>
          </div>

          {/* Center Links */}
          <div className="hidden md:flex space-x-8 items-center justify-center">
            <Link to="/home" className="hover:text-gray-400">
              Home
            </Link>
            <a href="/github" className="hover:text-gray-400">
              Github
            </a>
            <a href="/leetcode" className="hover:text-gray-400">
              Leetcode
            </a>
            <Link to="/dashboard" className="hover:text-gray-400">
              Dashboard
            </Link>
          </div>

          {/* Profile on the right side */}
          <div className="relative ml-3">
            <button
              onClick={toggleDropdown}
              className="flex text-sm rounded-full focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-white"
            >
              <img
                className="h-8 w-8 rounded-full"
                src="https://via.placeholder.com/150"
                alt="Profile"
              />
            </button>

            {/* Dropdown */}
            {isDropdownOpen && (
              <div
                className="origin-top-right absolute right-0 mt-2 w-48 rounded-md shadow-lg py-1 bg-white ring-1 ring-black ring-opacity-5"
                role="menu"
                aria-orientation="vertical"
                aria-labelledby="user-menu"
              >
                <Link
                  to="/profile"
                  className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100"
                  role="menuitem"
                >
                  Profile
                </Link>
                <Link
                  to="/details"
                  className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100"
                  role="menuitem"
                >
                  Details
                </Link>
                <Link
                  to="/"
                  className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100"
                  role="menuitem"
                >
                  Logout
                </Link>
              </div>
            )}
          </div>

          {/* Mobile Menu Toggle Button */}
          <div className="-mr-2 flex items-center md:hidden">
            <button
              onClick={toggleMobileMenu}
              type="button"
              className="inline-flex items-center justify-center p-2 rounded-md text-gray-400 hover:text-white hover:bg-gray-800 focus:outline-none"
              aria-controls="mobile-menu"
              aria-expanded="false"
            >
              <svg
                className="h-6 w-6"
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M4 6h16M4 12h16m-7 6h7"
                />
              </svg>
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Menu */}
      {isMobileMenuOpen && (
        <div className="md:hidden" id="mobile-menu">
          <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3">
            <Link
              to="/"
              className="block text-white hover:bg-gray-700 px-3 py-2 rounded-md text-base font-medium"
            >
              Home
            </Link>
            <a
              href="https://github.com"
              className="block text-white hover:bg-gray-700 px-3 py-2 rounded-md text-base font-medium"
            >
              Github
            </a>
            <a
              href="https://leetcode.com"
              className="block text-white hover:bg-gray-700 px-3 py-2 rounded-md text-base font-medium"
            >
              Leetcode
            </a>
            <Link
              to="/dashboard"
              className="block text-white hover:bg-gray-700 px-3 py-2 rounded-md text-base font-medium"
            >
              Dashboard
            </Link>
          </div>

          {/* Mobile Profile Menu */}
          <div className="border-t border-gray-700 pt-4 pb-3">
            <div className="flex items-center px-5">
              <img
                className="h-10 w-10 rounded-full"
                src="https://via.placeholder.com/150"
                alt="Profile"
              />
              <div className="ml-3">
                <div className="text-base font-medium text-white">Username</div>
              </div>
            </div>
            <div className="mt-3 px-2 space-y-1">
              <Link
                to="/profile"
                className="block text-white hover:bg-gray-700 px-3 py-2 rounded-md text-base font-medium"
              >
                Profile
              </Link>
              <Link
                to="/logout"
                className="block text-white hover:bg-gray-700 px-3 py-2 rounded-md text-base font-medium"
              >
                Logout
              </Link>
            </div>
          </div>
        </div>
      )}
    </nav>
  );
};

export default Navbar;
