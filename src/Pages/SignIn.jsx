// src/Pages/SignIn.jsx
import React from "react";
import { Link } from 'react-router-dom';

const SignIn = () => {
  return (
    <div className="flex h-screen">
      {/* Left Image Section */}
      <div 
        className="hidden md:block w-1/2 bg-cover bg-center" 
        style={{ backgroundImage: `url("https://www.hubspot.com/hubfs/GettyImages-915160652%20copy.jpg")` }} // Correct way to set the background image
      ></div>
      
      {/* Sign In Form Section */}
      <div className="w-full md:w-1/2 flex items-center justify-center bg-gray-100 p-8" style={{ backgroundImage: `url("https://cdn.prod.website-files.com/5a9ee6416e90d20001b20038/64f5d35487e7666ef82487e4_Rectangle%20(92).svg")`, backgroundSize: 'cover' }}>
        <div className="w-full bg-white p-10 rounded border border-zinc-300 max-w-md">
          <h2 className="text-2xl font-bold text-gray-800 mb-6 text-center">Sign In</h2>
          <form>
            <div className="mb-4">
              <label className="block text-sm font-medium text-gray-700" htmlFor="email">Email</label>
              <input
                type="email"
                id="email"
                className="mt-1 block w-full p-2 border border-gray-300 rounded-md focus:outline-none focus:ring focus:ring-pink-950"
                required
              />
            </div>
            <div className="mb-6">
              <label className="block text-sm font-medium text-gray-700" htmlFor="password">Password</label>
              <input
                type="password"
                id="password"
                className="mt-1 block w-full p-2 border border-gray-300 rounded-md focus:outline-none focus:ring focus:ring-pink-950"
                required
              />
            </div>
            <button type="submit" className="w-full bg-pink-950 text-white p-2 rounded-md hover:bg-pink-900 transition duration-300">
              Sign In
            </button>
          </form>
          <p className="mt-4 text-sm text-center">
            Don't have an account? 
            <Link to="/signup" className="text-blue-900 hover:underline"> Sign Up</Link>
          </p>
        </div>
      </div>
    </div>
  );
};

export default SignIn;
