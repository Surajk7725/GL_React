import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { FaGithub } from 'react-icons/fa';
import { SiLeetcode } from 'react-icons/si';
import Navbar from './unavbar';
import Image1 from './images/github.jpeg';
import Image2 from './images/leetcode.jpg';
import Image3 from './images/design.png';

const Home = () => {
  // Slider state
  const [currentSlide, setCurrentSlide] = useState(0);

  const slides = [
    Image1,
    Image2,
    Image3
  ];

  // Set timer to change slides automatically every 3 seconds
  useEffect(() => {
    const slideTimer = setInterval(() => {
      setCurrentSlide((prevSlide) => (prevSlide + 1) % slides.length);
    }, 3000);

    return () => clearInterval(slideTimer); // Cleanup the interval when component unmounts
  }, [slides.length]);

  return (
    <div>
      <Navbar />

      {/* Slider Component */}
      <div className="relative w-full h-screen bg-white">
        <div className="absolute top-0 left-0 w-full h-full">
          <img
            src={slides[currentSlide]}
            alt={`Slide ${currentSlide + 1}`}
            className="h-full w-full object-cover"
          />
        </div>
      </div>

      {/* Cards Component */}
      <div className="flex justify-center mt-12 space-x-8">
        {/* GitHub Card */}
        <div className="max-w-sm bg-white shadow-md rounded-lg overflow-hidden mx-4 text-center">
          <div className="px-6 py-4">
            <FaGithub className="text-6xl text-gray-900 mx-auto mb-4" />
            <h2 className="text-2xl font-bold mb-4">GitHub</h2>
            <p className="text-gray-700 text-justify md:text-lg mb-4">
              Check out your GitHub profile details. View repositories, commits, and contributions.
              Explore your activity timeline, see what you've been working on recently, and get detailed insights on your projects.
              Track your coding journey and progress in real-time as you collaborate on various repositories.
            </p>
            <Link
              to="/github"
              target="_blank"
              className="inline-block bg-blue-500 text-white px-3 py-2 mt-4 rounded-md"
            >
              GitHub
            </Link>
          </div>
        </div>

        {/* Leetcode Card */}
        <div className="max-w-sm bg-white shadow-md rounded-lg overflow-hidden mx-4 text-center">
          <div className="px-6 py-4">
            <SiLeetcode className="text-6xl text-yellow-500 mx-auto mb-4" />
            <h2 className="text-2xl font-bold mb-4">Leetcode</h2>
            <p className="text-gray-700 text-justify md:text-lg mb-4">
              View your Leetcode profile and performance. Track progress on coding challenges.
              Solve problems across different difficulty levels, and see your global ranking.
              Get detailed insights into your strengths and areas for improvement in problem-solving.
              Analyze your submissions with the community.
            </p>
            <Link
              to="/leetcode"
              target="_blank"
              className="inline-block bg-yellow-500 text-white px-3 py-2 mt-4 rounded-md"
            >
              Leetcode
            </Link>
          </div>
        </div>
      </div>

      <footer className="bg-gray-800 py-4 mt-16">
        <div className="container mx-auto text-center text-white">
          <h3 className="text-2xl font-semibold">CodeMetrics</h3>
          <p className="mt-2">&copy; 2024 CodeMetrics. All rights reserved.</p>
        </div>
      </footer>
    </div>
  );
};

export default Home;
