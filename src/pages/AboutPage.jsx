import React from 'react';

const AboutPage = () => {
  return (
    <div className="container mx-auto py-12 px-6">
      <h1 className="text-4xl font-bold text-gray-800 mb-6">About Us</h1>
      <div className="space-y-8">
        <div>
          <h2 className="text-2xl font-bold text-gray-800 mb-4">Our Vision</h2>
          <p className="text-gray-600">
            Our vision is to revolutionize the fashion industry by making personal styling accessible to everyone. We believe that everyone deserves to feel confident and stylish, and our AI-powered platform is designed to help you discover your unique style.
          </p>
        </div>
        <div>
          <h2 className="text-2xl font-bold text-gray-800 mb-4">Our Team</h2>
          <p className="text-gray-600">
            We are a passionate team of fashion enthusiasts, AI experts, and software engineers dedicated to creating a seamless and enjoyable styling experience. Our diverse backgrounds and expertise allow us to combine cutting-edge technology with a deep understanding of fashion trends.
          </p>
        </div>
      </div>
    </div>
  );
};

export default AboutPage;