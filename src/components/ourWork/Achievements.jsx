import React from 'react';
import CountUp from 'react-countup';

const Achievements = () => {
  return (
    <div className="sm:h-[80vh] bg-[#E8FCFF] flex flex-col justify-center items-center text-center py-10 px-4">
      <h1 className="text-4xl font-bold text-[#0F172A] mb-6">Our Achievements</h1>
      <p className="text-lg text-gray-600 mb-12">
        A glimpse of what we have accomplished over the years with passion and dedication.
      </p>

      {/* White background card wrapping the achievement sections */}
      <div className="bg-white rounded-xl shadow-lg p-8 flex gap-16 justify-center items-center">
        {/* Projects Completed */}
        <div className="flex flex-col items-center">
          <p className='text-gray-500 text-sm mb-2'>Projects Completed</p>
          <p className='font-bold text-5xl text-[#0F172A]'>
            <CountUp start={0} end={20} duration={3} />+
          </p>
        </div>

        {/* Satisfied Clients */}
        <div className="flex flex-col items-center">
          <p className='text-gray-500 text-sm mb-2'>Satisfied Clients</p>
          <p className='font-bold text-5xl text-[#0F172A]'>
            <CountUp start={0} end={30} duration={3} />+
          </p>
        </div>

        {/* Years of Experience */}
        <div className="flex flex-col items-center">
          <p className='text-gray-500 text-sm mb-2'>Years of Experience</p>
          <p className='font-bold text-5xl text-[#0F172A]'>
            <CountUp start={0} end={2} duration={3} />+
          </p>
        </div>
      </div>
    </div>
  );
};

export default Achievements;
