
import React from "react";
import Header from "./components/Header";
import Product from "./components/Product";
import { CartProvider } from "./CartContext"; 

export default function Home() {
  return (
    <CartProvider>
        <Header />
        <Product />
    </CartProvider>
  );
}
