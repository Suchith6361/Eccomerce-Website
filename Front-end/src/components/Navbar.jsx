import React, { useState } from "react";
import { Link } from "react-router-dom";
import Logo from "../components/Assets/logo.png";
import cart_icon from "../components/Assets/cart_icon.png";
import { ShopContext } from "../Context/ShopContext";
import { useContext } from "react";

const Navbar = () => {
  const [menu, setMenu] = useState("shop");
  const { getCartItems } = useContext(ShopContext);

  return (
    <div className="flex flex-col md:flex-row justify-between p-4 md:p-[16px] shadow-md bg-blue-100 items-center">
  
      <div className="flex items-center gap-2 mb-4 md:mb-0">
        <img src={Logo} alt="Logo" className="w-[40px] md:w-[50px]" />
        <p className="text-[#171717] text-2xl md:text-3xl font-semibold">SHOPPER</p>
      </div>


      <ul className="flex flex-col md:flex-row gap-2 md:gap-4 items-center text-[#636363] text-[14px] md:text-[16px] cursor-pointer">
        <li>
          <Link
            to="/"
            onClick={() => setMenu("shop")}
            className={`relative ${menu === "shop" ? "text-red-600" : ""}`}
          >
            Shop
            {menu === "shop" && (
              <span className="absolute bottom-[-4px] md:bottom-[-8px] left-0 w-full h-[2px] md:h-[3px] bg-red-600"></span>
            )}
          </Link>
        </li>
        <li>
          <Link
            to="/mens"
            onClick={() => setMenu("men")}
            className={`relative ${menu === "men" ? "text-red-600" : ""}`}
          >
            Men
            {menu === "men" && (
              <span className="absolute bottom-[-4px] md:bottom-[-8px] left-0 w-full h-[2px] md:h-[3px] bg-red-600"></span>
            )}
          </Link>
        </li>
        <li>
          <Link
            to="/womens"
            onClick={() => setMenu("women")}
            className={`relative ${menu === "women" ? "text-red-600" : ""}`}
          >
            Women
            {menu === "women" && (
              <span className="absolute bottom-[-4px] md:bottom-[-8px] left-0 w-full h-[2px] md:h-[3px] bg-red-600"></span>
            )}
          </Link>
        </li>
        <li>
          <Link
            to="/kids"
            onClick={() => setMenu("kids")}
            className={`relative ${menu === "kids" ? "text-red-600" : ""}`}
          >
            Kids
            {menu === "kids" && (
              <span className="absolute bottom-[-4px] md:bottom-[-8px] left-0 w-full h-[2px] md:h-[3px] bg-red-600"></span>
            )}
          </Link>
        </li>
      </ul>


      <div className="flex gap-4 md:gap-8 items-center mt-4 md:mt-0">
        <button className="border border-gray-500 px-4 md:px-8 rounded-full py-2 cursor-pointer text-[#515151] active:bg-gray-600 active:text-white">
          <Link to="/login">Login</Link>
        </button>
        <div className="flex items-center justify-center relative">
          <Link to="/cart">
            <img className="w-[20px] md:w-[25px] h-[20px] md:h-[25px]" src={cart_icon} alt="Cart" />
          </Link>
          <span className="absolute top-[-8px] right-[-8px] w-[15px] h-[15px] bg-red-600 rounded-full text-[#fff] text-center text-[10px] md:text-[12px] font-semibold flex items-center justify-center">
            {getCartItems()}
          </span>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
