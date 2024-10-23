import React from 'react';

const Team = () => {
  return (
    <div className="min-h-screen bg-white flex flex-col justify-center py-12">
      {/* Section Heading */}
      <div className="text-center mb-8">
        <p className="text-[#34Ace0] font-bold text-2xl">Meet Our Team</p>
        <p className="text-[#0F172A] text-lg font-semibold">The talented professionals behind JOURNI's success</p>
      </div>

      {/* Team Cards */}
      <div className="flex flex-wrap justify-center gap-8 px-4">
        {/* Maarij Bukhari (CEO and Founder) */}
        <div className="bg-white rounded-lg shadow-lg p-6 w-full sm:w-1/3 flex flex-col items-center">
          <img
            src="https://via.placeholder.com/150" 
            alt="Maarij Bukhari"
            className="rounded-full mb-4 w-32 h-32 object-cover"
          />
          <div className="text-center">
            <p className="font-bold text-[#34Ace0] text-xl">Maarij Bukhari</p>
            <p className="text-gray-600">CEO & Founder</p>
          </div>
        </div>

        {/* Syed M Taha (CTO and Co-founder) */}
        <div className="bg-white rounded-lg shadow-lg p-6 w-full sm:w-1/3 flex flex-col items-center">
          <img
            src="https://via.placeholder.com/150"
            alt="Syed M Taha"
            className="rounded-full mb-4 w-32 h-32 object-cover"
          />
          <div className="text-center">
            <p className="font-bold text-[#34Ace0] text-xl">Syed M Taha</p>
            <p className="text-gray-600">CTO & Co-founder</p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Team;
