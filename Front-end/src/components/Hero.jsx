import React from 'react';
import hand_icon from './Assets/hand_icon.png';
import arrow_icon from './Assets/arrow.png';
import hero_image from './Assets/hero_image.png';

const Hero = () => {
  return (
    <div className='hero h-auto flex flex-col md:flex-row bg-gradient-to-b from-[#ad2fb6] to-[#e1ffea22]'>

      <div className='hero-left flex flex-col flex-1 justify-center gap-[20px] md:pl-[60px] lg:pl-[180px] leading-[1.1] p-4 md:p-0'>
        <h1 className='text-[#090909] text-[24px] md:text-[28px] font-medium'>New Arrivals Only</h1> 
        <div>
          <div className='hand-hand-icons flex gap-[10px] md:gap-[20px] text-[#171717] text-[32px] md:text-[50px] font-medium'>
            <p>New</p>
            <img className='w-[32px] md:w-[50px]' src={hand_icon} alt="Hand Icon" />
          </div>
          <div className='hand-hand-icons flex flex-col md:flex-row gap-[10px] md:gap-[20px] text-[#171717] text-[32px] md:text-[50px] font-medium'>
            <p>Collections</p>
            <p>For everyone</p>
          </div>
          <div className='hero-latest-btn flex justify-center rounded-full items-center gap-[10px] md:gap-[15px] w-full md:w-[250px] lg:w-[300px] h-[50px] md:h-[70px] mt-[20px] md:mt-[30px] bg-[#ff4141] text-white text-[18px] md:text-[22px] font-medium'>
            <div>Latest Collections</div>
            <img src={arrow_icon} alt="Arrow Icon" className='w-[16px] md:w-auto' />
          </div>
        </div>
      </div>


      <div className='hero-right flex justify-center items-center flex-1 mt-8 md:mt-0'>
        <img className='h-[300px] md:h-[500px] lg:h-[600px]' src={hero_image} alt="Hero Image" />
      </div>
    </div>
  );
}

export default Hero;
