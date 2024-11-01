import React from 'react';
import footer_logo from './Assets/logo_big.png';
import instagram_icon from './Assets/instagram_icon.png';
import pintester_icon from './Assets/pintester_icon.png';
import whatsapp_icon from './Assets/whatsapp_icon.png';

const Footer = () => {
  return (
    <div className='flex flex-col justify-center items-center gap-[30px] px-4 md:gap-[50px] py-10 bg-[#f4f1f1]'>

      <div className="footer-logo flex flex-col md:flex-row items-center gap-[20px]">
        <img className='h-[50px] md:h-[70px]' src={footer_logo} alt="Shopper Logo" />
        <p className='text-[#383838] text-[32px] md:text-[46px] font-medium'>SHOPPER</p>
      </div>

      <ul className='flex flex-col md:flex-row text-[#252525] text-[18px] md:text-[20px] gap-4 md:gap-[50px] text-center'>
        <li>Company</li>
        <li>Products</li>
        <li>Offices</li>
        <li>About</li>
        <li>Contact</li>
      </ul>

      <div className="social-icons flex gap-[15px] md:gap-[20px]">
        <div className="footer-icons-container p-[6px] bg-[#fbfbfb] border-[#ebebeb] border-[1px] rounded-full">
          <img className='w-[30px] h-[30px]' src={pintester_icon} alt="Pintester" />
        </div>
        <div className="footer-icons-container p-[6px] bg-[#fbfbfb] border-[#ebebeb] border-[1px] rounded-full">
          <img className='w-[30px] h-[30px]' src={instagram_icon} alt="Instagram" />
        </div>
        <div className="footer-icons-container p-[6px] bg-[#fbfbfb] border-[#ebebeb] border-[1px] rounded-full">
          <img className='w-[30px] h-[30px]' src={whatsapp_icon} alt="WhatsApp" />
        </div>
      </div>

  
      <div className="footer-copyright flex flex-col items-center gap-[20px] w-full text-[#1a1a1a] text-[16px] md:text-[20px] text-center">
        <hr className='w-[80%] border-none rounded-[10px] h-[3px] bg-gray-500' />
        <p>Copyright © 2024 Mern - All Rights reserved.</p>
      </div>
    </div>
  );
}

export default Footer;
