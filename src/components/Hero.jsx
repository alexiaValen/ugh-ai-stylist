import React from 'react';

const Hero = () => {
  return (
    <div className="bg-gray-50 py-20">
      <div className="container mx-auto text-center">
        <h1 className="text-5xl font-bold text-gray-800 mb-4">
          Your Personal AI Outfit Stylist.
        </h1>
        <p className="text-lg text-gray-600 mb-8">
          Get instant outfit suggestions based on your wardrobe and occasion.
        </p>
        <button className="bg-blue-500 text-white font-bold py-3 px-8 rounded-full hover:bg-blue-600 transition duration-300">
          Try It Now
        </button>
      </div>
    </div>
  );
};

export default Hero;