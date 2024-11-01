import React from 'react';
import arrow_icon from './Assets/breadcrum_arrow.png';

const Breadcrum = (props) => {
  const { product } = props;

  return (
    <div className='flex flex-wrap items-center gap-2 text-[#5e5e5e] text-[14px] font-[600] my-4 mx-4 sm:text-[16px] sm:my-8 sm:mx-8 md:mx-[170px] capitalize'>
      <span className=' md:inline'>HOME</span> 
      <img src={arrow_icon} alt="arrow" className='w-4 h-4' /> 
      <span className=' md:inline'>SHOP</span> 
      <img src={arrow_icon} alt="arrow" className='w-4 h-4' /> 
      <span className=' md:inline'>{product.category}</span> 
      <img src={arrow_icon} alt="arrow" className='w-4 h-4' /> 
      <span className=' md:inline'>{product.name}</span>
    </div>
  );
};

export default Breadcrum;
