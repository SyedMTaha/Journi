import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom'; // Import Link from react-router-dom
import img from '../assets/logo.png';

const Navbar = () => {
  const [showNavbar, setShowNavbar] = useState(true); // State to control navbar visibility
  const [lastScrollY, setLastScrollY] = useState(0);  // Store the last scroll position

  // Handle scrolling logic
  const handleScroll = () => {
    const currentScrollY = window.scrollY;

    if (currentScrollY > lastScrollY && currentScrollY > 300) {
      // When scrolling down past 300px, hide the navbar
      setShowNavbar(false);
    } else {
      // When scrolling up, show the navbar
      setShowNavbar(true);
    }

    // Update the last scroll position
    setLastScrollY(currentScrollY);
  };

  // Use effect to listen to scroll events
  useEffect(() => {
    window.addEventListener('scroll', handleScroll);

    // Cleanup event listener on component unmount
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, [lastScrollY]); // Re-run the effect only when lastScrollY changes

  return (
    <div
      className={`bg-white bg-opacity-30 backdrop-blur-lg flex justify-between items-center p-4 rounded-full shadow-lg mx-4 my-2 fixed top-1 w-[98%] z-10 transition-transform duration-300 ${
        showNavbar ? 'translate-y-0' : '-translate-y-full'
      }`} // Glassmorphism effect with backdrop-blur
    >
      {/* Logo */}
      <div className="text-sm font-bold pl-8 text-[#063F6B]"> {/* Adjusted color for better visibility */}
        <Link to="/">
          <img src={img} alt="" className='h-8' />
        </Link> {/* Make the logo link to the homepage */}
      </div>

      {/* Navigation Links */}
      <div className="flex flex-grow justify-center space-x-8">
        <Link to="/" className="relative text-gray-700 hover:text-blue-500">
          Home
          <span className="absolute left-0 -bottom-1 h-1 w-full bg-blue-500 scale-x-0 transition-transform duration-300 hover:scale-x-100"></span>
        </Link>
        <Link to="/work" className="relative text-gray-700 hover:text-blue-500">
          Our Work
          <span className="absolute left-0 -bottom-1 h-1 w-full bg-blue-500 scale-x-0 transition-transform duration-300 hover:scale-x-100"></span>
        </Link>
        {/* <Link to="/contact" className="relative text-gray-700 hover:text-blue-500">
          Contact Us
          <span className="absolute left-0 -bottom-1 h-1 w-full bg-blue-500 scale-x-0 transition-transform duration-300 hover:scale-x-100"></span>
        </Link> */}
        <Link to="/blog" className="relative text-gray-700 hover:text-blue-500">
          Blog
          <span className="absolute left-0 -bottom-1 h-1 w-full bg-blue-500 scale-x-0 transition-transform duration-300 hover:scale-x-100"></span>
        </Link>
      </div>

      {/* Join Us and Contact Us Buttons */}
      <div className="space-x-4">
        {/* <Link to="/join-us" className="text-gray-700 px-4 py-2 border border-[#248DC2] rounded-full hover:bg-[#248DC2] hover:text-white transition duration-300">
          Join Us
        </Link> */}
        <Link to="/contact" className="bg-[#248DC2] text-white px-4 py-2 rounded-full hover:bg-blue-600">
          Contact Us
        </Link>
      </div>
    </div>
  );
};

export default Navbar;
