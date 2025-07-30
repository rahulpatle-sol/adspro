"use client";
import React from 'react';

const Hero = () => {
  return (
    <section className="w-full h-screen bg-gradient-to-br from-blue-900 via-indigo-800 to-black flex flex-col items-center justify-center text-white text-center px-6">
      <h1 className="text-5xl md:text-6xl font-extrabold text-yellow-400 drop-shadow-lg mb-4">
        Light Up Ads
      </h1>
      <p className="text-xl md:text-2xl max-w-2xl">
        Welcome to the new era of <span className="text-pink-400 font-semibold">advertising brilliance</span>
      </p>
      <p className="mt-2 text-lg text-gray-300">
        Hold on tight—your <span className="font-bold text-cyan-400">ADS</span> are about to shine.
      </p>

      {/* CTA button */}
      <button className="mt-6 bg-yellow-500 hover:bg-yellow-600 text-black font-bold py-2 px-5 rounded-full transition-all duration-300"onClick={() => window.location.href = '/search-ads'} >
        Explore Features
      </button>
    </section>
  );
};

export default Hero;
