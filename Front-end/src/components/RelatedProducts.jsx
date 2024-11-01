import React from 'react';
import data_product from '../components/Assets/data';
import Item from '../components/Items';

const RelatedProducts = () => {
  return (
    <div className="flex flex-col items-center gap-10 py-16 h-auto">
      <h1 className="text-[#171717] text-[40px] md:text-[50px] font-semibold">Related Products</h1>

      <hr className="w-[150px] md:w-[200px] h-[4px] md:h-[6px] bg-[#252525] rounded-[10px]" />

      <div className=" mt-[50px] grid grid-cols-1 xs:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-7 m-2">
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

export default RelatedProducts;
