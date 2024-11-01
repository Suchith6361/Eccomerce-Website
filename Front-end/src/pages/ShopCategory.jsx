import React, { useContext } from 'react';
import { ShopContext } from '../Context/ShopContext';
import dropdown_icon from '../components/Assets/dropdown_icon.png';
import Item from '../components/Items';

const ShopCategory = (props) => {
  const { all_product } = useContext(ShopContext);
  
  return (
    <div className='ShopCategory'>
      <img className='block my-6 w-[90%] sm:w-[85%] md:w-[82%] mx-auto' src={props.banner} alt="" />
      
      <div className="shopcat-indexSort flex flex-col md:flex-row my-0 md:mx-[170px] justify-between items-center px-6 md:px-0">
        <p className='font-medium text-sm md:text-base'>
          <span>Showing 1-12</span> out of 36 products
        </p>
        <div className="shopcategory-sort py-2 px-5 rounded-full border-[1px] border-[#888] flex items-center cursor-pointer mt-4 md:mt-0">
          Sort by <img className='ml-3' src={dropdown_icon} alt="Dropdown" />
        </div>
      </div>
      
      <div className="shopcategory-products my-8 mx-auto grid grid-cols-1 xs:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6 md:gap-14 px-6 md:px-[100px] xs:text-[15px] lg:text-[20px]">
        {all_product.map((item, index) => {
          if (props.category === item.category) {
            return (
              <Item 
                key={index} 
                id={item.id} 
                name={item.name} 
                image={item.image} 
                new_price={item.new_price} 
                old_price={item.old_price} 
              />
            );
          } else {
            return null;
          }
        })}
      </div>
      
      <div className="shopcategory-loadmore flex justify-center items-center my-12 md:my-[150px] mx-auto w-[200px] md:w-[233px] h-[50px] md:h-[69px] rounded-full bg-[#ededed] text-[#787878] text-sm md:text-[18px] font-medium cursor-pointer">
        Explore More
      </div>
    </div>
  );
};

export default ShopCategory;
