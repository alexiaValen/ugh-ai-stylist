import React from 'react';

const Testimonials = () => {
  const testimonials = [
    {
      quote: "This app has completely changed my morning routine. I get dressed so much faster now!",
      author: "Jessica Smith",
      image: "https://i.pravatar.cc/150?img=1"
    },
    {
      quote: "I never knew I had so many great outfits hiding in my closet. This app is a game-changer.",
      author: "Michael Johnson",
      image: "https://i.pravatar.cc/150?img=2"
    },
    {
      quote: "The AI suggestions are surprisingly accurate. It's like having a personal stylist in my pocket.",
      author: "Emily Davis",
      image: "https://i.pravatar.cc/150?img=3"
    }
  ];

  return (
    <section className="bg-gray-50 py-20">
      <div className="container mx-auto text-center">
        <h2 className="text-3xl font-bold text-gray-800 mb-12">What Our Users Say</h2>
        <div className="flex flex-col md:flex-row justify-center space-y-8 md:space-y-0 md:space-x-8">
          {testimonials.map((testimonial, index) => (
            <div key={index} className="bg-white p-8 rounded-lg shadow-md max-w-sm mx-auto">
              <img src={testimonial.image} alt={testimonial.author} className="w-20 h-20 rounded-full mx-auto mb-4" />
              <p className="text-gray-600 mb-4">"{testimonial.quote}"</p>
              <p className="text-gray-800 font-bold">- {testimonial.author}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Testimonials;