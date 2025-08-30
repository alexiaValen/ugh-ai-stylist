import React from 'react';
import { Link } from 'react-router-dom';

const Navbar = () => {
  return (
    <nav className="bg-white shadow-md">
      <div className="container mx-auto px-6 py-3 flex justify-between items-center">
        <Link to="/" className="text-2xl font-bold text-gray-800">
          AI Outfit Stylist
        </Link>
        <div className="flex space-x-4">
          <Link to="/" className="text-gray-800 hover:text-gray-600">Home</Link>
          <Link to="/upload" className="text-gray-800 hover:text-gray-600">Upload</Link>
          <Link to="/about" className="text-gray-800 hover:text-gray-600">About</Link>
          <Link to="/style-guide" className="text-gray-800 hover:text-gray-600">Style Guide</Link>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;