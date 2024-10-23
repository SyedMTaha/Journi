import React from 'react';

const Start = () => {
  return (
    <div className="h-[50vh] bg-[#34ACE0] text-white flex flex-col items-center justify-center text-center px-4">
      <h1 className="text-3xl font-bold mb-4">Let's Start Your Project</h1>
      <p className="text-lg mb-6 max-w-lg">
        Join our client list and take the first step towards transforming your vision into reality. Contact us now!
      </p>
      <div className="flex gap-4">
        {/* Primary Button */}
        <button className="bg-white text-[#34ACE0] font-semibold py-2 px-6 rounded-full hover:bg-gray-100 transition duration-300">
          Get Started
        </button>
        {/* Secondary Button */}
        <button className="border border-white text-white font-semibold py-2 px-6 rounded-full hover:bg-white hover:text-[#34ACE0] transition duration-300">
          Learn More
        </button>
      </div>
    </div>
  );
};

export default Start;
