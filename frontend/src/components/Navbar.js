// src/components/Navbar.js
import React from 'react';

const Navbar = ({ setPage }) => {
  return (
    <nav className="bg-gray-800 text-white shadow-md">
      <div className="container mx-auto flex justify-between items-center p-5">
        <div className="text-xl font-bold">CodeMetrics</div>
        <ul className="flex space-x-4">
          <li>
            <button onClick={() => setPage('login')} className="hover:text-yellow-500">
              Login
            </button>
          </li>
          <li>
            <button onClick={() => setPage('signup')} className="hover:text-yellow-500">
              Signup
            </button>
          </li>
        </ul>
      </div>
    </nav>
  );
};

export default Navbar;