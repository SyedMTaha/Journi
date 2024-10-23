import React from 'react';
import { FaWhatsapp, FaLinkedinIn, FaInstagram } from 'react-icons/fa';

const Footer = () => {
  return (
    <div className="bg-[#E8FCFF] sm:h-[40vh] flex flex-col justify-center items-center py-10">
      <p className="text-lg text-center mb-4 text-gray-600">© 2024 JOURNI - Your Trusted Software Agency</p>
      
      {/* Navigation Links */}
      <ul className="flex space-x-8 mb-4 text-gray-600 text-lg">
        <li className="hover:text-[#063F6B] cursor-pointer">About JOURNI</li>
        <li className="hover:text-[#063F6B] cursor-pointer">Our Services</li>
        <li className="hover:text-[#063F6B] cursor-pointer">Privacy Policy</li>
        <li className="hover:text-[#063F6B] cursor-pointer">Terms & Conditions</li>
        <li className="hover:text-[#063F6B] cursor-pointer">Support</li>
      </ul>

      {/* Social Media Icons */}
      <div className="flex space-x-6">
        <a href="https://wa.me/" target="_blank" rel="noopener noreferrer">
          <FaWhatsapp className="text-3xl text-[#063F6B] hover:text-[#248DC2] transition duration-300" />
        </a>
        <a href="https://www.linkedin.com/" target="_blank" rel="noopener noreferrer">
          <FaLinkedinIn className="text-3xl text-[#063F6B] hover:text-[#248DC2] transition duration-300" />
        </a>
        <a href="https://www.instagram.com/" target="_blank" rel="noopener noreferrer">
          <FaInstagram className="text-3xl text-[#063F6B] hover:text-[#248DC2] transition duration-300" />
        </a>
      </div>
    </div>
  );
}

export default Footer;
