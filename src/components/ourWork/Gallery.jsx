import React from 'react';
import { FaMobileAlt, FaLaptopCode, FaShoppingCart, FaCube, FaRobot, FaPaintBrush } from 'react-icons/fa'; // Importing icons

const services = [
  {
    title: 'Mobile App Design',
    description: 'Beautiful and user-centric mobile app designs that provide seamless user experience.',
    icon: <FaMobileAlt className="text-4xl text-blue-500" />
  },
  {
    title: 'Mobile Development',
    description: 'Cross-platform mobile development to build scalable and performance-focused apps.',
    icon: <FaLaptopCode className="text-4xl text-blue-500" />
  },
  {
    title: 'E-commerce Platform',
    description: 'Robust e-commerce solutions to help your business reach global markets.',
    icon: <FaShoppingCart className="text-4xl text-blue-500" />
  },
  {
    title: 'Blockchain Solutions',
    description: 'Secure and scalable blockchain technology integration for your business.',
    icon: <FaCube className="text-4xl text-blue-500" />
  },
  {
    title: 'AI Chatbot Integration',
    description: 'Integrating AI chatbots to streamline customer engagement and support.',
    icon: <FaRobot className="text-4xl text-blue-500" />
  },
  {
    title: 'UI/UX Design',
    description: 'Stunning and intuitive UI/UX designs to enhance user engagement and satisfaction.',
    icon: <FaPaintBrush className="text-4xl text-blue-500" />
  }
];

const Gallery = () => {
  return (
    <div className="h-screen p-10 bg-gray-100" id="Work">
      <h1 className="text-4xl font-bold text-center text-gray-800 mb-8">Our Work Gallery</h1>
      <p className="text-center text-gray-600 mb-12">A curated showcase of our most impactful projects across various domains.</p>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
        {services.map((service, index) => (
          <div key={index} className="bg-white rounded-lg shadow-lg p-6 hover:shadow-xl transition duration-300">
            <div className="flex justify-center mb-4">
              {service.icon}
            </div>
            <h2 className="text-2xl font-semibold text-center mb-4">{service.title}</h2>
            <p className="text-gray-600 text-center">{service.description}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Gallery;
