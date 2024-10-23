import React from 'react'
import { FaArrowRight } from "react-icons/fa";

const Card = () => {
  return (
    <div className='px-8 py-4'>
        <div className="bg-[#053E6A] rounded-xl flex flex-col gap-4 text-white items-center justify-center py-16 ">
            <h1 className='text-4xl'>Ready to Transform Your Business?</h1>
            <p className='text-lg text-center font-light sm:w-[40vw]'>Join JOURNI today and leverage our expertise in mobile design, web development, and more to elevate your business.</p>
            <div className="flex gap-4">
                <button className='bg-[#34Ace0] py-2 px-3 rounded-lg'>Get Started</button>
                <button className='flex items-center gap-1 justify-center font-semibold'>Discover More <FaArrowRight /> </button>
            </div>
        </div>
    </div>
  )
}

export default Card