import React, { useContext } from "react";
import { ShopContext } from "../Context/ShopContext";
import removeIcon from "./Assets/cart_cross_icon.png";

const Cartitems = () => {
  const { all_product, cartItems, removeFromCart, getTotalCartAmount } =
    useContext(ShopContext);

  return (
    <div className="my-[50px] mx-[10px] md:mx-[50px]">
      <div className="format-main grid grid-cols-1 md:grid-cols-6 gap-[10px] md:gap-[30px] py-[10px] md:py-[20px] px-[0px] text-[#454545] text-[14px] md:text-[18px] font-semibold">
        <p className="hidden md:block">Products</p>
        <p className="hidden md:block">Title</p>
        <p className="hidden md:block">Price</p>
        <p className="hidden md:block">Quantity</p>
        <p className="hidden md:block">Total</p>
        <p className="hidden md:block">Remove</p>
      </div>
      <hr className="h-[2px] bg-[#e2e2e2]" />
      {all_product.map((e) => {
        if (cartItems[e.id] > 0) {
          return (
            <div key={e.id} className="my-[10px]">
              <div className="cart-format-main grid grid-cols-1 md:grid-cols-6 gap-[10px] md:gap-[30px] py-[10px] md:py-[20px] text-[#454545] text-[14px] md:text-[18px] font-semibold items-center">
                <img className="w-[80px] md:w-[100px]" src={e.image} alt="" />
                <p>{e.name}</p>
                <p>₹{e.new_price}</p>
                <button className="cart-quantity w-[50px] h-[40px] border-[2px] border-[#ebebeb] bg-[#fff]">
                  {cartItems[e.id]}
                </button>
                <p>₹{e.new_price * cartItems[e.id]}</p>
                <div className="flex justify-end md:justify-center">
                  <img
                    className="w-[16px] md:w-[20px] cursor-pointer"
                    src={removeIcon}
                    onClick={() => {
                      removeFromCart(e.id);
                    }}
                    alt="remove"
                  />
                </div>
              </div>
            </div>
          );
        }
        return null;
      })}
      <div className="cart-down flex flex-col my-[30px] md:my-[50px]">
        <div className="cart-total flex flex-col gap-[15px] md:gap-[40px] mx-0">
          <h1 className="font-bold text-lg md:text-2xl">Cart Totals</h1>
          <div>
            <div className="cart-total-item flex justify-between py-[10px]">
              <p>Subtotal</p>
              <p>₹{getTotalCartAmount()}</p>
            </div>
            <hr />
            <div className="cart-total-item flex justify-between py-[10px]">
              <p>Shipping Fee</p>
              <p>Free</p>
            </div>
            <hr />
            <div className="cart-total-item flex justify-between py-[10px]">
              <h3 className="font-bold">Total</h3>
              <h3 className="font-bold">₹{getTotalCartAmount()}</h3>
            </div>
          </div>
          <button className="w-[100%] md:w-[250px] h-[48px] bg-[#ff5a5a] text-white font-semibold">
            PROCEED TO CHECKOUT
          </button>
        </div>
        <div className="cart-promocode flex flex-col text-[14px] font-semibold mt-[20px]">
          <p className="text-[#555]">If you have a promo code, Enter It Here</p>
          <div className="cart-promobox flex flex-col md:flex-row items-center w-[100%] md:w-[400px] mt-[15px] pl-[15px] h-[48px] bg-[#eaeaea]">
            <input
              className="bg-transparent text-[14px] w-[100%] md:w-[250px] h-[40px] outline-none"
              type="text"
              placeholder="Promo Code"
            />
            <button className="w-[100%] xs:w-44 xs:p-0 xs:-mb-10 xs:ml-62   md:w-[150px] h-[48px] bg-black text-white mt-[10px] md:mt-0">
              Submit
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Cartitems;
