// src/FeedbackSlider.js
import React, { useState } from 'react';

const Feedback = () => {
  const comments = [
    'This is awesome!',
    'Great job on this project!',
    'I love using this app.',
    'Keep up the good work!',
    
  ];

  const [currentIndex, setCurrentIndex] = useState(0);

  const handleNextSlide = () => {
    setCurrentIndex((prevIndex) => (prevIndex + 1) % comments.length);
  };

  const handlePrevSlide = () => {
    setCurrentIndex((prevIndex) => (prevIndex - 1 + comments.length) % comments.length);
  };

  return (
    <div className="container mx-auto p-4">
      <div className="bg-white rounded-lg shadow p-4">
        <h2 className="text-4xl font-bold mb-4">User Feedback</h2>
        <div className="relative">
          <div className="absolute inset-y-0 left-0 flex items-center">
            <button
              className="h-10 w-10 bg-gray-300 text-gray-700 rounded-full focus:outline-none"
              onClick={handlePrevSlide}
            >
              &lt;
            </button>
          </div>
          <div className="flex justify-center">
            <div className="w-4/5">
              <div className="p-4 bg-gray-100 rounded-lg transition-transform ease-in-out duration-300 transform translate-x-0">
                <p className='text-2xl font-bold'>{comments[currentIndex]}</p>
              </div>
            </div>
          </div>
          <div className="absolute inset-y-0 right-0 flex items-center">
            <button
              className="h-10 w-10 bg-gray-300 text-gray-700 rounded-full focus:outline-none"
              onClick={handleNextSlide}
            >
              &gt;
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Feedback;
