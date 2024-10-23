import React from 'react';
import { FaInstagram, FaFacebookF, FaLinkedinIn, FaMediumM, FaBehance, FaDribbble } from 'react-icons/fa';

const InterestedServices = () => {
  return (
    <div className="relative sm:h-[80vh] bg-gradient-to-b from-[#063F6B] to-[#248DC2] flex items-center justify-center overflow-hidden">
      <div className="max-w-6xl w-full px-8 sm:px-14 flex flex-col sm:flex-row text-white rounded-lg overflow-hidden space-y-10 sm:space-y-0">
        {/* Left Section - Contact Info */}
        <div className="sm:w-1/2 p-10 flex flex-col justify-center space-y-6">
          <h1 className="text-5xl font-semibold leading-tight tracking-wide">
            Get in Touch with <span className="text-white/80">JOURNI</span>
          </h1>
          <h2 className="text-3xl font-light">Interested in Our Services?</h2>
          <p className="text-lg opacity-90 font-light">
            Monday-Friday, 9:00 am to 6:00 pm
          </p>
          <p className="text-lg opacity-80 font-light leading-relaxed">
            Our team is here to answer your queries and assist you with any services you need.
          </p>
        </div>

        {/* Right Section - Contact Details and Social Icons */}
        <div className="sm:w-1/2 p-10 flex flex-col justify-between">
          <div className="mb-8">
            <h3 className="text-3xl font-medium">SEND US A MESSAGE</h3>
            <p className="mt-4 text-lg font-light opacity-90 leading-relaxed">hr.journi@gmail.com</p>
          </div>

          <div>
            <h3 className="text-3xl font-medium">FOLLOW US</h3>
            <ul className="mt-6 flex space-x-6">
              <li>
                <FaInstagram className="text-3xl cursor-pointer hover:text-white/90 transition duration-300" />
              </li>
              <li>
                <FaFacebookF className="text-3xl cursor-pointer hover:text-white/90 transition duration-300" />
              </li>
              <li>
                <FaLinkedinIn className="text-3xl cursor-pointer hover:text-white/90 transition duration-300" />
              </li>
              <li>
                <FaMediumM className="text-3xl cursor-pointer hover:text-white/90 transition duration-300" />
              </li>
              <li>
                <FaBehance className="text-3xl cursor-pointer hover:text-white/90 transition duration-300" />
              </li>
              <li>
                <FaDribbble className="text-3xl cursor-pointer hover:text-white/90 transition duration-300" />
              </li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
}

export default InterestedServices;
