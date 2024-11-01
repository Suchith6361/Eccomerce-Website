import React from "react";

const DescriptionBox = () => {
  return (
    <div className="my-12 mx-4 md:mx-10 lg:mx-20">
      <div className="descriptionbox-navigator flex border-b border-[#d0d0d0] mb-4">
        <div className="des-nav-box flex items-center justify-center text-[16px] font-semibold w-[171px] h-[70px] border-r border-[#d0d0d0] cursor-pointer">
          Description
        </div>
        <div className="des-nav-box-fade flex items-center justify-center text-[16px] bg-[#FBFBFB] text-[#555] font-semibold w-[171px] h-[70px] cursor-pointer">
          Reviews (455)
        </div>
      </div>
      <div className="des-description flex flex-col gap-6 border border-[#D0D0D0] p-8 pb-16">
        <p>
          An e-commerce website is a platform that allows users to buy and sell
          products online. It is a website that sells products and services
          online, and is used to sell products and services to customers. An
          e-commerce website is a platform that allows users to buy and sell
          products online. It is a website that sells products and services
          online, and is used to sell products and services to customers.
        </p>
      </div>
    </div>
  );
};

export default DescriptionBox;
