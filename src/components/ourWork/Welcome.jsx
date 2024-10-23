import React from 'react';
import img from "../../assets/bg-1.jpeg";
import CountUp from 'react-countup';

const Welcome = () => {
    return (
        <div 
            className="h-screen bg-cover bg-center flex flex-col justify-center items-center text-center relative"
            id='Work'
            style={{ backgroundImage: `url(${img})` }} // Inline style for background image
        >
            {/* Overlay for better text readability */}
            <div className="absolute inset-0 bg-black opacity-50"></div>

            {/* Content inside the div */}
            <div className="relative z-10 text-white p-8">
                <h1 className="text-4xl font-bold mb-6">Our Portfolio</h1>
                <p className="text-lg max-w-2xl mx-auto mb-8">
                    Explore our cutting-edge projects that showcase our expertise in mobile design, web development, blockchain, and more.
                </p>

                <div className="flex gap-10 justify-center">
                    {/* Projects Completed */}
                    <div className="flex flex-col items-center">
                        <p className='font-semibold text-3xl'>
                            <CountUp start={0} end={20} duration={3} />+
                        </p>
                        <p className='text-gray-300 text-sm'>Projects Completed</p>
                    </div>

                    {/* Satisfied Clients */}
                    <div className="flex flex-col items-center">
                        <p className='font-semibold text-3xl'>
                            <CountUp start={0} end={30} duration={3} />+
                        </p>
                        <p className='text-gray-300 text-sm'>Satisfied Clients</p>
                    </div>

                    {/* Years of Experience */}
                    <div className="flex flex-col items-center">
                        <p className='font-semibold text-3xl'>
                            <CountUp start={0} end={2} duration={3} />+
                        </p>
                        <p className='text-gray-300 text-sm'>Years of Experience</p>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Welcome;
