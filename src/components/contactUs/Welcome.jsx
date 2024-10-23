import React from 'react';

const Welcome = () => {
    return (
        <div className="h-[80vh] flex flex-col justify-center items-center bg-white text-gray-900">
            <h1 className="text-4xl md:text-5xl font-bold mb-4">
                Connect with <span className="text-blue-600">JOURNI</span>
            </h1>
            <p className="text-lg text-center md:text-xl font-light max-w-lg text-gray-700">
                We're here to help you transform your ideas into reality. Reach out to our expert team today.
            </p>
        </div>
    );
};

export default Welcome;
