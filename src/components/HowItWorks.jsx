import React from 'react';

const HowItWorks = () => {
  return (
    <section className="py-20">
      <div className="container mx-auto text-center">
        <h2 className="text-3xl font-bold text-gray-800 mb-12">How It Works</h2>
        <div className="flex flex-col md:flex-row justify-center space-y-8 md:space-y-0 md:space-x-12">
          <div className="flex flex-col items-center">
            <div className="bg-blue-100 rounded-full p-6 mb-4">
              {/* Placeholder for icon */}
              <svg className="w-8 h-8 text-blue-500" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M7 16a4 4 0 01-.88-7.903A5 5 0 1115.9 6L16 6a5 5 0 011 9.9M15 13l-3-3m0 0l-3 3m3-3v12"></path></svg>
            </div>
            <h3 className="text-xl font-bold mb-2">1. Upload a Photo</h3>
            <p className="text-gray-600">Upload a photo of an item from your wardrobe or a picture of yourself.</p>
          </div>
          <div className="flex flex-col items-center">
            <div className="bg-blue-100 rounded-full p-6 mb-4">
              {/* Placeholder for icon */}
              <svg className="w-8 h-8 text-blue-500" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9.663 17h4.673M12 3v1m6.364 1.636l-.707.707M21 12h-1M4 12H3m3.343-5.657l-.707-.707m2.828 9.9a5 5 0 117.072 0l-.548.547A3.374 3.374 0 0014 18.469V19a2 2 0 11-4 0v-.531c0-.895-.356-1.754-.988-2.386l-.548-.547z"></path></svg>
            </div>
            <h3 className="text-xl font-bold mb-2">2. AI Suggests Outfits</h3>
            <p className="text-gray-600">Our AI analyzes your photo and suggests stylish outfit combinations.</p>
          </div>
          <div className="flex flex-col items-center">
            <div className="bg-blue-100 rounded-full p-6 mb-4">
              {/* Placeholder for icon */}
              <svg className="w-8 h-8 text-blue-500" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z"></path></svg>
            </div>
            <h3 className="text-xl font-bold mb-2">3. Get Recommendations</h3>
            <p className="text-gray-600">Receive personalized outfit recommendations for any occasion.</p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HowItWorks;