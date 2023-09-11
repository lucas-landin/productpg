'use client'
import React from "react";
import { useCart } from "../CartContext";
import Image from "next/image";
import { iconDelete } from "../assets";


const CartModal = ({ closeCart, iconCoordinates }) => {
  const { top, left } = iconCoordinates;
  const { isCartEmpty, cartItems, removeItemFromCart } = useCart();

  return (
    <div
      className="fixed inset-0 flex justify-center items-center bg-transparent z-30 max-[768px]:inset-1 max-[768px]:p-4"
      onClick={closeCart}
    >
      <div
        className="bg-white rounded-lg transform transition-transform ease-in-out duration-300 absolute shadow-2xl max-w-sm h-auto "
        onClick={(e) => e.stopPropagation()}
        style={{
          top: `${top + 30}px`, // Ajuste vertical
          left: `${left - 300}px`, // Ajuste horizontal
        }}
      >
        <div className="cart-head border-b-[1px] border-solid border-gray-300">
          <h4 className="font-bold px-6 py-4">Cart</h4>
        </div>
        <div className="w-96 h-42 p-4 flex flex-col items-center justify-center ">
          <div className={`p-10 ${cartItems.length === 0 ? 'py-14' : 'hidden'}`}>
            <p className="font-bold text-gray-500">Your cart is empty.</p>
          </div>

          { isCartEmpty && (
            <div className="cart-items p-4">
              {cartItems.map((item, index) => (
                <div key={index} className="cart-item flex items-center border-b-[1px] border-solid border-gray-300 p-2">
                  <div className="cart-item-image">
          <Image src={item.image} alt={item.name} width={70} height={70}  className=" rounded-lg" />
        </div>
        <div className="cart-item-details ml-2 flex-grow">
          <p className="font-bold">{item.name}</p>
          <p>Quantity: {item.quantity}</p>
          <p className="font-bold">Price: ${item.price.toFixed(2)}</p>
        </div>
        <div className="cart-item-remove">
          <button onClick={() => removeItemFromCart(item.id)}>
          <Image src={iconDelete} alt="Delete" width={16} height={16} />
          </button>
        </div>
                </div>
              ))}
              
            </div>
          )}

        <a href="/#" className={`py-4 w-full bg-orange-e rounded-xl text-white font-bold text-center hover:opacity-75 ${cartItems.length === 0? 'hidden' : ''}`}>Checkout</a>
        </div>
      </div>
    </div>
  );
};

export default CartModal;

