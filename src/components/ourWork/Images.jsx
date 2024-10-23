import React from 'react';
import img1 from '../../assets/img4.jpeg';
import img2 from '../../assets/img5.jpeg';
import img3 from '../../assets/img6.jpeg';

const Images = () => {
  return (
    <div className="grid grid-cols-3 grid-rows-2 gap-4 p-4 h-screen">
      {/* Image 1: row 2, column 1 */}
      <div className="row-start-2 col-start-1">
        <img 
          src={img1} 
          alt="Image 1" 
          className="w-full h-full object-cover rounded-lg"
        />
      </div>

      {/* Image 2: spans both rows in column 2 */}
      <div className="row-span-2 col-start-2">
        <img 
          src={img2} 
          alt="Image 2" 
          className="w-full h-full object-cover rounded-lg"
        />
      </div>

      {/* Image 3: row 1, column 3 */}
      <div className="row-start-1 col-start-3">
        <img 
          src={img3} 
          alt="Image 3" 
          className="w-full h-full object-cover rounded-lg"
        />
      </div>
    </div>
  );
};

export default Images;
