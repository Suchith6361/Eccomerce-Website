import React from 'react';
import new_collection from './Assets/new_collections';
import Item from './Items';

const NewCollections = () => {
  return (
    <div className='flex flex-col items-center gap-6'>
      <h1 className='text-2xl md:text-3xl font-semibold mb-4'>NEW COLLECTIONS</h1>
      <hr className='w-[150px] md:w-[200px] h-[4px] md:h-[6px] bg-[#171717] rounded-[10px]' />
      
      <div className="collection m-4 md:m-12 grid 
        grid-cols-1  xs:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-7">
        {
          new_collection.map((item, index) => {
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
          })
        }
      </div>
    </div>
  );
};

export default NewCollections;
