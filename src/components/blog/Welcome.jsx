import React from 'react';
import bg from '../../assets/bg-2.jpeg';
import CountUp from 'react-countup';

const Welcome = () => {
  return (
    <div className="relative h-screen flex flex-col items-center justify-center text-center bg-cover bg-center" style={{ backgroundImage: `url(${bg})` }}>
      {/* Overlay for better text readability */}
      <div className="absolute inset-0 bg-black opacity-70" />
      
      <h1 className="text-4xl font-bold text-white mb-4 drop-shadow-lg">
        Welcome to JOURNI Insights
      </h1>
      <p className="text-lg text-gray-200 mb-8 max-w-lg drop-shadow-md">
        Stay updated with the latest trends and insights in software development, blockchain, and mobile design.
      </p>
      <div className="flex gap-10 justify-center">
        {/* Projects Completed */}
        <div className="flex flex-col items-center">
          <p className='font-semibold text-5xl text-black'>
            <CountUp start={0} end={20} duration={3} />+
          </p>
          <p className='text-black text-sm'>Projects Completed</p>
        </div>

        {/* Satisfied Clients */}
        <div className="flex flex-col items-center">
          <p className='font-semibold text-5xl text-black'>
            <CountUp start={0} end={30} duration={3} />+
          </p>
          <p className='text-black text-sm'>Satisfied Clients</p>
        </div>

        {/* Years of Experience */}
        <div className="flex flex-col items-center">
          <p className='font-semibold text-5xl text-black'>
            <CountUp start={0} end={2} duration={3} />+
          </p>
          <p className='text-black text-sm'>Years of Experience</p>
        </div>
      </div>
    </div>
  );
}

export default Welcome;
