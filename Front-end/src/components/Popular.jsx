import React from 'react';
import data_product from './Assets/data';
import Item from './Items';

const Popular = () => {
  return (
    <div className='flex flex-col items-center gap-[10px] h-auto w-full'>
  
      <hr className='w-[100px] md:w-[200px] h-[6px] bg-[#171717] rounded-[10px]' />

      <div className="popular-item grid grid-cols-1 xs:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6 md:gap-8 px-4 md:px-12 w-full">
        {data_product.map((item, index) => {
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
        })}
      </div>
    </div>
  );
};

export default Popular;
