import React from 'react';

const Testimonials = () => {
  return (
    <div className="bg-[#E8FCFF] py-12">
      {/* Section title */}
      <div className="mb-8">
        <p className="text-center text-[#34Ace0] font-bold text-xl">Testimonials from Our Valued Clients</p>
        <p className="text-center font-semibold text-3xl">What Our Clients Say</p>
      </div>

      {/* Testimonials cards container */}
      <div className="flex flex-wrap justify-center gap-6 px-4">
        {/* Testimonial 1 */}
        <div className="bg-white rounded-lg shadow-lg p-6 max-w-sm w-full sm:w-1/3">
          <p className="text-gray-600 italic">
            "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Proin vel odio sit amet eros aliquam consequat. Pellentesque habitant morbi tristique."
          </p>
          <div className="mt-4">
            <p className="font-bold text-[#34Ace0]">John Doe</p>
            <p className="text-sm text-gray-500">CEO, ABC Corp</p>
          </div>
        </div>

        {/* Testimonial 2 */}
        <div className="bg-white rounded-lg shadow-lg p-6 max-w-sm w-full sm:w-1/3">
          <p className="text-gray-600 italic">
            "Curabitur blandit tempus porttitor. Vestibulum id ligula porta felis euismod semper. Nulla vitae elit libero, a pharetra augue."
          </p>
          <div className="mt-4">
            <p className="font-bold text-[#34Ace0]">Jane Smith</p>
            <p className="text-sm text-gray-500">Founder, XYZ Studio</p>
          </div>
        </div>

        {/* Testimonial 3 */}
        <div className="bg-white rounded-lg shadow-lg p-6 max-w-sm w-full sm:w-1/3">
          <p className="text-gray-600 italic">
            "Aenean eu leo quam. Pellentesque ornare sem lacinia quam venenatis vestibulum. Sed posuere consectetur est at lobortis."
          </p>
          <div className="mt-4">
            <p className="font-bold text-[#34Ace0]">Michael Lee</p>
            <p className="text-sm text-gray-500">CTO, Tech Innovations</p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Testimonials;
