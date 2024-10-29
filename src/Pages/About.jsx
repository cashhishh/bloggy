// src/Pages/About.jsx
import React from "react";

const About = () => {
  return (
    <div className="relative bg-gray-100">
      {/* Background Section */}
      <div
        className="absolute inset-0 bg-cover bg-center opacity-50"
        style={{
          backgroundImage: `url("https://media.istockphoto.com/id/1406927873/vector/subtle-gradient-blend-background.jpg?s=612x612&w=0&k=20&c=QobMWoFJTszTReSo6am7A-vlEygNVM9S0C4zQAzyPUE=")`,
        }}
      />

      <div className="relative z-10 container mx-auto px-6 py-16">
        <h1 className="text-5xl font-bold text-center text-gray-800 mb-8">
          About Us
        </h1>

        {/* Section 1: Introduction */}
        <section className="mb-12 text-center">
          <h2 className="text-3xl font-semibold text-gray-800 mb-4">Welcome to Our Platform!</h2>
          <p className="text-lg text-gray-700 max-w-2xl mx-auto">
            We provide a user-friendly platform that empowers individuals to achieve their goals through innovative solutions and resources.
          </p>
        </section>

        {/* Section 2: How Our Website is Useful */}
        <section className="mb-12">
          <h2 className="text-3xl font-semibold text-gray-800 mb-4 text-center">How We Help</h2>
          <ul className="list-disc list-inside text-lg text-gray-700 space-y-4 max-w-3xl mx-auto">
            <li className="flex items-start">
              <span className="text-pink-950 mr-2">✔️</span>
              <span>Intuitive design for easy navigation.</span>
            </li>
            <li className="flex items-start">
              <span className="text-pink-950 mr-2">✔️</span>
              <span>Access to valuable educational resources.</span>
            </li>
            <li className="flex items-start">
              <span className="text-pink-950 mr-2">✔️</span>
              <span>Interactive tools to maximize productivity.</span>
            </li>
            <li className="flex items-start">
              <span className="text-pink-950 mr-2">✔️</span>
              <span>Quality curated content for informed decisions.</span>
            </li>
            <li className="flex items-start">
              <span className="text-pink-950 mr-2">✔️</span>
              <span>Personalized dashboards and progress tracking.</span>
            </li>
          </ul>
        </section>

        {/* Section 3: Our Commitment */}
        <section className="mb-12">
          <h2 className="text-3xl font-semibold text-gray-800 mb-4 text-center">Our Commitment</h2>
          <p className="text-lg text-gray-700 text-center max-w-2xl mx-auto">
            We strive to deliver a seamless experience that inspires and motivates you to reach your full potential through dedication and innovation.
          </p>
        </section>

        {/* Section 4: Explore Our Solutions */}
        <section className="mb-12">
          <h2 className="text-3xl font-semibold text-gray-800 mb-4 text-center">Explore Our Solutions</h2>
          <p className="text-lg text-gray-700 text-center max-w-2xl mx-auto">
            Discover how we can transform your experience with our cutting-edge features and personalized services tailored to your needs.
          </p>
        </section>

        {/* Image Section */}
        <div className="flex justify-center my-8">
          <div className="w-full md:w-3/4 overflow-hidden transition-transform transform hover:scale-105">
            <img
              src="https://cdn.pixabay.com/photo/2017/11/27/21/31/computer-2982270_640.jpg"
              alt="About Us"
              className="w-full h-full object-cover rounded-lg shadow-lg"
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default About;
