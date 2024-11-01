import React from 'react';

const Newsletter = () => {
  return (
    <div className='w-full px-4 md:px-20 mt-6 h-auto flex flex-col items-center justify-center py-[100px] bg-gradient-to-b from-[#ad2fb6] to-[#e1ffea22] gap-7'>
      <h1 className='text-[#454545] text-[28px] md:text-[40px] lg:text-[55px] font-medium text-center'>
        Get Exclusive Offers On Your Email
      </h1>
      <p className='text-[#454545] text-[16px] md:text-[20px] lg:text-2xl text-center'>
        Subscribe to our newsletter and stay Updated.
      </p>
      <div className='flex flex-col md:flex-row items-center justify-center bg-white w-full md:w-[730px] h-auto md:h-[70px] rounded-[80px] border-[1px] border-[#e3e3e3] px-4'>
        <input
          className='w-full md:w-[500px] p-4 border-none outline-none text-[#616161] text-[16px] md:text-[20px] mb-4 md:mb-0'
          type="email"
          placeholder='Your Email id'
        />
        <button className='w-full md:w-[210px] h-[50px] md:h-[70px] rounded-[80px] bg-black text-white text-[16px] cursor-pointer'>
          Subscribe
        </button>
      </div>
    </div>
  );
};

export default Newsletter;
