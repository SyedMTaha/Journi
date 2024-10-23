import React from 'react';
import img from '../../assets/img3.jpeg';
import { FaLongArrowAltRight } from 'react-icons/fa';

const Collaborating = () => {
    return (
        <div className="h-screen flex flex-col md:flex-row bg-[#f0f8ff]">
            {/* Text Section */}
            <div className="md:w-1/2 flex flex-col justify-center px-6 py-10">
                <h1 className="text-4xl font-bold text-[#0F172A] mb-4">
                    Interested In Collaborating?
                </h1>
                <h2 className="text-2xl text-gray-700 mb-6">
                    Let's create something amazing together. Reach out to us for your next project.
                </h2>
                <p className="text-lg text-gray-600 mb-8">
                    Our team is ready to bring your ideas to life with cutting-edge technology and design.
                </p>
                <button className='bg-[#34Ace0] text-white rounded-lg py-3 px-6 flex items-center hover:bg-[#248EC3] transition duration-300 group sm:w-[12vw]'>
                    Get In Touch
                    <FaLongArrowAltRight className='ml-2 transition-transform transform group-hover:translate-x-2 duration-300' />
                </button>
            </div>

            {/* Image Section */}
            <div className="md:w-1/2 flex justify-center items-center p-16">
                <img
                    src={img}
                    alt="Collaboration"
                    className="w-full h-full object-cover rounded-md shadow-lg"
                />
            </div>
        </div>
    );
}

export default Collaborating;
