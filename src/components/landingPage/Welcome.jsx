import React from 'react';
import { FaLongArrowAltRight } from "react-icons/fa";
import img from '../../assets/img1.jpeg';
import CountUp from 'react-countup';  // Importing CountUp for number animation

const Welcome = () => {
  return (
    <div className="h-screen bg-[#E8FCFF] flex justify-between items-center px-8 rounded-bl-[7rem]"> {/* Flex container */}
      {/* Left Child Div */}
      <div className="flex-1 flex flex-col justify-center">  {/* Center content vertically */}
        <h1 className="text-[3.6rem] font-semibold text-gray-800 leading-tight"> {/* Tighter line height */}
          Welcome to JOURNI
        </h1>

        {/* Paragraph with smaller margin below */}
        <p className='font-normal text-sm text-gray-600 max-w-[35rem] mt-4 mb-6 leading-relaxed'>
          Your one-stop solution for mobile design, web development, blockchain development, and chatbot integration.
        </p>

        {/* Buttons with tighter spacing */}
        <div className="flex gap-6 mb-6">
          <button className='bg-[#34Ace0] text-white rounded-full py-2 px-4 hover:bg-[#248EC3]'>
            Get Started
          </button>
          
          {/* Learn More with hover effect */}
          <button className='flex gap-1 items-center justify-center hover:text-[#34Ace0] transition-all duration-300 group'>
            Learn More 
            <FaLongArrowAltRight className='transition-transform transform group-hover:translate-x-2 duration-300' />
          </button>
        </div>

        {/* Stats section with consistent spacing */}
        <div className="flex gap-10">
          {/* Projects Completed */}
          <div className="flex flex-col items-start">
            <p className='font-semibold text-2xl text-[#0F172A]'>
              <CountUp start={0} end={20} duration={3} />+
            </p>
            <p className='text-gray-600 text-sm'>Projects Completed</p>
          </div>

          {/* Satisfied Clients */}
          <div className="flex flex-col items-start">
            <p className='font-semibold text-2xl text-[#0F172A]'>
              <CountUp start={0} end={30} duration={3} />+
            </p>
            <p className='text-gray-600 text-sm'>Satisfied Clients</p>
          </div>

          {/* Years of Experience */}
          <div className="flex flex-col items-start">
            <p className='font-semibold text-2xl text-[#0F172A]'>
              <CountUp start={0} end={2} duration={3} />+
            </p>
            <p className='text-gray-600 text-sm'>Years of Experience</p>
          </div>
        </div>   
      </div>

      {/* Right Child Div with customized border radius for the image */}
      <div className="flex-1 flex justify-center items-center"> {/* Center the image */}
        <img 
          src={img} 
          alt="Welcome Image" 
          className="rounded-tl-3xl rounded-br-3xl rounded-tr-[4rem] rounded-bl-[4rem] h-[90vh] object-cover"
        />
      </div>
    </div>
  );
}

export default Welcome;
