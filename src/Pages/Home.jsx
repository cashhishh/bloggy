// src/components/Hero.jsx
import React from 'react';

const Home = () => {
  return (
    <section
      className="flex items-center justify-center h-screen text-white"
      style={{
        background: 'linear-gradient(135.8deg, rgb(26, 26, 29) 27.1%, rgb(111, 34, 50) 77.5%)',
      }}
    >
      <div className="text-center p-4 rounded-xl">
        <h1 className="text-4xl text-white font-bold mb-4">Welcome to Bloggy</h1>
        <p className="text-lg mb-6">Spill the tea on Bloggy: Relationships are complicated, but our posts don’t have to be!</p>
        <button className="bg-white text-pink-950 rounded px-6 py-2 font-semibold transition duration-300 hover:bg-gray-300">
      Create Your Blog
        </button>
      </div>
    </section>
  );
};

export default Home;
