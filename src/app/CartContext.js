'use client'
import React, { createContext, useContext, useState } from "react";

const CartContext = createContext();



export const useCart = () => {
  return useContext(CartContext);
};

export const CartProvider = ({ children }) => {
  const [cartItems, setCartItems] = useState([]);

  const addItemToCart = (item) => {
    setCartItems([...cartItems, item]);
  };

  const removeItemFromCart = (itemId) => {
    const updatedCart = cartItems.filter((item) => item.id !== itemId);
    setCartItems(updatedCart);
  };

   const isCartEmpty = () => {
    return cartItems.length === 0;
  };


  return (
    <CartContext.Provider value={{ cartItems, addItemToCart, removeItemFromCart,isCartEmpty }}>
      {children}
    </CartContext.Provider>
  );
};
