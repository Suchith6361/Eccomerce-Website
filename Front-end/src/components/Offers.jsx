import React from 'react';
import exclusive_image from './Assets/exclusive_image.png';

const Offers = () => {
  return (
    <div className='w-full md:w-[80%] h-auto mt-8 flex flex-col md:flex-row m-auto py-16 px-6 md:py-32 md:px-10 mb-16 md:mb-36 bg-gradient-to-b from-[#3439c0] to-[#e1ffea22]'>

      <div className="offer-left flex-1 flex flex-col justify-center text-center md:text-left">
        <h1 className='text-2xl md:text-3xl font-medium'>Exclusive Offers</h1>
        <h1 className='text-2xl md:text-3xl font-medium'>Offer For You</h1>
        <p className='text-lg md:text-xl font-medium'>ONLY ON BEST SELLERS PRODUCTS</p>
        <button className='w-full md:w-[282px] h-[50px] md:h-[70px] rounded-[35px] bg-[#ff4141] border-none text-white text-[18px] md:text-[22px] font-medium mt-5 md:mt-7 cursor-pointer'>
          Check Now
        </button>
      </div>


      <div className="offer-right flex-1 flex justify-center md:justify-end items-center mt-10 md:mt-0">
        <img className='w-[70%] md:w-full' src={exclusive_image} alt="Exclusive Offer" />
      </div>
    </div>
  );
}

export default Offers;
