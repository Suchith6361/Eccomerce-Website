import React, { useContext } from "react";
import star_icon from "./Assets/star_icon.png";
import star_dull_icon from "./Assets/star_dull_icon.png";
import { ShopContext } from "../Context/ShopContext";

const ProductDisplay = (props) => {
  const { product } = props;
  const { addToCart } = useContext(ShopContext);

  return (
    <div className="productdisplay  lg:flex-row my-0 mx-auto lg:mx-[170px] gap-10 p-4 lg:p-0">
     
      <div className="productdisplay-left sm:flex gap-4 lg:gap-6 w-full lg:w-auto">
        <div className="productdisplay-image-list flex flex-row sm:flex-col gap-4 lg:gap-[16px]">
          <img className="h-[100px] md:h-[133px]" src={product.image} alt="Product" />
          <img className="h-[100px] md:h-[133px]" src={product.image} alt="Product" />
          <img className="h-[100px] md:h-[133px]" src={product.image} alt="Product" />
          <img className="h-[100px]  lg:block md:h-[133px] w-32 lg:w-40" src={product.image} alt="Product" />
        </div>
        <div className="productdisplay-image w-full lg:w-[700px]">
          <img
            className="productdisplay-image-main  h-[280px] md:h-[auto] lg:w-auto lg:h-[580px] xs:mt-4 xs:w-[400px] xs:h-auto   object-cover"
            src={product.image}
            alt="Main Product"
          />
        </div>
      </div>

    
      <div className="productdisplay-right flex-1 flex flex-col">
        <h1 className="text-xl md:text-3xl font-semibold text-[#3d3d3d]">{product.name}</h1>

        <div className="productdisplay-stars flex items-center mt-4 text-[#1c1c1c] text-base md:text-[16px]">
          <img src={star_icon} alt="Star" />
          <img src={star_icon} alt="Star" />
          <img src={star_icon} alt="Star" />
          <img src={star_icon} alt="Star" />
          <img src={star_dull_icon} alt="Star" />
          <p className="ml-2">(468)</p>
        </div>

    
        <div className="productdisplay-right-prices flex my-4 gap-6 text-lg md:text-[24px]">
          <div className="productdisplay-right-price-old text-[#818181] line-through">
            ₹{product.old_price}
          </div>
          <div className="productdisplay-right-price-new text-[#ff4141]">
            ₹{product.new_price}
          </div>
        </div>

   
        <div className="productdisplay-right-description mb-4 text-[15px] md:text-base text-[#3d3d3d]">
          A lightweight, usually knitted, cotton or silk scarf, with a straight or wavy edge, 
          that is usually worn around the neck, shoulders, or waist.
        </div>

       
        <div className="productdisplay-right-size">
          <h1 className="text-xl md:text-2xl mt-6 font-bold text-[#656565]">Select Size</h1>
          <div className="flex my-6 gap-4 md:gap-5">
            <div className="py-[12px] px-[20px] md:py-[18px] md:px-[24px] bg-[#fbfbfb] border-[1px] rounded-[3px] cursor-pointer">S</div>
            <div className="py-[12px] px-[20px] md:py-[18px] md:px-[24px] bg-[#fbfbfb] border-[1px] rounded-[3px] cursor-pointer">M</div>
            <div className="py-[12px] px-[20px] md:py-[18px] md:px-[24px] bg-[#fbfbfb] border-[1px] rounded-[3px] cursor-pointer">L</div>
            <div className="py-[12px] px-[20px] md:py-[18px] md:px-[24px] bg-[#fbfbfb] border-[1px] rounded-[3px] cursor-pointer">XL</div>
            <div className="py-[12px] px-[20px] md:py-[18px] md:px-[24px] bg-[#fbfbfb] border-[1px] rounded-[3px] cursor-pointer">XXL</div>
          </div>
        </div>

     
        <button 
          onClick={() => addToCart(product.id)} 
          className="py-[15px] md:py-[20px] px-[40px] xs:w-[200px]  lg:w-[400px] text-[16px] font-semibold text-white bg-red-500 mb-6 md:mb-[40px] cursor-pointer border-none rounded"
        >
          ADD TO CART
        </button>

      
        <p className="productdisplay-right-category mt-4">
          <span className="font-semibold">Category :</span> Women, T-Shirt, Crop Top
        </p>
        <p className="productdisplay-right-tags">
          <span className="font-semibold">Tags :</span> Modern, Latest
        </p>
      </div>
    </div>
  );
};

export default ProductDisplay;
