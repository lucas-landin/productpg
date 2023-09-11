'use client'
import React, { useState, useEffect } from "react";
import { useCart } from "../CartContext";
import { iconMinus, iconPlus, productImg1 } from "../assets";
import Image from "next/image";

const Purchase = ({ lightBoxOpen }) => {
  const [count, setCount] = useState(0);
  const { addItemToCart } = useCart();

 
  const decrement = () => {
    if (count > 0) {
      setCount(count - 1);
    }
  };

  const increment = () => {
    if (count < 100) {
      setCount(count + 1);
    }
  };

  const handleAddToCart = () => {
    if (count > 0){ 
      const item = {
      id:Math.random() ,  
      name: "Fall Limited Edition Sneakers",
      price: 125.0 * count,
      quantity: count,
      image: productImg1,
    };
    
    addItemToCart(item);
    }
   
  };

  return (
    <div className="product_purchase flex flex-row items-center mb-4 max-[900px]:flex-col max-[900px]:gap-4 ">
      <div className="flex items-center bg-[#e9eaeda7] rounded-md p-3 max-[900px]:w-full  max-[900px]:justify-between  max-[900px]:px-6 ">
        <div className=" flex items-center max-[900px]:flex max-[900px]:felx-end">
          <button
            id="decrement_button"
            className="bg-transparent p-0 hover:opacity-70 pr-8"
            onClick={decrement}
          >
            <Image src={iconMinus} alt="Decrement" width={12} height={12} />
          </button>
        </div>
        <div className="flex flex-row gap-2 justify-evenly">
          <span id="counter" className=" text-center w-10 font-bold px-4 ">
            {count}
          </span>
        </div>
        <div className=" flex items-center max-[900px]:flex max-[900px]:felx-end">
          <button
            id="increment_button"
            className="bg-transparent p-0 hover:opacity-70 pl-8"
            onClick={increment}
          >
            <Image src={iconPlus} alt="Increment" width={12} height={12} />
          </button>
        </div>
      </div>
      <button
        onClick={handleAddToCart}
        className={` ${
          lightBoxOpen ? " -z-10" : ""
        } purchase-button text-white ml-8 bg-orange-e p-3 rounded-md flex items-center justify-center gap-4 w-1/2 font-bold hover:opacity-75  max-[900px]:w-full max-[900px]:ml-0 max-[900px]:mb-10 shadow-xl`}
      >
        <div className={"icon-cart"}></div>Add to cart
      </button>
    </div>
  );
};

export default Purchase;
