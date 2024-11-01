import React from 'react';

const LoginPage = () => {
  return (
    <div className='w-full h-auto p-8 bg-gradient-to-b from-[#ad2fb6] to-[#e1ffea22]]'>
      <div className="login-container w-[100%] max-w-[680px] h-auto bg-white m-auto py-9 px-12 rounded-lg shadow-lg">
        <h1 className='text-[#374151] text-[30px] font-medium'>Sign Up</h1>
        <div className="login-fields flex flex-col gap-4 mt-8">
          <input 
            className='h-[52px] w-full pl-2 border border-[#c9c9c9] rounded-md text-[#5c5c5c] text-[18px] focus:outline-none focus:ring-2 focus:ring-red-500'
            type="text" 
            placeholder='Enter your name' 
          />
          <input 
            className='h-[52px] w-full pl-4 border border-[#c9c9c9] rounded-md text-[#5c5c5c] text-[18px] focus:outline-none focus:ring-2 focus:ring-red-500'
            type="email" 
            placeholder='Enter your email' 
          />
          <input 
            className='h-[52px] w-full pl-4 border border-[#c9c9c9] rounded-md text-[#5c5c5c] text-[18px] focus:outline-none focus:ring-2 focus:ring-red-500'
            type="password" 
            placeholder='Enter your password' 
          />
        </div>
        <button className='w-full mt-6 h-[52px] bg-red-500 text-white text-[18px] font-medium rounded-md cursor-pointer hover:bg-red-600 transition duration-200'>
          Continue
        </button>
        <p className='text-[#8c8c8c] text-[18px] font-medium mt-4'>
          Already have an account? <span className='text-red-500 cursor-pointer'>Login</span>
        </p>
        <div className="login-agree flex items-center mt-6 gap-2">
          <input 
            type="checkbox" 
            name='agree' 
            id='agree' 
            aria-label="Agree to terms and privacy policy"
          />
          <p className='text-[#5c5c5c] text-[16px]'>
            By continuing, I agree to the <span className='text-red-500 cursor-pointer'>terms of use</span> and <span className='text-red-500 cursor-pointer'>privacy policy</span>.
          </p>
        </div>
      </div>
    </div>
  );
};

export default LoginPage;
