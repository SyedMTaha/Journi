import React from 'react';

const ReachUs = () => {
  return (
    <div className="h-[55vh] flex flex-col justify-center bg-white text-gray-900 px-8 md:px-16">
      <h1 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
        Reach Out to Us
      </h1>
      <p className="text-lg md:text-xl font-light mb-6">
        We're ready to discuss your project and answer any questions. Let's build something amazing together.
      </p>

      {/* Locations */}
      <div className="space-y-4">
        <div>
          <h2 className="font-semibold text-black">Taxila:</h2>
          <p className="text-gray-700">Gulshan Colony</p>
        </div>
        <div>
          <h2 className="font-semibold text-black">Islamabad:</h2>
          <p className="text-gray-700">D-17</p>
        </div>
      </div>
    </div>
  );
};

export default ReachUs;
