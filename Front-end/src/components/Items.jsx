import React from "react";
import { Link } from "react-router-dom";

const Item = (props) => {
  return (
    <div className="item transform hover:scale-[1.1] transition duration-500  mt-4">
      <Link to={`/product/${props.id}`}>
        <img onClick={window.scrollTo(0,0)} className="xs:h-[300px] xs:w-[300px] lg:h-[400px] lg:w-[450px]    object-cover" src={props.image} alt="" />
      </Link>
      <p className="mx-[3px] my-[5px]">{props.name}</p>
      <div className="item-price flex gap-4">
        <div className="item-price-new text-[#374151] text-[18px] font-medium">
          ₹{props.new_price}
        </div>
        <div className="item-price-old text-[#8c8c8c] text-[18px] font-medium line-through">
          ₹{props.old_price}
        </div>
      </div>
    </div>
  );
};

export default Item;
