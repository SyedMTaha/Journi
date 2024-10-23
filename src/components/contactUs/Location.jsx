import React from 'react';

const Location = () => {
  return (
    <div className="h-[70vh] flex">
      {/* Left Section with Text */}
      <div className="w-1/2 flex flex-col justify-center px-8">
        <h1 className="text-3xl font-bold mb-4">Visit Our Creative Hub</h1>
        <p className="text-lg text-gray-700">
          Explore our innovative space in Taxila, Pakistan, where groundbreaking ideas come to life.
        </p>
      </div>
      <div className="w-1/2 p-12">
        <iframe
          title="Google Map"
          src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3315.1363195235195!2d72.868411!3d33.744038!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x38df1b97c74ba129%3A0x40d10bc3b9df96d8!2sTaxila%2C%20Pakistan!5e0!3m2!1sen!2s!4v1696019504926!5m2!1sen!2s"
          className="w-full h-full border-0"
          allowFullScreen=""
          loading="lazy"
        ></iframe>
      </div>
    </div>
  );
};

export default Location;
