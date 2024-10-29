// src/components/Header.jsx
import React from 'react';
import { NavLink } from 'react-router-dom';
import logo from '../assets/logo.png';

const Header = () => {
  return (
    <header className="bg-black shadow-md">
      <nav className="flex justify-between items-center py-4 px-4 mx-auto">
        <img src={logo} className='w-20 h-14' alt="Logo" />

        <div className="flex items-center space-x-8">
          <NavLink 
            to="/about" 
            className={({ isActive }) => 
              isActive ? "text-white py-1.5 px-4 bg-pink-900 rounded transition duration-300" : "text-white py-1.5 px-4 bg-pink-950 rounded transition duration-300"
            }
          >
            About
          </NavLink>
          <NavLink 
            to="/signin" 
            className={({ isActive }) => 
              isActive ? "text-white py-1.5 px-4 bg-pink-900 rounded transition duration-300" : "text-white py-1.5 px-4 bg-pink-950 rounded transition duration-300"
            }
          >
            Sign In
          </NavLink>
        </div>
      </nav>
    </header>
  );
};

export default Header;
