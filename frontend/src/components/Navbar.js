import React from 'react';
import { useNavigate } from 'react-router-dom';

const Navbar = () => {
  const navigate = useNavigate();
  return (
    <nav className="bg-gray-800 text-white shadow-md">
      <div className="container mx-auto flex justify-between items-center p-5">
        <div className="text-xl font-bold">CodeMetrics</div>
        <ul className="flex space-x-4">
          <li>
            <button onClick={() => navigate('/login')} className="hover:text-yellow-500">
              Login
            </button>
          </li>
          <li>
            <button onClick={() => navigate('/signup')} className="hover:text-yellow-500">
              Signup
            </button>
          </li>
        </ul>
      </div>
    </nav>
  );
};

export default Navbar;