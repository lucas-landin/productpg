"use client"
import React, { useState, useEffect } from "react";
import Image from "next/image";
import { logo, avatar, iconCart, menu, close } from "../assets"; 
import CartModal from "./CartModal";

const Header = () => {
  const [activeLink, setActiveLink] = useState("");
  const [isCartOpen, setIsCartOpen] = useState(false);
  const [toggleMenu, setToggleMenu] = useState(false);
  const [windowWidth, setWindowWidth] = useState(0);
  const [isLightboxVisible, setIsLightboxVisible] = useState(false);
  const [cartIconCoordinates, setCartIconCoordinates] = useState({ top: 0, left: 0 });

  const openCart = (e) => {
    e.preventDefault();
    const cartIconRect = e.target.getBoundingClientRect();
    setCartIconCoordinates({
      top: cartIconRect.bottom + window.scrollY,
      left: cartIconRect.left + window.scrollX + cartIconRect.width / 2,
    });
    setIsCartOpen(true);
  };

  const closeCart = () => {
    setIsCartOpen(false);
    setCartIconCoordinates(cartIconCoordinates)
  };

  useEffect(() => {
    const handleResize = () => {
      setWindowWidth(window.innerWidth);
      setToggleMenu(false);
    };

    window.addEventListener("resize", handleResize);

    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, []);

  useEffect(() => {
    setWindowWidth(window.innerWidth);
  }, []);

  const handleLinkClick = (link) => {
    setActiveLink(link);
    setToggleMenu(false); 
  };

 


  return (
    <header className="">
      <div className="spacer_wrapper md:border-b-[1px] md:border-solid border-gray-300 ">
        <nav className="w-full flex items-center justify-between md:p-4">
          <div className={`logo-list-wrapper flex items-center gap-6 ${windowWidth < 840 ? "flex flex-row-reverse gap-5": ""}`}>
            <div className="logo-wrapper py-8 ">
              <Image src={logo} width={140} height={100} alt="logo" className="block" />
            </div>
            <div className={`list-wrapper items-center inline-flex   ${windowWidth < 840 ? (toggleMenu ? "" : "sm:flex ") : " sm:flex"}`}>
              
              {windowWidth < 840 && (
                <Image
                  src={menu}
                  width={28}
                  height={28}
                  alt="menu"
                  className="object-contain cursor-pointer "
                  onClick={() => setIsLightboxVisible(true)}
                />
              )}
              
             
              <ul className={` pl-10 flex items-center gap-8 text-grayish-blue ${ windowWidth < 840 ? "hidden" : ""}`}>
                <li>
                  <a
                    href="/#"
                    onClick={() => handleLinkClick("Collections")}
                    className={`  ${windowWidth < 768 ? "": `${activeLink === "Collections" ? "activeLink" : ""}`} `}
                  >
                    Collections
                  </a>
                </li>
                
                <li>
                  <a
                    href="/#"
                    onClick={() => handleLinkClick("Men")}
                    className={`  ${windowWidth < 768 ? "": `${activeLink === "Men" ? "activeLink" : ""}`} `}
                  >
                    Men
                  </a>
                </li>
                <li>
                  <a
                    href="/#"
                    onClick={() => handleLinkClick("Women")}
                    className={`  ${windowWidth < 768 ? "": `${activeLink === "Women" ? "activeLink" : ""}`} `}
                  >
                    Women
                  </a>
                </li>
                <li>
                  <a
                    href="/#"
                    onClick={() => handleLinkClick("About")}
                    className={`  ${windowWidth < 768 ? "": `${activeLink === "About" ? "activeLink" : ""}`} `}
                  >
                    About
                  </a>
                </li>
                <li>
                  <a
                    href="/#"
                    onClick={() => handleLinkClick("Contact")}
                    className={`  ${windowWidth < 768 ? "": `${activeLink === "Contact" ? "activeLink" : ""}`} `}
                  >
                    Contact
                  </a>
                </li>
              </ul>
            </div>
          </div>
          <div className="bskt-avatar inline-flex flex-row items-center gap-4  md:gap-12 ">
             
            <a className="bskt-cart-icon" href="/#" onClick={openCart}>
              <Image src={iconCart} width={25} height={25} alt="basket" />
            </a>
            
            <a
              href="/#"
              onClick={() => handleLinkClick("Avatar")}
              className={`rounded-full sm:max-w-[200px] ${activeLink === "Avatar" ? "activeAvatar" : ""}`}
            >
              <Image src={avatar} width={50} height={50} alt="avatar"  />
            </a>
          </div>
        </nav>
      </div>
      {isLightboxVisible && (
                <div className=" inset-0  bg-black  bg-opacity-75 flex flex-row z-40 fixed">
                   <div className=" bg-white w-[65%] h-screen pt-4 pl-4">
                   <Image
                   src={close}
                   width={16}
                   height={16}
                   alt="menu"
                   className="object-contain cursor-pointer top-5 left-1 mb-8 "
                   onClick={() => setIsLightboxVisible(false)}
                    />
                     <ul className=" list-none ">
                      <li className="font-bold mb-4"> <a href="/#">Collections</a> </li>
                      <li className="font-bold mb-4"> <a href="/#">Men</a> </li>
                      <li className="font-bold mb-4"><a href="/#">Women</a></li>
                      <li className="font-bold mb-4 "><a href="/#">About</a></li>
                      <li className="font-bold "><a href="/#">Contact</a></li>
                     </ul>
                   </div>
                </div>
              )}
      
      {isCartOpen && (
        <div className="cart-content">
          <CartModal closeCart={closeCart} iconCoordinates={cartIconCoordinates}  />
        </div>
      )}
    </header>
  );
};

export default Header;