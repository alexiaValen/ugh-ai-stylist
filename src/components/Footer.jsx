import React from 'react';
import { Link } from 'react-router-dom';

const Footer = () => {
  return (
    <footer className="bg-white border-t mt-12">
      <div className="container mx-auto px-6 py-4">
        <div className="flex justify-center space-x-6">
          <Link to="/about" className="text-gray-600 hover:text-gray-800">About</Link>
          <Link to="/contact" className="text-gray-600 hover:text-gray-800">Contact</Link>
          <Link to="/privacy" className="text-gray-600 hover:text-gray-800">Privacy Policy</Link>
          <Link to="/terms" className="text-gray-600 hover:text-gray-800">Terms</Link>
        </div>
        <p className="text-center text-gray-500 text-sm mt-4">
          © {new Date().getFullYear()} AI Outfit Stylist. All rights reserved.
        </p>
      </div>
    </footer>
  );
};

export default Footer;