import React from 'react';
import img from '../../assets/img2.jpeg';

const Expertise = () => {
  return (
    <div className='h-screen flex flex-col md:flex-row w-full items-center justify-center px-6 md:px-12 gap-10'> {/* Full height, Flexbox for columns */}
      {/* Left Column - Text Content */}
      <div className="md:w-1/2 flex flex-col justify-center space-y-6">
        {/* Title */}
        <p className='text-[#2C92C5] text-lg font-semibold'>Our Expertise</p>

        {/* Heading */}
        <h1 className='text-[#0F172A] text-3xl md:text-4xl font-semibold leading-tight'>
          Innovative Solutions for Modern Challenges
        </h1>

        {/* Description */}
        <p className='text-gray-600'>
          We provide cutting-edge services in mobile and web design, development, blockchain technology, 
          and chatbot integration to streamline your business processes.
        </p>

        {/* Button */}
        <button className='bg-[#34Ace0] text-white rounded-md sm:w-[12vw] py-2 px-6 hover:bg-[#248EC3]'>
          Explore Services
        </button>
      </div>

      {/* Right Column - Image */}
      <div className="md:w-1/2 flex justify-center items-center">
        <img src={img} alt="Expertise" className="w-full max-w-lg rounded-xl object-cover shadow-lg" />
      </div>
    </div>
  );
};

export default Expertise;
